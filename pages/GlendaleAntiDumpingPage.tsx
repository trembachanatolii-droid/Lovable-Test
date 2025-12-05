import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { Link } from 'react-router-dom';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const GlendaleAntiDumpingPage: React.FC = () => {
  useMeta({
    title: 'Glendale Anti-Dumping Duty Attorney | AD/CVD Lawyer Los Angeles County',
    description: 'Glendale anti-dumping duty attorney. Expert AD/CVD defense for furniture, textiles, steel, aluminum. Scope rulings, EAPA defense. (310) 744-1328.',
    keywords: 'anti-dumping attorney glendale, ad cvd lawyer glendale, scope ruling attorney los angeles, eapa defense lawyer, countervailing duty attorney, furniture trade lawyer',
    canonical: 'glendale-antidumping-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-antidumping.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Glendale Anti-Dumping Duty Attorney - AD/CVD Defense for Furniture & Apparel Imports',
        description: 'Expert Glendale anti-dumping duty attorney providing scope rulings, EAPA investigation defense, and AD/CVD mitigation for Los Angeles County furniture, textile, and manufacturing importers.',
        url: `${siteConfig.siteUrl}/glendale-antidumping-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Glendale Anti-Dumping Attorney', url: `${siteConfig.siteUrl}/glendale-antidumping-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What are antidumping and countervailing duties (AD/CVD)?',
          answer: 'Antidumping duties (AD) are additional tariffs imposed when foreign companies sell products in the U.S. below fair market value. Countervailing duties (CVD) offset foreign government subsidies. AD/CVD rates can exceed 200% for certain products from China, Vietnam, and other countries. These duties are IN ADDITION to normal HTS tariffs. Our Glendale anti-dumping attorney helps Los Angeles County businesses determine if their furniture, textiles, or manufacturing imports are subject to AD/CVD orders.',
        },
        {
          question: 'What products commonly face AD/CVD for Glendale importers?',
          answer: 'Glendale importers face AD/CVD exposure on: wooden bedroom furniture from China and Vietnam (0-216%), wooden cabinets and vanities from China (0-262%), aluminum extrusions from China (30-200%), steel products (100-200%+), textiles and apparel from China and Vietnam (30-300%), and hardwood plywood from China and Vietnam (20-180%). If you import furniture, textiles, or home goods from China or Vietnam, AD/CVD assessment is essential.',
        },
        {
          question: 'How can scope rulings help my Glendale furniture business?',
          answer: 'A scope ruling from the Department of Commerce determines whether your specific furniture product is covered by an existing AD/CVD order. If your furniture is excluded from scope due to design, materials, construction method, or end-use, you avoid massive AD/CVD duties. Our Glendale attorney prepares detailed scope ruling requests with product specifications, photos, and technical documentation demonstrating your furniture is outside the order scope.',
        },
        {
          question: 'What is an EAPA investigation for furniture and textile importers?',
          answer: 'EAPA (Enforce and Protect Act) investigations examine whether importers are evading AD/CVD orders through transshipment, falsified country of origin, or minor alterations. Glendale furniture and textile importers bringing products from China via Vietnam, Malaysia, or other third countries face heightened EAPA scrutiny. CBP can detain shipments and demand massive cash deposits. Our Glendale EAPA defense attorney represents furniture and apparel importers through investigation.',
        },
        {
          question: 'How do I avoid AD/CVD duties on furniture imports to Glendale?',
          answer: 'Strategies for Glendale furniture importers include: (1) Scope Rulings demonstrating your furniture design or materials place you outside the order, (2) Country of origin planning to source from non-covered countries, (3) Substantial transformation through assembly or finishing in third countries, (4) Furniture design modifications that place you outside scope, (5) Participating in administrative reviews for company-specific rates. Our Glendale anti-dumping attorney evaluates which strategies work for your specific furniture products.',
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
      <section className="hero" aria-label="Glendale Anti-Dumping Defense Hero">
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
          <h1>Glendale Anti-Dumping Duty Attorney<br />AD/CVD Defense for Furniture & Apparel</h1>
          <p className="hero-subtitle">
            Expert anti-dumping and countervailing duty defense for Glendale furniture, textile, and manufacturing importers. Scope rulings, EAPA investigations, and AD/CVD avoidance strategies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free AD/CVD Analysis</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Glendale Anti-Dumping Defense Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Los Angeles County AD/CVD Defense Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Antidumping and countervailing duties can add <strong>50% to 262%+ in additional tariffs</strong> to your Glendale furniture and textile imports. Wooden furniture, cabinets, textiles, aluminum, and steel products from China and Vietnam face massive AD/CVD exposure. Our Glendale anti-dumping duty attorney helps Los Angeles County importers avoid or minimize AD/CVD through scope rulings, country of origin planning, and EAPA investigation defense.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Furniture & Textile Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized expertise in <strong>furniture and textile AD/CVD issues</strong> - wooden furniture, cabinets, apparel imports.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Scope Ruling Success</h3>
              <p className="text-text-secondary leading-relaxed">
                Successful <strong>scope exclusion rulings</strong> saving Glendale furniture importers millions in avoided AD/CVD duties.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">LA County Location</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct support for <strong>Glendale and LA County importers</strong>, CBP detentions, and cash deposit requirements.
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
                A successful scope ruling excludes your furniture or textile product from AD/CVD orders, <strong>eliminating massive duty liability</strong>. Our Glendale anti-dumping attorney prepares:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Scope ruling applications to Department of Commerce</li>
                <li>Detailed product specifications with photos and dimensions</li>
                <li>Physical characteristic analysis vs. scope language</li>
                <li>End-use and application evidence for furniture products</li>
                <li>Product samples, construction details, and materials documentation</li>
                <li>Manufacturing process and assembly documentation</li>
                <li>Legal argument for scope exclusion based on design or materials</li>
                <li>Follow-up submissions and responses to Commerce questions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EAPA Investigation Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Glendale furniture and textile importers bringing products from China via third countries face <strong>heightened EAPA scrutiny for AD/CVD evasion</strong>. Defend aggressively:
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
                AD/CVD orders are <strong>country-specific</strong>. Strategic country of origin planning can avoid coverage for furniture and textiles:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Substantial transformation analysis for multi-country furniture supply chains</li>
                <li>Assembly and finishing operations that change country of origin</li>
                <li>Third-country processing and upholstery strategies</li>
                <li>Country of origin rulings from CBP for furniture products</li>
                <li>Documentation requirements for furniture origin claims</li>
                <li>Supply chain restructuring to avoid AD/CVD countries</li>
                <li>EAPA-proof country of origin substantiation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Wooden Furniture AD/CVD Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Wooden bedroom furniture and cabinets from China and Vietnam face <strong>0-262% AD/CVD duties</strong>. Specialized defense for furniture importers:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Wooden bedroom furniture scope ruling requests (China: 0-216%)</li>
                <li>Wooden cabinet and vanity scope determinations (China: 0-262%)</li>
                <li>Furniture design and construction scope analysis</li>
                <li>Multi-functional furniture scope exclusions</li>
                <li>Non-bedroom furniture exemptions</li>
                <li>Substantially transformed furniture product analysis</li>
                <li>Vietnam furniture transshipment EAPA defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Textiles & Apparel AD/CVD</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Textiles and apparel from China and Vietnam face <strong>30-300% AD/CVD duties</strong> on various products:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Polyester staple fiber AD/CVD (China: 30-200%)</li>
                <li>Certain woven fabric scope determinations</li>
                <li>Apparel and finished textile product analysis</li>
                <li>Fabric vs. finished garment scope distinctions</li>
                <li>Country of origin for cut-and-sew operations</li>
                <li>Textile transshipment EAPA defense</li>
                <li>Substantially transformed apparel product exemptions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">AD/CVD Cash Deposit & Suspension of Liquidation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP determines your furniture or textile products are subject to AD/CVD, <strong>massive cash deposits are required</strong>. We help minimize impact:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Cash deposit rate determination and verification</li>
                <li>Continuous bond sufficiency analysis for furniture importers</li>
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
            Common AD/CVD Orders Affecting Glendale Importers
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Wooden Bedroom Furniture', rate: '0-216%', countries: 'China, Vietnam', examples: 'Beds, dressers, nightstands, armoires' },
              { title: 'Wooden Cabinets & Vanities', rate: '0-262%', countries: 'China', examples: 'Kitchen cabinets, bathroom vanities, storage cabinets' },
              { title: 'Hardwood Plywood', rate: '20-180%', countries: 'China, Vietnam', examples: 'Decorative plywood, cabinet plywood' },
              { title: 'Aluminum Extrusions', rate: '30-200%', countries: 'China, Vietnam', examples: 'Furniture frames, structural components' },
              { title: 'Textiles & Apparel', rate: '30-300%', countries: 'China, Vietnam, Pakistan', examples: 'Polyester staple fiber, woven fabrics, garments' },
              { title: 'Steel Products', rate: '100-200%+', countries: 'China, Vietnam, South Korea', examples: 'Steel wire, fasteners, furniture components' },
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
            <h3 className="text-2xl font-bold mb-4">Glendale Furniture & Textile AD/CVD Risk Assessment</h3>
            <p className="text-neutral-200">
              Glendale furniture, textile, and home goods importers bringing products from China or Vietnam face significant AD/CVD exposure. Wooden furniture orders alone can add up to 262% in duties. Our Glendale attorney conducts comprehensive AD/CVD risk assessments and develops avoidance strategies.
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

            {/* LA County Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">LA County Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/los-angeles-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Los Angeles AD/CVD Defense</span>
                    <p className="service-link__description">Downtown LA support</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/pasadena-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Pasadena AD/CVD Defense</span>
                    <p className="service-link__description">San Gabriel Valley support</p>
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
                  <Link to="/resources/furniture-ad-cvd" className="service-link">
                    <span className="service-link__title">Furniture AD/CVD Guide</span>
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
      <RelatedCityPages currentCity="Glendale" region="los-angeles" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Avoid Massive Anti-Dumping & Countervailing Duties
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            AD/CVD rates can exceed 262% on furniture and textiles, destroying your profit margins. Our Glendale anti-dumping duty attorney helps Los Angeles County importers avoid or minimize these duties through scope rulings, country of origin planning, and EAPA defense. Free consultation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">
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

export default GlendaleAntiDumpingPage;
