
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanFranciscoExportControlsPage: React.FC = () => {
  useMeta({
    title: 'Export Controls Attorney San Francisco | ITAR EAR Lawyer CA',
    description: 'San Francisco export controls attorney. Expert ITAR, EAR, BIS compliance, export licensing, deemed exports, and OFAC sanctions. Silicon Valley tech export controls. (310) 744-1328.',
    keywords: 'export controls attorney san francisco, itar lawyer san francisco, ear compliance attorney san francisco, export licensing lawyer bay area, deemed export attorney san francisco, ofac sanctions lawyer california',
    canonical: 'san-francisco-export-controls',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-export-controls.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'San Francisco Export Controls Attorney - ITAR, EAR & BIS Compliance Lawyer',
        description: 'Expert San Francisco export controls attorney providing ITAR, EAR, and OFAC compliance for Bay Area technology companies, defense contractors, and exporters.',
        url: `${siteConfig.siteUrl}/san-francisco-export-controls`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'San Francisco Export Controls', url: `${siteConfig.siteUrl}/san-francisco-export-controls` }
      ]),
      generateFAQSchema([
        {
          question: 'What is the difference between ITAR and EAR?',
          answer: 'ITAR (International Traffic in Arms Regulations) controls defense articles and services listed on the U.S. Munitions List (USML), administered by the State Department\'s DDTC. EAR (Export Administration Regulations) controls dual-use items (commercial items with potential military applications) listed on the Commerce Control List (CCL), administered by BIS. ITAR is generally more restrictive with stricter licensing requirements, registration fees, and penalties. Our San Francisco export controls attorneys help determine which regime applies to your technology.',
        },
        {
          question: 'Do I need an export license for software and technology?',
          answer: 'It depends. Exporting software, technology, and technical data may require a license under ITAR or EAR depending on the classification. "Deemed exports" (sharing controlled technology with foreign nationals in the U.S.) also require authorization. Silicon Valley companies frequently face export controls on encryption software, AI/ML algorithms, semiconductor technology, and cybersecurity tools. Our San Francisco export controls lawyers conduct commodity classification reviews to determine licensing requirements.',
        },
        {
          question: 'What are deemed exports and why do they matter for Bay Area tech companies?',
          answer: 'A "deemed export" occurs when controlled technology or source code is released to a foreign national within the United States (including employees, contractors, or visitors). Bay Area tech companies with diverse international workforces must ensure deemed export compliance through Technology Control Plans (TCPs), screening procedures, and appropriate licenses. Violations can result in civil penalties up to $330,000 per violation and criminal penalties including imprisonment.',
        },
        {
          question: 'How do OFAC sanctions affect my business?',
          answer: 'OFAC (Office of Foreign Assets Control) administers U.S. economic sanctions programs prohibiting transactions with sanctioned countries (Cuba, Iran, North Korea, Syria, Russia-related) and designated individuals/entities on the SDN List. Bay Area companies exporting technology, software, or services must screen all customers, partners, and transactions against OFAC lists. Our San Francisco export controls attorneys help implement sanctions compliance programs and obtain OFAC licenses when available.',
        },
        {
          question: 'What should I do if I receive a BIS enforcement subpoena or DDTC inquiry?',
          answer: 'Contact our San Francisco export controls attorney immediately. BIS and DDTC enforcement investigations can result in massive penalties, export privileges denial, and criminal prosecution. You have the right to legal representation. We advise on document production, interview preparation, Voluntary Self-Disclosures (VSDs), and defense strategies to minimize or eliminate penalties.',
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
      <section className="hero" aria-label="San Francisco Export Controls Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1920&auto=format&fit=crop"
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
          <h1>San Francisco Export Controls Attorney<br />ITAR & EAR Compliance Lawyer</h1>
          <p className="hero-subtitle">
            Expert export controls legal services for Silicon Valley and Bay Area technology companies. ITAR, EAR, deemed exports, and OFAC sanctions compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Compliance Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose San Francisco Export Controls Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Silicon Valley Export Controls Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              The Bay Area is home to the world's most innovative technology companies, many of which develop products and technology subject to <strong>strict U.S. export controls</strong>. From semiconductor technology to AI algorithms, encryption software to satellite communications, our San Francisco export controls attorney helps you navigate ITAR, EAR, and OFAC compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Technology Industry Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We specialize in export controls for <strong>high-tech industries</strong>: software, semiconductors, AI/ML, cybersecurity, telecommunications, aerospace, and biotechnology.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">BIS & DDTC Experience</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct experience with <strong>BIS enforcement investigations</strong>, DDTC consent agreements, and Voluntary Self-Disclosures. We know how these agencies think and operate.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Practical Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                We don't just tell you "no" - we develop <strong>practical compliance solutions</strong> that allow your business to operate while meeting regulatory requirements.
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
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">ITAR Compliance & Registration</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The International Traffic in Arms Regulations (ITAR) controls the export and import of <strong>defense articles, services, and technical data</strong> on the U.S. Munitions List (USML). Our San Francisco ITAR attorney provides:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USML classification review and jurisdictional determinations</li>
                <li>DDTC registration applications and renewals</li>
                <li>Export authorization strategies (DSP-5, DSP-73, TAA, MLA)</li>
                <li>Commodity jurisdiction (CJ) requests to move items from USML to CCL</li>
                <li>Technology Control Plans (TCPs) for deemed export compliance</li>
                <li>ITAR compliance program development and audits</li>
                <li>DDTC enforcement defense and Voluntary Disclosures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EAR Compliance & BIS Licensing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Export Administration Regulations (EAR) control <strong>dual-use items</strong> - commercial products with potential military applications. Bay Area tech companies frequently encounter EAR controls on:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Commerce Control List (CCL) classification and ECCN determination</li>
                <li>Export license applications to BIS (China, Russia, sanctioned countries)</li>
                <li>License exceptions analysis (ENC, TSU, TMP, RPL, BAG)</li>
                <li>Encryption export controls (CCATS, self-classification reports)</li>
                <li>Entity List and Denied Persons List screening</li>
                <li>Deemed export compliance for foreign national employees</li>
                <li>BIS export controls compliance programs and audits</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Deemed Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Silicon Valley's diverse workforce creates <strong>significant deemed export compliance challenges</strong>. Sharing controlled technology with foreign nationals requires authorization even within the U.S. We help with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Technology Control Plans (TCPs) for ITAR and EAR compliance</li>
                <li>Employee and contractor screening procedures</li>
                <li>Facility access controls and segregation of controlled technology</li>
                <li>Deemed export license applications (TL, TAA)</li>
                <li>Foreign national hiring compliance procedures</li>
                <li>Visitor and third-party access protocols</li>
                <li>Training programs for HR, engineering, and management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">OFAC Sanctions Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                OFAC administers U.S. economic sanctions targeting <strong>countries, regimes, and designated individuals</strong>. Bay Area companies exporting globally must implement robust sanctions screening:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>OFAC sanctions program compliance (Iran, Cuba, North Korea, Syria, Russia)</li>
                <li>SDN List and Consolidated Sanctions List screening</li>
                <li>Blocked property reporting (50% rule compliance)</li>
                <li>OFAC license applications (specific and general licenses)</li>
                <li>Secondary sanctions risk assessment (Russia, China-related)</li>
                <li>OFAC Voluntary Self-Disclosure (VSD) preparation and filing</li>
                <li>OFAC enforcement defense and penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Commodity Classification & Jurisdictional Determinations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Determining whether your product is controlled under ITAR, EAR, or neither is the <strong>critical first step</strong>. Misclassification can result in violations. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USML classification analysis (ITAR jurisdiction determination)</li>
                <li>CCL/ECCN classification for dual-use items</li>
                <li>Commodity Jurisdiction (CJ) requests to DDTC</li>
                <li>Classification requests to BIS</li>
                <li>Encryption classification (CCATS filing and self-classification)</li>
                <li>Technology and software classification analysis</li>
                <li>Reclassification strategies to reduce regulatory burden</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Controls Enforcement Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                BIS and DDTC conduct aggressive enforcement investigations. <strong>Civil penalties can reach $330,000 per violation</strong>, with criminal prosecution possible. Our defense services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>BIS Office of Export Enforcement (OEE) investigation defense</li>
                <li>DDTC Office of Defense Trade Controls Compliance investigation response</li>
                <li>Administrative subpoena response and document production strategy</li>
                <li>Employee interview preparation and legal representation</li>
                <li>Voluntary Self-Disclosure (VSD) preparation and filing</li>
                <li>Penalty mitigation and settlement negotiation</li>
                <li>Denied Entity List and debarment defense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Advise */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Technologies Subject to Export Controls
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Software & Encryption', items: ['Encryption software (EAR ECCN 5D002)', 'Cybersecurity tools', 'Intrusion software', 'Source code controls'] },
              { title: 'Semiconductors & Electronics', items: ['Advanced semiconductors', 'Integrated circuits', 'Quantum computing', 'Emerging technologies'] },
              { title: 'AI & Machine Learning', items: ['AI/ML algorithms', 'Neural networks', 'Facial recognition', 'Autonomous systems'] },
              { title: 'Telecommunications', items: ['5G equipment', 'Network infrastructure', 'Satellite communications', 'Telecom software'] },
              { title: 'Aerospace & Defense', items: ['UAV/drone technology', 'Avionics systems', 'Propulsion technology', 'Defense electronics'] },
              { title: 'Biotechnology', items: ['Gene editing technology', 'Biotech equipment', 'Vaccines and biologics', 'Medical devices'] },
            ].map((tech) => (
              <div key={tech.title} className="bg-neutral-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary-navy mb-3 font-garamond">{tech.title}</h3>
                <ul className="space-y-1 text-text-secondary text-sm">
                  {tech.items.map((item) => (
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

      {/* Export Controls Compliance Program */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Building an Export Controls Compliance Program
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Key Program Elements</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-3">1.</span>
                  <span><strong>Management Commitment:</strong> Senior leadership support and resource allocation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-3">2.</span>
                  <span><strong>Risk Assessment:</strong> Identify products, technology, and destinations requiring controls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-3">3.</span>
                  <span><strong>Policies & Procedures:</strong> Written export controls policies and SOPs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-3">4.</span>
                  <span><strong>Screening:</strong> Automated screening of parties and transactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-3">5.</span>
                  <span><strong>Recordkeeping:</strong> 5-year retention of export documentation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Ongoing Compliance</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-3">6.</span>
                  <span><strong>Training:</strong> Regular export controls training for employees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-3">7.</span>
                  <span><strong>Audits:</strong> Internal compliance audits and testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-3">8.</span>
                  <span><strong>Reporting:</strong> Voluntary Self-Disclosure protocols for violations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-3">9.</span>
                  <span><strong>Updates:</strong> Monitor regulatory changes and update procedures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-3">10.</span>
                  <span><strong>Enforcement:</strong> Disciplinary measures for violations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our San Francisco Export Controls Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Choose Our Export Controls Attorneys
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Technology Industry Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We work extensively with <strong>Silicon Valley technology companies</strong> and understand the unique export controls challenges in software, semiconductors, AI, and emerging technologies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regulatory Agency Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Direct experience with <strong>BIS, DDTC, and OFAC</strong> enforcement matters, license applications, and Voluntary Self-Disclosures. We know how to navigate these agencies effectively.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Business-Focused Approach</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We balance compliance with <strong>business needs</strong>, developing practical solutions that protect you legally while enabling growth and innovation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proactive Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We help you <strong>stay ahead of regulatory changes</strong> affecting emerging technologies, including new AI/ML controls, semiconductor restrictions, and China-focused regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving San Francisco & Silicon Valley
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving San Francisco Bay Area)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Virtual Consultations:</strong> Available for Bay Area clients
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary-navy mb-3">Bay Area Service Coverage</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>San Francisco:</strong> Financial District, SOMA, Mission Bay</li>
                <li><strong>Silicon Valley:</strong> Palo Alto, Mountain View, Sunnyvale, San Jose</li>
                <li><strong>East Bay:</strong> Oakland, Berkeley, Fremont</li>
                <li><strong>Peninsula:</strong> Redwood City, San Mateo, Menlo Park</li>
                <li><strong>North Bay:</strong> San Rafael, Marin County</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
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
                  <a href="#encryption-export-controls" className="service-link">
                    <span className="service-link__title">Encryption Export Controls</span>
                    <p className="service-link__description">CCATS filing and compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#deemed-export-compliance" className="service-link">
                    <span className="service-link__title">Deemed Export Programs</span>
                    <p className="service-link__description">Technology Control Plans</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#voluntary-self-disclosure" className="service-link">
                    <span className="service-link__title">Voluntary Self-Disclosure</span>
                    <p className="service-link__description">BIS and DDTC VSD filing</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Other Locations */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Tech Hub Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#san-jose-export-controls" className="service-link">
                    <span className="service-link__title">San Jose Tech Export Controls</span>
                    <p className="service-link__description">Silicon Valley compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#los-angeles-export-controls" className="service-link">
                    <span className="service-link__title">Los Angeles Export Controls</span>
                    <p className="service-link__description">Southern California tech</p>
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
                  <a href="#resources/itar-compliance-guide" className="service-link">
                    <span className="service-link__title">ITAR Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/ear-license-exceptions" className="service-link">
                    <span className="service-link__title">EAR License Exceptions</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/ofac-sanctions" className="service-link">
                    <span className="service-link__title">OFAC Sanctions Overview</span>
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
            Protect Your Technology Exports
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't risk massive penalties and criminal prosecution. Our San Francisco export controls attorneys help you navigate ITAR, EAR, and OFAC compliance. Free confidential consultation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">
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

export default SanFranciscoExportControlsPage;
