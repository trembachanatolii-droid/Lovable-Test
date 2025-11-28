import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

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
    // Load framer-motion after initial render
    const timer = setTimeout(() => setShouldLoadMotion(true), 0);
    return () => clearTimeout(timer);
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
    <DeferredMotionProvider>
      <App />
    </DeferredMotionProvider>
  </React.StrictMode>
);
