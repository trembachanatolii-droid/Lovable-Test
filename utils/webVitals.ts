/**
 * Web Vitals Monitoring
 * Tracks Core Web Vitals using native PerformanceObserver API
 *
 * Metrics tracked:
 * - LCP (Largest Contentful Paint): Measures loading performance
 * - FID (First Input Delay): Measures interactivity
 * - CLS (Cumulative Layout Shift): Measures visual stability
 * - FCP (First Contentful Paint): Measures perceived load speed
 * - TTFB (Time to First Byte): Measures server responsiveness
 * - INP (Interaction to Next Paint): Measures overall responsiveness
 */

interface WebVitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
  id?: string;
}

type MetricCallback = (metric: WebVitalMetric) => void;

// Thresholds based on web.dev recommendations
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 },
  INP: { good: 200, poor: 500 },
};

/**
 * Determine rating based on metric value and thresholds
 */
function getRating(
  metricName: keyof typeof THRESHOLDS,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[metricName];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Log metric to console with color coding
 */
function logMetric(metric: WebVitalMetric): void {
  const emoji = {
    good: '✅',
    'needs-improvement': '⚠️',
    poor: '❌',
  }[metric.rating];

  const color = {
    good: 'color: green',
    'needs-improvement': 'color: orange',
    poor: 'color: red',
  }[metric.rating];

  console.log(
    `%c${emoji} ${metric.name}: ${metric.value.toFixed(2)}ms (${metric.rating})`,
    color
  );
}

/**
 * Send metric to analytics endpoint
 * In production, replace this with your analytics service (Google Analytics, etc.)
 */
function sendToAnalytics(metric: WebVitalMetric): void {
  if (import.meta.env.PROD) {
    // Example: Send to Google Analytics 4
    // if (window.gtag) {
    //   window.gtag('event', metric.name, {
    //     value: Math.round(metric.value),
    //     metric_id: metric.id,
    //     metric_value: metric.value,
    //     metric_delta: metric.delta,
    //     metric_rating: metric.rating,
    //   });
    // }

    // Example: Send to custom analytics endpoint
    // navigator.sendBeacon('/analytics', JSON.stringify(metric));
  }
}

/**
 * Handle metric reporting
 */
function reportMetric(metric: WebVitalMetric, callback?: MetricCallback): void {
  logMetric(metric);
  sendToAnalytics(metric);
  callback?.(metric);
}

/**
 * Track Largest Contentful Paint (LCP)
 * Measures loading performance - when the largest content element becomes visible
 */
function observeLCP(callback?: MetricCallback): void {
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & {
        renderTime?: number;
        loadTime?: number;
      };

      // Use renderTime if available, otherwise use loadTime
      const value = lastEntry.renderTime || lastEntry.loadTime || 0;

      const metric: WebVitalMetric = {
        name: 'LCP',
        value,
        rating: getRating('LCP', value),
        id: lastEntry.entryType,
      };

      reportMetric(metric, callback);
    });

    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (error) {
    console.warn('LCP observation not supported:', error);
  }
}

/**
 * Track First Input Delay (FID)
 * Measures interactivity - time from user's first interaction to browser response
 */
function observeFID(callback?: MetricCallback): void {
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fidEntry = entry as PerformanceEventTiming;
        const value = fidEntry.processingStart - fidEntry.startTime;

        const metric: WebVitalMetric = {
          name: 'FID',
          value,
          rating: getRating('FID', value),
          id: entry.entryType,
        };

        reportMetric(metric, callback);
      });
    });

    observer.observe({ type: 'first-input', buffered: true });
  } catch (error) {
    console.warn('FID observation not supported:', error);
  }
}

/**
 * Track Interaction to Next Paint (INP)
 * Measures overall responsiveness - latency of all user interactions
 */
function observeINP(callback?: MetricCallback): void {
  try {
    let worstInteraction = 0;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries() as PerformanceEventTiming[];

      entries.forEach((entry) => {
        // Calculate interaction latency
        const duration = entry.processingEnd - entry.startTime;

        if (duration > worstInteraction) {
          worstInteraction = duration;

          const metric: WebVitalMetric = {
            name: 'INP',
            value: duration,
            rating: getRating('INP', duration),
            id: entry.entryType,
          };

          reportMetric(metric, callback);
        }
      });
    });

    observer.observe({ type: 'event', buffered: true, durationThreshold: 16 });
  } catch (error) {
    console.warn('INP observation not supported:', error);
  }
}

/**
 * Track Cumulative Layout Shift (CLS)
 * Measures visual stability - sum of all unexpected layout shifts
 */
