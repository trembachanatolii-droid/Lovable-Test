import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { Link } from 'react-router-dom';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanLeandroBondedWarehousePage: React.FC = () => {
  useMeta({
    title: 'San Leandro Bonded Warehouse Attorney | Alameda County FTZ Lawyer CA',
    description: 'San Leandro bonded warehouse attorney serving Alameda County. CBP bonded facility licensing, Port of Oakland customs, duty deferral strategies. (310) 744-1328.',
    keywords: 'bonded warehouse attorney san leandro, bonded warehouse lawyer san leandro, ftz attorney san leandro, customs bonded warehouse san leandro, alameda county bonded warehouse, san leandro customs facility, port of oakland bonded warehouse, bonded storage attorney',
    canonical: 'san-leandro-bonded-warehouse',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-san-leandro.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'San Leandro Bonded Warehouse Attorney - Alameda County Customs Compliance',
        description: 'San Leandro bonded warehouse attorney providing expert legal services for CBP bonded warehouse establishment, Port of Oakland customs compliance, and duty deferral programs in Alameda County.',
        url: `${siteConfig.siteUrl}/san-leandro-bonded-warehouse`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'San Leandro Bonded Warehouse Attorney', url: `${siteConfig.siteUrl}/san-leandro-bonded-warehouse` }
      ]),
      generateFAQSchema([
        {
          question: 'Why establish a bonded warehouse in San Leandro, California?',
          answer: 'San Leandro offers strategic advantages for bonded warehouse operations: immediate proximity to Port of Oakland (10-15 minutes), I-880 and I-580 corridor distribution access, lower operating costs than Oakland/San Francisco, established industrial and logistics infrastructure, and central East Bay location for Northern California distribution. Bonded warehouses allow duty deferral, improving cash flow by postponing customs duty payments until goods are withdrawn for consumption.',
        },
        {
          question: 'How does a San Leandro bonded warehouse attorney help with CBP licensing?',
          answer: 'Our San Leandro bonded warehouse attorney manages the complete CBP application process including: facility qualification and site assessment, CBP Form 3173 application preparation, bond calculation and surety procurement, security and recordkeeping system design, CBP inspection coordination, and ongoing compliance support. We handle both Class 11 public bonded warehouses and Class 9 private bonded warehouses for Alameda County businesses.',
        },
        {
          question: 'Can San Leandro bonded warehouses serve Port of Oakland importers effectively?',
          answer: 'Yes, San Leandro\'s location provides exceptional access to Port of Oakland—just 10-15 minutes via I-880. This proximity makes San Leandro ideal for bonded warehouse operations serving containerized imports from Asia, Europe, and other global markets. Goods can be rapidly transported from Port of Oakland to your San Leandro bonded facility for duty-deferred storage, distribution, and value-added operations throughout Northern California.',
        },
        {
          question: 'What are the cost advantages of a San Leandro bonded warehouse vs. Oakland?',
          answer: 'San Leandro offers significant cost advantages over Oakland while maintaining port proximity: 25-40% lower real estate and operating costs, similar transportation times to Port of Oakland, excellent I-880/I-580 distribution access to Bay Area and Northern California, available industrial space for large-scale operations, and lower labor costs. Combined with duty deferral benefits, San Leandro bonded warehouses maximize profitability.',
        },
        {
          question: 'Do you provide bonded warehouse compliance and audit defense in San Leandro?',
          answer: 'Yes, our San Leandro bonded warehouse attorney provides comprehensive compliance support including: annual CBP audit preparation and defense, inventory reconciliation and discrepancy resolution, recordkeeping system reviews under 19 CFR Part 19, shortage investigation defense, bond sufficiency assessments, proprietor liability mitigation, and representation in CBP enforcement proceedings. We help maintain your facility\'s good standing with CBP.',
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
      <section className="hero" aria-label="San Leandro Bonded Warehouse Attorney Hero">
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
          <h1>San Leandro Bonded Warehouse Attorney<br />Alameda County Customs Compliance</h1>
          <p className="hero-subtitle">
            Expert bonded warehouse legal services for San Leandro and Alameda County. Port of Oakland customs compliance, CBP facility licensing, and duty deferral strategies for East Bay importers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose San Leandro for Bonded Warehouse */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              San Leandro Bonded Warehouse Legal Services
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving San Leandro and Alameda County with expert bonded warehouse establishment and compliance. Our firm provides <strong>comprehensive legal support for CBP-bonded facilities</strong> with optimal Port of Oakland access and East Bay distribution advantages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Oakland Proximity</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>10-15 minutes to Port of Oakland via I-880</strong>. Rapid cargo movement from port to bonded warehouse for duty-deferred storage and distribution.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost Efficiency</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>25-40% lower costs than Oakland/SF</strong> with equal port access. Maximize profitability with duty deferral and reduced operating expenses.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Distribution Access</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>I-880/I-580 freeway corridor access</strong>. Strategic location for Northern California, Bay Area, and Central Valley distribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonded Warehouse Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Bonded Warehouse Legal Services in San Leandro
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Bonded Warehouse Establishment & CBP Application</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our San Leandro bonded warehouse attorney handles the complete CBP application process for establishing bonded storage facilities. We prepare applications for <strong>Class 11 public bonded warehouses</strong> and <strong>Class 9 private bonded warehouses</strong>, ensuring your Alameda County facility meets all CBP security, recordkeeping, and operational requirements under 19 CFR Part 19.
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
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Port of Oakland Customs Coordination</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                San Leandro's proximity to Port of Oakland provides exceptional advantages for bonded warehouse operations. We coordinate <strong>immediate transportation (IT) bonds, warehouse entry procedures, and CBP coordination</strong> for seamless movement of goods from Port of Oakland to your San Leandro bonded facility without duty payment.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Immediate Transportation (IT) bond procedures from Port of Oakland</li>
                <li>Transportation and Exportation (T&E) entry preparation</li>
                <li>In-bond movement from port to San Leandro bonded warehouse</li>
                <li>CBP Form 7512 processing and tracking</li>
                <li>Bonded carrier compliance and monitoring</li>
                <li>Container freight station (CFS) bonded operations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Duty Deferral & Cash Flow Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Bonded warehouses enable <strong>duty deferral until goods are withdrawn for consumption</strong>, significantly improving cash flow for San Leandro importers. We structure bonded warehouse operations to maximize duty savings, including re-export without duty payment and manipulation/manufacturing under CBP supervision.
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
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign Trade Zone (FTZ) Applications & Operations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Foreign Trade Zones offer enhanced benefits beyond bonded warehouses, including <strong>inverted tariff relief, manufacturing capabilities, and zone-to-zone transfers</strong>. Our San Leandro FTZ attorney handles FTZ grantee applications, subzone designations, CBP activation, and ongoing FTZ compliance for Alameda County manufacturers and value-added operations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FTZ grantee and subzone application preparation</li>
                <li>Foreign Trade Zone Board petition and approval</li>
                <li>CBP FTZ activation and operations manual development</li>
                <li>Weekly entry vs. direct delivery election strategies</li>
                <li>Inverted tariff benefit analysis for manufacturing</li>
                <li>Zone-to-zone transfer procedures and compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Bonded Warehouse Compliance & Audits</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP conducts regular audits of bonded warehouses to ensure compliance with inventory, security, and recordkeeping requirements. Our San Leandro bonded warehouse attorney represents proprietors during <strong>CBP annual audits, inventory verification, and shortage investigations</strong>, helping maintain compliant operations.
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
                When CBP alleges bonded warehouse violations—unauthorized withdrawals, inventory shortages, recordkeeping failures—penalties can include bond claims and facility revocation. Our firm defends San Leandro warehouse operators against <strong>19 USC § 1592 penalty actions and CBP enforcement proceedings</strong>.
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

      {/* Benefits of San Leandro Bonded Warehouse */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why San Leandro for Your Bonded Warehouse
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Strategic East Bay Location</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                San Leandro's I-880 corridor location provides exceptional advantages:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Port of Oakland:</strong> 10-15 minutes via I-880 South</li>
                <li><strong>San Francisco:</strong> 20 minutes via I-880 to I-80 West</li>
                <li><strong>San Jose/Silicon Valley:</strong> 30 minutes via I-880 South</li>
                <li><strong>Central Valley:</strong> Direct I-580 access to Sacramento region</li>
                <li><strong>Lower costs:</strong> 25-40% lower operating costs vs. Oakland/SF</li>
                <li><strong>Industrial infrastructure:</strong> Established logistics and warehouse zones</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bonded Warehouse Financial Benefits</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Operating a bonded warehouse in San Leandro provides significant advantages:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Duty deferral:</strong> Pay duties only when goods enter U.S. commerce</li>
                <li><strong>No duty on re-exports:</strong> Eliminate duty costs for exported goods</li>
                <li><strong>Improved cash flow:</strong> Defer duty payments up to 5 years</li>
                <li><strong>Partial withdrawals:</strong> Pay duty only on quantities released</li>
                <li><strong>Manipulation privileges:</strong> Relabel, sort, repair, assemble under bond</li>
                <li><strong>Cost efficiency:</strong> Lower overhead with equal port access</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Industries We Serve from San Leandro</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Technology & Electronics</h4>
                <p className="text-neutral-200 text-sm">
                  Silicon Valley proximity for electronics, semiconductors, computer hardware, and technology products with duty-deferred bonded storage.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">E-Commerce & Distribution</h4>
                <p className="text-neutral-200 text-sm">
                  Bonded warehouse fulfillment for online retailers and distributors, paying duty only upon customer purchase and withdrawal.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Manufacturing & Consumer Goods</h4>
                <p className="text-neutral-200 text-sm">
                  Bonded storage for components, consumer goods, apparel, and retail merchandise awaiting distribution throughout Northern California.
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Port & FTZ Services</h3>
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
      <RelatedCityPages currentCity="San Leandro" region="bay-area" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Establish Your San Leandro Bonded Warehouse
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our San Leandro bonded warehouse attorney today for a free consultation. We'll evaluate your Port of Oakland bonded warehouse needs, explain CBP requirements, and provide a clear roadmap to establishing your Alameda County customs facility.
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

export default SanLeandroBondedWarehousePage;
