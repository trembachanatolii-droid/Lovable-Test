
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SacramentoUFLPAAttorneyPage: React.FC = () => {
  useMeta({
    title: 'UFLPA Attorney Sacramento CA | Forced Labor Compliance Lawyer | Trembach Law',
    description: 'UFLPA attorney in Sacramento CA. Expert forced labor compliance lawyer helping Central Valley businesses with UFLPA detentions, supply chain compliance, and CBP defense. Free consultation.',
    keywords: 'UFLPA attorney sacramento, forced labor compliance lawyer sacramento, sacramento UFLPA lawyer, uyghur forced labor attorney sacramento, UFLPA detention defense sacramento, supply chain compliance attorney sacramento, forced labor act lawyer sacramento, sacramento customs attorney UFLPA, UFLPA compliance consulting sacramento, withhold release order attorney sacramento, xinjiang import attorney sacramento, central valley UFLPA lawyer, sacramento trade compliance attorney',
    canonical: 'sacramento-uflpa-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-sacramento.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'UFLPA Attorney Sacramento CA - Forced Labor Compliance Lawyer',
        description: 'Expert UFLPA attorney serving Sacramento and Central Valley businesses. Comprehensive forced labor compliance services including detention defense, supply chain audits, and compliance programs.',
        url: `${siteConfig.siteUrl}/sacramento-uflpa-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'UFLPA Attorney Sacramento', url: `${siteConfig.siteUrl}/sacramento-uflpa-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What is the UFLPA and how does it affect Sacramento importers?',
          answer: 'The Uyghur Forced Labor Prevention Act (UFLPA) creates a rebuttable presumption that goods from Xinjiang, China or made with Xinjiang inputs are made with forced labor. Sacramento businesses importing textiles, solar panels, electronics, and agricultural equipment are particularly affected. Our UFLPA attorneys help companies prove compliance and release detained goods.',
        },
        {
          question: 'What should I do if my goods are detained under UFLPA in Sacramento?',
          answer: 'Contact a UFLPA attorney immediately. You have limited time to respond. Our Sacramento UFLPA lawyers prepare detention response packages including supply chain documentation, traceability records, audit reports, and evidence to rebut the forced labor presumption. We have successfully released millions in detained goods.',
        },
        {
          question: 'How can I prevent UFLPA detentions for my Sacramento business?',
          answer: 'Proactive compliance is essential. Our Sacramento forced labor attorneys help businesses map supply chains, conduct supplier audits, implement traceability systems, and develop compliance programs that satisfy CBP requirements. Prevention is far more cost-effective than detention defense.',
        },
        {
          question: 'What industries in Sacramento are most affected by UFLPA?',
          answer: 'Sacramento and Central Valley industries particularly impacted include agricultural equipment importers, solar and renewable energy companies, textile and apparel businesses, electronics manufacturers, and any company sourcing from China. Our UFLPA attorneys have industry-specific expertise.',
        },
        {
          question: 'How much does UFLPA compliance consulting cost in Sacramento?',
          answer: 'We offer UFLPA compliance services at various levels. Initial risk assessments start at a fixed fee, while comprehensive compliance programs are priced based on supply chain complexity. Detention response is often hourly. Contact us for a customized quote for your Sacramento business.',
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
      <section className="hero" aria-label="UFLPA Attorney Sacramento Hero">
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
          <h1>UFLPA Attorney<br />Sacramento CA</h1>
          <p className="hero-subtitle">
            Expert UFLPA attorney serving Sacramento and the Central Valley. The Uyghur Forced Labor Prevention Act has detained over $2 billion in goods. Our forced labor compliance lawyers help Sacramento businesses navigate supply chain requirements, defend against detentions, and implement compliance programs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free UFLPA Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              UFLPA Compliance for Sacramento Businesses
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Sacramento's agricultural economy and growing clean tech sector make <strong>UFLPA compliance</strong> critical for local businesses. Our forced labor attorneys help Central Valley companies understand their supply chain obligations and avoid costly detentions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed">
                When goods are detained, time is critical. Our Sacramento <strong>UFLPA attorneys</strong> respond within 24 hours to prepare evidence packages that overcome the forced labor presumption.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Supply Chain Mapping</h3>
              <p className="text-text-secondary leading-relaxed">
                We help Sacramento businesses trace their supply chains to identify <strong>Xinjiang exposure</strong> and implement traceability systems that satisfy CBP requirements.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Compliance Programs</h3>
              <p className="text-text-secondary leading-relaxed">
                Proactive compliance prevents detentions. Our <strong>forced labor compliance</strong> programs include supplier audits, due diligence protocols, and CBP-aligned procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            UFLPA Services for Sacramento Importers
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Detention Response</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP has detained billions in goods under UFLPA. Our Sacramento <strong>UFLPA detention attorneys</strong> prepare comprehensive evidence packages demonstrating your goods are not made with forced labor.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>24-hour emergency response</li>
                <li>Supply chain documentation compilation</li>
                <li>"Clear and convincing" evidence preparation</li>
                <li>CBP negotiations and appeals</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Supply Chain Due Diligence</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Understanding your supply chain is the foundation of <strong>UFLPA compliance</strong>. Our Sacramento attorneys help businesses identify, assess, and document their supplier relationships.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Multi-tier supplier mapping</li>
                <li>Xinjiang exposure assessment</li>
                <li>Factory audit coordination</li>
                <li>Documentation protocols</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Forced Labor Compliance Programs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Prevent UFLPA detentions with a robust compliance program. Our Sacramento <strong>forced labor compliance lawyers</strong> develop customized programs aligned with CBP's operational guidance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Supplier code of conduct development</li>
                <li>Audit and monitoring programs</li>
                <li>Worker interview protocols</li>
                <li>Remediation procedures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Withhold Release Order Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If your products are subject to a Withhold Release Order (WRO), specialized defense is required. Our Sacramento attorneys help importers navigate <strong>WRO enforcement</strong> and admissibility packages.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>WRO applicability analysis</li>
                <li>Admissibility evidence compilation</li>
                <li>Alternative sourcing strategies</li>
                <li>Modification petitions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Risk Assessment & Training</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Educate your team and assess organizational risk. Our Sacramento <strong>UFLPA attorneys</strong> provide training and risk assessments for compliance teams, procurement staff, and executives.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>UFLPA risk scoring</li>
                <li>Team training programs</li>
                <li>Board-level briefings</li>
                <li>Ongoing compliance monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Sacramento Industries Facing UFLPA Scrutiny
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Solar & Clean Energy', desc: 'Polysilicon, solar panels, energy storage systems' },
              { title: 'Agricultural Equipment', desc: 'Farm machinery, irrigation systems, processing equipment' },
              { title: 'Textiles & Apparel', desc: 'Cotton products, clothing, fabric suppliers' },
              { title: 'Electronics', desc: 'Components, consumer electronics, industrial controls' },
              { title: 'Food & Beverage', desc: 'Tomato products, food processing equipment' },
              { title: 'Construction', desc: 'Building materials, PVC products, aluminum' },
            ].map((industry) => (
              <div key={industry.title} className="bg-neutral-50 p-6 rounded-lg border border-border-subtle hover:border-secondary-teal transition-colors">
                <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond">{industry.title}</h3>
                <p className="text-text-secondary text-sm">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services with Green-Slide Animation */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">UFLPA Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/uflpa-compliance-guide" className="service-link">
                    <span className="service-link__title">UFLPA Compliance Guide</span>
                    <p className="service-link__description">Complete compliance framework</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/supply-chain-esg-compliance-guide" className="service-link">
                    <span className="service-link__title">Supply Chain ESG Guide</span>
                    <p className="service-link__description">ESG compliance strategies</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Sacramento Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/sacramento-tariff-attorney" className="service-link">
                    <span className="service-link__title">Sacramento Tariff Attorney</span>
                    <p className="service-link__description">Full tariff services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/sacramento-trade-compliance" className="service-link">
                    <span className="service-link__title">Sacramento Trade Compliance</span>
                    <p className="service-link__description">Compliance consulting</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Related Services</h3>
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
                <div className="service-link-item">
                  <Link to="/trade-law-faq" className="service-link">
                    <span className="service-link__title">UFLPA FAQ</span>
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
      <RelatedCityPages currentCity="Sacramento" region="central-valley" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Protect Your Supply Chain from UFLPA Risk
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't wait for a detention notice. Our Sacramento UFLPA attorneys can help you assess risk, implement compliance programs, and defend against detentions. Contact us for a free consultation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">
              Free UFLPA Consultation
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

export default SacramentoUFLPAAttorneyPage;
