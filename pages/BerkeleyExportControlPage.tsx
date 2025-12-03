
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const BerkeleyExportControlPage: React.FC = () => {
  useMeta({
    title: 'Export Control Attorney Berkeley | ITAR EAR Compliance Lawyer Bay Area',
    description: 'Berkeley export control attorney for university research, biotech, and technology companies. Expert ITAR, EAR, BIS licensing, deemed exports, and fundamental research. East Bay compliance. (310) 744-1328.',
    keywords: 'export control attorney berkeley, itar lawyer berkeley, ear compliance attorney east bay, university export controls berkeley, biotech export attorney berkeley, deemed export lawyer bay area',
    canonical: 'berkeley-export-control',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-export-control.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Berkeley Export Control Attorney - ITAR & EAR Compliance Lawyer',
        description: 'Expert Berkeley export control attorney serving East Bay university research, biotech, and technology companies with ITAR, EAR, and deemed export compliance.',
        url: `${siteConfig.siteUrl}/berkeley-export-control`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Berkeley Export Control', url: `${siteConfig.siteUrl}/berkeley-export-control` }
      ]),
      generateFAQSchema([
        {
          question: 'What export controls apply to Berkeley university research?',
          answer: 'University research at UC Berkeley and other East Bay institutions can trigger export controls when involving controlled technology, foreign national researchers, or classified projects. The "fundamental research exclusion" exempts basic research ordinarily published and shared within the scientific community. However, applied research, proprietary sponsor restrictions, or controlled technology access require export control compliance. Our Berkeley export control attorney helps universities navigate deemed exports, Technology Control Plans, and the fundamental research exclusion.',
        },
        {
          question: 'Do Berkeley biotech companies need export licenses for technology transfer?',
          answer: 'Yes, biotech technology can require export licenses under EAR or ITAR depending on the application. Controlled biotechnology includes gene editing technology (CRISPR), synthetic biology, toxins, pathogens, and biodefense-related items. Technology transfers to foreign partners, licensing to foreign entities, or sharing with foreign national employees may require BIS licenses or deemed export authorizations. Our Berkeley attorney provides biotech export classification, licensing, and compliance programs.',
        },
        {
          question: 'How do deemed exports affect Berkeley tech companies with international teams?',
          answer: 'Berkeley\'s diverse tech workforce creates significant deemed export compliance challenges. A "deemed export" occurs when controlled technology or source code is shared with foreign nationals in the United States. Tech companies, research institutions, and startups must implement Technology Control Plans (TCPs), screen foreign employees by citizenship, restrict access to controlled technology, and potentially obtain deemed export licenses. Violations can result in civil penalties up to $330,000 per violation and criminal prosecution.',
        },
        {
          question: 'What is the fundamental research exclusion for Berkeley universities?',
          answer: 'The fundamental research exclusion exempts basic research from export controls when ordinarily published and shared within the scientific community. To qualify: (1) research results must be publishable, (2) no proprietary sponsor restrictions on publication, (3) no access to USML/CCL controlled technology. Applied research, corporate-sponsored research with publication restrictions, or classified projects do not qualify. Our Berkeley export control attorneys help universities structure research agreements to maintain the fundamental research exclusion.',
        },
        {
          question: 'What should Berkeley companies do if they receive a BIS enforcement subpoena?',
          answer: 'Contact our Berkeley export control attorney immediately. Do not produce documents or provide statements without legal counsel. BIS Office of Export Enforcement conducts aggressive investigations that can result in massive civil penalties ($330,000 per violation), export privilege denial, and criminal prosecution. We represent clients in enforcement defense, prepare Voluntary Self-Disclosures (VSDs), and negotiate penalty mitigation to minimize exposure.',
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
      <section className="hero" aria-label="Berkeley Export Control Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Berkeley Export Control Attorney<br />ITAR & EAR Compliance Lawyer</h1>
          <p className="hero-subtitle">
            Expert export control legal services for Berkeley university research, biotech, and technology companies. ITAR, EAR, deemed exports, fundamental research exclusion, and BIS licensing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Compliance Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Berkeley Export Control Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              East Bay Research & Technology Export Controls
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Berkeley is a global hub for <strong>university research, biotechnology, and innovative technology</strong>. UC Berkeley, Lawrence Berkeley National Laboratory, and numerous biotech and tech startups develop cutting-edge technologies subject to U.S. export controls. From AI and machine learning to gene editing and synthetic biology, our Berkeley export control attorney provides specialized compliance for East Bay research institutions and technology companies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Research & Biotech Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We specialize in export controls for <strong>university research and biotech</strong>: fundamental research exclusion, deemed exports, biotechnology controls, and international research collaboration.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">University Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep experience with <strong>university export controls</strong>: fundamental research, foreign national researchers, sponsored research agreements, and technology transfer.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tech & Biotech Solutions</h3>
              <p className="text-text-secondary leading-relaxed">
                We develop <strong>practical compliance solutions</strong> for tech startups and biotech companies enabling innovation while meeting regulatory requirements.
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
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">University Research Export Controls & Fundamental Research</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Berkeley universities and research institutions face <strong>unique export control challenges</strong> balancing open research with compliance. The fundamental research exclusion exempts basic research ordinarily published. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Fundamental research exclusion analysis and qualification</li>
                <li>Sponsored research agreement review for export control clauses</li>
                <li>Foreign national researcher deemed export compliance</li>
                <li>Technology Control Plans (TCPs) for controlled research</li>
                <li>Publication review procedures for controlled information</li>
                <li>International research collaboration agreements</li>
                <li>University export control policy development and training</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Biotechnology Export Controls & Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Berkeley is a global biotech hub. <strong>Biotechnology and life sciences</strong> face evolving export controls under EAR and potential ITAR controls. We provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Gene editing technology export controls (CRISPR, gene drives)</li>
                <li>Synthetic biology and biotechnology classification (ECCN 1C353, 1C354)</li>
                <li>Toxins and controlled pathogens (select agents, biological weapons)</li>
                <li>Vaccine and therapeutic technology export licensing</li>
                <li>Biotech equipment and instrumentation controls</li>
                <li>Technology transfer and licensing to foreign partners</li>
                <li>BIS license applications for biotech exports</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Software, AI & Machine Learning Export Controls</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Berkeley tech companies and researchers develop advanced <strong>AI/ML algorithms and software</strong> subject to export controls. We help with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>AI/ML algorithm and model classification</li>
                <li>Encryption software controls (ECCN 5D002) and CCATS filing</li>
                <li>Software export licensing and deemed export compliance</li>
                <li>Open source software vs. proprietary software analysis</li>
                <li>Cloud-based AI/ML service export compliance</li>
                <li>Neural network and deep learning export controls</li>
                <li>Source code deemed export controls for foreign developers</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Deemed Export Compliance for Diverse Workforces</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Berkeley's <strong>internationally diverse workforce</strong> creates significant deemed export compliance obligations for universities, research labs, and tech companies. We help with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Technology Control Plans (TCPs) for ITAR and EAR deemed exports</li>
                <li>Foreign national employee and researcher screening by citizenship</li>
                <li>Facility access controls and restricted area segregation</li>
                <li>Deemed export license applications (Technology License, TAA)</li>
                <li>HR procedures for foreign national hiring and onboarding</li>
                <li>Visiting researcher and student access protocols</li>
                <li>Training programs for faculty, researchers, HR, and administrators</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EAR Compliance & BIS Export Licensing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Export Administration Regulations (EAR) control <strong>dual-use technology</strong> developed by Berkeley tech and biotech companies. We provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Commerce Control List (CCL) classification and ECCN determination</li>
                <li>Export license applications to BIS for controlled destinations</li>
                <li>License exception analysis (ENC, TSU, GOV, RPL)</li>
                <li>Encryption export controls and self-classification reports</li>
                <li>Entity List, Denied Persons List, and Unverified List screening</li>
                <li>Technology and software export compliance programs</li>
                <li>BIS export controls compliance audits and risk assessments</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Enforcement Defense & Voluntary Self-Disclosure</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                BIS conducts aggressive enforcement investigations against universities and tech companies. <strong>Civil penalties can reach $330,000 per violation</strong>, with criminal prosecution possible. Our defense services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>BIS Office of Export Enforcement investigation defense</li>
                <li>Administrative subpoena response and document production strategy</li>
                <li>Employee and researcher interview preparation</li>
                <li>Voluntary Self-Disclosure (VSD) preparation and filing with BIS</li>
                <li>Penalty mitigation and settlement negotiation</li>
                <li>University and research institution enforcement defense</li>
                <li>Export privilege denial and debarment defense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Berkeley Technology & Research Sectors */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Berkeley Technology & Research Sectors
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Biotechnology', items: ['Gene editing (CRISPR)', 'Synthetic biology', 'Vaccines & therapeutics', 'Biotech equipment'] },
              { title: 'AI & Machine Learning', items: ['Neural networks', 'Deep learning algorithms', 'Computer vision', 'Natural language processing'] },
              { title: 'Software & Encryption', items: ['Encryption software', 'Cybersecurity tools', 'Cloud platforms', 'Open source software'] },
              { title: 'University Research', items: ['Fundamental research', 'Applied research', 'Sponsored research', 'International collaboration'] },
              { title: 'Advanced Technology', items: ['Quantum computing', 'Nanotechnology', 'Advanced materials', 'Energy technology'] },
              { title: 'Research Services', items: ['Technology transfer', 'Licensing agreements', 'Collaborative research', 'Technical assistance'] },
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
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">University & Research Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in export controls for <strong>universities and research institutions</strong>, understanding fundamental research, deemed exports, and academic collaboration challenges.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Biotech & Tech Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Deep expertise in <strong>biotechnology and technology export controls</strong>, including gene editing, AI/ML, software, and emerging technologies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">BIS Agency Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Direct experience with <strong>BIS enforcement</strong>, license applications, and Voluntary Self-Disclosures. We navigate the agency effectively.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Innovation-Focused Solutions</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We balance compliance with <strong>research and innovation</strong>, enabling international collaboration while protecting controlled technology.
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
                  <Link to="/university-export-controls" className="service-link">
                    <span className="service-link__title">University Export Controls</span>
                    <p className="service-link__description">Fundamental research exclusion</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Bay Area Services</h3>
              <div className="space-y-0">
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
                <div className="service-link-item">
                  <a href="/san-jose-tech-export-controls" className="service-link">
                    <span className="service-link__title">San Jose Export Controls</span>
                    <p className="service-link__description">Silicon Valley compliance</p>
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
                  <Link to="/resources/fundamental-research-exclusion" className="service-link">
                    <span className="service-link__title">Fundamental Research Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/biotech-export-controls" className="service-link">
                    <span className="service-link__title">Biotech Export Controls</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/ai-ml-export-controls" className="service-link">
                    <span className="service-link__title">AI/ML Export Controls</span>
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

      <RelatedCityPages currentCity="Berkeley" region="bay-area" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Protect Your Research & Technology Exports
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't risk massive penalties and enforcement actions. Our Berkeley export control attorneys help universities, biotech, and tech companies navigate EAR and ITAR compliance. Free confidential consultation.
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

export default BerkeleyExportControlPage;
