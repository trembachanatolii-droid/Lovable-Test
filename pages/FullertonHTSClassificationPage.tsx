
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const FullertonHTSClassificationPage: React.FC = () => {
  useMeta({
    title: 'HTS Classification Attorney Fullerton | Tariff Code Expert Orange County CA',
    description: 'Expert HTS classification attorney serving Fullerton & Orange County. Harmonized Tariff Schedule expertise, binding rulings, duty optimization. Free consultation (310) 744-1328.',
    keywords: 'HTS classification attorney fullerton, harmonized tariff schedule lawyer fullerton, tariff classification expert fullerton, HTS code attorney orange county, binding ruling attorney fullerton, tariff code lawyer fullerton ca, customs classification attorney fullerton, hs code lawyer fullerton',
    canonical: 'fullerton-hts-classification',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-fullerton.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'HTS Classification Attorney Fullerton - Harmonized Tariff Schedule Expert Orange County',
        description: 'Expert HTS classification attorney serving Fullerton and Orange County importers. Harmonized Tariff Schedule expertise, binding rulings, duty optimization, and tariff engineering for OC manufacturers.',
        url: `${siteConfig.siteUrl}/fullerton-hts-classification`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Fullerton HTS Classification Attorney', url: `${siteConfig.siteUrl}/fullerton-hts-classification` }
      ]),
      generateFAQSchema([
        {
          question: 'What is HTS classification and why does my Fullerton business need it?',
          answer: 'HTS (Harmonized Tariff Schedule) classification determines the tariff code for imported goods, which directly impacts duty rates, trade agreements, and compliance. Orange County manufacturers importing aerospace parts, automotive components, electronics, and medical devices need accurate HTS classification to avoid overpayment and penalties. Our Fullerton HTS classification attorneys ensure proper codes for all imports.',
        },
        {
          question: 'How can an HTS classification attorney help reduce my import costs?',
          answer: 'Proper HTS classification can significantly reduce duty costs through tariff engineering - finding the most favorable legal classification within the Harmonized Tariff Schedule. Our Fullerton attorneys analyze product characteristics, manufacturing processes, and applicable trade agreements to minimize duty rates. We have saved Orange County importers hundreds of thousands in annual duty costs.',
        },
        {
          question: 'What is a binding ruling and why should Fullerton importers obtain one?',
          answer: 'A binding ruling is CBP\'s official determination of your product\'s HTS classification. It provides legal certainty, protects against future reclassification, and ensures consistent duty treatment at Port of LA/Long Beach. Our Fullerton HTS attorneys prepare comprehensive binding ruling requests with technical analysis and supporting documentation.',
        },
        {
          question: 'How do you handle CBP classification disputes for Fullerton businesses?',
          answer: 'When CBP disagrees with your HTS classification, we defend your position through protests, binding ruling requests, and litigation if necessary. Our Fullerton office provides rapid response to Port of LA/Long Beach classification disputes, often resolving issues before cargo is detained. We have extensive experience with complex classification controversies.',
        },
        {
          question: 'What industries in Fullerton benefit most from HTS classification services?',
          answer: 'Orange County\'s diverse manufacturing base benefits greatly from expert HTS classification. We serve Fullerton aerospace manufacturers, automotive parts importers, medical device companies, electronics manufacturers, industrial equipment suppliers, and food processors. Proper classification is critical for OC manufacturers managing complex supply chains.',
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
      <section className="hero" aria-label="Fullerton HTS Classification Attorney Hero">
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
          <h1>HTS Classification Attorney<br />Fullerton & Orange County CA</h1>
          <p className="hero-subtitle">
            Expert HTS classification attorney serving Fullerton and Orange County manufacturers. Harmonized Tariff Schedule expertise, binding rulings, duty optimization, and tariff engineering for Port of LA/Long Beach importers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Classification Review</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Fullerton HTS Classification Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Orange County HTS Classification Experts
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Fullerton and Orange County importers with expert <strong>HTS classification and tariff code</strong> services. Proper Harmonized Tariff Schedule classification is critical for OC manufacturers managing complex import operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep experience with <strong>Orange County manufacturing imports</strong>. Specialized HTS classification for aerospace, automotive, medical devices, and electronics.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Duty Optimization</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic <strong>tariff engineering</strong> to minimize duty costs. Our HTS classification saves OC importers thousands annually through proper code selection.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Extensive experience at <strong>Port of LA and Port of Long Beach</strong>. Rapid response to classification disputes and CBP challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HTS Classification Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            HTS Classification Services in Fullerton
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Harmonized Tariff Schedule Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Fullerton HTS classification attorney, we provide <strong>expert analysis of the Harmonized Tariff Schedule</strong> to determine the most accurate and advantageous classification for your imports. From complex aerospace components to medical devices, proper HTS codes are essential for duty calculation, quota compliance, and trade agreement eligibility.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Comprehensive HTS analysis for manufacturing imports</li>
                <li>General Rules of Interpretation (GRI) application</li>
                <li>Section/Chapter notes analysis and legal research</li>
                <li>Multi-component product classification strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Binding Ruling Requests</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our Fullerton HTS attorneys prepare and file <strong>binding ruling requests</strong> with CBP to secure official classification determinations. A binding ruling provides legal certainty for 5+ years and protects against future CBP reclassification. Essential for Orange County manufacturers with complex or high-value imports through LA/Long Beach ports.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>NY (National) ruling request preparation</li>
                <li>HQ (Headquarters) ruling requests for complex products</li>
                <li>Technical product analysis and documentation</li>
                <li>CBP ruling defense and modification requests</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Engineering & Duty Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Tariff engineering</strong> leverages product design, packaging, and import strategies to achieve the most favorable HTS classification within legal bounds. Our Fullerton attorneys analyze Orange County manufacturing operations to identify <strong>duty-saving opportunities</strong> that can reduce import costs by 20-50% or more.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Product composition and packaging analysis for optimal HTS codes</li>
                <li>Free Trade Agreement eligibility and preferential duty rates</li>
                <li>Special tariff programs (GSP, USMCA, CBI, etc.)</li>
                <li>Alternative classification strategies for cost reduction</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Classification Dispute Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP challenges your HTS classification at Port of LA or Long Beach, immediate action is critical. Our Fullerton location provides <strong>rapid response to classification disputes</strong>, preventing cargo detention and costly delays. We defend your classification through protests, ruling requests, and litigation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CF-29 classification challenge response</li>
                <li>19 USC § 1514 protest filings for adverse classifications</li>
                <li>Internal Advice requests to CBP Headquarters</li>
                <li>Court of International Trade litigation for classification disputes</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Classification Audits & Compliance Reviews</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proactive <strong>HTS classification audits</strong> identify errors before CBP does. Our Fullerton attorneys review your import records, verify current classifications, and implement compliance programs to prevent costly CBP audits and penalties. Critical for Orange County manufacturers with high import volumes.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Internal classification compliance audits</li>
                <li>Prior disclosure filings for classification errors</li>
                <li>Importer self-assessment programs</li>
                <li>Classification training for OC import/export teams</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Industry-Specific HTS Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Orange County's diverse manufacturing base requires <strong>specialized HTS classification knowledge</strong>. Our Fullerton attorneys have deep experience with industry-specific tariff schedules, technical standards, and classification controversies affecting OC importers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Aerospace & defense parts - HTS Chapter 88, 84, 85</li>
                <li>Automotive components - Chapter 87 classification complexity</li>
                <li>Medical devices - FDA vs. HTS classification alignment</li>
                <li>Electronics & semiconductors - Chapter 85 technical analysis</li>
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
                    <p className="service-link__description">Import/export compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/fullerton-tariff-attorney" className="service-link">
                    <span className="service-link__title">Fullerton Tariff Attorney</span>
                    <p className="service-link__description">Section 301, antidumping defense</p>
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
                  <Link to="/irvine-trade-compliance" className="service-link">
                    <span className="service-link__title">Irvine Trade Compliance</span>
                    <p className="service-link__description">Orange County HTS services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/anaheim-customs-attorney" className="service-link">
                    <span className="service-link__title">Anaheim Customs Attorney</span>
                    <p className="service-link__description">North OC classification</p>
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
                  <Link to="/resources/binding-rulings-guide" className="service-link">
                    <span className="service-link__title">Binding Rulings Guide</span>
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
      <RelatedCityPages currentCity="Fullerton" region="orange-county" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free HTS Classification Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Fullerton HTS classification attorney team today. We'll review your products, analyze classification opportunities, and provide a clear strategy to optimize your duty costs and ensure compliance.
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

export default FullertonHTSClassificationPage;
