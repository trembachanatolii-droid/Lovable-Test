
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const TorranceTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Torrance Trade Attorney | South Bay Customs Lawyer CA',
    description: 'Torrance trade attorney & customs lawyer serving South Bay businesses. Tariff classification, CBP defense, Port of LA/Long Beach access. Manufacturing & tech expertise. (310) 744-1328.',
    keywords: 'trade attorney torrance, customs lawyer torrance, tariff attorney torrance, international trade lawyer torrance, torrance import export lawyer, south bay customs attorney, torrance tariff lawyer, torrance trade lawyer',
    canonical: 'torrance-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-torrance.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Torrance Trade Attorney & Customs Lawyer - South Bay Business Hub',
        description: 'Torrance trade attorney and customs lawyer providing expert legal representation for South Bay businesses. CBP defense, tariff classification, customs audits, and international trade compliance for manufacturing and tech companies.',
        url: `${siteConfig.siteUrl}/#torrance-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/#california-offices` },
        { name: 'Torrance Trade Attorney', url: `${siteConfig.siteUrl}/#torrance-trade-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Torrance trade attorney for South Bay businesses?',
          answer: 'A Torrance-based trade attorney provides convenient legal representation for South Bay manufacturers, technology companies, and importers. Our firm serves Torrance, Redondo Beach, Manhattan Beach, El Segundo, and the South Bay business community with expert customs and trade law services. Strategic location provides direct access to Port of Los Angeles and Port of Long Beach (10-15 minutes) for urgent CBP matters.',
        },
        {
          question: 'What trade and customs services do you offer in Torrance?',
          answer: 'Our Torrance office provides comprehensive trade services including: tariff classification and HTS code optimization, CBP audit defense for South Bay manufacturers, customs penalty mitigation, Section 301 China tariff strategies, UFLPA forced labor compliance, antidumping/countervailing duty defense, customs seizure defense, duty drawback claims, and trade compliance programs for technology and manufacturing companies.',
        },
        {
          question: 'Do you serve other South Bay cities besides Torrance?',
          answer: 'Yes, from our Torrance location we serve the entire South Bay including Redondo Beach, Manhattan Beach, El Segundo, Hermosa Beach, Gardena, Hawthorne, Carson, Lomita, Rolling Hills, Palos Verdes, and all South Bay communities. We also represent clients at Port of LA, Port of Long Beach, and throughout Southern California.',
        },
        {
          question: 'How quickly can you respond to CBP detentions at Port of LA/Long Beach?',
          answer: 'Our Torrance location provides excellent access to Port of Los Angeles and Port of Long Beach (approximately 10-15 minutes via I-110/SR-47). We prioritize urgent customs matters and can typically respond to CBP detentions, seizures, or audit notices within 24 hours. For emergencies, call our direct line at (310) 744-1328.',
        },
        {
          question: 'What industries do you serve from your Torrance office?',
          answer: 'From Torrance, we serve South Bay manufacturers and importers including automotive parts and equipment, aerospace components, technology and electronics, medical devices, industrial machinery, consumer goods, e-commerce, and petroleum/chemical products. Our experience with South Bay business operations helps us provide targeted customs compliance solutions.',
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
      <section className="hero" aria-label="Torrance Trade Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Torrance Trade Attorney<br />South Bay Customs Lawyer</h1>
          <p className="hero-subtitle">
            Torrance trade attorney and customs lawyer serving South Bay business hub. Expert CBP defense, tariff classification, and trade compliance for Port of LA/Long Beach importers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Torrance Trade Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              South Bay Business Hub Trade Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Torrance and South Bay businesses with expert customs and trade law services. Our firm understands the <strong>unique challenges</strong> facing South Bay manufacturers, technology companies, and importers in one of California's most dynamic business regions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Prime Port Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic Torrance location with <strong>direct I-110/SR-47 access to Port of LA and Port of Long Beach</strong>. 10-15 minute response to CBP emergencies.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">South Bay Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep experience with <strong>South Bay manufacturing and technology sectors</strong>. Understanding of automotive, aerospace, medical device, and tech supply chains.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Specialized Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Focus <strong>exclusively on customs and trade law</strong>. Deeper expertise than general practice firms for complex tariff and compliance matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade & Customs Services in Torrance
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Code Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Torrance trade attorney, we ensure accurate tariff classification for South Bay manufacturers and importers. From <strong>automotive parts to technology components</strong>, proper HTS classification can save thousands in duty costs. We file binding rulings and defend against CBP reclassifications.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for automotive, aerospace, and tech products</li>
                <li>Binding Ruling requests (CBP NY/HQ rulings)</li>
                <li>Tariff engineering for manufacturing supply chains</li>
                <li>Classification dispute defense at Port of LA/Long Beach</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively audits South Bay manufacturers and importers. Our Torrance customs lawyer team defends you through Focused Assessments, Quick Response Audits, and penalty proceedings. We've helped South Bay clients <strong>reduce penalties by 75% or more</strong> through strategic prior disclosures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense for manufacturers</li>
                <li>Prior Disclosure filings to cap penalties</li>
                <li>CF-28/CF-29 response preparation</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                China tariffs (Section 301) significantly impact South Bay manufacturers. Our Torrance trade law firm helps you navigate <strong>exclusions, supply chain restructuring</strong>, and tariff minimization strategies to reduce duty costs on manufacturing inputs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 tariff analysis for manufacturing supply chains</li>
                <li>Substantial transformation opinions for components</li>
                <li>Alternative sourcing compliance strategies</li>
                <li>Tariff refund claims and protest filings</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Forced Labor Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Uyghur Forced Labor Prevention Act (UFLPA) has resulted in <strong>$2+ billion in detained goods</strong>. Our Torrance customs lawyer helps South Bay manufacturers implement supply chain due diligence and defend against UFLPA detentions at LA/Long Beach ports.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Manufacturing supply chain mapping and audits</li>
                <li>UFLPA detention defense packages</li>
                <li>"Clear and convincing" evidence compilation</li>
                <li>Forced labor compliance programs for importers</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Seizure & Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP seizes or detains cargo at Port of LA or Port of Long Beach, every day costs money. Our Torrance location allows for <strong>rapid 10-15 minute response</strong> to port emergencies. We file admissibility packages and petitions for immediate cargo release.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Seizure notice response (19 USC § 1618)</li>
                <li>Petition for release of detained goods</li>
                <li>IPR/trademark seizure defense</li>
                <li>FDA/EPA/DOT hold resolution for regulated products</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Trade Compliance Programs for South Bay Businesses</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                South Bay manufacturers and technology companies need robust <strong>import compliance programs</strong>. Our Torrance office develops comprehensive customs compliance procedures, internal controls, and employee training for manufacturing operations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Import compliance program development</li>
                <li>Internal controls and audit procedures</li>
                <li>Employee training on customs compliance</li>
                <li>Recordkeeping and documentation systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Torrance */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our Torrance Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* South Bay */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">South Bay</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve the entire South Bay business community:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Torrance', 'Redondo Beach', 'Manhattan Beach', 'El Segundo',
                  'Hermosa Beach', 'Gardena', 'Hawthorne', 'Carson',
                  'Lomita', 'Rolling Hills', 'Palos Verdes', 'San Pedro',
                  'Harbor City', 'Wilmington', 'Rancho Palos Verdes', 'Lawndale'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Greater Los Angeles */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Greater Los Angeles</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Convenient access for Los Angeles County businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Long Beach', 'Compton', 'Inglewood', 'Downey',
                  'Lakewood', 'Bellflower', 'Norwalk', 'Cerritos',
                  'Paramount', 'South Gate', 'Lynwood', 'Huntington Park',
                  'Los Angeles', 'Culver City', 'Westchester', 'LAX Area'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Statewide & Nationwide */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Statewide & Nationwide Representation</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">California Ports</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
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
                <h4 className="font-bold text-secondary-teal mb-3">Major California Markets</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Los Angeles County</li>
                  <li>Orange County</li>
                  <li>San Francisco Bay Area</li>
                  <li>San Diego</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Torrance Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why South Bay Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">South Bay Manufacturing Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Torrance trade attorney, we understand South Bay manufacturing and technology operations. We've helped <strong>automotive, aerospace, medical device, and tech companies</strong> navigate complex customs regulations and minimize tariff costs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Exclusive Trade Law Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general practice firms, we focus <strong>exclusively</strong> on international trade and customs law. This specialization means deeper expertise in tariff classification, CBP proceedings, and trade compliance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services (protests, ruling requests, prior disclosures) and transparent hourly rates for complex audit defense. No surprise bills. Your free consultation includes a clear fee estimate.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Port Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Customs emergencies require <strong>immediate action</strong>. Our Torrance location provides 10-15 minute access to Port of LA/Long Beach. Same-day response to CBP detentions and cargo holds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Torrance & South Bay
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Torrance, CA and South Bay</strong><br />
                Main Office: Calabasas, CA<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Service Area:</strong> Torrance, South Bay, and all Los Angeles County cities
              </p>
              <p className="text-text-secondary text-sm">
                <strong>Port Access:</strong> 10-15 minutes to Port of LA/Long Beach via I-110/SR-47
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">South Bay Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From I-405:</strong> Direct access to Torrance business district</li>
                <li><strong>From Port of LA:</strong> I-110 North, approximately 10-15 minutes</li>
                <li><strong>From Port of Long Beach:</strong> I-710 to I-405, approximately 15 minutes</li>
                <li><strong>From LAX:</strong> I-405 South, approximately 10 minutes</li>
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
                  <a href="#customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense & Litigation</span>
                    <p className="service-link__description">CBP audits, seizures, penalty defense</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#regulatory-compliance-advisory" className="service-link">
                    <span className="service-link__title">Trade Compliance Programs</span>
                    <p className="service-link__description">Import compliance development</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#export-controls-sanctions" className="service-link">
                    <span className="service-link__title">Export Controls & Sanctions</span>
                    <p className="service-link__description">ITAR, EAR, OFAC compliance</p>
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
                  <a href="#los-angeles-port-customs-attorney" className="service-link">
                    <span className="service-link__title">Los Angeles & Long Beach Port</span>
                    <p className="service-link__description">Port customs expertise</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#orange-county-trade-law-attorney" className="service-link">
                    <span className="service-link__title">Orange County</span>
                    <p className="service-link__description">OC manufacturing services</p>
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
                  <a href="#resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Tariffs Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/uflpa-compliance-guide" className="service-link">
                    <span className="service-link__title">UFLPA Compliance Guide</span>
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
            Contact our Torrance trade attorney and customs lawyer team today. We'll assess your situation, explain your options, and provide a clear path forward for your South Bay business.
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

export default TorranceTradeAttorneyPage;
