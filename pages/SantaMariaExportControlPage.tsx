
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SantaMariaExportControlPage: React.FC = () => {
  useMeta({
    title: 'Export Control Attorney Santa Maria | ITAR EAR Compliance Lawyer CA',
    description: 'Santa Maria export control attorney for aerospace, defense, and technology companies. Expert ITAR, EAR, BIS licensing, deemed exports. Serving Santa Barbara County. (310) 744-1328.',
    keywords: 'export control attorney santa maria, itar lawyer santa maria, ear compliance attorney santa barbara county, defense export controls santa maria, aerospace export attorney central coast, bis licensing lawyer santa maria',
    canonical: 'santa-maria-export-control',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-export-control.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Santa Maria Export Control Attorney - ITAR & EAR Compliance Lawyer',
        description: 'Expert Santa Maria export control attorney serving Central Coast aerospace, defense, and technology companies with ITAR, EAR, and BIS compliance solutions.',
        url: `${siteConfig.siteUrl}/santa-maria-export-control`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Santa Maria Export Control', url: `${siteConfig.siteUrl}/santa-maria-export-control` }
      ]),
      generateFAQSchema([
        {
          question: 'What export controls apply to Santa Maria aerospace companies?',
          answer: 'Santa Maria is home to aerospace and defense companies developing satellite technology, rocket components, and aviation systems. These technologies face strict export controls under ITAR (International Traffic in Arms Regulations) for defense articles and EAR (Export Administration Regulations) for dual-use items. Satellite technology, propulsion systems, and aerospace components typically require export licenses. Our Santa Maria export control attorney helps companies navigate DDTC registration, BIS licensing, and compliance programs.',
        },
        {
          question: 'Do satellite technology companies in Santa Barbara County need ITAR registration?',
          answer: 'Yes, most satellite technology, components, and services are controlled under ITAR on the U.S. Munitions List (USML) Category XV. Companies manufacturing, exporting, or providing technical assistance for satellites must register with DDTC. This includes satellite buses, payloads, ground control systems, and related technology. DDTC registration requires a $2,250 annual fee. Our Santa Maria ITAR attorneys handle registration, compliance programs, and export licensing.',
        },
        {
          question: 'How do Central Coast tech companies handle deemed export compliance?',
          answer: 'A "deemed export" occurs when controlled technology or technical data is shared with foreign nationals in the United States. Santa Maria aerospace and tech companies with foreign engineers, researchers, or technicians must implement Technology Control Plans (TCPs), screen employees by citizenship, and potentially obtain deemed export licenses. Violations can result in civil penalties up to $330,000 per EAR violation or $1 million per ITAR violation, plus criminal prosecution.',
        },
        {
          question: 'What is the difference between ITAR and EAR for Santa Barbara County companies?',
          answer: 'ITAR (State Department/DDTC) controls defense articles and services with inherent military applications on the USML. EAR (Commerce Department/BIS) controls dual-use items on the Commerce Control List (CCL) with commercial and potential military uses. ITAR is more restrictive with mandatory registration, stricter licensing, and higher penalties. Our Santa Maria export control attorneys conduct commodity classification and jurisdictional determinations to ensure correct regulatory treatment.',
        },
        {
          question: 'What should Santa Maria companies do if they receive a BIS or DDTC enforcement action?',
          answer: 'Contact our Santa Maria export control attorney immediately. Do not respond to subpoenas, produce documents, or provide statements without legal counsel. BIS Office of Export Enforcement and DDTC conduct aggressive investigations that can result in millions in civil penalties, export privilege denial, and criminal prosecution. We represent companies in enforcement defense, prepare Voluntary Self-Disclosures, and negotiate penalty mitigation.',
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
      <section className="hero" aria-label="Santa Maria Export Control Hero">
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
          <h1>Santa Maria Export Control Attorney<br />ITAR & EAR Compliance Lawyer</h1>
          <p className="hero-subtitle">
            Expert export control legal services for Central Coast aerospace, defense, and technology companies. ITAR registration, EAR compliance, deemed exports, and BIS licensing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Compliance Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Santa Maria Export Control Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Central Coast Aerospace & Technology Export Controls
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Santa Maria is a growing hub for <strong>aerospace, satellite technology, and advanced manufacturing</strong> on California's Central Coast. Companies developing space launch systems, satellite components, and aerospace technology face strict U.S. export controls under ITAR and EAR. Our Santa Maria export control attorney provides specialized compliance services for Santa Barbara County aerospace and technology companies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Aerospace & Space Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We specialize in export controls for <strong>aerospace and space technology</strong>: satellite systems, launch vehicles, propulsion technology, and aerospace components.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">DDTC & BIS Experience</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct experience with <strong>DDTC ITAR registration</strong>, satellite export licensing, BIS dual-use controls, and enforcement defense.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Practical Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                We develop <strong>practical compliance solutions</strong> that protect your business legally while enabling commercial space and aerospace operations.
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
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">ITAR Compliance & Satellite Export Controls</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The International Traffic in Arms Regulations (ITAR) strictly controls <strong>satellite technology and space systems</strong> under USML Category XV. Santa Maria space and aerospace companies require comprehensive ITAR compliance. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USML Category XV satellite technology classification</li>
                <li>DDTC registration applications and annual renewals</li>
                <li>Satellite export license applications (DSP-5, DSP-73)</li>
                <li>Technical Assistance Agreements (TAA) for space technology cooperation</li>
                <li>Manufacturing License Agreements (MLA) for satellite production</li>
                <li>Launch service agreements and export authorizations</li>
                <li>DDTC enforcement defense and Voluntary Disclosures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EAR Compliance & Dual-Use Space Technology</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Export Administration Regulations (EAR) control <strong>dual-use aerospace and space technology</strong> with commercial and potential military applications. Many Santa Maria companies face EAR requirements. We provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Commerce Control List (CCL) classification for aerospace items (ECCN 9A, 9B, 9D, 9E)</li>
                <li>Export license applications to BIS for controlled destinations</li>
                <li>License exception analysis (STA Strategic Trade Authorization, GOV government end-users)</li>
                <li>Spacecraft and satellite component classification</li>
                <li>Entity List, Denied Persons List screening</li>
                <li>Deemed export compliance for foreign national engineers</li>
                <li>BIS export controls compliance programs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Deemed Export Compliance for Space Companies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Santa Maria aerospace companies employ engineers and scientists from around the world. Sharing controlled space technology with foreign nationals creates <strong>deemed export compliance obligations</strong>. We help with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Technology Control Plans (TCPs) for ITAR and EAR deemed exports</li>
                <li>Foreign national employee screening by citizenship and country</li>
                <li>Facility access controls for controlled technology areas</li>
                <li>Deemed export license applications for space technology</li>
                <li>HR procedures for international employee hiring and onboarding</li>
                <li>Visitor access protocols for facility tours and meetings</li>
                <li>Training programs for engineering, HR, security, and management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Commodity Classification & Jurisdictional Determinations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Determining whether your space or aerospace technology is controlled under ITAR, EAR, or neither is <strong>critical for compliance</strong>. Recent regulatory changes have moved some satellite technology from ITAR to EAR. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USML Category XV satellite technology classification</li>
                <li>CCL aerospace classification (ECCN 9A004, 9A515, 9B515, 9D515, 9E515)</li>
                <li>Commodity Jurisdiction (CJ) requests to move items from USML to CCL</li>
                <li>Classification requests to BIS for dual-use space technology</li>
                <li>Technology and technical data classification analysis</li>
                <li>Fundamental research and public domain exception review</li>
                <li>Strategic guidance on ITAR vs. EAR regulatory burden</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Licensing for Space Operations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Satellite launches, international space partnerships, and technology transfers require strategic <strong>export licensing planning</strong>. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Launch service export authorization strategies</li>
                <li>International satellite partnership licensing</li>
                <li>Technology transfer agreements for space cooperation</li>
                <li>License exception eligibility analysis</li>
                <li>License application preparation and submission</li>
                <li>Response to agency requests for additional information</li>
                <li>License condition interpretation and compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Enforcement Defense & Voluntary Self-Disclosure</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                BIS and DDTC conduct aggressive enforcement investigations against space and aerospace companies. <strong>Civil penalties can reach $1 million per ITAR violation and $330,000 per EAR violation</strong>, with criminal prosecution possible. Our defense services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>BIS Office of Export Enforcement investigation defense</li>
                <li>DDTC Office of Defense Trade Controls Compliance response</li>
                <li>Administrative subpoena response and document production</li>
                <li>Employee interview preparation and legal representation</li>
                <li>Voluntary Self-Disclosure (VSD) preparation and filing</li>
                <li>Penalty mitigation and settlement negotiation</li>
                <li>Debarment and export privilege denial defense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Santa Maria Aerospace & Space Technologies */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Central Coast Aerospace & Space Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Satellite Technology', items: ['Satellite systems', 'Satellite components', 'Ground control systems', 'Communications satellites'] },
              { title: 'Launch Systems', items: ['Launch vehicles', 'Rocket propulsion', 'Launch services', 'Spaceport operations'] },
              { title: 'Aerospace Components', items: ['Aircraft components', 'Propulsion systems', 'Avionics', 'Navigation systems'] },
              { title: 'Space Technology', items: ['Spacecraft systems', 'Space electronics', 'Orbital systems', 'Space sensors'] },
              { title: 'Advanced Manufacturing', items: ['Composite materials', 'Precision machining', 'Additive manufacturing', 'Testing equipment'] },
              { title: 'Engineering Services', items: ['R&D services', 'Technical assistance', 'Systems integration', 'Technology development'] },
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
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Space & Aerospace Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in export controls for <strong>space and aerospace companies</strong>, understanding the unique compliance challenges of satellite technology, launch systems, and space operations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regulatory Agency Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Direct experience with <strong>DDTC and BIS</strong> enforcement matters, license applications, and Voluntary Self-Disclosures. We navigate these agencies effectively.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Business-Focused Solutions</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We balance compliance with <strong>commercial space growth</strong>, developing practical solutions that protect you legally while enabling international partnerships.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Current with Space Regulations</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We stay current with <strong>evolving space export controls</strong>, including USML Category XV updates and CCL changes for commercial space technology.
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
                  <Link to="/satellite-export-licensing" className="service-link">
                    <span className="service-link__title">Satellite Export Licensing</span>
                    <p className="service-link__description">USML Category XV compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
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
              </div>
            </div>

            {/* Other Locations */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">California Regions</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="/export-controls" className="service-link">
                    <span className="service-link__title">Los Angeles Export Controls</span>
                    <p className="service-link__description">Southern California compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <Link to="/san-francisco-export-controls" className="service-link">
                    <span className="service-link__title">San Francisco Export Controls</span>
                    <p className="service-link__description">Bay Area tech compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Export Controls Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/satellite-export-controls" className="service-link">
                    <span className="service-link__title">Satellite Export Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
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
                  <Link to="/resources/ear-aerospace-controls" className="service-link">
                    <span className="service-link__title">EAR Aerospace Controls</span>
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

      <RelatedCityPages currentCity="Santa Maria" region="central-california" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Protect Your Space & Aerospace Exports
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't risk massive penalties and export privilege denial. Our Santa Maria export control attorneys help space and aerospace companies navigate ITAR and EAR compliance. Free confidential consultation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">
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

export default SantaMariaExportControlPage;
