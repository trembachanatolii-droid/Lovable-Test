import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const UplandCustomsBondPage: React.FC = () => {
  useMeta({
    title: 'Upland Customs Bond Attorney | Import Bond Lawyer San Bernardino County CA',
    description: 'Upland customs bond attorney for import compliance. Continuous bonds, single entry bonds, bond sufficiency. Inland Empire customs lawyer. (310) 744-1328.',
    keywords: 'upland customs bond attorney, san bernardino import bond lawyer, customs bond upland, continuous bond attorney, single entry bond, bond sufficiency lawyer upland, inland empire customs compliance',
    canonical: 'upland-customs-bond-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-upland.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Upland Customs Bond Attorney - Import Bond Lawyer San Bernardino County CA',
        description: 'Upland customs bond attorney specializing in continuous bonds, single entry bonds, and bond sufficiency for Inland Empire importers and distribution businesses.',
        url: `${siteConfig.siteUrl}/#upland-customs-bond-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/#california-offices` },
        { name: 'Upland Customs Bond Attorney', url: `${siteConfig.siteUrl}/#upland-customs-bond-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What customs bond services are available for Upland businesses?',
          answer: 'We provide comprehensive customs bond services for Upland importers including continuous bond procurement, single entry bonds, bond sufficiency analysis, bond renewal management, defense against CBP bond claims, IOR setup with bond filing, and specialized bonds for FTZ, drawback, and warehouse operations.',
        },
        {
          question: 'How do I choose between a continuous bond and single entry bonds?',
          answer: 'Choose a continuous bond if you import more than 3-4 times per year or need ISF filing capability. Continuous bonds are cost-effective for regular importers and required for many CBP programs. Single entry bonds work for occasional imports or one-time transactions. We analyze your import frequency and business needs to recommend the optimal bond strategy.',
        },
        {
          question: 'What are the risks of having an insufficient customs bond?',
          answer: 'An insufficient bond can cause CBP to hold your cargo until you increase coverage, resulting in storage fees, delivery delays, and potential customer dissatisfaction. Severe insufficiency may trigger compliance reviews or suspension of import privileges. We monitor bond sufficiency proactively and adjust coverage before problems arise.',
        },
        {
          question: 'How much does a customs bond cost for Upland importers?',
          answer: 'Continuous bonds typically cost $400-$600 annually for small importers, with higher amounts for larger operations based on duty volume. Single entry bonds cost approximately 0.5% of shipment value plus duties. We work with multiple surety companies to obtain competitive rates for Upland businesses and ensure you pay a fair price.',
        },
        {
          question: 'Can you help if my customs bond was terminated or canceled?',
          answer: 'Yes, if your bond was terminated due to non-payment, compliance issues, or surety cancellation, we can help you obtain replacement coverage quickly to resume imports. We also address the underlying issues that led to termination and work to restore your import privileges with CBP. Time is critical in these situations - contact us immediately.',
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
      <section className="hero" aria-label="Upland Customs Bond Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1565373679056-dc98247c086f?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Upland Customs Bond Attorney<br />Inland Empire Import Bond Lawyer</h1>
          <p className="hero-subtitle">
            Expert Upland customs bond attorney serving San Bernardino County importers. Specialized in continuous bonds, single entry bonds, bond sufficiency, and CBP compliance for Inland Empire businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Upland Customs Bond Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Inland Empire Customs Bond Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving <strong>Upland and the Inland Empire</strong> with specialized customs bond legal services. We help importers, distributors, and manufacturers secure proper bond coverage and maintain CBP compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bond Specialists</h3>
              <p className="text-text-secondary leading-relaxed">
                Comprehensive expertise in <strong>customs bonds, sufficiency requirements, and CBP compliance</strong>. We ensure proper coverage for all import activities.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regional Service</h3>
              <p className="text-text-secondary leading-relaxed">
                Dedicated to <strong>Upland, Rancho Cucamonga, Ontario, and San Bernardino County</strong> business community with local expertise.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Claims Defense</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Aggressive defense against CBP bond claims</strong> and penalty assessments. We protect your financial interests and import rights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customs Bond Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Comprehensive Customs Bond Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Continuous Customs Bonds</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Continuous bonds provide <strong>year-round coverage for unlimited import entries</strong> and are required for frequent importers, ISF filing, and companies participating in CBP compliance programs. We help Upland businesses obtain competitive rates and maintain compliant bond coverage.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Annual continuous bond procurement with competitive pricing</li>
                <li>Bond amount calculations based on import volume and risk</li>
                <li>Surety company comparison and selection assistance</li>
                <li>Automatic renewal management to prevent lapses in coverage</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Single Entry Bonds</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Single entry bonds cover <strong>individual import transactions</strong> and are cost-effective for occasional importers or special circumstances. We arrange single entry bonds quickly for Upland businesses with infrequent imports or high-value shipments requiring dedicated coverage.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>One-time shipment bond coverage</li>
                <li>High-value cargo and specialized merchandise bonds</li>
                <li>Temporary importation bonds (TIB) for exhibitions and demos</li>
                <li>Expedited service for time-sensitive shipments (24-48 hours)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Bond Sufficiency Analysis & Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP requires customs bonds to be <strong>sufficient to cover potential duties and penalties</strong> based on your import activity. Insufficient bonds cause cargo delays and compliance violations. We calculate required amounts, monitor sufficiency, and adjust coverage proactively.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Bond sufficiency calculations and compliance reviews</li>
                <li>Quarterly import volume monitoring and analysis</li>
                <li>Response to CBP insufficiency notices and cargo holds</li>
                <li>Proactive bond increases to prevent disruptions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Bond Claims & Penalty Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP makes claims against your bond for <strong>unpaid duties, penalties, or violations</strong>, we provide expert legal defense. We challenge improper claims, negotiate with CBP, and minimize financial exposure for Upland importers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Defense against CBP bond breach allegations</li>
                <li>Penalty assessment challenges and mitigation strategies</li>
                <li>Liquidated damages disputes and resolution</li>
                <li>Prior Disclosure filings to reduce penalties significantly</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Importer of Record (IOR) Bond Setup</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Every Importer of Record must have a <strong>valid customs bond on file with CBP</strong>. We establish IOR entities, obtain required bonds, coordinate with brokers, and ensure continuous compliance for businesses importing into Upland and the Inland Empire.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>IOR entity establishment and CBP registration</li>
                <li>Customs bond procurement and filing with CBP</li>
                <li>Foreign company U.S. importing entity setup</li>
                <li>Customs broker coordination and bond verification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Specialized Bond Types</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Beyond standard import bonds, we arrange <strong>specialized bonds for unique compliance requirements</strong> including drawback bonds, FTZ bonds, warehouse bonds, and carrier bonds for Upland businesses with complex operations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Duty drawback bonds for refund and recovery programs</li>
                <li>Foreign trade zone (FTZ) operator and admission bonds</li>
                <li>Bonded warehouse and container freight station bonds</li>
                <li>International carrier and cartage bonds</li>
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

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden border border-neutral-200">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense</span>
                    <p className="service-link__description">CBP audits & penalty defense</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: 0, bottom: 0, width: '96px', background: 'linear-gradient(135deg, #3FBB94 0%, #2a8a6b 100%)', clipPath: 'polygon(100% 0, 0% 50%, 100% 100%)', transition: 'right 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'white', width: '20px', height: '20px' }}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#regulatory-compliance-advisory" className="service-link">
                    <span className="service-link__title">Trade Compliance</span>
                    <p className="service-link__description">Import compliance programs</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: 0, bottom: 0, width: '96px', background: 'linear-gradient(135deg, #3FBB94 0%, #2a8a6b 100%)', clipPath: 'polygon(100% 0, 0% 50%, 100% 100%)', transition: 'right 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'white', width: '20px', height: '20px' }}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#tariffs-duties-classification-guide" className="service-link">
                    <span className="service-link__title">Tariff Classification</span>
                    <p className="service-link__description">HTS code optimization</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: 0, bottom: 0, width: '96px', background: 'linear-gradient(135deg, #3FBB94 0%, #2a8a6b 100%)', clipPath: 'polygon(100% 0, 0% 50%, 100% 100%)', transition: 'right 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'white', width: '20px', height: '20px' }}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Other Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden border border-neutral-200">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Nearby Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#inland-empire-customs-attorney" className="service-link">
                    <span className="service-link__title">Inland Empire Customs</span>
                    <p className="service-link__description">Regional trade law coverage</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: 0, bottom: 0, width: '96px', background: 'linear-gradient(135deg, #3FBB94 0%, #2a8a6b 100%)', clipPath: 'polygon(100% 0, 0% 50%, 100% 100%)', transition: 'right 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'white', width: '20px', height: '20px' }}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#rancho-cucamonga-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Rancho Cucamonga Tariff</span>
                    <p className="service-link__description">Neighboring trade attorney</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: 0, bottom: 0, width: '96px', background: 'linear-gradient(135deg, #3FBB94 0%, #2a8a6b 100%)', clipPath: 'polygon(100% 0, 0% 50%, 100% 100%)', transition: 'right 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'white', width: '20px', height: '20px' }}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Helpful Guides */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden border border-neutral-200">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Guides</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#trade-law-faq" className="service-link">
                    <span className="service-link__title">Customs Bond FAQ</span>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: 0, bottom: 0, width: '96px', background: 'linear-gradient(135deg, #3FBB94 0%, #2a8a6b 100%)', clipPath: 'polygon(100% 0, 0% 50%, 100% 100%)', transition: 'right 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'white', width: '20px', height: '20px' }}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#tariffs-duties-classification-guide" className="service-link">
                    <span className="service-link__title">Import Compliance Guide</span>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: 0, bottom: 0, width: '96px', background: 'linear-gradient(135deg, #3FBB94 0%, #2a8a6b 100%)', clipPath: 'polygon(100% 0, 0% 50%, 100% 100%)', transition: 'right 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'white', width: '20px', height: '20px' }}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/cbp-audit-defense" className="service-link">
                    <span className="service-link__title">CBP Audit Defense</span>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: 0, bottom: 0, width: '96px', background: 'linear-gradient(135deg, #3FBB94 0%, #2a8a6b 100%)', clipPath: 'polygon(100% 0, 0% 50%, 100% 100%)', transition: 'right 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'white', width: '20px', height: '20px' }}>
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
      <RelatedCityPages currentCity="Upland" region="inland-empire" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white" id="schedule-consultation">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Upland customs bond attorney team today. We'll assess your import bond needs and provide expert guidance for your Inland Empire business.
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

export default UplandCustomsBondPage;
