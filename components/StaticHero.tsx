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

      {/* White gradient overlay from center to left - like Holland & Knight */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[65%] md:w-[60%] lg:w-[55%]"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 40%, rgba(255,255,255,0.85) 70%, rgba(255,255,255,0) 100%)',
        }}
      />

      {/* Content - Positioned like Holland & Knight */}
      <div className="relative z-10 h-full flex items-center">
        <div className="ml-8 md:ml-12 lg:ml-16 xl:ml-24 max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-garamond text-primary-navy leading-tight mb-6">
            California Trade and Customs Lawyer
            <br />
            <span className="text-secondary-teal">Import | Export Attorney</span>
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
