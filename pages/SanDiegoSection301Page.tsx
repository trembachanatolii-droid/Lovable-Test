
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanDiegoSection301Page: React.FC = () => {
  useMeta({
    title: 'Section 301 Tariff Attorney San Diego | China Tariff Lawyer | Trembach Law',
    description: 'Section 301 tariff attorney in San Diego CA. Expert China tariff lawyer helping San Diego businesses with Section 301 exclusions, tariff mitigation, and trade compliance. Free consultation.',
    keywords: 'section 301 tariff attorney san diego, china tariff lawyer san diego, san diego section 301 attorney, china tariff san diego, section 301 exclusion attorney san diego, tariff mitigation san diego, china trade war attorney san diego, section 301 tariff relief san diego, trump tariff attorney san diego, china import attorney san diego, san diego trade compliance lawyer, section 301 strategy san diego, tariff engineering san diego, china sourcing attorney san diego',
    canonical: 'san-diego-section-301',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-san-diego.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Section 301 Tariff Attorney San Diego - China Tariff Lawyer',
        description: 'Expert Section 301 tariff attorney serving San Diego businesses. Comprehensive China tariff strategies including exclusions, tariff engineering, and compliance solutions.',
        url: `${siteConfig.siteUrl}/san-diego-section-301`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Section 301 Tariff Attorney San Diego', url: `${siteConfig.siteUrl}/san-diego-section-301` }
      ]),
      generateFAQSchema([
        {
          question: 'What are Section 301 tariffs and how do they affect San Diego importers?',
          answer: 'Section 301 tariffs are additional duties (7.5%-25%) imposed on Chinese imports. San Diego businesses importing from China face significantly higher costs. Our Section 301 attorneys help San Diego companies through tariff exclusion requests, supply chain restructuring, tariff engineering, and classification strategies to legally minimize these duties.',
        },
        {
          question: 'Can I get an exclusion from Section 301 tariffs in San Diego?',
          answer: 'While the formal exclusion process has largely closed, our San Diego Section 301 attorneys can help identify products that may qualify for remaining exclusions, analyze whether your products are properly classified, and explore tariff engineering opportunities to reduce duty exposure through legal means.',
        },
        {
          question: 'How can I reduce Section 301 tariff costs for my San Diego business?',
          answer: 'Our San Diego China tariff lawyers use multiple strategies: reviewing HTS classifications for optimization, analyzing substantial transformation opportunities, evaluating third-country sourcing compliance, assessing duty drawback eligibility, and developing Foreign Trade Zone strategies. Many clients achieve 50%+ duty savings.',
        },
        {
          question: 'What industries in San Diego are most affected by Section 301 tariffs?',
          answer: 'San Diego industries heavily impacted include technology and electronics, medical devices, biotechnology equipment, automotive parts, consumer goods, and manufacturing components. Our Section 301 attorneys have specific experience with San Diego\'s key industries and cross-border trade dynamics.',
        },
        {
          question: 'Are Section 301 tariffs changing in 2025?',
          answer: 'Yes, the Trump administration has announced significant tariff changes for 2025. Our San Diego tariff attorneys stay current on all policy developments and help businesses prepare for rate increases, new product coverage, and potential exemption opportunities. Contact us for the latest guidance.',
        },
      ]),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="Section 301 Tariff Attorney San Diego Hero">
        <picture className="hero-bg">
          <img
            src="/images/hero-port-background.jpg"
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
          <h1>Section 301 Tariff Attorney<br />San Diego CA</h1>
          <p className="hero-subtitle">
            Expert Section 301 tariff attorney serving San Diego businesses facing China tariffs. With rates of 7.5% to 25% adding millions to import costs, you need strategic legal guidance. Our China tariff lawyers help San Diego companies minimize duty exposure through legal strategies.
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
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Section 301 Tariff Solutions for San Diego
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              San Diego's proximity to the U.S.-Mexico border and Port of San Diego makes it a hub for international trade. Our <strong>Section 301 tariff attorneys</strong> help local businesses navigate China tariffs with strategies tailored to San Diego's unique trade environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tariff Reduction Strategies</h3>
              <p className="text-text-secondary leading-relaxed">
                Our San Diego <strong>China tariff lawyers</strong> identify legal opportunities to reduce your Section 301 duty burden through classification optimization, tariff engineering, and supply chain restructuring.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cross-Border Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                San Diego's maquiladora trade relationships create unique <strong>substantial transformation</strong> opportunities. We analyze Mexico-U.S. supply chains for Section 301 mitigation potential.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">2025 Tariff Planning</h3>
              <p className="text-text-secondary leading-relaxed">
                With <strong>tariff rates increasing in 2025</strong>, proactive planning is essential. Our Section 301 attorneys help San Diego businesses prepare for changes and identify new mitigation opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Section 301 Tariff Services in San Diego
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">HTS Classification Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper tariff classification can mean the difference between <strong>0% and 25% duties</strong>. Our San Diego Section 301 attorneys review your product classifications to ensure accuracy and identify optimization opportunities.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 coverage analysis</li>
                <li>Alternative classification review</li>
                <li>Binding ruling requests</li>
                <li>Classification dispute defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Engineering Solutions</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Tariff engineering</strong> modifies products or processes to achieve better duty treatment. Our San Diego tariff lawyers work with your engineering teams to identify legal modifications that reduce Section 301 exposure.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Product modification analysis</li>
                <li>Assembly vs. manufacturing distinction</li>
                <li>Component vs. finished goods evaluation</li>
                <li>Set classification strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Substantial Transformation Analysis</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Third-country processing can eliminate Section 301 tariffs if it achieves <strong>substantial transformation</strong>. Our attorneys analyze your supply chain to identify legally compliant restructuring opportunities.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Country of origin determinations</li>
                <li>Mexico manufacturing analysis</li>
                <li>USMCA qualification review</li>
                <li>Transshipment compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Duty Drawback Claims</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you export products made with imported components, <strong>duty drawback</strong> can recover up to 99% of duties paid. San Diego's export economy makes this a valuable strategy for many local businesses.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Drawback eligibility assessment</li>
                <li>Manufacturing drawback claims</li>
                <li>Unused merchandise drawback</li>
                <li>Substitution drawback analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign Trade Zone Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                FTZ status can defer, reduce, or eliminate Section 301 tariffs. Our San Diego <strong>FTZ attorneys</strong> help businesses evaluate and implement Foreign Trade Zone strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FTZ cost-benefit analysis</li>
                <li>Zone-to-zone transfers</li>
                <li>Inverted tariff benefits</li>
                <li>Production equipment duty elimination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            San Diego Industries We Serve for Section 301
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Biotechnology', desc: 'Lab equipment, diagnostic devices, research materials' },
              { title: 'Defense & Aerospace', desc: 'Components, electronics, specialized equipment' },
              { title: 'Medical Devices', desc: 'Healthcare equipment, surgical instruments, monitoring devices' },
              { title: 'Telecommunications', desc: 'Wireless equipment, network components, antennas' },
              { title: 'Clean Technology', desc: 'Solar panels, batteries, EV components' },
              { title: 'Manufacturing', desc: 'Industrial equipment, machinery, automation systems' },
            ].map((industry) => (
              <div key={industry.title} className="bg-neutral-50 p-6 rounded-lg border border-border-subtle hover:border-secondary-teal transition-colors">
                <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond">{industry.title}</h3>
                <p className="text-text-secondary text-sm">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services with Green-Slide Animation */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Tariff Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">Tariff Classification Guide</span>
                    <p className="service-link__description">HTS classification strategies</p>
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
                    <p className="service-link__description">Comprehensive tariff overview</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">San Diego Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/san-diego-customs-lawyer" className="service-link">
                    <span className="service-link__title">San Diego Customs Lawyer</span>
                    <p className="service-link__description">Full customs services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/san-diego-uflpa-compliance" className="service-link">
                    <span className="service-link__title">San Diego UFLPA Compliance</span>
                    <p className="service-link__description">Forced labor compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Trending Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/trump-2025-tariff-attorney" className="service-link">
                    <span className="service-link__title">Trump 2025 Tariff Updates</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/trade-law-faq" className="service-link">
                    <span className="service-link__title">Trade Law FAQ</span>
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

      {/* Related California Locations */}
      <RelatedCityPages currentCity="San Diego" region="san-diego" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Reduce Your Section 301 Tariff Burden
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't overpay on China tariffs. Our San Diego Section 301 attorneys can help you identify legal strategies to minimize your duty exposure. Contact us for a free tariff consultation.
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

export default SanDiegoSection301Page;
