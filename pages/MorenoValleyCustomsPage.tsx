
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const MorenoValleyCustomsPage: React.FC = () => {
  useMeta({
    title: 'Moreno Valley Customs Lawyer | Inland Empire Trade Attorney',
    description: 'Moreno Valley customs lawyer for Inland Empire logistics & distribution. Expert tariff attorney for warehouse operations, FTZ compliance, CBP defense. (310) 744-1328.',
    keywords: 'customs lawyer moreno valley, tariff attorney moreno valley, inland empire trade lawyer, moreno valley international trade attorney, warehouse customs compliance, logistics customs lawyer, distribution center attorney moreno valley',
    canonical: 'moreno-valley-customs-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-moreno-valley.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Moreno Valley Customs Lawyer & Inland Empire Trade Attorney - California',
        description: 'Moreno Valley customs lawyer serving Inland Empire logistics companies, warehouses, and distribution centers. Expert trade compliance and CBP defense services.',
        url: `${siteConfig.siteUrl}/moreno-valley-customs-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Moreno Valley Customs Lawyer', url: `${siteConfig.siteUrl}/moreno-valley-customs-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Moreno Valley customs lawyer for logistics operations?',
          answer: 'Moreno Valley is a major Inland Empire logistics hub with massive distribution centers and warehouses serving Amazon, Target, Walmart, and other major retailers. Our customs lawyer understands high-volume import operations, foreign trade zone compliance, e-commerce customs requirements, and the unique needs of third-party logistics (3PL) providers in this critical distribution corridor.',
        },
        {
          question: 'What customs services do you provide for Moreno Valley warehouses?',
          answer: 'We offer specialized services for logistics operations including: foreign trade zone (FTZ) compliance, Section 321 de minimis entry strategies, e-commerce customs compliance, CBP warehouse exam defense, duty drawback for re-exports, customs bond sufficiency, ISF filing compliance, and high-volume tariff classification.',
        },
        {
          question: 'Do you help with CBP issues at Moreno Valley distribution centers?',
          answer: 'Yes, CBP actively examines cargo at Inland Empire warehouses. We provide immediate response to CBP exams, cargo detentions, and holds at Moreno Valley facilities. Our expertise helps minimize supply chain disruptions and resolve customs issues quickly for time-sensitive e-commerce and retail operations.',
        },
        {
          question: 'Can you assist with foreign trade zone compliance in Moreno Valley?',
          answer: 'Absolutely. Moreno Valley facilities can benefit from FTZ privileges allowing duty deferral and inverted tariff savings. We assist with FTZ activation, weekly entry compliance, zone-to-zone transfers, and FTZ examinations. These programs can save substantial duties for distribution centers.',
        },
        {
          question: 'What industries do you serve in Moreno Valley and Riverside County?',
          answer: 'We represent the diverse Inland Empire logistics sector including: e-commerce fulfillment and 3PL providers, retail distribution centers, consumer goods importers, automotive parts warehouses, food and beverage distribution, apparel and fashion logistics, and general merchandise. Our location is ideal for the region\'s massive distribution network.',
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
      <section className="hero" aria-label="Moreno Valley Customs Lawyer Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Moreno Valley Customs Lawyer<br />Inland Empire Trade Attorney</h1>
          <p className="hero-subtitle">
            Expert Moreno Valley customs lawyer serving Inland Empire logistics, warehouses, and distribution centers. Specialized in e-commerce compliance, FTZ management, and high-volume customs operations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Moreno Valley Customs Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Inland Empire Logistics & Distribution Hub
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Moreno Valley is at the <strong>center of the Inland Empire's massive logistics network</strong>, home to millions of square feet of distribution centers and fulfillment operations. Our customs lawyer provides specialized legal services for high-volume importers, 3PL providers, and e-commerce operations in this critical supply chain corridor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Logistics Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep expertise in <strong>warehouse, 3PL, and e-commerce customs compliance</strong>. We understand high-volume operations and rapid fulfillment requirements.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Connectivity</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic location between <strong>Port of LA/Long Beach and Ontario Airport</strong>. Quick response to cargo issues across multiple entry points.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">E-Commerce Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Expert knowledge of <strong>Section 321 entries, marketplace compliance, and fulfillment center regulations</strong> for modern e-commerce operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Logistics & Distribution Customs Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">E-Commerce & Fulfillment Center Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Moreno Valley hosts major <strong>Amazon, Target, and Walmart fulfillment centers</strong>. We advise on Section 321 de minimis entries (under $800), marketplace seller compliance, ISF filing, and customs bond requirements for high-volume e-commerce.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 321 de minimis entry compliance and optimization</li>
                <li>E-commerce marketplace seller customs requirements</li>
                <li>Type 9 continuous bond sufficiency for high-volume imports</li>
                <li>ISF (Importer Security Filing) compliance and penalties</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign Trade Zone (FTZ) Management</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Moreno Valley warehouses can leverage <strong>FTZ benefits for duty deferral and inverted tariff savings</strong>. We handle FTZ activation, compliance, weekly entries, and zone examinations to maximize your cost savings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FTZ activation applications and setup</li>
                <li>Weekly entry procedures and compliance management</li>
                <li>Inverted tariff analysis for manufacturers</li>
                <li>Zone-to-zone transfers and admissions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">3PL & Third-Party Logistics Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Third-party logistics providers face unique customs challenges. We advise <strong>3PL operators on client compliance, bond requirements, warehouse liability, and regulatory obligations</strong> when handling imported goods.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>3PL customs compliance program development</li>
                <li>Client onboarding and customs due diligence</li>
                <li>Warehouse operator liability management</li>
                <li>CBP exam coordination for 3PL facilities</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">High-Volume Tariff Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Distribution centers handle <strong>thousands of SKUs across multiple product categories</strong>. We provide bulk classification services, HTS optimization, and binding rulings for consistent duty treatment.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Bulk HTS classification for product catalogs</li>
                <li>Automated classification systems and databases</li>
                <li>Binding Ruling requests for high-value SKUs</li>
                <li>First sale valuation for related-party imports</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Warehouse Exam & Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP regularly examines cargo at Inland Empire distribution centers. We provide <strong>immediate response to warehouse exams, cargo holds, and detentions</strong> to minimize supply chain disruptions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP warehouse and FTZ examination representation</li>
                <li>Cargo detention response and release packages</li>
                <li>IPR (intellectual property) seizure defense</li>
                <li>Express consignment and air cargo compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Duty Drawback for Distribution Centers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Many distribution centers import goods that are later <strong>re-exported or returned to vendors</strong>. Our duty drawback practice recovers 99% of paid duties through unused merchandise and rejected merchandise drawback.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Unused merchandise drawback for re-exports</li>
                <li>Rejected merchandise drawback for defective goods</li>
                <li>Accelerated Payment Program enrollment</li>
                <li>Drawback compliance and documentation systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Moreno Valley */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Moreno Valley
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Inland Empire - Riverside County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Inland Empire - Riverside County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Serving Riverside County logistics community:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Moreno Valley', 'Riverside', 'Corona', 'Norco',
                  'Jurupa Valley', 'Eastvale', 'Perris', 'Lake Elsinore',
                  'Menifee', 'Murrieta', 'Temecula', 'Wildomar',
                  'Hemet', 'San Jacinto', 'Beaumont', 'Banning'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Inland Empire - San Bernardino County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Inland Empire - San Bernardino County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Extended service throughout Western Inland Empire:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'San Bernardino', 'Fontana', 'Rialto', 'Colton',
                  'Rancho Cucamonga', 'Ontario', 'Upland', 'Montclair',
                  'Chino', 'Chino Hills', 'Redlands', 'Yucaipa',
                  'Loma Linda', 'Highland', 'Grand Terrace', 'Bloomington'
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
                <h4 className="font-bold text-secondary-teal mb-3">Entry Points</h4>
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
                  <li>FTZ 202 - Riverside County</li>
                  <li>FTZ 50 - Long Beach</li>
                  <li>FTZ 244 - San Bernardino</li>
                  <li>Multiple IE subzones</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Moreno Valley Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Moreno Valley Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Logistics Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>warehouse, 3PL, and distribution center customs compliance</strong>. Our systems are designed for high-volume operations with thousands of SKUs and rapid turnaround requirements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">E-Commerce Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Deep knowledge of <strong>modern e-commerce customs requirements</strong> including Section 321, marketplace seller compliance, and fulfillment center regulations. We keep pace with evolving regulations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Inland Empire Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand the <strong>Inland Empire logistics ecosystem</strong> and its role as the nation's largest warehouse and distribution hub. Services tailored to regional supply chain operations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Scalable Solutions</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Flat-fee and volume pricing</strong> available for classification projects, FTZ management, and compliance programs. Cost-effective solutions for high-volume importers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Moreno Valley & Inland Empire
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Moreno Valley from our California offices</strong><br />
                Headquarters: 27001 Agoura Road, Suite 350<br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Logistics Support:</strong> Priority response for warehouse and distribution issues
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Transportation Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From Moreno Valley:</strong> 1.5 hours via I-10 West</li>
                <li><strong>To Port of LA/Long Beach:</strong> 1 hour via I-60 to I-710</li>
                <li><strong>To Ontario Airport:</strong> 30 minutes via CA-60 West</li>
                <li><strong>I-215 Corridor:</strong> Direct access to I-10 and I-15 routes</li>
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

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#ecommerce-customs-compliance" className="service-link">
                    <span className="service-link__title">E-Commerce Compliance</span>
                    <p className="service-link__description">Section 321 & marketplace sellers</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#ftz-compliance-services" className="service-link">
                    <span className="service-link__title">FTZ Compliance</span>
                    <p className="service-link__description">Zone activation & management</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#duty-drawback-services" className="service-link">
                    <span className="service-link__title">Duty Drawback</span>
                    <p className="service-link__description">Recover duties on re-exports</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#riverside-trade-attorney" className="service-link">
                    <span className="service-link__title">Riverside Trade Attorney</span>
                    <p className="service-link__description">Riverside County logistics</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#ontario-logistics-attorney" className="service-link">
                    <span className="service-link__title">Ontario Logistics Attorney</span>
                    <p className="service-link__description">Airport & distribution hub</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Helpful Guides */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Guides</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#resources/section-321-guide" className="service-link">
                    <span className="service-link__title">Section 321 Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/ftz-compliance-guide" className="service-link">
                    <span className="service-link__title">FTZ Compliance Guide</span>
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
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Moreno Valley customs lawyer today. We'll assess your logistics and distribution customs needs and provide clear guidance.
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

export default MorenoValleyCustomsPage;
