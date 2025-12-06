
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SimiValleyExportControlPage: React.FC = () => {
  useMeta({
    title: 'Export Control Attorney Simi Valley | ITAR EAR Compliance Lawyer CA',
    description: 'Simi Valley export control attorney for aerospace and defense companies. Expert ITAR, EAR, BIS licensing, deemed exports, and compliance. Serving Ventura County tech firms. (310) 744-1328.',
    keywords: 'export control attorney simi valley, itar lawyer simi valley, ear compliance attorney ventura county, defense export controls simi valley, aerospace export attorney california, bis licensing lawyer simi valley',
    canonical: 'simi-valley-export-control',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-export-control.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Simi Valley Export Control Attorney - ITAR & EAR Compliance Lawyer',
        description: 'Expert Simi Valley export control attorney serving aerospace, defense, and technology companies with ITAR, EAR, and BIS compliance solutions.',
        url: `${siteConfig.siteUrl}/simi-valley-export-control`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Simi Valley Export Control', url: `${siteConfig.siteUrl}/simi-valley-export-control` }
      ]),
      generateFAQSchema([
        {
          question: 'What export controls apply to Simi Valley aerospace companies?',
          answer: 'Simi Valley has a rich aerospace heritage with numerous defense contractors and aerospace companies. These firms face strict export controls under ITAR (International Traffic in Arms Regulations) for defense articles and EAR (Export Administration Regulations) for dual-use items. Aircraft components, propulsion systems, avionics, and satellite technology require export licenses. Our Simi Valley export control attorney helps aerospace companies navigate DDTC registration, export licensing, and compliance programs.',
        },
        {
          question: 'Do I need ITAR registration for my Simi Valley defense contracting business?',
          answer: 'If you manufacture, export, or broker defense articles on the U.S. Munitions List (USML), you must register with DDTC under ITAR. This includes aerospace components, defense electronics, propulsion systems, and military technology. Registration fees are $2,250 annually. Our Simi Valley ITAR attorneys handle registration applications, annual renewals, and ensure ongoing compliance to avoid penalties up to $1 million per violation.',
        },
        {
          question: 'How do deemed exports affect Simi Valley tech companies with foreign engineers?',
          answer: 'A "deemed export" occurs when controlled technology or technical data is shared with foreign nationals in the United States. Simi Valley aerospace and defense companies with international engineering teams must implement Technology Control Plans (TCPs), screen foreign national employees by country of citizenship, and potentially obtain deemed export licenses. Violations can result in civil penalties up to $330,000 per violation and criminal prosecution.',
        },
        {
          question: 'What is the difference between ITAR and EAR for Ventura County manufacturers?',
          answer: 'ITAR (State Department/DDTC) controls defense articles and services on the USML with military applications. EAR (Commerce Department/BIS) controls dual-use items on the Commerce Control List (CCL) with both commercial and potential military uses. ITAR is more restrictive with stricter licensing, registration requirements, and penalties. Our Simi Valley export control attorneys conduct jurisdictional determinations to classify your products correctly and minimize regulatory burden.',
        },
        {
          question: 'What should I do if I receive a BIS or DDTC enforcement subpoena?',
          answer: 'Contact our Simi Valley export control attorney immediately. Do not produce documents or provide statements without legal counsel. BIS Office of Export Enforcement and DDTC Office of Defense Trade Controls Compliance conduct aggressive investigations that can result in massive civil penalties, export privilege denial, and criminal prosecution. We represent clients in enforcement defense, prepare Voluntary Self-Disclosures, and negotiate penalty mitigation.',
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
      <section className="hero" aria-label="Simi Valley Export Control Hero">
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
          <h1>Simi Valley Export Control Attorney<br />ITAR & EAR Compliance Lawyer</h1>
          <p className="hero-subtitle">
            Expert export control legal services for Simi Valley aerospace, defense, and technology companies. ITAR registration, EAR compliance, deemed exports, and BIS licensing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact#schedule-consultation" className="hero-cta">Free Compliance Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Simi Valley Export Control Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Ventura County Aerospace & Defense Export Controls
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Simi Valley has a distinguished <strong>aerospace and defense industry heritage</strong>, home to companies developing advanced propulsion systems, avionics, satellite technology, and defense electronics. These technologies face strict U.S. export controls under ITAR and EAR. Our Simi Valley export control attorney provides specialized compliance services for Ventura County aerospace and defense contractors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Aerospace Industry Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We specialize in export controls for <strong>aerospace and defense contractors</strong>: propulsion systems, avionics, aircraft components, satellite technology, and defense electronics.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">DDTC & BIS Experience</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct experience with <strong>DDTC ITAR registration</strong>, export license applications (DSP-5, DSP-73, TAA), BIS licensing, and enforcement defense.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Practical Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                We develop <strong>practical compliance solutions</strong> that protect your business legally while enabling international growth and market expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Export Controls Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Comprehensive Export Controls Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">ITAR Compliance & DDTC Registration</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The International Traffic in Arms Regulations (ITAR) controls the export of <strong>defense articles, services, and technical data</strong> on the U.S. Munitions List (USML). Simi Valley aerospace and defense contractors require ITAR compliance. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USML classification review and jurisdictional determinations</li>
                <li>DDTC registration applications and annual renewals ($2,250 fee)</li>
                <li>Export authorization strategies (DSP-5 permanent export, DSP-73 temporary export)</li>
                <li>Technical Assistance Agreements (TAA) for technology transfer</li>
                <li>Manufacturing License Agreements (MLA) for foreign production</li>
                <li>Technology Control Plans (TCPs) for deemed export compliance</li>
                <li>DDTC enforcement defense and Voluntary Disclosures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EAR Compliance & BIS Export Licensing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Export Administration Regulations (EAR) control <strong>dual-use items</strong> - commercial products with potential military applications. Many Simi Valley technology companies face EAR requirements. We provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Commerce Control List (CCL) classification and ECCN determination</li>
                <li>Export license applications to BIS for controlled destinations</li>
                <li>License exception analysis (ENC encryption, TSU technology, TMP temporary)</li>
                <li>Encryption export controls (CCATS filing, self-classification reports)</li>
                <li>Entity List, Denied Persons List, and Unverified List screening</li>
                <li>Deemed export compliance for foreign national employees</li>
                <li>BIS export controls compliance programs and internal audits</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Deemed Export Compliance Programs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Simi Valley aerospace and defense companies employ engineers and technicians from around the world. Sharing controlled technology with foreign nationals creates <strong>deemed export compliance obligations</strong>. We help with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Technology Control Plans (TCPs) for ITAR and EAR deemed exports</li>
                <li>Foreign national employee screening procedures by citizenship</li>
                <li>Facility access controls and segregation of controlled technology areas</li>
                <li>Deemed export license applications (Technology License, TAA)</li>
                <li>HR procedures for foreign national hiring and onboarding</li>
                <li>Visitor access protocols and third-party disclosure controls</li>
                <li>Training programs for HR, engineering, security, and management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Commodity Classification & Jurisdictional Determinations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Determining whether your aerospace or defense product is controlled under ITAR, EAR, or neither is the <strong>critical first step</strong>. Misclassification can result in serious violations. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USML classification analysis (ITAR jurisdiction review)</li>
                <li>CCL/ECCN classification for dual-use aerospace technology</li>
                <li>Commodity Jurisdiction (CJ) requests to DDTC to move items from USML to CCL</li>
                <li>Classification requests to BIS for dual-use items</li>
                <li>Technology and technical data classification analysis</li>
                <li>Public domain and fundamental research exception analysis</li>
                <li>Reclassification strategies to reduce regulatory burden</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Licensing Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Obtaining export licenses from DDTC or BIS requires strategic planning and careful preparation. Our <strong>export licensing services</strong> include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>License application strategy and timing</li>
                <li>Technical documentation preparation and review</li>
                <li>End-user statements and supporting documentation</li>
                <li>License exception eligibility analysis</li>
                <li>License application submission and agency coordination</li>
                <li>Response to requests for additional information (RFI)</li>
                <li>License condition interpretation and compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Enforcement Defense & Voluntary Self-Disclosure</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                BIS and DDTC conduct aggressive enforcement investigations against aerospace and defense companies. <strong>Civil penalties can reach $1 million per ITAR violation and $330,000 per EAR violation</strong>, with criminal prosecution possible. Our defense services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>BIS Office of Export Enforcement (OEE) investigation defense</li>
                <li>DDTC Office of Defense Trade Controls Compliance investigation response</li>
                <li>Administrative subpoena response and document production strategy</li>
                <li>Employee interview preparation and legal representation</li>
                <li>Voluntary Self-Disclosure (VSD) preparation and filing with BIS/DDTC</li>
                <li>Penalty mitigation and settlement negotiation</li>
                <li>Debarment and Denied Entity List defense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Simi Valley Aerospace & Defense Sectors */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Simi Valley Aerospace & Defense Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Aerospace Propulsion', items: ['Rocket engines', 'Propulsion systems', 'Combustion technology', 'Testing facilities'] },
              { title: 'Avionics & Electronics', items: ['Flight control systems', 'Navigation equipment', 'Defense electronics', 'Radar systems'] },
              { title: 'Satellite Technology', items: ['Satellite components', 'Ground control systems', 'Communications systems', 'Space technology'] },
              { title: 'Defense Systems', items: ['Military aircraft components', 'Defense electronics', 'Weapon systems', 'Technical data'] },
              { title: 'Manufacturing Technology', items: ['Composite materials', 'Precision machining', 'Testing equipment', 'Quality control systems'] },
              { title: 'Engineering Services', items: ['R&D services', 'Technical assistance', 'Training services', 'Technology transfer'] },
            ].map((sector) => (
              <div key={sector.title} className="bg-neutral-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary-navy mb-3 font-garamond">{sector.title}</h3>
                <ul className="space-y-1 text-text-secondary text-sm">
                  {sector.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-secondary-teal mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Export Controls Team */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Choose Our Export Controls Attorneys
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Aerospace & Defense Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in export controls for <strong>aerospace and defense contractors</strong>, understanding the unique compliance challenges of USML-controlled defense articles and dual-use aerospace technology.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regulatory Agency Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Direct experience with <strong>DDTC and BIS</strong> enforcement matters, license applications, Voluntary Self-Disclosures, and penalty mitigation. We know how to navigate these agencies effectively.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Business-Focused Solutions</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We balance compliance with <strong>business growth</strong>, developing practical solutions that protect you legally while enabling international sales and partnerships.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proactive Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We help you <strong>stay ahead of regulatory changes</strong>, including updates to the USML, CCL, and country-specific export restrictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Export Controls Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Export Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="/export-controls" className="service-link">
                    <span className="service-link__title">ITAR Registration</span>
                    <p className="service-link__description">DDTC registration & renewals</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <Link to="/deemed-export-compliance" className="service-link">
                    <span className="service-link__title">Deemed Export Programs</span>
                    <p className="service-link__description">Technology Control Plans</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/export-licensing" className="service-link">
                    <span className="service-link__title">Export License Applications</span>
                    <p className="service-link__description">DSP-5, DSP-73, BIS licenses</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Locations */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Southern California</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="/export-controls" className="service-link">
                    <span className="service-link__title">Los Angeles Export Controls</span>
                    <p className="service-link__description">Aerospace & defense compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="/export-controls" className="service-link">
                    <span className="service-link__title">San Diego Export Controls</span>
                    <p className="service-link__description">Defense contractor compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Export Controls Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/itar-compliance-guide" className="service-link">
                    <span className="service-link__title">ITAR Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/ear-license-exceptions" className="service-link">
                    <span className="service-link__title">EAR License Exceptions</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/deemed-export-faq" className="service-link">
                    <span className="service-link__title">Deemed Export FAQ</span>
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
      </section>

      <RelatedCityPages currentCity="Simi Valley" region="southern-california" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Protect Your Aerospace & Defense Exports
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't risk massive penalties and export privilege denial. Our Simi Valley export control attorneys help aerospace and defense companies navigate ITAR and EAR compliance. Free confidential consultation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact#schedule-consultation" variant="solid">
              Schedule Free Consultation
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

export default SimiValleyExportControlPage;
