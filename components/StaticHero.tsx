import React from 'react';
import { Link } from 'react-router-dom';

const StaticHero: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      aria-label="Hero"
      style={{ marginBottom: '-80px' }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/hero-port-background.jpg?v=6)',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#f5f5f5',
        }}
      />

      {/* Semi-transparent overlay for text readability */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[50%] md:w-[45%] lg:w-[40%]"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0) 100%)',
        }}
      />

      {/* Content - Positioned for best visibility */}
      <div className="relative z-10 h-full flex items-center">
        <div className="ml-8 md:ml-16 lg:ml-24 max-w-md">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-garamond text-primary-navy leading-tight mb-4">
            California Trade and Customs Lawyer
            <br />
            Import | Export Attorney
          </h1>
          <p className="text-sm md:text-base text-gray-700 mb-5 leading-relaxed">
            Expert legal counsel for international trade compliance, CBP defense, and customs matters. We step in quickly to protect your shipments and your business.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 text-sm md:text-base font-semibold text-white bg-[#0C7B7D] hover:bg-[#096668] transition-colors duration-200 shadow-lg"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StaticHero;
