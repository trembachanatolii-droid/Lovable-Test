import React from 'react';
import { Link } from 'react-router-dom';
import heroGlobe from '@/src/assets/hero-globe.png';

const StaticHero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[90vh] bg-[#f5f5f7] overflow-hidden"
      aria-label="Hero"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 h-full min-h-[90vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Side - Text and CTA */}
          <div className="flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-garamond text-primary-navy leading-tight mb-8">
              California Trade and Customs Lawyer
              <br />
              <span className="text-secondary-teal">Import | Export Attorney</span>
            </h1>
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

          {/* Right Side - Globe Image */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <img
              src={heroGlobe}
              alt="Global trade - international flags on globe representing worldwide customs and trade law services"
              className="w-full max-w-[500px] md:max-w-[550px] lg:max-w-[600px] xl:max-w-[700px] h-auto object-contain"
              loading="eager"
              decoding="async"
              width="700"
              height="700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaticHero;
