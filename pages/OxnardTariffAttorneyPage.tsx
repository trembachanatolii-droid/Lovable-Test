
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const OxnardTariffAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Oxnard Tariff Attorney | Ventura County Customs Lawyer CA',
    description: 'Oxnard tariff attorney for Ventura County businesses. Expert customs lawyer for agricultural trade, Port of Hueneme imports, manufacturing. (310) 744-1328.',
    keywords: 'tariff attorney oxnard, customs lawyer oxnard, ventura county trade attorney, port of hueneme customs attorney, oxnard agricultural trade lawyer, international trade attorney oxnard',
    canonical: 'oxnard-tariff-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-oxnard.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Oxnard Tariff Attorney & Ventura County Customs Lawyer - California',
        description: 'Oxnard tariff attorney serving Ventura County businesses. Expert customs legal services for agricultural trade, Port of Hueneme operations, and manufacturing compliance.',
        url: `${siteConfig.siteUrl}/oxnard-tariff-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Oxnard Tariff Attorney', url: `${siteConfig.siteUrl}/oxnard-tariff-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose an Oxnard tariff attorney for Ventura County businesses?',
          answer: 'Oxnard is Ventura County\'s largest city and home to Port of Hueneme, California\'s only deep-water port between LA and San Francisco. Our tariff attorney serves diverse businesses including agricultural importers, automotive shippers, and manufacturers with direct access to port customs operations and understanding of Ventura County\'s agricultural economy.',
        },
        {
          question: 'Do you handle Port of Hueneme customs issues?',
          answer: 'Yes, Port of Hueneme is a critical entry point for automobiles, agricultural equipment, and specialty cargo. We provide immediate response to CBP detentions, cargo exams, and import compliance issues at Port Hueneme. Our proximity ensures rapid resolution of time-sensitive port matters.',
        },
        {
          question: 'What agricultural trade services do you provide in Oxnard?',
          answer: 'Ventura County is a major agricultural region producing strawberries, citrus, avocados, and vegetables. We assist with USDA APHIS compliance, FDA food import regulations, tariff classification for agricultural products, organic certification imports, phytosanitary requirements, and export compliance for Ventura County farm products.',
        },
        {
          question: 'Can you help with automotive imports through Port of Hueneme?',
          answer: 'Absolutely. Port Hueneme is a major auto import gateway. We assist with vehicle import compliance, EPA/DOT certification, tariff classification for vehicles and parts, temporary importation for car shows, and CBP entry procedures for automotive imports.',
        },
        {
          question: 'What industries do you serve in Oxnard and Ventura County?',
          answer: 'We represent diverse Ventura County businesses including: agriculture and food production, automotive imports and dealerships, Port of Hueneme shippers, manufacturing and industrial equipment, technology and biotech, oil and gas equipment, and general importers throughout Ventura County.',
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
      <section className="hero" aria-label="Oxnard Tariff Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1495364141860-b0d03eccd065?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Oxnard Tariff Attorney<br />Ventura County Customs Lawyer</h1>
          <p className="hero-subtitle">
            Expert Oxnard tariff attorney serving Ventura County businesses. Specialized in Port of Hueneme operations, agricultural trade, and automotive imports with convenient coastal access.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose an Oxnard Tariff Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Ventura County Trade Law Center
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Oxnard is <strong>Ventura County's commercial hub and home to Port of Hueneme</strong>, California's only deep-water port between Los Angeles and San Francisco. Our tariff attorney provides specialized customs legal services for agricultural trade, automotive imports, and Port of Hueneme operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Hueneme Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct access to <strong>Port of Hueneme customs operations</strong>. Immediate response to CBP detentions, cargo exams, and import compliance issues at this critical port.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep knowledge of <strong>Ventura County agriculture</strong> including USDA APHIS, FDA food regulations, and export compliance for strawberries, citrus, avocados.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Automotive Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized in <strong>vehicle import compliance through Port Hueneme</strong>. EPA/DOT certification, tariff classification, and automotive customs procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Oxnard Trade & Customs Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Port of Hueneme Customs Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of Hueneme handles <strong>automobiles, agricultural equipment, and specialty cargo</strong>. We provide rapid response to CBP issues, cargo detentions, and import compliance matters at this vital West Coast port.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Port of Hueneme CBP detention defense</li>
                <li>Cargo examination and release procedures</li>
                <li>Port-specific customs entry requirements</li>
                <li>Coordination with Port Hueneme customs brokers</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Automotive Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port Hueneme is a <strong>major auto import gateway</strong>. We handle vehicle import compliance including EPA/DOT certification, tariff classification for vehicles and parts, and customs entry procedures for automotive imports.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Vehicle import compliance (EPA/DOT/NHTSA)</li>
                <li>HTS classification for vehicles and automotive parts</li>
                <li>Temporary importation for car shows and testing</li>
                <li>Classic and specialty vehicle import procedures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural Trade & FDA/USDA Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Ventura County produces <strong>strawberries, citrus, avocados, and vegetables</strong> for export and import. We assist with USDA APHIS permits, FDA food regulations, and phytosanitary compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA APHIS import permits for agricultural products</li>
                <li>FDA food import compliance and registration</li>
                <li>Phytosanitary certificates for agricultural exports</li>
                <li>Organic certification and NOP compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & Duty Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper HTS classification saves <strong>15-25% on import costs</strong>. Our Oxnard tariff attorney ensures optimal classification for agricultural products, vehicles, equipment, and manufactured goods.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for agricultural and industrial products</li>
                <li>Binding Ruling requests for key products</li>
                <li>Tariff engineering and duty minimization</li>
                <li>Free trade agreement qualification (USMCA, Chile, Peru)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP audits Ventura County importers for compliance issues. Our Oxnard office defends you through <strong>Focused Assessments and penalty proceedings</strong>, often reducing penalties by 75% or more.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense</li>
                <li>Prior Disclosure filings to cap penalties</li>
                <li>CF-28/CF-29 response preparation</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Compliance for Ventura County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Ventura County exports <strong>agricultural products, technology, and manufactured goods</strong>. We ensure export compliance with EAR, ITAR, and country-specific requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Agricultural export certification and phytosanitary compliance</li>
                <li>Export license requirements (EAR/ITAR)</li>
                <li>Country-specific export requirements</li>
                <li>OFAC sanctions screening</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Oxnard */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Oxnard
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Ventura County Coastal */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Ventura County Coastal</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Serving coastal Ventura County businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Oxnard', 'Ventura', 'Camarillo', 'Port Hueneme',
                  'Thousand Oaks', 'Westlake Village', 'Newbury Park', 'Oak Park',
                  'Simi Valley', 'Moorpark', 'Fillmore', 'Santa Paula',
                  'Ojai', 'Somis', 'El Rio', 'Saticoy'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Greater Region */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Greater Region</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Extended service throughout Southern California:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Santa Barbara', 'Goleta', 'Carpinteria', 'Summerland',
                  'Calabasas', 'Agoura Hills', 'Malibu', 'Pacific Palisades',
                  'Santa Clarita', 'Valencia', 'Newhall', 'Castaic',
                  'San Fernando Valley', 'Burbank', 'Glendale', 'Pasadena'
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
                  <li>Port of Hueneme</li>
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
                  <li>USDA/FDA Reviews</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Regional Markets</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Ventura County</li>
                  <li>Los Angeles County</li>
                  <li>Santa Barbara County</li>
                  <li>Kern County</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Oxnard Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Oxnard Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Hueneme Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>Port of Hueneme operations</strong> and provide immediate response to customs issues at this critical West Coast port. Direct access for rapid resolution.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural & Auto Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Deep knowledge of <strong>agricultural trade and automotive imports</strong>, Ventura County's major import sectors. Industry-specific compliance solutions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Ventura County Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>Ventura County's economy and business community</strong>. Local service with national trade law expertise and CBP relationships.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services including rulings, protests, and compliance reviews. Your free consultation includes a clear cost estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Oxnard & Ventura County
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Oxnard from our California offices</strong><br />
                Headquarters: 27001 Agoura Road, Suite 350<br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Port Emergencies:</strong> Rapid response for Port Hueneme CBP issues
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Transportation Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From Oxnard:</strong> 45 minutes via US-101 East</li>
                <li><strong>To Port of Hueneme:</strong> 15 minutes via Hueneme Road</li>
                <li><strong>From Ventura:</strong> 50 minutes via US-101 East</li>
                <li><strong>From Camarillo:</strong> 40 minutes via US-101 East</li>
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
                  <a href="#port-hueneme-customs" className="service-link">
                    <span className="service-link__title">Port Hueneme Customs</span>
                    <p className="service-link__description">Port operations & compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#automotive-import-compliance" className="service-link">
                    <span className="service-link__title">Automotive Import Compliance</span>
                    <p className="service-link__description">Vehicle EPA/DOT certification</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#agricultural-trade-compliance" className="service-link">
                    <span className="service-link__title">Agricultural Trade</span>
                    <p className="service-link__description">USDA/FDA compliance</p>
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
                  <a href="#ventura-trade-attorney" className="service-link">
                    <span className="service-link__title">Ventura Trade Attorney</span>
                    <p className="service-link__description">Ventura County services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#calabasas-customs-attorney" className="service-link">
                    <span className="service-link__title">Calabasas Office</span>
                    <p className="service-link__description">Headquarters location</p>
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
                  <a href="#resources/vehicle-import-guide" className="service-link">
                    <span className="service-link__title">Vehicle Import Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/agricultural-export-guide" className="service-link">
                    <span className="service-link__title">Agricultural Export Guide</span>
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
            Contact our Oxnard tariff attorney today. We'll assess your Ventura County business customs needs and provide clear guidance.
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

export default OxnardTariffAttorneyPage;
