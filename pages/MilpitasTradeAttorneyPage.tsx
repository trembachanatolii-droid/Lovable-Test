import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const MilpitasTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Milpitas Trade Attorney | Silicon Valley Distribution & Logistics CA',
    description: 'Milpitas trade attorney for distribution centers and tech importers. Customs compliance, I-880 logistics, semiconductor imports. Bay Area. (310) 744-1328.',
    canonical: 'milpitas-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-milpitas.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Milpitas Trade Attorney - Silicon Valley Import & Distribution Lawyer',
        description: 'Serving Milpitas with expert trade compliance, customs legal services, and import defense for distribution centers and technology manufacturers.',
        url: `${siteConfig.siteUrl}/milpitas-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Local Offices', url: `${siteConfig.siteUrl}/local-offices` },
        { name: 'Milpitas', url: `${siteConfig.siteUrl}/milpitas-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Milpitas Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance and customs legal representation for Milpitas distribution centers and technology importers. Expert Milpitas trade attorney services including customs compliance, HTS classification, semiconductor import regulations, Section 301 tariff mitigation, Prior Disclosures, and CBP defense for Silicon Valley logistics operations.',
        serviceType: 'Technology Logistics Trade Law',
        url: `${siteConfig.siteUrl}/milpitas-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="Milpitas Trade Law Hero">
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
          <h1>Milpitas Trade Attorney<br />Silicon Valley Logistics & Customs Law</h1>
          <p className="hero-subtitle">
            Expert customs and technology import compliance for Milpitas distribution economy. I-880 corridor logistics support, semiconductor imports, and CBP defense for Bay Area tech operations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Tech Import Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Milpitas Businesses Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Milpitas Technology Distribution
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Milpitas is <strong>Silicon Valley's logistics backbone</strong>, with massive distribution centers serving Apple, Cisco, Western Digital, and hundreds of tech companies. Located along the <strong>I-880/I-680 corridor</strong> with direct access to Port of Oakland, Milpitas handles billions in technology imports annually. These operations face complex <strong>customs regulations, semiconductor import controls, Section 301 tariffs, and CBP enforcement</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Technology Import Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                As your Milpitas trade attorney, we specialize in <strong>consumer electronics, semiconductors, computer components, and networking equipment imports</strong>. We understand HTS classification for tech products, customs valuation for high-value shipments, and transfer pricing compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Distribution Center Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Milpitas <strong>mega-distribution centers</strong> handle thousands of tech SKUs daily. We design customs compliance programs for high-volume operations, implement automated classification systems, and provide 24-hour CBP emergency response for cargo holds.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tariff Engineering & Duty Savings</h3>
              <p className="text-text-secondary leading-relaxed">
                We've saved Milpitas importers <strong>millions through Section 301 tariff mitigation, First Sale for Export valuation, and USMCA qualification</strong>. Strategic product classification changes and supply chain restructuring deliver measurable ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance for Milpitas Technology Logistics
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Technology Product HTS Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Milpitas distribution centers import <strong>consumer electronics, semiconductors, storage devices, networking equipment, and computer components</strong>. Accurate HTS classification is critical—wrong codes result in overpaid duties, CBP penalties, and supply chain delays. We provide comprehensive classification services for tech products under HTS Chapters 84, 85, and 90.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Semiconductors:</strong> HTS 8542 (integrated circuits, memory chips, processors)</li>
                <li><strong>Storage Devices:</strong> HTS 8471.70 (HDDs, SSDs, NAS systems)</li>
                <li><strong>Networking Equipment:</strong> HTS 8517 (routers, switches, modems, 5G equipment)</li>
                <li><strong>Consumer Electronics:</strong> HTS 8517.13 (smartphones), 8471.30 (tablets), 8471.49 (laptops)</li>
                <li><strong>Electronic Components:</strong> HTS 8504 (power supplies), 8541 (LEDs), 8536 (connectors)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Semiconductor Import Compliance & Export Controls</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Milpitas companies importing <strong>advanced semiconductors from Taiwan, Korea, and other sources</strong> face both customs duties and potential re-export restrictions. Many chips are subject to <strong>EAR (Export Administration Regulations)</strong> even after importation. We advise on customs compliance, export control obligations for re-exports, and Entity List screening for semiconductor distribution.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Customs classification for processors, memory, ASICs, FPGAs</li>
                <li>EAR classification for re-export compliance (ECCN 3A001, 3A991)</li>
                <li>Entity List screening for semiconductor customers</li>
                <li>China export restrictions on advanced computing chips</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Mitigation for Tech Products</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Section 301 tariffs</strong> add 7.5%-25% duties on thousands of Chinese tech products. For Milpitas distribution centers importing from China, these tariffs represent massive costs. We provide <strong>product engineering strategies, supply chain diversification, and tariff classification optimization</strong> to legally minimize Section 301 exposure without compromising product specifications.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 List analysis (Lists 1-4A coverage for tech products)</li>
                <li>Product engineering to shift HTS classification</li>
                <li>Supply chain restructuring (Vietnam, Taiwan, Mexico sourcing)</li>
                <li>Substantial transformation analysis for country of origin shifts</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Valuation & Transfer Pricing Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Milpitas importers frequently use <strong>related-party transactions</strong> (imports from foreign affiliates or contract manufacturers). CBP scrutinizes related-party pricing to ensure proper customs valuation. We conduct <strong>transaction value analyses, document assists and royalties, and implement First Sale for Export strategies</strong> that comply with CBP regulations while minimizing duty liability.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Related-Party Transactions:</strong> Document "circumstances of sale" test</li>
                <li><strong>First Sale for Export:</strong> Multi-tier supply chain valuation strategies</li>
                <li><strong>Assists & Royalties:</strong> Identify dutiable assists (tooling, molds, engineering)</li>
                <li><strong>Transfer Pricing Coordination:</strong> Align customs and tax strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Prior Disclosures & CBP Penalty Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                High-volume tech importers inevitably discover classification errors, valuation issues, or other customs violations during internal audits. When discovered, a <strong>Prior Disclosure under 19 USC §1592(c)(4)</strong> can reduce CBP penalties by 50-75%. We prepare comprehensive Prior Disclosures, calculate duties owed, conduct root cause analysis, and negotiate favorable settlements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Prior Disclosure Filing:</strong> Prepared and filed within CBP timeframes</li>
                <li><strong>Internal Compliance Audits:</strong> Proactive issue discovery</li>
                <li><strong>Penalty Mitigation:</strong> Average reduction $150,000-$500,000+</li>
                <li><strong>Corrective Action Plans:</strong> Prevent future violations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Automated Compliance Systems for High-Volume Operations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Milpitas distribution centers processing <strong>thousands of shipments monthly</strong> need automated compliance systems. We design and implement <strong>product classification databases, automated duty calculation tools, and restricted party screening workflows</strong> integrated with warehouse management and ERP systems. Automation reduces manual errors and ensures scalable compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Product classification database (SKU-level HTS mapping)</li>
                <li>Automated duty calculation and landed cost modeling</li>
                <li>Integration with WMS, ERP, and broker systems</li>
                <li>Annual compliance training for operations teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Companies Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Milpitas Tech Companies Trust Our Firm
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Silicon Valley Tech Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>technology products, supply chains, and business models</strong>. We've classified thousands of tech SKUs including processors, storage devices, networking equipment, consumer electronics, and semiconductor components. We speak your language.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Multi-Million Dollar Duty Savings</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our tariff engineering and valuation strategies have saved Milpitas clients <strong>$5M+ in annual duty costs</strong>. Through Section 301 mitigation, First Sale for Export, and strategic HTS optimization, we deliver measurable ROI on legal investment.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">24-Hour CBP Emergency Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                When CBP holds high-value tech cargo at Port of Oakland, <strong>every hour costs thousands in demurrage and lost sales</strong>. We respond to customs emergencies within 24 hours, coordinate with CBP officers, and expedite cargo release.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Scalable Compliance for Growth</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We design <strong>scalable compliance programs</strong> that grow with your distribution operations. From startup importers to Fortune 500 logistics centers, our systems handle increasing volume without proportional compliance cost increases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Milpitas Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Consumer Electronics</h3>
              <p className="text-sm text-text-secondary">Smartphones, tablets, wearables, smart home devices</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Semiconductors</h3>
              <p className="text-sm text-text-secondary">Memory chips, processors, ASICs, discrete components</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Storage & Data Center</h3>
              <p className="text-sm text-text-secondary">HDDs, SSDs, NAS systems, server components</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Networking Equipment</h3>
              <p className="text-sm text-text-secondary">Routers, switches, 5G equipment, telecom infrastructure</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Computer Components</h3>
              <p className="text-sm text-text-secondary">Motherboards, graphics cards, power supplies, peripherals</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Distribution & Logistics</h3>
              <p className="text-sm text-text-secondary">3PLs, fulfillment centers, warehouse operations</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Contract Manufacturing</h3>
              <p className="text-sm text-text-secondary">Electronics assembly, testing, import/export operations</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">E-commerce & Retail</h3>
              <p className="text-sm text-text-secondary">Online retailers, direct importers, marketplace sellers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Milpitas Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Milpitas logistics infrastructure, I-880 corridor operations, and Silicon Valley tech distribution. We serve clients by appointment throughout Santa Clara County.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Milpitas Freight Corridors & Port Access</h3>
              <p className="text-text-secondary mb-4">Critical transportation routes for distribution operations:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-880</span>
                  <span>Nimitz Freeway — primary Port of Oakland access (25 minutes north)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-680</span>
                  <span>North-south corridor connecting to I-580 and Central Valley</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SR-237</span>
                  <span>East-west connector to US-101 and Peninsula tech campuses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Montague Expwy</span>
                  <span>Major commercial corridor through Milpitas distribution district</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">San Jose Airport (SJC)</span>
                  <span>10 minutes south — air cargo for semiconductor and electronics</span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Milpitas Distribution Districts</h3>
              <p className="text-text-secondary mb-4">Key logistics and warehouse areas:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">McCarthy Ranch</span>
                  <span>Major distribution park with Class A logistics facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Montague/880 Corridor</span>
                  <span>Primary warehouse district — tech fulfillment centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Milpitas Industrial</span>
                  <span>Electronics manufacturing, testing facilities, component warehousing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Great Mall Area</span>
                  <span>Commercial district with tech company offices and logistics support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tech Company Operations in Milpitas</h3>
              <p className="text-text-secondary mb-4">Major tech operations and facilities:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Apple Distribution</span>
                  <span>Major fulfillment operations for Apple products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Cisco Operations</span>
                  <span>Networking equipment distribution and logistics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Western Digital</span>
                  <span>Storage device headquarters and distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">3PL Mega-Centers</span>
                  <span>Multiple million+ sq ft distribution facilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Serving Milpitas & Silicon Valley</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout the region:</p>
              <div className="grid grid-cols-2 gap-2 text-sm text-text-secondary mb-4">
                <span>Milpitas</span>
                <span>San Jose</span>
                <span>Fremont</span>
                <span>Santa Clara</span>
                <span>Sunnyvale</span>
                <span>Newark</span>
                <span>Union City</span>
                <span>Hayward</span>
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

      {/* Related Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services for Tech Importers</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/practice-areas" className="service-link">
                      <span className="service-link__title">Customs Compliance</span>
                      <p className="service-link__description">HTS classification, valuation</p>
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
                      <span className="service-link__title">Prior Disclosures</span>
                      <p className="service-link__description">Penalty reduction strategies</p>
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
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Industry Expertise</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/industries/technology-electronics" className="service-link">
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
                    <Link to="/industries/technology-electronics" className="service-link">
                      <span className="service-link__title">Semiconductors</span>
                      <p className="service-link__description">Chip import compliance</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other Bay Area Locations</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/bay-area-trade-law-attorney" className="service-link">
                      <span className="service-link__title">San Francisco & Bay Area</span>
                      <p className="service-link__description">Silicon Valley trade law</p>
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
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful Guides for Tech Importers</h3>
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
              <a href="#article/hts-classification-tech" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">HTS Classification</h4>
                <p className="text-sm text-text-secondary">Tech product classification</p>
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
            Optimize Your Tech Supply Chain Compliance
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let customs penalties or tariff costs impact your bottom line. Contact our Milpitas trade attorney team for expert technology import compliance and duty optimization.
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

export default MilpitasTradeAttorneyPage;
