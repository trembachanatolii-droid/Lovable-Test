
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const OceansideTariffAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Oceanside Tariff Attorney | North San Diego Customs Lawyer CA',
    description: 'Oceanside tariff attorney for North County San Diego businesses. Expert customs lawyer near Marine Corps Base & border. Manufacturing, defense contractors. (310) 744-1328.',
    keywords: 'tariff attorney oceanside, customs lawyer oceanside, north county san diego trade attorney, oceanside international trade lawyer, camp pendleton customs attorney, carlsbad customs lawyer',
    canonical: 'oceanside-tariff-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-oceanside.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Oceanside Tariff Attorney & North County Customs Lawyer - San Diego CA',
        description: 'Oceanside tariff attorney serving North San Diego County businesses. Expert customs legal services for defense contractors, manufacturing, and cross-border trade.',
        url: `${siteConfig.siteUrl}/oceanside-tariff-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Oceanside Tariff Attorney', url: `${siteConfig.siteUrl}/oceanside-tariff-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose an Oceanside tariff attorney for North County businesses?',
          answer: 'Oceanside is the largest North San Diego County city, home to Camp Pendleton Marine Corps Base and a growing business community. Our tariff attorney serves defense contractors, manufacturers, and importers throughout North County with convenient coastal access via I-5 and proximity to San Diego border crossings and Port of San Diego.',
        },
        {
          question: 'Do you serve defense contractors and Camp Pendleton suppliers?',
          answer: 'Yes, Oceanside\'s proximity to Camp Pendleton means many local businesses serve the defense industry. We assist defense contractors with export controls (ITAR), military procurement compliance, tariff classification for defense articles, and customs procedures for military equipment and supplies.',
        },
        {
          question: 'What tariff services do you provide in Oceanside?',
          answer: 'We offer comprehensive tariff services including: HTS classification and optimization, CBP audit defense, Section 301 tariff strategies, ITAR and export controls, antidumping/countervailing duty defense, UFLPA forced labor compliance, and cross-border trade with Mexico via San Diego ports of entry.',
        },
        {
          question: 'How quickly can you respond to CBP issues in San Diego?',
          answer: 'Our location provides excellent access to Port of San Diego and Otay Mesa/San Ysidro border crossings via I-5. We can typically respond to CBP detentions, cargo holds, or border issues within hours. For urgent matters, call (310) 744-1328.',
        },
        {
          question: 'What industries do you serve in Oceanside and North County?',
          answer: 'We represent diverse North San Diego businesses including: defense contractors and military suppliers, manufacturing and industrial equipment, biotechnology and life sciences, craft brewing and beverages, surfboard and action sports equipment, marine equipment and boat accessories, and general importers throughout North County San Diego.',
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
      <section className="hero" aria-label="Oceanside Tariff Attorney Hero">
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
          <h1>Oceanside Tariff Attorney<br />North San Diego Customs Lawyer</h1>
          <p className="hero-subtitle">
            Expert Oceanside tariff attorney serving North County San Diego businesses. Specialized in defense contractors, manufacturing, and cross-border trade with convenient coastal access.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Oceanside Tariff Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              North County San Diego Trade Excellence
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Oceanside is <strong>North County San Diego's largest city</strong>, adjacent to Camp Pendleton Marine Corps Base and home to diverse manufacturing, defense contractors, and coastal businesses. Our tariff attorney provides specialized customs legal services with convenient I-5 corridor access.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Defense Contractor Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized in <strong>ITAR export controls and military procurement</strong>. We serve Camp Pendleton suppliers and defense contractors throughout North County.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Border & Port Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic location with <strong>I-5 access to San Diego border and port</strong>. Quick response to Otay Mesa, San Ysidro, and Port of San Diego customs issues.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">North County Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Local service for North County businesses</strong> in Oceanside, Carlsbad, Vista, Escondido, and throughout San Diego's coastal corridor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Oceanside Trade & Customs Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">ITAR Export Controls & Defense Trade</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Oceanside's proximity to <strong>Camp Pendleton creates significant defense contractor activity</strong>. We assist with ITAR registration, export licensing for defense articles, technical data transfers, and DOD procurement compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ITAR registration and compliance</li>
                <li>Defense article export licensing (DSP-5, DSP-73)</li>
                <li>Technical data and technology transfer controls</li>
                <li>DOD procurement and military sales compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Manufacturing & Industrial Customs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                North County has <strong>significant manufacturing operations</strong>. We provide tariff classification, country of origin determinations, substantial transformation analysis, and Section 301 strategies for manufacturers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Tariff classification for manufactured products</li>
                <li>Country of origin and substantial transformation</li>
                <li>Manufacturing drawback for exports</li>
                <li>Section 301 mitigation strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Cross-Border Trade with Mexico</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Oceanside's <strong>I-5 location provides direct access to Otay Mesa and San Ysidro</strong> border crossings. We handle USMCA qualification, CBP border issues, and cross-border supply chain compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA qualification and certification</li>
                <li>CBP detention defense at border crossings</li>
                <li>Cross-border manufacturing compliance</li>
                <li>Country of origin for Mexico imports</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper HTS classification can save <strong>15-25% on import costs</strong>. Our Oceanside tariff attorney ensures optimal classification for defense equipment, manufactured goods, and specialty products.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for defense and industrial products</li>
                <li>Binding Ruling requests (NY/HQ rulings)</li>
                <li>Tariff engineering and duty minimization</li>
                <li>Classification dispute resolution</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP audits San Diego importers. Our Oceanside office defends you through <strong>Focused Assessments and penalty proceedings</strong>, often reducing penalties by 75% or more.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense</li>
                <li>Prior Disclosure filings to cap penalties</li>
                <li>CF-28/CF-29 response preparation</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Biotechnology & Life Sciences Trade</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                North County has a <strong>growing biotech sector</strong>. We assist with FDA import compliance, biological product regulations, research equipment imports, and export controls for life sciences.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA biological product import compliance</li>
                <li>Research equipment and laboratory supplies</li>
                <li>Export controls for biological materials</li>
                <li>Clinical trial import/export procedures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Oceanside */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Oceanside
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* North County Coastal */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">North County Coastal</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Serving North San Diego coastal communities:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Oceanside', 'Carlsbad', 'Vista', 'San Marcos',
                  'Encinitas', 'Solana Beach', 'Del Mar', 'Cardiff-by-the-Sea',
                  'Leucadia', 'Olivenhain', 'Rancho Santa Fe', 'Fairbanks Ranch',
                  'Camp Pendleton', 'Fallbrook', 'Bonsall', 'Rainbow'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* North County Inland & Greater SD */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">North County Inland & Greater SD</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Extended service throughout San Diego County:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Escondido', 'Poway', 'Ramona', 'Valley Center',
                  'San Diego', 'La Jolla', 'Mira Mesa', 'Rancho Bernardo',
                  'Scripps Ranch', 'Carmel Valley', 'Sorrento Valley', 'UTC',
                  'Chula Vista', 'National City', 'El Cajon', 'Santee'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Statewide & Ports */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">San Diego Ports & Nationwide Representation</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">San Diego Entry Points</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of San Diego</li>
                  <li>Otay Mesa (Commercial)</li>
                  <li>San Ysidro (Passenger)</li>
                  <li>Tecate</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Courts</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>U.S. Court of International Trade</li>
                  <li>U.S. Court of Appeals (Federal Circuit)</li>
                  <li>CBP Administrative Proceedings</li>
                  <li>DOD/DDTC Reviews</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">California Ports</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of San Diego</li>
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
                  <li>Port of Oakland</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Oceanside Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Oceanside Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Defense Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>ITAR and defense trade compliance</strong>. Our expertise serves Camp Pendleton suppliers and defense contractors throughout North County.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Border Trade Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Deep understanding of <strong>San Diego border crossings and USMCA compliance</strong>. We respond rapidly to border customs issues.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">North County Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>North County San Diego's business community</strong> and provide convenient coastal access throughout the region.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services and transparent hourly rates. Your free consultation includes a clear cost estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Oceanside & North County San Diego
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Oceanside from our California offices</strong><br />
                Headquarters: 27001 Agoura Road, Suite 350<br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Border Emergencies:</strong> Rapid response for SD border customs issues
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Transportation Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From Oceanside:</strong> 1.5 hours via I-5 North</li>
                <li><strong>To Otay Mesa:</strong> 45 minutes via I-5 South</li>
                <li><strong>To Port of San Diego:</strong> 50 minutes via I-5 South</li>
                <li><strong>To Carlsbad:</strong> 15 minutes via I-5</li>
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
                  <Link to="/itar-export-controls" className="service-link">
                    <span className="service-link__title">ITAR Export Controls</span>
                    <p className="service-link__description">Defense trade compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <a href="/practice-areas" className="service-link">
                    <span className="service-link__title">USMCA Compliance</span>
                    <p className="service-link__description">Mexico trade qualification</p>
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
                  <Link to="/san-diego-border-attorney" className="service-link">
                    <span className="service-link__title">San Diego Trade Attorney</span>
                    <p className="service-link__description">Border customs expertise</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/carlsbad-trade-attorney" className="service-link">
                    <span className="service-link__title">Carlsbad Trade Attorney</span>
                    <p className="service-link__description">North County coastal</p>
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
                  <Link to="/resources/itar-compliance-guide" className="service-link">
                    <span className="service-link__title">ITAR Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/usmca-qualification-guide" className="service-link">
                    <span className="service-link__title">USMCA Guide</span>
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
            Contact our Oceanside tariff attorney today. We'll assess your North County customs needs and provide clear guidance.
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

export default OceansideTariffAttorneyPage;
