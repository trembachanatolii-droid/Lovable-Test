import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const CeresTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Ceres Trade Attorney | Stanislaus County Agriculture Export Lawyer CA',
    description: 'Ceres trade attorney for agricultural exports, food processing compliance, USDA regulations. Stanislaus County customs lawyer. (310) 744-1328.',
    canonical: 'ceres-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-ceres.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Ceres Trade Attorney - Stanislaus County Agricultural Export Compliance Lawyer',
        description: 'Serving Ceres and Stanislaus County with expert agricultural export compliance, food processing regulations, USDA/FDA requirements, and customs legal services for Central Valley farmers and food manufacturers.',
        url: `${siteConfig.siteUrl}/ceres-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Local Offices', url: `${siteConfig.siteUrl}/local-offices` },
        { name: 'Ceres', url: `${siteConfig.siteUrl}/ceres-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Ceres Agricultural Export Trade Compliance Legal Services',
        description: 'Comprehensive agricultural export compliance, food processing regulations, USDA/FDA compliance, and customs legal representation for Ceres and Stanislaus County farmers, food processors, and agricultural exporters. Expert California agriculture trade attorney services including produce export certifications, nut processing compliance, and trade law for Central Valley agricultural businesses.',
        serviceType: 'Agricultural Trade Law',
        url: `${siteConfig.siteUrl}/ceres-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="Ceres Trade Law Hero">
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
          <h1>Ceres Trade Attorney<br />Agricultural Export Compliance</h1>
          <p className="hero-subtitle">
            Expert trade law for Stanislaus County agriculture. USDA/FDA compliance, produce exports, nut processing regulations, and customs guidance for Ceres agricultural businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Agricultural Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Ceres Agricultural Economy
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Ceres is part of <strong>Stanislaus County's $6.8 billion agricultural economy</strong>, with local production of walnuts, almonds, tomatoes, and other crops. The region's agricultural exports require compliance with <strong>USDA phytosanitary requirements, FDA food safety regulations, and foreign import standards</strong>. One compliance error can delay shipments and damage customer relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Nut Processing Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Stanislaus County grows extensive walnut and almond crops. We help processors obtain <strong>USDA phytosanitary certificates, fumigation compliance, and export documentation</strong> for shipments to Europe, Asia, and other international markets.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Produce Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Ceres area tomato and vegetable production requires <strong>USDA export certificates, pest-free certifications, and GAP compliance</strong> for international sales. We expedite certifications for time-sensitive perishable shipments.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Food Processing Regulations</h3>
              <p className="text-text-secondary leading-relaxed">
                Food manufacturers near Ceres must comply with <strong>FDA FSMA preventive controls, HACCP requirements, and sanitary transportation rules</strong>. We implement food safety programs and defend FDA enforcement actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Agricultural Export Services for Ceres
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Walnut & Almond Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Stanislaus County nut operations require <strong>USDA APHIS phytosanitary certificates, fumigation compliance, and aflatoxin testing</strong> for export to the EU, India, China, and other markets. We expedite certificate processing and ensure compliance with destination country phytosanitary requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>USDA Phytosanitary Certificates:</strong> APHIS export certification for walnuts and almonds</li>
                <li><strong>Fumigation Compliance:</strong> Methyl bromide regulations and alternatives</li>
                <li><strong>EU Aflatoxin Testing:</strong> Meet European Union maximum residue limits</li>
                <li><strong>India Import Permits:</strong> BIS registration and compliance for Indian market</li>
                <li><strong>China Phytosanitary Requirements:</strong> GACC facility registration and documentation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Fresh Produce Export Certifications</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Ceres area tomatoes, peppers, and other produce require <strong>USDA export certificates, pest-free certifications, and cold treatment documentation</strong> for international markets. We coordinate with USDA inspectors to expedite time-sensitive certifications.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA export certificates for fresh vegetables and fruits</li>
                <li>Pest-free certifications and phytosanitary compliance</li>
                <li>GAP (Good Agricultural Practices) compliance and audits</li>
                <li>Organic export certifications and equivalency arrangements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA FSMA Compliance for Food Processors</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Food processing facilities near Ceres must comply with <strong>FDA Food Safety Modernization Act (FSMA) preventive controls, hazard analysis, and recordkeeping requirements</strong>. We help you design compliant food safety plans and respond to FDA inspections.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Preventive Controls for Human Food (PCHF) rule compliance</li>
                <li>Hazard Analysis and Risk-Based Preventive Controls (HARPC)</li>
                <li>Foreign Supplier Verification Program (FSVP) for importers</li>
                <li>Sanitary Transportation Rule compliance for produce and processed foods</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Compliance for Agricultural Products</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Agricultural exports require accurate <strong>HTS classification, customs valuation, and country of origin documentation</strong>. We help you navigate customs regulations, leverage free trade agreements, and minimize duty costs for export shipments.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for nuts, produce, processed foods</li>
                <li>USMCA origin certifications for Mexico/Canada agricultural exports</li>
                <li>Free Trade Agreement (FTA) compliance for duty-free access</li>
                <li>Customs valuation strategies for agricultural commodities</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign Market Access & Regulatory Approvals</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Each export destination has unique import requirements. We help you navigate <strong>foreign regulatory approvals, facility registrations, and product certifications</strong> required to access key markets for Ceres area agricultural products.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>EU health certificate requirements for agricultural products</li>
                <li>China GACC facility registration for food exporters</li>
                <li>Japan food import notifications and compliance</li>
                <li>Mexico SENASICA phytosanitary requirements for produce</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USDA/FDA Enforcement Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If your shipment is detained by USDA or FDA, or you receive a compliance notice, immediate legal action is critical. We defend agricultural exporters in <strong>USDA APHIS detention cases, FDA warning letters, and food safety investigations</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA APHIS detention responses and appeals</li>
                <li>FDA warning letter responses for food facilities</li>
                <li>Agricultural export license suspension appeals</li>
                <li>Product recall management and regulatory notifications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Ceres Agricultural Businesses Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>California agricultural export compliance</strong>. We understand nut processing, produce packing, food manufacturing, and agricultural regulations. We work with farmers, processors, and exporters throughout Stanislaus County.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fast Turnaround for Time-Sensitive Shipments</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Agricultural products are <strong>time-sensitive</strong>. We respond to urgent export certificate needs within 24 hours. Whether it's produce needing USDA inspection or nuts requiring phytosanitary certification, we prioritize your deadlines.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">USDA & FDA Agency Relationships</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our attorneys have <strong>direct relationships with USDA APHIS, FSIS, and FDA field offices</strong>. We expedite certificate processing, resolve compliance issues, and negotiate with regulators to minimize disruptions to your export operations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost-Effective for Agricultural Operations</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>transparent flat-fee pricing</strong> for export certificates, compliance programs, and regulatory filings. No surprise bills. We understand agricultural economics and work within your operating budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Ceres Agricultural Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Walnuts & Almonds</h3>
              <p className="text-sm text-text-secondary">Phytosanitary certs, fumigation, export docs</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Fresh Produce</h3>
              <p className="text-sm text-text-secondary">Tomatoes, vegetables, fruit exports</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Food Processing</h3>
              <p className="text-sm text-text-secondary">FSMA compliance, food safety programs</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Dairy Products</h3>
              <p className="text-sm text-text-secondary">Milk, cheese, dairy ingredient exports</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Poultry Operations</h3>
              <p className="text-sm text-text-secondary">USDA FSIS compliance, export certificates</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Agricultural Logistics</h3>
              <p className="text-sm text-text-secondary">Cold storage, transportation, distribution</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Organic Agriculture</h3>
              <p className="text-sm text-text-secondary">USDA organic certification, export equivalency</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Agricultural Services</h3>
              <p className="text-sm text-text-secondary">Packing, sorting, quality control</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Ceres & Stanislaus County Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Ceres agricultural economy, transportation routes, and export infrastructure. We serve clients throughout Stanislaus County.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Transportation Routes */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Ceres Transportation & Export Routes</h3>
              <p className="text-text-secondary mb-4">Key corridors connecting Ceres to major export ports:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-99</span>
                  <span>Primary north-south corridor — connects Ceres to Port of Stockton (40 miles north) and Port of Oakland (90 miles)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-132</span>
                  <span>East-west connector to I-5 and Bay Area via Modesto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-5</span>
                  <span>Major freight corridor to LA/Long Beach port complex (via CA-132)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Hatch Road</span>
                  <span>Local agricultural route connecting farms to processing facilities</span>
                </li>
              </ul>
            </div>

            {/* Agricultural Areas */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Ceres Agricultural & Processing Zones</h3>
              <p className="text-text-secondary mb-4">Key agricultural production and processing districts:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Ceres Industrial Area</span>
                  <span>Food processing, cold storage, agricultural services along Service Road</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Modesto (adjacent)</span>
                  <span>Major food processing hub, nut hulling facilities, distribution centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Turlock (nearby)</span>
                  <span>Dairy processing, poultry operations, agricultural exports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Hughson (nearby)</span>
                  <span>Peach and fruit processing, agricultural packing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Export Infrastructure */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Infrastructure & Cold Storage</h3>
              <p className="text-text-secondary mb-4">Ceres area export and logistics facilities:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Cold Storage Network</span>
                  <span>Temperature-controlled warehousing for produce, nuts, processed foods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Rail Access</span>
                  <span>BNSF and Union Pacific rail service for bulk agricultural exports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">USDA Inspection Sites</span>
                  <span>USDA APHIS export certification, agricultural inspection services</span>
                </li>
              </ul>
              <p className="text-sm text-text-secondary mt-4 italic">
                Distance to Port of Stockton: ~40 miles (45 minutes). Distance to Port of Oakland: ~90 miles (1.5 hours).
              </p>
            </div>

            {/* Cities Served */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Stanislaus County Cities We Serve</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout Stanislaus County:</p>
              <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary">
                <span>Ceres</span>
                <span>Modesto</span>
                <span>Turlock</span>
                <span>Riverbank</span>
                <span>Hughson</span>
                <span>Newman</span>
                <span>Patterson</span>
                <span>Waterford</span>
                <span>Oakdale</span>
                <span>Denair</span>
                <span>Keyes</span>
                <span>Empire</span>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Trade Legal Services</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/practice-areas" className="service-link">
                      <span className="service-link__title">USDA/FDA Compliance</span>
                      <p className="service-link__description">Food safety & export regulations</p>
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
                    <Link to="/practice-areas" className="service-link">
                      <span className="service-link__title">Agricultural Export Compliance</span>
                      <p className="service-link__description">Phytosanitary & export certificates</p>
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
                    <Link to="/customs-defense-litigation" className="service-link">
                      <span className="service-link__title">Customs Defense</span>
                      <p className="service-link__description">USDA/CBP enforcement defense</p>
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

            {/* Industry Focus */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Central Valley Industry Focus</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/food-agriculture-trade-attorney" className="service-link">
                      <span className="service-link__title">Food & Agriculture</span>
                      <p className="service-link__description">Nuts, produce, dairy exports</p>
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
                    <Link to="/apparel-textiles-trade-attorney" className="service-link">
                      <span className="service-link__title">Food Processing</span>
                      <p className="service-link__description">Manufacturing & packaging</p>
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

            {/* Other Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other Central Valley Locations</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/turlock-trade-attorney" className="service-link">
                      <span className="service-link__title">Turlock</span>
                      <p className="service-link__description">Stanislaus County food exports</p>
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
                    <Link to="/contact" className="service-link">
                      <span className="service-link__title">Calabasas HQ Office</span>
                      <p className="service-link__description">27001 Agoura Road, Suite 350</p>
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

          {/* Helpful Guides */}
          <div className="bg-white p-8 rounded-lg shadow-md overflow-hidden">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful Guides for Agricultural Exporters</h3>
            <div className="grid md:grid-cols-5 gap-6">
              <Link to="/resources/uflpa-compliance-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">UFLPA Guide</h4>
                <p className="text-sm text-text-secondary">Supply chain compliance</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <a href="#article/phytosanitary-certificates" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Phytosanitary</h4>
                <p className="text-sm text-text-secondary">APHIS certifications</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#article/fsma-compliance" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">FSMA Guide</h4>
                <p className="text-sm text-text-secondary">Food safety compliance</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <Link to="/ecommerce-digital-trade-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Export Certs</h4>
                <p className="text-sm text-text-secondary">USDA export certificates</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <Link to="/trade-law-faq" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">FAQ Center</h4>
                <p className="text-sm text-text-secondary">Trade law FAQ</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Export Your Agricultural Products with Confidence
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let complex USDA/FDA regulations slow down your export operations. Contact our Ceres trade attorney team for expert agricultural export compliance guidance.
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

export default CeresTradeAttorneyPage;
