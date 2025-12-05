
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LosAngelesUSMCACertificationPage: React.FC = () => {
  useMeta({
    title: 'USMCA Certification Attorney Los Angeles | NAFTA Replacement Lawyer',
    description: 'Los Angeles USMCA certification attorney. Expert USMCA origin compliance, certificate of origin, NAFTA replacement. Trade agreement lawyer. (310) 744-1328.',
    keywords: 'usmca certification attorney los angeles, usmca lawyer los angeles, nafta replacement attorney, usmca origin compliance lawyer, certificate of origin attorney california',
    canonical: 'los-angeles-usmca-certification-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-usmca-la.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Los Angeles USMCA Certification Attorney - NAFTA Replacement & Origin Compliance Lawyer',
        description: 'Los Angeles USMCA certification attorney specializing in USMCA origin compliance, certificates of origin, and trade agreement qualification.',
        url: `${siteConfig.siteUrl}/los-angeles-usmca-certification-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Los Angeles USMCA Certification Attorney', url: `${siteConfig.siteUrl}/los-angeles-usmca-certification-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What is USMCA and how does it differ from NAFTA?',
          answer: 'USMCA (United States-Mexico-Canada Agreement) replaced NAFTA on July 1, 2020. Key differences include: (1) higher Regional Value Content (RVC) requirements for automotive (75% vs. 62.5%), (2) stricter textile and apparel rules of origin, (3) elimination of NAFTA Certificate of Origin form - replaced with flexible certification, (4) new labor value content requirements for autos, (5) enhanced customs enforcement and verification, and (6) updated product-specific rules of origin. USMCA maintains duty-free treatment for qualifying goods but with tighter compliance requirements.',
        },
        {
          question: 'Do I need a specific form for USMCA certification?',
          answer: 'No. Unlike NAFTA, USMCA does not require a specific certificate form. The certification can be on company letterhead, commercial invoice, or any document containing required data elements: (1) certifier contact information, (2) exporter/producer/importer details, (3) HS classification and description, (4) origin criterion (A, B, C, or D), (5) blanket period (if applicable), and (6) certifier signature and date. This flexibility allows electronic certifications and simplified processes.',
        },
        {
          question: 'What are the USMCA origin criteria (A, B, C, D)?',
          answer: 'USMCA has four origin criteria: Criterion A - Goods wholly obtained or produced in North America (e.g., mined, harvested). Criterion B - Goods produced using only North American materials. Criterion C - Goods produced using non-North American materials that meet product-specific rules of origin (most common). Criterion D - Goods meeting special rules (certain automotive, textile products). Most imports qualify under Criterion C through tariff shift or Regional Value Content calculations.',
        },
        {
          question: 'How do I calculate Regional Value Content (RVC) for USMCA?',
          answer: 'RVC measures North American content as a percentage of product value. USMCA allows two methods: Transaction Value Method: RVC = [(Transaction Value - VNM) / Transaction Value] x 100. Net Cost Method: RVC = [(Net Cost - VNM) / Net Cost] x 100. VNM = Value of Non-Originating Materials. Different products have different RVC thresholds (40-75%). Automotive products face the highest requirements. We help companies calculate RVC and structure supply chains for USMCA qualification.',
        },
        {
          question: 'Can CBP verify my USMCA claims and what are the penalties?',
          answer: 'Yes. CBP can verify USMCA claims through: (1) written questionnaires to certifiers, (2) visits to production facilities, and (3) requests for documentation. If you cannot substantiate your USMCA claim, CBP will deny preferential treatment and assess regular duties retroactively, plus interest and potential penalties. False USMCA certifications can result in civil penalties up to domestic value of goods and potential criminal prosecution. We help companies maintain proper USMCA documentation and respond to CBP verifications.',
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
      <section className="hero" aria-label="Los Angeles USMCA Certification Attorney Hero">
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
          <h1>Los Angeles USMCA Certification Attorney<br />NAFTA Replacement Lawyer</h1>
          <p className="hero-subtitle">
            Expert USMCA certification attorney serving Los Angeles importers and exporters. Specialized USMCA origin compliance, certificates of origin, Regional Value Content, and trade agreement qualification.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose USMCA Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              USMCA Trade Agreement Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              USMCA governs <strong>$1.3 trillion in North American trade annually</strong>. Los Angeles companies importing from or exporting to Mexico and Canada need expert USMCA compliance counsel to maximize duty savings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">USMCA Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                We focus on <strong>USMCA and free trade agreement</strong> compliance. Deep expertise in origin rules, RVC calculations, and certification requirements.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Duty Elimination</h3>
              <p className="text-text-secondary leading-relaxed">
                USMCA provides <strong>duty-free treatment</strong> for qualifying goods. Proper certification eliminates millions in annual duty costs for LA companies.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CBP Verification Defense</h3>
              <p className="text-text-secondary leading-relaxed">
                Expert defense of <strong>CBP USMCA verifications</strong>. We help companies substantiate origin claims and avoid duty assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USMCA Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            USMCA Certification Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA Certificate of Origin Preparation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA certification is <strong>flexible but requires specific data elements</strong>. We prepare compliant certifications that withstand CBP scrutiny.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA certification format and required data elements</li>
                <li>Origin criterion determination (A, B, C, or D)</li>
                <li>Single vs. blanket certification strategies</li>
                <li>Electronic certification and invoice integration</li>
                <li>Exporter, producer, and importer certification rules</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Product-Specific Rules of Origin Analysis</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA has <strong>detailed product-specific rules</strong> in Annex 4-B. We analyze whether your products qualify through tariff shift, RVC, or other requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Tariff shift rules (change in tariff classification)</li>
                <li>Regional Value Content (RVC) calculations</li>
                <li>Combination rules (tariff shift + RVC)</li>
                <li>Product-specific processes and operations</li>
                <li>De minimis provisions (10% non-originating materials)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Regional Value Content (RVC) Calculations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                RVC requirements vary by product. <strong>Automotive faces 75% RVC</strong>, other products range from 40-60%. We calculate RVC and structure supply chains for compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Transaction Value Method RVC calculations</li>
                <li>Net Cost Method RVC (required for automotive)</li>
                <li>Material tracing and value determination</li>
                <li>Accumulation and roll-up methodologies</li>
                <li>Supplier certification and documentation programs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Automotive USMCA Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Automotive products face the <strong>strictest USMCA requirements</strong>: 75% RVC, Labor Value Content (LVC), and steel/aluminum requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Automotive RVC calculation (Net Cost Method)</li>
                <li>Labor Value Content (LVC) compliance (40-45% requirement)</li>
                <li>Steel and aluminum origin requirements (70%)</li>
                <li>Core parts and principal parts tracing</li>
                <li>Alternative staging regime (ASR) strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Textile & Apparel USMCA Rules</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Textile and apparel have <strong>"yarn forward" rules</strong>. Most products must use North American yarn and fabric to qualify for USMCA.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Yarn forward and fiber forward rules</li>
                <li>Tariff preference levels (TPLs) and exceptions</li>
                <li>Short supply list provisions</li>
                <li>Textile component tracing</li>
                <li>Customs textile enforcement and verification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP USMCA Verification Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively verifies USMCA claims. <strong>Failure to substantiate results in duty assessments</strong>. We defend verification inquiries and facility visits.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Written verification questionnaire responses</li>
                <li>Factory visit coordination and preparation</li>
                <li>Documentation compilation and substantiation</li>
                <li>Mexican/Canadian competent authority coordination</li>
                <li>Post-verification corrective action and compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            USMCA Industries We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Automotive & Auto Parts</li>
                <li>• Electronics & Technology</li>
                <li>• Industrial Machinery</li>
                <li>• Medical Devices</li>
                <li>• Aerospace Components</li>
                <li>• Plastics & Chemicals</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Consumer Goods</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Apparel & Textiles</li>
                <li>• Footwear & Leather Goods</li>
                <li>• Furniture & Home Goods</li>
                <li>• Food & Beverages</li>
                <li>• Consumer Electronics</li>
                <li>• Sporting Goods</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Agriculture & Resources</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Agricultural Products</li>
                <li>• Processed Foods</li>
                <li>• Wine & Spirits</li>
                <li>• Steel & Aluminum</li>
                <li>• Energy Equipment</li>
                <li>• Mining & Minerals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Serving Los Angeles USMCA Community
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Los Angeles Manufacturing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve <strong>LA manufacturers and importers</strong> trading with Mexico/Canada:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Downtown LA & Fashion District</li>
                <li>• Vernon & Commerce (manufacturing hubs)</li>
                <li>• South Bay (Torrance, Carson)</li>
                <li>• San Gabriel Valley</li>
                <li>• Orange County manufacturers</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">California USMCA Trade</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA businesses throughout California:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Bay Area tech and manufacturing</li>
                <li>• Sacramento & Central Valley ag</li>
                <li>• San Diego biotech and manufacturing</li>
                <li>• Inland Empire distribution</li>
                <li>• California-Mexico border trade</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">California-Mexico Trade</h3>
            <p className="text-center text-neutral-200 mb-4">
              California is the <strong>largest U.S. exporter to Mexico</strong> ($32B annually) and imports over $60B from Mexico. Los Angeles is the primary gateway for this trade, with major automotive, electronics, and consumer goods flows utilizing USMCA.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Companies Choose Trembach Law for USMCA
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">USMCA Trade Agreement Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general trade lawyers, we have <strong>deep USMCA expertise</strong> - product-specific rules, RVC calculations, automotive compliance, and textile rules. We stay current on USMCA developments.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Duty Savings</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our USMCA clients save <strong>millions annually</strong> by eliminating duties on qualifying goods. Proper certification and compliance unlock these savings while maintaining CBP defensibility.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Verification Success Rate</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We have <strong>successfully defended</strong> numerous CBP USMCA verifications, helping clients substantiate origin claims and avoid retroactive duty assessments.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Supply Chain Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We help companies <strong>restructure supply chains</strong> to achieve USMCA qualification - moving production, changing suppliers, or modifying products to meet origin rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Los Angeles USMCA Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving Los Angeles & Southern California)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Access:</strong> Convenient to Los Angeles County
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">USMCA Resources</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>CBP:</strong> USMCA implementation and verification</li>
                <li><strong>Port of LA/LB:</strong> Major gateway for Mexican imports</li>
                <li><strong>USTR:</strong> Trade agreement policy and updates</li>
                <li><strong>Mexico/Canada:</strong> Cross-border coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Trade Agreement Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Trade Compliance</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Trade Compliance Programs</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
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
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">CBP Defense</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/customs-defense-litigation" className="service-link">
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

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Industries</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/anaheim-manufacturing-trade-attorney" className="service-link">
                    <span className="service-link__title">Manufacturing Trade</span>
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
            Schedule Your Free USMCA Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Los Angeles USMCA certification attorneys today. We'll analyze your Mexico/Canada trade, assess USMCA qualification, and develop strategies to maximize duty savings.
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

export default LosAngelesUSMCACertificationPage;
