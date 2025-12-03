
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const FresnoCBPAuditPage: React.FC = () => {
  useMeta({
    title: 'CBP Audit Defense Attorney Fresno | Customs Audit Lawyer Fresno CA | Trembach Law',
    description: 'CBP audit defense attorney Fresno. Expert customs audit lawyer serving Fresno businesses. Focused assessment defense, penalty mitigation, prior disclosure. Free consultation (310) 744-1328.',
    keywords: 'CBP audit defense attorney fresno, customs audit lawyer fresno, Fresno CBP audit attorney, focused assessment defense fresno, customs audit defense Fresno CA, fresno customs audit lawyer, CBP investigation attorney Fresno, customs penalty mitigation fresno, prior disclosure attorney Fresno, CF-28 response attorney fresno',
    canonical: 'fresno-cbp-audit',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-fresno.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'CBP Audit Defense Attorney Fresno - Customs Audit Lawyer',
        description: 'Expert CBP audit defense attorney serving Fresno businesses with focused assessment defense, penalty mitigation, and prior disclosure services.',
        url: `${siteConfig.siteUrl}/fresno-cbp-audit`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'CBP Audit Defense Fresno', url: `${siteConfig.siteUrl}/fresno-cbp-audit` }
      ]),
      generateFAQSchema([
        {
          question: 'What triggers a CBP audit in Fresno?',
          answer: 'CBP audits in Fresno are triggered by various factors including agricultural imports, industry targeting (food products, machinery, textiles), random selection, prior violations, classification discrepancies, and related-party transactions. Our Fresno CBP audit defense attorneys help businesses prepare for and defend against all types of audits.',
        },
        {
          question: 'How can a Fresno customs attorney help with my CBP audit?',
          answer: 'Our Fresno CBP audit attorneys provide comprehensive defense including reviewing audit notices, preparing document responses, representing you in CBP interviews, negotiating penalty reductions, filing prior disclosures, and appealing adverse decisions. We have helped Fresno importers reduce penalties by 50-90%.',
        },
        {
          question: 'What is a Focused Assessment audit in Fresno?',
          answer: 'A Focused Assessment is CBP\'s comprehensive audit program targeting specific compliance areas. It involves pre-assessment surveys, testing phases, and compliance improvement periods. Our Fresno customs audit lawyers have extensive experience defending FA audits for Central Valley importers.',
        },
        {
          question: 'How quickly should I respond to a CBP audit notice in Fresno?',
          answer: 'You should contact a CBP audit defense attorney immediately upon receiving an audit notice. Deadlines are strict and early intervention is critical. Our Fresno team responds within 24 hours and can help preserve your rights and minimize potential penalties.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="CBP Audit Defense Fresno Hero">
        <picture className="hero-bg">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>CBP Audit Defense Attorney<br />Fresno CA</h1>
          <p className="hero-subtitle">Expert CBP audit defense attorney serving Fresno businesses. As the agricultural capital of California, Fresno importers face unique audit challenges. Our customs audit lawyers provide aggressive defense, penalty mitigation, and compliance solutions.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Audit Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">CBP Audit Defense for Fresno Importers</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">Fresno's agricultural and manufacturing sectors face specialized CBP scrutiny. Our <strong>CBP audit defense attorneys</strong> protect your business from costly penalties and enforcement actions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley Expertise</h3>
              <p className="text-text-secondary leading-relaxed">We understand Central Valley agricultural imports and CBP's enforcement priorities. Our <strong>Fresno customs audit lawyers</strong> know what triggers audits and how to defend them.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Penalty Reduction</h3>
              <p className="text-text-secondary leading-relaxed">CBP penalties can reach millions. Our Fresno attorneys have achieved <strong>50-90% penalty reductions</strong> through strategic prior disclosures and mitigation arguments.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">24-Hour Response</h3>
              <p className="text-text-secondary leading-relaxed">Audit deadlines are strict. Our Fresno team responds within 24 hours to protect your rights and begin building your <strong>audit defense strategy</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">CBP Audit Services in Fresno</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Focused Assessment Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Our Fresno <strong>CBP audit defense attorneys</strong> handle all phases of Focused Assessment audits including pre-assessment surveys, testing, and compliance improvement.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Pre-assessment survey response</li>
                <li>Document production management</li>
                <li>Interview preparation and representation</li>
                <li>Compliance action plan development</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Prior Disclosure Services</h3>
              <p className="text-text-secondary leading-relaxed mb-4">A strategic prior disclosure can <strong>cap penalties significantly</strong>. Our Fresno customs lawyers guide importers through the disclosure process to minimize liability.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Disclosure timing strategy</li>
                <li>Duty calculation and tender</li>
                <li>Narrative preparation</li>
                <li>CBP negotiation</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Penalty Mitigation Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">When CBP issues penalties under 19 USC 1592, our Fresno <strong>customs penalty attorneys</strong> fight for maximum reduction through strategic mitigation.</p>
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
                <div className="service-link-item"><a href="#fresno-tariff-lawyer" className="service-link"><span className="service-link__title">Fresno Tariff Lawyer</span><p className="service-link__description">Tariff classification services</p><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Central Valley Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#sacramento-customs-attorney" className="service-link"><span className="service-link__title">Sacramento Office</span><p className="service-link__description">State capital services</p><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#bakersfield-customs-attorney" className="service-link"><span className="service-link__title">Bakersfield Office</span><p className="service-link__description">Southern Valley coverage</p><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
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

      <RelatedCityPages currentCity="Fresno" region="central-valley" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Facing a CBP Audit in Fresno?</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Don't face a CBP audit alone. Our Fresno customs audit defense attorneys are ready to protect your business.</p>
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

export default FresnoCBPAuditPage;
