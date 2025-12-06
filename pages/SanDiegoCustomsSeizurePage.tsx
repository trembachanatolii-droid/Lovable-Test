
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanDiegoCustomsSeizurePage: React.FC = () => {
  useMeta({
    title: 'Customs Seizure Attorney San Diego | Border Detention Lawyer | Trembach Law',
    description: 'Customs seizure attorney San Diego CA. Expert border detention lawyer serving cross-border businesses. CBP seizure defense, detained goods release, forfeiture prevention. Free consultation.',
    keywords: 'customs seizure attorney san diego, border detention lawyer san diego, san diego customs seizure defense, seized goods attorney san diego, CBP seizure lawyer san diego, customs detention attorney san diego, border seizure defense san diego, goods seized at border san diego',
    canonical: 'san-diego-customs-seizure',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-san-diego.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Customs Seizure Attorney San Diego - Border Detention Lawyer',
        description: 'Expert customs seizure attorney serving San Diego with border seizure defense, detention release, and forfeiture prevention.',
        url: `${siteConfig.siteUrl}/san-diego-customs-seizure`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Customs Seizure Attorney San Diego', url: `${siteConfig.siteUrl}/san-diego-customs-seizure` }
      ]),
      generateFAQSchema([
        {
          question: 'What should I do if CBP seizes my goods at the San Diego border?',
          answer: 'Contact a customs seizure attorney immediately. San Diego border crossings have strict enforcement. You have limited time to respond to seizure notices. Our San Diego seizure lawyers can assess your case and file petitions to recover your goods quickly.',
        },
        {
          question: 'Why would CBP seize goods at the San Diego-Mexico border?',
          answer: 'CBP seizes goods at the border for IPR violations (counterfeits), UFLPA concerns, maquiladora documentation issues, USMCA violations, classification errors, and prohibited items. Our San Diego customs seizure attorneys analyze seizure notices to build the best defense strategy.',
        },
        {
          question: 'Can I get my seized goods released at San Diego ports of entry?',
          answer: 'Yes, in many cases seized goods can be released through petitions, evidence submissions, or negotiations. Our San Diego seizure attorneys have recovered millions in detained cargo for cross-border businesses.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="Customs Seizure Attorney San Diego Hero">
        <picture className="hero-bg">
          <img src="/images/hero-port-background-2.jpg" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>Customs Seizure Attorney<br />San Diego CA</h1>
          <p className="hero-subtitle">Expert customs seizure attorney serving San Diego border businesses. When CBP seizes your cargo at the border, every day counts. Our seizure defense lawyers help businesses recover detained goods, challenge wrongful seizures, and minimize penalties.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Emergency Seizure Help</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">Customs Seizure Defense for San Diego</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">San Diego is a major border crossing point. Our experienced <strong>customs seizure attorneys</strong> respond quickly to protect your interests and recover detained goods.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Border Expertise</h3>
              <p className="text-text-secondary leading-relaxed">We understand San Diego-Mexico border operations. Our <strong>customs seizure attorneys</strong> know CBP enforcement at San Ysidro and Otay Mesa.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Results</h3>
              <p className="text-text-secondary leading-relaxed">We've recovered millions in seized cargo. Our <strong>seizure defense</strong> strategies are tailored to border-specific issues.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">24-Hour Response</h3>
              <p className="text-text-secondary leading-relaxed">Seizures require immediate action. Our San Diego <strong>seizure defense lawyers</strong> respond within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Seizure Defense Services in San Diego</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Border Seizure Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Our San Diego <strong>customs seizure attorneys</strong> handle all types of border seizures including maquiladora goods, cross-border shipments, and commercial cargo.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA documentation defense</li>
                <li>Maquiladora seizure response</li>
                <li>Commercial cargo release</li>
                <li>Penalty negotiation</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">IPR Seizure Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Intellectual property seizures are common at the border. We defend businesses against <strong>trademark and copyright seizures</strong>.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Authorization documentation</li>
                <li>Gray market defense</li>
                <li>First sale doctrine</li>
                <li>Rights holder negotiations</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Petition for Remission</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Our San Diego <strong>customs seizure attorneys</strong> prepare comprehensive petitions under 19 USC 1618 to recover your goods.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Seizure notice analysis</li>
                <li>Evidence compilation</li>
                <li>Mitigating factors</li>
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
                <div className="service-link-item"><Link to="/customs-defense" className="service-link"><span className="service-link__title">Customs Defense</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/san-diego-cbp-audit" className="service-link"><span className="service-link__title">CBP Audit Defense</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">San Diego Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/san-diego-customs-lawyer" className="service-link"><span className="service-link__title">San Diego Customs Lawyer</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/san-diego-section-301" className="service-link"><span className="service-link__title">Section 301 Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/trade-law-faq" className="service-link"><span className="service-link__title">Seizure FAQ</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/resources" className="service-link"><span className="service-link__title">Resources Hub</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedCityPages currentCity="San Diego" region="san-diego" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Goods Seized at the Border? Get Help Now</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Time is critical when CBP seizes your cargo. Our San Diego customs seizure attorneys are ready to fight for your goods.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">Emergency Seizure Help</Button>
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

export default SanDiegoCustomsSeizurePage;
