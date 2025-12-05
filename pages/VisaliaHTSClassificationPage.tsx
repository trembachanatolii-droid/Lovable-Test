
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const VisaliaHTSClassificationPage: React.FC = () => {
  useMeta({
    title: 'HTS Classification Attorney Visalia | Agricultural Tariff Code Expert Tulare County CA',
    description: 'Expert HTS classification attorney serving Visalia & Tulare County. Harmonized Tariff Schedule expertise for agriculture, food processing, binding rulings. Free consultation (310) 744-1328.',
    keywords: 'HTS classification attorney visalia, harmonized tariff schedule lawyer visalia, agricultural tariff classification visalia, HTS code attorney tulare county, food processing tariff attorney visalia, binding ruling attorney visalia, agricultural import lawyer visalia, farm equipment classification',
    canonical: 'visalia-hts-classification',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-visalia.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'HTS Classification Attorney Visalia - Agricultural Tariff Expert Tulare County',
        description: 'Expert HTS classification attorney serving Visalia and Tulare County agricultural importers. Harmonized Tariff Schedule expertise for food processing, farm equipment, and agricultural trade.',
        url: `${siteConfig.siteUrl}/visalia-hts-classification`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Visalia HTS Classification Attorney', url: `${siteConfig.siteUrl}/visalia-hts-classification` }
      ]),
      generateFAQSchema([
        {
          question: 'Why do Visalia agricultural businesses need HTS classification attorneys?',
          answer: 'Visalia and Tulare County are the heart of California agriculture, producing dairy, citrus, grapes, nuts, and vegetables. Agricultural businesses importing farm equipment, processing machinery, fertilizers, and food ingredients need expert HTS classification to minimize duties and comply with USDA/FDA regulations. Our Visalia HTS attorneys specialize in agricultural tariff codes.',
        },
        {
          question: 'How does HTS classification impact agricultural import costs?',
          answer: 'Proper HTS classification for agricultural products can reduce duty costs by 30-80% through tariff engineering, free trade agreements (especially USMCA for Mexican produce/equipment), and special agricultural programs. Small classification differences on farm equipment, processing machinery, or agricultural chemicals can save tens of thousands annually for Tulare County operations.',
        },
        {
          question: 'What agricultural products require specialized HTS classification?',
          answer: 'Our Visalia HTS attorneys handle complex agricultural classifications including dairy processing equipment, irrigation systems, farm machinery, fertilizers and agricultural chemicals, food processing equipment, refrigeration systems, packaging machinery, and imported agricultural commodities. Each category has unique tariff treatment and regulatory requirements.',
        },
        {
          question: 'How do you handle USDA and FDA alignment with HTS classification?',
          answer: 'Many agricultural imports require coordination between HTS tariff classification and USDA/FDA regulatory classifications. Our Visalia attorneys ensure your tariff codes align with APHIS permits, FDA food facility registrations, and pesticide registrations. This prevents cargo detention and regulatory delays for Tulare County agricultural importers.',
        },
        {
          question: 'What binding ruling services do you provide for agricultural importers?',
          answer: 'We prepare comprehensive binding ruling requests for agricultural products, farm equipment, and food processing machinery. Our Visalia HTS attorneys include technical specifications, USDA/FDA classifications, agricultural use analysis, and tariff engineering options. Binding rulings provide 5+ years of classification certainty for Central Valley agricultural operations.',
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
      <section className="hero" aria-label="Visalia HTS Classification Attorney Hero">
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
          <h1>HTS Classification Attorney<br />Visalia & Tulare County CA</h1>
          <p className="hero-subtitle">
            Expert HTS classification attorney serving Visalia and Tulare County agricultural businesses. Harmonized Tariff Schedule expertise for farm equipment, food processing, and agricultural imports.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Classification Review</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Visalia HTS Classification Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Central Valley Agricultural Trade Experts
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Visalia and Tulare County with expert <strong>HTS classification for agricultural imports</strong>. Specialized Harmonized Tariff Schedule knowledge for Central Valley farming, dairy, and food processing operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep expertise in <strong>agricultural HTS classification</strong>. Understanding of farm equipment tariff codes, USDA regulations, and Central Valley agricultural supply chains.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Duty Savings</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic <strong>tariff engineering for agricultural equipment</strong>. Our HTS classification reduces import costs for Tulare County farms and food processors.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">USDA/FDA Coordination</h3>
              <p className="text-text-secondary leading-relaxed">
                Aligned <strong>HTS and agricultural regulatory compliance</strong>. We coordinate tariff classification with APHIS, FDA, and EPA requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HTS Classification Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            HTS Classification Services in Visalia
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural Equipment HTS Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Visalia HTS classification attorney, we provide <strong>expert classification for farm equipment and agricultural machinery</strong> under HTS Chapter 84. From tractors to irrigation systems, proper classification affects duty rates and trade agreement eligibility. Critical for Tulare County farms importing equipment from Mexico, Canada, and Europe.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Tractors, harvesters, and farming machinery classification</li>
                <li>Irrigation equipment and water management systems</li>
                <li>Agricultural sprayers and fertilizer applicators</li>
                <li>Dairy equipment and milking systems HTS codes</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Food Processing Equipment Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Visalia's food processing industry requires <strong>specialized HTS classification</strong> for sorting equipment, packaging machinery, refrigeration systems, and processing lines. Our attorneys align tariff codes with FDA food facility requirements and ensure optimal duty treatment for Central Valley food processors.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Food processing and packaging machinery HTS codes</li>
                <li>Refrigeration and cold storage equipment classification</li>
                <li>Sorting, grading, and inspection equipment</li>
                <li>Bottling, canning, and preservation machinery</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural Chemicals & Fertilizers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>HTS classification for agricultural chemicals</strong> (Chapter 31, 38) requires coordination with EPA registrations and FIFRA compliance. Our Visalia attorneys ensure tariff codes align with pesticide registrations and fertilizer formulations, preventing regulatory delays for Tulare County agricultural supply companies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Fertilizer and soil amendment HTS classification</li>
                <li>Pesticides and herbicides tariff codes (EPA alignment)</li>
                <li>Agricultural adjuvants and surfactants</li>
                <li>Organic and biological agricultural inputs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Binding Rulings for Agricultural Products</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our Visalia HTS attorneys prepare <strong>comprehensive binding ruling requests</strong> for agricultural equipment, food processing machinery, and farm inputs. We include technical specifications, agricultural use analysis, USDA/FDA classifications, and USMCA eligibility for Mexican/Canadian imports. Essential for Central Valley operations requiring classification certainty.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>NY and HQ ruling requests for farm equipment</li>
                <li>Agricultural machinery binding rulings</li>
                <li>Food processing equipment classification rulings</li>
                <li>USMCA origination and tariff preference coordination</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Engineering for Agricultural Imports</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Tariff engineering</strong> analyzes equipment design, import configurations, and agricultural use to achieve the most favorable legal HTS classification. Our Visalia attorneys have saved Central Valley farms and food processors hundreds of thousands in duties through strategic classification planning and USMCA optimization.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Equipment configuration analysis for optimal classification</li>
                <li>USMCA duty-free eligibility for Mexican/Canadian equipment</li>
                <li>GSP and preferential tariff programs for agricultural inputs</li>
                <li>Component vs. complete equipment classification strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Classification Compliance for Agriculture</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proactive <strong>HTS classification audits</strong> prevent costly CBP enforcement actions. Our Visalia attorneys review agricultural import records, verify equipment classifications, coordinate with USDA/FDA regulatory status, and implement compliance programs. Essential for Tulare County agricultural businesses with diverse import portfolios.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Internal agricultural import classification reviews</li>
                <li>Prior disclosure filings for equipment classification errors</li>
                <li>USDA/FDA/HTS alignment verification programs</li>
                <li>Classification training for agricultural purchasing teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
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
                  <Link to="/visalia-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Visalia Tariff Lawyer</span>
                    <p className="service-link__description">Agricultural tariff defense</p>
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
                    <p className="service-link__description">Agricultural compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/customs-defense-litigation" className="service-link">
                    <span className="service-link__title">CBP Audit Defense</span>
                    <p className="service-link__description">Agricultural audit defense</p>
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
                  <Link to="/fresno-agricultural-trade" className="service-link">
                    <span className="service-link__title">Fresno Agricultural Trade</span>
                    <p className="service-link__description">Central Valley services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/bakersfield-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Bakersfield Tariff Lawyer</span>
                    <p className="service-link__description">Southern Central Valley</p>
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
                    <span className="service-link__title">HTS Classification Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/usmca-guide" className="service-link">
                    <span className="service-link__title">USMCA Agricultural Guide</span>
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

      {/* Related City Pages */}
      <RelatedCityPages currentCity="Visalia" region="central-valley" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free HTS Classification Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Visalia HTS classification attorney team today. We'll review your agricultural equipment and food processing imports, analyze classification opportunities, and provide a clear strategy to reduce duty costs and ensure USDA/FDA compliance.
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

export default VisaliaHTSClassificationPage;
