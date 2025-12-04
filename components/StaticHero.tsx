import React from 'react';
import { Link } from 'react-router-dom';

const StaticHero: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      aria-label="Hero"
      style={{ marginBottom: '-80px' }}
    >
      {/* Background Image - Full width, no zoom */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/hero-port-background.jpg?v=3)',
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Semi-transparent white overlay - Left Side (like Holland & Knight) */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[65%] md:w-[55%]"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="ml-6 md:ml-12 lg:ml-20 max-w-lg">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-garamond text-primary-navy leading-tight mb-5">
            California Trade and Customs Lawyer
            <br />
            Import | Export Attorney
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
            Expert legal counsel for international trade compliance, CBP defense, and customs matters. We step in quickly to protect your shipments and your business.
          </p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-block px-6 py-3 text-sm md:text-base font-semibold text-white bg-[#0C7B7D] hover:bg-[#096668] transition-colors duration-200"
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
