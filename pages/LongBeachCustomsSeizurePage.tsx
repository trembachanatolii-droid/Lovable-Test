
import React, { lazy, Suspense, useEffect } from 'react';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LongBeachCustomsSeizurePage: React.FC = () => {
  useMeta({
    title: 'Customs Seizure Attorney Long Beach | Port Seizure Defense | Trembach Law',
    description: 'Customs seizure attorney Long Beach CA. Expert port seizure defense lawyer serving Port of Long Beach. CBP seizure defense, detained cargo release, forfeiture prevention. Free consultation.',
    keywords: 'customs seizure attorney long beach, port seizure defense lawyer long beach, long beach customs seizure defense, seized cargo attorney long beach, CBP seizure lawyer port of long beach, customs detention attorney long beach, port seizure defense long beach, cargo seized at port long beach',
    canonical: 'long-beach-customs-seizure',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-long-beach.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Customs Seizure Attorney Long Beach - Port Seizure Defense',
        description: 'Expert customs seizure attorney serving Port of Long Beach with seizure defense, detention release, and forfeiture prevention.',
        url: `${siteConfig.siteUrl}/#long-beach-customs-seizure`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/#california-offices` },
        { name: 'Customs Seizure Attorney Long Beach', url: `${siteConfig.siteUrl}/#long-beach-customs-seizure` }
      ]),
      generateFAQSchema([
        {
          question: 'What should I do if CBP seizes my cargo at Port of Long Beach?',
          answer: 'Contact a customs seizure attorney immediately. Port of Long Beach is the second busiest US port with intensive CBP enforcement. You have strict deadlines to respond to seizure notices. Our Long Beach seizure lawyers can assess your case and file petitions to recover your cargo.',
        },
        {
          question: 'Why would CBP seize cargo at Port of Long Beach?',
          answer: 'CBP seizes cargo at the port for IPR violations, UFLPA concerns (forced labor), classification errors, undeclared goods, safety violations, and prohibited items. Our Long Beach customs seizure attorneys analyze seizure notices to build effective defense strategies.',
        },
        {
          question: 'How long does it take to release seized cargo at Long Beach?',
          answer: 'Release timeframes vary based on seizure grounds and evidence quality. Simple cases may resolve in weeks; complex UFLPA or IPR cases take longer. Our Long Beach seizure attorneys work to expedite release while protecting your legal rights.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="Customs Seizure Attorney Long Beach Hero">
        <picture className="hero-bg">
          <img src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1920&auto=format&fit=crop" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>Customs Seizure Attorney<br />Long Beach CA</h1>
          <p className="hero-subtitle">Expert customs seizure attorney serving Port of Long Beach businesses. When CBP seizes your cargo at America's second busiest port, every day counts. Our seizure defense lawyers help recover detained goods and prevent forfeiture.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Emergency Seizure Help</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">Port Seizure Defense for Long Beach</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">Port of Long Beach handles massive cargo volumes with intensive CBP enforcement. Our <strong>customs seizure attorneys</strong> respond quickly to protect your interests and recover detained cargo.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Expertise</h3>
              <p className="text-text-secondary leading-relaxed">We understand Port of Long Beach operations and CBP's enforcement priorities. Our <strong>customs seizure attorneys</strong> know what triggers port seizures.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Results</h3>
              <p className="text-text-secondary leading-relaxed">We've recovered millions in seized port cargo. Our <strong>seizure defense</strong> strategies are tailored to port-specific enforcement.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">24-Hour Response</h3>
              <p className="text-text-secondary leading-relaxed">Port seizures require immediate action. Our <strong>seizure defense lawyers</strong> respond within 24 hours to protect your rights.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Seizure Defense Services at Long Beach Port</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Petition for Remission</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Our Long Beach <strong>customs seizure attorneys</strong> prepare comprehensive petitions under 19 USC 1618 to recover your cargo with minimal or no penalty.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Seizure notice analysis</li>
                <li>Evidence compilation</li>
                <li>Mitigating factors presentation</li>
                <li>Penalty negotiation</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">IPR Seizure Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Intellectual property seizures are common at the port. We defend businesses against <strong>trademark and copyright seizures</strong>.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Authorization documentation</li>
                <li>Gray market defense</li>
                <li>First sale doctrine</li>
                <li>Rights holder negotiations</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">UFLPA detentions are common at Port of Long Beach. Our <strong>UFLPA attorneys</strong> prepare evidence to rebut the forced labor presumption.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Supply chain documentation</li>
                <li>Clear and convincing evidence</li>
                <li>Traceability records</li>
                <li>CBP negotiations</li>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Defense Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#customs-defense-litigation" className="service-link"><span className="service-link__title">Customs Defense</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#long-beach-cbp-audit" className="service-link"><span className="service-link__title">CBP Audit Defense</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Long Beach Port</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#long-beach-port-attorney" className="service-link"><span className="service-link__title">Long Beach Port Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#long-beach-uflpa" className="service-link"><span className="service-link__title">UFLPA Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#trade-law-faq" className="service-link"><span className="service-link__title">Seizure FAQ</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#resources" className="service-link"><span className="service-link__title">Resources Hub</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedCityPages currentCity="Long Beach" region="los-angeles" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Cargo Seized at Long Beach Port? Get Help Now</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Time is critical when CBP seizes your cargo. Our Long Beach customs seizure attorneys are ready to fight for your goods.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">Emergency Seizure Help</Button>
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

export default LongBeachCustomsSeizurePage;
