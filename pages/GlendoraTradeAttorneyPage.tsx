
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const GlendoraTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Glendora Trade Attorney | San Gabriel Valley CA Import Lawyer',
    description: 'Glendora trade compliance attorney for foothill businesses. Tariff classification, customs defense, import/export compliance. San Gabriel Valley. (310) 744-1328.',
    canonical: 'glendora-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-glendora.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Glendora Trade Attorney - San Gabriel Valley Import Compliance Lawyer',
        description: 'Serving Glendora and the San Gabriel foothills with expert trade compliance, customs defense, and import/export legal services for businesses and manufacturers.',
        url: `${siteConfig.siteUrl}/glendora-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Locations', url: `${siteConfig.siteUrl}/california-locations` },
        { name: 'Glendora', url: `${siteConfig.siteUrl}/glendora-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Glendora Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance, customs defense, and import/export legal representation for Glendora businesses. Expert customs attorney services including HTS classification, CBP audit defense, Section 301 tariff mitigation, USMCA certification, and compliance program development.',
        serviceType: 'Trade Compliance Law',
        url: `${siteConfig.siteUrl}/glendora-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="Glendora Trade Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Glendora Trade Attorney<br />Foothill Customs Compliance Lawyer</h1>
          <p className="hero-subtitle">
            Expert trade law counsel for Glendora businesses. Import compliance, tariff classification, customs audit defense, and Section 301 mitigation for San Gabriel Valley companies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Glendora Businesses Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Compliance for Glendora's Business Community
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Glendora's position in the San Gabriel foothills provides excellent access to both <strong>I-210 and I-605</strong> trade corridors. But importing goods isn't just about transportation—it's about <strong>legal compliance</strong>. Incorrect tariff classification, customs violations, and CBP penalties can devastate your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Business-Focused Counsel</h3>
              <p className="text-text-secondary leading-relaxed">
                As your Glendora trade attorney, we serve <strong>importers, distributors, and manufacturers</strong> throughout the San Gabriel Valley. We provide practical legal guidance that protects your business while enabling growth.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Import Compliance Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                We specialize in <strong>customs compliance for San Gabriel Valley businesses</strong> importing through the Ports of LA/Long Beach. Tariff classification, country of origin, customs valuation, and regulatory compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CBP Defense & Mitigation</h3>
              <p className="text-text-secondary leading-relaxed">
                Facing a <strong>CBP audit, penalty notice, or customs seizure</strong>? We defend Glendora businesses in customs enforcement actions, filing prior disclosures and negotiating settlements with CBP Fines & Penalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance Services for Glendora Companies
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">HTS Classification & Tariff Engineering</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Correct <strong>tariff classification</strong> determines your duty rate, regulatory requirements, and eligibility for trade preferences. Misclassification can result in CBP penalties exceeding $100,000. We classify your products under the Harmonized Tariff Schedule (HTS) and explore tariff engineering strategies to minimize duties.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>HTS Classification:</strong> 10-digit classification for all product types</li>
                <li><strong>Tariff Engineering:</strong> Product redesign or reclassification to reduce duty rates</li>
                <li><strong>CBP Binding Rulings:</strong> Advance ruling requests for classification certainty</li>
                <li><strong>Classification Audits:</strong> Review historical entries for misclassification exposure</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Focused Assessments</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A <strong>CBP audit</strong> can uncover years of duty underpayments and expose your company to significant penalties. We represent Glendora importers in all CBP audit proceedings, including Focused Assessments, Quick Response Audits, and Reasonable Care Inquiries.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment defense and document production strategy</li>
                <li>Quick Response Audit (QRA) representation</li>
                <li>Reasonable Care Inquiry responses and compliance demonstrations</li>
                <li>Post-audit corrective action plans and remediation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Prior Disclosure Filing & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Discovering a customs violation? Filing a <strong>Prior Disclosure</strong> before CBP discovers the issue can reduce penalties by up to 90%. We conduct internal audits, calculate duty exposure, and file disclosures with CBP under 19 USC 1592(c)(4).
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Prior Disclosure preparation and filing with CBP</li>
                <li>Internal compliance audits to identify violations</li>
                <li>Duty exposure calculations and financial analysis</li>
                <li>Penalty mitigation and settlement negotiations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Mitigation & China Strategy</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Glendora importers sourcing from <strong>China</strong> face Section 301 additional duties up to 25%. We help you identify which products are subject to List 1-4A tariffs, explore reclassification strategies, and plan supply chain diversification.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 product analysis and List coverage determination</li>
                <li>HTS reclassification strategies to avoid List coverage</li>
                <li>Supply chain diversification planning (Vietnam, Mexico, etc.)</li>
                <li>Substantial transformation analysis for country of origin shifts</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA Certification & North American Trade</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The <strong>USMCA</strong> (United States-Mexico-Canada Agreement) offers duty-free treatment for qualifying goods from Mexico and Canada. We analyze your products' Regional Value Content (RVC), prepare USMCA certifications, and ensure compliance with origin rules.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA qualification analysis and RVC calculations</li>
                <li>Certificate of Origin preparation and recordkeeping</li>
                <li>Textile and apparel-specific rules of origin</li>
                <li>Automotive RVC calculations and tracing requirements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Import Compliance Program Implementation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP requires importers to exercise <strong>reasonable care</strong> in all import transactions. We design comprehensive compliance programs that document your due diligence, implement internal controls, and train your staff on import regulations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Written import compliance policies and standard operating procedures</li>
                <li>Vendor compliance agreements and supplier qualification programs</li>
                <li>Import staff training and continuing education</li>
                <li>Recordkeeping systems and 5-year retention compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Glendora Businesses Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Local Knowledge, National Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand the San Gabriel Valley business environment and have <strong>nationwide experience</strong> defending importers in CBP enforcement actions across all ports of entry.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Immediate Response to CBP Actions</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                CBP audit notices, penalty letters, and cargo detentions require <strong>immediate action</strong>. We respond within 24-48 hours to protect your rights and minimize penalties.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Flat-Fee Pricing Options</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>transparent pricing</strong> with flat-fee packages for tariff classification, compliance audits, and prior disclosure filings. No surprise bills or excessive hourly charges.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Results</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our attorneys have successfully negotiated <strong>penalty reductions exceeding $10 million</strong>, defended hundreds of CBP audits, and helped clients achieve full compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Glendora Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Retail & Consumer Goods</h3>
              <p className="text-sm text-text-secondary">Retail imports, consumer products, household goods</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Manufacturing</h3>
              <p className="text-sm text-text-secondary">Light manufacturing, assembly operations, industrial products</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Distribution & Logistics</h3>
              <p className="text-sm text-text-secondary">3PL providers, warehousing, freight forwarding</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Automotive Parts</h3>
              <p className="text-sm text-text-secondary">Aftermarket auto parts, accessories, components</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Home Improvement</h3>
              <p className="text-sm text-text-secondary">Building materials, hardware, home goods</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Electronics</h3>
              <p className="text-sm text-text-secondary">Consumer electronics, components, accessories</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Apparel & Textiles</h3>
              <p className="text-sm text-text-secondary">Clothing imports, textiles, fashion accessories</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Food & Beverage</h3>
              <p className="text-sm text-text-secondary">Food imports, FDA compliance, specialty foods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Glendora & San Gabriel Valley Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Glendora's business environment, trade corridors, and logistics infrastructure serving the San Gabriel Valley region.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Transportation Corridors */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Glendora Trade Corridors & Transportation</h3>
              <p className="text-text-secondary mb-4">Key freight routes serving Glendora importers:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-210</span>
                  <span>Foothill Freeway — primary east-west corridor connecting to Pasadena, LA County, and San Bernardino County</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-605</span>
                  <span>San Gabriel River Freeway — connects to Ports of LA/Long Beach (south) and I-210 (north)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SR-57</span>
                  <span>Orange Freeway — provides alternative north-south routing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-10</span>
                  <span>San Bernardino Freeway — transcontinental freight corridor</span>
                </li>
              </ul>
            </div>

            {/* Business Districts */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Glendora Commercial & Business Areas</h3>
              <p className="text-text-secondary mb-4">Key business and commercial zones:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Downtown Glendora</span>
                  <span>Historic commercial district along Glendora Avenue</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Foothill Boulevard</span>
                  <span>Major commercial corridor with retail and business services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Arrow Highway</span>
                  <span>Industrial and commercial zone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Lone Hill Avenue</span>
                  <span>Business corridor connecting to adjacent cities</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond text-center">San Gabriel Valley Cities We Serve</h3>
            <p className="text-text-secondary mb-4 text-center">Available by appointment throughout the region:</p>
            <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary text-center max-w-3xl mx-auto">
              <span>Glendora</span>
              <span>Azusa</span>
              <span>San Dimas</span>
              <span>La Verne</span>
              <span>Claremont</span>
              <span>Covina</span>
              <span>West Covina</span>
              <span>Monrovia</span>
              <span>Arcadia</span>
              <span>Duarte</span>
              <span>Irwindale</span>
              <span>Baldwin Park</span>
              <span>El Monte</span>
              <span>Temple City</span>
              <span>Rosemead</span>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Trade Law Services</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/customs-defense-litigation" className="service-link">
                      <span className="service-link__title">Customs Defense</span>
                      <p className="service-link__description">CBP audit and penalty defense</p>
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
                      <span className="service-link__title">Compliance Programs</span>
                      <p className="service-link__description">Import compliance development</p>
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
                      <span className="service-link__title">All Services</span>
                      <p className="service-link__description">Complete trade law practice</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Nearby Locations</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/azusa-trade-attorney" className="service-link">
                      <span className="service-link__title">Azusa</span>
                      <p className="service-link__description">Adjacent city counsel</p>
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
                    <Link to="/san-dimas-trade-attorney" className="service-link">
                      <span className="service-link__title">San Dimas</span>
                      <p className="service-link__description">Eastern San Gabriel Valley</p>
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
                      <span className="service-link__title">LA/Long Beach Ports</span>
                      <p className="service-link__description">Port customs attorney</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Resources</h3>
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
                      <span className="service-link__title">HTS Classification</span>
                      <p className="service-link__description">Tariff fundamentals</p>
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
            Protect Your Business From Customs Compliance Issues
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let customs violations threaten your business. Contact our Glendora trade attorney team for expert guidance on import compliance and CBP defense.
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

export default GlendoraTradeAttorneyPage;
