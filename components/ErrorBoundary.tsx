import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { captureException, addBreadcrumb } from '../utils/errorTracking';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  // Log error details in development
  if (import.meta.env.DEV) {
    console.error('[ErrorBoundary] Caught error:', error);
  }

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="min-h-[400px] flex items-center justify-center bg-gray-50"
    >
      <div className="text-center px-6 py-12 max-w-md">
        <h2 className="text-2xl font-bold text-primary-navy mb-4">
          Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">
          We apologize for the inconvenience. Please try refreshing the page.
        </p>
        {import.meta.env.DEV && (
          <details className="text-left mb-6 p-4 bg-gray-100 rounded-lg">
            <summary className="cursor-pointer text-sm font-medium text-gray-700">
              Error Details (Development Only)
            </summary>
            <pre className="mt-2 text-xs overflow-auto whitespace-pre-wrap text-red-600">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
        <button
          onClick={resetErrorBoundary}
          className="inline-flex items-center justify-center px-6 py-3 bg-secondary-teal text-white font-semibold rounded-lg hover:bg-teal-forest transition-colors focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-secondary-teal min-h-[44px]"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  componentName?: string;
}

export default function ErrorBoundary({ children, fallback, componentName = 'Unknown' }: Props) {
  const handleError = (error: Error, info: React.ErrorInfo) => {
    // Capture the error with context
    captureException(error, {
      component: componentName,
      extra: {
        componentStack: info.componentStack,
      },
    });

    // Add breadcrumb for debugging
    addBreadcrumb({
      category: 'error-boundary',
      message: `Error caught in ${componentName}`,
      level: 'error',
      data: {
        errorMessage: error.message,
      },
    });
  };

  return (
    <ReactErrorBoundary
      FallbackComponent={fallback ? () => <>{fallback}</> : ErrorFallback}
      onError={handleError}
      onReset={() => {
        // Add breadcrumb for reset action
        addBreadcrumb({
          category: 'error-boundary',
          message: 'Error boundary reset triggered',
          level: 'info',
        });
        // Reset application state by reloading the page for a fresh start
        window.location.reload();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
