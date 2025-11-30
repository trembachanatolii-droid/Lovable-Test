
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const StocktonTariffLawyerPage: React.FC = () => {
  useMeta({
    title: 'Stockton Tariff Lawyer | Central Valley Customs Attorney',
    description: 'Stockton tariff lawyer & Central Valley customs attorney. Agricultural trade law, CBP defense, tariff classification. Serving Stockton CA & San Joaquin County. (310) 744-1328.',
    keywords: 'tariff lawyer stockton, customs attorney stockton, trade attorney stockton ca, san joaquin county customs lawyer, agricultural trade lawyer stockton, cbp defense attorney stockton, stockton import export lawyer, central valley tariff attorney',
    canonical: 'stockton-tariff-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-stockton.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Stockton Tariff Lawyer & Central Valley Customs Attorney - Agricultural Trade Law',
        description: 'Stockton tariff lawyer and Central Valley customs attorney providing expert legal representation for agricultural trade, tariff classification, CBP defense, and food import compliance.',
        url: `${siteConfig.siteUrl}/#stockton-tariff-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/#california-offices` },
        { name: 'Stockton Tariff Lawyer', url: `${siteConfig.siteUrl}/#stockton-tariff-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Stockton tariff lawyer for San Joaquin County businesses?',
          answer: 'A Stockton-based tariff lawyer understands San Joaquin County\'s agricultural economy and Central Valley trade operations. Stockton serves as a distribution hub with inland port access. We provide convenient local representation for agricultural importers, food processors, and distribution businesses.',
        },
        {
          question: 'What tariff and customs services do you offer in Stockton?',
          answer: 'Our Stockton office provides comprehensive tariff and customs services including: agricultural import compliance (FDA/USDA), tariff classification and HTS code optimization, CBP audit defense, customs penalty mitigation, Section 301 agricultural tariff strategies, wine/beverage import compliance, food processing regulations, and Central Valley agricultural trade advisory.',
        },
        {
          question: 'Do you serve other San Joaquin County cities besides Stockton?',
          answer: 'Yes. While based in Stockton, we serve all San Joaquin County communities including Lodi, Manteca, Tracy, Lathrop, and surrounding Central Valley cities. We understand the agricultural economy and food distribution operations throughout the region.',
        },
        {
          question: 'What industries do you serve from your Stockton office?',
          answer: 'From our Stockton office, we represent Central Valley agricultural businesses including wine/grape growers, food processors, agricultural equipment importers, distribution centers, produce packers, grain operations, and food manufacturing. We understand San Joaquin County\'s diverse agricultural and distribution economy.',
        },
        {
          question: 'How quickly can you respond to CBP agricultural compliance issues?',
          answer: 'Our Stockton location provides rapid response to CBP customs issues and FDA/USDA agricultural compliance matters affecting Central Valley businesses. We typically respond to urgent agricultural trade matters within 24 hours. Call (310) 744-1328 for immediate assistance.',
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
      <section className="hero" aria-label="Stockton Tariff Lawyer Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Stockton Tariff Lawyer<br />Customs Attorney California</h1>
          <p className="hero-subtitle">
            Stockton tariff lawyer and Central Valley customs attorney serving agricultural and distribution businesses. Expert FDA/USDA compliance, CBP defense, tariff classification, and Central Valley trade law.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Stockton Tariff Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Your Local Tariff & Customs Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Stockton and San Joaquin County with expert tariff and customs legal services. Stockton serves as a <strong>Central Valley distribution hub and agricultural center</strong>, with deep-water port access and extensive warehousing operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Trade Hub</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep understanding of <strong>San Joaquin County agriculture, wine country, food distribution</strong>, and Central Valley trade operations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Distribution & Logistics</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized in <strong>warehouse operations, distribution centers</strong>, and inland port compliance for Stockton logistics businesses.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Local Stockton Access</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Stockton location</strong> serving San Joaquin County businesses. Understanding of local agricultural and distribution economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Tariff & Customs Services in Stockton
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Code Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Stockton tariff lawyer, we ensure products are correctly classified under the Harmonized Tariff Schedule (HTS). Proper classification can mean the difference between <strong>0% and 25%+ duty rates</strong>. Critical for Central Valley distributors and agricultural importers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification analysis and optimization</li>
                <li>Binding Ruling requests (NY/HQ rulings)</li>
                <li>Tariff engineering for duty minimization</li>
                <li>Classification dispute defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural & Wine Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                San Joaquin County is wine country and agricultural heartland. We provide <strong>FDA food import compliance, USDA agricultural regulations</strong>, TTB wine/beverage permits, and agricultural product tariff classification for Lodi wine region and Central Valley growers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Wine/spirits HTS classification and TTB compliance</li>
                <li>FDA food import and prior notice requirements</li>
                <li>USDA/APHIS agricultural product regulations</li>
                <li>Agricultural equipment import compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP audits Central Valley distributors and agricultural importers. Our Stockton customs attorney team defends you through Focused Assessments, Quick Response Audits, and penalty proceedings. We've helped Stockton clients <strong>reduce penalties by 75% or more</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense</li>
                <li>Prior Disclosure filings to cap penalties</li>
                <li>CF-28/CF-29 response preparation</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Warehouse & Distribution Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Stockton is a major distribution hub with extensive warehouse operations. We provide <strong>bonded warehouse compliance, customs broker oversight</strong>, and warehouse recordkeeping advisory for Stockton distribution centers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Bonded warehouse compliance (Class 2/5/6)</li>
                <li>Warehouse recordkeeping audits</li>
                <li>Customs broker oversight and compliance</li>
                <li>Distribution center CBP compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                China tariffs (Section 301) add <strong>7.5% to 25%</strong> to import costs. Our Stockton trade law firm helps Central Valley businesses navigate exclusions, supply chain restructuring, and tariff engineering.
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
                The Uyghur Forced Labor Prevention Act (UFLPA) has resulted in <strong>$2+ billion in detained goods</strong>. Our Stockton attorney team helps Central Valley businesses implement supply chain due diligence and defend against UFLPA detentions.
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

      {/* Service Areas from Stockton */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our Stockton Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* San Joaquin County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Joaquin County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve all San Joaquin County communities:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Stockton', 'Lodi', 'Tracy', 'Manteca',
                  'Lathrop', 'Ripon', 'Escalon', 'Linden',
                  'Farmington', 'French Camp', 'Woodbridge', 'Thornton',
                  'Lockeford', 'Clements', 'Victor', 'Mountain House'
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
                  'Sacramento', 'Modesto', 'Turlock', 'Merced',
                  'Fresno', 'Visalia', 'Bakersfield', 'Elk Grove',
                  'Roseville', 'Ceres', 'Atwater', 'Los Banos',
                  'Livermore', 'Pleasanton', 'Dublin', 'Antioch'
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
                  <li>Port of Oakland</li>
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
                  <li>Port of Stockton (Inland)</li>
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
                  <li>San Joaquin County</li>
                  <li>Central Valley</li>
                  <li>Sacramento Region</li>
                  <li>Bay Area</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Stockton Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Stockton Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley Trade Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Stockton tariff lawyer, we understand San Joaquin County's agricultural economy, wine country, and distribution operations. We have extensive experience with agricultural trade, food compliance, and warehouse customs regulations.
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
                Distribution and agricultural trade issues often have <strong>strict deadlines</strong>. We prioritize urgent matters and maintain direct communication. Same-day response to CBP notices and urgent customs issues. Call (310) 744-1328.
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
                  <a href="#sacramento-tariff-attorney" className="service-link">
                    <span className="service-link__title">Sacramento</span>
                    <p className="service-link__description">Northern California customs</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#oakland-trade-attorney" className="service-link">
                    <span className="service-link__title">Oakland</span>
                    <p className="service-link__description">Port of Oakland</p>
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
            Contact our Stockton tariff lawyer and Central Valley customs attorney team today. We'll assess your situation, explain your options, and provide a clear path forward.
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

export default StocktonTariffLawyerPage;
