import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { initWebVitals } from './utils/webVitals';

// Defer framer-motion loading until after initial render to reduce critical path
const FramerMotionWrapper = lazy(() =>
  import('framer-motion').then((mod) => ({
    default: ({ children }: { children: React.ReactNode }) => (
      <mod.LazyMotion features={mod.domAnimation} strict>
        {children}
      </mod.LazyMotion>
    ),
  }))
);

// Component that defers framer-motion loading
const DeferredMotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [shouldLoadMotion, setShouldLoadMotion] = useState(false);

  useEffect(() => {
    // Use requestIdleCallback to load framer-motion during idle time
    // This prevents blocking the main thread during critical rendering
    // Fallback to setTimeout for browsers that don't support requestIdleCallback
    const scheduleMotionLoad = () => {
      if ('requestIdleCallback' in window) {
        const idleCallbackId = requestIdleCallback(
          () => setShouldLoadMotion(true),
          { timeout: 2000 } // Fallback timeout to ensure it loads eventually
        );
        return () => cancelIdleCallback(idleCallbackId);
      } else {
        // Fallback: defer with longer timeout to let critical rendering complete
        const timer = setTimeout(() => setShouldLoadMotion(true), 100);
        return () => clearTimeout(timer);
      }
    };

    const cleanup = scheduleMotionLoad();
    return cleanup;
  }, []);

  if (!shouldLoadMotion) {
    // Render without framer-motion initially for faster first paint
    return <>{children}</>;
  }

  return (
    <Suspense fallback={children}>
      <FramerMotionWrapper>{children}</FramerMotionWrapper>
    </Suspense>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DeferredMotionProvider>
        <App />
      </DeferredMotionProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Register Service Worker for PWA support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        if (import.meta.env.DEV) {
          console.log('Service Worker registered successfully:', registration.scope);
        }

        // Check for updates periodically
        setInterval(() => {
          registration.update();
        }, 60000); // Check every minute

        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New service worker available, show update notification
                if (import.meta.env.DEV) {
                  console.log('New service worker available! Refresh to update.');
                }

                // Optionally auto-update after user confirmation
                if (confirm('A new version is available! Refresh to update?')) {
                  newWorker.postMessage({ type: 'SKIP_WAITING' });
                  window.location.reload();
                }
              }
            });
          }
        });
      })
      .catch((error) => {
        if (import.meta.env.DEV) {
          console.error('Service Worker registration failed:', error);
        }
      });

    // Handle service worker controller change
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (import.meta.env.DEV) {
        console.log('Service Worker controller changed, reloading page...');
      }
      window.location.reload();
    });
  });
}

// Initialize Web Vitals monitoring
// Use requestIdleCallback to avoid blocking critical rendering path
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    initWebVitals((metric) => {
      // Optional: Custom callback for each metric
      // Can be used to send metrics to custom analytics endpoint
      if (import.meta.env.PROD) {
        // Example: Send to analytics service
        // sendToAnalytics(metric);
      }
    });
  });
} else {
  // Fallback for browsers without requestIdleCallback
  setTimeout(() => {
    initWebVitals();
  }, 1000);
}
