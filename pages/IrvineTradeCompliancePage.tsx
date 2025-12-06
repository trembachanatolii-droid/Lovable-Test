
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const IrvineTradeCompliancePage: React.FC = () => {
  useMeta({
    title: 'Irvine Trade Compliance | Orange County Customs Lawyer',
    description: 'Irvine trade compliance & Orange County customs lawyer. Tariff attorney serving Irvine CA. CBP defense, HTS classification, customs audits. Tech & manufacturing focus. (310) 744-1328.',
    keywords: 'trade compliance irvine, customs lawyer irvine, tariff attorney irvine ca, orange county customs lawyer, international trade lawyer irvine, cbp defense attorney irvine, irvine import export lawyer, orange county tariff attorney',
    canonical: 'irvine-trade-compliance',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-irvine.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Irvine Trade Compliance & Orange County Customs Lawyer - Tech & Manufacturing Legal Services',
        description: 'Irvine trade compliance and Orange County customs lawyer providing expert legal representation for tariff classification, CBP defense, customs audits, and international trade compliance.',
        url: `${siteConfig.siteUrl}/irvine-trade-compliance`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Irvine Trade Compliance', url: `${siteConfig.siteUrl}/irvine-trade-compliance` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose an Irvine trade compliance attorney for Orange County businesses?',
          answer: 'An Irvine-based trade compliance attorney understands Orange County\'s technology, manufacturing, and medical device industries. Our Irvine location provides convenient access for OC businesses without the hassle of downtown LA traffic, while delivering sophisticated international trade expertise.',
        },
        {
          question: 'What trade compliance and customs services do you offer in Irvine?',
          answer: 'Our Irvine office provides comprehensive trade compliance services including: tariff classification and HTS code optimization, CBP audit defense, customs penalty mitigation, Section 301 tariff strategies, UFLPA forced labor compliance, export controls (ITAR/EAR), medical device import compliance, antidumping duty defense, and trade compliance program development.',
        },
        {
          question: 'Do you serve other Orange County cities besides Irvine?',
          answer: 'Yes. While based in Irvine, we serve all Orange County communities including Anaheim, Santa Ana, Costa Mesa, Newport Beach, Huntington Beach, Fullerton, Orange, and surrounding cities. We understand OC\'s diverse business economy and manufacturing sector.',
        },
        {
          question: 'What industries do you serve from your Irvine office?',
          answer: 'From our Irvine office, we represent Orange County importers and exporters across industries including technology/electronics, medical devices/biotechnology, automotive parts/accessories, apparel/textiles, consumer goods, furniture/home goods, and manufacturing. We understand OC\'s innovation economy.',
        },
        {
          question: 'How quickly can you respond to CBP issues affecting Orange County businesses?',
          answer: 'Our Irvine location provides rapid access to Port of LA/Long Beach and convenient service for Orange County businesses. We typically respond to urgent CBP matters within 24 hours. Call (310) 744-1328 for immediate assistance with customs issues.',
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
      <section className="hero" aria-label="Irvine Trade Compliance Hero">
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
          <h1>Irvine Trade Compliance<br />Customs Lawyer California</h1>
          <p className="hero-subtitle">
            Irvine trade compliance and Orange County customs lawyer serving tech, medical device, and manufacturing businesses. Expert CBP defense, tariff classification, and import/export compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact#schedule-consultation" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose an Irvine Trade Compliance Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Your Local Tariff & Customs Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Irvine and Orange County with expert trade compliance and customs legal services. Orange County is home to <strong>thriving tech, medical device, and manufacturing sectors</strong>, and we understand the unique international trade challenges facing OC businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Orange County Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep understanding of <strong>OC tech, medical device, and manufacturing</strong> sectors. Convenient Irvine location without LA traffic.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Medical Device Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized in <strong>FDA compliance, medical device classification</strong>, and biotech import regulations critical for OC life sciences companies.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tech Trade Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Expertise in <strong>export controls, encryption</strong>, and tech product classification for OC technology and innovation companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Tariff & Customs Services in Irvine
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Medical Device & FDA Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Orange County is a medical device and biotech hub. We provide <strong>FDA import compliance, 510(k) clearance coordination</strong>, and customs classification for medical devices, diagnostics, and pharmaceutical products. Critical for OC life sciences companies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Medical device HTS classification</li>
                <li>FDA prior notice and entry compliance</li>
                <li>510(k) and PMA import coordination</li>
                <li>Biotech product customs advisory</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Code Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Irvine tariff attorney, we ensure your products are correctly classified under the Harmonized Tariff Schedule (HTS). Proper classification can mean the difference between <strong>0% and 25%+ duty rates</strong>. Critical for OC manufacturers and importers.
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
                CBP actively audits Orange County importers. Our Irvine customs lawyer team defends you through Focused Assessments, Quick Response Audits, and penalty proceedings. We've helped OC clients <strong>reduce penalties by 75% or more</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense</li>
                <li>Prior Disclosure filings to cap penalties</li>
                <li>CF-28/CF-29 response preparation</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Controls & Tech Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Orange County tech companies face complex export control requirements. We provide <strong>ITAR/EAR compliance, encryption export</strong> guidance, and deemed export advisory for technology manufacturers and innovators.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ITAR registration and compliance</li>
                <li>EAR licensing and classification</li>
                <li>Encryption export (TSU/740.17)</li>
                <li>Deemed export compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                China tariffs (Section 301) add <strong>7.5% to 25%</strong> to import costs. Our Irvine trade law firm helps OC businesses navigate exclusions, supply chain restructuring, and tariff engineering to minimize duty burden.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 exclusion analysis</li>
                <li>Substantial transformation opinions</li>
                <li>Third-country sourcing compliance</li>
                <li>Tariff refund/protest strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Forced Labor Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Uyghur Forced Labor Prevention Act (UFLPA) has resulted in <strong>$2+ billion in detained goods</strong>. Our Irvine attorney team helps OC businesses implement supply chain due diligence and defend against UFLPA detentions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Supply chain mapping and audits</li>
                <li>UFLPA detention defense packages</li>
                <li>"Clear and convincing" evidence compilation</li>
                <li>Forced labor compliance programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Irvine */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our Irvine Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Orange County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Orange County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve all Orange County communities:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Irvine', 'Anaheim', 'Santa Ana', 'Orange',
                  'Fullerton', 'Costa Mesa', 'Huntington Beach', 'Newport Beach',
                  'Mission Viejo', 'Laguna Niguel', 'San Clemente', 'Lake Forest',
                  'Tustin', 'Yorba Linda', 'Brea', 'Fountain Valley'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Los Angeles & Inland Empire */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">LA & Inland Empire</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Easy access for LA and Inland Empire businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Los Angeles', 'Long Beach', 'Torrance', 'Carson',
                  'Cerritos', 'Lakewood', 'Downey', 'Norwalk',
                  'Riverside', 'Corona', 'Ontario', 'Rancho Cucamonga',
                  'Chino', 'Pomona', 'Diamond Bar', 'Eastvale'
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
                  <li>Los Angeles Metro</li>
                  <li>Inland Empire</li>
                  <li>San Diego County</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Irvine Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Irvine Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Orange County Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Irvine trade compliance attorney, we understand OC's tech, medical device, and manufacturing sectors. We have extensive experience with FDA compliance, export controls, and trade regulations critical to Orange County innovators.
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
                Trade compliance issues often have <strong>strict deadlines</strong>. We prioritize urgent matters and maintain direct communication. Same-day response to CBP notices and urgent customs issues. Call (310) 744-1328.
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
                  <Link to="/customs-defense" className="service-link">
                    <span className="service-link__title">Customs Defense & Litigation</span>
                    <p className="service-link__description">CBP audits, seizures, penalty defense</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Export Controls & Sanctions</span>
                    <p className="service-link__description">ITAR, EAR, OFAC compliance</p>
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
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/anaheim-customs-attorney" className="service-link">
                    <span className="service-link__title">Anaheim</span>
                    <p className="service-link__description">Orange County customs</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/los-angeles-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Los Angeles</span>
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
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
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
                  <Link to="/resources/export-controls-guide" className="service-link">
                    <span className="service-link__title">Export Controls Guide</span>
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
            Contact our Irvine trade compliance and customs lawyer team today. We'll assess your situation, explain your options, and provide a clear path forward.
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

export default IrvineTradeCompliancePage;
