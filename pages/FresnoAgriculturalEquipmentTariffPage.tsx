
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const FresnoAgriculturalEquipmentTariffPage: React.FC = () => {
  useMeta({
    title: 'Agricultural Equipment Tariff Attorney Fresno | Farm Machinery Import Lawyer | Trembach Law',
    description: 'Agricultural equipment tariff attorney Fresno CA. Expert farm machinery import lawyer serving Central Valley agriculture. Tractor tariffs, farm equipment classification, Section 301 ag equipment. Free consultation.',
    keywords: 'agricultural equipment tariff attorney fresno, farm machinery import lawyer fresno, fresno agricultural tariff attorney, tractor tariff lawyer fresno, section 301 agricultural equipment fresno, farm equipment customs attorney fresno, ag machinery tariff lawyer fresno, agricultural import attorney fresno',
    canonical: 'fresno-agricultural-equipment-tariff',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-fresno.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Agricultural Equipment Tariff Attorney Fresno - Farm Machinery Import Lawyer',
        description: 'Expert agricultural equipment tariff attorney serving Fresno Central Valley farms with Section 301 strategies, farm equipment classification, and import compliance.',
        url: `${siteConfig.siteUrl}/fresno-agricultural-equipment-tariff`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Agricultural Equipment Tariff Attorney Fresno', url: `${siteConfig.siteUrl}/fresno-agricultural-equipment-tariff` }
      ]),
      generateFAQSchema([
        {
          question: 'How do tariffs affect Fresno agricultural equipment buyers?',
          answer: 'Fresno Central Valley farmers and agricultural businesses import farm equipment globally. Agricultural machinery from China faces Section 301 tariffs up to 25%. Our Fresno agricultural equipment tariff attorneys help farms and ag businesses minimize duty exposure on tractors, harvesters, and farm machinery.',
        },
        {
          question: 'What agricultural equipment faces China tariffs in Fresno?',
          answer: 'Tariffed agricultural equipment includes tractors, harvesters, planters, sprayers, irrigation equipment, tillage implements, and parts. Our Fresno agricultural equipment tariff lawyers analyze your imports to identify reduction opportunities.',
        },
        {
          question: 'How can Fresno farms reduce agricultural equipment tariffs?',
          answer: 'Strategies include HTS classification optimization, country of origin analysis, USMCA qualification for North American equipment, and tariff engineering. Our Fresno agricultural equipment tariff attorneys develop customized strategies to minimize duty exposure legally.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="Agricultural Equipment Tariff Attorney Fresno Hero">
        <picture className="hero-bg">
          <img src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1920&auto=format&fit=crop" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>Agricultural Equipment Tariff Attorney<br />Fresno CA</h1>
          <p className="hero-subtitle">Expert agricultural equipment tariff attorney serving Fresno Central Valley farms. Farm machinery tariffs significantly impact agricultural costs. Our agricultural import lawyers help farms and ag businesses minimize duty exposure on tractors, harvesters, and equipment.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Ag Equipment Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">Agricultural Equipment Tariff Services for Fresno</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">Fresno Central Valley is America's agricultural heartland with significant farm equipment needs. Our <strong>agricultural equipment tariff attorneys</strong> help farms navigate Section 301, USMCA, and classification challenges.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Expertise</h3>
              <p className="text-text-secondary leading-relaxed">We understand farm equipment supply chains and agricultural tariffs. Our <strong>agricultural tariff attorneys</strong> know ag equipment classifications.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Section 301 Strategy</h3>
              <p className="text-text-secondary leading-relaxed">China farm equipment faces significant tariffs. Our attorneys identify <strong>legal strategies</strong> to minimize Section 301 exposure.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">USMCA Benefits</h3>
              <p className="text-text-secondary leading-relaxed">North American farm equipment may qualify for USMCA. We help farms achieve <strong>duty-free treatment</strong> on qualifying equipment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Agricultural Equipment Tariff Services</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Agricultural Strategy</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Our Fresno <strong>agricultural equipment tariff attorneys</strong> develop comprehensive strategies to minimize China tariffs on farm machinery.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Farm equipment tariff analysis</li>
                <li>Classification optimization</li>
                <li>Tariff engineering for ag equipment</li>
                <li>Supply chain restructuring</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Farm Equipment Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Proper HTS classification is critical for agricultural equipment. We help farms achieve <strong>optimal duty rates</strong> through expert classification.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Tractor classification (Chapter 87)</li>
                <li>Harvester and planter analysis</li>
                <li>Implements and parts classification</li>
                <li>Binding ruling requests</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA Agricultural Equipment</h3>
              <p className="text-text-secondary leading-relaxed mb-4">USMCA provides duty-free treatment for qualifying farm equipment. Our <strong>farm equipment import lawyers</strong> help maximize USMCA benefits.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA qualification analysis</li>
                <li>Regional value content calculation</li>
                <li>Certificate of origin preparation</li>
                <li>Supplier certification support</li>
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
                <div className="service-link-item"><Link to="/resources/tariffs-duties-classification" className="service-link"><span className="service-link__title">Tariff Classification Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/resources/section-301-tariffs-guide" className="service-link"><span className="service-link__title">Section 301 Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Fresno Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/fresno-customs-attorney" className="service-link"><span className="service-link__title">Fresno Customs Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><a href="#fresno-import-attorney" className="service-link"><span className="service-link__title">Fresno Import Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/trump-2025-tariff-attorney" className="service-link"><span className="service-link__title">2025 Tariff Updates</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/trade-law-faq" className="service-link"><span className="service-link__title">Agricultural FAQ</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedCityPages currentCity="Fresno" region="central-valley" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Reduce Your Farm Equipment Tariff Burden</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Don't overpay on agricultural equipment tariffs. Our Fresno agricultural equipment tariff attorneys help farms minimize duty exposure legally.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">Free Ag Equipment Consultation</Button>
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

export default FresnoAgriculturalEquipmentTariffPage;
