import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const TracyUSMCAPage: React.FC = () => {
  useMeta({
    title: 'Tracy USMCA Attorney | Free Trade Agreement Lawyer California',
    description: 'Tracy USMCA attorney specializing in free trade agreements, NAFTA replacement, certificate of origin compliance. Expert trade agreement lawyer. (310) 744-1328.',
    keywords: 'tracy usmca attorney, tracy free trade agreement lawyer, usmca compliance tracy ca, trade agreement attorney california, certificate of origin lawyer tracy',
    canonical: 'tracy-usmca-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-usmca.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Tracy USMCA Attorney - Free Trade Agreement & Origin Compliance Lawyer',
        description: 'Tracy USMCA attorney providing expert free trade agreement services, certificate of origin preparation, and NAFTA replacement compliance for Central Valley businesses.',
        url: `${siteConfig.siteUrl}/tracy-usmca-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Tracy USMCA Attorney', url: `${siteConfig.siteUrl}/tracy-usmca-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What is USMCA and how does it benefit Tracy businesses?',
          answer: 'USMCA (United States-Mexico-Canada Agreement) replaced NAFTA on July 1, 2020, providing duty-free treatment for qualifying goods traded between the US, Mexico, and Canada. Tracy businesses engaged in manufacturing, agriculture, and distribution can eliminate import duties by qualifying products under USMCA rules of origin. This results in significant cost savings and competitive advantages in North American trade.',
        },
        {
          question: 'How do I qualify products for USMCA duty-free treatment?',
          answer: 'Products qualify for USMCA through meeting origin rules: (1) Goods wholly obtained in North America, (2) Products made entirely from North American materials, or (3) Products meeting product-specific rules of origin through tariff shift or Regional Value Content (RVC) requirements. A USMCA attorney analyzes your supply chain, calculates RVC, and prepares compliant certificates of origin to claim duty-free treatment.',
        },
        {
          question: 'What are the rules of origin under USMCA?',
          answer: 'USMCA rules of origin determine whether products qualify for preferential duty-free treatment. Requirements include: tariff classification changes (tariff shift), Regional Value Content thresholds (40-75% depending on product), product-specific manufacturing processes, and de minimis provisions allowing up to 10% non-originating materials. Automotive products face the strictest requirements with 75% RVC, Labor Value Content, and steel/aluminum sourcing rules.',
        },
        {
          question: 'Does my business need a certificate of origin for USMCA?',
          answer: 'Yes. To claim USMCA duty-free treatment, importers must have a valid certification of origin. Unlike NAFTA, USMCA does not require a specific form - certifications can be on company letterhead, commercial invoices, or any document containing required data elements: certifier information, product details, HS classification, origin criterion (A, B, C, or D), and certification statement. We help Tracy businesses prepare legally compliant USMCA certifications.',
        },
        {
          question: 'Can CBP audit my USMCA claims?',
          answer: 'Yes. US Customs and Border Protection actively verifies USMCA origin claims through written questionnaires, production facility visits, and documentation requests. If you cannot substantiate USMCA qualification, CBP will deny preferential treatment and assess regular duties retroactively plus interest and penalties. Our Tracy USMCA attorneys help maintain proper documentation and successfully defend CBP verification inquiries.',
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
      <section className="hero" aria-label="Tracy USMCA Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Tracy USMCA Attorney<br />Free Trade Agreement Lawyer</h1>
          <p className="hero-subtitle">
            Expert USMCA attorney serving Tracy and Central Valley businesses. Specialized in free trade agreement qualification, certificate of origin compliance, Regional Value Content, and duty-free trade with Mexico and Canada.
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
              USMCA Free Trade Agreement Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              USMCA enables <strong>duty-free trade worth $1.3 trillion annually</strong> between the US, Mexico, and Canada. Tracy businesses need expert USMCA compliance counsel to maximize savings and avoid costly CBP penalties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Free Trade Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                We focus exclusively on <strong>USMCA and free trade agreements</strong>. Deep expertise in origin qualification, certification requirements, and CBP compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Duty Elimination</h3>
              <p className="text-text-secondary leading-relaxed">
                USMCA provides <strong>0% duty rates</strong> for qualifying goods. Proper qualification eliminates thousands to millions in annual duty costs for Tracy companies.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CBP Defense</h3>
              <p className="text-text-secondary leading-relaxed">
                Expert defense of <strong>CBP origin verifications</strong>. We help Tracy businesses substantiate USMCA claims and avoid retroactive duty assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USMCA Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center" style={{ color: '#012169' }}>
            USMCA Services for Tracy Businesses
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>USMCA Benefits & Qualification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA provides <strong>duty-free treatment for qualifying goods</strong> traded between the US, Mexico, and Canada. We help Tracy businesses determine qualification and implement compliant certification programs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA vs. NAFTA differences and new requirements</li>
                <li>Product qualification analysis and feasibility studies</li>
                <li>Duty savings calculations and ROI projections</li>
                <li>Supply chain restructuring for USMCA compliance</li>
                <li>Multi-product USMCA certification strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>Rules of Origin Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA origin rules determine whether products qualify for <strong>duty-free treatment</strong>. We analyze product-specific rules in USMCA Annex 4-B and structure compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Tariff shift requirements (change in tariff classification)</li>
                <li>Regional Value Content (RVC) calculations and optimization</li>
                <li>Product-specific manufacturing processes</li>
                <li>De minimis provisions and exceptions</li>
                <li>Accumulation and materials tracing methodologies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>Certificate of Origin Preparation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA requires a <strong>certification of origin</strong> to claim duty-free treatment. Unlike NAFTA, there is no specific form - but certifications must contain required data elements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA certification format and data requirements</li>
                <li>Origin criterion determination (A, B, C, or D)</li>
                <li>Single shipment vs. blanket period certifications</li>
                <li>Exporter, producer, and importer certification authority</li>
                <li>Electronic certification and invoice integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>Duty-Free Qualification Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Maximizing USMCA qualification requires <strong>strategic supply chain planning</strong>. We help Tracy businesses restructure operations to meet origin requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>RVC calculation methods (Transaction Value vs. Net Cost)</li>
                <li>Material sourcing strategies for origin compliance</li>
                <li>Production location optimization (US/Mexico/Canada)</li>
                <li>Supplier certification and documentation programs</li>
                <li>Long-term USMCA compliance planning</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond" style={{ color: '#012169' }}>CBP Verification Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                US Customs actively verifies USMCA claims. <strong>Failure to substantiate results in duty assessments and penalties</strong>. We defend Tracy businesses in verification proceedings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP verification questionnaire responses</li>
                <li>Production facility visit coordination and preparation</li>
                <li>Documentation compilation and substantiation</li>
                <li>Mexican/Canadian competent authority cooperation</li>
                <li>Post-verification corrective action implementation</li>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond" style={{ color: '#012169' }}>Trade Compliance</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#regulatory-compliance-advisory" className="service-link">
                    <span className="service-link__title">Compliance Programs</span>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond" style={{ color: '#012169' }}>Central Valley</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#central-valley-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Central Valley Trade</span>
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
      <RelatedCityPages currentCity="Tracy" region="central-valley" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white" style={{ backgroundColor: '#012169' }}>
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free USMCA Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Tracy USMCA attorneys today. We'll analyze your North American trade, assess qualification for duty-free treatment, and develop strategies to maximize cost savings under USMCA.
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

export default TracyUSMCAPage;
