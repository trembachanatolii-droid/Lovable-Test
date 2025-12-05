import React from 'react';
import { Link } from 'react-router-dom';

const StaticHero: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      aria-label="Hero"
      style={{ marginBottom: '-80px' }}
    >
      {/* Background Image - Fixed position to prevent scroll issues */}
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

      {/* White gradient overlay - starts from center, fades to left with slight image visibility */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[70%] md:w-[65%] lg:w-[60%]"
        style={{
          background: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 50%, rgba(255,255,255,0.9) 80%, rgba(255,255,255,0.7) 100%)',
        }}
      />

      {/* Content - Positioned like Holland & Knight with proper margins */}
      <div className="relative z-10 h-full flex items-center">
        <div className="ml-12 md:ml-16 lg:ml-24 xl:ml-32 max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-garamond text-primary-navy leading-tight mb-6">
            California Trade and Customs Lawyer
            <br />
            Import | Export Attorney
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
            Expert legal counsel for international trade compliance, CBP defense, and customs matters. We step in quickly to protect your shipments and your business.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 text-base md:text-lg font-semibold text-white bg-secondary-forestGreen hover:bg-[#236b55] transition-colors duration-200 shadow-lg"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StaticHero;
