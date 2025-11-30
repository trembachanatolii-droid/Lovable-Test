
import React, { lazy, Suspense, useEffect } from 'react';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LongBeachCBPAuditPage: React.FC = () => {
  useMeta({
    title: 'CBP Audit Defense Attorney Long Beach | Customs Audit Lawyer Port | Trembach Law',
    description: 'CBP audit defense attorney Long Beach CA. Expert customs audit lawyer serving Port of Long Beach businesses. Focused assessment defense, penalty mitigation, prior disclosure. Free consultation.',
    keywords: 'CBP audit defense attorney long beach, customs audit lawyer long beach, port of long beach CBP audit, focused assessment defense long beach, customs audit defense long beach, long beach customs audit lawyer, CBP investigation attorney long beach, customs penalty mitigation long beach, prior disclosure attorney long beach',
    canonical: 'long-beach-cbp-audit',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-long-beach.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'CBP Audit Defense Attorney Long Beach - Customs Audit Lawyer Port',
        description: 'Expert CBP audit defense attorney serving Long Beach and Port businesses with focused assessment defense, penalty mitigation, and prior disclosure services.',
        url: `${siteConfig.siteUrl}/#long-beach-cbp-audit`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/#california-offices` },
        { name: 'CBP Audit Defense Long Beach', url: `${siteConfig.siteUrl}/#long-beach-cbp-audit` }
      ]),
      generateFAQSchema([
        {
          question: 'Why are Long Beach importers targeted for CBP audits?',
          answer: 'Port of Long Beach is the second busiest port in the US, making Long Beach importers prime targets for CBP enforcement. High-volume importers, industry sectors like textiles and electronics, and companies with prior violations face increased audit risk. Our Long Beach CBP audit attorneys help businesses prepare for and defend against all types of audits.',
        },
        {
          question: 'What happens during a CBP Focused Assessment in Long Beach?',
          answer: 'A Focused Assessment is CBP\'s comprehensive audit program. It begins with a pre-assessment survey, followed by testing of your entries, and concludes with findings and potential penalties. Our Long Beach customs audit lawyers guide clients through each phase, minimizing exposure and ensuring compliance.',
        },
        {
          question: 'How can I reduce CBP audit penalties in Long Beach?',
          answer: 'Strategic prior disclosure before CBP completes its audit can cap penalties significantly. Our Long Beach CBP audit defense attorneys also pursue mitigation based on reasonable care, lack of culpability, and cooperation. We have achieved 50-90% penalty reductions for port importers.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="CBP Audit Defense Long Beach Hero">
        <picture className="hero-bg">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>CBP Audit Defense Attorney<br />Long Beach CA</h1>
          <p className="hero-subtitle">Expert CBP audit defense attorney serving Long Beach port businesses. Port of Long Beach importers face intense scrutiny. Our customs audit lawyers provide aggressive defense, penalty mitigation, and compliance solutions for port operations.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Audit Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">CBP Audit Defense for Long Beach Importers</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">Port of Long Beach handles massive cargo volumes, making Long Beach businesses prime audit targets. Our <strong>CBP audit defense attorneys</strong> protect your business from costly penalties.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Expertise</h3>
              <p className="text-text-secondary leading-relaxed">We understand Port of Long Beach operations and CBP's enforcement priorities. Our <strong>customs audit lawyers</strong> know what triggers audits and how to defend them.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Penalty Reduction</h3>
              <p className="text-text-secondary leading-relaxed">CBP penalties can reach millions. Our Long Beach attorneys have achieved <strong>50-90% penalty reductions</strong> through strategic prior disclosures and mitigation.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">24-Hour Response</h3>
              <p className="text-text-secondary leading-relaxed">Audit deadlines are strict. Our team responds within 24 hours to protect your rights and begin building your <strong>audit defense strategy</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">CBP Audit Services in Long Beach</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Focused Assessment Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Our Long Beach <strong>CBP audit defense attorneys</strong> handle all phases of Focused Assessment audits including pre-assessment surveys, testing, and compliance improvement.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Pre-assessment survey response</li>
                <li>Document production management</li>
                <li>Interview preparation and representation</li>
                <li>Compliance action plan development</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Prior Disclosure Services</h3>
              <p className="text-text-secondary leading-relaxed mb-4">A strategic prior disclosure can <strong>cap penalties significantly</strong>. Our customs lawyers guide Long Beach importers through the disclosure process.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Disclosure timing strategy</li>
                <li>Duty calculation and tender</li>
                <li>Narrative preparation</li>
                <li>CBP negotiation</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Penalty Mitigation Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">When CBP issues penalties under 19 USC 1592, our <strong>customs penalty attorneys</strong> fight for maximum reduction through strategic mitigation.</p>
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
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Defense Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#customs-defense-litigation" className="service-link"><span className="service-link__title">Customs Defense</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#long-beach-port-attorney" className="service-link"><span className="service-link__title">Long Beach Port Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Port Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#long-beach-duty-drawback" className="service-link"><span className="service-link__title">Duty Drawback</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#long-beach-ftz-compliance" className="service-link"><span className="service-link__title">FTZ Compliance</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#trade-law-faq" className="service-link"><span className="service-link__title">CBP Audit FAQ</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#resources" className="service-link"><span className="service-link__title">Resources Hub</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedCityPages currentCity="Long Beach" region="los-angeles" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Facing a CBP Audit in Long Beach?</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Don't face a CBP audit alone. Our Long Beach customs audit defense attorneys are ready to protect your business.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">Free Audit Consultation</Button>
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

export default LongBeachCBPAuditPage;
