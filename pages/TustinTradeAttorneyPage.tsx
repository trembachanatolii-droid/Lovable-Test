
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const TustinTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Tustin Trade Attorney | Orange County CA Export Controls',
    description: 'Tustin California trade compliance attorney. Export controls, customs law, tariff classification for Orange County importers & exporters. (310) 744-1328.',
    canonical: 'tustin-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-tustin.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Tustin Trade Attorney - Orange County Export Controls & Customs Compliance Lawyer',
        description: 'Serving Tustin and Orange County with expert trade compliance, export controls, and customs legal services for manufacturers, tech companies, and importers.',
        url: `${siteConfig.siteUrl}/tustin-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Locations', url: `${siteConfig.siteUrl}/california-locations` },
        { name: 'Tustin', url: `${siteConfig.siteUrl}/tustin-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Tustin Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance, export controls, and customs legal representation for Tustin manufacturers, tech companies, and importers. Expert Tustin trade attorney services including EAR/ITAR compliance, HTS classification, Section 301 tariff strategies, USMCA certifications, and customs defense for Orange County businesses.',
        serviceType: 'Trade Compliance Law',
        url: `${siteConfig.siteUrl}/tustin-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="Tustin Trade Law Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Tustin Trade Attorney<br />Export Controls & Customs Compliance</h1>
          <p className="hero-subtitle">
            Expert trade law for Orange County businesses. Customs compliance, export controls, and tariff strategies for manufacturers and importers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Tustin Companies Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Tustin's Manufacturing Economy
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Tustin is a <strong>major Orange County manufacturing and distribution hub</strong>, with companies importing components from Asia and exporting finished goods globally. International trade requires <strong>navigating customs regulations, tariff classifications, and export controls</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                As your Tustin trade attorney, we provide <strong>specialized counsel for manufacturers and importers</strong>, from HTS classification and customs valuation to Section 301 tariff mitigation and USMCA certifications.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Orange County Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                We understand <strong>Orange County's logistics ecosystem</strong>—from Tustin to Irvine, Santa Ana to Anaheim. Our practice serves the region's manufacturing, aerospace, and tech sectors with targeted trade compliance solutions.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">LA/Long Beach Port Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Most Tustin importers use <strong>Ports of Los Angeles and Long Beach</strong> for ocean freight. We handle customs clearances, CBP examinations, and trade compliance at both port complexes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance for Tustin Businesses
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">HTS Classification & Tariff Engineering</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper HTS classification determines your duty rate, eligibility for trade agreements, and Section 301 tariff exposure. <strong>Misclassification can result in penalties, back duties, and lost savings</strong>. We classify products, file binding rulings, and engineer tariff-optimized supply chains.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for electronics, machinery, automotive, aerospace, and consumer goods</li>
                <li>CBP binding ruling requests for classification certainty</li>
                <li>Tariff engineering strategies to reduce duty exposure</li>
                <li>Section 301 exclusion strategies and product redesign for China imports</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Valuation & Assists</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Customs value is the foundation of duty calculations. If you provide <strong>tooling, molds, engineering, or intellectual property</strong> to overseas suppliers, you may owe duties on those "assists." We analyze transactions, apply First Sale for Export, and defend valuation audits.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>First Sale for Export valuation to reduce duty costs</li>
                <li>Assists and royalties analysis for contract manufacturers</li>
                <li>Transfer pricing coordination for related-party imports</li>
                <li>CBP valuation audit defense and penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA Certifications & Country of Origin</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you import from <strong>Mexico or Canada</strong>, USMCA offers duty-free treatment—but only if you meet origin rules. We prepare USMCA certifications, conduct origin analyses, and ensure your supply chain qualifies for preferential tariff treatment.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA origin analysis and qualification assessments</li>
                <li>USMCA certification preparation for importers and exporters</li>
                <li>Regional Value Content (RVC) calculations</li>
                <li>Country of origin determinations for marking and preference programs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariffs on Chinese imports range from <strong>7.5% to 25%</strong>—a massive cost burden for manufacturers. We implement tariff mitigation strategies including HTS reclassification, exclusion requests, supply chain restructuring, and first-sale transactions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 tariff analysis and exposure assessment</li>
                <li>Product exclusion requests (when windows reopen)</li>
                <li>Supply chain restructuring to avoid China sourcing</li>
                <li>HTS reclassification to move outside Section 301 scope</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Controls (EAR/ITAR)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you export <strong>technology, software, or dual-use products</strong>, you may need export licenses. We classify products under EAR, file license applications with BIS, and implement export compliance programs to prevent violations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ECCN classification for technology and dual-use products</li>
                <li>BIS export license applications (SNAP-R)</li>
                <li>License exception strategies (ENC, TSU, CIV)</li>
                <li>ITAR compliance for defense-related products</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you receive a <strong>CBP audit notice, penalty letter, or customs detention</strong>, immediate action is critical. We represent importers in CBP audits, negotiate penalty settlements, and file Prior Disclosures to minimize exposure.
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

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Tustin Businesses Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Tustin trade attorney, we understand <strong>contract manufacturing, supply chain management, and import/export operations</strong>. We customize compliance strategies to your production model and sourcing patterns.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost-Effective Solutions</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee packages</strong> for HTS classifications, USMCA certifications, and compliance program design. Transparent pricing with measurable ROI.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fast Turnaround</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We know <strong>delays cost money</strong>. Whether you need an HTS ruling for a new product, a USMCA certification for a shipment, or emergency CBP audit support, we prioritize your deadlines.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Duty Savings Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We identify <strong>duty savings opportunities</strong> through tariff engineering, First Sale for Export, USMCA, and other preference programs. Our clients save millions annually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Tustin Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Aerospace & Defense</h3>
              <p className="text-sm text-text-secondary">ITAR compliance, export controls, HTS classification</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Electronics Manufacturing</h3>
              <p className="text-sm text-text-secondary">HTS classification, Section 301 tariffs, USMCA</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Automotive & Parts</h3>
              <p className="text-sm text-text-secondary">USMCA certifications, country of origin, assists</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Medical Devices</h3>
              <p className="text-sm text-text-secondary">FDA/CBP compliance, HTS classification, export controls</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Machinery & Equipment</h3>
              <p className="text-sm text-text-secondary">HTS classification, tariff engineering, customs valuation</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Consumer Goods</h3>
              <p className="text-sm text-text-secondary">Product safety, Section 301 mitigation, duty drawback</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Apparel & Textiles</h3>
              <p className="text-sm text-text-secondary">Country of origin, trade preference programs, marking</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Chemicals & Plastics</h3>
              <p className="text-sm text-text-secondary">HTS classification, TSCA compliance, hazmat regulations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Tustin Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Orange County logistics, freight corridors, and California trade compliance requirements. We serve clients by appointment throughout the Tustin region.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Trade Routes */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tustin Trade Routes & Freight Corridors</h3>
              <p className="text-text-secondary mb-4">Understanding Orange County freight routes is essential for logistics:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-5</span>
                  <span>Primary north-south corridor to LA/Long Beach ports and distribution centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SR-55</span>
                  <span>Newport-Costa Mesa Freeway — connects Tustin to I-405 and coastal access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-405</span>
                  <span>San Diego Freeway — port access and Inland Empire distribution routes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SR-91</span>
                  <span>Riverside Freeway — connects to I-15, I-215, and Inland Empire logistics hubs</span>
                </li>
              </ul>
            </div>

            {/* Industrial Areas */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tustin Industrial & Distribution Zones</h3>
              <p className="text-text-secondary mb-4">Key manufacturing and warehousing districts:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Tustin Business Park</span>
                  <span>Manufacturing and logistics facilities along Red Hill Avenue</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Legacy Industrial District</span>
                  <span>Former MCAS Tustin redevelopment — warehousing and distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Irvine Spectrum Area</span>
                  <span>Adjacent tech and business park — high-tech manufacturing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Orange County Airport Area</span>
                  <span>John Wayne Airport air freight and time-sensitive logistics</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Port Access */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Access for Tustin Companies</h3>
              <p className="text-text-secondary mb-4">International shipping options:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Port of Los Angeles</span>
                  <span>Primary container port — 30 minutes via I-405/I-110</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Port of Long Beach</span>
                  <span>Container terminals and CBP examination facilities — 35 minutes via I-405</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">John Wayne Airport (SNA)</span>
                  <span>Air cargo for time-sensitive shipments — 15 minutes</span>
                </li>
              </ul>
              <p className="text-sm text-text-secondary mt-4 italic">
                We respond to CBP holds and examinations within 24 hours.
              </p>
            </div>

            {/* Cities Served */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Orange County Cities We Serve</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout Orange County:</p>
              <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary">
                <span>Tustin</span>
                <span>Irvine</span>
                <span>Santa Ana</span>
                <span>Anaheim</span>
                <span>Orange</span>
                <span>Costa Mesa</span>
                <span>Newport Beach</span>
                <span>Huntington Beach</span>
                <span>Fullerton</span>
                <span>Brea</span>
                <span>Yorba Linda</span>
                <span>Placentia</span>
              </div>
              <p className="text-sm text-text-secondary mt-4">
                <strong>Headquarters:</strong> 27001 Agoura Road, Suite 350, Calabasas, CA 91301<br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/regulatory-compliance-advisory" className="service-link">
                      <span className="service-link__title">Customs Compliance</span>
                      <p className="service-link__description">Import compliance programs</p>
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
                      <span className="service-link__title">HTS Classification</span>
                      <p className="service-link__description">Tariff classification guide</p>
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
                      <span className="service-link__title">CBP Audit Defense</span>
                      <p className="service-link__description">Customs audit representation</p>
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
                    <Link to="/apparel-textiles-trade-attorney" className="service-link">
                      <span className="service-link__title">Apparel & Textiles</span>
                      <p className="service-link__description">Country of origin compliance</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other Locations</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/irvine-trade-compliance" className="service-link">
                      <span className="service-link__title">Irvine</span>
                      <p className="service-link__description">Orange County trade law</p>
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

          <div className="bg-white p-8 rounded-lg shadow-md overflow-hidden">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful Guides</h3>
            <div className="grid md:grid-cols-5 gap-6">
              <Link to="/resources/section-301-tariffs-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Section 301</h4>
                <p className="text-sm text-text-secondary">China tariffs</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <Link to="/tariffs-duties-classification-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">HTS Guide</h4>
                <p className="text-sm text-text-secondary">Tariff classification</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <Link to="/resources/uflpa-compliance-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">UFLPA</h4>
                <p className="text-sm text-text-secondary">Forced labor compliance</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <Link to="/practice-areas" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">USMCA</h4>
                <p className="text-sm text-text-secondary">Trade agreement compliance</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <Link to="/trade-law-faq" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">FAQ</h4>
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

      {/* CTA */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Reduce Duties, Ensure Compliance
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Tustin trade attorney team for expert customs compliance and tariff optimization.
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

export default TustinTradeAttorneyPage;
