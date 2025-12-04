import React, { useEffect, useRef, useState, memo } from 'react';

const easeOutQuad = (t: number) => t * (2 - t);

const StatCard: React.FC<{
target: number;
suffix?: string;
label: string;
isSpecial?: boolean;
}> = ({ target, suffix = '', label, isSpecial = false }) => {
const ref = useRef<HTMLSpanElement>(null);
const [inView, setInView] = useState(false);
const [currentValue, setCurrentValue] = useState(0);

useEffect(() => {
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion || !('IntersectionObserver' in window)) {
if (ref.current) {
setCurrentValue(target);
}
return;
}

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setInView(true);
      observer.disconnect();
    }
  },
  {
    threshold: 0.5,
  }
);

const currentRef = ref.current;
if (currentRef) {
  observer.observe(currentRef);
}

return () => {
  if(currentRef) {
    observer.unobserve(currentRef);
  }
}
}, [target]);

useEffect(() => {
if (inView && ref.current) {
let frame: number;
const duration = 1500;
const start = performance.now();

const countUp = (now: number) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuad(progress);
    const val = Math.floor(easedProgress * target);
    setCurrentValue(val);
    
    if (progress < 1) {
      frame = requestAnimationFrame(countUp);
    } else {
      setCurrentValue(target);
    }
  };

  frame = requestAnimationFrame(countUp);
  return () => cancelAnimationFrame(frame);
}
return undefined;
}, [inView, target]);

const displayValue = isSpecial ? `${currentValue}${suffix}` : `${currentValue}${suffix}`;

return (
<div className="bg-white rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.08)] p-6 md:p-8 text-center">
<span
ref={ref}
className="stat-value text-4xl md:text-5xl font-bold text-primary-navy block"
>
{displayValue}
</span>
<p className="text-neutral-darkGray text-base md:text-lg mt-2">{label}</p>
</div>
);
};

const StatsSection: React.FC = () => {
return (
<section aria-label="Key firm statistics" className="relative w-full bg-soft-teal overflow-hidden">
{/* Top-left dot pattern */}
<div
className="absolute top-0 left-0 w-48 h-48 lg:w-64 lg:h-64"
style={{
backgroundImage: 'radial-gradient(white 2px, transparent 2px)',
backgroundSize: '20px 20px',
clipPath: 'polygon(0 0, 100% 0, 0 100%)',
backgroundPosition: 'top left',
}}
aria-hidden="true"
/>

{/* Top-right dot pattern */}
    <div
        className="absolute top-0 right-0 w-48 h-48 lg:w-64 lg:h-64"
        style={{
        backgroundImage: 'radial-gradient(white 2px, transparent 2px)',
        backgroundSize: '20px 20px',
        clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
        backgroundPosition: 'top right',
        }}
        aria-hidden="true"
    />
    
    {/* Bottom-left dot pattern */}
    <div
        className="absolute bottom-0 left-0 w-48 h-48 lg:w-64 lg:h-64"
        style={{
        backgroundImage: 'radial-gradient(white 2px, transparent 2px)',
        backgroundSize: '20px 20px',
        clipPath: 'polygon(0 100%, 100% 100%, 0 0)',
        backgroundPosition: 'bottom left',
        }}
        aria-hidden="true"
    />

    {/* Bottom-right dot pattern */}
    <div
        className="absolute bottom-0 right-0 w-48 h-48 lg:w-64 lg:h-64"
        style={{
        backgroundImage: 'radial-gradient(white 2px, transparent 2px)',
        backgroundSize: '20px 20px',
        clipPath: 'polygon(100% 100%, 100% 0, 0 100%)',
        backgroundPosition: 'bottom right',
        }}
        aria-hidden="true"
    />

    <div className="relative z-10 max-w-7xl mx-auto px-5 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <StatCard target={100} suffix="%" label="Personal attention to every case" />
            <StatCard target={0} label="Free initial consultation" />
            <StatCard target={24} suffix="/7" label="Availability" isSpecial={true} />
        </div>
    </div>
</section>
);
};

export default memo(StatsSection);