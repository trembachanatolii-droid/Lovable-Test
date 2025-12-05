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
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/hero-port-background.jpg?v=11)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
        role="img"
        aria-label="California port and shipping containers representing international trade"
      />

      {/* Content - Positioned below fixed header (5rem = 80px) with additional spacing */}
      <div className="relative z-10 h-full flex items-start pt-[140px] md:pt-[160px] lg:pt-[180px]">
        <div className="ml-6 md:ml-12 lg:ml-20 xl:ml-28 max-w-xl lg:max-w-2xl">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 md:mb-6"
            style={{
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            California Trade and Customs Lawyer
            <br />
            Import | Export Attorney
          </h1>
          <p
            className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed max-w-md lg:max-w-lg"
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
            className="inline-block px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold transition-all duration-200"
            style={{
              backgroundColor: '#FFFFFF',
              color: 'var(--navy-primary)',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
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
    </section>
  );
};

export default StaticHero;
