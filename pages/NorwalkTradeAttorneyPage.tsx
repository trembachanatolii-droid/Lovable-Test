
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const NorwalkTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Norwalk Trade Attorney | Import Export Customs Lawyer CA',
    description: 'Norwalk trade attorney for manufacturers & distributors. Customs compliance, tariff classification, USMCA. I-5/I-605 corridor. (310) 744-1328.',
    canonical: 'norwalk-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-norwalk.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Norwalk Trade Compliance Attorney - Import Export Lawyer',
        description: 'Serving Norwalk, CA with expert trade compliance, import/export law, and customs legal services for manufacturers and distributors in Southeast LA County.',
        url: `${siteConfig.siteUrl}/norwalk-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Local Offices', url: `${siteConfig.siteUrl}/local-offices` },
        { name: 'Norwalk', url: `${siteConfig.siteUrl}/norwalk-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Norwalk Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance, customs law, and import/export legal representation for Norwalk manufacturers and distributors. Expert customs attorney services including HTS classification, USMCA certifications, Section 301 mitigation, and CBP enforcement defense.',
        serviceType: 'International Trade Law',
        url: `${siteConfig.siteUrl}/norwalk-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="Norwalk Trade Law Hero">
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
          <h1>Norwalk Trade Attorney<br />Import Export Compliance Lawyer</h1>
          <p className="hero-subtitle">
            Strategic trade compliance counsel for Norwalk manufacturers and distributors. Customs law, tariff optimization, and supply chain solutions in the I-5/I-605 logistics corridor.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Norwalk Companies Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Norwalk's Business Community
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Norwalk businesses face complex <strong>import/export regulations</strong> that require specialized legal expertise. Whether you're importing components, exporting finished goods, or navigating <strong>customs compliance</strong>, our trade attorneys provide expert guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regional Trade Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                As your <strong>Norwalk trade attorney</strong>, we understand the local logistics corridors, port access routes, and regional supply chains in Southeast LA County. Strategic, practical counsel.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industry-Specific Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We serve Norwalk's key industries with tariff classification, USMCA compliance, and Section 301 mitigation strategies tailored to your business needs.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proactive Compliance Solutions</h3>
              <p className="text-text-secondary leading-relaxed">
                From <strong>HTS classification audits</strong> to UFLPA forced labor due diligence, we design trade compliance programs that prevent costly violations and ensure regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Norwalk Businesses */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance Services for Norwalk Companies
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Classification & Tariff Engineering</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Accurate <strong>HTS classification</strong> determines your duty rate, trade remedy exposure, and regulatory compliance requirements. Misclassification can result in CBP penalties up to $10,000 per violation. We classify your products, obtain binding rulings, and engineer tariff strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>HTS Classification:</strong> All product categories from automotive to consumer goods</li>
                <li><strong>Binding Rulings:</strong> CBP advance rulings for classification certainty</li>
                <li><strong>Tariff Engineering:</strong> Product redesign to minimize Section 301 China tariffs</li>
                <li><strong>Post-Entry Amendments:</strong> Correct past misclassifications via protests</li>
                <li><strong>Audit Defense:</strong> Defend classifications during CBP Focused Assessments</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA Origin Certifications & Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you source from <strong>Mexico or Canada</strong>, USMCA preferential tariff treatment can eliminate duties entirely. We prepare origin certifications, calculate regional value content (RVC), and defend origin claims in CBP verifications.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA origin certifications (blanket and single-shipment)</li>
                <li>Regional value content (RVC) calculations</li>
                <li>Labor value content (LVC) requirements for automotive</li>
                <li>CBP origin verifications and Requests for Information</li>
                <li>6-year USMCA recordkeeping compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 China Tariff Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariffs impose <strong>7.5%-25% additional duties</strong> on thousands of Chinese product categories. These tariffs directly impact your landed costs and competitiveness. We develop comprehensive mitigation strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 product coverage analysis and exclusion strategies</li>
                <li>Substantial transformation analysis for country-of-origin planning</li>
                <li>First Sale for Export valuation to reduce Section 301 duty base</li>
                <li>Supply chain diversification (Vietnam, Mexico, Thailand alternatives)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Valuation & Duty Reduction</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Customs valuation determines the <strong>dutiable value</strong> of your imports—the foundation for calculating all duties and fees. Strategic valuation planning can significantly reduce total landed costs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Transaction value analysis and documentation</li>
                <li>Assists and royalty dutiability determinations</li>
                <li>First Sale for Export (multi-tier transaction valuation)</li>
                <li>Related party transfer pricing and arm's length analysis</li>
                <li>Duty drawback (99% refund on exported or unused merchandise)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Forced Labor Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The <strong>Uyghur Forced Labor Prevention Act (UFLPA)</strong> creates a rebuttable presumption that goods from Xinjiang, China are made with forced labor. UFLPA detentions can halt your supply chain for months.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Supply chain mapping and due diligence programs</li>
                <li>UFLPA detention response and rebuttal submissions to CBP</li>
                <li>Supplier audit programs and forced labor certifications</li>
                <li>Alternative sourcing strategies to avoid high-risk regions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Enforcement Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP penalties for customs violations can reach <strong>$10,000 per violation</strong> or the domestic value of the merchandise. If you receive a Pre-Penalty Notice or CBP inquiry, immediate legal representation is critical.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Prior Disclosure filings (19 USC 1592) for self-reported violations</li>
                <li>Pre-Penalty Notice response and mitigation arguments</li>
                <li>CBP Focused Assessments and Quick Response Audits</li>
                <li>Entry protests (19 USC 1514) and supplemental information requests</li>
                <li>Court of International Trade (CIT) litigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Norwalk Companies Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Norwalk Businesses Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regional Logistics Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>Norwalk's logistics corridors, port access routes, and regional supply chains</strong>. Local knowledge translates to faster issue resolution and practical compliance strategies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industry-Specific Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We serve Norwalk's key industries. We understand your products, margins, and regulatory pressures.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Flat-Fee Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee packages</strong> for HTS classifications, USMCA certifications, and binding ruling requests. No surprise billing. Duty savings typically exceed legal fees 5-10x.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proactive Compliance Planning</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We don't just react to problems—we design <strong>proactive trade compliance programs</strong> that prevent issues before they arise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Norwalk Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Automotive Parts & Accessories</h3>
              <p className="text-sm text-text-secondary">USMCA origin, tariff classification, compliance</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Consumer Goods & Retail</h3>
              <p className="text-sm text-text-secondary">Section 301 tariffs, product safety, import compliance</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Industrial Equipment & Machinery</h3>
              <p className="text-sm text-text-secondary">HTS classification, duty optimization, FTZ benefits</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Electronics & Technology</h3>
              <p className="text-sm text-text-secondary">FCC compliance, Section 301 mitigation</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Apparel & Textiles</h3>
              <p className="text-sm text-text-secondary">Country-of-origin marking, UFLPA compliance</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Food & Beverage</h3>
              <p className="text-sm text-text-secondary">FDA Prior Notice, FSMA compliance</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Medical Devices & Supplies</h3>
              <p className="text-sm text-text-secondary">FDA/CBP coordination, HTS 9021</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Furniture & Home Goods</h3>
              <p className="text-sm text-text-secondary">Wood products, Section 301, import safety</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Norwalk Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Norwalk's position in Southeast LA County, with excellent access to LA/Long Beach ports. We serve clients by appointment throughout the Norwalk area.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Trade Routes */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Key Trade Routes & Corridors</h3>
              <p className="text-text-secondary mb-4">Major freight routes serving Norwalk businesses:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start"><span className="text-secondary-teal font-bold mr-2">I-5</span><span>Major freight corridor serving Norwalk importers and distributors</span></li><li className="flex items-start"><span className="text-secondary-teal font-bold mr-2">I-605</span><span>Major freight corridor serving Norwalk importers and distributors</span></li><li className="flex items-start"><span className="text-secondary-teal font-bold mr-2">I-105</span><span>Major freight corridor serving Norwalk importers and distributors</span></li><li className="flex items-start"><span className="text-secondary-teal font-bold mr-2">CA-91</span><span>Major freight corridor serving Norwalk importers and distributors</span></li>
              </ul>
            </div>

            {/* Port Access */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Access & Logistics</h3>
              <p className="text-text-secondary mb-4">Strategic port proximity for Norwalk importers:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Long Beach Port</span>
                  <span>Primary container port for Asia-Pacific trade lanes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">LA Port</span>
                  <span>Additional terminals for specialized cargo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">FTZ Access</span>
                  <span>Foreign Trade Zone 50 (Long Beach) available for duty deferral</span>
                </li>
              </ul>
              <p className="text-sm text-text-secondary mt-4 italic">
                We provide rapid response to CBP holds and examinations.
              </p>
            </div>
          </div>

          <div className="bg-neutral-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regional Cities We Serve</h3>
            <p className="text-text-secondary mb-4">Available by appointment throughout the region:</p>
            <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary">
              <span>Norwalk</span><span>Cerritos</span><span>Artesia</span><span>La Mirada</span><span>Bellflower</span><span>Downey</span><span>Santa Fe Springs</span>
            </div>
            <p className="text-sm text-text-secondary mt-4">
              <strong>Headquarters:</strong> 27001 Agoura Road, Suite 350, Calabasas, CA 91301<br />
              <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a>
            </p>
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
                    <Link to="/customs-defense" className="service-link">
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
              </ul>
            </div>

            {/* Industry Focus */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Norwalk Industry Focus</h3>
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
                    <Link to="/industries/technology-electronics" className="service-link">
                      <span className="service-link__title">Electronics & Technology</span>
                      <p className="service-link__description">Section 301, FCC compliance</p>
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
            Optimize Your Import/Export Strategy
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let customs compliance issues slow your business. Contact our Norwalk trade attorney team for expert import/export counsel and tariff optimization strategies.
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

export default NorwalkTradeAttorneyPage;
