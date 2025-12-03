import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const DalyCityDrawbackPage: React.FC = () => {
  useMeta({
    title: 'Duty Drawback Lawyer Daly City | Tariff Refund Attorney CA',
    description: 'Daly City duty drawback lawyer & tariff refund attorney. Recover 99% of paid import duties through manufacturing, unused, and rejected merchandise drawback. Bay Area expertise. (310) 744-1328.',
    keywords: 'duty drawback lawyer daly city, tariff refund attorney daly city, drawback claims daly city, customs duty refund lawyer california, duty recovery attorney daly city, export drawback daly city',
    canonical: 'daly-city-duty-drawback',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-drawback.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Daly City Duty Drawback Lawyer - Tariff Refund & Customs Duty Recovery Attorney',
        description: 'Expert Daly City duty drawback lawyer helping California importers and exporters recover millions in paid customs duties through manufacturing, unused, and rejected merchandise drawback programs.',
        url: `${siteConfig.siteUrl}/daly-city-duty-drawback`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Daly City Duty Drawback', url: `${siteConfig.siteUrl}/daly-city-duty-drawback` }
      ]),
      generateFAQSchema([
        {
          question: 'What is duty drawback and how much can I recover?',
          answer: 'Duty drawback is a refund of up to 99% of customs duties, taxes, and certain fees paid on imported merchandise that is subsequently exported or destroyed. Under 19 USC § 1313, eligible companies can recover duties on manufacturing drawback (imported materials used in exported products), unused merchandise drawback (imported goods exported in same condition), and rejected merchandise drawback (defective imports). Our Daly City duty drawback lawyers have recovered millions in tariff refunds for California exporters.',
        },
        {
          question: 'How long does it take to receive a duty drawback refund?',
          answer: 'CBP typically processes accelerated drawback claims (claims under $1 million filed with ACE) within 60-90 days. Non-accelerated claims can take 6-12 months. Complex manufacturing drawback claims requiring ruling requests may take longer. Our Daly City duty drawback attorneys expedite the process through complete, accurate claim submissions and proactive follow-up with CBP.',
        },
        {
          question: 'Is duty drawback worth it for small exporters?',
          answer: 'Yes! Even if you export relatively small volumes, duty drawback can be highly profitable. If you paid $50,000 in duties and export those goods or similar goods, you can recover $49,500 (99%). The filing process can be streamlined through ACE, and our Daly City duty drawback lawyer offers cost-effective flat-fee pricing that makes drawback accessible even for smaller exporters.',
        },
        {
          question: 'Do I need to export the exact same goods I imported?',
          answer: 'Not always. Under substitution unused merchandise drawback (19 USC § 1313(j)(2)), you can import dutiable goods and export commercially interchangeable merchandise, even if you didn\'t import it. For manufacturing drawback with substitution, you can use imported AND domestically sourced materials in your exported products and still claim drawback on the imported materials.',
        },
        {
          question: 'Why choose a Daly City duty drawback lawyer?',
          answer: 'Daly City is strategically located in the Bay Area, providing access to Port of Oakland, San Francisco International Airport, and major manufacturing hubs throughout Northern California. Our Daly City location provides expertise with Bay Area supply chains, local logistics providers, and established relationships with CBP drawback specialists serving the region.',
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
      <section className="hero" aria-label="Daly City Duty Drawback Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1920&auto=format&fit=crop"
            alt=""
            role="presentation"
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
            className="hero-bg-image"
          />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>

        <div className="container">
          <h1>Daly City Duty Drawback Lawyer<br />Tariff Refund Attorney</h1>
          <p className="hero-subtitle">
            Recover 99% of paid customs duties through expert duty drawback claims. Bay Area tariff refund specialists helping California exporters maximize duty recovery.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Drawback Analysis</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Daly City Duty Drawback Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Maximize Your Duty Recovery in the Bay Area
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Daly City sits at the heart of the <strong>Bay Area's thriving trade ecosystem</strong>, with proximity to Port of Oakland and major manufacturing centers. If you're paying customs duties on imports and exporting goods, you could be leaving millions on the table. Our Daly City duty drawback lawyers help you recover up to 99% of those duties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bay Area Trade Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Serving <strong>Daly City, San Francisco, and Bay Area exporters</strong> with comprehensive duty drawback services. Our regional expertise ensures efficient claim processing and maximum recovery.
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

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Duty Recovery Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#tariff-refund-protests" className="service-link">
                    <span className="service-link__title">Tariff Refund Protests</span>
                    <p className="service-link__description">Protest incorrect duty assessments</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#tariff-engineering" className="service-link">
                    <span className="service-link__title">Tariff Engineering</span>
                    <p className="service-link__description">Minimize future duty payments</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#ftz-foreign-trade-zones" className="service-link">
                    <span className="service-link__title">Foreign Trade Zones</span>
                    <p className="service-link__description">Defer or eliminate duties through FTZ</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Other Locations */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Ports</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#oakland-duty-drawback" className="service-link">
                    <span className="service-link__title">Oakland Port Drawback</span>
                    <p className="service-link__description">Port of Oakland duty recovery</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#san-francisco-duty-drawback" className="service-link">
                    <span className="service-link__title">San Francisco Drawback</span>
                    <p className="service-link__description">Bay Area duty recovery</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Drawback Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#resources/duty-drawback-guide" className="service-link">
                    <span className="service-link__title">Duty Drawback Complete Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/drawback-calculator" className="service-link">
                    <span className="service-link__title">Drawback Savings Calculator</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/ace-drawback-filing" className="service-link">
                    <span className="service-link__title">ACE Drawback Filing Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related City Pages */}
      <RelatedCityPages currentCity="Daly City" region="bay-area" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Start Recovering Your Paid Duties Today
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't leave money on the table. Our Daly City duty drawback lawyers will analyze your import/export activity and maximize your duty recovery. Free consultation and potential assessment.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">
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

export default DalyCityDrawbackPage;
