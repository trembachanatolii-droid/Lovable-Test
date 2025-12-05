
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const PicoRiveraTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'PicoRivera Trade Attorney | San Gabriel Valley CA Customs Lawyer',
    description: 'PicoRivera trade compliance attorney. Industrial and warehousing hub, I-605 corridor. Import/export, tariff classification, CBP defense. (310) 744-1328.',
    canonical: 'pico-rivera-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-pico-rivera.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'PicoRivera Trade Attorney - San Gabriel Valley Customs Compliance',
        description: 'Serving PicoRivera with expert trade compliance, customs defense, and import/export legal services.',
        url: `${siteConfig.siteUrl}/pico-rivera-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Locations', url: `${siteConfig.siteUrl}/california-locations` },
        { name: 'PicoRivera', url: `${siteConfig.siteUrl}/pico-rivera-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'PicoRivera Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance, customs defense, and import/export legal representation for PicoRivera businesses.',
        serviceType: 'Trade Compliance Law',
        url: `${siteConfig.siteUrl}/pico-rivera-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="PicoRivera Trade Attorney Hero">
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
          <h1>PicoRivera Trade Attorney<br />California Customs Compliance Lawyer</h1>
          <p className="hero-subtitle">
            Expert trade compliance counsel for PicoRivera businesses. Industrial and warehousing hub, I-605 corridor. Tariff classification, customs defense, and import/export strategy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Businesses Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Compliance for PicoRivera Businesses
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              PicoRivera businesses importing goods need more than logistics—they need <strong>legal compliance</strong>. Tariff misclassification, customs penalties, and regulatory violations can devastate your business. We protect PicoRivera importers and exporters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Local Business Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                As your PicoRivera trade attorney, we serve <strong>importers, manufacturers, and distributors</strong> throughout the San Gabriel Valley. Industry focus: Industrial, warehousing, logistics.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                We specialize in <strong>customs compliance for California businesses</strong>. HTS classification, country of origin, customs valuation, and regulatory compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CBP Defense</h3>
              <p className="text-text-secondary leading-relaxed">
                Facing a <strong>CBP audit or penalty notice</strong>? We defend PicoRivera businesses in customs enforcement actions, filing prior disclosures and negotiating settlements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance Services for PicoRivera
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Code Determination</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Correct <strong>tariff classification</strong> determines your duty rate and regulatory requirements. Misclassification can result in CBP penalties exceeding $100,000. We classify your products under the Harmonized Tariff Schedule.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>HTS Classification:</strong> 10-digit code assignment for all product types</li>
                <li><strong>CBP Binding Rulings:</strong> Advance ruling requests for classification certainty</li>
                <li><strong>Tariff Engineering:</strong> Product modification to reduce duty rates</li>
                <li><strong>Section 301 Analysis:</strong> Identify China-origin products subject to additional duties</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Focused Assessments</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A <strong>CBP audit</strong> can uncover years of compliance violations. We represent PicoRivera importers in Focused Assessments, Quick Response Audits, and all CBP compliance proceedings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment defense and document production</li>
                <li>Quick Response Audit (QRA) representation</li>
                <li>Reasonable Care Inquiry responses</li>
                <li>Post-audit corrective action plans</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Prior Disclosure & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Filing a <strong>Prior Disclosure</strong> before CBP discovers violations can reduce penalties by up to 90%. We conduct internal audits and file comprehensive disclosures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Prior Disclosure preparation under 19 USC 1592(c)(4)</li>
                <li>Internal compliance audits to identify violations</li>
                <li>Penalty mitigation and settlement negotiations</li>
                <li>Corrective action plans and remediation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                PicoRivera importers sourcing from <strong>China</strong> face Section 301 additional duties up to 25%. We analyze List coverage, explore reclassification strategies, and advise on supply chain restructuring.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 List coverage analysis (Lists 1-4A)</li>
                <li>HTS reclassification to avoid List coverage</li>
                <li>Supply chain diversification planning</li>
                <li>Country of origin planning and substantial transformation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA Certification & Free Trade Agreements</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The <strong>USMCA</strong> offers duty-free treatment for qualifying goods from Mexico and Canada. We analyze Regional Value Content, prepare certifications, and ensure origin compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA qualification analysis and RVC calculations</li>
                <li>Certificate of Origin preparation</li>
                <li>Free Trade Agreement analysis and qualification</li>
                <li>Country of origin determinations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Import Compliance Program Development</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP requires importers to exercise <strong>reasonable care</strong>. We design compliance programs that document your due diligence and implement internal controls.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Written import compliance policies and procedures</li>
                <li>Vendor compliance agreements and supplier audits</li>
                <li>Employee training for import operations</li>
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
            Why PicoRivera Companies Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regional & National Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand the PicoRivera business environment and have <strong>nationwide experience</strong> defending importers at all major U.S. ports.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                When CBP issues an audit notice or penalty letter, <strong>immediate action is critical</strong>. We respond within 24-48 hours.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee packages</strong> for tariff classification, compliance audits, and prior disclosures. Clear pricing with no surprise bills.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Results</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our attorneys have successfully negotiated <strong>penalty reductions exceeding $10 million</strong> and defended hundreds of importers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            PicoRivera Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Manufacturing</h3>
              <p className="text-sm text-text-secondary">Industrial products, components, equipment</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Retail & Consumer Goods</h3>
              <p className="text-sm text-text-secondary">Imports, consumer products, retail supplies</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Distribution & Logistics</h3>
              <p className="text-sm text-text-secondary">3PL services, warehousing, freight</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Automotive Parts</h3>
              <p className="text-sm text-text-secondary">Auto parts, accessories, components</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Electronics</h3>
              <p className="text-sm text-text-secondary">Consumer electronics, components, tech</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Apparel & Textiles</h3>
              <p className="text-sm text-text-secondary">Clothing imports, textiles, fashion</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Food & Beverage</h3>
              <p className="text-sm text-text-secondary">Food imports, FDA compliance, specialty</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Home & Construction</h3>
              <p className="text-sm text-text-secondary">Building materials, home goods, hardware</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep PicoRivera & San Gabriel Valley Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand PicoRivera's business environment and Southern California's trade infrastructure.
          </p>

          <div className="bg-neutral-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond text-center">San Gabriel Valley & LA County Cities We Serve</h3>
            <p className="text-text-secondary mb-4 text-center">Available by appointment throughout the region:</p>
            <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary text-center max-w-3xl mx-auto">
              <span>Azusa</span>
              <span>Glendora</span>
              <span>La Verne</span>
              <span>Claremont</span>
              <span>San Dimas</span>
              <span>Arcadia</span>
              <span>Monrovia</span>
              <span>Duarte</span>
              <span>Alhambra</span>
              <span>Temple City</span>
              <span>Rosemead</span>
              <span>San Gabriel</span>
              <span>Montebello</span>
              <span>Pico Rivera</span>
              <span>Bell Gardens</span>
              <span>Paramount</span>
              <span>Bellflower</span>
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
                    <Link to="/pasadena-tariff-lawyer" className="service-link">
                      <span className="service-link__title">Pasadena</span>
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
                <li>
                  <div className="service-link-item">
                    <Link to="/inland-empire-customs-attorney" className="service-link">
                      <span className="service-link__title">Inland Empire</span>
                      <p className="service-link__description">Regional coverage</p>
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
            Protect Your Business From Customs Penalties
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let customs violations threaten your business. Contact our PicoRivera trade attorney team for expert guidance on import compliance and CBP defense.
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

export default PicoRiveraTradeAttorneyPage;
