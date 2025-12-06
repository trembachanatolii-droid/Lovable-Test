import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { Link } from 'react-router-dom';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SantaClaraAntiDumpingPage: React.FC = () => {
  useMeta({
    title: 'Santa Clara Anti-Dumping Duty Attorney | AD/CVD Lawyer Silicon Valley',
    description: 'Santa Clara anti-dumping duty attorney. Expert AD/CVD defense for tech hardware, solar panels, electronics. Scope rulings, EAPA defense. (310) 744-1328.',
    keywords: 'anti-dumping attorney santa clara, ad cvd lawyer silicon valley, scope ruling attorney santa clara, eapa defense lawyer, countervailing duty attorney, dumping defense bay area',
    canonical: 'santa-clara-antidumping-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-antidumping.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Santa Clara Anti-Dumping Duty Attorney - AD/CVD Defense for Tech & Electronics',
        description: 'Expert Santa Clara anti-dumping duty attorney providing scope rulings, EAPA investigation defense, and AD/CVD mitigation for Silicon Valley tech importers.',
        url: `${siteConfig.siteUrl}/santa-clara-antidumping-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Santa Clara Anti-Dumping Attorney', url: `${siteConfig.siteUrl}/santa-clara-antidumping-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What are antidumping and countervailing duties (AD/CVD)?',
          answer: 'Antidumping duties (AD) are additional tariffs imposed when foreign companies sell products in the U.S. below fair market value. Countervailing duties (CVD) offset foreign government subsidies. AD/CVD rates can exceed 200% for certain products from China, Vietnam, and other countries. These duties are IN ADDITION to normal HTS tariffs. Our Santa Clara anti-dumping attorney helps Silicon Valley tech companies determine if their electronics, solar panels, or hardware components are subject to AD/CVD orders.',
        },
        {
          question: 'What tech products are commonly subject to AD/CVD orders?',
          answer: 'Santa Clara tech importers face AD/CVD exposure on: solar cells and modules from China (50-250% duties), aluminum extrusions used in electronics casings (30-200%), certain steel components (100%+), lithium-ion batteries from China, printed circuit board assemblies, and various electronic components. If you import tech hardware from China, Taiwan, Vietnam, or South Korea, AD/CVD risk is significant.',
        },
        {
          question: 'How can scope rulings help my Santa Clara tech company?',
          answer: 'A scope ruling from the Department of Commerce determines whether your specific tech product is covered by an existing AD/CVD order. If your product is excluded from scope due to technical specifications, end-use, or physical characteristics, you avoid massive AD/CVD duties. Our Santa Clara attorney prepares detailed scope ruling requests with technical documentation demonstrating your product is outside the order scope.',
        },
        {
          question: 'What is an EAPA investigation and why do Silicon Valley companies face them?',
          answer: 'EAPA (Enforce and Protect Act) investigations examine whether importers are evading AD/CVD orders through transshipment, falsified country of origin, or minor alterations. Silicon Valley companies importing solar panels, electronics, or aluminum products from China via third countries face heightened EAPA scrutiny. CBP can detain shipments and demand massive cash deposits. Our Santa Clara EAPA defense attorney represents tech companies through investigation.',
        },
        {
          question: 'How do I avoid AD/CVD duties on electronics imports?',
          answer: 'Strategies for Santa Clara tech importers include: (1) Scope Rulings demonstrating your product specifications place you outside the order, (2) Country of origin planning to source from non-covered countries, (3) Substantial transformation in third countries with proper documentation, (4) Product design modifications that place you outside scope, (5) Participating in administrative reviews for lower rates. Our Santa Clara anti-dumping attorney evaluates which strategies work for your specific products.',
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
      <section className="hero" aria-label="Santa Clara Anti-Dumping Defense Hero">
        <picture className="hero-bg">
          <img
            src="/images/hero-port-background-2.jpg"
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
          <h1>Santa Clara Anti-Dumping Duty Attorney<br />AD/CVD Defense for Silicon Valley Tech</h1>
          <p className="hero-subtitle">
            Expert anti-dumping and countervailing duty defense for Santa Clara tech importers. Scope rulings, EAPA investigations, and AD/CVD avoidance strategies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact#schedule-consultation" className="hero-cta">Free AD/CVD Analysis</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Santa Clara Anti-Dumping Defense Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Silicon Valley Tech AD/CVD Defense Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Antidumping and countervailing duties can add <strong>50% to 200%+ in additional tariffs</strong> to your Santa Clara tech imports. Solar panels, electronics components, aluminum casings, and batteries from China face massive AD/CVD exposure. Our Santa Clara anti-dumping duty attorney helps Silicon Valley companies avoid or minimize AD/CVD through scope rulings, country of origin planning, and EAPA investigation defense.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tech Industry Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized expertise in <strong>tech hardware AD/CVD issues</strong> - electronics, solar panels, batteries, and component imports.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Scope Ruling Success</h3>
              <p className="text-text-secondary leading-relaxed">
                Successful <strong>scope exclusion rulings</strong> saving Santa Clara tech companies millions in avoided AD/CVD duties.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Silicon Valley Location</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct support for <strong>Santa Clara tech importers</strong>, CBP detentions, and cash deposit requirements.
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
                A successful scope ruling excludes your tech product from AD/CVD orders, <strong>eliminating massive duty liability</strong>. Our Santa Clara anti-dumping attorney prepares:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Scope ruling applications to Department of Commerce</li>
                <li>Technical product specifications and engineering documentation</li>
                <li>Physical characteristic analysis vs. scope language</li>
                <li>End-use and application evidence for tech products</li>
                <li>Product samples, testing results, and certifications</li>
                <li>Manufacturing process documentation</li>
                <li>Legal argument for scope exclusion based on technical specs</li>
                <li>Follow-up submissions and responses to Commerce questions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EAPA Investigation Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Silicon Valley tech companies importing from China via third countries face <strong>heightened EAPA scrutiny for AD/CVD evasion</strong>. Defend aggressively:
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
                AD/CVD orders are <strong>country-specific</strong>. Strategic country of origin planning can avoid coverage for tech products:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Substantial transformation analysis for multi-country tech supply chains</li>
                <li>Manufacturing operations that change country of origin</li>
                <li>Third-country processing and assembly strategies</li>
                <li>Country of origin rulings from CBP for electronics</li>
                <li>Documentation requirements for origin claims</li>
                <li>Supply chain restructuring to avoid AD/CVD countries</li>
                <li>EAPA-proof country of origin substantiation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Solar Panel AD/CVD Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Solar cells and modules from China face <strong>50-250% AD/CVD duties</strong>. Specialized defense for solar importers:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Solar panel scope ruling requests</li>
                <li>Circumvention inquiry defense (China-origin cells in third countries)</li>
                <li>Country of origin analysis for multi-country solar manufacturing</li>
                <li>Bifacial module and PERC technology scope determinations</li>
                <li>Wafer, cell, and module origin tracing</li>
                <li>EAPA defense for solar panel transshipment allegations</li>
                <li>Cash deposit and bonding strategies for solar imports</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Electronics & Components AD/CVD</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Electronics components and assemblies face <strong>AD/CVD exposure on aluminum, steel, and other materials</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Aluminum extrusion AD/CVD for electronics casings (China, Vietnam)</li>
                <li>Steel component AD/CVD analysis</li>
                <li>Printed circuit board assembly origin determination</li>
                <li>Lithium-ion battery AD/CVD assessment</li>
                <li>Component-level scope ruling strategies</li>
                <li>Substantially transformed finished goods analysis</li>
                <li>Tech hardware downstream product exemptions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">AD/CVD Cash Deposit & Suspension of Liquidation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP determines your tech products are subject to AD/CVD, <strong>massive cash deposits are required</strong>. We help minimize impact:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Cash deposit rate determination and verification</li>
                <li>Continuous bond sufficiency analysis for tech importers</li>
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

      {/* Common AD/CVD Orders for Tech */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Common AD/CVD Orders Affecting Santa Clara Tech Importers
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Solar Cells & Modules', rate: '50-250%', countries: 'China, Taiwan, Vietnam, Malaysia, Thailand, Cambodia', examples: 'Solar panels, photovoltaic cells, crystalline silicon modules' },
              { title: 'Aluminum Extrusions', rate: '30-200%', countries: 'China, Vietnam', examples: 'Electronics casings, heat sinks, structural components' },
              { title: 'Steel Components', rate: '100-200%+', countries: 'China, Vietnam, South Korea', examples: 'Steel wire, fasteners, server rack components' },
              { title: 'Lithium-Ion Batteries', rate: 'Various', countries: 'China', examples: 'Rechargeable lithium batteries, power banks' },
              { title: 'Printed Circuit Boards', rate: 'Various', countries: 'China, Taiwan', examples: 'PCB assemblies with covered components' },
              { title: 'LED Products', rate: 'Various', countries: 'China', examples: 'LED lighting components, displays' },
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
            <h3 className="text-2xl font-bold mb-4">Silicon Valley Tech AD/CVD Risk Assessment</h3>
            <p className="text-neutral-200">
              Santa Clara tech companies importing solar panels, electronics, aluminum products, or batteries from China, Vietnam, or Taiwan face significant AD/CVD exposure. Our Santa Clara attorney conducts comprehensive AD/CVD risk assessments and develops avoidance strategies.
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
                  <Link to="/scope-rulings" className="service-link">
                    <span className="service-link__title">Scope Ruling Requests</span>
                    <p className="service-link__description">Commerce scope determinations</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/eapa-defense" className="service-link">
                    <span className="service-link__title">EAPA Investigation Defense</span>
                    <p className="service-link__description">Evasion allegation defense</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/country-of-origin" className="service-link">
                    <span className="service-link__title">Country of Origin Planning</span>
                    <p className="service-link__description">Substantial transformation</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bay Area Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Bay Area Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/san-jose-customs-lawyer" className="service-link">
                    <span className="service-link__title">San Jose AD/CVD Defense</span>
                    <p className="service-link__description">Silicon Valley tech defense</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/oakland-trade-attorney" className="service-link">
                    <span className="service-link__title">Oakland AD/CVD Defense</span>
                    <p className="service-link__description">Port of Oakland support</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">AD/CVD Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/antidumping-guide" className="service-link">
                    <span className="service-link__title">Anti-Dumping Defense Guide</span>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/scope-ruling-strategies" className="service-link">
                    <span className="service-link__title">Scope Ruling Strategies</span>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related City Pages */}
      <RelatedCityPages currentCity="Santa Clara" region="bay-area" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Avoid Massive Anti-Dumping & Countervailing Duties
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            AD/CVD rates can exceed 200% on tech products, destroying your profit margins. Our Santa Clara anti-dumping duty attorney helps Silicon Valley companies avoid or minimize these duties through scope rulings, country of origin planning, and EAPA defense. Free consultation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact#schedule-consultation" variant="solid">
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

export default SantaClaraAntiDumpingPage;
