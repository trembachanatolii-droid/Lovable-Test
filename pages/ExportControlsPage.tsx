
import React, { useEffect } from 'react';
import EvaluationForm from '../components/EvaluationForm';
import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';

const ExportControlsPage: React.FC = () => {
  useMeta({
    title: 'Export Controls CA | ITAR EAR OFAC Attorney',
    description: 'California export controls lawyer. ITAR, EAR, OFAC compliance, export licensing, technology controls, deemed exports, sanctions screening. 631-746-8290.',
    canonical: 'export-controls-sanctions',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-export-controls.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Export Controls & Sanctions - ITAR, EAR, OFAC Compliance California Lawyer',
        description: 'Comprehensive export controls California legal services for ITAR, EAR, OFAC compliance, export licensing, and trade sanctions defense.',
        url: `${siteConfig.siteUrl}/#export-controls-sanctions`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Practice Areas', url: `${siteConfig.siteUrl}/#practice-areas` },
        { name: 'Export Controls & Sanctions', url: `${siteConfig.siteUrl}/#export-controls-sanctions` }
      ]),
      generateServiceSchema({
        name: 'California Export Controls & Trade Sanctions Legal Services',
        description: 'Expert export controls California lawyer services including ITAR compliance, EAR compliance, OFAC sanctions compliance, export licensing, technology export controls, encryption export regulations, dual use items compliance, deemed exports management, and restricted party screening for California tech companies, manufacturers, and defense contractors.',
        serviceType: 'Export Controls & Sanctions',
        url: `${siteConfig.siteUrl}/#export-controls-sanctions`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-montserrat text-neutral-darkGray bg-white">

      {/* Hero Section */}
      <section className="hero" aria-label="Export Controls Lawyer Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop"
            alt=""
            role="presentation"
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
            className="hero-bg-image"
          />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>Export Controls Lawyer California<br />& USA | Trade Sanctions Attorney</h1>
          <p className="hero-subtitle">
            ITAR compliance, EAR compliance, OFAC sanctions compliance, export licensing, technology export controls, encryption export regulations, dual use items compliance, deemed exports & restricted party screening. Expert guidance for California & USA tech companies, defense contractors & manufacturers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Export Controls Consultation</a>
            <a href="tel:+16317468290" className="hero-cta-outline">Call (631) 746-8290</a>
          </div>
        </div>
      </section>

      {/* Why California Exporters Need Specialized Counsel */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Export Controls: Where National Security Meets Business
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              California leads the nation in <strong>technology exports</strong>, <strong>defense manufacturing</strong>, and <strong>semiconductor production</strong>. This makes California businesses prime targets for <strong>BIS (Bureau of Industry and Security)</strong>, <strong>DDTC (Directorate of Defense Trade Controls)</strong>, and <strong>OFAC (Office of Foreign Assets Control)</strong> enforcement. Export violations carry <strong>criminal penalties, administrative fines up to $1 million per violation, and debarment from government contracts</strong>. You need an export controls California lawyer who understands both the technology and the law.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 justify-center">
            <div className="bg-neutral-50 p-8 rounded-lg border-t-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">ITAR Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Defense articles and technical data on the <strong>U.S. Munitions List (USML)</strong> require DDTC authorization. We classify defense articles, prepare license applications, and defend deemed export violations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-t-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">EAR Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Commercial and dual-use items require <strong>ECCN classification</strong> and BIS license screening. We handle encryption controls, deemed exports to foreign nationals, and Entity List compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-t-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">OFAC Sanctions</h3>
              <p className="text-text-secondary leading-relaxed">
                Transactions with <strong>sanctioned countries, SDNs, and blocked entities</strong> are strictly prohibited. We implement sanctions screening programs and defend against OFAC enforcement actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Export Controls California Lawyer Services
          </h2>

          <div className="space-y-6">
            {/* ITAR Compliance California */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">ITAR Compliance California</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The <strong>International Traffic in Arms Regulations (ITAR)</strong> control exports of defense articles, defense services, and technical data listed on the <strong>U.S. Munitions List (USML)</strong>. California's aerospace, defense, and firearms industries face strict ITAR compliance California requirements. We help you navigate DDTC registration, license applications, and enforcement defense.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>DDTC Registration:</strong> Initial registration and annual renewal for manufacturers, exporters, and brokers</li>
                <li><strong>USML Classification:</strong> Determine whether your products are defense articles requiring ITAR controls</li>
                <li><strong>Commodity Jurisdiction (CJ) Requests:</strong> Obtain DDTC determinations to exclude items from USML</li>
                <li><strong>DSP-5 License Applications:</strong> Permanent export licenses for defense articles to foreign end-users</li>
                <li><strong>DSP-61 Warehouse/Distribution Agreements:</strong> DDTC approvals for foreign distribution arrangements</li>
                <li><strong>Technical Assistance Agreements (TAA):</strong> Licenses for defense services and technical data transfers</li>
                <li><strong>Deemed Export Controls:</strong> Manage foreign national access to ITAR-controlled technical data and software</li>
                <li><strong>DDTC Consent Agreements:</strong> Negotiate settlements for ITAR violations with Directorate of Defense Trade Controls</li>
              </ul>
            </div>

            {/* EAR Compliance California */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EAR Compliance California</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The <strong>Export Administration Regulations (EAR)</strong> administered by <strong>BIS</strong> control dual-use items: commercial products with potential military applications, including <strong>semiconductors, software, telecommunications equipment, and encryption technology</strong>. California's tech industry requires sophisticated EAR compliance California programs to avoid criminal penalties and Entity List designations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>ECCN Classification:</strong> Determine Export Control Classification Number for all products</li>
                <li><strong>License Exception Analysis:</strong> Identify available exceptions (ENC, TSU, TMP, RPL) to avoid license requirements</li>
                <li><strong>BIS License Applications:</strong> Prepare export license applications with end-use statements</li>
                <li><strong>Encryption Controls (EAR 740.17):</strong> Self-classification for encryption items under License Exception ENC</li>
                <li><strong>Entity List Screening:</strong> Check customers and suppliers against BIS's Entity List and Denied Persons List</li>
                <li><strong>Red Flag Analysis:</strong> Train employees to identify and escalate suspicious transactions</li>
                <li><strong><a href="#article/deemed-export-compliance-california" className="text-secondary-teal hover:text-primary-navy">Deemed Export Compliance</a>:</strong> Control foreign national access to EAR-controlled source code and technology</li>
                <li><strong>BIS Enforcement Defense:</strong> Respond to administrative subpoenas and defend against civil penalties</li>
              </ul>
            </div>

            {/* OFAC Sanctions Compliance California */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">OFAC Sanctions Compliance California</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The <strong>Office of Foreign Assets Control (OFAC)</strong> administers economic and trade sanctions against designated foreign countries, entities, and individuals. California businesses with international customers must implement <strong><a href="#article/ofac-sanctions" className="text-secondary-teal hover:text-primary-navy font-semibold">OFAC sanctions compliance California</a></strong> programs to screen transactions against the <strong>SDN List, Sectoral Sanctions Identifications List, and country-based sanctions programs</strong> (Russia, Iran, North Korea, Cuba, Venezuela, Syria).
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong><a href="#article/ofac-sanctions-screening-procedures-california" className="text-secondary-teal hover:text-primary-navy">SDN Screening</a>:</strong> Automated screening of customers, vendors, and beneficiaries against OFAC lists</li>
                <li><strong>50% Rule Compliance:</strong> Identify blocked entities through ownership analysis</li>
                <li><strong>Country-Based Sanctions:</strong> Navigate comprehensive embargoes and sector-specific restrictions</li>
                <li><strong>General Licenses:</strong> Utilize authorizations for humanitarian, journalistic, and telecommunications transactions</li>
                <li><strong>OFAC License Applications:</strong> Apply for specific licenses for otherwise-prohibited transactions</li>
                <li><strong>Blocked Property Reporting:</strong> Comply with reporting obligations for rejected transactions</li>
                <li><strong>Voluntary Self-Disclosure:</strong> Report apparent violations to OFAC to mitigate penalties</li>
                <li><strong>OFAC Enforcement Defense:</strong> Respond to Pre-Penalty Notices and negotiate settlement agreements</li>
              </ul>
            </div>

            {/* Export Licensing California */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Licensing California</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When exports require government authorization, we prepare comprehensive export licensing California applications to <strong>BIS, DDTC, Department of Commerce, and other agencies</strong>. Our applications include detailed technical descriptions, end-use statements, and foreign consignee information designed to overcome government scrutiny and obtain timely approvals.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>BIS License Applications:</strong> SNAP-R system submissions for dual-use items under EAR</li>
                <li><strong>DDTC License Applications:</strong> D-Trade system submissions for ITAR-controlled defense articles</li>
                <li><strong>End-Use Statements:</strong> Draft letters explaining intended use and preventing diversion</li>
                <li><strong>Foreign Consignee Statements:</strong> Obtain customer certifications and import permits</li>
                <li><strong>License Condition Compliance:</strong> Ensure shipments comply with provisos and restrictions</li>
                <li><strong>License Renewals and Amendments:</strong> Extend or modify existing licenses for changing circumstances</li>
                <li><strong>Interagency Review Coordination:</strong> Navigate referrals to State, Defense, Energy, and intelligence agencies</li>
                <li><strong>License Denial Appeals:</strong> Challenge adverse determinations through administrative review</li>
              </ul>
            </div>

            {/* Technology Export Controls California */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Technology Export Controls California</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                California's technology sector—<strong>software, <a href="#article/export-controls-semiconductors-california" className="text-secondary-teal hover:text-primary-navy font-semibold">semiconductors</a>, AI/ML, cybersecurity, quantum computing</strong>—faces complex technology export controls California requirements. Both <strong>ITAR technical data</strong> and <strong>EAR technology</strong> can be exported electronically, triggering licensing obligations for cloud services, API access, and international development teams.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Source Code Classification:</strong> Determine whether software qualifies as mass market, publicly available, or controlled</li>
                <li><strong>Technical Data Controls:</strong> Classify design documents, blueprints, and know-how for export control purposes</li>
                <li><strong>Cloud Service Compliance:</strong> Structure SaaS platforms to avoid unauthorized technology exports</li>
                <li><strong>Open Source Release:</strong> Unrestricted public release strategies for eligible software</li>
                <li><strong>API Access Controls:</strong> Implement geographic and user-based restrictions for controlled APIs</li>
                <li><strong>Global Development Teams:</strong> Manage foreign national access through deemed export licenses</li>
                <li><strong><a href="#article/encryption-export-controls-california" className="text-secondary-teal hover:text-primary-navy">Encryption Technology</a>:</strong> Navigate EAR controls on cryptographic functionality</li>
                <li><strong>Emerging Technology Controls:</strong> Monitor new controls on AI, quantum, hypersonics, and biotechnology</li>
              </ul>
            </div>

            {/* Encryption Export Regulations California */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Encryption Export Regulations California</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Encryption items are controlled under <strong>ECCN 5A002, 5D002</strong> with licensing requirements depending on key length, end-user, and destination. California software companies must navigate <strong>encryption export regulations California</strong> through License Exception ENC self-classification, annual self-classification reports, and semi-annual sales reports to BIS.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>License Exception ENC Eligibility:</strong> Determine whether your encryption products qualify for ENC</li>
                <li><strong>Self-Classification Reports:</strong> Submit initial 30-day classification reports to BIS and NSA</li>
                <li><strong>Annual Self-Classification Reports:</strong> Report new encryption products added to product lines</li>
                <li><strong>Semi-Annual Sales Reports:</strong> Report foreign sales of certain encryption items to BIS</li>
                <li><strong>Encryption Registration (ENC):</strong> Register as encryption exporter for streamlined reporting</li>
                <li><strong>Key Length Analysis:</strong> Determine whether symmetric/asymmetric key lengths trigger controls</li>
                <li><strong>Open Source Crypto:</strong> Navigate publicly available encryption software exceptions</li>
                <li><strong>Mass Market Exception:</strong> Qualify consumer encryption products for License Exception ENC</li>
              </ul>
            </div>

            {/* Dual Use Items Compliance California */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Dual Use Items Compliance California</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong><a href="#article/dual-use-export-classification-california" className="text-secondary-teal hover:text-primary-navy font-semibold">Dual-use items</a></strong> have both commercial and military applications: semiconductors, machine tools, navigation equipment, telecommunications, materials, sensors. These items are controlled under <strong>EAR Categories 0-9</strong> based on national security, nonproliferation, chemical/biological weapons, nuclear nonproliferation, missile technology, regional stability, crime control, and anti-terrorism reasons. We help California businesses identify dual use items compliance California obligations and structure compliant export programs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Commerce Control List (CCL) Review:</strong> Classify products against 10 categories and 5 product groups</li>
                <li><strong>Reason for Control Analysis:</strong> Identify NS, MT, NP, CB, AT, RS, CC, UN, SL control codes</li>
                <li><strong>Country-Specific Licensing:</strong> Determine license requirements based on destination country</li>
                <li><strong>De Minimis Rules:</strong> Calculate U.S.-origin content in foreign-made items for reexport controls</li>
                <li><strong>600-Series Items:</strong> Navigate former USML items transitioned to "600-series" ECCNs under EAR</li>
                <li><strong>Wassenaar Arrangement:</strong> Comply with multilateral dual-use export control regime</li>
                <li><strong><a href="#article/ear-export-licensing-california-tech" className="text-secondary-teal hover:text-primary-navy">License Exception Strategy</a>:</strong> Utilize GBS, CIV, TSR exceptions to avoid license delays</li>
                <li><strong>End-User/End-Use Restrictions:</strong> Screen for military, WMD, and missile technology end-uses</li>
              </ul>
            </div>

            {/* Deemed Exports California */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Deemed Exports California</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A <strong>deemed export</strong> occurs when controlled technology or technical data is released to a foreign national in the United States. For California tech companies and research institutions with diverse workforces, deemed exports California create significant compliance challenges. Both <strong>ITAR and EAR</strong> regulate deemed exports, requiring licenses for foreign national access to controlled information.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Foreign National Identification:</strong> HR systems to track employee and contractor citizenship</li>
                <li><strong>Technology Access Controls:</strong> Role-based access restrictions for controlled technical data</li>
                <li><strong>Deemed Export Licenses:</strong> BIS and DDTC license applications for foreign national employment</li>
                <li><strong>License Exception Foreign National (FN):</strong> Utilize exemptions for certain countries and technologies</li>
                <li><strong>University Research Exemptions:</strong> Fundamental research and educational information exclusions</li>
                <li><strong>Visitor Access Protocols:</strong> Control foreign national access during site visits and tours</li>
                <li><strong>Clean Room Procedures:</strong> Segregate controlled technology from foreign national work areas</li>
                <li><strong>Deemed Export Audits:</strong> Verify compliance with technology transfer restrictions</li>
              </ul>
            </div>

            {/* Restricted Party Screening California */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Restricted Party Screening California</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The U.S. government maintains multiple lists of prohibited and restricted parties: <strong>BIS Entity List, Denied Persons List, Unverified List; OFAC SDN List; DDTC Debarred List; and Commerce Consolidated Screening List</strong>. California exporters must implement automated restricted party screening California programs to avoid transactions with listed individuals and entities.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Entity List Screening:</strong> Check against BIS list of entities subject to license requirements</li>
                <li><strong>Denied Persons List:</strong> Verify no involvement by individuals denied export privileges</li>
                <li><strong>Unverified List:</strong> Enhanced due diligence for entities BIS could not verify in end-use checks</li>
                <li><strong>SDN List Screening:</strong> Block transactions with OFAC Specially Designated Nationals</li>
                <li><strong>DDTC Debarred List:</strong> Prevent ITAR transactions with debarred persons</li>
                <li><strong>Consolidated Screening List:</strong> Single-source screening across all U.S. government lists</li>
                <li><strong>Fuzzy Logic Matching:</strong> Identify potential matches despite name variations and transliterations</li>
                <li><strong>Screening Documentation:</strong> Maintain audit trail of all screening results and override decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            California Industries We Serve
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Aerospace & Defense</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                Aircraft, spacecraft, missiles, UAVs, defense electronics, military training systems (ITAR USML Category VIII, XI)
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Semiconductors</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                Advanced chips, EDA software, lithography equipment, foundry services (EAR ECCN 3A001, 3D001, 3E001)
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Software & SaaS</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                Encryption, cybersecurity tools, intrusion software, network penetration testing (EAR ECCN 5D002, 5A004)
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Biotechnology</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                Controlled biological agents, genetic modification equipment, toxins (EAR ECCN 1C351, 1C353, 1C354)
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Telecommunications</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                5G equipment, satellite communications, underwater cable systems (EAR ECCN 5A001, 5B001, 9A004)
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Advanced Manufacturing</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                3D printing systems, CNC machine tools, composite materials, robotics (EAR ECCN 2B001, 1C010, 2B996)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why California Tech Companies Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Technical Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our team includes attorneys with <strong>engineering backgrounds</strong> and <strong>software development experience</strong>. We understand your technology well enough to classify it correctly and defend it effectively.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Government Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our practice includes former <strong>BIS attorneys</strong> and professionals with <strong>DDTC experience</strong>. We know how agencies evaluate license applications and enforcement cases from the inside.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid License Support</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We prepare <strong>BIS and DDTC license applications</strong> within 5 business days for urgent shipments. Our applications are drafted to withstand interagency review and obtain timely approvals.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Enforcement Defense Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our attorneys have extensive experience defending clients in BIS enforcement actions and negotiating penalty settlements. We work to protect your business and preserve security clearances.
              </p>
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

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Related Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Related Practice Areas</h3>
              <ul className="space-y-3">
                <li>
                  <div className="service-link-item">
                    <a href="#regulatory-compliance-advisory" className="service-link">
                      <span className="service-link__title">Trade Compliance Programs</span>
                      <p className="service-link__description">Import/export compliance program design</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#customs-defense-litigation" className="service-link">
                      <span className="service-link__title">Customs Defense & Litigation</span>
                      <p className="service-link__description">CBP enforcement defense</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#practice-areas" className="service-link">
                      <span className="service-link__title">All Practice Areas</span>
                      <p className="service-link__description">Full range of international trade services</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Location Pages */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Serving California Tech Hubs</h3>
              <ul className="space-y-3">
                <li>
                  <div className="service-link-item">
                    <a href="#bay-area-trade-law-attorney" className="service-link">
                      <span className="service-link__title">San Francisco & Bay Area</span>
                      <p className="service-link__description">Silicon Valley export controls expertise</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#los-angeles-port-customs-attorney" className="service-link">
                      <span className="service-link__title">Los Angeles & Long Beach Port</span>
                      <p className="service-link__description">Defense/aerospace export compliance</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Industry Focus */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Industry Export Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <div className="service-link-item">
                    <a href="#technology-electronics-trade-attorney" className="service-link">
                      <span className="service-link__title">Technology & Electronics</span>
                      <p className="service-link__description">Semiconductor & software export controls</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#apparel-textiles-trade-attorney" className="service-link">
                      <span className="service-link__title">Apparel & Textiles</span>
                      <p className="service-link__description">Technical textile export controls</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#food-agriculture-trade-attorney" className="service-link">
                      <span className="service-link__title">Food & Agriculture</span>
                      <p className="service-link__description">Agricultural export compliance</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Helpful Guides */}
          <div className="bg-white p-8 rounded-lg shadow-md overflow-hidden">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful Guides & Resources</h3>
            <div className="grid md:grid-cols-4 gap-6 justify-center">
              <a href="#article/ear-compliance" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">EAR Compliance Guide</h4>
                <p className="text-sm text-text-secondary">Export Administration Regulations overview</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#article/itar-compliance" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">ITAR Compliance Guide</h4>
                <p className="text-sm text-text-secondary">Defense trade controls essentials</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#article/ofac-sanctions" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">OFAC Sanctions Guide</h4>
                <p className="text-sm text-text-secondary">Sanctions screening and compliance</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#trade-law-faq" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">FAQ Center</h4>
                <p className="text-sm text-text-secondary">Answers to export control questions</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-white mb-6">
            Navigate Export Controls with Confidence
          </h2>
          <p className="text-xl opacity-95 mb-8 leading-relaxed text-white">
            Don't let export controls slow your international growth. Contact our export controls California lawyer team for a free classification review and compliance strategy session.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">
              Schedule Free Consultation
            </Button>
            <Button href="tel:+16317468290" variant="outline">
              Call (631) 746-8290
            </Button>
          </div>
        </div>
      </section>

      {/* Evaluation Form */}
      <EvaluationForm theme="light" />
    </main>
  );
};

export default ExportControlsPage;
