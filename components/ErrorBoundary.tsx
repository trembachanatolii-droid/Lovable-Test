import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
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
}

export default function ErrorBoundary({ children, fallback }: Props) {
  return (
    <ReactErrorBoundary
      FallbackComponent={fallback ? () => <>{fallback}</> : ErrorFallback}
      onReset={() => {
        // Reset application state here if needed
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
