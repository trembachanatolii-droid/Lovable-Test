
import React, { lazy, Suspense, useEffect } from 'react';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanJoseSection301Page: React.FC = () => {
  useMeta({
    title: 'Section 301 Tariff Attorney San Jose | China Tariff Lawyer Silicon Valley | Trembach Law',
    description: 'Section 301 tariff attorney San Jose CA. Expert China tariff lawyer serving Silicon Valley tech companies. Section 301 exclusions, tariff mitigation, supply chain strategies. Free consultation.',
    keywords: 'section 301 tariff attorney san jose, china tariff lawyer san jose, san jose section 301 attorney, silicon valley china tariff, section 301 exclusion attorney san jose, tariff mitigation san jose, tech tariff lawyer san jose, china trade war attorney silicon valley, section 301 strategy san jose',
    canonical: 'san-jose-section-301',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-san-jose.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Section 301 Tariff Attorney San Jose - China Tariff Lawyer Silicon Valley',
        description: 'Expert Section 301 tariff attorney serving San Jose and Silicon Valley tech companies with China tariff strategies and compliance solutions.',
        url: `${siteConfig.siteUrl}/san-jose-section-301`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Section 301 Attorney San Jose', url: `${siteConfig.siteUrl}/san-jose-section-301` }
      ]),
      generateFAQSchema([
        {
          question: 'How do Section 301 tariffs affect San Jose tech companies?',
          answer: 'San Jose and Silicon Valley tech companies face significant Section 301 exposure on Chinese imports including semiconductors, computer hardware, networking equipment, and electronic components. Tariffs range from 7.5% to 25%. Our Section 301 attorneys help tech companies optimize classifications and restructure supply chains.',
        },
        {
          question: 'Can San Jose tech companies get Section 301 exclusions?',
          answer: 'While formal exclusion processes have largely ended, our San Jose Section 301 attorneys analyze your products for remaining exclusions, classification optimization, and tariff engineering opportunities. Many tech products can achieve duty reduction through proper legal strategies.',
        },
        {
          question: 'What strategies reduce Section 301 tariffs for Silicon Valley companies?',
          answer: 'Our San Jose China tariff lawyers use multiple strategies: HTS classification review, tariff engineering, substantial transformation analysis, duty drawback claims, Foreign Trade Zone benefits, and supply chain restructuring. Many clients achieve 50%+ duty savings.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="Section 301 Attorney San Jose Hero">
        <picture className="hero-bg">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>Section 301 Tariff Attorney<br />San Jose CA</h1>
          <p className="hero-subtitle">Expert Section 301 tariff attorney serving San Jose and Silicon Valley tech companies. China tariffs add 7.5%-25% to import costs. Our China tariff lawyers help tech companies minimize duty exposure through legal strategies.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Tariff Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">Section 301 Solutions for Silicon Valley</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">San Jose is the heart of America's technology industry. Our <strong>Section 301 tariff attorneys</strong> understand tech supply chains and help Silicon Valley companies navigate China tariffs effectively.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tech Industry Focus</h3>
              <p className="text-text-secondary leading-relaxed">We understand semiconductors, electronics, and software. Our San Jose <strong>China tariff lawyers</strong> know the technical distinctions that affect tariff treatment.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Classification Optimization</h3>
              <p className="text-text-secondary leading-relaxed">Proper HTS classification can mean <strong>0% vs 25% duties</strong>. Our attorneys ensure your tech products are correctly classified for minimum duty exposure.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Supply Chain Strategy</h3>
              <p className="text-text-secondary leading-relaxed">We help San Jose companies restructure supply chains to minimize Section 301 exposure while maintaining <strong>compliance and efficiency</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Section 301 Services for San Jose Tech</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">HTS Classification Review</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Tech product classifications under Chapter 85 are complex. Our San Jose <strong>Section 301 attorneys</strong> ensure optimal classification for duty minimization.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Semiconductor classification (8542)</li>
                <li>Computer hardware analysis</li>
                <li>Networking equipment review</li>
                <li>Binding ruling requests</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Engineering</h3>
              <p className="text-text-secondary leading-relaxed mb-4"><strong>Tariff engineering</strong> modifies products to achieve better duty treatment. We work with your engineering teams to identify legal modifications.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Product modification analysis</li>
                <li>Assembly vs manufacturing</li>
                <li>Component optimization</li>
                <li>Set classification strategies</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Supply Chain Restructuring</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Third-country processing can eliminate Section 301 tariffs through <strong>substantial transformation</strong>. We analyze your supply chain for restructuring opportunities.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Country of origin planning</li>
                <li>Vietnam/Mexico alternatives</li>
                <li>Substantial transformation analysis</li>
                <li>Compliance verification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Tariff Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#tariffs-duties-classification-guide" className="service-link"><span className="service-link__title">Tariff Classification Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#resources/section-301-tariffs-guide" className="service-link"><span className="service-link__title">Section 301 Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Bay Area Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#san-jose-customs-lawyer" className="service-link"><span className="service-link__title">San Jose Customs Lawyer</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#silicon-valley-trade-lawyer" className="service-link"><span className="service-link__title">Silicon Valley Trade Lawyer</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Tech Trade</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#fremont-semiconductor-tariff" className="service-link"><span className="service-link__title">Semiconductor Tariffs</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#export-controls-sanctions" className="service-link"><span className="service-link__title">Export Controls</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedCityPages currentCity="San Jose" region="bay-area" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Reduce Your Section 301 Tariff Burden</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Don't overpay on China tariffs. Our San Jose Section 301 attorneys help tech companies minimize duty exposure legally.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">Free Tariff Consultation</Button>
            <Button href={siteConfig.phoneTel} variant="outline">Call {siteConfig.phoneDisplay}</Button>
          </div>
        </div>
      </section>

      <Suspense fallback={<div style={{ minHeight: '600px', background: 'transparent' }} aria-label="Loading form" />}>
        <EvaluationForm theme="light" />
      </Suspense>
    </div>
  );
};

export default SanJoseSection301Page;
