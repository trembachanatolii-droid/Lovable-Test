
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const CarlsbadExportControlPage: React.FC = () => {
  useMeta({
    title: 'Export Control Attorney Carlsbad | ITAR EAR Compliance Lawyer San Diego',
    description: 'Carlsbad export control attorney for biotech, medical device, and defense companies. Expert ITAR, EAR, BIS licensing, deemed exports. Serving North San Diego County. (310) 744-1328.',
    keywords: 'export control attorney carlsbad, itar lawyer carlsbad, ear compliance attorney san diego county, biotech export controls carlsbad, medical device export attorney carlsbad, defense export lawyer north county',
    canonical: 'carlsbad-export-control',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-export-control.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Carlsbad Export Control Attorney - ITAR & EAR Compliance Lawyer',
        description: 'Expert Carlsbad export control attorney serving North San Diego County biotech, medical device, and defense companies with ITAR, EAR, and BIS compliance.',
        url: `${siteConfig.siteUrl}/carlsbad-export-control`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Carlsbad Export Control', url: `${siteConfig.siteUrl}/carlsbad-export-control` }
      ]),
      generateFAQSchema([
        {
          question: 'What export controls apply to Carlsbad biotech companies?',
          answer: 'Carlsbad is a major biotech and life sciences hub. Biotechnology faces export controls under EAR for controlled biotechnology items including gene editing technology (CRISPR), synthetic biology, toxins, pathogens, and biodefense-related technology. Controlled biotechnology items under ECCN 1C353, 1C354, and related categories require BIS licenses for certain destinations. Our Carlsbad export control attorney helps biotech companies navigate classification, licensing, and compliance programs.',
        },
        {
          question: 'Do Carlsbad medical device companies need export licenses?',
          answer: 'Most medical devices are EAR99 (not controlled) and do not require export licenses to most destinations. However, certain advanced medical devices with dual-use applications may be controlled under EAR. Additionally, exports to embargoed countries (Cuba, Iran, North Korea, Syria) and certain end-users require licenses regardless of classification. Medical device companies must also comply with FDA export requirements. Our Carlsbad attorney provides export classification, licensing, and compliance for medical device exporters.',
        },
        {
          question: 'How do deemed exports affect Carlsbad tech companies with foreign employees?',
          answer: 'A "deemed export" occurs when controlled technology or technical data is shared with foreign nationals in the United States. Carlsbad biotech, medical device, and defense companies with international scientists, engineers, and researchers must implement Technology Control Plans (TCPs), screen foreign employees by citizenship, restrict access to controlled technology, and potentially obtain deemed export licenses. Violations can result in civil penalties up to $330,000 per violation and criminal prosecution.',
        },
        {
          question: 'What is the difference between ITAR and EAR for San Diego County companies?',
          answer: 'ITAR (State Department/DDTC) controls defense articles and services on the U.S. Munitions List (USML) with inherent military applications. EAR (Commerce Department/BIS) controls dual-use items on the Commerce Control List (CCL) with commercial and potential military uses. Most Carlsbad biotech and medical device companies fall under EAR, while defense contractors require ITAR compliance. Our Carlsbad export control attorneys conduct jurisdictional determinations to classify products correctly.',
        },
        {
          question: 'What should Carlsbad companies do if they receive a BIS enforcement subpoena?',
          answer: 'Contact our Carlsbad export control attorney immediately. Do not produce documents or provide statements without legal counsel. BIS Office of Export Enforcement conducts aggressive investigations that can result in civil penalties ($330,000 per violation), export privilege denial, and criminal prosecution. We represent clients in enforcement defense, prepare Voluntary Self-Disclosures (VSDs), and negotiate penalty mitigation.',
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
      <section className="hero" aria-label="Carlsbad Export Control Hero">
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
          <h1>Carlsbad Export Control Attorney<br />ITAR & EAR Compliance Lawyer</h1>
          <p className="hero-subtitle">
            Expert export control legal services for North San Diego County biotech, medical device, and defense companies. ITAR, EAR, deemed exports, and BIS licensing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact#schedule-consultation" className="hero-cta">Free Compliance Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Carlsbad Export Control Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              North San Diego County Biotech & Technology Export Controls
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Carlsbad is a thriving hub for <strong>biotechnology, medical devices, and advanced technology</strong> in North San Diego County. Companies developing gene editing technology, medical devices, diagnostics, and defense systems face U.S. export controls under ITAR and EAR. Our Carlsbad export control attorney provides specialized compliance services for San Diego County biotech, medical device, and technology companies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Biotech & MedTech Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We specialize in export controls for <strong>biotech and medical device companies</strong>: gene editing, diagnostics, therapeutics, medical devices, and biotech equipment.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">BIS & FDA Experience</h3>
              <p className="text-text-secondary leading-relaxed">
                Experience with <strong>BIS export controls and FDA export requirements</strong>, ensuring comprehensive compliance for life sciences exporters.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Science-Focused Solutions</h3>
              <p className="text-text-secondary leading-relaxed">
                We develop <strong>practical compliance solutions</strong> for life sciences companies enabling innovation and international partnerships.
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
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Biotechnology Export Controls & Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Carlsbad is a global biotech leader. <strong>Biotechnology and life sciences</strong> face evolving export controls under EAR for controlled biotechnology items. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Gene editing technology export controls (CRISPR, gene drives, gene therapy)</li>
                <li>Synthetic biology and biotechnology classification (ECCN 1C353, 1C354, 1C991)</li>
                <li>Controlled toxins and pathogens (select agents, biological weapons)</li>
                <li>Vaccine and therapeutic technology export licensing</li>
                <li>Biotech equipment and instrumentation controls</li>
                <li>Technology transfer and licensing to foreign partners</li>
                <li>BIS license applications for biotech exports</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Medical Device Export Controls & FDA Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Carlsbad medical device companies export globally. <strong>Medical devices face dual regulatory requirements</strong> - BIS export controls and FDA export regulations. We provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Medical device classification under EAR (most devices are EAR99)</li>
                <li>Controlled medical devices classification (ECCN 3A992, 3A001)</li>
                <li>Export license applications for embargoed countries</li>
                <li>FDA export certificate applications (Certificate to Foreign Government)</li>
                <li>End-user screening and Entity List compliance</li>
                <li>Medical device technology transfer agreements</li>
                <li>Compliance programs for medical device exporters</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Defense & Dual-Use Technology Export Controls</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Carlsbad defense contractors and dual-use technology companies face <strong>ITAR and EAR requirements</strong>. We help with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USML classification for defense articles and services</li>
                <li>DDTC registration for defense contractors</li>
                <li>CCL/ECCN classification for dual-use technology</li>
                <li>Export license applications (DDTC DSP-5, DSP-73; BIS licenses)</li>
                <li>License exception analysis (ENC, TSU, GOV, STA)</li>
                <li>Technology Control Plans for deemed exports</li>
                <li>Compliance programs for defense and dual-use exporters</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Deemed Export Compliance for Life Sciences</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Carlsbad biotech and medical device companies employ <strong>international scientists and researchers</strong>. Sharing controlled technology with foreign nationals creates deemed export obligations. We help with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Technology Control Plans (TCPs) for biotech and medical device technology</li>
                <li>Foreign national employee screening by citizenship</li>
                <li>Laboratory and R&D facility access controls</li>
                <li>Deemed export license applications</li>
                <li>HR procedures for international scientist hiring</li>
                <li>Visiting researcher and collaborator access protocols</li>
                <li>Training programs for R&D, HR, and compliance staff</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EAR Compliance & BIS Export Licensing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Export Administration Regulations (EAR) control most Carlsbad biotech and medical device exports. Our <strong>EAR compliance services</strong> include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Commerce Control List (CCL) classification and ECCN determination</li>
                <li>EAR99 determination for non-controlled items</li>
                <li>Export license applications to BIS for controlled destinations</li>
                <li>License exception analysis and qualification</li>
                <li>Entity List, Denied Persons List, and sanctions screening</li>
                <li>Encryption and software export controls</li>
                <li>Export controls compliance programs and audits</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Enforcement Defense & Voluntary Self-Disclosure</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                BIS conducts aggressive enforcement against biotech and medical device companies. <strong>Civil penalties can reach $330,000 per violation</strong>, with criminal prosecution possible. Our defense services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>BIS Office of Export Enforcement investigation defense</li>
                <li>Administrative subpoena response and document production</li>
                <li>Employee and scientist interview preparation</li>
                <li>Voluntary Self-Disclosure (VSD) preparation and filing with BIS</li>
                <li>Penalty mitigation and settlement negotiation</li>
                <li>Export privilege denial and debarment defense</li>
                <li>Coordination with FDA for parallel regulatory issues</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Carlsbad Technology & Life Sciences Sectors */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Carlsbad Life Sciences & Technology Sectors
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Biotechnology', items: ['Gene editing (CRISPR)', 'Synthetic biology', 'Vaccines & therapeutics', 'Diagnostics'] },
              { title: 'Medical Devices', items: ['Diagnostic equipment', 'Surgical devices', 'Implantable devices', 'Medical imaging'] },
              { title: 'Pharmaceuticals', items: ['Biologics', 'Drug manufacturing', 'API production', 'Clinical research'] },
              { title: 'Life Sciences Technology', items: ['Laboratory equipment', 'Biotech instruments', 'Research tools', 'Analytical systems'] },
              { title: 'Defense & Dual-Use', items: ['Defense systems', 'Dual-use technology', 'Communications systems', 'Sensors'] },
              { title: 'Technology Transfer', items: ['Licensing agreements', 'Joint ventures', 'R&D collaboration', 'Technical assistance'] },
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
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Life Sciences Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in export controls for <strong>biotech and medical device companies</strong>, understanding the unique compliance challenges of life sciences technology.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">BIS & FDA Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Experience with <strong>BIS export controls and FDA regulations</strong>, providing comprehensive compliance for medical device and biotech exporters.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Business-Focused Solutions</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We balance compliance with <strong>commercial objectives</strong>, enabling international partnerships and market expansion.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Innovation Protection</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We help protect your <strong>intellectual property</strong> while facilitating compliant technology transfer and licensing agreements.
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
                  <Link to="/biotech-export-compliance" className="service-link">
                    <span className="service-link__title">Biotech Export Compliance</span>
                    <p className="service-link__description">Gene editing & synthetic biology</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/medical-device-exports" className="service-link">
                    <span className="service-link__title">Medical Device Exports</span>
                    <p className="service-link__description">BIS & FDA compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">San Diego County</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="/export-controls" className="service-link">
                    <span className="service-link__title">San Diego Export Controls</span>
                    <p className="service-link__description">Defense & biotech compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <Link to="/oceanside-export-controls" className="service-link">
                    <span className="service-link__title">Oceanside Export Controls</span>
                    <p className="service-link__description">North County compliance</p>
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
                  <Link to="/resources/biotech-export-controls" className="service-link">
                    <span className="service-link__title">Biotech Export Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/medical-device-export-guide" className="service-link">
                    <span className="service-link__title">Medical Device Export Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/ear-compliance-guide" className="service-link">
                    <span className="service-link__title">EAR Compliance Guide</span>
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

      <RelatedCityPages currentCity="Carlsbad" region="southern-california" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Protect Your Biotech & Medical Device Exports
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't risk massive penalties and enforcement actions. Our Carlsbad export control attorneys help biotech and medical device companies navigate EAR and ITAR compliance. Free confidential consultation.
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

export default CarlsbadExportControlPage;
