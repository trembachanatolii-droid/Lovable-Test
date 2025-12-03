import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const YucaipaCustomsBondPage: React.FC = () => {
  useMeta({
    title: 'Yucaipa Customs Bond Attorney | Import Bond Lawyer San Bernardino County CA',
    description: 'Yucaipa customs bond attorney for import compliance. Continuous bonds, single entry bonds, bond sufficiency. San Bernardino County customs lawyer. (310) 744-1328.',
    keywords: 'yucaipa customs bond attorney, san bernardino import bond lawyer, customs bond yucaipa, continuous bond attorney, single entry bond, bond sufficiency lawyer yucaipa, inland empire customs compliance',
    canonical: 'yucaipa-customs-bond-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-yucaipa.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Yucaipa Customs Bond Attorney - Import Bond Lawyer San Bernardino County CA',
        description: 'Yucaipa customs bond attorney specializing in continuous bonds, single entry bonds, and bond sufficiency for Inland Empire importers and manufacturers.',
        url: `${siteConfig.siteUrl}/yucaipa-customs-bond-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Yucaipa Customs Bond Attorney', url: `${siteConfig.siteUrl}/yucaipa-customs-bond-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why do Yucaipa importers need a customs bond?',
          answer: 'U.S. Customs and Border Protection (CBP) requires a customs bond for all commercial imports valued over $2,500. The bond guarantees payment of duties, taxes, and penalties to the government. Without a valid bond, CBP will not release your cargo, causing costly delays and storage fees.',
        },
        {
          question: 'What type of customs bond does my Yucaipa business need?',
          answer: 'If you import frequently (more than 3-4 times per year), a continuous bond is required and more cost-effective. Single entry bonds work for occasional imports or one-time shipments. Continuous bonds are also mandatory for ISF filing, FDA imports, and participation in CBP trusted trader programs. We analyze your business needs and recommend the right bond type.',
        },
        {
          question: 'How is customs bond sufficiency calculated?',
          answer: 'CBP calculates bond sufficiency as 10% of the duties, taxes, and fees you paid in the previous 12 months, with a $50,000 minimum for continuous bonds. If your import volume increases significantly, your bond may become insufficient, causing cargo holds. We monitor your bond sufficiency and proactively adjust coverage to prevent delays.',
        },
        {
          question: 'What happens if CBP makes a claim against my customs bond?',
          answer: 'CBP can make claims against your bond for unpaid duties, penalties, or compliance violations. If a claim is made, you must either pay the claim or challenge it through legal proceedings. We defend Yucaipa importers against CBP bond claims, negotiate settlements, and work to minimize financial exposure while protecting your import privileges.',
        },
        {
          question: 'How quickly can you help me obtain a customs bond in Yucaipa?',
          answer: 'We can typically arrange a customs bond within 24-48 hours for standard situations. If you have urgent cargo awaiting clearance, we offer expedited service and work with multiple surety companies to secure bonds quickly. Contact us immediately if you have time-sensitive import needs.',
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
      <section className="hero" aria-label="Yucaipa Customs Bond Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Yucaipa Customs Bond Attorney<br />Inland Empire Import Bond Lawyer</h1>
          <p className="hero-subtitle">
            Expert Yucaipa customs bond attorney serving San Bernardino County importers. Specialized in continuous bonds, single entry bonds, bond sufficiency, and CBP compliance for Inland Empire businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Yucaipa Customs Bond Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              San Bernardino County Customs Bond Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving <strong>Yucaipa and San Bernardino County</strong> with specialized customs bond legal services. We help importers, manufacturers, and distributors secure proper bond coverage and maintain CBP compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bond Specialists</h3>
              <p className="text-text-secondary leading-relaxed">
                Comprehensive expertise in <strong>all types of customs bonds, sufficiency requirements, and CBP regulations</strong>. We ensure proper coverage.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Local Service</h3>
              <p className="text-text-secondary leading-relaxed">
                Dedicated to <strong>Yucaipa, Redlands, Beaumont, and San Bernardino County</strong> business community with responsive support.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4" style={{ borderColor: '#3FBB94' }}>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Claims Defense</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Aggressive defense against CBP bond claims</strong> and penalties. We protect your financial interests and import rights.
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
                Continuous bonds provide <strong>unlimited import coverage for 12 months</strong> and are required for frequent importers, ISF filers, and companies in CBP compliance programs. We help Yucaipa businesses obtain competitive continuous bond rates from top-rated surety companies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Annual continuous bond procurement with competitive rates</li>
                <li>Bond amount calculations based on your import activity</li>
                <li>Surety company comparison and selection</li>
                <li>Automatic renewal management and monitoring</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Single Entry Bonds</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Single entry bonds cover <strong>one specific import transaction</strong> and expire after clearance. Ideal for occasional importers, high-value shipments, or special circumstances. We arrange single entry bonds quickly for time-sensitive Yucaipa imports.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Individual shipment bond coverage</li>
                <li>High-value cargo bond arrangements</li>
                <li>Temporary importation bonds (TIB) and ATA carnets</li>
                <li>24-48 hour turnaround for urgent shipments</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Bond Sufficiency Analysis & Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP requires bonds to be <strong>sufficient to cover potential duties and penalties</strong> based on import volume. Insufficient bonds cause cargo holds and compliance violations. We calculate required amounts, monitor sufficiency, and adjust coverage proactively.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Bond sufficiency calculations and annual reviews</li>
                <li>Response to CBP insufficiency notices and cargo holds</li>
                <li>Proactive bond amount increases based on growth</li>
                <li>Import volume forecasting and planning</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Bond Claims & Penalty Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP makes claims against your bond for <strong>duty underpayments, penalties, or violations</strong>, we provide aggressive legal defense. We challenge improper claims, negotiate settlements, and minimize financial exposure for Yucaipa importers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Defense against CBP bond breach allegations</li>
                <li>Penalty assessment challenges and administrative appeals</li>
                <li>Liquidated damages dispute resolution</li>
                <li>Prior Disclosure filings to mitigate penalties</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Importer of Record (IOR) Bond Setup</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Every Importer of Record must maintain a <strong>valid customs bond on file with CBP</strong>. We establish IOR entities, obtain required bonds, ensure proper filing, and maintain continuous compliance for businesses importing into Yucaipa.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>IOR entity setup and customs registration</li>
                <li>Customs bond procurement and CBP filing</li>
                <li>Foreign company U.S. import arrangements</li>
                <li>Customs broker coordination and bond verification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Specialized Bond Types</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Beyond standard import bonds, we arrange <strong>specialized bonds for unique compliance needs</strong> including drawback bonds, FTZ bonds, warehouse bonds, and carrier bonds for Yucaipa businesses with complex operations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Duty drawback bonds for refund programs</li>
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
                  <a href="#loma-linda-customs-bond-attorney" className="service-link">
                    <span className="service-link__title">Loma Linda Customs Bond</span>
                    <p className="service-link__description">Neighboring bond services</p>
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
      <RelatedCityPages currentCity="Yucaipa" region="inland-empire" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white" id="schedule-consultation">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Yucaipa customs bond attorney team today. We'll assess your import bond needs and provide expert guidance for your San Bernardino County business.
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

export default YucaipaCustomsBondPage;
