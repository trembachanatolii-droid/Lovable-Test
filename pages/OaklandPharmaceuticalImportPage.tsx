
import React, { lazy, Suspense, useEffect } from 'react';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const OaklandPharmaceuticalImportPage: React.FC = () => {
  useMeta({
    title: 'Pharmaceutical Import Attorney Oakland | Pharma Customs Lawyer CA | Trembach Law',
    description: 'Pharmaceutical import attorney Oakland CA. Expert pharma customs lawyer serving Bay Area pharmaceutical companies. FDA compliance, drug classification, API imports, Section 301 pharma tariffs. Free consultation.',
    keywords: 'pharmaceutical import attorney oakland, pharma customs lawyer oakland, oakland pharmaceutical import attorney, drug import lawyer oakland, FDA compliance attorney oakland, API import lawyer oakland, pharma tariff attorney oakland, pharmaceutical customs attorney oakland',
    canonical: 'oakland-pharmaceutical-import',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-oakland.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Pharmaceutical Import Attorney Oakland - Pharma Customs Lawyer',
        description: 'Expert pharmaceutical import attorney serving Oakland Bay Area pharma companies with FDA compliance, drug classification, and API import strategies.',
        url: `${siteConfig.siteUrl}/oakland-pharmaceutical-import`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Pharmaceutical Import Attorney Oakland', url: `${siteConfig.siteUrl}/oakland-pharmaceutical-import` }
      ]),
      generateFAQSchema([
        {
          question: 'How do tariffs affect Oakland pharmaceutical companies?',
          answer: 'Oakland Bay Area pharmaceutical companies import APIs and drug products globally. Some pharmaceutical ingredients from China face Section 301 tariffs. Our Oakland pharmaceutical import attorneys help pharma companies navigate FDA compliance and minimize duty exposure.',
        },
        {
          question: 'What pharmaceutical products face import challenges in Oakland?',
          answer: 'Challenges include active pharmaceutical ingredients (APIs), excipients, finished drug products, biologics, and medical compounds. Our Oakland pharmaceutical import lawyers help with FDA compliance, HTS classification, and tariff reduction strategies.',
        },
        {
          question: 'How can Oakland pharma companies ensure FDA compliance on imports?',
          answer: 'FDA requires prior notice, import permits for certain drugs, and compliance with DSCSA. Our Oakland pharmaceutical import attorneys coordinate customs and FDA requirements to ensure compliant pharmaceutical imports.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="Pharmaceutical Import Attorney Oakland Hero">
        <picture className="hero-bg">
          <img src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1920&auto=format&fit=crop" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>Pharmaceutical Import Attorney<br />Oakland CA</h1>
          <p className="hero-subtitle">Expert pharmaceutical import attorney serving Oakland Bay Area pharma companies. Pharmaceutical imports require FDA compliance and proper classification. Our pharma customs lawyers help companies navigate regulatory requirements and minimize duty exposure.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Pharma Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">Pharmaceutical Import Services for Oakland</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">Oakland Bay Area is home to major pharmaceutical companies with complex import needs. Our <strong>pharmaceutical import attorneys</strong> help pharma companies navigate FDA compliance, classification, and tariff challenges.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Pharma Expertise</h3>
              <p className="text-text-secondary leading-relaxed">We understand pharmaceutical supply chains and regulatory requirements. Our <strong>pharmaceutical import attorneys</strong> know FDA and CBP rules.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">FDA Compliance</h3>
              <p className="text-text-secondary leading-relaxed">Pharmaceutical imports require FDA coordination. Our attorneys ensure <strong>compliant import procedures</strong> for drug products.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Classification Mastery</h3>
              <p className="text-text-secondary leading-relaxed">Drug classification is complex. We help companies achieve <strong>optimal classification</strong> for pharmaceutical products.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Pharmaceutical Import Services</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Our Oakland <strong>pharmaceutical import attorneys</strong> coordinate FDA and CBP requirements for compliant pharmaceutical imports.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA prior notice filing</li>
                <li>Import permit compliance</li>
                <li>DSCSA requirements</li>
                <li>Establishment registration coordination</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Drug Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Proper HTS classification is critical for pharmaceuticals. We help companies achieve <strong>optimal duty rates</strong> through expert classification.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>API classification (Chapter 29/30)</li>
                <li>Finished drug product analysis</li>
                <li>Biologic classification</li>
                <li>Binding ruling requests</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Pharmaceutical Tariff Strategy</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Some pharmaceutical ingredients face tariffs. Our <strong>pharma tariff lawyers</strong> develop strategies to minimize duty exposure.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 pharma analysis</li>
                <li>Country of origin planning</li>
                <li>Supply chain restructuring</li>
                <li>Duty drawback for exports</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Import Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#tariffs-duties-classification-guide" className="service-link"><span className="service-link__title">Classification Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#resources/section-301-tariffs-guide" className="service-link"><span className="service-link__title">Section 301 Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Oakland Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#oakland-customs-attorney" className="service-link"><span className="service-link__title">Oakland Customs Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#oakland-import-attorney" className="service-link"><span className="service-link__title">Oakland Import Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#trump-2025-tariff-attorney" className="service-link"><span className="service-link__title">2025 Tariff Updates</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#trade-law-faq" className="service-link"><span className="service-link__title">Pharmaceutical FAQ</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedCityPages currentCity="Oakland" region="bay-area" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Ensure Compliant Pharmaceutical Imports</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Navigate FDA and customs requirements confidently. Our Oakland pharmaceutical import attorneys help companies ensure compliant imports and minimize duty exposure.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">Free Pharma Consultation</Button>
            <Button href={siteConfig.phoneTel} variant="outline">Call {siteConfig.phoneDisplay}</Button>
          </div>
        </div>
      </section>

      <Suspense fallback={<div style={{ minHeight: '600px', background: 'transparent' }} aria-label="Loading form" />}>
        <EvaluationForm theme="light" />
      </Suspense>
    </div>
  );
};

export default OaklandPharmaceuticalImportPage;
