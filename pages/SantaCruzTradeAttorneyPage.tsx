import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SantaCruzTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Santa Cruz Trade Attorney | Agriculture Export & Seafood Trade CA',
    description: 'Santa Cruz trade attorney for agriculture exporters and seafood traders. Santa Cruz County produce, USDA compliance, maritime trade. Central Coast. (310) 744-1328.',
    canonical: 'santa-cruz-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-santa-cruz.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Santa Cruz Trade Attorney - Agriculture & Seafood Trade Compliance Lawyer',
        description: 'Serving Santa Cruz with expert agriculture export, seafood trade compliance, and maritime trade legal services for Central Coast businesses.',
        url: `${siteConfig.siteUrl}/santa-cruz-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Local Offices', url: `${siteConfig.siteUrl}/local-offices` },
        { name: 'Santa Cruz', url: `${siteConfig.siteUrl}/santa-cruz-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Santa Cruz Trade Compliance Legal Services',
        description: 'Comprehensive agriculture export and seafood trade legal representation for Santa Cruz businesses. Expert services including Santa Cruz County produce exports, USDA phytosanitary certification, NOAA seafood compliance, FDA food safety, organic certification, and maritime trade law for California Central Coast.',
        serviceType: 'Agriculture & Maritime Trade Law',
        url: `${siteConfig.siteUrl}/santa-cruz-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="Santa Cruz Trade Law Hero">
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
          <h1>Santa Cruz Trade Attorney<br />Agriculture & Seafood Trade Law</h1>
          <p className="hero-subtitle">
            Expert trade compliance for Santa Cruz County's agriculture and maritime industries. Santa Cruz County produce exports, NOAA seafood regulations, and international trade law for Central Coast businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Agriculture Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Santa Cruz Businesses Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Santa Cruz's Agriculture & Seafood Economy
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Santa Cruz County is California's <strong>"Salad Bowl of the World"</strong>, producing over $4 billion annually in lettuce, strawberries, broccoli, and specialty crops exported globally. Combined with Santa Cruz's historic <strong>fishing industry and aquaculture operations</strong>, the region faces unique trade compliance challenges including <strong>USDA phytosanitary requirements, NOAA fisheries regulations, FDA food safety standards, and international market access barriers</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Santa Cruz County Export Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                As your Santa Cruz trade attorney, we specialize in <strong>Santa Cruz County produce exports</strong>: lettuce, strawberries, artichokes, broccoli, and specialty vegetables. We obtain USDA phytosanitary certificates and navigate foreign import requirements for major export markets.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Seafood Trade Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Santa Cruz's fishing fleet and seafood processors must comply with <strong>NOAA fisheries regulations, Seafood Import Monitoring Program (SIMP), and FDA HACCP requirements</strong>. We provide comprehensive seafood trade compliance and import defense services.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Organic & Sustainable Certification</h3>
              <p className="text-text-secondary leading-relaxed">
                Santa Cruz's <strong>organic farms and sustainable agriculture operations</strong> require USDA National Organic Program (NOP) export certifications, Santa Cruz Bay Aquarium Seafood Watch compliance, and international sustainability standards for premium export markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance for Santa Cruz Agriculture & Seafood Industries
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Santa Cruz County Produce Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The <strong>Santa Cruz County</strong> is the nation's largest producer of cool-season vegetables, exporting to Mexico, Canada, Asia, and beyond. Exporting fresh produce requires <strong>USDA APHIS phytosanitary certificates, pest-free certifications, and compliance with destination country import requirements</strong>. We coordinate with Santa Cruz County Agricultural Commissioner, USDA APHIS, and foreign regulators to ensure smooth export operations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>USDA Phytosanitary Certificates:</strong> PPQ Form 577 for lettuce, strawberries, vegetables</li>
                <li><strong>Pest-Free Area Certification:</strong> Light brown apple moth, other pest certifications</li>
                <li><strong>Mexico SENASICA Compliance:</strong> Navigate Mexican phytosanitary requirements</li>
                <li><strong>Cold Treatment Protocols:</strong> Meet destination country treatment requirements</li>
                <li><strong>Export Packaging Standards:</strong> Labeling, palletization, ISPM 15 wood packaging</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Seafood Trade Compliance & NOAA Regulations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Santa Cruz's fishing industry must comply with <strong>NOAA Seafood Import Monitoring Program (SIMP)</strong> for imports, and export certification requirements for international shipments. We advise on <strong>HACCP compliance, Country of Origin Labeling (COOL), and international seafood trade regulations</strong>. We also defend against FDA seafood import detentions and violations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>NOAA SIMP compliance (import documentation for priority species)</li>
                <li>FDA HACCP plans for seafood processors</li>
                <li>Export Health Certificates for seafood shipments</li>
                <li>Country of Origin Labeling (COOL) compliance</li>
                <li>MSC and sustainable seafood certification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USDA Organic Export Certification (NOP)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Santa Cruz County's <strong>organic producers</strong> exporting certified organic products must comply with USDA National Organic Program (NOP) requirements and destination country organic standards. We coordinate with USDA-accredited certifiers, obtain organic export certificates, and secure equivalency recognition for exports to EU, Canada, Japan, and other markets requiring organic certification.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA NOP export certificate preparation (Form NOP 4003)</li>
                <li>EU organic equivalency recognition (Regulation 2018/848)</li>
                <li>Canada/Japan organic certification coordination</li>
                <li>Organic product labeling and export documentation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA Food Safety Modernization Act (FSMA) Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Santa Cruz food processors and packinghouses must comply with FDA's <strong>Produce Safety Rule, Preventive Controls for Human Food, and Foreign Supplier Verification Program (FSVP)</strong> if importing ingredients. We design FSMA compliance programs, conduct facility audits, prepare written plans, and defend against FDA enforcement actions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Produce Safety Rule compliance (farm operations)</li>
                <li>Preventive Controls Food Safety Plans</li>
                <li>FSVP for ingredient importers</li>
                <li>FDA inspection defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Wine & Beverage Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Santa Cruz County's <strong>wine industry</strong> exports premium wines to international markets. We advise on <strong>TTB Certificate of Label Approval (COLA), international wine export requirements, EU wine import certifications, and destination country labeling standards</strong>. We also handle customs classification and valuation issues for wine imports (equipment, barrels, corks).
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Wine export documentation (TTB certificates, VI-1 forms)</li>
                <li>EU wine import certifications</li>
                <li>Destination country labeling requirements</li>
                <li>Wine importer compliance (equipment, supplies)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Trade Remedy Defense for Agriculture</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                California agriculture occasionally faces <strong>foreign antidumping investigations, safeguard measures, or phytosanitary trade barriers</strong>. We represent Santa Cruz growers and processors in trade remedy proceedings, WTO disputes, bilateral negotiations, and market access advocacy with USDA Foreign Agricultural Service and USTR.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Foreign antidumping investigation response</li>
                <li>WTO SPS Agreement dispute resolution</li>
                <li>USDA FAS market access coordination</li>
                <li>Industry coalition formation for trade advocacy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Companies Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Santa Cruz Agriculture & Seafood Businesses Trust Our Firm
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Deep Agriculture Industry Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>farming operations, cold chain logistics, and perishable commodity exports</strong>. We've worked with Santa Cruz County growers, Santa Cruz seafood processors, and Central Coast wineries for decades.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">USDA & NOAA Agency Relationships</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our attorneys work directly with <strong>USDA APHIS, NOAA Fisheries, FDA, and county agricultural commissioners</strong>. We expedite phytosanitary certificates, seafood export health certificates, and resolve regulatory issues during critical harvest and fishing seasons.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">International Market Access</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We've helped California exporters enter <strong>Mexico, Canada, EU, Japan, Korea, China, and emerging markets</strong>. We register establishments with foreign agencies (SENASICA, CFIA, etc.) and overcome phytosanitary trade barriers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Harvest Season Emergency Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                During <strong>peak harvest</strong>, delays cost thousands daily. We respond within 24 hours to phytosanitary certificate delays, FDA detentions, and export documentation issues for perishable shipments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Santa Cruz Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Lettuce & Leafy Greens</h3>
              <p className="text-sm text-text-secondary">Santa Cruz County lettuce growers and shippers</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Strawberries & Berries</h3>
              <p className="text-sm text-text-secondary">Berry farms, organic operations, fresh exports</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Broccoli & Vegetables</h3>
              <p className="text-sm text-text-secondary">Cool-season vegetable production and export</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Artichokes & Specialty Crops</h3>
              <p className="text-sm text-text-secondary">Castroville artichokes, specialty vegetables</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Fishing & Seafood</h3>
              <p className="text-sm text-text-secondary">Commercial fishing, seafood processing, aquaculture</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Wine & Vineyards</h3>
              <p className="text-sm text-text-secondary">Santa Cruz County wineries, premium wine exports</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Organic & Sustainable</h3>
              <p className="text-sm text-text-secondary">USDA organic farms, sustainable agriculture</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Food Processing & Packing</h3>
              <p className="text-sm text-text-secondary">Fresh-cut operations, value-added processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Santa Cruz Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Santa Cruz County agriculture infrastructure, Santa Cruz County operations, and Central Coast trade corridors. We serve clients by appointment throughout the region.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Santa Cruz Agriculture Infrastructure</h3>
              <p className="text-text-secondary mb-4">Key facilities and transportation:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">US-101</span>
                  <span>Primary corridor connecting Santa Cruz County to Bay Area ports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Salinas Airport</span>
                  <span>Air cargo facility for time-sensitive produce exports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Port of Oakland</span>
                  <span>90 miles north — primary export gateway for refrigerated cargo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Cold Storage Facilities</span>
                  <span>Extensive refrigerated warehousing throughout Santa Cruz County</span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Serving Santa Cruz & Central Coast</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout the region:</p>
              <div className="grid grid-cols-2 gap-2 text-sm text-text-secondary mb-4">
                <span>Santa Cruz</span>
                <span>Salinas</span>
                <span>Watsonville</span>
                <span>Castroville</span>
                <span>Marina</span>
                <span>Seaside</span>
                <span>Carmel Valley</span>
                <span>Soledad</span>
              </div>
              <p className="text-sm text-text-secondary mt-4">
                <strong>Headquarters:</strong> 27001 Agoura Road, Suite 350, Calabasas, CA 91301<br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:info@tradecompliance.law" className="text-secondary-teal hover:underline">info@tradecompliance.law</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services for Agriculture</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/industries/food-agriculture" className="service-link">
                      <span className="service-link__title">Food & Agriculture Trade</span>
                      <p className="service-link__description">Export/import compliance</p>
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

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Industry Expertise</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/industries/food-agriculture" className="service-link">
                      <span className="service-link__title">Fresh Produce</span>
                      <p className="service-link__description">Santa Cruz County exports</p>
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

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/santa-cruz-trade-attorney" className="service-link">
                      <span className="service-link__title">Santa Cruz</span>
                      <p className="service-link__description">Central Coast trade law</p>
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

          <div className="bg-white p-8 rounded-lg shadow-md overflow-hidden">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful Guides for Agriculture Exporters</h3>
            <div className="grid md:grid-cols-5 gap-6">
              <a href="#article/usda-phytosanitary" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">USDA Phyto</h4>
                <p className="text-sm text-text-secondary">Export certification</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#article/fda-fsma" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">FDA FSMA</h4>
                <p className="text-sm text-text-secondary">Food safety compliance</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#article/organic-export" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Organic Export</h4>
                <p className="text-sm text-text-secondary">USDA NOP compliance</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#article/seafood-trade" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Seafood Trade</h4>
                <p className="text-sm text-text-secondary">NOAA SIMP compliance</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <Link to="/trade-law-faq" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">FAQ Center</h4>
                <p className="text-sm text-text-secondary">Trade law FAQ</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Export California Agriculture Compliantly
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let trade barriers block your agricultural exports. Contact our Santa Cruz trade attorney team for expert produce export and seafood trade compliance.
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

export default SantaCruzTradeAttorneyPage;
