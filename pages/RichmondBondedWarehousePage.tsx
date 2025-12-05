import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { Link } from 'react-router-dom';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const RichmondBondedWarehousePage: React.FC = () => {
  useMeta({
    title: 'Richmond Bonded Warehouse Attorney | West Contra Costa FTZ Lawyer CA',
    description: 'Richmond bonded warehouse attorney serving West Contra Costa County. CBP bonded facility licensing, Port of Richmond customs, duty deferral strategies. (310) 744-1328.',
    keywords: 'bonded warehouse attorney richmond, bonded warehouse lawyer richmond, ftz attorney richmond, customs bonded warehouse richmond, port of richmond customs, west contra costa bonded warehouse, richmond customs facility, bonded storage attorney',
    canonical: 'richmond-bonded-warehouse',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-richmond.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Richmond Bonded Warehouse Attorney - West Contra Costa Customs Compliance',
        description: 'Richmond bonded warehouse attorney providing expert legal services for CBP bonded warehouse establishment, Port of Richmond customs compliance, and duty deferral programs in West Contra Costa County.',
        url: `${siteConfig.siteUrl}/richmond-bonded-warehouse`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Richmond Bonded Warehouse Attorney', url: `${siteConfig.siteUrl}/richmond-bonded-warehouse` }
      ]),
      generateFAQSchema([
        {
          question: 'Why establish a bonded warehouse in Richmond, California?',
          answer: 'Richmond offers unique advantages for bonded warehouse operations: direct adjacency to Port of Richmond (bulk cargo and petroleum products), immediate access to Port of Oakland via I-80, proximity to San Francisco Bay Area markets, established industrial infrastructure, and lower operating costs than San Francisco or Oakland. Bonded warehouses allow duty deferral, improving cash flow by postponing customs duty payments until goods are withdrawn for consumption.',
        },
        {
          question: 'How does a Richmond bonded warehouse attorney help with CBP licensing?',
          answer: 'Our Richmond bonded warehouse attorney manages the complete CBP application process including: facility qualification and site assessment, CBP Form 3173 application preparation, bond calculation and surety procurement, security and recordkeeping system design, CBP inspection coordination, and ongoing compliance support. We handle both Class 11 public bonded warehouses and Class 9 private bonded warehouses for West Contra Costa County businesses.',
        },
        {
          question: 'Can Richmond bonded warehouses serve Port of Richmond and Port of Oakland importers?',
          answer: 'Yes, Richmond\'s location provides unparalleled access to both Port of Richmond (immediately adjacent) and Port of Oakland (10-15 minutes via I-80). This dual-port accessibility makes Richmond ideal for bonded warehouse operations serving petroleum, bulk cargo, automotive, and containerized imports. Goods can be transported directly from port to your Richmond bonded facility for duty-deferred storage and distribution.',
        },
        {
          question: 'What industries benefit most from Richmond bonded warehouses?',
          answer: 'Richmond bonded warehouses are ideal for: petroleum and bulk liquid importers (Port of Richmond specialization), automotive parts and vehicles (port proximity and I-80 distribution), industrial machinery and equipment, containerized consumer goods from Port of Oakland, food and beverage imports, and manufacturing components requiring duty deferral. Richmond\'s industrial infrastructure supports diverse bonded warehouse operations.',
        },
        {
          question: 'Do you provide bonded warehouse compliance and audit defense?',
          answer: 'Yes, our Richmond bonded warehouse attorney provides comprehensive compliance support including: annual CBP audit preparation and defense, inventory reconciliation and discrepancy resolution, recordkeeping system reviews under 19 CFR Part 19, shortage investigation defense, bond sufficiency assessments, proprietor liability mitigation, and representation in CBP enforcement proceedings. We help maintain your facility\'s good standing with CBP.',
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
      <section className="hero" aria-label="Richmond Bonded Warehouse Attorney Hero">
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
          <h1>Richmond Bonded Warehouse Attorney<br />West Contra Costa Customs Compliance</h1>
          <p className="hero-subtitle">
            Expert bonded warehouse legal services for Richmond and West Contra Costa County. Port of Richmond customs compliance, CBP facility licensing, and duty deferral strategies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Richmond for Bonded Warehouse */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Richmond Bonded Warehouse & Port Legal Services
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Richmond and West Contra Costa County with expert bonded warehouse establishment and port customs compliance. Our firm provides <strong>comprehensive legal support for CBP-bonded facilities</strong> with unmatched port proximity and Bay Area distribution access.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Proximity</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Adjacent to Port of Richmond and Port of Oakland</strong>. Immediate access to bulk cargo, petroleum, automotive, and container terminals.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industrial Infrastructure</h3>
              <p className="text-text-secondary leading-relaxed">
                Established <strong>industrial corridors and warehouse facilities</strong>. Rail access, I-80 distribution, and Bay Area market proximity.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Expert Port Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized in <strong>Port of Richmond customs procedures</strong>. Petroleum, bulk cargo, automotive imports, and CBP bonded operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonded Warehouse Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Bonded Warehouse Legal Services in Richmond
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Bonded Warehouse Establishment & CBP Licensing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our Richmond bonded warehouse attorney handles the complete CBP application process for establishing bonded storage facilities. We prepare applications for <strong>Class 11 public bonded warehouses</strong> and <strong>Class 9 private bonded warehouses</strong>, ensuring your West Contra Costa facility meets all CBP security, recordkeeping, and operational requirements under 19 CFR Part 19.
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
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Port of Richmond Customs Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of Richmond specializes in <strong>bulk cargo, petroleum products, automotive imports, and roll-on/roll-off vessels</strong>. Our Richmond port attorney provides comprehensive customs compliance for port-adjacent bonded warehouses, including immediate transportation bonds, petroleum duty deferral, and automotive bonded storage.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Port of Richmond CBP entry procedures and coordination</li>
                <li>Petroleum and bulk liquid bonded storage compliance</li>
                <li>Automotive vehicle bonded warehouse operations</li>
                <li>Immediate Transportation (IT) bonds from port to warehouse</li>
                <li>Roll-on/Roll-off (RoRo) customs clearance and bonded storage</li>
                <li>Port-adjacent bonded facility licensing and operations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Duty Deferral & Cash Flow Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Bonded warehouses enable <strong>duty deferral until goods are withdrawn for consumption</strong>, significantly improving cash flow for Richmond importers. We structure bonded warehouse operations to maximize duty savings, including re-export without duty payment and manipulation/manufacturing under CBP supervision.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Duty deferral program design and financial modeling</li>
                <li>Bonded warehouse withdrawal strategies (consumption, export, T&E)</li>
                <li>Re-export procedures to eliminate duty obligations</li>
                <li>Manipulation, blending, and relabeling under bond</li>
                <li>Partial withdrawal and piecemeal distribution planning</li>
                <li>Petroleum and bulk liquid duty deferral strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign Trade Zone (FTZ) Applications</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Foreign Trade Zones offer enhanced benefits beyond bonded warehouses, including <strong>inverted tariff relief, manufacturing capabilities, and zone-to-zone transfers</strong>. Our Richmond FTZ attorney handles FTZ grantee applications, subzone designations, CBP activation, and ongoing FTZ compliance for West Contra Costa manufacturers and value-added operations.
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
                CBP conducts regular audits of bonded warehouses to ensure compliance with inventory, security, and recordkeeping requirements. Our Richmond bonded warehouse attorney represents proprietors during <strong>CBP annual audits, inventory verification, and shortage investigations</strong>, helping maintain compliant operations.
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
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Bonded Warehouse Violations & Enforcement Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP alleges bonded warehouse violations—unauthorized withdrawals, inventory shortages, recordkeeping failures—penalties can include bond claims and facility revocation. Our firm defends Richmond warehouse operators against <strong>19 USC § 1592 penalty actions and CBP enforcement proceedings</strong>.
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

      {/* Benefits of Richmond Bonded Warehouse */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Richmond for Your Bonded Warehouse
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Unmatched Port Access</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Richmond's port-adjacent location provides exceptional advantages:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Port of Richmond:</strong> Immediate adjacency to bulk, petroleum, automotive terminals</li>
                <li><strong>Port of Oakland:</strong> 10-15 minutes via I-80 to container terminals</li>
                <li><strong>San Francisco Bay Area:</strong> Direct I-80 access to all markets</li>
                <li><strong>Rail access:</strong> Union Pacific and BNSF rail service</li>
                <li><strong>Lower costs:</strong> 30-40% lower operating costs vs. SF/Oakland core</li>
                <li><strong>Industrial capacity:</strong> Large-scale bulk and container facilities</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bonded Warehouse Financial Benefits</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Operating a bonded warehouse in Richmond provides significant advantages:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Duty deferral:</strong> Pay duties only when goods enter U.S. commerce</li>
                <li><strong>No duty on re-exports:</strong> Eliminate duty costs for exported goods</li>
                <li><strong>Improved cash flow:</strong> Defer duty payments up to 5 years</li>
                <li><strong>Partial withdrawals:</strong> Pay duty only on quantities released</li>
                <li><strong>Manipulation privileges:</strong> Blend, relabel, repair, assemble under bond</li>
                <li><strong>Petroleum benefits:</strong> Specialized duty deferral for oil/gas imports</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Industries We Serve from Richmond</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Petroleum & Bulk Cargo</h4>
                <p className="text-neutral-200 text-sm">
                  Port of Richmond specialization in petroleum, chemicals, bulk liquids, and dry bulk cargo with duty-deferred bonded storage.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Automotive & Vehicles</h4>
                <p className="text-neutral-200 text-sm">
                  RoRo vessel operations, automotive parts, vehicles, and machinery with bonded warehouse storage and duty deferral.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Manufacturing & Distribution</h4>
                <p className="text-neutral-200 text-sm">
                  Container cargo bonded storage for consumer goods, industrial equipment, and manufacturing components.
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
                  <Link to="/resources/petroleum-duty-guide" className="service-link">
                    <span className="service-link__title">Petroleum Duty Guide</span>
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
      <RelatedCityPages currentCity="Richmond" region="bay-area" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Establish Your Richmond Bonded Warehouse
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Richmond bonded warehouse attorney today for a free consultation. We'll evaluate your port-adjacent bonded warehouse needs, explain CBP requirements, and provide a clear roadmap to establishing your West Contra Costa customs facility.
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

export default RichmondBondedWarehousePage;
