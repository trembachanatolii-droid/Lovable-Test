
import React, { lazy, Suspense, useEffect } from 'react';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const FremontAutomotiveTariffPage: React.FC = () => {
  useMeta({
    title: 'Automotive Tariff Attorney Fremont | Auto Parts Import Lawyer | Trembach Law',
    description: 'Automotive tariff attorney Fremont CA. Expert auto parts import lawyer serving EV and automotive manufacturers. Section 301 auto tariffs, USMCA automotive, parts classification. Free consultation.',
    keywords: 'automotive tariff attorney fremont, auto parts import lawyer fremont, fremont automotive tariff attorney, EV tariff lawyer fremont, section 301 automotive fremont, USMCA automotive attorney fremont, car parts tariff lawyer fremont, automotive import attorney fremont',
    canonical: 'fremont-automotive-tariff',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-fremont.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Automotive Tariff Attorney Fremont - Auto Parts Import Lawyer',
        description: 'Expert automotive tariff attorney serving Fremont EV and automotive manufacturers with Section 301 strategies, USMCA compliance, and parts classification.',
        url: `${siteConfig.siteUrl}/#fremont-automotive-tariff`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/#california-offices` },
        { name: 'Automotive Tariff Attorney Fremont', url: `${siteConfig.siteUrl}/#fremont-automotive-tariff` }
      ]),
      generateFAQSchema([
        {
          question: 'How do tariffs affect Fremont automotive manufacturers?',
          answer: 'Fremont is home to major EV manufacturing. Automotive parts from China face Section 301 tariffs of 7.5%-25%. USMCA rules impact Mexican and Canadian sourcing. Our Fremont automotive tariff attorneys help manufacturers minimize duty exposure on parts and components.',
        },
        {
          question: 'What automotive parts face China tariffs in Fremont?',
          answer: 'Tariffed automotive parts include batteries and cells, electric motors, wiring harnesses, semiconductors, sensors, display screens, and various components. Our Fremont automotive tariff lawyers analyze your BOM to identify reduction opportunities.',
        },
        {
          question: 'Can USMCA reduce automotive tariffs for Fremont manufacturers?',
          answer: 'Yes. USMCA provides duty-free treatment for qualifying automotive products. Our Fremont automotive tariff attorneys help manufacturers meet regional value content requirements, labor value content rules, and steel/aluminum requirements for USMCA eligibility.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="Automotive Tariff Attorney Fremont Hero">
        <picture className="hero-bg">
          <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>Automotive Tariff Attorney<br />Fremont CA</h1>
          <p className="hero-subtitle">Expert automotive tariff attorney serving Fremont EV and automotive manufacturers. Auto parts tariffs significantly impact production costs. Our automotive import lawyers help manufacturers minimize duty exposure on parts and components.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Automotive Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">Automotive Tariff Services for Fremont</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">Fremont is a hub for EV manufacturing with complex import needs. Our <strong>automotive tariff attorneys</strong> help manufacturers navigate Section 301, USMCA, and classification challenges.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">EV Expertise</h3>
              <p className="text-text-secondary leading-relaxed">We understand electric vehicle supply chains and component tariffs. Our <strong>automotive tariff attorneys</strong> know EV-specific classifications.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Section 301 Strategy</h3>
              <p className="text-text-secondary leading-relaxed">China auto parts face significant tariffs. Our attorneys identify <strong>legal strategies</strong> to minimize Section 301 exposure.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">USMCA Compliance</h3>
              <p className="text-text-secondary leading-relaxed">USMCA automotive rules are complex. We help manufacturers qualify for <strong>duty-free treatment</strong> on North American parts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Automotive Tariff Services</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Automotive Strategy</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Our Fremont <strong>automotive tariff attorneys</strong> develop comprehensive strategies to minimize China tariffs on auto parts.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>BOM tariff analysis</li>
                <li>Classification optimization</li>
                <li>Tariff engineering</li>
                <li>Supply chain restructuring</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA Automotive Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">USMCA provides duty-free treatment but requires complex compliance. We help manufacturers meet <strong>automotive-specific requirements</strong>.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Regional value content (75%)</li>
                <li>Labor value content</li>
                <li>Steel/aluminum requirements</li>
                <li>Core parts compliance</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EV Component Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Electric vehicle components have unique classification challenges. Our <strong>EV tariff lawyers</strong> ensure optimal HTS classification.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Battery and cell classification</li>
                <li>Motor and inverter analysis</li>
                <li>Electronics classification</li>
                <li>Binding ruling requests</li>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Fremont Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#fremont-customs-attorney" className="service-link"><span className="service-link__title">Fremont Customs Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#fremont-semiconductor-tariff" className="service-link"><span className="service-link__title">Semiconductor Tariffs</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#trump-2025-tariff-attorney" className="service-link"><span className="service-link__title">2025 Tariff Updates</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#trade-law-faq" className="service-link"><span className="service-link__title">Automotive FAQ</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedCityPages currentCity="Fremont" region="bay-area" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Reduce Your Automotive Tariff Burden</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Don't overpay on auto parts tariffs. Our Fremont automotive tariff attorneys help manufacturers minimize duty exposure legally.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">Free Automotive Consultation</Button>
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

export default FremontAutomotiveTariffPage;
