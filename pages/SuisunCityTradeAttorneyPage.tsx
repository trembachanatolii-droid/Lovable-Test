import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const SuisunCityTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Suisun City Trade Attorney | Solano County Port & Logistics Trade Law CA',
    description: 'Suisun City trade attorney. Suisun City trade attorney for port logistics, maritime exports, and customs compliance. (310) 744-1328.',
    canonical: 'suisun-city-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-suisun-city-trade-attorney.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Suisun City Trade Attorney - Solano County Port & Logistics Trade Law',
        description: 'Suisun City trade attorney for port logistics, maritime exports, and customs compliance',
        url: `${siteConfig.siteUrl}/suisun-city-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Local Offices', url: `${siteConfig.siteUrl}/local-offices` },
        { name: 'Suisun City', url: `${siteConfig.siteUrl}/suisun-city-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Suisun City Trade Compliance Legal Services',
        description: 'Suisun City trade attorney for port logistics, maritime exports, and customs compliance',
        serviceType: 'Trade Law',
        url: `${siteConfig.siteUrl}/suisun-city-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="Suisun City Trade Law Hero">
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
          <h1>Suisun City Trade Attorney<br />Export Compliance & Customs Law</h1>
          <p className="hero-subtitle">
            Expert trade compliance, export controls, and customs legal services for Suisun City businesses. Solano County Port & Logistics Trade Law representation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Suisun City Businesses
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Suisun City businesses engaged in international trade face complex regulatory requirements. From <strong>export controls and customs compliance to OFAC sanctions screening</strong>, navigating trade regulations requires specialized legal expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Controls Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Navigate <strong>EAR/ITAR export regulations, ECCN classifications, and export license applications</strong> for Suisun City companies shipping products internationally.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Customs Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Ensure proper <strong>HTS classification, customs valuation, and country of origin determinations</strong> for smooth import/export operations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Sanctions Screening</h3>
              <p className="text-text-secondary leading-relaxed">
                Implement <strong>OFAC sanctions compliance programs, restricted party screening, and trade embargo compliance</strong> for Suisun City exporters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance Services for Suisun City
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Controls (EAR/ITAR) Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Suisun City companies exporting technology, software, or controlled products must comply with <strong>Export Administration Regulations (EAR) and International Traffic in Arms Regulations (ITAR)</strong>. We provide ECCN classifications, license applications, and export compliance program design.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>ECCN Classification:</strong> Determine export control classification numbers</li>
                <li><strong>Export License Applications:</strong> BIS SNAP-R and DDTC licensing</li>
                <li><strong>License Exception Strategies:</strong> Leverage ENC, TSU, CIV, TMP exemptions</li>
                <li><strong>Deemed Export Compliance:</strong> Foreign national employee controls</li>
                <li><strong>ITAR Registration & Compliance:</strong> Defense article manufacturing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Compliance & Import/Export Operations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper customs compliance protects Suisun City businesses from penalties, seizures, and supply chain disruptions. We handle <strong>HTS classification, customs valuation, duty mitigation, and CBP audits</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS tariff classification and binding rulings</li>
                <li>Customs valuation and transaction value analysis</li>
                <li>Free Trade Agreement (FTA) compliance and origin certifications</li>
                <li>Section 301 tariff mitigation strategies</li>
                <li>CBP audits and Focused Assessments defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">OFAC Sanctions & Restricted Party Screening</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Selling to sanctioned countries or parties can result in severe penalties. We help Suisun City businesses implement <strong>OFAC compliance programs, screen customers against restricted party lists, and handle blocked transactions</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>OFAC sanctions compliance program design and audits</li>
                <li>Restricted party screening (SDN, Entity List, Denied Persons)</li>
                <li>Country-based sanctions compliance (Russia, Iran, China, Cuba)</li>
                <li>OFAC Specific License applications for blocked transactions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Trade Compliance Program Development</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Effective trade compliance programs prevent violations and demonstrate good faith to regulators. We design <strong>scalable compliance programs</strong> tailored to Suisun City business operations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Written Export Compliance Policies (ECP)</li>
                <li>Internal Control Plans (ICP) for export operations</li>
                <li>Employee training programs for sales, shipping, and compliance teams</li>
                <li>Recordkeeping and audit trail systems</li>
                <li>Periodic compliance audits and risk assessments</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">BIS/OFAC/CBP Enforcement Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If your Suisun City business receives a subpoena, charging letter, or penalty notice from BIS, OFAC, or CBP, immediate legal representation is critical. We defend clients in <strong>administrative enforcement proceedings and voluntary self-disclosures</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Voluntary Self-Disclosure (VSD) preparation and filing</li>
                <li>BIS, OFAC, CBP charging letter responses</li>
                <li>Penalty mitigation and settlement negotiations</li>
                <li>Administrative appeals and denied party removal petitions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign Trade Zones & Duty Savings Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Suisun City importers and manufacturers can leverage <strong>Foreign Trade Zones (FTZ), duty drawback programs, and first sale for export valuation</strong> to reduce customs duties and improve cash flow.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Foreign Trade Zone (FTZ) applications and operations</li>
                <li>Duty drawback program implementation</li>
                <li>First Sale for Export valuation strategies</li>
                <li>Temporary Importation Under Bond (TIB) procedures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Suisun City Businesses Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Specialized Trade Law Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Trade compliance is all we do. Our attorneys focus exclusively on <strong>export controls, customs law, and international trade regulations</strong>. We stay current on regulatory changes and have deep relationships with federal agencies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost-Effective Solutions</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>transparent flat-fee pricing</strong> for ECCN classifications, compliance program design, and voluntary disclosures. No surprise bills. Flexible payment terms for growing businesses.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response & Turnaround</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Trade compliance issues require <strong>immediate attention</strong>. Whether you need an emergency VSD, urgent export license application, or CBP detention response, we prioritize your deadlines and respond within 24 hours.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Track Record</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We've successfully defended dozens of enforcement cases, obtained hundreds of export licenses, and designed compliance programs for companies of all sizes. Our clients avoid penalties and maintain smooth trade operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Suisun City Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Technology & Software</h3>
              <p className="text-sm text-text-secondary">Encryption export controls, cloud services</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Manufacturing</h3>
              <p className="text-sm text-text-secondary">Industrial equipment, machinery exports</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Food & Agriculture</h3>
              <p className="text-sm text-text-secondary">USDA/FDA compliance, food exports</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Aerospace & Defense</h3>
              <p className="text-sm text-text-secondary">ITAR compliance, defense articles</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Consumer Goods</h3>
              <p className="text-sm text-text-secondary">Retail imports, HTS classification</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Medical Devices</h3>
              <p className="text-sm text-text-secondary">FDA/EAR compliance, device exports</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Automotive</h3>
              <p className="text-sm text-text-secondary">Parts imports, USMCA origin compliance</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">E-commerce</h3>
              <p className="text-sm text-text-secondary">Cross-border shipping, de minimis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Suisun City Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Suisun City's business environment, transportation infrastructure, and trade corridors. We serve clients by appointment throughout the region.
          </p>

          <div className="bg-neutral-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Suisun City Business & Trade Environment</h3>
            <p className="text-text-secondary mb-4">
              Suisun City businesses benefit from California's extensive trade infrastructure and proximity to major ports. We provide local expertise combined with deep knowledge of federal trade regulations.
            </p>
            <p className="text-sm text-text-secondary mt-4">
              <strong>Headquarters:</strong> 27001 Agoura Road, Suite 350, Calabasas, CA 91301<br />
              <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a>
            </p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Trade Legal Services</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/practice-areas" className="service-link">
                      <span className="service-link__title">Export Controls & Sanctions</span>
                      <p className="service-link__description">EAR/ITAR/OFAC compliance</p>
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
                      <span className="service-link__title">Customs Defense</span>
                      <p className="service-link__description">CBP enforcement defense</p>
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
                      <p className="service-link__description">Tech export compliance</p>
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
                    <Link to="/contact" className="service-link">
                      <span className="service-link__title">Calabasas HQ Office</span>
                      <p className="service-link__description">27001 Agoura Road, Suite 350</p>
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
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful Trade Compliance Guides</h3>
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
              <a href="#article/export-controls" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Export Controls</h4>
                <p className="text-sm text-text-secondary">EAR/ITAR compliance</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#article/customs-compliance" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Customs Guide</h4>
                <p className="text-sm text-text-secondary">HTS & valuation</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
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
            Navigate Trade Compliance with Confidence
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let complex trade regulations slow down your business. Contact our Suisun City trade attorney team for expert export controls, customs compliance, and sanctions guidance.
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

export default SuisunCityTradeAttorneyPage;
