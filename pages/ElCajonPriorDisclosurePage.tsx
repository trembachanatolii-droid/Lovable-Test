import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { Link } from 'react-router-dom';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const ElCajonPriorDisclosurePage: React.FC = () => {
  useMeta({
    title: 'Prior Disclosure Attorney El Cajon | CBP Penalty Defense',
    description: 'El Cajon prior disclosure attorney. Expert CBP penalty mitigation & voluntary disclosure filings. Reduce customs penalties by 75%+. San Diego area access. (310) 744-1328.',
    keywords: 'prior disclosure attorney el cajon, cbp prior disclosure el cajon, customs penalty attorney el cajon, voluntary disclosure attorney el cajon, customs penalty mitigation el cajon, prior disclosure lawyer california',
    canonical: 'el-cajon-prior-disclosure-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-el-cajon-prior-disclosure.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'El Cajon Prior Disclosure Attorney - CBP Penalty Mitigation Expert',
        description: 'El Cajon prior disclosure attorney providing expert voluntary disclosure filings and CBP penalty mitigation. Reduce customs penalties by 75% or more through strategic prior disclosure.',
        url: `${siteConfig.siteUrl}/el-cajon-prior-disclosure-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'El Cajon Prior Disclosure Attorney', url: `${siteConfig.siteUrl}/el-cajon-prior-disclosure-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What is a CBP prior disclosure and when should I file one?',
          answer: 'A CBP prior disclosure under 19 USC § 1592(c)(4) is a voluntary report to U.S. Customs and Border Protection about violations you discovered in your import transactions. Filing a prior disclosure BEFORE CBP discovers the violation caps penalties at the actual loss of duties (rather than the gross value of merchandise) and can reduce penalties by 75% or more. You should file immediately upon discovering any classification errors, valuation issues, country of origin problems, or other import violations.',
        },
        {
          question: 'How much can a prior disclosure reduce my CBP penalties?',
          answer: 'A properly filed prior disclosure can reduce penalties from potentially millions of dollars to just the loss of revenue plus interest. Without prior disclosure, CBP can assess penalties up to the domestic value of merchandise (potentially 100%+ of shipment value). With prior disclosure, penalties are capped at the actual loss of duties, and CBP typically assesses only interest on unpaid duties. Our El Cajon clients have saved 75-95% in potential penalties through strategic prior disclosure filings.',
        },
        {
          question: 'What is the deadline to file a prior disclosure with CBP?',
          answer: 'You must file a prior disclosure BEFORE CBP initiates an investigation or issues a Pre-Penalty Notice (CF-29). Once CBP contacts you about the violation, it is too late for prior disclosure protection. This is why immediate action is critical when you discover import errors. Our El Cajon office can prepare and file emergency prior disclosures within 24-48 hours when necessary.',
        },
        {
          question: 'Do I need an attorney to file a CBP prior disclosure?',
          answer: 'While not legally required, having an experienced prior disclosure attorney is strongly recommended. Prior disclosures must follow strict formatting and substantive requirements. Errors in the disclosure can waive your rights or provide CBP with evidence against you. Our El Cajon prior disclosure attorneys have filed hundreds of successful disclosures and know how to present your case to minimize penalties while protecting your legal rights.',
        },
        {
          question: 'What information is required in a prior disclosure filing?',
          answer: 'A complete prior disclosure must include: (1) identification of responsible parties, (2) nature and extent of the violations, (3) affected entry numbers and time period, (4) calculation of actual loss of duties/revenue, (5) tender of duties owed plus interest, and (6) statement of how violations occurred. Our El Cajon team handles all aspects including duty calculations, legal analysis, and negotiation with CBP Fines, Penalties & Forfeitures officers.',
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
      <section className="hero" aria-label="El Cajon Prior Disclosure Attorney Hero">
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
          <h1>El Cajon Prior Disclosure Attorney<br />CBP Penalty Mitigation Expert</h1>
          <p className="hero-subtitle">
            Expert prior disclosure attorney serving El Cajon and San Diego County importers. Reduce CBP penalties by 75%+ through strategic voluntary disclosure filings. Immediate response to customs violations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why File a Prior Disclosure */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Prior Disclosure: Your Best Defense Against CBP Penalties
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              When you discover import violations, filing a <strong>CBP prior disclosure</strong> is your most powerful tool to minimize penalties. Our El Cajon prior disclosure attorneys have saved clients millions in potential penalties through timely, strategic voluntary disclosures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cap Penalties</h3>
              <p className="text-text-secondary leading-relaxed">
                Prior disclosure <strong>caps penalties at actual loss of revenue</strong> rather than domestic value of merchandise. This can reduce potential penalties from millions to thousands of dollars.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Demonstrate Good Faith</h3>
              <p className="text-text-secondary leading-relaxed">
                Voluntary disclosure shows CBP you take compliance seriously and discovered the error through <strong>internal controls</strong>, earning you more favorable treatment and reduced penalties.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Avoid Investigation</h3>
              <p className="text-text-secondary leading-relaxed">
                Prior disclosure filed before CBP investigation <strong>protects you from maximum penalties</strong> and prevents escalation to criminal referral for serious violations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prior Disclosure Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Prior Disclosure Services in El Cajon
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Prior Disclosure Preparation & Filing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our El Cajon prior disclosure attorneys prepare comprehensive voluntary disclosures that meet all CBP requirements while minimizing your legal exposure. We handle <strong>duty calculations, legal analysis, and presentation</strong> to CBP Fines, Penalties & Forfeitures officers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Complete prior disclosure package preparation</li>
                <li>Duty loss calculation and tender</li>
                <li>Legal memorandum supporting disclosure</li>
                <li>Negotiation with CBP FP&F officers</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Classification & Valuation Prior Disclosures</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Incorrect HTS classification and customs valuation are the most common prior disclosure issues. Our team identifies <strong>all affected entries</strong>, calculates duty differentials, and presents mitigating factors to minimize interest and penalties.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification error analysis</li>
                <li>First sale/related party valuation disclosures</li>
                <li>Dutiable assists and royalty disclosures</li>
                <li>Country of origin marking violations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Post-Disclosure Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Even with prior disclosure, CBP may assess penalties based on <strong>negligence or gross negligence</strong>. We negotiate with CBP to reduce or eliminate penalties by demonstrating your compliance efforts and internal controls.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Response to CBP penalty assessments</li>
                <li>Mitigation based on remedial measures</li>
                <li>Demonstrating reasonable care compliance</li>
                <li>Administrative appeals of penalty decisions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Internal Audit & Violation Discovery</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our El Cajon team conducts <strong>privileged internal audits</strong> to discover violations before CBP does. Attorney-client privilege protects audit findings, allowing you to correct issues strategically through prior disclosure.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Privileged customs compliance audits</li>
                <li>Entry review and sampling methodology</li>
                <li>Violation identification and quantification</li>
                <li>Strategic disclosure timing and presentation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Emergency Prior Disclosure Filings</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP issues a CF-28 Request for Information or you receive audit notification, <strong>time is critical</strong>. Our El Cajon office provides emergency prior disclosure services with 24-48 hour turnaround to preserve your penalty protection.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>24-hour emergency disclosure preparation</li>
                <li>Expedited duty calculation and analysis</li>
                <li>Same-day filing with CBP FP&F</li>
                <li>Concurrent CF-28 response coordination</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">AD/CVD & Section 301 Prior Disclosures</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Antidumping/countervailing duty and Section 301 tariff violations carry <strong>massive penalty exposure</strong>. Our attorneys file prior disclosures for AD/CVD evasion, transshipment, and misclassification to avoid tariffs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>AD/CVD scope violation disclosures</li>
                <li>Section 301 misclassification filings</li>
                <li>Transshipment and country of origin disclosures</li>
                <li>UFLPA and forced labor violation reports</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/customs-defense-litigation" className="service-link">
                    <span className="service-link__title">CBP Audit Defense</span>
                    <p className="service-link__description">Focused Assessment defense</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/customs-penalty-mitigation" className="service-link">
                    <span className="service-link__title">Penalty Mitigation</span>
                    <p className="service-link__description">CF-29 response & appeals</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/internal-compliance-audits" className="service-link">
                    <span className="service-link__title">Privileged Compliance Audits</span>
                    <p className="service-link__description">Internal violation discovery</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Locations */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/san-diego-customs-lawyer" className="service-link">
                    <span className="service-link__title">San Diego Customs</span>
                    <p className="service-link__description">Port of San Diego</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/chula-vista-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Chula Vista Customs</span>
                    <p className="service-link__description">South Bay CBP office</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Helpful Guides */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Guides</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/prior-disclosure-guide" className="service-link">
                    <span className="service-link__title">Prior Disclosure Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/cbp-penalty-mitigation" className="service-link">
                    <span className="service-link__title">CBP Penalty Mitigation</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/customs-audit-defense" className="service-link">
                    <span className="service-link__title">Customs Audit Defense</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/trade-law-faq" className="service-link">
                    <span className="service-link__title">FAQ Center</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
      <RelatedCityPages currentCity="El Cajon" region="san-diego" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white" id="schedule-consultation">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Prior Disclosure Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            If you've discovered import violations, time is critical. Contact our El Cajon prior disclosure attorneys today for immediate guidance on protecting your business from CBP penalties.
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

export default ElCajonPriorDisclosurePage;
