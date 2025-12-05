
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SacramentoTradeCompliancePage: React.FC = () => {
  useMeta({
    title: 'Trade Compliance Attorney Sacramento | Import Compliance Lawyer CA',
    description: 'Sacramento trade compliance attorney. Expert import/export compliance programs, CBP regulations, internal audits, reasonable care. Protect your business. (310) 744-1328.',
    keywords: 'trade compliance attorney sacramento, import compliance lawyer sacramento, export compliance attorney sacramento, customs compliance sacramento, trade compliance program california, reasonable care attorney sacramento',
    canonical: 'sacramento-trade-compliance',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-compliance.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Sacramento Trade Compliance Attorney - Import/Export Compliance Program Development',
        description: 'Expert Sacramento trade compliance attorney providing import/export compliance program development, CBP audits, reasonable care assessments, and regulatory compliance for California businesses.',
        url: `${siteConfig.siteUrl}/sacramento-trade-compliance`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Sacramento Trade Compliance', url: `${siteConfig.siteUrl}/sacramento-trade-compliance` }
      ]),
      generateFAQSchema([
        {
          question: 'What is a trade compliance program and does my company need one?',
          answer: 'A trade compliance program is a system of internal controls, policies, and procedures designed to ensure your company complies with U.S. Customs and Border Protection (CBP) regulations, export controls, and international trade laws. CBP expects importers to exercise "reasonable care" in their import operations. Companies without compliance programs face higher risk of CBP audits, penalties, and supply chain disruptions. Our Sacramento trade compliance attorney helps you design and implement effective programs.',
        },
        {
          question: 'What does "reasonable care" mean under CBP regulations?',
          answer: 'Reasonable care is the level of care and competence expected from an importer in ensuring the accuracy and completeness of import documentation. CBP\'s Informed Compliance Publication details reasonable care expectations including: accurate classification, correct valuation, proper country of origin determination, and compliance with import restrictions. Failure to exercise reasonable care can result in penalties under 19 USC § 1592. Our Sacramento attorneys conduct reasonable care assessments and implement corrective measures.',
        },
        {
          question: 'How often should we conduct internal trade compliance audits?',
          answer: 'Best practice is annual internal compliance audits, with more frequent reviews for high-risk areas or after significant business changes (new product lines, suppliers, or countries of origin). Internal audits help identify issues before CBP does, potentially enabling Prior Disclosure to cap penalties. Our Sacramento trade compliance team conducts comprehensive audits covering classification, valuation, country of origin, trade programs, and recordkeeping.',
        },
        {
          question: 'What should be included in an import compliance program?',
          answer: 'Effective import compliance programs include: written policies and procedures, management commitment and oversight, risk assessment and internal controls, training programs for staff, recordkeeping systems (5-year retention), periodic internal audits, and procedures for handling violations. Our Sacramento trade compliance attorney develops customized programs based on your specific products, supply chain, and risk profile.',
        },
        {
          question: 'Can a trade compliance program protect us from CBP penalties?',
          answer: 'Yes. While compliance programs don\'t eliminate penalty liability, they significantly reduce penalties through mitigation. CBP considers compliance programs when assessing penalties under its penalty mitigation guidelines. Companies with robust programs demonstrating good faith efforts often receive 50-90% penalty reductions. Additionally, proactive compliance programs enable earlier violation detection and Prior Disclosure opportunities.',
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
      <section className="hero" aria-label="Sacramento Trade Compliance Hero">
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
          <h1>Sacramento Trade Compliance Attorney<br />Import/Export Compliance Lawyer</h1>
          <p className="hero-subtitle">
            Expert trade compliance program development and implementation. Protect your Sacramento business with comprehensive import/export compliance, CBP regulations, and reasonable care programs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Compliance Assessment</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Sacramento Trade Compliance Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Sacramento Trade Compliance Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Sacramento businesses importing or exporting goods face <strong>complex CBP regulations, export controls, and compliance obligations</strong>. Failure to maintain effective trade compliance programs can result in costly audits, penalties, and supply chain disruptions. Our Sacramento trade compliance attorney helps you build proactive compliance programs that protect your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Compliance Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                We focus exclusively on <strong>customs and trade compliance</strong>, with deep expertise in CBP regulations, import/export requirements, and compliance best practices.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Practical Implementation</h3>
              <p className="text-text-secondary leading-relaxed">
                We don't just draft policies - we help you <strong>implement practical, sustainable compliance programs</strong> that integrate with your business operations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Audit Defense Experience</h3>
              <p className="text-text-secondary leading-relaxed">
                Our compliance programs are <strong>CBP audit-tested</strong>. We know what CBP looks for and design programs that withstand scrutiny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Compliance Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Comprehensive Trade Compliance Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Import Compliance Program Development</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP expects importers to exercise <strong>"reasonable care"</strong> in their import operations. Our Sacramento trade compliance attorney develops comprehensive import compliance programs including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Written import compliance policies and procedures manual</li>
                <li>Classification, valuation, and country of origin procedures</li>
                <li>Supplier vetting and qualification processes</li>
                <li>Import documentation review and approval workflows</li>
                <li>Trade agreement utilization (USMCA, FTAs)</li>
                <li>Special program compliance (First Sale, Section 301, AD/CVD)</li>
                <li>Recordkeeping systems (5-year retention requirements)</li>
                <li>Compliance audit and monitoring procedures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Compliance Programs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Export compliance requires adherence to <strong>EAR, ITAR, and OFAC regulations</strong>. Our export compliance programs include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Export compliance manual and written procedures</li>
                <li>Product classification (ECCN determination, USML review)</li>
                <li>Denied party screening (Entity List, SDN List, Denied Persons)</li>
                <li>Export license determination and application procedures</li>
                <li>Deemed export controls and Technology Control Plans</li>
                <li>OFAC sanctions screening and compliance</li>
                <li>Export documentation and recordkeeping</li>
                <li>Employee training on export controls</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Reasonable Care Assessments</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP's Informed Compliance Publication outlines <strong>reasonable care standards</strong> that importers must meet. We conduct comprehensive assessments evaluating:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Accuracy of tariff classification (HTS code assignment)</li>
                <li>Proper customs valuation and related party transactions</li>
                <li>Correct country of origin determination</li>
                <li>Compliance with quotas, visas, and licenses</li>
                <li>Intellectual property rights compliance</li>
                <li>Antidumping and countervailing duty obligations</li>
                <li>Customs broker communication and oversight</li>
                <li>Record retention and availability for CBP review</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Internal Compliance Audits</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Regular internal audits help <strong>identify and correct violations before CBP discovers them</strong>. Our Sacramento compliance team conducts:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Comprehensive import transaction sampling and review</li>
                <li>Classification accuracy testing across product lines</li>
                <li>Valuation verification (First Sale, assists, royalties)</li>
                <li>Country of origin substantiation review</li>
                <li>Free Trade Agreement compliance testing</li>
                <li>Section 301, AD/CVD applicability verification</li>
                <li>Recordkeeping completeness and organization review</li>
                <li>Gap analysis and corrective action recommendations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Compliance Training Programs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Effective compliance requires <strong>trained employees</strong> who understand their responsibilities. We develop and deliver:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Role-based training (executives, operations, finance, logistics)</li>
                <li>Import basics: classification, valuation, country of origin</li>
                <li>Export controls: EAR, ITAR, OFAC fundamentals</li>
                <li>Trade agreement utilization (USMCA, FTAs)</li>
                <li>Red flags and violation reporting procedures</li>
                <li>Recordkeeping requirements and best practices</li>
                <li>Annual refresher training and regulatory updates</li>
                <li>Customized training materials and quick reference guides</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Compliance Technology & Automation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Modern compliance programs leverage <strong>technology and automation</strong>. We help you implement:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Automated classification tools and databases</li>
                <li>Global trade management (GTM) systems</li>
                <li>Denied party screening automation</li>
                <li>Trade agreement qualification tools</li>
                <li>Compliance dashboard and reporting</li>
                <li>Electronic recordkeeping and document management</li>
                <li>Workflow automation for approvals and reviews</li>
                <li>Integration with ERP and procurement systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Program Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Benefits of Robust Trade Compliance Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed">
                Companies with documented compliance programs receive <strong>50-90% penalty reductions</strong> during CBP audits and enforcement actions. Demonstrating good faith efforts significantly reduces liability.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost Savings</h3>
              <p className="text-text-secondary leading-relaxed">
                Proper classification, valuation, and trade agreement utilization can <strong>reduce duty payments by 10-30%</strong>. Compliance programs identify savings opportunities.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Supply Chain Efficiency</h3>
              <p className="text-text-secondary leading-relaxed">
                Compliant importers experience <strong>fewer CBP holds and examinations</strong>, reducing delays and demurrage costs. Trusted trader programs (C-TPAT, ISA) provide further benefits.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Risk Management</h3>
              <p className="text-text-secondary leading-relaxed">
                Proactive compliance programs <strong>identify and address violations early</strong>, enabling Prior Disclosures and avoiding larger penalties from CBP-initiated audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Sacramento Industries We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Agriculture & Food', items: ['Agricultural products', 'Food imports/exports', 'Wine and beverages', 'Organic products'] },
              { title: 'Technology & Electronics', items: ['Computer hardware', 'Software and tech services', 'Telecommunications', 'IoT devices'] },
              { title: 'Healthcare & Medical', items: ['Medical devices', 'Pharmaceuticals', 'Healthcare equipment', 'Biotech products'] },
              { title: 'Manufacturing', items: ['Industrial equipment', 'Machinery and parts', 'Raw materials', 'Finished goods'] },
              { title: 'Retail & E-Commerce', items: ['Consumer products', 'Online retail', 'Wholesale distribution', 'Import/export trading'] },
              { title: 'Government Contractors', items: ['Defense contractors', 'State agencies', 'Federal contractors', 'Public entities'] },
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

      {/* Why Choose Our Sacramento Trade Compliance Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Choose Our Trade Compliance Attorneys
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Exclusive Trade Law Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We practice <strong>exclusively in customs and international trade law</strong>, providing specialized expertise that general practice firms cannot match.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Practical Business Approach</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We design compliance programs that are <strong>practical, sustainable, and integrated with your operations</strong> - not just binders collecting dust.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CBP Audit Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our compliance programs are <strong>tested in real CBP audits</strong>. We know what works and what doesn't, and design programs that withstand scrutiny.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Ongoing Support</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Compliance isn't one-and-done. We provide <strong>ongoing support, updates, and annual reviews</strong> to keep your program current with regulatory changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Sacramento & Northern California
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving Sacramento & Northern California)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Consultations:</strong> In-person, virtual, and phone options
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary-navy mb-3">Sacramento Service Area</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>Sacramento:</strong> 6 hours via I-5 North</li>
                <li><strong>Virtual Services:</strong> Full compliance program development remotely</li>
                <li><strong>Northern California:</strong> Complete coverage</li>
                <li><strong>On-Site Training:</strong> Available at your facility</li>
                <li><strong>Statewide:</strong> California importers/exporters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Trade Compliance Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Compliance Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/cbp-audit-defense" className="service-link">
                    <span className="service-link__title">CBP Audit Defense</span>
                    <p className="service-link__description">Focused Assessment representation</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/prior-disclosure" className="service-link">
                    <span className="service-link__title">Prior Disclosure Filing</span>
                    <p className="service-link__description">Voluntary self-disclosure</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/export-controls" className="service-link">
                    <span className="service-link__title">Export Controls Compliance</span>
                    <p className="service-link__description">ITAR, EAR, OFAC programs</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Markets</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/san-francisco-compliance" className="service-link">
                    <span className="service-link__title">San Francisco Bay Area</span>
                    <p className="service-link__description">Silicon Valley compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/los-angeles-compliance" className="service-link">
                    <span className="service-link__title">Los Angeles Trade Compliance</span>
                    <p className="service-link__description">Southern California programs</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Compliance Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/reasonable-care-checklist" className="service-link">
                    <span className="service-link__title">Reasonable Care Checklist</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/compliance-program-template" className="service-link">
                    <span className="service-link__title">Compliance Program Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/internal-audit-guide" className="service-link">
                    <span className="service-link__title">Internal Audit Guide</span>
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
            Build a Bulletproof Compliance Program
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Protect your Sacramento business from CBP audits and penalties. Our trade compliance attorneys develop practical, effective compliance programs tailored to your operations. Free assessment.
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

export default SacramentoTradeCompliancePage;
