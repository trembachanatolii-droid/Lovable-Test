
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LosAngelesSection301Page: React.FC = () => {
  useMeta({
    title: 'Section 301 Tariff Attorney Los Angeles | China Tariff Lawyer CA',
    description: 'Los Angeles Section 301 tariff attorney. Expert China tariff strategies, exclusion requests, tariff engineering, protests. Minimize Section 301 duties. (310) 744-1328.',
    keywords: 'section 301 attorney los angeles, china tariff lawyer los angeles, section 301 exclusion attorney california, tariff engineering lawyer la, china trade war attorney los angeles',
    canonical: 'los-angeles-section-301',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-section301.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Los Angeles Section 301 Tariff Attorney - China Tariff Defense & Exclusion Lawyer',
        description: 'Expert Los Angeles Section 301 tariff attorney providing China tariff minimization strategies, exclusion requests, tariff engineering, and protest filing for California importers.',
        url: `${siteConfig.siteUrl}/los-angeles-section-301`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Los Angeles Section 301', url: `${siteConfig.siteUrl}/los-angeles-section-301` }
      ]),
      generateFAQSchema([
        {
          question: 'What are Section 301 tariffs on China imports?',
          answer: 'Section 301 tariffs are additional duties imposed on Chinese imports under Section 301 of the Trade Act of 1974 in response to China\'s unfair trade practices. Current Section 301 tariffs range from 7.5% to 25% and cover over $370 billion in Chinese imports across thousands of product categories (Lists 1-4A). These tariffs are IN ADDITION to normal HTS duties. Our Los Angeles Section 301 attorney helps you navigate these complex China tariffs through exclusions, protests, and tariff engineering.',
        },
        {
          question: 'Can I get my products excluded from Section 301 tariffs?',
          answer: 'Section 301 exclusion opportunities come and go. USTR periodically opens exclusion request processes allowing importers to request specific product exclusions. Exclusion requests must demonstrate that the product is not available from sources outside China, that the tariff causes severe economic harm, or that the product is not strategically important to China. Our Los Angeles Section 301 attorney prepares exclusion requests and monitors for new exclusion opportunities.',
        },
        {
          question: 'What is tariff engineering and how can it help with Section 301?',
          answer: 'Tariff engineering involves modifying your product or its classification to legally avoid or minimize tariffs. For Section 301, this may include: redesigning products to fall under non-listed HTS codes, substantial transformation in third countries (making products "substantially transformed" outside China), or supply chain restructuring. Our Los Angeles tariff engineering attorney evaluates your products for legal tariff minimization strategies.',
        },
        {
          question: 'Can I protest Section 301 tariffs I\'ve already paid?',
          answer: 'Yes. You have 180 days from liquidation to file a protest challenging Section 301 duty assessments. Protest grounds include: product not subject to Section 301 (incorrect HTS classification), country of origin not China (substantial transformation), or exclusion eligibility. Successful protests result in duty refunds. Our Los Angeles Section 301 attorney prepares protests and pursues refunds.',
        },
        {
          question: 'How do I know if my Chinese imports are subject to Section 301 tariffs?',
          answer: 'Section 301 tariffs are product and country-specific. You need to determine: (1) your product\'s correct HTS classification, (2) whether that HTS code appears on Section 301 Lists 1-4A, (3) your product\'s country of origin. Many importers are incorrectly paying or not paying Section 301 duties. Our Los Angeles Section 301 attorney conducts compliance reviews identifying Section 301 exposure and refund opportunities.',
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
      <section className="hero" aria-label="Los Angeles Section 301 Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Los Angeles Section 301 Tariff Attorney<br />China Tariff Defense Lawyer</h1>
          <p className="hero-subtitle">
            Expert Section 301 China tariff strategies for Los Angeles importers. Exclusion requests, tariff engineering, protests, and duty minimization for Chinese imports.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Section 301 Analysis</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Los Angeles Section 301 Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Los Angeles China Tariff Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Section 301 tariffs on Chinese imports add <strong>7.5% to 25% in additional duties</strong> on top of normal HTS rates. For Los Angeles importers bringing Chinese goods through Port of LA/Long Beach, these tariffs significantly impact profitability. Our Los Angeles Section 301 tariff attorney helps you legally minimize China tariff exposure through exclusions, protests, tariff engineering, and supply chain restructuring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Section 301 Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep expertise in <strong>Section 301 tariff strategies</strong> - exclusions, protests, tariff engineering, and compliance for China imports.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Millions in Duty Savings</h3>
              <p className="text-text-secondary leading-relaxed">
                We've helped LA importers <strong>recover and avoid millions</strong> in Section 301 duties through successful exclusions, protests, and tariff engineering.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of LA/Long Beach Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Proximity to <strong>Port of LA and Port of Long Beach</strong> provides direct support for Section 301 issues affecting California importers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 301 Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Section 301 Tariff Minimization Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Exclusion Requests</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USTR periodically opens <strong>Section 301 exclusion request processes</strong> allowing importers to request product-specific exclusions. Successful exclusions eliminate Section 301 duties retroactively and prospectively. We provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Monitoring for new Section 301 exclusion opportunities</li>
                <li>Exclusion request preparation and filing with USTR</li>
                <li>Supporting documentation (economic harm, unavailability from non-China sources)</li>
                <li>Public comments and rebuttals to objections</li>
                <li>CBP exclusion claim filing for approved exclusions</li>
                <li>Refund claims for duties paid during exclusion periods</li>
                <li>Exclusion renewal and extension requests</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Engineering & Product Redesign</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Tariff engineering involves <strong>legally modifying products to avoid Section 301 coverage</strong>. Our Los Angeles tariff engineering attorney develops:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Product modification strategies to shift HTS classification to non-listed codes</li>
                <li>Alternative HTS classification analysis and ruling requests</li>
                <li>Component vs. finished goods importation strategies</li>
                <li>Assembly and finishing operations in non-China countries</li>
                <li>Substantial transformation analysis for country of origin planning</li>
                <li>Cost-benefit analysis of tariff engineering vs. paying duties</li>
                <li>Legal opinions supporting classification changes</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Protests & Refund Claims</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you've paid Section 301 duties on products that <strong>should not have been subject to them</strong>, you can protest and recover refunds. We file protests based on:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Incorrect HTS classification - product not on Section 301 lists</li>
                <li>Country of origin errors - product substantially transformed outside China</li>
                <li>Exclusion eligibility - product covered by approved exclusion</li>
                <li>Protest preparation and filing within 180-day deadline</li>
                <li>Supporting documentation and legal argument</li>
                <li>CBP protest negotiations and supplemental submissions</li>
                <li>Court of International Trade litigation if protest denied</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Supply Chain Restructuring for Section 301 Avoidance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Many Los Angeles importers are <strong>shifting production out of China</strong> to avoid Section 301 tariffs. Our supply chain restructuring services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Alternative sourcing country analysis (Vietnam, Thailand, Mexico, etc.)</li>
                <li>Substantial transformation planning for mixed-origin products</li>
                <li>Country of origin determination for restructured supply chains</li>
                <li>Trade agreement utilization (USMCA, Vietnam FTA, etc.)</li>
                <li>Third-country manufacturing and assembly strategies</li>
                <li>Supplier vetting and transition planning</li>
                <li>Documentation requirements for new supply chains</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Compliance & Audit Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively audits Section 301 compliance. <strong>Underpayment OR overpayment</strong> of Section 301 duties can trigger audits and penalties. We provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 compliance reviews and internal audits</li>
                <li>HTS classification verification for Section 301 applicability</li>
                <li>Country of origin substantiation review</li>
                <li>Prior Disclosure filings for Section 301 underpayments</li>
                <li>CBP audit defense for Section 301 issues</li>
                <li>Penalty mitigation for Section 301 violations</li>
                <li>Compliance program implementation for ongoing Section 301 compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 List Monitoring & Advisory</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariff lists and exclusions are <strong>constantly evolving</strong>. We provide ongoing monitoring:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Monitoring USTR actions on Section 301 tariffs</li>
                <li>New product list additions and removals</li>
                <li>Exclusion process openings and deadlines</li>
                <li>Tariff rate changes and suspensions</li>
                <li>Litigation updates affecting Section 301 (CIT challenges)</li>
                <li>Quarterly Section 301 compliance reviews</li>
                <li>Proactive alerts on changes affecting your products</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 301 Coverage Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Understanding Section 301 Tariff Coverage
          </h2>

          <div className="bg-neutral-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond text-center">Section 301 Lists & Tariff Rates</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg text-center">
                <h4 className="font-bold text-primary-navy mb-2">List 1</h4>
                <div className="text-3xl font-bold text-secondary-teal mb-2">25%</div>
                <p className="text-sm text-text-secondary">Effective July 2018<br />$34 billion in products</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <h4 className="font-bold text-primary-navy mb-2">List 2</h4>
                <div className="text-3xl font-bold text-secondary-teal mb-2">25%</div>
                <p className="text-sm text-text-secondary">Effective August 2018<br />$16 billion in products</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <h4 className="font-bold text-primary-navy mb-2">List 3</h4>
                <div className="text-3xl font-bold text-secondary-teal mb-2">25%</div>
                <p className="text-sm text-text-secondary">Effective September 2018<br />$200 billion in products</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <h4 className="font-bold text-primary-navy mb-2">List 4A</h4>
                <div className="text-3xl font-bold text-secondary-teal mb-2">7.5%</div>
                <p className="text-sm text-text-secondary">Effective September 2019<br />$120 billion in products</p>
              </div>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Common Section 301-Affected Products</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Electronics & Technology</h4>
                <ul className="text-sm space-y-1 text-neutral-200">
                  <li>• Consumer electronics</li>
                  <li>• Computer components</li>
                  <li>• Telecom equipment</li>
                  <li>• Semiconductors</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Machinery & Equipment</h4>
                <ul className="text-sm space-y-1 text-neutral-200">
                  <li>• Industrial machinery</li>
                  <li>• Manufacturing equipment</li>
                  <li>• Tools and accessories</li>
                  <li>• Electrical equipment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Consumer Goods</h4>
                <ul className="text-sm space-y-1 text-neutral-200">
                  <li>• Furniture and home goods</li>
                  <li>• Toys and sporting goods</li>
                  <li>• Apparel and footwear</li>
                  <li>• Auto parts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our LA Section 301 Team */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Choose Our Section 301 Attorneys
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Section 301 Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>Section 301 tariff strategies</strong> - not general customs law. We live and breathe China tariffs, exclusions, and mitigation strategies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Results</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Millions in Section 301 duty savings</strong> for Los Angeles importers through successful exclusions, protests, and tariff engineering strategies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proactive Monitoring</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We <strong>actively monitor USTR and CBP</strong> for new exclusion opportunities, policy changes, and tariff updates affecting your products.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Practical Cost-Benefit Analysis</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We provide <strong>realistic assessments</strong> of exclusion chances, tariff engineering ROI, and supply chain restructuring economics - not just legal theory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Los Angeles Section 301 Attorney Office
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving Los Angeles & Port of LA/Long Beach)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Section 301 Consultations:</strong> Free analysis available
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary-navy mb-3">Serving Greater Los Angeles</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>Downtown LA:</strong> 25 minutes via 101 East</li>
                <li><strong>Port of LA/Long Beach:</strong> 45-60 minutes via 110/710</li>
                <li><strong>San Gabriel Valley:</strong> 30 minutes via 210/10</li>
                <li><strong>Orange County:</strong> 60 minutes via 5 South</li>
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
            Related Section 301 Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Tariff Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#tariff-classification" className="service-link">
                    <span className="service-link__title">HTS Classification Review</span>
                    <p className="service-link__description">Optimize tariff classification</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#country-of-origin" className="service-link">
                    <span className="service-link__title">Country of Origin Planning</span>
                    <p className="service-link__description">Substantial transformation analysis</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#customs-protests" className="service-link">
                    <span className="service-link__title">Customs Protests & Refunds</span>
                    <p className="service-link__description">Recover overpaid duties</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Ports</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#long-beach-section-301" className="service-link">
                    <span className="service-link__title">Long Beach Section 301</span>
                    <p className="service-link__description">Port of Long Beach tariffs</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#oakland-section-301" className="service-link">
                    <span className="service-link__title">Oakland Section 301</span>
                    <p className="service-link__description">Northern California China tariffs</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Section 301 Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#resources/section-301-guide" className="service-link">
                    <span className="service-link__title">Section 301 Complete Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/exclusion-strategies" className="service-link">
                    <span className="service-link__title">Exclusion Request Strategies</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/tariff-engineering" className="service-link">
                    <span className="service-link__title">Tariff Engineering Guide</span>
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
            Minimize Your Section 301 China Tariffs
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't overpay Section 301 duties. Our Los Angeles Section 301 tariff attorney develops legal strategies to minimize China tariffs through exclusions, protests, and tariff engineering. Free consultation and Section 301 analysis.
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

export default LosAngelesSection301Page;
