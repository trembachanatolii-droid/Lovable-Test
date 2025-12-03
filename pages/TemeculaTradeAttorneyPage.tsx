
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const TemeculaTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Temecula Trade Attorney | Temecula Valley Customs Lawyer CA',
    description: 'Temecula trade attorney & customs lawyer serving Temecula Valley wine industry & businesses. Tariff classification, wine export compliance, CBP defense. (310) 744-1328.',
    keywords: 'trade attorney temecula, customs lawyer temecula, tariff attorney temecula, international trade lawyer temecula, temecula wine export lawyer, temecula valley customs attorney, temecula tariff lawyer, wine country trade lawyer',
    canonical: 'temecula-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-temecula.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Temecula Trade Attorney & Customs Lawyer - Temecula Valley Wine & Business Law',
        description: 'Temecula trade attorney and customs lawyer specializing in Temecula Valley wine industry and businesses. Wine export compliance, tariff classification, CBP defense, and international trade law.',
        url: `${siteConfig.siteUrl}/temecula-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Temecula Trade Attorney', url: `${siteConfig.siteUrl}/temecula-trade-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Temecula trade attorney for Temecula Valley wine businesses?',
          answer: 'A Temecula-based trade attorney understands the unique regulatory challenges facing Temecula Valley wineries and wine exporters. Our firm provides specialized representation for wine export compliance, FDA/TTB requirements, tariff classification for wine and beverages, export documentation, free trade agreement utilization, and customs compliance. We serve the Temecula Valley wine country including Temecula, Murrieta, and surrounding areas.',
        },
        {
          question: 'What wine export and customs services do you offer in Temecula?',
          answer: 'Our Temecula office provides comprehensive wine and trade services including: wine export compliance and documentation, FDA food facility registration and prior notice, TTB Certificate of Label Approval (COLA), tariff classification for wine and beverages, certificates of origin and FTA utilization, CBP audit defense for wine businesses, and general import/export customs compliance for all Temecula Valley businesses.',
        },
        {
          question: 'Do you serve other Temecula Valley cities besides Temecula?',
          answer: 'Yes, from our Temecula location we serve the entire Temecula Valley wine country including Murrieta, Menifee, Lake Elsinore, Wildomar, Fallbrook, and all Southwest Riverside County and North San Diego County communities. We represent wineries, wine distributors, and all types of importers/exporters throughout the region.',
        },
        {
          question: 'How do you help wine exporters with international compliance?',
          answer: 'Our Temecula trade attorney team provides comprehensive wine export services including: destination country import requirement research, export documentation (commercial invoices, certificates of origin), FDA prior notice filing, TTB export compliance, tariff classification to minimize foreign duties, and free trade agreement utilization for duty-free wine exports. Call (310) 744-1328 for wine export assistance.',
        },
        {
          question: 'What industries do you serve from your Temecula office?',
          answer: 'From Temecula, we primarily serve the Temecula Valley wine industry including wineries, wine distributors, craft breweries, and beverage companies. We also represent all types of importers and exporters including manufacturing, technology, retail, consumer goods, and e-commerce businesses throughout Southwest Riverside County.',
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
      <section className="hero" aria-label="Temecula Trade Attorney Hero">
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
          <h1>Temecula Trade Attorney<br />Temecula Valley Customs Lawyer</h1>
          <p className="hero-subtitle">
            Temecula trade attorney and customs lawyer serving Temecula Valley wine industry and businesses. Expert wine export compliance, tariff classification, and CBP defense.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Temecula Trade Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Temecula Valley Wine Country Trade Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Temecula and Temecula Valley wine country with expert trade law services. Our firm understands the <strong>unique regulatory challenges</strong> facing wineries and wine exporters, from FDA/TTB compliance to international wine export regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Wine Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep experience with <strong>Temecula Valley wine exports</strong>. FDA/TTB compliance, wine tariff classification, and international wine shipping regulations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Compliance Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Expert representation for <strong>wine export documentation</strong>, certificates of origin, FDA/TTB requirements, and destination country compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Wine Country Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Serving <strong>Temecula Valley wineries and businesses</strong>. Convenient local access without traveling to Los Angeles or San Diego.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trade & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Wine Export & Trade Services in Temecula
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Wine Export Compliance & Documentation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Temecula trade attorney, we help Temecula Valley wineries navigate international wine export requirements. From <strong>TTB export approvals to destination country compliance</strong>, we ensure your wine shipments meet all regulatory requirements and avoid costly delays.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>TTB Certificate of Label Approval (COLA) for wine exports</li>
                <li>Wine export documentation (commercial invoice, packing list, BOL)</li>
                <li>Certificates of origin and free trade agreement utilization</li>
                <li>Destination country wine import requirement research</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA & TTB Wine Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Wine exports require <strong>FDA food facility registration and TTB compliance</strong>. Our Temecula customs lawyer handles FDA prior notice filings, facility registration, and TTB export requirements for Temecula Valley wineries.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA food facility registration (FFR) for wineries</li>
                <li>FDA prior notice filing for wine exports</li>
                <li>TTB export approval and compliance</li>
                <li>COLA (Certificate of Label Approval) assistance for wine labels</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification for Wine & Beverages</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper tariff classification is critical for wine importers and exporters. Our Temecula trade attorney ensures accurate <strong>HTS classification under Chapter 22</strong> (wine, spirits, beverages). Classification affects foreign duties, excise taxes, and trade agreement eligibility.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for wine and spirits (Chapter 22)</li>
                <li>Wine classification by alcohol content and type</li>
                <li>Binding Ruling requests for wine products</li>
                <li>Free Trade Agreement (FTA) tariff reduction for wine exports</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Free Trade Agreements for Wine Exports</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Temecula Valley wine exporters can achieve <strong>duty-free or reduced tariff rates</strong> through free trade agreements. Our Temecula trade attorney maximizes FTA benefits for wine exports to Mexico, Canada, EU, Japan, Korea, and other markets.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA (United States-Mexico-Canada Agreement) for wine exports</li>
                <li>EU wine export compliance and tariff reduction</li>
                <li>Japan, Korea, and Asia-Pacific FTA strategies for wine</li>
                <li>Certificate of origin preparation for Temecula Valley wines</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense for Wine Businesses</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP audits wine and beverage importers/exporters for compliance. Our Temecula customs lawyer defends Temecula Valley wine businesses through <strong>Focused Assessments and penalty proceedings</strong>. We help wineries reduce penalties through strategic prior disclosures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense for wine importers/exporters</li>
                <li>Prior Disclosure filings to minimize penalties</li>
                <li>CF-28/CF-29 response for wine/beverage shipments</li>
                <li>19 USC § 1592 penalty mitigation for wine businesses</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">General Import/Export Customs Services</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Beyond wine, we serve all Temecula Valley <strong>importers and exporters</strong>. From manufacturing to retail, our Temecula office provides comprehensive customs and trade law services for all industries.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Tariff classification and HTS code optimization</li>
                <li>CBP audit defense and penalty mitigation</li>
                <li>Section 301 China tariff strategies</li>
                <li>Customs seizure and detention defense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Temecula */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our Temecula Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Temecula Valley */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Temecula Valley Wine Country</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve the entire Temecula Valley wine country and business community:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Temecula', 'Murrieta', 'Menifee', 'Lake Elsinore',
                  'Wildomar', 'Canyon Lake', 'Winchester', 'French Valley'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* North San Diego & Inland Empire */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">North San Diego & Inland Empire</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Convenient access for North San Diego and Inland Empire businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Fallbrook', 'Bonsall', 'Oceanside', 'Carlsbad',
                  'Vista', 'San Marcos', 'Escondido', 'Poway',
                  'Corona', 'Norco', 'Riverside', 'Moreno Valley'
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
                  <li>Port of San Diego</li>
                  <li>Port of Oakland</li>
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
                  <li>Inland Empire</li>
                  <li>San Diego County</li>
                  <li>Los Angeles County</li>
                  <li>Orange County</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Temecula Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Temecula Valley Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Wine Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Temecula trade attorney, we understand Temecula Valley wine operations. We've helped <strong>wineries, wine distributors, and beverage exporters</strong> navigate FDA, TTB, tariff classification, and international wine export compliance.
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
            Serving Temecula & Temecula Valley Wine Country
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Temecula, CA and Temecula Valley</strong><br />
                Main Office: Calabasas, CA<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Service Area:</strong> Temecula, Murrieta, Temecula Valley wine country
              </p>
              <p className="text-text-secondary text-sm">
                <strong>Industries:</strong> Wine, craft beverages, all import/export businesses
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Temecula Valley Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From I-15:</strong> Direct access to Temecula wine country</li>
                <li><strong>From Murrieta:</strong> I-15 South, approximately 10 minutes</li>
                <li><strong>From San Diego:</strong> I-15 North, approximately 50 minutes</li>
                <li><strong>From Los Angeles:</strong> I-10 to I-15 South, approximately 90 minutes</li>
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
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Export Compliance Services</span>
                    <p className="service-link__description">Wine/food export documentation</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense & Litigation</span>
                    <p className="service-link__description">CBP audits, penalty defense</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Trade Compliance Programs</span>
                    <p className="service-link__description">Wine/beverage compliance</p>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#san-diego-trade-law-attorney" className="service-link">
                    <span className="service-link__title">San Diego</span>
                    <p className="service-link__description">Port of San Diego services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <Link to="/los-angeles-port-customs-attorney" className="service-link">
                    <span className="service-link__title">Los Angeles & Long Beach Port</span>
                    <p className="service-link__description">Port customs expertise</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Helpful Guides */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Guides</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/wine-export-compliance-guide" className="service-link">
                    <span className="service-link__title">Wine Export Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
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
                  <Link to="/resources/fta-free-trade-agreements-guide" className="service-link">
                    <span className="service-link__title">Free Trade Agreements Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/trade-law-faq" className="service-link">
                    <span className="service-link__title">FAQ Center</span>
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Temecula trade attorney and customs lawyer team today. We'll assess your wine export compliance needs or general customs matters, explain your options, and provide a clear path forward.
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

export default TemeculaTradeAttorneyPage;
