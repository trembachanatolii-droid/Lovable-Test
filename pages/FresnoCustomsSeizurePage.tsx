
import React, { lazy, Suspense, useEffect } from 'react';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const FresnoCustomsSeizurePage: React.FC = () => {
  useMeta({
    title: 'Customs Seizure Attorney Fresno CA | Cargo Detention Lawyer | Trembach Law',
    description: 'Customs seizure attorney Fresno CA. Expert Fresno cargo detention lawyer for CBP seizures. Seized goods recovery, forfeiture defense for Central Valley businesses. Free consultation.',
    keywords: 'customs seizure attorney fresno, fresno cargo detention lawyer, seized goods attorney fresno, CBP seizure lawyer fresno, customs detention attorney fresno, import seizure defense fresno, goods seized at customs fresno, central valley seizure attorney',
    canonical: 'fresno-customs-seizure',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-fresno.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Customs Seizure Attorney Fresno CA - Cargo Detention Lawyer Central Valley',
        description: 'Expert customs seizure attorney serving Fresno and Central Valley with seizure defense, detention release, and forfeiture prevention.',
        url: `${siteConfig.siteUrl}/#fresno-customs-seizure`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/#california-offices` },
        { name: 'Customs Seizure Attorney Fresno', url: `${siteConfig.siteUrl}/#fresno-customs-seizure` }
      ]),
      generateFAQSchema([
        {
          question: 'What should I do if CBP seizes my goods in Fresno?',
          answer: 'Contact a customs seizure attorney immediately. You have strict deadlines to respond to seizure notices. Our Fresno seizure lawyers can assess your case and file petitions to recover your goods within 24-48 hours.',
        },
        {
          question: 'Why would CBP seize goods in Fresno?',
          answer: 'CBP seizes goods for IPR violations (counterfeits), UFLPA concerns, classification errors, undeclared items, safety violations, or prohibited goods. Our Fresno customs seizure attorneys analyze seizure notices to build the best defense strategy.',
        },
        {
          question: 'Can I get my seized goods released in Fresno?',
          answer: 'Yes, in many cases seized goods can be released through petitions, evidence submissions, or negotiations. Our Fresno seizure attorneys have recovered millions in detained cargo for Central Valley businesses and importers.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="Customs Seizure Attorney Fresno Hero">
        <picture className="hero-bg">
          <img src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1920&auto=format&fit=crop" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>Customs Seizure Attorney<br />Fresno CA</h1>
          <p className="hero-subtitle">Expert customs seizure attorney serving Fresno and Central Valley. When CBP seizes your cargo, immediate action is essential. Our seizure defense lawyers help businesses recover detained goods, challenge wrongful seizures, and minimize penalties.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Emergency Seizure Help</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">Customs Seizure Defense for Fresno</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">Fresno businesses importing goods face CBP seizure risks. Our experienced <strong>customs seizure attorneys</strong> respond quickly to protect Central Valley importers and recover detained goods.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">24-Hour Response</h3>
              <p className="text-text-secondary leading-relaxed">Seizures require immediate action. Our Fresno <strong>customs seizure attorneys</strong> respond within 24 hours to assess your case and protect your rights.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Success</h3>
              <p className="text-text-secondary leading-relaxed">We've recovered millions in seized cargo. Our <strong>seizure defense</strong> strategies are tailored to the specific grounds of each seizure at Fresno customs.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley Focus</h3>
              <p className="text-text-secondary leading-relaxed">We serve Fresno, Clovis, Madera, and all Central Valley with dedicated <strong>seizure defense</strong> services for agricultural and commercial imports.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Seizure Defense Services in Fresno</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Petition for Remission</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Our Fresno <strong>customs seizure attorneys</strong> prepare comprehensive petitions under 19 USC 1618 to recover your goods with minimal or no penalty.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Seizure notice analysis</li>
                <li>Evidence compilation</li>
                <li>Mitigating factors</li>
                <li>Penalty negotiation</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">IPR Seizure Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Intellectual property seizures impact Central Valley businesses. We defend against wrongful <strong>trademark and copyright seizures</strong>.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Authorization documentation</li>
                <li>Gray market defense</li>
                <li>First sale doctrine</li>
                <li>Rights holder negotiations</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Goods detained under UFLPA require specialized defense. Our Fresno <strong>UFLPA attorneys</strong> prepare evidence to rebut the forced labor presumption.</p>
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
                <div className="service-link-item"><a href="#resources/uflpa-compliance-guide" className="service-link"><span className="service-link__title">UFLPA Defense Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Fresno</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#fresno-customs-attorney" className="service-link"><span className="service-link__title">Fresno Customs Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><a href="#fresno-tariff-lawyer" className="service-link"><span className="service-link__title">Fresno Tariff Lawyer</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
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

      <RelatedCityPages currentCity="Fresno" region="california" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Goods Seized? Get Emergency Help Now</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Time is critical when CBP seizes your cargo. Our Fresno customs seizure attorneys are ready to fight for your goods.</p>
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

export default FresnoCustomsSeizurePage;
