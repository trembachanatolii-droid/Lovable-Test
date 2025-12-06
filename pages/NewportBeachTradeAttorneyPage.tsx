import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const NewportBeachTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Newport Beach Trade Attorney | Port Customs Lawyer CA',
    description: 'Newport Beach trade attorney serving Orange County importers. Export controls, customs compliance, maritime trade law. Oakland port access. (310) 744-1328.',
    canonical: 'newport-beach-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-newport-beach.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Newport Beach Trade Attorney - California Port Customs Lawyer',
        description: 'Serving Newport Beach with expert trade compliance, export controls, and customs legal services for maritime businesses and port-adjacent companies.',
        url: `${siteConfig.siteUrl}/newport-beach-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Local Offices', url: `${siteConfig.siteUrl}/local-offices` },
        { name: 'Newport Beach', url: `${siteConfig.siteUrl}/newport-beach-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Newport Beach Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance, export controls, and customs legal representation for Newport Beach maritime businesses and port importers. Expert Newport Beach trade attorney services including EAR/ITAR compliance, customs valuation, Port of Long Beach logistics support, maritime trade compliance, and CBP examination defense.',
        serviceType: 'Maritime Trade Law',
        url: `${siteConfig.siteUrl}/newport-beach-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="Newport Beach Trade Law Hero">
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
          <h1>Newport Beach Trade Attorney<br />Port Customs Compliance</h1>
          <p className="hero-subtitle">
            Expert customs and trade law services for Newport Beach's maritime businesses. Oakland port access, import/export compliance, and CBP defense for Bay Area importers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact#schedule-consultation" className="hero-cta">Free Port Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Newport Beach Businesses Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Newport Beach's Maritime Economy
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Newport Beach's strategic location on San Francisco Bay provides direct access to the <strong>Port of Long Beach</strong>, the nation's fifth-busiest container port. With proximity to maritime logistics operations and Bay Area distribution networks, Newport Beach businesses face complex <strong>customs regulations, import compliance requirements, and trade law challenges</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port-Adjacent Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                As your Newport Beach trade attorney, we understand <strong>Port of Long Beach logistics, Oakland International Container Terminal operations, and CBP examination procedures</strong>. We respond to customs holds, demurrage issues, and import violations within 24 hours.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Maritime Trade Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                We specialize in <strong>maritime customs compliance</strong>: containerized cargo, vessel documentation, ISF filings, and ocean freight regulations. We work with freight forwarders, customs brokers, and terminal operators serving Newport Beach businesses.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CBP Defense & Litigation</h3>
              <p className="text-text-secondary leading-relaxed">
                When CBP issues a <strong>Notice of Action, Penalty Notice, or customs examination</strong>, we provide immediate legal representation. We defend importers in classification disputes, valuation challenges, and enforcement actions at CIT.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Newport Beach Importers */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance for Newport Beach Port Businesses
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Compliance & Import Regulations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Newport Beach businesses importing through the <strong>Port of Long Beach</strong> face complex customs requirements. We provide comprehensive customs compliance services including <strong>HTS classification, customs valuation, country of origin determinations, and Section 301 tariff strategies</strong>. Our attorneys ensure your imports clear customs without delays or penalties.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>HTS Classification:</strong> Accurate tariff classification for containerized cargo</li>
                <li><strong>Customs Valuation:</strong> Transaction value, assists, royalties, and First Sale strategies</li>
                <li><strong>Section 301 Tariffs:</strong> China tariff mitigation through product engineering</li>
                <li><strong>ISF Compliance:</strong> 10+2 filing requirements for ocean shipments</li>
                <li><strong>CBP Examination Defense:</strong> Responding to intensive exams and holds</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Port of Long Beach Logistics Support</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Port of Long Beach handles <strong>99% of containerized goods</strong> entering or leaving Northern California. We provide legal support for <strong>terminal operations, demurrage disputes, pier pass issues, and customs clearance problems</strong>. When cargo is held at SSA Marine, TraPac, or Everport terminals, we coordinate with CBP and terminal operators for rapid release.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Demurrage and detention cost disputes</li>
                <li>CBP cargo holds and examination responses</li>
                <li>Terminal operator liability issues</li>
                <li>Free time extension negotiations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Controls for Maritime Cargo</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Newport Beach businesses exporting goods internationally must comply with <strong>Export Administration Regulations (EAR) and ITAR</strong>. Even common maritime equipment may be subject to export licensing if it contains dual-use components. We classify your cargo, obtain export licenses, and ensure <strong>AES filing compliance</strong> before departure.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ECCN classification for maritime equipment and electronics</li>
                <li>Export license applications (SNAP-R)</li>
                <li>AES (Automated Export System) filing compliance</li>
                <li>OFAC sanctions screening for foreign buyers</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Trade Compliance Program Design</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Whether you're a <strong>freight forwarder, customs broker, or importer</strong>, a documented trade compliance program is essential. We design <strong>scalable compliance programs</strong> including written policies, restricted party screening procedures, employee training, and internal audit protocols. Compliance programs reduce penalties in enforcement actions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Written Import Compliance Policy (ICP) development</li>
                <li>Automated HTS classification systems</li>
                <li>Vendor compliance audits</li>
                <li>Employee training for compliance teams</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA & Free Trade Agreement Utilization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The <strong>USMCA (United States-Mexico-Canada Agreement)</strong> allows duty-free treatment for qualifying goods from Mexico and Canada. We determine origin qualification, prepare certifications of origin, and structure supply chains for maximum duty savings. We also advise on other FTAs covering Chile, Peru, Korea, and other trade partners.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA origin qualification and certification</li>
                <li>Regional Value Content (RVC) calculations</li>
                <li>FTA preference claims and documentation</li>
                <li>CBP verification response preparation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Penalty Defense & Prior Disclosures</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you discover a customs violation—such as <strong>incorrect classification, undervaluation, or preference claim errors</strong>—a Prior Disclosure can reduce penalties by up to 75%. We prepare and file Prior Disclosures, negotiate settlements with CBP, and defend importers in penalty proceedings. Average penalty reduction: $150,000+.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Prior Disclosure preparation and filing (19 USC §1592)</li>
                <li>Internal compliance audits and self-assessments</li>
                <li>CBP penalty negotiation and settlement</li>
                <li>Court of International Trade (CIT) litigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Newport Beach Companies Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Newport Beach Businesses Trust Our Trade Law Firm
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Logistics Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>Port of Long Beach terminal operations, drayage routes, and CBP examination procedures</strong>. We've handled customs issues at SSA Marine, TraPac, Matson, and Everport terminals. We know the freight corridors along I-880 and I-580 connecting Newport Beach to distribution centers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">24-Hour Customs Emergency Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                When CBP holds your cargo, <strong>every hour costs money</strong>. Demurrage at Port of Long Beach terminals averages $150-$350/day. We respond to customs emergencies within 24 hours, coordinate with CBP officers, and expedite cargo release to minimize detention costs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Penalty Reduction Success</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our Prior Disclosure practice has saved clients <strong>millions in CBP penalties</strong>. Through strategic disclosure filings and settlement negotiations, we routinely reduce penalties by 50-75%. We've successfully defended importers in classification disputes, valuation challenges, and marking violations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Flat-Fee Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee packages</strong> for HTS classifications, Prior Disclosures, and compliance program design. No surprise legal bills. Typical HTS classification: $500-$1,500. Prior Disclosure: $5,000-$15,000. Transparent pricing for predictable budgeting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Newport Beach Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Maritime & Logistics</h3>
              <p className="text-sm text-text-secondary">Freight forwarders, customs brokers, terminal operators</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Consumer Goods Importers</h3>
              <p className="text-sm text-text-secondary">Electronics, furniture, apparel, home goods</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Manufacturing & Distribution</h3>
              <p className="text-sm text-text-secondary">Component importers, assembly operations, warehousing</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Wine & Beverage</h3>
              <p className="text-sm text-text-secondary">Wine importers, craft beer, specialty beverages</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Automotive Parts</h3>
              <p className="text-sm text-text-secondary">Aftermarket parts, OEM components, USMCA compliance</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Electronics & Technology</h3>
              <p className="text-sm text-text-secondary">Consumer electronics, semiconductors, IT equipment</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Food & Agriculture</h3>
              <p className="text-sm text-text-secondary">FDA-regulated imports, organic products, specialty foods</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Building Materials</h3>
              <p className="text-sm text-text-secondary">Construction materials, hardware, trade remedy duties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Newport Beach Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Newport Beach's maritime infrastructure, Port of Long Beach logistics, and Bay Area trade corridors. We serve clients by appointment throughout Newport Beach County.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Port Access Routes */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Newport Beach Port Access & Freight Routes</h3>
              <p className="text-text-secondary mb-4">Understanding Bay Area freight corridors for efficient port logistics:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-880</span>
                  <span>Nimitz Freeway — primary Port of Long Beach access from Newport Beach via Posey/Webster Tubes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SR-61</span>
                  <span>Doolittle Drive — connects Oakland Airport and port terminals to Bay Bridge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Webster/Posey Tubes</span>
                  <span>Historical underwater tubes connecting Newport Beach to Oakland port district</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-580</span>
                  <span>East-west connector to I-5 and Central Valley distribution networks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Bay Farm Island</span>
                  <span>Business district with proximity to Oakland Airport and port terminals</span>
                </li>
              </ul>
            </div>

            {/* CBP & Terminal Facilities */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Long Beach CBP Operations</h3>
              <p className="text-text-secondary mb-4">Key customs facilities serving Newport Beach importers:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SSA Marine</span>
                  <span>Berths 55-59 — major container terminal, CBP examination facility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">TraPac</span>
                  <span>Berths 25-33 — automated terminal, Asia-Pacific trade lanes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Everport</span>
                  <span>Berths 20-24 — container operations, intensive exam site</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CBP Oakland Field Office</span>
                  <span>530 Water Street — primary customs processing center</span>
                </li>
              </ul>
              <p className="text-sm text-text-secondary mt-4 italic">
                Average demurrage: $150-$350/day. We respond to CBP cargo holds within 24 hours.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Maritime Business Districts */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Newport Beach Maritime Business Districts</h3>
              <p className="text-text-secondary mb-4">Key commercial areas for trade-related businesses:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Newport Beach Point</span>
                  <span>Former Naval Air Station — developing maritime industrial park, warehousing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Bay Farm Island</span>
                  <span>Business district — offices, logistics companies, proximity to port and airport</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Park Street Corridor</span>
                  <span>Historic downtown — small business district, commercial services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Harbor Bay Business Park</span>
                  <span>Professional offices, tech companies, ferry terminal access to SF</span>
                </li>
              </ul>
            </div>

            {/* Local Contact Info */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Serving Newport Beach & Surrounding Areas</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout Newport Beach County:</p>
              <div className="grid grid-cols-2 gap-2 text-sm text-text-secondary mb-4">
                <span>Newport Beach</span>
                <span>Oakland</span>
                <span>Bay Farm Island</span>
                <span>Newport Beach Point</span>
                <span>San Leandro</span>
                <span>Hayward</span>
                <span>Berkeley</span>
                <span>Emeryville</span>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services for Importers</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/practice-areas" className="service-link">
                      <span className="service-link__title">Customs Compliance</span>
                      <p className="service-link__description">HTS classification, valuation, FTAs</p>
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
                    <Link to="/customs-defense" className="service-link">
                      <span className="service-link__title">CBP Defense & Litigation</span>
                      <p className="service-link__description">Penalty defense, Prior Disclosures</p>
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
                      <span className="service-link__title">Export Controls</span>
                      <p className="service-link__description">ITAR/EAR compliance</p>
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
                    <Link to="/industries/technology-electronics" className="service-link">
                      <span className="service-link__title">Technology & Electronics</span>
                      <p className="service-link__description">Consumer electronics imports</p>
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
                    <Link to="/industries/apparel-textiles" className="service-link">
                      <span className="service-link__title">Apparel & Textiles</span>
                      <p className="service-link__description">Section 301, country of origin</p>
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
                      <span className="service-link__title">Food & Beverage</span>
                      <p className="service-link__description">FDA compliance, wine imports</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other Bay Area Locations</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/bay-area-trade-law-attorney" className="service-link">
                      <span className="service-link__title">San Francisco & Bay Area</span>
                      <p className="service-link__description">Silicon Valley trade compliance</p>
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
                    <Link to="/los-angeles-port-customs-attorney" className="service-link">
                      <span className="service-link__title">Los Angeles & Long Beach</span>
                      <p className="service-link__description">Nation's busiest port complex</p>
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
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful Guides for Importers</h3>
            <div className="grid md:grid-cols-5 gap-6">
              <Link to="/resources/uflpa-compliance-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">UFLPA Guide</h4>
                <p className="text-sm text-text-secondary">Supply chain compliance</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <a href="#article/section-301-tariffs" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Section 301</h4>
                <p className="text-sm text-text-secondary">China tariff mitigation</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#article/prior-disclosures" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Prior Disclosures</h4>
                <p className="text-sm text-text-secondary">Penalty mitigation strategies</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <Link to="/ecommerce-digital-trade-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">E-commerce</h4>
                <p className="text-sm text-text-secondary">Online import compliance</p>
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
            Navigate Port Customs with Confidence
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let customs holds or CBP penalties disrupt your supply chain. Contact our Newport Beach trade attorney team for expert port compliance and customs defense.
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

export default NewportBeachTradeAttorneyPage;
