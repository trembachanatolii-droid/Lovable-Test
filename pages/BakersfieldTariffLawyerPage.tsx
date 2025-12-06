
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const BakersfieldTariffLawyerPage: React.FC = () => {
  useMeta({
    title: 'Bakersfield Tariff Lawyer | Kern County Customs Attorney',
    description: 'Bakersfield tariff lawyer & Kern County customs attorney. Agricultural & energy trade law. CBP defense, tariff classification, customs audits. Serving Bakersfield CA. (310) 744-1328.',
    keywords: 'tariff lawyer bakersfield, customs attorney bakersfield, trade attorney bakersfield ca, kern county customs lawyer, agricultural trade lawyer bakersfield, cbp defense attorney bakersfield, bakersfield import export lawyer, kern county tariff attorney',
    canonical: 'bakersfield-tariff-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-bakersfield.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Bakersfield Tariff Lawyer & Kern County Customs Attorney - Agricultural & Energy Trade Law',
        description: 'Bakersfield tariff lawyer and Kern County customs attorney providing expert legal representation for agricultural imports, energy equipment, tariff classification, and CBP defense.',
        url: `${siteConfig.siteUrl}/bakersfield-tariff-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Bakersfield Tariff Lawyer', url: `${siteConfig.siteUrl}/bakersfield-tariff-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Bakersfield tariff lawyer for Kern County businesses?',
          answer: 'A Bakersfield-based tariff lawyer understands Kern County\'s unique economy centered on agriculture, energy production, and food processing. We provide specialized customs expertise for agricultural imports, energy equipment, and food products serving Bakersfield and Kern County businesses.',
        },
        {
          question: 'What tariff and customs services do you offer in Bakersfield?',
          answer: 'Our Bakersfield office provides comprehensive tariff and customs services including: agricultural import compliance (FDA/USDA), energy equipment tariff classification, tariff classification and HTS code optimization, CBP audit defense, customs penalty mitigation, Section 301 agricultural tariff strategies, food processing regulations, and Kern County agricultural trade advisory.',
        },
        {
          question: 'Do you handle agricultural and energy equipment import compliance?',
          answer: 'Yes. Bakersfield is the heart of Kern County\'s agricultural and energy economy. We provide expert guidance on FDA food import compliance, USDA agricultural regulations, agricultural equipment tariff classification, energy/oil equipment imports, and customs compliance for farming, food processing, and energy businesses.',
        },
        {
          question: 'What industries do you serve from your Bakersfield office?',
          answer: 'From our Bakersfield office, we represent Kern County businesses across industries including agriculture/farming, food processing, energy/oil production, agricultural equipment, dairy operations, wine production, nuts and dried fruit, and distribution. We understand Bakersfield\'s agricultural and energy economy.',
        },
        {
          question: 'How quickly can you respond to CBP agricultural compliance issues?',
          answer: 'Our Bakersfield location provides rapid response to CBP customs issues and FDA/USDA agricultural compliance matters affecting Kern County businesses. We typically respond to urgent agricultural trade matters within 24 hours. Call (310) 744-1328 for immediate assistance.',
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
      <section className="hero" aria-label="Bakersfield Tariff Lawyer Hero">
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
          <h1>Bakersfield Tariff Lawyer<br />Customs Attorney California</h1>
          <p className="hero-subtitle">
            Bakersfield tariff lawyer and Kern County customs attorney serving agricultural and energy businesses. Expert FDA/USDA compliance, CBP defense, tariff classification, and agricultural trade law.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact#schedule-consultation" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Bakersfield Tariff Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Your Local Tariff & Customs Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Bakersfield and Kern County with expert tariff and customs legal services. Kern County leads California in <strong>agricultural production and energy output</strong>, requiring specialized customs expertise in agricultural imports and energy equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Powerhouse</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep understanding of <strong>Kern County agriculture, food processing, energy production</strong>, and agricultural trade operations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Energy & Equipment Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized in <strong>energy equipment, agricultural machinery</strong>, and industrial import classifications for Bakersfield energy and farming operations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Local Bakersfield Access</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Bakersfield location</strong> serving Kern County businesses. Understanding of local agricultural, energy, and food processing economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Tariff & Customs Services in Bakersfield
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural & Food Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Kern County is California's top agricultural producing county. We provide <strong>FDA food import compliance, USDA agricultural regulations</strong>, agricultural product tariff classification, and customs compliance for Kern County growers, packers, and food processors.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA food import and prior notice compliance</li>
                <li>USDA/APHIS agricultural product regulations</li>
                <li>Agricultural product HTS classification</li>
                <li>Organic certification imports</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural & Energy Equipment Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Bakersfield businesses import agricultural machinery and energy equipment. We provide <strong>tariff classification, duty minimization</strong>, and customs compliance for farming equipment, oil/gas machinery, and industrial imports.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Agricultural equipment HTS classification</li>
                <li>Energy/oil equipment tariff classification</li>
                <li>Industrial machinery duty optimization</li>
                <li>Equipment import compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Code Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Bakersfield tariff lawyer, we ensure products are correctly classified under the Harmonized Tariff Schedule (HTS). Proper classification can mean the difference between <strong>0% and 25%+ duty rates</strong>. Critical for agricultural and energy importers.
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
                CBP audits Kern County agricultural and energy importers. Our Bakersfield customs attorney team defends you through Focused Assessments, Quick Response Audits, and penalty proceedings. We've helped Bakersfield clients <strong>reduce penalties by 75% or more</strong>.
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
                China tariffs (Section 301) affect agricultural and equipment imports. Our Bakersfield trade law firm helps Kern County businesses navigate <strong>agricultural exclusions, equipment classifications</strong>, and tariff engineering to minimize duty burden.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 agricultural exclusion analysis</li>
                <li>Equipment substantial transformation</li>
                <li>Third-country sourcing compliance</li>
                <li>Tariff refund/protest strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Forced Labor Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Uyghur Forced Labor Prevention Act (UFLPA) affects agricultural supply chains. Our Bakersfield attorney team helps Kern County businesses implement <strong>agricultural supply chain due diligence</strong> and defend against UFLPA detentions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Agricultural supply chain mapping</li>
                <li>UFLPA detention defense packages</li>
                <li>"Clear and convincing" evidence compilation</li>
                <li>Forced labor compliance programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Bakersfield */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our Bakersfield Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Kern County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Kern County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve all Kern County communities:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Bakersfield', 'Delano', 'Wasco', 'Shafter',
                  'Arvin', 'Tehachapi', 'Ridgecrest', 'California City',
                  'Taft', 'Maricopa', 'Lamont', 'McFarland',
                  'Frazier Park', 'Lebec', 'Buttonwillow', 'Lost Hills'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Central Valley */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Easy access for Central Valley businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Fresno', 'Visalia', 'Tulare', 'Porterville',
                  'Hanford', 'Lemoore', 'Corcoran', 'Coalinga',
                  'Avenal', 'Huron', 'Kettleman City', 'Pixley',
                  'Earlimart', 'Tipton', 'Goshen', 'Ivanhoe'
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
                <h4 className="font-bold text-secondary-teal mb-3">Federal Agencies</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>U.S. Court of International Trade</li>
                  <li>FDA - Food & Drug Administration</li>
                  <li>USDA - Dept of Agriculture</li>
                  <li>CBP Administrative Proceedings</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Major California Markets</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Kern County</li>
                  <li>Central Valley</li>
                  <li>San Joaquin Valley</li>
                  <li>Southern California</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bakersfield Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Bakersfield Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Kern County Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Bakersfield tariff lawyer, we understand Kern County's agricultural and energy economy. We have extensive experience with agricultural trade, food processing, energy equipment, and FDA/USDA compliance regulations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Exclusive Trade Law Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general practice firms, we focus <strong>exclusively</strong> on international trade and customs law. This specialization means deeper expertise, current knowledge of regulatory changes, and established relationships with CBP, FDA, and USDA.
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
                Agricultural trade issues require <strong>immediate action</strong>. We provide same-day response to urgent FDA/USDA holds, CBP agricultural import issues, and compliance emergencies. Call (310) 744-1328.
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
                    <span className="service-link__title">Trade Compliance Programs</span>
                    <p className="service-link__description">Import compliance development</p>
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
              </div>
            </div>

            {/* Other Locations */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/fresno-customs-attorney" className="service-link">
                    <span className="service-link__title">Fresno</span>
                    <p className="service-link__description">Central Valley trade law</p>
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
                  <Link to="/resources/uflpa-compliance-guide" className="service-link">
                    <span className="service-link__title">UFLPA Compliance Guide</span>
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
            Contact our Bakersfield tariff lawyer and Kern County customs attorney team today. We'll assess your situation, explain your options, and provide a clear path forward.
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

export default BakersfieldTariffLawyerPage;
