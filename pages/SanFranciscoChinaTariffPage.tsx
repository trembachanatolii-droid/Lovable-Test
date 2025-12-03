
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanFranciscoChinaTariffPage: React.FC = () => {
  useMeta({
    title: 'China Tariff Attorney San Francisco | Section 301 Lawyer SF | Trembach Law',
    description: 'China tariff attorney San Francisco. Expert Section 301 lawyer serving SF businesses. China trade war strategies, tariff mitigation, supply chain restructuring. Free consultation.',
    keywords: 'china tariff attorney san francisco, section 301 lawyer san francisco, SF china tariff lawyer, san francisco section 301 attorney, china trade war attorney SF, tariff mitigation san francisco, china import attorney SF, section 301 strategy san francisco',
    canonical: 'san-francisco-china-tariff',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-san-francisco.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'China Tariff Attorney San Francisco - Section 301 Lawyer SF',
        description: 'Expert China tariff attorney serving San Francisco businesses with Section 301 strategies, tariff mitigation, and compliance solutions.',
        url: `${siteConfig.siteUrl}/san-francisco-china-tariff`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'China Tariff Attorney San Francisco', url: `${siteConfig.siteUrl}/san-francisco-china-tariff` }
      ]),
      generateFAQSchema([
        {
          question: 'How do China tariffs affect San Francisco businesses?',
          answer: 'San Francisco businesses importing from China face Section 301 tariffs of 7.5%-25% on covered products. This significantly impacts tech companies, importers using Port of Oakland, and businesses throughout the Bay Area. Our SF China tariff attorneys help minimize duty exposure.',
        },
        {
          question: 'Can San Francisco companies reduce China tariff costs?',
          answer: 'Yes. Our San Francisco Section 301 attorneys use multiple strategies: HTS classification optimization, tariff engineering, substantial transformation, duty drawback, and FTZ benefits. Many clients achieve 50%+ duty savings through legal means.',
        },
        {
          question: 'What are the 2025 China tariff changes affecting SF?',
          answer: 'The Trump administration has announced significant tariff increases for 2025. Our San Francisco China tariff lawyers help businesses prepare for rate changes and identify new mitigation opportunities.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="China Tariff Attorney San Francisco Hero">
        <picture className="hero-bg">
          <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1920&auto=format&fit=crop" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>China Tariff Attorney<br />San Francisco CA</h1>
          <p className="hero-subtitle">Expert China tariff attorney serving San Francisco businesses. Section 301 tariffs add 7.5%-25% to Chinese imports. Our tariff lawyers help SF companies minimize duty exposure through legal strategies and supply chain optimization.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Tariff Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">China Tariff Solutions for San Francisco</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">San Francisco's diverse business community faces significant China tariff exposure. Our <strong>Section 301 attorneys</strong> help SF businesses navigate the trade war and reduce duty costs legally.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tariff Reduction</h3>
              <p className="text-text-secondary leading-relaxed">Our SF <strong>China tariff lawyers</strong> identify legal opportunities to reduce Section 301 duty burden through classification optimization and tariff engineering.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Supply Chain Strategy</h3>
              <p className="text-text-secondary leading-relaxed">We help San Francisco companies restructure supply chains to minimize China tariff exposure while maintaining <strong>compliance and efficiency</strong>.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">2025 Planning</h3>
              <p className="text-text-secondary leading-relaxed">With tariffs increasing in 2025, proactive planning is essential. Our Section 301 attorneys help SF businesses <strong>prepare for changes</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">China Tariff Services in San Francisco</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">HTS Classification Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Proper classification can mean <strong>0% vs 25% duties</strong>. Our SF Section 301 attorneys ensure optimal classification for minimum duty exposure.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 coverage analysis</li>
                <li>Alternative classification review</li>
                <li>Binding ruling requests</li>
                <li>Classification dispute defense</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Engineering</h3>
              <p className="text-text-secondary leading-relaxed mb-4"><strong>Tariff engineering</strong> modifies products to achieve better duty treatment. We work with your teams to identify legal modifications.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Product modification analysis</li>
                <li>Assembly vs manufacturing</li>
                <li>Component optimization</li>
                <li>Set classification strategies</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Supply Chain Restructuring</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Third-country processing can eliminate Section 301 tariffs through <strong>substantial transformation</strong>.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Country of origin planning</li>
                <li>Vietnam/Mexico alternatives</li>
                <li>Substantial transformation analysis</li>
                <li>Compliance verification</li>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">SF Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/san-francisco-customs-attorney" className="service-link"><span className="service-link__title">SF Customs Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/bay-area-trade-law-attorney" className="service-link"><span className="service-link__title">Bay Area Trade Law</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/trump-2025-tariff-attorney" className="service-link"><span className="service-link__title">2025 Tariff Updates</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/trade-law-faq" className="service-link"><span className="service-link__title">Tariff FAQ</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedCityPages currentCity="San Francisco" region="bay-area" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Reduce Your China Tariff Burden</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Don't overpay on China tariffs. Our San Francisco Section 301 attorneys help businesses minimize duty exposure legally.</p>
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

export default SanFranciscoChinaTariffPage;
