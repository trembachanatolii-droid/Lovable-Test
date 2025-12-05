
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const OaklandSection301Page: React.FC = () => {
  useMeta({
    title: 'Section 301 Tariff Attorney Oakland | China Tariff Lawyer Port of Oakland | Trembach Law',
    description: 'Section 301 tariff attorney Oakland CA. Expert China tariff lawyer serving Port of Oakland importers. Section 301 exclusions, tariff mitigation, supply chain strategies. Free consultation.',
    keywords: 'section 301 tariff attorney oakland, china tariff lawyer oakland, oakland section 301 attorney, port of oakland china tariff, section 301 exclusion attorney oakland, tariff mitigation oakland, port tariff lawyer oakland, china trade war attorney oakland, section 301 strategy oakland',
    canonical: 'oakland-section-301',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-oakland.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Section 301 Tariff Attorney Oakland - China Tariff Lawyer Port of Oakland',
        description: 'Expert Section 301 tariff attorney serving Oakland and Port of Oakland importers with China tariff strategies and compliance solutions.',
        url: `${siteConfig.siteUrl}/oakland-section-301`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Section 301 Attorney Oakland', url: `${siteConfig.siteUrl}/oakland-section-301` }
      ]),
      generateFAQSchema([
        {
          question: 'How do Section 301 tariffs affect Oakland importers?',
          answer: 'Port of Oakland is a major West Coast gateway for Asian imports, handling billions in containerized cargo from China. Section 301 tariffs add 7.5%-25% to duties on goods ranging from machinery to consumer products. Our Section 301 attorneys help Oakland importers minimize this exposure through strategic planning and classification optimization.',
        },
        {
          question: 'Can Port of Oakland importers get Section 301 exclusions?',
          answer: 'While formal exclusion processes have largely ended, our Oakland Section 301 attorneys analyze your imported products for remaining exclusions, classification optimization opportunities, and tariff engineering strategies. Port importers achieve significant duty reduction through proper legal guidance.',
        },
        {
          question: 'What strategies reduce Section 301 tariffs for Oakland companies?',
          answer: 'Our Oakland China tariff lawyers use multiple strategies: HTS classification review, tariff engineering, substantial transformation analysis, duty drawback claims, Foreign Trade Zone benefits, and supply chain restructuring. Many port-area clients achieve 30-50% duty savings.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="Section 301 Attorney Oakland Hero">
        <picture className="hero-bg">
          <img src="/images/hero-port-background-2.jpg" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>Section 301 Tariff Attorney<br />Oakland CA</h1>
          <p className="hero-subtitle">Expert Section 301 tariff attorney serving Oakland and Port of Oakland importers. China tariffs add 7.5%-25% to import costs. Our China tariff lawyers help port-area companies minimize duty exposure through legal strategies.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Tariff Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">Section 301 Solutions for Port of Oakland</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">Oakland is a critical West Coast trade gateway with direct Asia connections. Our <strong>Section 301 tariff attorneys</strong> understand port operations and help Oakland importers navigate China tariffs effectively.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Import Expertise</h3>
              <p className="text-text-secondary leading-relaxed">We understand containerized cargo, port logistics, and customs processing. Our Oakland <strong>China tariff lawyers</strong> know the import industries most affected by Section 301.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Classification Optimization</h3>
              <p className="text-text-secondary leading-relaxed">Proper HTS classification can mean <strong>0% vs 25% duties</strong>. Our attorneys ensure your imported goods are correctly classified for minimum duty exposure.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bay Area Resources</h3>
              <p className="text-text-secondary leading-relaxed">Oakland benefits from Bay Area innovation and trade infrastructure. We help importers leverage <strong>regional advantages</strong> for tariff reduction.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Section 301 Services for Oakland Importers</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">HTS Classification Review</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Import classifications determine Section 301 exposure. Our Oakland <strong>Section 301 attorneys</strong> ensure optimal classification for duty minimization across all product categories.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Machinery and equipment</li>
                <li>Consumer goods and electronics</li>
                <li>Industrial products</li>
                <li>Binding ruling requests</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Duty Drawback Programs</h3>
              <p className="text-text-secondary leading-relaxed mb-4"><strong>Duty drawback</strong> recovers paid duties on goods that are re-exported or used in manufacturing. We design compliant drawback programs for Oakland importers.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Manufacturing drawback</li>
                <li>Unused merchandise drawback</li>
                <li>Rejected merchandise drawback</li>
                <li>Compliance and documentation</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Supply Chain Restructuring</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Third-country sourcing can eliminate Section 301 tariffs through <strong>substantial transformation</strong>. We analyze your supply chain for restructuring opportunities.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Country of origin planning</li>
                <li>Vietnam/Southeast Asia alternatives</li>
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
                <div className="service-link-item"><Link to="/resources/tariffs-duties-classification" className="service-link"><span className="service-link__title">Tariff Classification Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/resources/section-301-tariffs-guide" className="service-link"><span className="service-link__title">Section 301 Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Bay Area Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/oakland-customs-lawyer" className="service-link"><span className="service-link__title">Oakland Customs Lawyer</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/san-francisco-tariff-lawyer" className="service-link"><span className="service-link__title">San Francisco Tariff Lawyer</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Port Trade</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/duty-drawback" className="service-link"><span className="service-link__title">Duty Drawback</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><a href="/ftz-foreign-trade-zones" className="service-link"><span className="service-link__title">Foreign Trade Zones</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedCityPages currentCity="Oakland" region="bay-area" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Reduce Your Section 301 Tariff Burden</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Don't overpay on China tariffs. Our Oakland Section 301 attorneys help importers minimize duty exposure legally.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">Free Tariff Consultation</Button>
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

export default OaklandSection301Page;
