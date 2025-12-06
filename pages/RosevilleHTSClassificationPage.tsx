
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const RosevilleHTSClassificationPage: React.FC = () => {
  useMeta({
    title: 'HTS Classification Attorney Roseville | Tariff Code Expert Placer County CA',
    description: 'Expert HTS classification attorney serving Roseville & Placer County. Harmonized Tariff Schedule expertise, binding rulings, duty optimization for tech & manufacturing. Free consultation (310) 744-1328.',
    keywords: 'HTS classification attorney roseville, harmonized tariff schedule lawyer roseville, tariff classification expert roseville, HTS code attorney placer county, binding ruling attorney roseville, tariff code lawyer roseville ca, customs classification attorney roseville, technology import classification',
    canonical: 'roseville-hts-classification',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-roseville.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'HTS Classification Attorney Roseville - Harmonized Tariff Schedule Expert Placer County',
        description: 'Expert HTS classification attorney serving Roseville and Placer County importers. Harmonized Tariff Schedule expertise, binding rulings, duty optimization for technology, manufacturing, and distribution businesses.',
        url: `${siteConfig.siteUrl}/roseville-hts-classification`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Roseville HTS Classification Attorney', url: `${siteConfig.siteUrl}/roseville-hts-classification` }
      ]),
      generateFAQSchema([
        {
          question: 'Why do Roseville technology and manufacturing companies need HTS classification attorneys?',
          answer: 'Roseville hosts major technology manufacturers, distribution centers, and electronics companies. HTS classification for computers, telecommunications equipment, semiconductors, and consumer electronics is highly technical with significant duty rate variations. Our Roseville HTS attorneys specialize in technology product tariff codes and help companies minimize import costs.',
        },
        {
          question: 'How does HTS classification affect duty costs for Placer County importers?',
          answer: 'Proper HTS classification can reduce duty costs by 25-60% for technology and electronics imports. Small classification differences between telecommunications equipment (duty-free) vs. consumer electronics (4-6% duties) can save Roseville companies hundreds of thousands annually. Our tariff engineering identifies the most favorable legal classification.',
        },
        {
          question: 'What is the classification process for electronic products and technology?',
          answer: 'Our Roseville HTS attorneys analyze product functionality, principal use, component composition, and technical specifications to determine proper classification under HTS Chapters 84, 85, 90. We prepare binding ruling requests with detailed technical analysis, ensuring classification certainty for technology importers accessing Port of Oakland and Northern California distribution.',
        },
        {
          question: 'How do you handle CBP classification disputes for Roseville businesses?',
          answer: 'When CBP challenges your technology or electronics classification, we provide immediate defense through protests, internal advice requests, and technical documentation. Our Roseville office serves the Sacramento metropolitan area and provides rapid response for Port of Oakland classification disputes. We prevent cargo detention and duty overpayment.',
        },
        {
          question: 'What industries in Roseville benefit from your HTS classification services?',
          answer: 'We serve Roseville technology manufacturers, electronics importers, telecommunications equipment distributors, computer hardware companies, semiconductor firms, consumer electronics retailers, and e-commerce businesses. Our specialized knowledge of technology HTS codes (Chapters 84, 85, 90) is critical for Greater Sacramento\'s innovation economy.',
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
      <section className="hero" aria-label="Roseville HTS Classification Attorney Hero">
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
          <h1>HTS Classification Attorney<br />Roseville & Placer County CA</h1>
          <p className="hero-subtitle">
            Expert HTS classification attorney serving Roseville and Greater Sacramento. Harmonized Tariff Schedule expertise for technology, electronics, and manufacturing importers accessing Port of Oakland.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact#schedule-consultation" className="hero-cta">Free Classification Review</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Roseville HTS Classification Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Greater Sacramento Technology Trade Experts
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Roseville and Placer County with expert <strong>HTS classification for technology and electronics</strong> imports. Specialized Harmonized Tariff Schedule knowledge for Greater Sacramento's technology and distribution sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Technology Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep expertise in <strong>technology and electronics HTS classification</strong>. Understanding of telecommunications, computer, and semiconductor tariff codes.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Duty Optimization</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic <strong>tariff engineering for electronics imports</strong>. Our HTS classification saves Roseville technology companies significant duty costs annually.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Oakland Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Extensive experience with <strong>Port of Oakland customs operations</strong>. Rapid classification dispute resolution for Northern California importers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HTS Classification Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            HTS Classification Services in Roseville
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Technology & Electronics HTS Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Roseville HTS classification attorney, we provide <strong>expert classification for technology products</strong> under HTS Chapters 84 (computers, machinery), 85 (electrical equipment), and 90 (precision instruments). Proper classification of telecommunications equipment, computers, and consumer electronics significantly impacts duty costs for Greater Sacramento importers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Computer hardware and peripherals classification</li>
                <li>Telecommunications equipment HTS codes (often duty-free)</li>
                <li>Consumer electronics and entertainment systems</li>
                <li>Semiconductor and integrated circuit classification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Binding Rulings for Technology Products</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our Roseville HTS attorneys prepare <strong>comprehensive binding ruling requests</strong> for complex technology products. We include detailed technical specifications, functional analysis, principal use determination, and component breakdowns. Essential for Placer County technology companies requiring classification certainty for multi-function devices and emerging technologies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>NY and HQ ruling requests for electronics</li>
                <li>Multi-function device classification (phone + computer + camera)</li>
                <li>Emerging technology HTS analysis (IoT, AI devices, smart home)</li>
                <li>Principal use and functionality determination</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Engineering for Electronics Importers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Tariff engineering</strong> analyzes product design, component sourcing, and import configurations to achieve the most favorable legal HTS classification. Our Roseville attorneys help technology companies structure imports to minimize duties - critical for high-volume electronics importers serving Northern California distribution networks.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Product configuration analysis for optimal duty rates</li>
                <li>Free Trade Agreement eligibility (USMCA for Mexican assembly)</li>
                <li>Telecommunications vs. consumer electronics classification strategies</li>
                <li>Component importation vs. finished goods optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Classification Dispute Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP challenges your technology product classification at Port of Oakland, immediate expert response prevents cargo detention and duty overpayment. Our Roseville office provides <strong>rapid classification dispute defense</strong> through protests, internal advice requests, and technical documentation for Greater Sacramento importers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CF-29 reclassification notice response for electronics</li>
                <li>19 USC § 1514 protest filings for technology products</li>
                <li>Internal Advice requests to CBP Headquarters</li>
                <li>Technical expert declarations for complex classification disputes</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Distribution Center Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Roseville's major distribution centers require <strong>comprehensive HTS classification programs</strong> for diverse product portfolios. Our attorneys implement classification management systems, conduct product audits, and provide ongoing compliance support. Essential for e-commerce and retail distribution operations importing thousands of SKUs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Multi-product classification audit programs</li>
                <li>E-commerce SKU classification management</li>
                <li>Automated classification decision support systems</li>
                <li>Distribution center compliance training</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 & Technology Tariffs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                China Section 301 tariffs heavily impact technology and electronics imports. Our Roseville HTS attorneys analyze <strong>classification alternatives and exclusion strategies</strong> to minimize 301 tariff exposure. We help Placer County technology companies restructure supply chains and identify duty-free classification opportunities.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 tariff exposure analysis by HTS code</li>
                <li>Alternative classification strategies to avoid 301 duties</li>
                <li>Country of origin and substantial transformation analysis</li>
                <li>USMCA and alternative sourcing compliance strategies</li>
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
                  <Link to="/roseville-customs-lawyer" className="service-link">
                    <span className="service-link__title">Roseville Customs Lawyer</span>
                    <p className="service-link__description">CBP audit & penalty defense</p>
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
                    <p className="service-link__description">Technology compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Export Controls</span>
                    <p className="service-link__description">EAR compliance for tech</p>
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
                  <Link to="/sacramento-tariff-attorney" className="service-link">
                    <span className="service-link__title">Sacramento Tariff Attorney</span>
                    <p className="service-link__description">Greater Sacramento services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/port-of-oakland-tariff" className="service-link">
                    <span className="service-link__title">Port of Oakland</span>
                    <p className="service-link__description">Northern CA port services</p>
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
                  <Link to="/resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Tech Guide</span>
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
      <RelatedCityPages currentCity="Roseville" region="bay-area" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free HTS Classification Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Roseville HTS classification attorney team today. We'll review your technology and electronics products, analyze classification opportunities, and provide a clear strategy to optimize duty costs and ensure compliance.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact#schedule-consultation" variant="solid">
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

export default RosevilleHTSClassificationPage;
