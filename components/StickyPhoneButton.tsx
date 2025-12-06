import React, { useState, useEffect, memo } from 'react';

interface StickyPhoneButtonProps {
  showOnMobileOnly?: boolean;
}

const StickyPhoneButton: React.FC<StickyPhoneButtonProps> = ({ showOnMobileOnly: _showOnMobileOnly = true }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after user scrolls down 300px
      const shouldShow = window.scrollY > 300;
      setIsVisible(shouldShow);
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="tel:+13107441328"
      aria-label="Call us at (310) 744-1328"
      className={`flex fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
      }`}
      style={{
        boxShadow: '0 4px 12px rgba(1, 33, 105, 0.3), 0 2px 6px rgba(0, 0, 0, 0.15)'
      }}
    >
      <div
        className="group flex items-center gap-3 bg-primary-navy text-white px-5 py-4 rounded-full hover:bg-secondary-teal transition-all duration-200 cursor-pointer"
        style={{
          minHeight: '56px',
          minWidth: '56px'
        }}
      >
        {/* Phone Icon */}
        <div className="flex-shrink-0 w-6 h-6 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6 group-hover:animate-pulse"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <span className="sr-only">Phone icon</span>
        </div>

        {/* Text (hidden on smaller mobile, shown on larger mobile) */}
        <div className="hidden xs:block text-left whitespace-nowrap">
          <div className="text-sm uppercase tracking-wider opacity-90">Call Now</div>
          <div className="font-bold text-base">(310) 744-1328</div>
        </div>
      </div>
    </a>
  );
};

export default memo(StickyPhoneButton);
