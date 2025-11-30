
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const PalmdaleCountervailingPage: React.FC = () => {
  useMeta({
    title: 'Palmdale Countervailing Duty Attorney | CVD Defense Lawyer CA',
    description: 'Palmdale countervailing duty attorney defending against foreign subsidy duties. Expert CVD scope rulings, Commerce defense, aerospace & defense trade law. (310) 744-1328.',
    keywords: 'countervailing duty attorney palmdale, cvd lawyer palmdale, subsidy defense attorney, commerce department lawyer palmdale, aerospace customs lawyer, antelope valley trade attorney',
    canonical: 'palmdale-countervailing-duty',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-cvd.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Palmdale Countervailing Duty Attorney - CVD Defense & Commerce Department Representation',
        description: 'Expert Palmdale countervailing duty attorney providing CVD defense, scope rulings, and subsidy investigation representation for Antelope Valley aerospace, defense, and manufacturing industries.',
        url: `${siteConfig.siteUrl}/#palmdale-countervailing-duty`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/#california-offices` },
        { name: 'Palmdale Countervailing Duty Attorney', url: `${siteConfig.siteUrl}/#palmdale-countervailing-duty` }
      ]),
      generateFAQSchema([
        {
          question: 'What are countervailing duties and how do they affect Palmdale aerospace companies?',
          answer: 'Countervailing duties (CVD) are tariffs imposed to offset unfair foreign government subsidies. When foreign governments provide financial assistance to manufacturers or exporters, the U.S. Department of Commerce can impose CVD rates of 10% to 200%+ on top of normal tariffs. Palmdale aerospace and defense companies importing aluminum, steel, specialty metals, composite materials, and aerospace components may face massive CVD. Our Palmdale countervailing duty attorney helps you determine CVD exposure and develop avoidance strategies.',
        },
        {
          question: 'Do CVD orders affect aerospace and defense materials imported by Palmdale contractors?',
          answer: 'Yes. CVD orders cover aluminum extrusions, steel products, specialty alloys, composites, and other materials used in aerospace and defense manufacturing from China, India, and other countries. If you import metals, advanced materials, fasteners, or aerospace components for Air Force Plant 42 operations, CVD exposure is likely. Our Palmdale attorney conducts CVD risk assessments specific to aerospace and defense supply chains.',
        },
        {
          question: 'What is a CVD scope ruling and why is it critical for defense contractors?',
          answer: 'A scope ruling from the Commerce Department determines whether your specific aerospace or defense product is covered by an existing CVD order. If your product is excluded from scope due to unique specifications, aerospace certifications, or military specifications, you avoid CVD entirely. This is critical for specialized defense-grade materials. Our Palmdale CVD attorney prepares comprehensive scope ruling requests with technical specifications, military standards documentation, and legal analysis.',
        },
        {
          question: 'Can you help with foreign CVD investigations affecting U.S. aerospace and defense exporters?',
          answer: 'Yes. U.S. aerospace and defense exporters can face foreign CVD investigations alleging U.S. government subsidies (DoD contracts, Air Force funding, NASA programs, tax incentives). Our Palmdale attorney provides defense representation in foreign CVD proceedings including questionnaire responses, subsidy analysis, and verification defense.',
        },
        {
          question: 'Do you serve other Antelope Valley cities besides Palmdale?',
          answer: 'Yes, from our Palmdale location we serve the entire Antelope Valley aerospace and defense corridor including Lancaster, Edwards AFB, Air Force Plant 42, Rosamond, Quartz Hill, and the entire aerospace manufacturing region. We represent aerospace manufacturers, defense contractors, and suppliers throughout the Antelope Valley with countervailing duty and customs legal services.',
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
      <section className="hero" aria-label="Palmdale Countervailing Duty Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Palmdale Countervailing Duty Attorney<br />CVD Defense & Subsidy Law</h1>
          <p className="hero-subtitle">
            Expert countervailing duty defense for Palmdale and Antelope Valley. CVD scope rulings, Commerce Department representation, and aerospace & defense trade law.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free CVD Analysis</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Palmdale CVD Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Aerospace & Defense CVD Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Countervailing duties can add <strong>10% to 200%+ in additional tariffs</strong> to offset foreign government subsidies. These duties affect Palmdale aerospace and defense manufacturers importing aluminum, steel, specialty metals, composite materials, and aerospace components. Our Palmdale countervailing duty attorney helps you navigate CVD orders, scope rulings, and Commerce Department proceedings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CVD Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                Focused expertise on <strong>countervailing duty law and subsidy analysis</strong>. Commerce Department scope rulings, administrative reviews, and CVD defense.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Aerospace & Defense Knowledge</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep understanding of <strong>Palmdale aerospace and defense sector</strong> including Air Force Plant 42 operations and defense contractor compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Commerce Department Experience</h3>
              <p className="text-text-secondary leading-relaxed">
                Extensive experience with <strong>Commerce Department CVD proceedings</strong>, scope rulings, and subsidy verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CVD Defense Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Countervailing Duty Defense Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CVD Scope Ruling Requests for Aerospace & Defense Materials</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A successful CVD scope ruling excludes your aerospace and defense materials from countervailing duty orders, <strong>eliminating massive subsidy duty liability</strong>. Our Palmdale attorney prepares:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Scope ruling applications to Department of Commerce</li>
                <li>Technical specifications for aerospace and military-grade materials</li>
                <li>Military specifications (MIL-SPEC) and aerospace certification documentation</li>
                <li>End-use analysis demonstrating aerospace and defense applications</li>
                <li>Manufacturing process details and advanced materials analysis</li>
                <li>Legal argument demonstrating scope exclusion based on specifications</li>
                <li>Response to Commerce Department technical inquiries and requests</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Defense Contractor CVD Compliance Assessment</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Palmdale defense contractors must understand <strong>CVD exposure in complex supply chains</strong>. We provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CVD order applicability analysis for defense materials</li>
                <li>Aluminum, steel, composites, and specialty alloy CVD risk assessment</li>
                <li>Country of origin verification for CVD compliance</li>
                <li>Aerospace and defense component-specific scope analysis</li>
                <li>Cash deposit and bonding requirement calculations</li>
                <li>Government contract cost impact analysis and pricing adjustments</li>
                <li>Mitigation strategies and alternative sourcing recommendations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign CVD Investigation Defense (U.S. Exporters)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                U.S. aerospace and defense exporters may face <strong>foreign CVD investigations</strong> alleging U.S. government subsidies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CVD questionnaire responses to foreign authorities</li>
                <li>Subsidy benefit analysis and allocation challenges</li>
                <li>DoD, Air Force, NASA, and government contract documentation</li>
                <li>Tax incentive, R&D credit, and subsidy program analysis</li>
                <li>De minimis subsidy arguments (less than 1% threshold)</li>
                <li>Verification preparation for foreign authority audits</li>
                <li>Administrative review and appeal participation in foreign proceedings</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CVD Administrative Reviews</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Commerce conducts annual <strong>administrative reviews recalculating CVD rates</strong> based on subsidy usage:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Administrative review request filing to Commerce</li>
                <li>Company-specific CVD rate determination</li>
                <li>Subsidy questionnaire responses and comprehensive documentation</li>
                <li>Benefit allocation methodology for aerospace and defense manufacturers</li>
                <li>Verification preparation and defense strategies</li>
                <li>Subsidy program legal analysis and arguments</li>
                <li>Rate reduction through accurate and complete submissions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Country of Origin Planning for Defense Materials</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CVD orders are <strong>country-specific</strong>. Strategic country of origin planning can avoid coverage:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Substantial transformation analysis for aerospace and defense materials</li>
                <li>Multi-country processing and manufacturing strategies</li>
                <li>Third-country finishing, assembly, and integration operations</li>
                <li>Country of origin rulings from CBP for aerospace components</li>
                <li>Documentation requirements to substantiate origin claims</li>
                <li>Supply chain restructuring to avoid CVD-covered countries</li>
                <li>EAPA-proof country of origin substantiation and record-keeping</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CVD Cash Deposits & Government Contract Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When aerospace and defense materials are subject to CVD, <strong>massive cash deposits affect contract pricing</strong>. We minimize impact:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CVD cash deposit rate verification and calculation</li>
                <li>Government contract cost recovery and equitable price adjustments</li>
                <li>Continuous bond sufficiency analysis for CVD exposure</li>
                <li>Single transaction bond strategies for high-CVD shipments</li>
                <li>Suspension of liquidation planning and management</li>
                <li>Interim relief strategies during scope ruling proceedings</li>
                <li>Refund claims and procedures for overpaid CVD deposits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Palmdale Industries Affected by CVD
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Aluminum & Advanced Materials', impact: 'U.S. CVD 10-200%+', examples: 'Aluminum extrusions, sheet, plate, aerospace-grade aluminum, advanced composites from China and other countries' },
              { title: 'Steel & Specialty Alloys', impact: 'U.S. CVD 15-180%', examples: 'Steel fasteners, specialty steel, titanium, high-strength alloys, military-grade materials subject to CVD' },
              { title: 'Aerospace & Defense Components', impact: 'U.S. CVD 5-150%', examples: 'Bearings, fasteners, hydraulic systems, landing gear, avionics components potentially covered by CVD orders' },
              { title: 'Defense Contractors & Exporters', impact: 'Foreign CVD Risk', examples: 'U.S. aerospace and defense exporters may face foreign CVD investigations alleging DoD/Air Force contract subsidies' },
            ].map((industry) => (
              <div key={industry.title} className="bg-neutral-50 p-6 rounded-lg border-l-4 border-secondary-teal">
                <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond">{industry.title}</h3>
                <div className="mb-2">
                  <span className="text-sm font-bold text-secondary-teal">CVD Impact: </span>
                  <span className="text-sm text-text-secondary">{industry.impact}</span>
                </div>
                <div>
                  <span className="text-sm font-bold text-primary-navy">Details: </span>
                  <span className="text-sm text-text-secondary">{industry.examples}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Over 400 Active CVD Orders</h3>
            <p className="text-neutral-200">
              The U.S. maintains over 400 active countervailing duty orders covering thousands of products.
              Palmdale aerospace and defense manufacturers face significant CVD exposure on imported materials.
              Our attorney conducts comprehensive CVD risk assessments for defense contractor supply chains.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Choose Our CVD Defense Team
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CVD Law Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>countervailing duty law and subsidy analysis</strong> - not general customs. Deep expertise in Commerce Department procedures, scope interpretations, and CVD defense strategies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Aerospace & Defense Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Understanding of <strong>Palmdale aerospace and defense operations</strong> including Air Force Plant 42 and CVD compliance for defense contractors.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Scope Ruling Success</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Successful CVD scope exclusions</strong> for aerospace and defense materials saving Palmdale manufacturers millions in avoided duties.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Government Contract Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Understanding of <strong>CVD impact on government contract pricing</strong>, equitable adjustments, and cost recovery for defense contractors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related City Pages */}
      <RelatedCityPages currentCity="Palmdale" region="los-angeles" />

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related CVD Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">CVD Defense Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#cvd-scope-rulings" className="service-link">
                    <span className="service-link__title">CVD Scope Rulings</span>
                    <p className="service-link__description">Commerce scope determinations</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#defense-contractor-cvd" className="service-link">
                    <span className="service-link__title">Defense Contractor CVD</span>
                    <p className="service-link__description">Government contract compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#administrative-reviews" className="service-link">
                    <span className="service-link__title">Administrative Reviews</span>
                    <p className="service-link__description">CVD rate reduction</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Related Practice Areas */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Related Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#export-controls-itar" className="service-link">
                    <span className="service-link__title">Export Controls (ITAR/EAR)</span>
                    <p className="service-link__description">Aerospace export compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#customs-defense" className="service-link">
                    <span className="service-link__title">Customs Defense</span>
                    <p className="service-link__description">CBP audit & penalty defense</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">CVD Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#resources/cvd-guide" className="service-link">
                    <span className="service-link__title">Countervailing Duty Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/defense-contractor-guide" className="service-link">
                    <span className="service-link__title">Defense Contractor Guide</span>
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
      <section className="py-20 px-6 bg-primary-navy text-white" id="schedule-consultation">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Protect Your Defense Operations from CVD
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            CVD rates can exceed 200% on aerospace and defense materials, impacting government contracts and profitability. Our Palmdale countervailing duty attorney helps you avoid or minimize these duties through scope rulings, subsidy analysis, and Commerce Department defense. Free consultation.
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

export default PalmdaleCountervailingPage;
