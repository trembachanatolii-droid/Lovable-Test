/**
 * Error Tracking Utility
 *
 * Provides a consistent error reporting interface that logs errors to console
 * in development and can be connected to Sentry or other error tracking services
 * in production.
 *
 * To enable Sentry in production:
 * 1. npm install @sentry/react
 * 2. Set VITE_SENTRY_DSN in your environment
 * 3. Uncomment the Sentry initialization code below
 */

import React from 'react';

interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  extra?: Record<string, unknown>;
}

interface BreadcrumbData {
  category: string;
  message: string;
  level?: 'debug' | 'info' | 'warning' | 'error';
  data?: Record<string, unknown>;
}

// Error tracking state
let isInitialized = false;

// Store breadcrumbs for debugging (limited to last 50)
const breadcrumbs: BreadcrumbData[] = [];
const MAX_BREADCRUMBS = 50;

// Store recent errors for debugging
const recentErrors: Array<{ error: Error; context?: ErrorContext; timestamp: string }> = [];
const MAX_ERRORS = 20;

/**
 * Initialize error tracking
 * Call this once at app startup (e.g., in main.tsx)
 */
export function initErrorTracking(): void {
  if (isInitialized) return;

  // Set up global error handlers
  window.addEventListener('error', (event) => {
    captureException(event.error || new Error(event.message), {
      component: 'window',
      action: 'unhandled-error',
      extra: {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      },
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    const error = event.reason instanceof Error
      ? event.reason
      : new Error(String(event.reason));
    captureException(error, {
      component: 'window',
      action: 'unhandled-rejection',
    });
  });

  isInitialized = true;

  if (import.meta.env.DEV) {
    console.log('[ErrorTracking] Initialized in development mode');
    console.log('[ErrorTracking] Errors will be logged to console');

    // Expose debugging functions in development
    (window as unknown as Record<string, unknown>).__errorTracking = {
      getRecentErrors: () => [...recentErrors],
      getBreadcrumbs: () => [...breadcrumbs],
      clearErrors: () => { recentErrors.length = 0; },
      clearBreadcrumbs: () => { breadcrumbs.length = 0; },
    };
    console.log('[ErrorTracking] Debug functions available at window.__errorTracking');
  }

  // For production Sentry integration, uncomment and configure:
  /*
  const dsn = import.meta.env.VITE_SENTRY_DSN;
  if (dsn && import.meta.env.PROD) {
    // Dynamically import Sentry
    import('@sentry/react').then((Sentry) => {
      Sentry.init({
        dsn,
        environment: import.meta.env.MODE,
        tracesSampleRate: 0.1,
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
      });
      console.log('[ErrorTracking] Sentry initialized');
    }).catch((err) => {
      console.warn('[ErrorTracking] Failed to load Sentry:', err);
    });
  }
  */
}

/**
 * Capture an exception with optional context
 */
export function captureException(error: Error, context?: ErrorContext): void {
  const errorData = {
    error,
    context,
    timestamp: new Date().toISOString(),
  };

  // Store for debugging
  recentErrors.push(errorData);
  if (recentErrors.length > MAX_ERRORS) {
    recentErrors.shift();
  }

  if (import.meta.env.DEV) {
    console.error('[ErrorTracking] Exception captured:', {
      message: error.message,
      stack: error.stack,
      ...context,
    });
    return;
  }

  // In production, you would send to your error tracking service here
  // For example, with Sentry:
  // Sentry.captureException(error, { tags: context, extra: context?.extra });
}

/**
 * Capture a message (non-exception event)
 */
export function captureMessage(
  message: string,
  level: 'debug' | 'info' | 'warning' | 'error' = 'info',
  context?: ErrorContext
): void {
  if (import.meta.env.DEV) {
    const logFn = level === 'error' ? console.error : level === 'warning' ? console.warn : console.log;
    logFn(`[ErrorTracking] ${level.toUpperCase()}: ${message}`, context);
    return;
  }

  // In production, send to error tracking service
}

/**
 * Add a breadcrumb for debugging
 */
export function addBreadcrumb(data: BreadcrumbData): void {
  breadcrumbs.push({
    ...data,
    level: data.level || 'info',
  });

  if (breadcrumbs.length > MAX_BREADCRUMBS) {
    breadcrumbs.shift();
  }

  if (import.meta.env.DEV) {
    console.log(`[ErrorTracking] Breadcrumb: [${data.category}] ${data.message}`, data.data);
  }
}

/**
 * Set user context for error tracking
 */
export function setUser(userId: string | null, email?: string, username?: string): void {
  if (import.meta.env.DEV) {
    console.log('[ErrorTracking] User set:', { userId, email, username });
  }
}

/**
 * Set custom tags for all future events
 */
export function setTag(key: string, value: string): void {
  if (import.meta.env.DEV) {
    console.log(`[ErrorTracking] Tag set: ${key}=${value}`);
  }
}

/**
 * Create a wrapper for async functions that captures errors
 */
export function withErrorTracking<T extends (...args: unknown[]) => Promise<unknown>>(
  fn: T,
  context?: ErrorContext
): T {
  return (async (...args: Parameters<T>) => {
    try {
      return await fn(...args);
    } catch (error) {
      captureException(error instanceof Error ? error : new Error(String(error)), context);
      throw error;
    }
  }) as T;
}

/**
 * React Error Boundary fallback props type
 */
export interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

/**
 * Default error fallback component
 */
export function DefaultErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps): React.ReactElement {
  return (
    <div
      role="alert"
      style={{
        padding: '2rem',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '2rem auto',
      }}
    >
      <h2 style={{ color: '#012169', marginBottom: '1rem' }}>Something went wrong</h2>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        We apologize for the inconvenience. Please try refreshing the page.
      </p>
      {import.meta.env.DEV && (
        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            borderRadius: '4px',
            textAlign: 'left',
            overflow: 'auto',
            fontSize: '0.875rem',
          }}
        >
          {error.message}
        </pre>
      )}
      <button
        onClick={resetErrorBoundary}
        style={{
          backgroundColor: '#012169',
          color: 'white',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '1rem',
        }}
      >
        Try Again
      </button>
    </div>
  );
}
