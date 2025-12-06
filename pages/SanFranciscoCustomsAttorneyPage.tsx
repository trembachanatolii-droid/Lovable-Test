
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanFranciscoCustomsAttorneyPage: React.FC = () => {
  useMeta({
    title: 'San Francisco Customs Attorney | Tariff Lawyer SF',
    description: 'San Francisco customs attorney & tariff lawyer. SF Bay Area trade law firm. CBP defense, tariff classification, customs audits. Port of Oakland access. (310) 744-1328.',
    keywords: 'customs attorney san francisco, tariff lawyer san francisco, trade attorney sf, international trade lawyer bay area, customs lawyer san francisco ca, tariff attorney northern california, sf import export lawyer, cbp defense attorney san francisco',
    canonical: 'san-francisco-customs-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-san-francisco.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'San Francisco Customs Attorney & Tariff Lawyer - Bay Area Trade Law Firm',
        description: 'San Francisco customs attorney and tariff lawyer providing expert legal representation for tariff classification, CBP defense, customs audits, and international trade compliance.',
        url: `${siteConfig.siteUrl}/san-francisco-customs-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'San Francisco Customs Attorney', url: `${siteConfig.siteUrl}/san-francisco-customs-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a San Francisco customs attorney for trade matters?',
          answer: 'A San Francisco-based customs attorney offers direct access to Port of Oakland, the fourth busiest container port in the U.S., and serves the Bay Area\'s thriving tech, wine, food, and manufacturing sectors. Our SF location enables rapid response to CBP matters affecting Silicon Valley, East Bay, and Peninsula businesses.',
        },
        {
          question: 'What tariff and customs services do you offer in San Francisco?',
          answer: 'Our San Francisco office provides comprehensive tariff and customs services including: tariff classification and HTS code optimization, CBP audit defense, customs penalty mitigation, Section 301 tariff strategies, UFLPA forced labor compliance, duty drawback claims, antidumping/countervailing duty defense, export controls (ITAR/EAR), and trade compliance program development.',
        },
        {
          question: 'How close is your SF office to the Port of Oakland?',
          answer: 'Our San Francisco location provides excellent access to Port of Oakland (approximately 20-30 minutes via I-880 or I-80). This proximity allows us to respond rapidly to CBP detentions, attend cargo examinations, and coordinate with customs officials for urgent trade matters affecting Bay Area importers.',
        },
        {
          question: 'What industries do you serve from your San Francisco office?',
          answer: 'From our San Francisco office, we represent importers and exporters across industries including technology/electronics (Silicon Valley), wine and spirits, specialty foods, biotechnology/medical devices, apparel, consumer goods, and e-commerce. We understand the unique trade challenges facing Bay Area innovators and manufacturers.',
        },
        {
          question: 'Can you help with export control matters for tech companies?',
          answer: 'Yes. Our San Francisco customs attorney team has extensive experience with export controls affecting Bay Area tech companies, including ITAR registration, EAR licensing, deemed export compliance, and encryption export regulations. We help Silicon Valley companies navigate complex export requirements.',
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
      <section className="hero" aria-label="San Francisco Customs Attorney Hero">
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
          <h1>San Francisco Customs Attorney<br />Tariff Lawyer California</h1>
          <p className="hero-subtitle">
            San Francisco customs attorney and tariff lawyer serving Bay Area businesses. Expert CBP defense, tariff classification, and trade compliance with access to Port of Oakland.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a San Francisco Customs Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Your Local Tariff & Customs Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving San Francisco and the Bay Area with expert tariff and customs legal services. Our SF location provides immediate access to <strong>Port of Oakland</strong>, serving tech companies, wine importers, food businesses, and manufacturers throughout Northern California.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bay Area Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Serving <strong>Silicon Valley, SF, East Bay, and Peninsula</strong> businesses with specialized knowledge of tech exports, wine imports, and Bay Area trade patterns.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Oakland Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct access to <strong>Port of Oakland</strong> for rapid response to CBP cargo detentions, examinations, and customs issues affecting Northern California importers.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tech Trade Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep expertise in <strong>export controls, encryption</strong>, and deemed export compliance critical for Silicon Valley tech companies and innovators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Tariff & Customs Services in San Francisco
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Code Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your San Francisco tariff lawyer, we ensure your products are correctly classified under the Harmonized Tariff Schedule (HTS). Proper classification can mean the difference between <strong>0% and 25%+ duty rates</strong>. Critical for Bay Area wine, food, and tech importers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification analysis and optimization</li>
                <li>Binding Ruling requests (NY/HQ rulings)</li>
                <li>Tariff engineering for duty minimization</li>
                <li>Classification dispute defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP audits Port of Oakland importers regularly. Our San Francisco customs attorney team defends you through Focused Assessments, Quick Response Audits, and penalty proceedings. We've helped Bay Area clients <strong>reduce penalties by 75% or more</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense</li>
                <li>Prior Disclosure filings to cap penalties</li>
                <li>CF-28/CF-29 response preparation</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Controls & Tech Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Silicon Valley companies face complex export control requirements. Our SF customs attorney team provides <strong>ITAR/EAR compliance, encryption export</strong> guidance, and deemed export advisory for tech companies, biotech firms, and manufacturers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ITAR registration and compliance</li>
                <li>EAR licensing and classification</li>
                <li>Encryption export (TSU/740.17)</li>
                <li>Deemed export compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                China tariffs (Section 301) add <strong>7.5% to 25%</strong> to import costs. Our San Francisco trade law firm helps Bay Area businesses navigate exclusions, supply chain restructuring, and tariff engineering to minimize duty burden.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 exclusion analysis</li>
                <li>Substantial transformation opinions</li>
                <li>Third-country sourcing compliance</li>
                <li>Tariff refund/protest strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Wine & Beverage Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                San Francisco is the gateway for wine and beverage imports. We handle <strong>TTB certificates, FDA compliance</strong>, customs classification, and labeling requirements for wine importers and distributors.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Wine/spirits HTS classification</li>
                <li>TTB COLA and formula approvals</li>
                <li>FDA food import compliance</li>
                <li>Antidumping duty (wine) defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Seizure & Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP seizes or detains your cargo at Port of Oakland, every day costs money. Our San Francisco location allows for <strong>rapid response</strong> to port emergencies. We file admissibility packages and petitions to release your goods.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Seizure notice response (19 USC § 1618)</li>
                <li>Petition for release of detained goods</li>
                <li>IPR/trademark seizure defense</li>
                <li>FDA/TTB hold resolution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from San Francisco */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our San Francisco Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* San Francisco & Peninsula */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Francisco & Peninsula</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve all San Francisco and Peninsula communities:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'San Francisco', 'Daly City', 'South San Francisco', 'San Bruno',
                  'Millbrae', 'Burlingame', 'San Mateo', 'Redwood City',
                  'Palo Alto', 'Mountain View', 'Sunnyvale', 'Santa Clara',
                  'San Jose', 'Menlo Park', 'Atherton', 'Los Altos'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* East Bay & North Bay */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">East Bay & North Bay</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Easy access for East Bay and North Bay businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Oakland', 'Berkeley', 'Alameda', 'Emeryville',
                  'Fremont', 'Hayward', 'San Leandro', 'Pleasanton',
                  'Livermore', 'Concord', 'Walnut Creek', 'Richmond',
                  'San Rafael', 'Novato', 'Napa', 'Petaluma'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Statewide & Nationwide */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Statewide & Nationwide Representation</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">California Ports</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of Oakland</li>
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
                  <li>Port of San Diego</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Courts</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>U.S. Court of International Trade</li>
                  <li>U.S. Court of Appeals (Federal Circuit)</li>
                  <li>CBP Administrative Proceedings</li>
                  <li>Commerce Department Reviews</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Major California Markets</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>San Francisco Bay Area</li>
                  <li>Silicon Valley</li>
                  <li>Wine Country</li>
                  <li>Sacramento Valley</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why San Francisco Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why San Francisco Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bay Area Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your San Francisco customs attorney, we understand the unique trade challenges facing Bay Area businesses—from Silicon Valley tech exports to Napa wine imports to SF food distributors. Industry-specific expertise drives better outcomes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Exclusive Trade Law Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general practice firms, we focus <strong>exclusively</strong> on international trade and customs law. This specialization means deeper expertise, current knowledge of regulatory changes, and established relationships with CBP and trade agencies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services (protests, ruling requests, prior disclosures) and transparent hourly rates for complex matters. No surprise bills. Your free initial consultation includes a clear fee estimate.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Tariff and customs issues often have <strong>strict deadlines</strong>. We prioritize urgent matters and maintain direct communication. Same-day response to CBP notices and Port of Oakland emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/customs-defense" className="service-link">
                    <span className="service-link__title">Customs Defense & Litigation</span>
                    <p className="service-link__description">CBP audits, seizures, penalty defense</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Export Controls & Sanctions</span>
                    <p className="service-link__description">ITAR, EAR, OFAC compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Trade Compliance Programs</span>
                    <p className="service-link__description">Import compliance development</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Locations */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/oakland-trade-attorney" className="service-link">
                    <span className="service-link__title">Oakland</span>
                    <p className="service-link__description">Port of Oakland customs</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/los-angeles-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Los Angeles</span>
                    <p className="service-link__description">Port of LA/Long Beach</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Helpful Guides */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Guides</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">Tariff Classification Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/export-controls-guide" className="service-link">
                    <span className="service-link__title">Export Controls Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Tariffs Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/trade-law-faq" className="service-link">
                    <span className="service-link__title">FAQ Center</span>
                    <div className="triangle-slide">
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our San Francisco customs attorney and tariff lawyer team today. We'll assess your situation, explain your options, and provide a clear path forward.
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

export default SanFranciscoCustomsAttorneyPage;
