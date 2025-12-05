
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const LakewoodTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Lakewood Trade Attorney | Long Beach Port Customs Lawyer CA',
    description: 'Lakewood trade attorney near Long Beach Port. Import/export compliance, customs law, tariff classification. Serving LA County manufacturers. (310) 744-1328.',
    canonical: 'lakewood-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-lakewood.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Lakewood Trade Compliance Attorney - Long Beach Port Customs Lawyer',
        description: 'Serving Lakewood, CA with expert trade compliance, customs law, and import/export legal services for manufacturers and distributors near Long Beach Port.',
        url: `${siteConfig.siteUrl}/lakewood-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Local Offices', url: `${siteConfig.siteUrl}/local-offices` },
        { name: 'Lakewood', url: `${siteConfig.siteUrl}/lakewood-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Lakewood Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance, customs law, and import/export legal representation for Lakewood manufacturers and distributors. Expert Long Beach Port customs attorney services including HTS classification, customs valuation, trade remedies, and CBP enforcement defense.',
        serviceType: 'Import/Export Trade Law',
        url: `${siteConfig.siteUrl}/lakewood-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="Lakewood Trade Law Hero">
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
          <h1>Lakewood Trade Attorney<br />Long Beach Port Customs Lawyer</h1>
          <p className="hero-subtitle">
            Strategic trade compliance counsel for Lakewood manufacturers and distributors. Customs law, import/export compliance, and supply chain solutions near Long Beach Port.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Lakewood Companies Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Lakewood's Manufacturing Hub
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Lakewood sits at the heart of Southern California's <strong>manufacturing and distribution corridor</strong>, just minutes from the Long Beach Port. Whether you're importing raw materials, exporting finished goods, or navigating <strong>customs compliance</strong>, our trade attorneys provide the legal expertise to keep your supply chain moving.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Long Beach Port Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                As your <strong>Lakewood trade attorney</strong>, we handle customs clearances, CBP examinations, and tariff disputes at the Port of Long Beach. Fast response to holds and delays to minimize demurrage costs.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We serve Lakewood's <strong>aerospace, automotive, and industrial manufacturers</strong> with tariff classification, duty drawback, foreign trade zones, and Section 301 tariff mitigation strategies.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Supply Chain Solutions</h3>
              <p className="text-text-secondary leading-relaxed">
                From <strong>USMCA origin certifications</strong> to UFLPA compliance audits, we design trade compliance programs that protect your bottom line and ensure regulatory compliance across your entire supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Lakewood Businesses */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance Services for Lakewood Companies
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Classification & Valuation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Accurate <strong>HTS classification</strong> is the foundation of customs compliance. Misclassification can lead to overpayment of duties, CBP penalties, or supply chain delays. We classify your products, defend your classifications in audits, and optimize your duty payments through valuation strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>HTS Classification:</strong> 6-digit to 10-digit tariff codes for all product categories</li>
                <li><strong>Customs Valuation:</strong> Transaction value, assists, royalties, First Sale analysis</li>
                <li><strong>Binding Rulings:</strong> CBP advance rulings for classification and valuation certainty</li>
                <li><strong>Tariff Engineering:</strong> Product redesign to minimize Section 301 duties</li>
                <li><strong>Duty Drawback:</strong> Recover 99% of duties on exported or unused merchandise</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Long Beach Port Customs Clearance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The <strong>Port of Long Beach</strong> handles over 8 million TEUs annually. When CBP flags your shipment for examination, demurrage costs accrue at $150-$400/day. We respond immediately to CBP holds, represent you in examinations, and resolve classification or documentation disputes.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Emergency response to CBP holds and intensive exams</li>
                <li>Entry correction and protests (19 USC 1514, 1515)</li>
                <li>CTPAT security certification for expedited processing</li>
                <li>ISF (Importer Security Filing) compliance and penalty defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA & Free Trade Agreements</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you source from <strong>Mexico or Canada</strong>, USMCA preferential tariff treatment can eliminate duties entirely. But claiming USMCA requires proper origin certifications, regional value content calculations, and recordkeeping. We certify your products, structure your supply chain for USMCA compliance, and defend origin claims in verifications.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA origin certifications and regional value content (RVC) analysis</li>
                <li>Korea FTA, Japan FTA, and other bilateral agreement qualifications</li>
                <li>CBP origin verifications and Requests for Information (CF 28/29)</li>
                <li>Supply chain restructuring for FTA eligibility</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Mitigation & Trade Remedies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariffs on <strong>China imports</strong> can add 25% to your landed costs. We help you reduce or eliminate these tariffs through product exclusions, tariff engineering, country-of-origin planning, and First Sale valuation strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 exclusion requests (USTR petitions)</li>
                <li>Substantial transformation analysis for country-of-origin planning</li>
                <li>Antidumping/Countervailing duty (AD/CVD) defense</li>
                <li>Evasion investigations (EAPA) and scope rulings</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign Trade Zones (FTZ) for Lakewood Manufacturers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Foreign Trade Zones</strong> allow you to defer, reduce, or eliminate customs duties on imported components used in manufacturing. Lakewood companies in FTZ 50 (Long Beach) can defer duty payments until finished goods leave the zone, avoid duties on waste/scrap, and use inverted tariff benefits.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FTZ application and activation (CBP Form 214)</li>
                <li>Weekly entry procedures and zone-to-zone transfers</li>
                <li>Inverted tariff analysis (components taxed higher than finished goods)</li>
                <li>Manufacturing under FTZ procedures (alternative site framework)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Enforcement Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP penalties for customs violations can reach <strong>$10,000 per violation</strong> or the domestic value of the merchandise. If you receive a Pre-Penalty Notice or Notice of Action, immediate legal representation is critical. We negotiate penalty reductions, prepare Prior Disclosures, and defend against CBP enforcement.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Prior Disclosure filings (19 USC 1592) for self-reported violations</li>
                <li>Pre-Penalty Notice response and mitigation</li>
                <li>Focused Assessments and CBP audits (Quick Response Audits)</li>
                <li>Customs litigation at Court of International Trade (CIT)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lakewood Companies Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Lakewood Manufacturers Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Long Beach Port Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We know the <strong>Port of Long Beach terminals, CBP procedures, and local customs brokers</strong>. When your shipment is held for examination, we coordinate with CBP officers, terminal operators, and freight forwarders to resolve issues fast.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Industry Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We serve <strong>aerospace suppliers, automotive parts manufacturers, industrial equipment companies</strong>, and consumer goods importers. We understand your supply chains, cost pressures, and regulatory challenges.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost-Effective Solutions</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for classifications, binding rulings, and FTZ applications. Transparent billing with no surprise legal fees. Our duty savings often exceed our legal fees 10x.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response to CBP Issues</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                When CBP holds your shipment, <strong>every day costs money</strong>. We respond to urgent customs issues within 24 hours. Direct attorney access—no voicemail runaround.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Lakewood Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Aerospace Manufacturing</h3>
              <p className="text-sm text-text-secondary">Aircraft parts, ITAR compliance, export controls, FTZ benefits</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Automotive Parts & Accessories</h3>
              <p className="text-sm text-text-secondary">USMCA origin, tariff classification, Section 301 mitigation</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Industrial Equipment</h3>
              <p className="text-sm text-text-secondary">Machinery, tools, HTS classification, duty optimization</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Consumer Electronics</h3>
              <p className="text-sm text-text-secondary">FCC compliance, Section 301 tariffs, e-waste regulations</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Furniture & Home Goods</h3>
              <p className="text-sm text-text-secondary">Wood products, textiles, country-of-origin marking</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Medical Devices & Supplies</h3>
              <p className="text-sm text-text-secondary">FDA/CBP coordination, HTS 9021, sterilization equipment</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Food & Beverage</h3>
              <p className="text-sm text-text-secondary">FDA Prior Notice, FSMA, bioterrorism regulations</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Apparel & Textiles</h3>
              <p className="text-sm text-text-secondary">Fiber content, country-of-origin, UFLPA forced labor compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Lakewood Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Lakewood's manufacturing corridor, Long Beach Port logistics, and Southern California trade routes. We serve clients by appointment throughout the Lakewood area.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Trade Routes */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Key Trade Routes & Corridors</h3>
              <p className="text-text-secondary mb-4">Major freight corridors serving Lakewood manufacturers and distributors:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-605</span>
                  <span>San Gabriel River Freeway — primary north-south corridor through Lakewood connecting Long Beach Port to San Gabriel Valley</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-405</span>
                  <span>San Diego Freeway — major distribution route connecting Long Beach/LA Ports to Inland Empire and Orange County</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-710</span>
                  <span>Long Beach Freeway — dedicated freight corridor from Port of Long Beach to Downtown LA rail yards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-91</span>
                  <span>Artesia Freeway — east-west connector to Inland Empire distribution centers and I-15 corridor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Lakewood Blvd</span>
                  <span>Direct surface route to Long Beach terminals and aerospace manufacturing zones</span>
                </li>
              </ul>
            </div>

            {/* Industrial Areas */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Lakewood Industrial & Manufacturing Zones</h3>
              <p className="text-text-secondary mb-4">Key business districts for trade-intensive industries:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Lakewood Industrial Park</span>
                  <span>I-605 corridor — aerospace suppliers, precision manufacturing, distribution centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Bellflower/Lakewood Border</span>
                  <span>Manufacturing zone — automotive parts, industrial equipment, warehousing facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">South Lakewood</span>
                  <span>Long Beach Airport area — aerospace manufacturing, logistics companies, FTZ access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Del Amo Boulevard Corridor</span>
                  <span>Mixed commercial/industrial — consumer goods distribution, retail imports</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Port Access */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Long Beach Access & Terminals</h3>
              <p className="text-text-secondary mb-4">Strategic port access for Lakewood importers and exporters:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Distance</span>
                  <span>6-8 miles to Long Beach container terminals via I-710 and Lakewood Boulevard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">LBCT</span>
                  <span>Long Beach Container Terminal — automated terminal, Pier A/C facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">TTI Terminal</span>
                  <span>TraPac/Total Terminals International — China/Asia trade lanes, CBP examination site</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">FTZ 50</span>
                  <span>Foreign Trade Zone 50 (Long Beach) — duty deferral and inverted tariff benefits for manufacturers</span>
                </li>
              </ul>
              <p className="text-sm text-text-secondary mt-4 italic">
                Average demurrage at Long Beach: $175-$400/day. We provide emergency response to CBP holds.
              </p>
            </div>

            {/* Cities Served */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Lakewood Area Cities We Serve</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout the Gateway Cities region:</p>
              <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary">
                <span>Lakewood</span>
                <span>Long Beach</span>
                <span>Bellflower</span>
                <span>Cerritos</span>
                <span>Norwalk</span>
                <span>Downey</span>
                <span>Paramount</span>
                <span>Hawaiian Gardens</span>
                <span>Artesia</span>
                <span>La Mirada</span>
                <span>Cypress</span>
                <span>Los Alamitos</span>
                <span>Seal Beach</span>
                <span>Signal Hill</span>
                <span>Carson</span>
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
                      <span className="service-link__title">Customs Classification & Valuation</span>
                      <p className="service-link__description">HTS codes and duty optimization</p>
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
                      <span className="service-link__title">Trade Remedies Defense</span>
                      <p className="service-link__description">Section 301, AD/CVD</p>
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
                      <p className="service-link__description">Penalty mitigation and litigation</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Lakewood Industry Focus</h3>
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
                      <span className="service-link__title">Technology & Electronics</span>
                      <p className="service-link__description">Consumer electronics, FCC compliance</p>
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
                    <Link to="/aerospace-defense-trade-attorney" className="service-link">
                      <span className="service-link__title">Aerospace & Defense</span>
                      <p className="service-link__description">ITAR, export controls</p>
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
            Keep Your Supply Chain Compliant & Moving
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let customs issues disrupt your operations. Contact our Lakewood trade attorney team for expert import/export compliance counsel and Long Beach Port representation.
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

export default LakewoodTradeAttorneyPage;
