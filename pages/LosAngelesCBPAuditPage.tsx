
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LosAngelesCBPAuditPage: React.FC = () => {
  useMeta({
    title: 'CBP Audit Defense Attorney Los Angeles | Customs Audit Lawyer LA | Trembach Law',
    description: 'CBP audit defense attorney Los Angeles. Expert customs audit lawyer serving LA businesses. Focused assessment defense, penalty mitigation, prior disclosure. Free consultation (310) 744-1328.',
    keywords: 'CBP audit defense attorney los angeles, customs audit lawyer los angeles, LA CBP audit attorney, focused assessment defense los angeles, customs audit defense LA, los angeles customs audit lawyer, CBP investigation attorney LA, customs penalty mitigation los angeles, prior disclosure attorney LA, CF-28 response attorney los angeles',
    canonical: 'los-angeles-cbp-audit',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-los-angeles.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'CBP Audit Defense Attorney Los Angeles - Customs Audit Lawyer',
        description: 'Expert CBP audit defense attorney serving Los Angeles businesses with focused assessment defense, penalty mitigation, and prior disclosure services.',
        url: `${siteConfig.siteUrl}/los-angeles-cbp-audit`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'CBP Audit Defense Los Angeles', url: `${siteConfig.siteUrl}/los-angeles-cbp-audit` }
      ]),
      generateFAQSchema([
        {
          question: 'What triggers a CBP audit in Los Angeles?',
          answer: 'CBP audits in Los Angeles are triggered by various factors including high-volume imports through Port of LA/Long Beach, industry targeting (textiles, electronics), random selection, prior violations, classification discrepancies, and related-party transactions. Our LA CBP audit defense attorneys help businesses prepare for and defend against all types of audits.',
        },
        {
          question: 'How can a Los Angeles customs attorney help with my CBP audit?',
          answer: 'Our Los Angeles CBP audit attorneys provide comprehensive defense including reviewing audit notices, preparing document responses, representing you in CBP interviews, negotiating penalty reductions, filing prior disclosures, and appealing adverse decisions. We have helped LA importers reduce penalties by 50-90%.',
        },
        {
          question: 'What is a Focused Assessment audit in Los Angeles?',
          answer: 'A Focused Assessment is CBP\'s comprehensive audit program targeting specific compliance areas. It involves pre-assessment surveys, testing phases, and compliance improvement periods. Our Los Angeles customs audit lawyers have extensive experience defending FA audits for importers using Port of LA and Long Beach.',
        },
        {
          question: 'How quickly should I respond to a CBP audit notice in LA?',
          answer: 'You should contact a CBP audit defense attorney immediately upon receiving an audit notice. Deadlines are strict and early intervention is critical. Our Los Angeles team responds within 24 hours and can help preserve your rights and minimize potential penalties.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="CBP Audit Defense Los Angeles Hero">
        <picture className="hero-bg">
          <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920&auto=format&fit=crop" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>CBP Audit Defense Attorney<br />Los Angeles CA</h1>
          <p className="hero-subtitle">Expert CBP audit defense attorney serving Los Angeles businesses. With Port of LA being America's busiest port, LA importers face significant audit risk. Our customs audit lawyers provide aggressive defense, penalty mitigation, and compliance solutions.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Audit Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">CBP Audit Defense for Los Angeles Importers</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">Los Angeles is ground zero for CBP audits. As home to the nation's largest port complex, LA businesses face intense scrutiny. Our <strong>CBP audit defense attorneys</strong> protect your business from costly penalties and enforcement actions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of LA Expertise</h3>
              <p className="text-text-secondary leading-relaxed">We understand Port of Los Angeles operations and CBP's enforcement priorities. Our <strong>LA customs audit lawyers</strong> know what triggers audits and how to defend them.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Penalty Reduction</h3>
              <p className="text-text-secondary leading-relaxed">CBP penalties can reach millions. Our Los Angeles attorneys have achieved <strong>50-90% penalty reductions</strong> through strategic prior disclosures and mitigation arguments.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">24-Hour Response</h3>
              <p className="text-text-secondary leading-relaxed">Audit deadlines are strict. Our LA team responds within 24 hours to protect your rights and begin building your <strong>audit defense strategy</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">CBP Audit Services in Los Angeles</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Focused Assessment Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Our Los Angeles <strong>CBP audit defense attorneys</strong> handle all phases of Focused Assessment audits including pre-assessment surveys, testing, and compliance improvement.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Pre-assessment survey response</li>
                <li>Document production management</li>
                <li>Interview preparation and representation</li>
                <li>Compliance action plan development</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Prior Disclosure Services</h3>
              <p className="text-text-secondary leading-relaxed mb-4">A strategic prior disclosure can <strong>cap penalties significantly</strong>. Our LA customs lawyers guide importers through the disclosure process to minimize liability.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Disclosure timing strategy</li>
                <li>Duty calculation and tender</li>
                <li>Narrative preparation</li>
                <li>CBP negotiation</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Penalty Mitigation Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">When CBP issues penalties under 19 USC 1592, our Los Angeles <strong>customs penalty attorneys</strong> fight for maximum reduction through strategic mitigation.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Penalty notice analysis</li>
                <li>Mitigation petition filing</li>
                <li>Reasonable care documentation</li>
                <li>Settlement negotiation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Related Services & Resources</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Defense Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/customs-defense-litigation" className="service-link"><span className="service-link__title">Customs Defense & Litigation</span><p className="service-link__description">Full defense representation</p><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/los-angeles-tariff-lawyer" className="service-link"><span className="service-link__title">LA Tariff Lawyer</span><p className="service-link__description">Tariff classification services</p><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">LA Area Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/calabasas-customs-attorney" className="service-link"><span className="service-link__title">Calabasas Office</span><p className="service-link__description">Headquarters location</p><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/long-beach-port-attorney" className="service-link"><span className="service-link__title">Long Beach Port</span><p className="service-link__description">Port operations expertise</p><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
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

      <RelatedCityPages currentCity="Los Angeles" region="los-angeles" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Facing a CBP Audit in Los Angeles?</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Don't face a CBP audit alone. Our Los Angeles customs audit defense attorneys are ready to protect your business.</p>
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

export default LosAngelesCBPAuditPage;
