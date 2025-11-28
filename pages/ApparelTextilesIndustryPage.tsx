import React from 'react';
import Button from '../components/Button';
import EvaluationForm from '../components/EvaluationForm';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';

const ApparelTextilesIndustryPage: React.FC = () => {
  useMeta({
    title: 'Apparel Import Attorney CA | Textile Trade Lawyer | UFLPA',
    description: 'California apparel import attorney & textile customs lawyer. Fashion industry trade law for UFLPA forced labor compliance, HTS classification, country of origin & textile supply chain. Expert for fashion brands. Call 631-746-8290.',
    canonical: 'apparel-textiles-trade-attorney',
    schema: [
      generateWebPageSchema({
        title: 'Apparel & Textiles Industry Trade Law Services',
        description: 'Specialized international trade law services for California apparel and textile companies. Expert guidance on import compliance, UFLPA forced labor due diligence, classification, and supply chain strategies.',
        url: 'apparel-textiles-trade-attorney',
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: '' },
        { name: 'Industries', url: 'apparel-textiles-trade-attorney' },
        { name: 'Apparel & Textiles', url: 'apparel-textiles-trade-attorney' },
      ]),
      generateServiceSchema({
        name: 'Apparel & Textiles Trade Law Services',
        description: 'Comprehensive trade law services for apparel and textile companies including customs compliance, UFLPA forced labor due diligence, classification expertise, and supply chain strategies.',
        serviceType: 'Legal Services',
      }),
    ],
  });

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="Apparel Textiles Trade Law Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=1920&auto=format&fit=crop"
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
          <h1>California Trade Law Attorney for<br />Apparel & Textile Companies</h1>
          <p className="hero-subtitle">
            Specialized compliance for fashion brands, apparel importers, textile manufacturers, and e-commerce clothing sellers. Expert UFLPA forced labor defense, HTS classification, and supply chain compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Schedule UFLPA Consultation</a>
            <a href="tel:+16317468290" className="hero-cta-outline">Call (631) 746-8290</a>
          </div>
        </div>
      </section>

      {/* Critical 2025 Update - UFLPA */}
      <section className="py-12 px-4 bg-red-50 border-y-4 border-red-500">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              CRITICAL COMPLIANCE ALERT
            </div>
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              UFLPA Forced Labor Enforcement: Highest Risk for Apparel Importers
            </h2>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-4 text-center">
              <strong>The apparel and textile industry faces the highest enforcement risk under the Uyghur Forced Labor Prevention Act (UFLPA).</strong> CBP has detained thousands of apparel shipments, with many fashion brands experiencing significant supply chain disruptions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-bold text-red-900 mb-3">Why Apparel Is Highest Risk:</h3>
                <ul className="space-y-2 text-gray-700 list-none">
                  <li>Xinjiang produces 20% of global cotton and 40% of China's polysilicon (synthetic fibers)</li>
                  <li>Complex, multi-tier supply chains obscure cotton/fiber sourcing</li>
                  <li>Many UFLPA Entity List companies are textile manufacturers</li>
                  <li>CBP detaining shipments even with indirect Xinjiang exposure</li>
                  <li>Limited exceptions; rebuttable presumption is extremely difficult to overcome</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-900 mb-3">What Fashion Brands Must Do Now:</h3>
                <ul className="space-y-2 text-gray-700 list-none">
                  <li>Map supply chains to raw material level (cotton farms, spinning mills)</li>
                  <li>Obtain fiber/cotton origin documentation from all suppliers</li>
                  <li>Screen suppliers against UFLPA Entity List (updated monthly)</li>
                  <li>Implement third-party audits and forced labor due diligence</li>
                  <li>Prepare detention response protocols before cargo ships</li>
                  <li>Diversify sourcing away from high-risk regions</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
              <p className="text-gray-700">
                <strong>Our UFLPA Defense Approach:</strong> We provide comprehensive UFLPA detention defense through thorough documentation, supply chain mapping, and strategic CBP engagement to secure release of detained apparel cargo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Unique Trade Compliance Challenges for Apparel & Textile Companies
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 justify-center">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Complex Classification Rules</h3>
              <p className="text-text-secondary leading-relaxed">
                Apparel classification under HTS Chapters 61-62 requires precise determination of fiber content, construction method (knit vs. woven), gender, and garment type. Small classification errors result in incorrect duty rates (ranging from 0% to 32%) and potential CBP penalties.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Country of Origin Rules</h3>
              <p className="text-text-secondary leading-relaxed">
                Textile and apparel have unique country of origin rules. For textiles, origin is where fabric is woven/knit. For apparel, origin is where cutting and assembly occur. Marking requirements are strict. Errors result in penalties and re-exportation.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Quota & Visa Requirements</h3>
              <p className="text-text-secondary leading-relaxed">
                Despite elimination of most textile quotas, certain categories still require export visas. Many countries maintain bilateral textile agreements requiring documentation. Non-compliance results in entry rejection and return of goods.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Multi-Tier Supply Chains</h3>
              <p className="text-text-secondary leading-relaxed">
                Fashion industry supply chains involve multiple tiers: fiber producers, spinners, weavers, dyers, cut-and-sew operations, and finishing facilities across multiple countries. Visibility and documentation challenges create compliance risks.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fast Fashion Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Fast fashion business models require rapid product turnover with hundreds of new SKUs monthly. Manual classification and compliance processes cannot scale. Automation is essential but requires sophisticated systems and controls.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">E-Commerce Section 321 Scrutiny</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct-to-consumer apparel sellers using Section 321 de minimis face increased CBP scrutiny. New regulations limit certain textile/apparel products. Undervaluation enforcement is intensifying. Compliance programs must adapt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Specialized Services for Apparel & Textile Companies
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Forced Labor Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Supply chain mapping to raw material level, cotton/fiber origin documentation, and UFLPA Entity List screening protocols. Due diligence programs, detention response, and alternative sourcing strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Supply chain mapping to raw material level</li>
                <li>Cotton/fiber origin documentation</li>
                <li>UFLPA Entity List screening protocols</li>
                <li>Due diligence programs (UN Guiding Principles)</li>
                <li>Detention response and cargo release</li>
                <li>Supplier audit programs</li>
                <li>Alternative sourcing strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Apparel Classification Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                HTS classification for all garment types, fiber content analysis, and knit vs. woven determinations. Classification for accessories, binding ruling requests to CBP, and duty optimization strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for all garment types</li>
                <li>Fiber content analysis and testing coordination</li>
                <li>Knit vs. woven determinations</li>
                <li>Classification for accessories (HTS 42, 64, 65)</li>
                <li>Binding ruling requests to CBP</li>
                <li>Classification databases for product lines</li>
                <li>Duty optimization strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Country of Origin & Marking</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Country of origin determinations following textile rules, marking compliance, and substantial transformation analysis. FTA qualification strategies and supply chain documentation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Country of origin determinations (textile rules)</li>
                <li>Marking compliance (care labels, tags)</li>
                <li>Substantial transformation analysis</li>
                <li>FTA qualification (USMCA, CAFTA-DR)</li>
                <li>Marking exception strategies</li>
                <li>Supply chain documentation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audits & Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Focused assessment defense for apparel companies, classification dispute resolution, and country of origin challenges. Undervaluation defense, penalty mitigation, and seizure release services.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused assessment defense (apparel-specific)</li>
                <li>Classification dispute resolution</li>
                <li>Country of origin challenges</li>
                <li>Undervaluation defense</li>
                <li>Penalty mitigation for textile violations</li>
                <li>Seizure release (trademark, UFLPA)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">E-Commerce & Section 321</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 321 compliance for DTC sellers, marketplace seller programs, and undervaluation risk mitigation. Section 321 textile exclusions navigation and high-volume entry automation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 321 compliance for DTC sellers</li>
                <li>Marketplace seller programs (Amazon FBA)</li>
                <li>Undervaluation risk mitigation</li>
                <li>Section 321 textile exclusions navigation</li>
                <li>High-volume entry automation</li>
                <li>Express consignment compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">AD/CVD & Trade Remedies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Antidumping/countervailing duty defense, scope ruling requests for apparel AD/CVD orders, and circumvention analysis. Trade preference programs and tariff engineering strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Antidumping/countervailing duty defense</li>
                <li>Scope ruling requests (apparel AD/CVD orders)</li>
                <li>Circumvention analysis and defense</li>
                <li>Trade preference programs (GSP, AGOA)</li>
                <li>Tariff engineering strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Apparel-Specific Compliance Issues */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Product Category Compliance Guidance
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">T-Shirts & Knit Apparel</h3>
              <p className="text-gray-700 mb-2">
                <strong>Classification:</strong> Men's/boys' knit shirts (HTS 6109) vs. women's/girls' (6110) with duties ranging from 16.5% to 32% depending on fiber content and construction.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Common Issues:</strong> Gender classification disputes, fiber content testing requirements, country of origin marking on garments and packaging.
              </p>
              <p className="text-gray-700">
                <strong>UFLPA Risk:</strong> High risk if cotton sourced from China without verified origin documentation. Xinjiang cotton found in 20%+ of global cotton supply chains.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Denim & Woven Bottoms</h3>
              <p className="text-gray-700 mb-2">
                <strong>Classification:</strong> Men's/boys' trousers (HTS 6203) vs. women's/girls' (6204). Duty rates 16.6% for cotton denim, 28.2% for synthetic blends.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Common Issues:</strong> Classification disputes over "trousers" vs. "shorts" (inseam measurement). Subheading determinations based on fiber content percentages.
              </p>
              <p className="text-gray-700">
                <strong>Origin Rules:</strong> Country of origin is where cutting and assembly occur, but fiber origin critical for UFLPA compliance.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Dresses & Formal Wear</h3>
              <p className="text-gray-700 mb-2">
                <strong>Classification:</strong> Women's/girls' dresses (HTS 6204.41-49 for woven, 6104 for knit). Duty rates vary widely by fiber content (6% to 16%).
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Common Issues:</strong> "Dress" vs. "ensemble" classification. Ornamentation and trim affecting fiber content calculations.
              </p>
              <p className="text-gray-700">
                <strong>FTA Opportunities:</strong> Many formal wear items eligible for CAFTA-DR benefits if sourced from Central America with regional fabric.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Outerwear & Jackets</h3>
              <p className="text-gray-700 mb-2">
                <strong>Classification:</strong> Coats, jackets, windbreakers (HTS 6201-6202 for woven, 6101-6102 for knit). Duty rates 16% to 27.7%.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Common Issues:</strong> Technical outerwear with performance fabrics may qualify for lower duty rates. "Coat" vs. "jacket" determinations based on length and protection level.
              </p>
              <p className="text-gray-700">
                <strong>Tariff Strategy:</strong> Classification engineering through design modifications can achieve significant duty savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Apparel & Textile Companies Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Deep Apparel Industry Knowledge</h3>
              <p className="text-gray-700">
                Extensive experience with fashion brands, apparel importers, and textile manufacturers. We understand your supply chains, product categories, and business pressures.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">UFLPA Defense Excellence</h3>
              <p className="text-gray-700">
                Experienced representation for UFLPA detention cases. Proven strategies for overcoming the rebuttable presumption and securing release of detained apparel cargo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">California Fashion Hub Focus</h3>
              <p className="text-gray-700">
                Based in Los Angeles fashion district with deep connections to California apparel community. Experience at LA/Long Beach ports where most West Coast apparel enters.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Rapid Response for Time-Sensitive Cargo</h3>
              <p className="text-gray-700">
                Fast turnaround on detention responses, classification analysis, and compliance documentation to minimize supply chain disruptions and inventory shortages.
              </p>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Legal Services</h3>
              <ul className="space-y-3">
                <li>
                  <div className="service-link-item">
                    <a href="#supply-chain-esg-compliance-guide" className="service-link">
                      <span className="service-link__title">UFLPA Forced Labor Compliance</span>
                      <p className="service-link__description">Supply chain due diligence</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#customs-defense-litigation" className="service-link">
                      <span className="service-link__title">Customs Defense & Litigation</span>
                      <p className="service-link__description">Detention and audit defense</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#regulatory-compliance-advisory" className="service-link">
                      <span className="service-link__title">Trade Compliance Programs</span>
                      <p className="service-link__description">Classification and compliance</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#practice-areas" className="service-link">
                      <span className="service-link__title">All Practice Areas</span>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* California Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Serving Fashion Hubs</h3>
              <ul className="space-y-3">
                <li>
                  <div className="service-link-item">
                    <a href="#los-angeles-port-customs-attorney" className="service-link">
                      <span className="service-link__title">Los Angeles Fashion District</span>
                      <p className="service-link__description">LA/LB port apparel imports</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#bay-area-trade-law-attorney" className="service-link">
                      <span className="service-link__title">San Francisco Bay Area</span>
                      <p className="service-link__description">Northern CA fashion brands</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Other Industries */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Other Industries</h3>
              <ul className="space-y-3">
                <li>
                  <div className="service-link-item">
                    <a href="#technology-electronics-trade-attorney" className="service-link">
                      <span className="service-link__title">Technology & Electronics</span>
                      <p className="service-link__description">Wearable tech & smart textiles</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#food-agriculture-trade-attorney" className="service-link">
                      <span className="service-link__title">Food & Agriculture</span>
                      <p className="service-link__description">Natural fiber & textile materials</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Helpful Guides for Apparel Companies */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-primary-navy mb-8 text-center font-garamond">
              Helpful Guides for Apparel Companies
            </h3>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-12"></div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
                <h4 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Compliance Resources</h4>
                <div className="space-y-0">
                  <div className="service-link-item">
                    <a href="#supply-chain-esg-compliance-guide" className="service-link">
                      <span className="service-link__title">UFLPA Compliance Guide</span>
                      <p className="service-link__description">Forced labor detention defense</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="service-link-item">
                    <a href="#tariffs-duties-classification-guide" className="service-link">
                      <span className="service-link__title">Tariff Classification Guide</span>
                      <p className="service-link__description">HTS classification best practices</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
                <h4 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Industry Guides</h4>
                <div className="space-y-0">
                  <div className="service-link-item">
                    <a href="#ecommerce-digital-trade-guide" className="service-link">
                      <span className="service-link__title">E-Commerce Guide</span>
                      <p className="service-link__description">Section 321 & DTC compliance</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="service-link-item">
                    <a href="#resources/section-301-tariffs-guide" className="service-link">
                      <span className="service-link__title">Section 301 Tariffs</span>
                      <p className="service-link__description">China tariff strategies</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
                <h4 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Learn More</h4>
                <div className="space-y-0">
                  <div className="service-link-item">
                    <a href="#trade-law-faq" className="service-link">
                      <span className="service-link__title">FAQ Center</span>
                      <p className="service-link__description">Common apparel trade questions</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="service-link-item">
                    <a href="#schedule-consultation" className="service-link">
                      <span className="service-link__title">Schedule Consultation</span>
                      <p className="service-link__description">Get personalized guidance</p>
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
        </div>
      </section>

      {/* California Fashion Hub Local Knowledge */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Deep California Fashion Industry Local Knowledge
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              On-the-ground expertise serving fashion brands throughout the Los Angeles Garment District, San Francisco design community, and California's textile industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* LA Fashion District */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Los Angeles Fashion & Garment District</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <div>
                    <strong>Downtown LA Garment District:</strong> 90+ blocks of textile wholesalers, cut-and-sew operations, fashion showrooms (9th St to Olympic)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <div>
                    <strong>California Market Center:</strong> Apparel trade shows, permanent showrooms, buyer marketplace
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <div>
                    <strong>Santee Alley:</strong> Fashion wholesale hub, sample production, fast fashion sourcing
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <div>
                    <strong>Vernon Industrial Zone:</strong> Cut-and-sew facilities, textile finishing, denim processing
                  </div>
                </li>
              </ul>
            </div>

            {/* Northern California Fashion */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Bay Area & Northern California Fashion</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <div>
                    <strong>San Francisco SoMa:</strong> Tech-fashion startups, sustainable brands, DTC fashion headquarters
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <div>
                    <strong>Oakland Fashion District:</strong> Emerging designers, ethical manufacturing, streetwear brands
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <div>
                    <strong>Silicon Valley Athleisure:</strong> Performance apparel brands, wearable tech, activewear companies
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <div>
                    <strong>Port of Oakland:</strong> Container terminals handling Asian textile imports for NorCal brands
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Apparel Import Logistics */}
          <div className="bg-primary-navy/5 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-primary-navy mb-4 text-center">California Apparel Import Infrastructure</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-primary-navy mb-2">LA/Long Beach Ports</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Pier 400 - Largest container terminal</li>
                  <li>Long Beach - Asian apparel gateway</li>
                  <li>APM, Everport, TraPac terminals</li>
                  <li>UFLPA inspection facilities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary-navy mb-2">Distribution Centers</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Carson/Compton - fashion logistics</li>
                  <li>Inland Empire fulfillment</li>
                  <li>City of Industry warehouses</li>
                  <li>Rancho Dominguez textile DCs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary-navy mb-2">CBP Apparel Facilities</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>LA/LB Service Port (textile team)</li>
                  <li>UFLPA Task Force operations</li>
                  <li>Apparel classification specialists</li>
                  <li>Textile quota processing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* California Fashion Cities Served */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary-navy mb-4 text-center">California Fashion Cities We Serve</h3>
            <p className="text-center text-gray-600 mb-4">Available by appointment throughout California's fashion industry centers</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-center text-sm">
              {[
                'Los Angeles', 'Long Beach', 'Vernon', 'Commerce', 'Carson', 'Compton',
                'San Francisco', 'Oakland', 'Berkeley', 'San Jose', 'Palo Alto', 'Santa Monica',
                'West Hollywood', 'Beverly Hills', 'Burbank', 'Glendale', 'Torrance', 'Irvine',
                'Costa Mesa', 'Newport Beach', 'San Diego', 'La Jolla', 'Calabasas', 'Pasadena'
              ].map((city) => (
                <span key={city} className="bg-gray-100 rounded px-3 py-2 text-gray-700">{city}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Protect Your Apparel Supply Chain from UFLPA Disruptions
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Schedule a consultation with California's leading trade law attorney for apparel and textile companies.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">
              Schedule UFLPA Consultation
            </Button>
            <Button href={siteConfig.phoneTel} variant="outline">
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>

      {/* Evaluation Form */}
      <EvaluationForm theme="light" />
    </div>
  );
};

export default ApparelTextilesIndustryPage;
