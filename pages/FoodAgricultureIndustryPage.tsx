import React, { lazy, Suspense } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const FoodAgricultureIndustryPage: React.FC = () => {
  useMeta({
    title: 'Food Import Attorney CA | Agriculture Trade Lawyer | FDA',
    description: 'California food import attorney & agricultural trade lawyer. FDA compliance, USDA regulations, food safety, HTS classification & produce import compliance. Expert for food importers & agricultural producers. Call 631-746-8290.',
    canonical: 'food-agriculture-trade-attorney',
    schema: [
      generateWebPageSchema({
        title: 'Food & Agriculture Industry Trade Law Services',
        description: 'Specialized international trade law services for California food and agricultural companies. Expert guidance on FDA compliance, USDA regulations, food safety, and agricultural trade regulations.',
        url: 'food-agriculture-trade-attorney',
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: '' },
        { name: 'Industries', url: 'food-agriculture-trade-attorney' },
        { name: 'Food & Agriculture', url: 'food-agriculture-trade-attorney' },
      ]),
      generateServiceSchema({
        name: 'Food & Agriculture Trade Law Services',
        description: 'Comprehensive trade law services for food and agricultural companies including FDA compliance, USDA coordination, food safety, classification expertise, and regulatory strategies.',
        serviceType: 'Legal Services',
      }),
    ],
  });

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="Food Agriculture Trade Law Hero">
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
          <h1>California Trade Law Attorney for<br />Food & Agricultural Companies</h1>
          <p className="hero-subtitle">
            Specialized compliance for food importers, agricultural producers, beverage companies, and specialty food businesses navigating FDA, USDA, and customs regulations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Schedule FDA/USDA Consultation</a>
            <a href="tel:+16317468290" className="hero-cta-outline">Call (631) 746-8290</a>
          </div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Unique Trade Compliance Challenges for Food & Agricultural Companies
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Food imports face the most complex regulatory landscape of any industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Multi-Agency Jurisdiction</h3>
              <p className="text-text-secondary leading-relaxed">
                Food imports require coordination with multiple federal agencies: FDA (food safety, labeling), USDA (meat, poultry, plants), EPA (pesticides), TTB (alcohol), and CBP (customs). Each has distinct requirements, timelines, and enforcement approaches.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">FSMA Compliance Requirements</h3>
              <p className="text-text-secondary leading-relaxed">
                Food Safety Modernization Act (FSMA) imposes extensive requirements: Foreign Supplier Verification Programs (FSVP), Preventive Controls, Intentional Adulteration prevention, and import certifications. Non-compliance results in import refusals and FDA Warning Letters.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Perishability & Time Sensitivity</h3>
              <p className="text-text-secondary leading-relaxed">
                Fresh produce, meat, dairy, and other perishable foods cannot tolerate FDA holds or CBP examinations. Delays result in spoilage, total cargo loss, and supply chain disruptions. Proactive compliance is essential.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Labeling & Misbranding Risk</h3>
              <p className="text-text-secondary leading-relaxed">
                FDA strictly enforces labeling requirements: nutrition facts, ingredient statements, allergen declarations, country of origin, and health claims. Misbranded products are refused entry. Re-labeling at port is costly and time-consuming.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Product Registration & Prior Notice</h3>
              <p className="text-text-secondary leading-relaxed">
                Food facilities must register with FDA. All food shipments require Prior Notice to FDA before arrival. Lactoferrin, acidified foods, and low-acid canned foods require additional registrations. Missing registrations cause automatic refusal.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Phytosanitary & USDA Requirements</h3>
              <p className="text-text-secondary leading-relaxed">
                Fresh fruits, vegetables, plants, and wood products require USDA permits and phytosanitary certificates. Many products face country-specific restrictions due to pest or disease concerns. USDA inspection delays are common.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FDA/USDA Compliance Alert */}
      <section className="py-12 px-4 bg-blue-50 border-y-4 border-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              COMPLIANCE ALERT
            </div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              California Food Importers: Enhanced FDA Enforcement Under FSMA
            </h2>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-4 text-center">
              <strong>FDA has significantly increased food import enforcement.</strong> The Foreign Supplier Verification Program (FSVP) is now a primary focus of FDA inspections and import screening. California ports see heightened scrutiny.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-bold text-blue-900 mb-3">What FDA Is Targeting:</h3>
                  <ul className="space-y-2 text-gray-700 list-none">
                    <li>Missing or inadequate FSVP programs</li>
                    <li>Lack of foreign supplier approval documentation</li>
                    <li>Insufficient hazard analysis for imported foods</li>
                    <li>Failure to verify supplier preventive controls</li>
                    <li>Misbranded products (labeling violations)</li>
                    <li>Unapproved health claims or supplement ingredients</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-blue-900 mb-3">What Food Importers Must Do:</h3>
                  <ul className="space-y-2 text-gray-700 list-none">
                    <li>Develop and document comprehensive FSVP</li>
                    <li>Conduct hazard analysis for each imported food</li>
                    <li>Verify foreign suppliers have preventive controls</li>
                    <li>Perform or obtain supplier audits/certifications</li>
                    <li>Maintain detailed FSVP records (2+ years)</li>
                    <li>Ensure labeling complies with FDA regulations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-600">
              <p className="text-gray-700">
                <strong>Our FDA Compliance Approach:</strong> We provide comprehensive FDA compliance guidance for California food importers, helping secure release of detained cargo and achieve FDA admissibility. Our FSVP programs are designed to prevent compliance issues before they occur.
              </p>
            </div>
          </div>
        </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Specialized Services for Food & Agricultural Companies
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA Compliance & FSVP</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Foreign Supplier Verification Program (FSVP) development, hazard analysis for imported foods, and foreign supplier approval. FDA facility registration, Prior Notice filing protocols, and FSMA compliance training.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Foreign Supplier Verification Program (FSVP) development</li>
                <li>Hazard analysis for imported foods</li>
                <li>Foreign supplier approval and verification</li>
                <li>Preventive controls consultation</li>
                <li>FDA facility registration</li>
                <li>Prior Notice filing protocols</li>
                <li>FSMA compliance training</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Food Labeling Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Nutrition Facts Panel review and approval, ingredient statement compliance, and allergen declaration (FALCPA). Health and nutrient content claims review, country of origin labeling, and organic certification coordination.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Nutrition Facts Panel review and approval</li>
                <li>Ingredient statement compliance</li>
                <li>Allergen declaration (FALCPA compliance)</li>
                <li>Health and nutrient content claims review</li>
                <li>Country of origin labeling (COOL)</li>
                <li>Organic certification coordination</li>
                <li>Bilingual labeling (English/Spanish)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USDA & Phytosanitary</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USDA import permit applications, phytosanitary certificate coordination, and APHIS compliance for plants/produce. FSIS requirements for meat/poultry, Lacey Act compliance, and wood packaging material (ISPM-15).
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA import permit applications</li>
                <li>Phytosanitary certificate coordination</li>
                <li>APHIS compliance for plants/produce</li>
                <li>FSIS requirements for meat/poultry</li>
                <li>Lacey Act compliance (plants)</li>
                <li>Wood packaging material (ISPM-15)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA Refusal & Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                FDA refusal response and appeals, detention release strategies, and admissibility review. Re-conditioning and relabeling coordination, reconditioning under FDA supervision, and Import Alert removal strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA refusal response and appeals</li>
                <li>Detention release strategies</li>
                <li>Admissibility review and evidence submission</li>
                <li>Re-conditioning and relabeling coordination</li>
                <li>Reconditioning under FDA supervision</li>
                <li>Voluntary destruction coordination</li>
                <li>Import Alert removal strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Food Classification & Duties</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                HTS classification for food products, agricultural commodity determinations, and binding ruling requests. Duty optimization strategies, FTA qualification for produce and processed foods, and first sale valuation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for food products</li>
                <li>Agricultural commodity determinations</li>
                <li>Binding ruling requests (CBP)</li>
                <li>Duty optimization strategies</li>
                <li>FTA qualification (produce, processed foods)</li>
                <li>First sale valuation for food imports</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Alcohol & Beverage (TTB)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                TTB import permit applications (FAA Act), Certificate of Label Approval (COLA), and alcohol import compliance. State alcohol licensing coordination, excise tax compliance, and formula approval for flavored beverages.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>TTB import permit applications (FAA Act)</li>
                <li>Certificate of Label Approval (COLA)</li>
                <li>Alcohol import compliance (wine, beer, spirits)</li>
                <li>State alcohol licensing coordination</li>
                <li>Excise tax compliance</li>
                <li>Formula approval for flavored beverages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product-Specific Guidance */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Product Category Compliance Guidance
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Fresh Produce (Fruits & Vegetables)</h3>
              <p className="text-gray-700 mb-2">
                <strong>FDA Requirements:</strong> Prior Notice required. Subject to FSVP if processed (cut, dried). Organic certification if labeled organic. Country of origin marking required (COOL).
              </p>
              <p className="text-gray-700 mb-2">
                <strong>USDA Requirements:</strong> Phytosanitary certificates for most imports. Many products restricted by country due to pests (e.g., Mexican avocados, Chinese apples). APHIS inspection at port.
              </p>
              <p className="text-gray-700">
                <strong>Common Issues:</strong> Detention for pesticide residues, mold, insect infestation. Timing critical due to perishability. Pre-clearance strategies essential.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Meat, Poultry & Seafood</h3>
              <p className="text-gray-700 mb-2">
                <strong>USDA FSIS:</strong> Meat and poultry from foreign establishments approved by USDA. Continuous inspection required. Strict food safety standards. Many countries ineligible.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>FDA (Seafood):</strong> Seafood subject to FDA HACCP requirements. FSVP required. Country of origin labeling. Special rules for certain species (e.g., pufferfish prohibited).
              </p>
              <p className="text-gray-700">
                <strong>Classification:</strong> Meat/poultry (Chapter 2, 16) often duty-free but strict quota restrictions exist. Seafood (Chapter 3) varies 0% to 15% duty.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Dairy Products</h3>
              <p className="text-gray-700 mb-2">
                <strong>FDA Requirements:</strong> Grade A pasteurized milk requires IMS permit. Cheese subject to Standard of Identity rules. FSVP required for all dairy imports.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Tariff Rate Quotas:</strong> Most dairy products subject to TRQs with high over-quota duties (often 100%+). Within-quota allocation managed by USDA license.
              </p>
              <p className="text-gray-700">
                <strong>Strategy:</strong> Careful classification can reduce duty burden. Some dairy products qualify for FTA benefits (USMCA). License application timing critical.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Wine, Beer & Spirits</h3>
              <p className="text-gray-700 mb-2">
                <strong>TTB Requirements:</strong> Importer must hold FAA Act Basic Permit. Certificate of Label Approval (COLA) required for each product. Formula approval for flavored beverages.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Excise Taxes:</strong> Federal excise taxes collected by TTB ($1.07-$13.50/gallon depending on alcohol type/content). State excise taxes vary.
              </p>
              <p className="text-gray-700">
                <strong>Classification:</strong> Wine (HTS 2204) subject to valuation rules and country-specific duty rates. Spirits (2208) often over $2/liter duty plus excise tax.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Dietary Supplements</h3>
              <p className="text-gray-700 mb-2">
                <strong>FDA Requirements:</strong> Strict regulation under DSHEA. New Dietary Ingredient (NDI) notification required for novel ingredients. cGMP compliance mandatory. Structure/function claims must be substantiated.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>High Detention Risk:</strong> Supplements are among the most frequently detained food products. Common issues: undeclared ingredients, contamination, unapproved health claims, misbranding.
              </p>
              <p className="text-gray-700">
                <strong>Our Approach:</strong> Pre-import labeling review. FSVP with supplement-specific hazard analysis. Supplier verification of ingredient purity and identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Food & Agricultural Companies Choose Trembach Law
          </h2>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary-navy mb-3">California Agricultural Expertise</h3>
                <p className="text-gray-700">
                  Deep understanding of California's agricultural industry and food import community. Experience with Central Valley produce, wine country, and specialty food sectors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary-navy mb-3">FDA Detention Defense Excellence</h3>
                <p className="text-gray-700">
                  Experienced representation for FDA refusals and food cargo detentions. Proven strategies for overturning FDA refusals and securing release of detained food products.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary-navy mb-3">Rapid Response for Perishable Goods</h3>
                <p className="text-gray-700">
                  24/7 availability for time-sensitive food detentions. Fast turnaround on FDA refusal responses, admissibility packages, and FSVP development.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary-navy mb-3">Multi-Agency Coordination</h3>
                <p className="text-gray-700">
                  Experience coordinating with FDA, USDA FSIS, USDA APHIS, EPA, TTB, and CBP. Navigate complex inter-agency requirements efficiently.
                </p>
              </div>
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

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Legal Services</h3>
              <ul className="space-y-3">
                <li>
                  <div className="service-link-item">
                    <a href="#regulatory-compliance-advisory" className="service-link">
                      <span className="service-link__title">FDA/USDA Compliance</span>
                      <p className="service-link__description">Food safety & FSMA programs</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#customs-defense-litigation" className="service-link">
                      <span className="service-link__title">FDA Detention Defense</span>
                      <p className="service-link__description">Refusal response & release</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#tariffs-duties-classification-guide" className="service-link">
                      <span className="service-link__title">Food Classification</span>
                      <p className="service-link__description">HTS & duty optimization</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#practice-areas" className="service-link">
                      <span className="service-link__title">All Practice Areas</span>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* California Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Serving Agricultural Regions</h3>
              <ul className="space-y-3">
                <li>
                  <div className="service-link-item">
                    <a href="#bay-area-trade-law-attorney" className="service-link">
                      <span className="service-link__title">San Francisco Bay Area</span>
                      <p className="service-link__description">Wine country & specialty foods</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#los-angeles-port-customs-attorney" className="service-link">
                      <span className="service-link__title">Los Angeles & Long Beach Port</span>
                      <p className="service-link__description">Fresh produce imports</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Other Industries */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Other Industries</h3>
              <ul className="space-y-3">
                <li>
                  <div className="service-link-item">
                    <a href="#technology-electronics-trade-attorney" className="service-link">
                      <span className="service-link__title">Technology & Electronics</span>
                      <p className="service-link__description">AgTech & food processing equipment</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#apparel-textiles-trade-attorney" className="service-link">
                      <span className="service-link__title">Apparel & Textiles</span>
                      <p className="service-link__description">Natural fibers & agricultural textiles</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Helpful Guides for Food Companies */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-primary-navy mb-8 text-center font-garamond">
              Helpful Guides for Food Companies
            </h3>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-12"></div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
                <h4 className="text-xl font-bold text-primary-navy mb-4 font-garamond">FDA Resources</h4>
                <div className="space-y-0">
                  <div className="service-link-item">
                    <a href="#article/california-food-import-fda-usda-compliance" className="service-link">
                      <span className="service-link__title">FDA Import Guide</span>
                      <p className="service-link__description">FDA compliance basics</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="service-link-item">
                    <a href="#regulatory-compliance-advisory" className="service-link">
                      <span className="service-link__title">Compliance Services</span>
                      <p className="service-link__description">Regulatory guidance</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
                <h4 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Trade Guides</h4>
                <div className="space-y-0">
                  <div className="service-link-item">
                    <a href="#tariffs-duties-classification-guide" className="service-link">
                      <span className="service-link__title">Tariff Classification Guide</span>
                      <p className="service-link__description">HTS classification best practices</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="service-link-item">
                    <a href="#resources/section-301-tariffs-guide" className="service-link">
                      <span className="service-link__title">Section 301 Tariffs</span>
                      <p className="service-link__description">China tariff strategies</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
                <h4 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Learn More</h4>
                <div className="space-y-0">
                  <div className="service-link-item">
                    <a href="#trade-law-faq" className="service-link">
                      <span className="service-link__title">FAQ Center</span>
                      <p className="service-link__description">Common food import questions</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="service-link-item">
                    <a href="#schedule-consultation" className="service-link">
                      <span className="service-link__title">Schedule Consultation</span>
                      <p className="service-link__description">Get personalized guidance</p>
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
        </div>
      </section>

      {/* California Agricultural Region Local Knowledge */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Deep California Agricultural Region Local Knowledge
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              On-the-ground expertise serving agricultural producers and food importers throughout the Central Valley, Napa-Sonoma wine country, and California's farming communities
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Central Valley Agriculture */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary-navy mb-4">Central Valley Agricultural Regions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary-teal mr-2 font-bold">•</span>
                    <div>
                      <strong>Sacramento Valley:</strong> Rice production, tomato processing, nut orchards (almonds, walnuts)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-teal mr-2 font-bold">•</span>
                    <div>
                      <strong>San Joaquin Valley:</strong> Stone fruits, table grapes, citrus, dairy operations, vegetable production
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-teal mr-2 font-bold">•</span>
                    <div>
                      <strong>Salinas Valley:</strong> "Salad Bowl of the World" - lettuce, spinach, strawberries, broccoli
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-teal mr-2 font-bold">•</span>
                    <div>
                      <strong>Imperial Valley:</strong> Winter vegetables, alfalfa, dates, border agricultural trade
                    </div>
                  </li>
                </ul>
              </div>

              {/* Wine & Specialty Foods */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary-navy mb-4">Wine Country & Specialty Food Regions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary-teal mr-2 font-bold">•</span>
                    <div>
                      <strong>Napa Valley:</strong> Premium wine production, wine import/export compliance, TTB licensing
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-teal mr-2 font-bold">•</span>
                    <div>
                      <strong>Sonoma County:</strong> Sustainable wineries, artisan cheese, specialty food producers
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-teal mr-2 font-bold">•</span>
                    <div>
                      <strong>Paso Robles:</strong> Growing wine region, olive oil production, specialty crops
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-teal mr-2 font-bold">•</span>
                    <div>
                      <strong>Temecula Valley:</strong> Southern California wine country, citrus groves, avocado farms
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Food Import Infrastructure */}
          <div className="bg-primary-navy/5 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-primary-navy mb-4 text-center">California Food Import & Agricultural Infrastructure</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-primary-navy mb-2">Ports of Entry</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Port of LA/LB - refrigerated cargo</li>
                  <li>Port of Oakland - produce imports</li>
                  <li>San Diego Port - Mexico produce</li>
                  <li>Calexico/Otay Mesa - USDA inspection</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary-navy mb-2">Cold Chain & Logistics</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Los Angeles cold storage facilities</li>
                  <li>Salinas Valley packing houses</li>
                  <li>Fresno agricultural distribution</li>
                  <li>San Diego produce terminals</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary-navy mb-2">FDA/USDA Facilities</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>LA FDA District Office</li>
                  <li>Oakland FDA import operations</li>
                  <li>USDA APHIS inspection stations</li>
                  <li>California Dept of Food & Ag</li>
                </ul>
              </div>
            </div>
          </div>

          {/* California Agricultural Cities Served */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary-navy mb-4 text-center">California Agricultural Cities We Serve</h3>
            <p className="text-center text-gray-600 mb-4">Available by appointment throughout California's agricultural regions</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-center text-sm">
              {[
                'Fresno', 'Bakersfield', 'Modesto', 'Stockton', 'Sacramento', 'Salinas',
                'Napa', 'Sonoma', 'Santa Rosa', 'Paso Robles', 'San Luis Obispo', 'Monterey',
                'Los Angeles', 'Long Beach', 'San Diego', 'Temecula', 'Riverside', 'Oxnard',
                'Ventura', 'Santa Barbara', 'Watsonville', 'Gilroy', 'Calabasas', 'El Centro'
              ].map((city) => (
                <span key={city} className="bg-gray-100 rounded px-3 py-2 text-gray-700">{city}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Ensure FDA & USDA Compliance for Your Food Imports
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Schedule a consultation with California's leading trade law attorney for food and agricultural companies.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">
              Schedule FDA/USDA Consultation
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

export default FoodAgricultureIndustryPage;
