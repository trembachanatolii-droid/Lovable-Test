
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const VisaliaTariffLawyerPage: React.FC = () => {
  useMeta({
    title: 'Visalia Tariff Lawyer | Central Valley Agriculture Attorney CA',
    description: 'Visalia tariff lawyer & agriculture attorney serving Central Valley exporters. Food/ag export compliance, tariff classification, FDA/USDA regulations, CBP defense. (310) 744-1328.',
    keywords: 'tariff lawyer visalia, agriculture attorney visalia, trade lawyer visalia, international trade attorney visalia, visalia food export lawyer, central valley customs attorney, visalia tariff attorney, agricultural export lawyer',
    canonical: 'visalia-tariff-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-visalia.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Visalia Tariff Lawyer & Agriculture Attorney - Central Valley Export Specialists',
        description: 'Visalia tariff lawyer and agriculture attorney specializing in Central Valley food and ag exports. Expert FDA/USDA compliance, tariff classification, export documentation, and CBP defense for agricultural exporters.',
        url: `${siteConfig.siteUrl}/visalia-tariff-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Visalia Tariff Lawyer', url: `${siteConfig.siteUrl}/visalia-tariff-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Visalia tariff lawyer for Central Valley agriculture exporters?',
          answer: 'A Visalia-based tariff lawyer understands the unique regulatory challenges facing Central Valley agricultural exporters. Our firm provides specialized representation for food and ag export compliance including FDA food facility registration, USDA export permits and phytosanitary certificates, tariff classification for agricultural products, free trade agreement utilization, export documentation, and customs compliance. We serve the Central Valley agricultural corridor including Visalia, Tulare, Fresno, and surrounding farming communities.',
        },
        {
          question: 'What agriculture export services do you offer in Visalia?',
          answer: 'Our Visalia office provides comprehensive agriculture export services including: FDA food facility registration and prior notice filing, USDA export permits and phytosanitary certificates, tariff classification for agricultural products (fruits, nuts, dairy, livestock), certificates of origin and free trade agreement utilization, export documentation preparation, customs compliance programs for ag exporters, and CBP audit defense for food/ag businesses.',
        },
        {
          question: 'Do you serve other Central Valley cities besides Visalia?',
          answer: 'Yes, from our Visalia location we serve the entire Central Valley agricultural region including Tulare, Hanford, Fresno, Porterville, Exeter, Dinuba, Lindsay, Selma, and all farming communities. We represent agricultural exporters throughout the San Joaquin Valley with food export compliance and customs legal services.',
        },
        {
          question: 'How do you help agricultural exporters with FDA and USDA compliance?',
          answer: 'Our Visalia tariff lawyer team provides comprehensive agricultural export compliance including: FDA food facility registration (FFR) for food processors and exporters, FDA prior notice filing for food/ag exports, USDA export certificates and permits, phytosanitary certificates for plant products, destination country import requirement research, and export documentation preparation. Call (310) 744-1328 to discuss your agricultural export needs.',
        },
        {
          question: 'What industries do you serve from your Visalia office?',
          answer: 'From Visalia, we primarily serve the Central Valley agriculture industry including fruit and nut exporters (almonds, pistachios, citrus, grapes), dairy products, fresh produce, livestock and meat products, processed foods, wine and beverages, and specialty agricultural products. We also represent food manufacturers, processors, and distributors throughout the San Joaquin Valley.',
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
      <section className="hero" aria-label="Visalia Tariff Lawyer Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Visalia Tariff Lawyer<br />Central Valley Agriculture Attorney</h1>
          <p className="hero-subtitle">
            Visalia tariff lawyer and agriculture attorney serving Central Valley food and ag exporters. Expert FDA/USDA compliance, tariff classification, export documentation, and CBP defense for agricultural businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Visalia Tariff Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Central Valley Agricultural Trade Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Visalia and Central Valley agricultural exporters with expert trade law services. Our firm understands the <strong>unique regulatory challenges</strong> facing food and ag businesses, from FDA compliance to international export regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agriculture Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep experience with <strong>Central Valley food and ag exports</strong>. FDA, USDA, tariff classification, and export compliance for fruit, nut, dairy, and produce exporters.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Compliance Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Expert representation for <strong>agricultural export documentation</strong>, FDA/USDA permits, phytosanitary certificates, and destination country compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Serving the <strong>San Joaquin Valley agricultural corridor</strong>. Convenient access for Visalia, Tulare, Fresno, and Central Valley farming communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Export Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Agriculture Export & Tariff Services in Visalia
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA Food Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Visalia tariff lawyer, we help Central Valley food and ag exporters navigate FDA requirements. From <strong>food facility registration to prior notice filing</strong>, we ensure your agricultural exports comply with FDA regulations. Non-compliance can result in export delays and FDA enforcement actions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA food facility registration (FFR) for processors and exporters</li>
                <li>FDA prior notice filing for food/agricultural exports</li>
                <li>FSVP (Foreign Supplier Verification Program) compliance</li>
                <li>FDA detention defense and import alerts</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USDA Export Permits & Phytosanitary Certificates</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Agricultural exports require <strong>USDA export certificates and phytosanitary documentation</strong>. Our Visalia agriculture attorney handles USDA export permit applications, phytosanitary certificates for plant products, and APHIS export requirements for Central Valley ag businesses.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA export certificates for agricultural products</li>
                <li>Phytosanitary certificates for fruits, nuts, and plant products</li>
                <li>APHIS (Animal and Plant Health Inspection Service) compliance</li>
                <li>FSIS export certificates for meat and poultry</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification for Agricultural Products</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper tariff classification is critical for agricultural importers and exporters. Our Visalia tariff lawyer ensures accurate <strong>HTS classification for fruits, nuts, dairy, livestock, and processed foods</strong>. Classification affects duties, tariff-rate quotas, and trade agreement eligibility.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for agricultural products (Chapters 1-24)</li>
                <li>Tariff-rate quota (TRQ) navigation for dairy and meat</li>
                <li>Binding Ruling requests for agricultural products</li>
                <li>Free Trade Agreement (FTA) tariff reduction strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural Export Documentation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                International agricultural exports require comprehensive documentation. Our Visalia agriculture attorney prepares <strong>commercial invoices, certificates of origin, export permits</strong>, and destination country compliance documents for Central Valley ag exporters.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Commercial invoice and packing list preparation</li>
                <li>Certificates of origin for FTA duty reduction</li>
                <li>Export permit and license applications</li>
                <li>Destination country import requirement compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Free Trade Agreements for Agricultural Exports</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Central Valley agricultural exporters can achieve <strong>duty-free or reduced tariff rates</strong> through free trade agreements. Our Visalia tariff lawyer maximizes FTA benefits for ag exports to Mexico, Canada, Japan, Korea, and other markets.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA (United States-Mexico-Canada Agreement) for ag exports</li>
                <li>Japan, Korea, and Asia-Pacific FTA strategies for agriculture</li>
                <li>EU agricultural export compliance and tariff reduction</li>
                <li>Certificate of origin preparation for food/ag products</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense for Agricultural Businesses</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP audits agricultural importers and exporters for compliance. Our Visalia tariff lawyer defends Central Valley ag businesses through <strong>Focused Assessments and penalty proceedings</strong>. We've helped agricultural clients reduce penalties through strategic prior disclosures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense for ag importers/exporters</li>
                <li>Prior Disclosure filings to minimize penalties</li>
                <li>CF-28/CF-29 response for agricultural products</li>
                <li>19 USC § 1592 penalty mitigation for food/ag businesses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Visalia */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our Visalia Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Central Valley / Tulare County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley / Tulare County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve the entire Central Valley agricultural community:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Visalia', 'Tulare', 'Hanford', 'Porterville',
                  'Exeter', 'Dinuba', 'Lindsay', 'Farmersville',
                  'Woodlake', 'Strathmore', 'Lemon Cove', 'Ivanhoe'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Fresno & San Joaquin Valley */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fresno & San Joaquin Valley</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Convenient access for San Joaquin Valley agricultural businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Fresno', 'Clovis', 'Madera', 'Sanger',
                  'Selma', 'Reedley', 'Kerman', 'Fowler',
                  'Kingsburg', 'Parlier', 'Orange Cove', 'Coalinga'
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
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
                  <li>Port of Oakland</li>
                  <li>Port of San Diego</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Agencies</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>FDA (Food and Drug Administration)</li>
                  <li>USDA (Agriculture Department)</li>
                  <li>CBP (Customs and Border Protection)</li>
                  <li>APHIS (Animal and Plant Health)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Major California Markets</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Central Valley</li>
                  <li>Los Angeles County</li>
                  <li>San Francisco Bay Area</li>
                  <li>San Diego</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visalia Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Central Valley Agricultural Exporters Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agriculture Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Visalia tariff lawyer, we understand Central Valley agriculture. We've helped <strong>fruit and nut exporters, dairy producers, fresh produce shippers</strong>, and food processors navigate FDA, USDA, tariff classification, and export compliance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Compliance Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general practice firms, we focus on <strong>international trade, customs, and export regulations</strong>. This specialization means deeper expertise in agricultural export compliance, FTA utilization, and destination country requirements.
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
                Agricultural shipments often have <strong>time-sensitive deadlines</strong>. We prioritize urgent matters including export permits, CBP detentions, and compliance emergencies affecting your ag business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Visalia & Central Valley Agriculture
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Visalia, CA and Central Valley</strong><br />
                Main Office: Calabasas, CA<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Service Area:</strong> Visalia, Tulare, Fresno, and San Joaquin Valley
              </p>
              <p className="text-text-secondary text-sm">
                <strong>Industries:</strong> Agriculture exports, food processing, dairy, produce
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Central Valley Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From SR-99:</strong> Direct access to Visalia business district</li>
                <li><strong>From Fresno:</strong> SR-99 South, approximately 40-45 minutes</li>
                <li><strong>From Tulare:</strong> SR-99 South, approximately 10 minutes</li>
                <li><strong>From Bakersfield:</strong> SR-99 North, approximately 90 minutes</li>
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
                    <p className="service-link__description">FDA/USDA export documentation</p>
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
                    <p className="service-link__description">Agricultural export compliance</p>
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
                  <a href="#los-angeles-port-customs-attorney" className="service-link">
                    <span className="service-link__title">Los Angeles & Long Beach Port</span>
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
                    <p className="service-link__description">Northern California services</p>
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
                  <a href="#resources/agriculture-export-compliance-guide" className="service-link">
                    <span className="service-link__title">Agriculture Export Guide</span>
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
            Contact our Visalia tariff lawyer and agriculture attorney team today. We'll assess your agricultural export compliance needs, explain your options, and provide a clear path forward.
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

export default VisaliaTariffLawyerPage;
