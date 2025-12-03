
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const OaklandCustomsPenaltyPage: React.FC = () => {
  useMeta({
    title: 'Oakland Customs Penalty Defense Attorney | CBP Penalty Mitigation',
    description: 'Oakland customs penalty defense attorney. Expert CBP penalty mitigation, CF-29 response & prior disclosure. Port of Oakland access. Reduce penalties 75%+. (310) 744-1328.',
    keywords: 'customs penalty defense attorney oakland, cbp penalty attorney oakland, customs penalty mitigation oakland, cf-29 response attorney oakland, customs fine attorney oakland, oakland port customs lawyer',
    canonical: 'oakland-customs-penalty-defense-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-oakland-penalty.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Oakland Customs Penalty Defense Attorney - CBP Penalty Mitigation Expert',
        description: 'Oakland customs penalty defense attorney providing expert CBP penalty mitigation, CF-29 response, and prior disclosure services. Reduce customs penalties by 75% or more.',
        url: `${siteConfig.siteUrl}/oakland-customs-penalty-defense-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Oakland Customs Penalty Defense Attorney', url: `${siteConfig.siteUrl}/oakland-customs-penalty-defense-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What types of CBP penalties can you defend against in Oakland?',
          answer: 'Our Oakland customs penalty defense practice handles all types of CBP penalties including: classification violations (incorrect HTS codes), valuation errors (undervaluation or related party issues), country of origin violations, antidumping/countervailing duty evasion, Section 301 tariff misclassification, UFLPA forced labor violations, marking and labeling violations, and intellectual property infringement. We defend penalties assessed under 19 USC § 1592 (fraud/gross negligence/negligence) and 19 USC § 1595a (prohibited/restricted merchandise).',
        },
        {
          question: 'How much are typical CBP customs penalties at Port of Oakland?',
          answer: 'CBP penalty amounts vary based on the violation type and culpability level. For fraud violations under 19 USC § 1592, penalties can reach the domestic value of merchandise (potentially 100%+ of shipment value). For gross negligence, penalties range from 2-4 times the loss of duties. For negligence, penalties range from 1-2 times the duty loss. A $100,000 shipment with $25,000 in unpaid duties could face penalties of $25,000-$50,000 (negligence), $50,000-$100,000 (gross negligence), or up to $100,000+ (fraud). Our Oakland attorneys reduce these penalties by 75% or more.',
        },
        {
          question: 'What is a CF-29 Pre-Penalty Notice and how do I respond?',
          answer: 'A CF-29 is CBP\'s Pre-Penalty Notice formally proposing a monetary penalty for customs violations. You have 30 days from the issue date to respond with a petition for relief or mitigation. Your response must address the legal elements of the violation, present mitigating factors, demonstrate compliance improvements, and propose a reduced penalty amount. Our Oakland attorneys prepare comprehensive CF-29 responses including legal memoranda, supporting documentation, and negotiation with CBP Fines, Penalties & Forfeitures officers. A strong response can reduce proposed penalties by 75-95%.',
        },
        {
          question: 'Can customs penalties be reduced or eliminated?',
          answer: 'Yes, CBP penalties can often be substantially reduced or eliminated through strategic mitigation. Key mitigation factors include: filing prior disclosure before CBP discovers violations, demonstrating good faith compliance efforts, showing violations were inadvertent rather than intentional, implementing corrective measures and compliance programs, cooperation with CBP investigations, limited financial ability to pay, and lack of prior violations. Our Oakland penalty defense attorneys have achieved penalty reductions from millions of dollars to tens of thousands through effective mitigation.',
        },
        {
          question: 'What happens if I ignore a CBP penalty notice?',
          answer: 'Ignoring CBP penalty notices (CF-28, CF-29, or penalty claim letters) has serious consequences. CBP will assess the full proposed penalty without mitigation, refer the debt to Treasury for collection, report the penalty to credit agencies damaging your business credit, place holds on future import shipments, revoke your customs bond making imports impossible, and potentially pursue legal action or seizure of assets. Additionally, failure to respond waives your right to petition or administrative appeal. Immediate response is critical - our Oakland office provides emergency penalty defense services.',
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
      <section className="hero" aria-label="Oakland Customs Penalty Defense Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Oakland Customs Penalty Defense Attorney<br />CBP Penalty Mitigation Expert</h1>
          <p className="hero-subtitle">
            Expert customs penalty defense attorney serving Oakland and Port of Oakland importers. Reduce CBP penalties by 75%+. CF-29 response, prior disclosure, and penalty mitigation services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why You Need Customs Penalty Defense */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Defend Against CBP Penalties at Port of Oakland
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              CBP penalties for customs violations can bankrupt your business. Our Oakland customs penalty defense attorneys have <strong>saved clients millions</strong> through strategic mitigation, prior disclosure, and CF-29 response services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Reduce Penalties 75%+</h3>
              <p className="text-text-secondary leading-relaxed">
                Effective penalty defense can reduce CBP penalties from <strong>millions to thousands</strong> of dollars. We present mitigating factors and negotiate with CBP FP&F officers for maximum reduction.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Oakland Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Our Oakland location provides <strong>rapid response</strong> to Port of Oakland penalty matters, cargo holds, and CBP investigations. Same-day consultation available for urgent matters.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Protect Your Business</h3>
              <p className="text-text-secondary leading-relaxed">
                Unpaid CBP penalties lead to <strong>shipment holds, bond revocation, and collection actions</strong>. We resolve penalties to keep your supply chain moving and protect your credit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customs Penalty Defense Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Customs Penalty Defense Services in Oakland
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CF-29 Pre-Penalty Notice Response</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When you receive a CBP CF-29 Pre-Penalty Notice, you have <strong>30 days to respond</strong> with a petition for mitigation. Our Oakland attorneys prepare comprehensive responses that address legal defenses, present mitigating factors, and negotiate penalty reductions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CF-29 legal analysis and response strategy</li>
                <li>Mitigating factors presentation</li>
                <li>Supporting documentation compilation</li>
                <li>Negotiation with CBP FP&F officers</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Prior Disclosure to Cap Penalties</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Filing a <strong>prior disclosure before CBP discovers violations</strong> caps penalties at the actual loss of revenue rather than the domestic value of merchandise. Our Oakland team provides emergency prior disclosure services to minimize your penalty exposure.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Emergency prior disclosure preparation (24-48 hours)</li>
                <li>Violation identification and quantification</li>
                <li>Duty loss calculation and tender</li>
                <li>Strategic disclosure timing and presentation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Penalty Mitigation & Negotiation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Even after CBP assesses penalties, we can negotiate significant reductions. Our Oakland customs penalty attorneys present <strong>compliance improvements, financial hardship, and good faith efforts</strong> to achieve maximum mitigation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Post-penalty assessment mitigation</li>
                <li>Payment plan negotiation</li>
                <li>Offer in compromise preparation</li>
                <li>Supplemental petition filing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CF-28 Request for Information Response</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A CBP CF-28 Request for Information often precedes penalty proceedings. Our Oakland team responds strategically to <strong>limit CBP's investigation scope</strong> while preserving your rights and considering prior disclosure options.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CF-28 response preparation</li>
                <li>Document production strategy</li>
                <li>Privilege protection</li>
                <li>Concurrent prior disclosure evaluation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Administrative Appeals</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If CBP denies your petition for mitigation, you have appeal rights. Our Oakland attorneys file <strong>supplemental petitions and administrative appeals</strong> to challenge penalty assessments and secure further reductions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Supplemental petition preparation</li>
                <li>Administrative appeal to CBP FP&F</li>
                <li>Review of penalty calculation errors</li>
                <li>Federal court litigation if necessary</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Focused Assessment & Audit Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP Focused Assessments at Port of Oakland often result in <strong>massive penalty assessments</strong>. Our attorneys defend you through the audit process, prepare prior disclosures for discovered violations, and negotiate penalty mitigation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment defense strategy</li>
                <li>Audit response coordination</li>
                <li>Prior disclosure for audit findings</li>
                <li>Post-audit penalty mitigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Oakland */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Serving Oakland & East Bay Importers
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Oakland & East Bay */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Oakland & East Bay</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve importers throughout Oakland and the East Bay:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Oakland', 'Berkeley', 'Alameda', 'Emeryville',
                  'San Leandro', 'Hayward', 'Fremont', 'Newark',
                  'Union City', 'Dublin', 'Pleasanton', 'Livermore',
                  'Walnut Creek', 'Concord', 'Richmond', 'El Cerrito'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Bay Area */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Greater Bay Area</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Convenient access for all Bay Area businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'San Francisco', 'San Jose', 'Santa Clara', 'Sunnyvale',
                  'Mountain View', 'Palo Alto', 'San Mateo', 'Redwood City',
                  'South San Francisco', 'Daly City', 'San Rafael', 'Novato',
                  'Santa Rosa', 'Napa', 'Fairfield', 'Vallejo'
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
                  <li>CBP Oakland FP&F</li>
                  <li>CBP San Francisco</li>
                  <li>CBP Los Angeles/Long Beach</li>
                  <li>All U.S. CBP Ports</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Practice</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>U.S. Court of International Trade</li>
                  <li>Court of Appeals (Federal Circuit)</li>
                  <li>CBP Headquarters (Washington DC)</li>
                  <li>Treasury Collections</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Penalty Defense */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Oakland Importers Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Penalty Defense Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We focus <strong>exclusively on customs law</strong> and have successfully defended hundreds of penalty cases. We know CBP penalty guidelines, mitigation factors, and negotiation strategies to achieve maximum reductions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Results</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our Oakland clients have <strong>saved millions in penalties</strong> through effective CF-29 responses, prior disclosures, and penalty mitigation. We've reduced penalties from $5 million to $50,000, $500,000 to $25,000, and more.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Oakland Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We have extensive experience with <strong>Port of Oakland CBP operations</strong>, local FP&F officers, and Bay Area import industries. This local knowledge translates to more effective penalty defense.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Penalty defense has <strong>strict deadlines</strong> (30 days for CF-29 response). We provide emergency services with same-day consultation and rapid response to preserve all your rights and mitigation opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Penalty Violations */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Common Customs Violations Leading to Penalties
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Classification Violations</h3>
              <p className="text-text-secondary leading-relaxed">
                Incorrect HTS classification resulting in underpayment of duties, particularly for Section 301 China tariffs and AD/CVD orders.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Valuation Errors</h3>
              <p className="text-text-secondary leading-relaxed">
                Undervaluation, failure to declare assists/royalties, or improper use of first sale valuation with related parties.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Country of Origin Violations</h3>
              <p className="text-text-secondary leading-relaxed">
                Incorrect country of origin declarations, transshipment to avoid tariffs, or failure to meet substantial transformation requirements.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-3">AD/CVD Evasion</h3>
              <p className="text-text-secondary leading-relaxed">
                Avoiding antidumping or countervailing duties through misclassification, transshipment, or false country of origin claims.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-3">UFLPA Violations</h3>
              <p className="text-text-secondary leading-relaxed">
                Importing goods made with forced labor from Xinjiang region of China in violation of the Uyghur Forced Labor Prevention Act.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Marking & Labeling</h3>
              <p className="text-text-secondary leading-relaxed">
                Failure to properly mark country of origin, missing required labels, or deceptive marking to avoid duties.
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
                  <a href="#prior-disclosure-filing" className="service-link">
                    <span className="service-link__title">Prior Disclosure Filing</span>
                    <p className="service-link__description">Voluntary disclosure services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#cbp-audit-defense" className="service-link">
                    <span className="service-link__title">CBP Audit Defense</span>
                    <p className="service-link__description">Focused Assessment defense</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#customs-compliance" className="service-link">
                    <span className="service-link__title">Compliance Programs</span>
                    <p className="service-link__description">Prevent future violations</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#san-francisco-customs-attorney" className="service-link">
                    <span className="service-link__title">San Francisco Customs</span>
                    <p className="service-link__description">Bay Area expertise</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#los-angeles-customs-attorney" className="service-link">
                    <span className="service-link__title">Los Angeles Port</span>
                    <p className="service-link__description">Port of LA/Long Beach</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Helpful Guides */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Guides</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#resources/cbp-penalty-defense-guide" className="service-link">
                    <span className="service-link__title">CBP Penalty Defense Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/cf29-response-guide" className="service-link">
                    <span className="service-link__title">CF-29 Response Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/prior-disclosure-guide" className="service-link">
                    <span className="service-link__title">Prior Disclosure Guide</span>
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Penalty Defense Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            If you've received a CBP penalty notice or discovered customs violations, contact our Oakland customs penalty defense attorneys immediately. We provide emergency response to protect your business.
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

export default OaklandCustomsPenaltyPage;
