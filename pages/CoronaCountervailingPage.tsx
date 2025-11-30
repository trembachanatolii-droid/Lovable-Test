
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const CoronaCountervailingPage: React.FC = () => {
  useMeta({
    title: 'Corona Countervailing Duty Attorney | CVD Defense Lawyer CA',
    description: 'Corona countervailing duty attorney defending against foreign subsidy duties. Expert CVD scope rulings, Commerce defense, Inland Empire trade law. (310) 744-1328.',
    keywords: 'countervailing duty attorney corona, cvd lawyer corona, subsidy defense attorney, commerce department lawyer corona, inland empire customs lawyer, trade remedy attorney',
    canonical: 'corona-countervailing-duty',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-cvd.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Corona Countervailing Duty Attorney - CVD Defense & Commerce Department Representation',
        description: 'Expert Corona countervailing duty attorney providing CVD defense, scope rulings, and subsidy investigation representation for Inland Empire manufacturing and distribution industries.',
        url: `${siteConfig.siteUrl}/#corona-countervailing-duty`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/#california-offices` },
        { name: 'Corona Countervailing Duty Attorney', url: `${siteConfig.siteUrl}/#corona-countervailing-duty` }
      ]),
      generateFAQSchema([
        {
          question: 'What are countervailing duties and how do they affect Corona businesses?',
          answer: 'Countervailing duties (CVD) are tariffs imposed to offset unfair foreign government subsidies. When foreign governments provide financial assistance to manufacturers or exporters, the U.S. Department of Commerce can impose CVD rates of 10% to 200%+ on top of normal tariffs. Corona warehouse and distribution companies importing steel, aluminum, furniture, building materials, and manufactured goods face massive CVD exposure. Our Corona countervailing duty attorney helps you determine CVD liability and develop avoidance strategies.',
        },
        {
          question: 'How do CVD orders affect Corona warehouses and distribution centers?',
          answer: 'Many Corona warehouse operators store and distribute products subject to CVD without realizing it. If you handle steel products, furniture, tires, aluminum, or building materials from China, Vietnam, India, or Mexico, CVD cash deposits may be required. Our Corona attorney conducts CVD compliance audits for warehouses and provides import consulting to avoid surprises.',
        },
        {
          question: 'What is a CVD scope ruling and when do I need one?',
          answer: 'A scope ruling from the Commerce Department determines whether your specific product is covered by an existing CVD order. If your product is excluded from scope, you avoid CVD entirely. This is critical for products with ambiguous characteristics or unique features. Our Corona CVD attorney prepares comprehensive scope ruling requests including technical specifications, manufacturing details, and legal analysis to demonstrate exclusion.',
        },
        {
          question: 'Can you help Corona manufacturers facing EAPA investigations?',
          answer: 'Yes. CBP Enforce and Protect Act (EAPA) investigates CVD evasion through transshipment or country of origin misrepresentation. EAPA investigations can result in detention of goods and massive retroactive CVD. Our Corona attorney provides immediate EAPA response including comprehensive documentation, supply chain verification, and substantial transformation analysis.',
        },
        {
          question: 'Do you serve other Inland Empire cities besides Corona?',
          answer: 'Yes, from our Corona location we serve the entire Inland Empire including Riverside, Ontario, Rancho Cucamonga, Fontana, Moreno Valley, and the entire warehouse district. We represent manufacturers, distributors, importers, and logistics companies throughout the Inland Empire with countervailing duty and customs legal services.',
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
      <section className="hero" aria-label="Corona Countervailing Duty Attorney Hero">
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
          <h1>Corona Countervailing Duty Attorney<br />CVD Defense & Subsidy Law</h1>
          <p className="hero-subtitle">
            Expert countervailing duty defense for Corona and Inland Empire. CVD scope rulings, Commerce Department representation, and subsidy investigation defense.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free CVD Analysis</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Corona CVD Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Inland Empire CVD Defense Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Countervailing duties can add <strong>10% to 200%+ in additional tariffs</strong> to offset foreign government subsidies. These duties affect Corona warehouse operators, manufacturers, and distributors handling steel, aluminum, furniture, building materials, and consumer goods. Our Corona countervailing duty attorney helps you navigate CVD orders, scope rulings, and Commerce Department proceedings.
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
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Warehouse Industry Knowledge</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep understanding of <strong>Corona warehouse and distribution</strong> CVD compliance challenges for imported goods.
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
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CVD Scope Ruling Requests</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A successful CVD scope ruling excludes your product from countervailing duty orders, <strong>eliminating massive subsidy duty liability</strong>. Our Corona attorney prepares:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Scope ruling applications to Department of Commerce</li>
                <li>Technical product specifications and physical characteristics</li>
                <li>Detailed comparison to scope language and precedent rulings</li>
                <li>Manufacturing process and end-use documentation</li>
                <li>Legal argument demonstrating scope exclusion</li>
                <li>Response to Commerce Department information requests</li>
                <li>Product samples, testing results, and expert technical analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CVD Risk Assessment for Warehouses</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Corona warehouse operators must understand <strong>CVD exposure for stored goods</strong>. We provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CVD order applicability analysis for warehouse inventory</li>
                <li>Product-by-product CVD risk assessment</li>
                <li>Country of origin verification for CVD compliance</li>
                <li>Cash deposit and bonding requirement calculations</li>
                <li>Client notification protocols for CVD-covered goods</li>
                <li>Warehouse compliance procedures and training</li>
                <li>Mitigation strategies and scope ruling opportunities</li>
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
                <li>Benefit allocation methodology and calculation challenges</li>
                <li>Verification preparation and defense strategies</li>
                <li>Subsidy program analysis and legal arguments</li>
                <li>Rate reduction through accurate and complete submissions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EAPA CVD Evasion Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP's Enforce and Protect Act (EAPA) investigates <strong>CVD evasion through transshipment or misrepresentation</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Immediate EAPA investigation response and strategy</li>
                <li>Comprehensive CBP questionnaire responses</li>
                <li>Supply chain documentation, tracing, and verification</li>
                <li>Country of origin substantiation with manufacturing evidence</li>
                <li>Substantial transformation legal analysis and expert opinions</li>
                <li>Factory verification and independent third-party audits</li>
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
                <li>Third-country processing, assembly, and finishing strategies</li>
                <li>Country of origin rulings and binding determinations from CBP</li>
                <li>Documentation requirements to substantiate origin claims</li>
                <li>Supply chain restructuring to avoid CVD-covered countries</li>
                <li>EAPA-proof country of origin substantiation and record-keeping</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CVD Cash Deposits & Bonding</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When products are subject to CVD, <strong>massive cash deposits are required at entry</strong>. We minimize impact:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CVD cash deposit rate verification and calculation</li>
                <li>Continuous bond sufficiency analysis for CVD exposure</li>
                <li>Single transaction bond strategies for high-CVD shipments</li>
                <li>Suspension of liquidation planning and management</li>
                <li>Interim relief strategies during scope ruling proceedings</li>
                <li>Refund claims and procedures for overpaid CVD deposits</li>
                <li>Liquidation timing and payment optimization strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Corona Industries Affected by CVD
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Steel & Metal Products', impact: 'U.S. CVD 10-200%+', examples: 'Steel pipe, rebar, wire, aluminum extrusions, metal fabrication facing CVD from China, India, Mexico, Vietnam' },
              { title: 'Furniture & Cabinets', impact: 'U.S. CVD 0-216%', examples: 'Wooden furniture, bedroom sets, cabinets, office furniture from China, Vietnam subject to massive CVD' },
              { title: 'Building Materials', impact: 'U.S. CVD 20-180%', examples: 'Hardwood plywood, flooring, lumber products, construction materials facing CVD for foreign subsidies' },
              { title: 'Warehouse & Distribution Goods', impact: 'U.S. CVD 5-150%', examples: 'Tires, paper products, chemicals, consumer goods stored in Corona warehouses may be CVD-covered' },
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
              Corona warehouse and distribution companies face significant CVD exposure.
              Our attorney conducts comprehensive CVD risk assessments.
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
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Inland Empire Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Understanding of <strong>Corona warehouse district</strong> operations and CVD compliance challenges for distribution centers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Scope Ruling Success</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Successful CVD scope exclusions</strong> saving Corona importers millions through well-crafted ruling requests and technical analysis.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Flat-fee pricing</strong> for scope rulings and many CVD services. Transparent hourly rates for complex Commerce proceedings. Free consultation with clear fee estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related City Pages */}
      <RelatedCityPages currentCity="Corona" region="inland-empire" />

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
                  <a href="#eapa-cvd-defense" className="service-link">
                    <span className="service-link__title">EAPA CVD Defense</span>
                    <p className="service-link__description">Evasion investigation defense</p>
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
                  <a href="#antidumping-defense" className="service-link">
                    <span className="service-link__title">Antidumping Defense</span>
                    <p className="service-link__description">AD duty defense</p>
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
                  <a href="#resources/scope-ruling-strategies" className="service-link">
                    <span className="service-link__title">CVD Scope Ruling Strategies</span>
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
            Avoid Massive Countervailing Duties
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            CVD rates can exceed 200%, destroying your profit margins. Our Corona countervailing duty attorney helps you avoid or minimize these duties through scope rulings, subsidy analysis, and Commerce Department defense. Free consultation.
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

export default CoronaCountervailingPage;
