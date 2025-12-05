
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const MercedTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Merced Trade Attorney | Central Valley Agriculture Export Lawyer CA',
    description: 'Merced trade attorney for agricultural exports, food safety compliance, USDA regulations. Central Valley customs lawyer. (310) 744-1328.',
    canonical: 'merced-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-merced.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Merced Trade Attorney - Central Valley Agricultural Export Compliance Lawyer',
        description: 'Serving Merced County with expert agricultural export compliance, food safety regulations, USDA/FDA requirements, and customs legal services for Central Valley farmers and food processors.',
        url: `${siteConfig.siteUrl}/merced-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Local Offices', url: `${siteConfig.siteUrl}/local-offices` },
        { name: 'Merced', url: `${siteConfig.siteUrl}/merced-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Merced Agricultural Export Trade Compliance Legal Services',
        description: 'Comprehensive agricultural export compliance, food safety regulations, USDA/FDA compliance, and customs legal representation for Merced County farmers, food processors, and agricultural exporters. Expert California agriculture trade attorney services including dairy export regulations, almond export compliance, produce export certifications, and trade law for Central Valley agricultural businesses.',
        serviceType: 'Agricultural Trade Law',
        url: `${siteConfig.siteUrl}/merced-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="Merced Trade Law Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Merced Trade Attorney<br />Agricultural Export Compliance</h1>
          <p className="hero-subtitle">
            Expert trade law for Central Valley agriculture. USDA/FDA compliance, dairy exports, almond shipments, and customs regulations for Merced County farmers and food processors.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Agricultural Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Merced Agricultural Businesses Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Central Valley's Agricultural Economy
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Merced County produces over <strong>$3.7 billion in agricultural products annually</strong>, including dairy, almonds, chickens, tomatoes, and sweet potatoes. But exporting agricultural products requires navigating <strong>complex USDA/FDA regulations, phytosanitary certificates, and foreign market access requirements</strong>. One compliance error can result in rejected shipments, border delays, and lost revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Dairy Export Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Merced County is California's #2 dairy-producing county. We help dairy processors export milk powder, cheese, and butter to Asia, Mexico, and the Middle East—navigating <strong>USDA FSIS requirements, dairy export certificates, and foreign import regulations</strong>.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Almond & Nut Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Merced grows over 90,000 acres of almonds. We provide <strong>phytosanitary certification support, fumigation compliance, and almond export documentation</strong> for shipments to Europe, Asia, and India, ensuring compliance with foreign phytosanitary requirements.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Produce Export Certifications</h3>
              <p className="text-text-secondary leading-relaxed">
                Sweet potatoes, tomatoes, and fresh produce require <strong>USDA export certificates, cold treatment certifications, and country-specific import permits</strong>. We expedite certifications and resolve USDA/APHIS compliance issues for time-sensitive perishable shipments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Agricultural Exporters */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Agricultural Export Services for Merced County
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USDA/FDA Export Compliance for Food Products</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Exporting food products from Merced requires compliance with <strong>USDA Food Safety and Inspection Service (FSIS), FDA Food Safety Modernization Act (FSMA), and foreign regulatory requirements</strong>. We help you obtain export certificates, register facilities, and ensure your products meet destination country standards.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>USDA Export Certificates:</strong> Dairy, meat, poultry export documentation</li>
                <li><strong>FDA Prior Notice:</strong> FSMA compliance for food exports</li>
                <li><strong>Phytosanitary Certificates:</strong> USDA APHIS certifications for almonds, produce</li>
                <li><strong>Foreign Market Access:</strong> Navigate EU, China, Japan regulatory requirements</li>
                <li><strong>HACCP & Food Safety Plans:</strong> Compliance programs for food processors</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Dairy Export Regulations & Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Merced's dairy industry ships milk powder, cheese, whey, and butter worldwide. We navigate <strong>USDA dairy export certificates, destination country dairy import permits, and sanitary requirements</strong> for major markets including Mexico, Southeast Asia, China, and the Middle East.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA dairy export certificate applications and expedited processing</li>
                <li>Foreign dairy import permit applications (China GACC, Mexico SENASICA)</li>
                <li>Dairy plant facility registration and compliance audits</li>
                <li>Lactose and whey export documentation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Almond & Tree Nut Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                California almonds account for 80% of global supply. We help Merced almond growers and processors comply with <strong>phytosanitary requirements, fumigation regulations, and aflatoxin testing standards</strong> for export to the EU, India, China, and other major markets.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA phytosanitary certificate applications for almond exports</li>
                <li>Methyl bromide fumigation compliance and alternatives</li>
                <li>EU aflatoxin testing and certification requirements</li>
                <li>India import permit applications and BIS registration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Compliance for Agricultural Products</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Agricultural exports require accurate <strong>HTS classification, customs valuation, and country of origin documentation</strong>. We ensure your shipments clear customs smoothly and help you leverage free trade agreements for duty savings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for dairy products, nuts, produce, processed foods</li>
                <li>USMCA origin certifications for Mexico/Canada agricultural exports</li>
                <li>Free Trade Agreement (FTA) compliance for duty-free access</li>
                <li>Customs valuation strategies for agricultural commodities</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign Market Access & Regulatory Approvals</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Each export destination has unique import requirements. We help you navigate <strong>foreign regulatory approvals, facility registrations, and product certifications</strong> required to access key markets for Merced agricultural products.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>China GACC facility registration for dairy and nut exporters</li>
                <li>EU health certificate requirements for dairy products</li>
                <li>Japan food import notifications and compliance</li>
                <li>Mexico SENASICA phytosanitary requirements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USDA/FDA Defense & Enforcement Matters</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If your shipment is detained by USDA APHIS or FDA, or you receive a warning letter for food safety violations, immediate legal action is critical. We defend agricultural exporters in <strong>USDA enforcement actions, FDA import alerts, and food safety investigations</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA APHIS detention and refusal responses</li>
                <li>FDA warning letter responses and corrective action plans</li>
                <li>Food safety investigation defense</li>
                <li>Agricultural export license suspension appeals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Merced Agricultural Exporters Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Merced Agricultural Businesses Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>agricultural export compliance for California's Central Valley</strong>. We understand dairy processing, almond handling, produce cold chains, and food safety regulations. We speak the language of farmers, processors, and exporters.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fast Turnaround for Perishables</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Agricultural products are <strong>time-sensitive</strong>. We respond to urgent export certificate needs within 24 hours. Whether it's a dairy shipment waiting for USDA approval or a produce load needing phytosanitary certification, we prioritize your deadlines.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">USDA & FDA Relationships</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our attorneys have <strong>direct relationships with USDA FSIS, APHIS, and FDA field offices</strong>. We expedite certificate processing, resolve compliance issues, and negotiate with regulators on your behalf to minimize disruptions to your export operations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost-Effective for Farm Operations</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>transparent flat-fee pricing</strong> for export certificate assistance, compliance audits, and regulatory filings. No surprise bills. We understand agricultural economics and work within your operating budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Merced Agricultural Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Dairy Products</h3>
              <p className="text-sm text-text-secondary">Milk powder, cheese, butter, whey exports</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Almonds & Tree Nuts</h3>
              <p className="text-sm text-text-secondary">Phytosanitary compliance, fumigation, export docs</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Poultry & Eggs</h3>
              <p className="text-sm text-text-secondary">USDA FSIS certification, export permits</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Fresh Produce</h3>
              <p className="text-sm text-text-secondary">Sweet potatoes, tomatoes, vegetables</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Processed Foods</h3>
              <p className="text-sm text-text-secondary">FSMA compliance, FDA export regulations</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Animal Feed</h3>
              <p className="text-sm text-text-secondary">Alfalfa hay, feed grain export compliance</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Wine & Beverages</h3>
              <p className="text-sm text-text-secondary">TTB export compliance, label approvals</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Organic Products</h3>
              <p className="text-sm text-text-secondary">USDA organic certification, export equivalency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Merced County Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Merced's agricultural economy, transportation routes, and food processing infrastructure. We serve clients throughout Merced County.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Transportation Routes */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Merced Agricultural Transportation Routes</h3>
              <p className="text-text-secondary mb-4">Key highway corridors connecting Merced farms to export markets:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-99</span>
                  <span>Primary north-south corridor connecting Merced to Ports of Oakland and Stockton, I-5 access to LA/Long Beach ports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-140</span>
                  <span>East-west route connecting Merced to Mariposa, Yosemite gateway</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-5</span>
                  <span>Major agricultural freight corridor — direct access to LA/Long Beach port complex (4 hours south)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-152</span>
                  <span>Connects Central Valley to San Jose and Bay Area markets</span>
                </li>
              </ul>
            </div>

            {/* Agricultural Areas */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Merced Agricultural & Processing Zones</h3>
              <p className="text-text-secondary mb-4">Key agricultural production and food processing districts:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Delhi</span>
                  <span>Major dairy processing center, concentrated feeding operations (CFOs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Hilmar</span>
                  <span>Hilmar Cheese Company — one of world's largest cheese processors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Los Banos</span>
                  <span>Almond processing facilities, cold storage, distribution centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Livingston</span>
                  <span>Foster Farms poultry processing, sweet potato packing facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Atwater</span>
                  <span>Castle Air Force Base logistics hub, cold chain facilities</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Export Infrastructure */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Infrastructure & Cold Storage</h3>
              <p className="text-text-secondary mb-4">Merced County export and logistics facilities:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Merced Regional Airport</span>
                  <span>Air cargo potential for high-value perishables, proximity to Castle Commerce Center</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Cold Storage Facilities</span>
                  <span>Temperature-controlled warehouses for dairy, produce, frozen foods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Rail Access</span>
                  <span>BNSF and Union Pacific rail service for bulk agricultural exports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">USDA Inspection Sites</span>
                  <span>USDA FSIS poultry inspection, APHIS export certification offices</span>
                </li>
              </ul>
              <p className="text-sm text-text-secondary mt-4 italic">
                Distance to Port of Oakland: ~100 miles (2 hours). We coordinate with customs brokers for seamless port clearances.
              </p>
            </div>

            {/* Cities Served */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Merced County Cities We Serve</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout Merced County:</p>
              <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary">
                <span>Merced</span>
                <span>Atwater</span>
                <span>Livingston</span>
                <span>Los Banos</span>
                <span>Dos Palos</span>
                <span>Gustine</span>
                <span>Delhi</span>
                <span>Winton</span>
                <span>Planada</span>
                <span>Le Grand</span>
                <span>Snelling</span>
                <span>Hilmar</span>
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
                      <span className="service-link__title">Customs Defense & Litigation</span>
                      <p className="service-link__description">USDA/CBP enforcement defense</p>
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
                      <span className="service-link__title">All Practice Areas</span>
                      <p className="service-link__description">Full range of trade law services</p>
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
                      <p className="service-link__description">Dairy, nuts, produce exports</p>
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
                      <span className="service-link__title">Manufacturing</span>
                      <p className="service-link__description">Food processing & packaging</p>
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
                    <Link to="/technology-electronics-trade-attorney" className="service-link">
                      <span className="service-link__title">Logistics & Distribution</span>
                      <p className="service-link__description">Cold chain & warehousing</p>
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
                      <p className="service-link__description">Stanislaus County ag exports</p>
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
              <a href="#article/usda-export-certificates" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">USDA Exports</h4>
                <p className="text-sm text-text-secondary">Export certificate guide</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#article/dairy-export-compliance" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Dairy Exports</h4>
                <p className="text-sm text-text-secondary">Dairy export regulations</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <Link to="/ecommerce-digital-trade-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Phytosanitary</h4>
                <p className="text-sm text-text-secondary">APHIS certificates</p>
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
            Don't let complex USDA/FDA regulations slow down your export operations. Contact our Merced trade attorney team for expert agricultural export compliance guidance.
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

export default MercedTradeAttorneyPage;
