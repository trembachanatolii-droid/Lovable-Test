import React, { createContext, useContext, useEffect, useState, useRef } from "react";

// Type for framer-motion module
type MotionModule = typeof import("framer-motion");

// Context for sharing framer-motion module and intersection observer
interface MotionContextValue {
  motionModule: MotionModule | null;
  isLoaded: boolean;
  observeElement: (element: HTMLElement, callback: () => void) => () => void;
}

const MotionContext = createContext<MotionContextValue | null>(null);

// Check for reduced motion preference once at module level
const prefersReducedMotion = typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [motionModule, setMotionModule] = useState<MotionModule | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const callbacksRef = useRef<Map<HTMLElement, () => void>>(new Map());

  // Create a single shared IntersectionObserver for all instances
  useEffect(() => {
    if (prefersReducedMotion) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const callback = callbacksRef.current.get(entry.target as HTMLElement);
            if (callback) {
              callback();
              // Clean up after triggering
              observerRef.current?.unobserve(entry.target);
              callbacksRef.current.delete(entry.target as HTMLElement);
            }
          }
        });
      },
      { rootMargin: '100px', threshold: 0 }
    );

    return () => {
      observerRef.current?.disconnect();
      callbacksRef.current.clear();
    };
  }, []);

  // Function to observe an element with a callback
  const observeElement = (element: HTMLElement, callback: () => void) => {
    if (!observerRef.current || prefersReducedMotion) return () => {};

    callbacksRef.current.set(element, callback);
    observerRef.current.observe(element);

    // Return cleanup function
    return () => {
      observerRef.current?.unobserve(element);
      callbacksRef.current.delete(element);
    };
  };

  // Load framer-motion once when the first element is in view
  useEffect(() => {
    if (prefersReducedMotion || isLoaded || motionModule) return;

    // Check if any element is being observed, indicating we should load
    // We'll load on mount to be ready when elements come into view
    let mounted = true;

    // Small delay to avoid blocking initial render
    const timer = setTimeout(() => {
      import("framer-motion").then((mod) => {
        if (mounted) {
          setMotionModule(mod);
          setIsLoaded(true);
        }
      });
    }, 100);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [isLoaded, motionModule]);

  const value: MotionContextValue = {
    motionModule,
    isLoaded,
    observeElement,
  };

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
};

// Custom hook to use the motion context
export const useMotion = () => {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error("useMotion must be used within a MotionProvider");
  }
  return context;
};

// Export for checking reduced motion preference
export { prefersReducedMotion };
