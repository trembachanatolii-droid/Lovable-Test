
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LaVerneTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'La Verne Trade Attorney | Pomona Valley CA Customs Lawyer',
    description: 'La Verne trade compliance attorney for Pomona Valley businesses. Import/export regulations, tariff classification, CBP defense. San Gabriel Valley. (310) 744-1328.',
    canonical: 'la-verne-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-la-verne.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'La Verne Trade Attorney - Pomona Valley Customs Compliance Lawyer',
        description: 'Serving La Verne and the Pomona Valley with expert trade compliance, customs defense, and import/export legal services for businesses and manufacturers.',
        url: `${siteConfig.siteUrl}/la-verne-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Locations', url: `${siteConfig.siteUrl}/california-locations` },
        { name: 'La Verne', url: `${siteConfig.siteUrl}/la-verne-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'La Verne Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance, customs defense, and import/export legal representation for La Verne businesses. Expert customs attorney services including HTS classification, CBP audit defense, Section 301 tariff mitigation, and trade compliance program development.',
        serviceType: 'Trade Compliance Law',
        url: `${siteConfig.siteUrl}/la-verne-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="La Verne Trade Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920&auto=format&fit=crop"
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
          <h1>La Verne Trade Attorney<br />Pomona Valley Customs Lawyer</h1>
          <p className="hero-subtitle">
            Expert trade compliance counsel for La Verne importers and distributors. Tariff classification, customs audit defense, and Section 301 mitigation for Pomona Valley businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why La Verne Businesses Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for La Verne's Business Community
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              La Verne's location at the intersection of <strong>I-210, SR-57, and I-10</strong> provides excellent access to Southern California trade corridors. But importing goods requires more than logistics—it demands <strong>strict legal compliance</strong>. Tariff misclassification, customs penalties, and regulatory violations can devastate your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Pomona Valley Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                As your La Verne trade attorney, we serve <strong>importers, manufacturers, and distributors</strong> throughout the Pomona Valley and eastern San Gabriel Valley. We provide practical, business-focused legal guidance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Import Compliance Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We specialize in <strong>customs compliance for California businesses</strong> importing through the Ports of LA/Long Beach. HTS classification, country of origin determinations, and regulatory compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CBP Enforcement Defense</h3>
              <p className="text-text-secondary leading-relaxed">
                Facing a <strong>CBP audit, penalty notice, or customs detention</strong>? We defend La Verne importers in all customs enforcement proceedings, including prior disclosures and penalty negotiations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance Services for La Verne Businesses
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Code Analysis</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper <strong>tariff classification</strong> is the foundation of customs compliance. Incorrect HTS codes can result in underpaid duties, CBP penalties exceeding $100,000, and cargo detentions. We classify your products under the Harmonized Tariff Schedule and file CBP binding ruling requests.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>HTS Classification:</strong> 10-digit code assignment for all product types</li>
                <li><strong>CBP Binding Rulings:</strong> Advance ruling requests for classification certainty</li>
                <li><strong>Tariff Engineering:</strong> Product modification strategies to reduce duty rates</li>
                <li><strong>Section 301 Analysis:</strong> Identify China-origin products subject to additional duties</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Compliance Representation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A <strong>CBP audit</strong> can uncover years of compliance violations and expose your company to millions in penalties. We represent La Verne importers in Focused Assessments, Quick Response Audits, and all CBP compliance proceedings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment defense and strategic document production</li>
                <li>Quick Response Audit (QRA) representation</li>
                <li>Reasonable Care Inquiry responses</li>
                <li>Post-audit corrective action implementation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Prior Disclosure & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Discovered a customs violation? Filing a <strong>Prior Disclosure</strong> with CBP before they discover the issue can reduce penalties by up to 90%. We conduct internal audits, quantify duty exposure, and file comprehensive disclosures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Prior Disclosure preparation under 19 USC 1592(c)(4)</li>
                <li>Internal compliance audits to identify violations</li>
                <li>Penalty mitigation and settlement negotiations</li>
                <li>Corrective action plans and compliance remediation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                La Verne importers sourcing from <strong>China</strong> face Section 301 additional duties up to 25%. We analyze your products' List coverage, explore HTS reclassification strategies, and advise on supply chain restructuring.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 List coverage analysis (Lists 1-4A)</li>
                <li>HTS reclassification to avoid List coverage</li>
                <li>Supply chain diversification planning</li>
                <li>Country of origin planning and substantial transformation analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Country of Origin & Free Trade Agreements</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Country of origin determines duty rates, trade preferences, and regulatory compliance. We advise on <strong>substantial transformation</strong>, USMCA qualification, and origin certification for preferential trade programs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Country of origin determinations and substantial transformation</li>
                <li>USMCA certification and Regional Value Content calculations</li>
                <li>Free Trade Agreement qualification analysis</li>
                <li>Marking requirements and country of origin labeling</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Import Compliance Program Development</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP requires importers to exercise <strong>reasonable care</strong> in all transactions. We design comprehensive compliance programs that document your due diligence, implement internal controls, and train your staff.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Written import compliance policies and procedures</li>
                <li>Vendor compliance agreements and supplier audits</li>
                <li>Employee training for import operations staff</li>
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
            Why La Verne Companies Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regional Knowledge & National Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand the Pomona Valley business environment and have <strong>nationwide experience</strong> defending importers at all major U.S. ports of entry.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response to CBP Actions</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                When CBP issues an audit notice or penalty letter, <strong>immediate action is critical</strong>. We respond within 24-48 hours to protect your rights and minimize penalties.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Fixed-Fee Options</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee packages</strong> for tariff classification, compliance audits, and prior disclosures. Clear pricing with no surprise bills.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Track Record</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our attorneys have successfully negotiated <strong>penalty reductions exceeding $10 million</strong> and defended hundreds of importers in CBP enforcement actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            La Verne Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Education & Research</h3>
              <p className="text-sm text-text-secondary">University supplies, research equipment, scientific instruments</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Retail & Consumer Goods</h3>
              <p className="text-sm text-text-secondary">Import distribution, consumer products, retail supplies</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Manufacturing</h3>
              <p className="text-sm text-text-secondary">Light manufacturing, industrial products, components</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Distribution & Logistics</h3>
              <p className="text-sm text-text-secondary">3PL services, warehousing, freight forwarding</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Automotive Parts</h3>
              <p className="text-sm text-text-secondary">Auto parts, aftermarket accessories, components</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Home & Garden</h3>
              <p className="text-sm text-text-secondary">Home goods, garden supplies, outdoor products</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Electronics</h3>
              <p className="text-sm text-text-secondary">Consumer electronics, components, tech accessories</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Food & Beverage</h3>
              <p className="text-sm text-text-secondary">Food imports, FDA compliance, specialty products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep La Verne & Pomona Valley Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand La Verne's business environment and the Pomona Valley's trade infrastructure.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Transportation Corridors */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">La Verne Transportation Corridors</h3>
              <p className="text-text-secondary mb-4">Key freight routes for La Verne importers:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-210</span>
                  <span>Foothill Freeway — primary east-west corridor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SR-57</span>
                  <span>Orange Freeway — north-south connector to ports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-10</span>
                  <span>San Bernardino Freeway — transcontinental freight route</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SR-71</span>
                  <span>Corona Expressway — connects to Inland Empire</span>
                </li>
              </ul>
            </div>

            {/* Business Districts */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">La Verne Business & Commercial Areas</h3>
              <p className="text-text-secondary mb-4">Key commercial zones:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Downtown La Verne</span>
                  <span>Historic commercial district along D Street</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Foothill Boulevard</span>
                  <span>Major commercial corridor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Arrow Highway</span>
                  <span>Industrial and commercial zone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">University Area</span>
                  <span>University of La Verne campus district</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond text-center">Pomona Valley & San Gabriel Valley Cities We Serve</h3>
            <p className="text-text-secondary mb-4 text-center">Available by appointment throughout the region:</p>
            <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary text-center max-w-3xl mx-auto">
              <span>La Verne</span>
              <span>Claremont</span>
              <span>San Dimas</span>
              <span>Pomona</span>
              <span>Glendora</span>
              <span>Azusa</span>
              <span>Covina</span>
              <span>West Covina</span>
              <span>Diamond Bar</span>
              <span>Walnut</span>
              <span>Chino Hills</span>
              <span>Upland</span>
              <span>Rancho Cucamonga</span>
              <span>Ontario</span>
              <span>Montclair</span>
              <span>Monrovia</span>
              <span>Arcadia</span>
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
                    <Link to="/claremont-trade-attorney" className="service-link">
                      <span className="service-link__title">Claremont</span>
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
                      <p className="service-link__description">Eastern neighbor</p>
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
            Protect Your Business From Customs Penalties
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let customs violations threaten your business. Contact our La Verne trade attorney team for expert guidance on import compliance and CBP defense.
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

export default LaVerneTradeAttorneyPage;
