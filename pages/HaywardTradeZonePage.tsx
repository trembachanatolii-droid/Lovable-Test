
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const HaywardTradeZonePage: React.FC = () => {
  useMeta({
    title: 'Hayward Foreign Trade Zone Attorney | FTZ Lawyer Bay Area | Trembach Law',
    description: 'Hayward Foreign Trade Zone attorney. Expert FTZ lawyer serving East Bay manufacturers and Port of Oakland importers. FTZ establishment, compliance, and duty savings strategies. Free consultation.',
    keywords: 'foreign trade zone attorney hayward, ftz lawyer hayward, hayward trade zone attorney, east bay ftz lawyer, foreign trade zone establishment hayward, port of oakland ftz, hayward customs attorney, ftz benefits hayward, bay area trade zone attorney',
    canonical: 'hayward-foreign-trade-zone',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-hayward.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Hayward Foreign Trade Zone Attorney - FTZ Lawyer East Bay',
        description: 'Expert Foreign Trade Zone attorney serving Hayward and East Bay manufacturers with FTZ establishment, Port of Oakland coordination, and duty deferral strategies.',
        url: `${siteConfig.siteUrl}/hayward-foreign-trade-zone`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Hayward Foreign Trade Zone', url: `${siteConfig.siteUrl}/hayward-foreign-trade-zone` }
      ]),
      generateFAQSchema([
        {
          question: 'How can Hayward manufacturers benefit from Foreign Trade Zones?',
          answer: 'Hayward manufacturers near Port of Oakland can defer customs duties, reduce inventory costs, eliminate duties on exported products, and streamline port-to-facility logistics through Foreign Trade Zone designation. Our Hayward FTZ attorneys help East Bay manufacturers maximize these benefits.',
        },
        {
          question: 'What FTZ services do you provide for East Bay businesses?',
          answer: 'Our Hayward Foreign Trade Zone lawyers provide FTZ establishment assistance, Port of Oakland coordination, compliance program development, duty deferral strategies, inverted tariff analysis, and ongoing FTZ regulatory compliance for manufacturing and distribution operations.',
        },
        {
          question: 'Can Hayward businesses use Port of Oakland FTZ benefits?',
          answer: 'Yes. Hayward businesses can establish FTZ sites or subzones coordinated with Port of Oakland operations for direct delivery of imports, duty deferral, and streamlined customs processing. Our FTZ attorneys structure optimal zone arrangements for East Bay operations.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="Hayward Foreign Trade Zone Hero">
        <picture className="hero-bg">
          <img src="/images/hero-port-background-2.jpg" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>Hayward Foreign Trade Zone Attorney<br />FTZ Lawyer East Bay</h1>
          <p className="hero-subtitle">Expert Foreign Trade Zone attorney serving Hayward and East Bay manufacturers near Port of Oakland. Defer duties, reduce costs, and maximize FTZ benefits with specialized legal guidance.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free FTZ Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">Foreign Trade Zone Solutions for Hayward</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">Hayward's strategic location near <strong>Port of Oakland</strong> makes it ideal for FTZ operations. Our Foreign Trade Zone attorneys help East Bay manufacturers leverage zone benefits for duty deferral and logistics efficiency.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Proximity</h3>
              <p className="text-text-secondary leading-relaxed">Hayward's location near <strong>Port of Oakland</strong> enables direct delivery to FTZ, reducing handling costs and streamlining customs processing for importers.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Benefits</h3>
              <p className="text-text-secondary leading-relaxed">East Bay manufacturers gain <strong>duty deferral and savings</strong> through FTZ manufacturing, including inverted tariff benefits and export duty elimination.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tech & Innovation</h3>
              <p className="text-text-secondary leading-relaxed">Bay Area tech companies benefit from <strong>FTZ flexibility</strong> for product development, testing, and export operations without duty payment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Foreign Trade Zone Services</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FTZ Establishment & Port Coordination</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Our Hayward <strong>Foreign Trade Zone attorneys</strong> establish FTZ sites coordinated with Port of Oakland operations for seamless import processing and duty deferral.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FTZ feasibility analysis for East Bay locations</li>
                <li>Port of Oakland direct delivery coordination</li>
                <li>Subzone establishment for manufacturing facilities</li>
                <li>Alternative Site Framework (ASF) applications</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Manufacturing in FTZ</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Hayward manufacturers gain <strong>competitive advantages</strong> through FTZ manufacturing including duty savings on components and elimination of export duties.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Production authorization applications</li>
                <li>Inverted tariff manufacturing optimization</li>
                <li>Assembly and value-added processing</li>
                <li>Tech product development in zone</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FTZ Compliance Programs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Maintain compliance with FTZ regulations through comprehensive <strong>compliance program development</strong> and ongoing regulatory support for Hayward operations.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FTZ operator compliance manuals</li>
                <li>Inventory control and recordkeeping systems</li>
                <li>Automated Commercial Environment (ACE) integration</li>
                <li>CBP audit preparation and defense</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Port of Oakland FTZ Coordination</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Leverage <strong>Port of Oakland proximity</strong> for direct delivery to FTZ, reducing drayage costs and accelerating cargo processing for Hayward operations.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Direct delivery from Port of Oakland</li>
                <li>In-bond transportation procedures</li>
                <li>Cartage and logistics optimization</li>
                <li>Port coordination for efficiency</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Duty Deferral & Export Benefits</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Hayward exporters <strong>eliminate duties entirely</strong> on goods exported from FTZ, while importers defer duty payment until domestic consumption, improving cash flow.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Duty payment deferral strategies</li>
                <li>Export duty elimination programs</li>
                <li>Weekly entry procedures</li>
                <li>Reduced inventory carrying costs</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tech & Innovation FTZ Benefits</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Bay Area tech companies use FTZ benefits for <strong>product testing, development, and export</strong> without paying duties on components that never enter U.S. commerce.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Product testing and development in zone</li>
                <li>Prototype and sample operations</li>
                <li>No duties on rejected or defective goods</li>
                <li>Export-focused tech manufacturing</li>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Trade Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/customs-defense-litigation" className="service-link"><span className="service-link__title">Customs Defense</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/practice-areas" className="service-link"><span className="service-link__title">Trade Compliance Programs</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/resources/tariffs-duties-classification" className="service-link"><span className="service-link__title">Tariff Classification</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">East Bay</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/hayward-customs-attorney" className="service-link"><span className="service-link__title">Hayward Customs Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/oakland-maritime-trade" className="service-link"><span className="service-link__title">Oakland Maritime Trade</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Industry Focus</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/technology-electronics-industry" className="service-link"><span className="service-link__title">Technology Trade</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/practice-areas" className="service-link"><span className="service-link__title">Export Controls</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedCityPages currentCity="Hayward" region="bay-area" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Maximize Your FTZ Benefits</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Leverage Port of Oakland proximity and defer duties. Our Hayward Foreign Trade Zone attorneys help East Bay manufacturers maximize zone benefits.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">Free FTZ Consultation</Button>
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

export default HaywardTradeZonePage;
