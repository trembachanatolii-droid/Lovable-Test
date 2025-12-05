
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const NovatoTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Novato Trade Attorney | Biotech Export Controls CA',
    description: 'Novato trade attorney for biotech & life sciences. Export controls, ITAR compliance, FDA regulations. Marin County. (310) 744-1328.',
    canonical: 'novato-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-novato.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Novato Trade Attorney - Biotech Export Compliance Lawyer Marin County',
        description: 'Serving Novato and Marin County with expert trade compliance, biotech export controls, and pharmaceutical import legal services for life sciences companies.',
        url: `${siteConfig.siteUrl}/novato-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Locations', url: `${siteConfig.siteUrl}/california-locations` },
        { name: 'Novato', url: `${siteConfig.siteUrl}/novato-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Novato Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance, biotech export controls, and pharmaceutical import legal representation for Novato life sciences companies. Expert Novato trade attorney services including EAR/ITAR compliance for biodefense products, FDA import regulations, dual-use biologics controls, OFAC sanctions screening, and trade law advice for biotech companies California.',
        serviceType: 'Biotechnology Trade Law',
        url: `${siteConfig.siteUrl}/novato-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="Novato Trade Law Hero">
        <picture className="hero-bg">
          <img
            src="/images/hero-port-background.jpg"
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
          <h1>Novato Trade Attorney<br />Biotech Export Compliance</h1>
          <p className="hero-subtitle">
            Expert trade law for life sciences companies. Export controls for biotech, pharmaceutical import compliance, and global trade strategy for Novato's innovation economy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Biotech Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Novato Biotech Companies Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Novato's Life Sciences Industry
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Novato is home to <strong>BioMarin Pharmaceuticals</strong> and a growing life sciences cluster. Exporting biotech products, medical devices, and pharmaceuticals requires compliance with <strong>EAR/ITAR, FDA regulations, and OFAC sanctions</strong>. One wrong classification can halt your export operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Biotech Export Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                As your Novato trade attorney, we provide <strong>biotech export compliance services</strong> tailored to pharmaceutical manufacturers, medical device companies, and life sciences startups. We understand biologics, gene therapies, and controlled substances.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">FDA Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                We handle <strong>FDA import regulations</strong> for clinical trial materials, APIs, and finished pharmaceuticals. We coordinate with FDA field offices, manage prior notice requirements, and resolve import detentions at Port of Oakland.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Marin County Coverage</h3>
              <p className="text-text-secondary leading-relaxed">
                Serving Novato, San Rafael, Mill Valley, and all of Marin County. We understand North Bay logistics, biotech supply chains, and the unique challenges of life sciences trade compliance in the Bay Area region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Biotech & Life Sciences Companies */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance for Novato Biotech Companies
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Biotech Export Controls (EAR/ITAR)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Many biotech products fall under <strong>dual-use export controls</strong>. Toxins, pathogens, vaccines, and biodefense products require ECCN classification and BIS licenses. We classify your biologics, file export license applications, and structure compliance programs for life sciences companies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>ECCN Classification:</strong> Biologics under Category 1 (1C351, 1C352, 1C353)</li>
                <li><strong>ITAR Biodefense:</strong> Defense biological agents and toxins (USML Category XIV)</li>
                <li><strong>Deemed Exports:</strong> Technology transfer to foreign national researchers</li>
                <li><strong>License Exceptions:</strong> GOV, GBS for government and humanitarian use</li>
                <li><strong>CDC Select Agents:</strong> Coordination with FSAP for dangerous pathogens</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA Import & Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Importing <strong>clinical trial materials, APIs, and finished drugs</strong> requires FDA prior notice, import alerts screening, and coordination with CBP at Port of Oakland. We manage FDA import documentation, resolve detention issues, and obtain certificates for pharmaceutical exports.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA Prior Notice (PN) for drug and device imports</li>
                <li>Import Alert screening and resolution strategies</li>
                <li>Export Certificates (FDA Form 3613) for pharmaceuticals</li>
                <li>DSCSA compliance for prescription drug supply chain</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">DEA Controlled Substance Import/Export</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Exporting or importing <strong>controlled substances</strong> (APIs for pain medications, ADHD treatments, etc.) requires DEA import/export permits. We manage DEA Form 486 applications, quota requests, and coordination with DEA Diversion Control Division.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>DEA Import/Export permits (Form 486 and Form 357)</li>
                <li>Schedule I-V controlled substance classifications</li>
                <li>Quota applications for manufacturing and research</li>
                <li>DEA license applications (importer/exporter registration)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Medical Device Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Importing medical devices requires <strong>FDA registration, device listing, and compliance with Quality System Regulations (QSR)</strong>. We handle customs classification (HTS 9018-9022), FDA establishment registration, and import entry documentation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA Device Establishment Registration and Listing</li>
                <li>HTS classification for medical devices (Chapter 90)</li>
                <li>510(k) premarket notification and PMA compliance</li>
                <li>Customs bonds and ISF filing for medical device imports</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Clinical Trial Material Importation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Importing <strong>investigational drugs and devices</strong> for clinical trials requires FDA IND/IDE exemptions and coordination with CBP at Port of Oakland. We manage documentation, labeling requirements, and expedited release procedures for time-sensitive clinical materials.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>IND (Investigational New Drug) import documentation</li>
                <li>IDE (Investigational Device Exemption) compliance</li>
                <li>Clinical trial supply chain logistics and customs clearance</li>
                <li>Temperature-controlled shipment customs procedures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">OFAC Sanctions for Biotech Companies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Selling pharmaceuticals or medical devices to the wrong customer can result in <strong>severe OFAC penalties</strong>. We implement sanctions screening programs, obtain OFAC licenses for humanitarian exports, and manage voluntary disclosures for blocked transactions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>OFAC Specific Licenses for humanitarian medicine exports</li>
                <li>Sanctions screening for distributors and contract manufacturers</li>
                <li>Russia/China/Iran/Cuba pharmaceutical export restrictions</li>
                <li>Voluntary Self-Disclosure (VSD) for OFAC violations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Novato Companies Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Novato Biotech Companies Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Life Sciences Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Novato trade attorney, we understand <strong>biologics, gene therapies, medical devices, pharmaceuticals, and clinical trial materials</strong>. We don't just apply generic legal templates—we customize compliance strategies to your specific products and regulatory pathways.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">FDA & DEA Coordination</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We work directly with <strong>FDA field offices, DEA Diversion Control, and CBP at Port of Oakland</strong>. Our attorneys have experience resolving import detentions, obtaining export certificates, and managing controlled substance permits.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Flat-Fee Pricing for Startups</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee packages</strong> for ECCN classifications, export compliance programs, and FDA import consulting. Transparent pricing with no surprise bills. Flexible payment terms for early-stage biotech companies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fast Turnaround for Clinical Trials</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We know <strong>speed matters in clinical development</strong>. Whether you need emergency IND import documentation or expedited DEA permits, we prioritize your timelines. Typical ECCN classification for biologics: 5-7 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Novato Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Biotechnology</h3>
              <p className="text-sm text-text-secondary">Gene therapies, biologics, monoclonal antibodies, vaccines</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Pharmaceuticals</h3>
              <p className="text-sm text-text-secondary">APIs, finished drugs, controlled substances, clinical materials</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Medical Devices</h3>
              <p className="text-sm text-text-secondary">Diagnostic equipment, surgical devices, implants, Class II/III devices</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Clinical Research</h3>
              <p className="text-sm text-text-secondary">CROs, clinical trial materials, investigational products</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Diagnostics</h3>
              <p className="text-sm text-text-secondary">In vitro diagnostics, lab equipment, reagents, test kits</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Contract Manufacturing</h3>
              <p className="text-sm text-text-secondary">CMOs, CDMOs, pharmaceutical contract services</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Medical Equipment</h3>
              <p className="text-sm text-text-secondary">Hospital equipment, imaging systems, patient monitoring</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Laboratory Supplies</h3>
              <p className="text-sm text-text-secondary">Research equipment, lab consumables, scientific instruments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Novato & Marin County Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Novato's biotech cluster, North Bay logistics networks, and Marin County business environment. We serve clients by appointment throughout the Novato and Marin County region.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Transportation Routes */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Novato Transportation & Port Access</h3>
              <p className="text-text-secondary mb-4">Understanding North Bay freight corridors for biotech supply chains:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">US-101</span>
                  <span>Main artery — connects Novato to San Francisco, Oakland Port, SFO Airport</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-580</span>
                  <span>East Bay connection — access to I-880 and Port of Oakland terminals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CA-37</span>
                  <span>Mare Island connector — links to Vallejo and I-80 corridor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SFO</span>
                  <span>San Francisco International Airport — air freight for temperature-controlled pharmaceuticals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">OAK</span>
                  <span>Oakland International Airport — alternative air freight and FedEx/UPS hubs</span>
                </li>
              </ul>
            </div>

            {/* Biotech Zones */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Novato & Marin County Biotech Zones</h3>
              <p className="text-text-secondary mb-4">Key life sciences and manufacturing districts:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Bel Marin Keys</span>
                  <span>BioMarin headquarters — biologics manufacturing, R&D facilities, clinical operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Novato Corporate Center</span>
                  <span>Medical device companies, healthcare equipment distributors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">San Rafael</span>
                  <span>Adjacent biotech cluster — pharmaceutical distribution, contract research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Hamilton Field</span>
                  <span>Former airfield — now mixed-use with healthcare services and logistics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Mill Valley/Sausalito</span>
                  <span>Biotech startups, diagnostic labs, scientific services</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Customs & Air Freight */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Oakland & Air Freight for Biotech</h3>
              <p className="text-text-secondary mb-4">Managing pharmaceutical imports and exports:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Port of Oakland</span>
                  <span>Ocean freight for bulk APIs and medical equipment — 30 miles from Novato</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SFO Air Cargo</span>
                  <span>Temperature-controlled pharmaceutical air freight — FDA prior notice coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">OAK Air Cargo</span>
                  <span>FedEx/UPS international express — clinical trial material shipments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">CBP Oakland</span>
                  <span>FDA coordinated examinations — resolving import alerts and detentions</span>
                </li>
              </ul>
              <p className="text-sm text-text-secondary mt-4 italic">
                Average pharmaceutical import clearance time: 2-5 days (with prior notice). We respond to FDA detentions within 24 hours.
              </p>
            </div>

            {/* Cities Served */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Marin County Cities We Serve</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout Marin County and North Bay:</p>
              <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary">
                <span>Novato</span>
                <span>San Rafael</span>
                <span>Mill Valley</span>
                <span>Sausalito</span>
                <span>Corte Madera</span>
                <span>Larkspur</span>
                <span>Tiburon</span>
                <span>San Anselmo</span>
                <span>Fairfax</span>
                <span>Ross</span>
                <span>Belvedere</span>
                <span>Kentfield</span>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services for Biotech</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/export-controls-sanctions" className="service-link">
                      <span className="service-link__title">Export Controls & Sanctions</span>
                      <p className="service-link__description">EAR/ITAR for biotech products</p>
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
                      <span className="service-link__title">FDA Import Compliance</span>
                      <p className="service-link__description">Pharmaceutical import regulations</p>
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
                    <Link to="/customs-defense-litigation" className="service-link">
                      <span className="service-link__title">Customs Defense & Litigation</span>
                      <p className="service-link__description">FDA detention defense</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Bay Area Locations</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/bay-area-trade-law-attorney" className="service-link">
                      <span className="service-link__title">Bay Area Trade Attorney</span>
                      <p className="service-link__description">Silicon Valley tech compliance</p>
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
                    <Link to="/san-francisco-customs-attorney" className="service-link">
                      <span className="service-link__title">San Francisco Customs Attorney</span>
                      <p className="service-link__description">SF biotech compliance</p>
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
            Export Your Biotech Products Compliantly
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let export compliance slow down your go-to-market strategy. Contact our Novato trade attorney team for expert biotech export controls and pharmaceutical import compliance services.
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

export default NovatoTradeAttorneyPage;
