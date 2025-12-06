
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const DowneyCustomsBrokerPage: React.FC = () => {
  useMeta({
    title: 'Customs Broker Liability Attorney Downey | Broker Defense Lawyer',
    description: 'Downey customs broker liability attorney. Expert broker negligence defense, CBP broker violations, broker license defense, professional liability. (310) 744-1328.',
    keywords: 'customs broker liability attorney downey, customs broker defense lawyer downey, broker negligence attorney, cbp broker violations lawyer, customs broker license defense california',
    canonical: 'downey-customs-broker-liability-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-broker-downey.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Downey Customs Broker Liability Attorney - Broker Defense & Professional Liability Lawyer',
        description: 'Downey customs broker liability attorney specializing in broker negligence defense, CBP broker violations, license defense, and professional liability.',
        url: `${siteConfig.siteUrl}/downey-customs-broker-liability-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Downey Customs Broker Liability Attorney', url: `${siteConfig.siteUrl}/downey-customs-broker-liability-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What is customs broker liability and when can a broker be held liable?',
          answer: 'Customs brokers can face liability for: (1) Errors in entry preparation causing duty underpayment or penalties, (2) Failure to exercise reasonable care and competence (19 CFR 111), (3) Negligent misclassification or valuation advice, (4) Missed deadlines causing client harm, (5) Professional negligence claims from clients. Brokers must maintain errors & omissions (E&O) insurance. We defend brokers against client claims and CBP disciplinary actions.',
        },
        {
          question: 'What are CBP broker license violations and penalties?',
          answer: 'CBP can discipline brokers for violations including: failure to exercise responsible supervision and control, providing false/misleading information, aiding/abetting client violations, recordkeeping deficiencies, and failing to follow CBP regulations (19 CFR Part 111). Penalties range from monetary fines to license suspension/revocation. We defend brokers in CBP disciplinary proceedings and license suspension appeals.',
        },
        {
          question: 'Can a customs broker be held liable for client\'s CBP penalties?',
          answer: 'Generally, clients are responsible for their own CBP penalties even if broker made errors - importers have duty to ensure accuracy. However, brokers may face: (1) Professional negligence claims if broker error caused penalties, (2) CBP disciplinary action for failing to exercise reasonable care, (3) Client lawsuits for damages if broker\'s negligence caused financial harm. Proper documentation and reasonable care are key defenses.',
        },
        {
          question: 'What is "reasonable care" for customs brokers?',
          answer: 'Reasonable care (19 USC 1484) requires brokers to: (1) Verify importer identity and authority, (2) Exercise due diligence in obtaining information for entries, (3) Classify and value merchandise accurately based on available information, (4) Maintain proper recordkeeping, (5) Stay current on customs regulations. Brokers are NOT guarantors of accuracy but must demonstrate professional competence. We help brokers establish reasonable care procedures and defend against reasonable care allegations.',
        },
        {
          question: 'How do I defend against a customs broker license suspension?',
          answer: 'License suspension defense requires: (1) Responding to CBP Notice of Charges within 60 days, (2) Requesting oral hearing before Administrative Law Judge (ALJ), (3) Presenting evidence of compliance or mitigating factors, (4) Demonstrating corrective action taken, (5) Appealing adverse ALJ decision to CBP Commissioner and federal court. We represent brokers through the entire license defense process.',
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
      <section className="hero" aria-label="Downey Customs Broker Liability Attorney Hero">
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
          <h1>Downey Customs Broker Liability Attorney<br />Broker Defense Lawyer</h1>
          <p className="hero-subtitle">
            Expert customs broker liability attorney serving Downey and Southeast Los Angeles County brokers. Specialized broker negligence defense, CBP license violations, professional liability, and broker disciplinary proceedings.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact#schedule-consultation" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Broker Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Customs Broker Defense Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Customs brokers face <strong>increasing liability risks</strong> from client claims and CBP enforcement. Our broker defense attorneys protect broker licenses, defend professional liability claims, and navigate CBP disciplinary proceedings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Broker Law Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                We focus on <strong>customs broker legal defense</strong>. Deep expertise in 19 CFR Part 111 broker regulations and CBP disciplinary procedures.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">License Protection</h3>
              <p className="text-text-secondary leading-relaxed">
                Proven success <strong>defending broker licenses</strong> against suspension and revocation proceedings. We fight to protect your professional livelihood.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">LA County Knowledge</h3>
              <p className="text-text-secondary leading-relaxed">
                Understanding of <strong>Downey CBP operations</strong> and local broker community challenges near LAX and Long Beach ports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Broker Defense Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Customs Broker Defense Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP License Suspension & Revocation Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP can suspend or revoke broker licenses for <strong>regulatory violations</strong>. We defend brokers through the entire administrative process.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Response to CBP Notice of Charges (19 CFR 111.53)</li>
                <li>ALJ hearing preparation and representation</li>
                <li>Evidence compilation and witness preparation</li>
                <li>Mitigation and corrective action presentation</li>
                <li>Appeal to CBP Commissioner and federal court</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Broker Negligence & Professional Liability Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Clients may sue brokers for <strong>professional negligence</strong> when entry errors cause financial harm. We defend brokers in litigation and arbitration.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Professional negligence claim defense</li>
                <li>E&O insurance claim coordination</li>
                <li>Reasonable care documentation and defense</li>
                <li>Contractual limitation of liability enforcement</li>
                <li>Settlement negotiation and litigation defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Responsible Supervision & Control Violations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Brokers must exercise <strong>responsible supervision and control</strong> (19 CFR 111.28) over employees and operations. Violations can lead to license discipline.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Supervision and control violation defense</li>
                <li>Employee misconduct liability mitigation</li>
                <li>Quality control program development</li>
                <li>Internal compliance procedures and training</li>
                <li>Documentation of supervisory efforts</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Recordkeeping & Compliance Violations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Brokers must maintain <strong>records for 5 years</strong> (19 CFR 111.23). Recordkeeping deficiencies can trigger CBP disciplinary action.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Recordkeeping violation defense</li>
                <li>Record reconstruction and remediation</li>
                <li>Electronic recordkeeping system implementation</li>
                <li>CBP compliance review responses</li>
                <li>Audit trail and documentation best practices</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Broker Power of Attorney & Authority Issues</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Brokers acting without proper <strong>power of attorney</strong> or exceeding authority face serious liability. We resolve authority disputes.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>POA validity and scope analysis</li>
                <li>Unauthorized entry filing defense</li>
                <li>Client authorization documentation</li>
                <li>Dual representation conflict resolution</li>
                <li>Importer of record verification procedures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Broker Compliance Programs & Risk Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proactive compliance reduces <strong>broker liability risk</strong>. We develop comprehensive broker compliance programs and SOPs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Broker compliance manual development</li>
                <li>Standard Operating Procedures (SOPs)</li>
                <li>Employee training programs</li>
                <li>Quality control and entry review procedures</li>
                <li>Client communication and disclosure protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Broker Issues */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Common Broker Liability Issues
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">CBP Violations</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• License Suspension/Revocation</li>
                <li>• Failure to Exercise Reasonable Care</li>
                <li>• Responsible Supervision Failures</li>
                <li>• Recordkeeping Violations</li>
                <li>• False/Misleading Information</li>
                <li>• Aiding/Abetting Client Violations</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Client Claims</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Professional Negligence</li>
                <li>• Misclassification Errors</li>
                <li>• Valuation Mistakes</li>
                <li>• Missed Deadlines (Protests, etc.)</li>
                <li>• Incorrect Entry Data</li>
                <li>• Duty Underpayment Penalties</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Operational Risks</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Employee Errors & Misconduct</li>
                <li>• System/Software Failures</li>
                <li>• Communication Breakdowns</li>
                <li>• POA & Authority Issues</li>
                <li>• Dual Representation Conflicts</li>
                <li>• Compliance Program Deficiencies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Serving Downey & Southeast LA County Customs Brokers
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Southeast LA County Brokers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve <strong>customs brokers</strong> operating in Downey and Southeast Los Angeles:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Downey customs brokers</li>
                <li>• Southeast LA County brokerage firms</li>
                <li>• Gateway Cities broker community</li>
                <li>• Independent licensed customs brokers</li>
                <li>• Multi-location brokerage operations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">California Broker Community</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Broker defense services statewide:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Los Angeles/Long Beach port brokers</li>
                <li>• San Diego customs brokers</li>
                <li>• Bay Area brokers (Oakland, SFO)</li>
                <li>• Air cargo brokers (LAX, ONT)</li>
                <li>• Statewide brokerage firms</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Protecting Broker Licenses & Livelihoods</h3>
            <p className="text-center text-neutral-200 mb-4">
              A customs broker license represents <strong>years of study and professional investment</strong>. Our broker defense attorneys understand the stakes and fight aggressively to protect your license and professional reputation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Customs Brokers Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Broker Law Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general litigators, we have <strong>deep expertise in customs broker regulations</strong> - 19 CFR Part 111, reasonable care standards, and CBP disciplinary procedures.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">License Defense Success</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We have successfully <strong>defended broker licenses</strong> against CBP suspension and revocation proceedings, achieving dismissals, reduced penalties, and negotiated settlements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Broker Industry Understanding</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>broker business realities</strong> - time pressures, client demands, operational challenges - and present effective defenses grounded in industry practices.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proactive Risk Management</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Beyond defense, we help brokers implement <strong>compliance programs</strong> that reduce future liability exposure and strengthen reasonable care documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Downey Customs Broker Defense
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving Downey & Southeast LA County Customs Brokers)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Service:</strong> Statewide broker defense representation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Broker Resources</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>CBP Broker Management:</strong> License and compliance oversight</li>
                <li><strong>19 CFR Part 111:</strong> Broker regulations</li>
                <li><strong>NCBFAA:</strong> National Customs Brokers & Forwarders Association</li>
                <li><strong>E&O Insurance:</strong> Professional liability coverage guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Broker & Trade Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">CBP Defense</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/customs-defense" className="service-link">
                    <span className="service-link__title">Customs Defense & Litigation</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Port Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/long-beach-port-operations-attorney" className="service-link">
                    <span className="service-link__title">Long Beach Port Operations</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Compliance</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Trade Compliance Programs</span>
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

      <RelatedCityPages currentCity="Downey" region="california" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Broker Defense Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Downey customs broker liability attorneys today. We'll assess your situation, explain your options, and develop an aggressive defense strategy to protect your broker license.
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

export default DowneyCustomsBrokerPage;
