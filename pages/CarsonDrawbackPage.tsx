import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { Link } from 'react-router-dom';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const CarsonDrawbackPage: React.FC = () => {
  useMeta({
    title: 'Duty Drawback Lawyer Carson | Tariff Refund Attorney CA',
    description: 'Carson duty drawback lawyer & tariff refund attorney. Recover 99% of paid import duties through manufacturing, unused, and rejected merchandise drawback. Port proximity expertise. (310) 744-1328.',
    keywords: 'duty drawback lawyer carson, tariff refund attorney carson, drawback claims carson, customs duty refund lawyer california, duty recovery attorney carson, export drawback carson',
    canonical: 'carson-duty-drawback',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-drawback.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Carson Duty Drawback Lawyer - Tariff Refund & Customs Duty Recovery Attorney',
        description: 'Expert Carson duty drawback lawyer helping California importers and exporters recover millions in paid customs duties through manufacturing, unused, and rejected merchandise drawback programs.',
        url: `${siteConfig.siteUrl}/carson-duty-drawback`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Carson Duty Drawback', url: `${siteConfig.siteUrl}/carson-duty-drawback` }
      ]),
      generateFAQSchema([
        {
          question: 'What is duty drawback and how much can I recover?',
          answer: 'Duty drawback is a refund of up to 99% of customs duties, taxes, and certain fees paid on imported merchandise that is subsequently exported or destroyed. Under 19 USC § 1313, eligible companies can recover duties on manufacturing drawback (imported materials used in exported products), unused merchandise drawback (imported goods exported in same condition), and rejected merchandise drawback (defective imports). Our Carson duty drawback lawyers have recovered millions in tariff refunds for California exporters.',
        },
        {
          question: 'How long does it take to receive a duty drawback refund?',
          answer: 'CBP typically processes accelerated drawback claims (claims under $1 million filed with ACE) within 60-90 days. Non-accelerated claims can take 6-12 months. Complex manufacturing drawback claims requiring ruling requests may take longer. Our Carson duty drawback attorneys expedite the process through complete, accurate claim submissions and proactive follow-up with CBP.',
        },
        {
          question: 'Is duty drawback worth it for small exporters?',
          answer: 'Yes! Even if you export relatively small volumes, duty drawback can be highly profitable. If you paid $50,000 in duties and export those goods or similar goods, you can recover $49,500 (99%). The filing process can be streamlined through ACE, and our Carson duty drawback lawyer offers cost-effective flat-fee pricing that makes drawback accessible even for smaller exporters.',
        },
        {
          question: 'Do I need to export the exact same goods I imported?',
          answer: 'Not always. Under substitution unused merchandise drawback (19 USC § 1313(j)(2)), you can import dutiable goods and export commercially interchangeable merchandise, even if you didn\'t import it. For manufacturing drawback with substitution, you can use imported AND domestically sourced materials in your exported products and still claim drawback on the imported materials.',
        },
        {
          question: 'Why choose a Carson duty drawback lawyer?',
          answer: 'Carson is strategically positioned adjacent to the Ports of Los Angeles and Long Beach, the nation\'s largest port complex. Our Carson location provides immediate access to port facilities, local CBP offices, and expertise with the unique logistics and supply chains operating through this critical trade gateway.',
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
      <section className="hero" aria-label="Carson Duty Drawback Hero">
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
          <h1>Carson Duty Drawback Lawyer<br />Tariff Refund Attorney</h1>
          <p className="hero-subtitle">
            Recover 99% of paid customs duties through expert duty drawback claims. Port-adjacent tariff refund specialists helping California exporters maximize duty recovery.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Drawback Analysis</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Carson Duty Drawback Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Maximize Your Duty Recovery Near LA/Long Beach Ports
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Carson is ideally located <strong>adjacent to the nation's largest port complex</strong>, handling over $400 billion in trade annually. If you're paying customs duties on imports and exporting goods, you could be leaving millions on the table. Our Carson duty drawback lawyers help you recover up to 99% of those duties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Complex Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct access to <strong>Ports of LA and Long Beach</strong>, the nation's busiest port complex. Our local expertise and CBP relationships ensure efficient drawback claim processing.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Millions Recovered</h3>
              <p className="text-text-secondary leading-relaxed">
                We've recovered <strong>over $50 million in duty refunds</strong> for California exporters through manufacturing drawback, unused merchandise drawback, and rejected merchandise claims.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Flat-Fee Pricing</h3>
              <p className="text-text-secondary leading-relaxed">
                Transparent <strong>contingency or flat-fee pricing</strong> makes duty drawback accessible. You only pay when you get your refund, or opt for predictable fixed fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Duty Drawback Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Comprehensive Duty Drawback Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Manufacturing Drawback (19 USC § 1313(a) & (b))</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you manufacture or produce articles for export using imported materials, you can recover <strong>99% of the duties paid on those materials</strong>. Manufacturing drawback is the most valuable drawback program and includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Direct Identification Manufacturing Drawback:</strong> Track specific imported materials to exported products</li>
                <li><strong>Substitution Manufacturing Drawback:</strong> Use imported AND domestic materials in exported products, recover duties on imports</li>
                <li><strong>Petroleum Manufacturing Drawback:</strong> Specialized drawback for petroleum refineries and petrochemical manufacturers</li>
                <li>Manufacturing ruling requests to establish drawback eligibility</li>
                <li>Bill of materials analysis and documentation</li>
                <li>Production process mapping for CBP approval</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Unused Merchandise Drawback (19 USC § 1313(j))</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Import goods, export them <strong>in the same condition</strong> (or destroy them under CBP supervision), and recover 99% of duties. This is the simplest drawback type and ideal for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Direct Identification Unused Drawback:</strong> Export the exact same goods you imported</li>
                <li><strong>Substitution Unused Drawback:</strong> Export commercially interchangeable merchandise within 5 years</li>
                <li>Excess inventory exports and liquidation sales</li>
                <li>Defective merchandise exports</li>
                <li>Sample goods and trade show merchandise</li>
                <li>Unsold or obsolete inventory disposal</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Rejected Merchandise Drawback (19 USC § 1313(c))</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If imported merchandise is <strong>defective or doesn't conform to specifications</strong>, you can export or destroy it and recover 99% of duties paid. Rejected merchandise drawback covers:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Defective products failing quality control inspection</li>
                <li>Non-conforming goods that don't match purchase order specifications</li>
                <li>Goods shipped in error or damaged in transit</li>
                <li>Products with material defects discovered post-importation</li>
                <li>Documentary proof of non-conformance or defect</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Duty Recovery Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Legal Services */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Duty Recovery Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/tariff-refund-protests" className="service-link">
                    <span className="service-link__title">Tariff Refund Protests</span>
                    <p className="service-link__description">Protest incorrect duty assessments</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/tariff-engineering" className="service-link">
                    <span className="service-link__title">Tariff Engineering</span>
                    <p className="service-link__description">Minimize future duty payments</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/ftz-foreign-trade-zones" className="service-link">
                    <span className="service-link__title">Foreign Trade Zones</span>
                    <p className="service-link__description">Defer or eliminate duties through FTZ</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Locations */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Ports</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/long-beach-duty-drawback" className="service-link">
                    <span className="service-link__title">Long Beach Port Drawback</span>
                    <p className="service-link__description">Port of Long Beach duty recovery</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/los-angeles-duty-drawback" className="service-link">
                    <span className="service-link__title">Los Angeles Port Drawback</span>
                    <p className="service-link__description">Port of LA duty recovery</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Drawback Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/duty-drawback-guide" className="service-link">
                    <span className="service-link__title">Duty Drawback Complete Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/drawback-calculator" className="service-link">
                    <span className="service-link__title">Drawback Savings Calculator</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/ace-drawback-filing" className="service-link">
                    <span className="service-link__title">ACE Drawback Filing Guide</span>
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
      <RelatedCityPages currentCity="Carson" region="los-angeles" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Start Recovering Your Paid Duties Today
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't leave money on the table. Our Carson duty drawback lawyers will analyze your import/export activity and maximize your duty recovery. Free consultation and potential assessment.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">
              Schedule Free Consultation
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

export default CarsonDrawbackPage;
