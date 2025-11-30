
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const PortOfOaklandTariffPage: React.FC = () => {
  useMeta({
    title: 'Port of Oakland Tariff Lawyer | Customs Attorney Oakland, CA',
    description: 'Port of Oakland tariff lawyer. Expert CBP detention defense, cargo release, customs compliance at Oakland port. Rapid response to port holds. (310) 744-1328.',
    keywords: 'port of oakland tariff lawyer, oakland customs attorney, port of oakland cbp lawyer, oakland cargo detention, bay area port attorney, oakland import lawyer, port of oakland compliance',
    canonical: 'port-of-oakland-tariff',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-port-oakland.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Port of Oakland Tariff Lawyer & Customs Attorney - Bay Area Port Specialists',
        description: 'Port of Oakland tariff lawyer and customs attorney providing expert CBP detention defense, cargo release, and port compliance services. Rapid response to Oakland port customs issues.',
        url: `${siteConfig.siteUrl}/#port-of-oakland-tariff`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Ports', url: `${siteConfig.siteUrl}/#california-ports` },
        { name: 'Port of Oakland', url: `${siteConfig.siteUrl}/#port-of-oakland-tariff` }
      ]),
      generateFAQSchema([
        {
          question: 'What makes Port of Oakland different from LA/Long Beach ports?',
          answer: 'Port of Oakland is the San Francisco Bay Area\'s primary container port, handling significant Asian imports and agricultural exports. It offers faster cargo velocity, less congestion than LA/Long Beach, and serves Northern California\'s technology, agriculture, and wine industries. Our Oakland port attorneys understand local CBP operations, examination facilities, and port-specific procedures.',
        },
        {
          question: 'How quickly can you respond to CBP cargo detentions at Port of Oakland?',
          answer: 'We prioritize Port of Oakland cargo detentions and holds with same-day response for urgent matters. Oakland cargo typically has tight demurrage timelines. We prepare admissibility packages, respond to CBP detention notices, coordinate lab testing, and expedite cargo release to minimize demurrage and storage costs.',
        },
        {
          question: 'What types of CBP examinations occur at Port of Oakland?',
          answer: 'Port of Oakland CBP conducts intensive examinations, tail-gate exams, and VACIS/x-ray scans. Common examination triggers include: UFLPA (forced labor) risk, Section 301 tariff verification, agricultural product inspections, IPR (intellectual property) holds, and random compliance checks. We assist with examination preparation and CBP documentation requests.',
        },
        {
          question: 'Can you help with agricultural exports through Port of Oakland?',
          answer: 'Yes, Port of Oakland is a major agricultural export gateway for California wine, almonds, rice, and produce. We assist exporters with USDA export certificates, phytosanitary documentation, destination country requirements, and CBP export compliance. Critical for Northern California\'s wine and agricultural industries.',
        },
        {
          question: 'What services do you provide for Port of Oakland importers?',
          answer: 'We provide comprehensive Port of Oakland services including: CBP cargo detention defense, intensive examination support, UFLPA forced labor detention response, tariff classification and protest filings, ISF (Importer Security Filing) violation defense, customs bond issues, and port-specific CBP compliance matters.',
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
      <section className="hero" aria-label="Port of Oakland Tariff Lawyer Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Port of Oakland Tariff Lawyer<br />CBP Detention & Cargo Release Attorney</h1>
          <p className="hero-subtitle">
            Expert Port of Oakland customs attorney providing rapid CBP detention defense, cargo release, and port compliance services. Specialized Bay Area port representation for Oakland importers and exporters.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Port of Oakland Specialist */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Port of Oakland Customs Law Specialists
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Port of Oakland handles <strong>99% of containerized goods entering the San Francisco Bay Area</strong> and is the 8th busiest container port in the U.S. We provide specialized customs legal services for Oakland port operations including CBP detentions, cargo examinations, and trade compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Deep knowledge</strong> of Port of Oakland CBP operations, examination facilities, Container Freight Stations (CFS), and local port procedures. We know Oakland's unique operational environment.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Same-day response</strong> to Oakland cargo detentions and CBP holds. We understand that delayed cargo costs thousands in demurrage fees. Emergency port representation available 24/7.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bay Area Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized knowledge of <strong>Northern California industries</strong> including technology, wine, agriculture, and manufacturing. We understand Bay Area import/export compliance needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Port of Oakland Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Port of Oakland Customs Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Cargo Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of Oakland CBP detains cargo for <strong>UFLPA forced labor concerns, Section 301 verification, IPR issues, and compliance violations</strong>. Every day of detention costs money in demurrage, storage, and per diem charges. We prepare comprehensive admissibility packages to expedite cargo release.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>UFLPA (Uyghur Forced Labor Prevention Act) detention response packages</li>
                <li>Section 301 tariff and country of origin verification documentation</li>
                <li>IPR (intellectual property rights) detention defense and Consent Decrees</li>
                <li>FDA/USDA/EPA regulatory hold resolution and compliance demonstration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Intensive Examination Support</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of Oakland conducts <strong>intensive examinations (opening and examining all containers)</strong>, tail-gate exams, and VACIS scans. We assist with CBP examination preparation, documentation requests, and post-examination compliance issues including discrepancies and penalty exposure.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Intensive examination preparation and CBP documentation support</li>
                <li>Tail-gate examination response and customs broker coordination</li>
                <li>VACIS/x-ray scan discrepancy resolution</li>
                <li>Post-examination penalty mitigation and prior disclosure filings</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Cargo Release & Demurrage Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Delayed cargo at Port of Oakland accrues <strong>demurrage, detention, and per diem charges</strong> that can exceed $500-$1,000 per day. We expedite cargo release through strategic CBP engagement, admissibility demonstrations, and regulatory compliance packages.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Expedited cargo release strategies and CBP engagement</li>
                <li>Admissibility package preparation (technical data, lab tests, certifications)</li>
                <li>Demurrage dispute and waiver requests to steamship lines</li>
                <li>Emergency release procedures for time-sensitive and perishable cargo</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of Oakland is Northern California's <strong>primary agricultural export gateway</strong> for wine, almonds, rice, dairy, and produce. We assist exporters with USDA export certificates, phytosanitary requirements, and destination country compliance for agricultural exports.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA export certificate and phytosanitary documentation</li>
                <li>Wine and alcohol export compliance (TTB permits, label approvals)</li>
                <li>Destination country requirements and import documentation</li>
                <li>Free trade agreement (FTA) certification for agricultural exports</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">ISF (Importer Security Filing) Violations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP strictly enforces <strong>ISF "10+2" filing requirements</strong> at Port of Oakland. Late, inaccurate, or missing ISF filings result in $5,000 per violation penalties. We defend against ISF penalties and implement compliance programs to prevent future violations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ISF penalty defense and mitigation (19 CFR § 149.2)</li>
                <li>Late ISF filing violation response and reasonable care demonstration</li>
                <li>ISF compliance program development and broker coordination</li>
                <li>Manufacturer/supplier identification and HTS classification verification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Technology & Wine Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of Oakland serves Bay Area <strong>technology importers and wine importers</strong>. We provide specialized compliance for electronics, semiconductors, computers (Section 301 tariffs, ITA classification) and wine imports (TTB permits, labeling, excise tax).
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Technology product HTS classification and Section 301 tariff strategies</li>
                <li>Information Technology Agreement (ITA) duty-free eligibility</li>
                <li>Wine import compliance (TTB COLA, labeling, excise tax)</li>
                <li>FDA food import compliance for specialty foods and beverages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Port of Oakland Operations */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Port of Oakland CBP Operations
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CBP Facilities & Operations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Understanding Port of Oakland CBP infrastructure:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>CBP Examination Facilities:</strong> Oakland container examination sites</li>
                <li><strong>Container Freight Stations (CFS):</strong> LCL cargo consolidation/deconsolidation</li>
                <li><strong>VACIS/X-ray Scanners:</strong> Non-intrusive inspection technology</li>
                <li><strong>Agricultural Inspection:</strong> USDA/APHIS PPQ facilities</li>
                <li><strong>FDA Sampling:</strong> Food and drug import inspections</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Common Detention Triggers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Why CBP detains cargo at Port of Oakland:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>UFLPA High-Risk:</strong> Xinjiang/forced labor supply chain concerns</li>
                <li><strong>Section 301 Verification:</strong> China origin and tariff validation</li>
                <li><strong>IPR Holds:</strong> Trademark/copyright infringement suspicions</li>
                <li><strong>Agricultural Issues:</strong> Pest contamination, USDA permit violations</li>
                <li><strong>Product Safety:</strong> CPSC, FDA, EPA regulatory compliance</li>
              </ul>
            </div>
          </div>

          {/* Port Statistics & Industries */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Port of Oakland Trade Profile</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Port Statistics</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>8th Busiest U.S. Container Port</li>
                  <li>99% of Bay Area Containerized Goods</li>
                  <li>Major Asian Trade Gateway</li>
                  <li>Agricultural Export Leader</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Key Commodities</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Electronics & Technology</li>
                  <li>Wine & Agricultural Exports</li>
                  <li>Automobiles & Parts</li>
                  <li>Consumer Goods</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Trade Partners</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>China & Hong Kong</li>
                  <li>Japan & South Korea</li>
                  <li>Taiwan & Southeast Asia</li>
                  <li>Australia & New Zealand</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Port of Oakland Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Importers Choose Our Port of Oakland Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port-Specific Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Port of Oakland customs attorney, we understand <strong>local CBP operations, examination procedures, and port-specific challenges</strong>. We've handled hundreds of Oakland cargo detentions and know what it takes to expedite release. Our team has established relationships with Oakland CBP officers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Emergency Port Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Cargo detentions require <strong>immediate action</strong>. We prioritize Port of Oakland emergencies with same-day response. Our team prepares admissibility packages, coordinates lab testing, and engages with CBP officers to expedite cargo release and minimize costly demurrage charges.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Comprehensive Trade Practice</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Beyond port representation, we provide <strong>complete trade law services</strong> including tariff classification, customs audits, penalty defense, and trade compliance programs. We appear before the Court of International Trade and federal agencies nationwide.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost-Effective Port Solutions</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for detention response, examination support, and ISF penalty defense. Transparent hourly rates for complex port litigation. Your consultation includes a clear estimate. Investing in legal help often saves more in demurrage than our fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Port of Oakland from Our California Office
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Emergency Port Response:</strong> 24/7 availability<br />
                <strong>Regular Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Port of Oakland Response</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>Emergency Detention Response:</strong> Same-day action for urgent cargo holds</li>
                <li><strong>Remote Representation:</strong> Full services without on-site presence required</li>
                <li><strong>CBP Coordination:</strong> Direct engagement with Oakland CBP officers</li>
                <li><strong>24/7 Availability:</strong> Emergency port matters handled around the clock</li>
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

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Port Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#cargo-detention-defense" className="service-link">
                    <span className="service-link__title">Cargo Detention Defense</span>
                    <p className="service-link__description">UFLPA, IPR, compliance holds</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#examination-support" className="service-link">
                    <span className="service-link__title">CBP Examination Support</span>
                    <p className="service-link__description">Intensive exam preparation</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#agricultural-exports" className="service-link">
                    <span className="service-link__title">Agricultural Exports</span>
                    <p className="service-link__description">Wine, almonds, produce</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Other Ports */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Ports</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#port-of-stockton-trade" className="service-link">
                    <span className="service-link__title">Port of Stockton</span>
                    <p className="service-link__description">Inland port services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#southern-california-tariff-lawyer" className="service-link">
                    <span className="service-link__title">LA/Long Beach Ports</span>
                    <p className="service-link__description">Southern California ports</p>
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
                  <a href="#cargo-detention-guide" className="service-link">
                    <span className="service-link__title">Cargo Detention Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#uflpa-response-guide" className="service-link">
                    <span className="service-link__title">UFLPA Response Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#isf-compliance-guide" className="service-link">
                    <span className="service-link__title">ISF Compliance Guide</span>
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
            Emergency Port of Oakland Response
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Cargo detained at Port of Oakland? Contact our customs attorney team immediately. We provide same-day detention defense and cargo release services. Every hour counts when demurrage is accumulating.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">
              Get Immediate Help
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

export default PortOfOaklandTariffPage;
