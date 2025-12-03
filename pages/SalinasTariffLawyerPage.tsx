
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SalinasTariffLawyerPage: React.FC = () => {
  useMeta({
    title: 'Salinas Tariff Lawyer | Monterey Agricultural Trade Attorney CA',
    description: 'Salinas tariff lawyer for Salinas Valley agricultural trade. Expert customs attorney for produce, wine, food imports. USDA, FDA compliance. (310) 744-1328.',
    keywords: 'tariff lawyer salinas, customs attorney salinas, monterey county trade lawyer, salinas agricultural trade attorney, salinas valley customs lawyer, food import attorney salinas',
    canonical: 'salinas-tariff-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-salinas.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Salinas Tariff Lawyer & Agricultural Trade Attorney - Monterey County CA',
        description: 'Salinas tariff lawyer serving Salinas Valley and Monterey County agricultural businesses. Expert customs legal services for produce, wine, and food trade compliance.',
        url: `${siteConfig.siteUrl}/salinas-tariff-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Salinas Tariff Lawyer', url: `${siteConfig.siteUrl}/salinas-tariff-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Salinas tariff lawyer for agricultural trade?',
          answer: 'Salinas is the "Salad Bowl of the World" and capital of America\'s most productive agricultural region. Our tariff lawyer understands the unique needs of Salinas Valley produce growers, wine producers, and food processors including USDA APHIS compliance, FDA food regulations, phytosanitary requirements, and agricultural export strategies.',
        },
        {
          question: 'What agricultural trade services do you provide?',
          answer: 'We offer specialized agricultural services including: FDA food import compliance, USDA APHIS permits and phytosanitary compliance, tariff classification for produce and wine, organic certification for imports, agricultural export compliance, country-specific export requirements, and FDA/CBP detention defense for perishable goods.',
        },
        {
          question: 'Do you handle FDA food detentions for produce imports?',
          answer: 'Yes, FDA frequently detains imported produce for pest concerns, labeling violations, or lack of certification. We prepare admissibility packages, respond to FDA Import Alerts, and defend against FDA refusal of entry. Time is critical for perishable agricultural products - we provide rapid response.',
        },
        {
          question: 'Can you assist with wine and agricultural exports from Salinas Valley?',
          answer: 'Absolutely. Monterey County exports significant wine, lettuce, strawberries, and produce. We assist with phytosanitary certificates, country-specific requirements (China, Mexico, EU, Japan), USDA export certification, organic certification for exports, and resolution of foreign customs issues for Salinas Valley agricultural products.',
        },
        {
          question: 'What industries do you serve in Salinas and Monterey County?',
          answer: 'We represent the diverse Salinas Valley agricultural community including: lettuce and leafy greens, strawberries and berries, wine and viticulture, organic produce, broccoli and vegetables, agricultural equipment, food processing and packaging, and agricultural export operations throughout Monterey, San Benito, and Santa Cruz counties.',
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
      <section className="hero" aria-label="Salinas Tariff Lawyer Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Salinas Tariff Lawyer<br />Agricultural Trade Attorney California</h1>
          <p className="hero-subtitle">
            Expert Salinas tariff lawyer serving Salinas Valley and Monterey County agricultural businesses. Specialized in produce, wine, and food trade compliance with FDA/USDA expertise.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Salinas Tariff Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Salad Bowl of the World Trade Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Salinas is the <strong>"Salad Bowl of the World"</strong>, producing most of America's lettuce, strawberries, and vegetables. Our tariff lawyer provides specialized customs legal services for Salinas Valley agricultural trade including produce, wine, and food processing with deep FDA/USDA regulatory expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep expertise in <strong>produce, wine, and food trade compliance</strong>. We understand USDA APHIS, FDA food regulations, and agricultural export requirements.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">FDA/USDA Knowledge</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized in <strong>FDA food compliance and USDA phytosanitary requirements</strong> for perishable agricultural products and export certification.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Priority response for perishable goods</strong>. Agricultural products are time-sensitive - we provide same-day action on FDA/CBP detentions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Salinas Agricultural Trade Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA Food Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                FDA regulates all food imports under FSMA. Our Salinas tariff lawyer ensures your <strong>produce and food products comply with FDA registration, labeling, and safety requirements</strong> to avoid costly detentions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA food facility registration and renewal</li>
                <li>Prior Notice filing for food imports</li>
                <li>Nutrition labeling and FDA compliance review</li>
                <li>FSVP (Foreign Supplier Verification Program) compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USDA APHIS & Phytosanitary Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USDA APHIS regulates <strong>plants, produce, and agricultural commodities</strong>. We obtain permits, navigate phytosanitary requirements, and resolve APHIS holds for Salinas Valley agricultural products.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA APHIS import permits for plants and produce</li>
                <li>Phytosanitary certificate requirements</li>
                <li>Pest and disease compliance</li>
                <li>Organic certification and NOP compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Salinas Valley exports <strong>lettuce, strawberries, wine, and vegetables</strong> worldwide. We help exporters navigate country-specific requirements, phytosanitary certificates, and international food safety standards.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Phytosanitary certificates for agricultural exports</li>
                <li>Country-specific requirements (China, Mexico, EU, Japan)</li>
                <li>USDA export certification and inspection</li>
                <li>Resolution of foreign customs holds</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Wine & Alcohol Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Monterey County is a <strong>major wine-producing region</strong>. We handle TTB Certificate of Label Approval (COLA), alcohol excise tax, state ABC licensing coordination, and customs procedures for wine.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>TTB COLA (Certificate of Label Approval)</li>
                <li>Alcohol excise tax and bonding requirements</li>
                <li>State ABC licensing support</li>
                <li>Wine import CBP release procedures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification for Agricultural Products</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Agricultural products have <strong>complex HTS classification with seasonal variations</strong>. We ensure optimal classification for produce, wine, and processed foods to minimize duty costs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for produce and agricultural products</li>
                <li>Wine and beverage tariff classification</li>
                <li>Tariff-rate quota (TRQ) management</li>
                <li>Free trade agreement qualification for agricultural goods</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA/CBP Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                FDA and CBP frequently detain imported food for <strong>labeling violations or safety concerns</strong>. For perishable produce, rapid response is critical. We prepare admissibility packages immediately.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA detention response for food products</li>
                <li>FDA Import Alert strategy and compliance</li>
                <li>CBP agricultural hold resolution</li>
                <li>Petition for release of perishable goods</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Salinas */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Salinas
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Monterey & San Benito Counties */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Monterey & San Benito Counties</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Serving Salinas Valley agricultural region:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Salinas', 'Gonzales', 'Greenfield', 'King City',
                  'Soledad', 'Chualar', 'Spreckels', 'Castroville',
                  'Monterey', 'Seaside', 'Marina', 'Carmel',
                  'Hollister', 'San Juan Bautista', 'Gilroy', 'Morgan Hill'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Santa Cruz & Central Coast */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Santa Cruz & Central Coast</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Extended service throughout Central Coast:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Watsonville', 'Santa Cruz', 'Capitola', 'Aptos',
                  'Scotts Valley', 'Live Oak', 'Soquel', 'Freedom',
                  'San Luis Obispo', 'Paso Robles', 'Atascadero', 'Templeton',
                  'Santa Maria', 'Lompoc', 'Arroyo Grande', 'Pismo Beach'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Statewide & Ports */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">California Ports & Nationwide Representation</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">California Ports</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of Oakland</li>
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
                  <li>Port of Hueneme</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Agencies</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>FDA (Food & Drug Administration)</li>
                  <li>USDA APHIS</li>
                  <li>TTB (Alcohol & Tobacco)</li>
                  <li>CBP (Customs & Border Protection)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Courts</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>U.S. Court of International Trade</li>
                  <li>U.S. Court of Appeals (Federal Circuit)</li>
                  <li>CBP Administrative Proceedings</li>
                  <li>USDA/FDA Reviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Salinas Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Salinas Valley Agribusiness Chooses Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Trade Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>agricultural trade compliance</strong>. Deep expertise in produce, wine, FDA food regulations, USDA APHIS, and phytosanitary requirements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Salinas Valley Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>Salinas Valley agricultural economy</strong> including lettuce, strawberries, wine, and vegetable production. Services tailored to regional agribusiness.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Perishable Goods Priority</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Agricultural products are time-sensitive. We provide <strong>priority response to FDA detentions and CBP holds</strong> on perishable goods. Same-day action available.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for FDA admissibility packages, USDA permits, and classification opinions. Your free consultation includes clear cost estimates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Salinas & Monterey County
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Salinas from our California offices</strong><br />
                Headquarters: 27001 Agoura Road, Suite 350<br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Agricultural Emergencies:</strong> Priority response for FDA/CBP detentions
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Central Coast Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From Salinas:</strong> 3 hours via US-101 South</li>
                <li><strong>To Port of Oakland:</strong> 2 hours via US-101 to I-880</li>
                <li><strong>From Monterey:</strong> 3 hours via US-101 South</li>
                <li><strong>From Watsonville:</strong> 3 hours via CA-1 to US-101</li>
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
                  <a href="#fda-food-compliance" className="service-link">
                    <span className="service-link__title">FDA Food Compliance</span>
                    <p className="service-link__description">Food safety & labeling</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#usda-phytosanitary" className="service-link">
                    <span className="service-link__title">USDA Phytosanitary</span>
                    <p className="service-link__description">APHIS permits & certification</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#wine-alcohol-imports" className="service-link">
                    <span className="service-link__title">Wine Import Compliance</span>
                    <p className="service-link__description">TTB & excise tax</p>
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
                  <a href="#watsonville-agricultural-attorney" className="service-link">
                    <span className="service-link__title">Watsonville Ag Attorney</span>
                    <p className="service-link__description">Strawberry capital</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#bay-area-trade-attorney" className="service-link">
                    <span className="service-link__title">Bay Area Trade Attorney</span>
                    <p className="service-link__description">Oakland & Silicon Valley</p>
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
                  <a href="#resources/fda-produce-import-guide" className="service-link">
                    <span className="service-link__title">FDA Produce Import Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/agricultural-export-guide" className="service-link">
                    <span className="service-link__title">Agricultural Export Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#tariffs-duties-classification-guide" className="service-link">
                    <span className="service-link__title">Agricultural Tariff Guide</span>
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
            Contact our Salinas tariff lawyer today. We'll assess your agricultural trade needs and provide clear guidance.
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

export default SalinasTariffLawyerPage;
