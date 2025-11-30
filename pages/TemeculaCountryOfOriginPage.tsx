import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const TemeculaCountryOfOriginPage: React.FC = () => {
  useMeta({
    title: 'Temecula Country of Origin Attorney | Wine & Product Origin Lawyer CA',
    description: 'Temecula country of origin attorney specializing in substantial transformation, marking compliance, and origin determination for wine and manufacturing industries. (310) 744-1328.',
    keywords: 'country of origin attorney temecula, product origin lawyer temecula, substantial transformation temecula, wine origin attorney temecula, marking requirements temecula, USMCA lawyer temecula',
    canonical: 'temecula-country-of-origin-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-temecula.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Temecula Country of Origin Attorney - Product Origin Legal Services',
        description: 'Temecula country of origin attorney providing expert legal counsel for substantial transformation analysis, marking compliance, and trade agreement origin determinations for Temecula Valley businesses.',
        url: `${siteConfig.siteUrl}/#temecula-country-of-origin-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/#california-offices` },
        { name: 'Temecula Country of Origin Attorney', url: `${siteConfig.siteUrl}/#temecula-country-of-origin-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Temecula country of origin attorney?',
          answer: 'A Temecula-based country of origin attorney provides local accessibility for Temecula Valley businesses including wineries, manufacturers, and importers. We understand the unique needs of local industries and provide expert guidance on substantial transformation, marking requirements, USMCA origin, and government procurement compliance without requiring travel to Los Angeles or San Diego.',
        },
        {
          question: 'What is substantial transformation and how does it affect my business?',
          answer: 'Substantial transformation determines country of origin by evaluating whether manufacturing creates a new and different article with a distinct name, character, and use. This affects duty rates, trade agreement eligibility, and government procurement. For example, bottling imported wine does not transform origin, but fermenting imported grapes does. Our Temecula attorney analyzes your specific operations.',
        },
        {
          question: 'Do Temecula wineries need country of origin compliance?',
          answer: 'Yes. Wineries importing wine, wine components, or packaging materials must comply with country of origin marking requirements and accurately declare origin to CBP. Wine labeling also requires TTB compliance. Additionally, wineries exporting to Mexico, Canada, EU, or other markets must certify origin for preferential duty treatment. Our firm serves Temecula Valley wineries with origin and trade compliance.',
        },
        {
          question: 'What are the penalties for incorrect country of origin claims?',
          answer: 'Penalties for incorrect origin range from negligence (actual loss of duties + 20%) to gross negligence (2-4x duties lost) to fraud (4-8x duties). Additionally, incorrect marking can result in 10% marking duties and entry refusal. Incorrect FTA or government procurement origin certifications can result in contract termination and False Claims Act liability. Our Temecula origin attorney ensures compliance.',
        },
        {
          question: 'Do you serve other Temecula Valley businesses?',
          answer: 'Yes, from our Temecula service area we represent wineries, manufacturers, and importers throughout the Temecula Valley and Southwest Riverside County including Murrieta, Menifee, Lake Elsinore, and Wildomar. We serve clients at Port of San Diego, Port of Los Angeles, and Port of Long Beach.',
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
      <section className="hero" aria-label="Temecula Country of Origin Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Temecula Country of Origin Attorney<br />Wine & Product Origin Counsel</h1>
          <p className="hero-subtitle">
            Temecula country of origin attorney specializing in substantial transformation, marking compliance, and origin determination for Temecula Valley wineries, manufacturers, and importers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Temecula Country of Origin Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Temecula Valley Origin Law Specialists
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Temecula wineries and businesses with specialized country of origin legal services. Our firm provides <strong>expert analysis for wine origin, manufacturing origin determinations, and trade compliance</strong> tailored to Temecula Valley industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Wine Industry Knowledge</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized knowledge of <strong>wine import/export regulations, TTB compliance, and wine origin determinations</strong> for Temecula Valley wineries.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Comprehensive understanding of <strong>substantial transformation principles</strong> for manufacturing, assembly, and processing operations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Trade Agreement Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Expert guidance on <strong>USMCA, FTA rules of origin, and preferential trade programs</strong> for duty savings and market access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Country of Origin Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Country of Origin Legal Services in Temecula
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Substantial Transformation Determinations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our Temecula country of origin attorney analyzes manufacturing and processing operations to determine if substantial transformation occurred. We apply the <strong>name, character, and use test, evaluate tariff shifts, and research CBP precedent</strong> to establish product origin with legal certainty.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Name, character, and use analysis</li>
                <li>Manufacturing process evaluation</li>
                <li>Tariff classification shift assessment</li>
                <li>Value-added calculations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Country of Origin Marking Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We advise Temecula businesses on country of origin marking requirements including marking methods, location, size, and permanence. Proper marking compliance avoids <strong>10% ad valorem marking duties, CBP holds, and re-exportation</strong>. Our marking attorney ensures full compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Marking method approval and guidance</li>
                <li>Ultimate purchaser determinations</li>
                <li>Container and product marking rules</li>
                <li>Marking exception analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Wine Origin & Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Temecula wineries importing wine, bulk wine, or wine components must comply with country of origin requirements. We provide <strong>origin determinations, TTB compliance coordination, and import documentation review</strong>. We also advise on wine export compliance and foreign market access.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Wine origin determinations</li>
                <li>TTB labeling and compliance</li>
                <li>Bulk wine import compliance</li>
                <li>Wine export documentation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA & Free Trade Agreement Origin</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA and other free trade agreements offer duty-free treatment for qualifying goods. Our Temecula FTA attorney analyzes <strong>product-specific rules of origin, calculates regional value content, and prepares certifications</strong> for duty savings and preferential treatment in Mexico, Canada, and FTA partner countries.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA origin analysis and certification</li>
                <li>Regional value content (RVC) calculations</li>
                <li>Free trade agreement certifications</li>
                <li>Verification and audit response</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Government Procurement & TAA Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Federal contractors must certify products are <strong>U.S.-made or from Trade Agreements Act designated countries</strong>. We provide TAA compliance opinions, substantial transformation analysis, and origin certifications for GSA Schedule holders and government contractors.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Trade Agreements Act (TAA) opinions</li>
                <li>Buy American Act compliance</li>
                <li>Designated country analysis</li>
                <li>GSA Schedule origin certification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Binding Rulings & Legal Opinions</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP binding rulings provide <strong>legal certainty, audit protection, and consistent origin treatment</strong>. Our Temecula customs attorney prepares ruling requests with detailed manufacturing documentation, technical analysis, and legal arguments for CBP's Office of Regulations and Rulings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HQ and NY ruling request preparation</li>
                <li>Substantial transformation rulings</li>
                <li>Country of origin marking rulings</li>
                <li>Written legal opinion letters</li>
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
                    <p className="service-link__description">Wine export compliance</p>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#murrieta-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Murrieta</span>
                    <p className="service-link__description">Murrieta tariff lawyer</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#san-diego-customs-lawyer" className="service-link">
                    <span className="service-link__title">San Diego</span>
                    <p className="service-link__description">Port of San Diego customs</p>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
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

      {/* Related City Pages Component */}
      <RelatedCityPages currentCity="Temecula" region="san-diego" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Temecula country of origin attorney team today. We'll analyze your wine or manufacturing operations, determine product origin, and ensure marking and trade agreement compliance.
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

export default TemeculaCountryOfOriginPage;
