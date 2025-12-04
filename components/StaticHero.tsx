import React from 'react';
import { Link } from 'react-router-dom';

const StaticHero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[90vh] overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-port-background.jpg)',
        }}
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/90 via-primary-navy/70 to-primary-navy/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 h-full min-h-[90vh] flex items-center">
        <div className="max-w-2xl">
          {/* Text and CTA */}
          <div className="flex flex-col justify-center text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-garamond text-white leading-tight mb-6">
              California Trade and Customs Lawyer
              <br />
              <span className="text-secondary-teal">Import | Export Attorney</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
              Expert legal counsel for international trade compliance, CBP defense, and customs matters.
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-secondary-teal hover:bg-secondary-forestGreen rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
