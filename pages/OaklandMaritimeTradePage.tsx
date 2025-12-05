
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const OaklandMaritimeTradePage: React.FC = () => {
  useMeta({
    title: 'Maritime Trade Lawyer Oakland | Port of Oakland Customs Attorney CA',
    description: 'Oakland maritime trade lawyer & Port of Oakland customs attorney. Expert vessel clearance, Jones Act compliance, maritime cargo claims, port operations. (310) 744-1328.',
    keywords: 'maritime trade lawyer oakland, port of oakland attorney, maritime customs lawyer california, jones act attorney oakland, vessel clearance lawyer, maritime cargo oakland, shipping law attorney bay area',
    canonical: 'oakland-maritime-trade',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-maritime.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Oakland Maritime Trade Lawyer - Port of Oakland Customs & Shipping Attorney',
        description: 'Expert Oakland maritime trade lawyer providing Port of Oakland customs compliance, vessel clearance, Jones Act compliance, and maritime cargo legal services for Bay Area shipping companies.',
        url: `${siteConfig.siteUrl}/oakland-maritime-trade`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Oakland Maritime Trade', url: `${siteConfig.siteUrl}/oakland-maritime-trade` }
      ]),
      generateFAQSchema([
        {
          question: 'What maritime trade services do you provide for Port of Oakland operations?',
          answer: 'Our Oakland maritime trade lawyer provides comprehensive legal services for Port of Oakland operations including: vessel entry and clearance procedures, CBP manifest requirements, maritime cargo detention defense, Jones Act compliance, vessel documentation and registration, maritime lien claims, marine insurance disputes, and port facility compliance. We work with ocean carriers, NVOCCs, freight forwarders, and cargo owners operating through Oakland.',
        },
        {
          question: 'How does Jones Act compliance affect my shipping operations?',
          answer: 'The Jones Act (46 USC § 55102) requires that goods transported by water between U.S. points be carried on U.S.-flag vessels that are built in the U.S., owned by U.S. citizens, and crewed by U.S. citizens. Violations can result in civil penalties equal to the value of the merchandise plus shipping costs. Our Oakland maritime trade attorneys help you structure shipping operations to comply with Jones Act requirements or obtain necessary waivers.',
        },
        {
          question: 'What should I do if CBP detains my maritime cargo at Port of Oakland?',
          answer: 'Contact our Oakland maritime trade lawyer immediately. Maritime cargo detentions require rapid response due to demurrage, storage costs, and delivery deadlines. We prepare admissibility packages, respond to CBP requests, negotiate release terms, and represent you in penalty proceedings. For perishable cargo or time-sensitive shipments, we prioritize emergency response.',
        },
        {
          question: 'Do you handle maritime cargo claims and disputes?',
          answer: 'Yes. Our Oakland maritime trade practice includes cargo claims under the Carriage of Goods by Sea Act (COGSA), maritime insurance disputes, salvage claims, general average contributions, and maritime lien enforcement. We represent cargo owners, ocean carriers, and maritime service providers in dispute resolution and litigation.',
        },
        {
          question: 'Why choose a maritime trade lawyer familiar with Port of Oakland?',
          answer: 'Port of Oakland is the 8th busiest container port in the U.S. and a critical West Coast gateway for Asian trade. Our Oakland maritime trade attorney understands local port operations, terminal procedures, CBP\'s Port of Oakland enforcement priorities, and regional maritime industry practices. This local expertise enables more efficient problem resolution and cost-effective representation.',
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
      <section className="hero" aria-label="Oakland Maritime Trade Hero">
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
          <h1>Oakland Maritime Trade Lawyer<br />Port of Oakland Customs Attorney</h1>
          <p className="hero-subtitle">
            Expert maritime trade law and Port of Oakland customs compliance. Vessel clearance, Jones Act, maritime cargo claims, and shipping law services for Bay Area maritime industry.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Maritime Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Oakland Maritime Trade Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Port of Oakland Maritime Trade Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Port of Oakland is California's <strong>busiest Northern California container port</strong>, handling over 2.5 million TEUs annually and serving as a critical gateway for transpacific trade. Our Oakland maritime trade lawyer provides specialized legal services for ocean carriers, NVOCCs, freight forwarders, and cargo owners navigating complex maritime customs regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Maritime Law Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                We combine <strong>maritime law expertise with customs compliance</strong>, covering vessel operations, cargo regulations, and international shipping law unique to Port of Oakland.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Oakland Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct experience with <strong>Port of Oakland operations</strong>, terminal procedures, local CBP enforcement, and Bay Area maritime industry practices.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Maritime Response</h3>
              <p className="text-text-secondary leading-relaxed">
                Maritime issues are <strong>time-sensitive</strong>. We provide same-day response to vessel detentions, cargo holds, and urgent maritime compliance matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maritime Trade Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Comprehensive Maritime Trade Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Vessel Entry & Clearance Procedures</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Every vessel entering Port of Oakland must comply with <strong>CBP vessel entry requirements</strong> under 19 CFR Part 4. Our Oakland maritime trade lawyer assists with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Vessel entry documentation (CBP Form 1300)</li>
                <li>Cargo declaration and manifest requirements</li>
                <li>Crew list and immigration compliance (I-95 Crewman Landing Permits)</li>
                <li>Vessel stores declaration and duty payment</li>
                <li>Port clearance procedures and outbound manifests</li>
                <li>Vessel Sanitation Program (VSP) compliance for passenger vessels</li>
                <li>CBP vessel inspections and boarding procedures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Jones Act Compliance & Waivers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Jones Act requires <strong>U.S.-flag vessels for domestic coastwise trade</strong>. Violations can result in civil penalties equal to merchandise value. We provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Jones Act applicability analysis for shipping routes</li>
                <li>Coastwise trade vs. foreign trade determination</li>
                <li>Vessel documentation and U.S.-flag compliance verification</li>
                <li>Jones Act waiver applications to CBP and DHS</li>
                <li>Substantial transformation analysis for domestic/foreign trade</li>
                <li>Penalty defense for alleged Jones Act violations</li>
                <li>Alternative shipping route structuring for compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Maritime Cargo Detention & Seizure Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP detains maritime cargo at Port of Oakland for <strong>admissibility, valuation, classification, and forced labor concerns</strong>. Time is critical due to demurrage costs. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Immediate response to CBP detention notices</li>
                <li>Admissibility package preparation and submission</li>
                <li>Redelivery and examination coordination</li>
                <li>UFLPA and forced labor detention defense</li>
                <li>IPR and trademark infringement defense</li>
                <li>FDA and USDA hold resolution for food/agricultural cargo</li>
                <li>Demurrage and detention cost mitigation strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Maritime Cargo Claims (COGSA)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Carriage of Goods by Sea Act (COGSA) governs <strong>ocean carrier liability for cargo loss or damage</strong>. Our Oakland maritime trade attorneys handle:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>COGSA cargo damage and loss claims</li>
                <li>Bill of lading interpretation and enforcement</li>
                <li>Carrier limitation of liability defenses (COGSA $500/package limit)</li>
                <li>Marine insurance claims and coverage disputes</li>
                <li>Subrogation actions against ocean carriers</li>
                <li>Container contamination and reefer failure claims</li>
                <li>General average contributions and salvage claims</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">NVOCC & Freight Forwarder Licensing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Non-Vessel Operating Common Carriers (NVOCCs) and ocean freight forwarders must comply with <strong>Federal Maritime Commission (FMC) regulations</strong>. We assist with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>NVOCC tariff filing and FMC licensing</li>
                <li>Ocean Transportation Intermediary (OTI) license applications</li>
                <li>Financial responsibility (bond) requirements</li>
                <li>NVOCC Service Arrangements (NSAs)</li>
                <li>FMC enforcement and penalty defense</li>
                <li>Freight forwarder-shipper agreements</li>
                <li>Shipping Act compliance and prohibited practices</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">ISF (10+2) Compliance & Penalties</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Importer Security Filing (ISF) requires importers to submit <strong>10 data elements 24 hours before ocean cargo loading</strong>. Late or inaccurate ISF can result in $5,000 penalties per violation. We provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ISF compliance program development</li>
                <li>ISF penalty mitigation and response to CBP claims</li>
                <li>Reasonable care analysis for ISF accuracy</li>
                <li>Buyer's consolidation and seller's consolidation ISF strategies</li>
                <li>Time-sensitive ISF filing for just-in-time cargo</li>
                <li>ISF amendment procedures for changing information</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Port of Oakland Trade Statistics */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Port of Oakland: A Major Trade Gateway
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-neutral-50 p-8 rounded-lg text-center border-t-4 border-secondary-teal">
              <div className="text-5xl font-bold text-primary-navy mb-3">2.5M+</div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">TEUs Annually</h3>
              <p className="text-text-secondary text-sm">Over 2.5 million twenty-foot equivalent units handled each year</p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg text-center border-t-4 border-secondary-teal">
              <div className="text-5xl font-bold text-primary-navy mb-3">#8</div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">U.S. Container Port</h3>
              <p className="text-text-secondary text-sm">8th busiest container port in the United States</p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg text-center border-t-4 border-secondary-teal">
              <div className="text-5xl font-bold text-primary-navy mb-3">$80B+</div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">Annual Trade Value</h3>
              <p className="text-text-secondary text-sm">Over $80 billion in goods pass through Oakland annually</p>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Top Trading Partners via Port of Oakland</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-2">China</h4>
                <p className="text-sm text-neutral-200">Leading trade partner</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-2">Japan</h4>
                <p className="text-sm text-neutral-200">Major Asian partner</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-2">South Korea</h4>
                <p className="text-sm text-neutral-200">Electronics and autos</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-2">Taiwan</h4>
                <p className="text-sm text-neutral-200">Technology imports</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Oakland Maritime Trade Team */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Choose Our Maritime Trade Attorneys
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Maritime & Customs Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We uniquely combine <strong>admiralty/maritime law with customs and trade law</strong>, providing comprehensive representation for complex maritime trade issues.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Oakland Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Extensive experience with <strong>Port of Oakland operations, terminal practices, and local CBP procedures</strong>, enabling efficient problem resolution.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Time-Sensitive Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand maritime deadlines and <strong>demurrage costs</strong>. Same-day response to urgent vessel and cargo matters.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industry Relationships</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Established relationships with <strong>ocean carriers, terminal operators, customs brokers, and CBP officials</strong> at Port of Oakland.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Port of Oakland & Bay Area
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving Oakland & Bay Area Maritime Industry)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Maritime Emergencies:</strong> 24/7 response for urgent vessel/cargo matters
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary-navy mb-3">Bay Area Maritime Service</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>Port of Oakland:</strong> 6 hours via I-580/I-880</li>
                <li><strong>Oakland Downtown:</strong> 6 hours via I-580</li>
                <li><strong>San Francisco Port:</strong> Bay Area access</li>
                <li><strong>Virtual Consultations:</strong> Available for Bay Area clients</li>
                <li><strong>On-Site Meetings:</strong> Port of Oakland terminal visits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Maritime Trade Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Maritime Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/vessel-documentation" className="service-link">
                    <span className="service-link__title">Vessel Documentation</span>
                    <p className="service-link__description">USCG registration and compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/maritime-insurance" className="service-link">
                    <span className="service-link__title">Maritime Insurance Claims</span>
                    <p className="service-link__description">Cargo loss and damage claims</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/fmc-licensing" className="service-link">
                    <span className="service-link__title">FMC Licensing</span>
                    <p className="service-link__description">NVOCC and OTI licenses</p>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Ports</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/los-angeles-maritime" className="service-link">
                    <span className="service-link__title">Port of LA Maritime Law</span>
                    <p className="service-link__description">Southern California maritime</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/long-beach-maritime" className="service-link">
                    <span className="service-link__title">Port of Long Beach Maritime</span>
                    <p className="service-link__description">Long Beach shipping law</p>
                    <div className="triangle-slide">
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Maritime Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/jones-act-guide" className="service-link">
                    <span className="service-link__title">Jones Act Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/isf-compliance" className="service-link">
                    <span className="service-link__title">ISF 10+2 Requirements</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/cogsa-claims" className="service-link">
                    <span className="service-link__title">COGSA Cargo Claims Guide</span>
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
            Navigate Maritime Trade Law with Confidence
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Port of Oakland maritime operations require specialized legal expertise. Our Oakland maritime trade attorneys provide comprehensive representation for vessel operations, cargo claims, and shipping compliance. Free consultation.
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

export default OaklandMaritimeTradePage;
