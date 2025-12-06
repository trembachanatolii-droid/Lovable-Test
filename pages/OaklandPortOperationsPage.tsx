
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const OaklandPortOperationsPage: React.FC = () => {
  useMeta({
    title: 'Port Operations Attorney Oakland | Maritime Customs Lawyer',
    description: 'Oakland port operations attorney & maritime customs lawyer. Expert Port of Oakland compliance, cargo operations, CBP port procedures. Bay Area. (310) 744-1328.',
    keywords: 'port operations attorney oakland, maritime customs lawyer oakland, port of oakland attorney, shipping operations lawyer bay area, oakland customs attorney, cargo operations lawyer',
    canonical: 'oakland-port-operations-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-port-oakland.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Oakland Port Operations Attorney - Port of Oakland Customs & Maritime Lawyer',
        description: 'Oakland port operations attorney specializing in Port of Oakland compliance, maritime customs, cargo operations, and shipping regulations.',
        url: `${siteConfig.siteUrl}/oakland-port-operations-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Oakland Port Operations Attorney', url: `${siteConfig.siteUrl}/oakland-port-operations-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What makes Port of Oakland unique for customs operations?',
          answer: 'Port of Oakland is the 9th busiest container port in the U.S. and the primary Northern California gateway for Asian imports. It specializes in containerized cargo, automobiles (RoRo), and bulk commodities. Oakland has direct rail access to major markets and shorter dwell times than LA/Long Beach. CBP operations at Oakland focus heavily on tech/electronics, agricultural products, and automotive imports. Our port operations attorneys have direct relationships with Oakland CBP and understand port-specific procedures.',
        },
        {
          question: 'How quickly can you respond to cargo holds at Port of Oakland?',
          answer: 'We provide rapid response to Port of Oakland emergencies. While our main office is in Southern California, we serve Northern California clients remotely and can coordinate Oakland CBP meetings within 24-48 hours for urgent matters. We maintain direct communication with Oakland CBP officers and can often resolve issues through documentation submission and phone coordination without requiring on-site presence.',
        },
        {
          question: 'What are common CBP issues at Port of Oakland?',
          answer: 'Common Oakland port issues include: tech product classification and valuation disputes, agricultural product (wine, nuts, produce) USDA/FDA holds, Section 301 tariff verification for Asian electronics, automotive entry and EPA/DOT compliance, ISF violations on ocean cargo, forced labor (UFLPA) detentions, and IPR seizures. Oakland is also a major air cargo port with unique pharmaceutical and perishable goods compliance challenges.',
        },
        {
          question: 'Do you handle both ocean and air cargo at Oakland?',
          answer: 'Yes. Port of Oakland includes both seaport operations (containerized cargo, automobiles, bulk) and Oakland International Airport air cargo facilities. We assist with ocean cargo entry, ISF compliance, vessel operations, as well as air cargo entry, express consignment procedures, and time-sensitive air freight clearance. Oakland\'s integrated port-airport complex requires specialized knowledge of both maritime and air cargo procedures.',
        },
        {
          question: 'Can you help with Oakland port logistics and operational planning?',
          answer: 'Yes. Beyond customs compliance, we advise on: optimal port entry procedures (direct delivery, centralized exam sites), Foreign Trade Zone utilization at Oakland, marine terminal operations and contracts, drayage and transloading strategies, and regulatory compliance for port service providers. We help importers optimize Oakland port operations for efficiency and cost savings.',
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
      <section className="hero" aria-label="Oakland Port Operations Attorney Hero">
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
          <h1>Oakland Port Operations Attorney<br />Port of Oakland Customs Lawyer</h1>
          <p className="hero-subtitle">
            Expert port operations attorney serving Port of Oakland. Specialized maritime customs, cargo operations, CBP port procedures, ISF compliance, and shipping regulations for Bay Area importers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Port Operations Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Port of Oakland Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Port of Oakland is <strong>Northern California's primary international gateway</strong>, handling 2.5+ million TEUs annually. Our port operations attorneys provide expert customs and maritime law services for Oakland importers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                We focus on <strong>port operations and maritime customs</strong> - containerized cargo, automotive imports, bulk commodities, and air cargo at Oakland.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CBP Oakland Knowledge</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep understanding of <strong>Oakland CBP procedures</strong>, including port-specific examination protocols, detention processes, and regulatory focus areas.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Quick coordination</strong> with Oakland CBP for cargo holds, detentions, and time-sensitive clearance issues affecting Northern California importers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Port Operations Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Port of Oakland Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Container Cargo Operations & Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of Oakland handles <strong>diverse containerized cargo</strong>. We ensure proper customs entry, classification, and clearance procedures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FCL (Full Container Load) and LCL (Less than Container Load) entry</li>
                <li>Oakland marine terminal operations coordination</li>
                <li>Direct delivery and centralized examination site procedures</li>
                <li>Container examination and intensive exam responses</li>
                <li>Demurrage and detention minimization strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">ISF Compliance & Ocean Cargo Security</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Oakland-bound ocean cargo requires <strong>ISF (10+2) filing</strong> at least 24 hours before loading. We help importers maintain ISF compliance and defend penalties.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ISF filing compliance programs for Oakland cargo</li>
                <li>ISF violation penalty mitigation</li>
                <li>Bill of lading vs. master bill strategies</li>
                <li>Container Status Messages (CSM) requirements</li>
                <li>ISF amendment and correction procedures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Automotive Imports & Vehicle Entry (Port of Oakland RoRo)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Oakland is a major <strong>automotive import port</strong> (RoRo operations). Vehicle imports require specialized EPA, DOT, and customs compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Automotive entry and HTS classification (Chapter 87)</li>
                <li>EPA emission standards compliance (3520-1 forms)</li>
                <li>DOT safety standards and FMVSS compliance</li>
                <li>Nonconforming vehicle importation</li>
                <li>Used vehicle and classic car import procedures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Oakland Air Cargo Operations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Oakland International Airport handles <strong>significant air cargo volume</strong>. Time-sensitive clearance is critical for perishables, pharmaceuticals, and express shipments.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Air cargo entry and informal entry procedures</li>
                <li>Express consignment clearance (Section 321 de minimis)</li>
                <li>Perishable goods expedited clearance</li>
                <li>Pharmaceutical air freight FDA/CBP compliance</li>
                <li>Air waybill and documentation review</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Cargo Detention & Hold Resolution</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP detains cargo at Oakland, <strong>every day costs money</strong>. We provide rapid response to secure cargo release.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP cargo hold and detention notice responses</li>
                <li>Admissibility package preparation for Oakland CBP</li>
                <li>UFLPA forced labor detention defense</li>
                <li>Agricultural product USDA/FDA hold resolution</li>
                <li>IPR (intellectual property) seizure defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign Trade Zone (FTZ) - Port of Oakland</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Oakland has <strong>FTZ capabilities</strong> allowing importers to defer, reduce, or eliminate customs duties through zone operations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FTZ activation for Oakland-area operations</li>
                <li>Direct delivery to FTZ from Oakland port</li>
                <li>Manufacturing and distribution in FTZ</li>
                <li>Weekly entry procedures for high-volume importers</li>
                <li>Zone-to-zone transfers and subzone applications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cargo Types */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Port of Oakland Cargo Types
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Container Cargo</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Consumer Electronics & Technology</li>
                <li>• Apparel & Fashion Goods</li>
                <li>• Furniture & Home Goods</li>
                <li>• Industrial Machinery & Parts</li>
                <li>• Agricultural Products (Wine, Nuts)</li>
                <li>• Automotive Parts & Accessories</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Automotive & RoRo</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• New & Used Vehicles</li>
                <li>• Motorcycles & Powersports</li>
                <li>• Heavy Equipment & Machinery</li>
                <li>• Classic & Vintage Automobiles</li>
                <li>• Electric Vehicles (EVs)</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Air Cargo & Specialty</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Pharmaceuticals & Medical Devices</li>
                <li>• Perishable Goods & Food</li>
                <li>• High-Value Electronics</li>
                <li>• Express Shipments & E-commerce</li>
                <li>• Time-Sensitive Manufacturing Parts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bay Area Service */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Serving Bay Area Port Community
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Oakland & East Bay</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve <strong>Port of Oakland users</strong> throughout the East Bay:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Oakland Port area & West Oakland</li>
                <li>• Alameda & Bay Farm Island</li>
                <li>• Emeryville & Berkeley</li>
                <li>• Richmond & San Pablo</li>
                <li>• Hayward & San Leandro</li>
                <li>• Fremont & Newark logistics hubs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Greater Bay Area</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port users throughout Northern California:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• San Francisco importers</li>
                <li>• Silicon Valley (San Jose, Santa Clara)</li>
                <li>• Peninsula (Redwood City, San Mateo)</li>
                <li>• Sacramento & Central Valley</li>
                <li>• Wine Country (Napa, Sonoma)</li>
                <li>• Inland distribution centers</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Port of Oakland Gateway</h3>
            <p className="text-center text-neutral-200 mb-4">
              Port of Oakland handles <strong>over 99% of containerized goods</strong> through Northern California. With direct rail access to major markets and the shortest truck turn times of any major U.S. port, Oakland is the preferred gateway for Bay Area and inland importers.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Oakland Importers Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Operations Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general trade lawyers, we have <strong>deep expertise in port operations</strong> - container procedures, ISF compliance, marine terminal coordination, and CBP port-specific practices.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Oakland CBP Relationships</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We maintain <strong>direct communication</strong> with Oakland CBP officers and understand port-specific examination procedures, detention protocols, and regulatory priorities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost Savings Through Efficiency</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our Oakland port expertise <strong>minimizes demurrage, detention, and storage costs</strong> through efficient clearance procedures and rapid resolution of CBP holds.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tech & Ag Industry Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Oakland specializes in <strong>tech and agricultural imports</strong>. We have deep expertise in these sectors, serving Silicon Valley tech companies and Central Valley ag exporters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Port of Oakland Community
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving Port of Oakland & Bay Area)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Service:</strong> Remote and in-person Oakland representation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Port of Oakland Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>Port of Oakland:</strong> Container terminals, automotive RoRo, bulk cargo</li>
                <li><strong>Oakland Airport:</strong> Air cargo and express consignment clearance</li>
                <li><strong>CBP Oakland:</strong> Direct coordination with CBP officers</li>
                <li><strong>Response Time:</strong> 24-48 hour coordination for urgent matters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Port & Maritime Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Port Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="/long-beach-maritime-tariff" className="service-link">
                    <span className="service-link__title">Long Beach Maritime</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <Link to="/long-beach-ftz-compliance-attorney" className="service-link">
                    <span className="service-link__title">FTZ Compliance</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Bay Area Industries</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/san-francisco-tech-trade-attorney" className="service-link">
                    <span className="service-link__title">Tech Trade Attorney</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">CBP Defense</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/customs-defense" className="service-link">
                    <span className="service-link__title">Customs Defense</span>
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
            Schedule Your Free Port Operations Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Oakland port operations attorneys today. We'll assess your port procedures, review customs compliance, and provide strategies for efficient Oakland cargo operations.
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

export default OaklandPortOperationsPage;
