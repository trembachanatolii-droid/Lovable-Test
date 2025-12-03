
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SantaRosaCountervailingPage: React.FC = () => {
  useMeta({
    title: 'Santa Rosa Countervailing Duty Attorney | CVD Defense Lawyer CA',
    description: 'Santa Rosa countervailing duty attorney defending against foreign subsidy duties. Expert CVD scope rulings, Commerce defense, wine industry trade law. (310) 744-1328.',
    keywords: 'countervailing duty attorney santa rosa, cvd lawyer santa rosa, subsidy defense attorney, commerce department lawyer santa rosa, wine trade attorney, santa rosa customs lawyer',
    canonical: 'santa-rosa-countervailing-duty',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-cvd.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Santa Rosa Countervailing Duty Attorney - CVD Defense & Commerce Department Representation',
        description: 'Expert Santa Rosa countervailing duty attorney providing CVD defense, scope rulings, and subsidy investigation representation for North Bay wine and manufacturing industries.',
        url: `${siteConfig.siteUrl}/santa-rosa-countervailing-duty`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Santa Rosa Countervailing Duty Attorney', url: `${siteConfig.siteUrl}/santa-rosa-countervailing-duty` }
      ]),
      generateFAQSchema([
        {
          question: 'What are countervailing duties and how do they affect my business?',
          answer: 'Countervailing duties (CVD) are tariffs imposed to offset unfair foreign government subsidies. When foreign governments provide financial assistance to manufacturers or exporters, the U.S. Department of Commerce can impose CVD rates of 10% to 200%+ on top of normal tariffs. CVD orders affect hundreds of products from China, India, Mexico, and other countries. Our Santa Rosa countervailing duty attorney helps you determine if your imports are subject to CVD and develop strategies to minimize or avoid these duties.',
        },
        {
          question: 'How does CVD differ from antidumping duties?',
          answer: 'Countervailing duties offset foreign government subsidies (grants, tax breaks, preferential loans), while antidumping duties address below-cost pricing by foreign companies. Both are "trade remedies" administered by the Commerce Department and enforced by CBP. Many products are subject to BOTH AD and CVD orders simultaneously. Our Santa Rosa attorney handles both types of trade remedy defense.',
        },
        {
          question: 'Can you help Santa Rosa wine exporters facing foreign CVD investigations?',
          answer: 'Yes. While CVD typically affects U.S. importers, American exporters can also face CVD investigations in foreign markets. If your Santa Rosa winery faces CVD allegations in China, the EU, or other markets alleging U.S. government subsidies, our countervailing duty attorney provides defense representation including questionnaire responses, subsidy analysis, and Commerce Department proceedings.',
        },
        {
          question: 'What is a CVD scope ruling and why do I need one?',
          answer: 'A scope ruling from the Commerce Department determines whether your specific product is covered by an existing CVD order. If your product is excluded from scope, you avoid CVD entirely. Scope rulings are critical when the order language is ambiguous or your product has unique characteristics. Our Santa Rosa CVD attorney prepares comprehensive scope ruling requests demonstrating your product falls outside the order.',
        },
        {
          question: 'Do you serve other North Bay cities besides Santa Rosa?',
          answer: 'Yes, from our Santa Rosa location we serve the entire North Bay wine country including Napa, Sonoma, Petaluma, Rohnert Park, Windsor, Healdsburg, and Sebastopol. We represent wineries, food processors, manufacturers, and technology companies throughout the North Bay with countervailing duty and customs legal services.',
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
      <section className="hero" aria-label="Santa Rosa Countervailing Duty Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Santa Rosa Countervailing Duty Attorney<br />CVD Defense & Subsidy Law</h1>
          <p className="hero-subtitle">
            Expert countervailing duty defense for Santa Rosa and North Bay. CVD scope rulings, Commerce Department representation, and subsidy investigation defense.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free CVD Analysis</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Santa Rosa CVD Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              North Bay CVD Defense Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Countervailing duties can add <strong>10% to 200%+ in additional tariffs</strong> to offset foreign government subsidies. These duties affect Santa Rosa wine exporters facing foreign CVD actions and importers of steel, aluminum, food products, and manufactured goods. Our Santa Rosa countervailing duty attorney helps you navigate CVD orders, scope rulings, and Commerce Department proceedings.
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
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Wine Industry Knowledge</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep understanding of <strong>North Bay wine industry</strong> export challenges including foreign CVD investigations and trade barrier defense.
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
                A successful CVD scope ruling excludes your product from countervailing duty orders, <strong>eliminating massive subsidy duty liability</strong>. Our Santa Rosa attorney prepares:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Scope ruling applications to Department of Commerce</li>
                <li>Technical product specifications and physical characteristics</li>
                <li>Detailed comparison to scope language</li>
                <li>Manufacturing process and end-use documentation</li>
                <li>Legal argument demonstrating scope exclusion</li>
                <li>Response to Commerce Department inquiries</li>
                <li>Product samples and testing results</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign CVD Investigation Defense (Wine Exporters)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Santa Rosa wineries may face <strong>foreign CVD investigations</strong> alleging U.S. government subsidies. We defend your interests:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CVD questionnaire responses to foreign authorities</li>
                <li>Subsidy analysis and benefit calculation challenges</li>
                <li>U.S. government program documentation</li>
                <li>De minimis subsidy arguments (less than 1%)</li>
                <li>Verification preparation and factory audits</li>
                <li>Administrative review participation</li>
                <li>Duty mitigation and refund strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">U.S. CVD Order Defense (Importers)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you import products subject to U.S. CVD orders, we help you <strong>minimize or avoid countervailing duties</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CVD risk assessment for your imports</li>
                <li>Scope ruling requests to Commerce Department</li>
                <li>Country of origin planning to avoid CVD countries</li>
                <li>Product modification strategies placing you outside scope</li>
                <li>Administrative review participation for rate reduction</li>
                <li>Changed circumstances review requests</li>
                <li>Sunset review participation to terminate orders</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CVD Administrative Reviews</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Commerce conducts annual <strong>administrative reviews recalculating CVD rates</strong> based on subsidy usage:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Administrative review request filing</li>
                <li>Company-specific CVD rate determination</li>
                <li>Subsidy questionnaire responses</li>
                <li>Benefit allocation and calculation challenges</li>
                <li>Verification preparation and defense</li>
                <li>Subsidy program documentation</li>
                <li>Rate reduction through accurate reporting</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EAPA CVD Evasion Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP's Enforce and Protect Act (EAPA) applies to <strong>CVD evasion through transshipment or misrepresentation</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>EAPA investigation response strategy</li>
                <li>Comprehensive CBP questionnaire responses</li>
                <li>Supply chain documentation and verification</li>
                <li>Country of origin substantiation</li>
                <li>Manufacturing evidence and factory audits</li>
                <li>Substantial transformation legal opinions</li>
                <li>Defense against evasion allegations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CVD Cash Deposits & Bonding</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When products are subject to CVD, <strong>massive cash deposits are required at entry</strong>. We minimize impact:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CVD cash deposit rate verification</li>
                <li>Continuous bond sufficiency analysis</li>
                <li>Single transaction bond strategies</li>
                <li>Suspension of liquidation planning</li>
                <li>Interim measures during scope ruling proceedings</li>
                <li>Refund claims for overpaid CVD deposits</li>
                <li>Liquidation timing and payment strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Santa Rosa Industries Affected by CVD
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Wine & Beverage Exports', impact: 'Foreign CVD Actions', examples: 'Facing foreign CVD investigations (China, EU) alleging U.S. agricultural subsidies, tax benefits, or government support programs' },
              { title: 'Steel & Aluminum Products', impact: 'U.S. CVD 10-200%+', examples: 'Steel pipe, rebar, aluminum extrusions facing massive U.S. CVD from China, India, Mexico, Vietnam' },
              { title: 'Food & Agriculture', impact: 'U.S. CVD 5-100%', examples: 'Honey, mushrooms, garlic, seafood, frozen produce subject to CVD alleging foreign agricultural subsidies' },
              { title: 'Manufacturing & Industrial', impact: 'U.S. CVD 15-150%', examples: 'Solar panels, tires, paper products, chemicals facing CVD for alleged government grants and tax benefits' },
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
              Santa Rosa exporters may also face foreign CVD investigations.
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
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Wine Industry Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Understanding of <strong>North Bay wine industry export challenges</strong> including foreign CVD investigations and agricultural subsidy allegations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Scope Ruling Success</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Successful CVD scope exclusions</strong> saving Santa Rosa importers millions through well-crafted ruling requests and technical analysis.
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
      <RelatedCityPages currentCity="Santa Rosa" region="bay-area" />

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
                  <Link to="/subsidy-investigation-defense" className="service-link">
                    <span className="service-link__title">Subsidy Investigation Defense</span>
                    <p className="service-link__description">Foreign CVD proceedings</p>
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
                  <a href="/practice-areas" className="service-link">
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
                  <Link to="/resources/scope-ruling-strategies" className="service-link">
                    <span className="service-link__title">CVD Scope Ruling Strategies</span>
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
            Avoid Massive Countervailing Duties
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            CVD rates can exceed 200%, destroying your profit margins. Our Santa Rosa countervailing duty attorney helps you avoid or minimize these duties through scope rulings, subsidy analysis, and Commerce Department defense. Free consultation.
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

export default SantaRosaCountervailingPage;
