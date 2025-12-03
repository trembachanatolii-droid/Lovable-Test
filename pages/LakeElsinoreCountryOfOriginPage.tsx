import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LakeElsinoreCountryOfOriginPage: React.FC = () => {
  useMeta({
    title: 'Lake Elsinore Country of Origin Attorney | Product Origin Lawyer CA',
    description: 'Lake Elsinore country of origin attorney specializing in substantial transformation, marking compliance, and origin determination. Expert trade law counsel. (310) 744-1328.',
    keywords: 'country of origin attorney lake elsinore, product origin lawyer lake elsinore, substantial transformation lake elsinore, marking requirements lake elsinore, origin determination lake elsinore, trade attorney lake elsinore',
    canonical: 'lake-elsinore-country-of-origin-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-lake-elsinore.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Lake Elsinore Country of Origin Attorney - Product Origin Legal Services',
        description: 'Lake Elsinore country of origin attorney providing expert legal representation for manufacturers and importers navigating substantial transformation, marking requirements, and origin compliance.',
        url: `${siteConfig.siteUrl}/lake-elsinore-country-of-origin-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Lake Elsinore Country of Origin Attorney', url: `${siteConfig.siteUrl}/lake-elsinore-country-of-origin-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why is country of origin important for my Lake Elsinore business?',
          answer: 'Country of origin affects tariff rates, trade agreement eligibility, government procurement requirements, and consumer labeling. Incorrect origin claims can result in CBP penalties ranging from negligence (actual loss of duties + 20%) to gross negligence (2-4x duties) or fraud (4-8x duties). Our Lake Elsinore country of origin attorney ensures compliant origin determinations.',
        },
        {
          question: 'How does substantial transformation work?',
          answer: 'Substantial transformation occurs when articles lose their identity and become new articles with a distinct name, character, and use. For example, importing fabric and sewing garments results in substantial transformation - the country of origin becomes where the garments were sewn, not where the fabric was woven. Our firm analyzes your manufacturing to determine if substantial transformation occurred.',
        },
        {
          question: 'What are the penalties for incorrect country of origin marking?',
          answer: 'Incorrectly marked or unmarked goods may be subject to a marking duty equal to 10% of the customs value. CBP may refuse entry and require re-exportation or proper marking before release. Repeated violations can result in enhanced penalties and increased CBP scrutiny. Our Lake Elsinore marking attorney ensures compliance to avoid these penalties.',
        },
        {
          question: 'Can you help with USMCA origin certifications?',
          answer: 'Yes. USMCA (United States-Mexico-Canada Agreement) allows duty-free treatment for qualifying goods. We analyze product-specific rules of origin, calculate regional value content, trace originating materials, and prepare USMCA certifications. We also handle verifications and respond to CBP and foreign customs authority requests.',
        },
        {
          question: 'Do you serve other Southwest Riverside cities?',
          answer: 'Yes, from our Lake Elsinore service area we represent businesses throughout Southwest Riverside County including Murrieta, Temecula, Menifee, Wildomar, Canyon Lake, Perris, and Hemet. We also serve clients at Southern California ports including Port of Los Angeles, Port of Long Beach, and Port of San Diego.',
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
      <section className="hero" aria-label="Lake Elsinore Country of Origin Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Lake Elsinore Country of Origin Attorney<br />Product Origin Determination Counsel</h1>
          <p className="hero-subtitle">
            Lake Elsinore country of origin attorney specializing in substantial transformation analysis, marking compliance, and origin determination for Southwest Riverside County businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Lake Elsinore Country of Origin Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Southwest Riverside County Origin Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Lake Elsinore and Southwest Riverside County with specialized country of origin legal services. Our firm provides <strong>comprehensive origin analysis and compliance strategies</strong> for manufacturers, importers, and government contractors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Origin Determination Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep expertise in <strong>substantial transformation principles, tariff shift rules, and regional value content</strong> calculations for accurate origin determinations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Marking Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Expert guidance on <strong>country of origin marking requirements</strong>, acceptable methods, ultimate purchaser rules, and marking duty avoidance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">FTA & USMCA Knowledge</h3>
              <p className="text-text-secondary leading-relaxed">
                Comprehensive knowledge of <strong>USMCA and free trade agreement rules of origin</strong> for duty savings and preferential treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Country of Origin Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Country of Origin Legal Services in Lake Elsinore
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Substantial Transformation Opinions</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Lake Elsinore country of origin attorney, we analyze manufacturing processes to determine if substantial transformation occurred. This analysis considers <strong>name, character, and use changes, tariff classification shifts, and value added</strong>. We provide written legal opinions for audit protection.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Manufacturing process documentation</li>
                <li>Name, character, and use analysis</li>
                <li>Tariff shift evaluation</li>
                <li>Legal opinion letters</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Marking Requirements & Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Country of origin marking must be conspicuous, legible, indelible, and permanent. We advise on acceptable marking methods including molding, stamping, etching, labels, and tags. Our Lake Elsinore marking attorney helps you avoid <strong>10% marking duties and shipment delays</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Marking method selection and approval</li>
                <li>Ultimate purchaser analysis</li>
                <li>Exceptions and special rules</li>
                <li>Marking violation defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA Rules of Origin & Certification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA provides duty-free treatment for qualifying North American goods. We analyze <strong>product-specific rules, regional value content (net cost or transaction value), and originating materials</strong>. We prepare certifications of origin and defend against verification requests.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Product-specific rule analysis</li>
                <li>RVC calculations (net cost/transaction value)</li>
                <li>Certification of origin preparation</li>
                <li>Verification response</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FTA Origin Determinations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Beyond USMCA, the U.S. has free trade agreements with 20 countries. Each FTA has unique rules of origin. Our Lake Elsinore origin attorney provides <strong>FTA eligibility analysis, origin certifications, and audit support</strong> for Korea, Chile, Australia, Singapore, and other FTA partners.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Korea FTA (KORUS) origin</li>
                <li>Chile, Australia, Singapore FTAs</li>
                <li>CAFTA-DR origin certification</li>
                <li>Peru, Colombia, Panama FTAs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Government Procurement Origin Analysis</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Trade Agreements Act (TAA) requires federal contractors to certify that products are U.S.-made or from designated countries. We provide <strong>TAA compliance opinions, substantial transformation analysis for multi-country production</strong>, and origin certifications for GSA schedules.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Trade Agreements Act (TAA) compliance</li>
                <li>Buy American Act analysis</li>
                <li>Designated country determinations</li>
                <li>GSA Schedule certifications</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Origin Ruling Requests</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Binding rulings from CBP provide legal certainty and audit defense for country of origin determinations. Our Lake Elsinore customs attorney prepares <strong>detailed ruling requests with technical specifications, manufacturing flow charts, and legal analysis</strong> for CBP's Office of Regulations and Rulings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HQ and NY ruling preparation</li>
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
                    <p className="service-link__description">Temecula Valley trade law</p>
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
                    <p className="service-link__description">Port of San Diego services</p>
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
                  <a href="#resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Tariffs Guide</span>
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
      <RelatedCityPages currentCity="Lake Elsinore" region="inland-empire" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Lake Elsinore country of origin attorney team today. We'll analyze your manufacturing processes, evaluate substantial transformation, and ensure marking compliance for your business.
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

export default LakeElsinoreCountryOfOriginPage;
