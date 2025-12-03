import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const WalnutCreekUSMCAPage: React.FC = () => {
  useMeta({
    title: 'Walnut Creek USMCA Attorney | Free Trade Agreement Lawyer CA',
    description: 'Walnut Creek USMCA attorney for free trade agreements. Expert NAFTA replacement, Regional Value Content, certificate of origin compliance. (310) 744-1328.',
    keywords: 'walnut creek usmca attorney, walnut creek free trade agreement lawyer, usmca compliance walnut creek ca, trade agreement attorney contra costa, certificate of origin lawyer walnut creek',
    canonical: 'walnut-creek-usmca-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-usmca.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Walnut Creek USMCA Attorney - Free Trade Agreement & NAFTA Replacement Lawyer',
        description: 'Walnut Creek USMCA attorney specializing in free trade agreement compliance, certificate of origin services, and duty-free qualification for Contra Costa businesses.',
        url: `${siteConfig.siteUrl}/walnut-creek-usmca-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Walnut Creek USMCA Attorney', url: `${siteConfig.siteUrl}/walnut-creek-usmca-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'How does USMCA benefit Walnut Creek importers and exporters?',
          answer: 'USMCA provides duty-free treatment for qualifying goods traded between the United States, Mexico, and Canada. Walnut Creek businesses engaged in North American trade can eliminate import duties entirely by meeting USMCA rules of origin. This results in substantial cost savings (often 5-25% of product value), improved cash flow, reduced landed costs, and competitive pricing advantages. Industries benefiting include manufacturing, technology, distribution, and professional services supporting trade.',
        },
        {
          question: 'What is the difference between USMCA and NAFTA?',
          answer: 'USMCA replaced NAFTA on July 1, 2020, with significant changes: (1) Higher Regional Value Content requirements for automotive (75% vs 62.5%), (2) New Labor Value Content requirements for auto, (3) Stricter textile yarn-forward rules, (4) Elimination of NAFTA Certificate of Origin form - replaced with flexible certification, (5) Enhanced customs enforcement and verification procedures, (6) Updated product-specific rules of origin, and (7) New digital trade and intellectual property provisions. USMCA maintains duty-free benefits but requires stricter compliance.',
        },
        {
          question: 'What is Regional Value Content and why does it matter?',
          answer: 'Regional Value Content (RVC) measures the percentage of North American content in a product. USMCA requires specific RVC thresholds for qualification: automotive products need 75%, most manufactured goods require 40-60%. RVC is calculated using either Transaction Value Method or Net Cost Method. Meeting RVC requirements is essential for duty-free treatment. We help Walnut Creek businesses calculate RVC accurately, trace materials through supply chains, and restructure sourcing to achieve required percentages.',
        },
        {
          question: 'Who can prepare a USMCA certificate of origin?',
          answer: 'Under USMCA, three parties can prepare and sign certifications of origin: (1) Exporters - most common for direct shipments, (2) Producers - when exporter lacks origin information, or (3) Importers - when neither exporter nor producer will certify. The certifier must have knowledge or possess documentation supporting the origin claim. Unlike NAFTA which required exporters/producers only, USMCA\'s importer certification option provides flexibility but also places legal responsibility on importers.',
        },
        {
          question: 'What documentation must I maintain to support USMCA claims?',
          answer: 'USMCA requires maintaining records for 5 years demonstrating origin qualification. Essential documentation includes: (1) Bills of materials showing all components, (2) Purchase invoices for materials with origin, (3) Production records and manufacturing processes, (4) RVC calculations with supporting data, (5) Supplier certifications of origin, (6) HS classification analysis, (7) Product-specific rule compliance evidence, and (8) Certification of origin. We help Walnut Creek businesses develop comprehensive USMCA documentation programs.',
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
      <section className="hero" aria-label="Walnut Creek USMCA Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Walnut Creek USMCA Attorney<br />Free Trade Agreement Lawyer</h1>
          <p className="hero-subtitle">
            Expert USMCA attorney serving Walnut Creek and Contra Costa businesses. Specialized in free trade agreement qualification, certificate of origin preparation, Regional Value Content optimization, and duty-free North American trade.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose USMCA Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              USMCA Trade Agreement Leadership
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              USMCA governs <strong>$1.3 trillion in annual North American commerce</strong>. Walnut Creek businesses importing from or exporting to Mexico and Canada need specialized USMCA legal counsel to maximize duty-free benefits and ensure compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">USMCA Concentration</h3>
              <p className="text-text-secondary leading-relaxed">
                We focus exclusively on <strong>USMCA and free trade agreements</strong>. Extensive expertise in origin rules, certification requirements, and compliance frameworks.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Duty-Free Advantages</h3>
              <p className="text-text-secondary leading-relaxed">
                USMCA enables <strong>complete duty elimination</strong> for qualifying goods. Proper compliance saves Walnut Creek businesses thousands to millions in annual duty expenses.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Verification Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Proven track record defending <strong>CBP USMCA verifications</strong>. We help substantiate origin claims and prevent duty assessments and penalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USMCA Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center" style={{ color: '#012169' }}>
            USMCA Services for Walnut Creek Companies
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>USMCA Benefits Analysis</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA provides <strong>duty-free access to the $28 trillion North American market</strong>. We help Walnut Creek businesses evaluate qualification opportunities and maximize trade agreement benefits.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA advantages vs. most-favored-nation (MFN) duty rates</li>
                <li>Product-specific qualification feasibility assessments</li>
                <li>Comprehensive duty savings calculations and projections</li>
                <li>Competitive advantage analysis through preferential treatment</li>
                <li>Long-term North American trade strategy development</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>Rules of Origin Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA origin rules are <strong>complex and product-specific</strong>. We analyze requirements in Annex 4-B and develop compliant sourcing and production strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Product-specific rules of origin analysis (Annex 4-B)</li>
                <li>Tariff shift requirements and HS classification strategies</li>
                <li>Regional Value Content (RVC) calculation methodologies</li>
                <li>Product-specific process requirements and exceptions</li>
                <li>De minimis provisions and cumulation methodologies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>Certificate of Origin Services</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA requires <strong>certifications of origin</strong> but allows flexible formats. We prepare legally compliant certifications with all mandatory data elements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA certification template development and formatting</li>
                <li>Required data element compliance and legal language</li>
                <li>Origin criterion determination and documentation (A, B, C, D)</li>
                <li>Blanket period certifications for recurring shipments</li>
                <li>Certification authority protocols (exporter/producer/importer)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>Duty-Free Qualification Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Achieving USMCA qualification requires <strong>strategic supply chain planning</strong>. We help Walnut Creek businesses restructure operations to meet origin requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>RVC optimization through North American sourcing initiatives</li>
                <li>Production location analysis and optimization (USMCA territory)</li>
                <li>Supplier certification programs and documentation systems</li>
                <li>Manufacturing process modifications for origin compliance</li>
                <li>Cost-benefit analysis of qualification investments and changes</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>CBP Verification Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively verifies USMCA origin claims. <strong>Unsubstantiated claims result in duty liabilities</strong>. We represent Walnut Creek businesses in verification proceedings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Written verification questionnaire response preparation</li>
                <li>Production facility verification visit coordination</li>
                <li>Comprehensive documentation compilation and legal analysis</li>
                <li>Mexican/Canadian competent authority cooperation</li>
                <li>Post-verification compliance program enhancement</li>
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
                  <a href="#regulatory-compliance-advisory" className="service-link">
                    <span className="service-link__title">Import Compliance</span>
                    <div className="triangle-slide" style={{ position: 'relative', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="#3FBB94" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#tariffs-duties-classification-guide" className="service-link">
                    <span className="service-link__title">Tariff Classification</span>
                    <div className="triangle-slide" style={{ position: 'relative', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="#3FBB94" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond" style={{ color: '#012169' }}>CBP Defense</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense</span>
                    <div className="triangle-slide" style={{ position: 'relative', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="#3FBB94" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond" style={{ color: '#012169' }}>Bay Area</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#oakland-trade-attorney" className="service-link">
                    <span className="service-link__title">Oakland Port Trade</span>
                    <div className="triangle-slide" style={{ position: 'relative', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="#3FBB94" strokeWidth="2">
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

      {/* Related City Pages */}
      <RelatedCityPages currentCity="Walnut Creek" region="bay-area" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white" style={{ backgroundColor: '#012169' }}>
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free USMCA Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Walnut Creek USMCA attorneys today. We'll evaluate your North American trade, analyze duty-free qualification opportunities, and develop comprehensive strategies to maximize USMCA benefits while ensuring full compliance.
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

export default WalnutCreekUSMCAPage;
