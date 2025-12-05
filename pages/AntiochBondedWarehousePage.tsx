import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { Link } from 'react-router-dom';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const AntiochBondedWarehousePage: React.FC = () => {
  useMeta({
    title: 'Antioch Bonded Warehouse Attorney | East Bay Customs Facility Lawyer CA',
    description: 'Antioch bonded warehouse attorney serving East Contra Costa County. CBP bonded facility licensing, duty deferral, Port of Stockton compliance. (310) 744-1328.',
    keywords: 'bonded warehouse attorney antioch, bonded warehouse lawyer antioch, customs bonded warehouse antioch, ftz attorney antioch, duty deferral antioch, east bay bonded warehouse, antioch customs facility, bonded storage attorney',
    canonical: 'antioch-bonded-warehouse',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-antioch.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Antioch Bonded Warehouse Attorney - East Contra Costa Customs Compliance',
        description: 'Antioch bonded warehouse attorney providing expert legal representation for establishing and operating CBP bonded warehouses, FTZ facilities, and duty deferral programs in East Contra Costa County.',
        url: `${siteConfig.siteUrl}/antioch-bonded-warehouse`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Antioch Bonded Warehouse Attorney', url: `${siteConfig.siteUrl}/antioch-bonded-warehouse` }
      ]),
      generateFAQSchema([
        {
          question: 'Why establish a bonded warehouse in Antioch, California?',
          answer: 'Antioch offers strategic advantages for bonded warehouse operations: SR-4 corridor location providing access to Port of Oakland and Port of Stockton, lower real estate and operating costs than core Bay Area, proximity to East Contra Costa industrial zones, and excellent distribution access to Northern California markets. Bonded warehouses allow duty deferral, improving cash flow by postponing customs duty payments until goods are withdrawn for consumption.',
        },
        {
          question: 'How does an Antioch bonded warehouse attorney help with CBP licensing?',
          answer: 'Our Antioch bonded warehouse attorney manages the complete CBP application process including: facility qualification and site assessment, CBP Form 3173 application preparation, bond calculation and procurement, security and recordkeeping system design, CBP inspection coordination, and ongoing compliance support. We handle both Class 11 public bonded warehouses and Class 9 private bonded warehouses for East Contra Costa County businesses.',
        },
        {
          question: 'Can Antioch bonded warehouses serve Port of Oakland and Port of Stockton importers?',
          answer: 'Yes, Antioch\'s strategic location on SR-4 provides access to both Port of Oakland (via I-80) and Port of Stockton (via SR-4/I-5). This dual-port accessibility makes Antioch ideal for bonded warehouse operations serving Northern California importers. Goods can be transported from either port to your Antioch bonded facility for duty-deferred storage, manipulation, and distribution throughout the region.',
        },
        {
          question: 'What are the cash flow benefits of an Antioch bonded warehouse?',
          answer: 'Operating a bonded warehouse in Antioch provides significant cash flow advantages: defer duty payments until goods are withdrawn for consumption (up to 5 years), pay no duties on goods re-exported from the bonded warehouse, make partial withdrawals and pay duty only on released quantities, manipulate or relabel goods under CBP supervision without duty payment, and lower inventory carrying costs compared to immediate duty payment upon import.',
        },
        {
          question: 'Do you handle bonded warehouse compliance and audits in Antioch?',
          answer: 'Yes, our Antioch bonded warehouse attorney provides comprehensive compliance support including: annual CBP audit preparation and defense, inventory reconciliation and discrepancy resolution, recordkeeping system reviews under 19 CFR Part 19, shortage investigation defense, bond sufficiency assessments, proprietor liability mitigation, and representation in CBP enforcement proceedings. We help maintain your facility\'s compliance and good standing with CBP.',
        },
      ]),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="Antioch Bonded Warehouse Attorney Hero">
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
          <h1>Antioch Bonded Warehouse Attorney<br />East Contra Costa Customs Compliance</h1>
          <p className="hero-subtitle">
            Expert bonded warehouse legal services for Antioch and East Contra Costa County. CBP facility establishment, duty deferral strategies, and Port of Oakland/Stockton customs compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Antioch for Bonded Warehouse */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Antioch Bonded Warehouse Legal Services
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Antioch and East Contra Costa County with expert bonded warehouse establishment and compliance. Our firm provides <strong>comprehensive legal support for CBP-bonded facilities</strong> with strategic dual-port access to Oakland and Stockton.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Dual Port Access</h3>
              <p className="text-text-secondary leading-relaxed">
                SR-4 corridor location provides <strong>access to Port of Oakland and Port of Stockton</strong>. Strategic advantage for Northern California distribution networks.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Lower Operating Costs</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>35-50% lower costs than Oakland/San Francisco</strong> bonded warehouse facilities. Maximize profitability with duty deferral and reduced overhead.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Expert CBP Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Complete support for <strong>bonded warehouse applications, audits, and compliance</strong>. Protect your facility's operating privileges and bond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonded Warehouse Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Bonded Warehouse Legal Services in Antioch
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Bonded Warehouse Establishment & Application</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our Antioch bonded warehouse attorney handles the complete CBP application process for establishing bonded storage facilities. We prepare applications for <strong>Class 11 public bonded warehouses</strong> and <strong>Class 9 private bonded warehouses</strong>, ensuring your East Contra Costa facility meets all CBP security, recordkeeping, and operational requirements under 19 CFR Part 19.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP Form 3173 bonded warehouse application preparation and filing</li>
                <li>Facility qualification assessment and compliance evaluation</li>
                <li>Bonded warehouse bond calculation and surety procurement</li>
                <li>Security system design and CBP approval process</li>
                <li>Inventory control and recordkeeping system implementation</li>
                <li>CBP field office coordination and facility inspection support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign Trade Zone (FTZ) Applications</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Foreign Trade Zones offer enhanced benefits beyond bonded warehouses, including <strong>inverted tariff relief, manufacturing capabilities, and zone-to-zone transfers</strong>. Our Antioch FTZ attorney handles FTZ grantee applications, subzone designations, CBP activation, and ongoing FTZ compliance for East Contra Costa manufacturers and value-added operations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FTZ grantee and subzone application preparation</li>
                <li>Foreign Trade Zone Board petition and approval</li>
                <li>CBP FTZ activation and operations manual development</li>
                <li>Weekly entry vs. direct delivery election strategies</li>
                <li>Inverted tariff benefit analysis and maximization</li>
                <li>Zone-to-zone transfer procedures and compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Duty Deferral & Cash Flow Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Bonded warehouses enable <strong>duty deferral until goods are withdrawn for consumption</strong>, significantly improving cash flow for Antioch importers. We structure bonded warehouse operations to maximize duty savings, including re-export without duty payment and manipulation/manufacturing under CBP supervision.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Duty deferral program design and financial modeling</li>
                <li>Bonded warehouse withdrawal strategies (consumption, export, T&E)</li>
                <li>Re-export procedures to eliminate duty obligations</li>
                <li>Manipulation, assembly, and relabeling under bond</li>
                <li>Partial withdrawal and piecemeal distribution planning</li>
                <li>Comparative analysis: drawback vs. bonded warehouse vs. FTZ</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Port of Oakland & Port of Stockton Coordination</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Antioch's location provides strategic access to both Port of Oakland and Port of Stockton. We coordinate <strong>immediate transportation (IT) bonds, warehouse entry procedures, and CBP coordination</strong> for seamless movement of goods from port to your bonded warehouse without duty payment.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Immediate Transportation (IT) bond procedures</li>
                <li>Transportation and Exportation (T&E) entry preparation</li>
                <li>In-bond movement from Port of Oakland/Stockton to Antioch</li>
                <li>CBP Form 7512 processing and tracking</li>
                <li>Bonded carrier compliance and monitoring</li>
                <li>Multi-port bonded warehouse operations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Bonded Warehouse Compliance & Audits</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP conducts regular audits of bonded warehouses to ensure compliance with inventory, security, and recordkeeping requirements. Our Antioch bonded warehouse attorney represents proprietors during <strong>CBP annual audits, inventory verification, and shortage investigations</strong>, helping maintain compliant operations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Annual CBP bonded warehouse audit preparation and defense</li>
                <li>Inventory reconciliation and discrepancy resolution</li>
                <li>Recordkeeping compliance reviews (19 CFR Part 19)</li>
                <li>Shortage/overage investigation and penalty mitigation</li>
                <li>Warehouse bond sufficiency analysis and adjustments</li>
                <li>Proprietor liability defense and prior disclosures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Bonded Warehouse Violations & Penalty Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP alleges bonded warehouse violations—unauthorized withdrawals, inventory shortages, recordkeeping failures—penalties can include bond claims and facility revocation. Our firm defends Antioch warehouse operators against <strong>19 USC § 1592 penalty actions and CBP enforcement proceedings</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Unauthorized withdrawal defense (19 CFR § 144.36)</li>
                <li>Inventory shortage penalty mitigation and settlement</li>
                <li>Prior disclosure filings to cap proprietor liability</li>
                <li>Bond claim defense and surety negotiations</li>
                <li>Warehouse license revocation prevention and appeals</li>
                <li>CBP administrative penalty proceedings and litigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Antioch Bonded Warehouse */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Antioch for Your Bonded Warehouse
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Strategic East Bay Location</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Antioch's SR-4 corridor location provides exceptional distribution access:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Port of Oakland:</strong> 40-45 minutes via SR-4 to I-80 West</li>
                <li><strong>Port of Stockton:</strong> 35-40 minutes via SR-4 East to I-5</li>
                <li><strong>East Contra Costa:</strong> Central hub for Pittsburg, Brentwood, Oakley</li>
                <li><strong>Sacramento:</strong> 60 minutes via SR-4 East to I-80</li>
                <li><strong>Lower costs:</strong> 35-50% lower operating costs vs. Oakland/SF</li>
                <li><strong>Industrial capacity:</strong> Large-scale warehouse facilities available</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bonded Warehouse Financial Benefits</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Operating a bonded warehouse in Antioch provides significant advantages:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Duty deferral:</strong> Pay duties only when goods enter U.S. commerce</li>
                <li><strong>No duty on re-exports:</strong> Eliminate duty costs for exported goods</li>
                <li><strong>Improved cash flow:</strong> Defer duty payments up to 5 years</li>
                <li><strong>Partial withdrawals:</strong> Pay duty only on quantities released</li>
                <li><strong>Manipulation privileges:</strong> Relabel, sort, repair, assemble under bond</li>
                <li><strong>Competitive advantage:</strong> Lower inventory carrying costs</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Industries We Serve from Antioch</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Manufacturing & Industrial</h4>
                <p className="text-neutral-200 text-sm">
                  Bonded storage for components, automotive parts, machinery, and industrial equipment with duty deferral until assembly or distribution.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Distribution & E-Commerce</h4>
                <p className="text-neutral-200 text-sm">
                  Bonded warehouse fulfillment for online retailers and distributors, paying duty only upon customer purchase and withdrawal.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Food & Consumer Goods</h4>
                <p className="text-neutral-200 text-sm">
                  Duty-deferred storage for imported food products, beverages, consumer goods, and retail merchandise awaiting distribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Customs & Trade Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Customs Compliance</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense & Litigation</span>
                    <p className="service-link__description">CBP audits, seizures, penalty defense</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: '50%', transform: 'translateY(-50%)', transition: 'right 0.3s ease', color: '#3FBB94' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Trade Compliance Programs</span>
                    <p className="service-link__description">Import compliance development</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: '50%', transform: 'translateY(-50%)', transition: 'right 0.3s ease', color: '#3FBB94' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">Tariff Classification</span>
                    <p className="service-link__description">HTS code optimization</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: '50%', transform: 'translateY(-50%)', transition: 'right 0.3s ease', color: '#3FBB94' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Port Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/oakland-port-customs-attorney" className="service-link">
                    <span className="service-link__title">Port of Oakland Customs</span>
                    <p className="service-link__description">Oakland port expertise</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: '50%', transform: 'translateY(-50%)', transition: 'right 0.3s ease', color: '#3FBB94' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/duty-drawback-refunds" className="service-link">
                    <span className="service-link__title">Duty Drawback Programs</span>
                    <p className="service-link__description">Customs duty refund claims</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: '50%', transform: 'translateY(-50%)', transition: 'right 0.3s ease', color: '#3FBB94' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/bonded-warehouse-guide" className="service-link">
                    <span className="service-link__title">Bonded Warehouse Guide</span>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: '50%', transform: 'translateY(-50%)', transition: 'right 0.3s ease', color: '#3FBB94' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/ftz-guide" className="service-link">
                    <span className="service-link__title">FTZ Establishment Guide</span>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: '50%', transform: 'translateY(-50%)', transition: 'right 0.3s ease', color: '#3FBB94' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/trade-law-faq" className="service-link">
                    <span className="service-link__title">FAQ Center</span>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: '50%', transform: 'translateY(-50%)', transition: 'right 0.3s ease', color: '#3FBB94' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related City Pages */}
      <RelatedCityPages currentCity="Antioch" region="bay-area" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Establish Your Antioch Bonded Warehouse
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Antioch bonded warehouse attorney today for a free consultation. We'll evaluate your bonded warehouse needs, explain CBP requirements, and provide a clear roadmap to establishing your East Contra Costa customs facility.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">
              Schedule Free Consultation
            </Button>
            <Button href={siteConfig.phoneTel} variant="outline">
              Call {siteConfig.phoneDisplay}
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

export default AntiochBondedWarehousePage;
