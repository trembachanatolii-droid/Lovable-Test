
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const HuntingtonBeachTariffLawyerPage: React.FC = () => {
  useMeta({
    title: 'Huntington Beach Tariff Lawyer | Coastal Customs Attorney CA',
    description: 'Huntington Beach tariff lawyer for coastal businesses. Expert customs attorney near Port of Long Beach. Marine trade, surfwear imports, CBP defense. (310) 744-1328.',
    keywords: 'tariff lawyer huntington beach, customs attorney huntington beach, orange county trade lawyer, huntington beach international trade attorney, coastal customs lawyer, surfwear import attorney, marine trade lawyer huntington beach',
    canonical: 'huntington-beach-tariff-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-huntington-beach.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Huntington Beach Tariff Lawyer & Coastal Customs Attorney - Orange County CA',
        description: 'Huntington Beach tariff lawyer serving coastal businesses and Orange County importers. Expert customs legal services for marine trade, surfwear, and Port of Long Beach operations.',
        url: `${siteConfig.siteUrl}/huntington-beach-tariff-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Huntington Beach Tariff Lawyer', url: `${siteConfig.siteUrl}/huntington-beach-tariff-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Huntington Beach tariff lawyer for coastal trade?',
          answer: 'Huntington Beach is ideally located in Orange County with excellent access to Port of Long Beach and Port of Los Angeles. Our tariff lawyer serves coastal businesses including surfwear manufacturers, marine equipment importers, and Orange County\'s diverse business community. We understand the unique needs of coastal commerce and provide rapid response to port-related customs issues.',
        },
        {
          question: 'What tariff and customs services do you provide in Huntington Beach?',
          answer: 'We offer comprehensive customs services including: tariff classification and HTS optimization, CBP detention defense at Long Beach/LA ports, Section 301 tariff strategies, apparel and textile compliance, marine equipment import regulations, customs audit defense, UFLPA forced labor compliance, and trade compliance program development.',
        },
        {
          question: 'Do you serve the surfwear and apparel industry in Huntington Beach?',
          answer: 'Yes, Huntington Beach is home to major surf brands and apparel companies. We specialize in apparel tariff classification, textile quota compliance, country of origin marking for garments, Section 301 tariff mitigation for China-made apparel, and UFLPA compliance for cotton products. Our expertise helps surfwear and fashion companies navigate complex textile regulations.',
        },
        {
          question: 'How quickly can you respond to CBP issues at Port of Long Beach?',
          answer: 'Our Orange County location provides excellent access to Port of Long Beach (approximately 20-30 minutes) and Port of Los Angeles. We prioritize urgent matters and can typically respond to CBP detentions, cargo exams, or seizures within hours. For port emergencies, call (310) 744-1328.',
        },
        {
          question: 'What industries do you serve in Huntington Beach and Orange County?',
          answer: 'We represent diverse Orange County businesses including: surfwear and action sports apparel, marine equipment and boat accessories, medical devices and biotechnology, automotive aftermarket parts, consumer electronics, food and beverages, and general manufacturing. Our coastal location is ideal for businesses engaged in Pacific Rim trade.',
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
      <section className="hero" aria-label="Huntington Beach Tariff Lawyer Hero">
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
          <h1>Huntington Beach Tariff Lawyer<br />Coastal Customs Attorney California</h1>
          <p className="hero-subtitle">
            Expert Huntington Beach tariff lawyer serving Orange County coastal businesses. Specialized in surfwear, marine trade, and Port of Long Beach customs compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact#schedule-consultation" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Huntington Beach Tariff Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Orange County Coastal Trade Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Huntington Beach is the <strong>heart of Orange County's coastal business community</strong>, home to iconic surf brands, marine equipment companies, and diverse importers. Our tariff lawyer provides specialized customs legal services with convenient access to Port of Long Beach and Port of Los Angeles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Coastal Business Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep expertise in <strong>surfwear, apparel, marine equipment, and coastal commerce</strong>. We understand Orange County's unique business culture and trade needs.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Proximity</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic Orange County location with <strong>rapid access to Port of Long Beach</strong> (20-30 min) and Port of LA. Quick response to cargo detentions and CBP issues.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Apparel Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                Expert knowledge of <strong>textile and apparel compliance</strong> including tariff classification, country of origin rules, and Section 301 mitigation for fashion brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Coastal Trade & Customs Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Apparel & Textile Tariff Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Huntington Beach is home to major <strong>surf and action sports apparel brands</strong>. We provide expert HTS classification for garments, textile quota compliance, and tariff engineering to minimize duty costs on fashion imports.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for apparel and textiles</li>
                <li>Country of origin determinations for garments</li>
                <li>Textile category and quota management</li>
                <li>Binding Ruling requests for apparel products</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Surfwear & Action Sports Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Huntington Beach surf brands face unique challenges including <strong>Section 301 China tariffs, UFLPA cotton compliance, and rapid product cycles</strong>. We help navigate these challenges while minimizing duty burden.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 tariff mitigation for apparel imports</li>
                <li>UFLPA compliance for cotton and textile products</li>
                <li>Supply chain restructuring for duty reduction</li>
                <li>Fast-fashion compliance and rapid import programs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Marine Equipment & Boat Accessories</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As a coastal city, Huntington Beach has a significant <strong>marine equipment and recreational boating industry</strong>. We advise on tariff classification for marine products, safety compliance, and import regulations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for marine equipment and boat parts</li>
                <li>Coast Guard safety compliance coordination</li>
                <li>Recreational vessel and watercraft imports</li>
                <li>Fishing equipment and watersports gear</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Port of Long Beach CBP Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our proximity to Port of Long Beach enables <strong>rapid response to cargo detentions, exams, and holds</strong>. We prepare admissibility packages and represent you during CBP inspections to minimize delays.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP cargo detention and exam defense</li>
                <li>Port of Long Beach seizure response</li>
                <li>IPR (trademark/copyright) violation defense</li>
                <li>Express consignment and air freight compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively audits Orange County importers. Our Huntington Beach tariff lawyer defends you through <strong>Focused Assessments, Quick Response Audits, and penalty proceedings</strong>, often reducing penalties by 75% or more.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense</li>
                <li>Prior Disclosure filings to minimize penalties</li>
                <li>CF-28/CF-29 notice response</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Trade Compliance Programs for OC Businesses</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We develop <strong>customized import compliance programs</strong> for Orange County businesses including internal controls, training, classification management, and audit preparedness to prevent costly CBP violations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Import compliance program development</li>
                <li>Employee training on customs regulations</li>
                <li>Internal audit and self-assessment protocols</li>
                <li>Recordkeeping and documentation systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Huntington Beach */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Huntington Beach
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Orange County Coastal */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Orange County Coastal</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Serving coastal Orange County business community:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Huntington Beach', 'Newport Beach', 'Costa Mesa', 'Irvine',
                  'Fountain Valley', 'Westminster', 'Seal Beach', 'Sunset Beach',
                  'Laguna Beach', 'Dana Point', 'San Clemente', 'San Juan Capistrano',
                  'Aliso Viejo', 'Laguna Niguel', 'Mission Viejo', 'Lake Forest'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Orange County Inland & Greater LA */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Orange County Inland & Greater LA</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Extended service throughout Orange County and Los Angeles:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Santa Ana', 'Anaheim', 'Orange', 'Tustin',
                  'Garden Grove', 'Fullerton', 'Brea', 'Yorba Linda',
                  'Placentia', 'La Habra', 'Buena Park', 'Cypress',
                  'Long Beach', 'Los Alamitos', 'Lakewood', 'Cerritos'
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
                  <li>Port of Long Beach</li>
                  <li>Port of Los Angeles</li>
                  <li>Port of Oakland</li>
                  <li>Port of San Diego</li>
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
                  <li>Orange County</li>
                  <li>Los Angeles County</li>
                  <li>San Diego County</li>
                  <li>Inland Empire</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Huntington Beach Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Huntington Beach Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industry Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>apparel, surfwear, and coastal business imports</strong>. This focus gives us deep expertise in textile compliance, fashion industry challenges, and the unique needs of Orange County's diverse economy.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Access & Rapid Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our Orange County location provides <strong>immediate access to Port of Long Beach</strong>. We respond rapidly to CBP cargo detentions and exams, minimizing costly delays to your supply chain.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Orange County Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>Orange County's business culture</strong> and serve companies ranging from startup brands to established manufacturers. Personalized service that reflects local values.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for classification projects, binding rulings, and protests. Your free consultation includes a clear cost estimate tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Huntington Beach & Orange County
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Huntington Beach from our California offices</strong><br />
                Headquarters: 27001 Agoura Road, Suite 350<br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Port Emergencies:</strong> Rapid response for CBP cargo issues
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Transportation Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From Huntington Beach:</strong> 1 hour via I-405 North</li>
                <li><strong>To Port of Long Beach:</strong> 20-30 minutes via I-405 South</li>
                <li><strong>To Port of LA:</strong> 30-40 minutes via I-405 to I-110</li>
                <li><strong>Orange County Access:</strong> Central location via I-405 and CA-22</li>
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
                  <Link to="/apparel-textile-compliance" className="service-link">
                    <span className="service-link__title">Apparel & Textile Compliance</span>
                    <p className="service-link__description">Fashion industry expertise</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/customs-defense" className="service-link">
                    <span className="service-link__title">CBP Defense & Litigation</span>
                    <p className="service-link__description">Port detention defense</p>
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
              </div>
            </div>

            {/* Other Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/newport-beach-trade-attorney" className="service-link">
                    <span className="service-link__title">Newport Beach Attorney</span>
                    <p className="service-link__description">Orange County coastal</p>
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
                  <Link to="/resources/apparel-import-guide" className="service-link">
                    <span className="service-link__title">Apparel Import Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Guide</span>
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
            Contact our Huntington Beach tariff lawyer today. We'll assess your coastal business customs needs and provide clear guidance.
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

export default HuntingtonBeachTariffLawyerPage;