function observeCLS(callback?: MetricCallback): void {
  try {
    let clsValue = 0;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();

      entries.forEach((entry) => {
        const layoutShiftEntry = entry as PerformanceEntry & {
          hadRecentInput?: boolean;
          value?: number;
        };

        // Only count layout shifts that weren't caused by user interaction
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value || 0;

          const metric: WebVitalMetric = {
            name: 'CLS',
            value: clsValue,
            rating: getRating('CLS', clsValue),
            delta: layoutShiftEntry.value,
            id: entry.entryType,
          };

          reportMetric(metric, callback);
        }
      });
    });

    observer.observe({ type: 'layout-shift', buffered: true });
  } catch (error) {
    console.warn('CLS observation not supported:', error);
  }
}

/**
 * Track First Contentful Paint (FCP)
 * Measures perceived load speed - when first content becomes visible
 */
function observeFCP(callback?: MetricCallback): void {
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();

      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          const metric: WebVitalMetric = {
            name: 'FCP',
            value: entry.startTime,
            rating: getRating('FCP', entry.startTime),
            id: entry.entryType,
          };

          reportMetric(metric, callback);
          observer.disconnect();
        }
      });
    });

    observer.observe({ type: 'paint', buffered: true });
  } catch (error) {
    console.warn('FCP observation not supported:', error);
  }
}

/**
 * Track Time to First Byte (TTFB)
 * Measures server responsiveness - time from navigation to first byte received
 */
function observeTTFB(callback?: MetricCallback): void {
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();

      entries.forEach((entry) => {
        const navigationEntry = entry as PerformanceNavigationTiming;
        const value = navigationEntry.responseStart - navigationEntry.requestStart;

        const metric: WebVitalMetric = {
          name: 'TTFB',
          value,
          rating: getRating('TTFB', value),
          id: entry.entryType,
        };

        reportMetric(metric, callback);
        observer.disconnect();
      });
    });

    observer.observe({ type: 'navigation', buffered: true });
  } catch (error) {
    console.warn('TTFB observation not supported:', error);
  }
}

/**
 * Report all page load metrics on visibility change (when user leaves page)
 */
function reportOnVisibilityChange(): void {
  const reportAllMetrics = () => {
    if (document.visibilityState === 'hidden') {
      // Get navigation timing data
      const navTiming = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;

      if (navTiming) {
        console.log('📊 Page Load Summary:', {
          'DNS Lookup': `${(navTiming.domainLookupEnd - navTiming.domainLookupStart).toFixed(2)}ms`,
          'TCP Connection': `${(navTiming.connectEnd - navTiming.connectStart).toFixed(2)}ms`,
          'Request Time': `${(navTiming.responseStart - navTiming.requestStart).toFixed(2)}ms`,
          'Response Time': `${(navTiming.responseEnd - navTiming.responseStart).toFixed(2)}ms`,
          'DOM Processing': `${(navTiming.domComplete - navTiming.domInteractive).toFixed(2)}ms`,
          'Load Complete': `${(navTiming.loadEventEnd - navTiming.loadEventStart).toFixed(2)}ms`,
        });
      }
    }
  };

  document.addEventListener('visibilitychange', reportAllMetrics, { once: true });
}

/**
 * Initialize Web Vitals monitoring
 * Sets up observers for all Core Web Vitals metrics
 */
export function initWebVitals(callback?: MetricCallback): void {
  // Check if Performance API is supported
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    console.warn('Web Vitals monitoring not supported in this browser');
    return;
  }

  console.log('🚀 Initializing Web Vitals monitoring...');

  // Observe all Core Web Vitals
  observeLCP(callback);
  observeFID(callback);
  observeINP(callback);
  observeCLS(callback);
  observeFCP(callback);
  observeTTFB(callback);

  // Report summary on page unload
  reportOnVisibilityChange();

  console.log('✅ Web Vitals monitoring initialized');
}

/**
 * Get current performance metrics snapshot
 */
export function getPerformanceSnapshot(): Record<string, number> {
  const navTiming = performance.getEntriesByType(
    'navigation'
  )[0] as PerformanceNavigationTiming;

  if (!navTiming) return {};

  return {
    dnsLookup: navTiming.domainLookupEnd - navTiming.domainLookupStart,
    tcpConnection: navTiming.connectEnd - navTiming.connectStart,
    requestTime: navTiming.responseStart - navTiming.requestStart,
    responseTime: navTiming.responseEnd - navTiming.responseStart,
    domProcessing: navTiming.domComplete - navTiming.domInteractive,
    loadComplete: navTiming.loadEventEnd - navTiming.loadEventStart,
    totalLoadTime: navTiming.loadEventEnd - navTiming.fetchStart,
  };
}

export default initWebVitals;
