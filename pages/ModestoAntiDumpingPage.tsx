import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const ModestoAntiDumpingPage: React.FC = () => {
  useMeta({
    title: 'Modesto Anti-Dumping Duty Attorney | AD/CVD Lawyer Central Valley',
    description: 'Modesto anti-dumping duty attorney. Expert AD/CVD defense for agricultural products, food processing equipment, steel. Scope rulings, EAPA defense. (310) 744-1328.',
    keywords: 'anti-dumping attorney modesto, ad cvd lawyer modesto, scope ruling attorney central valley, eapa defense lawyer, countervailing duty attorney, agricultural trade lawyer',
    canonical: 'modesto-antidumping-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-antidumping.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Modesto Anti-Dumping Duty Attorney - AD/CVD Defense for Agricultural Trade',
        description: 'Expert Modesto anti-dumping duty attorney providing scope rulings, EAPA investigation defense, and AD/CVD mitigation for Central Valley agricultural and food processing importers.',
        url: `${siteConfig.siteUrl}/modesto-antidumping-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Modesto Anti-Dumping Attorney', url: `${siteConfig.siteUrl}/modesto-antidumping-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What are antidumping and countervailing duties (AD/CVD)?',
          answer: 'Antidumping duties (AD) are additional tariffs imposed when foreign companies sell products in the U.S. below fair market value. Countervailing duties (CVD) offset foreign government subsidies. AD/CVD rates can exceed 200% for certain products from China, Vietnam, and other countries. These duties are IN ADDITION to normal HTS tariffs. Our Modesto anti-dumping attorney helps Central Valley agricultural businesses determine if their food processing equipment, farm machinery, or agricultural imports are subject to AD/CVD orders.',
        },
        {
          question: 'What agricultural products face AD/CVD in Modesto?',
          answer: 'Modesto agricultural businesses face AD/CVD exposure on: food processing equipment from China (various rates), agricultural machinery and farm equipment (various), steel products used in agriculture (100-200%), honey from China and other countries (up to 183%), garlic from China (300%+), certain preserved mushrooms, and fertilizer products. If you import agricultural equipment or food products from China or Vietnam, AD/CVD assessment is essential.',
        },
        {
          question: 'How can scope rulings help my Modesto agricultural business?',
          answer: 'A scope ruling from the Department of Commerce determines whether your specific food processing equipment, agricultural machinery, or food product is covered by an existing AD/CVD order. If your product is excluded from scope due to technical specifications, specialized agricultural use, or product characteristics, you avoid massive AD/CVD duties. Our Modesto attorney prepares detailed scope ruling requests with technical and agricultural documentation demonstrating your product is outside the order scope.',
        },
        {
          question: 'What is an EAPA investigation for agricultural importers?',
          answer: 'EAPA (Enforce and Protect Act) investigations examine whether importers are evading AD/CVD orders through transshipment, falsified country of origin, or minor alterations. Modesto agricultural businesses importing food processing equipment, honey, garlic, or farm machinery from China via third countries face EAPA scrutiny. CBP can detain shipments and demand massive cash deposits. Our Modesto EAPA defense attorney represents agricultural and food processing importers through investigation.',
        },
        {
          question: 'How do I avoid AD/CVD duties on agricultural imports to Modesto?',
          answer: 'Strategies for Modesto agricultural importers include: (1) Scope Rulings demonstrating your specialized food processing or farm equipment is outside the order, (2) Country of origin planning to source from non-covered countries, (3) Substantial transformation through processing or assembly in third countries, (4) Product modifications that place you outside scope, (5) Participating in administrative reviews for company-specific rates. Our Modesto anti-dumping attorney evaluates which strategies work for your specific agricultural products.',
        },
      ]),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="Modesto Anti-Dumping Defense Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1920&auto=format&fit=crop"
            alt=""
            role="presentation"
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
            className="hero-bg-image"
          />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>

        <div className="container">
          <h1>Modesto Anti-Dumping Duty Attorney<br />AD/CVD Defense for Central Valley Agriculture</h1>
          <p className="hero-subtitle">
            Expert anti-dumping and countervailing duty defense for Modesto agricultural and food processing importers. Scope rulings, EAPA investigations, and AD/CVD avoidance strategies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free AD/CVD Analysis</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Modesto Anti-Dumping Defense Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Central Valley Agricultural AD/CVD Defense Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Antidumping and countervailing duties can add <strong>50% to 300%+ in additional tariffs</strong> to your Modesto agricultural imports. Food processing equipment, honey, garlic, farm machinery, and agricultural products from China and Vietnam face massive AD/CVD exposure. Our Modesto anti-dumping duty attorney helps Central Valley agricultural businesses avoid or minimize AD/CVD through scope rulings, country of origin planning, and EAPA investigation defense.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                Focused expertise in <strong>agricultural AD/CVD issues</strong> - food processing, farm equipment, and agricultural product imports.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Scope Ruling Success</h3>
              <p className="text-text-secondary leading-relaxed">
                Successful <strong>scope exclusion rulings</strong> saving Modesto agricultural businesses millions in avoided AD/CVD duties.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct support for <strong>Modesto agricultural importers</strong>, CBP detentions, and cash deposit requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AD/CVD Defense Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Anti-Dumping & Countervailing Duty Defense Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Scope Ruling Requests to Commerce</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A successful scope ruling excludes your agricultural or food processing product from AD/CVD orders, <strong>eliminating massive duty liability</strong>. Our Modesto anti-dumping attorney prepares:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Scope ruling applications to Department of Commerce</li>
                <li>Technical product specifications for agricultural equipment</li>
                <li>Physical characteristic analysis vs. scope language</li>
                <li>End-use and application evidence for food processing</li>
                <li>Product samples, testing results, and food safety certifications</li>
                <li>Manufacturing process documentation</li>
                <li>Legal argument for scope exclusion based on agricultural use</li>
                <li>Follow-up submissions and responses to Commerce questions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EAPA Investigation Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Modesto agricultural importers bringing products from China via third countries face <strong>EAPA scrutiny for AD/CVD evasion</strong>. Defend aggressively:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Immediate EAPA investigation response strategy</li>
                <li>Comprehensive questionnaire responses to CBP</li>
                <li>Supply chain documentation (purchase orders, invoices, shipping records)</li>
                <li>Manufacturing evidence proving country of origin</li>
                <li>Substantial transformation analysis and legal opinion</li>
                <li>Factory verification and third-party audits</li>
                <li>Interim measures defense (suspension of liquidation)</li>
                <li>Administrative review and appeal if adverse determination</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">AD/CVD Country of Origin Planning</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                AD/CVD orders are <strong>country-specific</strong>. Strategic country of origin planning can avoid coverage for agricultural products:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Substantial transformation analysis for multi-country agricultural supply chains</li>
                <li>Processing operations that change country of origin</li>
                <li>Third-country processing and packaging strategies</li>
                <li>Country of origin rulings from CBP for food products</li>
                <li>Documentation requirements for agricultural origin claims</li>
                <li>Supply chain restructuring to avoid AD/CVD countries</li>
                <li>EAPA-proof country of origin substantiation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Food Products AD/CVD Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Agricultural food products from China face <strong>massive AD/CVD rates</strong>. Specialized defense for food importers:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Honey AD/CVD defense (China: up to 183%, Argentina, India, Vietnam)</li>
                <li>Garlic AD/CVD analysis (China: 300%+)</li>
                <li>Preserved mushroom scope determinations</li>
                <li>Fresh vs. processed product origin analysis</li>
                <li>Food processing and packaging country of origin</li>
                <li>Substantially transformed food product analysis</li>
                <li>Agricultural commodity downstream product exemptions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural Equipment AD/CVD</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Food processing and agricultural equipment from China face <strong>various AD/CVD rates</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Food processing machinery scope ruling requests</li>
                <li>Agricultural equipment classification and scope analysis</li>
                <li>Specialized food processing use exemptions</li>
                <li>Packaging and sorting equipment origin determination</li>
                <li>Irrigation and farm equipment AD/CVD assessment</li>
                <li>Parts vs. complete machinery scope determinations</li>
                <li>Agricultural implement steel component analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">AD/CVD Cash Deposit & Suspension of Liquidation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP determines your agricultural products are subject to AD/CVD, <strong>massive cash deposits are required</strong>. We help minimize impact:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Cash deposit rate determination and verification</li>
                <li>Continuous bond sufficiency analysis for agricultural importers</li>
                <li>Single transaction bond alternatives</li>
                <li>Suspension of liquidation strategy</li>
                <li>Interim relief during scope ruling proceedings</li>
                <li>Refund claims for overpaid AD/CVD deposits</li>
                <li>Liquidation and payment planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common AD/CVD Orders */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Common AD/CVD Orders Affecting Modesto Agricultural Importers
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Honey', rate: 'Up to 183%', countries: 'China, Argentina, India, Vietnam', examples: 'All types of honey imports' },
              { title: 'Garlic & Garlic Products', rate: '300%+', countries: 'China', examples: 'Fresh garlic, processed garlic' },
              { title: 'Agricultural Equipment', rate: 'Various', countries: 'China, Vietnam', examples: 'Food processing machinery, farm equipment' },
              { title: 'Steel Products', rate: '100-200%+', countries: 'China, Vietnam, South Korea', examples: 'Steel used in agricultural equipment, structures' },
              { title: 'Fertilizer Products', rate: '20-100%', countries: 'China, Morocco, Russia', examples: 'Phosphate fertilizers, ammonium sulfate' },
              { title: 'Preserved Mushrooms', rate: 'Up to 500%', countries: 'China, India, Indonesia', examples: 'Canned mushrooms, preserved mushrooms' },
            ].map((order) => (
              <div key={order.title} className="bg-neutral-50 p-6 rounded-lg border-l-4 border-secondary-teal">
                <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond">{order.title}</h3>
                <div className="mb-2">
                  <span className="text-sm font-bold text-secondary-teal">AD/CVD Rates: </span>
                  <span className="text-sm text-text-secondary">{order.rate}</span>
                </div>
                <div className="mb-2">
                  <span className="text-sm font-bold text-primary-navy">Countries: </span>
                  <span className="text-sm text-text-secondary">{order.countries}</span>
                </div>
                <div>
                  <span className="text-sm font-bold text-primary-navy">Examples: </span>
                  <span className="text-sm text-text-secondary">{order.examples}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Modesto Agricultural AD/CVD Risk Assessment</h3>
            <p className="text-neutral-200">
              Modesto agricultural businesses importing food products, processing equipment, or farm machinery from China, Vietnam, or other high-risk countries face significant AD/CVD exposure. Our Modesto attorney conducts comprehensive AD/CVD risk assessments and develops avoidance strategies tailored to agricultural trade.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related AD/CVD Defense Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Defense Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Defense Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#scope-rulings" className="service-link">
                    <span className="service-link__title">Scope Ruling Requests</span>
                    <p className="service-link__description">Commerce scope determinations</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#eapa-defense" className="service-link">
                    <span className="service-link__title">EAPA Investigation Defense</span>
                    <p className="service-link__description">Evasion allegation defense</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#country-of-origin" className="service-link">
                    <span className="service-link__title">Country of Origin Planning</span>
                    <p className="service-link__description">Substantial transformation</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Central Valley Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Central Valley Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#stockton-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Stockton AD/CVD Defense</span>
                    <p className="service-link__description">Port of Stockton support</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#fresno-customs-attorney" className="service-link">
                    <span className="service-link__title">Fresno AD/CVD Defense</span>
                    <p className="service-link__description">Agricultural trade defense</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">AD/CVD Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#resources/antidumping-guide" className="service-link">
                    <span className="service-link__title">Anti-Dumping Defense Guide</span>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/agricultural-trade" className="service-link">
                    <span className="service-link__title">Agricultural Trade Guide</span>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related City Pages */}
      <RelatedCityPages currentCity="Modesto" region="central-valley" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Avoid Massive Anti-Dumping & Countervailing Duties
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            AD/CVD rates can exceed 300% on agricultural products like garlic and honey, destroying your profit margins. Our Modesto anti-dumping duty attorney helps Central Valley agricultural businesses avoid or minimize these duties through scope rulings, country of origin planning, and EAPA defense. Free consultation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">
              Schedule Free Consultation
            </Button>
            <Button href={siteConfig.phoneTel} variant="outline">
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>

      {/* Evaluation Form */}
      <Suspense fallback={<div style={{ minHeight: '600px', background: 'transparent' }} aria-label="Loading form" />}>
        <EvaluationForm theme="light" />
      </Suspense>
    </div>
  );
};

export default ModestoAntiDumpingPage;
