
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const ElMonteExportControlPage: React.FC = () => {
  useMeta({
    title: 'Export Control Attorney El Monte | ITAR EAR Compliance Lawyer LA County',
    description: 'El Monte export control attorney for electronics manufacturers and defense suppliers. Expert ITAR, EAR, BIS licensing, deemed exports. Serving San Gabriel Valley. (310) 744-1328.',
    keywords: 'export control attorney el monte, itar lawyer el monte, ear compliance attorney san gabriel valley, electronics export controls el monte, manufacturing export attorney la county, bis licensing lawyer el monte',
    canonical: 'el-monte-export-control',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-export-control.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'El Monte Export Control Attorney - ITAR & EAR Compliance Lawyer',
        description: 'Expert El Monte export control attorney serving San Gabriel Valley electronics manufacturers and defense suppliers with ITAR, EAR, and BIS compliance.',
        url: `${siteConfig.siteUrl}/el-monte-export-control`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'El Monte Export Control', url: `${siteConfig.siteUrl}/el-monte-export-control` }
      ]),
      generateFAQSchema([
        {
          question: 'What export controls apply to El Monte electronics manufacturers?',
          answer: 'El Monte is home to numerous electronics manufacturers and component suppliers serving defense and commercial markets. Electronics face export controls under EAR (Export Administration Regulations) and potentially ITAR (International Traffic in Arms Regulations) depending on end-use. Semiconductors, electronic components, defense electronics, and telecommunications equipment typically require export classification and potentially licenses. Our El Monte export control attorney helps manufacturers navigate CCL classification, BIS licensing, and compliance programs.',
        },
        {
          question: 'Do El Monte aerospace suppliers need ITAR registration?',
          answer: 'If you manufacture defense articles or components on the U.S. Munitions List (USML), you must register with DDTC under ITAR. Many El Monte manufacturers supply aerospace and defense contractors with components, electronics, and assemblies. Even component suppliers may require ITAR registration if the items are "specifically designed" for defense articles. DDTC registration costs $2,250 annually. Our El Monte ITAR attorneys handle registration, commodity jurisdiction determinations, and compliance.',
        },
        {
          question: 'How do export controls affect San Gabriel Valley electronics manufacturers?',
          answer: 'San Gabriel Valley manufacturers exporting electronics, components, and technology face EAR controls on semiconductors, electronic components, telecommunications equipment, and cybersecurity items. Exports to China, Russia, and other restricted destinations require BIS licenses. Entity List screening is mandatory. Our El Monte export control attorney provides classification, licensing, and compliance programs for electronics manufacturers.',
        },
        {
          question: 'What is the difference between ITAR and EAR for El Monte manufacturers?',
          answer: 'ITAR (State Department/DDTC) controls defense articles with inherent military applications. EAR (Commerce Department/BIS) controls dual-use items with commercial and potential military uses. ITAR requires registration ($2,250/year), has stricter licensing, and higher penalties ($1M per violation). EAR typically applies to commercial electronics and components. Our El Monte attorneys conduct jurisdictional determinations to classify products correctly and minimize regulatory burden.',
        },
        {
          question: 'What should El Monte companies do if they receive a BIS enforcement subpoena?',
          answer: 'Contact our El Monte export control attorney immediately. Do not produce documents or provide statements without legal counsel. BIS Office of Export Enforcement conducts aggressive investigations that can result in civil penalties ($330,000 per violation), export privilege denial, and criminal prosecution. We represent clients in enforcement defense, prepare Voluntary Self-Disclosures (VSDs), and negotiate penalty mitigation.',
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
      <section className="hero" aria-label="El Monte Export Control Hero">
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
          <h1>El Monte Export Control Attorney<br />ITAR & EAR Compliance Lawyer</h1>
          <p className="hero-subtitle">
            Expert export control legal services for San Gabriel Valley electronics manufacturers and defense suppliers. ITAR registration, EAR compliance, deemed exports, and BIS licensing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact#schedule-consultation" className="hero-cta">Free Compliance Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose El Monte Export Control Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              San Gabriel Valley Manufacturing Export Controls
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              El Monte is a vital <strong>manufacturing and industrial hub</strong> in the San Gabriel Valley, home to electronics manufacturers, aerospace suppliers, and technology companies. These manufacturers produce components, electronics, and assemblies subject to U.S. export controls under ITAR and EAR. Our El Monte export control attorney provides specialized compliance services for Los Angeles County manufacturers and suppliers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We specialize in export controls for <strong>electronics manufacturers and suppliers</strong>: components, assemblies, defense electronics, and telecommunications equipment.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">DDTC & BIS Experience</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct experience with <strong>DDTC ITAR registration</strong>, commodity jurisdiction determinations, BIS licensing, and enforcement defense.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Practical Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                We develop <strong>practical compliance solutions</strong> for manufacturers that protect your business while enabling international sales and growth.
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
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">ITAR Compliance for Defense Suppliers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                El Monte manufacturers supplying <strong>defense contractors and aerospace companies</strong> may require ITAR compliance. Defense articles and "specifically designed" components face USML controls. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USML classification for defense electronics and components</li>
                <li>DDTC registration applications and annual renewals</li>
                <li>"Specifically designed" analysis for component suppliers</li>
                <li>Commodity Jurisdiction (CJ) requests to move items from USML to CCL</li>
                <li>Export authorization strategies (DSP-5, DSP-73)</li>
                <li>Technology Control Plans (TCPs) for deemed exports</li>
                <li>DDTC enforcement defense and Voluntary Disclosures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EAR Compliance for Electronics Manufacturers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Export Administration Regulations (EAR) control <strong>dual-use electronics and components</strong> exported by El Monte manufacturers. We provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Commerce Control List (CCL) classification for electronics (ECCN 3A, 4A, 5A series)</li>
                <li>Semiconductor and integrated circuit classification</li>
                <li>Telecommunications equipment export controls (ECCN 5A002, 5A991)</li>
                <li>Export license applications to BIS for China, Russia, embargoed countries</li>
                <li>License exception analysis (ENC, LVS, GBS, CIV)</li>
                <li>Entity List, Denied Persons List, and Unverified List screening</li>
                <li>BIS export controls compliance programs and audits</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Deemed Export Compliance for Manufacturing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                El Monte manufacturers employ engineers and technicians from diverse backgrounds. Sharing controlled <strong>manufacturing technology and technical data</strong> with foreign nationals creates deemed export obligations. We help with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Technology Control Plans (TCPs) for manufacturing technology</li>
                <li>Foreign national employee screening by citizenship</li>
                <li>Manufacturing area access controls and segregation</li>
                <li>Deemed export license applications</li>
                <li>HR procedures for foreign national hiring</li>
                <li>Contractor and temporary worker access protocols</li>
                <li>Training programs for production, engineering, and HR staff</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Commodity Classification & Jurisdictional Determinations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Correctly classifying electronics, components, and assemblies is <strong>critical for compliance</strong>. ITAR vs. EAR determination affects registration, licensing, and penalty exposure. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USML classification analysis for defense electronics</li>
                <li>CCL/ECCN classification for dual-use electronics and components</li>
                <li>Commodity Jurisdiction (CJ) requests to DDTC</li>
                <li>"Specifically designed" vs. "specially designed" analysis</li>
                <li>Classification requests to BIS for dual-use items</li>
                <li>Technology and manufacturing process classification</li>
                <li>Strategic guidance on ITAR vs. EAR regulatory treatment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Licensing Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                El Monte manufacturers exporting electronics and components require strategic <strong>export licensing planning</strong>. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>License application strategy and timing</li>
                <li>Technical specification preparation and review</li>
                <li>End-user statements and supporting documentation</li>
                <li>License exception eligibility analysis</li>
                <li>BIS and DDTC license application submission</li>
                <li>Response to requests for additional information (RFI)</li>
                <li>License condition interpretation and compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Enforcement Defense & Voluntary Self-Disclosure</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                BIS and DDTC conduct aggressive enforcement investigations against manufacturers. <strong>Civil penalties can reach $330,000 per EAR violation and $1 million per ITAR violation</strong>, with criminal prosecution possible. Our defense services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>BIS Office of Export Enforcement investigation defense</li>
                <li>DDTC Office of Defense Trade Controls Compliance response</li>
                <li>Administrative subpoena response and document production</li>
                <li>Employee interview preparation and legal representation</li>
                <li>Voluntary Self-Disclosure (VSD) preparation and filing</li>
                <li>Penalty mitigation and settlement negotiation</li>
                <li>Export privilege denial and debarment defense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* El Monte Manufacturing & Technology Sectors */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            San Gabriel Valley Manufacturing Sectors
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Electronics Manufacturing', items: ['Electronic components', 'Circuit boards', 'Assemblies', 'Semiconductors'] },
              { title: 'Defense Suppliers', items: ['Defense electronics', 'Aerospace components', 'Military assemblies', 'Defense systems'] },
              { title: 'Telecommunications', items: ['Network equipment', 'Communications devices', 'Telecom components', '5G equipment'] },
              { title: 'Industrial Electronics', items: ['Control systems', 'Sensors', 'Industrial equipment', 'Automation systems'] },
              { title: 'Manufacturing Technology', items: ['Production equipment', 'Testing systems', 'Quality control', 'Process technology'] },
              { title: 'Contract Manufacturing', items: ['OEM manufacturing', 'Assembly services', 'Component sourcing', 'Supply chain'] },
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
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in export controls for <strong>electronics manufacturers and suppliers</strong>, understanding production, components, and supply chain compliance challenges.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regulatory Agency Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Direct experience with <strong>DDTC and BIS</strong> enforcement, license applications, and Voluntary Self-Disclosures. We navigate agencies effectively.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Business-Focused Solutions</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We balance compliance with <strong>business growth</strong>, enabling international sales while protecting you legally.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost-Effective Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We help manufacturers <strong>minimize regulatory burden</strong> through commodity jurisdiction determinations and strategic classification.
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
                  <Link to="/electronics-export-classification" className="service-link">
                    <span className="service-link__title">Electronics Classification</span>
                    <p className="service-link__description">ECCN determination</p>
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
                    <p className="service-link__description">Defense supplier compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <Link to="/bis-export-licensing" className="service-link">
                    <span className="service-link__title">BIS Export Licensing</span>
                    <p className="service-link__description">License applications</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Los Angeles County</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="/export-controls" className="service-link">
                    <span className="service-link__title">Los Angeles Export Controls</span>
                    <p className="service-link__description">LA County compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="/export-controls" className="service-link">
                    <span className="service-link__title">Pasadena Export Controls</span>
                    <p className="service-link__description">San Gabriel Valley</p>
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
                  <Link to="/resources/electronics-export-controls" className="service-link">
                    <span className="service-link__title">Electronics Export Guide</span>
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
                  <Link to="/resources/ear-license-exceptions" className="service-link">
                    <span className="service-link__title">EAR License Exceptions</span>
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

      <RelatedCityPages currentCity="El Monte" region="southern-california" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Protect Your Manufacturing Exports
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't risk massive penalties and export privilege denial. Our El Monte export control attorneys help electronics manufacturers and defense suppliers navigate ITAR and EAR compliance. Free confidential consultation.
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

export default ElMonteExportControlPage;
