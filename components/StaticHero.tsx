import React from 'react';
import { Link } from 'react-router-dom';
import heroGlobe from '@/assets/hero-globe.png';

const StaticHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#f5f5f7] overflow-hidden flex flex-col" aria-label="Hero">
      {/* Title at top center */}
      <div className="relative z-20 w-full pt-24 md:pt-32 lg:pt-36 px-6 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-garamond text-primary-navy leading-tight max-w-4xl mx-auto">
          California Trade and Customs Lawyer
          <br />
          <span className="text-secondary-teal">Import | Export Attorney</span>
        </h1>
      </div>

      {/* Main content area with CTA left and globe right */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-end justify-between h-full">
          {/* Left side - CTA and subtitle */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pb-12 lg:pb-24">
            <p className="text-base md:text-lg lg:text-xl text-text-secondary mb-8 max-w-xl leading-relaxed">
              Premier California & USA international trade attorney. Multinational trade law expertise for import/export businesses nationwide. CBP defense, federal trade compliance, global trade strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-secondary-teal hover:bg-secondary-forestGreen rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                aria-label="Get free consultation with California trade attorney"
              >
                Get Free Consultation
              </Link>
              <a 
                href="tel:+13107441328" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-navy bg-white hover:bg-neutral-100 border-2 border-primary-navy rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Call us now"
              >
                Call (310) 744-1328
              </a>
            </div>
          </div>

          {/* Right side - Globe image positioned lower */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end relative">
            <img
              src={heroGlobe}
              alt="Global trade - international flags on globe representing worldwide customs and trade law services"
              className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] xl:w-[580px] h-auto object-contain drop-shadow-2xl"
              loading="eager"
              decoding="async"
              width="580"
              height="580"
            />
          </div>
        </div>
      </div>

      {/* Subtle gradient at bottom for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" aria-hidden="true"></div>
    </section>
  );
};

export default StaticHero;
