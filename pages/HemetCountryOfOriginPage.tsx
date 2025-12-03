import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { Link } from 'react-router-dom';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const HemetCountryOfOriginPage: React.FC = () => {
  useMeta({
    title: 'Hemet Country of Origin Attorney | Product Origin Determination CA',
    description: 'Hemet country of origin attorney providing expert legal counsel on substantial transformation, marking requirements, and origin determination. Call (310) 744-1328.',
    keywords: 'country of origin attorney hemet, product origin lawyer hemet, substantial transformation hemet, marking requirements attorney hemet, origin determination hemet, trade lawyer hemet',
    canonical: 'hemet-country-of-origin-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-hemet.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Hemet Country of Origin Attorney - Product Origin Determination Legal Services',
        description: 'Hemet country of origin attorney providing expert legal representation for businesses navigating substantial transformation, marking requirements, and origin determination compliance.',
        url: `${siteConfig.siteUrl}/hemet-country-of-origin-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Hemet Country of Origin Attorney', url: `${siteConfig.siteUrl}/hemet-country-of-origin-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What is country of origin determination and why does it matter?',
          answer: 'Country of origin determination establishes where a product is "made" for customs purposes. This affects tariff rates, quota eligibility, government procurement preferences, and trade agreement benefits. Incorrect origin claims can result in CBP penalties, duty assessments, and shipment delays. Our Hemet country of origin attorney helps businesses correctly determine and document product origin.',
        },
        {
          question: 'What is substantial transformation?',
          answer: 'Substantial transformation is the legal test for determining country of origin. A product undergoes substantial transformation when manufacturing or processing in a country results in a new and different article of commerce with a distinct name, character, and use. Our Hemet origin attorney analyzes your manufacturing process to determine if substantial transformation occurred.',
        },
        {
          question: 'What are country of origin marking requirements?',
          answer: 'U.S. law requires imported products to be marked with their country of origin in a conspicuous place that is legible, indelible, and permanent. The marking must survive normal distribution and reach the ultimate purchaser. Violations can result in marking duties of 10% ad valorem, CBP holds, and re-exportation. Our firm ensures your marking compliance.',
        },
        {
          question: 'How do you help with USMCA and trade agreement origin?',
          answer: 'Trade agreements like USMCA (United States-Mexico-Canada Agreement) have specific rules of origin that differ from general substantial transformation rules. We analyze product-specific rules, regional value content calculations, and certify USMCA origin for duty-free treatment. We also handle FTA origin for agreements with Korea, Chile, Australia, and other countries.',
        },
        {
          question: 'What industries do you serve from your Hemet office?',
          answer: 'From Hemet, we represent manufacturers and importers across all industries including automotive parts, electronics, textiles and apparel, consumer goods, industrial equipment, and food products. We provide country of origin opinions, marking compliance reviews, substantial transformation analyses, and CBP ruling requests.',
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
      <section className="hero" aria-label="Hemet Country of Origin Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Hemet Country of Origin Attorney<br />Product Origin Determination Expert</h1>
          <p className="hero-subtitle">
            Hemet country of origin attorney providing expert legal counsel on substantial transformation, marking requirements, and origin determination for California manufacturers and importers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Hemet Country of Origin Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Expert Country of Origin Legal Services
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Hemet and Riverside County businesses with specialized country of origin legal services. Our firm provides <strong>expert analysis and compliance guidance</strong> for product origin determination, substantial transformation opinions, and marking requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Specialized Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Focus <strong>exclusively on customs and trade law</strong>, including country of origin determinations, substantial transformation analysis, and marking compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CBP Ruling Experience</h3>
              <p className="text-text-secondary leading-relaxed">
                Extensive experience filing <strong>binding ruling requests</strong> with CBP for country of origin, substantial transformation, and marking determinations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Trade Agreement Knowledge</h3>
              <p className="text-text-secondary leading-relaxed">
                Expert guidance on <strong>USMCA, FTA rules of origin</strong>, and preferential trade program requirements for duty savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Country of Origin Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Country of Origin Legal Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Substantial Transformation Analysis</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our Hemet country of origin attorney analyzes your manufacturing processes to determine if substantial transformation has occurred. This analysis is critical for <strong>origin determinations, duty rates, and trade agreement eligibility</strong>. We apply the name, character, and use test and evaluate tariff shift criteria.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Manufacturing process evaluation</li>
                <li>Tariff classification shift analysis</li>
                <li>Name, character, and use assessment</li>
                <li>Multi-country processing determinations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Country of Origin Marking Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                U.S. Customs requires products to be marked with their country of origin. We advise on marking methods, acceptable locations, legibility requirements, and exceptions. Improper marking can result in <strong>10% marking duties and shipment holds</strong>. Our Hemet marking attorney ensures compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Marking method and location guidance</li>
                <li>Ultimate purchaser determinations</li>
                <li>Substantial transformation and marking</li>
                <li>Marking duty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA & FTA Rules of Origin</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Free trade agreements like USMCA have specific product-based rules of origin that differ from general country of origin rules. Our firm analyzes <strong>regional value content, tariff shift requirements, and originating materials</strong> to qualify your products for duty-free treatment.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA origin determinations</li>
                <li>Regional value content calculations</li>
                <li>FTA certification (Korea, Chile, Australia, etc.)</li>
                <li>Product-specific rule analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Origin Ruling Requests</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Binding rulings from CBP provide <strong>legal certainty and audit protection</strong> for country of origin determinations. Our Hemet origin attorney prepares and files ruling requests with detailed manufacturing process descriptions, technical specifications, and legal analysis.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HQ and NY ruling requests</li>
                <li>Substantial transformation opinions</li>
                <li>Marking rulings</li>
                <li>USMCA and FTA origin rulings</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Government Procurement Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Buy American Act and Trade Agreements Act require government contractors to certify product origin. We provide <strong>TAA compliance opinions, substantial transformation analysis</strong>, and origin certifications for GSA Schedule contracts and federal procurement.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Buy American Act compliance</li>
                <li>Trade Agreements Act (TAA) opinions</li>
                <li>GSA Schedule origin certifications</li>
                <li>Federal procurement origin analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Origin Dispute Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP challenges your origin determinations or issues marking violations, we provide aggressive defense. Our Hemet customs attorney responds to <strong>CF-28/CF-29 notices, protests incorrect origin findings</strong>, and defends against origin-related penalties.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Origin challenge response</li>
                <li>Marking violation defense</li>
                <li>Prior disclosure filings</li>
                <li>Administrative protest preparation</li>
              </ul>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
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
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">Tariff Classification</span>
                    <p className="service-link__description">HTS code optimization</p>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/riverside-tariff-attorney" className="service-link">
                    <span className="service-link__title">Riverside</span>
                    <p className="service-link__description">Inland Empire trade law</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/murrieta-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Murrieta</span>
                    <p className="service-link__description">Southwest Riverside customs</p>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
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

      {/* Related City Pages Component */}
      <RelatedCityPages currentCity="Hemet" region="inland-empire" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Hemet country of origin attorney team today. We'll assess your product manufacturing, analyze origin determinations, and provide clear guidance on substantial transformation and marking compliance.
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

export default HemetCountryOfOriginPage;
