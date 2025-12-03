
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const FremontSemiconductorTariffPage: React.FC = () => {
  useMeta({
    title: 'Semiconductor Tariff Attorney Fremont CA | Chip Import Lawyer | Trembach Law',
    description: 'Semiconductor tariff attorney in Fremont CA. Expert chip import lawyer helping Bay Area tech companies with semiconductor tariffs, export controls, and trade compliance. Free consultation.',
    keywords: 'semiconductor tariff attorney fremont, chip import lawyer fremont, fremont semiconductor attorney, silicon valley semiconductor lawyer, chip tariff attorney bay area, semiconductor export controls fremont, tech tariff lawyer fremont, electronics import attorney fremont, fremont trade compliance attorney, chip industry lawyer fremont, semiconductor ITAR attorney fremont, EAR compliance fremont, chip manufacturing attorney fremont',
    canonical: 'fremont-semiconductor-tariff',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-fremont.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Semiconductor Tariff Attorney Fremont CA - Chip Import Lawyer',
        description: 'Expert semiconductor tariff attorney serving Fremont and Silicon Valley. Comprehensive chip import services including tariff classification, export controls, and trade compliance.',
        url: `${siteConfig.siteUrl}/fremont-semiconductor-tariff`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Semiconductor Tariff Attorney Fremont', url: `${siteConfig.siteUrl}/fremont-semiconductor-tariff` }
      ]),
      generateFAQSchema([
        {
          question: 'How do tariffs affect semiconductor imports to Fremont?',
          answer: 'Semiconductors face complex tariff treatment. While many chips have 0% MFN rates, Section 301 tariffs add 25% on Chinese semiconductors. Our Fremont semiconductor attorneys help tech companies optimize HTS classifications, navigate Section 301 exclusions, and structure supply chains to minimize duty exposure.',
        },
        {
          question: 'What export controls apply to semiconductors from Fremont?',
          answer: 'Advanced semiconductors face stringent export controls under BIS regulations. The October 2022 and subsequent rules restrict exports of advanced chips, manufacturing equipment, and related technology to China. Our Fremont semiconductor lawyers help companies understand ECCN classifications, license requirements, and compliance obligations.',
        },
        {
          question: 'Can you help with semiconductor manufacturing equipment tariffs?',
          answer: 'Yes, our Fremont semiconductor tariff attorneys handle manufacturing equipment imports including wafer fab equipment, lithography machines, testing equipment, and assembly machinery. We optimize classifications and explore FTZ and duty drawback strategies to reduce equipment costs.',
        },
        {
          question: 'What semiconductor companies do you serve in Fremont?',
          answer: 'We serve the full semiconductor ecosystem in Fremont and Silicon Valley: chip designers (fabless), foundries, equipment manufacturers, testing facilities, packaging companies, and electronics OEMs. Our attorneys understand the technical distinctions that affect tariff classification.',
        },
        {
          question: 'How are 2025 semiconductor export controls affecting Fremont companies?',
          answer: 'The evolving export control landscape significantly impacts Fremont semiconductor companies. New rules on advanced computing chips, AI accelerators, and manufacturing equipment require ongoing compliance assessment. Our semiconductor attorneys provide updates and compliance guidance as regulations change.',
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
      <section className="hero" aria-label="Semiconductor Tariff Attorney Fremont Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Semiconductor Tariff Attorney<br />Fremont CA</h1>
          <p className="hero-subtitle">
            Expert semiconductor tariff attorney serving Fremont and Silicon Valley's chip industry. From tariff classification to export controls, our tech trade lawyers help semiconductor companies navigate complex import/export regulations and minimize duty exposure.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Semiconductor Trade Law for Fremont Tech
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Fremont is the heart of America's semiconductor industry. Our <strong>semiconductor tariff attorneys</strong> understand the unique regulatory challenges facing chip companies - from Section 301 tariffs to BIS export controls to CHIPS Act compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tariff Optimization</h3>
              <p className="text-text-secondary leading-relaxed">
                Semiconductor HTS classifications are complex. Our Fremont <strong>chip tariff attorneys</strong> ensure correct classification and identify opportunities for duty minimization through binding rulings.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Controls</h3>
              <p className="text-text-secondary leading-relaxed">
                BIS export controls on semiconductors are increasingly stringent. Our <strong>semiconductor export attorneys</strong> help Fremont companies classify items, obtain licenses, and develop compliance programs.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                We understand semiconductors - from logic chips to memory to analog ICs. Our technical knowledge means <strong>better tariff outcomes</strong> for your Fremont semiconductor business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Semiconductor Trade Services in Fremont
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">HTS Classification for Semiconductors</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Semiconductor classification under Chapter 85 is highly technical. Our Fremont <strong>semiconductor tariff attorneys</strong> analyze product specifications to determine optimal HTS codes and defend against CBP reclassifications.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Integrated circuit classification (8542)</li>
                <li>Discrete semiconductor classification (8541)</li>
                <li>Parts and components analysis</li>
                <li>Binding ruling requests</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Control Compliance (EAR/BIS)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Advanced semiconductors face export restrictions to China and other destinations. Our Fremont <strong>semiconductor export lawyers</strong> help companies navigate ECCN classifications, license requirements, and deemed export rules.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ECCN determination (3A001, 3A991, 3E001, etc.)</li>
                <li>License application assistance</li>
                <li>Deemed export compliance</li>
                <li>Entity List screening</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Chinese semiconductor imports face <strong>25% Section 301 tariffs</strong>. Our Fremont attorneys analyze your supply chain for optimization opportunities including substantial transformation and exclusion eligibility.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 coverage analysis</li>
                <li>Supply chain restructuring</li>
                <li>Tariff engineering options</li>
                <li>Country of origin planning</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Manufacturing Equipment Imports</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Semiconductor fab equipment represents billions in imports. Our Fremont attorneys optimize <strong>equipment tariff classification</strong> and explore duty reduction strategies including FTZ and ITA benefits.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Lithography equipment classification</li>
                <li>Deposition and etch systems</li>
                <li>Test and measurement equipment</li>
                <li>Cleanroom equipment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Trade Compliance Programs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Semiconductor companies need robust compliance programs covering both import and export. Our Fremont attorneys develop <strong>integrated compliance programs</strong> tailored to the chip industry.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Import compliance procedures</li>
                <li>Export management systems</li>
                <li>Supplier screening protocols</li>
                <li>Training and auditing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services with Green-Slide Animation */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Tech Trade Services</h3>
              <div className="space-y-0">
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
                <div className="service-link-item">
                  <a href="#technology-electronics-trade-attorney" className="service-link">
                    <span className="service-link__title">Technology Trade Attorney</span>
                    <p className="service-link__description">Full tech industry services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Bay Area Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#fremont-customs-attorney" className="service-link">
                    <span className="service-link__title">Fremont Customs Attorney</span>
                    <p className="service-link__description">Full customs services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#silicon-valley-trade-lawyer" className="service-link">
                    <span className="service-link__title">Silicon Valley Trade Lawyer</span>
                    <p className="service-link__description">Tech trade expertise</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Resources</h3>
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
                  <a href="#trade-law-faq" className="service-link">
                    <span className="service-link__title">Tech Trade FAQ</span>
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

      {/* Related California Locations */}
      <RelatedCityPages currentCity="Fremont" region="bay-area" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Navigate Semiconductor Trade Regulations
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            From tariff classification to export controls, our Fremont semiconductor attorneys help tech companies stay compliant while minimizing duty costs. Contact us for expert guidance.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">
              Free Consultation
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

export default FremontSemiconductorTariffPage;
