
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const PittsburgTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Pittsburg Trade Attorney | Port Logistics & Import Compliance CA',
    description: 'Pittsburg trade attorney for Port operations & logistics. Customs compliance, maritime trade, Port of Stockton access. East Bay. (310) 744-1328.',
    canonical: 'pittsburg-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-pittsburg.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Pittsburg Trade Attorney - Port Logistics & Maritime Compliance Lawyer',
        description: 'Serving Pittsburg and East Contra Costa County with expert trade compliance, port logistics, and maritime import legal services for manufacturing and distribution companies.',
        url: `${siteConfig.siteUrl}/pittsburg-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Locations', url: `${siteConfig.siteUrl}/california-locations` },
        { name: 'Pittsburg', url: `${siteConfig.siteUrl}/pittsburg-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Pittsburg Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance, port logistics, and maritime import legal representation for Pittsburg manufacturing and distribution companies. Expert Pittsburg trade attorney services including customs compliance programs, HTS classification, Port of Oakland operations, steel import compliance, and industrial equipment tariff strategies.',
        serviceType: 'Port & Maritime Trade Law',
        url: `${siteConfig.siteUrl}/pittsburg-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="Pittsburg Trade Law Hero">
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
          <h1>Pittsburg Trade Attorney<br />Port Logistics & Import Compliance</h1>
          <p className="hero-subtitle">
            Expert trade law for manufacturing and distribution. Customs compliance, maritime logistics, and global trade strategy for Pittsburg's industrial economy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Port Logistics Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Pittsburg Companies Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Pittsburg's Industrial Economy
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Pittsburg has a rich <strong>maritime and industrial heritage</strong>, with manufacturing facilities, warehousing operations, and Port of Stockton access via the Sacramento Deep Water Ship Channel. Importing industrial equipment, steel, and manufactured goods requires <strong>customs compliance, Section 232 tariff navigation, and port logistics expertise</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industrial Import Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                As your Pittsburg trade attorney, we provide <strong>industrial import compliance services</strong> for manufacturers, distributors, and logistics companies. We handle steel tariffs, machinery classification, and port clearance operations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Logistics Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                We manage <strong>Port of Oakland and Port of Stockton</strong> operations for East Bay importers. We coordinate with CBP, handle ISF filings, and resolve customs examinations for industrial shipments.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">East Bay Coverage</h3>
              <p className="text-text-secondary leading-relaxed">
                Serving Pittsburg, Antioch, Bay Point, and East Contra Costa County. We understand East Bay industrial corridors, warehouse operations, and the unique challenges of maritime trade logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Industrial Companies */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance for Pittsburg Industrial Companies
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Steel & Metals Import Compliance (Section 232)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Importing <strong>steel and aluminum</strong> requires navigating Section 232 national security tariffs (25% on steel, 10% on aluminum). We manage exclusion requests, country of origin determinations, and tariff engineering strategies to minimize duties.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Section 232 Exclusions:</strong> Product-specific exclusion requests to DOC</li>
                <li><strong>Country of Origin:</strong> Steel melting and pouring substantial transformation analysis</li>
                <li><strong>HTS Classification:</strong> Chapter 72 (iron/steel) and 76 (aluminum) tariff engineering</li>
                <li><strong>USMCA Preferences:</strong> Canadian/Mexican steel tariff exemptions</li>
                <li><strong>Quota Management:</strong> Monitoring country-specific steel quotas</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Industrial Equipment & Machinery Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper <strong>HTS classification</strong> for industrial equipment determines duty rates (0-6.5% for machinery) and eligibility for free trade agreements. We classify manufacturing equipment, construction machinery, and industrial tools under Chapters 84-85.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for machinery (Chapter 84) and electrical equipment (Chapter 85)</li>
                <li>First Sale for Export valuation to reduce customs duties</li>
                <li>Section 301 China tariffs (Lists 1-4) mitigation strategies</li>
                <li>CBP binding ruling requests for classification certainty</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Port of Oakland/Stockton Customs Clearance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We manage <strong>customs clearance operations</strong> for Port of Oakland and Port of Stockton shipments. We handle ISF filings, customs bonds, entry documentation, and CBP examinations for industrial cargo.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ISF (10+2) filing for ocean shipments</li>
                <li>Customs bond procurement (single transaction and continuous bonds)</li>
                <li>Entry type selection (Type 01 consumption, Type 03 warehousing)</li>
                <li>CBP examination support and documentation response</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Anti-Dumping & Countervailing Duty Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Many <strong>steel products, industrial chemicals, and manufactured goods</strong> are subject to AD/CVD orders. We conduct scope analysis, manage administrative reviews, and file duty drawback claims for re-exported AD/CVD merchandise.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>AD/CVD scope analysis and product exclusion strategies</li>
                <li>Bonding requirements for AD/CVD cash deposits</li>
                <li>Annual administrative review participation</li>
                <li>Scope ruling requests to DOC</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign Trade Zone (FTZ) Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Operating in a <strong>Foreign Trade Zone</strong> allows duty deferral, inverted tariff relief, and quota/visa exemptions. We help Pittsburg manufacturers and distributors utilize FTZ benefits for import operations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FTZ activation applications and site-specific subzone requests</li>
                <li>Weekly entry procedures and recordkeeping compliance</li>
                <li>Inverted tariff savings analysis for manufacturing operations</li>
                <li>CBP FTZ audits and compliance program design</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Bonded Warehouse & Duty Deferral Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Bonded warehouse operations</strong> allow duty-free storage of imported goods for up to 5 years. We coordinate CBP bonded warehouse applications, manage Type 03 entries, and ensure compliance with 19 CFR Part 19 regulations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Bonded warehouse application (CBP Form 3173)</li>
                <li>Class 2, 4, 5 warehouse selection strategies</li>
                <li>Manipulation operations and manufacturing within bonded facilities</li>
                <li>Warehouse withdrawal procedures (Type 11 entries)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pittsburg Companies Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Pittsburg Industrial Companies Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industrial Trade Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Pittsburg trade attorney, we understand <strong>steel mills, manufacturing operations, warehouse logistics, and industrial supply chains</strong>. We don't just apply generic legal templates—we customize compliance strategies to your industry and import patterns.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Operations Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We work directly with <strong>Port of Oakland and Port of Stockton terminals, CBP officers, and customs brokers</strong>. Our attorneys have experience resolving cargo examinations, managing holds, and expediting clearances.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Flat-Fee Pricing for Importers</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee packages</strong> for tariff classification, Section 232 exclusions, and trade compliance programs. Transparent pricing with no surprise bills. Volume discounts for high-frequency importers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fast Turnaround for Port Operations</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We know <strong>demurrage and detention charges add up fast</strong>. Whether you need emergency CBP response or expedited classification rulings, we prioritize your timelines. Typical HTS classification: 5-7 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Pittsburg Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Steel & Metals</h3>
              <p className="text-sm text-text-secondary">Steel products, aluminum, metal fabrication</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Manufacturing</h3>
              <p className="text-sm text-text-secondary">Industrial equipment, machinery, components</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Warehousing & Logistics</h3>
              <p className="text-sm text-text-secondary">3PL operations, distribution centers, freight</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Construction Materials</h3>
              <p className="text-sm text-text-secondary">Building materials, construction equipment</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Industrial Chemicals</h3>
              <p className="text-sm text-text-secondary">Bulk chemicals, petrochemicals, resins</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Machinery & Equipment</h3>
              <p className="text-sm text-text-secondary">Manufacturing machinery, industrial tools</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Automotive Parts</h3>
              <p className="text-sm text-text-secondary">Auto components, aftermarket parts</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Marine Services</h3>
              <p className="text-sm text-text-secondary">Maritime logistics, ship repair, cargo handling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Pittsburg & East Bay Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Pittsburg's industrial economy, East Bay port access, and Contra Costa County logistics networks. We serve clients by appointment throughout the Pittsburg and East Bay region.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Transportation Routes */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Pittsburg Port & Industrial Transportation Routes</h3>
              <p className="text-text-secondary mb-4">Understanding East Bay freight corridors for industrial logistics:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-4</span>
                  <span>Main arterial — connects Pittsburg to Port of Oakland and I-580</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-680</span>
                  <span>North-south corridor — access to I-80 and regional distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-160</span>
                  <span>Sacramento River route — connects to Port of Stockton via Deep Water Ship Channel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Port of Oakland</span>
                  <span>Primary ocean freight — 30 miles from Pittsburg, container and bulk cargo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Port of Stockton</span>
                  <span>Alternative port access — 45 miles, steel imports, bulk commodities</span>
                </li>
              </ul>
            </div>

            {/* Industrial Zones */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Pittsburg Industrial & Manufacturing Zones</h3>
              <p className="text-text-secondary mb-4">Key industrial and logistics districts:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Los Medanos</span>
                  <span>Industrial park — manufacturing facilities, warehousing, steel processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">East Pittsburg</span>
                  <span>Legacy industrial zone — former steel mills, logistics operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Harbor Master Industrial</span>
                  <span>Waterfront industrial — maritime services, cargo handling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Willow Pass Area</span>
                  <span>Distribution centers — 3PL warehousing, cross-docking facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Bay Point</span>
                  <span>Adjacent industrial zone — chemical plants, bulk storage</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Port Access */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Access & Customs Operations</h3>
              <p className="text-text-secondary mb-4">Managing industrial imports through East Bay ports:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Port of Oakland</span>
                  <span>Container terminals — 5 major terminals, CBP examination facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Port of Stockton</span>
                  <span>Bulk cargo focus — steel imports, agricultural equipment, project cargo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CBP San Francisco</span>
                  <span>Port of entry jurisdiction — Oakland and Stockton customs clearance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Rail Access</span>
                  <span>BNSF/UP rail service — on-dock rail at Oakland, Pittsburg rail sidings</span>
                </li>
              </ul>
              <p className="text-sm text-text-secondary mt-4 italic">
                Average container dwell time at Port of Oakland: 3-5 days. We respond to CBP examinations within 24 hours.
              </p>
            </div>

            {/* Cities Served */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">East Bay Cities We Serve</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout East Contra Costa County:</p>
              <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary">
                <span>Pittsburg</span>
                <span>Antioch</span>
                <span>Bay Point</span>
                <span>Concord</span>
                <span>Walnut Creek</span>
                <span>Martinez</span>
                <span>Pleasant Hill</span>
                <span>Brentwood</span>
                <span>Oakley</span>
              </div>
              <p className="text-sm text-text-secondary mt-4">
                <strong>Headquarters:</strong> 27001 Agoura Road, Suite 350, Calabasas, CA 91301<br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a>
              </p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Industrial Trade Services</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/regulatory-compliance-advisory" className="service-link">
                      <span className="service-link__title">Customs Compliance Programs</span>
                      <p className="service-link__description">Import compliance design</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/tariffs-duties-classification-guide" className="service-link">
                      <span className="service-link__title">Tariff Classification</span>
                      <p className="service-link__description">HTS codes for machinery</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/resources/section-301-tariffs-guide" className="service-link">
                      <span className="service-link__title">Section 301 Tariffs</span>
                      <p className="service-link__description">China tariff strategies</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            {/* Bay Area Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Nearby Locations</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/oakland-trade-attorney" className="service-link">
                      <span className="service-link__title">Oakland Trade Attorney</span>
                      <p className="service-link__description">Port of Oakland operations</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/stockton-tariff-lawyer" className="service-link">
                      <span className="service-link__title">Stockton Tariff Lawyer</span>
                      <p className="service-link__description">Port of Stockton trade</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/concord-tariff-lawyer" className="service-link">
                      <span className="service-link__title">Concord Tariff Lawyer</span>
                      <p className="service-link__description">East Bay compliance</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Resources</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/resources/uflpa-compliance-guide" className="service-link">
                      <span className="service-link__title">UFLPA Guide</span>
                      <p className="service-link__description">Supply chain compliance</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/trade-law-glossary" className="service-link">
                      <span className="service-link__title">Trade Law Glossary</span>
                      <p className="service-link__description">Key terms explained</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/trade-law-faq" className="service-link">
                      <span className="service-link__title">FAQ Center</span>
                      <p className="service-link__description">Common questions</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Import Industrial Products Compliantly
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let customs delays slow down your operations. Contact our Pittsburg trade attorney team for expert port logistics and industrial import compliance services.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">
              Schedule Free Consultation
            </Button>
            <Button href="tel:+13107441328" variant="outline">
              Call (310) 744-1328
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

export default PittsburgTradeAttorneyPage;
