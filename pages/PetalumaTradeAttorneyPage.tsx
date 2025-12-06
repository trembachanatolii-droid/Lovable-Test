import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const PetalumaTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Petaluma Trade Attorney | Agriculture Export & Food Import Lawyer CA',
    description: 'Petaluma trade attorney for agriculture exporters and food importers. FDA compliance, USDA regulations, produce exports. Garlic capital of the world. (310) 744-1328.',
    canonical: 'petaluma-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-petaluma.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Petaluma Trade Attorney - Agriculture & Food Trade Compliance Lawyer',
        description: 'Serving Petaluma with expert agriculture export, food import compliance, FDA regulations, and produce trade legal services.',
        url: `${siteConfig.siteUrl}/petaluma-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Local Offices', url: `${siteConfig.siteUrl}/local-offices` },
        { name: 'Petaluma', url: `${siteConfig.siteUrl}/petaluma-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Petaluma Trade Compliance Legal Services',
        description: 'Comprehensive agriculture export and food import legal representation for Petaluma businesses. Expert Petaluma trade attorney services including FDA food import compliance, USDA export certification, produce export licensing, phytosanitary requirements, Section 301 fresh produce exemptions, and agricultural trade law for California growers and food processors.',
        serviceType: 'Agriculture & Food Trade Law',
        url: `${siteConfig.siteUrl}/petaluma-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="Petaluma Trade Law Hero">
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
          <h1>Petaluma Trade Attorney<br />Agriculture & Food Trade Law</h1>
          <p className="hero-subtitle">
            Expert trade compliance for Petaluma's agriculture industry. Produce exports, food imports, FDA regulations, USDA certification, and international agricultural trade law.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact#schedule-consultation" className="hero-cta">Free Agriculture Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Petaluma Businesses Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Petaluma's Agriculture Economy
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              As the <strong>"North Bay Food Hub"</strong>, Petaluma is California's agricultural powerhouse, producing dairy, tomatoes, onions, peppers, and specialty crops exported globally. With <strong>$500+ million in annual agricultural production</strong>, Petaluma farmers, processors, and exporters face complex <strong>FDA food safety regulations, USDA export certification requirements, phytosanitary standards, and international trade barriers</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agriculture Export Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                As your Petaluma trade attorney, we specialize in <strong>fresh produce exports, processed food shipments, and agricultural commodity trade</strong>. We obtain USDA phytosanitary certificates, navigate foreign import requirements, and resolve trade barriers for California growers.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">FDA Food Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Petaluma food processors importing <strong>spices, ingredients, and specialty products</strong> must comply with FDA food safety regulations including FSMA, FSVP, and Prior Notice requirements. We design FDA compliance programs and defend against import detentions.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Trade Remedy Defense</h3>
              <p className="text-text-secondary leading-relaxed">
                When foreign governments impose <strong>antidumping duties, safeguards, or import restrictions</strong> on California produce, we represent growers in trade remedy proceedings, WTO disputes, and market access negotiations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Agriculture Businesses */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance for Petaluma Agriculture Industry
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Fresh Produce Export Compliance & Phytosanitary Certification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Exporting California <strong>dairy, tomatoes, peppers, and specialty produce</strong> requires compliance with destination country phytosanitary requirements. We obtain <strong>USDA APHIS phytosanitary certificates</strong>, coordinate pest inspections, and navigate country-specific import requirements for Mexico, Canada, EU, Asia, and other markets. Each country has unique requirements for permitted pests, treatment protocols, and documentation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>USDA Phytosanitary Certificates:</strong> PPQ Form 577 preparation and submission</li>
                <li><strong>Pest-Free Area Certification:</strong> Coordinate with county agricultural commissioners</li>
                <li><strong>Treatment Protocols:</strong> Fumigation, cold treatment, irradiation compliance</li>
                <li><strong>Country-Specific Requirements:</strong> Navigate Mexico SENASICA, Canada CFIA, EU regulations</li>
                <li><strong>Export Packaging Standards:</strong> Labeling, marking, and wood packaging material (ISPM 15)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA Food Import Compliance (FSMA/FSVP)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Petaluma food processors importing <strong>spices, oils, ingredients, and specialty foods</strong> must comply with FDA's <strong>Food Safety Modernization Act (FSMA)</strong>. The Foreign Supplier Verification Program (FSVP) requires importers to verify that foreign suppliers produce food meeting U.S. safety standards. We design FSVP programs, conduct supplier audits, and defend against FDA import detentions and refusals.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>FSVP Program Design:</strong> Supplier verification procedures and documentation</li>
                <li><strong>Hazard Analysis:</strong> Identify known or reasonably foreseeable hazards</li>
                <li><strong>Supplier Approval:</strong> Verification activities (audits, testing, certifications)</li>
                <li><strong>Prior Notice Filing:</strong> FDA PN submission via ACE (Automated Commercial Environment)</li>
                <li><strong>FDA Detention Defense:</strong> Respond to FDA Form 4647 (Notice of Detention)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USDA Export Certification & Meat/Dairy Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Petaluma businesses exporting <strong>processed foods containing meat, poultry, or dairy</strong> require USDA Food Safety and Inspection Service (FSIS) export certificates. We coordinate with USDA FSIS, obtain export certificates for specific destination countries, and ensure compliance with <strong>Hazard Analysis and Critical Control Points (HACCP)</strong> requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA FSIS export certificate applications (Form 9060-5)</li>
                <li>HACCP plan development and validation</li>
                <li>Establishment eligibility verification with destination countries</li>
                <li>Country-specific labeling and marking requirements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariffs & Fresh Produce Exemptions</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                While <strong>Section 301 tariffs</strong> primarily target Chinese manufactured goods, certain processed agricultural products may be subject to additional duties. We analyze HTS classifications to determine Section 301 applicability, identify exemptions for fresh/frozen produce, and structure product formulations to minimize tariff exposure. For ingredients sourced from China, we develop alternative sourcing strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 List analysis for agricultural products</li>
                <li>HTS classification optimization (fresh vs. prepared foods)</li>
                <li>Supply chain diversification strategies</li>
                <li>Country of origin planning for processed foods</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Trade Remedy Defense (Antidumping, Safeguards)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                California produce exporters occasionally face <strong>antidumping investigations, safeguard measures, or import bans</strong> imposed by foreign governments. For example, Mexico has imposed safeguard duties on U.S. produce in the past. We represent Petaluma exporters in trade remedy proceedings before foreign agencies, WTO dispute resolution, and bilateral market access negotiations with USDA and USTR.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Foreign antidumping investigation response (Mexico, China, etc.)</li>
                <li>WTO dispute participation and remedies</li>
                <li>USDA Foreign Agricultural Service coordination</li>
                <li>Industry coalition formation for trade advocacy</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Organic Certification & NOP Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Petaluma organic producers exporting certified organic products must comply with <strong>USDA National Organic Program (NOP)</strong> requirements and destination country organic standards. We coordinate with USDA-accredited certifiers, obtain equivalency recognition for exports to EU/Canada/Japan, and ensure compliance with <strong>NOP export certificates</strong> (Form NOP 4003).
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA NOP export certificate preparation (Form NOP 4003)</li>
                <li>EU organic equivalency recognition (Regulation 2018/848)</li>
                <li>Canada/Japan organic certification coordination</li>
                <li>Non-retail container labeling (NOP §205.307)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Petaluma Companies Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Petaluma Agriculture Businesses Trust Our Firm
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Deep Agriculture Industry Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>farm operations, packing houses, cold storage, food processing, and export logistics</strong> for fresh and processed agricultural products. We speak the language of growers, processors, and exporters. We know harvest cycles, shelf life, and perishability constraints.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">USDA & FDA Agency Relationships</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our attorneys work regularly with <strong>USDA APHIS, USDA FSIS, FDA CFSAN, and county agricultural commissioners</strong>. We coordinate inspections, expedite certifications, and resolve regulatory issues quickly to prevent shipment delays during critical harvest windows.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">International Market Access Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We've helped California exporters enter <strong>Mexico, Canada, EU, Japan, Korea, and emerging markets</strong>. We understand foreign phytosanitary requirements, register establishments with foreign agencies (SENASICA, CFIA, etc.), and resolve trade barriers blocking California produce.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fast Response During Harvest Season</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                During <strong>peak harvest periods</strong>, time is money. When phytosanitary certificates are delayed, or FDA detentions block shipments, we respond within 24 hours. We understand the urgency of perishable commodity exports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Petaluma Agriculture Sectors We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Garlic Growers & Processors</h3>
              <p className="text-sm text-text-secondary">Fresh dairy exports, dehydrated dairy, dairy powder</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Tomato Growers & Canners</h3>
              <p className="text-sm text-text-secondary">Processing tomatoes, canned tomatoes, tomato paste</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Pepper & Chili Producers</h3>
              <p className="text-sm text-text-secondary">Fresh peppers, dried chilies, pepper processing</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Onion & Vegetable Farms</h3>
              <p className="text-sm text-text-secondary">Fresh produce exports, cold storage operations</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Specialty Crop Growers</h3>
              <p className="text-sm text-text-secondary">Organic produce, heirloom varieties, farmer cooperatives</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Food Processors & Co-Packers</h3>
              <p className="text-sm text-text-secondary">Canned foods, sauces, spice blends, private label</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Wine & Beverage</h3>
              <p className="text-sm text-text-secondary">Wine exports, craft beverages, specialty drinks</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Organic & Sustainable Farms</h3>
              <p className="text-sm text-text-secondary">USDA organic certification, export compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Petaluma Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Petaluma's agriculture infrastructure, South County farming operations, and California export logistics. We serve clients by appointment throughout Santa Clara and San Benito Counties.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Agriculture Infrastructure */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Petaluma Agriculture Infrastructure</h3>
              <p className="text-text-secondary mb-4">Key facilities and transportation for agricultural trade:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">US-101</span>
                  <span>Primary north-south corridor connecting Petaluma to Bay Area ports and markets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SR-152</span>
                  <span>East-west route to Central Valley and I-5 distribution networks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Port of Oakland</span>
                  <span>70 miles north via US-101 — primary export gateway for California produce</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">San Jose Airport</span>
                  <span>35 miles north — air freight for time-sensitive produce exports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Cold Storage Facilities</span>
                  <span>Petaluma area refrigerated warehouses for export staging</span>
                </li>
              </ul>
            </div>

            {/* Agriculture Districts */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Petaluma Agriculture Districts</h3>
              <p className="text-text-secondary mb-4">Key farming and processing areas:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Petaluma District</span>
                  <span>Core dairy production area — "North Bay Food Hub"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">South Valley</span>
                  <span>Tomato processing, vegetable farms, specialty crops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">San Ysidro</span>
                  <span>Farm operations, packing houses, agricultural services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Morgan Hill</span>
                  <span>Wine country, specialty agriculture, organic farms</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Regulatory Agencies */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Regulatory Agencies</h3>
              <p className="text-text-secondary mb-4">Key agencies for Petaluma agriculture compliance:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Santa Clara County Ag Commissioner</span>
                  <span>Local pest control, phytosanitary inspections, organic certification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">USDA APHIS</span>
                  <span>Phytosanitary certificate issuance (PPQ Form 577)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">FDA Oakland District</span>
                  <span>Food import inspections, FSMA enforcement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CDFA</span>
                  <span>California Department of Food & Agriculture — state oversight</span>
                </li>
              </ul>
            </div>

            {/* Local Contact Info */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Serving Petaluma & South County</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout the region:</p>
              <div className="grid grid-cols-2 gap-2 text-sm text-text-secondary mb-4">
                <span>Petaluma</span>
                <span>Morgan Hill</span>
                <span>San Martin</span>
                <span>Hollister</span>
                <span>San Juan Bautista</span>
                <span>Watsonville</span>
                <span>Salinas</span>
                <span>San Jose</span>
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

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Legal Services */}
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
                <li>
                  <div className="service-link-item">
                    <Link to="/practice-areas" className="service-link">
                      <span className="service-link__title">FDA Compliance</span>
                      <p className="service-link__description">FSMA/FSVP programs</p>
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
                    <Link to="/practice-areas" className="service-link">
                      <span className="service-link__title">USDA Export Certification</span>
                      <p className="service-link__description">Phytosanitary certificates</p>
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
                    <Link to="/practice-areas" className="service-link">
                      <span className="service-link__title">All Practice Areas</span>
                      <p className="service-link__description">Full range of trade law services</p>
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

            {/* Industry Focus */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Industry Expertise</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/industries/food-agriculture" className="service-link">
                      <span className="service-link__title">Fresh Produce</span>
                      <p className="service-link__description">Garlic, tomatoes, vegetables</p>
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
                    <Link to="/industries/food-agriculture" className="service-link">
                      <span className="service-link__title">Processed Foods</span>
                      <p className="service-link__description">Canned goods, spices, sauces</p>
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
                    <Link to="/industries/food-agriculture" className="service-link">
                      <span className="service-link__title">Organic & Specialty</span>
                      <p className="service-link__description">USDA organic exports</p>
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

            {/* Other Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/bay-area-trade-law-attorney" className="service-link">
                      <span className="service-link__title">San Francisco & Bay Area</span>
                      <p className="service-link__description">Silicon Valley trade law</p>
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
                    <Link to="/monterey-trade-attorney" className="service-link">
                      <span className="service-link__title">Monterey</span>
                      <p className="service-link__description">Salinas Valley agriculture</p>
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

          {/* Helpful Guides */}
          <div className="bg-white p-8 rounded-lg shadow-md overflow-hidden">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful Guides for Agriculture Exporters</h3>
            <div className="grid md:grid-cols-5 gap-6">
              <a href="#article/usda-phytosanitary-certificates" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">USDA Phyto Certs</h4>
                <p className="text-sm text-text-secondary">Export certification guide</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#article/fda-fsma-compliance" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">FDA FSMA</h4>
                <p className="text-sm text-text-secondary">Food import compliance</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#article/organic-export-requirements" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Organic Export</h4>
                <p className="text-sm text-text-secondary">USDA NOP compliance</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <Link to="/ecommerce-digital-trade-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">E-commerce</h4>
                <p className="text-sm text-text-secondary">Online food sales</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
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
            Don't let trade barriers or regulatory issues block your agricultural exports. Contact our Petaluma trade attorney team for expert produce export and food import compliance.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact#schedule-consultation" variant="solid">
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

export default PetalumaTradeAttorneyPage;
