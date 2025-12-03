
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LancasterTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Lancaster Trade Attorney | Aerospace Customs Lawyer CA',
    description: 'Lancaster trade attorney & customs lawyer serving Antelope Valley aerospace industry. Tariff classification, CBP defense, export controls. ITAR/EAR compliance. (310) 744-1328.',
    keywords: 'trade attorney lancaster, customs lawyer lancaster, tariff attorney lancaster, international trade lawyer lancaster, lancaster aerospace attorney, antelope valley trade lawyer, lancaster import export attorney, aerospace customs lawyer',
    canonical: 'lancaster-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-lancaster.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Lancaster Trade Attorney & Customs Lawyer - Aerospace Industry Specialists',
        description: 'Lancaster trade attorney and customs lawyer specializing in Antelope Valley aerospace industry. Expert ITAR/EAR compliance, tariff classification, CBP defense, and export controls for aerospace manufacturers.',
        url: `${siteConfig.siteUrl}/lancaster-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Lancaster Trade Attorney', url: `${siteConfig.siteUrl}/lancaster-trade-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Lancaster trade attorney for aerospace companies?',
          answer: 'A Lancaster-based trade attorney understands the unique regulatory challenges facing Antelope Valley aerospace manufacturers. Our firm provides specialized representation for aerospace import/export compliance including ITAR registration and licensing, EAR export controls, tariff classification for aerospace components, CBP audit defense, and duty drawback claims for aerospace manufacturers. We serve the Antelope Valley aerospace corridor including Lancaster, Palmdale, and Edwards AFB contractors.',
        },
        {
          question: 'What aerospace trade services do you offer in Lancaster?',
          answer: 'Our Lancaster office provides comprehensive aerospace trade services including: ITAR compliance and Technical Assistance Agreements (TAAs), EAR export licensing (CCL/EAR99 determinations), tariff classification for aerospace parts and materials, customs audit defense for aerospace importers, duty drawback claims for aerospace manufacturing, USMCA/FTA utilization for aerospace supply chains, and defense contractor trade compliance programs.',
        },
        {
          question: 'Do you serve other Antelope Valley cities besides Lancaster?',
          answer: 'Yes, from our Lancaster location we serve the entire Antelope Valley aerospace corridor including Palmdale, Quartz Hill, Rosamond, California City, and Edwards Air Force Base. We represent aerospace manufacturers, defense contractors, and suppliers throughout the region with customs and export control legal services.',
        },
        {
          question: 'How do you help aerospace companies with ITAR and export controls?',
          answer: 'Our Lancaster trade attorney team provides comprehensive export control services for aerospace companies including: ITAR registration with DDTC, Technical Assistance Agreement (TAA) preparation and submission, EAR export license applications, commodity jurisdiction determinations, voluntary disclosures to DDTC/BIS, and export compliance program development. Call (310) 744-1328 to discuss your aerospace export control needs.',
        },
        {
          question: 'What industries do you serve from your Lancaster office?',
          answer: 'From Lancaster, we primarily serve the Antelope Valley aerospace and defense industry including aircraft manufacturing, aerospace components and parts, avionics and electronics, spacecraft systems, defense contracting, and advanced materials. We also represent importers/exporters in technology, manufacturing, and industrial equipment sectors throughout the Antelope Valley.',
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
      <section className="hero" aria-label="Lancaster Trade Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Lancaster Trade Attorney<br />Aerospace Customs Lawyer</h1>
          <p className="hero-subtitle">
            Lancaster trade attorney and customs lawyer serving Antelope Valley aerospace industry. Expert ITAR/EAR compliance, export controls, tariff classification, and CBP defense for aerospace manufacturers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Lancaster Trade Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Aerospace Industry Trade Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Lancaster and Antelope Valley aerospace manufacturers with expert trade law services. Our firm understands the <strong>unique regulatory challenges</strong> facing aerospace companies, from ITAR compliance to tariff optimization for aerospace components.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Aerospace Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep experience with <strong>aerospace and defense industry</strong> trade regulations. ITAR, EAR, tariff classification, and customs compliance for Antelope Valley aerospace manufacturers.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Control Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Expert representation for <strong>ITAR registration, TAA preparation</strong>, EAR export licensing, and voluntary disclosures. Protect your aerospace business from export violations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Local Accessibility</h3>
              <p className="text-text-secondary leading-relaxed">
                Serving the <strong>Antelope Valley aerospace corridor</strong>. Convenient access for Lancaster, Palmdale, and Edwards AFB contractors without traveling to Los Angeles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trade & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Aerospace Trade & Customs Services in Lancaster
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">ITAR Compliance & Registration</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Lancaster trade attorney, we help aerospace manufacturers navigate ITAR requirements. From <strong>DDTC registration to Technical Assistance Agreements (TAAs)</strong>, we ensure your aerospace exports comply with munitions control regulations. Violations can result in criminal penalties and debarment.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ITAR registration with DDTC</li>
                <li>Technical Assistance Agreement (TAA) preparation</li>
                <li>Manufacturing License Agreement (MLA) support</li>
                <li>Voluntary disclosure preparation for ITAR violations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EAR Export Controls & Licensing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Export Administration Regulations (EAR) govern dual-use aerospace technology. Our Lancaster customs lawyer team handles <strong>export license applications, CCL classifications</strong>, and BIS voluntary disclosures. Protect your aerospace business from export control violations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>EAR export license applications to BIS</li>
                <li>CCL/ECCN classification determinations</li>
                <li>Commodity jurisdiction requests (ITAR vs. EAR)</li>
                <li>Voluntary disclosures for EAR violations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification for Aerospace Components</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper tariff classification is critical for aerospace importers. Our Lancaster trade attorney ensures accurate <strong>HTS classification for aircraft parts, avionics, and aerospace materials</strong>. Many aerospace components qualify for duty-free treatment under Chapter 88 or trade agreements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for aerospace parts (Chapter 88, 8803)</li>
                <li>Aircraft civil/military classification determinations</li>
                <li>Binding Ruling requests for aerospace components</li>
                <li>Tariff engineering for aerospace supply chains</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense for Aerospace Importers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP targets aerospace manufacturers for compliance audits. Our Lancaster customs lawyer defends you through <strong>Focused Assessments and penalty proceedings</strong>. We've helped aerospace clients reduce penalties by 75%+ through strategic prior disclosures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense for aerospace importers</li>
                <li>Prior Disclosure filings to minimize penalties</li>
                <li>CF-28/CF-29 response for aerospace components</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Duty Drawback for Aerospace Manufacturers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Aerospace manufacturers can recover <strong>99% of duties paid</strong> on imported components used in exported aircraft or systems. Our Lancaster trade attorney maximizes duty drawback claims for Antelope Valley aerospace companies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Manufacturing drawback for aerospace components</li>
                <li>Unused merchandise drawback programs</li>
                <li>Substitution drawback for aerospace materials</li>
                <li>Drawback claim preparation and filing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Defense Contractor Trade Compliance Programs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Aerospace defense contractors need robust <strong>trade compliance programs</strong> to satisfy government contract requirements. Our Lancaster office develops comprehensive ITAR/EAR compliance programs, internal controls, and employee training.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Export compliance program development (ITAR/EAR)</li>
                <li>Internal controls and compliance procedures</li>
                <li>Employee training on export controls</li>
                <li>Compliance audits and risk assessments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Lancaster */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our Lancaster Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Antelope Valley */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Antelope Valley Aerospace Corridor</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve the entire Antelope Valley aerospace and defense community:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Lancaster', 'Palmdale', 'Quartz Hill', 'Rosamond',
                  'California City', 'Mojave', 'Edwards AFB', 'Acton',
                  'Lake Los Angeles', 'Littlerock', 'Pearblossom', 'Llano'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Santa Clarita Valley */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Santa Clarita Valley</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Convenient access for Santa Clarita Valley businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Santa Clarita', 'Valencia', 'Newhall', 'Saugus',
                  'Canyon Country', 'Stevenson Ranch', 'Castaic', 'Val Verde'
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
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
                  <li>Port of Oakland</li>
                  <li>Port of San Diego</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Agencies</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>DDTC (State Department)</li>
                  <li>BIS (Commerce Department)</li>
                  <li>CBP (Homeland Security)</li>
                  <li>Court of International Trade</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Major California Markets</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Los Angeles County</li>
                  <li>Orange County</li>
                  <li>San Francisco Bay Area</li>
                  <li>San Diego</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lancaster Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Aerospace Companies Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Aerospace Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Lancaster trade attorney, we understand Antelope Valley aerospace operations. We've helped <strong>aircraft manufacturers, component suppliers, and defense contractors</strong> navigate ITAR, EAR, tariff classification, and customs compliance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Control Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general practice firms, we focus on <strong>international trade, customs, and export controls</strong>. This specialization means deeper expertise in ITAR/EAR compliance, voluntary disclosures, and defense contractor requirements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services (TAAs, export licenses, binding rulings, prior disclosures) and transparent hourly rates for complex matters. No surprise bills. Your free consultation includes a clear fee estimate.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Export control and customs issues require <strong>immediate action</strong>. We prioritize urgent matters including CBP detentions, DDTC/BIS inquiries, and compliance emergencies affecting aerospace operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Lancaster & Antelope Valley Aerospace Industry
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Lancaster, CA and Antelope Valley</strong><br />
                Main Office: Calabasas, CA<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Service Area:</strong> Lancaster, Palmdale, Edwards AFB, and Antelope Valley
              </p>
              <p className="text-text-secondary text-sm">
                <strong>Industries:</strong> Aerospace, defense contracting, advanced manufacturing
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Antelope Valley Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From SR-14:</strong> Direct access to Lancaster business district</li>
                <li><strong>From Palmdale:</strong> SR-14 North, approximately 10-15 minutes</li>
                <li><strong>From Edwards AFB:</strong> Rosamond Blvd to SR-14 North</li>
                <li><strong>From Los Angeles:</strong> I-5 to SR-14 North, approximately 60-70 minutes</li>
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
                    <p className="service-link__description">ITAR/EAR program development</p>
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
                  <a href="#los-angeles-port-customs-attorney" className="service-link">
                    <span className="service-link__title">Los Angeles & Long Beach Port</span>
                    <p className="service-link__description">Port customs expertise</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#san-diego-trade-law-attorney" className="service-link">
                    <span className="service-link__title">San Diego</span>
                    <p className="service-link__description">Defense contractor services</p>
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
                  <a href="#resources/itar-compliance-guide" className="service-link">
                    <span className="service-link__title">ITAR Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/ear-export-controls-guide" className="service-link">
                    <span className="service-link__title">EAR Export Controls Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
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
            Contact our Lancaster trade attorney and customs lawyer team today. We'll assess your aerospace compliance needs, explain your options, and provide a clear path forward.
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

export default LancasterTradeAttorneyPage;
