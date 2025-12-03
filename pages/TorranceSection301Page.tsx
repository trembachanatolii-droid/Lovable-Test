
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const TorranceSection301Page: React.FC = () => {
  useMeta({
    title: 'Section 301 Tariff Attorney Torrance | China Tariff Lawyer South Bay | Trembach Law',
    description: 'Section 301 tariff attorney Torrance CA. Expert China tariff lawyer serving South Bay manufacturers and importers. Section 301 exclusions, tariff mitigation, supply chain strategies. Free consultation.',
    keywords: 'section 301 tariff attorney torrance, china tariff lawyer torrance, torrance section 301 attorney, south bay china tariff, section 301 exclusion attorney torrance, tariff mitigation torrance, manufacturing tariff lawyer torrance, china trade war attorney torrance, section 301 strategy torrance',
    canonical: 'torrance-section-301',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-torrance.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Section 301 Tariff Attorney Torrance - China Tariff Lawyer South Bay',
        description: 'Expert Section 301 tariff attorney serving Torrance and South Bay manufacturers and importers with China tariff strategies and compliance solutions.',
        url: `${siteConfig.siteUrl}/torrance-section-301`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Section 301 Attorney Torrance', url: `${siteConfig.siteUrl}/torrance-section-301` }
      ]),
      generateFAQSchema([
        {
          question: 'How do Section 301 tariffs affect Torrance manufacturers?',
          answer: 'Torrance is a major manufacturing hub with automotive, aerospace, and industrial companies importing Chinese components and materials. Section 301 tariffs add 7.5%-25% to import costs. Our Section 301 attorneys help Torrance companies optimize classifications and restructure supply chains to minimize tariff exposure.',
        },
        {
          question: 'Can Torrance importers get Section 301 exclusions?',
          answer: 'While formal exclusion processes have largely ended, our Torrance Section 301 attorneys analyze your imported products for remaining exclusions, classification optimization, and tariff engineering opportunities. Many South Bay manufacturers achieve significant duty reduction through proper legal strategies.',
        },
        {
          question: 'What strategies reduce Section 301 tariffs for South Bay companies?',
          answer: 'Our Torrance China tariff lawyers use multiple strategies: HTS classification review, tariff engineering, substantial transformation analysis, duty drawback claims, and supply chain restructuring. Manufacturing and automotive clients often achieve 30-50% duty savings.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="Section 301 Attorney Torrance Hero">
        <picture className="hero-bg">
          <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1920&auto=format&fit=crop" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>Section 301 Tariff Attorney<br />Torrance CA</h1>
          <p className="hero-subtitle">Expert Section 301 tariff attorney serving Torrance and South Bay manufacturers and importers. China tariffs add 7.5%-25% to import costs. Our China tariff lawyers help companies minimize duty exposure through legal strategies.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Tariff Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">Section 301 Solutions for South Bay Manufacturing</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">Torrance is South Bay's manufacturing and industrial center with strong automotive and aerospace sectors. Our <strong>Section 301 tariff attorneys</strong> understand complex supply chains and help Torrance companies navigate China tariffs effectively.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Expertise</h3>
              <p className="text-text-secondary leading-relaxed">We understand automotive parts, aerospace components, and industrial products. Our Torrance <strong>China tariff lawyers</strong> know the technical distinctions that affect tariff treatment.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Classification Optimization</h3>
              <p className="text-text-secondary leading-relaxed">Proper HTS classification can mean <strong>0% vs 25% duties</strong>. Our attorneys ensure your manufactured goods and components are correctly classified for minimum duty exposure.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Supply Chain Strategy</h3>
              <p className="text-text-secondary leading-relaxed">We help Torrance manufacturers restructure supply chains to minimize Section 301 exposure while maintaining <strong>quality and efficiency</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Section 301 Services for Torrance Manufacturers</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">HTS Classification Review</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Automotive and industrial classifications are highly technical. Our Torrance <strong>Section 301 attorneys</strong> ensure optimal classification for duty minimization across manufacturing sectors.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Automotive parts (Chapter 87)</li>
                <li>Aerospace components</li>
                <li>Industrial machinery and equipment</li>
                <li>Binding ruling requests</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Engineering</h3>
              <p className="text-text-secondary leading-relaxed mb-4"><strong>Tariff engineering</strong> modifies products to achieve better duty treatment. We work with your engineering teams to identify legal modifications that reduce tariffs.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Product modification analysis</li>
                <li>Assembly vs manufacturing</li>
                <li>Component optimization</li>
                <li>Parts vs sets classification</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Supply Chain Restructuring</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Third-country processing can eliminate Section 301 tariffs through <strong>substantial transformation</strong>. We analyze your supply chain for restructuring opportunities.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Country of origin planning</li>
                <li>Mexico/nearshoring strategies</li>
                <li>Substantial transformation analysis</li>
                <li>Compliance and certification</li>
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
                <div className="service-link-item"><Link to="/resources/tariffs-duties-classification" className="service-link"><span className="service-link__title">Tariff Classification Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/resources/section-301-tariffs-guide" className="service-link"><span className="service-link__title">Section 301 Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">South Bay Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#torrance-customs-lawyer" className="service-link"><span className="service-link__title">Torrance Customs Lawyer</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><Link to="/los-angeles-tariff-lawyer" className="service-link"><span className="service-link__title">Los Angeles Tariff Lawyer</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Trade</h3>
              <div className="space-y-0">
                <div className="service-link-item"><a href="#automotive-tariffs" className="service-link"><span className="service-link__title">Automotive Tariffs</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></a></div>
                <div className="service-link-item"><Link to="/duty-drawback" className="service-link"><span className="service-link__title">Duty Drawback</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedCityPages currentCity="Torrance" region="south-bay" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Reduce Your Section 301 Tariff Burden</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Don't overpay on China tariffs. Our Torrance Section 301 attorneys help manufacturers minimize duty exposure legally.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">Free Tariff Consultation</Button>
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

export default TorranceSection301Page;
