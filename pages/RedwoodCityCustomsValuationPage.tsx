
import React, { lazy, Suspense, useEffect } from 'react';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const RedwoodCityCustomsValuationPage: React.FC = () => {
  useMeta({
    title: 'Redwood City Customs Valuation Attorney | Bay Area Trade Lawyer CA',
    description: 'Redwood City customs valuation attorney for Silicon Valley tech importers. Expert transaction value, assists, royalties, transfer pricing. Bay Area customs lawyer. (310) 744-1328.',
    keywords: 'customs valuation attorney redwood city, transaction value lawyer bay area, transfer pricing attorney redwood city, customs valuation lawyer silicon valley, royalties assists attorney california',
    canonical: 'redwood-city-customs-valuation',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-customs-valuation.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Redwood City Customs Valuation Attorney - Bay Area Trade Lawyer',
        description: 'Expert Redwood City customs valuation attorney serving Bay Area tech importers. Transaction value, assists, royalties, and transfer pricing compliance.',
        url: `${siteConfig.siteUrl}/redwood-city-customs-valuation`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Redwood City Customs Valuation', url: `${siteConfig.siteUrl}/redwood-city-customs-valuation` }
      ]),
      generateFAQSchema([
        {
          question: 'What is customs valuation and why does it matter for Redwood City tech companies?',
          answer: 'Customs valuation determines the dutiable value of imported goods, directly affecting duty costs. For Redwood City tech importers, proper valuation of electronics, software, semiconductors, and manufacturing equipment is critical. Undervaluation risks civil penalties under 19 USC § 1592, while overvaluation wastes money. Our Redwood City customs valuation attorney ensures compliant, optimized valuation.',
        },
        {
          question: 'How does transaction value work for related-party imports?',
          answer: 'Transaction value (the price paid or payable) is the primary valuation method. However, when importer and seller are related parties (common in Bay Area tech), CBP may scrutinize whether the relationship influenced price. Companies must demonstrate the transaction value closely approximates unrelated party sales (test values) or show circumstances of sale indicate acceptable value. Our attorney helps Redwood City importers navigate related-party valuation.',
        },
        {
          question: 'What are assists and dutiable royalties in customs valuation?',
          answer: 'Assists are goods/services provided by the buyer to the seller free or at reduced cost for production of imported merchandise (tooling, molds, engineering, materials). Assists must be added to transaction value. Royalties paid as a condition of sale for imported goods are also dutiable. Tech companies often have complex royalty and IP licensing arrangements requiring careful valuation analysis.',
        },
        {
          question: 'How does transfer pricing affect customs valuation?',
          answer: 'Transfer pricing for tax purposes often differs from customs valuation. IRS encourages low transfer prices to minimize U.S. taxable income, while CBP requires dutiable value reflect actual transaction value or acceptable alternatives. Redwood City tech companies with foreign affiliates face complex tension between tax and customs objectives. We help align transfer pricing and customs valuation strategies.',
        },
        {
          question: 'What happens if CBP challenges our customs valuation?',
          answer: 'CBP may issue CF-28 (Request for Information) or CF-29 (Notice of Action) challenging declared values. Companies must respond with documentation proving valuation methodology. CBP may also conduct Focused Assessments reviewing valuation practices. Penalties under 19 USC § 1592 can reach gross value of merchandise for negligent, grossly negligent, or fraudulent undervaluation. Our Redwood City customs valuation attorney defends these proceedings.',
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
      <section className="hero" aria-label="Redwood City Customs Valuation Hero">
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
          <h1>Redwood City Customs Valuation Attorney<br />Bay Area Transaction Value Lawyer</h1>
          <p className="hero-subtitle">
            Expert customs valuation attorney serving Redwood City and Silicon Valley tech importers. Transaction value, assists, royalties, transfer pricing, and related-party compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Valuation Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Redwood City Customs Valuation Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Silicon Valley Customs Valuation Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Redwood City is in the heart of <strong>Silicon Valley and the Bay Area tech corridor</strong>. Tech companies importing electronics, semiconductors, software, and manufacturing equipment face complex customs valuation challenges. Our customs valuation attorney provides specialized services for transaction value, assists, royalties, transfer pricing, and related-party imports.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tech Valuation Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep expertise in <strong>electronics, semiconductor, and software valuation</strong>. We understand tech-specific valuation issues including IP, royalties, and assists.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transfer Pricing Alignment</h3>
              <p className="text-text-secondary leading-relaxed">
                Experience reconciling <strong>IRS transfer pricing and CBP customs valuation</strong>. Minimize tax while maintaining compliant customs values.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Related Party Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized in <strong>related-party transaction value analysis</strong>. Test value studies and circumstances of sale documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customs Valuation Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Comprehensive Customs Valuation Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Transaction Value Methodology</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Transaction value</strong> is the price actually paid or payable for imported merchandise. It is the primary and preferred valuation method under 19 USC § 1401a. For Bay Area tech companies, establishing proper transaction value requires:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Documentation of price paid or payable (invoices, payment records, purchase orders)</li>
                <li>Addition of statutory additions (packing costs, selling commissions, assists, royalties)</li>
                <li>Exclusion of non-dutiable charges (international freight, insurance, post-importation activities)</li>
                <li>Related-party transaction value analysis and documentation</li>
                <li>Valuation for software, licenses, and digital goods</li>
                <li>Treatment of discounts, rebates, and price adjustments</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Assists Valuation & Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Assists</strong> are goods or services provided by the buyer to the seller, free or at reduced cost, for use in producing or selling imported merchandise. Common assists for tech importers include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Tools, dies, molds, and tooling provided to foreign manufacturers</li>
                <li>Engineering, development, artwork, design work, and plans</li>
                <li>Materials, components, parts incorporated in imported goods</li>
                <li>Software, technical data, and intellectual property for production</li>
                <li>Apportionment methodology for assists used for multiple products</li>
                <li>Amortization schedules and useful life analysis</li>
                <li>Documentation requirements and CBP assist reporting</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Royalties & License Fees</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Royalties and license fees</strong> are dutiable if paid as a condition of sale and relate to imported merchandise. Tech companies with complex IP licensing face valuation challenges:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Dutiability analysis: Is royalty a condition of sale for imported goods?</li>
                <li>Relationship test: Does royalty relate to imported merchandise?</li>
                <li>Non-dutiable royalties (post-importation sales, unrelated IP)</li>
                <li>Patent, trademark, copyright royalty treatment</li>
                <li>Software licensing and SaaS valuation</li>
                <li>Technology transfer and technical assistance agreements</li>
                <li>CBP ruling requests for royalty treatment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Transfer Pricing & Customs Valuation Reconciliation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Redwood City tech companies with foreign affiliates face <strong>conflicting objectives between IRS transfer pricing and CBP customs valuation</strong>. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Transfer pricing methods (comparable uncontrolled price, cost plus, resale price)</li>
                <li>Customs valuation methods (transaction value, deductive, computed)</li>
                <li>Reconciliation strategies minimizing IRS and CBP exposure</li>
                <li>Advance Pricing Agreements (APAs) and customs valuation coordination</li>
                <li>Intercompany pricing policies for related-party imports</li>
                <li>Documentation supporting both tax and customs positions</li>
                <li>Defense of IRS and CBP challenges to pricing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Related-Party Transaction Value</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When importer and seller are <strong>related parties</strong> (common in Bay Area tech with foreign affiliates), CBP scrutinizes whether the relationship influenced price. Companies must prove:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Test value analysis (comparison to unrelated party sales, deductive, computed value)</li>
                <li>Circumstances of sale documentation (arm's length pricing, market conditions)</li>
                <li>Transfer pricing studies supporting transaction value</li>
                <li>Related party definition (ownership, control, common ownership)</li>
                <li>Price adjustment mechanisms and their valuation treatment</li>
                <li>CBP challenges to related-party transaction value</li>
                <li>Alternative valuation methods when transaction value unavailable</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Valuation Audits & Penalty Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP aggressively audits customs valuation, particularly for tech importers with related-party transactions, assists, and royalties. <strong>Penalties under 19 USC § 1592</strong> can equal the gross value of merchandise. Our defense includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense for valuation reviews</li>
                <li>CF-28 (Request for Information) response for valuation inquiries</li>
                <li>CF-29 (Notice of Action) response for valuation adjustments</li>
                <li>Prior Disclosure for discovered valuation errors</li>
                <li>19 USC § 1592 penalty mitigation (negligence, gross negligence, fraud)</li>
                <li>Supplemental duty payment and protest procedures</li>
                <li>Court of International Trade litigation for valuation disputes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Customs Valuation Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Redwood City Importers Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tech Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Deep understanding of <strong>Silicon Valley tech business models</strong>. We know electronics, semiconductors, software, and manufacturing equipment valuation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transfer Pricing Coordination</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Experience coordinating <strong>IRS transfer pricing and CBP customs valuation</strong>. We minimize exposure to both tax and customs challenges.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proactive Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We implement <strong>preventive compliance programs</strong> avoiding costly CBP audits, penalties, and forced value adjustments.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Flat-fee pricing</strong> for valuation studies, assist analysis, royalty determinations, and compliance reviews. Clear cost estimates upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Customs Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Valuation Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#transfer-pricing-customs" className="service-link">
                    <span className="service-link__title">Transfer Pricing</span>
                    <p className="service-link__description">Tax & customs reconciliation</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#assists-royalties" className="service-link">
                    <span className="service-link__title">Assists & Royalties</span>
                    <p className="service-link__description">Dutiability analysis</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#tariffs-duties-classification-guide" className="service-link">
                    <span className="service-link__title">Tariff Classification</span>
                    <p className="service-link__description">HTS & duty optimization</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Other Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Bay Area Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#san-francisco-customs-attorney" className="service-link">
                    <span className="service-link__title">San Francisco Customs</span>
                    <p className="service-link__description">Bay Area customs law</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#oakland-port-attorney" className="service-link">
                    <span className="service-link__title">Oakland Port Attorney</span>
                    <p className="service-link__description">Port of Oakland imports</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Valuation Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#resources/customs-valuation-guide" className="service-link">
                    <span className="service-link__title">Customs Valuation Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/transfer-pricing-guide" className="service-link">
                    <span className="service-link__title">Transfer Pricing Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#trade-law-faq" className="service-link">
                    <span className="service-link__title">FAQ Center</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

      <RelatedCityPages currentCity="Redwood City" region="northern-california" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Optimize Your Customs Valuation Strategy
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't overpay duties or risk CBP penalties. Our Redwood City customs valuation attorney helps tech importers minimize costs while maintaining full compliance. Free confidential consultation.
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

export default RedwoodCityCustomsValuationPage;
