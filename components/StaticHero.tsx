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
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-port-background.jpg?v=2)',
          backgroundPosition: 'center bottom',
        }}
      >
        {/* Dark Overlay for WCAG AAA text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content - Centered vertically */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 h-full flex items-center">
        <div className="max-w-2xl">
          {/* Text and CTA */}
          <div className="flex flex-col justify-center text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-garamond text-white leading-tight mb-6">
              California Trade and Customs Lawyer
              <br />
              <span className="text-[#5CE1E6]">Import | Export Attorney</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-10 max-w-xl">
              Expert legal counsel for international trade compliance, CBP defense, and customs matters.
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-primary-navy bg-white hover:bg-gray-100 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
