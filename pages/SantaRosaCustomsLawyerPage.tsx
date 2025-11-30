
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SantaRosaCustomsLawyerPage: React.FC = () => {
  useMeta({
    title: 'Santa Rosa Customs Lawyer | Wine Country Export Attorney CA',
    description: 'Santa Rosa customs lawyer & export attorney serving Sonoma County wine industry. Tariff classification, CBP defense, wine export compliance, FDA regulations. (310) 744-1328.',
    keywords: 'customs lawyer santa rosa, export attorney santa rosa, trade lawyer santa rosa, international trade attorney santa rosa, santa rosa wine export lawyer, sonoma county customs attorney, wine tariff lawyer, santa rosa import attorney',
    canonical: 'santa-rosa-customs-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-santa-rosa.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Santa Rosa Customs Lawyer & Export Attorney - Wine Country Trade Law Firm',
        description: 'Santa Rosa customs lawyer and export attorney specializing in Sonoma County wine industry. Expert wine export compliance, tariff classification, CBP defense, and FDA/TTB regulations for wine exporters.',
        url: `${siteConfig.siteUrl}/#santa-rosa-customs-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/#california-offices` },
        { name: 'Santa Rosa Customs Lawyer', url: `${siteConfig.siteUrl}/#santa-rosa-customs-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Santa Rosa customs lawyer for wine exporters?',
          answer: 'A Santa Rosa-based customs lawyer understands the unique regulatory challenges facing Sonoma County wine exporters. Our firm provides specialized representation for wine and beverage export compliance including TTB Certificate of Label Approval (COLA) requirements, FDA food facility registration, tariff classification for wine and spirits, export documentation (commercial invoices, certificates of origin), and customs compliance for international wine shipments to EU, Asia, and Canada.',
        },
        {
          question: 'What wine export services do you offer in Santa Rosa?',
          answer: 'Our Santa Rosa office provides comprehensive wine export services including: TTB export compliance and COLA requirements, FDA food facility registration and prior notice, tariff classification for wine, spirits, and beverages (Chapter 22), certificates of origin and free trade agreement utilization, export documentation preparation, customs compliance programs for wine exporters, and CBP audit defense for beverage importers/exporters.',
        },
        {
          question: 'Do you serve other Sonoma County cities besides Santa Rosa?',
          answer: 'Yes, from our Santa Rosa location we serve the entire Sonoma County wine country including Petaluma, Rohnert Park, Windsor, Healdsburg, Sebastopol, Cotati, Sonoma, and all county wineries and vineyards. We also represent wine exporters throughout Napa Valley, Mendocino County, and Northern California wine regions.',
        },
        {
          question: 'How do you help wine exporters with international compliance?',
          answer: 'Our Santa Rosa customs lawyer team provides comprehensive wine export compliance including: destination country import requirements research, export documentation preparation (commercial invoice, packing list, certificate of origin), TTB export approval and COLA compliance, FDA prior notice filing for food/beverage exports, tariff classification to minimize duties, and free trade agreement (FTA) utilization for duty-free wine exports. Call (310) 744-1328 to discuss your wine export needs.',
        },
        {
          question: 'What industries do you serve from your Santa Rosa office?',
          answer: 'From Santa Rosa, we primarily serve the Sonoma County wine and beverage industry including wineries, wine distributors, craft breweries, craft distilleries, food and agriculture exporters, and specialty food manufacturers. We also represent importers/exporters in manufacturing, technology, and consumer goods throughout the North Bay region.',
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
      <section className="hero" aria-label="Santa Rosa Customs Lawyer Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Santa Rosa Customs Lawyer<br />Wine Country Export Attorney</h1>
          <p className="hero-subtitle">
            Santa Rosa customs lawyer and export attorney serving Sonoma County wine industry. Expert wine export compliance, TTB/FDA regulations, tariff classification, and CBP defense for wine country businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Santa Rosa Customs Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Wine Country Trade Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Santa Rosa and Sonoma County wine exporters with expert customs and trade law services. Our firm understands the <strong>unique regulatory challenges</strong> facing wine country businesses, from TTB compliance to international export regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Wine Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep experience with <strong>wine and beverage export compliance</strong>. TTB, FDA, tariff classification, and international wine shipping regulations for Sonoma County wineries.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Compliance Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Expert representation for <strong>wine export documentation</strong>, certificates of origin, free trade agreements, and destination country compliance for EU, Asia, and global markets.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Wine Country Accessibility</h3>
              <p className="text-text-secondary leading-relaxed">
                Serving <strong>Sonoma County wine country</strong>. Convenient access for Santa Rosa, Healdsburg, Sebastopol, and Petaluma wineries without traveling to San Francisco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customs & Export Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Wine Export & Customs Services in Santa Rosa
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Wine Export Compliance & Documentation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Santa Rosa customs lawyer, we help wineries navigate international wine export requirements. From <strong>TTB export approvals to destination country compliance</strong>, we ensure your wine shipments meet all regulatory requirements. Proper documentation prevents costly delays and rejections.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>TTB Certificate of Label Approval (COLA) for exports</li>
                <li>Export documentation (commercial invoice, packing list, BOL)</li>
                <li>Certificates of origin and free trade agreement utilization</li>
                <li>Destination country import requirement research</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA & TTB Regulatory Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Wine and beverage exports require <strong>FDA food facility registration and TTB compliance</strong>. Our Santa Rosa export attorney handles FDA prior notice filings, facility registration, and TTB export requirements to ensure regulatory compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA food facility registration (FFR)</li>
                <li>FDA prior notice filing for wine/beverage exports</li>
                <li>TTB export approval and compliance</li>
                <li>COLA (Certificate of Label Approval) assistance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification for Wine & Beverages</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper tariff classification is critical for wine importers and exporters. Our Santa Rosa customs lawyer ensures accurate <strong>HTS classification under Chapter 22</strong> (wine, spirits, beverages). Classification affects duties, excise taxes, and trade agreement eligibility.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for wine and spirits (Chapter 22)</li>
                <li>Classification by alcohol content and type</li>
                <li>Binding Ruling requests for wine products</li>
                <li>Free Trade Agreement (FTA) tariff reduction strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense for Wine Businesses</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP audits wine and beverage importers/exporters for compliance. Our Santa Rosa customs lawyer defends you through <strong>Focused Assessments and penalty proceedings</strong>. We've helped wine businesses reduce penalties through strategic prior disclosures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense for wine importers</li>
                <li>Prior Disclosure filings to minimize penalties</li>
                <li>CF-28/CF-29 response for wine/beverage shipments</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Free Trade Agreements for Wine Exports</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Wine exporters can achieve <strong>duty-free or reduced tariff rates</strong> through free trade agreements. Our Santa Rosa export attorney maximizes FTA benefits for wine exports to Canada, EU, Japan, Korea, and other markets.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA (United States-Mexico-Canada Agreement) utilization</li>
                <li>EU wine export compliance and tariff reduction</li>
                <li>Japan, Korea, and Asia-Pacific FTA strategies</li>
                <li>Certificate of origin preparation for wine</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agriculture & Food Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Beyond wine, we serve Sonoma County <strong>food and agriculture exporters</strong>. From specialty foods to agricultural products, our Santa Rosa office provides comprehensive export compliance and customs services.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA food export compliance programs</li>
                <li>USDA export requirements for agricultural products</li>
                <li>Phytosanitary certificates and export permits</li>
                <li>Specialty food tariff classification and compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Santa Rosa */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our Santa Rosa Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Sonoma County Wine Country */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Sonoma County Wine Country</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve the entire Sonoma County wine and agriculture community:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Santa Rosa', 'Petaluma', 'Rohnert Park', 'Windsor',
                  'Healdsburg', 'Sebastopol', 'Cotati', 'Sonoma',
                  'Cloverdale', 'Geyserville', 'Guerneville', 'Occidental',
                  'Bodega Bay', 'Kenwood', 'Glen Ellen', 'Forestville'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Napa Valley & North Bay */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Napa Valley & North Bay</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Convenient access for Napa Valley and North Bay wine businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Napa', 'St. Helena', 'Calistoga', 'Yountville',
                  'American Canyon', 'Oakville', 'Rutherford', 'Angwin',
                  'Novato', 'San Rafael', 'Mill Valley', 'Sausalito',
                  'Vallejo', 'Benicia', 'Fairfield', 'Ukiah'
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
                <h4 className="font-bold text-secondary-teal mb-3">Federal Agencies</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>CBP (Customs and Border Protection)</li>
                  <li>FDA (Food and Drug Administration)</li>
                  <li>TTB (Alcohol and Tobacco Tax)</li>
                  <li>USDA (Agriculture Department)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Major California Markets</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>San Francisco Bay Area</li>
                  <li>Los Angeles County</li>
                  <li>Orange County</li>
                  <li>San Diego</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Santa Rosa Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Wine Country Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Wine Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Santa Rosa customs lawyer, we understand wine country operations. We've helped <strong>wineries, wine distributors, and beverage exporters</strong> navigate TTB, FDA, tariff classification, and international wine export compliance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Compliance Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general practice firms, we focus on <strong>international trade, customs, and export regulations</strong>. This specialization means deeper expertise in wine export compliance, FTA utilization, and destination country requirements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services (export documentation, binding rulings, prior disclosures) and transparent hourly rates for complex matters. No surprise bills. Your free consultation includes a clear fee estimate.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Wine shipments often have <strong>time-sensitive deadlines</strong>. We prioritize urgent matters including export documentation, CBP detentions, and compliance emergencies affecting your wine business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Santa Rosa & Sonoma County Wine Country
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Santa Rosa, CA and Sonoma County</strong><br />
                Main Office: Calabasas, CA<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Service Area:</strong> Santa Rosa, Sonoma County wine country, Napa Valley
              </p>
              <p className="text-text-secondary text-sm">
                <strong>Industries:</strong> Wine, craft beverages, food & agriculture exports
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Wine Country Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From US-101:</strong> Direct access to Santa Rosa business district</li>
                <li><strong>From Healdsburg:</strong> US-101 South, approximately 15-20 minutes</li>
                <li><strong>From Napa:</strong> SR-12 West, approximately 30 minutes</li>
                <li><strong>From San Francisco:</strong> US-101 North via Golden Gate Bridge, approximately 60 minutes</li>
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
                  <a href="#export-controls-sanctions" className="service-link">
                    <span className="service-link__title">Export Compliance Services</span>
                    <p className="service-link__description">Wine/food export documentation</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense & Litigation</span>
                    <p className="service-link__description">CBP audits, penalty defense</p>
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
                    <p className="service-link__description">FDA/TTB compliance development</p>
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
                  <a href="#oakland-port-customs-attorney" className="service-link">
                    <span className="service-link__title">Oakland & Port of Oakland</span>
                    <p className="service-link__description">Port customs expertise</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#bay-area-trade-law-attorney" className="service-link">
                    <span className="service-link__title">San Francisco & Bay Area</span>
                    <p className="service-link__description">Bay Area trade law services</p>
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
                  <a href="#resources/wine-export-compliance-guide" className="service-link">
                    <span className="service-link__title">Wine Export Compliance Guide</span>
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
                  <a href="#resources/fta-free-trade-agreements-guide" className="service-link">
                    <span className="service-link__title">Free Trade Agreements Guide</span>
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
            Contact our Santa Rosa customs lawyer and export attorney team today. We'll assess your wine export compliance needs, explain your options, and provide a clear path forward.
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

export default SantaRosaCustomsLawyerPage;
