import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyPhoneButton from './components/StickyPhoneButton';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import ConnectionStatus from './components/ConnectionStatus';
import { appRoutes } from './routes';

// Loading fallback component with explicit height to prevent CLS
const PageLoader: React.FC = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
      fontSize: '1.125rem',
      color: '#012169'
    }}
    role="status"
    aria-live="polite"
    aria-label="Loading page content"
  >
    <span>Loading...</span>
  </div>
);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* Skip Navigation Link for Accessibility */}
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" role="main" className="flex-grow" tabIndex={-1}>
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {appRoutes.map((route, index) => (
                  <Route
                    key={route.path || `route-${index}`}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
        {/* Sticky Phone Button - Shows on all devices */}
        <StickyPhoneButton showOnMobileOnly={true} />
        {/* Connection Status Monitor - PWA Offline Support */}
        <ConnectionStatus />
      </div>
    </ErrorBoundary>
  );
};

export default App;
