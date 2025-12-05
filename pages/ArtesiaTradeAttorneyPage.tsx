
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const ArtesiaTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Artesia Trade Attorney | Import Export Customs Lawyer CA',
    description: 'Artesia trade attorney for importers & manufacturers. Customs compliance, HTS classification, duty optimization. Gateway Cities corridor. (310) 744-1328.',
    canonical: 'artesia-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-artesia.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Artesia Trade Compliance Attorney - Import Export Customs Lawyer',
        description: 'Serving Artesia, CA with expert trade compliance, import/export law, and customs legal services for manufacturers and distributors in Southeast Los Angeles County.',
        url: `${siteConfig.siteUrl}/artesia-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Local Offices', url: `${siteConfig.siteUrl}/local-offices` },
        { name: 'Artesia', url: `${siteConfig.siteUrl}/artesia-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Artesia Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance, customs law, and import/export legal representation for Artesia manufacturers and distributors. Expert customs attorney services including tariff classification, USMCA certifications, Section 301 mitigation, and supply chain compliance.',
        serviceType: 'International Trade Law',
        url: `${siteConfig.siteUrl}/artesia-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="Artesia Trade Law Hero">
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
          <h1>Artesia Trade Attorney<br />Import Export Customs Lawyer</h1>
          <p className="hero-subtitle">
            Strategic trade compliance counsel for Artesia businesses. Customs law, tariff optimization, and supply chain solutions in the heart of the Gateway Cities corridor.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Artesia Companies Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Artesia's Manufacturing Community
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Artesia's strategic location on the <strong>I-91 and I-605 corridors</strong> makes it a natural hub for import-intensive businesses. From dairy products to industrial equipment, Artesia companies face complex <strong>customs compliance challenges</strong> that require specialized legal expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Gateway Cities Position</h3>
              <p className="text-text-secondary leading-relaxed">
                As your <strong>Artesia trade attorney</strong>, we leverage deep knowledge of the I-91/I-605 logistics corridor connecting LA/Long Beach ports to Inland Empire distribution centers. Fast, practical counsel.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Food & Industrial Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We serve <strong>food importers, dairy processors, industrial equipment distributors</strong>, and automotive parts suppliers with FDA/CBP coordination, tariff classification, and USMCA compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Comprehensive Compliance Programs</h3>
              <p className="text-text-secondary leading-relaxed">
                From <strong>FSMA compliance</strong> for food imports to UFLPA forced labor audits, we design trade compliance programs tailored to your products, supply chain, and risk profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Artesia Businesses */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance Services for Artesia Companies
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Food Import Compliance (FDA/CBP Coordination)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Artesia's <strong>dairy and food processing industry</strong> requires dual compliance with FDA regulations and CBP import requirements. We coordinate FDA Prior Notices, FSMA compliance, and customs entry procedures to ensure seamless clearance of perishable goods.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>FDA Prior Notice:</strong> Automated filing for all food shipments arriving at US ports</li>
                <li><strong>FSMA Compliance:</strong> Foreign Supplier Verification Programs (FSVP), VQIP enrollment</li>
                <li><strong>HTS Classification:</strong> Dairy products (HTS Chapter 04), processed foods, agricultural goods</li>
                <li><strong>Quota Administration:</strong> Tariff-rate quotas (TRQs) for dairy, sugar, and agricultural imports</li>
                <li><strong>Country-of-Origin Marking:</strong> FDA labeling requirements and CBP marking compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">HTS Classification & Duty Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Accurate <strong>Harmonized Tariff Schedule (HTS) classification</strong> is critical for duty calculation and compliance. Misclassification can result in CBP penalties, overpaid duties, or supply chain delays. We classify your products, obtain binding rulings, and optimize your tariff exposure.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for food, industrial equipment, automotive parts, consumer goods</li>
                <li>Binding Rulings (CBP HQ/NY rulings) for classification certainty</li>
                <li>Tariff engineering and product redesign to minimize Section 301 duties</li>
                <li>First Sale for Export valuation to reduce dutiable value</li>
                <li>Duty drawback (99% refund on exported or unused merchandise)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA & Free Trade Agreement Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you import from <strong>Mexico or Canada</strong>, USMCA preferential tariff treatment can eliminate duties on qualifying products. We prepare origin certifications, calculate regional value content, and defend origin claims in CBP verifications.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA origin certifications for dairy, food, automotive, industrial products</li>
                <li>Regional value content (RVC) and tariff shift analysis</li>
                <li>CBP origin verifications and Requests for Information (CF 28/29)</li>
                <li>Recordkeeping compliance (6-year USMCA record retention)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 China Tariff Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariffs impose <strong>7.5%-25% additional duties</strong> on Chinese imports. For Artesia importers, these tariffs directly impact margins and competitiveness. We develop comprehensive mitigation strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 product coverage analysis and exclusion strategies</li>
                <li>Substantial transformation planning for country-of-origin optimization</li>
                <li>Supply chain diversification (Vietnam, Thailand, Mexico alternatives)</li>
                <li>First Sale valuation to minimize Section 301 duty base</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Forced Labor Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The <strong>Uyghur Forced Labor Prevention Act (UFLPA)</strong> creates a rebuttable presumption that goods from Xinjiang, China are made with forced labor. CBP detentions under UFLPA can halt your supply chain for months. We conduct due diligence and respond to detentions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Supply chain mapping and due diligence questionnaires</li>
                <li>UFLPA detention response and rebuttal submissions to CBP</li>
                <li>Supplier audit programs and certification requirements</li>
                <li>Alternative sourcing strategies to avoid Xinjiang-origin materials</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Enforcement Defense & Prior Disclosures</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP penalties for customs violations can reach <strong>$10,000 per violation</strong> or the domestic value of the merchandise. If you discover a customs violation or receive CBP inquiry, immediate legal representation is critical.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Prior Disclosure filings (19 USC 1592) for self-reported violations</li>
                <li>Pre-Penalty Notice response and penalty mitigation</li>
                <li>CBP Focused Assessments and Quick Response Audits</li>
                <li>Court of International Trade (CIT) litigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Artesia Companies Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Artesia Businesses Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Local Gateway Cities Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>Artesia's I-91 corridor logistics, dairy industry regulations, and regional supply chains</strong>. Local knowledge means faster issue resolution and practical compliance strategies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Food & Industrial Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We serve <strong>dairy processors, food importers, automotive suppliers, and industrial distributors</strong>. We know your products, margins, FDA requirements, and CBP procedures.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Flat-Fee Pricing for Predictability</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>transparent flat-fee packages</strong> for HTS classifications, USMCA certifications, and binding ruling requests. No surprise legal bills. Duty savings typically exceed fees 5-10x.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fast Response for Perishable Goods</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                For <strong>perishable food shipments</strong>, every hour counts. We provide rapid response to CBP holds, FDA detentions, and examination requests. Direct attorney access—no voicemail delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Artesia Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Dairy & Food Processing</h3>
              <p className="text-sm text-text-secondary">FDA Prior Notice, FSMA, HTS Chapter 04, quota management</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Automotive Parts & Accessories</h3>
              <p className="text-sm text-text-secondary">USMCA origin, tariff classification, aftermarket compliance</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Industrial Equipment & Machinery</h3>
              <p className="text-sm text-text-secondary">HTS classification, duty optimization, FTZ benefits</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Consumer Goods</h3>
              <p className="text-sm text-text-secondary">Section 301 tariffs, product safety, import compliance</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Apparel & Textiles</h3>
              <p className="text-sm text-text-secondary">Country-of-origin marking, UFLPA compliance, fiber content</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Medical Devices & Supplies</h3>
              <p className="text-sm text-text-secondary">FDA/CBP coordination, HTS 9021, regulatory compliance</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Electronics & Technology</h3>
              <p className="text-sm text-text-secondary">FCC compliance, Section 301 mitigation, HTS Chapter 85</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Furniture & Home Goods</h3>
              <p className="text-sm text-text-secondary">Wood products, tariff engineering, import safety standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Artesia Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Artesia's strategic position on the I-91/I-605 corridor, connecting LA/Long Beach ports to Inland Empire distribution networks. We serve clients by appointment throughout the Artesia area.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Trade Routes */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Key Trade Routes & Corridors</h3>
              <p className="text-text-secondary mb-4">Major freight routes serving Artesia importers and distributors:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-91</span>
                  <span>Artesia Freeway — primary east-west corridor connecting LA/Long Beach ports to Inland Empire</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-605</span>
                  <span>San Gabriel River Freeway — north-south corridor from Long Beach Port to San Gabriel Valley</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-5</span>
                  <span>Santa Ana Freeway — critical north-south route connecting LA ports to Orange County</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-710</span>
                  <span>Long Beach Freeway — dedicated freight corridor from Port of Long Beach to rail yards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Pioneer Boulevard</span>
                  <span>Surface route through Artesia industrial district connecting to I-605 and CA-91</span>
                </li>
              </ul>
            </div>

            {/* Industrial Areas */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Artesia Industrial & Business Districts</h3>
              <p className="text-text-secondary mb-4">Key zones for trade-intensive businesses:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Little India District</span>
                  <span>Pioneer Boulevard corridor — food importers, ethnic specialty goods, retail distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Artesia Industrial Park</span>
                  <span>I-605/CA-91 area — dairy processing, food manufacturing, warehousing facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">South Artesia</span>
                  <span>CA-91 corridor — automotive parts, industrial equipment distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">East Artesia Commercial</span>
                  <span>Mixed commercial/light industrial — import-intensive retail, logistics</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Port Access */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Access & Logistics</h3>
              <p className="text-text-secondary mb-4">Strategic port proximity for Artesia importers:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Long Beach Port</span>
                  <span>10 miles via I-605 and I-710 — primary container port for perishable and general cargo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">LA Port</span>
                  <span>13 miles via I-605 and I-110 — additional terminals for specialized cargo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Alameda Corridor</span>
                  <span>Rail freight route from ports to BNSF/UP intermodal facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">FTZ 50</span>
                  <span>Foreign Trade Zone 50 (Long Beach) — duty deferral for manufacturers/processors</span>
                </li>
              </ul>
              <p className="text-sm text-text-secondary mt-4 italic">
                Average drayage time to Artesia: 60-90 minutes. We provide emergency response to CBP/FDA holds.
              </p>
            </div>

            {/* Cities Served */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Southeast LA County Cities We Serve</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout the Gateway Cities region:</p>
              <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary">
                <span>Artesia</span>
                <span>Cerritos</span>
                <span>Norwalk</span>
                <span>La Mirada</span>
                <span>Bellflower</span>
                <span>Lakewood</span>
                <span>Hawaiian Gardens</span>
                <span>La Palma</span>
                <span>Buena Park</span>
                <span>Cypress</span>
                <span>Downey</span>
                <span>Paramount</span>
                <span>Pico Rivera</span>
                <span>Whittier</span>
                <span>Santa Fe Springs</span>
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
                      <span className="service-link__title">Food Import Compliance</span>
                      <p className="service-link__description">FDA/CBP coordination, FSMA</p>
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
                      <span className="service-link__title">Customs Classification</span>
                      <p className="service-link__description">HTS codes, duty optimization</p>
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
                      <p className="service-link__description">Penalty mitigation, audits</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Artesia Industry Focus</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/food-agriculture-trade-attorney" className="service-link">
                      <span className="service-link__title">Food & Agriculture</span>
                      <p className="service-link__description">Dairy, specialty foods, FDA</p>
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
                <h4 className="font-bold text-primary-navy mb-2">Food Import Guide</h4>
                <p className="text-sm text-text-secondary">FDA/CBP compliance</p>
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
            Protect Your Supply Chain with Expert Counsel
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let customs compliance issues disrupt your operations. Contact our Artesia trade attorney team for expert import/export counsel and FDA/CBP coordination.
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

export default ArtesiaTradeAttorneyPage;
