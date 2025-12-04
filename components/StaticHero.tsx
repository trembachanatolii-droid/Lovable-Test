import React from 'react';
import { Link } from 'react-router-dom';
import heroGlobe from '@/src/assets/hero-globe.png';

const StaticHero: React.FC = () => {
  return (
    <section 
      className="relative w-full min-h-[90vh] bg-[#f5f5f7] overflow-hidden"
      aria-label="Hero"
    >
      {/* Globe Image - Full background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={heroGlobe}
          alt="Global trade - international flags on globe representing worldwide customs and trade law services"
          className="w-full max-w-[900px] md:max-w-[1000px] lg:max-w-[1100px] xl:max-w-[1200px] h-auto object-contain"
          loading="eager"
          decoding="async"
          width="1200"
          height="720"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 w-full h-full min-h-[90vh] flex flex-col">
        {/* Main Heading - Top Center */}
        <div className="pt-20 md:pt-28 lg:pt-32 px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-garamond text-primary-navy leading-tight max-w-4xl mx-auto">
            California Trade and Customs Lawyer
            <br />
            <span className="text-secondary-teal">Import | Export Attorney</span>
          </h1>
        </div>

        {/* CTA Button - Bottom Left */}
        <div className="flex-1 flex items-end pb-16 md:pb-20 lg:pb-24 px-6 md:px-12 lg:px-20">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-secondary-teal hover:bg-secondary-forestGreen rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            aria-label="Get free consultation with California trade attorney"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StaticHero;
