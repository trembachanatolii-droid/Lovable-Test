import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const VacavilleBondedWarehousePage: React.FC = () => {
  useMeta({
    title: 'Vacaville Bonded Warehouse Attorney | Solano County Customs Compliance CA',
    description: 'Vacaville bonded warehouse attorney serving Solano County importers. CBP bonded facility establishment, FTZ compliance, duty deferral strategies. (310) 744-1328.',
    keywords: 'bonded warehouse attorney vacaville, bonded warehouse lawyer vacaville, customs bonded warehouse vacaville, ftz attorney vacaville, duty deferral vacaville, solano county bonded warehouse, vacaville customs facility, bonded storage attorney',
    canonical: 'vacaville-bonded-warehouse',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-vacaville.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Vacaville Bonded Warehouse Attorney - Solano County Customs Compliance',
        description: 'Vacaville bonded warehouse attorney providing expert legal representation for establishing and operating CBP bonded warehouses, FTZ facilities, and duty deferral programs in Solano County.',
        url: `${siteConfig.siteUrl}/vacaville-bonded-warehouse`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Vacaville Bonded Warehouse Attorney', url: `${siteConfig.siteUrl}/vacaville-bonded-warehouse` }
      ]),
      generateFAQSchema([
        {
          question: 'What is a bonded warehouse and why would my Vacaville business need one?',
          answer: 'A bonded warehouse is a CBP-approved secure storage facility where imported goods can be stored without paying customs duties until they are withdrawn for consumption. For Vacaville businesses, bonded warehouses offer duty deferral benefits, allowing you to postpone duty payments until goods are sold, improving cash flow. This is especially valuable for importers in Solano County with high-volume imports or goods awaiting distribution.',
        },
        {
          question: 'How can a Vacaville bonded warehouse attorney help establish a bonded facility?',
          answer: 'Our Vacaville bonded warehouse attorney guides you through the entire CBP application process including: facility qualification assessment, bonded warehouse application preparation (CBP Form 3173), bond calculation and procurement, security and recordkeeping system setup, CBP inspection coordination, and ongoing compliance management. We ensure your Solano County facility meets all CBP requirements for Class 11 public bonded warehouses or Class 9 private bonded warehouses.',
        },
        {
          question: 'What are the benefits of operating a bonded warehouse in Vacaville?',
          answer: 'Operating a bonded warehouse in Vacaville provides significant advantages: duty deferral until goods are withdrawn, no duty payment on re-exported goods, ability to manipulate and relabel goods under CBP supervision, strategic location between Port of Oakland and Sacramento with I-80 access, lower operating costs compared to Bay Area facilities, and flexibility to withdraw goods piecemeal as needed for distribution throughout Northern California.',
        },
        {
          question: 'Do you help with Foreign Trade Zone (FTZ) establishment in Vacaville?',
          answer: 'Yes, we assist Vacaville businesses with Foreign Trade Zone applications and operations. FTZs offer even greater benefits than bonded warehouses, including inverted tariff relief, zone-to-zone transfers without duty payment, and manufacturing capabilities. We handle FTZ grantee applications, subzone applications, CBP activation, and ongoing compliance for Solano County facilities.',
        },
        {
          question: 'What bonded warehouse compliance issues do you handle?',
          answer: 'Our Vacaville bonded warehouse attorney handles all compliance matters including: annual bonded warehouse audits, inventory reconciliation disputes, shortage/overage investigations, CBP recordkeeping violations, bond sufficiency reviews, proprietor liability defense, and warehouse withdrawal violations. We represent Solano County warehouse operators in CBP enforcement actions and penalty mitigation proceedings.',
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
      <section className="hero" aria-label="Vacaville Bonded Warehouse Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Vacaville Bonded Warehouse Attorney<br />Solano County Customs Compliance</h1>
          <p className="hero-subtitle">
            Expert legal representation for establishing and operating CBP bonded warehouses in Vacaville and Solano County. Duty deferral strategies, FTZ compliance, and customs facility licensing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Vacaville for Bonded Warehouse */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Vacaville Bonded Warehouse Legal Services
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Vacaville and Solano County importers with expert bonded warehouse establishment and compliance. Our firm provides <strong>comprehensive legal support for CBP-bonded facilities</strong> with strategic location advantages between major California ports.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Strategic Location</h3>
              <p className="text-text-secondary leading-relaxed">
                Vacaville's I-80 corridor location provides <strong>optimal access to Port of Oakland and Sacramento</strong>. Lower operating costs than Bay Area facilities with excellent distribution access.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Duty Deferral Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Maximize cash flow with <strong>bonded warehouse duty deferral strategies</strong>. Pay duties only when goods enter commerce, not upon import.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Full CBP Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Expert guidance through <strong>CBP bonded warehouse applications, audits, and compliance</strong>. Protect your warehouse bond and operating privileges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonded Warehouse Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Bonded Warehouse Legal Services in Vacaville
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Bonded Warehouse Establishment & Licensing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our Vacaville bonded warehouse attorney handles the complete application process for establishing CBP-approved bonded storage facilities. We prepare applications for <strong>Class 11 public bonded warehouses</strong> and <strong>Class 9 private bonded warehouses</strong>, ensuring your Solano County facility meets all CBP security, recordkeeping, and operational requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP Form 3173 bonded warehouse application preparation</li>
                <li>Facility qualification assessment and site selection</li>
                <li>Bonded warehouse bond calculation and procurement</li>
                <li>Security system design and CBP approval</li>
                <li>Recordkeeping and inventory control system setup</li>
                <li>CBP field office coordination and inspection support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign Trade Zone (FTZ) Applications</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Foreign Trade Zones offer enhanced benefits beyond bonded warehouses. Our Vacaville FTZ attorney assists with <strong>FTZ grantee applications, subzone designations, and zone activation</strong>. FTZs provide inverted tariff benefits, manufacturing capabilities, and zone-to-zone transfers without duty payment—ideal for Solano County manufacturers and distributors.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FTZ grantee and subzone application preparation</li>
                <li>Foreign Trade Zone Board submissions</li>
                <li>CBP FTZ activation and operations manual</li>
                <li>Weekly entry vs. direct delivery analysis</li>
                <li>Inverted tariff and duty elimination strategies</li>
                <li>Zone-to-zone transfer authorizations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Duty Deferral & Cash Flow Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Bonded warehouses enable <strong>duty deferral until goods are withdrawn for consumption</strong>, significantly improving cash flow for Vacaville importers. We structure bonded warehouse operations to maximize duty savings, including strategies for re-export without duty payment and manipulation/relabeling under CBP supervision.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Duty deferral program design and implementation</li>
                <li>Bonded warehouse withdrawal procedures (consumption, export, T&E)</li>
                <li>Re-export strategies to eliminate duty obligations</li>
                <li>Manipulation and manufacturing under bond</li>
                <li>Partial withdrawal and piecemeal distribution planning</li>
                <li>Drawback vs. bonded warehouse comparative analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Bonded Warehouse Compliance & Audits</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP conducts regular audits of bonded warehouses to ensure compliance with inventory, security, and recordkeeping requirements. Our Vacaville bonded warehouse attorney represents proprietors during <strong>CBP annual audits, inventory verification, and shortage investigations</strong>. We help you maintain compliant operations and defend against violations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Annual CBP bonded warehouse audit preparation</li>
                <li>Inventory reconciliation and discrepancy resolution</li>
                <li>Recordkeeping system reviews (19 CFR Part 19)</li>
                <li>Shortage/overage investigation defense</li>
                <li>Warehouse bond sufficiency reviews</li>
                <li>Proprietor liability mitigation and prior disclosures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Bonded Warehouse Violations & Penalty Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP alleges bonded warehouse violations—such as unauthorized withdrawals, inventory shortages, or recordkeeping failures—penalties can be severe, including bond claims and facility closure. Our firm defends Vacaville warehouse operators against <strong>19 USC § 1592 penalty actions and CBP enforcement proceedings</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Unauthorized withdrawal defense (19 CFR § 144.36)</li>
                <li>Inventory shortage penalty mitigation</li>
                <li>Prior disclosure filings to cap liability</li>
                <li>Bond claim defense and settlement negotiations</li>
                <li>Warehouse revocation prevention and appeals</li>
                <li>CBP administrative penalty proceedings</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Temporary Importation Under Bond (TIB)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                For goods imported temporarily into Vacaville for exhibition, repair, or testing, Temporary Importation Under Bond (TIB) provides <strong>duty-free admission with re-export obligations</strong>. We handle TIB entries, extensions, and compliance to ensure your temporary imports remain duty-free under 19 CFR Part 10.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>TIB entry preparation and CBP bond procurement</li>
                <li>Temporary import classification and eligibility</li>
                <li>TIB extension requests and timeline management</li>
                <li>Re-export documentation and proof of export</li>
                <li>TIB violation defense and duty assessment challenges</li>
                <li>Carnet operations and ATA Carnet coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Vacaville Bonded Warehouse */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Vacaville for Your Bonded Warehouse
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Strategic I-80 Corridor Location</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Vacaville's location on the I-80 corridor provides optimal distribution access:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Port of Oakland:</strong> 60 minutes via I-80 West</li>
                <li><strong>Sacramento/Port of Sacramento:</strong> 30 minutes via I-80 East</li>
                <li><strong>San Francisco Bay Area:</strong> Direct I-80 access to entire region</li>
                <li><strong>Northern California:</strong> Central hub for statewide distribution</li>
                <li><strong>Lower costs:</strong> 30-40% lower operating costs vs. Oakland/SF</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bonded Warehouse Cash Flow Benefits</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Operating a bonded warehouse in Vacaville provides significant financial advantages:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Duty deferral:</strong> Pay duties only when goods enter commerce</li>
                <li><strong>No duty on re-exports:</strong> Eliminate duty costs for exported goods</li>
                <li><strong>Improved cash flow:</strong> Defer duty payments up to 5 years</li>
                <li><strong>Partial withdrawals:</strong> Pay duty only on released quantities</li>
                <li><strong>Manipulation privileges:</strong> Relabel, sort, repair under bond</li>
                <li><strong>Competitive advantage:</strong> Lower carrying costs vs. immediate duty payment</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Industries We Serve from Vacaville</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Wine & Agriculture</h4>
                <p className="text-neutral-200 text-sm">
                  Bonded storage for imported wines, spirits, agricultural products, and food ingredients with duty deferral until distribution.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Manufacturing & Distribution</h4>
                <p className="text-neutral-200 text-sm">
                  Duty-deferred storage for components, automotive parts, industrial equipment, and consumer goods awaiting assembly or distribution.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">E-Commerce & Retail</h4>
                <p className="text-neutral-200 text-sm">
                  Bonded warehouse fulfillment for online retailers, allowing duty payment only upon customer purchase and withdrawal.
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Import/Export Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#export-controls-sanctions" className="service-link">
                    <span className="service-link__title">Export Controls & Sanctions</span>
                    <p className="service-link__description">ITAR, EAR, OFAC compliance</p>
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
                  <a href="#resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Tariffs Guide</span>
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
      <RelatedCityPages currentCity="Vacaville" region="bay-area" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Establish Your Vacaville Bonded Warehouse
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Vacaville bonded warehouse attorney today for a free consultation. We'll assess your bonded warehouse needs, explain CBP requirements, and provide a clear path to establishing your Solano County customs facility.
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

export default VacavilleBondedWarehousePage;
