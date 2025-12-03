
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const PortOfStocktonTradePage: React.FC = () => {
  useMeta({
    title: 'Port of Stockton Trade Compliance | Inland Port Customs Attorney CA',
    description: 'Port of Stockton trade compliance attorney. Inland deep-water port CBP defense, agricultural cargo, Central Valley logistics. Expert customs representation. (310) 744-1328.',
    keywords: 'port of stockton trade attorney, stockton customs lawyer, inland port attorney, port of stockton cbp, stockton cargo detention, central valley port lawyer, stockton agricultural exports',
    canonical: 'port-of-stockton-trade',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-port-stockton.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Port of Stockton Trade Compliance Attorney - Inland Port Specialists',
        description: 'Port of Stockton trade compliance attorney providing expert CBP detention defense, agricultural cargo services, and customs representation at California\'s inland deep-water port.',
        url: `${siteConfig.siteUrl}/port-of-stockton-trade`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Ports', url: `${siteConfig.siteUrl}/california-ports` },
        { name: 'Port of Stockton', url: `${siteConfig.siteUrl}/port-of-stockton-trade` }
      ]),
      generateFAQSchema([
        {
          question: 'What makes Port of Stockton unique for trade compliance?',
          answer: 'Port of Stockton is California\'s only inland deep-water port, located 75 miles from the Pacific Ocean. It serves Central Valley agricultural exports, bulk commodities, and project cargo. The port offers direct access to I-5, California\'s rail network, and Central Valley agricultural regions. We understand Stockton\'s unique inland port operations and CBP procedures.',
        },
        {
          question: 'What types of cargo move through Port of Stockton?',
          answer: 'Port of Stockton handles diverse cargo including: agricultural exports (rice, almonds, walnuts), agricultural imports (fertilizers, feed), bulk commodities (cement, petroleum), steel and construction materials, project cargo (oversized equipment), and containerized general cargo. We provide specialized compliance for all Stockton cargo types.',
        },
        {
          question: 'How do you handle agricultural cargo at Port of Stockton?',
          answer: 'Port of Stockton is a major agricultural export gateway for Central Valley. We assist exporters with USDA export certificates, phytosanitary documentation, fumigation compliance, and destination country requirements. We also handle agricultural import compliance including USDA/APHIS inspections and FDA food import regulations.',
        },
        {
          question: 'Can you help with CBP cargo detention at Port of Stockton?',
          answer: 'Yes, we provide rapid response to Port of Stockton CBP cargo detentions. This includes detention defense, admissibility package preparation, agricultural product holds, CBP examination support, and coordination with Stockton CBP officers to expedite cargo release and minimize storage costs.',
        },
        {
          question: 'Do you assist with Port of Stockton customs procedures and compliance?',
          answer: 'Yes, we provide comprehensive Port of Stockton services including: CBP entry filing and customs clearance, port examination and inspection support, agricultural fumigation and treatment compliance, bulk commodity import regulations, steel and construction material tariff classification, and foreign-trade zone (FTZ) services for Stockton facilities.',
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
      <section className="hero" aria-label="Port of Stockton Trade Compliance Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Port of Stockton Trade Compliance<br />Inland Port Customs Attorney</h1>
          <p className="hero-subtitle">
            Expert Port of Stockton trade compliance attorney providing CBP detention defense, agricultural export services, and customs representation at California's inland deep-water port serving Central Valley.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Port of Stockton Specialist */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              California's Inland Port Trade Law Experts
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Port of Stockton is California's <strong>only inland deep-water port</strong>, strategically located 75 miles from the Pacific Ocean. The port serves Central Valley agricultural producers, Northern California manufacturers, and bulk commodity importers with direct vessel access.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Inland Port Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Specialized knowledge</strong> of Port of Stockton operations, inland port CBP procedures, agricultural export compliance, and Central Valley logistics unique to this deep-water inland port.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Port of Stockton is a <strong>major agricultural export gateway</strong> for Central Valley rice, almonds, walnuts, and commodities. We understand USDA export compliance and agricultural trade regulations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic location serving <strong>Central Valley and Northern California</strong> businesses. Direct access to I-5, rail networks, and Sacramento Valley agricultural regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Port of Stockton Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Port of Stockton Customs & Trade Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of Stockton is Central Valley's <strong>primary agricultural export gateway</strong> for rice, almonds, walnuts, and bulk agricultural commodities. We assist exporters with USDA export certificates, phytosanitary requirements, fumigation compliance, and destination country documentation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA export certificate and phytosanitary documentation for agricultural exports</li>
                <li>Fumigation and pest treatment compliance (methyl bromide, phosphine)</li>
                <li>Destination country requirements and import permits (Asia-Pacific markets)</li>
                <li>Container stuffing supervision and USDA/APHIS inspection coordination</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Cargo Detention & Examination</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of Stockton CBP examines and detains cargo for <strong>compliance verification, agricultural issues, and import violations</strong>. We provide rapid detention defense, coordinate with Stockton CBP officers, and prepare admissibility packages to expedite cargo release.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP cargo detention defense and admissibility package preparation</li>
                <li>Port examination support and CBP documentation requests</li>
                <li>Agricultural import holds and USDA/APHIS compliance demonstration</li>
                <li>Bulk commodity compliance and regulatory coordination (EPA, DOT)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Bulk Commodity Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of Stockton handles <strong>bulk imports including fertilizers, cement, petroleum products, and construction materials</strong>. We provide tariff classification, regulatory compliance, and CBP coordination for bulk commodity importers using Stockton facilities.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Bulk commodity HTS classification and tariff optimization</li>
                <li>Fertilizer and agricultural input import compliance (EPA/FIFRA)</li>
                <li>Cement and construction material tariff strategies</li>
                <li>Petroleum product import regulations and customs procedures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Steel & Project Cargo Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of Stockton's heavy-lift capabilities serve <strong>steel, machinery, and oversized project cargo</strong>. We handle Section 232 aluminum/steel tariff compliance, project cargo import procedures, and construction equipment classification.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 232 steel/aluminum tariff compliance and exclusion requests</li>
                <li>Project cargo and oversized equipment import procedures</li>
                <li>Construction and agricultural machinery HTS classification</li>
                <li>Heavy equipment temporary import bonds (TIB) for project use</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign-Trade Zone (FTZ) Services</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of Stockton area includes <strong>FTZ 231 (Foreign-Trade Zone)</strong> offering duty deferral and inverted tariff benefits. We assist with FTZ applications, zone operations, and compliance for businesses using Stockton-area FTZ facilities.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FTZ 231 activation and subzone designation applications</li>
                <li>FTZ operations compliance and zone admissibility determinations</li>
                <li>Weekly entry and consumption entry filings for FTZ merchandise</li>
                <li>FTZ audit defense and CBP zone examination support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Entry & Clearance Services</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We provide comprehensive <strong>customs entry filing, clearance coordination, and CBP compliance</strong> for Port of Stockton importers and exporters. Our team handles entry documentation, bond requirements, and port-specific procedures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Customs entry filing and classification review (Type 01, 03, 11 entries)</li>
                <li>Customs bond procurement and continuous bond maintenance</li>
                <li>ISF (Importer Security Filing) compliance for Stockton vessel arrivals</li>
                <li>Post-entry amendments, protests, and prior disclosures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Port of Stockton Operations */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Port of Stockton Facilities & Operations
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Infrastructure</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of Stockton facilities and capabilities:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Deep-Water Access:</strong> 35-foot channel depth for ocean vessels</li>
                <li><strong>Cargo Terminals:</strong> General cargo, bulk, and container facilities</li>
                <li><strong>Heavy-Lift:</strong> Mobile harbor cranes up to 104-ton capacity</li>
                <li><strong>Rail Access:</strong> BNSF and Union Pacific direct service</li>
                <li><strong>Warehouse:</strong> On-dock and near-dock storage facilities</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Primary Commodities</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Major cargo types through Port of Stockton:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Agricultural Exports:</strong> Rice, almonds, walnuts, dried fruits</li>
                <li><strong>Agricultural Imports:</strong> Fertilizers, feed ingredients, chemicals</li>
                <li><strong>Bulk Materials:</strong> Cement, petroleum, aggregates</li>
                <li><strong>Steel Products:</strong> Rebar, structural steel, coils</li>
                <li><strong>Project Cargo:</strong> Heavy equipment, wind turbines, transformers</li>
              </ul>
            </div>
          </div>

          {/* Port Statistics */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Port of Stockton Trade Profile</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Port Advantages</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>California's Inland Deep-Water Port</li>
                  <li>75 Miles from Pacific Ocean</li>
                  <li>Direct Central Valley Access</li>
                  <li>Multi-Modal Transportation Hub</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Trade Partners</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Asia-Pacific (China, Japan, Korea)</li>
                  <li>Southeast Asia (Vietnam, Thailand)</li>
                  <li>Latin America (Mexico, Chile)</li>
                  <li>Middle East</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Service Area</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Central Valley Agricultural Region</li>
                  <li>Northern California</li>
                  <li>Sacramento Metro</li>
                  <li>San Joaquin Valley</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Stockton Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Port of Stockton Users Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Inland Port Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Port of Stockton customs attorney, we understand <strong>inland port operations, agricultural export compliance, and Central Valley logistics</strong> better than general practice firms. Our team has deep knowledge of Stockton's unique role as California's only inland deep-water port.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Export Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Port of Stockton is Central Valley's <strong>agricultural export gateway</strong>. We understand USDA export certificates, phytosanitary requirements, fumigation compliance, and Asia-Pacific market access requirements. Our agricultural trade expertise serves Stockton's export community.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Port Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Port delays cost money in <strong>vessel time, demurrage, and storage fees</strong>. We provide same-day response to Port of Stockton CBP detentions and cargo holds. Our team coordinates with Stockton CBP officers and port operations to expedite resolution.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Comprehensive Trade Services</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Beyond port representation, we provide <strong>complete trade law services</strong> including tariff classification, Section 232 steel compliance, FTZ operations, customs audits, and trade compliance programs. We appear before federal agencies and courts nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Port of Stockton from Our California Office
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
                <strong>Emergency Response:</strong> Available for urgent port matters<br />
                <strong>Regular Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Stockton Port Services</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>Remote Representation:</strong> Full CBP coordination without on-site presence</li>
                <li><strong>Agricultural Export Support:</strong> USDA certificate and compliance</li>
                <li><strong>Detention Defense:</strong> Rapid response to cargo holds</li>
                <li><strong>FTZ Services:</strong> Zone operations and compliance</li>
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
                  <a href="#agricultural-exports" className="service-link">
                    <span className="service-link__title">Agricultural Exports</span>
                    <p className="service-link__description">USDA certificates & compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#bulk-commodity-compliance" className="service-link">
                    <span className="service-link__title">Bulk Commodity Compliance</span>
                    <p className="service-link__description">Fertilizers, cement, steel</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#ftz-operations" className="service-link">
                    <span className="service-link__title">FTZ Operations</span>
                    <p className="service-link__description">Foreign-trade zone services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Other Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Regional Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/central-valley-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Central Valley</span>
                    <p className="service-link__description">Regional agricultural trade</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/sacramento-valley-trade" className="service-link">
                    <span className="service-link__title">Sacramento Valley</span>
                    <p className="service-link__description">Capital region trade law</p>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Guides</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#agricultural-export-guide" className="service-link">
                    <span className="service-link__title">Agricultural Export Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#usda-compliance-guide" className="service-link">
                    <span className="service-link__title">USDA Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#section-232-steel-guide" className="service-link">
                    <span className="service-link__title">Section 232 Steel Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
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
            Port of Stockton Customs Support
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Need customs assistance at Port of Stockton? Contact our trade compliance attorneys for expert agricultural export services, CBP detention defense, and port representation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">
              Schedule Consultation
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

export default PortOfStocktonTradePage;
