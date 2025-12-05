
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanDiegoSemiconductorTariffPage: React.FC = () => {
  useMeta({
    title: 'Semiconductor Tariff Attorney San Diego | Chip Import Lawyer SD | Trembach Law',
    description: 'Semiconductor tariff attorney San Diego CA. Expert chip import lawyer serving SD tech companies. Section 301 semiconductor tariffs, IC classification, wafer import compliance. Free consultation.',
    keywords: 'semiconductor tariff attorney san diego, chip import lawyer san diego, san diego semiconductor tariff attorney, IC tariff lawyer san diego, section 301 semiconductor san diego, chip classification attorney san diego, wafer import lawyer san diego, semiconductor customs attorney san diego',
    canonical: 'san-diego-semiconductor-tariff',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-san-diego.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Semiconductor Tariff Attorney San Diego - Chip Import Lawyer',
        description: 'Expert semiconductor tariff attorney serving San Diego tech companies with Section 301 strategies, IC classification, and chip import compliance.',
        url: `${siteConfig.siteUrl}/san-diego-semiconductor-tariff`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Semiconductor Tariff Attorney San Diego', url: `${siteConfig.siteUrl}/san-diego-semiconductor-tariff` }
      ]),
      generateFAQSchema([
        {
          question: 'How do tariffs affect San Diego semiconductor companies?',
          answer: 'San Diego has a thriving tech sector with semiconductor design and manufacturing. Semiconductor chips from China face Section 301 tariffs up to 50%. Our San Diego semiconductor tariff attorneys help tech companies minimize duty exposure on chips, wafers, and IC components.',
        },
        {
          question: 'What semiconductor products face China tariffs in San Diego?',
          answer: 'Tariffed semiconductor products include integrated circuits, microprocessors, memory chips, logic chips, analog ICs, power semiconductors, and wafers. Our San Diego semiconductor tariff lawyers analyze your supply chain to identify reduction opportunities.',
        },
        {
          question: 'How can San Diego tech companies reduce semiconductor tariffs?',
          answer: 'Strategies include HTS classification optimization, country of origin analysis, supply chain restructuring, and tariff engineering. Our San Diego semiconductor tariff attorneys develop customized strategies to minimize duty exposure legally.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="Semiconductor Tariff Attorney San Diego Hero">
        <picture className="hero-bg">
          <img src="/images/hero-port-background.jpg" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>Semiconductor Tariff Attorney<br />San Diego CA</h1>
          <p className="hero-subtitle">Expert semiconductor tariff attorney serving San Diego tech companies. Chip tariffs significantly impact production costs. Our semiconductor import lawyers help companies minimize duty exposure on chips, wafers, and IC components.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Semiconductor Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">Semiconductor Tariff Services for San Diego</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">San Diego is a major tech hub with significant semiconductor activity. Our <strong>semiconductor tariff attorneys</strong> help tech companies navigate Section 301, classification challenges, and import compliance.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tech Expertise</h3>
              <p className="text-text-secondary leading-relaxed">We understand semiconductor supply chains and chip tariffs. Our <strong>semiconductor tariff attorneys</strong> know IC-specific classifications.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Section 301 Strategy</h3>
              <p className="text-text-secondary leading-relaxed">China semiconductors face significant tariffs. Our attorneys identify <strong>legal strategies</strong> to minimize Section 301 exposure.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Classification Mastery</h3>
              <p className="text-text-secondary leading-relaxed">IC classification is complex. We help companies achieve <strong>optimal classification</strong> for semiconductor products.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Semiconductor Tariff Services</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Semiconductor Strategy</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Our San Diego <strong>semiconductor tariff attorneys</strong> develop comprehensive strategies to minimize China tariffs on chips and ICs.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Chip tariff analysis</li>
                <li>IC classification optimization</li>
                <li>Tariff engineering for semiconductors</li>
                <li>Supply chain restructuring</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Semiconductor Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Proper HTS classification is critical for semiconductors. We help companies achieve <strong>optimal duty rates</strong> through expert classification.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Integrated circuit classification</li>
                <li>Microprocessor and memory chip analysis</li>
                <li>Analog vs. digital IC determination</li>
                <li>Binding ruling requests</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Country of Origin Analysis</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Semiconductor country of origin rules are complex. Our <strong>chip import lawyers</strong> ensure proper origin determination.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Wafer fabrication analysis</li>
                <li>Die attach and packaging review</li>
                <li>Substantial transformation analysis</li>
                <li>Origin certification support</li>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">San Diego Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/san-diego-customs-attorney" className="service-link"><span className="service-link__title">San Diego Customs Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/san-diego-tariff-attorney" className="service-link"><span className="service-link__title">SD Tariff Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/trump-2025-tariff-attorney" className="service-link"><span className="service-link__title">2025 Tariff Updates</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/trade-law-faq" className="service-link"><span className="service-link__title">Semiconductor FAQ</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedCityPages currentCity="San Diego" region="southern-california" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Reduce Your Semiconductor Tariff Burden</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Don't overpay on chip tariffs. Our San Diego semiconductor tariff attorneys help tech companies minimize duty exposure legally.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">Free Semiconductor Consultation</Button>
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

export default SanDiegoSemiconductorTariffPage;
