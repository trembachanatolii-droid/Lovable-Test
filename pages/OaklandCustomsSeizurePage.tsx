
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const OaklandCustomsSeizurePage: React.FC = () => {
  useMeta({
    title: 'Customs Seizure Attorney Oakland CA | Cargo Detention Lawyer | Trembach Law',
    description: 'Customs seizure attorney Oakland CA. Expert Oakland cargo detention lawyer for CBP seizures at Port of Oakland. Seized goods recovery, forfeiture defense. Free consultation.',
    keywords: 'customs seizure attorney oakland, oakland cargo detention lawyer, seized goods attorney oakland, CBP seizure lawyer oakland, customs detention attorney oakland, import seizure defense oakland, goods seized at customs oakland, port of oakland seizure attorney',
    canonical: 'oakland-customs-seizure',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-oakland.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Customs Seizure Attorney Oakland CA - Cargo Detention Lawyer Port of Oakland',
        description: 'Expert customs seizure attorney serving Oakland with seizure defense, detention release, and forfeiture prevention at the Port of Oakland.',
        url: `${siteConfig.siteUrl}/oakland-customs-seizure`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Customs Seizure Attorney Oakland', url: `${siteConfig.siteUrl}/oakland-customs-seizure` }
      ]),
      generateFAQSchema([
        {
          question: 'What should I do if CBP seizes my goods at Port of Oakland?',
          answer: 'Contact a customs seizure attorney immediately. You have strict deadlines to respond to seizure notices. Our Oakland seizure lawyers can assess your case and file petitions to recover your goods within 24-48 hours.',
        },
        {
          question: 'Why would CBP seize goods at Oakland port?',
          answer: 'CBP seizes goods for IPR violations (counterfeits), UFLPA concerns, classification errors, undeclared items, safety violations, or prohibited goods. Our Oakland customs seizure attorneys analyze seizure notices to build the best defense strategy.',
        },
        {
          question: 'Can I get my seized goods released in Oakland?',
          answer: 'Yes, in many cases seized goods can be released through petitions, evidence submissions, or negotiations. Our Oakland seizure attorneys have recovered millions in detained cargo for Bay Area businesses and importers.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="Customs Seizure Attorney Oakland Hero">
        <picture className="hero-bg">
          <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1920&auto=format&fit=crop" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>Customs Seizure Attorney<br />Oakland CA</h1>
          <p className="hero-subtitle">Expert customs seizure attorney serving Oakland and the Port of Oakland. When CBP seizes your cargo, every minute matters. Our seizure defense lawyers help Bay Area businesses recover detained goods, challenge wrongful seizures, and minimize penalties.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Emergency Seizure Help</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">Customs Seizure Defense for Oakland</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">Oakland businesses importing through the Port of Oakland face unique seizure challenges. Our experienced <strong>customs seizure attorneys</strong> respond quickly to protect your interests and recover detained goods.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">24-Hour Response</h3>
              <p className="text-text-secondary leading-relaxed">Seizures require immediate action. Our Oakland <strong>customs seizure attorneys</strong> respond within 24 hours to assess your case and protect your rights at the Port of Oakland.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Results</h3>
              <p className="text-text-secondary leading-relaxed">We've recovered millions in seized cargo. Our <strong>seizure defense</strong> strategies are tailored to the specific grounds of each seizure at Oakland customs.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bay Area Focus</h3>
              <p className="text-text-secondary leading-relaxed">We serve Oakland, San Francisco, Berkeley, and all Bay Area with dedicated <strong>seizure defense</strong> services at Northern California ports.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Seizure Defense Services in Oakland</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Petition for Remission</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Our Oakland <strong>customs seizure attorneys</strong> prepare comprehensive petitions under 19 USC 1618 to recover your goods with minimal or no penalty.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Seizure notice analysis</li>
                <li>Evidence compilation</li>
                <li>Mitigating factors</li>
                <li>Penalty negotiation</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">IPR Seizure Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Intellectual property seizures are common at Port of Oakland. We defend businesses against wrongful <strong>trademark and copyright seizures</strong>.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Authorization documentation</li>
                <li>Gray market defense</li>
                <li>First sale doctrine</li>
                <li>Rights holder negotiations</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Goods detained under UFLPA require specialized defense. Our Oakland <strong>UFLPA attorneys</strong> prepare evidence to rebut the forced labor presumption.</p>
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
                <div className="service-link-item"><Link to="/customs-defense-litigation" className="service-link"><span className="service-link__title">Customs Defense</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/resources/uflpa-compliance-guide" className="service-link"><span className="service-link__title">UFLPA Defense Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Oakland</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/oakland-customs-attorney" className="service-link"><span className="service-link__title">Oakland Customs Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/oakland-tariff-lawyer" className="service-link"><span className="service-link__title">Oakland Tariff Lawyer</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
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

      <RelatedCityPages currentCity="Oakland" region="california" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Goods Seized at Port of Oakland? Get Emergency Help Now</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Time is critical when CBP seizes your cargo. Our Oakland customs seizure attorneys are ready to fight for your goods.</p>
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

export default OaklandCustomsSeizurePage;
