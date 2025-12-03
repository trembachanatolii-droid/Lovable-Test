
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const FremontCustomsAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Fremont Customs Attorney | Silicon Valley Tech Trade Lawyer CA',
    description: 'Fremont customs attorney for Silicon Valley tech trade. Expert tariff lawyer for electronics, EV manufacturing, semiconductors. Export controls, CBP defense. (310) 744-1328.',
    keywords: 'customs attorney fremont, tariff lawyer fremont, silicon valley trade attorney, fremont tech trade lawyer, bay area customs attorney, semiconductor import lawyer, ev manufacturing customs',
    canonical: 'fremont-customs-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-fremont.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Fremont Customs Attorney & Silicon Valley Tech Trade Lawyer - Bay Area CA',
        description: 'Fremont customs attorney serving Silicon Valley tech companies. Expert customs legal services for electronics, EV manufacturing, semiconductors, and technology trade compliance.',
        url: `${siteConfig.siteUrl}/fremont-customs-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Fremont Customs Attorney', url: `${siteConfig.siteUrl}/fremont-customs-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Fremont customs attorney for tech trade?',
          answer: 'Fremont is Silicon Valley\'s manufacturing hub, home to Tesla\'s EV factory, semiconductor facilities, and tech manufacturing operations. Our customs attorney understands the unique needs of tech companies including export controls (EAR), tariff classification for electronics, Section 301 mitigation for China tech, and semiconductor import compliance.',
        },
        {
          question: 'Do you handle export controls for technology companies?',
          answer: 'Yes, technology exports face stringent EAR (Export Administration Regulations) controls. We assist with ECCN classification for dual-use technology, export license applications to BIS, encryption and software export compliance, deemed export regulations for foreign nationals, and voluntary self-disclosure for export violations.',
        },
        {
          question: 'What services do you provide for EV and automotive manufacturing?',
          answer: 'Fremont is home to major EV manufacturing. We assist with tariff classification for EV components, lithium battery import compliance, Section 301 strategies for China auto parts, country of origin for automotive assemblies, and manufacturing drawback for exported vehicles.',
        },
        {
          question: 'Can you help with semiconductor and electronics imports?',
          answer: 'Absolutely. We provide HTS classification for semiconductors and ICs, FCC compliance coordination for electronics, Section 301 exclusion analysis for tech products, antidumping duty defense for electronic components, and UFLPA compliance for semiconductor supply chains.',
        },
        {
          question: 'What industries do you serve in Fremont and Bay Area?',
          answer: 'We represent diverse Silicon Valley businesses including: electric vehicle manufacturing, semiconductor and IC production, consumer electronics, software and technology, renewable energy equipment, medical devices and biotech, aerospace components, and advanced manufacturing throughout the Bay Area.',
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
      <section className="hero" aria-label="Fremont Customs Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Fremont Customs Attorney<br />Silicon Valley Tech Trade Lawyer</h1>
          <p className="hero-subtitle">
            Expert Fremont customs attorney serving Silicon Valley tech companies. Specialized in electronics, EV manufacturing, semiconductors, and export controls with Bay Area expertise.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Fremont Customs Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Silicon Valley Manufacturing Hub
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Fremont is <strong>Silicon Valley's premier manufacturing center</strong>, home to Tesla's EV factory, semiconductor facilities, and advanced tech manufacturing. Our customs attorney provides specialized legal services for technology trade including export controls, electronics compliance, and EV manufacturing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tech Trade Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep knowledge of <strong>electronics, semiconductors, and software export controls</strong>. We understand EAR regulations and dual-use technology compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">EV Manufacturing Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized in <strong>electric vehicle and battery compliance</strong>. Tariff classification, lithium battery regulations, and automotive trade law.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Oakland Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic location with <strong>quick access to Port of Oakland</strong>. Rapid response to CBP tech cargo detentions and electronics imports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Silicon Valley Tech Trade Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Controls & EAR Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Silicon Valley companies must comply with <strong>Export Administration Regulations (EAR)</strong> for dual-use technology. We assist with ECCN classification, export licensing, and technology transfer controls.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ECCN classification for dual-use technology</li>
                <li>Export license applications to BIS (Commerce)</li>
                <li>Encryption and software export compliance</li>
                <li>Deemed export regulations for foreign nationals</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EV & Automotive Manufacturing Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Fremont is home to <strong>Tesla and major EV manufacturing</strong>. We provide tariff classification for EV components, lithium battery compliance, and Section 301 strategies for automotive supply chains.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Tariff classification for EV components and batteries</li>
                <li>Lithium battery import compliance (DOT/IATA)</li>
                <li>Section 301 mitigation for China auto parts</li>
                <li>Manufacturing drawback for exported vehicles</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Semiconductor & Electronics Imports</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Fremont has <strong>significant semiconductor and electronics operations</strong>. We handle HTS classification for ICs, FCC compliance, Section 301 exclusions, and antidumping duty defense for electronics.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for semiconductors and integrated circuits</li>
                <li>FCC compliance coordination for electronics</li>
                <li>Section 301 exclusion analysis for tech products</li>
                <li>Antidumping duty defense for electronic components</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification for Technology</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Technology products have <strong>complex HTS classification</strong> with significant duty variations. We optimize classification for electronics, software, and tech hardware to minimize costs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for consumer electronics</li>
                <li>Classification for software and digital products</li>
                <li>Binding Ruling requests for tech products</li>
                <li>Tariff engineering for technology imports</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 & China Tech Tariffs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariffs heavily impact <strong>China-origin electronics and tech products</strong>. We help Silicon Valley companies navigate exclusions, supply chain restructuring, and tariff mitigation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 exclusion applications for tech</li>
                <li>Supply chain restructuring for tariff avoidance</li>
                <li>Substantial transformation for tech assemblies</li>
                <li>Country of origin optimization strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense for Tech Companies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP audits technology importers for <strong>classification, valuation, and Section 301 compliance</strong>. We defend you through Focused Assessments and penalty proceedings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense</li>
                <li>Prior Disclosure for tech import errors</li>
                <li>CF-28/CF-29 response for tech audits</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Fremont */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Fremont
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* East Bay */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">East Bay</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Serving East Bay Silicon Valley businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Fremont', 'Newark', 'Union City', 'Hayward',
                  'San Leandro', 'Castro Valley', 'Dublin', 'Pleasanton',
                  'Livermore', 'Milpitas', 'San Jose', 'Santa Clara',
                  'Sunnyvale', 'Mountain View', 'Palo Alto', 'Menlo Park'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Greater Bay Area */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Greater Bay Area</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Extended service throughout Bay Area:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Oakland', 'Berkeley', 'Alameda', 'Emeryville',
                  'San Francisco', 'Daly City', 'South SF', 'San Bruno',
                  'Redwood City', 'San Mateo', 'Burlingame', 'Foster City',
                  'Cupertino', 'Campbell', 'Los Gatos', 'Saratoga'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Statewide & Ports */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Bay Area Ports & Nationwide Representation</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Bay Area Ports</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of Oakland</li>
                  <li>San Francisco Airport (SFO)</li>
                  <li>Oakland Airport (OAK)</li>
                  <li>San Jose Airport (SJC)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Courts</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>U.S. Court of International Trade</li>
                  <li>U.S. Court of Appeals (Federal Circuit)</li>
                  <li>CBP Administrative Proceedings</li>
                  <li>BIS/Commerce Reviews</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">California Ports</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of Oakland</li>
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
                  <li>Port of San Diego</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fremont Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Fremont Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Technology Trade Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>technology and electronics trade compliance</strong>. Deep expertise in export controls, semiconductor regulations, and Silicon Valley business needs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">EV & Advanced Manufacturing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Expertise in <strong>electric vehicle and battery compliance</strong>. We understand automotive manufacturing trade issues and lithium battery regulations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Silicon Valley Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>Bay Area tech culture and business environment</strong>. Services tailored to Silicon Valley innovation and speed requirements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for classification projects, export license applications, and compliance reviews. Clear cost estimates upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Fremont & Bay Area
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Fremont from our California offices</strong><br />
                Headquarters: 27001 Agoura Road, Suite 350<br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Tech Support:</strong> Virtual consultations available for Bay Area clients
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Bay Area Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From Fremont:</strong> 5.5 hours via I-580 to US-101</li>
                <li><strong>To Port of Oakland:</strong> 30 minutes via I-880 North</li>
                <li><strong>From San Jose:</strong> 5 hours via US-101 South</li>
                <li><strong>Bay Area Transit:</strong> Accessible via BART and Caltrain</li>
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
                  <a href="#export-controls-ear" className="service-link">
                    <span className="service-link__title">Export Controls (EAR)</span>
                    <p className="service-link__description">Technology export compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#electronics-compliance" className="service-link">
                    <span className="service-link__title">Electronics Compliance</span>
                    <p className="service-link__description">Semiconductors & tech imports</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#tariffs-duties-classification-guide" className="service-link">
                    <span className="service-link__title">Tariff Classification</span>
                    <p className="service-link__description">HTS optimization for tech</p>
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
                  <a href="#san-jose-tech-trade-attorney" className="service-link">
                    <span className="service-link__title">San Jose Tech Attorney</span>
                    <p className="service-link__description">Silicon Valley capital</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#oakland-port-attorney" className="service-link">
                    <span className="service-link__title">Oakland Port Attorney</span>
                    <p className="service-link__description">Port of Oakland customs</p>
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
                  <a href="#resources/export-controls-guide" className="service-link">
                    <span className="service-link__title">Export Controls Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/electronics-import-guide" className="service-link">
                    <span className="service-link__title">Electronics Import Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Guide</span>
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
            Contact our Fremont customs attorney today. We'll assess your technology trade needs and provide clear guidance.
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

export default FremontCustomsAttorneyPage;
