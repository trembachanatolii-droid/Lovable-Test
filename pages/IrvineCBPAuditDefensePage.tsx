
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const IrvineCBPAuditDefensePage: React.FC = () => {
  useMeta({
    title: 'CBP Audit Defense Attorney Irvine CA | Customs Audit Lawyer | Trembach Law',
    description: 'CBP audit defense attorney in Irvine CA. Expert customs audit lawyer serving Orange County businesses. Focused assessment defense, penalty mitigation, prior disclosure. Free consultation (310) 744-1328.',
    keywords: 'CBP audit defense attorney irvine, customs audit lawyer irvine, irvine CBP audit attorney, focused assessment defense irvine, customs audit defense orange county, irvine customs audit lawyer, CBP investigation attorney irvine, customs penalty mitigation irvine, prior disclosure attorney irvine, CF-28 response attorney irvine, CF-29 response lawyer irvine, customs compliance audit irvine, import audit defense irvine, trade compliance attorney irvine, irvine international trade lawyer',
    canonical: 'irvine-cbp-audit-defense',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-irvine.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'CBP Audit Defense Attorney Irvine CA - Customs Audit Lawyer Orange County',
        description: 'Expert CBP audit defense attorney in Irvine, California. Comprehensive customs audit defense services including focused assessment defense, penalty mitigation, and prior disclosure representation.',
        url: `${siteConfig.siteUrl}/irvine-cbp-audit-defense`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'CBP Audit Defense Attorney Irvine', url: `${siteConfig.siteUrl}/irvine-cbp-audit-defense` }
      ]),
      generateFAQSchema([
        {
          question: 'What should I do if I receive a CBP audit notice in Irvine?',
          answer: 'If you receive a CBP audit notice (CF-28, CF-29, or focused assessment letter), contact a CBP audit defense attorney immediately. Do not respond without legal guidance. Our Irvine customs audit lawyers can assess your situation, review your import records, and develop a defense strategy within 24-48 hours. Early intervention often reduces penalties by 50-75%.',
        },
        {
          question: 'What types of CBP audits do you defend in Orange County?',
          answer: 'Our Irvine CBP audit defense team handles all types of customs audits including: Focused Assessments (FA), Quick Response Audits (QRA), Compliance Assessment Audits, Prior Disclosure proceedings, penalty cases under 19 USC 1592, and post-entry amendment issues. We serve importers throughout Orange County and Southern California.',
        },
        {
          question: 'How much can a CBP audit penalty be reduced?',
          answer: 'Penalty reductions depend on the circumstances, but our CBP audit defense attorneys have achieved reductions of 50-90% through strategic prior disclosures, demonstrating reasonable care, and penalty mitigation arguments. In some cases, we have eliminated penalties entirely by proving compliance or procedural errors by CBP.',
        },
        {
          question: 'Do you offer prior disclosure services in Irvine?',
          answer: 'Yes, our Irvine office provides comprehensive prior disclosure services. A voluntary prior disclosure to CBP before an audit can cap penalties at interest plus a reduced penalty amount. We help Orange County importers identify compliance issues, calculate duty owed, and file proper disclosures to minimize liability.',
        },
        {
          question: 'What industries do you serve for CBP audit defense in Irvine?',
          answer: 'We defend CBP audits for all industries in Irvine and Orange County, including technology and electronics importers, medical device companies, automotive parts suppliers, consumer goods retailers, e-commerce businesses, and manufacturers. Our expertise spans all HTS chapters and trade programs.',
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
      <section className="hero" aria-label="CBP Audit Defense Attorney Irvine Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
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
          <h1>CBP Audit Defense Attorney<br />Irvine CA</h1>
          <p className="hero-subtitle">
            Expert CBP audit defense attorney serving Irvine and Orange County businesses. When CBP targets your imports for audit, you need experienced customs audit lawyers who understand focused assessments, penalty mitigation, and prior disclosure strategies. Protect your business with proven audit defense.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Audit Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              CBP Audit Defense for Irvine Businesses
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Facing a <strong>CBP audit in Irvine</strong>? Our customs audit defense attorneys understand the stakes. With Orange County's concentration of technology companies, medical device manufacturers, and international traders, CBP actively targets local importers. We provide comprehensive <strong>CBP audit defense</strong> to protect your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Audit Response Team</h3>
              <p className="text-text-secondary leading-relaxed">
                Our Irvine <strong>CBP audit defense</strong> team responds within 24 hours. We analyze audit notices, assess exposure, and develop defense strategies tailored to your import operations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Penalty Reduction</h3>
              <p className="text-text-secondary leading-relaxed">
                Our customs audit lawyers have achieved <strong>50-90% penalty reductions</strong> through strategic prior disclosures, reasonable care defense, and penalty mitigation negotiations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Orange County Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                From our convenient Southern California location, we serve Irvine, Newport Beach, Costa Mesa, and all Orange County importers with <strong>personalized audit defense</strong> services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            CBP Audit Defense Services in Irvine
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Focused Assessment (FA) Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP's Focused Assessment audits target specific compliance areas. Our Irvine <strong>CBP audit defense attorneys</strong> handle all phases of FA audits including pre-assessment surveys, testing phases, and compliance improvement periods.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Pre-assessment survey response</li>
                <li>Document production management</li>
                <li>Interview preparation</li>
                <li>Compliance action plan development</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Prior Disclosure Representation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A strategic prior disclosure can <strong>cap penalties at interest plus reduced amounts</strong>. Our customs audit lawyers guide Irvine importers through the disclosure process to minimize liability before CBP discovers violations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Disclosure timing strategy</li>
                <li>Duty calculation and tender</li>
                <li>Narrative preparation</li>
                <li>CBP negotiation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Penalty Mitigation Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP issues penalties under 19 USC 1592, our <strong>customs penalty attorneys</strong> fight for maximum reduction. We present mitigating factors, demonstrate reasonable care, and negotiate settlements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Penalty notice analysis</li>
                <li>Mitigation petition filing</li>
                <li>Reasonable care documentation</li>
                <li>Settlement negotiation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CF-28/CF-29 Response</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP Request for Information (CF-28) and Notice of Action (CF-29) require careful response. Our Irvine <strong>customs audit lawyers</strong> prepare comprehensive responses that protect your interests.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Document gathering and review</li>
                <li>Classification defense arguments</li>
                <li>Valuation justification</li>
                <li>Deadline management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Compliance Program Development</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Prevent future audits with a robust trade compliance program. Our <strong>import compliance attorneys</strong> help Irvine businesses build programs that satisfy CBP's reasonable care standard.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Internal audit procedures</li>
                <li>Classification review protocols</li>
                <li>Valuation documentation systems</li>
                <li>Training and education programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Industries We Defend in Irvine CBP Audits
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Technology & Electronics', desc: 'Semiconductor, computer hardware, consumer electronics importers' },
              { title: 'Medical Devices', desc: 'Medical equipment, diagnostic devices, healthcare technology' },
              { title: 'Automotive Parts', desc: 'Auto components, aftermarket parts, EV components' },
              { title: 'Consumer Goods', desc: 'Retail products, household goods, sporting equipment' },
              { title: 'E-commerce', desc: 'Online retailers, FBA sellers, dropshippers' },
              { title: 'Apparel & Textiles', desc: 'Fashion brands, textile importers, footwear companies' },
            ].map((industry) => (
              <div key={industry.title} className="bg-neutral-50 p-6 rounded-lg border border-border-subtle hover:border-secondary-teal transition-colors">
                <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond">{industry.title}</h3>
                <p className="text-text-secondary text-sm">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services with Green-Slide Animation */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Audit Defense Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense & Litigation</span>
                    <p className="service-link__description">Full customs defense representation</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#regulatory-compliance-advisory" className="service-link">
                    <span className="service-link__title">Trade Compliance Programs</span>
                    <p className="service-link__description">Prevent future audit issues</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Orange County Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#orange-county-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Orange County Tariff Lawyer</span>
                    <p className="service-link__description">Regional tariff services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#irvine-trade-compliance" className="service-link">
                    <span className="service-link__title">Irvine Trade Compliance</span>
                    <p className="service-link__description">Local compliance expertise</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#trade-law-faq" className="service-link">
                    <span className="service-link__title">CBP Audit FAQ</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources" className="service-link">
                    <span className="service-link__title">Customs Resources Hub</span>
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

      {/* Related California Locations */}
      <RelatedCityPages currentCity="Irvine" region="orange-county" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Facing a CBP Audit? Get Expert Defense Now
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't face a CBP audit alone. Our Irvine customs audit defense attorneys are ready to protect your business. Contact us for an immediate consultation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">
              Free Audit Consultation
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

export default IrvineCBPAuditDefensePage;
