import React, { useRef, useMemo, useEffect, useState } from "react";

// Lazy import framer-motion types to avoid loading if not needed
type MotionValue<T> = { get: () => T };

interface TitleConfig {
  offset: [string, string];
  scale: [number, number];
  opacity: [number, number];
  translate: [string, string];
  rotate: [string, string, string];
}

// Static config defined outside component
const TITLE_CONFIG: Record<string, TitleConfig> = {
  "Compliance": {
    offset: ["0.7 0", "1 1"],
    scale: [0.8, 1],
    opacity: [0, 1],
    translate: ["0px 350px", "0px 0px"],
    rotate: ["0deg", "0deg", "0deg"],
  },
  "Trade Strategy": {
    offset: ["0.7 0", "1 1"],
    scale: [0.8, 1],
    opacity: [0.1, 1],
    translate: ["0px 150px", "0px 0px"],
    rotate: ["0deg", "0deg", "0deg"],
  },
  "+": {
    offset: ["0 0", "1 1"],
    scale: [0.8, 1],
    opacity: [0.2, 1],
    translate: ["0px 150px", "0px 0px"],
    rotate: ["180deg", "180deg", "0deg"],
  },
  "Recovery": {
    offset: ["0.7 0", "1 1"],
    scale: [0.8, 1],
    opacity: [0.1, 1],
    translate: ["0px 150px", "0px 0px"],
    rotate: ["0deg", "0deg", "0deg"],
  },
  "Customs Defense": {
    offset: ["0.7 0", "1 1"],
    scale: [0.8, 1],
    opacity: [0.1, 1],
    translate: ["0px 150px", "0px 0px"],
    rotate: ["0deg", "0deg", "0deg"],
  },
  "Global Solutions": {
    offset: ["0.7 0", "1 1"],
    scale: [0.8, 1],
    opacity: [0.1, 1],
    translate: ["0px 150px", "0px 0px"],
    rotate: ["0deg", "0deg", "0deg"],
  },
};

// Check for reduced motion preference once at module level
const prefersReducedMotion = typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

interface AboutTitleProps {
  name: string;
}

// Optimized component that defers animation loading
function AboutTitle({ name }: AboutTitleProps) {
  const config = useMemo(() => TITLE_CONFIG[name] || TITLE_CONFIG["Compliance"], [name]);
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [motionModule, setMotionModule] = useState<typeof import("framer-motion") | null>(null);

  // Only load framer-motion when element is in viewport and user doesn't prefer reduced motion
  useEffect(() => {
    if (prefersReducedMotion) return;

    // Use IntersectionObserver for efficient viewport detection
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px', threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Lazy load framer-motion only when in view
  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    let mounted = true;
    import("framer-motion").then((mod) => {
      if (mounted) setMotionModule(mod);
    });

    return () => { mounted = false; };
  }, [isInView]);

  // Static render for reduced motion or before animation loads
  if (prefersReducedMotion || !motionModule) {
    return (
      <div
        ref={ref}
        className="about-title"
        style={{
          opacity: 1,
          transform: 'none',
          contain: 'layout style paint',
        }}
      >
        {name}
      </div>
    );
  }

  // Animated version - only renders after framer-motion is loaded
  return <AnimatedTitle motionModule={motionModule} config={config} name={name} />;
}

// Separate component for animated version to isolate framer-motion usage
const AnimatedTitle: React.FC<{
  motionModule: typeof import("framer-motion");
  config: TitleConfig;
  name: string;
}> = ({ motionModule, config, name }) => {
  const { m, useScroll, useTransform } = motionModule;
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: config.offset as any,
    // Use layoutEffect: false to prevent forced reflows
    layoutEffect: false,
  });

  // Only use GPU-accelerated properties
  const scale = useTransform(scrollYProgress, [0, 1], config.scale);
  const opacity = useTransform(scrollYProgress, [0, 1], config.opacity);
  const translate = useTransform(scrollYProgress, [0, 1], config.translate);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], config.rotate);

  return (
    <m.div
      ref={ref}
      className="about-title"
      style={{
        scale,
        opacity,
        translate,
        rotate,
        willChange: 'transform, opacity',
        contain: 'layout style paint',
        transformOrigin: 'center center',
        // Prevent layout thrashing
        backfaceVisibility: 'hidden',
        perspective: 1000,
      }}
    >
      {name}
    </m.div>
  );
};

export default AboutTitle;
