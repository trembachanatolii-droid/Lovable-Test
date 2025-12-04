import React from 'react';
import { Link } from 'react-router-dom';
import heroGlobe from '@/assets/hero-globe.png';

const StaticHero: React.FC = () => {
  return (
    <section 
      className="relative w-full min-h-[90vh] bg-[#f5f5f7] overflow-hidden flex flex-col items-center justify-start"
      aria-label="Hero"
    >
      {/* Content Container - Text at Top */}
      <div className="relative z-20 w-full pt-20 md:pt-28 lg:pt-32 px-6 text-center">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-garamond text-primary-navy leading-tight max-w-4xl mx-auto mb-6">
          California Trade and Customs Lawyer
          <br />
          <span className="text-secondary-teal">Import | Export Attorney</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg lg:text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
          Premier California & USA international trade attorney. Multinational trade law expertise for import/export businesses nationwide. CBP defense, federal trade compliance, global trade strategy.
        </p>

        {/* CTA Buttons - Centered */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-secondary-teal hover:bg-secondary-forestGreen rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[250px]"
            aria-label="Get free consultation with California trade attorney"
          >
            Get Free Consultation
          </Link>
          <a 
            href="tel:+13107441328" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-navy bg-white hover:bg-neutral-100 border-2 border-primary-navy rounded-lg transition-all duration-300 shadow-md hover:shadow-lg min-w-[250px]"
            aria-label="Call us now"
          >
            Call (310) 744-1328
          </a>
        </div>
      </div>

      {/* Globe Image - Large, Centered at Bottom */}
      <div className="relative z-10 flex-1 flex items-end justify-center w-full">
        <img
          src={heroGlobe}
          alt="Global trade - international flags on globe representing worldwide customs and trade law services"
          className="w-full max-w-[700px] md:max-w-[800px] lg:max-w-[900px] xl:max-w-[1000px] h-auto object-contain"
          loading="eager"
          decoding="async"
          width="1000"
          height="600"
        />
      </div>

      {/* Subtle gradient overlay at bottom for depth */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/30 to-transparent pointer-events-none z-30" 
        aria-hidden="true"
      />
    </section>
  );
};

export default StaticHero;
