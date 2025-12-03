
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const PortOfSanDiegoCustomsPage: React.FC = () => {
  useMeta({
    title: 'Port of San Diego Customs Attorney | Border Trade Lawyer CA',
    description: 'Port of San Diego customs attorney. Expert cross-border trade, CBP detention defense, cargo release, Mexican border compliance. Rapid response. (310) 744-1328.',
    keywords: 'port of san diego customs attorney, san diego border trade lawyer, otay mesa customs attorney, san diego cbp lawyer, tijuana border trade, san diego cargo detention, cross-border compliance attorney',
    canonical: 'port-of-san-diego-customs',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-port-san-diego.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Port of San Diego Customs Attorney - Cross-Border Trade Specialists',
        description: 'Port of San Diego customs attorney providing expert cross-border trade compliance, CBP detention defense, and cargo release services. Specialized San Diego-Tijuana border trade representation.',
        url: `${siteConfig.siteUrl}/port-of-san-diego-customs`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Ports', url: `${siteConfig.siteUrl}/california-ports` },
        { name: 'Port of San Diego', url: `${siteConfig.siteUrl}/port-of-san-diego-customs` }
      ]),
      generateFAQSchema([
        {
          question: 'What makes Port of San Diego unique for customs compliance?',
          answer: 'Port of San Diego is California\'s southernmost port with unique cross-border dynamics due to proximity to Tijuana, Mexico. It handles significant USMCA trade, cross-border manufacturing, and Mexico-sourced imports. We understand San Diego-Tijuana integrated supply chains, maquiladora operations, and border port compliance.',
        },
        {
          question: 'How do you handle Otay Mesa and San Ysidro port of entry issues?',
          answer: 'Otay Mesa (commercial crossing) and San Ysidro (passenger/commercial) are major border ports of entry. We assist with CBP detention at both locations, cross-border transportation compliance, in-bond shipment issues, FAST lane violations, and Mexican customs coordination for cross-border trade.',
        },
        {
          question: 'Can you help with USMCA compliance for San Diego-Tijuana trade?',
          answer: 'Yes, we specialize in USMCA (formerly NAFTA) compliance for cross-border San Diego-Tijuana operations. This includes USMCA certification, rules of origin compliance, regional value content calculations, automotive rules, and tariff preference claims for Mexican imports through San Diego ports.',
        },
        {
          question: 'What services do you provide for Port of San Diego cargo detention?',
          answer: 'We provide rapid response to Port of San Diego cargo detentions including: CBP detention defense, admissibility package preparation, UFLPA forced labor response, IPR/trademark hold resolution, Mexican origin verification, and cargo release coordination with San Diego CBP officers.',
        },
        {
          question: 'Do you assist with cross-border manufacturing and maquiladora compliance?',
          answer: 'Yes, we assist San Diego companies with cross-border manufacturing in Tijuana/Baja California including: maquiladora customs compliance, temporary import programs, IMMEX compliance, USMCA preferential treatment, transfer pricing and customs valuation, and duty drawback for re-imports.',
        },
      ]),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="Port of San Diego Customs Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1579547621700-e6c4a27c348c?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Port of San Diego Customs Attorney<br />Cross-Border Trade & CBP Defense</h1>
          <p className="hero-subtitle">
            Expert Port of San Diego customs attorney providing cross-border trade compliance, CBP detention defense, and USMCA expertise for San Diego-Tijuana importers. Specialized border port representation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Port of San Diego Specialist */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              San Diego Cross-Border Trade Law Experts
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Port of San Diego and the San Diego-Tijuana border crossings handle <strong>$42 billion in annual cross-border trade</strong>. We provide specialized customs legal services for maritime port operations, Otay Mesa commercial crossings, and integrated San Diego-Tijuana supply chains.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cross-Border Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Specialized knowledge</strong> of San Diego-Tijuana cross-border operations, USMCA compliance, maquiladora trade, and Mexican customs coordination unique to the California-Mexico border.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port & Border Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Coverage of <strong>Port of San Diego, Otay Mesa, and San Ysidro</strong> CBP operations. We handle maritime cargo, commercial truck crossings, and border port compliance issues.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">USMCA Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep expertise in <strong>USMCA rules of origin, automotive requirements, and preferential treatment</strong> critical to San Diego's cross-border manufacturing and trade with Mexico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Port of San Diego Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Port of San Diego & Border Customs Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Port of San Diego Cargo Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Port of San Diego CBP detains cargo for <strong>UFLPA concerns, Mexican origin verification, and compliance violations</strong>. We provide rapid detention defense, admissibility packages, and coordination with San Diego CBP to expedite cargo release from the port.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Maritime cargo detention response at Port of San Diego terminals</li>
                <li>Mexican origin and USMCA preferential treatment verification</li>
                <li>UFLPA forced labor detention defense for Mexican supply chains</li>
                <li>CBP examination support and port representation at San Diego facilities</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA Compliance & Mexican Imports</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                San Diego importers importing from Mexico must comply with <strong>USMCA rules of origin and certification requirements</strong>. We prepare USMCA certifications, verify regional value content, and defend against CBP USMCA verification requests and preferential treatment denials.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA certification preparation and rules of origin compliance</li>
                <li>Regional value content (RVC) calculations and net cost method</li>
                <li>Automotive USMCA requirements (LVC, steel/aluminum tracing)</li>
                <li>CBP USMCA verification response and supporting documentation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Otay Mesa & San Ysidro Border Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Otay Mesa (commercial) and San Ysidro handle <strong>major truck traffic from Tijuana</strong>. We assist with CBP border crossing compliance, FAST lane violations, in-bond shipment issues, and commercial vehicle inspections at both ports of entry.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Otay Mesa commercial truck crossing compliance and inspections</li>
                <li>FAST (Free and Secure Trade) lane violations and CTPAT coordination</li>
                <li>In-bond transportation compliance (IT/IE entries) from Mexico</li>
                <li>San Ysidro commercial crossing support and CBP issue resolution</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Maquiladora & Cross-Border Manufacturing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                San Diego companies with <strong>Tijuana/Baja California manufacturing operations</strong> face complex U.S. and Mexican customs compliance. We assist with maquiladora programs, temporary imports, IMMEX compliance, and duty drawback for re-imported goods.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Maquiladora customs compliance and temporary import programs</li>
                <li>IMMEX (Mexican manufacturing) program coordination</li>
                <li>U.S. duty drawback for re-imported manufactured goods (19 USC § 1313)</li>
                <li>Transfer pricing and customs valuation for related-party transactions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Automotive & Aerospace Cross-Border Trade</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                San Diego's <strong>automotive and aerospace sectors</strong> rely heavily on Tijuana manufacturing. We provide specialized compliance for automotive parts under USMCA automotive rules, aerospace ITAR/EAR compliance, and sector-specific tariff strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA automotive rules of origin (LVC, core parts, steel/aluminum)</li>
                <li>Automotive parts HTS classification and tariff optimization</li>
                <li>Aerospace cross-border manufacturing and ITAR compliance</li>
                <li>Medical device cross-border production and FDA/CBP coordination</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense for San Diego Importers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP audits San Diego importers with <strong>significant Mexican trade volume</strong> through Focused Assessments and USMCA verifications. We defend you through CBP compliance reviews, USMCA verification requests, and penalty proceedings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense for major San Diego importers</li>
                <li>USMCA verification and preferential treatment defense</li>
                <li>Prior Disclosure filings for USMCA and valuation violations</li>
                <li>Related-party transaction audits and transfer pricing defense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* San Diego Border Operations */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            San Diego Border & Port Operations
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port & Border Facilities</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                San Diego customs infrastructure:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Port of San Diego:</strong> Maritime container and cargo terminals</li>
                <li><strong>Otay Mesa:</strong> Primary commercial truck crossing (24/7)</li>
                <li><strong>San Ysidro:</strong> Passenger and commercial vehicle crossing</li>
                <li><strong>Tecate:</strong> Secondary commercial crossing</li>
                <li><strong>CBP CES:</strong> Centralized Examination Station (Otay Mesa)</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Diego-Tijuana Industries</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Key cross-border manufacturing sectors:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Medical Devices:</strong> Major cross-border manufacturing hub</li>
                <li><strong>Aerospace:</strong> Tijuana aerospace cluster and San Diego integration</li>
                <li><strong>Electronics:</strong> Consumer electronics and technology manufacturing</li>
                <li><strong>Automotive:</strong> Auto parts and components production</li>
                <li><strong>Plastics:</strong> Injection molding and plastic components</li>
              </ul>
            </div>
          </div>

          {/* Border Trade Statistics */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">San Diego Border Trade Profile</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Trade Volume</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>$42+ Billion Annual Trade</li>
                  <li>Busiest U.S.-Mexico Border Crossing</li>
                  <li>70+ Million Annual Crossings</li>
                  <li>Major USMCA Gateway</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Key Commodities</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Medical Devices</li>
                  <li>Aerospace Components</li>
                  <li>Electronics & TVs</li>
                  <li>Auto Parts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Mexico Integration</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Tijuana Maquiladoras</li>
                  <li>Baja California Manufacturing</li>
                  <li>Cross-Border Supply Chains</li>
                  <li>Integrated Production Networks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our San Diego Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why San Diego Importers Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cross-Border Trade Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Port of San Diego customs attorney, we understand <strong>cross-border manufacturing, USMCA compliance, and maquiladora operations</strong> better than general practice firms. Our team has deep expertise in San Diego-Tijuana integrated supply chains and Mexican customs coordination.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">USMCA & Rules of Origin Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>USMCA certification, automotive rules, and preferential treatment</strong> critical to San Diego importers. Our team prepares certifications, calculates regional value content, and defends against CBP USMCA verifications. We understand complex USMCA automotive and sector-specific requirements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port & Border Emergency Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Border and port delays cost money. We provide <strong>same-day response to San Diego port detentions</strong> and Otay Mesa border issues. Our team prepares admissibility packages, coordinates with CBP officers, and expedites cargo release to minimize costs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Comprehensive Trade Law Services</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Beyond port representation, we provide <strong>complete trade law services</strong> including tariff classification, customs audits, duty drawback, transfer pricing, and trade compliance programs. We appear before federal agencies and the Court of International Trade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Port of San Diego from Our California Office
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Emergency Response:</strong> 24/7 availability for port detention<br />
                <strong>Regular Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">San Diego Port Services</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>Remote Representation:</strong> Full CBP coordination without on-site presence</li>
                <li><strong>Emergency Detention Response:</strong> Same-day action for urgent cargo</li>
                <li><strong>Border Crossing Support:</strong> Otay Mesa and San Ysidro compliance</li>
                <li><strong>USMCA Expertise:</strong> Specialized Mexican import compliance</li>
              </ul>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Port Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#usmca-compliance" className="service-link">
                    <span className="service-link__title">USMCA Compliance</span>
                    <p className="service-link__description">Mexican import certification</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#maquiladora-compliance" className="service-link">
                    <span className="service-link__title">Maquiladora Operations</span>
                    <p className="service-link__description">Cross-border manufacturing</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#cargo-detention-defense" className="service-link">
                    <span className="service-link__title">Cargo Detention Defense</span>
                    <p className="service-link__description">Port CBP holds</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Other Ports */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Regional Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#southern-california-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Southern California</span>
                    <p className="service-link__description">Regional SoCal trade law</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#port-of-oakland-tariff" className="service-link">
                    <span className="service-link__title">Port of Oakland</span>
                    <p className="service-link__description">Northern California port</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Helpful Guides */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Guides</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#usmca-guide" className="service-link">
                    <span className="service-link__title">USMCA Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#cross-border-manufacturing-guide" className="service-link">
                    <span className="service-link__title">Cross-Border Manufacturing</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#duty-drawback-guide" className="service-link">
                    <span className="service-link__title">Duty Drawback Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#trade-law-faq" className="service-link">
                    <span className="service-link__title">FAQ Center</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Emergency San Diego Port Response
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Cargo detained at Port of San Diego or Otay Mesa? Contact our customs attorney team immediately for same-day detention defense and USMCA compliance support.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">
              Get Immediate Help
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

export default PortOfSanDiegoCustomsPage;
