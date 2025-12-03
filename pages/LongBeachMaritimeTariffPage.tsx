
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LongBeachMaritimeTariffPage: React.FC = () => {
  useMeta({
    title: 'Maritime Tariff Attorney Long Beach | Port Customs Lawyer',
    description: 'Long Beach maritime tariff attorney & port customs lawyer. Expert ocean cargo compliance, vessel entries, maritime imports. Port of Long Beach. (310) 744-1328.',
    keywords: 'maritime tariff attorney long beach, port customs lawyer long beach, shipping attorney long beach, ocean cargo attorney california, vessel entry lawyer, maritime import attorney',
    canonical: 'long-beach-maritime-tariff-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-maritime-lb.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Long Beach Maritime Tariff Attorney - Port Customs & Shipping Lawyer',
        description: 'Long Beach maritime tariff attorney specializing in ocean cargo compliance, vessel entries, port customs, and maritime import regulations.',
        url: `${siteConfig.siteUrl}/long-beach-maritime-tariff-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Long Beach Maritime Tariff Attorney', url: `${siteConfig.siteUrl}/long-beach-maritime-tariff-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What customs services do you provide at Port of Long Beach?',
          answer: 'At Port of Long Beach, we provide comprehensive maritime customs services including: ocean cargo entry processing, vessel entry compliance (CBP Form 1300), manifest review and corrections, cargo detention and seizure defense, ISF (Importer Security Filing) compliance, container examination responses, CBP fines and penalties defense, maritime trade compliance programs, and emergency response for time-sensitive port holds.',
        },
        {
          question: 'How quickly can you respond to cargo holds at Long Beach Port?',
          answer: 'Port of Long Beach is one of our primary service areas. We can typically respond to cargo holds, detentions, or CBP exam requests within 2-4 hours during business hours. For critical shipments, we provide emergency response including direct coordination with CBP officers, preparation of admissibility packages, and on-site presence at the port if needed.',
        },
        {
          question: 'What is ISF (10+2) and why is compliance important?',
          answer: 'The Importer Security Filing (ISF or "10+2") requires importers to electronically submit 10 data elements to CBP at least 24 hours before ocean cargo is loaded on a vessel bound for the U.S. Carriers must submit 2 additional elements. Non-compliance results in $5,000 per violation penalties. Late, inaccurate, or missing ISF filings are heavily penalized. We help importers establish ISF compliance programs and defend against ISF penalties.',
        },
        {
          question: 'What are common reasons for cargo detention at Port of Long Beach?',
          answer: 'Common detention reasons at Long Beach include: ISF violations, incorrect HTS classification requiring CBP review, Section 301 tariff verification, AD/CVD scope inquiries, suspected forced labor (UFLPA), intellectual property rights (IPR) concerns, agricultural/FDA holds, missing or inadequate entry documentation, valuation questions, and country of origin verification. Each detention type requires specific response strategies.',
        },
        {
          question: 'Do you handle vessel-related customs issues?',
          answer: 'Yes. We assist vessel owners, operators, and agents with customs vessel entry compliance including: CBP Form 1300 vessel entries, arrival/departure manifest requirements (CBP Form 1302), crew list and passenger manifest compliance, vessel repair/supply entries, bonding requirements, foreign trade zone vessel entries, and CBP violations related to vessel operations. Port of Long Beach is a major vessel traffic hub requiring specialized maritime customs expertise.',
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
      <section className="hero" aria-label="Long Beach Maritime Tariff Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Long Beach Maritime Tariff Attorney<br />Port Customs Lawyer</h1>
          <p className="hero-subtitle">
            Expert maritime tariff attorney serving Port of Long Beach. Specialized ocean cargo compliance, vessel entries, ISF filing, CBP detention defense, and port customs for maritime importers and shipping lines.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Maritime Tariff Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Port of Long Beach Customs Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Port of Long Beach is the <strong>second busiest container port in the United States</strong>, handling over 9 million TEUs annually. Our maritime tariff attorneys provide on-the-ground customs expertise for ocean cargo importers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Maritime Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                We focus on <strong>maritime customs and ocean cargo</strong> trade law. Deep expertise in vessel entries, ISF compliance, and port-specific CBP procedures.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Access & Response</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Direct access to Port of Long Beach</strong> CBP offices. Rapid 2-4 hour response to cargo holds, detentions, and emergency port issues.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Complex Cargo Defense</h3>
              <p className="text-text-secondary leading-relaxed">
                Proven success defending <strong>high-value cargo detentions</strong> and resolving complex CBP holds at Port of Long Beach and Port of LA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maritime Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Maritime Customs Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Ocean Cargo Entry & Clearance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Every containerized ocean import requires proper <strong>customs entry filing</strong>. We ensure accurate entry documentation to prevent delays, exams, and penalties at Port of Long Beach.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP Form 3461 entry summary preparation and review</li>
                <li>HTS classification for containerized cargo</li>
                <li>Customs valuation and related-party analysis</li>
                <li>Entry corrections and post-summary corrections</li>
                <li>Immediate delivery (ID) entry procedures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">ISF (Importer Security Filing) Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                ISF violations result in <strong>$5,000 per filing penalties</strong>. CBP strictly enforces the 24-hour rule. We help importers establish ISF compliance programs and defend against ISF penalties.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ISF 10+2 filing compliance programs</li>
                <li>ISF "bill of lading" vs. "master bill" strategies</li>
                <li>Late ISF filing penalty mitigation</li>
                <li>ISF amendment and correction procedures</li>
                <li>ISF audits and compliance reviews</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Vessel Entry & Compliance (CBP Form 1300)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Vessel owners and operators must file <strong>formal vessel entries</strong> at U.S. ports. Non-compliance can result in vessel holds, fines, and operational delays.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Inward foreign vessel entry (CBP Form 1300)</li>
                <li>Cargo declaration and manifest requirements</li>
                <li>Crew list and passenger manifest compliance</li>
                <li>Vessel repair and foreign trade zone entries</li>
                <li>Vessel bonding requirements and customs bonds</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Cargo Detention & Seizure Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP detains or seizes your cargo at Long Beach, <strong>every hour costs money</strong> in demurrage and storage. We provide emergency response and aggressive defense.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP Notice of Action (detention) response</li>
                <li>Admissibility package preparation</li>
                <li>Petition for release of seized cargo</li>
                <li>UFLPA forced labor detention defense</li>
                <li>IPR (intellectual property) seizure response</li>
                <li>FDA/USDA/EPA cargo hold resolution</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Container Examination Coordination</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP examines containers for compliance verification. <strong>Proper examination response</strong> minimizes delays and prevents adverse findings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Intensive exam coordination and representation</li>
                <li>X-ray and physical exam procedures</li>
                <li>Documentation presentation to CBP officers</li>
                <li>Trade compliance questionnaire responses</li>
                <li>Post-exam issue resolution</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Maritime Penalties & Fines Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Maritime importers face unique penalty exposure including <strong>ISF violations, manifest discrepancies</strong>, and entry errors. We defend against CBP penalty actions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ISF penalty mitigation and settlement</li>
                <li>Manifest discrepancy penalty defense (19 USC § 1584)</li>
                <li>Vessel unlading violation defense</li>
                <li>Prior disclosure filings to cap liability</li>
                <li>Customs bond sufficiency and increase negotiations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Maritime Industries */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Maritime Industries We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Shipping & Logistics</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Ocean Carriers & Shipping Lines</li>
                <li>• NVOCCs (Non-Vessel Operating Common Carriers)</li>
                <li>• Freight Forwarders</li>
                <li>• Customs Brokers</li>
                <li>• Vessel Owners & Operators</li>
                <li>• Port Terminal Operators</li>
                <li>• Maritime Logistics Providers</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Cargo Types</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Containerized General Cargo (FCL/LCL)</li>
                <li>• Bulk Cargo & Break Bulk</li>
                <li>• Automotive Imports (RoRo)</li>
                <li>• Refrigerated Cargo (Reefer)</li>
                <li>• Project Cargo & Oversized Shipments</li>
                <li>• Hazardous Materials (HAZMAT)</li>
                <li>• Perishable Goods</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Importers Served</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Consumer Goods Importers</li>
                <li>• Electronics & Technology</li>
                <li>• Furniture & Home Goods</li>
                <li>• Automotive Parts & Accessories</li>
                <li>• Apparel & Fashion</li>
                <li>• Industrial Equipment</li>
                <li>• Food & Beverage Importers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Long Beach Service Area */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Serving Port of Long Beach Community
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Long Beach & Harbor Area</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve maritime businesses throughout <strong>Long Beach and the harbor area</strong>:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Downtown Long Beach</li>
                <li>• Long Beach Harbor District</li>
                <li>• San Pedro Bay ports complex</li>
                <li>• Wilmington & Harbor City</li>
                <li>• Carson & Compton</li>
                <li>• Torrance & South Bay</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Greater LA Maritime Community</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Maritime importers and logistics companies throughout Southern California:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Port of Los Angeles (San Pedro, Wilmington)</li>
                <li>• Signal Hill & Lakewood</li>
                <li>• Cerritos & Norwalk</li>
                <li>• Downey & Bellflower</li>
                <li>• Orange County ports (Seal Beach, Huntington Beach)</li>
                <li>• Inland Empire distribution centers</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">San Pedro Bay Ports Complex</h3>
            <p className="text-center text-neutral-200 mb-4">
              The Port of Long Beach and Port of Los Angeles together form the <strong>San Pedro Bay Ports Complex</strong>, the busiest port complex in the Western Hemisphere. Combined, they handle over 40% of U.S. containerized imports. Our attorneys provide immediate access and response for both ports.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Maritime Importers Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Maritime Customs Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general trade lawyers, we have <strong>deep expertise in maritime customs</strong> - vessel entries, ISF compliance, ocean cargo procedures, and port-specific CBP practices at Long Beach.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Emergency Port Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                When cargo is held at the port, <strong>time is money</strong>. We provide 2-4 hour emergency response, direct CBP coordination, and aggressive advocacy to get your cargo released quickly.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Demurrage & Detention Cost Savings</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our rapid response to CBP holds <strong>minimizes demurrage and per diem charges</strong>. Clients routinely save tens of thousands in storage fees through our efficient cargo release strategies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Carrier & NVOCC Representation</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We represent <strong>ocean carriers, NVOCCs, and freight forwarders</strong> in vessel entry matters, manifest compliance, and carrier-specific customs issues at Long Beach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Port of Long Beach
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving Port of Long Beach & Port of LA)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Emergency:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Emergency Response:</strong> Available for port emergencies
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Port Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>To Port of Long Beach:</strong> 101 to 405 to 710 South, approximately 55 minutes</li>
                <li><strong>To Port of LA:</strong> 101 to 110 to 710, approximately 50 minutes</li>
                <li><strong>CBP Office Access:</strong> Direct access to port CBP locations</li>
                <li><strong>Response Time:</strong> 2-4 hours for emergency port issues</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Maritime Trade Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Port Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#oakland-port-operations-attorney" className="service-link">
                    <span className="service-link__title">Oakland Port Operations</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#long-beach-ftz-compliance-attorney" className="service-link">
                    <span className="service-link__title">FTZ Compliance</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">CBP Defense</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense & Litigation</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/uflpa-compliance-guide" className="service-link">
                    <span className="service-link__title">UFLPA Defense</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Trade Compliance</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#regulatory-compliance-advisory" className="service-link">
                    <span className="service-link__title">Compliance Programs</span>
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
            Schedule Your Free Maritime Customs Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Long Beach maritime tariff attorneys today. We'll assess your ocean cargo compliance, review ISF procedures, and provide emergency response for port detentions.
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

export default LongBeachMaritimeTariffPage;
