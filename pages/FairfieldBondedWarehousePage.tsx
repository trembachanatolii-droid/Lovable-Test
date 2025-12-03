import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const FairfieldBondedWarehousePage: React.FC = () => {
  useMeta({
    title: 'Fairfield Bonded Warehouse Attorney | Solano County FTZ Lawyer CA',
    description: 'Fairfield bonded warehouse attorney serving Solano County businesses. CBP bonded facility licensing, FTZ establishment, Travis AFB customs compliance. (310) 744-1328.',
    keywords: 'bonded warehouse attorney fairfield, bonded warehouse lawyer fairfield, ftz attorney fairfield, customs bonded warehouse fairfield, solano county bonded warehouse, fairfield customs facility, travis afb customs, bonded storage attorney',
    canonical: 'fairfield-bonded-warehouse',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-fairfield.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Fairfield Bonded Warehouse Attorney - Solano County FTZ & Customs Compliance',
        description: 'Fairfield bonded warehouse attorney providing expert legal services for CBP bonded warehouse establishment, Foreign Trade Zone applications, and customs facility compliance in Solano County.',
        url: `${siteConfig.siteUrl}/fairfield-bonded-warehouse`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Fairfield Bonded Warehouse Attorney', url: `${siteConfig.siteUrl}/fairfield-bonded-warehouse` }
      ]),
      generateFAQSchema([
        {
          question: 'Why establish a bonded warehouse in Fairfield, California?',
          answer: 'Fairfield offers strategic advantages for bonded warehouse operations: central I-80 location between Port of Oakland and Sacramento, proximity to Travis Air Force Base for air cargo, lower real estate costs than Bay Area facilities, and access to Northern California distribution markets. Bonded warehouses allow duty deferral, improving cash flow for Solano County importers by postponing customs duty payments until goods are withdrawn for consumption.',
        },
        {
          question: 'How does a Fairfield bonded warehouse attorney help with CBP licensing?',
          answer: 'Our Fairfield bonded warehouse attorney manages the complete CBP application process including: evaluating facility suitability, preparing CBP Form 3173 applications, calculating and procuring required bonds, designing compliant security and recordkeeping systems, coordinating CBP inspections, and ensuring ongoing regulatory compliance. We handle both Class 11 public bonded warehouses and Class 9 private bonded warehouses for Solano County businesses.',
        },
        {
          question: 'What is the difference between a bonded warehouse and a Foreign Trade Zone in Fairfield?',
          answer: 'Both offer duty deferral, but Foreign Trade Zones (FTZs) provide additional benefits: inverted tariff relief (pay duty on finished products at lower rates), manufacturing and production capabilities, zone-to-zone transfers without duty, and weekly entry procedures. FTZs require Foreign Trade Zone Board approval and more complex operations. We help Fairfield businesses evaluate whether bonded warehouse or FTZ status best fits their operational and financial needs.',
        },
        {
          question: 'Can you help with Travis AFB customs and military base import compliance?',
          answer: 'Yes, we assist businesses serving Travis Air Force Base with customs compliance for military contractor imports, government procurement, and defense-related trade. This includes ITAR compliance for defense articles, FMS (Foreign Military Sales) procedures, duty-free treatment for government imports, and coordination with CBP for base-related shipments. Our experience with military logistics and customs law ensures compliant operations for Fairfield-area defense contractors.',
        },
        {
          question: 'What bonded warehouse compliance support do you provide?',
          answer: 'Our Fairfield bonded warehouse attorney provides comprehensive compliance support including: preparation for annual CBP audits, inventory reconciliation and discrepancy resolution, recordkeeping system reviews under 19 CFR Part 19, shortage investigation defense, bond sufficiency assessments, proprietor liability mitigation, and representation in CBP enforcement proceedings. We help maintain your facility good standing with CBP.',
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
      <section className="hero" aria-label="Fairfield Bonded Warehouse Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1920&auto=format&fit=crop"
            alt=""
            role="presentation"
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
            className="hero-bg-image"
          />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>

        <div className="container">
          <h1>Fairfield Bonded Warehouse Attorney<br />Solano County FTZ & Customs Compliance</h1>
          <p className="hero-subtitle">
            Expert bonded warehouse and Foreign Trade Zone legal services for Fairfield and Solano County. CBP facility licensing, duty deferral strategies, and Travis AFB customs compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Fairfield for Bonded Warehouse */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Fairfield Bonded Warehouse & FTZ Legal Services
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Fairfield and Solano County with expert bonded warehouse establishment and Foreign Trade Zone compliance. Our firm provides <strong>comprehensive legal support for CBP-bonded facilities and FTZ operations</strong> with strategic advantages for Northern California distribution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Strategic Port Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Fairfield provides <strong>optimal access to Port of Oakland, Travis AFB, and Sacramento</strong> via I-80. Central location for Northern California distribution networks.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">FTZ Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized in <strong>Foreign Trade Zone applications and operations</strong>. Maximize inverted tariff benefits and zone-to-zone transfer capabilities.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Military Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Expert support for <strong>Travis AFB contractors and defense importers</strong>. ITAR compliance, FMS procedures, and government procurement customs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonded Warehouse Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Bonded Warehouse Legal Services in Fairfield
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Bonded Warehouse Establishment</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our Fairfield bonded warehouse attorney guides you through CBP's rigorous application process for bonded warehouse licensing. We handle <strong>Class 11 public bonded warehouses</strong> and <strong>Class 9 private bonded warehouses</strong>, ensuring your Solano County facility meets all CBP security, recordkeeping, and operational standards under 19 CFR Part 19.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP Form 3173 bonded warehouse application and submission</li>
                <li>Facility qualification assessment and compliance review</li>
                <li>Bonded warehouse bond calculation and surety procurement</li>
                <li>Security system design and CBP approval process</li>
                <li>Inventory control and recordkeeping system implementation</li>
                <li>CBP field office coordination and facility inspection</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign Trade Zone (FTZ) Applications & Operations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Foreign Trade Zones offer enhanced benefits beyond bonded warehouses, including <strong>inverted tariff relief, manufacturing capabilities, and zone-to-zone transfers</strong>. Our Fairfield FTZ attorney handles FTZ grantee applications, subzone designations, CBP activation, and ongoing FTZ compliance—ideal for Solano County manufacturers and value-added operations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FTZ grantee and subzone application preparation</li>
                <li>Foreign Trade Zone Board petition and approval process</li>
                <li>CBP FTZ activation and operations manual development</li>
                <li>Weekly entry vs. direct delivery election analysis</li>
                <li>Inverted tariff benefit maximization strategies</li>
                <li>Zone-to-zone transfer procedures and documentation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Duty Deferral & Financial Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Bonded warehouses enable <strong>duty deferral until goods are withdrawn for consumption</strong>, significantly improving cash flow for Fairfield importers. We structure bonded operations to maximize duty savings, including re-export without duty payment and manipulation/manufacturing under CBP supervision.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Duty deferral program design and cash flow modeling</li>
                <li>Bonded warehouse withdrawal strategies (consumption, export, T&E)</li>
                <li>Re-export procedures to eliminate duty obligations</li>
                <li>Manipulation, assembly, and manufacturing under bond</li>
                <li>Partial withdrawal and piecemeal distribution planning</li>
                <li>Comparative analysis: drawback vs. bonded warehouse vs. FTZ</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Travis AFB Customs & Defense Contractor Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Fairfield's proximity to Travis Air Force Base creates unique customs requirements for military contractors and defense importers. We provide <strong>ITAR compliance, FMS procedures, and government procurement customs support</strong> for businesses serving the military and defense sector.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ITAR compliance for defense articles and technical data</li>
                <li>Foreign Military Sales (FMS) import/export procedures</li>
                <li>Duty-free treatment for U.S. Government imports</li>
                <li>Defense contractor customs compliance programs</li>
                <li>CBP coordination for military base deliveries</li>
                <li>Export licensing (DDTC, BIS) for defense items</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Bonded Warehouse Compliance & Audits</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP conducts regular audits of bonded warehouses to ensure compliance with inventory, security, and recordkeeping requirements. Our Fairfield bonded warehouse attorney represents proprietors during <strong>CBP annual audits, inventory verification, and shortage investigations</strong>, helping maintain compliant operations.
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
                When CBP alleges bonded warehouse violations—unauthorized withdrawals, inventory shortages, recordkeeping failures—penalties can include bond claims and facility revocation. Our firm defends Fairfield warehouse operators against <strong>19 USC § 1592 penalty actions and CBP enforcement proceedings</strong>.
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

      {/* Benefits of Fairfield Bonded Warehouse */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Fairfield for Your Bonded Warehouse
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Northern California Location</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Fairfield's strategic I-80 location provides exceptional distribution access:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Port of Oakland:</strong> 50 minutes via I-80 West</li>
                <li><strong>Travis AFB:</strong> 15 minutes for air cargo operations</li>
                <li><strong>Sacramento/Port of Sacramento:</strong> 35 minutes via I-80 East</li>
                <li><strong>San Francisco Bay Area:</strong> Direct access to all Bay Area markets</li>
                <li><strong>Lower costs:</strong> 35-50% lower operating costs vs. Oakland/SF</li>
                <li><strong>Labor availability:</strong> Strong logistics workforce in Solano County</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bonded Warehouse Financial Benefits</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Operating a bonded warehouse in Fairfield provides significant advantages:
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
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Industries We Serve from Fairfield</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Defense & Aerospace</h4>
                <p className="text-neutral-200 text-sm">
                  Travis AFB contractor support, ITAR compliance, defense article bonded storage, and FMS import/export services.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Manufacturing & Distribution</h4>
                <p className="text-neutral-200 text-sm">
                  Bonded storage for components, automotive parts, industrial equipment, and consumer goods with duty deferral benefits.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Agriculture & Food</h4>
                <p className="text-neutral-200 text-sm">
                  Bonded warehouse and FTZ operations for food products, agricultural imports, and value-added processing.
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
                  <a href="#customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense & Litigation</span>
                    <p className="service-link__description">CBP audits, seizures, penalty defense</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: '50%', transform: 'translateY(-50%)', transition: 'right 0.3s ease', color: '#3FBB94' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#regulatory-compliance-advisory" className="service-link">
                    <span className="service-link__title">Trade Compliance Programs</span>
                    <p className="service-link__description">Import compliance development</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: '50%', transform: 'translateY(-50%)', transition: 'right 0.3s ease', color: '#3FBB94' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#tariffs-duties-classification-guide" className="service-link">
                    <span className="service-link__title">Tariff Classification</span>
                    <p className="service-link__description">HTS code optimization</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: '50%', transform: 'translateY(-50%)', transition: 'right 0.3s ease', color: '#3FBB94' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Defense & Export</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#export-controls-sanctions" className="service-link">
                    <span className="service-link__title">Export Controls & ITAR</span>
                    <p className="service-link__description">Defense article compliance</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: '50%', transform: 'translateY(-50%)', transition: 'right 0.3s ease', color: '#3FBB94' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#duty-drawback-refunds" className="service-link">
                    <span className="service-link__title">Duty Drawback Programs</span>
                    <p className="service-link__description">Customs duty refund claims</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: '50%', transform: 'translateY(-50%)', transition: 'right 0.3s ease', color: '#3FBB94' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#resources/ftz-guide" className="service-link">
                    <span className="service-link__title">FTZ Establishment Guide</span>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: '50%', transform: 'translateY(-50%)', transition: 'right 0.3s ease', color: '#3FBB94' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/bonded-warehouse-guide" className="service-link">
                    <span className="service-link__title">Bonded Warehouse Guide</span>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: '50%', transform: 'translateY(-50%)', transition: 'right 0.3s ease', color: '#3FBB94' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#trade-law-faq" className="service-link">
                    <span className="service-link__title">FAQ Center</span>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: '50%', transform: 'translateY(-50%)', transition: 'right 0.3s ease', color: '#3FBB94' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related City Pages */}
      <RelatedCityPages currentCity="Fairfield" region="bay-area" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Establish Your Fairfield Bonded Warehouse or FTZ
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Fairfield bonded warehouse attorney today for a free consultation. We'll evaluate your bonded warehouse or FTZ needs, explain CBP requirements, and provide a clear roadmap to establishing your Solano County customs facility.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">
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

export default FairfieldBondedWarehousePage;
