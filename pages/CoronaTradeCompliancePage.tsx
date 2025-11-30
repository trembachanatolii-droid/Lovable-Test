
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const CoronaTradeCompliancePage: React.FC = () => {
  useMeta({
    title: 'Corona Trade Compliance Attorney | Inland Empire Customs CA',
    description: 'Corona trade compliance attorney for Inland Empire businesses. Expert customs lawyer for manufacturing, logistics, CBP defense. (310) 744-1328.',
    keywords: 'trade compliance attorney corona, customs lawyer corona, corona tariff attorney, inland empire trade lawyer, riverside county customs attorney, international trade corona california',
    canonical: 'corona-trade-compliance',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-corona.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Corona Trade Compliance Attorney & Customs Lawyer - Inland Empire CA',
        description: 'Corona trade compliance attorney serving Inland Empire manufacturers and importers. Expert customs legal services for trade compliance, CBP audits, and tariff optimization.',
        url: `${siteConfig.siteUrl}/#corona-trade-compliance`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/#california-offices` },
        { name: 'Corona Trade Compliance', url: `${siteConfig.siteUrl}/#corona-trade-compliance` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Corona trade compliance attorney?',
          answer: 'Corona is strategically located in the Inland Empire between Riverside and Orange counties with excellent access to major logistics corridors. Our trade compliance attorney serves manufacturers, importers, and distributors throughout the region with expertise in customs compliance programs, CBP audits, and international trade regulations.',
        },
        {
          question: 'What trade compliance services do you provide in Corona?',
          answer: 'We offer comprehensive trade compliance services including: import compliance program development, internal audit and risk assessment, employee training on customs regulations, recordkeeping and documentation systems, CBP audit defense, prior disclosure preparation, and ongoing compliance monitoring.',
        },
        {
          question: 'Do you help develop customs compliance programs?',
          answer: 'Yes, developing a robust import compliance program is critical to avoid CBP penalties. We create customized programs including classification procedures, valuation protocols, internal controls, employee training, self-assessment processes, and corrective action procedures. These programs demonstrate reasonable care and can significantly reduce penalties.',
        },
        {
          question: 'Can you assist with CBP compliance assessments?',
          answer: 'Absolutely. CBP Focused Assessments audit specific import areas for compliance. We represent clients throughout the FA process including document production, CBP meetings, issue resolution, and negotiating outcomes. Our expertise often results in no assessment or significantly reduced duties and penalties.',
        },
        {
          question: 'What industries do you serve in Corona and Riverside County?',
          answer: 'We represent diverse Inland Empire businesses including: manufacturing and industrial equipment, consumer goods and retail, automotive parts and accessories, building materials and construction, electronics and technology, food and beverage, apparel and textiles, and logistics/distribution operations.',
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
      <section className="hero" aria-label="Corona Trade Compliance Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Corona Trade Compliance<br />Inland Empire Customs Attorney</h1>
          <p className="hero-subtitle">
            Expert Corona trade compliance attorney serving Inland Empire businesses. Specialized in customs compliance programs, CBP audit defense, and import regulatory excellence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Corona Trade Compliance */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Inland Empire Compliance Excellence
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Corona is <strong>strategically positioned in the Inland Empire</strong> with access to major logistics routes and close proximity to Port of LA/Long Beach. Our trade compliance attorney helps businesses build robust customs programs to prevent costly violations and CBP audits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Compliance Program Development</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Customized import compliance programs</strong> with internal controls, training, and self-assessment procedures to demonstrate reasonable care.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CBP Audit Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep experience defending <strong>Focused Assessments and compliance audits</strong>. We navigate CBP review processes and minimize duty assessments.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regional Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Convenient <strong>Riverside and Orange County access</strong> via CA-91. Quick response to port issues and in-person compliance consultations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Compliance Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Corona Trade Compliance Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Import Compliance Program Development</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A robust <strong>import compliance program demonstrates reasonable care</strong> and can reduce CBP penalties by 75% or more. We develop customized programs with internal controls, training, and audit procedures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Compliance program design and implementation</li>
                <li>Classification and valuation procedures</li>
                <li>Internal control systems and oversight</li>
                <li>Employee training and certification programs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Focused Assessment Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP Focused Assessments audit specific areas of your import operations. Our Corona attorney <strong>represents you throughout the FA process</strong> from initial questionnaire through final determination.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FA questionnaire response and document production</li>
                <li>Issue identification and compliance assessment</li>
                <li>CBP meeting preparation and representation</li>
                <li>Negotiation of findings and duty assessments</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Internal Audits & Risk Assessment</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Regular internal audits identify <strong>compliance risks before CBP does</strong>. We conduct comprehensive reviews of your import operations and provide actionable recommendations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Classification accuracy audits</li>
                <li>Valuation and related-party transaction review</li>
                <li>Country of origin compliance assessment</li>
                <li>Recordkeeping and documentation review</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Prior Disclosure Strategy & Filing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When you discover import errors, <strong>Prior Disclosure caps penalties at interest only</strong>. We analyze disclosure requirements and prepare comprehensive PD packages.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Prior Disclosure eligibility analysis</li>
                <li>Root cause analysis and corrective actions</li>
                <li>Duty calculation and interest computation</li>
                <li>PD submission and CBP negotiation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification Management</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper classification is foundational to compliance. We develop <strong>classification procedures, databases, and binding ruling strategies</strong> for consistent, defendable classifications.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Classification procedure development</li>
                <li>Product database and HTS assignment systems</li>
                <li>Binding Ruling request strategy</li>
                <li>Classification change management protocols</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Employee Training & Education</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Customs compliance depends on <strong>trained, knowledgeable employees</strong>. We provide customized training programs for import staff on classification, valuation, country of origin, and compliance procedures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Custom-tailored training programs</li>
                <li>Classification and valuation fundamentals</li>
                <li>Country of origin and marking requirements</li>
                <li>Recordkeeping and audit preparedness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Corona */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Corona
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Inland Empire - Riverside Area */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Inland Empire - Riverside Area</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Serving Western Riverside County businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Corona', 'Riverside', 'Norco', 'Eastvale',
                  'Jurupa Valley', 'Mira Loma', 'Glen Avon', 'Pedley',
                  'Moreno Valley', 'Perris', 'Lake Elsinore', 'Wildomar',
                  'Murrieta', 'Temecula', 'Menifee', 'Sun City'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Orange County & San Bernardino */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Orange County & San Bernardino</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Extended service to neighboring counties:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Anaheim', 'Orange', 'Santa Ana', 'Yorba Linda',
                  'Placentia', 'Fullerton', 'Brea', 'La Habra',
                  'Chino', 'Chino Hills', 'Ontario', 'Rancho Cucamonga',
                  'Fontana', 'Rialto', 'San Bernardino', 'Colton'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Statewide */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">California Ports & Nationwide Representation</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">California Ports</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
                  <li>Ontario International Airport</li>
                  <li>Port of Oakland</li>
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
                <h4 className="font-bold text-secondary-teal mb-3">Regional Markets</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Riverside County</li>
                  <li>Orange County</li>
                  <li>San Bernardino County</li>
                  <li>Los Angeles County</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Corona Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Corona Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Compliance Program Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>developing and implementing customs compliance programs</strong>. Our systematic approach prevents violations and demonstrates reasonable care to CBP.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CBP Audit Success Rate</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Strong track record defending <strong>Focused Assessments and compliance audits</strong>. We often achieve no assessment or significantly reduced duty findings.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Inland Empire Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand the <strong>Inland Empire business environment</strong> and provide convenient regional access. Local service with national trade law expertise.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proactive Risk Management</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our <strong>internal audit and training programs</strong> identify risks before CBP does. Prevention is more cost-effective than defense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Corona & Inland Empire
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Corona from our California offices</strong><br />
                Headquarters: 27001 Agoura Road, Suite 350<br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Compliance Consultations:</strong> In-person and virtual available
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Transportation Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From Corona:</strong> 1 hour via CA-91 West to 101 North</li>
                <li><strong>To Port of LA/Long Beach:</strong> 1 hour via CA-91 to I-710</li>
                <li><strong>From Riverside:</strong> 1 hour via CA-91 West</li>
                <li><strong>CA-91 Corridor:</strong> Direct access throughout region</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#compliance-program-development" className="service-link">
                    <span className="service-link__title">Compliance Programs</span>
                    <p className="service-link__description">Import program design</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#cbp-focused-assessment-defense" className="service-link">
                    <span className="service-link__title">Focused Assessment Defense</span>
                    <p className="service-link__description">CBP audit representation</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#prior-disclosure-services" className="service-link">
                    <span className="service-link__title">Prior Disclosure</span>
                    <p className="service-link__description">Penalty minimization</p>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#riverside-trade-attorney" className="service-link">
                    <span className="service-link__title">Riverside Trade Attorney</span>
                    <p className="service-link__description">Riverside County services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#anaheim-trade-attorney" className="service-link">
                    <span className="service-link__title">Anaheim Trade Attorney</span>
                    <p className="service-link__description">Orange County services</p>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Guides</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#resources/compliance-program-guide" className="service-link">
                    <span className="service-link__title">Compliance Program Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/focused-assessment-guide" className="service-link">
                    <span className="service-link__title">Focused Assessment Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/prior-disclosure-guide" className="service-link">
                    <span className="service-link__title">Prior Disclosure Guide</span>
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
            Contact our Corona trade compliance attorney today. We'll assess your import operations and develop a compliance strategy.
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

export default CoronaTradeCompliancePage;
