
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const ConcordHTSClassificationPage: React.FC = () => {
  useMeta({
    title: 'HTS Classification Attorney Concord | Tariff Code Expert Contra Costa County CA',
    description: 'Expert HTS classification attorney serving Concord & Contra Costa County. Harmonized Tariff Schedule expertise, binding rulings, duty optimization for Bay Area importers. Free consultation (310) 744-1328.',
    keywords: 'HTS classification attorney concord, harmonized tariff schedule lawyer concord, tariff classification expert concord, HTS code attorney contra costa county, binding ruling attorney concord, tariff code lawyer concord ca, customs classification attorney concord, bay area import classification',
    canonical: 'concord-hts-classification',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-concord.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'HTS Classification Attorney Concord - Harmonized Tariff Schedule Expert Contra Costa County',
        description: 'Expert HTS classification attorney serving Concord and Contra Costa County importers. Harmonized Tariff Schedule expertise, binding rulings, duty optimization for Bay Area businesses accessing Port of Oakland.',
        url: `${siteConfig.siteUrl}/concord-hts-classification`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Concord HTS Classification Attorney', url: `${siteConfig.siteUrl}/concord-hts-classification` }
      ]),
      generateFAQSchema([
        {
          question: 'Why do Concord and East Bay businesses need HTS classification attorneys?',
          answer: 'Concord and Contra Costa County businesses importing industrial equipment, consumer goods, automotive parts, and manufacturing materials need expert HTS classification to minimize duties and ensure compliance. With direct access to Port of Oakland, East Bay importers face intense CBP scrutiny. Our Concord HTS attorneys provide specialized tariff code expertise for Bay Area operations.',
        },
        {
          question: 'How does HTS classification affect import costs for Contra Costa County companies?',
          answer: 'Proper HTS classification can reduce duty costs by 20-60% through tariff engineering, free trade agreements, and strategic code selection. For East Bay industrial and manufacturing importers, small classification differences can mean thousands in savings per shipment. Our Concord attorneys analyze products to find the most favorable legal classification under the Harmonized Tariff Schedule.',
        },
        {
          question: 'What is the process for obtaining binding rulings for East Bay importers?',
          answer: 'Our Concord HTS attorneys prepare comprehensive binding ruling requests including technical product specifications, manufacturing details, intended use analysis, and applicable HTS notes. For Contra Costa County businesses importing through Port of Oakland, binding rulings provide 5+ years of classification certainty and protection against CBP reclassification challenges.',
        },
        {
          question: 'How quickly can you respond to Port of Oakland classification disputes?',
          answer: 'Our Concord office provides rapid response to Port of Oakland customs issues. When CBP challenges your HTS classification, we immediately prepare technical responses, protest filings, and internal advice requests. East Bay location allows us to work directly with Port of Oakland CBP to resolve classification disputes quickly and prevent cargo detention.',
        },
        {
          question: 'What industries in Concord benefit from your HTS classification services?',
          answer: 'We serve Concord and Contra Costa County industrial equipment importers, automotive parts distributors, consumer goods companies, food and beverage processors, construction material suppliers, and manufacturing operations. Our specialized knowledge of diverse HTS chapters serves East Bay\'s varied import economy and Port of Oakland access needs.',
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
      <section className="hero" aria-label="Concord HTS Classification Attorney Hero">
        <picture className="hero-bg">
          <img
            src="/images/hero-port-background.jpg"
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
          <h1>HTS Classification Attorney<br />Concord & Contra Costa County CA</h1>
          <p className="hero-subtitle">
            Expert HTS classification attorney serving Concord and East Bay importers. Harmonized Tariff Schedule expertise for Port of Oakland operations, binding rulings, and duty optimization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Classification Review</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Concord HTS Classification Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              East Bay HTS Classification Specialists
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Concord and Contra Costa County with expert <strong>HTS classification and tariff code</strong> services. Strategic location for East Bay businesses accessing Port of Oakland and Northern California distribution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">East Bay Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep experience with <strong>Contra Costa County import operations</strong>. Understanding of industrial, automotive, and consumer goods tariff codes.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Oakland Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct access to <strong>Port of Oakland customs operations</strong>. Rapid response to classification disputes and CBP challenges for East Bay importers.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Duty Minimization</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic <strong>tariff engineering</strong> to reduce import costs. Our HTS classification saves Concord businesses thousands annually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HTS Classification Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            HTS Classification Services in Concord
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Industrial Equipment & Machinery Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Concord HTS classification attorney, we provide <strong>expert classification for industrial equipment and machinery</strong> under HTS Chapter 84. From manufacturing equipment to construction machinery, proper classification affects duty rates (0-4.5% typically) and trade agreement eligibility. Critical for East Bay industrial importers accessing Port of Oakland.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Industrial machinery and manufacturing equipment HTS codes</li>
                <li>Construction equipment and heavy machinery classification</li>
                <li>Material handling and warehouse equipment</li>
                <li>HVAC systems and commercial refrigeration units</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Automotive Parts HTS Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Automotive parts classification</strong> (HTS Chapter 87) is highly complex with duty rates ranging from 0% to 25% depending on specific product and country of origin. Our Concord attorneys analyze parts specifications, USMCA eligibility for Mexican/Canadian imports, and alternative classifications to minimize duties for East Bay automotive importers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Engine components and transmission parts classification</li>
                <li>Electrical automotive parts and accessories</li>
                <li>Body parts, glass, and trim components</li>
                <li>USMCA automotive rules of origin coordination</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Binding Rulings for Complex Products</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our Concord HTS attorneys prepare <strong>comprehensive binding ruling requests</strong> for products with unclear or disputed classifications. We include technical specifications, manufacturing processes, General Rules of Interpretation analysis, and supporting documentation. Essential for Contra Costa County businesses requiring classification certainty before major import commitments.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>NY (National) ruling requests for standard products</li>
                <li>HQ (Headquarters) rulings for complex classification issues</li>
                <li>Multi-component product analysis and GRI application</li>
                <li>Port of Oakland coordination for pending rulings</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Engineering & Duty Reduction Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Tariff engineering</strong> analyzes product design, packaging, and import strategies to achieve the most favorable legal HTS classification. Our Concord attorneys have saved East Bay importers hundreds of thousands in annual duties through strategic classification planning, USMCA optimization, and alternative sourcing compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Product configuration analysis for optimal HTS codes</li>
                <li>USMCA duty-free eligibility for Mexican/Canadian goods</li>
                <li>Free Trade Agreement utilization (20+ FTAs available)</li>
                <li>Component importation vs. finished goods strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Port of Oakland Classification Dispute Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP challenges your HTS classification at Port of Oakland, immediate expert response prevents cargo detention and duty overpayment. Our Concord location provides <strong>rapid classification dispute defense</strong> through protests, internal advice requests, and technical expert support for East Bay importers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CF-29 reclassification notice response and defense</li>
                <li>19 USC § 1514 protest filings for adverse classifications</li>
                <li>Internal Advice requests to CBP Headquarters</li>
                <li>Court of International Trade litigation when necessary</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Classification Compliance & Audit Programs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proactive <strong>HTS classification audits</strong> identify errors before CBP does, preventing costly penalties and enforcement actions. Our Concord attorneys review import records, verify current classifications, implement compliance programs, and provide ongoing classification support for Contra Costa County businesses with diverse product portfolios.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Internal classification compliance reviews and audits</li>
                <li>Prior disclosure filings to minimize classification penalties</li>
                <li>Importer self-assessment programs for large operations</li>
                <li>Classification training for East Bay purchasing and logistics teams</li>
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
                  <Link to="/concord-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Concord Tariff Lawyer</span>
                    <p className="service-link__description">Section 301, antidumping</p>
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
                    <p className="service-link__description">Focused assessment defense</p>
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
              </div>
            </div>

            {/* Other Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/oakland-maritime-trade" className="service-link">
                    <span className="service-link__title">Oakland Maritime Trade</span>
                    <p className="service-link__description">Port of Oakland services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/antioch-customs-attorney" className="service-link">
                    <span className="service-link__title">Antioch Customs Attorney</span>
                    <p className="service-link__description">East Contra Costa services</p>
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
      <RelatedCityPages currentCity="Concord" region="bay-area" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free HTS Classification Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Concord HTS classification attorney team today. We'll review your products, analyze classification opportunities, and provide a clear strategy to optimize duty costs and ensure Port of Oakland compliance.
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

export default ConcordHTSClassificationPage;
