
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanDiegoUFLPACompliancePage: React.FC = () => {
  useMeta({
    title: 'UFLPA Compliance Attorney San Diego | Forced Labor Defense Lawyer CA',
    description: 'San Diego UFLPA compliance attorney. Expert Uyghur Forced Labor Prevention Act defense, supply chain due diligence, detention packages. Protect your imports. (310) 744-1328.',
    keywords: 'uflpa compliance attorney san diego, forced labor lawyer san diego, uflpa detention defense san diego, supply chain due diligence attorney california, uyghur forced labor san diego, cbp detention defense lawyer',
    canonical: 'san-diego-uflpa-compliance',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-uflpa.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'San Diego UFLPA Compliance Attorney - Forced Labor Defense & Supply Chain Due Diligence',
        description: 'Expert San Diego UFLPA compliance attorney providing Uyghur Forced Labor Prevention Act defense, supply chain due diligence programs, and CBP detention defense for California importers.',
        url: `${siteConfig.siteUrl}/san-diego-uflpa-compliance`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'San Diego UFLPA Compliance', url: `${siteConfig.siteUrl}/san-diego-uflpa-compliance` }
      ]),
      generateFAQSchema([
        {
          question: 'What is the Uyghur Forced Labor Prevention Act (UFLPA)?',
          answer: 'The UFLPA, enacted in December 2021, creates a rebuttable presumption that all goods mined, produced, or manufactured wholly or in part in the Xinjiang Uyghur Autonomous Region (XUAR) of China are made with forced labor and therefore prohibited from entry into the United States under 19 USC § 1307. Since June 2022, CBP has detained over $2 billion worth of shipments under UFLPA. Our San Diego UFLPA compliance attorneys help you implement supply chain due diligence and defend against detentions.',
        },
        {
          question: 'What evidence does CBP require to release UFLPA-detained goods?',
          answer: 'To overcome the UFLPA rebuttable presumption, you must provide "clear and convincing evidence" that detained goods were NOT produced with forced labor. This requires comprehensive supply chain mapping, supplier audits, due diligence documentation, and affirmative proof of ethical sourcing. The evidentiary standard is extremely high - most detention responses are denied. Our San Diego UFLPA attorneys prepare comprehensive detention response packages maximizing your chances of release.',
        },
        {
          question: 'Which industries are most affected by UFLPA enforcement?',
          answer: 'CBP targets industries with Xinjiang supply chain exposure: cotton and apparel (Xinjiang produces 20% of world\'s cotton), tomatoes and food products, polysilicon and solar panels, electronics and batteries, and automotive parts. However, UFLPA applies to ALL goods with any Xinjiang nexus. Even if your product doesn\'t originate in Xinjiang, upstream materials or components may trigger detention.',
        },
        {
          question: 'How can I prevent UFLPA detentions before they happen?',
          answer: 'Proactive supply chain due diligence is essential. Our San Diego UFLPA compliance programs include: complete supply chain mapping to raw materials, supplier certification and auditing, third-party social compliance audits, import documentation review, and CBP engagement strategies. Companies with robust due diligence programs have higher success rates in detention defense.',
        },
        {
          question: 'What happens if my goods are detained under UFLPA?',
          answer: 'You have limited time to respond. CBP issues a detention notice requiring a response within 30 days (extendable). You must submit comprehensive evidence proving no forced labor was used. If CBP denies your response, goods are excluded (refused entry) or seized. Our San Diego UFLPA attorneys guide you through detention response, evidence compilation, and appeals if necessary.',
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
      <section className="hero" aria-label="San Diego UFLPA Compliance Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1920&auto=format&fit=crop"
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
          <h1>San Diego UFLPA Compliance Attorney<br />Forced Labor Defense Lawyer</h1>
          <p className="hero-subtitle">
            Expert Uyghur Forced Labor Prevention Act compliance and detention defense. Protect your San Diego imports with comprehensive supply chain due diligence programs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free UFLPA Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose San Diego UFLPA Compliance Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              San Diego UFLPA Compliance Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Since the UFLPA took effect in June 2022, CBP has detained <strong>over $2 billion in merchandise</strong> suspected of Xinjiang forced labor connections. Port of San Diego importers face significant UFLPA risk. Our San Diego UFLPA compliance attorney helps you implement proactive due diligence and defend against detentions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">UFLPA Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                We focus exclusively on <strong>forced labor compliance and UFLPA detention defense</strong>, with deep expertise in CBP's enforcement approach and evidentiary standards.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Detention Defense Success</h3>
              <p className="text-text-secondary leading-relaxed">
                We've successfully defended <strong>dozens of UFLPA detention cases</strong> across apparel, electronics, solar, and agricultural sectors, recovering millions in detained goods.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of San Diego Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct experience with <strong>Port of San Diego CBP operations</strong> and local enforcement priorities, enabling efficient detention response and resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UFLPA Compliance Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Comprehensive UFLPA Compliance Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Supply Chain Due Diligence Programs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The cornerstone of UFLPA compliance is <strong>comprehensive supply chain due diligence</strong>. CBP expects importers to know their supply chains from raw materials to finished goods. Our San Diego UFLPA compliance programs include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Complete supply chain mapping to raw material sources</li>
                <li>Supplier risk assessment and tiering</li>
                <li>Forced labor risk identification in supply chain</li>
                <li>Supplier certification and questionnaire programs</li>
                <li>Third-party social compliance audits (SMETA, SA8000, BSCI)</li>
                <li>Ongoing monitoring and reassessment procedures</li>
                <li>Documentation systems for CBP production if detained</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Detention Defense & Response</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP detains your shipment under UFLPA, you must provide <strong>"clear and convincing evidence"</strong> of no forced labor - an extremely high evidentiary burden. Our detention defense services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Immediate response team mobilization upon detention notice</li>
                <li>Comprehensive detention response package preparation</li>
                <li>Supply chain documentation compilation and organization</li>
                <li>Supplier affidavits and certifications</li>
                <li>Third-party audit reports and social compliance evidence</li>
                <li>Legal argument addressing rebuttable presumption</li>
                <li>Follow-up with CBP and response to Requests for Information</li>
                <li>Appeals and reconsideration if initial response denied</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Entity List Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The UFLPA Entity List identifies <strong>entities in or associated with Xinjiang</strong> that CBP has determined to be involved in forced labor. Goods from these entities are subject to heightened scrutiny. We help with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>UFLPA Entity List screening and monitoring</li>
                <li>Supplier vetting against Entity List</li>
                <li>Supply chain analysis to identify Entity List exposure</li>
                <li>Alternative sourcing strategies to avoid listed entities</li>
                <li>Documentation to rebut Entity List connections</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">High-Risk Industry Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Certain industries face <strong>heightened UFLPA enforcement</strong> due to known Xinjiang supply chain exposure. We provide specialized compliance for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Cotton & Apparel:</strong> Xinjiang produces 20% of world's cotton - comprehensive cotton sourcing documentation required</li>
                <li><strong>Tomatoes & Food:</strong> Tomato paste, sauces, and processed foods with Xinjiang tomato exposure</li>
                <li><strong>Polysilicon & Solar Panels:</strong> 45% of world's polysilicon comes from Xinjiang - solar industry under intense scrutiny</li>
                <li><strong>Electronics & Batteries:</strong> Components and raw materials potentially sourced from Xinjiang</li>
                <li><strong>Automotive:</strong> Parts and materials with upstream Xinjiang connections</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Supplier Audit & Certification Programs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP expects <strong>verifiable supplier audits and certifications</strong> as part of due diligence. Our programs include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Supplier self-assessment questionnaires</li>
                <li>Forced labor certification requirements</li>
                <li>Third-party social compliance audit coordination</li>
                <li>On-site facility inspections and worker interviews</li>
                <li>Corrective action plans for identified issues</li>
                <li>Ongoing supplier monitoring and re-certification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Alternative Sourcing & Supply Chain Restructuring</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Sometimes the best UFLPA compliance strategy is <strong>eliminating Xinjiang exposure entirely</strong>. We assist with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Alternative supplier identification and vetting</li>
                <li>Supply chain diversification strategies</li>
                <li>Regional sourcing analysis (Southeast Asia, India, Americas)</li>
                <li>Cost-benefit analysis of supply chain changes</li>
                <li>Transition planning and implementation</li>
                <li>Documentation of new supply chain for CBP</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* UFLPA Enforcement Statistics */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            UFLPA Enforcement: By the Numbers
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg text-center border-t-4 border-secondary-teal">
              <div className="text-5xl font-bold text-primary-navy mb-3">$2B+</div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">Total Detained Goods</h3>
              <p className="text-text-secondary text-sm">Over $2 billion in shipments detained since UFLPA enforcement began in June 2022</p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg text-center border-t-4 border-secondary-teal">
              <div className="text-5xl font-bold text-primary-navy mb-3">6,000+</div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">Shipments Detained</h3>
              <p className="text-text-secondary text-sm">Thousands of shipments stopped at U.S. ports under UFLPA enforcement</p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg text-center border-t-4 border-secondary-teal">
              <div className="text-5xl font-bold text-primary-navy mb-3">&lt;10%</div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">Release Rate</h3>
              <p className="text-text-secondary text-sm">Less than 10% of UFLPA detentions result in cargo release - evidence requirements are extremely strict</p>
            </div>
          </div>

          <div className="mt-12 bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Top Detained Industries</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Electronics & Technology</h4>
                <p className="text-sm text-neutral-200">Semiconductors, batteries, solar panels, consumer electronics</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Apparel & Textiles</h4>
                <p className="text-sm text-neutral-200">Cotton clothing, fabric, garments, footwear</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Industrial Materials</h4>
                <p className="text-sm text-neutral-200">Polysilicon, chemicals, raw materials</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Agricultural Products</h4>
                <p className="text-sm text-neutral-200">Tomato products, food ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our San Diego UFLPA Team */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Choose Our UFLPA Compliance Attorneys
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Forced Labor Law Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We focus exclusively on <strong>customs and trade law, including forced labor compliance</strong>. We understand 19 USC § 1307, UFLPA statutory requirements, and CBP's enforcement approach.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Detention Defense Track Record</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We've successfully defended <strong>dozens of UFLPA detentions</strong> and recovered millions in detained merchandise through comprehensive evidence packages and strategic CBP engagement.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proactive Compliance Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                The best UFLPA strategy is <strong>prevention through due diligence</strong>. We help you implement robust supply chain programs that reduce detention risk before it happens.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cross-Border Supply Chain Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>global supply chains</strong> and help you navigate complex sourcing relationships, regional alternatives, and supply chain restructuring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving San Diego & Port of San Diego
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving San Diego & Southern California)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>UFLPA Detention Emergencies:</strong> 24/7 response available
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary-navy mb-3">San Diego Service Area</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>Port of San Diego:</strong> 2 hours via I-5 South</li>
                <li><strong>Downtown San Diego:</strong> 2 hours via I-5 South</li>
                <li><strong>Tijuana Border:</strong> Direct I-5 access</li>
                <li><strong>San Diego County:</strong> Complete coverage</li>
                <li><strong>Imperial County:</strong> Calexico POE service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Forced Labor Compliance Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Compliance Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#supply-chain-audits" className="service-link">
                    <span className="service-link__title">Supply Chain Audits</span>
                    <p className="service-link__description">Due diligence and mapping</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#customs-detention-defense" className="service-link">
                    <span className="service-link__title">Detention Defense</span>
                    <p className="service-link__description">CBP cargo release strategies</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#import-compliance" className="service-link">
                    <span className="service-link__title">Import Compliance Programs</span>
                    <p className="service-link__description">CBP compliance implementation</p>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Ports</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#los-angeles-uflpa" className="service-link">
                    <span className="service-link__title">Los Angeles UFLPA Defense</span>
                    <p className="service-link__description">Port of LA detention response</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#long-beach-uflpa" className="service-link">
                    <span className="service-link__title">Long Beach UFLPA Defense</span>
                    <p className="service-link__description">Port of Long Beach compliance</p>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">UFLPA Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#resources/uflpa-compliance-guide" className="service-link">
                    <span className="service-link__title">UFLPA Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/supply-chain-due-diligence" className="service-link">
                    <span className="service-link__title">Supply Chain Due Diligence</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/uflpa-entity-list" className="service-link">
                    <span className="service-link__title">UFLPA Entity List Screening</span>
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
            Protect Your Imports from UFLPA Detention
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let UFLPA detentions disrupt your business. Our San Diego UFLPA compliance attorneys provide proactive due diligence programs and aggressive detention defense. Free consultation.
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

export default SanDiegoUFLPACompliancePage;
