
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const DalyCityCustomsAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Daly City Customs Attorney | San Mateo County Trade Lawyer CA',
    description: 'Daly City customs attorney & trade lawyer serving San Mateo County businesses. Tariff classification, CBP defense, Port of San Francisco/Oakland access. (310) 744-1328.',
    keywords: 'customs attorney daly city, trade lawyer daly city, tariff attorney daly city, international trade lawyer daly city, daly city import export lawyer, san mateo customs attorney, daly city tariff lawyer, peninsula trade attorney',
    canonical: 'daly-city-customs-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-daly-city.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Daly City Customs Attorney & Trade Lawyer - San Mateo County Trade Law',
        description: 'Daly City customs attorney and trade lawyer providing expert legal representation for San Mateo County and Peninsula businesses. CBP defense, tariff classification, customs audits, and international trade compliance.',
        url: `${siteConfig.siteUrl}/daly-city-customs-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Daly City Customs Attorney', url: `${siteConfig.siteUrl}/daly-city-customs-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Daly City customs attorney for San Mateo County businesses?',
          answer: 'A Daly City-based customs attorney provides accessible legal representation for San Mateo County and Peninsula businesses without traveling to downtown San Francisco. Our firm serves businesses in Daly City, South San Francisco, San Mateo, and the Peninsula with expert customs and trade law services, including access to Port of San Francisco and Port of Oakland for customs matters.',
        },
        {
          question: 'What customs and tariff services do you offer in Daly City?',
          answer: 'Our Daly City office provides comprehensive customs services including: tariff classification and HTS code optimization, CBP audit defense, customs penalty mitigation, Section 301 China tariff strategies, UFLPA forced labor compliance, antidumping/countervailing duty defense, customs seizure defense, duty drawback claims, and trade compliance program development for San Mateo County businesses.',
        },
        {
          question: 'Do you serve other San Mateo County cities besides Daly City?',
          answer: 'Yes, from our Daly City location we serve businesses throughout San Mateo County including South San Francisco, San Bruno, Pacifica, Colma, San Mateo, Burlingame, Millbrae, Redwood City, San Carlos, Belmont, Foster City, and all Peninsula communities. We also represent clients at Port of San Francisco, Port of Oakland, and throughout the Bay Area.',
        },
        {
          question: 'How quickly can you respond to CBP customs issues?',
          answer: 'Our Daly City location provides access to Port of San Francisco and Port of Oakland for customs matters. We prioritize urgent matters and can typically respond to CBP detentions, seizures, or audit notices within 24 hours. For emergencies, call our direct line at (310) 744-1328.',
        },
        {
          question: 'What industries do you serve from your Daly City office?',
          answer: 'From Daly City, we represent importers and exporters across all industries including technology and biotechnology, manufacturing, healthcare and medical devices, food and beverages, consumer goods, retail and e-commerce, and professional services. Our experience with San Mateo County business operations helps us provide targeted customs compliance solutions.',
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
      <section className="hero" aria-label="Daly City Customs Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Daly City Customs Attorney<br />San Mateo County Trade Lawyer</h1>
          <p className="hero-subtitle">
            Daly City customs attorney and trade lawyer serving San Mateo County and Peninsula businesses. Expert CBP defense, tariff classification, and trade compliance for importers and exporters.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Daly City Customs Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Peninsula Trade Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Daly City and San Mateo County businesses with expert customs and trade law services. Our firm provides <strong>local accessibility with national expertise</strong> in international trade law, CBP defense, and tariff optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Peninsula Accessibility</h3>
              <p className="text-text-secondary leading-relaxed">
                Serving Daly City, South San Francisco, and the Peninsula. <strong>No need to travel to downtown SF</strong> for expert customs representation.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bay Area Port Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Access to <strong>Port of San Francisco and Port of Oakland</strong>. Representation for customs matters at Bay Area ports.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Specialized Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Focus <strong>exclusively on customs and trade law</strong>. Deeper expertise than general practice firms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Customs & Tariff Services in Daly City
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Code Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Daly City customs attorney, we ensure your products are correctly classified under the Harmonized Tariff Schedule (HTS). Proper classification can mean the difference between <strong>0% and 25%+ duty rates</strong>. We file binding ruling requests and defend against CBP reclassifications.
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
                CBP actively audits California importers. Our Daly City customs attorney team defends you through Focused Assessments, Quick Response Audits, and penalty proceedings. We've helped San Mateo County clients <strong>reduce penalties by 75% or more</strong> through strategic prior disclosures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense</li>
                <li>Prior Disclosure filings to cap penalties</li>
                <li>CF-28/CF-29 response preparation</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                China tariffs (Section 301) add <strong>7.5% to 25%</strong> to import costs. Our Daly City trade law firm helps you navigate exclusions, supply chain restructuring, and tariff engineering to legally minimize your duty burden.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 exclusion analysis</li>
                <li>Substantial transformation opinions</li>
                <li>Third-country sourcing compliance</li>
                <li>Tariff refund/protest strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Forced Labor Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Uyghur Forced Labor Prevention Act (UFLPA) has resulted in <strong>$2+ billion in detained goods</strong>. Our Daly City customs attorney team helps you implement supply chain due diligence and defend against UFLPA detentions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Supply chain mapping and audits</li>
                <li>UFLPA detention defense packages</li>
                <li>"Clear and convincing" evidence compilation</li>
                <li>Forced labor compliance programs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Antidumping & Countervailing Duties (AD/CVD)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                AD/CVD rates can exceed <strong>200%</strong> for certain products from China and other countries. Our Daly City tariff lawyer files Scope Rulings to exempt your products and defends against EAPA evasion investigations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Scope Ruling requests to Commerce</li>
                <li>EAPA investigation defense</li>
                <li>Administrative Review representation</li>
                <li>Substantial transformation analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Seizure & Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP seizes or detains your cargo, every day costs money. Our Daly City location provides <strong>responsive service</strong> for customs emergencies. We file admissibility packages and petitions for cargo release.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Seizure notice response (19 USC § 1618)</li>
                <li>Petition for release of detained goods</li>
                <li>IPR/trademark seizure defense</li>
                <li>FDA/USDA hold resolution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Daly City */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our Daly City Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* North San Mateo County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">North San Mateo County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve North San Mateo County and Peninsula businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Daly City', 'South San Francisco', 'San Bruno', 'Pacifica',
                  'Colma', 'Brisbane', 'Millbrae', 'Burlingame'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Central & South Peninsula */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central & South Peninsula</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Convenient access for all Peninsula businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'San Mateo', 'Foster City', 'Belmont', 'San Carlos',
                  'Redwood City', 'Menlo Park', 'Palo Alto', 'Mountain View',
                  'Sunnyvale', 'Santa Clara', 'San Jose', 'Cupertino'
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
                  <li>Port of San Francisco</li>
                  <li>Port of Oakland</li>
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
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
                  <li>Los Angeles County</li>
                  <li>Orange County</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Daly City Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Peninsula Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Local Expertise, National Reach</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Daly City customs attorney, we combine local accessibility with nationwide practice capabilities. We appear before CBP offices at every U.S. port, the Court of International Trade in New York, and federal agencies in Washington, D.C.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Specialized Focus</h3>
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
                Tariff and customs issues often have <strong>strict deadlines</strong>. We prioritize urgent matters and maintain direct communication. Same-day response to CBP notices and emergency cargo holds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Daly City & San Mateo County
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Daly City, CA and San Mateo County</strong><br />
                Main Office: Calabasas, CA<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Service Area:</strong> Daly City, San Mateo County, Peninsula
              </p>
              <p className="text-text-secondary text-sm">
                <strong>Port Access:</strong> Port of San Francisco and Port of Oakland
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Peninsula Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From I-280:</strong> Direct access to Daly City business district</li>
                <li><strong>From San Francisco:</strong> I-280 South, approximately 10 minutes</li>
                <li><strong>From San Mateo:</strong> US-101 North, approximately 10 minutes</li>
                <li><strong>From Silicon Valley:</strong> US-101 North, approximately 30 minutes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense & Litigation</span>
                    <p className="service-link__description">CBP audits, seizures, penalty defense</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#regulatory-compliance-advisory" className="service-link">
                    <span className="service-link__title">Trade Compliance Programs</span>
                    <p className="service-link__description">Import compliance development</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#export-controls-sanctions" className="service-link">
                    <span className="service-link__title">Export Controls & Sanctions</span>
                    <p className="service-link__description">ITAR, EAR, OFAC compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Other Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#oakland-port-customs-attorney" className="service-link">
                    <span className="service-link__title">Oakland & Port of Oakland</span>
                    <p className="service-link__description">Port customs expertise</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#bay-area-trade-law-attorney" className="service-link">
                    <span className="service-link__title">San Francisco & Bay Area</span>
                    <p className="service-link__description">Bay Area trade law services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Helpful Guides */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Guides</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#tariffs-duties-classification-guide" className="service-link">
                    <span className="service-link__title">Tariff Classification Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Tariffs Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/uflpa-compliance-guide" className="service-link">
                    <span className="service-link__title">UFLPA Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#trade-law-faq" className="service-link">
                    <span className="service-link__title">FAQ Center</span>
                    <div className="triangle-slide">
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Daly City customs attorney and trade lawyer team today. We'll assess your situation, explain your options, and provide a clear path forward for your San Mateo County business.
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

export default DalyCityCustomsAttorneyPage;
