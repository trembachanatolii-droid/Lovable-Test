
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const IrvineMedicalDeviceImportPage: React.FC = () => {
  useMeta({
    title: 'Medical Device Import Attorney Irvine | FDA Device Customs Lawyer OC | Trembach Law',
    description: 'Medical device import attorney Irvine CA. Expert medical device customs lawyer serving Orange County medical device companies. FDA compliance, device classification, Section 301 medical device tariffs. Free consultation.',
    keywords: 'medical device import attorney irvine, medical device customs lawyer irvine, irvine medical device import attorney, FDA device compliance attorney irvine, medical device tariff lawyer irvine, device classification attorney irvine, medical equipment import lawyer irvine, medical device customs attorney irvine',
    canonical: 'irvine-medical-device-import',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-irvine.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Medical Device Import Attorney Irvine - FDA Device Customs Lawyer',
        description: 'Expert medical device import attorney serving Irvine Orange County medical device companies with FDA compliance, device classification, and import strategies.',
        url: `${siteConfig.siteUrl}/irvine-medical-device-import`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Medical Device Import Attorney Irvine', url: `${siteConfig.siteUrl}/irvine-medical-device-import` }
      ]),
      generateFAQSchema([
        {
          question: 'How do tariffs affect Irvine medical device companies?',
          answer: 'Irvine Orange County is a major medical device hub. Medical devices and components from China face Section 301 tariffs. Our Irvine medical device import attorneys help device companies navigate FDA compliance and minimize duty exposure on medical equipment.',
        },
        {
          question: 'What medical devices face import challenges in Irvine?',
          answer: 'Challenges include diagnostic equipment, surgical instruments, imaging devices, patient monitoring systems, implantable devices, and components. Our Irvine medical device import lawyers help with FDA compliance, HTS classification, and tariff reduction strategies.',
        },
        {
          question: 'How can Irvine device companies ensure FDA compliance on imports?',
          answer: 'FDA requires establishment registration, device listing, and compliance with QSR. Some devices need 510(k) clearance or PMA. Our Irvine medical device import attorneys coordinate FDA and CBP requirements to ensure compliant medical device imports.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="Medical Device Import Attorney Irvine Hero">
        <picture className="hero-bg">
          <img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1920&auto=format&fit=crop" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>Medical Device Import Attorney<br />Irvine CA</h1>
          <p className="hero-subtitle">Expert medical device import attorney serving Irvine Orange County medical device companies. Medical device imports require FDA compliance and proper classification. Our medical device customs lawyers help companies navigate regulatory requirements and minimize duty exposure.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Medical Device Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">Medical Device Import Services for Irvine</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">Irvine Orange County is home to major medical device companies with complex import needs. Our <strong>medical device import attorneys</strong> help device companies navigate FDA compliance, classification, and tariff challenges.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Medical Device Expertise</h3>
              <p className="text-text-secondary leading-relaxed">We understand medical device supply chains and regulatory requirements. Our <strong>medical device import attorneys</strong> know FDA and CBP rules.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">FDA Compliance</h3>
              <p className="text-text-secondary leading-relaxed">Medical device imports require FDA coordination. Our attorneys ensure <strong>compliant import procedures</strong> for medical devices.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Classification Mastery</h3>
              <p className="text-text-secondary leading-relaxed">Device classification is complex. We help companies achieve <strong>optimal classification</strong> for medical device products.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Medical Device Import Services</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA Device Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Our Irvine <strong>medical device import attorneys</strong> coordinate FDA and CBP requirements for compliant medical device imports.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA establishment registration</li>
                <li>Device listing compliance</li>
                <li>510(k) clearance coordination</li>
                <li>QSR compliance support</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Medical Device Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Proper HTS classification is critical for medical devices. We help companies achieve <strong>optimal duty rates</strong> through expert classification.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Diagnostic device classification</li>
                <li>Surgical instrument analysis</li>
                <li>Implantable device classification</li>
                <li>Binding ruling requests</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Medical Device Tariff Strategy</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Some medical devices face tariffs. Our <strong>medical device tariff lawyers</strong> develop strategies to minimize duty exposure.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 device analysis</li>
                <li>Country of origin planning</li>
                <li>Supply chain restructuring</li>
                <li>Free trade agreement utilization</li>
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
                <div className="service-link-item"><Link to="/resources/tariffs-duties-classification" className="service-link"><span className="service-link__title">Classification Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/resources/section-301-tariffs-guide" className="service-link"><span className="service-link__title">Section 301 Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Irvine Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#irvine-customs-attorney" className="service-link"><span className="service-link__title">Irvine Customs Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#irvine-import-attorney" className="service-link"><span className="service-link__title">Irvine Import Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/trump-2025-tariff-attorney" className="service-link"><span className="service-link__title">2025 Tariff Updates</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/trade-law-faq" className="service-link"><span className="service-link__title">Medical Device FAQ</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedCityPages currentCity="Irvine" region="orange-county" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Ensure Compliant Medical Device Imports</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Navigate FDA and customs requirements confidently. Our Irvine medical device import attorneys help companies ensure compliant imports and minimize duty exposure.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">Free Medical Device Consultation</Button>
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

export default IrvineMedicalDeviceImportPage;
