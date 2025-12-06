
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const AzusaTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Azusa Trade Attorney | San Gabriel Valley CA Customs Lawyer',
    description: 'Azusa trade compliance attorney for I-210 corridor businesses. Import/export regulations, tariff classification, CBP defense. San Gabriel Valley. (310) 744-1328.',
    canonical: 'azusa-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-azusa.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Azusa Trade Attorney - San Gabriel Valley Customs Compliance Lawyer',
        description: 'Serving Azusa and the San Gabriel Valley with expert trade compliance, customs defense, and import/export legal services for manufacturers and distributors.',
        url: `${siteConfig.siteUrl}/azusa-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Locations', url: `${siteConfig.siteUrl}/california-locations` },
        { name: 'Azusa', url: `${siteConfig.siteUrl}/azusa-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Azusa Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance, customs defense, and import/export legal representation for Azusa businesses. Expert customs attorney services including tariff classification, HTS code determination, CBP audit defense, Section 301 mitigation, and trade compliance program development for San Gabriel Valley manufacturers and distributors.',
        serviceType: 'Trade Compliance Law',
        url: `${siteConfig.siteUrl}/azusa-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="Azusa Trade Attorney Hero">
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
          <h1>Azusa Trade Attorney<br />San Gabriel Valley Customs Lawyer</h1>
          <p className="hero-subtitle">
            Expert trade compliance counsel for Azusa manufacturers and distributors. Tariff classification, customs defense, and import/export strategy for I-210 corridor businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Azusa Businesses Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Azusa's Industrial Corridor
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Azusa's strategic location along the <strong>I-210 and SR-39</strong> makes it a key distribution hub for the San Gabriel Valley. But importing and exporting isn't just logistics—it's a <strong>legal minefield</strong>. Tariff misclassification, customs penalties, and Section 301 tariffs can devastate your bottom line.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                As your Azusa trade attorney, we serve <strong>manufacturers, importers, and distributors</strong> in the industrial zones along Azusa Avenue and Arrow Highway. We understand your supply chain challenges and compliance risks.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">I-210 Corridor Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                We specialize in <strong>customs compliance for San Gabriel Valley businesses</strong> using the I-210/I-605 corridor to move goods between the Ports of LA/Long Beach and Inland Empire distribution centers.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CBP Defense</h3>
              <p className="text-text-secondary leading-relaxed">
                Facing a <strong>CBP audit, penalty notice, or cargo examination</strong>? We defend Azusa importers in customs disputes, filing prior disclosures and negotiating penalty mitigation with CBP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance Services for Azusa Businesses
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Code Determination</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The foundation of customs compliance is <strong>correct tariff classification</strong>. Misclassifying your products can result in underpaid duties, CBP penalties, and compliance liabilities. We analyze your products, research the Harmonized Tariff Schedule, and assign defensible HTS codes.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>HTS Classification Research:</strong> 10-digit classification for all product categories</li>
                <li><strong>CBP Binding Rulings:</strong> File for advance rulings to lock in classification</li>
                <li><strong>Section 301 Analysis:</strong> Identify China origin products subject to additional duties</li>
                <li><strong>Classification Audits:</strong> Review historical entries for misclassification risks</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Audit Defense & CBP Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A <strong>CBP audit</strong> (Focused Assessment, Quick Response Audit, or Reasonable Care Inquiry) can expose your business to years of duty underpayments and penalties. We represent Azusa importers in all CBP audit proceedings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment defense and document production</li>
                <li>Quick Response Audit (QRA) representation</li>
                <li>Reasonable Care Inquiry responses</li>
                <li>Post-audit compliance remediation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Prior Disclosure & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you discover a customs violation—underpaid duties, misclassification, or value errors—filing a <strong>Prior Disclosure</strong> with CBP can reduce penalties by up to 90%. Time is critical. We prepare and file disclosures immediately.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Prior Disclosure preparation and filing (19 USC 1592)</li>
                <li>Internal compliance audits to identify violations</li>
                <li>Penalty mitigation and negotiation with CBP Fines & Penalties</li>
                <li>Supplemental filings and corrective action plans</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Strategies & Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Azusa importers bringing goods from <strong>China</strong> face Section 301 additional duties of up to 25%. We help you explore tariff mitigation strategies, product exclusions, and supply chain restructuring.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 product classification and List coverage analysis</li>
                <li>Tariff engineering and HTS reclassification strategies</li>
                <li>Country of origin planning and supply chain diversification</li>
                <li>Product exclusion requests (if exclusion process reopens)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Country of Origin & USMCA Certification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Country of origin determines applicable duty rates, trade preferences, and regulatory requirements. We advise on <strong>substantial transformation</strong> analysis, USMCA qualification, and origin certification for North American supply chains.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Country of origin determinations and substantial transformation analysis</li>
                <li>USMCA certification and Regional Value Content (RVC) calculations</li>
                <li>Marking requirements (19 CFR Part 134)</li>
                <li>First Sale for Export valuation strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Import Compliance Program Development</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP expects importers to exercise <strong>reasonable care</strong> in their import operations. We design customized compliance programs that document your due diligence, reduce audit risk, and establish defensible import procedures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Written import compliance policies and procedures</li>
                <li>Vendor compliance agreements and audits</li>
                <li>Employee training for import operations staff</li>
                <li>Recordkeeping systems (5-year retention requirements)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Azusa Companies Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Gabriel Valley Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand Azusa's industrial landscape, the I-210 corridor logistics network, and the challenges facing local manufacturers and distributors. We provide <strong>practical, business-focused legal counsel</strong> tailored to your operations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fast Response to CBP Actions</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                When CBP issues an audit notice, penalty letter, or cargo detention, <strong>time is critical</strong>. We respond immediately, protecting your rights and minimizing financial exposure. Typical response time: 24-48 hours.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Fixed-Fee Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                No surprise bills. We offer <strong>flat-fee packages</strong> for tariff classification projects, compliance audits, and prior disclosure filings. Clear pricing structure designed for businesses of all sizes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Track Record</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We've successfully defended hundreds of importers in CBP audits and enforcement actions, negotiated penalty reductions exceeding $10 million, and helped clients implement compliant import programs that withstand CBP scrutiny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Azusa Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Manufacturing</h3>
              <p className="text-sm text-text-secondary">Industrial equipment, machinery, metal fabrication</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Construction Materials</h3>
              <p className="text-sm text-text-secondary">Building supplies, hardware, industrial materials</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Automotive Parts</h3>
              <p className="text-sm text-text-secondary">Auto parts distribution, aftermarket components</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Consumer Goods</h3>
              <p className="text-sm text-text-secondary">Retail products, household goods, general merchandise</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Electronics</h3>
              <p className="text-sm text-text-secondary">Consumer electronics, components, accessories</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Textiles & Apparel</h3>
              <p className="text-sm text-text-secondary">Clothing, fabrics, textile products</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Food & Beverage</h3>
              <p className="text-sm text-text-secondary">Food imports, FDA compliance, beverage distribution</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Logistics & Warehousing</h3>
              <p className="text-sm text-text-secondary">3PL providers, distribution centers, freight forwarders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Azusa Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Azusa's industrial corridors, logistics infrastructure, and San Gabriel Valley business environment. We serve clients throughout the region.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Transportation Corridors */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Azusa Transportation & Logistics Corridors</h3>
              <p className="text-text-secondary mb-4">Key freight routes for import/export operations:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-210</span>
                  <span>Foothill Freeway — primary east-west corridor connecting San Gabriel Valley to Pasadena, LA, and Inland Empire</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SR-39</span>
                  <span>San Gabriel Canyon Road — connects Azusa to I-10 and provides alternative routing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-605</span>
                  <span>San Gabriel River Freeway — north-south corridor connecting to Ports of LA/Long Beach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-10</span>
                  <span>San Bernardino Freeway — major transcontinental route for east-west freight</span>
                </li>
              </ul>
            </div>

            {/* Industrial Areas */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Azusa Industrial & Commercial Zones</h3>
              <p className="text-text-secondary mb-4">Key business districts and industrial areas:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Azusa Avenue Corridor</span>
                  <span>Industrial facilities, warehousing, manufacturing operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Arrow Highway District</span>
                  <span>Commercial and light industrial zone with distribution centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Foothill Boulevard</span>
                  <span>Commercial corridor with retail and business services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Irwindale Border</span>
                  <span>Access to major aggregate and industrial operations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond text-center">San Gabriel Valley Cities We Serve</h3>
            <p className="text-text-secondary mb-4 text-center">Available by appointment throughout the San Gabriel Valley region:</p>
            <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary text-center max-w-3xl mx-auto">
              <span>Azusa</span>
              <span>Glendora</span>
              <span>La Verne</span>
              <span>Claremont</span>
              <span>San Dimas</span>
              <span>Covina</span>
              <span>West Covina</span>
              <span>Baldwin Park</span>
              <span>Irwindale</span>
              <span>Duarte</span>
              <span>Monrovia</span>
              <span>Arcadia</span>
              <span>El Monte</span>
              <span>Rosemead</span>
              <span>Temple City</span>
              <span>San Gabriel</span>
              <span>Alhambra</span>
              <span>Pasadena</span>
            </div>
            <p className="text-sm text-text-secondary mt-6 text-center">
              <strong>Headquarters:</strong> 27001 Agoura Road, Suite 350, Calabasas, CA 91301<br />
              <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a>
            </p>
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
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Trade Law Services</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/customs-defense" className="service-link">
                      <span className="service-link__title">Customs Defense & Litigation</span>
                      <p className="service-link__description">CBP audit defense and penalty mitigation</p>
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
                      <span className="service-link__title">Regulatory Compliance</span>
                      <p className="service-link__description">Import compliance program development</p>
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

            {/* Nearby Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Nearby Locations</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/glendora-trade-attorney" className="service-link">
                      <span className="service-link__title">Glendora Trade Attorney</span>
                      <p className="service-link__description">Adjacent city trade counsel</p>
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
                    <Link to="/pasadena-tariff-lawyer" className="service-link">
                      <span className="service-link__title">Pasadena Tariff Lawyer</span>
                      <p className="service-link__description">Western San Gabriel Valley</p>
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
                      <span className="service-link__title">LA Port Customs Attorney</span>
                      <p className="service-link__description">Port of LA/Long Beach</p>
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
                    <Link to="/resources/section-301-tariffs-guide" className="service-link">
                      <span className="service-link__title">Section 301 Guide</span>
                      <p className="service-link__description">China tariff strategies</p>
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
                      <span className="service-link__title">HTS Classification Guide</span>
                      <p className="service-link__description">Tariff classification fundamentals</p>
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
                      <span className="service-link__title">Trade Law FAQ</span>
                      <p className="service-link__description">Common questions answered</p>
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
            Protect Your Business From Customs Penalties
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let tariff misclassification or customs violations threaten your business. Contact our Azusa trade attorney team for expert guidance on import compliance and CBP defense.
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

export default AzusaTradeAttorneyPage;
