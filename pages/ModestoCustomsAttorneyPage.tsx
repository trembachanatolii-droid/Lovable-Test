
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const ModestoCustomsAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Modesto Customs Attorney | Agricultural Trade Lawyer CA',
    description: 'Modesto customs attorney specializing in agricultural trade & food imports. Expert tariff lawyer for Central Valley agribusiness. FDA, USDA, CBP compliance. (310) 744-1328.',
    keywords: 'customs attorney modesto, tariff lawyer modesto, agricultural trade attorney, food import lawyer modesto, central valley customs attorney, modesto international trade lawyer, usda compliance attorney, fda import lawyer modesto',
    canonical: 'modesto-customs-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-modesto.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Modesto Customs Attorney & Agricultural Trade Lawyer - Central Valley CA',
        description: 'Modesto customs attorney specializing in agricultural imports and food trade. Expert legal services for Central Valley agribusiness including tariff classification, USDA/FDA compliance, and CBP defense.',
        url: `${siteConfig.siteUrl}/modesto-customs-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Modesto Customs Attorney', url: `${siteConfig.siteUrl}/modesto-customs-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Modesto customs attorney for agricultural trade?',
          answer: 'Modesto is the heart of California\'s Central Valley agricultural region. Our customs attorney understands the unique needs of agribusiness importers and exporters including produce, nuts, wine, dairy, and processed foods. We provide specialized expertise in USDA APHIS compliance, FDA food facility registration, tariff classification for agricultural products, and sanitary/phytosanitary (SPS) requirements.',
        },
        {
          question: 'What agricultural trade services do you provide?',
          answer: 'We offer comprehensive agricultural trade legal services including: FDA food import compliance, USDA APHIS permits and certifications, tariff classification for agricultural products, SPS (sanitary/phytosanitary) compliance, organic certification for imports, wine and alcohol import compliance, country of origin marking for food, and CBP agricultural detention defense.',
        },
        {
          question: 'Do you handle FDA food detentions and import alerts?',
          answer: 'Yes, FDA frequently detains imported food products for labeling violations, contamination concerns, or lack of proper certification. Our Modesto customs attorney prepares admissibility packages, responds to FDA Import Alerts, obtains Prior Notice corrections, and defends against FDA refusal of entry. Time is critical for perishable agricultural goods.',
        },
        {
          question: 'Can you help Central Valley exporters with international trade compliance?',
          answer: 'Absolutely. Central Valley is a major agricultural exporter. We assist with export licensing, phytosanitary certificates, country-specific requirements (e.g., China, Mexico, EU), USDA export certification, FSMA compliance for food safety, and resolution of foreign customs issues. We help you access international markets compliantly.',
        },
        {
          question: 'What agricultural industries do you serve in Modesto and Central Valley?',
          answer: 'We represent the diverse Central Valley agribusiness community including: wine and viticulture, nuts (almonds, walnuts, pistachios), dairy and cheese, fruits and vegetables, processed foods, livestock and meat products, organic agriculture, and agricultural equipment. Our expertise covers the full farm-to-table supply chain.',
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
      <section className="hero" aria-label="Modesto Customs Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Modesto Customs Attorney<br />Agricultural Trade Lawyer California</h1>
          <p className="hero-subtitle">
            Expert Modesto customs attorney serving Central Valley agribusiness. Specialized in agricultural trade compliance, FDA/USDA regulations, and food import/export law.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Modesto Customs Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Central Valley Agricultural Trade Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Modesto sits in the heart of <strong>California's Central Valley</strong>, the nation's most productive agricultural region. Our customs attorney provides specialized legal services for agricultural importers and exporters, understanding the unique regulatory challenges of food and agricultural trade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Specialized expertise</strong> in agricultural trade including produce, nuts, wine, dairy, and processed foods. We understand USDA, FDA, and SPS requirements.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Convenient location serving <strong>Stanislaus, San Joaquin, Merced, and Fresno Counties</strong>. We understand the local agribusiness community and its import/export needs.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">FDA/USDA Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep knowledge of <strong>FDA food regulations and USDA APHIS requirements</strong>. We navigate complex agricultural compliance including organic certification and FSMA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Agricultural Trade & Customs Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA Food Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The FDA regulates all food imports under FSMA (Food Safety Modernization Act). Our Modesto customs attorney ensures your <strong>agricultural products comply with FDA labeling, registration, and safety requirements</strong> to avoid costly detentions and refusals.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA food facility registration and renewal</li>
                <li>Prior Notice filing for food imports</li>
                <li>Nutrition labeling and FDA compliance review</li>
                <li>FSVP (Foreign Supplier Verification Program) compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USDA APHIS Permits & Agricultural Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USDA Animal and Plant Health Inspection Service (APHIS) regulates <strong>plants, seeds, animal products, and agricultural commodities</strong>. We obtain permits, navigate phytosanitary requirements, and resolve APHIS holds.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA APHIS import permits for plants/animals</li>
                <li>Phytosanitary certificate requirements</li>
                <li>Lacey Act compliance for plant/wood products</li>
                <li>Organic certification and NOP compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification for Agricultural Products</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Agricultural products have complex HTS classification with <strong>significant duty variations</strong>. Fresh produce may enter duty-free while processed goods face 10%+ rates. We optimize your classification for minimum duty burden.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for produce, nuts, and processed foods</li>
                <li>Free trade agreement qualification (USMCA, Chile, Peru)</li>
                <li>Tariff-rate quota (TRQ) management for agricultural goods</li>
                <li>Binding Ruling requests for agricultural products</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Wine & Alcohol Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Central Valley is a major wine producer and importer. Alcohol imports require <strong>TTB approval, labeling compliance, and special CBP procedures</strong>. We handle the unique regulatory requirements for wine, beer, and spirits.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>TTB Certificate of Label Approval (COLA)</li>
                <li>Alcohol excise tax and bonding requirements</li>
                <li>State ABC licensing support</li>
                <li>CBP release procedures for alcoholic beverages</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Central Valley exports billions in agricultural products annually. We help exporters navigate <strong>foreign country requirements, phytosanitary certificates, and international food safety standards</strong> to access global markets.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Phytosanitary certificates for agricultural exports</li>
                <li>Country-specific requirements (China, Mexico, EU, Japan)</li>
                <li>USDA export certification and inspection</li>
                <li>Resolution of foreign customs holds and detentions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA/CBP Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                FDA and CBP frequently detain imported food for <strong>labeling violations, safety concerns, or lack of certification</strong>. For perishable goods, rapid response is critical. We prepare admissibility packages and defend your imports.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA detention response and admissibility packages</li>
                <li>FDA Import Alert strategy and compliance</li>
                <li>CBP agricultural hold resolution</li>
                <li>Petition for release of perishable goods</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Modesto */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Modesto
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Central Valley - North */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley - North</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Serving Northern Central Valley agribusiness:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Modesto', 'Turlock', 'Ceres', 'Patterson',
                  'Riverbank', 'Oakdale', 'Tracy', 'Manteca',
                  'Lathrop', 'Stockton', 'Lodi', 'Galt',
                  'Merced', 'Atwater', 'Los Banos', 'Madera'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Central Valley - South */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley - South</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Serving Southern Central Valley and agricultural regions:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Fresno', 'Clovis', 'Visalia', 'Tulare',
                  'Hanford', 'Porterville', 'Delano', 'Bakersfield',
                  'Selma', 'Reedley', 'Dinuba', 'Kingsburg',
                  'Coalinga', 'Chowchilla', 'Mariposa', 'Oakhurst'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Statewide & Agricultural Ports */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">California Ports & Nationwide Representation</h3>
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
                  <li>USDA/FDA Administrative Reviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Modesto Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Central Valley Agribusiness Chooses Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Trade Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general customs attorneys, we <strong>specialize in agricultural trade</strong>. This focus gives us deep expertise in FDA food regulations, USDA APHIS requirements, phytosanitary compliance, and the unique challenges of perishable goods.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand the <strong>Central Valley agricultural economy</strong> including wine production, nut cultivation, dairy operations, and fresh produce. Our services are tailored to the region's agribusiness community.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response for Perishables</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Agricultural goods are time-sensitive. We provide <strong>priority response</strong> to FDA detentions and CBP holds on perishable products. Same-day action on urgent agricultural matters.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for FDA admissibility packages, USDA permit applications, and tariff classification opinions. Your free consultation includes a clear cost estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Modesto & Central Valley
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Modesto from our California offices</strong><br />
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
              <h4 className="font-bold text-primary-navy mb-3">Central Valley Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From Modesto:</strong> Convenient access via CA-99 and I-5</li>
                <li><strong>From Fresno:</strong> 1.5 hours via CA-99 North</li>
                <li><strong>From Stockton:</strong> 30 minutes via CA-99 South</li>
                <li><strong>Port of Oakland:</strong> 90 minutes via I-580 West</li>
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
                  <a href="#fda-food-import-compliance" className="service-link">
                    <span className="service-link__title">FDA Food Import Compliance</span>
                    <p className="service-link__description">Food safety & labeling</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#usda-agricultural-compliance" className="service-link">
                    <span className="service-link__title">USDA Agricultural Compliance</span>
                    <p className="service-link__description">APHIS permits & certification</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#tariffs-duties-classification-guide" className="service-link">
                    <span className="service-link__title">Tariff Classification</span>
                    <p className="service-link__description">HTS optimization for agriculture</p>
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
                  <a href="#fresno-agricultural-trade-attorney" className="service-link">
                    <span className="service-link__title">Fresno Trade Attorney</span>
                    <p className="service-link__description">Central Valley South</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#bay-area-trade-law-attorney" className="service-link">
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
                  <a href="#resources/fda-food-import-guide" className="service-link">
                    <span className="service-link__title">FDA Food Import Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/usda-aphis-compliance" className="service-link">
                    <span className="service-link__title">USDA APHIS Compliance</span>
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
            Contact our Modesto customs attorney and agricultural trade team today. We'll assess your food and ag import/export needs and provide clear guidance.
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

export default ModestoCustomsAttorneyPage;
