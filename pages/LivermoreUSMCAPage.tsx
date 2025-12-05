import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { Link } from 'react-router-dom';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LivermoreUSMCAPage: React.FC = () => {
  useMeta({
    title: 'Livermore USMCA Attorney | Free Trade Agreement Lawyer Bay Area',
    description: 'Livermore USMCA attorney for free trade agreements. Expert NAFTA replacement, certificate of origin, Regional Value Content compliance. (310) 744-1328.',
    keywords: 'livermore usmca attorney, livermore free trade agreement lawyer, usmca compliance livermore ca, trade agreement attorney bay area, certificate of origin lawyer livermore',
    canonical: 'livermore-usmca-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-usmca.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Livermore USMCA Attorney - Free Trade Agreement & NAFTA Replacement Lawyer',
        description: 'Livermore USMCA attorney specializing in free trade agreement compliance, certificate of origin preparation, and Regional Value Content for Bay Area manufacturers.',
        url: `${siteConfig.siteUrl}/livermore-usmca-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Livermore USMCA Attorney', url: `${siteConfig.siteUrl}/livermore-usmca-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What free trade benefits does USMCA provide for Livermore businesses?',
          answer: 'USMCA provides duty-free treatment for qualifying goods traded between the United States, Mexico, and Canada. Livermore manufacturers, technology companies, and distributors can eliminate import duties entirely by meeting USMCA rules of origin requirements. This creates significant cost savings, improved cash flow, and competitive advantages in North American supply chains.',
        },
        {
          question: 'How do rules of origin work under USMCA?',
          answer: 'USMCA rules of origin establish criteria products must meet to qualify for duty-free treatment. Three main methods: (1) Wholly obtained goods - entirely from North America, (2) Exclusively North American materials, or (3) Product-specific rules requiring tariff shift (change in HS classification) or Regional Value Content (RVC) thresholds ranging from 40-75%. An attorney analyzes your specific products against these rules.',
        },
        {
          question: 'What is Regional Value Content and how is it calculated?',
          answer: 'Regional Value Content (RVC) measures the percentage of North American content in a product. USMCA allows two calculation methods: Transaction Value Method and Net Cost Method. Formula: RVC = [(Product Value - Non-Originating Materials) / Product Value] × 100. Different products have different RVC thresholds. Automotive requires 75%, most other products 40-60%. We help Livermore businesses calculate RVC and structure supply chains for compliance.',
        },
        {
          question: 'Do I need a certificate of origin for USMCA shipments?',
          answer: 'Yes. To claim USMCA preferential duty treatment, the importer must possess a valid certification of origin at the time of importation. USMCA simplified this compared to NAFTA - no specific form is required. Certifications can be prepared by the exporter, producer, or importer and must include required data elements: product description, HS classification, origin criterion, and certifier information. Our attorneys prepare compliant certifications that withstand CBP scrutiny.',
        },
        {
          question: 'What happens if CBP verifies my USMCA origin claims?',
          answer: 'CBP has authority to verify USMCA origin claims through written questionnaires, factory visits, and document requests. You must substantiate origin within 30 days (extendable). If you cannot prove USMCA qualification, CBP denies preferential treatment and assesses normal duties retroactively plus interest. False certifications can result in civil penalties and potential criminal prosecution. We help Livermore businesses maintain proper documentation and successfully respond to CBP verifications.',
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
      <section className="hero" aria-label="Livermore USMCA Attorney Hero">
        <picture className="hero-bg">
          <img
            src="/images/hero-port-background.jpg"
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
          <h1>Livermore USMCA Attorney<br />Free Trade Agreement Lawyer</h1>
          <p className="hero-subtitle">
            Expert USMCA attorney serving Livermore and East Bay manufacturers. Specialized in free trade agreement qualification, certificate of origin compliance, and duty-free trade strategies for Mexico and Canada.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose USMCA Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              USMCA Trade Agreement Excellence
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              USMCA governs over <strong>$1.3 trillion in annual North American trade</strong>. Livermore businesses importing from or exporting to Mexico and Canada need specialized USMCA counsel to maximize duty savings and maintain compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">USMCA Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                We specialize in <strong>USMCA and North American free trade</strong>. Deep knowledge of origin rules, RVC calculations, and certification compliance requirements.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Duty-Free Benefits</h3>
              <p className="text-text-secondary leading-relaxed">
                USMCA enables <strong>0% import duties</strong> for qualifying products. Proper qualification saves Livermore companies thousands to millions annually in duty costs.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Verification Defense</h3>
              <p className="text-text-secondary leading-relaxed">
                Expert representation in <strong>CBP origin verifications</strong>. We help substantiate USMCA claims and prevent retroactive duty assessments and penalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USMCA Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center" style={{ color: '#012169' }}>
            USMCA Services for Livermore Companies
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>USMCA Benefits Analysis</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA replaced NAFTA with <strong>enhanced benefits and stricter compliance requirements</strong>. We analyze Livermore businesses' North American trade to maximize duty savings opportunities.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA vs. NAFTA - key differences and improvements</li>
                <li>Product qualification feasibility assessments</li>
                <li>Duty savings calculations and financial modeling</li>
                <li>Competitive advantage analysis through USMCA</li>
                <li>Long-term trade agreement planning strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>Rules of Origin Qualification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA origin rules in Annex 4-B determine <strong>duty-free qualification</strong>. We analyze product-specific requirements and develop compliant supply chain strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Product-specific rules of origin analysis (Annex 4-B)</li>
                <li>Tariff shift requirements and HS classification strategies</li>
                <li>Regional Value Content (RVC) calculation and optimization</li>
                <li>De minimis provisions for non-originating materials</li>
                <li>Accumulation, roll-up, and material tracing methods</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>Certificate of Origin Services</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA requires a <strong>certification of origin</strong> but offers flexibility in format. We prepare compliant certifications with all required data elements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA certification format design and templates</li>
                <li>Required data elements and legal language</li>
                <li>Origin criterion selection (A, B, C, or D)</li>
                <li>Blanket period certifications for multiple shipments</li>
                <li>Exporter, producer, and importer certification protocols</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>Duty-Free Qualification Planning</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Achieving USMCA qualification requires <strong>strategic supply chain design</strong>. We help Livermore businesses restructure operations to meet origin requirements and maximize savings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>RVC optimization through material sourcing changes</li>
                <li>Production location strategies (US/Mexico/Canada)</li>
                <li>Supplier qualification and certification programs</li>
                <li>Manufacturing process modifications for origin compliance</li>
                <li>Cost-benefit analysis of qualification investments</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>CBP Verification Response</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively verifies USMCA origin claims. <strong>Unsubstantiated claims result in duty assessments and penalties</strong>. We defend Livermore businesses in verification proceedings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Written verification questionnaire preparation</li>
                <li>Production facility visit coordination and defense</li>
                <li>Documentation compilation and legal substantiation</li>
                <li>Coordination with Mexican/Canadian authorities</li>
                <li>Post-verification compliance improvement programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center" style={{ color: '#012169' }}>
            Related Trade Agreement Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond" style={{ color: '#012169' }}>Trade Compliance</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Import Compliance</span>
                    <div className="triangle-slide" style={{ position: 'relative', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="#3FBB94" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">Tariff Classification</span>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond" style={{ color: '#012169' }}>CBP Defense</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense</span>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond" style={{ color: '#012169' }}>Bay Area</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/silicon-valley-trade-lawyer" className="service-link">
                    <span className="service-link__title">Silicon Valley Trade</span>
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
      <RelatedCityPages currentCity="Livermore" region="bay-area" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white" style={{ backgroundColor: '#012169' }}>
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free USMCA Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Livermore USMCA attorneys today. We'll evaluate your Mexico and Canada trade, analyze qualification opportunities, and develop strategies to maximize duty-free benefits under USMCA.
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

export default LivermoreUSMCAPage;
