
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const BakersfieldOilEnergyTradePage: React.FC = () => {
  useMeta({
    title: 'Oil & Energy Trade Lawyer Bakersfield | Petroleum Import Attorney CA',
    description: 'Bakersfield oil & energy trade lawyer. Expert petroleum imports/exports, energy equipment, tariff classification, CBP compliance for Kern County energy sector. (310) 744-1328.',
    keywords: 'oil energy trade lawyer bakersfield, petroleum import attorney bakersfield, energy equipment customs lawyer california, oil gas import compliance bakersfield, petroleum tariff attorney kern county',
    canonical: 'bakersfield-oil-energy-trade',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-energy.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Bakersfield Oil & Energy Trade Lawyer - Petroleum Import/Export Attorney',
        description: 'Expert Bakersfield oil and energy trade lawyer providing petroleum import/export compliance, energy equipment tariffs, and customs law services for Kern County energy sector.',
        url: `${siteConfig.siteUrl}/bakersfield-oil-energy-trade`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Bakersfield Oil & Energy Trade', url: `${siteConfig.siteUrl}/bakersfield-oil-energy-trade` }
      ]),
      generateFAQSchema([
        {
          question: 'What tariffs apply to petroleum and crude oil imports?',
          answer: 'Crude petroleum and petroleum products are generally classified under HTS Chapter 27. Most crude oil imports enter duty-free under HTS 2709, but refined petroleum products (gasoline, diesel, jet fuel, heating oil) may carry duties ranging from 5.25¢/barrel to 52.5¢/barrel. Petroleum manufacturing drawback under 19 USC § 1313(p) allows refineries to recover 99% of duties paid on imported crude that is subsequently exported as refined products. Our Bakersfield oil trade lawyer optimizes petroleum classification and drawback claims.',
        },
        {
          question: 'How do export controls affect oil field equipment and technology?',
          answer: 'Oil and gas extraction equipment, drilling technology, and enhanced recovery systems may be subject to export controls under the Export Administration Regulations (EAR). Advanced drilling equipment (ECCN 2B350), seismic survey equipment, and certain refining technology require export licenses for restricted destinations. Our Bakersfield energy trade attorney helps oil and gas companies navigate EAR compliance and obtain necessary export licenses.',
        },
        {
          question: 'What is petroleum manufacturing drawback and how much can we recover?',
          answer: 'Petroleum manufacturing drawback under 19 USC § 1313(p) allows refineries to recover 99% of duties paid on imported crude oil that is manufactured into refined products and subsequently exported. This specialized drawback provision is unique to petroleum and can result in millions in duty recovery for refineries exporting gasoline, diesel, jet fuel, or other refined products. Our Bakersfield attorney prepares petroleum drawback claims and ruling requests.',
        },
        {
          question: 'Do we need licenses to import oil field equipment and drilling machinery?',
          answer: 'Most oil field equipment imports do not require licenses, but certain items may require permits depending on origin and end use. Equipment from Russia-related entities may face OFAC sanctions restrictions. Dual-use drilling equipment for certain destinations may require BIS export licenses. Our Bakersfield oil and energy trade lawyer conducts licensing analysis and obtains necessary permits.',
        },
        {
          question: 'How do Section 232 tariffs affect steel imports for energy infrastructure?',
          answer: 'Section 232 national security tariffs impose 25% duties on steel and 10% on aluminum imports, significantly impacting energy infrastructure projects requiring pipes, drilling equipment, and structural steel. Certain exclusions and exemptions may be available. Our Bakersfield energy attorney helps you navigate Section 232 compliance and pursue exclusion requests when applicable.',
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
      <section className="hero" aria-label="Bakersfield Oil & Energy Trade Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Bakersfield Oil & Energy Trade Lawyer<br />Petroleum Import/Export Attorney</h1>
          <p className="hero-subtitle">
            Expert oil and energy trade compliance for Kern County. Petroleum imports/exports, energy equipment tariffs, petroleum drawback, and customs law for the energy sector.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Energy Trade Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Bakersfield Oil & Energy Trade Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Kern County Oil & Energy Trade Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Bakersfield and Kern County are the <strong>heart of California's oil and gas industry</strong>, producing over 70% of the state's crude oil. Energy companies import crude oil, petroleum products, drilling equipment, and export refined products. Our Bakersfield oil and energy trade lawyer provides specialized customs and trade law services for petroleum companies, refineries, and energy equipment suppliers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Energy Sector Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized focus on <strong>oil, gas, and energy trade compliance</strong> - petroleum imports/exports, energy equipment, and refinery operations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Petroleum Drawback Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep experience with <strong>petroleum manufacturing drawback (19 USC § 1313(p))</strong>, recovering millions in duties for refineries.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Kern County Knowledge</h3>
              <p className="text-text-secondary leading-relaxed">
                Understanding of <strong>Kern County energy operations</strong>, regional petroleum infrastructure, and industry-specific trade challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Oil & Energy Trade Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Oil & Energy Trade Compliance Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Petroleum Import Classification & Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Crude oil and petroleum products are classified under <strong>HTS Chapter 27</strong>. Proper classification is critical for duty minimization and compliance. We provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Crude petroleum classification (HTS 2709 - generally duty-free)</li>
                <li>Refined petroleum products (gasoline, diesel, jet fuel, heating oil)</li>
                <li>Petroleum oils and distillates (HTS 2710)</li>
                <li>Lubricating oils and greases</li>
                <li>Petroleum gases (propane, butane, LPG)</li>
                <li>Petroleum coke and bitumen</li>
                <li>Specialized petroleum products classification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Petroleum Manufacturing Drawback (19 USC § 1313(p))</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Refineries can recover <strong>99% of duties paid on imported crude oil</strong> when refined products are exported. This specialized drawback provision can result in multi-million dollar duty refunds. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Petroleum manufacturing drawback program setup</li>
                <li>Refinery drawback ruling applications to CBP</li>
                <li>Imported crude tracking and documentation</li>
                <li>Refined product export verification</li>
                <li>Quarterly and annual drawback claim preparation</li>
                <li>CBP audit defense for petroleum drawback programs</li>
                <li>Substitution petroleum drawback compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Energy Equipment Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Oil field equipment, drilling machinery, and energy infrastructure imports face <strong>complex classification and potential Section 232 steel tariffs</strong>. We help with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Drilling equipment classification (HTS Chapter 84, 73)</li>
                <li>Oil and gas extraction machinery (pumps, compressors, wellhead equipment)</li>
                <li>Refinery equipment and processing machinery</li>
                <li>Pipeline and transmission equipment</li>
                <li>Section 232 steel tariff compliance (25% duty on steel)</li>
                <li>Section 232 aluminum tariff compliance (10% duty)</li>
                <li>Section 232 exclusion requests for energy equipment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Energy Technology Export Controls</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Certain oil and gas technology and equipment face <strong>export controls under EAR and OFAC sanctions</strong>. Our Bakersfield energy trade lawyer provides:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Oil and gas extraction equipment export classification</li>
                <li>Advanced drilling technology controls (ECCN 2B350)</li>
                <li>Seismic survey and exploration equipment</li>
                <li>Enhanced oil recovery (EOR) technology</li>
                <li>Export licenses for restricted destinations (Russia, Iran, Venezuela)</li>
                <li>OFAC sanctions compliance for energy sector</li>
                <li>BIS license applications for controlled energy equipment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">OFAC Sanctions & Petroleum Trade</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Energy companies face <strong>strict OFAC sanctions</strong> on petroleum trade with sanctioned countries and entities. Compliance is critical:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Russia energy sector sanctions compliance (SSI Directive 2)</li>
                <li>Iran petroleum sanctions (complete prohibition)</li>
                <li>Venezuela oil sector sanctions (PDVSA and related entities)</li>
                <li>SDN List screening for petroleum trading partners</li>
                <li>Russian oil price cap compliance</li>
                <li>OFAC license applications for authorized petroleum transactions</li>
                <li>Voluntary Self-Disclosure (VSD) for sanctions violations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Renewable Energy Equipment Trade</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As Kern County diversifies into <strong>solar, wind, and renewable energy</strong>, equipment imports face specific compliance requirements:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Solar panel import compliance and UFLPA forced labor screening</li>
                <li>Wind turbine equipment classification and duties</li>
                <li>Battery storage system imports</li>
                <li>Renewable energy components (inverters, controllers)</li>
                <li>Section 201 solar safeguard duties</li>
                <li>Antidumping duties on solar cells and modules</li>
                <li>Trade agreement utilization for renewable equipment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kern County Energy Sector */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Kern County Energy Production
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-neutral-50 p-8 rounded-lg text-center border-t-4 border-secondary-teal">
              <div className="text-5xl font-bold text-primary-navy mb-3">70%</div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">California Oil Production</h3>
              <p className="text-text-secondary text-sm">Kern County produces over 70% of California's crude oil</p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg text-center border-t-4 border-secondary-teal">
              <div className="text-5xl font-bold text-primary-navy mb-3">120M+</div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">Barrels Annually</h3>
              <p className="text-text-secondary text-sm">Over 120 million barrels of oil produced per year in Kern County</p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg text-center border-t-4 border-secondary-teal">
              <div className="text-5xl font-bold text-primary-navy mb-3">10K+</div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">Oil Wells</h3>
              <p className="text-text-secondary text-sm">Over 10,000 active oil and gas wells in the region</p>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Kern County Energy Operations</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-2">Oil Extraction</h4>
                <p className="text-sm text-neutral-200">Primary crude production</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-2">Refineries</h4>
                <p className="text-sm text-neutral-200">Petroleum refining operations</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-2">Natural Gas</h4>
                <p className="text-sm text-neutral-200">Gas production and processing</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-2">Renewables</h4>
                <p className="text-sm text-neutral-200">Growing solar and wind sector</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Bakersfield Energy Trade Team */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Choose Our Energy Trade Attorneys
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Energy Sector Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We focus on <strong>oil, gas, and energy trade compliance</strong> - not general import/export law. We understand petroleum operations and energy industry economics.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Petroleum Drawback Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Deep experience with <strong>petroleum manufacturing drawback</strong> under 19 USC § 1313(p), recovering millions for refineries exporting refined products.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Sanctions & Export Controls Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Current expertise on <strong>OFAC energy sanctions</strong> (Russia, Iran, Venezuela) and export controls on oil and gas technology.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Practical Energy Business Approach</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>energy industry challenges</strong> and provide practical compliance solutions that work for petroleum operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Bakersfield & Kern County Energy Sector
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving Bakersfield & Kern County)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Consultations:</strong> Virtual and phone for Kern County clients
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary-navy mb-3">Kern County Service Area</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>Bakersfield:</strong> 2 hours via Highway 99/I-5</li>
                <li><strong>Kern County:</strong> Complete oil field coverage</li>
                <li><strong>Virtual Services:</strong> Full energy trade compliance remotely</li>
                <li><strong>Refinery Support:</strong> On-site visits for major clients</li>
                <li><strong>California Energy:</strong> Statewide energy sector service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Energy Trade Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Energy Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#petroleum-drawback" className="service-link">
                    <span className="service-link__title">Petroleum Drawback Claims</span>
                    <p className="service-link__description">Refinery duty recovery</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#ofac-energy-sanctions" className="service-link">
                    <span className="service-link__title">OFAC Energy Sanctions</span>
                    <p className="service-link__description">Russia/Iran/Venezuela compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#section-232-steel" className="service-link">
                    <span className="service-link__title">Section 232 Steel Tariffs</span>
                    <p className="service-link__description">Energy infrastructure compliance</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other Energy Regions</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#houston-energy-trade" className="service-link">
                    <span className="service-link__title">Houston Energy Trade</span>
                    <p className="service-link__description">Texas petroleum compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#gulf-coast-petroleum" className="service-link">
                    <span className="service-link__title">Gulf Coast Petroleum Trade</span>
                    <p className="service-link__description">Refinery import/export</p>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Energy Trade Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#resources/petroleum-drawback-guide" className="service-link">
                    <span className="service-link__title">Petroleum Drawback Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/energy-sanctions-compliance" className="service-link">
                    <span className="service-link__title">Energy Sanctions Compliance</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/petroleum-classification" className="service-link">
                    <span className="service-link__title">Petroleum Classification Guide</span>
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
            Optimize Your Energy Trade Compliance
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Kern County energy companies need specialized oil and gas trade expertise. Our Bakersfield oil and energy trade lawyer provides petroleum import/export compliance, drawback claims, and sanctions guidance. Free consultation.
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

export default BakersfieldOilEnergyTradePage;
