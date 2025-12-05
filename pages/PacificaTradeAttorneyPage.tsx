
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const PacificaTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Pacifica Trade Attorney | Coastal Business Import Export CA',
    description: 'Pacifica trade attorney for coastal businesses. Import compliance, export controls, maritime logistics. San Mateo County. (310) 744-1328.',
    canonical: 'pacifica-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-pacifica.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Pacifica Trade Attorney - Coastal Business Import Export Compliance Lawyer',
        description: 'Serving Pacifica and San Mateo County coastal businesses with expert trade compliance, import regulations, and maritime logistics legal services.',
        url: `${siteConfig.siteUrl}/pacifica-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Locations', url: `${siteConfig.siteUrl}/california-locations` },
        { name: 'Pacifica', url: `${siteConfig.siteUrl}/pacifica-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Pacifica Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance and import/export legal representation for Pacifica coastal businesses. Expert Pacifica trade attorney services including HTS classification, customs compliance programs, tariff engineering strategies, and e-commerce import regulations.',
        serviceType: 'Coastal Business Trade Law',
        url: `${siteConfig.siteUrl}/pacifica-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="Pacifica Trade Law Hero">
        <picture className="hero-bg">
          <img
            src="/images/hero-port-background-2.jpg"
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
          <h1>Pacifica Trade Attorney<br />Coastal Business Import Export</h1>
          <p className="hero-subtitle">
            Expert trade law for San Mateo County coastal businesses. Import compliance, tariff optimization, and global trade strategy for Pacifica's entrepreneurial economy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Pacifica Companies Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Pacifica's Coastal Business Community
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Pacifica's coastal businesses—from <strong>retail importers to e-commerce companies</strong>—rely on international trade for inventory and growth. Importing consumer goods, apparel, and products requires <strong>customs compliance, tariff optimization, and USMCA strategies</strong> to maximize profitability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Import Compliance Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                As your Pacifica trade attorney, we provide <strong>import compliance services</strong> for retailers, e-commerce sellers, and small businesses. We handle HTS classification, customs bonds, and tariff engineering to reduce costs.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">E-Commerce Trade Law</h3>
              <p className="text-text-secondary leading-relaxed">
                We specialize in <strong>e-commerce import compliance</strong> for online sellers using de minimis exemptions, Section 321 entries, and direct-to-consumer shipping strategies. We understand Amazon FBA, Shopify, and cross-border logistics.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Peninsula Coverage</h3>
              <p className="text-text-secondary leading-relaxed">
                Serving Pacifica, Daly City, South San Francisco, and San Mateo County. We understand Peninsula logistics, SFO air freight operations, and coastal business challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Coastal Businesses */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance for Pacifica Businesses
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">E-Commerce Import Compliance & Section 321</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                E-commerce sellers can use <strong>Section 321 de minimis</strong> (shipments under $800) to avoid duties. We structure your import operations, manage Section 321 Type 86 entries, and ensure CBP compliance for direct-to-consumer shipments.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Section 321 Type 86:</strong> De minimis entry procedures for low-value shipments</li>
                <li><strong>Amazon FBA Compliance:</strong> Importer of Record services, customs bonds</li>
                <li><strong>Shopify/WooCommerce:</strong> Cross-border shipping and duty calculation</li>
                <li><strong>Direct-to-Consumer:</strong> CBP compliance for DTC e-commerce models</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">HTS Classification & Tariff Engineering</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper <strong>HTS classification</strong> determines your duty rates (0-37.5%) and eligibility for free trade agreements. We classify consumer goods, apparel, electronics, and home goods to minimize tariffs and avoid CBP penalties.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for consumer goods (Chapters 61-96)</li>
                <li>Tariff engineering to reduce duty rates through product modifications</li>
                <li>Section 301 China tariff mitigation strategies</li>
                <li>USMCA certificate of origin for Mexican/Canadian goods</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Bonds & Importer of Record Services</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                All importers need a <strong>customs bond</strong> to clear shipments. We obtain single transaction bonds (one-time imports) or continuous bonds (frequent importers) and serve as your Importer of Record for compliance management.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Continuous customs bonds for regular importers</li>
                <li>Single transaction bonds for one-time shipments</li>
                <li>Importer of Record (IOR) services for foreign sellers</li>
                <li>Bond sufficiency analysis and activity-based bond amounts</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Apparel & Textile Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Apparel and textiles require <strong>country of origin marking, fiber content labeling, and quota compliance</strong>. We manage textile category determinations, USMCA rules of origin, and customs valuation for fashion importers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for apparel (Chapters 61-62)</li>
                <li>Country of origin marking requirements (19 CFR Part 134)</li>
                <li>USMCA textile rules of origin (yarn forward, tariff shift)</li>
                <li>FTC labeling compliance (fiber content, care instructions)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Product Safety & FDA/CPSC Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Many consumer products require <strong>FDA, CPSC, or FCC compliance</strong> before import. We coordinate product testing, certification, and import documentation for cosmetics, children's products, and electronics.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>FDA:</strong> Cosmetics, dietary supplements, food contact materials</li>
                <li><strong>CPSC:</strong> Children's products, toys, consumer safety testing</li>
                <li><strong>FCC:</strong> Electronic devices, RF certification</li>
                <li><strong>Prop 65:</strong> California chemical warnings for consumer products</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Intellectual Property & Trademark Recordation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>CBP trademark recordation</strong> protects your brand from counterfeit imports. We file trademark recordations with CBP, manage seizure cases, and enforce IP rights at the border.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP trademark recordation applications</li>
                <li>Counterfeit seizure response and enforcement</li>
                <li>Gray market import prevention strategies</li>
                <li>Parallel import analysis and first sale doctrine</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pacifica Companies Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Pacifica Businesses Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Small Business Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Pacifica trade attorney, we understand <strong>small business budgets, e-commerce operations, and direct-to-consumer models</strong>. We provide affordable, practical trade compliance solutions tailored to your business size.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">E-Commerce Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>Amazon FBA, Shopify, WooCommerce, and marketplace compliance</strong>. Our attorneys understand platform-specific requirements, cross-border fulfillment, and Section 321 strategies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Flat-Fee Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee packages</strong> for HTS classification, customs bonds, and import compliance programs. Transparent pricing with no surprise bills. Startup-friendly payment terms.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fast Turnaround</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We know <strong>time matters in e-commerce</strong>. Whether you need emergency customs clearance or expedited classification rulings, we prioritize your timelines. Typical HTS classification: 5-7 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Pacifica Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">E-Commerce</h3>
              <p className="text-sm text-text-secondary">Online retailers, Amazon FBA, Shopify stores</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Apparel & Fashion</h3>
              <p className="text-sm text-text-secondary">Clothing importers, fashion brands, accessories</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Consumer Electronics</h3>
              <p className="text-sm text-text-secondary">Electronics retailers, gadgets, devices</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Home Goods</h3>
              <p className="text-sm text-text-secondary">Furniture, decor, housewares, textiles</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Beauty & Cosmetics</h3>
              <p className="text-sm text-text-secondary">Skincare, makeup, personal care products</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Outdoor & Sporting Goods</h3>
              <p className="text-sm text-text-secondary">Surf equipment, outdoor gear, athletic wear</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Food & Beverage</h3>
              <p className="text-sm text-text-secondary">Specialty foods, organic products, beverages</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Retail Stores</h3>
              <p className="text-sm text-text-secondary">Boutiques, gift shops, specialty retail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Pacifica & Peninsula Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Pacifica's coastal business community, Peninsula logistics networks, and San Mateo County import operations. We serve clients by appointment throughout the Pacifica and Peninsula region.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Transportation Routes */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Pacifica Transportation & Port Access</h3>
              <p className="text-text-secondary mb-4">Understanding Peninsula freight corridors for import logistics:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-1</span>
                  <span>Coastal Highway — scenic route connecting Pacifica to San Francisco and Half Moon Bay</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-280</span>
                  <span>Peninsula corridor — fast access to SFO Airport and Silicon Valley</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">US-101</span>
                  <span>Main artery — connects to Port of Oakland and San Francisco</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SFO Airport</span>
                  <span>Primary air freight — 15 miles from Pacifica, international cargo facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Port of SF/Oakland</span>
                  <span>Ocean freight access — 20-30 miles, container import operations</span>
                </li>
              </ul>
            </div>

            {/* Business Districts */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Pacifica Business Districts</h3>
              <p className="text-text-secondary mb-4">Key commercial and retail zones:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Rockaway Beach</span>
                  <span>Coastal retail — surf shops, restaurants, tourist businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Linda Mar</span>
                  <span>Main commercial district — shopping centers, services, offices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Palmetto Avenue</span>
                  <span>Downtown corridor — boutiques, cafes, local businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Sharp Park</span>
                  <span>North Pacifica — retail, golf, coastal amenities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Manor/Fairmont</span>
                  <span>Hilltop areas — professional services, home-based businesses</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Air Freight */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">SFO Air Freight & Customs Operations</h3>
              <p className="text-text-secondary mb-4">Managing e-commerce and air freight imports:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SFO Cargo</span>
                  <span>International air freight — express shipments, Section 321 entries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">FedEx/UPS Hubs</span>
                  <span>Express carriers — duty-paid and de minimis shipments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CBP SFO</span>
                  <span>Customs clearance — ISF filing, entry processing, examinations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">DHL/Amazon</span>
                  <span>E-commerce logistics — FBA shipments, cross-border parcels</span>
                </li>
              </ul>
              <p className="text-sm text-text-secondary mt-4 italic">
                Average air freight clearance time: 1-3 days for compliant shipments. We respond to CBP holds within 24 hours.
              </p>
            </div>

            {/* Cities Served */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Peninsula Cities We Serve</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout San Mateo County:</p>
              <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary">
                <span>Pacifica</span>
                <span>Daly City</span>
                <span>South SF</span>
                <span>San Bruno</span>
                <span>Millbrae</span>
                <span>Burlingame</span>
                <span>San Mateo</span>
                <span>Redwood City</span>
                <span>Half Moon Bay</span>
              </div>
              <p className="text-sm text-text-secondary mt-4">
                <strong>Headquarters:</strong> 27001 Agoura Road, Suite 350, Calabasas, CA 91301<br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a>
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

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">E-Commerce Trade Services</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/ecommerce-digital-trade-guide" className="service-link">
                      <span className="service-link__title">E-Commerce Trade Guide</span>
                      <p className="service-link__description">Section 321 & online selling</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/tariffs-duties-classification-guide" className="service-link">
                      <span className="service-link__title">Tariff Classification</span>
                      <p className="service-link__description">HTS codes for products</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Nearby Locations</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/san-francisco-customs-attorney" className="service-link">
                      <span className="service-link__title">San Francisco Customs</span>
                      <p className="service-link__description">SF import compliance</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/bay-area-trade-law-attorney" className="service-link">
                      <span className="service-link__title">Bay Area Trade Attorney</span>
                      <p className="service-link__description">Regional coverage</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Resources</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/resources/section-301-tariffs-guide" className="service-link">
                      <span className="service-link__title">Section 301 Guide</span>
                      <p className="service-link__description">China tariff strategies</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/trade-law-faq" className="service-link">
                      <span className="service-link__title">FAQ Center</span>
                      <p className="service-link__description">Common questions</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Import Your Products Compliantly
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let customs compliance slow down your business growth. Contact our Pacifica trade attorney team for expert import compliance and tariff optimization services.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">
              Schedule Free Consultation
            </Button>
            <Button href="tel:+13107441328" variant="outline">
              Call (310) 744-1328
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

export default PacificaTradeAttorneyPage;
