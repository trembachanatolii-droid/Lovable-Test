
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanDiegoCustomsLawyerPage: React.FC = () => {
  useMeta({
    title: 'San Diego Customs Lawyer | Tariff Attorney Port SD',
    description: 'San Diego customs lawyer & tariff attorney. CBP defense, tariff classification, customs audits. Mexico border expertise. Call (310) 744-1328.',
    keywords: 'customs lawyer san diego, tariff attorney san diego, trade attorney san diego ca, port of san diego lawyer, international trade lawyer san diego, cbp defense attorney san diego, mexico border customs lawyer, san diego import export attorney',
    canonical: 'san-diego-customs-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-san-diego.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'San Diego Customs Lawyer & Tariff Attorney - Port of San Diego Trade Law Firm',
        description: 'San Diego customs lawyer and tariff attorney providing expert legal representation for tariff classification, CBP defense, customs audits, and cross-border trade compliance.',
        url: `${siteConfig.siteUrl}/san-diego-customs-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'San Diego Customs Lawyer', url: `${siteConfig.siteUrl}/san-diego-customs-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a San Diego customs lawyer for border trade matters?',
          answer: 'A San Diego-based customs lawyer offers direct access to Port of San Diego and expertise with U.S.-Mexico border trade operations, including Otay Mesa and San Ysidro crossings. Our San Diego location enables immediate response to CBP matters affecting Southern California importers and cross-border businesses.',
        },
        {
          question: 'What customs and tariff services do you offer in San Diego?',
          answer: 'Our San Diego office provides comprehensive customs services including: tariff classification and HTS code optimization, CBP audit defense, customs penalty mitigation, Section 301 tariff strategies, UFLPA forced labor compliance, USMCA/NAFTA compliance, cross-border trade advisory, antidumping duty defense, and Port of San Diego detention defense.',
        },
        {
          question: 'Do you handle cross-border trade with Mexico?',
          answer: 'Yes. Our San Diego customs lawyer team has extensive experience with U.S.-Mexico cross-border trade, including USMCA compliance, country of origin determinations, Otay Mesa port operations, maquiladora imports, and CBP entry processing at San Diego border crossings.',
        },
        {
          question: 'What industries do you serve from your San Diego office?',
          answer: 'From our San Diego office, we represent importers and exporters across industries including medical devices/biotechnology, aerospace/defense, electronics, automotive parts, apparel, food/agriculture, and cross-border manufacturing. We understand San Diego\'s diverse economy and border trade dynamics.',
        },
        {
          question: 'How quickly can you respond to Port of San Diego cargo issues?',
          answer: 'Our San Diego location provides direct access to Port of San Diego and border crossings. We can typically respond to CBP cargo detentions, seizures, or examination requests within hours. For Port of San Diego emergencies, call (310) 744-1328 for same-day assistance.',
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
      <section className="hero" aria-label="San Diego Customs Lawyer Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=1920&auto=format&fit=crop"
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
          <h1>San Diego Customs Lawyer<br />Tariff Attorney California</h1>
          <p className="hero-subtitle">
            San Diego customs lawyer and tariff attorney serving Southern California businesses. Expert Port of San Diego representation, Mexico border trade, CBP defense, and customs compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a San Diego Customs Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Your Local Tariff & Customs Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving San Diego and Southern California with expert tariff and customs legal services. Our San Diego location provides access to <strong>Port of San Diego and U.S.-Mexico border crossings</strong>, supporting cross-border trade and international commerce.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Border Trade Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized knowledge of <strong>U.S.-Mexico border trade, USMCA compliance</strong>, and cross-border operations at Otay Mesa and San Ysidro crossings.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of San Diego Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct access to <strong>Port of San Diego</strong> for rapid response to CBP cargo detentions, examinations, and customs issues affecting San Diego importers.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Defense & Biotech Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep expertise in <strong>aerospace/defense trade compliance</strong> and medical device/biotech import regulations critical for San Diego industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Tariff & Customs Services in San Diego
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA & Cross-Border Trade Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your San Diego customs lawyer, we provide expert guidance on <strong>USMCA (formerly NAFTA)</strong> compliance, Mexico trade operations, country of origin determinations, and duty preference claims. Critical for San Diego cross-border businesses.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA qualification and documentation</li>
                <li>Country of origin determinations</li>
                <li>Maquiladora import compliance</li>
                <li>Cross-border trade structuring</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Code Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper tariff classification can mean the difference between <strong>0% and 25%+ duty rates</strong>. We ensure your products are correctly classified under the Harmonized Tariff Schedule and file binding ruling requests with CBP.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification analysis and optimization</li>
                <li>Binding Ruling requests (NY/HQ rulings)</li>
                <li>Tariff engineering for duty minimization</li>
                <li>Classification dispute defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively audits San Diego importers, especially those engaged in cross-border trade. Our customs lawyer team defends you through Focused Assessments, audits, and penalty proceedings. We've helped San Diego clients <strong>reduce penalties by 75% or more</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense</li>
                <li>Prior Disclosure filings to cap penalties</li>
                <li>CF-28/CF-29 response preparation</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Medical Device & FDA Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                San Diego is a biotech and medical device hub. We provide <strong>FDA import compliance, 510(k) clearance coordination</strong>, and customs classification for medical devices, diagnostics, and pharmaceutical products.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Medical device HTS classification</li>
                <li>FDA prior notice and entry compliance</li>
                <li>510(k) and PMA import coordination</li>
                <li>Biotech product customs advisory</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                China tariffs (Section 301) add <strong>7.5% to 25%</strong> to import costs. Our San Diego trade law firm helps you navigate exclusions, supply chain restructuring, and tariff engineering to minimize duty burden.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 exclusion analysis</li>
                <li>Substantial transformation opinions</li>
                <li>Third-country sourcing compliance</li>
                <li>Tariff refund/protest strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Seizure & Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP seizes or detains your cargo at Port of San Diego or border crossings, every day costs money. Our San Diego location allows for <strong>rapid response</strong> to port emergencies. We file admissibility packages and petitions to release your goods.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Seizure notice response (19 USC § 1618)</li>
                <li>Petition for release of detained goods</li>
                <li>UFLPA detention defense</li>
                <li>IPR/trademark seizure defense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from San Diego */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our San Diego Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* San Diego County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Diego County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve all San Diego County communities:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'San Diego', 'Chula Vista', 'Oceanside', 'Carlsbad',
                  'El Cajon', 'Vista', 'Escondido', 'Encinitas',
                  'La Mesa', 'Santee', 'Poway', 'National City',
                  'La Jolla', 'Del Mar', 'Solana Beach', 'Imperial Beach'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Inland Empire & Orange County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Inland Empire & Orange County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Easy access for Inland Empire and South Orange County businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Riverside', 'San Bernardino', 'Temecula', 'Murrieta',
                  'Corona', 'Hemet', 'Menifee', 'Lake Elsinore',
                  'Irvine', 'Mission Viejo', 'San Clemente', 'Dana Point',
                  'Laguna Niguel', 'Aliso Viejo', 'San Juan Capistrano', 'Rancho Santa Margarita'
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
                  <li>Port of San Diego</li>
                  <li>Otay Mesa Crossing</li>
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
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
                  <li>San Diego County</li>
                  <li>Orange County</li>
                  <li>Inland Empire</li>
                  <li>Los Angeles Metro</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why San Diego Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why San Diego Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Border Trade Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your San Diego customs lawyer, we have extensive experience with U.S.-Mexico border trade, USMCA compliance, and cross-border manufacturing. We understand the unique challenges facing San Diego's cross-border business community.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Exclusive Trade Law Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general practice firms, we focus <strong>exclusively</strong> on international trade and customs law. This specialization means deeper expertise, current knowledge of regulatory changes, and established relationships with CBP and trade agencies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services (protests, ruling requests, prior disclosures) and transparent hourly rates for complex matters. No surprise bills. Your free initial consultation includes a clear fee estimate.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Border and port issues require <strong>immediate action</strong>. We provide same-day response to Port of San Diego cargo detentions, border crossing holds, and urgent CBP matters. Call (310) 744-1328 for emergency assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
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
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#los-angeles-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Los Angeles</span>
                    <p className="service-link__description">Port of LA/Long Beach</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#irvine-trade-compliance" className="service-link">
                    <span className="service-link__title">Irvine</span>
                    <p className="service-link__description">Orange County trade law</p>
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
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Guides</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#resources/usmca-compliance-guide" className="service-link">
                    <span className="service-link__title">USMCA Compliance Guide</span>
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
            Contact our San Diego customs lawyer and tariff attorney team today. We'll assess your situation, explain your options, and provide a clear path forward.
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

export default SanDiegoCustomsLawyerPage;
