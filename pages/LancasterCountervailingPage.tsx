
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LancasterCountervailingPage: React.FC = () => {
  useMeta({
    title: 'Lancaster Countervailing Duty Attorney | CVD Defense Lawyer CA',
    description: 'Lancaster countervailing duty attorney defending against foreign subsidy duties. Expert CVD scope rulings, Commerce defense, aerospace trade law. (310) 744-1328.',
    keywords: 'countervailing duty attorney lancaster, cvd lawyer lancaster, subsidy defense attorney, commerce department lawyer lancaster, aerospace customs lawyer, antelope valley trade attorney',
    canonical: 'lancaster-countervailing-duty',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-cvd.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Lancaster Countervailing Duty Attorney - CVD Defense & Commerce Department Representation',
        description: 'Expert Lancaster countervailing duty attorney providing CVD defense, scope rulings, and subsidy investigation representation for Antelope Valley aerospace and manufacturing industries.',
        url: `${siteConfig.siteUrl}/lancaster-countervailing-duty`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Lancaster Countervailing Duty Attorney', url: `${siteConfig.siteUrl}/lancaster-countervailing-duty` }
      ]),
      generateFAQSchema([
        {
          question: 'What are countervailing duties and how do they affect Lancaster aerospace companies?',
          answer: 'Countervailing duties (CVD) are tariffs imposed to offset unfair foreign government subsidies. When foreign governments provide financial assistance to manufacturers or exporters, the U.S. Department of Commerce can impose CVD rates of 10% to 200%+ on top of normal tariffs. Lancaster aerospace companies importing aluminum, steel, specialty metals, and components may face massive CVD. Our Lancaster countervailing duty attorney helps you determine CVD exposure and develop avoidance strategies.',
        },
        {
          question: 'Do CVD orders affect aerospace materials imported by Lancaster manufacturers?',
          answer: 'Yes. CVD orders cover aluminum extrusions, steel products, specialty alloys, and other materials used in aerospace manufacturing from China, India, and other countries. If you import metals, fasteners, or aerospace components, CVD exposure is likely. Our Lancaster attorney conducts CVD risk assessments specific to aerospace supply chains and prepares scope ruling requests.',
        },
        {
          question: 'What is a CVD scope ruling and why is it important for aerospace companies?',
          answer: 'A scope ruling from the Commerce Department determines whether your specific aerospace product or material is covered by an existing CVD order. If your product is excluded from scope due to unique specifications or end-use, you avoid CVD entirely. This is critical for specialized aerospace-grade materials. Our Lancaster CVD attorney prepares comprehensive scope ruling requests with technical specifications, aerospace certifications, and legal analysis.',
        },
        {
          question: 'Can you help with foreign CVD investigations affecting U.S. aerospace exporters?',
          answer: 'Yes. While CVD typically affects U.S. importers, American aerospace exporters can face foreign CVD investigations alleging U.S. government subsidies (NASA contracts, DoD funding, tax incentives). Our Lancaster attorney provides defense representation in foreign CVD proceedings including questionnaire responses and subsidy analysis.',
        },
        {
          question: 'Do you serve other Antelope Valley cities besides Lancaster?',
          answer: 'Yes, from our Lancaster location we serve the entire Antelope Valley aerospace corridor including Palmdale, Edwards AFB, Rosamond, Quartz Hill, California City, and the entire aerospace manufacturing region. We represent aerospace manufacturers, defense contractors, and suppliers throughout the Antelope Valley with countervailing duty and customs legal services.',
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
      <section className="hero" aria-label="Lancaster Countervailing Duty Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Lancaster Countervailing Duty Attorney<br />CVD Defense & Subsidy Law</h1>
          <p className="hero-subtitle">
            Expert countervailing duty defense for Lancaster and Antelope Valley. CVD scope rulings, Commerce Department representation, and aerospace trade law.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free CVD Analysis</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Lancaster CVD Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Antelope Valley Aerospace CVD Defense
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Countervailing duties can add <strong>10% to 200%+ in additional tariffs</strong> to offset foreign government subsidies. These duties affect Lancaster aerospace manufacturers importing aluminum, steel, specialty metals, and aerospace components. Our Lancaster countervailing duty attorney helps you navigate CVD orders, scope rulings, and Commerce Department proceedings.
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
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Aerospace Industry Knowledge</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep understanding of <strong>Antelope Valley aerospace sector</strong> CVD issues for specialized materials and defense contractor compliance.
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
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CVD Scope Ruling Requests for Aerospace Materials</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A successful CVD scope ruling excludes your aerospace materials from countervailing duty orders, <strong>eliminating massive subsidy duty liability</strong>. Our Lancaster attorney prepares:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Scope ruling applications to Department of Commerce</li>
                <li>Technical specifications for aerospace-grade materials</li>
                <li>Aerospace certification and quality standard documentation</li>
                <li>End-use analysis demonstrating aerospace applications</li>
                <li>Manufacturing process details and metallurgical analysis</li>
                <li>Legal argument demonstrating scope exclusion</li>
                <li>Response to Commerce Department technical inquiries</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Aerospace Supply Chain CVD Assessment</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Lancaster aerospace manufacturers must understand <strong>CVD exposure in complex supply chains</strong>. We provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CVD order applicability analysis for aerospace materials</li>
                <li>Aluminum, steel, and specialty alloy CVD risk assessment</li>
                <li>Country of origin verification for CVD compliance</li>
                <li>Aerospace component-specific scope analysis</li>
                <li>Cash deposit and bonding requirement calculations</li>
                <li>Government contract cost impact analysis</li>
                <li>Mitigation strategies and alternative sourcing recommendations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign CVD Investigation Defense (U.S. Exporters)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                U.S. aerospace exporters may face <strong>foreign CVD investigations</strong> alleging U.S. government subsidies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CVD questionnaire responses to foreign authorities</li>
                <li>Subsidy benefit analysis and allocation challenges</li>
                <li>NASA, DoD, and government contract documentation</li>
                <li>Tax incentive and subsidy program analysis</li>
                <li>De minimis subsidy arguments (less than 1% threshold)</li>
                <li>Verification preparation for foreign authority audits</li>
                <li>Administrative review and appeal participation</li>
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
                <li>Subsidy questionnaire responses and documentation</li>
                <li>Benefit allocation methodology for aerospace manufacturers</li>
                <li>Verification preparation and defense strategies</li>
                <li>Subsidy program analysis and legal arguments</li>
                <li>Rate reduction through accurate and complete submissions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Country of Origin Planning for Aerospace Materials</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CVD orders are <strong>country-specific</strong>. Strategic country of origin planning can avoid coverage:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Substantial transformation analysis for aerospace materials</li>
                <li>Multi-country processing and manufacturing strategies</li>
                <li>Third-country finishing and assembly operations</li>
                <li>Country of origin rulings from CBP for aerospace components</li>
                <li>Documentation requirements to substantiate origin claims</li>
                <li>Supply chain restructuring to avoid CVD-covered countries</li>
                <li>EAPA-proof country of origin substantiation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CVD Cash Deposits & Government Contract Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When aerospace materials are subject to CVD, <strong>massive cash deposits affect contract pricing</strong>. We minimize impact:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CVD cash deposit rate verification and calculation</li>
                <li>Government contract cost recovery and price adjustments</li>
                <li>Continuous bond sufficiency analysis for CVD exposure</li>
                <li>Single transaction bond strategies for high-CVD shipments</li>
                <li>Suspension of liquidation planning and management</li>
                <li>Interim relief strategies during scope ruling proceedings</li>
                <li>Refund claims for overpaid CVD deposits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Lancaster Aerospace Industries Affected by CVD
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Aluminum Products', impact: 'U.S. CVD 10-200%+', examples: 'Aluminum extrusions, sheet, plate, aerospace-grade aluminum from China and other countries facing massive CVD' },
              { title: 'Steel & Specialty Alloys', impact: 'U.S. CVD 15-180%', examples: 'Steel fasteners, specialty steel, titanium, high-strength alloys for aerospace applications subject to CVD' },
              { title: 'Aerospace Components', impact: 'U.S. CVD 5-150%', examples: 'Bearings, fasteners, hydraulic components, landing gear parts potentially covered by CVD orders' },
              { title: 'Defense Contractors', impact: 'Foreign CVD Risk', examples: 'U.S. aerospace exporters may face foreign CVD investigations alleging NASA/DoD contract subsidies' },
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
              Lancaster aerospace manufacturers face significant CVD exposure on imported materials.
              Our attorney conducts comprehensive CVD risk assessments for aerospace supply chains.
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
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Aerospace Industry Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Understanding of <strong>Antelope Valley aerospace operations</strong> and CVD compliance for defense contractors and aerospace manufacturers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Scope Ruling Success</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Successful CVD scope exclusions</strong> for aerospace materials saving Lancaster manufacturers millions in avoided duties.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Government Contract Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Understanding of <strong>CVD impact on government contract pricing</strong> and cost recovery mechanisms for defense contractors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related City Pages */}
      <RelatedCityPages currentCity="Lancaster" region="los-angeles" />

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
                  <Link to="/cvd-scope-rulings" className="service-link">
                    <span className="service-link__title">CVD Scope Rulings</span>
                    <p className="service-link__description">Commerce scope determinations</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/aerospace-cvd-compliance" className="service-link">
                    <span className="service-link__title">Aerospace CVD Compliance</span>
                    <p className="service-link__description">Defense contractor services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/administrative-reviews" className="service-link">
                    <span className="service-link__title">Administrative Reviews</span>
                    <p className="service-link__description">CVD rate reduction</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Practice Areas */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Related Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="/export-controls" className="service-link">
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
                  <Link to="/customs-defense" className="service-link">
                    <span className="service-link__title">Customs Defense</span>
                    <p className="service-link__description">CBP audit & penalty defense</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">CVD Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/cvd-guide" className="service-link">
                    <span className="service-link__title">Countervailing Duty Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/aerospace-trade-compliance" className="service-link">
                    <span className="service-link__title">Aerospace Trade Compliance</span>
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
      <section className="py-20 px-6 bg-primary-navy text-white" id="schedule-consultation">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Protect Your Aerospace Operations from CVD
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            CVD rates can exceed 200% on aerospace materials, impacting government contracts and profitability. Our Lancaster countervailing duty attorney helps you avoid or minimize these duties through scope rulings, subsidy analysis, and Commerce Department defense. Free consultation.
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

export default LancasterCountervailingPage;
