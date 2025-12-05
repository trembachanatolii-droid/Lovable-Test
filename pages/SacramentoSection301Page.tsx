
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SacramentoSection301Page: React.FC = () => {
  useMeta({
    title: 'Section 301 Tariff Attorney Sacramento | China Tariff Lawyer | Trembach Law',
    description: 'Section 301 tariff attorney Sacramento CA. Expert China tariff lawyer serving Central Valley businesses. Section 301 mitigation, agricultural equipment tariffs, supply chain strategies. Free consultation.',
    keywords: 'section 301 tariff attorney sacramento, china tariff lawyer sacramento, sacramento section 301 attorney, central valley china tariff, section 301 mitigation sacramento, agricultural tariff attorney sacramento, china trade war attorney sacramento, tariff reduction sacramento',
    canonical: 'sacramento-section-301',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-sacramento.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Section 301 Tariff Attorney Sacramento - China Tariff Lawyer',
        description: 'Expert Section 301 tariff attorney serving Sacramento and Central Valley businesses with China tariff strategies and compliance solutions.',
        url: `${siteConfig.siteUrl}/sacramento-section-301`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Section 301 Attorney Sacramento', url: `${siteConfig.siteUrl}/sacramento-section-301` }
      ]),
      generateFAQSchema([
        {
          question: 'How do Section 301 tariffs affect Sacramento businesses?',
          answer: 'Sacramento and Central Valley businesses importing agricultural equipment, machinery, and industrial goods from China face Section 301 tariffs of 7.5%-25%. These tariffs significantly impact farm operations, food processors, and manufacturers. Our Section 301 attorneys help Sacramento businesses minimize duty exposure.',
        },
        {
          question: 'Can Sacramento agricultural businesses reduce China tariffs?',
          answer: 'Yes. Our Sacramento Section 301 attorneys use multiple strategies: HTS classification optimization, tariff engineering, substantial transformation analysis, and supply chain restructuring. Many agricultural equipment importers achieve significant duty savings through legal strategies.',
        },
        {
          question: 'What products face Section 301 tariffs in Sacramento?',
          answer: 'Common Section 301 products in Sacramento include agricultural machinery, irrigation equipment, food processing machines, packaging materials, and industrial components. Our China tariff lawyers analyze your imports to identify reduction opportunities.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      {/* Hero Section */}
      <section className="hero" aria-label="Section 301 Attorney Sacramento Hero">
        <picture className="hero-bg">
          <img
            src="/images/hero-port-background-2.jpg"
            alt=""
            role="presentation"
            width="1920"
            height="1080"
            loading="eager"
            style={{ aspectRatio: '16 / 9' }}
            decoding="async"
            className="hero-bg-image"
          />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>

        <div className="container">
          <h1>Section 301 Tariff Attorney<br />Sacramento CA</h1>
          <p className="hero-subtitle">
            Expert Section 301 tariff attorney serving Sacramento and Central Valley businesses. China tariffs add 7.5%-25% to import costs. Our China tariff lawyers help agricultural and industrial businesses minimize duty exposure through legal strategies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Tariff Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">Section 301 Solutions for Sacramento</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">Sacramento's agricultural and industrial economy faces significant China tariff exposure. Our <strong>Section 301 tariff attorneys</strong> help Central Valley businesses navigate the trade war effectively.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Focus</h3>
              <p className="text-text-secondary leading-relaxed">We understand agricultural equipment and machinery imports. Our Sacramento <strong>China tariff lawyers</strong> know the classifications that affect Central Valley businesses.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tariff Reduction</h3>
              <p className="text-text-secondary leading-relaxed">Proper strategy can mean <strong>significant duty savings</strong>. Our attorneys identify legal opportunities to minimize Section 301 exposure.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Supply Chain Strategy</h3>
              <p className="text-text-secondary leading-relaxed">We help Sacramento businesses restructure supply chains to minimize tariff exposure while maintaining <strong>compliance and efficiency</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Section 301 Services for Sacramento</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural Equipment Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Farm and food processing equipment classifications are complex. Our Sacramento <strong>Section 301 attorneys</strong> ensure optimal classification for duty minimization.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Machinery classification review</li>
                <li>Parts vs. whole machine analysis</li>
                <li>Multi-function equipment treatment</li>
                <li>Binding ruling requests</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Engineering</h3>
              <p className="text-text-secondary leading-relaxed mb-4"><strong>Tariff engineering</strong> modifies products to achieve better duty treatment. We work with manufacturers to identify legal modifications.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Product modification analysis</li>
                <li>Assembly location optimization</li>
                <li>Component sourcing strategy</li>
                <li>Set classification strategies</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Supply Chain Restructuring</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Third-country processing can eliminate Section 301 tariffs through <strong>substantial transformation</strong>.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Country of origin planning</li>
                <li>Alternative sourcing analysis</li>
                <li>Substantial transformation review</li>
                <li>Compliance verification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Tariff Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">Tariff Classification Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Sacramento Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/sacramento-tariff-attorney" className="service-link">
                    <span className="service-link__title">Sacramento Tariff Attorney</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/sacramento-uflpa-attorney" className="service-link">
                    <span className="service-link__title">Sacramento UFLPA</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/trump-2025-tariff-attorney" className="service-link">
                    <span className="service-link__title">2025 Tariff Updates</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/trade-law-faq" className="service-link">
                    <span className="service-link__title">Tariff FAQ</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related City Pages */}
      <RelatedCityPages currentCity="Sacramento" region="central-valley" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Reduce Your Section 301 Tariff Burden
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't overpay on China tariffs. Our Sacramento Section 301 attorneys help businesses minimize duty exposure legally.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">
              Free Tariff Consultation
            </Button>
            <Button href={siteConfig.phoneTel} variant="outline">
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>

      {/* Evaluation Form */}
      <Suspense fallback={<div style={{ minHeight: '600px', background: 'transparent' }} aria-label="Loading form" />}>
        <EvaluationForm theme="light" />
      </Suspense>
    </div>
  );
};

export default SacramentoSection301Page;
