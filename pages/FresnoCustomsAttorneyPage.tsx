
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const FresnoCustomsAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Fresno Customs Attorney | Central Valley Tariff Lawyer',
    description: 'Fresno customs attorney & Central Valley tariff lawyer. Agricultural trade law firm. CBP defense, tariff classification, FDA/USDA compliance. Serving Fresno CA. (310) 744-1328.',
    keywords: 'customs attorney fresno, tariff lawyer fresno, trade attorney fresno ca, central valley customs lawyer, agricultural trade lawyer fresno, cbp defense attorney fresno, fresno import export lawyer, fresno tariff attorney',
    canonical: 'fresno-customs-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-fresno.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Fresno Customs Attorney & Central Valley Tariff Lawyer - Agricultural Trade Law',
        description: 'Fresno customs attorney and Central Valley tariff lawyer providing expert legal representation for agricultural imports, tariff classification, CBP defense, and food trade compliance.',
        url: `${siteConfig.siteUrl}/fresno-customs-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Fresno Customs Attorney', url: `${siteConfig.siteUrl}/fresno-customs-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Fresno customs attorney for Central Valley agricultural businesses?',
          answer: 'A Fresno-based customs attorney understands the Central Valley\'s role as America\'s agricultural heartland. We have deep expertise in agricultural import/export regulations, FDA/USDA compliance, fresh produce trade, and food processing customs issues affecting Fresno County growers and distributors.',
        },
        {
          question: 'What customs and tariff services do you offer in Fresno?',
          answer: 'Our Fresno office provides comprehensive customs services including: agricultural import compliance (FDA/USDA), fresh produce and food tariff classification, CBP audit defense, customs penalty mitigation, Section 301 agricultural tariff strategies, organic certification imports, UFLPA forced labor compliance, and Central Valley agricultural trade advisory.',
        },
        {
          question: 'Do you handle fresh produce and agricultural import compliance?',
          answer: 'Yes. Fresno is the heart of California agriculture. We provide expert guidance on FDA food import compliance, USDA/APHIS fresh produce regulations, phytosanitary certificates, organic imports, agricultural tariff classification, and customs compliance for Central Valley growers, packers, and food processors.',
        },
        {
          question: 'What industries do you serve from your Fresno office?',
          answer: 'From our Fresno office, we represent Central Valley agricultural businesses including fresh produce growers, food processors, dairy operations, wine/beverage producers, nuts and dried fruit exporters, organic farming operations, and agricultural equipment importers. We understand the Central Valley agricultural economy.',
        },
        {
          question: 'How quickly can you respond to CBP agricultural import issues?',
          answer: 'Our Fresno location provides rapid response to CBP customs issues and FDA/USDA agricultural compliance matters affecting Central Valley businesses. We typically respond to urgent agricultural trade matters within 24 hours. Call (310) 744-1328 for immediate assistance.',
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
      <section className="hero" aria-label="Fresno Customs Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Fresno Customs Attorney<br />Tariff Lawyer California</h1>
          <p className="hero-subtitle">
            Fresno customs attorney and Central Valley tariff lawyer serving agricultural businesses. Expert FDA/USDA compliance, CBP defense, tariff classification, and food trade regulations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Fresno Customs Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Your Local Tariff & Customs Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Fresno and the Central Valley with expert tariff and customs legal services. As the <strong>heart of America's agricultural production</strong>, Fresno County requires specialized customs expertise in fresh produce, food processing, and agricultural trade regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Heartland</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep understanding of <strong>Central Valley agriculture, fresh produce trade</strong>, and food processing. Specialized in FDA/USDA agricultural compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Food Trade Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized in <strong>fresh produce, food processing, organic imports</strong>, and agricultural tariff classification for Central Valley growers and packers.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Local Fresno Access</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Fresno location</strong> serving Central Valley agricultural businesses. Understanding of local farming, packing, and food processing operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Tariff & Customs Services in Fresno
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Fresh Produce & Agricultural Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Fresno County is America's top agricultural producing county. We provide <strong>FDA food import compliance, USDA/APHIS fresh produce regulations</strong>, phytosanitary certificates, agricultural product tariff classification, and customs compliance for Central Valley growers and packers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA food import compliance and prior notice</li>
                <li>USDA/APHIS fresh produce regulations</li>
                <li>Phytosanitary certificates and pest compliance</li>
                <li>Fresh fruit and vegetable HTS classification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Food Processing & Organic Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Central Valley food processors need specialized customs expertise. We handle <strong>organic certification imports, food labeling</strong>, processed food tariff classification, and FDA compliance for Fresno food manufacturing operations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Organic certification and NOP compliance</li>
                <li>Processed food HTS classification</li>
                <li>FDA food facility registration</li>
                <li>Food labeling and country of origin</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Code Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Fresno tariff lawyer, we ensure agricultural products are correctly classified under the Harmonized Tariff Schedule (HTS). Proper classification can mean the difference between <strong>0% and 25%+ duty rates</strong>. Critical for Central Valley agricultural importers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Agricultural HTS classification</li>
                <li>Binding Ruling requests (NY/HQ rulings)</li>
                <li>Tariff engineering for agricultural products</li>
                <li>Classification dispute defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP audits Central Valley agricultural importers. Our Fresno customs attorney team defends you through Focused Assessments, Quick Response Audits, and penalty proceedings. We've helped Fresno clients <strong>reduce penalties by 75% or more</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense</li>
                <li>Prior Disclosure filings to cap penalties</li>
                <li>CF-28/CF-29 response preparation</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Agricultural Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                China tariffs (Section 301) affect agricultural imports. Our Fresno trade law firm helps Central Valley businesses navigate <strong>agricultural exclusions, supply chain restructuring</strong>, and tariff engineering to minimize duty burden on food products.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 agricultural exclusion analysis</li>
                <li>Food product substantial transformation</li>
                <li>Third-country sourcing compliance</li>
                <li>Tariff refund/protest strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Forced Labor Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Uyghur Forced Labor Prevention Act (UFLPA) affects agricultural supply chains. Our Fresno attorney team helps Central Valley businesses implement <strong>agricultural supply chain due diligence</strong> and defend against UFLPA detentions.
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

      {/* Service Areas from Fresno */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our Fresno Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Central Valley */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley Communities</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve all Central Valley agricultural communities:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Fresno', 'Clovis', 'Madera', 'Sanger',
                  'Reedley', 'Selma', 'Kingsburg', 'Fowler',
                  'Visalia', 'Tulare', 'Porterville', 'Hanford',
                  'Lemoore', 'Dinuba', 'Kerman', 'Parlier'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* San Joaquin Valley */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Joaquin Valley</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Easy access for San Joaquin Valley businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Bakersfield', 'Stockton', 'Modesto', 'Merced',
                  'Turlock', 'Delano', 'Wasco', 'Shafter',
                  'Chowchilla', 'Los Banos', 'Atwater', 'Livingston',
                  'Coalinga', 'Avenal', 'Huron', 'Firebaugh'
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
                  <li>Central Valley</li>
                  <li>San Joaquin Valley</li>
                  <li>Fresno County</li>
                  <li>Kings County</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fresno Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Fresno Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley Agricultural Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Fresno customs attorney, we understand Central Valley agriculture—from fresh produce to food processing to organic farming. We have extensive experience with FDA/USDA compliance, agricultural tariff classification, and food trade regulations.
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
                Agricultural trade issues require <strong>immediate action</strong>. We provide same-day response to urgent FDA/USDA holds, CBP agricultural import issues, and fresh produce compliance emergencies. Call (310) 744-1328.
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
                  <Link to="/customs-defense-litigation" className="service-link">
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
                  <Link to="/bakersfield-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Bakersfield</span>
                    <p className="service-link__description">Kern County trade law</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/sacramento-tariff-attorney" className="service-link">
                    <span className="service-link__title">Sacramento</span>
                    <p className="service-link__description">Northern California customs</p>
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
            Contact our Fresno customs attorney and Central Valley tariff lawyer team today. We'll assess your situation, explain your options, and provide a clear path forward.
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

export default FresnoCustomsAttorneyPage;
