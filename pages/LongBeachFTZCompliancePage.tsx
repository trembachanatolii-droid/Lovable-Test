
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LongBeachFTZCompliancePage: React.FC = () => {
  useMeta({
    title: 'FTZ Compliance Attorney Long Beach | Foreign Trade Zone Lawyer',
    description: 'Long Beach FTZ compliance attorney & foreign trade zone lawyer. Expert FTZ operations, zone activation, manufacturing authority. Port of Long Beach. (310) 744-1328.',
    keywords: 'ftz compliance attorney long beach, foreign trade zone lawyer long beach, ftz attorney california, zone compliance lawyer, ftz operations attorney los angeles',
    canonical: 'long-beach-ftz-compliance-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-ftz-lb.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Long Beach FTZ Compliance Attorney - Foreign Trade Zone Lawyer California',
        description: 'Long Beach FTZ compliance attorney specializing in foreign trade zone operations, zone activation, manufacturing authority, and FTZ compliance programs.',
        url: `${siteConfig.siteUrl}/long-beach-ftz-compliance-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Long Beach FTZ Compliance Attorney', url: `${siteConfig.siteUrl}/long-beach-ftz-compliance-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What is a Foreign Trade Zone (FTZ) and how does it save money?',
          answer: 'A Foreign Trade Zone is a designated area within the U.S. where foreign and domestic goods are considered outside U.S. customs territory for duty purposes. FTZ benefits include: (1) Duty deferral - pay duties only when goods enter U.S. commerce, (2) Duty elimination - goods re-exported never pay duties, (3) Inverted tariff - pay duty on finished goods even if higher on components, (4) Reduced MPF - merchandise processing fees capped, and (5) Cash flow improvement. Companies can save 6-7 figures annually through FTZ programs.',
        },
        {
          question: 'Where are FTZs located near Long Beach?',
          answer: 'FTZ #50 (Los Angeles area) covers Long Beach and surrounding areas. There are multiple sites within FTZ #50 including: Port of Long Beach facilities, Port of Los Angeles locations, LAX area, and approved subzones throughout Southern California. Companies can also apply for usage-driven sites at their own facilities. We help companies activate FTZ operations at existing sites or apply for new subzones.',
        },
        {
          question: 'What is the difference between FTZ manufacturing authority and non-manufacturing?',
          answer: 'Non-manufacturing FTZ (basic operations) allows storage, inspection, repackaging, relabeling, and simple assembly. Manufacturing authority permits production activities that change the tariff classification of goods - this unlocks "inverted tariff" benefits where you pay duty on the lower-duty finished product instead of higher-duty components. Manufacturing authority requires FTZ Board approval and detailed production descriptions.',
        },
        {
          question: 'How much does FTZ activation cost?',
          answer: 'FTZ activation costs vary: (1) Application fees - FTZ Board charges $7,500-$25,000+ depending on type, (2) Zone operator fees - monthly/annual fees for using existing FTZ sites, (3) CBP user fees - relatively modest, (4) Legal/consulting fees for application preparation. Despite upfront costs, companies with $500K+ annual import volumes typically achieve ROI within 1-2 years through duty savings.',
        },
        {
          question: 'What are weekly entry procedures and who should use them?',
          answer: 'Weekly entry allows high-volume FTZ users to consolidate entries and pay duties weekly rather than per shipment. This reduces: (1) Entry processing time and costs, (2) CBP bond requirements, (3) Administrative burden. Weekly entry is ideal for manufacturers and distributors importing large volumes continuously. We help companies establish weekly entry procedures with CBP.',
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
      <section className="hero" aria-label="Long Beach FTZ Compliance Attorney Hero">
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
          <h1>Long Beach FTZ Compliance Attorney<br />Foreign Trade Zone Lawyer</h1>
          <p className="hero-subtitle">
            Expert FTZ compliance attorney serving Long Beach and Southern California. Specialized foreign trade zone activation, manufacturing authority, zone operations, and FTZ compliance programs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose FTZ Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Foreign Trade Zone Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Foreign Trade Zones provide <strong>substantial cost savings</strong> for importers and manufacturers. Our FTZ compliance attorneys help Long Beach-area companies activate and operate compliant FTZ programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">FTZ Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                We focus on <strong>foreign trade zone law</strong>. Deep expertise in FTZ activation, manufacturing authority applications, and zone operations compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Cost Savings</h3>
              <p className="text-text-secondary leading-relaxed">
                Our FTZ clients save <strong>millions annually</strong> through duty deferral, elimination, and inverted tariff benefits. ROI typically achieved within 1-2 years.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Long Beach Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct access to <strong>FTZ #50 (LA/Long Beach)</strong>, one of the largest FTZ programs in the U.S., serving port-area manufacturers and distributors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FTZ Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            FTZ Compliance Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FTZ Activation & Site Setup</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We help companies <strong>activate FTZ operations</strong> at existing zone sites or apply for new usage-driven FTZ locations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FTZ site selection and feasibility analysis</li>
                <li>Usage-driven site applications to FTZ Board</li>
                <li>Activation at existing FTZ #50 (LA/Long Beach) sites</li>
                <li>Subzone applications for dedicated facilities</li>
                <li>FTZ operator coordination and agreements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Manufacturing Authority Applications</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Manufacturing authority unlocks <strong>inverted tariff benefits</strong>. We prepare applications describing production processes and tariff savings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Manufacturing authority application (FTZ Board)</li>
                <li>Production process descriptions and flowcharts</li>
                <li>Inverted tariff benefit calculations</li>
                <li>Minor vs. major processing distinction analysis</li>
                <li>Scope expansion and amendments</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FTZ Operations & Compliance Programs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Compliant FTZ operations require <strong>detailed recordkeeping and procedures</strong>. We establish comprehensive FTZ compliance programs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FTZ Standard Operating Procedures (SOPs)</li>
                <li>Inventory control and recordkeeping systems</li>
                <li>Zone admission and withdrawal procedures</li>
                <li>Status tracking (domestic vs. foreign-status)</li>
                <li>FTZ operator compliance and reporting</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Weekly Entry & Direct Delivery Procedures</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                High-volume FTZ users benefit from <strong>weekly entry</strong> and direct delivery, streamlining admissions and reducing costs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Weekly entry authorization applications</li>
                <li>Direct delivery procedures (port to FTZ)</li>
                <li>Consolidated entry processing</li>
                <li>CBP bond optimization for FTZ operations</li>
                <li>Drawback integration with FTZ programs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Zone-to-Zone Transfers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Goods can move <strong>between FTZs without duty payment</strong>. We establish zone-to-zone transfer procedures for multi-location operations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Zone-to-zone transfer authorization</li>
                <li>Inter-zone movement documentation</li>
                <li>Multi-site FTZ coordination</li>
                <li>Foreign-status preservation during transfers</li>
                <li>CBP transfer reporting requirements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FTZ Audits & CBP Examinations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP examines FTZ operations for <strong>compliance with zone procedures</strong>. We defend FTZ audits and resolve operational issues.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP FTZ compliance reviews and audits</li>
                <li>FTZ Board compliance examinations</li>
                <li>Recordkeeping deficiency remediation</li>
                <li>Status discrepancy resolution</li>
                <li>FTZ violation penalty defense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FTZ Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            FTZ Benefits for Companies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Duty Savings</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Duty Deferral Until Sale</li>
                <li>• Duty Elimination on Re-Exports</li>
                <li>• Inverted Tariff (Manufacturing)</li>
                <li>• Scrap/Waste Duty Exemption</li>
                <li>• Quota/Visa Avoidance</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Operational Benefits</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Improved Cash Flow</li>
                <li>• Reduced MPF Costs</li>
                <li>• Streamlined Entry Processing</li>
                <li>• Simplified Inventory Management</li>
                <li>• No State/Local Property Tax</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Strategic Advantages</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Section 301 Tariff Mitigation</li>
                <li>• Competitive Pricing Flexibility</li>
                <li>• Global Supply Chain Optimization</li>
                <li>• Just-in-Time Manufacturing Support</li>
                <li>• Drawback Alternative/Complement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Serving Long Beach FTZ Community
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">FTZ #50 (Los Angeles)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve <strong>FTZ #50 users</strong> throughout Southern California:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Port of Long Beach FTZ sites</li>
                <li>• Port of Los Angeles locations</li>
                <li>• LAX area FTZ facilities</li>
                <li>• Inland Empire distribution centers</li>
                <li>• Orange County subzones</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">FTZ Industries Served</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                FTZ programs benefit diverse industries:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Manufacturing & Assembly Operations</li>
                <li>• Distribution & Logistics Companies</li>
                <li>• Electronics & Technology Importers</li>
                <li>• Automotive Parts & Assembly</li>
                <li>• Apparel & Consumer Goods</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">FTZ #50 - Major Zone Program</h3>
            <p className="text-center text-neutral-200 mb-4">
              FTZ #50 (Los Angeles area) is one of the <strong>most active FTZ programs in the U.S.</strong>, with billions in annual merchandise admitted. Our Long Beach FTZ attorneys help companies leverage this program for substantial duty savings.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Companies Choose Trembach Law for FTZ
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">FTZ Law Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general trade lawyers, we have <strong>deep FTZ expertise</strong> - zone activation, manufacturing authority, inverted tariff calculations, and FTZ Board procedures.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven ROI Track Record</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our FTZ clients consistently achieve <strong>6-7 figure annual savings</strong>. We perform detailed cost-benefit analysis to ensure FTZ makes financial sense before activation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Authority Success</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We have successfully obtained <strong>manufacturing authority</strong> for diverse operations, unlocking inverted tariff benefits for our clients.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Full-Service FTZ Support</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                From initial feasibility through <strong>activation, compliance, and audits</strong>, we provide comprehensive FTZ legal support throughout the program lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Long Beach FTZ Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving Long Beach & FTZ #50 Users)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Service:</strong> Southern California FTZ representation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">FTZ Resources</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>FTZ Board:</strong> Applications and approvals</li>
                <li><strong>CBP:</strong> Zone operations and compliance</li>
                <li><strong>FTZ #50:</strong> LA/Long Beach zone administration</li>
                <li><strong>Port Access:</strong> Long Beach and LA port FTZ sites</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related FTZ & Trade Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Port Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="/long-beach-maritime-tariff" className="service-link">
                    <span className="service-link__title">Maritime Tariff Attorney</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/anaheim-manufacturing-trade-attorney" className="service-link">
                    <span className="service-link__title">Manufacturing Trade</span>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Trade Compliance</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Compliance Programs</span>
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
            Schedule Your Free FTZ Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Long Beach FTZ compliance attorneys today. We'll analyze your import volumes, calculate potential FTZ savings, and develop a comprehensive zone activation strategy.
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

export default LongBeachFTZCompliancePage;
