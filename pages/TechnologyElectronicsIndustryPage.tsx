import React, { lazy, Suspense } from 'react';

import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const TechnologyElectronicsIndustryPage: React.FC = () => {
  useMeta({
    title: 'Tech Industry Trade Attorney CA | Electronics Import Lawyer',
    description: 'California electronics import attorney & tech industry customs lawyer. HTS classification, Section 301 tariffs, encryption export controls, semiconductor trade compliance & technology supply chain law. Call (310) 744-1328.',
    canonical: 'technology-electronics-trade-attorney',
    schema: [
      generateWebPageSchema({
        title: 'Technology & Electronics Industry Trade Law Services',
        description: 'Specialized international trade law services for California technology and electronics companies. Expert guidance on import compliance, export controls, tariff strategies, and supply chain optimization.',
        url: 'technology-electronics-trade-attorney',
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: '' },
        { name: 'Industries', url: 'technology-electronics-trade-attorney' },
        { name: 'Technology & Electronics', url: 'technology-electronics-trade-attorney' },
      ]),
      generateServiceSchema({
        name: 'Technology & Electronics Trade Law Services',
        description: 'Comprehensive trade law services for technology and electronics companies including customs compliance, export controls, tariff optimization, and supply chain strategies.',
        serviceType: 'Legal Services',
      }),
    ],
  });

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="Technology Electronics Trade Law Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop"
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
          <h1>California Trade Law Attorney for<br />Technology & Electronics Companies</h1>
          <p className="hero-subtitle">
            Specialized international trade compliance for semiconductor manufacturers, electronics importers, software companies, and technology supply chains.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Schedule Strategic Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Unique Trade Compliance Challenges for Technology Companies
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              The technology sector faces complex regulatory requirements across multiple jurisdictions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Classification Complexity</h3>
              <p className="text-text-secondary leading-relaxed">
                Technology products often have ambiguous HTS classifications affecting duty rates. Smartphones, tablets, and IoT devices may fall into multiple tariff categories. Incorrect classification can result in significant overpayment or CBP penalties.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Section 301 Tariff Exposure</h3>
              <p className="text-text-secondary leading-relaxed">
                Most electronics imported from China face 25% Section 301 additional duties. California tech companies must develop tariff mitigation strategies including classification optimization, supply chain restructuring, and exclusion requests.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Control Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Technology products containing encryption or advanced computing capabilities require EAR classification and potential export licenses. Deemed exports to foreign national employees add complexity. Violations carry severe penalties.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Semiconductor Supply Chain Risks</h3>
              <p className="text-text-secondary leading-relaxed">
                Semiconductor shortages and geopolitical tensions require supply chain agility. Companies must navigate Entity List restrictions, understand de minimis rules for products containing U.S. content, and comply with CHIPS Act requirements.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Product Cycles</h3>
              <p className="text-text-secondary leading-relaxed">
                Technology companies release new products constantly, each requiring customs classification, export control analysis, and compliance documentation. Manual processes cannot keep pace with innovation.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cross-Border Data Transfer</h3>
              <p className="text-text-secondary leading-relaxed">
                Cloud services and software companies must navigate international data privacy laws, data localization requirements, and export controls on technology. GDPR, CCPA, and Chinese data laws create compliance complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Specialized Services for Technology & Electronics Companies
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">HTS Classification Strategy</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Electronics classification analysis, binding ruling requests to CBP, and first sale valuation strategies. Section 301 tariff mitigation and product-specific duty optimization for technology products.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Electronics classification analysis (smartphones, tablets, computers)</li>
                <li>Binding ruling requests to CBP</li>
                <li>First sale valuation strategies</li>
                <li>Section 301 tariff mitigation</li>
                <li>Product-specific duty optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Control Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                ECCN classification for technology products, encryption registration and reporting, export license applications, and Entity List screening. Deemed export programs for R&D teams and Technology Control Plans.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ECCN classification for technology products</li>
                <li>Encryption registration and reporting (BIS)</li>
                <li>Export license applications (EAR)</li>
                <li>Entity List screening and compliance</li>
                <li>Deemed export programs for R&D teams</li>
                <li>Technology Control Plans (TCP)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Semiconductor Supply Chain</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Entity List impact analysis, de minimis rule calculations, and supply chain restructuring strategies. CHIPS Act compliance guidance and alternative sourcing analysis for semiconductor companies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Entity List impact analysis</li>
                <li>De minimis rule calculations</li>
                <li>Supply chain restructuring strategies</li>
                <li>CHIPS Act compliance and incentives</li>
                <li>Country of origin determinations</li>
                <li>Alternative sourcing analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Import Compliance Programs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Automated classification systems and scalable compliance for high-volume imports. Integration with ERP systems (SAP, Oracle), audit defense preparation, and prior disclosure strategy development.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Automated classification systems</li>
                <li>Scalable compliance for high-volume imports</li>
                <li>Integration with ERP systems (SAP, Oracle)</li>
                <li>Audit defense preparation</li>
                <li>Prior disclosure strategy</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Defense & Litigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Focused assessment defense for technology companies, classification disputes at the Court of International Trade, Section 301 exclusion appeals, and penalty mitigation. Seizure release for counterfeit concerns.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused assessment defense</li>
                <li>Classification disputes (CIT litigation)</li>
                <li>Section 301 exclusion appeals</li>
                <li>Penalty mitigation for tech companies</li>
                <li>Seizure release (counterfeit concerns)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Duty Savings Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Foreign Trade Zone utilization, drawback claims for returned products, and first sale valuation programs. FTA qualification strategies (USMCA, KORUS) and Section 9817 temporary import programs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Foreign Trade Zone utilization</li>
                <li>Drawback claims for returned products</li>
                <li>First sale valuation programs</li>
                <li>FTA qualification (USMCA, KORUS)</li>
                <li>Section 9817 temporary imports</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology-Specific Issues */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Product-Specific Trade Compliance Guidance
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Smartphones & Tablets</h3>
              <p className="text-gray-700 mb-3">
                <strong>Classification Challenges:</strong> May be classified as telephones (8517), computing machines (8471), or other devices depending on principal function. Classification affects duty rates (often free vs. 2.5%) and Section 301 applicability.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Export Controls:</strong> Devices with encryption require ECCN classification (typically 5A992 or 5A002). Must file Semi-Annual Self-Classification Reports to BIS. Strong encryption may require export licenses to certain countries.
              </p>
              <p className="text-gray-700">
                <strong>Our Approach:</strong> Obtain binding rulings for new product lines. Classify encryption capabilities. Establish automated screening for Entity List concerns.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Computers & Servers</h3>
              <p className="text-gray-700 mb-3">
                <strong>Classification Challenges:</strong> Desktop computers, laptops, and servers typically classify under HTS 8471 (duty-free). However, gaming systems, thin clients, and specialized computing devices may have different treatment.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Export Controls:</strong> High-performance computers face export restrictions to certain countries. Advanced processors (AI/ML accelerators) may require ECCN 3A001 or 4A003 classification and licenses.
              </p>
              <p className="text-gray-700">
                <strong>Our Approach:</strong> Analyze computing specifications against EAR Composite Theoretical Performance (CTP) thresholds. Structure supply chains to minimize controlled content.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Semiconductors & Components</h3>
              <p className="text-gray-700 mb-3">
                <strong>Classification Challenges:</strong> Semiconductor devices (diodes, transistors, ICs) fall under Chapter 85 with varying duty rates. Origin determinations are complex for multi-country manufacturing.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Export Controls:</strong> Advanced semiconductor manufacturing equipment and certain chips face strict export controls to China and other countries. Entity List includes major Chinese semiconductor companies.
              </p>
              <p className="text-gray-700">
                <strong>Our Approach:</strong> Navigate Entity List restrictions. Calculate de minimis thresholds for products containing U.S. semiconductors. Advise on CHIPS Act incentive eligibility.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Software & Cloud Services</h3>
              <p className="text-gray-700 mb-3">
                <strong>Classification Challenges:</strong> Software on physical media is dutiable. Downloaded/cloud software generally not subject to customs duties but may face other trade barriers.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Export Controls:</strong> Encryption software, cybersecurity tools, and network penetration software face EAR controls. Open-source releases require specific exception compliance. Technical data for controlled software requires licenses.
              </p>
              <p className="text-gray-700">
                <strong>Our Approach:</strong> Classify software under EAR (typically 5D002 or 5D992). File encryption self-classification reports. Structure cloud services to comply with data localization laws while meeting export control requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Technology Companies Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Technology Industry Expertise</h3>
              <p className="text-gray-700">
                Deep understanding of technology products, manufacturing processes, and business models. We speak your language and understand the fast-paced nature of the tech sector.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Silicon Valley & California Focus</h3>
              <p className="text-gray-700">
                Based in California with extensive experience representing Silicon Valley companies, Southern California tech firms, and San Diego innovators at Los Angeles and San Francisco ports.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Rapid Response for Product Launches</h3>
              <p className="text-gray-700">
                Fast turnaround on classification analysis, export control reviews, and compliance documentation to support your product launch timelines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Integration with Your Systems</h3>
              <p className="text-gray-700">
                Experience integrating compliance processes with ERP systems (SAP, Oracle), PLM systems, and e-commerce platforms for scalable automation.
              </p>
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
                    <Link to="/practice-areas" className="service-link">
                      <span className="service-link__title">Export Controls & Sanctions</span>
                      <p className="service-link__description">ITAR/EAR compliance for tech</p>
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
                      <p className="service-link__description">Section 301 disputes defense</p>
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
                      <span className="service-link__title">Trade Compliance Programs</span>
                      <p className="service-link__description">Compliance program design</p>
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

            {/* California Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Serving Tech Hubs</h3>
              <ul className="space-y-3">
                <li>
                  <div className="service-link-item">
                    <Link to="/bay-area-trade-law-attorney" className="service-link">
                      <span className="service-link__title">San Francisco & Bay Area</span>
                      <p className="service-link__description">Silicon Valley tech expertise</p>
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
                      <span className="service-link__title">Los Angeles & Long Beach Port</span>
                      <p className="service-link__description">Hardware imports through LA/LB</p>
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

            {/* Other Industries */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Other Industries</h3>
              <ul className="space-y-3">
                <li>
                  <div className="service-link-item">
                    <Link to="/apparel-textiles-trade-attorney" className="service-link">
                      <span className="service-link__title">Apparel & Textiles</span>
                      <p className="service-link__description">Wearable tech compliance</p>
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
                    <Link to="/food-agriculture-trade-attorney" className="service-link">
                      <span className="service-link__title">Food & Agriculture</span>
                      <p className="service-link__description">AgTech trade compliance</p>
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

          {/* Helpful Guides for Tech Companies */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-primary-navy mb-8 text-center font-garamond">
              Helpful Guides for Tech Companies
            </h3>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-12"></div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
                <h4 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Tariff Resources</h4>
                <div className="space-y-0">
                  <div className="service-link-item">
                    <Link to="/resources/section-301-tariffs-guide" className="service-link">
                      <span className="service-link__title">Section 301 Tariffs Guide</span>
                      <p className="service-link__description">China tariff mitigation strategies</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                  <div className="service-link-item">
                    <Link to="/resources/tariffs-duties-classification" className="service-link">
                      <span className="service-link__title">Tariff Classification Guide</span>
                      <p className="service-link__description">HTS classification best practices</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
                <h4 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Compliance Guides</h4>
                <div className="space-y-0">
                  <div className="service-link-item">
                    <Link to="/resources/uflpa-compliance-guide" className="service-link">
                      <span className="service-link__title">UFLPA Compliance Guide</span>
                      <p className="service-link__description">Supply chain compliance</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                  <div className="service-link-item">
                    <Link to="/practice-areas" className="service-link">
                      <span className="service-link__title">Export Controls Guide</span>
                      <p className="service-link__description">EAR/ITAR compliance for tech</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
                <h4 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Learn More</h4>
                <div className="space-y-0">
                  <div className="service-link-item">
                    <Link to="/trade-law-faq" className="service-link">
                      <span className="service-link__title">FAQ Center</span>
                      <p className="service-link__description">Common tech trade questions</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                  <div className="service-link-item">
                    <Link to="/contact" className="service-link">
                      <span className="service-link__title">Schedule Consultation</span>
                      <p className="service-link__description">Get personalized guidance</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* California Tech Hub Local Knowledge */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Deep California Tech Hub Local Knowledge
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              On-the-ground expertise serving technology companies throughout Silicon Valley, Southern California tech corridors, and San Diego's innovation district
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Silicon Valley Tech Corridors */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Silicon Valley & Bay Area Tech Corridors</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <div>
                    <strong>Highway 101 Corridor:</strong> San Francisco → San Jose, connecting major tech campuses (Meta, Google, Apple, Tesla)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <div>
                    <strong>I-280 Tech Belt:</strong> Palo Alto → San Jose, Stanford Research Park to downtown San Jose tech district
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <div>
                    <strong>East Bay Tech Hub:</strong> Fremont (Tesla), Dublin/Pleasanton logistics, Port of Oakland access via I-880
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <div>
                    <strong>San Francisco Tech District:</strong> SoMa, Mission Bay biotech cluster, SF port terminal access
                  </div>
                </li>
              </ul>
            </div>

            {/* Southern California Tech */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Southern California Tech & Logistics</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <div>
                    <strong>Silicon Beach:</strong> Santa Monica, Venice, Playa Vista - LA's tech startup hub near LAX
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <div>
                    <strong>Irvine Tech Corridor:</strong> Orange County tech headquarters, semiconductor companies along I-405
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <div>
                    <strong>Inland Empire Distribution:</strong> Ontario, Riverside, San Bernardino - major fulfillment centers for tech products
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <div>
                    <strong>San Diego Tech:</strong> Qualcomm corridor, biotech cluster (Sorrento Valley), Naval tech contractors
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Tech Import Logistics */}
          <div className="bg-primary-navy/5 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-primary-navy mb-4 text-center">California Tech Import & Distribution Infrastructure</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-primary-navy mb-2">Bay Area Ports</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Port of Oakland - Asia-Pacific electronics gateway</li>
                  <li>San Francisco Pier terminals</li>
                  <li>Oakland International Airport cargo</li>
                  <li>SFO international freight</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary-navy mb-2">SoCal Ports</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Port of LA - largest container volume</li>
                  <li>Port of Long Beach - tech imports hub</li>
                  <li>LAX cargo - express shipments</li>
                  <li>Ontario Airport freight</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary-navy mb-2">CBP Tech Facilities</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>San Francisco CBP Office</li>
                  <li>Oakland Port CBP</li>
                  <li>LA/Long Beach Service Port</li>
                  <li>San Diego tech border processing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* California Tech Cities Served */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary-navy mb-4 text-center">California Tech Cities We Serve</h3>
            <p className="text-center text-gray-600 mb-4">Available by appointment throughout California's technology corridors</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-center text-sm">
              {[
                'San Jose', 'Palo Alto', 'Mountain View', 'Cupertino', 'Santa Clara', 'Sunnyvale',
                'Fremont', 'San Francisco', 'Oakland', 'Menlo Park', 'Redwood City', 'San Mateo',
                'Irvine', 'Santa Monica', 'Los Angeles', 'San Diego', 'Burbank', 'Pasadena',
                'Costa Mesa', 'Newport Beach', 'Torrance', 'El Segundo', 'Carlsbad', 'Calabasas'
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
            Ready to Optimize Your Technology Trade Compliance?
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Schedule a consultation with California's leading trade law attorney for technology and electronics companies.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">
              Schedule Strategic Consultation
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

export default TechnologyElectronicsIndustryPage;
