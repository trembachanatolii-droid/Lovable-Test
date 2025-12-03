
import React, { lazy, Suspense, useEffect } from 'react';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const FresnoSection301Page: React.FC = () => {
  useMeta({
    title: 'Section 301 Tariff Attorney Fresno | China Tariff Lawyer Agriculture | Trembach Law',
    description: 'Section 301 tariff attorney Fresno CA. Expert China tariff lawyer serving agricultural businesses. Farm equipment tariffs, food processing machinery, supply chain strategies. Free consultation.',
    keywords: 'section 301 tariff attorney fresno, china tariff lawyer fresno, fresno section 301 attorney, agricultural tariff attorney fresno, farm equipment tariff lawyer fresno, china trade war attorney fresno, tariff reduction fresno, food processing tariff fresno',
    canonical: 'fresno-section-301',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-fresno.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Section 301 Tariff Attorney Fresno - China Tariff Lawyer Agriculture',
        description: 'Expert Section 301 tariff attorney serving Fresno agricultural businesses with China tariff strategies and compliance solutions.',
        url: `${siteConfig.siteUrl}/fresno-section-301`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Section 301 Attorney Fresno', url: `${siteConfig.siteUrl}/fresno-section-301` }
      ]),
      generateFAQSchema([
        {
          question: 'How do Section 301 tariffs affect Fresno agricultural businesses?',
          answer: 'Fresno is the agricultural capital of America. Local businesses importing farm equipment, irrigation systems, packaging machinery, and processing equipment from China face Section 301 tariffs of 7.5%-25%. Our Fresno Section 301 attorneys help agricultural businesses minimize these costs.',
        },
        {
          question: 'What agricultural equipment faces China tariffs in Fresno?',
          answer: 'Common tariffed items include tractors and attachments, irrigation pumps and systems, harvesting equipment, food processing machinery, packaging equipment, and cold storage components. Our Fresno China tariff lawyers analyze your imports for reduction opportunities.',
        },
        {
          question: 'Can Fresno farmers reduce Section 301 tariff costs?',
          answer: 'Yes. Our Fresno Section 301 attorneys use classification optimization, tariff engineering, substantial transformation analysis, and supply chain restructuring. Many agricultural clients achieve significant duty savings through legal strategies.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="Section 301 Attorney Fresno Hero">
        <picture className="hero-bg">
          <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1920&auto=format&fit=crop" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>Section 301 Tariff Attorney<br />Fresno CA</h1>
          <p className="hero-subtitle">Expert Section 301 tariff attorney serving Fresno and Central Valley agricultural businesses. China tariffs add 7.5%-25% to farm equipment and machinery costs. Our China tariff lawyers help agricultural businesses minimize duty exposure.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Tariff Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">Section 301 Solutions for Fresno Agriculture</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">Fresno County is America's top agricultural producer. Our <strong>Section 301 tariff attorneys</strong> understand the equipment and machinery that powers Central Valley farming.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Expertise</h3>
              <p className="text-text-secondary leading-relaxed">We understand farm equipment, irrigation, and food processing. Our Fresno <strong>China tariff lawyers</strong> know agricultural classifications.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Duty Savings</h3>
              <p className="text-text-secondary leading-relaxed">Proper classification can mean <strong>0% vs 25% duties</strong>. Our attorneys identify legal opportunities to minimize tariff exposure.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Supply Chain Help</h3>
              <p className="text-text-secondary leading-relaxed">We help Fresno businesses find alternative sources and restructure supply chains for <strong>maximum tariff savings</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Section 301 Services for Fresno</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Farm Equipment Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Agricultural equipment classifications determine tariff rates. Our Fresno <strong>Section 301 attorneys</strong> ensure optimal classification.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Tractor and machinery review</li>
                <li>Irrigation equipment analysis</li>
                <li>Harvesting equipment classification</li>
                <li>Binding ruling requests</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Food Processing Equipment</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Processing and packaging equipment from China faces significant tariffs. We identify <strong>reduction strategies</strong> for food processors.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Processing machinery review</li>
                <li>Packaging equipment analysis</li>
                <li>Cold storage components</li>
                <li>Alternative sourcing options</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Supply Chain Strategy</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Third-country sourcing can eliminate Section 301 tariffs through <strong>substantial transformation</strong>.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Alternative country sourcing</li>
                <li>Mexico/Vietnam options</li>
                <li>Substantial transformation analysis</li>
                <li>Compliance verification</li>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Tariff Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#tariffs-duties-classification-guide" className="service-link"><span className="service-link__title">Tariff Classification Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#resources/section-301-tariffs-guide" className="service-link"><span className="service-link__title">Section 301 Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Fresno Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#fresno-customs-attorney" className="service-link"><span className="service-link__title">Fresno Customs Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#fresno-agricultural-trade" className="service-link"><span className="service-link__title">Agricultural Trade</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#trump-2025-tariff-attorney" className="service-link"><span className="service-link__title">2025 Tariff Updates</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#trade-law-faq" className="service-link"><span className="service-link__title">Tariff FAQ</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedCityPages currentCity="Fresno" region="central-valley" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Reduce Your Agricultural Tariff Burden</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Don't overpay on China tariffs. Our Fresno Section 301 attorneys help agricultural businesses minimize duty exposure legally.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">Free Tariff Consultation</Button>
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

export default FresnoSection301Page;
