
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SacramentoValleyTradePage: React.FC = () => {
  useMeta({
    title: 'Sacramento Valley Trade Attorney | Tariff Lawyer Sacramento, Roseville, Stockton',
    description: 'Sacramento Valley trade attorney serving Sacramento, Roseville, Stockton, Davis. Government contractor compliance, agricultural trade, Port of Sacramento access. (310) 744-1328.',
    keywords: 'sacramento valley trade attorney, sacramento tariff lawyer, roseville customs attorney, stockton trade lawyer, sacramento government contractor, california capital trade compliance',
    canonical: 'sacramento-valley-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-sacramento-valley.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Sacramento Valley Trade Attorney & Tariff Lawyer - California Capital Region',
        description: 'Sacramento Valley trade attorney and tariff lawyer serving Sacramento, Roseville, Stockton, Davis. Expert government contractor compliance, agricultural trade, and CBP defense for the California capital region.',
        url: `${siteConfig.siteUrl}/sacramento-valley-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Sacramento Valley Trade Attorney', url: `${siteConfig.siteUrl}/sacramento-valley-trade-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What areas does a Sacramento Valley trade attorney serve?',
          answer: 'Our Sacramento Valley trade attorneys serve the entire capital region including Sacramento County, Placer County, Yolo County, Sutter County, Yuba County, and northern San Joaquin County. We provide legal services for Sacramento, Roseville, Folsom, Davis, Woodland, Stockton, and all surrounding communities.',
        },
        {
          question: 'Why choose a trade attorney familiar with Sacramento\'s government contractor market?',
          answer: 'Sacramento is California\'s capital with significant federal and state government contracting. We understand Buy American Act (BAA) requirements, Trade Agreements Act (TAA) compliance, FAR/DFARS regulations, and government procurement rules critical to Sacramento-area contractors. Our expertise covers both commercial imports and government contract compliance.',
        },
        {
          question: 'What trade and customs services do you offer in Sacramento Valley?',
          answer: 'We provide comprehensive trade services including: government contractor TAA/BAA compliance, agricultural trade compliance (Sacramento Valley agriculture), tariff classification and duty optimization, CBP audit defense, Port of Sacramento/Stockton representation, export controls for defense contractors, and trade compliance program development.',
        },
        {
          question: 'Can you help with Port of Sacramento and Port of Stockton customs issues?',
          answer: 'Yes, we provide comprehensive services for Sacramento Valley ports including Port of Sacramento (deep water port) and Port of Stockton. This includes CBP detention defense, cargo release, port examination support, and compliance representation at both inland ports serving the Sacramento region.',
        },
        {
          question: 'Do you assist Sacramento government contractors with trade compliance?',
          answer: 'Yes, we specialize in government contractor trade compliance including: TAA-compliant country sourcing, Buy American Act compliance verification, DFARS specialty metals and compliance, Made in USA/domestic preference requirements, and supply chain due diligence for federal contracts.',
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
      <section className="hero" aria-label="Sacramento Valley Trade Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1587502536575-6dfba0a6e017?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Sacramento Valley Trade Attorney<br />Government Contractor & Customs Lawyer</h1>
          <p className="hero-subtitle">
            Expert Sacramento Valley trade attorney and tariff lawyer serving California's capital region. Specialized government contractor compliance, agricultural trade, and CBP defense for Sacramento, Roseville, and Stockton businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Sacramento Valley Trade Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              California Capital Region Trade Law Experts
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Sacramento Valley's diverse business community from government contractors to agricultural exporters. We understand the unique trade compliance needs of <strong>California's capital region</strong> including TAA/BAA requirements, USDA agricultural regulations, and Port of Sacramento/Stockton operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Government Contractor Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Specialized knowledge</strong> of Trade Agreements Act (TAA), Buy American Act (BAA), FAR/DFARS compliance, and government procurement rules critical to Sacramento's federal and state contractors.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regional Coverage</h3>
              <p className="text-text-secondary leading-relaxed">
                Complete coverage of <strong>Sacramento Valley</strong> including Sacramento, Placer, Yolo, Sutter, and Yuba counties. We serve the capital region's technology, agriculture, and government contractor sectors.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic access to <strong>Port of Sacramento and Port of Stockton</strong> (California's inland deep-water ports). Rapid response to CBP detentions and cargo compliance issues at Sacramento Valley ports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade & Customs Services for Sacramento Valley
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Government Contractor TAA/BAA Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Sacramento's government contractors must comply with <strong>Trade Agreements Act (TAA) and Buy American Act (BAA)</strong> requirements. We verify country of origin compliance, identify TAA-designated countries, and ensure your supply chain meets federal procurement rules for DoD, GSA, and civilian agency contracts.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>TAA compliance verification and TAA-designated country sourcing</li>
                <li>Buy American Act (BAA) compliance for federal contracts</li>
                <li>FAR/DFARS trade compliance and domestic preference rules</li>
                <li>Made in USA certification and substantial transformation analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">DFARS Compliance & Defense Contractor Trade Law</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Defense contractors in Sacramento must comply with <strong>DFARS specialty metals, domestic preference, and supply chain security</strong> requirements. We assist with DFARS 252.225 compliance, ITAR regulations, and Section 889 prohibitions on Chinese technology.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>DFARS specialty metals compliance (aluminum, steel, titanium)</li>
                <li>ITAR (International Traffic in Arms Regulations) compliance and licensing</li>
                <li>Section 889 compliance (Chinese technology prohibitions)</li>
                <li>Supply chain risk management for defense contractors</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural Trade & Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Sacramento Valley produces significant <strong>rice, tomatoes, almonds, and agricultural products</strong>. We assist agricultural exporters with USDA export certificates, phytosanitary requirements, destination country compliance, and free trade agreement utilization for agricultural exports.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA export certificates and phytosanitary documentation</li>
                <li>Agricultural export compliance and destination country requirements</li>
                <li>Free trade agreement (FTA) utilization for agricultural exports</li>
                <li>Agricultural tariff classification and import compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & Duty Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Sacramento Valley tariff lawyer, we ensure accurate HTS classification for technology products, agricultural commodities, and manufactured goods. Proper classification can save <strong>15-25% in duty costs</strong> for Sacramento importers. We file binding rulings and defend against CBP reclassifications.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification analysis and optimization for all product categories</li>
                <li>Binding Ruling requests (NY/HQ rulings) to CBP National Import Specialists</li>
                <li>Section 301 tariff mitigation strategies for China imports</li>
                <li>Free trade agreement (USMCA/KORUS) qualification and certification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Port of Sacramento/Stockton Customs Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP detains and examines cargo at Sacramento Valley's inland ports. We provide <strong>rapid response to port detentions</strong>, cargo holds, and CBP examinations at Port of Sacramento and Port of Stockton. Our local knowledge expedites cargo release and minimizes demurrage costs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP detention defense at Port of Sacramento and Port of Stockton</li>
                <li>Cargo release packages and admissibility documentation</li>
                <li>CBP examination support and port representation</li>
                <li>Agricultural product USDA/APHIS detention response</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Compliance Reviews</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP audits Sacramento Valley importers and government contractors through <strong>Focused Assessments and compliance reviews</strong>. We defend your interests, respond to CF-28 notices, and minimize exposure through strategic prior disclosures and penalty mitigation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense for major Sacramento importers</li>
                <li>Prior Disclosure filings to cap penalties at interest-only (19 USC § 1592)</li>
                <li>CF-28/CF-29 Notice of Action response and negotiation</li>
                <li>Trade compliance program development and internal audits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Across Sacramento Valley */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Comprehensive Sacramento Valley Coverage
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Sacramento County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Sacramento County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                California's capital and government center:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Sacramento', 'Elk Grove', 'Citrus Heights', 'Folsom',
                  'Rancho Cordova', 'Arden-Arcade', 'Carmichael', 'Fair Oaks',
                  'Orangevale', 'North Highlands', 'Foothill Farms', 'Rosemont'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Placer County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Placer County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Technology and growth corridor:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Roseville', 'Rocklin', 'Lincoln', 'Auburn',
                  'Granite Bay', 'Loomis', 'Penryn', 'Newcastle',
                  'Tahoe Vista', 'Kings Beach', 'Carnelian Bay', 'Colfax'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Yolo County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Yolo County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                UC Davis and agricultural innovation:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Davis', 'Woodland', 'West Sacramento', 'Winters',
                  'Esparto', 'Knights Landing', 'Dunnigan', 'Yolo'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Sutter & Yuba Counties */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Sutter & Yuba Counties</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Agricultural production and food processing:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Yuba City', 'Marysville', 'Live Oak', 'Sutter',
                  'Wheatland', 'Olivehurst', 'Linda', 'Plumas Lake'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* El Dorado County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">El Dorado County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Foothills and Lake Tahoe region:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'El Dorado Hills', 'Placerville', 'South Lake Tahoe', 'Cameron Park',
                  'Shingle Springs', 'Diamond Springs', 'Pollock Pines', 'Georgetown'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* North San Joaquin */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">North San Joaquin</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of Stockton access and logistics:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Stockton', 'Lodi', 'Tracy', 'Manteca',
                  'Galt', 'Lathrop', 'Ripon', 'Escalon'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Ports & Industries */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Sacramento Valley Ports & Industries</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Port Access</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of Sacramento (Deep Water)</li>
                  <li>Port of Stockton</li>
                  <li>Port of Oakland</li>
                  <li>Sacramento International Airport</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Key Industries</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Government Contracting</li>
                  <li>Agricultural Production</li>
                  <li>Technology & Healthcare</li>
                  <li>Food Processing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Trade Compliance Focus</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>TAA/BAA Compliance</li>
                  <li>DFARS Requirements</li>
                  <li>Agricultural Exports</li>
                  <li>ITAR/Export Controls</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sacramento Valley Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Sacramento Valley Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Government Contractor Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Sacramento Valley trade attorney, we understand federal procurement rules better than general practice firms. Our team has deep expertise in <strong>TAA compliance, Buy American Act, DFARS requirements, and FAR regulations</strong> critical to Sacramento's government contractor community. We ensure your supply chain meets federal standards.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regional & Federal Practice</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We combine Sacramento Valley regional knowledge with nationwide practice before federal agencies. We appear at <strong>CBP ports, Court of International Trade, Department of Commerce, and USDA</strong>. Local accessibility with Washington D.C. and federal agency expertise.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Trade Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Sacramento Valley's agricultural sector requires specialized knowledge of <strong>USDA export compliance, phytosanitary requirements, and agricultural tariff classification</strong>. We assist rice, tomato, almond, and other agricultural exporters with destination country compliance and export documentation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services including TAA compliance reviews, binding ruling requests, prior disclosures, and port detention response. Competitive hourly rates for complex audits and litigation. Your free consultation includes a detailed cost estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Sacramento Valley from Our California Office
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Consultations:</strong> Phone, video, and in-person available
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Access from Sacramento Valley</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From Sacramento:</strong> I-80 West to I-580 West to I-680 South to I-680/580 split (2.5-3 hours)</li>
                <li><strong>From Roseville/Rocklin:</strong> I-80 West to Bay Area routes (2.5-3 hours)</li>
                <li><strong>From Davis/Woodland:</strong> I-80 West to Bay Area (2-2.5 hours)</li>
                <li><strong>Virtual Consultations:</strong> Available for all Sacramento Valley clients</li>
              </ul>
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

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/government-contractor-compliance" className="service-link">
                    <span className="service-link__title">Government Contractor TAA/BAA</span>
                    <p className="service-link__description">Federal procurement compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/agricultural-export-compliance" className="service-link">
                    <span className="service-link__title">Agricultural Exports</span>
                    <p className="service-link__description">USDA/export compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/dfars-itar-compliance" className="service-link">
                    <span className="service-link__title">DFARS/ITAR Compliance</span>
                    <p className="service-link__description">Defense contractor trade law</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Port Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/port-of-stockton-trade" className="service-link">
                    <span className="service-link__title">Port of Stockton</span>
                    <p className="service-link__description">Inland port compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/port-of-oakland-tariff" className="service-link">
                    <span className="service-link__title">Port of Oakland</span>
                    <p className="service-link__description">Bay Area port services</p>
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
                  <Link to="/taa-compliance-guide" className="service-link">
                    <span className="service-link__title">TAA Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/buy-american-act-guide" className="service-link">
                    <span className="service-link__title">Buy American Act Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/dfars-compliance-guide" className="service-link">
                    <span className="service-link__title">DFARS Compliance Guide</span>
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
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Sacramento Valley trade attorney and tariff lawyer team today. We'll assess your government contractor, agricultural, or import/export compliance needs and provide expert guidance.
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

export default SacramentoValleyTradePage;
