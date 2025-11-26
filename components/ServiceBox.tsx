import React, { memo } from 'react';

interface ServiceBoxProps {
title: string;
isActive: boolean;
isPlaying: boolean;
isTaller?: boolean;
onClick: () => void;
}

const ServiceBox: React.FC<ServiceBoxProps> = memo(({ title, isActive, isPlaying, isTaller = false, onClick }) => {
const desktopHeightClasses = isTaller ? 'lg:h-[109px]' : 'lg:h-[98px]';
// Mobile touch target minimum 44px for WCAG 2.5.5 compliance
const mobileHeightClasses = 'h-11 min-h-[44px]';

return (
<button
onClick={onClick}
aria-label={`Select ${title} service`}
aria-pressed={isActive}
className={`
relative flex flex-1 flex-col justify-center text-left transition-all duration-300 ease-in-out

      /* --- Mobile Styles --- */
      ${mobileHeightClasses}
      border-r border-white/20

      /* --- Desktop Styles --- */
      lg:flex-none lg:w-48 lg:p-5 lg:border-r-0 lg:rounded-xl lg:shadow-lg lg:border-2
      lg:transform lg:hover:scale-105 lg:hover:shadow-2xl
      ${desktopHeightClasses}
      ${isActive ? 'lg:border-secondary-teal bg-black/20 lg:bg-white' : 'lg:border-neutral-lightGray bg-transparent lg:bg-white'}
      ${isTaller ? 'lg:animate-pulse-glow rounded-xl' : ''}
    `}
  >
    <h3 className="hidden lg:block font-semibold text-primary-navy flex-grow">{title}</h3>
    <div className="w-full h-1.5 bg-white/30 lg:bg-neutral-lightGray rounded-full lg:mt-auto overflow-hidden">
       {isActive && (
         <div
           key={title} 
           className="h-full bg-secondary-teal rounded-full animate-progress-bar"
           style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
         ></div>
      )}
    </div>
  </button>
);
});

ServiceBox.displayName = 'ServiceBox';

export default ServiceBox;