import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { Link } from 'react-router-dom';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LomaLindaCustomsBondPage: React.FC = () => {
  useMeta({
    title: 'Loma Linda Customs Bond Attorney | Import Bond Lawyer San Bernardino CA',
    description: 'Loma Linda customs bond attorney for import compliance. Continuous bonds, single entry bonds, bond sufficiency. San Bernardino customs lawyer. (310) 744-1328.',
    keywords: 'loma linda customs bond attorney, san bernardino import bond lawyer, customs bond loma linda, continuous bond attorney, single entry bond, bond sufficiency lawyer loma linda, inland empire customs compliance',
    canonical: 'loma-linda-customs-bond-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-loma-linda.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Loma Linda Customs Bond Attorney - Import Bond Lawyer San Bernardino CA',
        description: 'Loma Linda customs bond attorney specializing in continuous bonds, single entry bonds, and bond sufficiency for San Bernardino County importers and medical device companies.',
        url: `${siteConfig.siteUrl}/loma-linda-customs-bond-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Loma Linda Customs Bond Attorney', url: `${siteConfig.siteUrl}/loma-linda-customs-bond-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Do medical device importers in Loma Linda need special customs bonds?',
          answer: 'Medical device importers need standard customs bonds, but they must also comply with FDA import regulations. A continuous bond is typically required because FDA-regulated products require additional entry documentation. We help Loma Linda medical device companies obtain appropriate bond coverage and ensure FDA compliance at import.',
        },
        {
          question: 'What is the minimum customs bond amount required in California?',
          answer: 'The minimum continuous customs bond amount is $50,000 for most importers. However, if your annual duties and taxes exceed $500,000, your bond must be at least 10% of that amount. Single entry bonds are calculated as the entered value plus estimated duties, multiplied by three. We calculate the exact bond amount you need based on your import activity.',
        },
        {
          question: 'Can a foreign company get a customs bond without a U.S. entity?',
          answer: 'Foreign companies must have either a U.S. entity or designate a resident agent for service of process to obtain a customs bond. We help foreign companies establish proper legal structures, obtain bonds, and set up compliant importing arrangements for Loma Linda area operations.',
        },
        {
          question: 'How long does a continuous customs bond last?',
          answer: 'Continuous customs bonds are valid for one year from the effective date and automatically renew if premiums are paid. The bond remains in effect until canceled by the surety with 30 days notice to CBP. We manage renewal dates and ensure uninterrupted coverage to prevent import disruptions.',
        },
        {
          question: 'What should I do if CBP says my customs bond is insufficient?',
          answer: 'If CBP notifies you of bond insufficiency, you must increase your bond amount within the timeframe specified (usually 30 days) or CBP may hold your cargo. We respond to insufficiency notices immediately, calculate the required increase, and arrange higher bond limits to maintain uninterrupted imports for Loma Linda businesses.',
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
      <section className="hero" aria-label="Loma Linda Customs Bond Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Loma Linda Customs Bond Attorney<br />San Bernardino Import Bond Lawyer</h1>
          <p className="hero-subtitle">
            Expert Loma Linda customs bond attorney serving San Bernardino County importers. Specialized in continuous bonds, single entry bonds, bond sufficiency, and FDA import compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Loma Linda Customs Bond Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              San Bernardino County Customs Bond Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving <strong>Loma Linda and San Bernardino County</strong> with specialized customs bond legal services. We help importers, medical device companies, and manufacturers secure proper bond coverage and maintain CBP compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bond Experts</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep expertise in <strong>customs bonds, FDA import compliance, and CBP regulations</strong>. We ensure proper coverage for all industries.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Local Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Serving <strong>Loma Linda, Redlands, San Bernardino, and surrounding areas</strong> with dedicated regional support.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bond Protection</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Expert defense against CBP claims</strong> and penalty assessments. We protect your financial interests and import privileges.
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
                Continuous bonds provide <strong>12-month coverage for unlimited imports</strong> and are essential for regular importers, ISF filing, and FDA-regulated product compliance. We help Loma Linda businesses obtain competitive continuous bond rates and maintain compliant coverage.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Annual continuous bond procurement with best rates</li>
                <li>Bond amount calculations based on import volume and duties</li>
                <li>Surety company selection and rate negotiation</li>
                <li>Automatic renewal management and premium payment tracking</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Single Entry Bonds</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Single entry bonds cover <strong>one import transaction</strong> and are ideal for occasional importers or special shipments. We arrange single entry bonds quickly for Loma Linda businesses with infrequent imports or high-value cargo requiring dedicated coverage.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Individual shipment bond coverage</li>
                <li>High-value cargo and special merchandise bonds</li>
                <li>Temporary importation bonds (TIB) for trade shows and demos</li>
                <li>Express service for urgent shipments (24-48 hours)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Bond Sufficiency Analysis & Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP requires bonds to be <strong>sufficient to cover duties, taxes, and potential penalties</strong>. Insufficient bonds trigger cargo holds and compliance violations. We calculate required amounts, monitor sufficiency throughout the year, and adjust coverage proactively.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Bond sufficiency calculations (10% rule compliance)</li>
                <li>Quarterly bond reviews and adjustments for growing importers</li>
                <li>Response to CBP insufficiency notices and cargo holds</li>
                <li>Import activity forecasting and planning</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Bond Claims & Penalty Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP makes claims against your bond for <strong>unpaid duties, penalties, or compliance violations</strong>, we provide aggressive legal defense. We challenge improper claims, negotiate with CBP, and minimize financial exposure for Loma Linda importers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Defense against CBP bond breach allegations and demands</li>
                <li>Penalty assessment challenges and mitigation strategies</li>
                <li>Liquidated damages disputes and administrative appeals</li>
                <li>Prior Disclosure filings to reduce penalties up to 75%</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Importer of Record (IOR) Bond Setup</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Every Importer of Record must have a <strong>valid customs bond filed with CBP</strong>. We establish IOR entities, obtain required bonds, coordinate with customs brokers, and ensure continuous compliance for businesses importing into Loma Linda and San Bernardino County.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>IOR entity establishment and CBP registration</li>
                <li>Customs bond procurement and filing with CBP</li>
                <li>Foreign company U.S. import entity setup</li>
                <li>Customs broker coordination and bond verification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Specialized Bond Types</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Beyond standard import bonds, we arrange <strong>specialized bonds for unique compliance situations</strong> including drawback bonds, FTZ bonds, warehouse bonds, and FDA product bonds for Loma Linda businesses with complex operations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Duty drawback bonds for refund claim programs</li>
                <li>Foreign trade zone (FTZ) operator and admission bonds</li>
                <li>Bonded warehouse and container freight station bonds</li>
                <li>FDA product bonds and international carrier bonds</li>
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
                  <Link to="/customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense</span>
                    <p className="service-link__description">CBP audits & penalty defense</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: 0, bottom: 0, width: '96px', background: 'linear-gradient(135deg, #3FBB94 0%, #2a8a6b 100%)', clipPath: 'polygon(100% 0, 0% 50%, 100% 100%)', transition: 'right 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'white', width: '20px', height: '20px' }}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Trade Compliance</span>
                    <p className="service-link__description">FDA & import compliance</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: 0, bottom: 0, width: '96px', background: 'linear-gradient(135deg, #3FBB94 0%, #2a8a6b 100%)', clipPath: 'polygon(100% 0, 0% 50%, 100% 100%)', transition: 'right 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'white', width: '20px', height: '20px' }}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">Tariff Classification</span>
                    <p className="service-link__description">HTS code optimization</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: 0, bottom: 0, width: '96px', background: 'linear-gradient(135deg, #3FBB94 0%, #2a8a6b 100%)', clipPath: 'polygon(100% 0, 0% 50%, 100% 100%)', transition: 'right 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'white', width: '20px', height: '20px' }}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden border border-neutral-200">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Nearby Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/inland-empire-customs-attorney" className="service-link">
                    <span className="service-link__title">Inland Empire Customs</span>
                    <p className="service-link__description">Regional trade law coverage</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: 0, bottom: 0, width: '96px', background: 'linear-gradient(135deg, #3FBB94 0%, #2a8a6b 100%)', clipPath: 'polygon(100% 0, 0% 50%, 100% 100%)', transition: 'right 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'white', width: '20px', height: '20px' }}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/yucaipa-customs-bond-attorney" className="service-link">
                    <span className="service-link__title">Yucaipa Customs Bond</span>
                    <p className="service-link__description">Neighboring bond services</p>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: 0, bottom: 0, width: '96px', background: 'linear-gradient(135deg, #3FBB94 0%, #2a8a6b 100%)', clipPath: 'polygon(100% 0, 0% 50%, 100% 100%)', transition: 'right 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'white', width: '20px', height: '20px' }}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Helpful Guides */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden border border-neutral-200">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Guides</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/trade-law-faq" className="service-link">
                    <span className="service-link__title">Customs Bond FAQ</span>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: 0, bottom: 0, width: '96px', background: 'linear-gradient(135deg, #3FBB94 0%, #2a8a6b 100%)', clipPath: 'polygon(100% 0, 0% 50%, 100% 100%)', transition: 'right 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'white', width: '20px', height: '20px' }}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">Import Compliance Guide</span>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: 0, bottom: 0, width: '96px', background: 'linear-gradient(135deg, #3FBB94 0%, #2a8a6b 100%)', clipPath: 'polygon(100% 0, 0% 50%, 100% 100%)', transition: 'right 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'white', width: '20px', height: '20px' }}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/fda-import-compliance" className="service-link">
                    <span className="service-link__title">FDA Import Guide</span>
                    <div className="triangle-slide" style={{ position: 'absolute', right: '-96px', top: 0, bottom: 0, width: '96px', background: 'linear-gradient(135deg, #3FBB94 0%, #2a8a6b 100%)', clipPath: 'polygon(100% 0, 0% 50%, 100% 100%)', transition: 'right 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'white', width: '20px', height: '20px' }}>
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
      <RelatedCityPages currentCity="Loma Linda" region="inland-empire" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white" id="schedule-consultation">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Loma Linda customs bond attorney team today. We'll assess your import bond needs and provide expert guidance for your San Bernardino County business.
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

export default LomaLindaCustomsBondPage;
