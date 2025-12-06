import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { initWebVitals } from './utils/webVitals';
import { initErrorTracking } from './utils/errorTracking';

// Initialize error tracking as early as possible
initErrorTracking();

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

                // Show non-intrusive update banner instead of confirm dialog
                const updateBanner = document.createElement('div');
                updateBanner.id = 'sw-update-banner';
                updateBanner.style.cssText = `
                  position: fixed;
                  bottom: 20px;
                  left: 50%;
                  transform: translateX(-50%);
                  background: linear-gradient(135deg, #012169 0%, #1E40AF 100%);
                  color: white;
                  padding: 16px 24px;
                  border-radius: 12px;
                  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                  z-index: 10000;
                  display: flex;
                  align-items: center;
                  gap: 16px;
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                  max-width: 90%;
                  animation: slideUp 0.3s ease-out;
                `;
                updateBanner.innerHTML = `
                  <style>
                    @keyframes slideUp {
                      from { transform: translateX(-50%) translateY(100px); opacity: 0; }
                      to { transform: translateX(-50%) translateY(0); opacity: 1; }
                    }
                    #sw-update-banner button {
                      padding: 8px 20px;
                      border-radius: 6px;
                      font-weight: 600;
                      cursor: pointer;
                      transition: all 0.2s;
                      border: none;
                      font-size: 14px;
                    }
                    #sw-update-btn {
                      background: #2A9D7C;
                      color: white;
                    }
                    #sw-update-btn:hover {
                      background: #237A62;
                    }
                    #sw-dismiss-btn {
                      background: transparent;
                      color: rgba(255,255,255,0.8);
                      border: 1px solid rgba(255,255,255,0.3) !important;
                    }
                    #sw-dismiss-btn:hover {
                      background: rgba(255,255,255,0.1);
                      color: white;
                    }
                  </style>
                  <span style="font-size: 15px;">A new version is available!</span>
                  <button id="sw-update-btn">Update Now</button>
                  <button id="sw-dismiss-btn">Later</button>
                `;
                document.body.appendChild(updateBanner);

                document.getElementById('sw-update-btn')?.addEventListener('click', () => {
                  newWorker.postMessage({ type: 'SKIP_WAITING' });
                  window.location.reload();
                });

                document.getElementById('sw-dismiss-btn')?.addEventListener('click', () => {
                  updateBanner.remove();
                });
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
    initWebVitals((_metric) => {
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
