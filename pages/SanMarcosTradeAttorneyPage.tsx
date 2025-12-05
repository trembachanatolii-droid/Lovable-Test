
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const SanMarcosTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'San Marcos Trade Attorney | CA Export Controls & Customs',
    description: 'San Marcos California trade compliance attorney. Export controls, customs law, tech trade for North County San Diego companies. (310) 744-1328.',
    canonical: 'san-marcos-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-san-marcos.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'San Marcos Trade Attorney - California Export Controls & Customs Compliance Lawyer',
        description: 'Serving San Marcos and North County San Diego with expert trade compliance, export controls, and customs legal services for tech companies, biotech firms, and manufacturers.',
        url: `${siteConfig.siteUrl}/san-marcos-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Locations', url: `${siteConfig.siteUrl}/california-locations` },
        { name: 'San Marcos', url: `${siteConfig.siteUrl}/san-marcos-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'San Marcos Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance, export controls, and customs legal representation for San Marcos tech companies, biotech firms, and manufacturers. Expert San Marcos trade attorney services including EAR/ITAR compliance, customs classification, OFAC sanctions screening, Section 301 tariff strategies, and trade law compliance for North County San Diego businesses.',
        serviceType: 'Trade Compliance Law',
        url: `${siteConfig.siteUrl}/san-marcos-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="San Marcos Trade Law Hero">
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
          <h1>San Marcos Trade Attorney<br />Export Controls & Customs Compliance</h1>
          <p className="hero-subtitle">
            Expert trade law for North County San Diego businesses. Export controls, customs compliance, and global trade strategy for tech, biotech, and manufacturing companies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why San Marcos Companies Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for San Marcos Innovation Economy
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              San Marcos has emerged as a <strong>North County tech and biotech hub</strong>, home to companies exporting medical devices, software, electronics, and life sciences products globally. But international trade isn't just shipping—it's <strong>navigating export controls, customs regulations, and sanctions compliance</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tech & Biotech Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                As your San Marcos trade attorney, we provide <strong>specialized counsel for technology and life sciences companies</strong>, from EAR/ITAR export controls to FDA-regulated medical device imports and pharmaceutical compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">North County Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We understand <strong>North County San Diego's business ecosystem</strong>—from San Marcos to Carlsbad, Oceanside to Escondido. Our practice serves the region's manufacturing, tech, and life sciences sectors with targeted trade compliance solutions.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Diego Port Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Many San Marcos importers and exporters use <strong>Port of San Diego for ocean freight</strong> and San Diego International Airport for time-sensitive shipments. We handle customs clearances, CBP examinations, and trade compliance at both locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for San Marcos Companies */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance for San Marcos Businesses
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Controls for Technology & Medical Devices (EAR/ITAR)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                San Marcos tech and biotech companies export products subject to the <strong>Export Administration Regulations (EAR)</strong> and, in some cases, ITAR. Whether you're shipping diagnostic equipment, medical devices, or software, you need <strong>proper ECCN classification and export licenses</strong>. We classify products, file BIS license applications, and implement export compliance programs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>ECCN Classification:</strong> Medical devices, software, electronics, diagnostics</li>
                <li><strong>Medical Device Export Compliance:</strong> FDA + BIS dual regulatory requirements</li>
                <li><strong>License Applications:</strong> SNAP-R filings for controlled technology exports</li>
                <li><strong>License Exceptions:</strong> ENC, TSU, CIV for streamlined exports</li>
                <li><strong>ITAR Compliance:</strong> Defense-related biotech and technology products</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Compliance for Importers & Manufacturers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you import components, raw materials, or finished goods through <strong>Port of San Diego or cross-border from Mexico</strong>, you need customs compliance. We handle HTS classification, customs valuation, country of origin determinations, Section 301 tariff strategies, and USMCA certifications.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for medical devices, electronics, and components</li>
                <li>USMCA origin certifications for cross-border supply chains</li>
                <li>Section 301 tariff mitigation strategies for China imports</li>
                <li>First Sale for Export valuation to reduce duty costs</li>
                <li>Customs broker oversight and compliance audits</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">OFAC Sanctions & Restricted Party Screening</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Selling to the wrong customer can result in <strong>$300,000+ fines and criminal prosecution</strong>. We help San Marcos exporters screen customers against the SDN List, Entity List, and Denied Persons List. We also advise on the <strong>50% Rule</strong> to detect sanctioned beneficial owners.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Automated screening tool selection and integration</li>
                <li>Red flag training for sales and compliance teams</li>
                <li>OFAC Specific License applications for blocked transactions</li>
                <li>China/Russia/Iran sanctions compliance for tech exports</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Medical Device Import & Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Medical device companies in San Marcos face <strong>dual regulatory requirements: FDA for device safety and CBP/BIS for trade compliance</strong>. We coordinate FDA establishment registration, 510(k) clearances, and export controls to ensure your products move legally across borders.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA/CBP coordination for medical device imports</li>
                <li>Export controls for diagnostic equipment and biotech products</li>
                <li>ECCN classification for Class I, II, and III medical devices</li>
                <li>Customs valuation for royalties and assists in device manufacturing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Trade Compliance Program Design</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Growing companies often neglect trade compliance until it's too late. We build <strong>scalable trade compliance programs</strong> tailored to your business—from your first international customer to post-acquisition integration. Investors and acquirers will ask about your compliance posture. We ensure you're ready.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Written Export Compliance Policy (ECP) for your products</li>
                <li>ECCN classification documentation for product catalog</li>
                <li>Automated restricted party screening workflows</li>
                <li>Employee training programs (sales, engineering, shipping)</li>
                <li>Due diligence readiness for M&A or funding rounds</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you receive a <strong>CBP audit notice, penalty letter, or customs detention</strong>, immediate action is critical. We represent importers in CBP audits, negotiate penalty settlements, and file Prior Disclosures to minimize exposure. Fast response prevents escalation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP Focused Assessment (FA) audit representation</li>
                <li>Customs penalty mitigation and settlement negotiations</li>
                <li>Prior Disclosure filings for self-detected violations</li>
                <li>Customs detention and seizure defense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why San Marcos Companies Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why San Marcos Businesses Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industry-Specific Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your San Marcos trade attorney, we understand <strong>medical devices, biotech, software, electronics, and manufacturing</strong>. We don't just apply generic legal templates—we customize compliance strategies to your technology and business model.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee packages</strong> for ECCN classifications, export compliance program design, and customs audits. No surprise bills. Flexible payment terms for growing companies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fast Turnaround</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We know <strong>speed matters in business</strong>. Whether you need an ECCN classification for a product launch, a license application for a new market, or emergency CBP audit support, we prioritize your deadlines. Typical ECCN classification: 5-7 business days.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">M&A & Due Diligence Support</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Investors and acquirers conduct <strong>export compliance due diligence</strong>. We prepare your compliance documentation, remediate historical issues, and represent you in negotiations. Don't let trade compliance kill your deal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            San Marcos Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Medical Devices</h3>
              <p className="text-sm text-text-secondary">FDA/BIS compliance, ECCN classification, device export controls</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Biotech & Life Sciences</h3>
              <p className="text-sm text-text-secondary">Diagnostics, biologics, dual-use technology controls</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Software & SaaS</h3>
              <p className="text-sm text-text-secondary">Encryption export controls, cloud compliance, API licensing</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Electronics Manufacturing</h3>
              <p className="text-sm text-text-secondary">HTS classification, USMCA, customs valuation</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Telecommunications</h3>
              <p className="text-sm text-text-secondary">ECCN classification, China export restrictions, encryption</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Defense Contractors</h3>
              <p className="text-sm text-text-secondary">ITAR compliance, technical data controls, deemed exports</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Pharmaceuticals</h3>
              <p className="text-sm text-text-secondary">FDA import compliance, export licensing, sanctions screening</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Consumer Products</h3>
              <p className="text-sm text-text-secondary">Product safety, HTS classification, Section 301 tariffs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep San Marcos Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand North County San Diego logistics, business corridors, and California trade compliance requirements. We serve clients by appointment throughout the San Marcos region.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Trade Routes & Corridors */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Marcos Trade Routes & Freight Corridors</h3>
              <p className="text-text-secondary mb-4">Understanding North County trade routes is essential for managing logistics:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SR-78</span>
                  <span>East-west corridor connecting San Marcos to I-5, Oceanside port access, and I-15 inland routes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-15</span>
                  <span>North-south corridor to Riverside, I-215, and Inland Empire distribution centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SR-76</span>
                  <span>Connects to I-5 and Oceanside for coastal access and Port of San Diego routes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-5</span>
                  <span>Primary coastal corridor to Port of San Diego and Los Angeles/Long Beach ports</span>
                </li>
              </ul>
            </div>

            {/* Industrial Areas */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Marcos Business & Industrial Zones</h3>
              <p className="text-text-secondary mb-4">Key manufacturing and business districts for trade compliance:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">San Marcos Corporate Center</span>
                  <span>Tech and biotech business parks along Grand Avenue corridor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Rancheros Drive Industrial</span>
                  <span>Manufacturing and distribution facilities near SR-78</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Discovery Street Business Park</span>
                  <span>Medical device and life sciences companies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">North County Trade Corridor</span>
                  <span>Carlsbad, Oceanside, Vista — regional manufacturing and logistics hub</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Port & Airport Access */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port & Airport Access for San Marcos Companies</h3>
              <p className="text-text-secondary mb-4">International shipping and air freight options:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Port of San Diego</span>
                  <span>General cargo and container terminals, cruise operations, CBP clearance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">San Diego International Airport</span>
                  <span>Air cargo facilities for time-sensitive medical devices and tech products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Otay Mesa Border Crossing</span>
                  <span>Commercial truck crossing for USMCA-compliant Mexico imports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">LA/Long Beach Ports</span>
                  <span>Alternative ocean freight access via I-5 north (90 minutes)</span>
                </li>
              </ul>
              <p className="text-sm text-text-secondary mt-4 italic">
                We respond to CBP holds and examinations within 24 hours.
              </p>
            </div>

            {/* Cities Served */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">North County Cities We Serve</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout North County San Diego:</p>
              <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary">
                <span>San Marcos</span>
                <span>Carlsbad</span>
                <span>Oceanside</span>
                <span>Vista</span>
                <span>Escondido</span>
                <span>Encinitas</span>
                <span>San Elijo Hills</span>
                <span>Solana Beach</span>
                <span>Del Mar</span>
                <span>Rancho Santa Fe</span>
                <span>Fallbrook</span>
                <span>Bonsall</span>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/export-controls-sanctions" className="service-link">
                      <span className="service-link__title">Export Controls & Sanctions</span>
                      <p className="service-link__description">ITAR/EAR/OFAC compliance</p>
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
                      <span className="service-link__title">Trade Compliance Programs</span>
                      <p className="service-link__description">Export compliance program design</p>
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
                      <p className="service-link__description">CBP audit defense</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Industry Focus</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/technology-electronics-trade-attorney" className="service-link">
                      <span className="service-link__title">Technology & Electronics</span>
                      <p className="service-link__description">Tech export controls</p>
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
                      <span className="service-link__title">Medical Devices</span>
                      <p className="service-link__description">FDA/BIS compliance</p>
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
                    <Link to="/san-diego-customs-lawyer" className="service-link">
                      <span className="service-link__title">San Diego</span>
                      <p className="service-link__description">Port of San Diego customs</p>
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
                      <p className="service-link__description">Major port complex</p>
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
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful Guides</h3>
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
              <Link to="/export-controls-sanctions" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">EAR Compliance</h4>
                <p className="text-sm text-text-secondary">Export controls</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <Link to="/resources/section-301-tariffs-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Section 301</h4>
                <p className="text-sm text-text-secondary">China tariffs</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <Link to="/ecommerce-digital-trade-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">E-commerce</h4>
                <p className="text-sm text-text-secondary">Digital trade compliance</p>
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
            Scale Your Global Business Compliantly
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let export compliance slow down your growth. Contact our San Marcos trade attorney team for expert trade law counsel.
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

export default SanMarcosTradeAttorneyPage;
