
import React, { lazy, Suspense, useEffect } from 'react';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanJosePharmaImportPage: React.FC = () => {
  useMeta({
    title: 'Pharmaceutical Import Attorney San Jose | FDA Compliance Lawyer | Trembach Law',
    description: 'Pharmaceutical import attorney San Jose CA. Expert FDA compliance lawyer serving biotech and pharma companies. Drug import regulations, API compliance, medical device import. Free consultation.',
    keywords: 'pharmaceutical import attorney san jose, FDA compliance lawyer san jose, san jose pharma import attorney, biotech import lawyer san jose, drug import attorney silicon valley, API import compliance san jose, medical device import attorney san jose, FDA drug import lawyer san jose',
    canonical: 'san-jose-pharma-import',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-san-jose.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Pharmaceutical Import Attorney San Jose - FDA Compliance Lawyer',
        description: 'Expert pharmaceutical import attorney serving San Jose biotech and pharma companies with FDA compliance, drug import regulations, and medical device import services.',
        url: `${siteConfig.siteUrl}/san-jose-pharma-import`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Pharmaceutical Import Attorney San Jose', url: `${siteConfig.siteUrl}/san-jose-pharma-import` }
      ]),
      generateFAQSchema([
        {
          question: 'What pharmaceutical import regulations affect San Jose biotech companies?',
          answer: 'San Jose biotech and pharmaceutical companies face complex FDA import regulations including DSCSA compliance, API documentation requirements, cGMP verification, and drug listing requirements. Our San Jose pharmaceutical import attorneys help companies navigate these regulations to ensure smooth import operations.',
        },
        {
          question: 'Can you help with FDA detention of pharmaceutical imports in San Jose?',
          answer: 'Yes. Our San Jose pharmaceutical import attorneys respond quickly to FDA detention notices. We prepare admissibility evidence, coordinate with FDA, and work to release your pharmaceutical shipments while maintaining compliance.',
        },
        {
          question: 'What documentation is needed for pharmaceutical imports to San Jose?',
          answer: 'Required documentation includes FDA drug listing, establishment registration, API certificates, cGMP compliance evidence, COAs, stability data, and prior notice filings. Our pharmaceutical import attorneys ensure your documentation meets FDA requirements.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="Pharmaceutical Import Attorney San Jose Hero">
        <picture className="hero-bg">
          <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1920&auto=format&fit=crop" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>Pharmaceutical Import Attorney<br />San Jose CA</h1>
          <p className="hero-subtitle">Expert pharmaceutical import attorney serving San Jose and Silicon Valley biotech companies. FDA import regulations are complex. Our pharmaceutical compliance lawyers help companies navigate drug import requirements, API compliance, and medical device regulations.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Pharma Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">Pharmaceutical Import Services for San Jose</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">San Jose is a biotech hub with complex import needs. Our <strong>pharmaceutical import attorneys</strong> help companies navigate FDA regulations and ensure smooth import operations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Biotech Expertise</h3>
              <p className="text-text-secondary leading-relaxed">We understand Silicon Valley biotech operations and FDA import requirements. Our <strong>pharmaceutical import attorneys</strong> speak your language.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">FDA Compliance</h3>
              <p className="text-text-secondary leading-relaxed">We ensure your pharmaceutical imports meet all <strong>FDA requirements</strong> including DSCSA, cGMP, and drug listing.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Detention Response</h3>
              <p className="text-text-secondary leading-relaxed">When FDA detains your shipment, we respond immediately to <strong>prepare evidence</strong> and secure release.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Pharmaceutical Import Services</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Drug Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Our San Jose <strong>pharmaceutical import attorneys</strong> ensure your drug imports meet all FDA regulatory requirements.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Drug listing and registration</li>
                <li>DSCSA compliance</li>
                <li>Prior notice filings</li>
                <li>Admissibility review</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">API and Raw Material Import</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Active pharmaceutical ingredients require specialized compliance. We help biotech companies import <strong>APIs and raw materials</strong> legally.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>API documentation</li>
                <li>cGMP verification</li>
                <li>DMF cross-references</li>
                <li>Certificate of analysis review</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Medical Device Import</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Medical devices face FDA import requirements including <strong>510(k) clearance</strong> and establishment registration.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Device classification</li>
                <li>Registration verification</li>
                <li>Labeling compliance</li>
                <li>Detention response</li>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Industry Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#technology-electronics-trade-attorney" className="service-link"><span className="service-link__title">Tech Trade Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#regulatory-compliance-advisory" className="service-link"><span className="service-link__title">Regulatory Compliance</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">San Jose Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#san-jose-customs-lawyer" className="service-link"><span className="service-link__title">San Jose Customs Lawyer</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#san-jose-section-301" className="service-link"><span className="service-link__title">Section 301 Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#export-controls-sanctions" className="service-link"><span className="service-link__title">Export Controls</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#trade-law-faq" className="service-link"><span className="service-link__title">Import FAQ</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedCityPages currentCity="San Jose" region="bay-area" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Navigate FDA Import Regulations</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Pharmaceutical imports require specialized expertise. Our San Jose pharmaceutical import attorneys ensure FDA compliance.</p>
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

export default SanJosePharmaImportPage;
