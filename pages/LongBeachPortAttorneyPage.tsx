
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LongBeachPortAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Long Beach Port Attorney | Customs Lawyer Port of Long Beach',
    description: 'Long Beach port attorney & customs lawyer. Port of Long Beach tariff lawyer. CBP defense, cargo detention, customs audits. On-site port access. (310) 744-1328.',
    keywords: 'port attorney long beach, customs lawyer long beach, tariff lawyer port of long beach, long beach customs attorney, international trade lawyer long beach ca, cbp defense attorney long beach, long beach port lawyer, cargo detention attorney',
    canonical: 'long-beach-port-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-long-beach.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Long Beach Port Attorney & Port of Long Beach Customs Lawyer - Port Legal Services',
        description: 'Long Beach port attorney and Port of Long Beach customs lawyer providing expert legal representation for cargo detentions, tariff classification, CBP defense, and port customs compliance.',
        url: `${siteConfig.siteUrl}/long-beach-port-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Long Beach Port Attorney', url: `${siteConfig.siteUrl}/long-beach-port-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Long Beach port attorney for Port of Long Beach cargo issues?',
          answer: 'A Long Beach-based port attorney offers on-site access to Port of Long Beach, the second busiest container port in the United States. Our Long Beach location enables immediate response to CBP cargo detentions, examinations, seizures, and port emergencies—minimizing demurrage and detention costs.',
        },
        {
          question: 'What port and customs services do you offer in Long Beach?',
          answer: 'Our Long Beach office provides comprehensive port services including: Port of Long Beach cargo detention defense, CBP seizure response, customs examination attendance, tariff classification, CBP audit defense, UFLPA detention defense, customs penalty mitigation, port compliance advisory, and emergency cargo release representation.',
        },
        {
          question: 'How quickly can you respond to Port of Long Beach cargo detentions?',
          answer: 'Our Long Beach location provides immediate on-site access to Port of Long Beach terminals and CBP facilities. We can typically attend CBP cargo examinations and respond to detention notices within hours. For Port of Long Beach emergencies, call our direct line at (310) 744-1328 for same-day assistance.',
        },
        {
          question: 'What industries do you serve from your Long Beach office?',
          answer: 'From our Long Beach office, we represent importers across all industries using Port of Long Beach including consumer goods, electronics, apparel/textiles, furniture/home goods, automotive parts, food/beverages, e-commerce, and manufacturing. We understand Long Beach port operations and terminal logistics.',
        },
        {
          question: 'Do you attend CBP cargo examinations at Port of Long Beach?',
          answer: 'Yes. We regularly attend CBP cargo examinations at Port of Long Beach terminals on behalf of clients. Our on-site presence allows us to coordinate with CBP officers, review cargo documentation, resolve admissibility issues, and expedite cargo release to minimize costly demurrage and detention charges.',
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
      <section className="hero" aria-label="Long Beach Port Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Long Beach Port Attorney<br />Customs Lawyer California</h1>
          <p className="hero-subtitle">
            Long Beach port attorney and Port of Long Beach customs lawyer. On-site port access for cargo detention defense, CBP examinations, seizure response, and emergency customs representation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Long Beach Port Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Your Local Tariff & Customs Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Long Beach and Southern California with on-site Port of Long Beach legal services. As the <strong>second busiest container port in the U.S.</strong>, Port of Long Beach handles over 8 million containers annually, requiring immediate legal response for cargo issues.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">On-Site Port Access</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Immediate access to Port of Long Beach</strong> terminals, CBP facilities, and cargo examination sites. We can be on-site within the hour for emergencies.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cargo Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized in <strong>UFLPA detentions, seizures, cargo holds</strong>, and CBP examination defense. Every hour saved reduces demurrage costs.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">24/7 Emergency Response</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Emergency port response</strong> for urgent cargo detentions, CBP seizures, and time-sensitive customs matters at Port of Long Beach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Port of Long Beach Legal Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Port of Long Beach Cargo Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP detains your cargo at Port of Long Beach, every hour costs <strong>hundreds or thousands in demurrage and detention fees</strong>. Our Long Beach port attorney team provides immediate on-site response, filing admissibility packages and coordinating with terminal operators to expedite release.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>UFLPA detention defense and evidence packages</li>
                <li>On-site CBP cargo examination attendance</li>
                <li>Petition for release of detained goods</li>
                <li>Terminal demurrage/detention negotiation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Seizure & Hold Response</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP seizures at Port of Long Beach require <strong>immediate legal intervention</strong>. We respond to IPR/trademark seizures, UFLPA holds, FDA/USDA detentions, and 19 USC § 1595a seizure notices with same-day legal representation and cargo release strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Seizure notice response (19 USC § 1618)</li>
                <li>IPR/trademark seizure defense</li>
                <li>FDA/USDA/EPA hold resolution</li>
                <li>Redelivery bond processing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Code Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Long Beach port attorney, we ensure products are correctly classified under the Harmonized Tariff Schedule (HTS) before cargo arrives. Proper classification can mean the difference between <strong>0% and 25%+ duty rates</strong> and prevents costly port delays.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Pre-shipment HTS classification review</li>
                <li>Binding Ruling requests (NY/HQ rulings)</li>
                <li>Port entry classification disputes</li>
                <li>Tariff engineering for duty minimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of Long Beach importers face frequent CBP audits. Our customs lawyer team defends you through Focused Assessments, Quick Response Audits, and penalty proceedings. We've helped Long Beach clients <strong>reduce penalties by 75% or more</strong> through strategic prior disclosures.
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
                China tariffs (Section 301) add <strong>7.5% to 25%</strong> to Port of Long Beach cargo. Our trade law firm helps you navigate exclusions, supply chain restructuring, and tariff engineering before goods arrive to avoid unexpected duty bills.
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
                Port of Long Beach sees the <strong>highest UFLPA detention rates</strong> in the nation. The Uyghur Forced Labor Prevention Act has resulted in $2+ billion in detained goods. Our Long Beach attorney team provides immediate detention defense and compliance programs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>UFLPA detention defense packages</li>
                <li>"Clear and convincing" evidence compilation</li>
                <li>On-site CBP UFLPA examination support</li>
                <li>Supply chain due diligence programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Long Beach */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our Long Beach Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Long Beach & South Bay */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Long Beach & South Bay</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve all Long Beach and South Bay communities:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Long Beach', 'Carson', 'Torrance', 'Wilmington',
                  'San Pedro', 'Compton', 'Lakewood', 'Signal Hill',
                  'Bellflower', 'Paramount', 'Norwalk', 'Downey',
                  'Cerritos', 'Hawaiian Gardens', 'Artesia', 'La Mirada'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* LA & Orange County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">LA & Orange County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Easy access for LA and Orange County port users:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Los Angeles', 'Pasadena', 'Glendale', 'Burbank',
                  'Anaheim', 'Santa Ana', 'Irvine', 'Orange',
                  'Fullerton', 'Costa Mesa', 'Huntington Beach', 'Garden Grove',
                  'Westminster', 'Fountain Valley', 'La Habra', 'Seal Beach'
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
                  <li>Port of Long Beach</li>
                  <li>Port of Los Angeles</li>
                  <li>Port of Oakland</li>
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
                  <li>Port of Long Beach</li>
                  <li>Los Angeles Metro</li>
                  <li>Orange County</li>
                  <li>Inland Empire</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Long Beach Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Long Beach Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Long Beach Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Long Beach port attorney, we have extensive on-site experience with Port of Long Beach operations, terminal logistics, CBP procedures, and local customs officials. We can attend cargo examinations and coordinate releases same-day.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Exclusive Trade Law Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general practice firms, we focus <strong>exclusively</strong> on international trade and customs law. This specialization means deeper expertise, current knowledge of CBP procedures, and established relationships with port officials.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Minimize Demurrage Costs</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Port cargo detention costs <strong>$100-300+ per container per day</strong> in demurrage. Our immediate legal intervention and on-site CBP coordination minimizes costly delays and gets your goods released faster.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">24/7 Port Emergency Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Port emergencies don't wait for business hours. We provide <strong>24/7 response</strong> to Port of Long Beach cargo detentions, seizures, and CBP holds. Call (310) 744-1328 for immediate assistance.
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
                  <a href="#los-angeles-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Los Angeles</span>
                    <p className="service-link__description">Port of LA customs</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#oakland-trade-attorney" className="service-link">
                    <span className="service-link__title">Oakland</span>
                    <p className="service-link__description">Port of Oakland</p>
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
            Contact our Long Beach port attorney and customs lawyer team today. We'll assess your situation, explain your options, and provide immediate port representation.
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

export default LongBeachPortAttorneyPage;
