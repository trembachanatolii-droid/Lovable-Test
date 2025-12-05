
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const WhittierTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Whittier Trade Attorney | CA Import Export Compliance',
    description: 'Whittier California trade compliance attorney. Customs law, HTS classification, tariff strategies for LA County manufacturers & importers. (310) 744-1328.',
    canonical: 'whittier-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-whittier.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Whittier Trade Attorney - California Import Export Compliance Lawyer',
        description: 'Serving Whittier and Los Angeles County with expert trade compliance, customs law, and import/export legal services for manufacturers and distributors.',
        url: `${siteConfig.siteUrl}/whittier-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Locations', url: `${siteConfig.siteUrl}/california-locations` },
        { name: 'Whittier', url: `${siteConfig.siteUrl}/whittier-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Whittier Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance, customs law, and import/export legal representation for Whittier manufacturers and distributors. Expert Whittier trade attorney services including HTS classification, customs valuation, Section 301 tariff mitigation, USMCA certifications, and CBP audit defense for Los Angeles County businesses.',
        serviceType: 'Trade Compliance Law',
        url: `${siteConfig.siteUrl}/whittier-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="Whittier Trade Law Hero">
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
          <h1>Whittier Trade Attorney<br />Import Export Compliance</h1>
          <p className="hero-subtitle">
            Expert customs law for Los Angeles County businesses. HTS classification, tariff strategies, and compliance for manufacturers and distributors.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Whittier's Industrial Economy
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Whittier's <strong>strategic location near LA/Long Beach ports and I-605/I-5 corridors</strong> makes it a key logistics and distribution hub for Southern California. Companies here face complex <strong>customs regulations, tariff classifications, and compliance requirements</strong> for international trade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing & Distribution Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                As your Whittier trade attorney, we provide <strong>specialized counsel for manufacturers, importers, and distributors</strong>, from HTS classification and customs valuation to Section 301 tariff mitigation and duty drawback.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">LA County Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                We understand <strong>Los Angeles County's trade ecosystem</strong>—from Whittier to Pico Rivera, Commerce to Norwalk. Our practice serves the region's industrial corridor with targeted customs and export compliance solutions.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Access & Logistics</h3>
              <p className="text-text-secondary leading-relaxed">
                Whittier companies use <strong>Ports of Los Angeles and Long Beach</strong> for ocean freight. We handle customs clearances, CBP examinations, and trade compliance at both port complexes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance for Whittier Businesses
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Compliance & Import Operations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper customs compliance protects against <strong>penalties, detention, and supply chain disruptions</strong>. We implement import compliance programs, conduct internal audits, and train your teams on CBP regulations, HTS classification, and valuation requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Import compliance program design and implementation</li>
                <li>Internal customs audits and risk assessments</li>
                <li>Customs broker oversight and compliance training</li>
                <li>Importer Self-Assessment (ISA) program enrollment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">HTS Classification & Tariff Engineering</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                HTS classification determines your <strong>duty rate, trade agreement eligibility, and Section 301 tariff exposure</strong>. Misclassification can cost thousands in penalties and back duties. We classify products, file binding rulings, and engineer tariff-optimized supply chains.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for diverse product categories</li>
                <li>CBP binding ruling requests for classification certainty</li>
                <li>Tariff engineering to minimize duty costs</li>
                <li>Section 301 exclusion strategies and supply chain restructuring</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariffs on Chinese imports can add <strong>7.5% to 25% to your landed costs</strong>. We implement mitigation strategies including HTS reclassification, supply chain restructuring, first-sale transactions, and exclusion requests.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 tariff analysis and exposure assessment</li>
                <li>Product exclusion requests (when windows reopen)</li>
                <li>Supply chain restructuring to source outside China</li>
                <li>First Sale for Export to reduce transaction value</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Duty Drawback & Refund Programs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you import products and later <strong>export them or destroy them</strong>, you may be eligible for duty drawback—a refund of up to 99% of duties paid. We file drawback claims, implement automated programs, and maximize your refunds.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Manufacturing drawback for imported components in exported products</li>
                <li>Unused merchandise drawback for direct exports</li>
                <li>Rejected merchandise drawback for defective goods</li>
                <li>Automated drawback program implementation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA Certifications & Country of Origin</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you import from <strong>Mexico or Canada</strong>, USMCA offers duty-free treatment—but only if you meet origin rules and have proper certifications. We prepare USMCA certifications, conduct origin analyses, and ensure compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA origin analysis and qualification assessments</li>
                <li>USMCA certification preparation for importers and exporters</li>
                <li>Regional Value Content (RVC) calculations</li>
                <li>Country of origin determinations for marking and preference programs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If CBP audits your company or issues a <strong>penalty notice</strong>, immediate legal representation is critical. We defend clients in CBP Focused Assessments, negotiate penalty settlements, and file Prior Disclosures to minimize exposure.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP Focused Assessment (FA) audit representation</li>
                <li>Customs penalty mitigation and settlement negotiations</li>
                <li>Prior Disclosure filings for self-detected violations</li>
                <li>Customs detention and seizure defense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Whittier Businesses Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Import/Export Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Whittier trade attorney, we understand <strong>supply chain management, contract manufacturing, and cross-border logistics</strong>. We customize compliance strategies to your operations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost Savings Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We identify <strong>duty savings opportunities</strong> through tariff engineering, First Sale for Export, USMCA, duty drawback, and other strategies. Our clients save millions annually.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                When CBP detains your shipment or launches an audit, <strong>every hour matters</strong>. We respond to CBP holds within 24 hours and prioritize urgent compliance issues.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee packages</strong> for HTS classifications, compliance programs, and audit defense. No surprise bills. Clear engagement terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Whittier Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Consumer Goods</h3>
              <p className="text-sm text-text-secondary">HTS classification, Section 301 mitigation, product safety</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Automotive Parts</h3>
              <p className="text-sm text-text-secondary">USMCA certifications, HTS classification, duty drawback</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Electronics & Components</h3>
              <p className="text-sm text-text-secondary">Section 301 tariffs, HTS classification, customs valuation</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Apparel & Textiles</h3>
              <p className="text-sm text-text-secondary">Country of origin, trade preference programs, marking</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Furniture & Home Goods</h3>
              <p className="text-sm text-text-secondary">HTS classification, antidumping duties, Section 301</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Industrial Equipment</h3>
              <p className="text-sm text-text-secondary">Customs valuation, assists and royalties, tariff engineering</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Food & Beverage</h3>
              <p className="text-sm text-text-secondary">FDA compliance, HTS classification, import licensing</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Building Materials</h3>
              <p className="text-sm text-text-secondary">Antidumping/CVD defense, HTS classification, origin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Whittier Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Los Angeles County logistics, freight corridors, and California trade compliance requirements. We serve clients by appointment throughout the Whittier region.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Trade Routes */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Whittier Trade Routes & Freight Corridors</h3>
              <p className="text-text-secondary mb-4">Understanding LA County freight routes:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-605</span>
                  <span>San Gabriel River Freeway — primary north-south corridor connecting to I-5 and I-10</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SR-72</span>
                  <span>Whittier Boulevard — local arterial connecting to I-5 and downtown LA</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-5</span>
                  <span>Direct corridor to LA/Long Beach ports and central distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SR-60</span>
                  <span>Pomona Freeway — east-west corridor to Inland Empire and I-710 port access</span>
                </li>
              </ul>
            </div>

            {/* Industrial Areas */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Whittier Industrial Zones</h3>
              <p className="text-text-secondary mb-4">Key warehousing and distribution districts:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Whittier Industrial District</span>
                  <span>Manufacturing and distribution along Greenleaf Avenue corridor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">La Mirada Business Park</span>
                  <span>Adjacent logistics facilities and warehousing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Pico Rivera/Commerce</span>
                  <span>Major LA County industrial corridor with port-adjacent access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Norwalk/Santa Fe Springs</span>
                  <span>I-5 logistics corridor — warehousing and distribution centers</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Port Access */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Access for Whittier Companies</h3>
              <p className="text-text-secondary mb-4">International shipping options:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Port of Los Angeles</span>
                  <span>25 minutes via I-605/I-710 — primary container port</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Port of Long Beach</span>
                  <span>30 minutes via I-605/I-710 — major CBP examination facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">LA/Ontario International Airport</span>
                  <span>Air cargo for time-sensitive shipments — 45 minutes via SR-60</span>
                </li>
              </ul>
              <p className="text-sm text-text-secondary mt-4 italic">
                We respond to CBP holds and examinations within 24 hours.
              </p>
            </div>

            {/* Cities Served */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">LA County Cities We Serve</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout Los Angeles County:</p>
              <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary">
                <span>Whittier</span>
                <span>Pico Rivera</span>
                <span>Norwalk</span>
                <span>La Mirada</span>
                <span>Santa Fe Springs</span>
                <span>Downey</span>
                <span>Montebello</span>
                <span>Commerce</span>
                <span>La Habra Heights</span>
                <span>Hacienda Heights</span>
                <span>South Whittier</span>
                <span>West Whittier</span>
              </div>
              <p className="text-sm text-text-secondary mt-4">
                <strong>Headquarters:</strong> 27001 Agoura Road, Suite 350, Calabasas, CA 91301<br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/regulatory-compliance-advisory" className="service-link">
                      <span className="service-link__title">Import Compliance</span>
                      <p className="service-link__description">Customs compliance programs</p>
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
                      <span className="service-link__title">Duty Drawback</span>
                      <p className="service-link__description">Duty refund programs</p>
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
                      <span className="service-link__title">CBP Audit Defense</span>
                      <p className="service-link__description">Customs audit representation</p>
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

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Industry Focus</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/technology-electronics-trade-attorney" className="service-link">
                      <span className="service-link__title">Electronics</span>
                      <p className="service-link__description">Section 301 tariffs</p>
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
                      <span className="service-link__title">Apparel & Textiles</span>
                      <p className="service-link__description">Country of origin</p>
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

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other Locations</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/los-angeles-port-customs-attorney" className="service-link">
                      <span className="service-link__title">LA & Long Beach Ports</span>
                      <p className="service-link__description">Major port complex</p>
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
                    <Link to="/torrance-trade-attorney" className="service-link">
                      <span className="service-link__title">Torrance</span>
                      <p className="service-link__description">South Bay trade law</p>
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

          <div className="bg-white p-8 rounded-lg shadow-md overflow-hidden">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful Guides</h3>
            <div className="grid md:grid-cols-5 gap-6">
              <Link to="/resources/section-301-tariffs-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Section 301</h4>
                <p className="text-sm text-text-secondary">China tariffs</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <Link to="/tariffs-duties-classification-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">HTS Guide</h4>
                <p className="text-sm text-text-secondary">Tariff classification</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <Link to="/resources/uflpa-compliance-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">UFLPA</h4>
                <p className="text-sm text-text-secondary">Forced labor</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <Link to="/practice-areas" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">USMCA</h4>
                <p className="text-sm text-text-secondary">Trade agreements</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <Link to="/trade-law-faq" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">FAQ</h4>
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

      {/* CTA */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Optimize Your Import Operations
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Whittier trade attorney team for expert customs compliance and duty savings strategies.
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

export default WhittierTradeAttorneyPage;
