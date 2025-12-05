
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const BrentwoodTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Brentwood Trade Attorney | Agricultural Export Compliance CA',
    description: 'Brentwood trade attorney for agriculture & food processing. Export compliance, FDA regulations, USDA phytosanitary. East Bay. (310) 744-1328.',
    canonical: 'brentwood-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-brentwood.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Brentwood Trade Attorney - Agricultural Export Compliance Lawyer East Bay',
        description: 'Serving Brentwood and East Contra Costa County with expert trade compliance, agricultural export controls, and food import legal services for farming and food processing companies.',
        url: `${siteConfig.siteUrl}/brentwood-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Locations', url: `${siteConfig.siteUrl}/california-locations` },
        { name: 'Brentwood', url: `${siteConfig.siteUrl}/brentwood-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Brentwood Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance, agricultural export controls, and food import legal representation for Brentwood farming and food processing companies. Expert Brentwood trade attorney services including USDA phytosanitary certificates, FDA food import regulations, organic certification export compliance, tariff classification for fresh produce, and agricultural trade law advice California.',
        serviceType: 'Agricultural Trade Law',
        url: `${siteConfig.siteUrl}/brentwood-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="Brentwood Trade Law Hero">
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
          <h1>Brentwood Trade Attorney<br />Agricultural Export Compliance</h1>
          <p className="hero-subtitle">
            Expert trade law for farming and food processing. USDA phytosanitary certificates, FDA food import compliance, and global agricultural trade strategy for Brentwood's farming economy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Agricultural Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Brentwood Agricultural Companies Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Brentwood's Agricultural Industry
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Brentwood is the heart of <strong>California's East Bay agricultural region</strong>, producing premium cherries, corn, grapes, and walnuts. Exporting fresh produce requires <strong>USDA phytosanitary certificates, FDA compliance, and tariff engineering</strong> to access international markets profitably.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Export Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                As your Brentwood trade attorney, we provide <strong>agricultural export compliance services</strong> for farmers, packers, processors, and distributors. We handle USDA export certificates, country-specific phytosanitary requirements, and market access strategies.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Food Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                We handle <strong>FDA Food Safety Modernization Act (FSMA)</strong> compliance for food processors importing ingredients. We coordinate with FDA field offices, manage Foreign Supplier Verification Programs (FSVP), and resolve import detentions.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">East Bay Coverage</h3>
              <p className="text-text-secondary leading-relaxed">
                Serving Brentwood, Oakley, Antioch, and East Contra Costa County. We understand East Bay agricultural logistics, farming operations, and the unique trade challenges of California specialty crop producers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Agricultural Companies */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance for Brentwood Agricultural Companies
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USDA Phytosanitary Certificates & Export Permits</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Most countries require <strong>USDA phytosanitary certificates</strong> for fresh fruits and vegetables. We manage the entire certification process: orchard/field inspections, pest risk assessments, APHIS coordination, and country-specific documentation for key export markets (Japan, China, South Korea, EU, Mexico).
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>PPQ Form 577:</strong> Phytosanitary certificate application and issuance</li>
                <li><strong>Country-Specific Requirements:</strong> Japan (JAS organic), China (CIQ registration), EU (TRACES)</li>
                <li><strong>Pest-Free Certifications:</strong> Mediterranean fruit fly, codling moth, light brown apple moth</li>
                <li><strong>Organic Export Certificates:</strong> USDA NOP equivalency agreements</li>
                <li><strong>APHIS Coordination:</strong> Inspection scheduling, treatment protocols</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA Food Import Compliance (FSMA)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Food processors importing <strong>ingredients, packaging materials, or processing equipment</strong> must comply with FSMA. We manage Foreign Supplier Verification Programs (FSVP), coordinate FDA prior notice, and resolve import alerts for non-compliant shipments.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FSVP compliance for food importers (21 CFR Part 1, Subpart L)</li>
                <li>FDA Prior Notice (PN) for food shipments</li>
                <li>Import Alert screening and resolution strategies</li>
                <li>FSVP importer record-keeping and supplier verification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & Duty Drawback for Produce</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper <strong>HTS classification</strong> determines your duty rates, preferential trade agreements (USMCA), and eligibility for drawback refunds. We classify fresh produce (Chapter 7-8), processed foods (Chapter 19-21), and wine/beverages (Chapter 22).
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for fresh fruits and vegetables (Chapter 7-8)</li>
                <li>USMCA origin certification for North American trade</li>
                <li>Duty drawback for re-exported agricultural products</li>
                <li>Section 301 tariff strategies for China trade</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Organic Certification & NOP Equivalency</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Exporting <strong>organic produce</strong> requires USDA National Organic Program (NOP) certification and equivalency agreements with importing countries. We coordinate with organic certifiers, manage NOP documentation, and obtain export certificates for organic products.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA NOP certification coordination</li>
                <li>EU/Japan/Canada organic equivalency agreements</li>
                <li>NOP Export Certificate (Form COR-003-WEB)</li>
                <li>Organic integrity from farm to export container</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Country-Specific Market Access Requirements</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Each export market has unique requirements. <strong>China requires CIQ registration, Japan demands JAS organic certification, and the EU enforces TRACES documentation</strong>. We navigate country-specific regulations to secure market access for your products.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>China:</strong> CIQ facility registration, AQSIQ permits, customs clearance</li>
                <li><strong>Japan:</strong> JAS organic, plant quarantine inspections, Yakkan Shoumei</li>
                <li><strong>EU:</strong> TRACES documentation, MRL compliance, phytosanitary certificates</li>
                <li><strong>Mexico/Canada:</strong> USMCA certificates of origin, NAFTA preferences</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Wine Export Compliance & TTB Certificates</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Brentwood area wineries exporting wine must obtain <strong>TTB Certificates of Label Approval (COLA), TTB Export Certificates, and comply with destination country alcohol regulations</strong>. We manage the entire wine export compliance process.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>TTB Export Certificate of Label Approval (COLA)</li>
                <li>TTB Wine Export Certificate (Form 5100.11)</li>
                <li>EU wine import requirements and documentation</li>
                <li>China alcohol import permits and CIQ registration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Brentwood Companies Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Brentwood Agricultural Companies Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Trade Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Brentwood trade attorney, we understand <strong>farming operations, harvest cycles, cold chain logistics, and perishable cargo handling</strong>. We don't just apply generic legal templates—we customize compliance strategies to your crops and export markets.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">USDA & FDA Coordination</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We work directly with <strong>USDA APHIS, FDA field offices, and CBP agriculture specialists</strong>. Our attorneys have experience obtaining phytosanitary certificates, resolving import alerts, and managing pest interception cases.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Flat-Fee Pricing for Farmers</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee packages</strong> for phytosanitary certificate coordination, tariff classification, and export compliance programs. Transparent pricing with no surprise bills. Seasonal payment terms for agricultural businesses.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fast Turnaround for Harvest Season</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We know <strong>time is critical during harvest</strong>. Whether you need emergency phytosanitary certification or expedited customs clearance, we prioritize your timelines. Typical USDA certificate coordination: 3-5 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Brentwood Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Fruit Growers</h3>
              <p className="text-sm text-text-secondary">Cherries, peaches, apricots, grapes, strawberries</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Vegetable Farming</h3>
              <p className="text-sm text-text-secondary">Corn, tomatoes, asparagus, lettuce, peppers</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Nut Producers</h3>
              <p className="text-sm text-text-secondary">Walnuts, almonds, pistachios, processing</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Wine & Vineyards</h3>
              <p className="text-sm text-text-secondary">Wineries, wine exports, TTB compliance</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Food Processing</h3>
              <p className="text-sm text-text-secondary">Canning, drying, freezing, value-added products</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Organic Farming</h3>
              <p className="text-sm text-text-secondary">USDA NOP certified, organic exports</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Dairy Products</h3>
              <p className="text-sm text-text-secondary">Cheese, butter, dairy exports</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Agricultural Equipment</h3>
              <p className="text-sm text-text-secondary">Farm machinery, irrigation, processing equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Brentwood & East County Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Brentwood's agricultural economy, East Bay logistics networks, and Contra Costa County farming operations. We serve clients by appointment throughout the Brentwood and East County region.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Transportation Routes */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Brentwood Agricultural Transportation Routes</h3>
              <p className="text-text-secondary mb-4">Understanding East Bay freight corridors for agricultural exports:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-4</span>
                  <span>Main agricultural route — connects Brentwood farms to I-580 and Port of Oakland</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-580</span>
                  <span>Port corridor — direct access to Port of Oakland for produce exports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-160</span>
                  <span>Sacramento Delta route — connects to I-5 for northern California distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Byron Highway</span>
                  <span>Connects Brentwood to Tracy Distribution Center and I-5 corridor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Port of Oakland</span>
                  <span>Primary export gateway — 35 miles from Brentwood, refrigerated container facilities</span>
                </li>
              </ul>
            </div>

            {/* Agricultural Zones */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Brentwood Agricultural Zones & Packing Facilities</h3>
              <p className="text-text-secondary mb-4">Key farming and processing districts:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">East Brentwood</span>
                  <span>Cherry orchards, stone fruit, vineyards — Brentwood harvest season May-August</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Marsh Creek Road</span>
                  <span>Corn fields, pumpkin patches, u-pick farms — fresh market produce</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Byron Area</span>
                  <span>Wine country — boutique wineries, tasting rooms, export wineries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Oakley/Bethel Island</span>
                  <span>Delta farming — asparagus, pears, row crops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Industrial Parkway</span>
                  <span>Food processing facilities, cold storage, packing houses</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Port of Oakland */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Oakland Agricultural Export Facilities</h3>
              <p className="text-text-secondary mb-4">Managing fresh produce exports through Oakland:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Refrigerated Containers</span>
                  <span>Reefer container facilities for temperature-controlled produce shipments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">USDA Inspection</span>
                  <span>On-site APHIS inspectors for phytosanitary certification at port</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Cold Chain Logistics</span>
                  <span>Port-adjacent cold storage facilities for export staging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CBP Agriculture</span>
                  <span>CBP agriculture specialists for export documentation review</span>
                </li>
              </ul>
              <p className="text-sm text-text-secondary mt-4 italic">
                Average produce export processing time: 24-48 hours with proper documentation. We coordinate USDA inspections on-site.
              </p>
            </div>

            {/* Cities Served */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">East County Cities We Serve</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout East Contra Costa County:</p>
              <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary">
                <span>Brentwood</span>
                <span>Oakley</span>
                <span>Antioch</span>
                <span>Pittsburg</span>
                <span>Discovery Bay</span>
                <span>Bethel Island</span>
                <span>Byron</span>
                <span>Knightsen</span>
                <span>Marsh Creek</span>
              </div>
              <p className="text-sm text-text-secondary mt-4">
                <strong>Headquarters:</strong> 27001 Agoura Road, Suite 350, Calabasas, CA 91301<br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a>
              </p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Trade Services</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/food-agriculture-trade-attorney" className="service-link">
                      <span className="service-link__title">Food & Agriculture Trade Law</span>
                      <p className="service-link__description">Comprehensive ag trade services</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/regulatory-compliance-advisory" className="service-link">
                      <span className="service-link__title">FDA/USDA Compliance</span>
                      <p className="service-link__description">Food safety & import regulations</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/tariffs-duties-classification-guide" className="service-link">
                      <span className="service-link__title">Tariff Classification</span>
                      <p className="service-link__description">HTS codes for produce</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            {/* Bay Area Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Nearby Locations</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/oakland-trade-attorney" className="service-link">
                      <span className="service-link__title">Oakland Trade Attorney</span>
                      <p className="service-link__description">Port of Oakland operations</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/stockton-tariff-lawyer" className="service-link">
                      <span className="service-link__title">Stockton Tariff Lawyer</span>
                      <p className="service-link__description">Central Valley agriculture</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/fresno-agricultural-trade" className="service-link">
                      <span className="service-link__title">Fresno Agricultural Trade</span>
                      <p className="service-link__description">Valley ag export hub</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Resources</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/resources/uflpa-compliance-guide" className="service-link">
                      <span className="service-link__title">UFLPA Guide</span>
                      <p className="service-link__description">Supply chain compliance</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/trade-law-glossary" className="service-link">
                      <span className="service-link__title">Trade Law Glossary</span>
                      <p className="service-link__description">Key terms explained</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/trade-law-faq" className="service-link">
                      <span className="service-link__title">FAQ Center</span>
                      <p className="service-link__description">Common questions</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Export Your Produce to Global Markets
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let export compliance slow down your harvest season. Contact our Brentwood trade attorney team for expert agricultural export controls and food import compliance services.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">
              Schedule Free Consultation
            </Button>
            <Button href="tel:+13107441328" variant="outline">
              Call (310) 744-1328
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

export default BrentwoodTradeAttorneyPage;
