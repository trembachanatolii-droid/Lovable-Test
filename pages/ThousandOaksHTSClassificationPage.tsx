
import React, { lazy, Suspense, useEffect } from 'react';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const ThousandOaksHTSClassificationPage: React.FC = () => {
  useMeta({
    title: 'HTS Classification Attorney Thousand Oaks | Tariff Code Lawyer Ventura County CA',
    description: 'Expert HTS classification attorney serving Thousand Oaks & Ventura County. Harmonized Tariff Schedule expertise, binding rulings, duty optimization. Free consultation (310) 744-1328.',
    keywords: 'HTS classification attorney thousand oaks, harmonized tariff schedule lawyer thousand oaks, tariff classification expert thousand oaks, HTS code attorney ventura county, binding ruling attorney thousand oaks, tariff code lawyer thousand oaks ca, customs classification attorney thousand oaks, biotech tariff classification',
    canonical: 'thousand-oaks-hts-classification',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-thousand-oaks.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'HTS Classification Attorney Thousand Oaks - Harmonized Tariff Schedule Expert Ventura County',
        description: 'Expert HTS classification attorney serving Thousand Oaks and Ventura County importers. Harmonized Tariff Schedule expertise, binding rulings, duty optimization for biotech, medical, and technology companies.',
        url: `${siteConfig.siteUrl}/thousand-oaks-hts-classification`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Thousand Oaks HTS Classification Attorney', url: `${siteConfig.siteUrl}/thousand-oaks-hts-classification` }
      ]),
      generateFAQSchema([
        {
          question: 'Why do Thousand Oaks biotech and medical device companies need HTS classification attorneys?',
          answer: 'Thousand Oaks is home to major biotech and medical device manufacturers like Amgen. HTS classification for pharmaceuticals, biologics, medical devices, and laboratory equipment is highly technical and heavily regulated. Proper classification affects duty rates, FDA approval timing, and regulatory compliance. Our Thousand Oaks HTS attorneys specialize in life sciences tariff codes.',
        },
        {
          question: 'How does HTS classification impact duty costs for Ventura County importers?',
          answer: 'Proper HTS classification can reduce duty costs by 20-70% through tariff engineering, free trade agreements, and special programs. Ventura County technology and biotech companies importing laboratory equipment, diagnostic devices, and scientific instruments benefit significantly from expert classification. Small classification changes can save hundreds of thousands annually.',
        },
        {
          question: 'What is the process for obtaining a binding ruling for medical devices?',
          answer: 'Our Thousand Oaks HTS attorneys prepare comprehensive binding ruling requests including technical product specifications, manufacturing processes, FDA classifications, and intended use analysis. For medical devices, we coordinate HTS classification with FDA device classifications to ensure regulatory alignment. Binding rulings provide 5+ years of classification certainty.',
        },
        {
          question: 'How do you handle classification disputes for Ventura County biotech companies?',
          answer: 'When CBP challenges your pharmaceutical or medical device classification, we provide aggressive defense through protests, internal advice requests, and litigation. Our Thousand Oaks attorneys understand both HTS tariff law and FDA regulations, essential for defending biotech product classifications. We prevent cargo detention and duty overpayment.',
        },
        {
          question: 'What Ventura County industries benefit from your HTS classification services?',
          answer: 'We serve Thousand Oaks and Ventura County biotechnology companies, pharmaceutical manufacturers, medical device importers, diagnostic equipment companies, laboratory supply distributors, and technology firms. Our specialized knowledge of life sciences HTS codes (Chapters 28, 29, 30, 90) is critical for Ventura County\'s innovation economy.',
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
      <section className="hero" aria-label="Thousand Oaks HTS Classification Attorney Hero">
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
          <h1>HTS Classification Attorney<br />Thousand Oaks & Ventura County CA</h1>
          <p className="hero-subtitle">
            Expert HTS classification attorney serving Thousand Oaks and Ventura County biotech, medical device, and technology importers. Harmonized Tariff Schedule expertise for life sciences and innovation companies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Classification Review</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Thousand Oaks HTS Classification Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Ventura County HTS Classification Specialists
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Thousand Oaks and Ventura County with expert <strong>HTS classification for biotech and medical device</strong> imports. Specialized Harmonized Tariff Schedule knowledge for life sciences and technology sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Life Sciences Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep expertise in <strong>biotech and medical device HTS classification</strong>. Understanding of pharmaceutical tariff codes, FDA regulations, and life sciences supply chains.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Duty Minimization</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic <strong>tariff engineering for medical imports</strong>. Our HTS classification reduces duty costs for Ventura County biotech and medical device companies.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regulatory Alignment</h3>
              <p className="text-text-secondary leading-relaxed">
                Coordinated <strong>HTS and FDA classification</strong>. We ensure tariff codes align with FDA device classifications and regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HTS Classification Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            HTS Classification Services in Thousand Oaks
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Biotech & Pharmaceutical HTS Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Thousand Oaks HTS classification attorney, we provide <strong>specialized pharmaceutical and biologics classification</strong> under HTS Chapters 28, 29, and 30. From APIs to finished drug products, proper classification affects duty rates, quota eligibility, and regulatory approval timing. Critical for Ventura County biotech companies managing global supply chains.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Pharmaceutical active ingredients (APIs) classification</li>
                <li>Biologics and biosimilar products HTS analysis</li>
                <li>Diagnostic reagents and laboratory chemicals</li>
                <li>Clinical trial materials and investigational drugs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Medical Device Tariff Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Medical device HTS classification</strong> requires coordination between tariff codes and FDA device classifications (Class I/II/III). Our Thousand Oaks attorneys align HTS Chapter 90 classifications with FDA regulatory status, ensuring compliance and optimal duty treatment for Ventura County medical device manufacturers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Diagnostic imaging equipment classification</li>
                <li>Surgical instruments and implantable devices</li>
                <li>In-vitro diagnostic (IVD) devices and test kits</li>
                <li>Patient monitoring and therapeutic equipment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Binding Rulings for Life Sciences Products</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our Thousand Oaks HTS attorneys prepare <strong>comprehensive binding ruling requests</strong> for complex biotech and medical products. We include technical specifications, manufacturing processes, FDA classifications, and intended use analysis. Essential for Ventura County life sciences companies requiring classification certainty for global distribution.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>NY and HQ ruling requests for pharmaceuticals</li>
                <li>Medical device binding ruling preparation</li>
                <li>Laboratory equipment classification rulings</li>
                <li>Coordinated HTS/FDA regulatory analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Engineering & Duty Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Tariff engineering for life sciences</strong> can significantly reduce import costs. Our Thousand Oaks attorneys analyze product formulations, packaging configurations, and import strategies to achieve the most favorable legal HTS classification. We've saved Ventura County biotech companies hundreds of thousands in annual duties.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Product formulation analysis for optimal classification</li>
                <li>Free Trade Agreement eligibility (USMCA for Mexican/Canadian sources)</li>
                <li>Special duty programs for pharmaceuticals and medical devices</li>
                <li>Component vs. finished product classification strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Classification Dispute Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP challenges your pharmaceutical or medical device classification, immediate expert response is critical. Our Thousand Oaks HTS attorneys defend your position through <strong>protests, internal advice requests, and litigation</strong>. We understand both tariff law and FDA regulations - essential for biotech classification disputes.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CF-29 reclassification notice response for medical products</li>
                <li>19 USC § 1514 protest filings for pharmaceutical classifications</li>
                <li>Internal Advice requests to CBP Headquarters</li>
                <li>Court of International Trade litigation for complex disputes</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Classification Compliance for Life Sciences</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proactive <strong>HTS classification audits</strong> prevent costly CBP enforcement actions. Our Thousand Oaks attorneys review biotech and medical device import records, verify classifications align with FDA status, and implement compliance programs. Essential for Ventura County life sciences companies with complex product portfolios.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Internal classification compliance reviews</li>
                <li>Prior disclosure filings for pharmaceutical classification errors</li>
                <li>FDA/HTS alignment verification programs</li>
                <li>Classification training for biotech regulatory teams</li>
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
                  <a href="#export-controls-sanctions" className="service-link">
                    <span className="service-link__title">Export Controls</span>
                    <p className="service-link__description">ITAR, EAR for medical/biotech</p>
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
                    <p className="service-link__description">Life sciences compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#customs-defense-litigation" className="service-link">
                    <span className="service-link__title">CBP Audit Defense</span>
                    <p className="service-link__description">Focused assessment defense</p>
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
                  <a href="#oxnard-tariff-attorney" className="service-link">
                    <span className="service-link__title">Oxnard Tariff Attorney</span>
                    <p className="service-link__description">Ventura County services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#los-angeles-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Los Angeles Tariff Lawyer</span>
                    <p className="service-link__description">LA County HTS services</p>
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
                    <span className="service-link__title">HTS Classification Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/binding-rulings-guide" className="service-link">
                    <span className="service-link__title">Binding Rulings Guide</span>
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

      {/* Related City Pages */}
      <RelatedCityPages currentCity="Thousand Oaks" region="ventura" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free HTS Classification Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Thousand Oaks HTS classification attorney team today. We'll review your biotech or medical device products, analyze classification opportunities, and provide a clear strategy to optimize duty costs and ensure regulatory compliance.
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

export default ThousandOaksHTSClassificationPage;
