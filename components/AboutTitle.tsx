import React, { useRef, useMemo, useEffect, useState } from "react";
import { useMotion, prefersReducedMotion } from "./MotionContext";

interface TitleConfig {
  offset: [string, string];
  scale: [number, number];
  opacity: [number, number];
  translate: [string, string];
  rotate: [string, string, string];
}

// Desktop config
const TITLE_CONFIG_DESKTOP: Record<string, TitleConfig> = {
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

// Mobile config - adjusted for visible scroll animations
const TITLE_CONFIG_MOBILE: Record<string, TitleConfig> = {
  "Compliance": {
    offset: ["0.5 0", "1 1"],
    scale: [0.85, 1],
    opacity: [0, 1],
    translate: ["0px 120px", "0px 0px"],
    rotate: ["0deg", "0deg", "0deg"],
  },
  "Trade Strategy": {
    offset: ["0.5 0", "1 1"],
    scale: [0.85, 1],
    opacity: [0, 1],
    translate: ["0px 100px", "0px 0px"],
    rotate: ["0deg", "0deg", "0deg"],
  },
  "+": {
    offset: ["0.3 0", "1 1"],
    scale: [0.85, 1],
    opacity: [0, 1],
    translate: ["0px 80px", "0px 0px"],
    rotate: ["180deg", "180deg", "0deg"],
  },
  "Recovery": {
    offset: ["0.5 0", "1 1"],
    scale: [0.85, 1],
    opacity: [0, 1],
    translate: ["0px 100px", "0px 0px"],
    rotate: ["0deg", "0deg", "0deg"],
  },
  "Customs Defense": {
    offset: ["0.5 0", "1 1"],
    scale: [0.85, 1],
    opacity: [0, 1],
    translate: ["0px 100px", "0px 0px"],
    rotate: ["0deg", "0deg", "0deg"],
  },
  "Global Solutions": {
    offset: ["0.5 0", "1 1"],
    scale: [0.85, 1],
    opacity: [0, 1],
    translate: ["0px 100px", "0px 0px"],
    rotate: ["0deg", "0deg", "0deg"],
  },
};

// Helper to detect mobile
const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

interface AboutTitleProps {
  name: string;
}

// Optimized component that uses shared motion context
function AboutTitle({ name }: AboutTitleProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(isMobileDevice());
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const TITLE_CONFIG = isMobile ? TITLE_CONFIG_MOBILE : TITLE_CONFIG_DESKTOP;
  const config = useMemo(() => TITLE_CONFIG[name] || TITLE_CONFIG["Compliance"], [name, isMobile]);
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Use shared motion context instead of individual lazy loading
  const { motionModule, observeElement } = useMotion();

  // Register element with shared IntersectionObserver
  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return;

    const cleanup = observeElement(ref.current, () => {
      setIsInView(true);
    });

    return cleanup;
  }, [observeElement]);

  // Static render for reduced motion or before animation loads
  if (prefersReducedMotion || !motionModule || !isInView) {
    return (
      <div ref={ref} className="about-title">
        {name}
      </div>
    );
  }

  // Animated version - only renders after framer-motion is loaded and element is in view
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
  });

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
      }}
    >
      {name}
    </m.div>
  );
};

export default AboutTitle;
