
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const RanchoCucamongaTariffLawyerPage: React.FC = () => {
  useMeta({
    title: 'Rancho Cucamonga Tariff Lawyer | Inland Empire Customs CA',
    description: 'Rancho Cucamonga tariff lawyer for Ontario/San Bernardino businesses. Expert customs attorney near Ontario Airport. Manufacturing, logistics, CBP defense. (310) 744-1328.',
    keywords: 'tariff lawyer rancho cucamonga, customs attorney rancho cucamonga, ontario airport customs lawyer, inland empire trade attorney, san bernardino customs lawyer, international trade attorney rancho cucamonga',
    canonical: 'rancho-cucamonga-tariff-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-rancho-cucamonga.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Rancho Cucamonga Tariff Lawyer & Inland Empire Customs Attorney - CA',
        description: 'Rancho Cucamonga tariff lawyer serving Inland Empire businesses near Ontario International Airport. Expert customs legal services for logistics, manufacturing, and air cargo operations.',
        url: `${siteConfig.siteUrl}/rancho-cucamonga-tariff-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Rancho Cucamonga Tariff Lawyer', url: `${siteConfig.siteUrl}/rancho-cucamonga-tariff-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Rancho Cucamonga tariff lawyer?',
          answer: 'Rancho Cucamonga is strategically located near Ontario International Airport and major Inland Empire logistics corridors including I-10, I-15, and I-210. Our tariff lawyer serves businesses engaged in air cargo imports, manufacturing, and distribution with immediate access to ONT air cargo facilities and understanding of the region\'s diverse economy.',
        },
        {
          question: 'Do you handle Ontario Airport air cargo customs issues?',
          answer: 'Yes, Ontario International Airport is a major air cargo gateway serving the Inland Empire. We provide immediate response to CBP air cargo detentions, express consignment issues, ISF compliance, and import clearance for time-sensitive air shipments. Our proximity enables same-day resolution of urgent ONT customs matters.',
        },
        {
          question: 'What tariff services do you provide for Rancho Cucamonga businesses?',
          answer: 'We offer comprehensive tariff services including: HTS classification and optimization, CBP audit defense, Section 301 tariff strategies, duty drawback claims, express consignment compliance, ISF filing for air and ocean cargo, and tariff classification for high-value air shipments.',
        },
        {
          question: 'Can you assist with manufacturing customs compliance?',
          answer: 'Absolutely. Rancho Cucamonga has significant manufacturing operations. We assist with country of origin determinations, substantial transformation analysis, foreign trade zone strategies, manufacturing drawback, USMCA qualification, and Section 301 mitigation for manufacturers.',
        },
        {
          question: 'What industries do you serve in Rancho Cucamonga and San Bernardino County?',
          answer: 'We represent diverse Inland Empire businesses including: air cargo and express consignment, manufacturing and industrial equipment, wine and beverage distribution, automotive parts, consumer electronics, apparel and fashion, medical devices, and general logistics operations near Ontario Airport.',
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
      <section className="hero" aria-label="Rancho Cucamonga Tariff Lawyer Hero">
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
          <h1>Rancho Cucamonga Tariff Lawyer<br />Inland Empire Customs Attorney</h1>
          <p className="hero-subtitle">
            Expert Rancho Cucamonga tariff lawyer serving Inland Empire businesses near Ontario Airport. Specialized in air cargo, manufacturing, and logistics customs compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact#schedule-consultation" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Rancho Cucamonga Tariff Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Ontario Airport & IE Business Center
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Rancho Cucamonga is at the <strong>heart of the Inland Empire near Ontario International Airport</strong>, a major air cargo gateway. Our tariff lawyer provides specialized customs legal services for air cargo operations, manufacturing, wine distribution, and IE logistics with convenient airport access.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Airport Access</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Direct access to Ontario International Airport</strong> air cargo facilities. Immediate response to CBP air cargo detentions and time-sensitive shipments.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Hub</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep knowledge of <strong>IE manufacturing compliance</strong> including country of origin, drawback, FTZ strategies, and Section 301 mitigation.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Wine & Beverage</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized in <strong>wine and alcohol import compliance</strong>. TTB, labeling, excise tax, and beverage-specific customs requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Rancho Cucamonga Trade & Customs Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Ontario Airport Air Cargo Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Ontario International Airport handles <strong>significant air cargo operations</strong>. We provide rapid response to CBP air cargo detentions, express consignment issues, and ISF compliance for time-sensitive shipments.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ONT air cargo CBP detention defense</li>
                <li>Express consignment and courier compliance</li>
                <li>ISF (Importer Security Filing) for air cargo</li>
                <li>High-value shipment customs procedures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Wine & Alcohol Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Rancho Cucamonga is a <strong>major wine distribution center</strong>. We handle TTB Certificate of Label Approval (COLA), alcohol excise tax, state ABC licensing coordination, and customs procedures for wine and spirits.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>TTB COLA (Certificate of Label Approval)</li>
                <li>Alcohol excise tax and bonding requirements</li>
                <li>State ABC licensing support</li>
                <li>CBP release procedures for alcoholic beverages</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper HTS classification can save <strong>15-25% on duty costs</strong>. Our Rancho Cucamonga tariff lawyer ensures optimal classification for manufactured goods, wine, electronics, and air cargo shipments.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for manufactured products</li>
                <li>Wine and beverage tariff classification</li>
                <li>Binding Ruling requests for key products</li>
                <li>Tariff engineering and duty minimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Manufacturing Compliance & Duty Drawback</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                IE manufacturers can <strong>recover 99% of duties paid</strong> on exported goods through drawback programs. We handle manufacturing drawback, unused merchandise drawback, and FTZ strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Manufacturing drawback (direct/substitution)</li>
                <li>Unused merchandise drawback for re-exports</li>
                <li>Foreign trade zone strategies</li>
                <li>Country of origin and substantial transformation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively audits Inland Empire importers. Our Rancho Cucamonga office defends you through <strong>Focused Assessments and penalty proceedings</strong>, often reducing penalties by 75% or more.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense</li>
                <li>Prior Disclosure filings to cap penalties</li>
                <li>CF-28/CF-29 response preparation</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariffs add <strong>7.5% to 25%</strong> on China imports. We help IE businesses navigate exclusions, supply chain restructuring, and tariff mitigation for manufacturing operations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 exclusion analysis</li>
                <li>Supply chain restructuring strategies</li>
                <li>Substantial transformation for third-country parts</li>
                <li>USMCA qualification for Mexico manufacturing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Rancho Cucamonga */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Rancho Cucamonga
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Western Inland Empire */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Western Inland Empire</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Serving Western San Bernardino County:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Rancho Cucamonga', 'Ontario', 'Upland', 'Montclair',
                  'Fontana', 'Rialto', 'San Bernardino', 'Colton',
                  'Chino', 'Chino Hills', 'Alta Loma', 'Etiwanda',
                  'Claremont', 'Pomona', 'Diamond Bar', 'Walnut'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Riverside County & LA County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Riverside County & LA County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Extended service throughout region:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Riverside', 'Corona', 'Norco', 'Eastvale',
                  'Jurupa Valley', 'Moreno Valley', 'Perris', 'Lake Elsinore',
                  'La Verne', 'San Dimas', 'Glendora', 'Azusa',
                  'Covina', 'West Covina', 'Baldwin Park', 'El Monte'
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
                  <li>Ontario International Airport</li>
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
                  <li>Port of Oakland</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Courts</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>U.S. Court of International Trade</li>
                  <li>U.S. Court of Appeals (Federal Circuit)</li>
                  <li>CBP Administrative Proceedings</li>
                  <li>TTB/Commerce Reviews</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Regional Markets</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>San Bernardino County</li>
                  <li>Riverside County</li>
                  <li>Los Angeles County</li>
                  <li>Orange County</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rancho Cucamonga Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Rancho Cucamonga Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Air Cargo Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>Ontario Airport air cargo customs issues</strong> with immediate response capability. Time-sensitive shipments require rapid resolution.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Wine & Beverage Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Deep knowledge of <strong>wine and alcohol import compliance</strong> including TTB, excise tax, and state licensing. Serving RC's wine distribution industry.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">IE Manufacturing Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>Inland Empire manufacturing operations</strong> and provide country of origin, drawback, and FTZ strategies for cost savings.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services including rulings, protests, and drawback claims. Your free consultation includes clear cost estimates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Rancho Cucamonga & Inland Empire
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Rancho Cucamonga from our California offices</strong><br />
                Headquarters: 27001 Agoura Road, Suite 350<br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Airport Emergencies:</strong> Rapid response for ONT air cargo issues
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Transportation Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From Rancho Cucamonga:</strong> 1 hour via I-210 to I-5 South</li>
                <li><strong>To Ontario Airport:</strong> 15 minutes via I-10</li>
                <li><strong>To Port of LA/Long Beach:</strong> 1 hour via I-10 to I-710</li>
                <li><strong>I-15 Corridor:</strong> Direct access to San Diego and Las Vegas</li>
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
                  <Link to="/air-cargo-compliance" className="service-link">
                    <span className="service-link__title">Air Cargo Compliance</span>
                    <p className="service-link__description">ONT airport customs</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <a href="/practice-areas" className="service-link">
                    <span className="service-link__title">Wine & Alcohol Imports</span>
                    <p className="service-link__description">TTB & excise tax</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="/duty-drawback" className="service-link">
                    <span className="service-link__title">Duty Drawback</span>
                    <p className="service-link__description">Recover 99% of duties</p>
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
                  <Link to="/ontario-trade-attorney" className="service-link">
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
                  <Link to="/fontana-trade-attorney" className="service-link">
                    <span className="service-link__title">Fontana Trade Attorney</span>
                    <p className="service-link__description">Manufacturing hub</p>
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
                  <Link to="/resources/air-cargo-guide" className="service-link">
                    <span className="service-link__title">Air Cargo Import Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/wine-import-guide" className="service-link">
                    <span className="service-link__title">Wine Import Guide</span>
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
            Contact our Rancho Cucamonga tariff lawyer today. We'll assess your import needs and provide clear guidance.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact#schedule-consultation" variant="solid">
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

export default RanchoCucamongaTariffLawyerPage;
