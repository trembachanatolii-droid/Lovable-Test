
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanDiegoCBPAuditPage: React.FC = () => {
  useMeta({
    title: 'CBP Audit Defense Attorney San Diego | Customs Audit Lawyer SD | Trembach Law',
    description: 'CBP audit defense attorney San Diego CA. Expert customs audit lawyer serving San Diego border businesses. Focused assessment defense, penalty mitigation, prior disclosure. Free consultation.',
    keywords: 'CBP audit defense attorney san diego, customs audit lawyer san diego, san diego CBP audit, focused assessment defense san diego, customs audit defense san diego, san diego customs audit lawyer, CBP investigation attorney san diego, customs penalty mitigation san diego, border customs audit san diego',
    canonical: 'san-diego-cbp-audit',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-san-diego.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'CBP Audit Defense Attorney San Diego - Customs Audit Lawyer',
        description: 'Expert CBP audit defense attorney serving San Diego businesses with focused assessment defense, penalty mitigation, and prior disclosure services.',
        url: `${siteConfig.siteUrl}/san-diego-cbp-audit`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'CBP Audit Defense San Diego', url: `${siteConfig.siteUrl}/san-diego-cbp-audit` }
      ]),
      generateFAQSchema([
        {
          question: 'Why do San Diego businesses face CBP audits?',
          answer: 'San Diego\'s proximity to the Mexico border and high cross-border trade volume makes local businesses frequent CBP audit targets. USMCA transactions, maquiladora operations, and high-value shipments through San Diego ports increase audit risk. Our San Diego CBP audit attorneys defend against all types of customs audits.',
        },
        {
          question: 'What triggers a CBP audit in San Diego?',
          answer: 'CBP audits in San Diego are triggered by high cross-border volume, USMCA certification issues, related-party transactions, industry targeting, and random selection. Our San Diego customs audit lawyers help businesses prepare for and defend against these audits.',
        },
        {
          question: 'How long does a CBP audit take in San Diego?',
          answer: 'CBP audits typically take 6-18 months depending on complexity. A Focused Assessment may extend longer. Our San Diego CBP audit defense attorneys work to resolve audits efficiently while protecting your interests throughout the process.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="CBP Audit Defense San Diego Hero">
        <picture className="hero-bg">
          <img src="/images/hero-port-background-2.jpg" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>CBP Audit Defense Attorney<br />San Diego CA</h1>
          <p className="hero-subtitle">Expert CBP audit defense attorney serving San Diego border businesses. Cross-border trade brings increased CBP scrutiny. Our customs audit lawyers provide aggressive defense, penalty mitigation, and compliance solutions.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Audit Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">CBP Audit Defense for San Diego Businesses</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">San Diego's border location means intense CBP scrutiny. Our <strong>CBP audit defense attorneys</strong> protect your business from costly penalties and enforcement actions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Border Expertise</h3>
              <p className="text-text-secondary leading-relaxed">We understand cross-border trade and USMCA compliance. Our <strong>San Diego customs audit lawyers</strong> know border operations and CBP enforcement priorities.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Penalty Reduction</h3>
              <p className="text-text-secondary leading-relaxed">CBP penalties can devastate businesses. Our attorneys have achieved <strong>50-90% penalty reductions</strong> through strategic defense and prior disclosures.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response</h3>
              <p className="text-text-secondary leading-relaxed">Audit deadlines are strict. Our San Diego team responds within 24 hours to protect your rights and begin <strong>building your defense</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">CBP Audit Services in San Diego</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA Audit Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">San Diego businesses utilizing USMCA benefits face verification audits. Our <strong>CBP audit defense attorneys</strong> ensure your certifications and documentation meet requirements.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Origin certification review</li>
                <li>Tracing documentation</li>
                <li>Verification response</li>
                <li>Penalty defense for denied claims</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Focused Assessment Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Our San Diego <strong>customs audit lawyers</strong> handle all phases of Focused Assessment audits from pre-assessment to resolution.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Pre-assessment survey response</li>
                <li>Document production management</li>
                <li>CBP interview representation</li>
                <li>Compliance action plan</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Prior Disclosure Services</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Strategic prior disclosure can <strong>cap penalties significantly</strong>. We guide San Diego importers through the disclosure process.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Disclosure timing strategy</li>
                <li>Duty calculation and tender</li>
                <li>Narrative preparation</li>
                <li>CBP negotiation</li>
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
                <div className="service-link-item"><Link to="/san-diego-customs-lawyer" className="service-link"><span className="service-link__title">SD Customs Lawyer</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">San Diego Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/san-diego-section-301" className="service-link"><span className="service-link__title">Section 301 Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/san-diego-uflpa-compliance" className="service-link"><span className="service-link__title">UFLPA Compliance</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/trade-law-faq" className="service-link"><span className="service-link__title">CBP Audit FAQ</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/resources" className="service-link"><span className="service-link__title">Resources Hub</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedCityPages currentCity="San Diego" region="san-diego" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Facing a CBP Audit in San Diego?</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Don't face a CBP audit alone. Our San Diego customs audit defense attorneys are ready to protect your business.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">Free Audit Consultation</Button>
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

export default SanDiegoCBPAuditPage;
