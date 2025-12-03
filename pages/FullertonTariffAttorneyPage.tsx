
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const FullertonTariffAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Fullerton Tariff Attorney | Orange County Manufacturing Lawyer CA',
    description: 'Fullerton tariff attorney & manufacturing customs lawyer serving Orange County businesses. CBP defense, tariff classification, Port of LA/Long Beach access. (310) 744-1328.',
    keywords: 'tariff attorney fullerton, customs lawyer fullerton, trade attorney fullerton, international trade lawyer fullerton, fullerton import export lawyer, orange county customs attorney, fullerton tariff lawyer, oc manufacturing trade attorney',
    canonical: 'fullerton-tariff-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-fullerton.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Fullerton Tariff Attorney & Customs Lawyer - Orange County Manufacturing Trade Law',
        description: 'Fullerton tariff attorney and customs lawyer specializing in Orange County manufacturing. CBP defense, tariff classification, customs audits, and international trade compliance for OC manufacturers.',
        url: `${siteConfig.siteUrl}/fullerton-tariff-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Fullerton Tariff Attorney', url: `${siteConfig.siteUrl}/fullerton-tariff-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Fullerton tariff attorney for Orange County manufacturers?',
          answer: 'A Fullerton-based tariff attorney understands Orange County manufacturing operations and supply chains. Our firm provides specialized representation for OC manufacturers importing components and materials, including tariff classification, CBP audit defense, Section 301 China tariff strategies, and duty drawback claims. Strategic location provides direct I-5/SR-91 access to Port of Los Angeles and Port of Long Beach for urgent customs matters.',
        },
        {
          question: 'What tariff and customs services do you offer in Fullerton?',
          answer: 'Our Fullerton office provides comprehensive tariff and customs services including: tariff classification for manufacturing components, CBP audit defense, customs penalty mitigation, Section 301 tariff strategies for OC manufacturers, UFLPA forced labor compliance, antidumping/countervailing duty defense, customs seizure defense, duty drawback claims for manufacturing, and trade compliance programs.',
        },
        {
          question: 'Do you serve other Orange County cities besides Fullerton?',
          answer: 'Yes, from our Fullerton location we serve businesses throughout Orange County including Anaheim, Placentia, Buena Park, La Habra, Brea, Orange, Yorba Linda, Santa Ana, Irvine, and all OC communities. We also represent clients at Port of LA, Port of Long Beach, and throughout Southern California.',
        },
        {
          question: 'How quickly can you respond to CBP detentions at Port of LA/Long Beach?',
          answer: 'Our Fullerton location provides excellent access to Port of Los Angeles and Port of Long Beach (approximately 30-40 minutes via I-5/SR-91/I-710). We prioritize urgent customs matters and can typically respond to CBP detentions, seizures, or audit notices within 24 hours. For emergencies, call our direct line at (310) 744-1328.',
        },
        {
          question: 'What industries do you serve from your Fullerton office?',
          answer: 'From Fullerton, we serve Orange County manufacturers and importers including aerospace components, automotive parts, medical devices, electronics and technology, industrial equipment, consumer products, food manufacturing, and retail/e-commerce. Our experience with OC manufacturing operations helps us provide targeted customs compliance solutions.',
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
      <section className="hero" aria-label="Fullerton Tariff Attorney Hero">
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
          <h1>Fullerton Tariff Attorney<br />Orange County Manufacturing Lawyer</h1>
          <p className="hero-subtitle">
            Fullerton tariff attorney and customs lawyer serving Orange County manufacturers. Expert CBP defense, tariff classification, and trade compliance for Port of LA/Long Beach importers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Fullerton Tariff Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Orange County Manufacturing Trade Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Fullerton and Orange County manufacturers with expert tariff and customs legal services. Our firm understands <strong>OC manufacturing supply chains</strong> and provides targeted customs compliance solutions for manufacturers importing components and materials.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">OC Manufacturing Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep experience with <strong>Orange County manufacturing operations</strong>. Understanding of aerospace, automotive, medical device, and electronics supply chains.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Prime Port Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic location with <strong>I-5/SR-91 access to Port of LA and Port of Long Beach</strong>. 30-40 minute response to CBP emergencies.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Specialized Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Focus <strong>exclusively on customs and trade law</strong>. Deeper expertise for complex manufacturing tariff matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Manufacturing Tariff & Customs Services in Fullerton
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification for Manufacturing Components</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Fullerton tariff attorney, we ensure accurate tariff classification for OC manufacturers importing components and materials. From <strong>aerospace parts to medical devices</strong>, proper HTS classification can save thousands in duty costs. We file binding rulings and defend against CBP reclassifications.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for manufacturing components and materials</li>
                <li>Binding Ruling requests (CBP NY/HQ rulings)</li>
                <li>Tariff engineering for manufacturing supply chains</li>
                <li>Classification dispute defense at Port of LA/Long Beach</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense for OC Manufacturers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively audits Orange County manufacturers. Our Fullerton customs lawyer team defends you through Focused Assessments, Quick Response Audits, and penalty proceedings. We've helped OC manufacturers <strong>reduce penalties by 75% or more</strong> through strategic prior disclosures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense for manufacturers</li>
                <li>Prior Disclosure filings to minimize penalties</li>
                <li>CF-28/CF-29 response preparation</li>
                <li>19 USC § 1592 penalty mitigation for manufacturing importers</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Strategies for Manufacturers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                China tariffs (Section 301) significantly impact OC manufacturers. Our Fullerton trade law firm helps you navigate <strong>exclusions, supply chain restructuring</strong>, and tariff minimization strategies to reduce duty costs on manufacturing inputs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 tariff analysis for manufacturing supply chains</li>
                <li>Substantial transformation opinions for components</li>
                <li>Alternative sourcing compliance strategies</li>
                <li>Tariff refund claims and protest filings</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Duty Drawback for OC Manufacturers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Orange County manufacturers can recover <strong>99% of duties paid</strong> on imported components used in exported products. Our Fullerton tariff attorney maximizes duty drawback claims for OC manufacturing operations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Manufacturing drawback for exported products</li>
                <li>Unused merchandise drawback programs</li>
                <li>Substitution drawback for manufacturing materials</li>
                <li>Drawback claim preparation and filing with CBP</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Forced Labor Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Uyghur Forced Labor Prevention Act (UFLPA) has resulted in <strong>$2+ billion in detained goods</strong>. Our Fullerton customs lawyer helps OC manufacturers implement supply chain due diligence and defend against UFLPA detentions at LA/Long Beach ports.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Manufacturing supply chain mapping and audits</li>
                <li>UFLPA detention defense packages</li>
                <li>"Clear and convincing" evidence compilation</li>
                <li>Forced labor compliance programs for manufacturers</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Seizure & Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP seizes or detains manufacturing cargo at Port of LA or Port of Long Beach, every day costs money. Our Fullerton location allows for <strong>rapid 30-40 minute response</strong> to port emergencies. We file admissibility packages for immediate cargo release.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Seizure notice response (19 USC § 1618)</li>
                <li>Petition for release of detained manufacturing cargo</li>
                <li>IPR/trademark seizure defense</li>
                <li>FDA/EPA/DOT hold resolution for regulated products</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Fullerton */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our Fullerton Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* North Orange County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">North Orange County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve the entire North Orange County business community:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Fullerton', 'Anaheim', 'Placentia', 'Buena Park',
                  'La Habra', 'Brea', 'Orange', 'Yorba Linda',
                  'La Palma', 'Cypress', 'Los Alamitos', 'Stanton'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Central & South OC */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central & South Orange County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Convenient access for all Orange County businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Santa Ana', 'Irvine', 'Tustin', 'Garden Grove',
                  'Costa Mesa', 'Newport Beach', 'Huntington Beach', 'Fountain Valley',
                  'Westminster', 'Lake Forest', 'Mission Viejo', 'Laguna Niguel'
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
                  <li>Orange County</li>
                  <li>Los Angeles County</li>
                  <li>San Francisco Bay Area</li>
                  <li>San Diego</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fullerton Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Orange County Manufacturers Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">OC Manufacturing Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Fullerton tariff attorney, we understand Orange County manufacturing operations. We've helped <strong>aerospace, automotive, medical device, and electronics manufacturers</strong> navigate complex customs regulations and minimize tariff costs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Exclusive Trade Law Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general practice firms, we focus <strong>exclusively</strong> on international trade and customs law. This specialization means deeper expertise in tariff classification, CBP proceedings, and manufacturing trade compliance.
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
                Manufacturing emergencies require <strong>immediate action</strong>. Our Fullerton location provides 30-40 minute access to Port of LA/Long Beach. Same-day response to CBP detentions and cargo holds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Fullerton & Orange County
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Fullerton, CA and Orange County</strong><br />
                Main Office: Calabasas, CA<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Service Area:</strong> Fullerton, Anaheim, and all Orange County cities
              </p>
              <p className="text-text-secondary text-sm">
                <strong>Port Access:</strong> 30-40 minutes to Port of LA/Long Beach via I-5/SR-91
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Orange County Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From I-5:</strong> Direct access to Fullerton business district</li>
                <li><strong>From Port of LA:</strong> I-710 to SR-91 East, approximately 30 minutes</li>
                <li><strong>From Port of Long Beach:</strong> I-710 to I-405 to SR-91, approximately 35 minutes</li>
                <li><strong>From Irvine:</strong> I-5 North, approximately 25 minutes</li>
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
                    <p className="service-link__description">Manufacturing compliance</p>
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
                    <p className="service-link__description">OC trade law services</p>
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
            Contact our Fullerton tariff attorney and customs lawyer team today. We'll assess your situation, explain your options, and provide a clear path forward for your Orange County manufacturing business.
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

export default FullertonTariffAttorneyPage;
