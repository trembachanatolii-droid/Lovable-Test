import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const NewarkTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Newark Trade Attorney | East Bay Import Export Lawyer CA',
    description: 'Newark trade attorney serving East Bay distribution centers. Customs compliance, I-880/SR-84 logistics, import defense. Tri-Valley businesses. (310) 744-1328.',
    canonical: 'newark-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-newark.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Newark Trade Attorney - East Bay Customs & Import Lawyer',
        description: 'Serving Newark with expert trade compliance, customs legal services, and import/export defense for Tri-Valley distribution businesses.',
        url: `${siteConfig.siteUrl}/newark-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Local Offices', url: `${siteConfig.siteUrl}/local-offices` },
        { name: 'Newark', url: `${siteConfig.siteUrl}/newark-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Newark Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance and customs legal representation for Newark logistics companies and distribution centers. Expert Newark trade attorney services including customs compliance, HTS classification, USMCA qualification, Section 301 tariff mitigation, Prior Disclosures, and CBP penalty defense for Tri-Valley importers.',
        serviceType: 'Logistics Trade Law',
        url: `${siteConfig.siteUrl}/newark-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="Newark Trade Law Hero">
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
          <h1>Newark Trade Attorney<br />East Bay Logistics & Customs Law</h1>
          <p className="hero-subtitle">
            Expert customs and import compliance for Newark's distribution economy. I-880/SR-84 corridor logistics support, tariff optimization, and CBP defense for Tri-Valley businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Import Compliance Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Newark Businesses Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Newark's Distribution Economy
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Newark's strategic location at the <strong>I-880/SR-84 interchange</strong> makes it a critical logistics hub for East Bay distribution. With extensive <strong>warehouse districts, distribution centers, and freight networks</strong> connecting to Port of Oakland and Central Valley, Newark businesses face complex <strong>customs regulations, tariff challenges, and import compliance requirements</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Logistics Corridor Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                As your Newark trade attorney, we understand <strong>I-880/SR-84 freight corridors, Port of Oakland logistics, and Tri-Valley distribution networks</strong>. We provide customs compliance support for warehouse operations, 3PL providers, and importers using Newark distribution centers.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tariff Optimization Strategies</h3>
              <p className="text-text-secondary leading-relaxed">
                We specialize in <strong>Section 301 tariff mitigation, First Sale for Export valuation, and USMCA qualification</strong>. Our strategies save Newark importers hundreds of thousands annually through compliant duty reduction and free trade agreement utilization.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Prior Disclosure Practice</h3>
              <p className="text-text-secondary leading-relaxed">
                When you discover customs violations—classification errors, valuation issues, or FTA preference mistakes—we file <strong>Prior Disclosures to reduce CBP penalties by 50-75%</strong>. We've saved Newark importers millions in penalty mitigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Newark Importers */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance for Newark Distribution Companies
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Compliance for Distribution Centers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Newark's <strong>massive distribution centers</strong> handle thousands of SKUs imported through Port of Oakland and other entry points. We provide comprehensive <strong>HTS classification programs, customs valuation reviews, and compliance audits</strong> to ensure your imports meet CBP requirements. Wrong classifications cost Newark importers millions annually in overpaid duties and penalties.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>HTS Classification Audits:</strong> Review entire product catalogs for accuracy</li>
                <li><strong>Customs Valuation:</strong> Transaction value, assists, royalties, related-party compliance</li>
                <li><strong>Recordkeeping Compliance:</strong> 5-year CBP record retention requirements</li>
                <li><strong>Reasonable Care Standards:</strong> Implement CBP's Informed Compliance standards</li>
                <li><strong>Internal Audit Programs:</strong> Proactive compliance reviews to prevent violations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Mitigation & China Import Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Section 301 tariffs</strong> on Chinese imports add 7.5%-25% duties on thousands of product categories. For Newark distribution companies importing from China, these tariffs represent massive costs. We provide <strong>product engineering strategies, supply chain restructuring, and tariff classification optimization</strong> to legally minimize Section 301 exposure.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 List analysis (Lists 1-4A coverage determination)</li>
                <li>Product engineering to shift HTS classification</li>
                <li>Supply chain diversification (Vietnam, Mexico, other origins)</li>
                <li>Substantial transformation analysis for country of origin shifts</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA Qualification & Free Trade Agreement Utilization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The <strong>USMCA (United States-Mexico-Canada Agreement)</strong> allows duty-free treatment for qualifying imports from Mexico and Canada. Many Newark importers overlook USMCA benefits, paying unnecessary duties on qualifying goods. We determine origin qualification, prepare certifications of origin, and implement <strong>compliant claiming procedures</strong> that save 2-25% in duty costs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>USMCA Origin Analysis:</strong> Determine qualification under product-specific rules</li>
                <li><strong>Regional Value Content (RVC):</strong> Calculate domestic content requirements</li>
                <li><strong>Certification of Origin:</strong> Prepare USMCA preference certificates</li>
                <li><strong>CBP Verification Response:</strong> Defend origin claims in CBP audits</li>
                <li><strong>Other FTAs:</strong> Chile, Peru, Korea, CAFTA-DR optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">First Sale for Export Valuation Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Newark importers using <strong>multi-tiered supply chains</strong> (factory → trading company → U.S. importer) can dramatically reduce duties through <strong>First Sale for Export</strong> valuation. Instead of valuing goods at the final sale price, CBP allows valuation at the first sale price between factory and middleman. We structure compliant First Sale programs that reduce duties by 20-40%.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>First Sale eligibility analysis and documentation</li>
                <li>Multi-tier supply chain restructuring</li>
                <li>Transfer pricing compliance coordination</li>
                <li>CBP ruling requests for certainty (HQ rulings)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Prior Disclosures & CBP Penalty Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you discover customs violations during internal audits—<strong>incorrect classifications, undervaluation, or false preference claims</strong>—immediate action is critical. A properly filed <strong>Prior Disclosure under 19 USC §1592(c)(4)</strong> can reduce penalties by 50-75%. We prepare comprehensive Prior Disclosures, calculate duty owed, and negotiate settlements with CBP.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Prior Disclosure Preparation:</strong> File within required timeframes</li>
                <li><strong>Internal Compliance Audits:</strong> Discover issues before CBP does</li>
                <li><strong>Penalty Negotiation:</strong> Minimize financial exposure</li>
                <li><strong>Court of International Trade:</strong> Litigate if necessary</li>
                <li><strong>Mitigation Success:</strong> Average penalty reduction $150,000+</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">3PL & Warehouse Compliance Programs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Newark's <strong>third-party logistics providers (3PLs)</strong> and warehouse operators must comply with customs bonding, cargo security, and recordkeeping requirements. We design compliance programs for 3PLs handling imported merchandise, including <strong>Foreign Trade Zone (FTZ) operations, bonded warehouse procedures, and import compliance training</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Foreign Trade Zone (FTZ) activation and operations</li>
                <li>Bonded warehouse compliance (CBP Form 301)</li>
                <li>Cargo security and C-TPAT certification</li>
                <li>Employee training for warehouse compliance teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Newark Companies Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Newark Distribution Companies Trust Our Firm
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Multi-Million Dollar Penalty Savings</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our Prior Disclosure practice has saved Newark importers <strong>millions in CBP penalties</strong>. Through strategic disclosure filings and settlement negotiations, we routinely reduce penalties by 50-75%. One Newark importer faced $800,000 in potential penalties—we negotiated settlement for $125,000.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Logistics Corridor Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>I-880/SR-84 freight logistics, Port of Oakland access, and Tri-Valley distribution networks</strong>. We've worked with Newark distribution centers ranging from 100,000 to 1 million+ square feet. We know the operational realities of high-volume import operations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Flat-Fee Pricing for Predictability</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee packages</strong> for HTS classifications, USMCA qualifications, Prior Disclosures, and compliance program design. Transparent pricing with no surprise bills. Typical HTS classification: $500-$1,500. Prior Disclosure: $5,000-$15,000.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fast Response for Time-Sensitive Issues</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                When CBP issues a <strong>Notice of Action, CF 28, or CF 29</strong>, response deadlines are tight. We respond within 24-48 hours, coordinate with customs brokers and port authorities, and expedite resolution to minimize cargo delays and detention costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Newark Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Logistics & Distribution</h3>
              <p className="text-sm text-text-secondary">3PLs, warehousing, fulfillment centers, freight forwarders</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">E-commerce & Retail</h3>
              <p className="text-sm text-text-secondary">Online retailers, fulfillment operations, direct importers</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Consumer Goods Importers</h3>
              <p className="text-sm text-text-secondary">Furniture, home goods, apparel, electronics distribution</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Automotive Parts</h3>
              <p className="text-sm text-text-secondary">Aftermarket parts, OEM components, USMCA compliance</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Building Materials</h3>
              <p className="text-sm text-text-secondary">Construction supplies, hardware, trade remedy duties</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Electronics & Technology</h3>
              <p className="text-sm text-text-secondary">Consumer electronics, IT equipment, semiconductor distribution</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Food & Beverage</h3>
              <p className="text-sm text-text-secondary">Specialty foods, organic products, FDA-regulated imports</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Apparel & Textiles</h3>
              <p className="text-sm text-text-secondary">Fashion, athletic wear, Section 301 compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Newark Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Newark's logistics infrastructure, I-880/SR-84 freight corridors, and Tri-Valley business environment. We serve clients by appointment throughout the East Bay region.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Freight Corridors */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Newark Freight Corridors & Transportation</h3>
              <p className="text-text-secondary mb-4">Critical transportation routes for Newark distribution operations:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-580</span>
                  <span>Primary east-west corridor connecting Newark to Port of Oakland and I-5</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-680</span>
                  <span>North-south corridor linking Newark to Bay Area and Central Valley</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-880/SR-84 Interchange</span>
                  <span>Critical junction making Newark ideal for distribution operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Newark Blvd</span>
                  <span>Major commercial corridor with warehouse and distribution facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-880</span>
                  <span>Access to Port of Oakland via I-580 west — 30 minutes to port terminals</span>
                </li>
              </ul>
            </div>

            {/* Distribution Districts */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Newark Distribution & Industrial Areas</h3>
              <p className="text-text-secondary mb-4">Key logistics and warehouse districts:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Hacienda Crossings</span>
                  <span>Major distribution park with Class A warehouse facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Newark Corporate Center</span>
                  <span>Commercial and logistics hub near I-880/SR-84 interchange</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Iron Horse Industrial</span>
                  <span>Warehouse and distribution facilities along I-580 corridor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Newark Ranch</span>
                  <span>Mixed-use development with logistics and commercial space</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Logistics Infrastructure */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tri-Valley Logistics Infrastructure</h3>
              <p className="text-text-secondary mb-4">Regional trade facilities serving Newark businesses:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Port of Oakland</span>
                  <span>30 minutes west via I-580 — primary container import/export gateway</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Oakland Airport (OAK)</span>
                  <span>25 minutes west — air cargo terminal for time-sensitive shipments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Tracy Distribution</span>
                  <span>30 minutes east — Central Valley logistics hub via I-580</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">BNSF/UP Rail</span>
                  <span>Rail access to national distribution networks via Oakland</span>
                </li>
              </ul>
            </div>

            {/* Local Contact Info */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Serving Newark & Tri-Valley Region</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout the East Bay:</p>
              <div className="grid grid-cols-2 gap-2 text-sm text-text-secondary mb-4">
                <span>Newark</span>
                <span>Pleasanton</span>
                <span>Livermore</span>
                <span>San Ramon</span>
                <span>Danville</span>
                <span>Fremont</span>
                <span>Hayward</span>
                <span>Oakland</span>
              </div>
              <p className="text-sm text-text-secondary mt-4">
                <strong>Headquarters:</strong> 27001 Agoura Road, Suite 350, Calabasas, CA 91301<br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:info@tradecompliance.law" className="text-secondary-teal hover:underline">info@tradecompliance.law</a>
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
                      <p className="service-link__description">HTS classification, valuation, FTAs</p>
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
                      <span className="service-link__title">Prior Disclosures</span>
                      <p className="service-link__description">Penalty reduction, CBP defense</p>
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
                      <span className="service-link__title">Tariff Engineering</span>
                      <p className="service-link__description">Section 301 mitigation</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Industry Expertise</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/technology-electronics-trade-attorney" className="service-link">
                      <span className="service-link__title">Technology & Electronics</span>
                      <p className="service-link__description">Consumer electronics imports</p>
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
                      <p className="service-link__description">Fashion, athletic wear imports</p>
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
                    <Link to="/food-agriculture-trade-attorney" className="service-link">
                      <span className="service-link__title">Food & Beverage</span>
                      <p className="service-link__description">Specialty foods, FDA compliance</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other Bay Area Locations</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/bay-area-trade-law-attorney" className="service-link">
                      <span className="service-link__title">San Francisco & Bay Area</span>
                      <p className="service-link__description">Port of Oakland customs law</p>
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
                    <Link to="/los-angeles-port-customs-attorney" className="service-link">
                      <span className="service-link__title">Los Angeles & Long Beach</span>
                      <p className="service-link__description">Nation's busiest port complex</p>
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
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful Guides for Importers</h3>
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
              <a href="#article/section-301-tariffs" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Section 301</h4>
                <p className="text-sm text-text-secondary">China tariff mitigation</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#article/usmca-compliance" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">USMCA</h4>
                <p className="text-sm text-text-secondary">Free trade qualification</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <Link to="/ecommerce-digital-trade-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">E-commerce</h4>
                <p className="text-sm text-text-secondary">Online import compliance</p>
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
            Optimize Your Import Operations
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let customs penalties or tariff costs erode your margins. Contact our Newark trade attorney team for expert import compliance and duty optimization strategies.
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

export default NewarkTradeAttorneyPage;
