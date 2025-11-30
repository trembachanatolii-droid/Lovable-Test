import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import {
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
  generateFAQSchema
} from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const ElkGroveCountervailingPage: React.FC = () => {
  useMeta({
    title: 'Elk Grove Countervailing Duty Attorney | CVD Defense Lawyer CA',
    description:
      'Elk Grove countervailing duty attorney defending against foreign subsidy duties. Expert CVD scope rulings, Commerce defense, tech & manufacturing trade law. (310) 744-1328.',
    keywords:
      'countervailing duty attorney elk grove, cvd lawyer elk grove, subsidy defense attorney, commerce department lawyer elk grove, elk grove customs lawyer, trade remedy attorney',
    canonical: 'elk-grove-countervailing-duty',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-cvd.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Elk Grove Countervailing Duty Attorney - CVD Defense & Commerce Department Representation',
        description:
          'Expert Elk Grove countervailing duty attorney providing CVD defense, scope rulings, and subsidy investigation representation for Central Valley technology and manufacturing industries.',
        url: `${siteConfig.siteUrl}/#elk-grove-countervailing-duty`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/#california-offices` },
        { name: 'Elk Grove Countervailing Duty Attorney', url: `${siteConfig.siteUrl}/#elk-grove-countervailing-duty` }
      ]),
      generateFAQSchema([
        {
          question: 'What are countervailing duties and how do they affect Elk Grove businesses?',
          answer:
            'Countervailing duties (CVD) are tariffs imposed to offset unfair foreign government subsidies. When foreign governments provide financial assistance to manufacturers or exporters, the U.S. Department of Commerce can impose CVD rates of 10% to 200%+ on top of normal tariffs. Elk Grove technology and manufacturing companies importing steel, aluminum, electronics, and other products may face massive CVD. Our Elk Grove countervailing duty attorney helps you determine CVD exposure and develop avoidance strategies.',
        },
        {
          question: 'Can CVD apply to technology products imported by Elk Grove companies?',
          answer:
            'Yes. CVD orders cover solar panels, semiconductors, and electronic components from China and other countries where governments provide subsidies to tech manufacturers. If you import computer hardware, solar technology, or electronics components, CVD exposure is likely. Our Elk Grove attorney conducts CVD risk assessments and prepares scope ruling requests.',
        },
        {
          question: 'What is a CVD scope ruling and why do I need one?',
          answer:
            'A scope ruling from the Commerce Department determines whether your specific product is covered by an existing CVD order. If your product is excluded from scope, you avoid CVD entirely. Scope rulings are critical when the order language is ambiguous or your product has unique characteristics. Our Elk Grove CVD attorney prepares comprehensive scope ruling requests with technical specifications, product samples, and legal analysis.',
        },
        {
          question: 'How do you help Elk Grove companies with EAPA investigations related to CVD?',
          answer:
            "CBP's Enforce and Protect Act (EAPA) investigates CVD evasion through transshipment or misrepresentation of country of origin. EAPA investigations are serious - we provide immediate response including comprehensive questionnaires, supply chain documentation, manufacturing evidence, and substantial transformation analysis. Our Elk Grove attorney has defended numerous EAPA investigations successfully.",
        },
        {
          question: 'Do you serve other Central Valley cities besides Elk Grove?',
          answer:
            'Yes, from our Elk Grove location we serve the entire Central Valley including Sacramento, Folsom, Rancho Cordova, Davis, Roseville, and Stockton. We represent technology companies, manufacturers, agricultural businesses, and importers throughout the Central Valley with countervailing duty and customs legal services.',
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
      <section className="hero" aria-label="Elk Grove Countervailing Duty Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1920&auto=format&fit=crop"
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
          <h1>
            Elk Grove Countervailing Duty Attorney
            <br />
            CVD Defense & Subsidy Law
          </h1>
          <p className="hero-subtitle">
            Expert countervailing duty defense for Elk Grove and Central Valley. CVD scope rulings, Commerce Department
            representation, and subsidy investigation defense.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">
              Free CVD Analysis
            </a>
            <a href="tel:+13107441328" className="hero-cta-outline">
              Call (310) 744-1328
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Elk Grove CVD Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Central Valley CVD Defense Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Countervailing duties can add <strong>10% to 200%+ in additional tariffs</strong> to offset foreign
              government subsidies. These duties affect Elk Grove technology companies, manufacturers, and importers of
              steel, aluminum, solar products, and electronics. Our Elk Grove countervailing duty attorney helps you
              navigate CVD orders, scope rulings, and Commerce Department proceedings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CVD Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                Focused expertise on <strong>countervailing duty law and subsidy analysis</strong>. Commerce Department
                scope rulings, administrative reviews, and CVD defense.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tech Industry Knowledge</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep understanding of <strong>Elk Grove technology sector</strong> CVD issues including solar panels,
                electronics, and semiconductor imports.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Commerce Department Experience</h3>
              <p className="text-text-secondary leading-relaxed">
                Extensive experience with <strong>Commerce Department CVD proceedings</strong>, scope rulings, and subsidy
                verification.
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
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CVD Scope Ruling Requests</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A successful CVD scope ruling excludes your product from countervailing duty orders,{' '}
                <strong>eliminating massive subsidy duty liability</strong>. Our Elk Grove attorney prepares:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Scope ruling applications to Department of Commerce</li>
                <li>Technical product specifications and physical characteristics</li>
                <li>Detailed comparison to scope language and prior rulings</li>
                <li>Manufacturing process and end-use documentation</li>
                <li>Legal argument demonstrating scope exclusion</li>
                <li>Response to Commerce Department inquiries</li>
                <li>Product samples, testing results, and expert analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CVD Risk Assessment & Planning</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Many Elk Grove companies don't realize their imports are subject to CVD. We provide{' '}
                <strong>comprehensive CVD risk assessments</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CVD order applicability analysis for your products</li>
                <li>Country of origin and subsidy program identification</li>
                <li>Scope coverage determination</li>
                <li>Cash deposit and liquidation exposure calculation</li>
                <li>Mitigation strategies and action plan</li>
                <li>Scope ruling feasibility assessment</li>
                <li>Alternative sourcing recommendations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CVD Administrative Reviews</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Commerce conducts annual <strong>administrative reviews recalculating CVD rates</strong> based on subsidy
                usage:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Administrative review request filing</li>
                <li>Company-specific CVD rate determination</li>
                <li>Subsidy questionnaire responses to Commerce</li>
                <li>Benefit allocation and calculation challenges</li>
                <li>Verification preparation and defense</li>
                <li>Subsidy program documentation and analysis</li>
                <li>Rate reduction through accurate data submission</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EAPA CVD Evasion Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP's Enforce and Protect Act (EAPA) investigates <strong>CVD evasion through transshipment or misrepresentation</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Immediate EAPA investigation response strategy</li>
                <li>Comprehensive CBP questionnaire responses</li>
                <li>Supply chain documentation and verification</li>
                <li>Country of origin substantiation with manufacturing evidence</li>
                <li>Substantial transformation legal analysis and opinions</li>
                <li>Factory verification and third-party audits</li>
                <li>Defense against evasion allegations and interim measures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Country of Origin Planning to Avoid CVD</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CVD orders are <strong>country-specific</strong>. Strategic country of origin planning can avoid coverage:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Substantial transformation analysis for multi-country supply chains</li>
                <li>Manufacturing operations that change country of origin</li>
                <li>Third-country processing and assembly strategies</li>
                <li>Country of origin rulings from CBP</li>
                <li>Documentation requirements for origin claims</li>
                <li>Supply chain restructuring to avoid CVD countries</li>
                <li>EAPA-proof country of origin substantiation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CVD Cash Deposits & Bonding</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When products are subject to CVD, <strong>massive cash deposits are required at entry</strong>. We minimize impact:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CVD cash deposit rate verification and calculation</li>
                <li>Continuous bond sufficiency analysis</li>
                <li>Single transaction bond strategies for high-CVD shipments</li>
                <li>Suspension of liquidation planning and management</li>
                <li>Interim measures during scope ruling proceedings</li>
                <li>Refund claims for overpaid CVD deposits</li>
                <li>Liquidation timing and payment optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Elk Grove Industries Affected by CVD
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: 'Solar Technology',
                impact: 'U.S. CVD 15-250%',
                examples:
                  'Solar panels, photovoltaic cells, solar modules from China, Taiwan, Vietnam, Malaysia facing massive CVD for government subsidies',
              },
              {
                title: 'Steel & Aluminum',
                impact: 'U.S. CVD 10-200%+',
                examples:
                  'Steel pipe, rebar, aluminum extrusions, metal fabrication materials facing CVD from China, India, Mexico, Vietnam',
              },
              {
                title: 'Electronics & Components',
                impact: 'U.S. CVD 5-100%',
                examples:
                  'Circuit boards, semiconductors, electronic components subject to CVD alleging foreign manufacturing subsidies',
              },
              {
                title: 'Manufacturing Materials',
                impact: 'U.S. CVD 15-150%',
                examples:
                  'Chemicals, paper products, tires, industrial equipment facing CVD for alleged government grants and tax benefits',
              },
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
              The U.S. maintains over 400 active countervailing duty orders covering thousands of products. Elk Grove
              technology and manufacturing companies face significant CVD exposure. Our attorney conducts comprehensive
              CVD risk assessments.
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
                We specialize in <strong>countervailing duty law and subsidy analysis</strong> - not general customs.
                Deep expertise in Commerce Department procedures, scope interpretations, and CVD defense strategies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Technology Sector Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Understanding of <strong>Elk Grove tech industry CVD challenges</strong> including solar products,
                electronics imports, and manufacturing materials.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Scope Ruling Success</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Successful CVD scope exclusions</strong> saving Elk Grove importers millions through well-crafted
                ruling requests and technical analysis.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Same-day response</strong> for CVD emergencies including EAPA notices, Commerce inquiries, and
                CBP detentions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related City Pages */}
      <RelatedCityPages currentCity="Elk Grove" region="central-valley" />

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
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#eapa-cvd-defense" className="service-link">
                    <span className="service-link__title">EAPA CVD Defense</span>
                    <p className="service-link__description">Evasion investigation defense</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
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
                        <path d="M5 12h14M12 5l7 7-7 7" />
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
                  <a href="#antidumping-defense" className="service-link">
                    <span className="service-link__title">Antidumping Defense</span>
                    <p className="service-link__description">AD duty defense</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
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
                        <path d="M5 12h14M12 5l7 7-7 7" />
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
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/scope-ruling-strategies" className="service-link">
                    <span className="service-link__title">CVD Scope Ruling Strategies</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#trade-law-faq" className="service-link">
                    <span className="service-link__title">FAQ Center</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
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
            Avoid Massive Countervailing Duties
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            CVD rates can exceed 200%, destroying your profit margins. Our Elk Grove countervailing duty attorney helps
            you avoid or minimize these duties through scope rulings, subsidy analysis, and Commerce Department defense.
            Free consultation.
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

export default ElkGroveCountervailingPage;
