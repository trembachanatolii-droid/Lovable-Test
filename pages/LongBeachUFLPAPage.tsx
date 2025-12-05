
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LongBeachUFLPAPage: React.FC = () => {
  useMeta({
    title: 'UFLPA Attorney Long Beach | Forced Labor Port Compliance | Trembach Law',
    description: 'UFLPA attorney Long Beach CA. Expert forced labor compliance lawyer serving Port of Long Beach businesses. UFLPA detention defense, port compliance, supply chain solutions. Free consultation.',
    keywords: 'UFLPA attorney long beach, forced labor compliance lawyer long beach, port of long beach UFLPA, long beach UFLPA lawyer, UFLPA detention defense long beach, port compliance attorney long beach, forced labor act lawyer long beach, port detention attorney long beach',
    canonical: 'long-beach-uflpa',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-long-beach.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'UFLPA Attorney Long Beach - Forced Labor Port Compliance',
        description: 'Expert UFLPA attorney serving Port of Long Beach businesses with forced labor compliance, detention defense, and supply chain solutions.',
        url: `${siteConfig.siteUrl}/long-beach-uflpa`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'UFLPA Attorney Long Beach', url: `${siteConfig.siteUrl}/long-beach-uflpa` }
      ]),
      generateFAQSchema([
        {
          question: 'How does UFLPA enforcement work at Port of Long Beach?',
          answer: 'Port of Long Beach is a major UFLPA enforcement point. CBP targets shipments from China containing high-risk products like cotton textiles, solar panels, and electronics. Goods are detained and importers must provide clear and convincing evidence to rebut the forced labor presumption. Our Long Beach UFLPA attorneys help businesses respond to detentions.',
        },
        {
          question: 'What products face UFLPA detention at Long Beach Port?',
          answer: 'High-risk products at Port of Long Beach include cotton apparel and textiles, polysilicon and solar panels, electronics containing XPCC-linked components, and tomato products. Our UFLPA attorneys help Long Beach importers assess risk and prepare for enforcement.',
        },
        {
          question: 'How quickly can you respond to a Long Beach UFLPA detention?',
          answer: 'Our Long Beach UFLPA attorneys respond within 24 hours to detention notices. We prepare comprehensive evidence packages including supply chain documentation, audit reports, and traceability records to secure release of your goods.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="UFLPA Attorney Long Beach Hero">
        <picture className="hero-bg">
          <img src="/images/hero-port-background-2.jpg" alt="" role="presentation" width="1920" height="1080" loading="eager" style={{ aspectRatio: '16 / 9' }} decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>UFLPA Attorney<br />Long Beach CA</h1>
          <p className="hero-subtitle">Expert UFLPA attorney serving Port of Long Beach businesses. With massive cargo volumes from China, Long Beach importers face intense UFLPA enforcement. Our forced labor compliance lawyers help businesses defend detentions and implement compliance programs.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free UFLPA Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">UFLPA Compliance for Long Beach Port</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">Port of Long Beach is a major UFLPA enforcement point. Our <strong>UFLPA attorneys</strong> help Long Beach importers understand forced labor compliance and defend against costly detentions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Expertise</h3>
              <p className="text-text-secondary leading-relaxed">We understand Port of Long Beach operations and CBP's UFLPA enforcement priorities. Our <strong>UFLPA attorneys</strong> know what triggers detentions.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">24-Hour Response</h3>
              <p className="text-text-secondary leading-relaxed">When goods are detained, time is critical. Our team responds within 24 hours to prepare <strong>evidence packages</strong> for release.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Compliance Programs</h3>
              <p className="text-text-secondary leading-relaxed">Proactive compliance prevents detentions. Our <strong>forced labor compliance</strong> programs protect Long Beach importers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">UFLPA Services for Long Beach Port</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Port Detention Response</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Our Long Beach <strong>UFLPA detention attorneys</strong> respond immediately to port detentions with comprehensive evidence packages.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>24-hour emergency response</li>
                <li>Supply chain documentation</li>
                <li>"Clear and convincing" evidence</li>
                <li>CBP port negotiations</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Supply Chain Due Diligence</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Understanding your supply chain is essential for <strong>UFLPA compliance</strong>. We help Long Beach importers map and document supplier relationships.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Multi-tier supplier mapping</li>
                <li>Xinjiang exposure assessment</li>
                <li>Factory audit coordination</li>
                <li>Documentation protocols</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Compliance Program Development</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Prevent port detentions with a robust compliance program aligned with CBP guidance.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Supplier code of conduct</li>
                <li>Audit and monitoring programs</li>
                <li>Worker interview protocols</li>
                <li>Remediation procedures</li>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">UFLPA Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/resources/uflpa-compliance-guide" className="service-link"><span className="service-link__title">UFLPA Compliance Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/supply-chain-esg-compliance-guide" className="service-link"><span className="service-link__title">Supply Chain ESG Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Long Beach Port</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/long-beach-port-attorney" className="service-link"><span className="service-link__title">Long Beach Port Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/long-beach-cbp-audit" className="service-link"><span className="service-link__title">CBP Audit Defense</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Related Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/customs-defense-litigation" className="service-link"><span className="service-link__title">Customs Defense</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/trade-law-faq" className="service-link"><span className="service-link__title">UFLPA FAQ</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedCityPages currentCity="Long Beach" region="los-angeles" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Protect Your Port Shipments from UFLPA</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Don't wait for a detention notice. Our Long Beach UFLPA attorneys help you assess risk and implement compliance programs.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">Free UFLPA Consultation</Button>
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

export default LongBeachUFLPAPage;
