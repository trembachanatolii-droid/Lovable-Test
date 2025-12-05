import React from 'react';
import { Link } from 'react-router-dom';

const StaticHero: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      aria-label="Hero"
      style={{ marginBottom: '-80px' }}
    >
      {/* Background Image - Original sizing restored */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/hero-port-background.jpg?v=7)',
          backgroundPosition: 'center top',
          backgroundSize: '120% auto',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          backgroundColor: '#87CEEB',
        }}
      />

      {/* White gradient overlay - Holland & Knight style: white on left, transparent on right */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to right,
            rgba(255,255,255,0.98) 0%,
            rgba(255,255,255,0.95) 25%,
            rgba(255,255,255,0.85) 40%,
            rgba(255,255,255,0.6) 55%,
            rgba(255,255,255,0.3) 70%,
            rgba(255,255,255,0) 85%
          )`,
        }}
      />

      {/* Content - Positioned in upper-middle third like Holland & Knight */}
      <div className="relative z-10 h-full flex items-start pt-[28vh] md:pt-[30vh] lg:pt-[32vh]">
        <div className="ml-8 md:ml-16 lg:ml-24 xl:ml-32 max-w-xl lg:max-w-2xl">
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold leading-tight mb-6"
            style={{
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              color: '#012169',
              letterSpacing: '-0.01em',
            }}
          >
            California Trade and Customs Lawyer
            <br />
            Import | Export Attorney
          </h1>
          <p
            className="text-base md:text-lg mb-8 leading-relaxed max-w-lg"
            style={{
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              color: '#4a5568',
            }}
          >
            Expert legal counsel for international trade compliance, CBP defense, and customs matters. We step in quickly to protect your shipments and your business.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-base md:text-lg font-semibold text-white transition-colors duration-200"
            style={{
              backgroundColor: '#2D8469',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#236b55')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2D8469')}
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StaticHero;
