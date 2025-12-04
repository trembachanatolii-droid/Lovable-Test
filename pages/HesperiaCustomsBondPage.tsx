import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { Link } from 'react-router-dom';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const HesperiaCustomsBondPage: React.FC = () => {
  useMeta({
    title: 'Hesperia Customs Bond Attorney | Import Bond Lawyer High Desert CA',
    description: 'Hesperia customs bond attorney for import compliance. Expert continuous bonds, single entry bonds, bond sufficiency. High Desert customs lawyer. (310) 744-1328.',
    keywords: 'hesperia customs bond attorney, high desert import bond lawyer, customs bond hesperia, continuous bond attorney, single entry bond, bond sufficiency lawyer hesperia, customs compliance high desert',
    canonical: 'hesperia-customs-bond-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-hesperia.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Hesperia Customs Bond Attorney - Import Bond Lawyer High Desert CA',
        description: 'Hesperia customs bond attorney specializing in continuous bonds, single entry bonds, and bond sufficiency for High Desert importers and logistics companies.',
        url: `${siteConfig.siteUrl}/hesperia-customs-bond-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Hesperia Customs Bond Attorney', url: `${siteConfig.siteUrl}/hesperia-customs-bond-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What is a customs bond and why do Hesperia importers need one?',
          answer: 'A customs bond is a contract that guarantees payment of duties, taxes, and penalties to CBP. Every commercial importer in Hesperia bringing goods valued over $2,500 must have a customs bond. The bond protects the U.S. government and ensures compliance with import regulations.',
        },
        {
          question: 'What is the difference between a single entry bond and a continuous bond?',
          answer: 'A single entry bond covers one shipment and expires after that transaction clears. A continuous bond covers unlimited entries for one year and is required for importers making frequent shipments. Continuous bonds are more cost-effective for regular importers and required for ISF filing, FDA imports, and other CBP programs.',
        },
        {
          question: 'How much does a customs bond cost in Hesperia?',
          answer: 'Continuous bonds typically cost $400-$600 annually for importers with low-value shipments. Single entry bonds cost approximately 0.5% of the shipment value plus duties. Bond costs increase based on import volume, risk factors, and bond sufficiency requirements. We help Hesperia businesses obtain competitive bond rates.',
        },
        {
          question: 'What is bond sufficiency and how does it affect my imports?',
          answer: 'Bond sufficiency means your customs bond amount is adequate to cover potential duties, taxes, and penalties. CBP calculates sufficiency as 10% of duties/taxes paid in the prior year, with a $50,000 minimum. Insufficient bonds can cause cargo delays, holds, and compliance issues. We analyze your import activity and ensure proper bond coverage.',
        },
        {
          question: 'Can you help with customs bond claims and penalties in Hesperia?',
          answer: 'Yes, we defend importers when CBP makes claims against customs bonds including penalty assessments, bond breach allegations, and liquidated damages. We negotiate with CBP, prepare legal responses, and work to minimize financial exposure while protecting your bond and import privileges.',
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
      <section className="hero" aria-label="Hesperia Customs Bond Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Hesperia Customs Bond Attorney<br />High Desert Import Bond Lawyer</h1>
          <p className="hero-subtitle">
            Expert Hesperia customs bond attorney serving High Desert importers. Specialized in continuous bonds, single entry bonds, bond sufficiency, and CBP compliance for Victor Valley businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Hesperia Customs Bond Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              High Desert Customs Bond Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving <strong>Hesperia and the Victor Valley</strong> with specialized customs bond legal services. We help importers, manufacturers, and logistics companies secure proper bond coverage, maintain compliance, and defend against CBP bond claims.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bond Specialists</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep expertise in <strong>continuous bonds, single entry bonds, and bond sufficiency</strong>. We ensure proper coverage and compliance with CBP regulations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">High Desert Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Serving <strong>Hesperia, Apple Valley, Victorville, and the Victor Valley</strong> logistics community with regional customs expertise.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bond Defense</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Expert defense against CBP bond claims</strong> and penalty assessments. We protect your financial interests and import privileges.
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
                Continuous bonds cover <strong>unlimited import entries for one year</strong> and are required for frequent importers. Essential for ISF filing, FDA-regulated products, and importers with regular shipments. We help Hesperia businesses obtain competitive continuous bond rates and ensure proper coverage.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Annual continuous bond procurement and renewal</li>
                <li>Bond amount calculation based on import volume</li>
                <li>Surety company selection and rate negotiation</li>
                <li>Multi-year bond agreements for cost savings</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Single Entry Bonds</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Single entry bonds cover <strong>one specific shipment</strong> and are ideal for occasional importers or high-value transactions. We arrange single entry bonds for Hesperia businesses with infrequent imports, specialized cargo, or one-time transactions requiring CBP security.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Single transaction bond procurement</li>
                <li>High-value shipment bond arrangements</li>
                <li>Specialized cargo bond coverage (temporary imports, ATA carnets)</li>
                <li>Quick turnaround for urgent shipments</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Bond Sufficiency Analysis & Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP requires bonds to be <strong>sufficient to cover duties, taxes, and potential penalties</strong>. Insufficient bonds cause cargo holds and compliance issues. We analyze your import activity, calculate required bond amounts, and ensure CBP sufficiency compliance for Hesperia importers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Bond sufficiency calculations (10% rule and minimum requirements)</li>
                <li>Annual bond amount reviews and adjustments</li>
                <li>Response to CBP insufficiency notices</li>
                <li>Proactive compliance to prevent cargo delays</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Bond Claims & Penalty Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP makes claims against your customs bond for <strong>unpaid duties, penalties, or violations</strong>, we provide aggressive defense. We negotiate with CBP, challenge improper claims, and minimize financial exposure while protecting your import privileges.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Defense against CBP bond breach allegations</li>
                <li>Penalty mitigation and negotiation</li>
                <li>Liquidated damages disputes and appeals</li>
                <li>Prior Disclosure filings to reduce penalties</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Importer of Record (IOR) Bond Setup</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Every Importer of Record needs a <strong>valid customs bond to clear goods through CBP</strong>. We establish IOR relationships, obtain required bonds, and ensure continuous compliance for businesses importing into Hesperia and the High Desert region.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>IOR establishment and bond procurement</li>
                <li>Foreign company U.S. bond arrangements</li>
                <li>Customs broker coordination and bond verification</li>
                <li>Annual bond renewal and compliance monitoring</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Specialized Bond Types</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Beyond standard import bonds, we arrange <strong>specialized bonds for unique situations</strong> including drawback bonds, foreign trade zone bonds, temporary importation bonds (TIB), and warehouse bonds for Hesperia businesses with complex customs needs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Drawback bonds for duty recovery programs</li>
                <li>Foreign trade zone (FTZ) admission bonds</li>
                <li>Temporary importation bonds (TIB) and ATA carnets</li>
                <li>Bonded warehouse and container station bonds</li>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense</span>
                    <p className="service-link__description">CBP audits & penalty defense</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Trade Compliance</span>
                    <p className="service-link__description">Import compliance programs</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Nearby Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/inland-empire-customs-attorney" className="service-link">
                    <span className="service-link__title">Inland Empire Customs</span>
                    <p className="service-link__description">Regional trade law coverage</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/ontario-trade-compliance" className="service-link">
                    <span className="service-link__title">Ontario Trade Attorney</span>
                    <p className="service-link__description">Airport logistics hub</p>
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
                  <Link to="/trade-law-faq" className="service-link">
                    <span className="service-link__title">Customs Bond FAQ</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">Import Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/cbp-audit-defense" className="service-link">
                    <span className="service-link__title">CBP Audit Defense</span>
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
      <RelatedCityPages currentCity="Hesperia" region="inland-empire" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white" id="schedule-consultation">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Hesperia customs bond attorney team today. We'll assess your import bond needs and provide expert guidance for your High Desert business.
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

export default HesperiaCustomsBondPage;
