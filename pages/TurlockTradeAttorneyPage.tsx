
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const TurlockTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Turlock Trade Attorney | Stanislaus County Food Export Lawyer CA',
    description: 'Turlock trade attorney for food processing exports, dairy compliance, USDA regulations. Stanislaus County customs lawyer. (310) 744-1328.',
    canonical: 'turlock-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-turlock.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Turlock Trade Attorney - Stanislaus County Food Processing Export Compliance Lawyer',
        description: 'Serving Turlock and Stanislaus County with expert food processing export compliance, dairy regulations, USDA/FDA requirements, and customs legal services for Central Valley food manufacturers.',
        url: `${siteConfig.siteUrl}/turlock-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Local Offices', url: `${siteConfig.siteUrl}/local-offices` },
        { name: 'Turlock', url: `${siteConfig.siteUrl}/turlock-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Turlock Food Processing Export Trade Compliance Legal Services',
        description: 'Comprehensive food processing export compliance, dairy regulations, USDA/FDA compliance, and customs legal representation for Turlock and Stanislaus County food manufacturers, dairy processors, and agricultural exporters. Expert California food trade attorney services including FSMA compliance, dairy export certifications, meat processing regulations, and trade law for Central Valley food businesses.',
        serviceType: 'Food Processing Trade Law',
        url: `${siteConfig.siteUrl}/turlock-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="Turlock Trade Law Hero">
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
          <h1>Turlock Trade Attorney<br />Food Processing Export Compliance</h1>
          <p className="hero-subtitle">
            Expert trade law for Stanislaus County food manufacturers. USDA/FDA compliance, dairy exports, meat processing regulations, and customs guidance for Turlock's food industry.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Food Export Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Turlock Food Businesses Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Turlock's Food Processing Economy
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Stanislaus County produces over <strong>$6.8 billion in agricultural products annually</strong>, with Turlock as a major food processing hub. The region exports dairy products, poultry, almonds, walnuts, and processed foods worldwide. But food exports require strict compliance with <strong>USDA FSIS, FDA FSMA, and foreign food safety regulations</strong>. One violation can shut down your export operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Dairy Processing Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Turlock is home to major dairy processors. We help facilities comply with <strong>USDA Grade A Milk Ordinance, export certificate requirements, and foreign dairy import regulations</strong> for shipments to Asia, Mexico, and the Middle East.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Poultry & Meat Processing</h3>
              <p className="text-text-secondary leading-relaxed">
                With Foster Farms and other processors nearby, we provide <strong>USDA FSIS export compliance, meat establishment certifications, and country-specific health certificates</strong> for poultry and meat exports to Asia and Latin America.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">FSMA Compliance for Food Processors</h3>
              <p className="text-text-secondary leading-relaxed">
                Food manufacturing facilities must comply with <strong>FDA Food Safety Modernization Act (FSMA) preventive controls, foreign supplier verification, and sanitary transportation rules</strong>. We implement compliance programs and defend FDA enforcement actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Food Exporters */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Food Export Services for Turlock Manufacturers
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USDA FSIS Meat & Poultry Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Exporting meat and poultry from Turlock requires <strong>USDA FSIS establishment certification, export certificates, and destination country eligibility</strong>. We help processors obtain FSIS approval, maintain compliance, and secure export health certificates for international shipments.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>FSIS Establishment Certification:</strong> Meat/poultry plant approval for export</li>
                <li><strong>Export Certificates:</strong> Health certificates for meat and poultry shipments</li>
                <li><strong>Country Eligibility:</strong> Navigate FSIS export library requirements</li>
                <li><strong>Equivalence Agreements:</strong> Leverage U.S. bilateral agreements</li>
                <li><strong>HACCP & Sanitation Plans:</strong> Compliance program development</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA FSMA Compliance for Food Manufacturers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Food processors in Turlock must comply with <strong>FDA Food Safety Modernization Act (FSMA) preventive controls, hazard analysis, and recordkeeping requirements</strong>. We help you design compliant food safety plans and respond to FDA inspections.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Preventive Controls for Human Food (PCHF) rule compliance</li>
                <li>Hazard Analysis and Risk-Based Preventive Controls (HARPC)</li>
                <li>Foreign Supplier Verification Program (FSVP) for importers</li>
                <li>Sanitary Transportation Rule compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Dairy Export Regulations & Certification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Turlock dairy processors export milk powder, cheese, whey, and butter globally. We navigate <strong>USDA dairy export certificates, Grade A certification, and foreign import permit applications</strong> for major markets including China, Mexico, Southeast Asia, and the Middle East.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA export certificates for dairy products</li>
                <li>China GACC dairy facility registration and compliance</li>
                <li>Mexico SENASICA dairy import permits</li>
                <li>EU dairy health certificate requirements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Nut Processing & Phytosanitary Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Stanislaus County grows almonds and walnuts processed in Turlock facilities. We help nut processors obtain <strong>USDA phytosanitary certificates, fumigation compliance, and export documentation</strong> for shipments to Europe, India, China, and other markets.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA APHIS phytosanitary certificate applications</li>
                <li>Methyl bromide fumigation alternatives and compliance</li>
                <li>EU aflatoxin testing requirements for almonds</li>
                <li>India BIS registration for nut exporters</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Compliance for Food Products</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Food exports require accurate <strong>HTS classification, customs valuation, country of origin marking, and trade agreement compliance</strong>. We ensure your products clear customs efficiently and help you leverage USMCA and other FTAs for duty savings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for dairy, meat, poultry, processed foods</li>
                <li>USMCA origin certifications for Mexico/Canada food exports</li>
                <li>Country of origin marking for packaged foods</li>
                <li>Section 301 tariff mitigation strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA/USDA Enforcement Defense & Recalls</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If your facility faces an <strong>FDA warning letter, USDA FSIS enforcement action, or product recall</strong>, immediate legal representation is critical. We defend food manufacturers in regulatory investigations, negotiate consent decrees, and manage recall strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA warning letter responses and corrective action plans</li>
                <li>USDA FSIS Notice of Intended Enforcement (NOIE) defense</li>
                <li>Product recall management and FDA notification</li>
                <li>Food safety investigation defense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Turlock Food Exporters Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Turlock Food Manufacturers Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Food Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>food manufacturing and agricultural export compliance</strong>. We understand HACCP, HARPC, dairy processing, meat inspection, and food safety regulations. We speak the language of food safety professionals and quality assurance managers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">USDA/FDA Agency Relationships</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our attorneys work directly with <strong>USDA FSIS, FDA field offices, and APHIS export services</strong>. We expedite export certificate processing, resolve compliance disputes, and negotiate with regulators to keep your operations running smoothly.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response for Export Deadlines</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Food shipments are <strong>time-sensitive</strong>. We respond to urgent export certificate needs, FDA detention notices, and USDA compliance issues within 24 hours. We understand that delays mean spoiled products and lost revenue.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost-Effective for Processors</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee packages</strong> for export compliance programs, certificate applications, and regulatory filings. Transparent pricing designed for food manufacturers operating on tight margins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Turlock Food Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Dairy Processing</h3>
              <p className="text-sm text-text-secondary">Milk powder, cheese, whey, butter exports</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Poultry & Meat</h3>
              <p className="text-sm text-text-secondary">USDA FSIS compliance, export certificates</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Nut Processing</h3>
              <p className="text-sm text-text-secondary">Almonds, walnuts, phytosanitary certs</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Canned & Preserved Foods</h3>
              <p className="text-sm text-text-secondary">Tomatoes, fruits, vegetables</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Frozen Foods</h3>
              <p className="text-sm text-text-secondary">Frozen vegetables, fruits, meals</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Bakery & Grain Products</h3>
              <p className="text-sm text-text-secondary">Bread, pasta, cereal exports</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Beverage Manufacturing</h3>
              <p className="text-sm text-text-secondary">Juice, wine, specialty beverages</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Specialty Foods</h3>
              <p className="text-sm text-text-secondary">Organic, kosher, halal certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Turlock & Stanislaus County Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Turlock's food processing infrastructure, transportation routes, and regulatory environment. We serve clients throughout Stanislaus County.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Transportation Routes */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Turlock Transportation & Export Routes</h3>
              <p className="text-text-secondary mb-4">Key corridors connecting Turlock to major export ports:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-99</span>
                  <span>Primary north-south corridor — connects Turlock to Port of Stockton (45 miles north) and Port of Oakland (90 miles)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-5</span>
                  <span>Major freight corridor to LA/Long Beach port complex (4.5 hours south)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-132</span>
                  <span>East-west connector to I-5 and Modesto industrial areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-165</span>
                  <span>South connector to agricultural areas and Los Banos</span>
                </li>
              </ul>
            </div>

            {/* Industrial Areas */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Turlock Food Processing & Industrial Zones</h3>
              <p className="text-text-secondary mb-4">Major food manufacturing and distribution districts:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">North Turlock Industrial</span>
                  <span>Food processing facilities, cold storage warehouses along Lander Avenue</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Turlock Business Park</span>
                  <span>Light manufacturing, food packaging, distribution centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Hilmar (nearby)</span>
                  <span>Hilmar Cheese Company — major dairy processing facility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Livingston (nearby)</span>
                  <span>Foster Farms poultry processing, cold storage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Modesto (nearby)</span>
                  <span>Additional food processing, nut hulling facilities</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Export Infrastructure */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Infrastructure & Cold Chain</h3>
              <p className="text-text-secondary mb-4">Turlock area export and logistics facilities:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Cold Storage Network</span>
                  <span>Temperature-controlled facilities for dairy, poultry, frozen foods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Rail Access</span>
                  <span>BNSF Railway service for bulk agricultural and food exports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Port of Stockton</span>
                  <span>45 miles north — bulk agricultural exports, container service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">USDA Inspection Sites</span>
                  <span>USDA FSIS inspection, APHIS export certification offices</span>
                </li>
              </ul>
              <p className="text-sm text-text-secondary mt-4 italic">
                Distance to Port of Oakland: ~90 miles (1.5 hours). We coordinate with customs brokers for seamless clearances.
              </p>
            </div>

            {/* Cities Served */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Stanislaus County Cities We Serve</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout Stanislaus County:</p>
              <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary">
                <span>Turlock</span>
                <span>Modesto</span>
                <span>Ceres</span>
                <span>Riverbank</span>
                <span>Hughson</span>
                <span>Newman</span>
                <span>Patterson</span>
                <span>Waterford</span>
                <span>Oakdale</span>
                <span>Denair</span>
                <span>Hilmar</span>
                <span>Keyes</span>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Food Trade Legal Services</h3>
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
                      <span className="service-link__title">Food Export Compliance</span>
                      <p className="service-link__description">FSIS/FSMA regulations</p>
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
                      <span className="service-link__title">FDA/USDA Defense</span>
                      <p className="service-link__description">Warning letters & enforcement</p>
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
                      <p className="service-link__description">Dairy, poultry, nuts exports</p>
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
                      <span className="service-link__title">Cold Chain Logistics</span>
                      <p className="service-link__description">Temperature-controlled exports</p>
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
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful Guides for Food Exporters</h3>
            <div className="grid md:grid-cols-5 gap-6">
              <Link to="/resources/uflpa-compliance-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">FSMA Guide</h4>
                <p className="text-sm text-text-secondary">Food safety compliance</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <a href="#article/usda-fsis-exports" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">FSIS Exports</h4>
                <p className="text-sm text-text-secondary">Meat & poultry compliance</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#article/dairy-export-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Dairy Exports</h4>
                <p className="text-sm text-text-secondary">Dairy compliance guide</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <Link to="/ecommerce-digital-trade-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">HACCP</h4>
                <p className="text-sm text-text-secondary">Food safety plans</p>
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
            Export Food Products with Confidence
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let USDA/FDA compliance slow down your export operations. Contact our Turlock trade attorney team for expert food processing export guidance.
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

export default TurlockTradeAttorneyPage;
