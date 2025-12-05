
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LongBeachAntidumpingDefensePage: React.FC = () => {
  useMeta({
    title: 'Antidumping Defense Attorney Long Beach | AD/CVD Lawyer CA',
    description: 'Long Beach antidumping defense attorney. Expert AD/CVD scope rulings, EAPA investigations, antidumping duty defense. Protect your Long Beach imports. (310) 744-1328.',
    keywords: 'antidumping attorney long beach, ad cvd lawyer long beach, scope ruling attorney california, eapa defense lawyer long beach, countervailing duty attorney, dumping defense long beach',
    canonical: 'long-beach-antidumping-defense',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-antidumping.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Long Beach Antidumping Defense Attorney - AD/CVD Scope Rulings & EAPA Defense',
        description: 'Expert Long Beach antidumping defense attorney providing scope rulings, EAPA investigation defense, and AD/CVD mitigation for California importers at Port of Long Beach.',
        url: `${siteConfig.siteUrl}/long-beach-antidumping-defense`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Long Beach Antidumping Defense', url: `${siteConfig.siteUrl}/long-beach-antidumping-defense` }
      ]),
      generateFAQSchema([
        {
          question: 'What are antidumping and countervailing duties (AD/CVD)?',
          answer: 'Antidumping duties (AD) are additional tariffs imposed when foreign companies sell products in the U.S. below fair market value. Countervailing duties (CVD) offset foreign government subsidies. AD/CVD rates can exceed 200% for certain products from China, Vietnam, and other countries. These duties are IN ADDITION to normal HTS tariffs. Our Long Beach antidumping attorney helps you determine if your products are subject to AD/CVD orders and develop strategies to minimize or avoid them.',
        },
        {
          question: 'What is a scope ruling and when do I need one?',
          answer: 'A scope ruling from the Department of Commerce determines whether your specific product is covered by an existing AD/CVD order. If your product is excluded from scope, you avoid potentially massive AD/CVD duties. Scope rulings are essential when: (1) your product may be covered by an AD/CVD order, (2) the order language is ambiguous, or (3) your product has been modified. Our Long Beach attorney prepares scope ruling requests demonstrating your product is outside the scope.',
        },
        {
          question: 'What is an EAPA investigation and how do I defend against it?',
          answer: 'EAPA (Enforce and Protect Act) investigations examine whether importers are evading AD/CVD orders through transshipment, falsified country of origin, or minor alterations. CBP can detain goods, demand massive AD/CVD cash deposits, and impose penalties. EAPA investigations require rapid, comprehensive defense including supply chain documentation, manufacturing evidence, and legal argument. Our Long Beach EAPA defense attorney represents importers through the entire investigation process.',
        },
        {
          question: 'How can I avoid AD/CVD duties on my imports?',
          answer: 'Strategies include: (1) Scope Rulings demonstrating your product is outside the order, (2) Country of origin planning to source from non-covered countries, (3) Substantial transformation in third countries, (4) Product modifications placing you outside scope, (5) Challenging the underlying AD/CVD order. Our Long Beach antidumping attorney evaluates which strategies are viable for your specific products.',
        },
        {
          question: 'What AD/CVD orders commonly affect Port of Long Beach importers?',
          answer: 'Major AD/CVD orders affecting Long Beach include: steel and aluminum products from China and other countries (200%+ duties), solar cells and modules from China (50%+ duties), furniture from China and Vietnam, hardwood plywood from China, tires from various countries, and honey from China. If you import these or similar products, AD/CVD exposure is likely. Our Long Beach attorney conducts AD/CVD risk assessments.',
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
      <section className="hero" aria-label="Long Beach Antidumping Defense Hero">
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
          <h1>Long Beach Antidumping Defense Attorney<br />AD/CVD Scope Rulings Lawyer</h1>
          <p className="hero-subtitle">
            Expert antidumping and countervailing duty defense for Port of Long Beach. Scope rulings, EAPA investigations, and AD/CVD avoidance strategies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free AD/CVD Analysis</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Long Beach Antidumping Defense Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Port of Long Beach AD/CVD Defense Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Antidumping and countervailing duties can add <strong>50% to 200%+ in additional tariffs</strong> to your Long Beach imports. These massive duties apply to hundreds of product categories from China, Vietnam, and other countries. Our Long Beach antidumping defense attorney helps you avoid or minimize AD/CVD through scope rulings, country of origin planning, and EAPA investigation defense.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">AD/CVD Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                Focused expertise on <strong>antidumping and countervailing duty law</strong> - scope rulings, EAPA defense, and Commerce Department proceedings.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Scope Ruling Success</h3>
              <p className="text-text-secondary leading-relaxed">
                Successful <strong>scope exclusion rulings</strong> saving Long Beach importers millions in avoided AD/CVD duties.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Long Beach Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct support for <strong>Port of Long Beach AD/CVD issues</strong>, CBP detentions, and cash deposit requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AD/CVD Defense Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Antidumping & Countervailing Duty Defense Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Scope Ruling Requests to Commerce</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A successful scope ruling excludes your product from AD/CVD orders, <strong>eliminating massive duty liability</strong>. Our Long Beach antidumping attorney prepares:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Scope ruling applications to Department of Commerce</li>
                <li>Technical product descriptions and specifications</li>
                <li>Physical characteristic analysis vs. scope language</li>
                <li>End-use and application evidence</li>
                <li>Product samples and testing results</li>
                <li>Manufacturing process documentation</li>
                <li>Legal argument for scope exclusion</li>
                <li>Follow-up submissions and responses to Commerce questions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EAPA Investigation Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Enforce and Protect Act allows CBP to investigate <strong>AD/CVD evasion through transshipment or misrepresentation</strong>. EAPA investigations are serious - defend aggressively:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Immediate EAPA investigation response strategy</li>
                <li>Comprehensive questionnaire responses to CBP</li>
                <li>Supply chain documentation (purchase orders, invoices, shipping records)</li>
                <li>Manufacturing evidence proving country of origin</li>
                <li>Substantial transformation analysis and legal opinion</li>
                <li>Factory verification and third-party audits</li>
                <li>Interim measures defense (suspension of liquidation)</li>
                <li>Administrative review and appeal if adverse determination</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">AD/CVD Country of Origin Planning</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                AD/CVD orders are <strong>country-specific</strong>. Strategic country of origin planning can avoid coverage:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Substantial transformation analysis for multi-country supply chains</li>
                <li>Manufacturing operations that change country of origin</li>
                <li>Third-country processing and assembly strategies</li>
                <li>Country of origin rulings from CBP</li>
                <li>Documentation requirements for origin claims</li>
                <li>Supply chain restructuring to avoid AD/CVD countries</li>
                <li>EAPA-proof country of origin substantiation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Administrative Review Participation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Commerce conducts annual <strong>administrative reviews recalculating AD/CVD rates</strong>. Active participation can reduce your duty rates:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Administrative review request filing</li>
                <li>Company-specific rate calculation participation</li>
                <li>Questionnaire responses to Commerce (sales, cost, subsidy data)</li>
                <li>U.S. sales verification and reconciliation</li>
                <li>Home market or third-country sales analysis</li>
                <li>Cost of production submissions</li>
                <li>Rate reduction through accurate data submission</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Circumvention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Commerce can <strong>extend AD/CVD orders to cover circumvention</strong> through minor alterations or later-developed products. We defend against:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Anti-circumvention inquiry defense</li>
                <li>Minor alterations analysis</li>
                <li>Later-developed merchandise determination</li>
                <li>Completed in third country (slight modification) allegations</li>
                <li>Product development history and technical evidence</li>
                <li>Economic and commercial reality arguments</li>
                <li>Prevention of retroactive circumvention findings</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">AD/CVD Cash Deposit & Suspension of Liquidation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP determines your products are subject to AD/CVD, <strong>massive cash deposits are required</strong>. We help minimize impact:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Cash deposit rate determination and verification</li>
                <li>Continuous bond sufficiency analysis</li>
                <li>Single transaction bond alternatives</li>
                <li>Suspension of liquidation strategy</li>
                <li>Interim relief during scope ruling proceedings</li>
                <li>Refund claims for overpaid AD/CVD deposits</li>
                <li>Liquidation and payment planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common AD/CVD Orders */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Common AD/CVD Orders Affecting Long Beach Importers
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Steel & Aluminum Products', rate: '50-200%+', countries: 'China, Vietnam, South Korea, Taiwan, and others', examples: 'Steel pipe, rebar, aluminum extrusions, steel wire' },
              { title: 'Solar Cells & Modules', rate: '50-250%', countries: 'China, Taiwan, Vietnam, Malaysia', examples: 'Solar panels, photovoltaic cells, solar modules' },
              { title: 'Furniture', rate: '0-216%', countries: 'China, Vietnam', examples: 'Wooden bedroom furniture, wooden cabinets' },
              { title: 'Hardwood Plywood', rate: '20-180%', countries: 'China, Vietnam', examples: 'Decorative plywood, cabinet plywood' },
              { title: 'Tires', rate: '25-100%', countries: 'China, Vietnam, Taiwan, Thailand', examples: 'Passenger car tires, truck tires' },
              { title: 'Textiles & Apparel', rate: '30-300%', countries: 'China, Vietnam, Pakistan', examples: 'Polyester staple fiber, certain fabrics' },
            ].map((order) => (
              <div key={order.title} className="bg-neutral-50 p-6 rounded-lg border-l-4 border-secondary-teal">
                <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond">{order.title}</h3>
                <div className="mb-2">
                  <span className="text-sm font-bold text-secondary-teal">AD/CVD Rates: </span>
                  <span className="text-sm text-text-secondary">{order.rate}</span>
                </div>
                <div className="mb-2">
                  <span className="text-sm font-bold text-primary-navy">Countries: </span>
                  <span className="text-sm text-text-secondary">{order.countries}</span>
                </div>
                <div>
                  <span className="text-sm font-bold text-primary-navy">Examples: </span>
                  <span className="text-sm text-text-secondary">{order.examples}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Over 500 Active AD/CVD Orders</h3>
            <p className="text-neutral-200">
              The U.S. maintains over 500 active antidumping and countervailing duty orders covering thousands of products.
              If you import from China, Vietnam, or other high-risk countries, AD/CVD exposure is likely.
              Our Long Beach attorney conducts comprehensive AD/CVD risk assessments.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Long Beach AD/CVD Team */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Choose Our Antidumping Defense Attorneys
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">AD/CVD Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>antidumping and countervailing duty law</strong> - not general customs. We understand Commerce and CBP procedures, scope interpretations, and defense strategies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Scope Ruling Success Rate</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Successful scope exclusions</strong> saving Long Beach importers millions in AD/CVD duties through well-crafted ruling requests and technical analysis.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">EAPA Investigation Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Direct experience defending <strong>EAPA investigations</strong> and proving legitimate country of origin through comprehensive supply chain documentation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Strategic Approach</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We develop <strong>multi-layered defense strategies</strong> - scope rulings, country of origin planning, product modifications, and administrative participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Long Beach Antidumping Attorney Office
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving Long Beach & Port of Long Beach)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>AD/CVD Emergencies:</strong> Same-day response for EAPA notices
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary-navy mb-3">Serving Port of Long Beach</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>Port of Long Beach:</strong> 45 minutes via 405/710</li>
                <li><strong>Long Beach Downtown:</strong> 50 minutes via 405/710</li>
                <li><strong>Port of LA:</strong> 50 minutes via 405/110</li>
                <li><strong>Orange County:</strong> 60 minutes via 405/5</li>
                <li><strong>Inland Empire:</strong> 60 minutes via 10 East</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related AD/CVD Defense Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Defense Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/scope-rulings" className="service-link">
                    <span className="service-link__title">Scope Ruling Requests</span>
                    <p className="service-link__description">Commerce scope determinations</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/eapa-defense" className="service-link">
                    <span className="service-link__title">EAPA Investigation Defense</span>
                    <p className="service-link__description">Evasion allegation defense</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/country-of-origin" className="service-link">
                    <span className="service-link__title">Country of Origin Planning</span>
                    <p className="service-link__description">Substantial transformation</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Ports</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/los-angeles-antidumping" className="service-link">
                    <span className="service-link__title">Los Angeles AD/CVD Defense</span>
                    <p className="service-link__description">Port of LA antidumping</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/oakland-antidumping" className="service-link">
                    <span className="service-link__title">Oakland AD/CVD Defense</span>
                    <p className="service-link__description">Northern California defense</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">AD/CVD Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/antidumping-guide" className="service-link">
                    <span className="service-link__title">Antidumping Defense Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/scope-ruling-strategies" className="service-link">
                    <span className="service-link__title">Scope Ruling Strategies</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/eapa-defense" className="service-link">
                    <span className="service-link__title">EAPA Investigation Guide</span>
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
            Avoid Massive Antidumping & Countervailing Duties
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            AD/CVD rates can exceed 200%, destroying your profit margins. Our Long Beach antidumping defense attorney helps you avoid or minimize these duties through scope rulings, country of origin planning, and EAPA defense. Free consultation.
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

export default LongBeachAntidumpingDefensePage;
