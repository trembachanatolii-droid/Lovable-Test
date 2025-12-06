import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { Link } from 'react-router-dom';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const PleasantonUSMCAPage: React.FC = () => {
  useMeta({
    title: 'Pleasanton USMCA Attorney | Free Trade Agreement Lawyer California',
    description: 'Pleasanton USMCA attorney for free trade agreements. Expert certificate of origin, Regional Value Content, NAFTA replacement compliance. (310) 744-1328.',
    keywords: 'pleasanton usmca attorney, pleasanton free trade agreement lawyer, usmca compliance pleasanton ca, trade agreement attorney tri-valley, certificate of origin lawyer pleasanton',
    canonical: 'pleasanton-usmca-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-usmca.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Pleasanton USMCA Attorney - Free Trade Agreement & Certificate of Origin Lawyer',
        description: 'Pleasanton USMCA attorney providing expert free trade agreement services, certificate of origin compliance, and duty-free qualification for Tri-Valley businesses.',
        url: `${siteConfig.siteUrl}/pleasanton-usmca-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Pleasanton USMCA Attorney', url: `${siteConfig.siteUrl}/pleasanton-usmca-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What is USMCA and how does it help Pleasanton businesses?',
          answer: 'USMCA (United States-Mexico-Canada Agreement) is the free trade agreement replacing NAFTA that enables duty-free trade between the US, Mexico, and Canada. Pleasanton businesses engaged in manufacturing, technology, and distribution can eliminate import duties by qualifying products under USMCA origin rules. This provides substantial cost savings, improved supply chain efficiency, and competitive advantages in North American markets.',
        },
        {
          question: 'What are the USMCA rules of origin requirements?',
          answer: 'USMCA rules of origin establish qualification criteria for duty-free treatment. Products must meet one of three requirements: (1) Wholly obtained in North America (mined, grown, manufactured entirely), (2) Produced exclusively from North American originating materials, or (3) Meet product-specific rules of origin requiring tariff shift (change in HS code) and/or Regional Value Content (RVC) thresholds. Different products have different requirements - automotive requires 75% RVC, most others 40-60%.',
        },
        {
          question: 'How do I calculate Regional Value Content for USMCA?',
          answer: 'Regional Value Content (RVC) measures the percentage of North American value in a product. Two calculation methods: (1) Transaction Value Method: [(Transaction Value - Non-Originating Materials) / Transaction Value] × 100, or (2) Net Cost Method (required for automotive): [(Net Cost - Non-Originating Materials) / Net Cost] × 100. We help Pleasanton businesses calculate RVC, trace materials, and restructure supply chains to achieve required thresholds.',
        },
        {
          question: 'What information must be included in a USMCA certificate of origin?',
          answer: 'USMCA certifications must include: (1) Certifier name, title, address, phone, email, (2) Exporter/Producer/Importer information, (3) Product description and 6-digit HS classification, (4) Origin criterion (A, B, C, or D), (5) Blanket period if applicable (up to 12 months), (6) Authorized signature and date. Unlike NAFTA, no specific form is required - certifications can be on letterhead, invoices, or any document. Our attorneys prepare legally compliant certifications.',
        },
        {
          question: 'What are the consequences of incorrect USMCA certifications?',
          answer: 'Incorrect USMCA certifications can result in serious penalties: (1) Denial of preferential duty-free treatment, (2) Assessment of regular duties retroactively plus interest, (3) Civil penalties up to domestic value of merchandise for negligence or gross negligence, (4) Criminal penalties for fraud or false statements, and (5) Increased CBP scrutiny on future shipments. We help Pleasanton businesses maintain accurate certifications and defend CBP verification proceedings.',
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
      <section className="hero" aria-label="Pleasanton USMCA Attorney Hero">
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
          <h1>Pleasanton USMCA Attorney<br />Free Trade Agreement Lawyer</h1>
          <p className="hero-subtitle">
            Expert USMCA attorney serving Pleasanton and Tri-Valley businesses. Specialized in free trade agreement qualification, certificate of origin preparation, Regional Value Content compliance, and duty-free trade with Mexico and Canada.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact#schedule-consultation" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose USMCA Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              USMCA Free Trade Agreement Mastery
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              USMCA facilitates over <strong>$1.3 trillion in North American trade annually</strong>. Pleasanton businesses need expert USMCA attorneys to unlock duty-free benefits and maintain strict compliance with origin requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Trade Agreement Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We concentrate on <strong>USMCA and free trade agreements</strong>. Comprehensive expertise in origin qualification, certification protocols, and compliance strategies.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost Savings</h3>
              <p className="text-text-secondary leading-relaxed">
                USMCA provides <strong>complete duty elimination</strong> for qualifying products. Proper qualification saves Pleasanton companies substantial annual duty expenses.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CBP Representation</h3>
              <p className="text-text-secondary leading-relaxed">
                Proven success defending <strong>CBP USMCA verifications</strong>. We help substantiate origin claims and avoid duty assessments and penalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USMCA Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center" style={{ color: '#012169' }}>
            USMCA Services for Pleasanton Businesses
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>USMCA Benefits & Qualification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA provides <strong>duty-free treatment for North American trade</strong>. We help Pleasanton businesses determine product qualification and implement certification programs for maximum savings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA advantages over NAFTA and MFN duty treatment</li>
                <li>Product-by-product qualification feasibility analysis</li>
                <li>Duty savings projections and financial impact modeling</li>
                <li>Supply chain optimization for USMCA compliance</li>
                <li>Strategic planning for long-term trade agreement benefits</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>Rules of Origin Analysis</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA Annex 4-B contains <strong>product-specific rules of origin</strong> that determine duty-free qualification. We analyze requirements for your specific products and materials.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Product-specific rules of origin research and interpretation</li>
                <li>Tariff shift requirements (change in tariff classification)</li>
                <li>Regional Value Content (RVC) thresholds and calculations</li>
                <li>Combination rules (tariff shift plus RVC)</li>
                <li>De minimis allowances for non-originating materials (10%)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>Certificate of Origin Preparation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA requires a <strong>certification of origin</strong> but provides flexibility. We prepare compliant certifications with all mandatory data elements to withstand CBP review.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA certification templates and formatting</li>
                <li>Required data elements and legal compliance</li>
                <li>Origin criterion selection and documentation (A, B, C, D)</li>
                <li>Blanket certifications covering 12-month periods</li>
                <li>Certification authority (exporter, producer, importer roles)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>Duty-Free Qualification Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Achieving USMCA qualification often requires <strong>strategic supply chain adjustments</strong>. We help Pleasanton businesses restructure operations to meet origin requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>RVC optimization through North American material sourcing</li>
                <li>Production location analysis (US vs. Mexico vs. Canada)</li>
                <li>Supplier certification and documentation systems</li>
                <li>Manufacturing process changes for origin compliance</li>
                <li>Investment analysis for qualification improvements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>CBP Verification Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP verifies USMCA origin claims through inquiries and audits. <strong>Failed verifications result in duty assessments</strong>. We defend Pleasanton businesses in verification proceedings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP verification questionnaire responses and strategy</li>
                <li>Production facility visit preparation and representation</li>
                <li>Documentation gathering and legal substantiation</li>
                <li>Coordination with Mexican/Canadian competent authorities</li>
                <li>Post-verification compliance enhancement programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center" style={{ color: '#012169' }}>
            Related Trade Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond" style={{ color: '#012169' }}>Compliance</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Trade Compliance Programs</span>
                    <div className="triangle-slide" style={{ position: 'relative', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="#3FBB94" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">HTS Classification</span>
                    <div className="triangle-slide" style={{ position: 'relative', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="#3FBB94" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond" style={{ color: '#012169' }}>Customs Defense</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/customs-defense" className="service-link">
                    <span className="service-link__title">CBP Audit Defense</span>
                    <div className="triangle-slide" style={{ position: 'relative', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="#3FBB94" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond" style={{ color: '#012169' }}>Bay Area Trade</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/san-francisco-customs-attorney" className="service-link">
                    <span className="service-link__title">San Francisco Customs</span>
                    <div className="triangle-slide" style={{ position: 'relative', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="#3FBB94" strokeWidth="2">
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

      {/* Related City Pages */}
      <RelatedCityPages currentCity="Pleasanton" region="bay-area" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white" style={{ backgroundColor: '#012169' }}>
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free USMCA Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Pleasanton USMCA attorneys today. We'll analyze your Mexico and Canada trade, evaluate qualification for duty-free treatment, and develop comprehensive strategies to maximize USMCA benefits.
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

export default PleasantonUSMCAPage;
