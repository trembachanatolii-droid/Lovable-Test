
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanFranciscoPriorDisclosurePage: React.FC = () => {
  useMeta({
    title: 'Prior Disclosure Attorney San Francisco | CBP Penalty Defense',
    description: 'San Francisco prior disclosure attorney. Expert CBP penalty mitigation & voluntary disclosure filings. Reduce customs penalties by 75%+. Port of Oakland access. (310) 744-1328.',
    keywords: 'prior disclosure attorney san francisco, cbp prior disclosure san francisco, customs penalty attorney san francisco, voluntary disclosure attorney sf, customs penalty mitigation san francisco, prior disclosure lawyer california',
    canonical: 'san-francisco-prior-disclosure-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-sf-prior-disclosure.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'San Francisco Prior Disclosure Attorney - CBP Penalty Mitigation Expert',
        description: 'San Francisco prior disclosure attorney providing expert voluntary disclosure filings and CBP penalty mitigation. Reduce customs penalties by 75% or more through strategic prior disclosure.',
        url: `${siteConfig.siteUrl}/san-francisco-prior-disclosure-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'San Francisco Prior Disclosure Attorney', url: `${siteConfig.siteUrl}/san-francisco-prior-disclosure-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What is a CBP prior disclosure and when should I file one?',
          answer: 'A CBP prior disclosure under 19 USC § 1592(c)(4) is a voluntary report to U.S. Customs and Border Protection about violations you discovered in your import transactions. Filing a prior disclosure BEFORE CBP discovers the violation caps penalties at the actual loss of duties (rather than the gross value of merchandise) and can reduce penalties by 75% or more. You should file immediately upon discovering any classification errors, valuation issues, country of origin problems, or other import violations.',
        },
        {
          question: 'How much can a prior disclosure reduce my CBP penalties?',
          answer: 'A properly filed prior disclosure can reduce penalties from potentially millions of dollars to just the loss of revenue plus interest. Without prior disclosure, CBP can assess penalties up to the domestic value of merchandise (potentially 100%+ of shipment value). With prior disclosure, penalties are capped at the actual loss of duties, and CBP typically assesses only interest on unpaid duties. Our San Francisco clients have saved 75-95% in potential penalties through strategic prior disclosure filings.',
        },
        {
          question: 'What is the deadline to file a prior disclosure with CBP?',
          answer: 'You must file a prior disclosure BEFORE CBP initiates an investigation or issues a Pre-Penalty Notice (CF-29). Once CBP contacts you about the violation, it is too late for prior disclosure protection. This is why immediate action is critical when you discover import errors. Our San Francisco office can prepare and file emergency prior disclosures within 24-48 hours when necessary.',
        },
        {
          question: 'Do I need an attorney to file a CBP prior disclosure?',
          answer: 'While not legally required, having an experienced prior disclosure attorney is strongly recommended. Prior disclosures must follow strict formatting and substantive requirements. Errors in the disclosure can waive your rights or provide CBP with evidence against you. Our San Francisco prior disclosure attorneys have filed hundreds of successful disclosures and know how to present your case to minimize penalties while protecting your legal rights.',
        },
        {
          question: 'What information is required in a prior disclosure filing?',
          answer: 'A complete prior disclosure must include: (1) identification of responsible parties, (2) nature and extent of the violations, (3) affected entry numbers and time period, (4) calculation of actual loss of duties/revenue, (5) tender of duties owed plus interest, and (6) statement of how violations occurred. Our San Francisco team handles all aspects including duty calculations, legal analysis, and negotiation with CBP Fines, Penalties & Forfeitures officers.',
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
      <section className="hero" aria-label="San Francisco Prior Disclosure Attorney Hero">
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
          <h1>San Francisco Prior Disclosure Attorney<br />CBP Penalty Mitigation Expert</h1>
          <p className="hero-subtitle">
            Expert prior disclosure attorney serving San Francisco and Bay Area importers. Reduce CBP penalties by 75%+ through strategic voluntary disclosure filings. Immediate response to customs violations.
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
              When you discover import violations, filing a <strong>CBP prior disclosure</strong> is your most powerful tool to minimize penalties. Our San Francisco prior disclosure attorneys have saved clients millions in potential penalties through timely, strategic voluntary disclosures.
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
            Prior Disclosure Services in San Francisco
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Prior Disclosure Preparation & Filing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our San Francisco prior disclosure attorneys prepare comprehensive voluntary disclosures that meet all CBP requirements while minimizing your legal exposure. We handle <strong>duty calculations, legal analysis, and presentation</strong> to CBP Fines, Penalties & Forfeitures officers.
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
                Our San Francisco team conducts <strong>privileged internal audits</strong> to discover violations before CBP does. Attorney-client privilege protects audit findings, allowing you to correct issues strategically through prior disclosure.
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
                When CBP issues a CF-28 Request for Information or you receive audit notification, <strong>time is critical</strong>. Our San Francisco office provides emergency prior disclosure services with 24-48 hour turnaround to preserve your penalty protection.
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

      {/* Service Areas from San Francisco */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Serving San Francisco & Bay Area Importers
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* San Francisco Bay Area */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Francisco & Peninsula</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve importers throughout San Francisco and the Peninsula:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'San Francisco', 'South San Francisco', 'Daly City', 'Pacifica',
                  'San Bruno', 'Millbrae', 'Burlingame', 'San Mateo',
                  'Foster City', 'Belmont', 'San Carlos', 'Redwood City',
                  'Menlo Park', 'Palo Alto', 'Mountain View', 'Sunnyvale'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* East Bay & North Bay */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">East Bay & North Bay</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Convenient access for East Bay and North Bay businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Oakland', 'Berkeley', 'Alameda', 'Emeryville',
                  'Fremont', 'Hayward', 'San Leandro', 'Dublin',
                  'Pleasanton', 'Livermore', 'Concord', 'Walnut Creek',
                  'San Rafael', 'Novato', 'Petaluma', 'Santa Rosa'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Statewide & Nationwide */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Statewide & Nationwide Representation</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">California Ports</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of Oakland</li>
                  <li>Port of San Francisco</li>
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">CBP Offices</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>CBP San Francisco FP&F</li>
                  <li>CBP Oakland</li>
                  <li>CBP Los Angeles/Long Beach</li>
                  <li>Nationwide CBP Locations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Practice</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>U.S. Court of International Trade</li>
                  <li>Court of Appeals (Federal Circuit)</li>
                  <li>CBP Headquarters (Washington DC)</li>
                  <li>Commerce Department</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Prior Disclosure */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why San Francisco Importers Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Prior Disclosure Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We focus <strong>exclusively on customs law</strong> and have filed hundreds of successful prior disclosures. We know exactly how to calculate duties, present mitigating factors, and negotiate with CBP FP&F officers to minimize your exposure.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Results</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our San Francisco clients have <strong>saved millions in penalties</strong> through strategic prior disclosure. We've successfully handled disclosures involving classification errors, valuation issues, AD/CVD violations, and Section 301 tariff problems.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Prior disclosure timing is <strong>critical</strong>. We provide emergency filing services with 24-48 hour turnaround when CBP issues CF-28 notices or you discover urgent violations. Same-day consultation available.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Privileged Audit Protection</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our internal audits are conducted under <strong>attorney-client privilege</strong>, protecting findings from discovery. This allows you to identify and correct violations strategically without creating evidence against yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prior Disclosure Process */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Our Prior Disclosure Process
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start justify-center">
            <div>
              <h3 className="text-xl font-bold text-primary-navy mb-4">Step 1: Violation Assessment</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We conduct a privileged review of your import transactions to identify the nature and extent of violations, affected entries, and potential duty exposure.
              </p>

              <h3 className="text-xl font-bold text-primary-navy mb-4">Step 2: Duty Calculation</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our team calculates the actual loss of revenue to CBP, including duty differentials, interest calculations, and MPF/HMF adjustments.
              </p>

              <h3 className="text-xl font-bold text-primary-navy mb-4">Step 3: Disclosure Preparation</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We prepare a comprehensive prior disclosure package including legal memorandum, entry schedules, duty calculations, and tender of payment.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary-navy mb-4">Step 4: CBP Filing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We file the prior disclosure with the appropriate CBP Fines, Penalties & Forfeitures office and submit tender of duties owed.
              </p>

              <h3 className="text-xl font-bold text-primary-navy mb-4">Step 5: Negotiation & Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We negotiate with CBP regarding penalty assessment, present mitigating factors, and demonstrate your compliance improvements.
              </p>

              <h3 className="text-xl font-bold text-primary-navy mb-4">Step 6: Resolution</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We secure final resolution with CBP, typically resulting in acceptance of tendered duties plus interest with minimal or no penalties.
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

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/oakland-customs-attorney" className="service-link">
                    <span className="service-link__title">Oakland Port Attorney</span>
                    <p className="service-link__description">Port of Oakland expertise</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/los-angeles-customs-attorney" className="service-link">
                    <span className="service-link__title">Los Angeles Customs</span>
                    <p className="service-link__description">Port of LA/Long Beach</p>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Prior Disclosure Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            If you've discovered import violations, time is critical. Contact our San Francisco prior disclosure attorneys today for immediate guidance on protecting your business from CBP penalties.
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

export default SanFranciscoPriorDisclosurePage;
