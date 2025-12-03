import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const MurrietaCountryOfOriginPage: React.FC = () => {
  useMeta({
    title: 'Murrieta Country of Origin Attorney | Product Origin Determination CA',
    description: 'Murrieta country of origin attorney providing expert legal services for substantial transformation, marking requirements, and USMCA origin compliance. (310) 744-1328.',
    keywords: 'country of origin attorney murrieta, product origin lawyer murrieta, substantial transformation murrieta, marking requirements murrieta, origin determination murrieta, USMCA attorney murrieta',
    canonical: 'murrieta-country-of-origin-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-murrieta.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Murrieta Country of Origin Attorney - Product Origin Legal Counsel',
        description: 'Murrieta country of origin attorney providing comprehensive legal services for substantial transformation analysis, marking compliance, and trade agreement origin determinations.',
        url: `${siteConfig.siteUrl}/murrieta-country-of-origin-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Murrieta Country of Origin Attorney', url: `${siteConfig.siteUrl}/murrieta-country-of-origin-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What is country of origin and why does it matter for Murrieta businesses?',
          answer: 'Country of origin determines where a product is "made" for customs purposes. This affects tariff rates (which can range from 0% to over 100%), eligibility for free trade agreements like USMCA, government procurement requirements under TAA/Buy American, and consumer labeling. Incorrect origin claims can result in significant CBP penalties, duty assessments, and shipment holds.',
        },
        {
          question: 'How do you determine if substantial transformation occurred?',
          answer: 'Substantial transformation is determined by analyzing whether manufacturing or processing results in a new and different article of commerce with a distinct name, character, and use. We evaluate the manufacturing process, tariff classification changes, value added, and relevant CBP rulings. Our Murrieta origin attorney provides written legal opinions for audit protection.',
        },
        {
          question: 'What are country of origin marking requirements?',
          answer: 'U.S. law requires imported goods to be marked with their country of origin in a conspicuous, legible, indelible, and permanent manner. The marking must reach the "ultimate purchaser" - generally the last person in the U.S. who receives the article in its imported form. Failure to properly mark can result in 10% marking duties, entry refusal, and re-exportation requirements.',
        },
        {
          question: 'Can you help with USMCA origin certifications?',
          answer: 'Yes. USMCA allows duty-free treatment for qualifying goods from the U.S., Mexico, and Canada. We analyze product-specific rules of origin, calculate regional value content using net cost or transaction value methods, trace originating materials, and prepare certifications of origin. We also respond to verification requests from CBP and foreign customs authorities.',
        },
        {
          question: 'Do you serve other Temecula Valley cities?',
          answer: 'Yes, from our Murrieta service area we represent businesses throughout the Temecula Valley and Southwest Riverside County including Temecula, Menifee, Lake Elsinore, Wildomar, and Canyon Lake. We also serve clients importing through Port of Los Angeles, Port of Long Beach, and Port of San Diego.',
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
      <section className="hero" aria-label="Murrieta Country of Origin Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Murrieta Country of Origin Attorney<br />Substantial Transformation Expert</h1>
          <p className="hero-subtitle">
            Murrieta country of origin attorney providing expert legal counsel on substantial transformation, marking requirements, USMCA origin, and trade agreement compliance for Temecula Valley businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Murrieta Country of Origin Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Temecula Valley Country of Origin Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Murrieta and the Temecula Valley with specialized country of origin legal services. Our firm provides <strong>comprehensive origin analysis, compliance strategies, and CBP defense</strong> for manufacturers, importers, and exporters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Customs Law Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Focus <strong>exclusively on customs and international trade law</strong> including country of origin, substantial transformation, and trade agreement compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">USMCA Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep expertise in <strong>USMCA rules of origin, regional value content</strong>, and certification requirements for duty-free North American trade.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Legal Certainty</h3>
              <p className="text-text-secondary leading-relaxed">
                We provide <strong>written legal opinions and CBP binding rulings</strong> for audit protection and compliance certainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Country of Origin Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Country of Origin Legal Services in Murrieta
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Substantial Transformation Analysis</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our Murrieta country of origin attorney conducts comprehensive substantial transformation analysis using the <strong>name, character, and use test</strong>. We evaluate manufacturing processes, assess tariff classification changes, and apply CBP precedent to determine product origin.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Name, character, and use evaluation</li>
                <li>Manufacturing process analysis</li>
                <li>Tariff shift assessment</li>
                <li>CBP ruling research and application</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Country of Origin Marking Requirements</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We advise on country of origin marking compliance including acceptable marking methods, ultimate purchaser determinations, and exceptions. Proper marking avoids <strong>10% marking duties, entry delays, and CBP penalties</strong>. Our Murrieta marking attorney ensures full compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Marking method approval (molding, etching, labels)</li>
                <li>Ultimate purchaser analysis</li>
                <li>Substantial container marking</li>
                <li>Marking exception eligibility</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA Origin Determination & Certification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA (United States-Mexico-Canada Agreement) provides duty-free treatment for qualifying goods. We analyze <strong>product-specific rules, calculate regional value content, trace originating materials</strong>, and prepare certifications of origin for importers, exporters, and producers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Product-specific rule of origin analysis</li>
                <li>Regional value content (RVC) calculations</li>
                <li>Originating materials tracing</li>
                <li>USMCA certification preparation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Free Trade Agreement Origin Services</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Beyond USMCA, the U.S. has free trade agreements with 20 countries. Our Murrieta FTA attorney provides <strong>origin determinations, certifications, and audit support</strong> for Korea (KORUS), Chile, Australia, Singapore, Peru, Colombia, and other FTA partners.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Korea FTA (KORUS) origin analysis</li>
                <li>Australia, Chile, Singapore FTA certification</li>
                <li>CAFTA-DR origin determinations</li>
                <li>FTA verification response</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Trade Agreements Act (TAA) Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Government contractors must certify that products are <strong>U.S.-made or from TAA designated countries</strong>. We provide TAA compliance opinions, substantial transformation analysis for multi-country production, and origin certifications for GSA Schedule contracts and federal procurement.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>TAA designated country analysis</li>
                <li>Substantial transformation for TAA</li>
                <li>GSA Schedule origin certifications</li>
                <li>Buy American Act compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Binding Ruling Requests</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP binding rulings provide <strong>legal certainty, audit protection, and consistent treatment</strong> for country of origin determinations. Our Murrieta customs attorney prepares detailed ruling requests with manufacturing documentation, technical specifications, and legal analysis for CBP's Office of Regulations and Rulings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HQ and NY ruling request preparation</li>
                <li>Substantial transformation rulings</li>
                <li>Marking requirement rulings</li>
                <li>USMCA and FTA origin rulings</li>
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
                  <a href="#tariffs-duties-classification-guide" className="service-link">
                    <span className="service-link__title">Tariff Classification</span>
                    <p className="service-link__description">HTS code optimization</p>
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
                  <a href="#temecula-trade-attorney" className="service-link">
                    <span className="service-link__title">Temecula</span>
                    <p className="service-link__description">Temecula Valley trade attorney</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#riverside-tariff-attorney" className="service-link">
                    <span className="service-link__title">Riverside</span>
                    <p className="service-link__description">Riverside County customs</p>
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
      <RelatedCityPages currentCity="Murrieta" region="san-diego" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Murrieta country of origin attorney team today. We'll analyze your manufacturing processes, determine substantial transformation, and ensure marking and trade agreement compliance.
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

export default MurrietaCountryOfOriginPage;
