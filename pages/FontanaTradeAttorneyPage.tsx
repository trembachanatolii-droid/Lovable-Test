
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const FontanaTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Fontana Trade Attorney | Manufacturing Customs Lawyer CA',
    description: 'Fontana trade attorney for manufacturing & logistics. Expert customs lawyer near Inland Empire warehouses. CBP defense, tariff classification, duty drawback. (310) 744-1328.',
    keywords: 'trade attorney fontana, customs lawyer fontana, inland empire customs attorney, fontana tariff lawyer, warehouse customs compliance, logistics trade attorney fontana, manufacturing import lawyer, fontana international trade',
    canonical: 'fontana-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-fontana.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Fontana Trade Attorney & Manufacturing Customs Lawyer - Inland Empire CA',
        description: 'Fontana trade attorney specializing in manufacturing and logistics customs compliance. Expert legal services for Inland Empire warehouses, distribution centers, and manufacturers.',
        url: `${siteConfig.siteUrl}/fontana-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Fontana Trade Attorney', url: `${siteConfig.siteUrl}/fontana-trade-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Fontana trade attorney for manufacturing and logistics?',
          answer: 'Fontana is the heart of the Inland Empire\'s massive logistics and manufacturing sector, home to Amazon fulfillment centers, warehouses for major retailers, and manufacturing facilities. Our trade attorney understands the unique customs needs of high-volume importers including e-commerce fulfillment, foreign trade zones, duty drawback for re-exports, and rapid CBP response for detention issues.',
        },
        {
          question: 'What customs services do you provide for Fontana warehouses and distribution centers?',
          answer: 'We provide specialized services for logistics operations including: foreign trade zone (FTZ) activation and compliance, duty drawback for re-exported goods, Section 321 de minimis entry strategies, e-commerce customs compliance, CBP warehouse exam defense, tariff classification for high-volume SKUs, and customs bond sufficiency reviews.',
        },
        {
          question: 'Do you help with foreign trade zone (FTZ) compliance in Fontana?',
          answer: 'Yes, Fontana has active FTZs that allow duty deferral and other benefits. We assist with FTZ activation, weekly entry procedures, inverted tariff strategies, FTZ compliance audits, and CBP zone examinations. FTZs can save substantial duties for manufacturers and distributors.',
        },
        {
          question: 'Can you help recover duties through duty drawback programs?',
          answer: 'Absolutely. Many Fontana warehouses import goods that are later exported or destroyed. Our duty drawback practice recovers 99% of paid duties through manufacturing drawback, unused merchandise drawback, and rejected merchandise drawback. We handle the complex documentation and CBP filing requirements.',
        },
        {
          question: 'What industries do you serve in Fontana and the Inland Empire?',
          answer: 'We represent the diverse Inland Empire business community including: e-commerce and fulfillment (Amazon, third-party logistics), automotive parts manufacturing, consumer goods importers, food and beverage distribution, apparel and textiles, building materials, and industrial equipment. Our Fontana location is ideal for serving the region\'s logistics hub.',
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
      <section className="hero" aria-label="Fontana Trade Attorney Hero">
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
          <h1>Fontana Trade Attorney<br />Manufacturing & Logistics Customs Lawyer</h1>
          <p className="hero-subtitle">
            Expert Fontana trade attorney serving Inland Empire manufacturers, warehouses, and distribution centers. Specialized in FTZ compliance, duty drawback, and high-volume customs operations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Fontana Trade Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Inland Empire Manufacturing & Logistics Hub
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Fontana is the <strong>logistics and manufacturing epicenter of the Inland Empire</strong>, home to massive distribution centers, foreign trade zones, and manufacturing facilities. Our trade attorney provides specialized customs legal services for high-volume importers and manufacturers in this critical Southern California hub.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Logistics Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep knowledge of <strong>warehouse, FTZ, and distribution center customs compliance</strong>. We understand e-commerce fulfillment and high-volume import operations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic location with <strong>direct access to Port of LA and Long Beach</strong> via I-10 and I-710. Quick response to cargo issues and CBP examinations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Duty Recovery</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Duty drawback expertise</strong> to recover 99% of paid duties on re-exported or destroyed goods. Maximize your refunds on qualifying transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Manufacturing & Logistics Trade Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign Trade Zone (FTZ) Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Fontana has active Foreign Trade Zones that allow <strong>duty deferral until goods enter US commerce</strong>. We help manufacturers and distributors activate FTZ privileges, maintain compliance, and maximize duty savings through inverted tariff strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FTZ activation and application support</li>
                <li>Weekly entry procedures and compliance</li>
                <li>Inverted tariff analysis for manufacturers</li>
                <li>FTZ zone-to-zone transfers and admissions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Duty Drawback Claims & Recovery</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Duty drawback allows recovery of <strong>99% of duties paid</strong> on goods that are exported, destroyed, or used in manufacturing. Our Fontana trade attorney maximizes your refunds through manufacturing drawback, unused merchandise drawback, and rejected merchandise drawback.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Manufacturing drawback (direct/substitution)</li>
                <li>Unused merchandise drawback for re-exports</li>
                <li>Rejected merchandise drawback</li>
                <li>Accelerated Payment Program enrollment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">E-Commerce Customs Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Fontana is home to major <strong>e-commerce fulfillment centers</strong> including Amazon facilities. We advise on Section 321 de minimis entries, marketplace seller compliance, customs bond requirements, and ISF filing for express consignments.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 321 de minimis entry strategies (under $800)</li>
                <li>E-commerce marketplace seller compliance</li>
                <li>Type 9 bond sufficiency for high-volume imports</li>
                <li>ISF compliance for ocean freight</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification for High-Volume SKUs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Warehouses and distribution centers handle <strong>thousands of SKUs</strong>. We provide bulk tariff classification services, HTS optimization, and binding rulings to ensure consistent duty treatment across your product catalog.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Bulk HTS classification for product catalogs</li>
                <li>Binding Ruling requests for core products</li>
                <li>Tariff engineering for cost reduction</li>
                <li>First sale valuation for related-party transactions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Warehouse Exam & Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively examines cargo at Inland Empire warehouses and FTZs. Our proximity to Fontana enables <strong>same-day response</strong> to CBP exams, detentions, and cargo holds that disrupt your supply chain.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP warehouse and FTZ exam representation</li>
                <li>Cargo detention response and admissibility packages</li>
                <li>IPR (trademark/copyright) seizure defense</li>
                <li>Express consignment compliance (air freight)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Manufacturing Compliance & Section 301 Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Fontana manufacturers face <strong>Section 301 tariffs on China imports</strong>. We advise on supply chain restructuring, substantial transformation analysis, and tariff mitigation strategies for manufacturing operations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 tariff mitigation strategies</li>
                <li>Substantial transformation opinions for manufacturers</li>
                <li>Country of origin marking compliance</li>
                <li>Supply chain restructuring for duty minimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Fontana */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Fontana
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Inland Empire - West */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Inland Empire - West</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Serving Western Inland Empire business community:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Fontana', 'Rancho Cucamonga', 'Ontario', 'Rialto',
                  'San Bernardino', 'Colton', 'Bloomington', 'Mira Loma',
                  'Jurupa Valley', 'Eastvale', 'Chino', 'Chino Hills',
                  'Upland', 'Montclair', 'Pomona', 'Claremont'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Inland Empire - East & Greater LA */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Inland Empire - East & Greater LA</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Extended service throughout Inland Empire and Los Angeles County:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Riverside', 'Moreno Valley', 'Corona', 'Norco',
                  'Redlands', 'Yucaipa', 'Beaumont', 'Banning',
                  'Hemet', 'Temecula', 'Murrieta', 'Menifee',
                  'Los Angeles', 'Long Beach', 'Pasadena', 'Glendale'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Statewide & Ports */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">California Ports & Nationwide Representation</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">California Ports</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
                  <li>Ontario International Airport</li>
                  <li>Port of Oakland</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Courts</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>U.S. Court of International Trade</li>
                  <li>U.S. Court of Appeals (Federal Circuit)</li>
                  <li>CBP Administrative Proceedings</li>
                  <li>Commerce Department Reviews</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Foreign Trade Zones</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>FTZ 50 - Long Beach</li>
                  <li>FTZ 202 - Riverside County</li>
                  <li>FTZ 244 - San Bernardino</li>
                  <li>Subzones throughout IE</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fontana Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Fontana Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">High-Volume Operations Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>high-volume import operations</strong> including e-commerce, distribution centers, and manufacturing. Our systems handle bulk classification, FTZ compliance, and drawback for thousands of transactions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Inland Empire Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand the <strong>Inland Empire logistics ecosystem</strong> including its FTZs, proximity to LA/Long Beach ports, and role as a national distribution hub. Our services are tailored to regional needs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Duty Recovery Success</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our duty drawback practice has recovered <strong>millions in refunds</strong> for Fontana warehouses and manufacturers. We maximize your recovery while handling complex documentation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Flat-Fee Pricing Available</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>transparent flat fees</strong> for FTZ applications, drawback claims, and classification projects. Your free consultation includes a clear cost estimate for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Fontana & Inland Empire
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Fontana from our California offices</strong><br />
                Headquarters: 27001 Agoura Road, Suite 350<br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Urgent Matters:</strong> Same-day response for CBP detentions
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Transportation Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From Fontana:</strong> 1 hour via I-10 West</li>
                <li><strong>To Port of LA/Long Beach:</strong> 45 minutes via I-10 to I-710</li>
                <li><strong>To Ontario Airport:</strong> 20 minutes via I-10 East</li>
                <li><strong>I-15 Corridor:</strong> Direct access to San Diego and Las Vegas routes</li>
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
                  <a href="/ftz-foreign-trade-zones" className="service-link">
                    <span className="service-link__title">Foreign Trade Zone Compliance</span>
                    <p className="service-link__description">FTZ activation & management</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="/duty-drawback" className="service-link">
                    <span className="service-link__title">Duty Drawback Claims</span>
                    <p className="service-link__description">Recover 99% of paid duties</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">Tariff Classification</span>
                    <p className="service-link__description">Bulk SKU classification</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/ontario-logistics-attorney" className="service-link">
                    <span className="service-link__title">Ontario Trade Attorney</span>
                    <p className="service-link__description">Airport & logistics hub</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/los-angeles-port-customs-attorney" className="service-link">
                    <span className="service-link__title">LA Port Customs Attorney</span>
                    <p className="service-link__description">Port of LA/Long Beach</p>
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
                  <Link to="/resources/ftz-compliance-guide" className="service-link">
                    <span className="service-link__title">FTZ Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/duty-drawback-guide" className="service-link">
                    <span className="service-link__title">Duty Drawback Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">Tariff Classification Guide</span>
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
            Contact our Fontana trade attorney team today. We'll assess your manufacturing and logistics customs needs and provide clear guidance.
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

export default FontanaTradeAttorneyPage;
