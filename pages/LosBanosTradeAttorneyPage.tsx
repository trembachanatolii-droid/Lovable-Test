
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const LosBanosTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Los Banos Trade Attorney | Merced County Agricultural Export Lawyer CA',
    description: 'Los Banos trade attorney for almond exports, agricultural compliance, USDA regulations. Merced County customs lawyer. (310) 744-1328.',
    canonical: 'los-banos-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-los-banos.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Los Banos Trade Attorney - Merced County Agricultural Export Compliance Lawyer',
        description: 'Serving Los Banos and Western Merced County with expert agricultural export compliance, almond export regulations, USDA/FDA requirements, and customs legal services for Central Valley farmers and food processors.',
        url: `${siteConfig.siteUrl}/los-banos-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Local Offices', url: `${siteConfig.siteUrl}/local-offices` },
        { name: 'Los Banos', url: `${siteConfig.siteUrl}/los-banos-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Los Banos Agricultural Export Trade Compliance Legal Services',
        description: 'Comprehensive agricultural export compliance, almond export regulations, USDA/FDA compliance, and customs legal representation for Los Banos and Western Merced County farmers, almond processors, and agricultural exporters. Expert California agriculture trade attorney services including phytosanitary certifications, cold storage compliance, and trade law for Central Valley agricultural businesses.',
        serviceType: 'Agricultural Trade Law',
        url: `${siteConfig.siteUrl}/los-banos-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="Los Banos Trade Law Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Los Banos Trade Attorney<br />Agricultural Export Compliance</h1>
          <p className="hero-subtitle">
            Expert trade law for Western Merced County agriculture. Almond exports, phytosanitary compliance, USDA regulations, and customs guidance for Los Banos farmers and processors.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Agricultural Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Los Banos Agricultural Businesses Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Los Banos Agricultural Economy
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Los Banos sits in the heart of <strong>California's most productive agricultural region</strong>, with extensive almond orchards, vegetable farms, and cattle operations. The city serves as a distribution hub for agricultural exports heading to West Coast ports. But exporting agricultural products requires navigating <strong>USDA phytosanitary certificates, food safety regulations, and foreign market access requirements</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Almond Export Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Los Banos area produces significant almond crops. We help almond processors obtain <strong>USDA phytosanitary certificates, fumigation compliance, and export documentation</strong> for shipments to Europe, India, China, and other global markets with strict import requirements.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fresh Produce Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Tomatoes, peppers, melons, and other produce grown near Los Banos require <strong>USDA export certificates, cold treatment certifications, and GAP (Good Agricultural Practices) compliance</strong> for international shipments. We expedite certifications for perishable exports.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Livestock & Beef Export Regulations</h3>
              <p className="text-text-secondary leading-relaxed">
                Los Banos area cattle operations export beef to Asian and Middle Eastern markets. We navigate <strong>USDA FSIS export requirements, veterinary health certificates, and foreign import permits</strong> for meat and live animal exports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Agricultural Export Services for Los Banos
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Almond & Tree Nut Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Los Banos area almond operations require <strong>USDA APHIS phytosanitary certificates, methyl bromide fumigation compliance, and aflatoxin testing</strong> for export to the EU, India, and other markets. We expedite certificate processing and ensure compliance with destination country requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>USDA Phytosanitary Certificates:</strong> APHIS export certification for almonds</li>
                <li><strong>Fumigation Compliance:</strong> Methyl bromide alternatives and regulations</li>
                <li><strong>EU Aflatoxin Testing:</strong> Meet EU maximum residue limits</li>
                <li><strong>India Import Permits:</strong> BIS registration and compliance</li>
                <li><strong>China Phytosanitary Requirements:</strong> GACC facility registration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Fresh Produce Export Certifications</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Los Banos fresh produce requires <strong>USDA export certificates, pest-free certifications, and cold treatment documentation</strong> for international markets. We coordinate with USDA inspectors and expedite time-sensitive certifications for perishable shipments.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA export certificates for fresh vegetables and fruits</li>
                <li>Cold treatment certifications for pest control</li>
                <li>GAP (Good Agricultural Practices) compliance and audits</li>
                <li>Organic export certifications and equivalency arrangements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Livestock & Meat Export Regulations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Cattle operations near Los Banos export beef and live animals to Asia and the Middle East. We help ranchers and meat processors navigate <strong>USDA FSIS export requirements, veterinary health certificates, and traceability requirements</strong> for international shipments.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA FSIS export certificates for beef and meat products</li>
                <li>Veterinary health certificates for live animal exports</li>
                <li>Traceability and identification compliance (NAIS)</li>
                <li>Halal and kosher certification for religious markets</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Compliance for Agricultural Products</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Agricultural exports require accurate <strong>HTS classification, customs valuation, and country of origin documentation</strong>. We help you navigate customs regulations, leverage free trade agreements, and minimize duty costs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for almonds, produce, meat, processed foods</li>
                <li>USMCA origin certifications for Mexico/Canada agricultural exports</li>
                <li>Free Trade Agreement (FTA) compliance for duty savings</li>
                <li>Customs valuation strategies for agricultural commodities</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Cold Storage & Transportation Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Los Banos serves as a cold storage and distribution hub for Central Valley produce. We help cold storage operators and transportation companies comply with <strong>FDA Sanitary Transportation Rule, temperature monitoring requirements, and export documentation</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA Sanitary Transportation Rule compliance for produce</li>
                <li>Temperature monitoring and documentation requirements</li>
                <li>Cold chain validation for export shipments</li>
                <li>Third-party logistics (3PL) compliance audits</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USDA/FDA Enforcement Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If your shipment is detained by USDA or FDA, or you receive a compliance notice, immediate legal action is critical. We defend agricultural exporters in <strong>USDA APHIS detention cases, FDA import alerts, and food safety investigations</strong>.
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

      {/* Why Los Banos Exporters Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Los Banos Agricultural Businesses Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>California agricultural export compliance</strong>. We understand almond processing, produce cold chains, livestock operations, and food safety regulations. We work with farmers, processors, packers, and exporters daily.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fast Turnaround for Perishables</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Agricultural products are <strong>time-sensitive</strong>. We respond to urgent export certificate needs within 24 hours. Whether it's produce waiting for USDA inspection or almonds needing phytosanitary certification, we prioritize your deadlines.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">USDA & FDA Relationships</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our attorneys have <strong>direct relationships with USDA APHIS, FSIS, and FDA field offices</strong>. We expedite certificate processing, resolve compliance issues, and negotiate with regulators to minimize disruptions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost-Effective for Growers</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>transparent flat-fee pricing</strong> for export certificates, compliance programs, and regulatory filings. No surprise bills. We understand agricultural economics and work within your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Los Banos Agricultural Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Almonds & Tree Nuts</h3>
              <p className="text-sm text-text-secondary">Phytosanitary certs, fumigation, export docs</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Fresh Produce</h3>
              <p className="text-sm text-text-secondary">Tomatoes, peppers, melons, vegetables</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Beef & Livestock</h3>
              <p className="text-sm text-text-secondary">Cattle operations, meat processing exports</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Dairy Products</h3>
              <p className="text-sm text-text-secondary">Milk, cheese, dairy ingredient exports</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Cold Storage Operations</h3>
              <p className="text-sm text-text-secondary">Temperature-controlled warehousing</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Food Processing</h3>
              <p className="text-sm text-text-secondary">Packing, processing, distribution</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Organic Agriculture</h3>
              <p className="text-sm text-text-secondary">USDA organic certification, export equivalency</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Agricultural Logistics</h3>
              <p className="text-sm text-text-secondary">Transportation, freight forwarding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Los Banos & Western Merced County Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Los Banos agricultural economy, transportation routes, and export infrastructure. We serve clients throughout Western Merced County.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Transportation Routes */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Los Banos Transportation & Export Routes</h3>
              <p className="text-text-secondary mb-4">Key corridors connecting Los Banos to major export ports:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-5</span>
                  <span>Primary north-south corridor — direct access to Port of Oakland (100 miles north) and LA/Long Beach ports (200 miles south)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-152</span>
                  <span>East-west connector to US-101 and Bay Area markets via Gilroy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-33</span>
                  <span>North-south agricultural route connecting to CA-99 corridor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-165</span>
                  <span>North connector to Turlock and Stanislaus County processing facilities</span>
                </li>
              </ul>
            </div>

            {/* Agricultural Areas */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Los Banos Agricultural & Processing Zones</h3>
              <p className="text-text-secondary mb-4">Key agricultural production and processing districts:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Los Banos Industrial Park</span>
                  <span>Cold storage facilities, food processing, distribution centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Westside Agricultural Corridor</span>
                  <span>Almond orchards, cattle ranches, vegetable farms along I-5</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Santa Nella</span>
                  <span>Truck stops, agricultural logistics, distribution staging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Dos Palos (nearby)</span>
                  <span>Almond processing, agricultural services</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Export Infrastructure */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Infrastructure & Cold Storage</h3>
              <p className="text-text-secondary mb-4">Los Banos area export and logistics facilities:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Cold Storage Network</span>
                  <span>Temperature-controlled warehousing for produce, nuts, processed foods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-5 Freight Corridor</span>
                  <span>Major agricultural freight route to Northern and Southern California ports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">USDA Inspection Sites</span>
                  <span>USDA APHIS export certification, agricultural inspection stations</span>
                </li>
              </ul>
              <p className="text-sm text-text-secondary mt-4 italic">
                Distance to Port of Oakland: ~100 miles (1.5-2 hours). Distance to LA/Long Beach: ~200 miles (3-4 hours).
              </p>
            </div>

            {/* Cities Served */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Western Merced County Cities We Serve</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout Western Merced County:</p>
              <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary">
                <span>Los Banos</span>
                <span>Dos Palos</span>
                <span>Gustine</span>
                <span>Santa Nella</span>
                <span>Volta</span>
                <span>South Dos Palos</span>
                <span>Merced (east)</span>
                <span>Atwater (east)</span>
                <span>Livingston (east)</span>
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
                      <p className="service-link__description">Almonds, produce, livestock exports</p>
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
                      <span className="service-link__title">Cold Chain Logistics</span>
                      <p className="service-link__description">Temperature-controlled storage</p>
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
                    <Link to="/merced-trade-attorney" className="service-link">
                      <span className="service-link__title">Merced</span>
                      <p className="service-link__description">Merced County ag exports</p>
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
              <a href="#article/almond-export-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Almond Exports</h4>
                <p className="text-sm text-text-secondary">Almond compliance guide</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <Link to="/ecommerce-digital-trade-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Cold Chain</h4>
                <p className="text-sm text-text-secondary">Temperature compliance</p>
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
            Don't let complex USDA regulations slow down your export operations. Contact our Los Banos trade attorney team for expert agricultural export compliance guidance.
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

export default LosBanosTradeAttorneyPage;
