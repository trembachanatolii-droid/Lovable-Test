
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LosAngelesCBPAuditDefensePage: React.FC = () => {
  useMeta({
    title: 'CBP Audit Defense Attorney Los Angeles | Customs Audit Lawyer CA',
    description: 'Los Angeles CBP audit defense attorney. Expert Focused Assessment defense, Quick Response Audits, CF-28/CF-29 responses. Protect your business from CBP penalties. (310) 744-1328.',
    keywords: 'cbp audit defense attorney los angeles, customs audit lawyer los angeles, focused assessment attorney los angeles, cbp audit defense lawyer california, customs compliance audit attorney la, cbp penalty defense los angeles',
    canonical: 'los-angeles-cbp-audit-defense',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-cbp-audit.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Los Angeles CBP Audit Defense Attorney - Focused Assessment & Customs Audit Defense',
        description: 'Expert CBP audit defense attorney in Los Angeles providing Focused Assessment defense, Quick Response Audit representation, and customs penalty mitigation for California importers.',
        url: `${siteConfig.siteUrl}/los-angeles-cbp-audit-defense`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Los Angeles CBP Audit Defense', url: `${siteConfig.siteUrl}/los-angeles-cbp-audit-defense` }
      ]),
      generateFAQSchema([
        {
          question: 'What is a CBP Focused Assessment audit?',
          answer: 'A CBP Focused Assessment (FA) is an intensive audit program where U.S. Customs and Border Protection examines your company\'s import compliance across multiple areas including valuation, classification, country of origin, and other trade programs. FAs typically last 12-24 months and can result in significant penalty assessments if violations are found. Our Los Angeles CBP audit defense attorneys guide you through every phase of the FA process.',
        },
        {
          question: 'How long does a CBP audit defense case typically take?',
          answer: 'Focused Assessments typically last 12-24 months from initiation to conclusion. Quick Response Audits are shorter, usually 90-180 days. The timeline depends on the complexity of your import operations, the number of product lines reviewed, and the responsiveness of both parties. Our Los Angeles CBP audit defense team works to expedite the process while ensuring thorough, accurate responses.',
        },
        {
          question: 'What are the potential penalties in a CBP audit?',
          answer: 'CBP audit penalties can range from thousands to millions of dollars depending on the violations discovered. Under 19 USC § 1592, penalties for negligence are equal to the loss of duties (or if no loss, the domestic value of the merchandise). Grossly negligent violations carry penalties up to 4x the loss of duties, and fraudulent violations can result in penalties equal to the domestic value of the merchandise. Our Los Angeles attorneys work to minimize or eliminate penalties through strategic defense and mitigation.',
        },
        {
          question: 'Should I file a Prior Disclosure before or during a CBP audit?',
          answer: 'If you discover violations before CBP initiates an audit, filing a Prior Disclosure can cap your maximum penalty at the interest on lost duties - a fraction of what you\'d face in an audit. However, once CBP has "commenced" an investigation, Prior Disclosure protection may not be available. Our Los Angeles CBP audit defense attorneys evaluate whether Prior Disclosure is strategically beneficial in your situation and can prepare comprehensive disclosure packages.',
        },
        {
          question: 'What documents does CBP typically request in an audit?',
          answer: 'CBP commonly requests: commercial invoices, packing lists, entry documentation, purchase orders, payment records, manufacturer certifications, country of origin documentation, related party transaction records, transfer pricing studies, classification analyses, and internal compliance procedures. Our Los Angeles CBP audit defense team helps you organize, review, and produce these documents in a manner that protects your interests while satisfying CBP\'s requirements.',
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
      <section className="hero" aria-label="Los Angeles CBP Audit Defense Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Los Angeles CBP Audit Defense Attorney<br />Customs Audit Defense Lawyer</h1>
          <p className="hero-subtitle">
            Expert CBP Focused Assessment defense and customs audit representation in Los Angeles. Protect your business from costly penalties with proven audit defense strategies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Audit Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Our CBP Audit Defense Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Los Angeles CBP Audit Defense Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              When CBP initiates a Focused Assessment or Quick Response Audit, your company faces potential penalties ranging from thousands to millions of dollars. Our Los Angeles CBP audit defense attorneys have successfully defended <strong>hundreds of importers</strong> through every phase of the audit process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Audit Experience</h3>
              <p className="text-text-secondary leading-relaxed">
                We've defended <strong>200+ CBP audits</strong> across every industry and audit type. Our experience with CBP's audit methodology allows us to anticipate issues and develop proactive defense strategies.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of LA/Long Beach Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Los Angeles and Long Beach ports account for <strong>40% of U.S. container imports</strong>. We regularly work with local CBP audit teams and understand their priorities and procedures.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Penalty Reduction Success</h3>
              <p className="text-text-secondary leading-relaxed">
                Our Los Angeles CBP audit defense team has achieved <strong>penalty reductions averaging 70-90%</strong> through strategic mitigation, Prior Disclosures, and negotiated settlements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CBP Audit Defense Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Comprehensive CBP Audit Defense Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Focused Assessment (FA) Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP Focused Assessments are the most intensive customs audit program. They examine your entire import compliance system across <strong>multiple risk areas</strong> and typically last 12-24 months. Our Los Angeles CBP audit defense attorneys manage every phase:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Pre-assessment internal compliance review to identify potential issues</li>
                <li>Strategic response to CBP's initial Information Document Request (IDR)</li>
                <li>Organization and production of requested documentation</li>
                <li>Management of CBP site visits and interviews</li>
                <li>Response to CBP findings and assessment recommendations</li>
                <li>Negotiation of mitigation and settlement agreements</li>
                <li>Post-audit compliance program implementation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Quick Response Audit (QRA) Representation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Quick Response Audits are shorter, more focused examinations targeting specific compliance issues. While less intensive than Focused Assessments, QRAs still carry <strong>significant penalty risk</strong>. Our defense services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Rapid mobilization and response team activation</li>
                <li>Focused document production strategy</li>
                <li>Targeted compliance review of audit scope areas</li>
                <li>Direct communication with CBP auditors</li>
                <li>Quick resolution negotiation to minimize business disruption</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CF-28 & CF-29 Notice Response</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP discovers potential violations, they issue a <strong>CF-28 Request for Information</strong> or <strong>CF-29 Notice of Action</strong>. These notices have strict deadlines and require carefully crafted responses. We provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Analysis of CBP's allegations and legal theories</li>
                <li>Comprehensive written responses addressing each issue</li>
                <li>Supporting documentation and legal argument compilation</li>
                <li>Mitigation package development to reduce penalties</li>
                <li>Follow-up negotiation with CBP Fines, Penalties & Forfeitures Office</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Prior Disclosure Strategy & Filing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A strategically timed Prior Disclosure under 19 USC § 1592(c)(4) can <strong>cap your maximum penalty at interest on lost duties</strong> - often 95% less than audit penalties. Our Los Angeles CBP audit defense team evaluates whether Prior Disclosure is appropriate and prepares:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Self-audit and violation identification analysis</li>
                <li>Timing strategy to ensure "pre-commencement" protection</li>
                <li>Comprehensive Prior Disclosure packages with supporting documentation</li>
                <li>Duty loss calculations and tender preparation</li>
                <li>Ongoing communication with CBP during PD review process</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">19 USC § 1592 Penalty Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 1592 penalties can be devastating. Negligent violations equal the loss of duties, grossly negligent violations can be <strong>4x the duty loss</strong>, and fraud can result in penalties equal to domestic value. Our defense approach includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Legal analysis challenging CBP's culpability determination</li>
                <li>Reduction of penalty level (fraud → gross negligence → negligence)</li>
                <li>Mitigation based on cooperation, corrective action, and good faith</li>
                <li>Alternative legal theories to reduce or eliminate liability</li>
                <li>Negotiated settlement agreements with manageable payment terms</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Regulatory Audit & Compliance Assessment</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Beyond CBP audits, other agencies conduct their own compliance reviews. Our Los Angeles customs audit defense extends to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA import compliance audits and warning letter responses</li>
                <li>USDA import compliance reviews</li>
                <li>BIS export controls audits</li>
                <li>OFAC sanctions compliance examinations</li>
                <li>Multi-agency coordinated enforcement actions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The CBP Audit Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Understanding the CBP Audit Process
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Phase 1: Initiation & Scoping</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP selects audit candidates through risk-based targeting and sends an initial notice letter. This critical early phase includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary text-sm">
                <li>Receipt of CBP audit notification letter</li>
                <li>Initial meeting to discuss audit scope and timeline</li>
                <li>Identification of audit focus areas and risk categories</li>
                <li>Assembly of internal audit defense team</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Phase 2: Information Request</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP issues Information Document Requests (IDRs) seeking detailed records. Strategic document production is critical:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary text-sm">
                <li>Review and analysis of CBP's IDR</li>
                <li>Internal document collection and organization</li>
                <li>Privilege review and protection of sensitive information</li>
                <li>Strategic, organized document production</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Phase 3: Audit Field Work</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP auditors conduct on-site visits, interviews, and detailed record examination. Effective management includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary text-sm">
                <li>Coordination of site visits and facility access</li>
                <li>Employee interview preparation and attendance</li>
                <li>Real-time response to auditor questions and requests</li>
                <li>Documentation of all interactions and agreements</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Phase 4: Findings & Resolution</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP issues findings and proposed penalties. Aggressive defense and mitigation are essential:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary text-sm">
                <li>Analysis of CBP's findings and penalty calculations</li>
                <li>Development of legal and factual counterarguments</li>
                <li>Mitigation presentation highlighting cooperation and remediation</li>
                <li>Settlement negotiation to minimize penalties and payment terms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Defend */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Industries We Defend in CBP Audits
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Electronics & Technology', items: ['Consumer electronics', 'Computer components', 'Telecom equipment', 'Semiconductor imports'] },
              { title: 'Apparel & Textiles', items: ['Fashion and clothing', 'Footwear imports', 'Fabric and textile materials', 'Accessories and bags'] },
              { title: 'Automotive Parts', items: ['OEM components', 'Aftermarket parts', 'Vehicle accessories', 'Manufacturing equipment'] },
              { title: 'Food & Beverage', items: ['Imported food products', 'Alcoholic beverages', 'Food ingredients', 'Packaged goods'] },
              { title: 'E-Commerce & Retail', items: ['Online retail imports', 'Direct-to-consumer shipments', 'Multi-channel retail', 'Drop-shipping operations'] },
              { title: 'Industrial Equipment', items: ['Manufacturing machinery', 'Industrial tools', 'Production equipment', 'Heavy equipment'] },
            ].map((industry) => (
              <div key={industry.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary-navy mb-3 font-garamond">{industry.title}</h3>
                <ul className="space-y-1 text-text-secondary text-sm">
                  {industry.items.map((item) => (
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

      {/* Why Choose Our Los Angeles CBP Audit Defense Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Choose Our CBP Audit Defense Team
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Exclusive Customs Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general law firms, we practice <strong>exclusively in customs and international trade law</strong>. This specialization means deeper knowledge of CBP audit procedures, current enforcement priorities, and proven defense strategies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Track Record</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We've successfully defended <strong>hundreds of CBP audits</strong> with penalty reductions averaging 70-90%. Our experience includes multi-million dollar cases and complex multi-year Focused Assessments.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Strategic, Not Just Reactive</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We don't just respond to CBP requests - we develop <strong>proactive defense strategies</strong> anticipating CBP's next moves, identifying opportunities for mitigation, and positioning you for the best possible outcome.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Fixed-Fee Options</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                For many audit defense matters, we offer <strong>flat-fee pricing</strong> so you can budget with certainty. No surprise bills. Your free consultation includes a detailed fee proposal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Los Angeles CBP Audit Defense Attorney Office
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving Los Angeles & Port of LA/Long Beach)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Emergency Audit Response:</strong> Available 24/7
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary-navy mb-3">Serving Greater Los Angeles</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>Downtown Los Angeles:</strong> 25 minutes via 101 East</li>
                <li><strong>Port of LA/Long Beach:</strong> 45-60 minutes via 110/710</li>
                <li><strong>LAX Area:</strong> 30 minutes via 405 South</li>
                <li><strong>San Fernando Valley:</strong> 15-30 minutes via 101</li>
                <li><strong>Orange County:</strong> 60 minutes via 5 South</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Customs Defense Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Audit Defense Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/prior-disclosure-filing" className="service-link">
                    <span className="service-link__title">Prior Disclosure Filing</span>
                    <p className="service-link__description">Strategic self-disclosure to cap penalties</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/customs-penalty-mitigation" className="service-link">
                    <span className="service-link__title">Penalty Mitigation</span>
                    <p className="service-link__description">Reduce or eliminate CBP penalties</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/compliance-program-development" className="service-link">
                    <span className="service-link__title">Compliance Programs</span>
                    <p className="service-link__description">Post-audit compliance implementation</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/long-beach-cbp-audit" className="service-link">
                    <span className="service-link__title">Long Beach Port Audit Defense</span>
                    <p className="service-link__description">Port of Long Beach representation</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/san-francisco-cbp-audit" className="service-link">
                    <span className="service-link__title">San Francisco Bay Area</span>
                    <p className="service-link__description">Oakland & SF audit defense</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Audit Defense Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/cbp-audit-guide" className="service-link">
                    <span className="service-link__title">CBP Audit Survival Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/prior-disclosure-guide" className="service-link">
                    <span className="service-link__title">Prior Disclosure Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/penalty-mitigation" className="service-link">
                    <span className="service-link__title">Penalty Mitigation Strategies</span>
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Facing a CBP Audit? Get Expert Defense Now
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't face CBP alone. Our Los Angeles CBP audit defense attorneys will protect your rights, minimize penalties, and guide you through the entire process. Free confidential consultation.
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

export default LosAngelesCBPAuditDefensePage;
