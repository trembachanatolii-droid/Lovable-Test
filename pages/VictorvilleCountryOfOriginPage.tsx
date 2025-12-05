import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { Link } from 'react-router-dom';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const VictorvilleCountryOfOriginPage: React.FC = () => {
  useMeta({
    title: 'Victorville Country of Origin Attorney | High Desert Product Origin Lawyer',
    description: 'Victorville country of origin attorney providing expert legal services for substantial transformation, marking compliance, and origin determination. High Desert trade law. (310) 744-1328.',
    keywords: 'country of origin attorney victorville, product origin lawyer victorville, substantial transformation victorville, marking requirements victorville, origin determination victorville, high desert trade attorney',
    canonical: 'victorville-country-of-origin-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-victorville.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Victorville Country of Origin Attorney - High Desert Product Origin Legal Services',
        description: 'Victorville country of origin attorney providing comprehensive legal representation for manufacturers and importers navigating substantial transformation, marking requirements, and trade agreement compliance.',
        url: `${siteConfig.siteUrl}/victorville-country-of-origin-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Victorville Country of Origin Attorney', url: `${siteConfig.siteUrl}/victorville-country-of-origin-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why do Victorville businesses need country of origin legal services?',
          answer: 'High Desert manufacturers and importers must accurately determine and declare country of origin to CBP. Country of origin affects duty rates, trade agreement eligibility, government procurement compliance, and consumer labeling. Incorrect origin determinations can result in CBP penalties ranging from 20% to 800% of duties lost, marking duties of 10%, and shipment holds. Our Victorville country of origin attorney ensures compliance.',
        },
        {
          question: 'What is the substantial transformation test?',
          answer: 'Substantial transformation occurs when manufacturing or processing results in a new and different article of commerce with a distinct name, character, and use. For example, importing steel and manufacturing automotive parts results in substantial transformation - the country of origin becomes where the parts were manufactured. Our Victorville attorney analyzes your manufacturing to determine origin.',
        },
        {
          question: 'What are country of origin marking requirements?',
          answer: 'U.S. Customs requires imported products to be marked with their country of origin in a conspicuous, legible, indelible, and permanent manner. The marking must survive normal distribution and reach the ultimate purchaser. Acceptable marking methods include molding, die-stamping, etching, engraving, and permanent labels. Violations result in 10% marking duties and potential entry refusal.',
        },
        {
          question: 'Can you help with USMCA and other free trade agreements?',
          answer: 'Yes. USMCA (United States-Mexico-Canada Agreement) and other FTAs provide duty-free treatment for qualifying goods. We analyze product-specific rules of origin, calculate regional value content, trace originating materials, and prepare certifications of origin. We also defend against verification requests and respond to customs authority inquiries from the U.S., Mexico, Canada, and other FTA partners.',
        },
        {
          question: 'Do you serve other High Desert and Inland Empire cities?',
          answer: 'Yes, from our Victorville service area we represent businesses throughout the High Desert including Hesperia, Apple Valley, Adelanto, Barstow, and Phelan. We also serve Inland Empire clients in Fontana, Rancho Cucamonga, Ontario, and San Bernardino. We represent clients at Port of Los Angeles, Port of Long Beach, and Port of Oakland.',
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
      <section className="hero" aria-label="Victorville Country of Origin Attorney Hero">
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
          <h1>Victorville Country of Origin Attorney<br />High Desert Product Origin Counsel</h1>
          <p className="hero-subtitle">
            Victorville country of origin attorney providing expert legal counsel on substantial transformation, marking compliance, and origin determination for High Desert manufacturers and importers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Victorville Country of Origin Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              High Desert Country of Origin Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Victorville and the High Desert with specialized country of origin legal services. Our firm provides <strong>comprehensive origin analysis, compliance strategies, and CBP defense</strong> for manufacturers, importers, and government contractors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep expertise in <strong>manufacturing origin determinations, assembly operations, and multi-country production</strong> for High Desert manufacturers.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Marking Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Comprehensive guidance on <strong>country of origin marking requirements</strong>, acceptable methods, and ultimate purchaser rules to avoid 10% marking duties.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Trade Agreement Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Expert knowledge of <strong>USMCA, FTA rules of origin, and preferential trade programs</strong> for duty reduction and market access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Country of Origin Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Country of Origin Legal Services in Victorville
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Substantial Transformation Analysis</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Victorville country of origin attorney, we analyze manufacturing and assembly operations to determine if substantial transformation occurred. We apply the <strong>name, character, and use test, evaluate tariff classification shifts, and assess value-added</strong> to establish product origin with legal certainty.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Name, character, and use test application</li>
                <li>Manufacturing process documentation</li>
                <li>Tariff shift analysis (HTS classification changes)</li>
                <li>CBP precedent research and application</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Country of Origin Marking Requirements</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Country of origin marking must be conspicuous, legible, indelible, and permanent. We advise on acceptable marking methods, ultimate purchaser determinations, and exceptions. Our Victorville marking attorney helps you avoid <strong>10% marking duties, CBP holds, and re-exportation requirements</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Marking method selection (molding, stamping, labels)</li>
                <li>Ultimate purchaser analysis</li>
                <li>Container marking and substantial transformation</li>
                <li>Marking exception eligibility</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA Rules of Origin & Certification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA provides duty-free treatment for qualifying goods traded between the U.S., Mexico, and Canada. We analyze <strong>product-specific rules of origin, calculate regional value content, trace originating materials</strong>, and prepare certifications of origin for importers, exporters, and producers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Product-specific rule of origin analysis</li>
                <li>Regional value content (RVC) calculations</li>
                <li>Originating materials tracing and documentation</li>
                <li>USMCA certification of origin preparation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Free Trade Agreement Origin Determinations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The U.S. has free trade agreements with 20 countries providing duty-free or reduced-duty treatment. Our Victorville FTA attorney provides <strong>origin determinations, certifications, and audit defense</strong> for Korea (KORUS), Chile, Australia, Singapore, CAFTA-DR, and other FTA partners.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Korea FTA (KORUS) origin analysis</li>
                <li>Chile, Australia, Singapore FTA certification</li>
                <li>CAFTA-DR origin compliance</li>
                <li>FTA verification and audit response</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Government Procurement & TAA Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Trade Agreements Act (TAA) requires federal contractors to certify that products are <strong>U.S.-made or from TAA designated countries</strong>. We provide TAA compliance opinions, substantial transformation analysis for multi-country manufacturing, and origin certifications for GSA Schedule contracts.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Trade Agreements Act (TAA) compliance</li>
                <li>TAA designated country determinations</li>
                <li>Buy American Act analysis</li>
                <li>GSA Schedule origin certifications</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Binding Rulings & Legal Opinions</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP binding rulings provide <strong>legal certainty, audit protection, and consistent origin treatment</strong> at all U.S. ports of entry. Our Victorville customs attorney prepares ruling requests with detailed manufacturing documentation, technical specifications, and legal analysis for CBP's Office of Regulations and Rulings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HQ and NY binding ruling requests</li>
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
                  <Link to="/fontana-trade-attorney" className="service-link">
                    <span className="service-link__title">Fontana</span>
                    <p className="service-link__description">Inland Empire trade attorney</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/rancho-cucamonga-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Rancho Cucamonga</span>
                    <p className="service-link__description">Inland Empire customs attorney</p>
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
                  <Link to="/resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Tariffs Guide</span>
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
      <RelatedCityPages currentCity="Victorville" region="inland-empire" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Victorville country of origin attorney team today. We'll analyze your manufacturing processes, determine substantial transformation, and ensure marking and trade agreement compliance for your High Desert business.
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

export default VictorvilleCountryOfOriginPage;
