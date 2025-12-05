
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const GlendaleTariffAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Glendale Tariff Attorney | Los Angeles Customs Lawyer CA',
    description: 'Glendale tariff attorney serving LA businesses. Expert customs lawyer for entertainment, tech, manufacturing. CBP defense, tariff classification. (310) 744-1328.',
    keywords: 'tariff attorney glendale, customs lawyer glendale, glendale trade attorney, international trade lawyer glendale ca, glendale customs attorney, los angeles tariff lawyer, burbank customs attorney, pasadena trade lawyer',
    canonical: 'glendale-tariff-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-glendale.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Glendale Tariff Attorney & Customs Lawyer - Los Angeles County CA',
        description: 'Glendale tariff attorney serving Los Angeles County businesses. Expert customs legal services for entertainment, tech, manufacturing, and general imports.',
        url: `${siteConfig.siteUrl}/glendale-tariff-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Glendale Tariff Attorney', url: `${siteConfig.siteUrl}/glendale-tariff-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Glendale tariff attorney for Los Angeles businesses?',
          answer: 'Glendale offers the perfect combination of Los Angeles County access without downtown congestion. Our tariff attorney serves diverse businesses including entertainment companies, tech firms, manufacturers, and importers throughout the greater LA area. We provide convenient parking, easy freeway access via I-5 and CA-134, and rapid response to Port of LA/Long Beach customs issues.',
        },
        {
          question: 'What tariff and customs services do you provide in Glendale?',
          answer: 'We offer comprehensive tariff services including: HTS classification and optimization, CBP audit defense and penalty mitigation, Section 301 tariff strategies, entertainment equipment imports, tech product compliance, manufacturing customs issues, antidumping/countervailing duty defense, and UFLPA forced labor compliance.',
        },
        {
          question: 'Do you serve the entertainment industry in Glendale and Burbank?',
          answer: 'Yes, Glendale is adjacent to Burbank\'s major entertainment studios. We specialize in customs compliance for film/TV production equipment, broadcasting gear, cameras and lenses, lighting equipment, and temporary importation for productions. Our expertise helps entertainment companies navigate complex ATA Carnet procedures and equipment imports.',
        },
        {
          question: 'How quickly can you respond to CBP issues at LA ports?',
          answer: 'Our location provides excellent access to Port of Los Angeles and Port of Long Beach via I-5 to I-710 (approximately 45-60 minutes). We prioritize urgent matters and can typically respond to CBP detentions, cargo holds, or seizures within hours. For emergencies, call (310) 744-1328.',
        },
        {
          question: 'What industries do you serve in Glendale and Los Angeles County?',
          answer: 'We represent diverse Los Angeles businesses including: entertainment and media production, technology and consumer electronics, manufacturing and industrial equipment, apparel and fashion, automotive parts, food and beverage, medical devices, and general merchandise. Our Glendale location is ideal for serving the entire LA metro area.',
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
      <section className="hero" aria-label="Glendale Tariff Attorney Hero">
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
          <h1>Glendale Tariff Attorney<br />Los Angeles Customs Lawyer</h1>
          <p className="hero-subtitle">
            Expert Glendale tariff attorney serving Los Angeles County businesses. Specialized in entertainment, tech, and manufacturing customs compliance with convenient access throughout LA metro.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Glendale Tariff Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Los Angeles County Trade Law Excellence
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Glendale offers the <strong>perfect location for Los Angeles businesses</strong> seeking customs legal services. Enjoy convenient access to Burbank's entertainment industry, Pasadena's tech sector, and downtown LA commerce without the hassle of downtown traffic and parking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central LA Location</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Easy access throughout Los Angeles County</strong> via I-5, CA-134, and CA-2. Convenient for businesses in Burbank, Pasadena, North Hollywood, and downtown LA.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep knowledge of <strong>entertainment equipment, tech products, and manufacturing imports</strong>. We serve LA's diverse economy with specialized customs solutions.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Accessibility</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic access to <strong>Port of LA and Long Beach</strong> via I-5 to I-710. Quick response to customs issues at California's busiest ports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Tariff & Customs Services in Glendale
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Entertainment Equipment & Production Imports</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Glendale's proximity to <strong>Burbank studios and entertainment companies</strong> makes us ideal for film/TV production equipment imports. We handle cameras, lighting, broadcasting gear, and temporary importation via ATA Carnets.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Film and TV production equipment imports</li>
                <li>ATA Carnet temporary importation for productions</li>
                <li>Broadcasting and studio equipment compliance</li>
                <li>Professional cameras, lenses, and lighting gear</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Technology & Consumer Electronics</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Los Angeles is a major tech hub. We advise on <strong>tariff classification for electronics, FCC compliance coordination, and Section 301 mitigation</strong> for China-made tech products.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for consumer electronics</li>
                <li>FCC compliance and import coordination</li>
                <li>Section 301 tariff strategies for tech imports</li>
                <li>Lithium battery shipping and safety compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper HTS classification can mean the difference between <strong>0% and 25%+ duty rates</strong>. Our Glendale tariff attorney ensures optimal classification and files binding rulings for certainty.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification analysis and optimization</li>
                <li>Binding Ruling requests (NY/HQ rulings)</li>
                <li>Tariff engineering for duty minimization</li>
                <li>Classification consistency across product lines</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively audits Los Angeles importers. Our Glendale office defends you through <strong>Focused Assessments, Quick Response Audits, and penalty proceedings</strong>, often reducing penalties by 75% or more.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense</li>
                <li>Prior Disclosure filings to cap penalties</li>
                <li>CF-28/CF-29 response preparation</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 China Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariffs add <strong>7.5% to 25%</strong> on China imports. We help LA businesses navigate exclusions, supply chain restructuring, and tariff engineering to legally minimize duty burden.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 exclusion analysis and applications</li>
                <li>Supply chain restructuring for tariff avoidance</li>
                <li>Substantial transformation opinions</li>
                <li>Country of origin optimization strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Port of LA/Long Beach Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP detains cargo at LA ports, <strong>every day costs money</strong>. Our Glendale location allows for rapid response to port emergencies, detention notices, and cargo holds.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP cargo detention and exam defense</li>
                <li>Port of LA/Long Beach seizure response</li>
                <li>IPR (trademark/copyright) seizure defense</li>
                <li>FDA/USDA hold resolution coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Glendale */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Glendale
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Greater Los Angeles */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Greater Los Angeles</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Serving the diverse Los Angeles business community:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Glendale', 'Burbank', 'Pasadena', 'La Cañada Flintridge',
                  'North Hollywood', 'Studio City', 'Hollywood', 'Los Feliz',
                  'Silver Lake', 'Eagle Rock', 'Atwater Village', 'Montrose',
                  'La Crescenta', 'Sunland', 'Tujunga', 'Downtown LA'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* San Fernando Valley & Beyond */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Fernando Valley & Beyond</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Extended service throughout LA County and region:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Sherman Oaks', 'Van Nuys', 'Encino', 'Woodland Hills',
                  'Northridge', 'Granada Hills', 'Chatsworth', 'Calabasas',
                  'Arcadia', 'Monrovia', 'Alhambra', 'San Marino',
                  'South Pasadena', 'Altadena', 'Sierra Madre', 'Duarte'
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
                  <li>Port of Oakland</li>
                  <li>LAX Air Cargo</li>
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
                <h4 className="font-bold text-secondary-teal mb-3">Regional Markets</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Los Angeles County</li>
                  <li>Orange County</li>
                  <li>Ventura County</li>
                  <li>Inland Empire</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Glendale Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Glendale Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">LA Metro Convenience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our <strong>Glendale-accessible location</strong> provides convenient service for Los Angeles businesses without downtown congestion. Easy parking and freeway access throughout LA County.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industry Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>LA's diverse economy</strong> including entertainment, tech, manufacturing, and fashion. Industry-specific expertise for your customs compliance needs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Exclusive Trade Law Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general practice firms, we focus <strong>exclusively on international trade and customs law</strong>. This specialization means deeper expertise and better results.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services including protests, rulings, and prior disclosures. Your free consultation includes a clear cost estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Glendale & Los Angeles County
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Glendale from our California offices</strong><br />
                Headquarters: 27001 Agoura Road, Suite 350<br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328)</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Emergency Response:</strong> Available for urgent CBP issues
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Transportation Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From Glendale:</strong> 45 minutes via CA-134 to 101 West</li>
                <li><strong>To Port of LA/Long Beach:</strong> 1 hour via I-5 to I-710</li>
                <li><strong>To Burbank:</strong> 15 minutes via CA-134</li>
                <li><strong>To Pasadena:</strong> 15 minutes via CA-134 East</li>
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
                  <Link to="/customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense & Litigation</span>
                    <p className="service-link__description">CBP audits & penalty defense</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">Tariff Classification</span>
                    <p className="service-link__description">HTS optimization</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Trade Compliance Programs</span>
                    <p className="service-link__description">Import compliance development</p>
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
                  <Link to="/burbank-entertainment-trade-attorney" className="service-link">
                    <span className="service-link__title">Burbank Trade Attorney</span>
                    <p className="service-link__description">Entertainment industry focus</p>
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
                  <Link to="/resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Tariffs Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/cbp-audit-defense-guide" className="service-link">
                    <span className="service-link__title">CBP Audit Defense Guide</span>
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
            Contact our Glendale tariff attorney today. We'll assess your Los Angeles business customs needs and provide clear guidance.
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

export default GlendaleTariffAttorneyPage;
