
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const OaklandTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Oakland Trade Attorney | Port of Oakland Customs Lawyer',
    description: 'Oakland trade attorney & customs lawyer. Port of Oakland tariff lawyer. CBP defense, tariff classification, customs audits. East Bay import export legal services. (310) 744-1328.',
    keywords: 'trade attorney oakland, customs lawyer oakland, tariff lawyer oakland ca, port of oakland attorney, international trade lawyer oakland, customs attorney east bay, oakland import export lawyer, cbp defense attorney oakland',
    canonical: 'oakland-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-oakland.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Oakland Trade Attorney & Port of Oakland Customs Lawyer - East Bay Legal Services',
        description: 'Oakland trade attorney and Port of Oakland customs lawyer providing expert legal representation for tariff classification, CBP defense, customs audits, and international trade compliance.',
        url: `${siteConfig.siteUrl}/#oakland-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/#california-offices` },
        { name: 'Oakland Trade Attorney', url: `${siteConfig.siteUrl}/#oakland-trade-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose an Oakland trade attorney for Port of Oakland imports?',
          answer: 'An Oakland-based trade attorney offers direct on-site access to Port of Oakland, the fourth busiest container port in the United States. Our Oakland location enables immediate response to CBP cargo detentions, examinations, and port emergencies affecting East Bay importers and exporters.',
        },
        {
          question: 'What trade and customs services do you offer in Oakland?',
          answer: 'Our Oakland office provides comprehensive trade and customs services including: tariff classification and HTS code optimization, CBP audit defense, customs penalty mitigation, Section 301 tariff strategies, UFLPA forced labor compliance, Port of Oakland detention defense, antidumping/countervailing duty defense, and trade compliance program development.',
        },
        {
          question: 'How quickly can you respond to Port of Oakland cargo detentions?',
          answer: 'Our Oakland location provides immediate access to Port of Oakland facilities. We can typically respond to CBP cargo detentions, seizures, or examination requests within hours. For Port of Oakland emergencies, call our direct line at (310) 744-1328 for same-day assistance.',
        },
        {
          question: 'What industries do you serve from your Oakland office?',
          answer: 'From our Oakland office, we represent East Bay importers and exporters across industries including technology/electronics, wine and spirits, specialty foods, automotive parts, consumer goods, apparel, furniture, and e-commerce businesses. We understand Oakland\'s diverse port economy.',
        },
        {
          question: 'Do you handle CBP examinations at Port of Oakland?',
          answer: 'Yes. We regularly attend CBP cargo examinations at Port of Oakland on behalf of clients. Our Oakland location allows us to be on-site quickly to coordinate with CBP officers, review cargo, and resolve admissibility issues to minimize demurrage and detention costs.',
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
      <section className="hero" aria-label="Oakland Trade Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Oakland Trade Attorney<br />Customs Lawyer California</h1>
          <p className="hero-subtitle">
            Oakland trade attorney and customs lawyer serving East Bay businesses. Expert Port of Oakland representation, CBP defense, tariff classification, and trade compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose an Oakland Trade Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Your Local Tariff & Customs Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Oakland and the East Bay with expert tariff and customs legal services. Our Oakland location provides <strong>on-site access to Port of Oakland</strong>, the fourth busiest container port in the U.S., handling over 2.5 million containers annually.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">On-Site Port Access</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Immediate access to Port of Oakland</strong> terminals and CBP facilities. We can attend cargo examinations, meet with customs officials, and resolve port emergencies same-day.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">East Bay Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep understanding of <strong>East Bay businesses, Port operations</strong>, and local CBP procedures. Serving Oakland, Berkeley, Alameda, and surrounding communities.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Emergency Response</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Same-day response</strong> to Port of Oakland cargo detentions, seizures, and CBP holds. Minimize demurrage costs with rapid legal intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Tariff & Customs Services in Oakland
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Port of Oakland Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP detains your cargo at Port of Oakland, every day costs money in <strong>demurrage and detention fees</strong>. Our Oakland trade attorney team provides immediate response to get your goods released. We file admissibility packages and coordinate directly with Port CBP.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>UFLPA detention defense packages</li>
                <li>IPR/trademark seizure response</li>
                <li>FDA/USDA hold resolution</li>
                <li>On-site cargo examination attendance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Code Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Oakland tariff lawyer, we ensure your products are correctly classified under the Harmonized Tariff Schedule (HTS). Proper classification can mean the difference between <strong>0% and 25%+ duty rates</strong>. Critical for Oakland port importers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification analysis and optimization</li>
                <li>Binding Ruling requests (NY/HQ rulings)</li>
                <li>Tariff engineering for duty minimization</li>
                <li>Classification dispute defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of Oakland importers face regular CBP audits. Our Oakland customs lawyer team defends you through Focused Assessments, Quick Response Audits, and penalty proceedings. We've helped Oakland clients <strong>reduce penalties by 75% or more</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense</li>
                <li>Prior Disclosure filings to cap penalties</li>
                <li>CF-28/CF-29 response preparation</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                China tariffs (Section 301) add <strong>7.5% to 25%</strong> to import costs for Oakland port cargo. Our trade law firm helps you navigate exclusions, supply chain restructuring, and tariff engineering to minimize duty burden.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 exclusion analysis</li>
                <li>Substantial transformation opinions</li>
                <li>Third-country sourcing compliance</li>
                <li>Tariff refund/protest strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Forced Labor Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of Oakland sees high UFLPA detention rates. The Uyghur Forced Labor Prevention Act has resulted in <strong>$2+ billion in detained goods</strong>. Our Oakland attorney team helps you implement supply chain due diligence and defend against UFLPA holds.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Supply chain mapping and audits</li>
                <li>UFLPA detention defense packages</li>
                <li>"Clear and convincing" evidence compilation</li>
                <li>Forced labor compliance programs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Wine & Food Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Oakland is a major gateway for wine and specialty food imports. We handle <strong>TTB certificates, FDA compliance</strong>, customs classification, and labeling requirements for East Bay wine importers and food distributors.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Wine/spirits HTS classification</li>
                <li>TTB COLA and formula approvals</li>
                <li>FDA food import compliance</li>
                <li>Country of origin marking (wine)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Oakland */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our Oakland Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* East Bay */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">East Bay Communities</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve all East Bay cities and communities:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Oakland', 'Berkeley', 'Alameda', 'Emeryville',
                  'Fremont', 'Hayward', 'San Leandro', 'Union City',
                  'Newark', 'Pleasanton', 'Livermore', 'Dublin',
                  'San Ramon', 'Walnut Creek', 'Concord', 'Richmond'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Bay Area & Wine Country */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bay Area & Wine Country</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Easy access for Bay Area and Wine Country businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'San Francisco', 'San Jose', 'Santa Clara', 'Sunnyvale',
                  'Palo Alto', 'Mountain View', 'Redwood City', 'San Mateo',
                  'Napa', 'Sonoma', 'Petaluma', 'Fairfield',
                  'Vallejo', 'Benicia', 'Martinez', 'Antioch'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Statewide & Nationwide */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Statewide & Nationwide Representation</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">California Ports</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of Oakland</li>
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
                  <li>Port of San Diego</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Courts</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>U.S. Court of International Trade</li>
                  <li>U.S. Court of Appeals (Federal Circuit)</li>
                  <li>CBP Administrative Proceedings</li>
                  <li>Commerce Department Reviews</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Major California Markets</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>East Bay</li>
                  <li>San Francisco Bay Area</li>
                  <li>Wine Country</li>
                  <li>Silicon Valley</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Oakland Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Oakland Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Oakland Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Oakland trade attorney, we have extensive experience with Port of Oakland operations, CBP procedures, terminal logistics, and local customs officials. We understand the unique challenges Oakland importers face.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Exclusive Trade Law Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general practice firms, we focus <strong>exclusively</strong> on international trade and customs law. This specialization means deeper expertise, current knowledge of regulatory changes, and established relationships with CBP and trade agencies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services (protests, ruling requests, prior disclosures) and transparent hourly rates for complex matters. No surprise bills. Your free initial consultation includes a clear fee estimate.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Same-Day Port Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Port emergencies require <strong>immediate action</strong>. We provide same-day response to Port of Oakland cargo detentions, seizures, and CBP examination requests. Call (310) 744-1328 for urgent assistance.
              </p>
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
            {/* Legal Services */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense & Litigation</span>
                    <p className="service-link__description">CBP audits, seizures, penalty defense</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#regulatory-compliance-advisory" className="service-link">
                    <span className="service-link__title">Trade Compliance Programs</span>
                    <p className="service-link__description">Import compliance development</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#export-controls-sanctions" className="service-link">
                    <span className="service-link__title">Export Controls & Sanctions</span>
                    <p className="service-link__description">ITAR, EAR, OFAC compliance</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#san-francisco-customs-attorney" className="service-link">
                    <span className="service-link__title">San Francisco</span>
                    <p className="service-link__description">Bay Area customs expertise</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#los-angeles-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Los Angeles</span>
                    <p className="service-link__description">Port of LA/Long Beach</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Helpful Guides */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Guides</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#tariffs-duties-classification-guide" className="service-link">
                    <span className="service-link__title">Tariff Classification Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/uflpa-compliance-guide" className="service-link">
                    <span className="service-link__title">UFLPA Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Tariffs Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#trade-law-faq" className="service-link">
                    <span className="service-link__title">FAQ Center</span>
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Oakland trade attorney and customs lawyer team today. We'll assess your situation, explain your options, and provide a clear path forward.
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

export default OaklandTradeAttorneyPage;
