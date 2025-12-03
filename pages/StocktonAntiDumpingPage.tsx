import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const StocktonAntiDumpingPage: React.FC = () => {
  useMeta({
    title: 'Stockton Anti-Dumping Duty Attorney | AD/CVD Lawyer Port of Stockton',
    description: 'Stockton anti-dumping duty attorney. Expert AD/CVD defense for agricultural equipment, steel, aluminum. Scope rulings, EAPA defense. (310) 744-1328.',
    keywords: 'anti-dumping attorney stockton, ad cvd lawyer stockton, scope ruling attorney california, eapa defense lawyer, countervailing duty attorney, port of stockton attorney',
    canonical: 'stockton-antidumping-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-antidumping.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Stockton Anti-Dumping Duty Attorney - AD/CVD Defense for Agricultural & Industrial Imports',
        description: 'Expert Stockton anti-dumping duty attorney providing scope rulings, EAPA investigation defense, and AD/CVD mitigation for Port of Stockton importers.',
        url: `${siteConfig.siteUrl}/stockton-antidumping-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Stockton Anti-Dumping Attorney', url: `${siteConfig.siteUrl}/stockton-antidumping-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What are antidumping and countervailing duties (AD/CVD)?',
          answer: 'Antidumping duties (AD) are additional tariffs imposed when foreign companies sell products in the U.S. below fair market value. Countervailing duties (CVD) offset foreign government subsidies. AD/CVD rates can exceed 200% for certain products from China, Vietnam, and other countries. These duties are IN ADDITION to normal HTS tariffs. Our Stockton anti-dumping attorney helps Port of Stockton importers determine if their agricultural equipment, steel, or industrial products are subject to AD/CVD orders.',
        },
        {
          question: 'What products commonly face AD/CVD at Port of Stockton?',
          answer: 'Port of Stockton importers face AD/CVD exposure on: agricultural equipment and machinery from China (various rates), steel products including rebar and wire (100-200%), aluminum extrusions (30-200%), fertilizer products from China and Morocco, farm equipment components, and industrial machinery parts. If you import through Port of Stockton from China, Vietnam, or other high-risk countries, AD/CVD risk assessment is essential.',
        },
        {
          question: 'How can scope rulings help my Stockton agricultural business?',
          answer: 'A scope ruling from the Department of Commerce determines whether your specific agricultural equipment or component is covered by an existing AD/CVD order. If your product is excluded from scope due to technical specifications, specialized agricultural use, or physical characteristics, you avoid massive AD/CVD duties. Our Stockton attorney prepares detailed scope ruling requests with technical documentation demonstrating your farm equipment is outside the order scope.',
        },
        {
          question: 'What is an EAPA investigation and why do Port of Stockton importers face them?',
          answer: 'EAPA (Enforce and Protect Act) investigations examine whether importers are evading AD/CVD orders through transshipment, falsified country of origin, or minor alterations. Port of Stockton importers bringing agricultural equipment, steel products, or aluminum from China via third countries face EAPA scrutiny. CBP can detain shipments and demand massive cash deposits. Our Stockton EAPA defense attorney represents agricultural and industrial importers through investigation.',
        },
        {
          question: 'How do I avoid AD/CVD duties on agricultural equipment imports?',
          answer: 'Strategies for Stockton agricultural importers include: (1) Scope Rulings demonstrating your specialized farm equipment is outside the order, (2) Country of origin planning to source from non-covered countries, (3) Substantial transformation through assembly or modification in third countries, (4) Equipment design modifications that place you outside scope, (5) Participating in administrative reviews for company-specific rates. Our Stockton anti-dumping attorney evaluates which strategies work for your specific agricultural products.',
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
      <section className="hero" aria-label="Stockton Anti-Dumping Defense Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop"
            alt=""
            role="presentation"
            width="1920"
            height="1080"
            loading="eager"
            style={{ aspectRatio: '16 / 9' }}
            decoding="async"
            className="hero-bg-image"
          />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>

        <div className="container">
          <h1>Stockton Anti-Dumping Duty Attorney<br />AD/CVD Defense for Port of Stockton</h1>
          <p className="hero-subtitle">
            Expert anti-dumping and countervailing duty defense for Stockton agricultural and industrial importers. Scope rulings, EAPA investigations, and AD/CVD avoidance strategies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free AD/CVD Analysis</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Stockton Anti-Dumping Defense Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Port of Stockton AD/CVD Defense Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Antidumping and countervailing duties can add <strong>50% to 200%+ in additional tariffs</strong> to your Port of Stockton imports. Agricultural equipment, steel products, aluminum, and industrial machinery from China and Vietnam face massive AD/CVD exposure. Our Stockton anti-dumping duty attorney helps Central Valley importers avoid or minimize AD/CVD through scope rulings, country of origin planning, and EAPA investigation defense.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized expertise in <strong>agricultural equipment AD/CVD issues</strong> - farm machinery, equipment, and industrial imports.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Scope Ruling Success</h3>
              <p className="text-text-secondary leading-relaxed">
                Successful <strong>scope exclusion rulings</strong> saving Stockton importers millions in avoided AD/CVD duties.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Stockton Support</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct support for <strong>Port of Stockton importers</strong>, CBP detentions, and cash deposit requirements.
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
                A successful scope ruling excludes your agricultural or industrial product from AD/CVD orders, <strong>eliminating massive duty liability</strong>. Our Stockton anti-dumping attorney prepares:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Scope ruling applications to Department of Commerce</li>
                <li>Technical product specifications and engineering documentation</li>
                <li>Physical characteristic analysis vs. scope language</li>
                <li>End-use and application evidence for agricultural equipment</li>
                <li>Product samples, testing results, and certifications</li>
                <li>Manufacturing process documentation</li>
                <li>Legal argument for scope exclusion based on specialized use</li>
                <li>Follow-up submissions and responses to Commerce questions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EAPA Investigation Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of Stockton importers bringing products from China via third countries face <strong>EAPA scrutiny for AD/CVD evasion</strong>. Defend aggressively:
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
                <li>Manufacturing operations that change country of origin</li>
                <li>Third-country assembly and processing strategies</li>
                <li>Country of origin rulings from CBP for farm equipment</li>
                <li>Documentation requirements for origin claims</li>
                <li>Supply chain restructuring to avoid AD/CVD countries</li>
                <li>EAPA-proof country of origin substantiation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural Equipment AD/CVD Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Agricultural equipment and machinery from China face <strong>various AD/CVD rates</strong>. Specialized defense for agricultural importers:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Farm equipment scope ruling requests</li>
                <li>Agricultural machinery classification and scope analysis</li>
                <li>Specialized agricultural use exemptions</li>
                <li>Tractor and harvester component origin analysis</li>
                <li>Irrigation equipment AD/CVD assessment</li>
                <li>Parts vs. complete machinery scope determinations</li>
                <li>Agricultural implement downstream product analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Steel & Aluminum AD/CVD</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Steel and aluminum products face <strong>100-200% AD/CVD duties</strong> from China and Vietnam:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Steel rebar and wire rod AD/CVD (100-200%+)</li>
                <li>Aluminum extrusion AD/CVD analysis (30-200%)</li>
                <li>Steel pipe and tube scope determinations</li>
                <li>Downstream steel and aluminum product exemptions</li>
                <li>Fabricated steel product scope rulings</li>
                <li>Substantially transformed metal product analysis</li>
                <li>Industrial machinery component AD/CVD assessment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">AD/CVD Cash Deposit & Suspension of Liquidation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP determines your products are subject to AD/CVD, <strong>massive cash deposits are required</strong>. We help minimize impact:
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
            Common AD/CVD Orders Affecting Stockton Importers
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Steel & Aluminum Products', rate: '50-200%+', countries: 'China, Vietnam, South Korea, Taiwan', examples: 'Steel rebar, wire rod, aluminum extrusions, steel pipe' },
              { title: 'Agricultural Equipment', rate: 'Various', countries: 'China, Vietnam', examples: 'Farm machinery, tractors, harvesters, irrigation equipment' },
              { title: 'Industrial Machinery', rate: 'Various', countries: 'China, Taiwan', examples: 'Manufacturing equipment, industrial components' },
              { title: 'Fertilizer Products', rate: '20-100%', countries: 'China, Morocco, Russia', examples: 'Phosphate fertilizers, ammonium sulfate' },
              { title: 'Chemical Products', rate: 'Various', countries: 'China, India', examples: 'Agricultural chemicals, industrial chemicals' },
              { title: 'Tires & Rubber Products', rate: '25-100%', countries: 'China, Vietnam, Thailand', examples: 'Agricultural tires, industrial tires' },
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
            <h3 className="text-2xl font-bold mb-4">Port of Stockton AD/CVD Risk Assessment</h3>
            <p className="text-neutral-200">
              Stockton agricultural and industrial importers bringing products from China, Vietnam, or other high-risk countries through Port of Stockton face significant AD/CVD exposure. Our Stockton attorney conducts comprehensive AD/CVD risk assessments and develops avoidance strategies.
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
                  <a href="#modesto-customs-attorney" className="service-link">
                    <span className="service-link__title">Modesto AD/CVD Defense</span>
                    <p className="service-link__description">Central Valley support</p>
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
                  <a href="#resources/eapa-defense" className="service-link">
                    <span className="service-link__title">EAPA Investigation Guide</span>
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
      <RelatedCityPages currentCity="Stockton" region="central-valley" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Avoid Massive Anti-Dumping & Countervailing Duties
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            AD/CVD rates can exceed 200% on agricultural and industrial products, destroying your profit margins. Our Stockton anti-dumping duty attorney helps Central Valley importers avoid or minimize these duties through scope rulings, country of origin planning, and EAPA defense. Free consultation.
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

export default StocktonAntiDumpingPage;
