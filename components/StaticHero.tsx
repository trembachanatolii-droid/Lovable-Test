import React from 'react';
import { Link } from 'react-router-dom';

const StaticHero: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      aria-label="Hero"
      style={{ marginBottom: '-80px' }}
    >
      {/* Background Image - Right Side */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-port-background.jpg?v=2)',
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
        }}
      />

      {/* White Panel - Left Side */}
      <div
        className="absolute left-0 top-0 bottom-0 w-full md:w-[55%] lg:w-[50%]"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.95) 70%, rgba(255,255,255,0) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 h-full flex items-center">
        <div className="max-w-xl">
          {/* Text and CTA */}
          <div className="flex flex-col justify-center text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-garamond text-primary-navy leading-tight mb-6">
              California Trade and Customs Lawyer
              <br />
              <span className="text-primary-navy">Import | Export Attorney</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg leading-relaxed">
              Expert legal counsel for international trade compliance, CBP defense, and customs matters. We step in quickly to protect your shipments and your business.
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#E07C3E] hover:bg-[#c96a2f] transition-all duration-300"
                aria-label="Get free consultation with California trade attorney"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaticHero;
