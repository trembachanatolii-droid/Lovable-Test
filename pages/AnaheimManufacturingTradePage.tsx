
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const AnaheimManufacturingTradePage: React.FC = () => {
  useMeta({
    title: 'Manufacturing Trade Attorney Anaheim | Industrial Import Lawyer',
    description: 'Anaheim manufacturing trade attorney & industrial import lawyer. Expert machinery classification, manufacturing equipment tariffs, trade compliance. Orange County. (310) 744-1328.',
    keywords: 'manufacturing trade attorney anaheim, industrial import lawyer anaheim, machinery tariff attorney orange county, manufacturing equipment lawyer, industrial trade attorney california',
    canonical: 'anaheim-manufacturing-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-manufacturing-anaheim.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Anaheim Manufacturing Trade Attorney - Industrial Import & Machinery Lawyer',
        description: 'Anaheim manufacturing trade attorney specializing in industrial imports, machinery classification, manufacturing equipment tariffs, and trade compliance.',
        url: `${siteConfig.siteUrl}/anaheim-manufacturing-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Anaheim Manufacturing Trade Attorney', url: `${siteConfig.siteUrl}/anaheim-manufacturing-trade-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What are tariff rates on manufacturing equipment and machinery?',
          answer: 'Manufacturing equipment tariffs vary significantly by machine type. Industrial machinery often enters duty-free or at low rates (0-3.5%), but Section 301 tariffs add 7.5-25% on Chinese manufacturing equipment. Proper HTS classification is critical - is it "metalworking machinery," "plastic processing equipment," or "parts"? Classification determines both base duty and Section 301 applicability.',
        },
        {
          question: 'How can a manufacturing trade attorney reduce equipment import costs?',
          answer: 'Our Anaheim manufacturing trade attorneys reduce costs through: (1) precise HTS classification to find the lowest legal duty rate for machinery, (2) Section 301 tariff strategies for Chinese equipment, (3) duty drawback for re-exported equipment, (4) foreign trade zone (FTZ) programs to defer or eliminate duties, (5) first sale for export valuation, and (6) USMCA origin qualification for Canadian/Mexican equipment.',
        },
        {
          question: 'What is the difference between "complete machines" and "parts" for customs?',
          answer: 'This distinction dramatically affects tariff rates. CBP applies the "principal use" test - if components are assembled into a functional machine before importation, it\'s classified as a complete machine under its specific HTS code. If imported separately, parts are classified under general "parts" provisions, often at different duty rates. We help manufacturers structure imports to achieve optimal classification.',
        },
        {
          question: 'Do Orange County manufacturers face CBP audits?',
          answer: 'Yes. Orange County has significant manufacturing activity, making it a CBP audit focus area. Common audit issues include: machinery valuation (related-party transactions, tooling costs), classification of multi-function equipment, Section 301 tariff compliance, country of origin for assembled equipment, and first sale for export claims. We defend manufacturers in CBP Focused Assessments and audits.',
        },
        {
          question: 'Can I use Foreign Trade Zones for manufacturing equipment?',
          answer: 'Absolutely. FTZs are highly beneficial for manufacturers importing equipment and raw materials. Benefits include: duty deferral until equipment enters U.S. commerce, potential duty elimination on re-exported products, inverted tariff benefits when finished goods have lower duties than inputs, and reduced merchandise processing fees. We help manufacturers activate FTZ operations.',
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
      <section className="hero" aria-label="Anaheim Manufacturing Trade Attorney Hero">
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
          <h1>Anaheim Manufacturing Trade Attorney<br />Industrial Import Lawyer</h1>
          <p className="hero-subtitle">
            Expert manufacturing trade attorney serving Anaheim and Orange County. Specialized machinery classification, industrial equipment tariffs, FTZ compliance, and manufacturing trade law.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact#schedule-consultation" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Manufacturing Trade Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Orange County Manufacturing Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Orange County is home to <strong>thousands of manufacturers</strong> across aerospace, medical devices, food processing, and industrial sectors. Our manufacturing trade attorneys understand the customs challenges facing OC manufacturers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We specialize in <strong>manufacturing trade law</strong> - machinery, industrial equipment, raw materials, and finished goods. Deep expertise in manufacturing-specific HTS codes.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Equipment Cost Savings</h3>
              <p className="text-text-secondary leading-relaxed">
                Proven strategies to <strong>reduce duty costs</strong> on manufacturing equipment through precise classification, FTZ programs, and tariff engineering.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct access to <strong>Port of LA/Long Beach</strong>, the primary gateway for manufacturing equipment and industrial machinery imports to Southern California.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Trade Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Manufacturing Trade Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Industrial Machinery HTS Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Machinery classification is <strong>highly technical</strong>. We analyze machine function, principal use, and components to find the most cost-effective HTS classification.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Metalworking machinery and machine tools (HTS Chapter 84)</li>
                <li>Plastic and rubber processing equipment</li>
                <li>Textile and apparel manufacturing machinery</li>
                <li>Food processing and packaging equipment</li>
                <li>CNC machines and industrial automation</li>
                <li>Complete machines vs. parts classification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariffs on Manufacturing Equipment</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariffs severely impact manufacturers importing Chinese equipment. Lists 1-4 cover <strong>most industrial machinery</strong>. We develop mitigation strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 coverage analysis for specific machinery</li>
                <li>Alternative sourcing compliance (Taiwan, Japan, Germany)</li>
                <li>Substantial transformation for third-country assembly</li>
                <li>Equipment parts vs. complete machine strategies</li>
                <li>Section 301 exclusion petitions (when available)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign Trade Zones (FTZ) for Manufacturers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                FTZs provide <strong>significant cost savings</strong> for manufacturers importing equipment and raw materials. Defer, reduce, or eliminate customs duties through FTZ operations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FTZ activation for manufacturing facilities</li>
                <li>Manufacturing authority applications (production in FTZ)</li>
                <li>Inverted tariff programs (lower duties on finished goods)</li>
                <li>Weekly entry procedures for high-volume operations</li>
                <li>Zone-to-zone transfers and subzone applications</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Manufacturing Equipment Valuation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP closely scrutinizes <strong>machinery valuations</strong>. Tooling costs, engineering fees, and related-party transactions all affect customs value.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Transaction value analysis for equipment purchases</li>
                <li>Related-party transfer pricing for manufacturing equipment</li>
                <li>Assist valuation (tooling, molds, dies, engineering)</li>
                <li>First sale for export programs</li>
                <li>Used equipment and lease valuation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Raw Materials & Components Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Manufacturers importing raw materials face <strong>unique tariff challenges</strong>. We optimize classification and manage Section 232 steel/aluminum tariffs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Steel and aluminum Section 232 tariff strategies</li>
                <li>Metal alloy and specialty material classification</li>
                <li>Plastic resin and polymer tariffs</li>
                <li>Electronic components and semiconductors</li>
                <li>Chemical and industrial raw material classification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Manufacturing Audits & Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Manufacturers are <strong>high-value audit targets</strong>. We defend Focused Assessments and Quick Response Audits focusing on classification, valuation, and origin.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP Focused Assessment (FA) defense</li>
                <li>Classification and valuation audit responses</li>
                <li>Country of origin verification for manufactured goods</li>
                <li>Substantial transformation analysis</li>
                <li>Prior disclosure filings to cap penalties</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Sectors */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Manufacturing Sectors We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Industrial Equipment</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Metalworking & Machine Tools</li>
                <li>• CNC Machinery & Automation</li>
                <li>• Plastic Injection Molding Equipment</li>
                <li>• Packaging & Labeling Machinery</li>
                <li>• Material Handling Equipment</li>
                <li>• Industrial Robots & Automation</li>
                <li>• Quality Control & Testing Equipment</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Industries</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Aerospace & Defense Manufacturing</li>
                <li>• Medical Device Manufacturing</li>
                <li>• Food & Beverage Processing</li>
                <li>• Automotive Parts Manufacturing</li>
                <li>• Electronics Assembly</li>
                <li>• Apparel & Textile Manufacturing</li>
                <li>• Chemical & Pharmaceutical</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Raw Materials</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Steel & Aluminum (Section 232)</li>
                <li>• Plastic Resins & Polymers</li>
                <li>• Electronic Components</li>
                <li>• Chemical Raw Materials</li>
                <li>• Rubber & Elastomers</li>
                <li>• Specialty Metals & Alloys</li>
                <li>• Industrial Chemicals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Orange County Service */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Serving Orange County Manufacturing
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Anaheim & North OC Manufacturing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve <strong>Orange County's diverse manufacturing sector</strong>:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Anaheim & Buena Park</li>
                <li>• Fullerton & La Habra</li>
                <li>• Brea & Placentia</li>
                <li>• Orange & Villa Park</li>
                <li>• Yorba Linda & Tustin</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">South & Central OC Manufacturing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Manufacturers throughout Orange County:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Irvine & Santa Ana</li>
                <li>• Costa Mesa & Fountain Valley</li>
                <li>• Huntington Beach & Westminster</li>
                <li>• Garden Grove & Stanton</li>
                <li>• Lake Forest & Mission Viejo</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Orange County Manufacturing Hub</h3>
            <p className="text-center text-neutral-200 mb-4">
              Orange County has <strong>over 7,000 manufacturing establishments</strong> employing 170,000+ workers, producing aerospace components, medical devices, food products, and advanced manufacturing. We serve this vital industrial community.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Manufacturers Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Trade Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general trade lawyers, we have <strong>deep expertise in manufacturing</strong> customs issues - machinery classification, FTZ programs, raw material tariffs, and manufacturing-specific compliance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Cost Savings</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our manufacturing clients achieve <strong>substantial duty savings</strong> through FTZ programs, precise classification, and tariff engineering - often recovering our fees many times over.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">FTZ Implementation Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We have extensive experience <strong>activating and operating FTZ programs</strong> for manufacturers, including manufacturing authority, inverted tariffs, and weekly entry procedures.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Small to Enterprise Manufacturers</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We represent <strong>small job shops through Fortune 500 manufacturers</strong>. Whether you're importing one machine or managing complex supply chains, we provide expert counsel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Orange County Manufacturers
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving Anaheim & Orange County Manufacturing)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Access:</strong> Easy access to Orange County via 101 to 5
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Port & FTZ Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>Port of LA/Long Beach:</strong> Primary OC manufacturing import gateway</li>
                <li><strong>FTZ #50 (LA/LB):</strong> Orange County manufacturers can use FTZ programs</li>
                <li><strong>Orange County Subzones:</strong> On-site FTZ activation assistance</li>
                <li><strong>Quick Access:</strong> 45-60 minutes to ports from Anaheim</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Manufacturing Trade Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">FTZ Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/long-beach-ftz-compliance-attorney" className="service-link">
                    <span className="service-link__title">FTZ Compliance</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Trade Compliance</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">HTS Classification</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Tariffs</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">CBP Defense</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/customs-defense" className="service-link">
                    <span className="service-link__title">Customs Defense</span>
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Manufacturing Trade Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Anaheim manufacturing trade attorneys today. We'll analyze your machinery imports, assess FTZ opportunities, and develop comprehensive tariff reduction strategies.
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

export default AnaheimManufacturingTradePage;
