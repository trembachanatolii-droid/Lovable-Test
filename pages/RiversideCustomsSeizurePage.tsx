
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const RiversideCustomsSeizurePage: React.FC = () => {
  useMeta({
    title: 'Customs Seizure Attorney Riverside CA | Cargo Detention Lawyer | Trembach Law',
    description: 'Customs seizure attorney in Riverside CA. Expert cargo detention lawyer helping Inland Empire businesses recover seized goods. CBP seizure defense, detention release, petition filing. Free consultation.',
    keywords: 'customs seizure attorney riverside, cargo detention lawyer riverside, riverside customs seizure defense, seized goods attorney riverside, CBP seizure lawyer riverside, customs detention attorney riverside, import seizure defense riverside, goods seized at customs riverside, release seized cargo riverside, inland empire customs attorney, riverside trade lawyer, customs forfeiture attorney riverside, petition for release riverside',
    canonical: 'riverside-customs-seizure',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-riverside.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Customs Seizure Attorney Riverside CA - Cargo Detention Lawyer',
        description: 'Expert customs seizure attorney serving Riverside and the Inland Empire. Comprehensive seizure defense including detention release, petition filing, and forfeiture prevention.',
        url: `${siteConfig.siteUrl}/riverside-customs-seizure`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Customs Seizure Attorney Riverside', url: `${siteConfig.siteUrl}/riverside-customs-seizure` }
      ]),
      generateFAQSchema([
        {
          question: 'What should I do if CBP seizes my goods in Riverside?',
          answer: 'Contact a customs seizure attorney immediately. You have strict deadlines to respond to seizure notices. Our Riverside seizure lawyers can assess your case, determine grounds for release, and file appropriate petitions within 24-48 hours. Acting quickly is essential to avoid forfeiture.',
        },
        {
          question: 'Why would CBP seize my cargo at the ports serving Riverside?',
          answer: 'CBP seizes goods for various reasons including suspected IPR violations (counterfeits), UFLPA forced labor concerns, incorrect classification, undeclared goods, prohibited items, or safety violations. Our Riverside customs seizure attorneys analyze seizure notices to determine the best defense strategy.',
        },
        {
          question: 'Can I get my seized goods released in Riverside?',
          answer: 'Yes, in many cases seized goods can be released. Options include filing a petition for remission, providing evidence to rebut violations, negotiating a mitigated penalty, or challenging the seizure basis. Our Riverside seizure attorneys have successfully recovered millions in detained cargo.',
        },
        {
          question: 'How long does the seizure process take?',
          answer: 'Seizure proceedings typically take 30-90 days, but complex cases can take longer. Petition responses from CBP usually come within 30 days of filing. Our Riverside customs attorneys work to expedite the process and minimize storage costs and business disruption.',
        },
        {
          question: 'What are my rights when CBP seizes my goods?',
          answer: 'You have the right to notice of seizure, the right to file a petition for remission, the right to file an administrative claim, and the right to judicial review. Our Riverside customs seizure lawyers ensure your rights are protected throughout the process.',
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
      <section className="hero" aria-label="Customs Seizure Attorney Riverside Hero">
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
          <h1>Customs Seizure Attorney<br />Riverside CA</h1>
          <p className="hero-subtitle">
            Expert customs seizure attorney serving Riverside and the Inland Empire. When CBP seizes your cargo, every day counts. Our seizure defense lawyers help Riverside businesses recover detained goods, challenge wrongful seizures, and minimize penalties.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Emergency Seizure Help</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Customs Seizure Defense for Riverside Businesses
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Riverside's position as a major logistics hub for goods moving from the ports of Los Angeles and Long Beach means local businesses face significant <strong>customs seizure</strong> risk. Our experienced seizure attorneys respond quickly to protect your interests.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">24-Hour Response</h3>
              <p className="text-text-secondary leading-relaxed">
                Seizures require immediate action. Our Riverside <strong>customs seizure attorneys</strong> respond within 24 hours to assess your case and begin building a defense strategy.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Track Record</h3>
              <p className="text-text-secondary leading-relaxed">
                We've successfully recovered millions in seized cargo. Our <strong>seizure defense</strong> strategies are tailored to the specific grounds of each seizure for maximum effectiveness.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Inland Empire Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We understand the Inland Empire's logistics industry and serve Riverside, San Bernardino, Ontario, and surrounding areas with <strong>dedicated seizure defense</strong> services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Seizure Defense Services in Riverside
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Petition for Remission or Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The primary tool for seizure recovery is a petition under 19 USC 1618. Our Riverside <strong>customs seizure attorneys</strong> prepare comprehensive petitions demonstrating why your goods should be released with minimal or no penalty.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Seizure notice analysis</li>
                <li>Evidence compilation</li>
                <li>Mitigating factors presentation</li>
                <li>Penalty negotiation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">IPR/Trademark Seizure Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Intellectual property seizures are common and often wrongful. Our Riverside attorneys defend businesses against <strong>trademark and copyright seizures</strong> when goods are legitimate or properly licensed.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Authorization documentation</li>
                <li>Gray market defense</li>
                <li>First sale doctrine arguments</li>
                <li>Trademark owner negotiations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Goods detained under the Uyghur Forced Labor Prevention Act require specialized defense. Our Riverside <strong>UFLPA attorneys</strong> prepare evidence packages to rebut the forced labor presumption.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Supply chain documentation</li>
                <li>Clear and convincing evidence</li>
                <li>Traceability records</li>
                <li>CBP negotiations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA/USDA Hold Resolution</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When goods are held by FDA or USDA, coordination with CBP is required. Our Riverside attorneys help resolve <strong>agency holds</strong> to release compliant products.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Prior notice compliance</li>
                <li>Labeling corrections</li>
                <li>Testing and certification</li>
                <li>Re-conditioning options</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Forfeiture Prevention</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If petitions fail, goods may be subject to forfeiture proceedings. Our Riverside <strong>forfeiture defense attorneys</strong> challenge improper forfeitures through administrative and judicial channels.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Administrative claim filing</li>
                <li>Judicial forfeiture defense</li>
                <li>Innocent owner defenses</li>
                <li>Constitutional challenges</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services with Green-Slide Animation */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Defense Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense & Litigation</span>
                    <p className="service-link__description">Full defense representation</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/uflpa-compliance-guide" className="service-link">
                    <span className="service-link__title">UFLPA Defense Guide</span>
                    <p className="service-link__description">Forced labor detention help</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Inland Empire Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/riverside-tariff-attorney" className="service-link">
                    <span className="service-link__title">Riverside Tariff Attorney</span>
                    <p className="service-link__description">Full tariff services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/inland-empire-customs-attorney" className="service-link">
                    <span className="service-link__title">Inland Empire Customs</span>
                    <p className="service-link__description">Regional customs expertise</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/trade-law-faq" className="service-link">
                    <span className="service-link__title">Seizure FAQ</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources" className="service-link">
                    <span className="service-link__title">Resources Hub</span>
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

      {/* Related California Locations */}
      <RelatedCityPages currentCity="Riverside" region="inland-empire" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Goods Seized? Get Emergency Help Now
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Time is critical when CBP seizes your cargo. Our Riverside customs seizure attorneys are ready to fight for the release of your goods. Contact us immediately for emergency assistance.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">
              Emergency Seizure Help
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

export default RiversideCustomsSeizurePage;
