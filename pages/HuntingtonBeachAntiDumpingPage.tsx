import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { Link } from 'react-router-dom';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const HuntingtonBeachAntiDumpingPage: React.FC = () => {
  useMeta({
    title: 'Huntington Beach Anti-Dumping Duty Attorney | AD/CVD Lawyer Orange County',
    description: 'Huntington Beach anti-dumping duty attorney. Expert AD/CVD defense for sporting goods, marine equipment, aluminum, steel. Scope rulings, EAPA defense. (310) 744-1328.',
    keywords: 'anti-dumping attorney huntington beach, ad cvd lawyer orange county, scope ruling attorney huntington beach, eapa defense lawyer, countervailing duty attorney, marine trade lawyer',
    canonical: 'huntington-beach-antidumping-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-antidumping.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Huntington Beach Anti-Dumping Duty Attorney - AD/CVD Defense for Marine & Sporting Goods',
        description: 'Expert Huntington Beach anti-dumping duty attorney providing scope rulings, EAPA investigation defense, and AD/CVD mitigation for Orange County marine, sporting goods, and manufacturing importers.',
        url: `${siteConfig.siteUrl}/huntington-beach-antidumping-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Huntington Beach Anti-Dumping Attorney', url: `${siteConfig.siteUrl}/huntington-beach-antidumping-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What are antidumping and countervailing duties (AD/CVD)?',
          answer: 'Antidumping duties (AD) are additional tariffs imposed when foreign companies sell products in the U.S. below fair market value. Countervailing duties (CVD) offset foreign government subsidies. AD/CVD rates can exceed 200% for certain products from China, Vietnam, and other countries. These duties are IN ADDITION to normal HTS tariffs. Our Huntington Beach anti-dumping attorney helps Orange County businesses determine if their marine equipment, sporting goods, or manufacturing imports are subject to AD/CVD orders.',
        },
        {
          question: 'What products commonly face AD/CVD for Huntington Beach importers?',
          answer: 'Huntington Beach importers face AD/CVD exposure on: aluminum extrusions used in marine and sporting equipment (30-200%), steel products (100-200%+), sporting goods from China (various rates), marine equipment and accessories from China and Taiwan, fishing equipment, and various recreational products. If you import marine, sporting goods, or aluminum products from China, Vietnam, or Taiwan, AD/CVD assessment is essential.',
        },
        {
          question: 'How can scope rulings help my Huntington Beach marine or sporting goods business?',
          answer: 'A scope ruling from the Department of Commerce determines whether your specific marine equipment or sporting goods product is covered by an existing AD/CVD order. If your product is excluded from scope due to technical specifications, specialized use, or design, you avoid massive AD/CVD duties. Our Huntington Beach attorney prepares detailed scope ruling requests with technical documentation, product specifications, and photos demonstrating your product is outside the order scope.',
        },
        {
          question: 'What is an EAPA investigation for marine and sporting goods importers?',
          answer: 'EAPA (Enforce and Protect Act) investigations examine whether importers are evading AD/CVD orders through transshipment, falsified country of origin, or minor alterations. Huntington Beach marine and sporting goods importers bringing aluminum products, steel components, or equipment from China via third countries face EAPA scrutiny. CBP can detain shipments and demand massive cash deposits. Our Huntington Beach EAPA defense attorney represents marine and sporting goods importers through investigation.',
        },
        {
          question: 'How do I avoid AD/CVD duties on marine equipment imports to Huntington Beach?',
          answer: 'Strategies for Huntington Beach marine and sporting goods importers include: (1) Scope Rulings demonstrating your product specifications or specialized use place you outside the order, (2) Country of origin planning to source from non-covered countries, (3) Substantial transformation through assembly or finishing in third countries, (4) Product design modifications that place you outside scope, (5) Participating in administrative reviews for company-specific rates. Our Huntington Beach anti-dumping attorney evaluates which strategies work for your specific products.',
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
      <section className="hero" aria-label="Huntington Beach Anti-Dumping Defense Hero">
        <picture className="hero-bg">
          <img
            src="/images/hero-port-background.jpg"
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
          <h1>Huntington Beach Anti-Dumping Duty Attorney<br />AD/CVD Defense for Marine & Sporting Goods</h1>
          <p className="hero-subtitle">
            Expert anti-dumping and countervailing duty defense for Huntington Beach marine, sporting goods, and manufacturing importers. Scope rulings, EAPA investigations, and AD/CVD avoidance strategies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free AD/CVD Analysis</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Huntington Beach Anti-Dumping Defense Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Orange County AD/CVD Defense Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Antidumping and countervailing duties can add <strong>50% to 200%+ in additional tariffs</strong> to your Huntington Beach marine and sporting goods imports. Aluminum extrusions, steel products, marine equipment, and sporting goods from China, Vietnam, and Taiwan face massive AD/CVD exposure. Our Huntington Beach anti-dumping duty attorney helps Orange County importers avoid or minimize AD/CVD through scope rulings, country of origin planning, and EAPA investigation defense.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Marine & Sporting Goods Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized expertise in <strong>marine equipment and sporting goods AD/CVD issues</strong> - aluminum products, equipment imports.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Scope Ruling Success</h3>
              <p className="text-text-secondary leading-relaxed">
                Successful <strong>scope exclusion rulings</strong> saving Huntington Beach importers millions in avoided AD/CVD duties.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Orange County Location</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct support for <strong>Huntington Beach and OC importers</strong>, CBP detentions, and cash deposit requirements.
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
                A successful scope ruling excludes your marine or sporting goods product from AD/CVD orders, <strong>eliminating massive duty liability</strong>. Our Huntington Beach anti-dumping attorney prepares:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Scope ruling applications to Department of Commerce</li>
                <li>Detailed product specifications with photos and technical drawings</li>
                <li>Physical characteristic analysis vs. scope language</li>
                <li>End-use and application evidence for marine and sporting goods</li>
                <li>Product samples, testing results, and certifications</li>
                <li>Manufacturing process and assembly documentation</li>
                <li>Legal argument for scope exclusion based on specialized use</li>
                <li>Follow-up submissions and responses to Commerce questions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EAPA Investigation Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Huntington Beach importers bringing marine or sporting goods products from China via third countries face <strong>EAPA scrutiny for AD/CVD evasion</strong>. Defend aggressively:
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
                AD/CVD orders are <strong>country-specific</strong>. Strategic country of origin planning can avoid coverage for marine and sporting goods:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Substantial transformation analysis for multi-country supply chains</li>
                <li>Assembly and finishing operations that change country of origin</li>
                <li>Third-country processing and manufacturing strategies</li>
                <li>Country of origin rulings from CBP for marine equipment</li>
                <li>Documentation requirements for origin claims</li>
                <li>Supply chain restructuring to avoid AD/CVD countries</li>
                <li>EAPA-proof country of origin substantiation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Aluminum Extrusions AD/CVD Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Aluminum extrusions from China and Vietnam face <strong>30-200% AD/CVD duties</strong>. Specialized defense for aluminum importers:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Aluminum extrusion scope ruling requests</li>
                <li>Marine equipment aluminum component analysis</li>
                <li>Sporting goods aluminum frame scope determinations</li>
                <li>Finished goods exclusions for substantially transformed products</li>
                <li>Multi-component product scope analysis</li>
                <li>Vietnam aluminum transshipment EAPA defense</li>
                <li>Downstream aluminum product exemptions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Marine & Sporting Goods AD/CVD</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Marine equipment and sporting goods face <strong>various AD/CVD rates</strong> depending on materials and origin:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Marine equipment scope ruling strategies</li>
                <li>Sporting goods classification and scope analysis</li>
                <li>Fishing equipment and tackle AD/CVD assessment</li>
                <li>Recreational watercraft component origin determination</li>
                <li>Steel component AD/CVD for marine equipment (100-200%+)</li>
                <li>Finished sporting goods vs. component scope distinctions</li>
                <li>Substantially transformed recreational product analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">AD/CVD Cash Deposit & Suspension of Liquidation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP determines your marine or sporting goods products are subject to AD/CVD, <strong>massive cash deposits are required</strong>. We help minimize impact:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Cash deposit rate determination and verification</li>
                <li>Continuous bond sufficiency analysis for marine importers</li>
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
            Common AD/CVD Orders Affecting Huntington Beach Importers
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Aluminum Extrusions', rate: '30-200%', countries: 'China, Vietnam', examples: 'Marine equipment frames, sporting goods components, structural parts' },
              { title: 'Steel Products', rate: '100-200%+', countries: 'China, Vietnam, South Korea', examples: 'Steel wire, fasteners, marine hardware, sporting goods components' },
              { title: 'Aluminum Sheet & Plate', rate: '20-100%', countries: 'China, various countries', examples: 'Marine aluminum, boat building materials' },
              { title: 'Fishing Equipment', rate: 'Various', countries: 'China, Taiwan', examples: 'Fishing rods, reels, tackle components' },
              { title: 'Recreational Watercraft Parts', rate: 'Various', countries: 'China, Taiwan', examples: 'Aluminum components, steel hardware' },
              { title: 'Sporting Goods Components', rate: 'Various', countries: 'China, Vietnam', examples: 'Aluminum frames, steel components, equipment parts' },
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
            <h3 className="text-2xl font-bold mb-4">Huntington Beach Marine & Sporting Goods AD/CVD Risk Assessment</h3>
            <p className="text-neutral-200">
              Huntington Beach marine equipment and sporting goods importers bringing aluminum, steel, or finished products from China, Vietnam, or Taiwan face significant AD/CVD exposure. Aluminum extrusion orders alone can add up to 200% in duties. Our Huntington Beach attorney conducts comprehensive AD/CVD risk assessments and develops avoidance strategies.
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

            {/* Orange County Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Orange County Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/irvine-trade-compliance" className="service-link">
                    <span className="service-link__title">Irvine AD/CVD Defense</span>
                    <p className="service-link__description">Orange County support</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/anaheim-customs-attorney" className="service-link">
                    <span className="service-link__title">Anaheim AD/CVD Defense</span>
                    <p className="service-link__description">North OC support</p>
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
                  <Link to="/resources/aluminum-ad-cvd" className="service-link">
                    <span className="service-link__title">Aluminum AD/CVD Guide</span>
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
      <RelatedCityPages currentCity="Huntington Beach" region="orange-county" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Avoid Massive Anti-Dumping & Countervailing Duties
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            AD/CVD rates can exceed 200% on aluminum and steel products, destroying your profit margins. Our Huntington Beach anti-dumping duty attorney helps Orange County marine and sporting goods importers avoid or minimize these duties through scope rulings, country of origin planning, and EAPA defense. Free consultation.
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

export default HuntingtonBeachAntiDumpingPage;
