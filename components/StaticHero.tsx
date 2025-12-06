import React from 'react';
import { Link } from 'react-router-dom';

const StaticHero: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Hero"
      style={{
        minHeight: '100vh',
      }}
    >
      {/* Background Image - Full bleed cover mode */}
      {/* Mobile: position toward right side to show cleaner ocean area behind text */}
      {/* Desktop: center position */}
      <div
        className="absolute inset-0 hero-bg-image"
        style={{
          backgroundImage: 'url(/images/hero-port-background.jpg?v=14)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
        role="img"
        aria-label="California port and shipping containers representing international trade"
      />

      {/* Content - Positioned to match reference: ~25-30% from top */}
      <div
        className="relative z-10 h-full flex items-start"
        style={{ paddingTop: 'calc(80px + 15vh)' }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-28">
          <div className="max-w-xl lg:max-w-2xl hero-mobile-text-bg">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6"
            style={{
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            California Trade and<br />
            Customs Lawyer<br />
            Import | Export Attorney
          </h1>
          <p
            className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed max-w-md lg:max-w-lg"
            style={{
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              color: 'rgba(255,255,255,0.9)',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            Expert legal counsel for international trade compliance, CBP defense, and customs matters. We step in quickly to protect your shipments and your business.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold transition-all duration-200"
            style={{
              backgroundColor: '#FFFFFF',
              color: 'var(--navy-primary)',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              borderRadius: '9999px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Get Free Consultation
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaticHero;
