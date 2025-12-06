
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanJoseCustomsLawyerPage: React.FC = () => {
  useMeta({
    title: 'San Jose Customs Lawyer | Silicon Valley Tariff Attorney',
    description: 'San Jose customs lawyer & Silicon Valley tariff attorney. Tech trade compliance, export controls, CBP defense. Serving San Jose CA & South Bay. (310) 744-1328.',
    keywords: 'customs lawyer san jose, tariff attorney san jose, trade attorney silicon valley, international trade lawyer san jose ca, export controls san jose, cbp defense attorney san jose, san jose import export lawyer, silicon valley customs attorney',
    canonical: 'san-jose-customs-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-san-jose.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'San Jose Customs Lawyer & Silicon Valley Tariff Attorney - Tech Trade Legal Services',
        description: 'San Jose customs lawyer and Silicon Valley tariff attorney providing expert legal representation for tech exports, tariff classification, CBP defense, and trade compliance.',
        url: `${siteConfig.siteUrl}/san-jose-customs-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'San Jose Customs Lawyer', url: `${siteConfig.siteUrl}/san-jose-customs-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a San Jose customs lawyer for Silicon Valley tech companies?',
          answer: 'A San Jose-based customs lawyer understands Silicon Valley\'s unique tech export and import challenges, including export controls (ITAR/EAR), encryption regulations, semiconductor classification, and deemed export compliance. Our San Jose location provides convenient access for South Bay tech companies.',
        },
        {
          question: 'What customs and trade services do you offer in San Jose?',
          answer: 'Our San Jose office provides comprehensive customs services including: export controls (ITAR/EAR), encryption export compliance, tariff classification for tech products, CBP audit defense, customs penalty mitigation, Section 301 tariff strategies, UFLPA forced labor compliance, semiconductor import/export compliance, and deemed export advisory.',
        },
        {
          question: 'Do you handle export control matters for Silicon Valley companies?',
          answer: 'Yes. Our San Jose customs lawyer team has extensive experience with export controls affecting Silicon Valley tech companies, including ITAR registration, EAR licensing, encryption export (TSU/740.17), semiconductor export controls, deemed export compliance, and OFAC sanctions. We understand Silicon Valley\'s innovation economy.',
        },
        {
          question: 'What industries do you serve from your San Jose office?',
          answer: 'From our San Jose office, we represent Silicon Valley and South Bay companies across industries including semiconductors/chips, software/SaaS, electronics, telecommunications equipment, artificial intelligence/machine learning, biotechnology, clean tech, and hardware manufacturing. We understand Silicon Valley\'s global trade operations.',
        },
        {
          question: 'How quickly can you respond to CBP or BIS export control issues?',
          answer: 'Our San Jose location provides rapid response to CBP customs issues and BIS export control matters affecting Silicon Valley companies. We typically respond to urgent trade compliance matters within 24 hours. Call (310) 744-1328 for immediate assistance.',
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
      <section className="hero" aria-label="San Jose Customs Lawyer Hero">
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
          <h1>San Jose Customs Lawyer<br />Tariff Attorney California</h1>
          <p className="hero-subtitle">
            San Jose customs lawyer and Silicon Valley tariff attorney serving tech companies. Expert export controls, CBP defense, tariff classification, and trade compliance for innovation economy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a San Jose Customs Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Your Local Tariff & Customs Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving San Jose and Silicon Valley with expert tariff and customs legal services. As the <strong>heart of global tech innovation</strong>, San Jose faces unique international trade challenges including export controls, encryption regulations, and global supply chain compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Silicon Valley Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep understanding of <strong>tech exports, semiconductors, encryption</strong>, and Silicon Valley innovation. Specialized in EAR, ITAR, and export compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Controls Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized in <strong>ITAR/EAR compliance, encryption export</strong>, deemed export regulations, and semiconductor export controls critical for tech companies.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">South Bay Access</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Local San Jose office</strong> serving South Bay tech corridor. Convenient access without SF traffic for Silicon Valley companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Tariff & Customs Services in San Jose
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Controls & Tech Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Silicon Valley tech companies face complex export control requirements. Our San Jose customs lawyer team provides <strong>ITAR/EAR compliance, encryption export</strong> guidance, semiconductor export controls, and deemed export advisory for tech innovators.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ITAR registration and compliance</li>
                <li>EAR licensing and classification (ECCN)</li>
                <li>Encryption export (TSU/740.17)</li>
                <li>Deemed export compliance</li>
                <li>Semiconductor/chip export controls</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Code Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your San Jose tariff attorney, we ensure tech products are correctly classified under the Harmonized Tariff Schedule (HTS). Proper classification can mean the difference between <strong>0% and 25%+ duty rates</strong>. Critical for Silicon Valley hardware and electronics.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Tech product HTS classification</li>
                <li>Semiconductor/chip tariff classification</li>
                <li>Binding Ruling requests (NY/HQ rulings)</li>
                <li>Classification dispute defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively audits Silicon Valley tech importers. Our San Jose customs lawyer team defends you through Focused Assessments, Quick Response Audits, and penalty proceedings. We've helped South Bay clients <strong>reduce penalties by 75% or more</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense</li>
                <li>Prior Disclosure filings to cap penalties</li>
                <li>CF-28/CF-29 response preparation</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Sanctions & OFAC Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Silicon Valley companies operate globally and must navigate complex <strong>OFAC sanctions, export restrictions</strong>, and country-specific trade prohibitions. We provide sanctions screening, licensing, and compliance advisory.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>OFAC sanctions compliance programs</li>
                <li>Restricted party screening</li>
                <li>China/Russia export restrictions</li>
                <li>Entity List compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                China tariffs (Section 301) add <strong>7.5% to 25%</strong> to tech product import costs. Our San Jose trade law firm helps Silicon Valley businesses navigate exclusions, supply chain restructuring, and tariff engineering.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 exclusion analysis</li>
                <li>Tech product substantial transformation</li>
                <li>Third-country sourcing compliance</li>
                <li>Tariff refund/protest strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Forced Labor Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Uyghur Forced Labor Prevention Act (UFLPA) affects tech supply chains. Our San Jose attorney team helps Silicon Valley companies implement <strong>supply chain due diligence</strong> and defend against UFLPA detentions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Tech supply chain mapping</li>
                <li>UFLPA detention defense packages</li>
                <li>"Clear and convincing" evidence compilation</li>
                <li>Forced labor compliance programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from San Jose */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our San Jose Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Silicon Valley & South Bay */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Silicon Valley & South Bay</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve all Silicon Valley and South Bay communities:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'San Jose', 'Santa Clara', 'Sunnyvale', 'Mountain View',
                  'Palo Alto', 'Cupertino', 'Milpitas', 'Fremont',
                  'Menlo Park', 'Los Altos', 'Campbell', 'Los Gatos',
                  'Saratoga', 'Morgan Hill', 'Gilroy', 'Redwood City'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Peninsula & East Bay */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Peninsula & East Bay</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Easy access for Peninsula and East Bay businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'San Francisco', 'Oakland', 'Berkeley', 'Alameda',
                  'San Mateo', 'Burlingame', 'Foster City', 'Belmont',
                  'Hayward', 'Union City', 'Newark', 'Pleasanton',
                  'Livermore', 'Dublin', 'San Ramon', 'Walnut Creek'
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
                  <li>San Francisco International Airport</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Agencies</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>U.S. Court of International Trade</li>
                  <li>Bureau of Industry & Security (BIS)</li>
                  <li>CBP Administrative Proceedings</li>
                  <li>Commerce Department Reviews</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Major California Markets</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Silicon Valley</li>
                  <li>San Francisco Bay Area</li>
                  <li>Peninsula</li>
                  <li>East Bay</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why San Jose Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why San Jose Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Silicon Valley Tech Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your San Jose customs lawyer, we understand Silicon Valley's unique trade challenges—from semiconductor exports to encryption compliance to global supply chains. We have extensive experience with BIS export controls and tech trade regulations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Exclusive Trade Law Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general practice firms, we focus <strong>exclusively</strong> on international trade and customs law. This specialization means deeper expertise, current knowledge of regulatory changes, and established relationships with CBP, BIS, and trade agencies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services (protests, ruling requests, export classifications) and transparent hourly rates for complex matters. No surprise bills. Your free initial consultation includes a clear fee estimate.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Export control and customs issues can halt tech operations. We provide <strong>same-day response</strong> to urgent BIS export control matters, CBP issues, and trade compliance emergencies. Call (310) 744-1328.
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
                  <Link to="/san-francisco-customs-attorney" className="service-link">
                    <span className="service-link__title">San Francisco</span>
                    <p className="service-link__description">Bay Area customs expertise</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
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
              </div>
            </div>

            {/* Helpful Guides */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Guides</h3>
              <div className="space-y-0">
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
            Contact our San Jose customs lawyer and Silicon Valley tariff attorney team today. We'll assess your situation, explain your options, and provide a clear path forward.
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

export default SanJoseCustomsLawyerPage;
