
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const CentralValleyTariffLawyerPage: React.FC = () => {
  useMeta({
    title: 'Central Valley Tariff Lawyer | Customs Attorney Fresno, Bakersfield, Stockton',
    description: 'Central Valley tariff lawyer serving Fresno, Bakersfield, Modesto, Stockton. Agricultural trade expert. CBP defense, tariff classification, USDA compliance. (310) 744-1328.',
    keywords: 'central valley tariff lawyer, fresno customs attorney, bakersfield trade lawyer, stockton tariff attorney, modesto customs lawyer, agricultural import attorney, california central valley trade compliance',
    canonical: 'central-valley-tariff-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-central-valley.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Central Valley Tariff Lawyer & Customs Attorney - Agricultural Trade Specialists',
        description: 'Central Valley tariff lawyer and customs attorney serving Fresno, Bakersfield, Modesto, Stockton. Expert agricultural trade compliance, CBP defense, and tariff classification for California\'s agricultural heartland.',
        url: `${siteConfig.siteUrl}/central-valley-tariff-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Central Valley Tariff Lawyer', url: `${siteConfig.siteUrl}/central-valley-tariff-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'What areas does a Central Valley tariff lawyer serve?',
          answer: 'Our Central Valley tariff lawyers serve the entire region including Fresno County, Kern County (Bakersfield), Stanislaus County (Modesto), San Joaquin County (Stockton), Merced, Tulare, Visalia, Madera, and all surrounding Central Valley communities. We provide legal services for agricultural importers/exporters and businesses throughout California\'s agricultural heartland.',
        },
        {
          question: 'Why choose a tariff lawyer with Central Valley agricultural expertise?',
          answer: 'The Central Valley produces 25% of the nation\'s food supply. We understand agricultural trade compliance including USDA/FDA import requirements, fresh produce regulations, Section 232 tariffs on agricultural products, and CBP agricultural inspections. Our expertise covers almonds, pistachios, wine/grapes, dairy, citrus, and all Central Valley agricultural commodities.',
        },
        {
          question: 'What agricultural trade services do you offer in Central Valley?',
          answer: 'We provide specialized agricultural trade services including: USDA/APHIS compliance, FDA food import compliance, fresh produce import permits, agricultural tariff classification, Section 301/232 tariff strategies for agricultural products, phytosanitary certificate requirements, agricultural equipment imports, and farm machinery tariff optimization.',
        },
        {
          question: 'How do you handle CBP agricultural inspections and detentions?',
          answer: 'We assist with CBP agricultural inspections at all California ports of entry. This includes USDA hold resolution, FDA import alert response, pest contamination issues, fumigation requirements, and phytosanitary compliance. We work with CBP Agriculture Specialists to expedite clearance of detained agricultural shipments.',
        },
        {
          question: 'Can you help with export compliance for Central Valley agricultural products?',
          answer: 'Yes, we assist Central Valley agricultural exporters with export compliance including: USDA export certificates, phytosanitary export documentation, destination country requirements, free trade agreement (USMCA/CPTPP) compliance for agricultural exports, organic certification compliance, and wine/alcohol export regulations.',
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
      <section className="hero" aria-label="Central Valley Tariff Lawyer Hero">
        <picture className="hero-bg">
          <img
            src="/images/hero-port-background-2.jpg"
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
          <h1>Central Valley Tariff Lawyer<br />Agricultural Trade Attorney</h1>
          <p className="hero-subtitle">
            Central Valley tariff lawyer and customs attorney serving California's agricultural heartland. Expert agricultural trade compliance, CBP defense, and USDA/FDA import regulations for Fresno, Bakersfield, Stockton, and Modesto.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact#schedule-consultation" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Central Valley Tariff Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              California's Agricultural Trade Law Experts
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Central Valley agricultural businesses and importers/exporters from Bakersfield to Stockton. We understand the unique trade compliance challenges facing California's agricultural heartland, which produces <strong>25% of the nation's food supply</strong>. Expert guidance on USDA, FDA, and CBP regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Specialized knowledge</strong> of agricultural trade including USDA/APHIS compliance, FDA food import regulations, phytosanitary requirements, and agricultural tariff classification for all Central Valley commodities.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regional Coverage</h3>
              <p className="text-text-secondary leading-relaxed">
                Complete coverage of <strong>Fresno, Bakersfield, Modesto, Stockton, Visalia, and Merced</strong>. We serve agricultural producers, food processors, equipment importers, and agribusiness throughout the Central Valley.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic access to <strong>Port of Oakland, Port of Stockton, and Port of LA/Long Beach</strong>. Rapid response to USDA/CBP agricultural holds and perishable cargo detentions.
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
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural Tariff Classification & Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Central Valley tariff lawyer, we ensure accurate HTS classification for agricultural products, farm equipment, and food imports. Agricultural classification determines <strong>duty rates, quota eligibility, and USDA/FDA requirements</strong>. We handle almonds, pistachios, wine, dairy, fresh produce, and all agricultural commodities.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Agricultural product HTS classification (Chapters 1-24, HTSUS)</li>
                <li>Farm equipment and machinery tariff optimization (Chapter 84, 87)</li>
                <li>Agricultural chemical and fertilizer classification</li>
                <li>Food processing equipment and agricultural technology classification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USDA & FDA Agricultural Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Agricultural imports require complex USDA/APHIS and FDA compliance. We handle <strong>phytosanitary certificates, import permits, FSMA compliance, and agricultural inspections</strong>. Our expertise covers fresh produce, processed foods, plants/seeds, dairy, and meat/poultry products.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA/APHIS import permit applications and compliance</li>
                <li>FDA Prior Notice, FSMA, and food facility registration</li>
                <li>Phytosanitary certificate requirements and pest risk analysis</li>
                <li>Agricultural quarantine and fumigation compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Agricultural Detention & Inspection Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP and USDA frequently detain agricultural shipments for pest contamination, labeling issues, or compliance violations. Time is critical for <strong>perishable goods</strong>. We provide rapid response to agricultural holds, USDA detention notices, and FDA import alerts.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA/APHIS detention defense and release packages</li>
                <li>FDA import alert resolution and compliance demonstration</li>
                <li>Pest contamination and fumigation requirement response</li>
                <li>Agricultural labeling and packaging compliance corrections</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 & Agricultural Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariffs and agricultural trade restrictions impact Central Valley businesses importing farm equipment, inputs, and processed foods from China. We develop <strong>tariff mitigation strategies</strong> including exclusions, country of origin planning, and supply chain restructuring.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 exclusion analysis for agricultural equipment and inputs</li>
                <li>Section 232 aluminum/steel tariff strategies for farm equipment</li>
                <li>Agricultural quota and tariff-rate quota (TRQ) compliance</li>
                <li>Free trade agreement utilization (USMCA for Mexican agricultural imports)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Wine & Alcohol Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Central Valley wine producers and importers face complex TTB (Alcohol & Tobacco Tax and Trade Bureau) and CBP compliance requirements. We handle <strong>wine import permits, labeling, and excise tax compliance</strong> for wine, beer, and spirits.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>TTB Certificate of Label Approval (COLA) and import permits</li>
                <li>Wine and alcohol tariff classification and duty optimization</li>
                <li>State-specific alcohol import compliance (ABC licensing)</li>
                <li>Wine export compliance and international market access</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Farm Equipment & Agricultural Machinery Imports</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Central Valley farms rely on imported tractors, harvesters, irrigation equipment, and agricultural technology. We optimize <strong>tariff classification for farm equipment</strong> to minimize duties and ensure EPA/CARB compliance for agricultural machinery.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Agricultural machinery HTS classification and duty minimization</li>
                <li>EPA/CARB emissions compliance for farm equipment</li>
                <li>Free trade agreement (USMCA/KORUS) utilization for equipment imports</li>
                <li>Temporary import bonds (TIB) for agricultural equipment demonstrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Across Central Valley */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Comprehensive Central Valley Coverage
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Fresno County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fresno County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Agricultural heartland and Central Valley hub:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Fresno', 'Clovis', 'Sanger', 'Reedley',
                  'Selma', 'Fowler', 'Kingsburg', 'Coalinga',
                  'Mendota', 'Firebaugh', 'Kerman', 'Huron'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Kern County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Kern County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Oil, agriculture, and southern Central Valley:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Bakersfield', 'Delano', 'Wasco', 'Shafter',
                  'Arvin', 'Ridgecrest', 'McFarland', 'Tehachapi',
                  'California City', 'Taft', 'Lamont', 'Maricopa'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Stanislaus County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Stanislaus County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Dairy capital and agricultural processing:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Modesto', 'Turlock', 'Ceres', 'Riverbank',
                  'Patterson', 'Oakdale', 'Newman', 'Waterford',
                  'Hughson', 'Denair', 'Salida', 'Empire'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* San Joaquin County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Joaquin County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of Stockton and northern Central Valley:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Stockton', 'Tracy', 'Manteca', 'Lodi',
                  'Escalon', 'Ripon', 'Lathrop', 'Mountain House'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Tulare County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tulare County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Citrus, dairy, and agricultural production:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Visalia', 'Tulare', 'Porterville', 'Dinuba',
                  'Exeter', 'Lindsay', 'Farmersville', 'Woodlake'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Merced & Madera Counties */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Merced & Madera Counties</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Agricultural diversity and food processing:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Merced', 'Los Banos', 'Atwater', 'Livingston',
                  'Madera', 'Chowchilla', 'Dos Palos', 'Gustine'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Ports & Agricultural Industries */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Central Valley Ports & Agricultural Industries</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Port Access</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of Stockton</li>
                  <li>Port of Oakland</li>
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Key Agricultural Commodities</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Almonds & Tree Nuts</li>
                  <li>Grapes & Wine</li>
                  <li>Dairy Products</li>
                  <li>Citrus & Fresh Produce</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Trade Compliance Areas</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>USDA/FDA Compliance</li>
                  <li>Agricultural Equipment</li>
                  <li>Food Processing</li>
                  <li>Farm Inputs & Chemicals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Central Valley Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Central Valley Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Trade Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Central Valley tariff lawyer, we understand agricultural trade compliance better than general practice firms. We know USDA/APHIS regulations, FDA food import requirements, agricultural tariff classification, and the unique challenges facing California's agricultural exporters and importers. Our expertise covers all Central Valley commodities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Perishable Cargo Priority</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Agricultural shipments can't wait. We prioritize <strong>perishable cargo detentions</strong> and USDA/CBP holds with same-day response. Our team understands that delayed fresh produce, dairy, or refrigerated goods cost thousands per day. We work urgently to resolve agricultural detention issues.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regional & National Practice</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We combine Central Valley regional knowledge with nationwide practice before federal agencies. We appear at USDA offices, FDA facilities, CBP ports, the Court of International Trade, and Department of Commerce. Local accessibility with Washington D.C. regulatory expertise.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Agricultural Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many agricultural trade services including USDA permit applications, FDA compliance reviews, agricultural detention response, and tariff classification analysis. Clear estimates during your free consultation. No surprise legal bills for agricultural businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Central Valley from Our California Office
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Consultations:</strong> In-person, phone, and video available
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Access from Central Valley</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From Fresno:</strong> CA-99 South to I-5 South to CA-126 West to 101 North (3-3.5 hours)</li>
                <li><strong>From Bakersfield:</strong> I-5 North to CA-126 West to 101 North (2-2.5 hours)</li>
                <li><strong>From Modesto/Stockton:</strong> I-5 South to CA-152 West to 101 South (3-3.5 hours)</li>
                <li><strong>Virtual Consultations:</strong> Available for all Central Valley clients</li>
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

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/customs-defense" className="service-link">
                    <span className="service-link__title">Agricultural Compliance</span>
                    <p className="service-link__description">USDA/FDA import compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Farm Equipment Imports</span>
                    <p className="service-link__description">Machinery tariff optimization</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Wine & TTB Compliance</span>
                    <p className="service-link__description">Alcohol import/export</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Port Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/port-of-stockton-trade" className="service-link">
                    <span className="service-link__title">Port of Stockton</span>
                    <p className="service-link__description">Central Valley port access</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/port-of-oakland-tariff" className="service-link">
                    <span className="service-link__title">Port of Oakland</span>
                    <p className="service-link__description">Northern California imports</p>
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
                  <Link to="/agricultural-import-guide" className="service-link">
                    <span className="service-link__title">Agricultural Import Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/usda-compliance-guide" className="service-link">
                    <span className="service-link__title">USDA Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/fda-food-import-guide" className="service-link">
                    <span className="service-link__title">FDA Food Import Guide</span>
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
            Contact our Central Valley tariff lawyer and customs attorney team today. We'll assess your agricultural trade compliance needs and provide expert guidance for your import/export business.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact#schedule-consultation" variant="solid">
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

export default CentralValleyTariffLawyerPage;
