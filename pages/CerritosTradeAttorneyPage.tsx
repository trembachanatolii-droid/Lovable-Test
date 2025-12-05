
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const CerritosTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Cerritos Trade Attorney | Import Export Compliance Lawyer CA',
    description: 'Cerritos trade attorney for manufacturers & distributors. Customs compliance, tariff classification, USMCA origin. Gateway Cities. (310) 744-1328.',
    canonical: 'cerritos-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-cerritos.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Cerritos Trade Compliance Attorney - Import Export Lawyer',
        description: 'Serving Cerritos, CA with expert trade compliance, import/export law, and customs legal services for manufacturers and distributors in the Gateway Cities region.',
        url: `${siteConfig.siteUrl}/cerritos-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Local Offices', url: `${siteConfig.siteUrl}/local-offices` },
        { name: 'Cerritos', url: `${siteConfig.siteUrl}/cerritos-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Cerritos Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance, customs law, and import/export legal representation for Cerritos manufacturers and distributors. Expert customs attorney services including HTS classification, Section 301 tariff mitigation, USMCA certifications, and supply chain compliance.',
        serviceType: 'International Trade Law',
        url: `${siteConfig.siteUrl}/cerritos-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="Cerritos Trade Law Hero">
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
          <h1>Cerritos Trade Attorney<br />Import Export Compliance Lawyer</h1>
          <p className="hero-subtitle">
            Expert trade compliance counsel for Cerritos manufacturers and distributors. Customs law, tariff optimization, and supply chain solutions for Gateway Cities businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Cerritos Companies Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Cerritos's Manufacturing Economy
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Cerritos is home to a diverse <strong>manufacturing and distribution base</strong>, from automotive parts to consumer goods. Whether you're importing components from Asia, exporting finished products, or navigating <strong>complex customs regulations</strong>, our trade attorneys provide the legal expertise to protect your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Gateway Cities Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                As your <strong>Cerritos trade attorney</strong>, we understand the regional supply chains connecting LA/Long Beach ports to Inland Empire distribution. Fast, strategic counsel for import/export compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Automotive & Industrial Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We serve <strong>automotive parts manufacturers, industrial equipment companies, and consumer goods importers</strong> with tariff classification, USMCA origin certifications, and Section 301 tariff mitigation.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Customs Compliance Programs</h3>
              <p className="text-text-secondary leading-relaxed">
                From <strong>HTS classification audits</strong> to UFLPA forced labor compliance, we design trade compliance programs tailored to your supply chain, risk profile, and growth plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Cerritos Businesses */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance Services for Cerritos Companies
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">HTS Classification & Tariff Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper <strong>Harmonized Tariff Schedule (HTS) classification</strong> is critical for duty calculation, trade remedy exposure, and regulatory compliance. Misclassification can result in CBP penalties, overpaid duties, or supply chain delays. We classify your products, obtain binding rulings, and optimize your tariff strategy.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>HTS Classification:</strong> 6-digit HS codes to 10-digit statistical codes for all product types</li>
                <li><strong>Binding Rulings:</strong> CBP advance rulings for classification certainty (HQ/NY rulings)</li>
                <li><strong>Tariff Engineering:</strong> Product redesign or reclassification to minimize Section 301 duties</li>
                <li><strong>Post-Entry Corrections:</strong> Correct past misclassifications via protests or reconciliation</li>
                <li><strong>Audit Defense:</strong> Defend classifications during CBP Focused Assessments and audits</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 China Tariff Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariffs impose <strong>7.5%-25% additional duties</strong> on thousands of Chinese product categories. For Cerritos importers, these tariffs directly impact landed costs and competitiveness. We develop comprehensive mitigation strategies including exclusions, supply chain restructuring, and First Sale valuation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 exclusion requests (if/when USTR reopens exclusion process)</li>
                <li>Substantial transformation analysis for country-of-origin planning</li>
                <li>First Sale for Export valuation to reduce dutiable value</li>
                <li>Supply chain diversification strategies (Vietnam, Mexico, etc.)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA Origin Certifications & Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you source automotive parts, industrial equipment, or consumer goods from <strong>Mexico or Canada</strong>, USMCA preferential tariff treatment can eliminate duties. But USMCA compliance requires proper certifications, regional value content (RVC) calculations, and meticulous recordkeeping.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA origin certifications (blanket and single-shipment)</li>
                <li>Regional value content (RVC) calculations for automotive and industrial products</li>
                <li>Labor value content (LVC) requirements for automotive (new 2025+ rules)</li>
                <li>CBP origin verifications and Requests for Information (CF 28/29)</li>
                <li>Recordkeeping compliance (6-year retention requirement)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Valuation & Duty Reduction Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Customs valuation determines the <strong>dutiable value</strong> of your imports—the base for calculating duties and fees. Strategic valuation planning can significantly reduce your total landed costs. We advise on transaction value, assists, royalties, and First Sale for Export methodologies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Transaction value analysis and documentation</li>
                <li>Assists and royalty dutiability determinations</li>
                <li>First Sale for Export (multi-tier transactions)</li>
                <li>Related party transfer pricing and arm's length analysis</li>
                <li>Duty drawback (99% refund on exported or unused merchandise)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Forced Labor Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The <strong>Uyghur Forced Labor Prevention Act (UFLPA)</strong> creates a rebuttable presumption that goods from Xinjiang, China are made with forced labor and subject to detention. Cerritos importers must conduct supply chain due diligence to avoid CBP holds and civil penalties.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Supply chain mapping and due diligence questionnaires</li>
                <li>UFLPA detention response and rebuttal submissions</li>
                <li>Supplier audit programs and certifications</li>
                <li>Alternative sourcing strategies to avoid Xinjiang suppliers</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Penalties & Enforcement Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP penalties for customs violations can reach <strong>$10,000 per violation</strong> or the domestic value of the merchandise. If you receive a Pre-Penalty Notice, Notice of Action, or CBP inquiry, immediate legal representation is critical to minimize exposure.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Prior Disclosure filings (19 USC 1592) for self-reported violations</li>
                <li>Pre-Penalty Notice response and mitigation</li>
                <li>Focused Assessments and CBP audits (Quick Response, Reasonable Care)</li>
                <li>Entry protests (19 USC 1514) and supplemental info requests</li>
                <li>Court of International Trade (CIT) litigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cerritos Companies Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Cerritos Businesses Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Gateway Cities Trade Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand the <strong>Cerritos manufacturing base, LA/Long Beach port logistics, and I-605/I-5 distribution corridors</strong>. Local knowledge means faster issue resolution and practical compliance strategies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industry-Specific Counsel</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We serve <strong>automotive parts suppliers, consumer electronics importers, industrial equipment manufacturers</strong>, and food/beverage distributors. We know your industries, margins, and regulatory pressures.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Flat-Fee Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee packages</strong> for HTS classifications, USMCA certifications, and binding ruling requests. No billing surprises. Our duty savings typically exceed legal fees 5-10x.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proactive Compliance Planning</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We don't just react to problems—we design <strong>proactive trade compliance programs</strong> that prevent issues before they arise. Annual classification reviews, supplier audits, and policy updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Cerritos Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Automotive Parts & Accessories</h3>
              <p className="text-sm text-text-secondary">USMCA origin, tariff classification, aftermarket compliance</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Consumer Electronics</h3>
              <p className="text-sm text-text-secondary">HTS classification, Section 301 tariffs, FCC/CE compliance</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Industrial Equipment & Machinery</h3>
              <p className="text-sm text-text-secondary">Tariff engineering, duty optimization, FTZ benefits</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Apparel & Textiles</h3>
              <p className="text-sm text-text-secondary">Country-of-origin marking, UFLPA compliance, fiber content</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Furniture & Home Goods</h3>
              <p className="text-sm text-text-secondary">Wood products, Section 301 mitigation, import safety standards</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Food & Beverage</h3>
              <p className="text-sm text-text-secondary">FDA Prior Notice, FSMA compliance, labeling requirements</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Medical Devices & Supplies</h3>
              <p className="text-sm text-text-secondary">FDA/CBP coordination, HTS 9021, regulatory compliance</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Toys & Sporting Goods</h3>
              <p className="text-sm text-text-secondary">CPSC safety testing, country-of-origin, import compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Cerritos Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Cerritos's strategic location in the Gateway Cities corridor, connecting LA/Long Beach ports to Inland Empire distribution networks. We serve clients by appointment throughout the Cerritos area.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Trade Routes */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Key Trade Routes & Corridors</h3>
              <p className="text-text-secondary mb-4">Major freight routes serving Cerritos manufacturers and distributors:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-605</span>
                  <span>San Gabriel River Freeway — primary north-south corridor through Cerritos connecting ports to San Gabriel Valley</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-5</span>
                  <span>Santa Ana Freeway — critical north-south artery connecting LA ports to Orange County and beyond</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-91</span>
                  <span>Artesia Freeway — east-west connector to Riverside/San Bernardino distribution centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-405</span>
                  <span>San Diego Freeway — major distribution route from Long Beach Port through Orange County</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Artesia Boulevard</span>
                  <span>Surface route connecting Cerritos industrial zones to I-605 and I-5 corridors</span>
                </li>
              </ul>
            </div>

            {/* Industrial Areas */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cerritos Industrial & Business Districts</h3>
              <p className="text-text-secondary mb-4">Key commercial zones for trade-intensive businesses:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Cerritos Auto Square</span>
                  <span>Major automotive retail district — parts distribution, service centers, import/export hub</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-605 Industrial Corridor</span>
                  <span>Manufacturing and warehousing — electronics, automotive, consumer goods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Cerritos Towne Center Area</span>
                  <span>Mixed retail/distribution — import-intensive retailers, logistics companies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">South Cerritos Industrial</span>
                  <span>Manufacturing zone — food processing, industrial equipment, warehousing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Port Access */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Access & Logistics</h3>
              <p className="text-text-secondary mb-4">Strategic port proximity for Cerritos importers and exporters:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Long Beach Port</span>
                  <span>12 miles via I-605 and I-710 — primary container port for Asia trade lanes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">LA Port</span>
                  <span>15 miles via I-605 and I-110 — additional container terminals and break-bulk facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Alameda Corridor</span>
                  <span>Dedicated freight rail route from ports to BNSF/UP rail yards for intermodal shipments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">FTZ Access</span>
                  <span>Foreign Trade Zone 50 (Long Beach) and FTZ 202 (LA) — duty deferral benefits available</span>
                </li>
              </ul>
              <p className="text-sm text-text-secondary mt-4 italic">
                Average port drayage time: 45-90 minutes. We provide rapid response to CBP holds and examinations.
              </p>
            </div>

            {/* Cities Served */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Gateway Cities We Serve</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout the Southeast LA County region:</p>
              <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary">
                <span>Cerritos</span>
                <span>Norwalk</span>
                <span>Artesia</span>
                <span>La Mirada</span>
                <span>Lakewood</span>
                <span>Bellflower</span>
                <span>Downey</span>
                <span>Santa Fe Springs</span>
                <span>Whittier</span>
                <span>Pico Rivera</span>
                <span>La Habra</span>
                <span>Buena Park</span>
                <span>Cypress</span>
                <span>Hawaiian Gardens</span>
                <span>Commerce</span>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services for Importers</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/practice-areas" className="service-link">
                      <span className="service-link__title">Customs Compliance</span>
                      <p className="service-link__description">Classification, valuation, audits</p>
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
                      <span className="service-link__title">Trade Remedies</span>
                      <p className="service-link__description">Section 301, AD/CVD defense</p>
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
                      <span className="service-link__title">CBP Enforcement Defense</span>
                      <p className="service-link__description">Penalty mitigation, litigation</p>
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
                      <p className="service-link__description">Full trade law services</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Cerritos Industry Focus</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/automotive-trade-attorney" className="service-link">
                      <span className="service-link__title">Automotive & Transportation</span>
                      <p className="service-link__description">Parts, accessories, USMCA</p>
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
                      <span className="service-link__title">Consumer Electronics</span>
                      <p className="service-link__description">Section 301, FCC compliance</p>
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
                      <p className="service-link__description">UFLPA, country-of-origin</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/los-angeles-port-customs-attorney" className="service-link">
                      <span className="service-link__title">Los Angeles & Long Beach Port</span>
                      <p className="service-link__description">Nation's busiest port complex</p>
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
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful Guides for Importers & Exporters</h3>
            <div className="grid md:grid-cols-5 gap-6">
              <Link to="/resources/uflpa-compliance-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">UFLPA Guide</h4>
                <p className="text-sm text-text-secondary">Forced labor compliance</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <Link to="/resources/section-301-tariffs" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Section 301</h4>
                <p className="text-sm text-text-secondary">China tariff mitigation</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <Link to="/resources/usmca-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">USMCA Guide</h4>
                <p className="text-sm text-text-secondary">North American FTA</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <Link to="/ecommerce-digital-trade-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">E-commerce</h4>
                <p className="text-sm text-text-secondary">Online retail imports</p>
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
            Optimize Your Trade Compliance Strategy
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let customs compliance issues slow your business. Contact our Cerritos trade attorney team for expert import/export counsel and supply chain solutions.
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

export default CerritosTradeAttorneyPage;
