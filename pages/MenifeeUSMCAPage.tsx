import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const MenifeeUSMCAPage: React.FC = () => {
  useMeta({
    title: 'Menifee USMCA Attorney | Free Trade Agreement Lawyer California',
    description: 'Menifee USMCA attorney for free trade agreements. Expert NAFTA replacement, certificate of origin, duty-free qualification compliance. (310) 744-1328.',
    keywords: 'menifee usmca attorney, menifee free trade agreement lawyer, usmca compliance menifee ca, trade agreement attorney riverside county, certificate of origin lawyer menifee',
    canonical: 'menifee-usmca-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-usmca.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Menifee USMCA Attorney - Free Trade Agreement & Certificate of Origin Lawyer',
        description: 'Menifee USMCA attorney providing expert free trade agreement services, certificate of origin compliance, and duty-free qualification for Inland Empire businesses.',
        url: `${siteConfig.siteUrl}/menifee-usmca-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Menifee USMCA Attorney', url: `${siteConfig.siteUrl}/menifee-usmca-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'How can USMCA benefit Menifee and Inland Empire businesses?',
          answer: 'USMCA provides duty-free treatment for qualifying goods traded between the United States, Mexico, and Canada. Menifee businesses in manufacturing, distribution, and logistics can eliminate import duties by qualifying products under USMCA rules of origin. This creates significant cost savings (typically 5-25% of product value), improves supply chain efficiency, enhances competitiveness, and provides predictable duty-free access to the $28 trillion North American market.',
        },
        {
          question: 'What products qualify for USMCA duty-free treatment?',
          answer: 'Products qualify for USMCA if they meet origin requirements: (1) Wholly obtained or produced entirely in North America (agricultural products, minerals, etc.), (2) Produced exclusively from originating North American materials, or (3) Meet product-specific rules of origin in USMCA Annex 4-B requiring tariff shift and/or Regional Value Content. Most manufactured goods qualify under Criterion C through combinations of tariff classification changes and RVC thresholds ranging from 40-75%.',
        },
        {
          question: 'What is a USMCA certificate of origin and who prepares it?',
          answer: 'A USMCA certification of origin is a document certifying that goods qualify for preferential duty-free treatment. Unlike NAFTA, USMCA does not require a specific form - certifications can be on company letterhead, commercial invoices, or any document. Three parties can certify: exporters, producers, or importers. The certification must include: certifier information, product details, HS classification, origin criterion (A, B, C, or D), and authorized signature. Certifications remain valid for shipments within specified periods up to 12 months.',
        },
        {
          question: 'How do I calculate Regional Value Content under USMCA?',
          answer: 'Regional Value Content (RVC) measures North American content percentage. Two calculation methods: (1) Transaction Value Method: RVC = [(Transaction Value - Value of Non-Originating Materials) / Transaction Value] × 100, or (2) Net Cost Method (required for automotive): RVC = [(Net Cost - Value of Non-Originating Materials) / Net Cost] × 100. Different products have different RVC thresholds. We help Menifee businesses calculate RVC accurately, trace materials, and optimize sourcing to achieve required percentages.',
        },
        {
          question: 'What are the penalties for incorrect USMCA certifications?',
          answer: 'Incorrect USMCA certifications result in serious consequences: (1) Denial of preferential duty-free treatment and assessment of normal duties retroactively, (2) Interest on unpaid duties from entry date, (3) Civil penalties ranging from negligence (actual loss or 2× duty loss) to gross negligence/fraud (4× duty loss or domestic value), (4) Criminal penalties for fraudulent statements up to $10,000 and 5 years imprisonment, and (5) Increased CBP scrutiny on all future imports. We help Menifee businesses maintain accurate certifications and documentation.',
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
      <section className="hero" aria-label="Menifee USMCA Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Menifee USMCA Attorney<br />Free Trade Agreement Lawyer</h1>
          <p className="hero-subtitle">
            Expert USMCA attorney serving Menifee and Inland Empire businesses. Specialized in free trade agreement qualification, certificate of origin compliance, Regional Value Content strategies, and duty-free trade with Mexico and Canada.
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
              USMCA Free Trade Agreement Proficiency
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              USMCA enables <strong>$1.3 trillion in annual duty-free North American trade</strong>. Menifee and Inland Empire businesses need expert USMCA counsel to maximize cost savings and maintain compliance with origin requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Trade Agreement Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We specialize in <strong>USMCA and free trade agreements</strong>. Comprehensive knowledge of origin qualification, certification protocols, and CBP compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Duty Savings</h3>
              <p className="text-text-secondary leading-relaxed">
                USMCA provides <strong>0% duty rates</strong> for qualifying products. Proper qualification saves Menifee businesses significant annual duty expenses and improves margins.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CBP Defense</h3>
              <p className="text-text-secondary leading-relaxed">
                Successful defense of <strong>CBP USMCA verifications</strong>. We help Menifee businesses substantiate origin claims and avoid retroactive duty assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USMCA Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center" style={{ color: '#012169' }}>
            USMCA Services for Menifee Businesses
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>USMCA Benefits & Qualification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA provides <strong>preferential duty-free treatment</strong> for North American trade. We help Menifee businesses assess qualification and implement certification programs for maximum savings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA benefits vs. normal column 1 duty rates</li>
                <li>Product qualification feasibility analysis and planning</li>
                <li>Comprehensive duty savings calculations and ROI analysis</li>
                <li>Supply chain restructuring for USMCA compliance</li>
                <li>Strategic North American trade planning and optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>Rules of Origin Analysis</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA Annex 4-B contains <strong>detailed product-specific origin rules</strong>. We analyze requirements for your products and develop compliant sourcing strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Product-specific rules of origin research (Annex 4-B)</li>
                <li>Tariff shift requirements and HS classification planning</li>
                <li>Regional Value Content (RVC) thresholds and methodologies</li>
                <li>Product-specific manufacturing process requirements</li>
                <li>De minimis provisions and accumulation strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>Certificate of Origin Preparation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA requires <strong>certifications of origin</strong> with specific data elements. We prepare compliant certifications that withstand CBP scrutiny and verification.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA certification format design and templates</li>
                <li>Required data element compliance and legal accuracy</li>
                <li>Origin criterion determination and substantiation (A, B, C, D)</li>
                <li>Blanket period certifications for ongoing shipments</li>
                <li>Certification authority and responsibility (exporter/producer/importer)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>Duty-Free Qualification Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Maximizing USMCA qualification requires <strong>strategic supply chain planning</strong>. We help Menifee businesses restructure to meet origin requirements and achieve duty-free status.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>RVC optimization through North American material sourcing</li>
                <li>Production location strategies within USMCA territory</li>
                <li>Supplier certification and origin documentation programs</li>
                <li>Manufacturing process modifications for compliance</li>
                <li>Cost-benefit analysis of qualification initiatives</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>CBP Verification Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP verifies USMCA claims through audits and inquiries. <strong>Failed verifications result in duty liabilities and penalties</strong>. We defend Menifee businesses in verification proceedings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Written verification questionnaire response preparation</li>
                <li>Production facility verification visit coordination and defense</li>
                <li>Documentation compilation and legal substantiation</li>
                <li>Coordination with Mexican/Canadian competent authorities</li>
                <li>Post-verification compliance program development</li>
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
                  <a href="#regulatory-compliance-advisory" className="service-link">
                    <span className="service-link__title">Trade Compliance</span>
                    <div className="triangle-slide" style={{ position: 'relative', right: '-96px', transition: 'right 0.3s ease' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="#3FBB94" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#tariffs-duties-classification-guide" className="service-link">
                    <span className="service-link__title">HTS Classification</span>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond" style={{ color: '#012169' }}>Customs Defense</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#customs-defense-litigation" className="service-link">
                    <span className="service-link__title">CBP Audit Defense</span>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond" style={{ color: '#012169' }}>Inland Empire</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#inland-empire-customs-attorney" className="service-link">
                    <span className="service-link__title">Inland Empire Trade</span>
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
      <RelatedCityPages currentCity="Menifee" region="inland-empire" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white" style={{ backgroundColor: '#012169' }}>
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free USMCA Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Menifee USMCA attorneys today. We'll analyze your Mexico and Canada trade, evaluate duty-free qualification opportunities, and develop comprehensive strategies to maximize USMCA benefits and ensure full compliance.
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

export default MenifeeUSMCAPage;
