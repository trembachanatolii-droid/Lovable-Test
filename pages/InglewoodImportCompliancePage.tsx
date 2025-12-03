import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const InglewoodImportCompliancePage: React.FC = () => {
  useMeta({
    title: 'Inglewood Import Compliance Attorney | LA Customs Lawyer',
    description: 'Inglewood import compliance attorney & LA customs lawyer. C-TPAT, ISA programs, CBP audits, import regulations. Expert legal services for Southern California importers. (310) 744-1328.',
    keywords: 'import compliance inglewood, customs attorney inglewood, import lawyer inglewood ca, c-tpat attorney inglewood, isa compliance inglewood, cbp audit defense inglewood, inglewood trade lawyer, import compliance program inglewood',
    canonical: 'inglewood-import-compliance',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-inglewood.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Inglewood Import Compliance Attorney - C-TPAT, ISA & CBP Audit Defense',
        description: 'Inglewood import compliance attorney providing expert legal services for import programs, C-TPAT certification, ISA compliance, customs audits, and CBP regulatory matters.',
        url: `${siteConfig.siteUrl}/inglewood-import-compliance`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Inglewood Import Compliance', url: `${siteConfig.siteUrl}/inglewood-import-compliance` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose an Inglewood import compliance attorney?',
          answer: 'An Inglewood-based import compliance attorney provides convenient access for Los Angeles area businesses near LAX and Port of LA/Long Beach. Our firm delivers sophisticated import compliance expertise including C-TPAT, ISA programs, and CBP audit defense for Southern California importers.',
        },
        {
          question: 'What import compliance services do you offer in Inglewood?',
          answer: 'Our Inglewood office provides comprehensive import compliance services including: C-TPAT certification and maintenance, ISA (Importer Self-Assessment) program development, import compliance program design, CBP audit defense, customs penalty mitigation, recordkeeping compliance, entry documentation review, and regulatory advisory services.',
        },
        {
          question: 'What is C-TPAT and how can you help with certification?',
          answer: 'C-TPAT (Customs-Trade Partnership Against Terrorism) is CBP\'s voluntary supply chain security program offering benefits like reduced inspections and expedited processing. We help design security programs, prepare applications, conduct gap analyses, and maintain compliance with C-TPAT requirements.',
        },
        {
          question: 'What is ISA and who should participate?',
          answer: 'ISA (Importer Self-Assessment) is CBP\'s program for importers to strengthen internal controls and import compliance. It\'s ideal for large-volume importers seeking to demonstrate compliance and reduce CBP scrutiny. We design ISA programs, conduct internal audits, and maintain ongoing compliance.',
        },
        {
          question: 'How quickly can you respond to CBP compliance issues?',
          answer: 'Our Inglewood location provides rapid access to Port of LA/Long Beach and LAX. We typically respond to urgent CBP compliance matters within 24 hours. Call (310) 744-1328 for immediate assistance with customs compliance issues.',
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
      <section className="hero" aria-label="Inglewood Import Compliance Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Inglewood Import Compliance<br />Attorney California</h1>
          <p className="hero-subtitle">
            Inglewood import compliance attorney serving Los Angeles area importers. Expert C-TPAT certification, ISA programs, CBP audit defense, and import compliance program development.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Import Compliance Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Your Import Compliance Partner
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Inglewood and Los Angeles area with expert import compliance legal services. <strong>Strategic location near LAX and Port of LA/Long Beach</strong> provides optimal access for Southern California importers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">C-TPAT Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Comprehensive <strong>C-TPAT certification, gap analysis, and maintenance</strong> services to secure supply chain benefits and reduce inspection rates.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">ISA Program Design</h3>
              <p className="text-text-secondary leading-relaxed">
                Expert <strong>ISA program development and internal audit</strong> services for large-volume importers seeking enhanced compliance and CBP partnership.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CBP Audit Defense</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic <strong>audit defense and penalty mitigation</strong> for Focused Assessments, Quick Response Audits, and compliance reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Import Compliance Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Import Compliance Services in Inglewood
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">C-TPAT Certification & Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                C-TPAT (Customs-Trade Partnership Against Terrorism) membership provides <strong>reduced inspections, expedited processing, and priority CBP support</strong>. We guide you through certification, gap analysis, security assessments, and ongoing compliance maintenance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>C-TPAT application preparation and submission</li>
                <li>Supply chain security gap analysis</li>
                <li>Security profile development and validation</li>
                <li>Annual recertification and updates</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">ISA Program Development</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                ISA (Importer Self-Assessment) demonstrates your commitment to import compliance through <strong>structured internal controls and self-auditing</strong>. Ideal for high-volume importers seeking to reduce CBP scrutiny and demonstrate regulatory excellence.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ISA program design and implementation</li>
                <li>Internal control framework development</li>
                <li>Self-audit procedures and protocols</li>
                <li>CBP partnership and communication</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Import Compliance Program Design</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Robust import compliance programs prevent violations and <strong>demonstrate reasonable care to CBP</strong>. We design customized programs addressing classification, valuation, country of origin, trade agreements, and recordkeeping compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Compliance manual development</li>
                <li>Standard operating procedures (SOPs)</li>
                <li>Training programs for staff</li>
                <li>Periodic compliance reviews</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Response</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively audits importers through Focused Assessments and Quick Response Audits. Our strategic defense includes <strong>document production, statistical sampling challenges, and penalty mitigation</strong> to minimize liability.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense strategy</li>
                <li>Quick Response Audit (QRA) representation</li>
                <li>CF-28/CF-29 response preparation</li>
                <li>Prior Disclosure filings to cap penalties</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Recordkeeping & Documentation Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP requires importers to maintain entry documentation for <strong>5 years from entry date</strong>. We design recordkeeping systems, conduct compliance reviews, and ensure documentation meets CBP requirements for audits.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Recordkeeping system design and audit</li>
                <li>Entry documentation review</li>
                <li>Commercial invoice compliance</li>
                <li>Document retention policy development</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Reasonable Care & Best Practices</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Demonstrating "reasonable care" is critical to avoiding penalties under <strong>19 USC § 1592</strong>. We help establish compliance procedures, vendor qualification programs, and documentation practices that satisfy CBP reasonable care standards.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Reasonable care checklist implementation</li>
                <li>Vendor/supplier qualification programs</li>
                <li>Product research and verification</li>
                <li>Compliance monitoring and testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Inglewood Importers Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Exclusive Import Compliance Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general practice firms, we focus <strong>exclusively</strong> on customs and import compliance law. This specialization means deeper expertise in C-TPAT, ISA, CBP audits, and import regulations affecting Southern California businesses.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Strategic LA Location</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our Inglewood-area presence provides convenient access for Los Angeles importers near <strong>LAX and Port of LA/Long Beach</strong>. We understand the unique challenges facing Southern California import businesses.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for C-TPAT applications, ISA program design, and compliance manuals, with transparent hourly rates for audit defense. Your free consultation includes a clear fee estimate.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response to CBP Issues</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Import compliance issues often have <strong>strict CBP deadlines</strong>. We prioritize urgent matters and maintain direct communication. Same-day response to CBP audit notices and compliance emergencies.
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
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services</h3>
              <div className="space-y-0">
                <div className="relative group">
                  <a href="#customs-defense-litigation" className="block py-3 text-primary-navy hover:text-secondary-teal transition-colors">
                    <span className="font-medium">Customs Defense & Litigation</span>
                    <p className="text-sm text-text-secondary mt-1">CBP audits, seizures, penalty defense</p>
                    <div className="absolute top-0 right-[-96px] w-24 h-24 bg-secondary-teal transition-[right] duration-300 ease-in-out group-hover:right-0" style={{clipPath: 'polygon(100% 0, 0 0, 100% 100%)'}}>
                      <svg className="absolute top-5 right-5 w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="relative group">
                  <a href="#regulatory-compliance-advisory" className="block py-3 text-primary-navy hover:text-secondary-teal transition-colors">
                    <span className="font-medium">Trade Compliance Programs</span>
                    <p className="text-sm text-text-secondary mt-1">Compliance development & training</p>
                    <div className="absolute top-0 right-[-96px] w-24 h-24 bg-secondary-teal transition-[right] duration-300 ease-in-out group-hover:right-0" style={{clipPath: 'polygon(100% 0, 0 0, 100% 100%)'}}>
                      <svg className="absolute top-5 right-5 w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="relative group">
                  <a href="#tariffs-duties-classification-guide" className="block py-3 text-primary-navy hover:text-secondary-teal transition-colors">
                    <span className="font-medium">Tariff Classification</span>
                    <p className="text-sm text-text-secondary mt-1">HTS code optimization</p>
                    <div className="absolute top-0 right-[-96px] w-24 h-24 bg-secondary-teal transition-[right] duration-300 ease-in-out group-hover:right-0" style={{clipPath: 'polygon(100% 0, 0 0, 100% 100%)'}}>
                      <svg className="absolute top-5 right-5 w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Other Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other LA Area Locations</h3>
              <div className="space-y-0">
                <div className="relative group">
                  <a href="#los-angeles-tariff-lawyer" className="block py-3 text-primary-navy hover:text-secondary-teal transition-colors">
                    <span className="font-medium">Los Angeles</span>
                    <p className="text-sm text-text-secondary mt-1">Downtown LA customs attorney</p>
                    <div className="absolute top-0 right-[-96px] w-24 h-24 bg-secondary-teal transition-[right] duration-300 ease-in-out group-hover:right-0" style={{clipPath: 'polygon(100% 0, 0 0, 100% 100%)'}}>
                      <svg className="absolute top-5 right-5 w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="relative group">
                  <a href="#torrance-trade-attorney" className="block py-3 text-primary-navy hover:text-secondary-teal transition-colors">
                    <span className="font-medium">Torrance</span>
                    <p className="text-sm text-text-secondary mt-1">South Bay trade lawyer</p>
                    <div className="absolute top-0 right-[-96px] w-24 h-24 bg-secondary-teal transition-[right] duration-300 ease-in-out group-hover:right-0" style={{clipPath: 'polygon(100% 0, 0 0, 100% 100%)'}}>
                      <svg className="absolute top-5 right-5 w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Helpful Guides */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Guides</h3>
              <div className="space-y-0">
                <div className="relative group">
                  <a href="#resources/c-tpat-guide" className="block py-3 text-primary-navy hover:text-secondary-teal transition-colors">
                    <span className="font-medium">C-TPAT Certification Guide</span>
                    <div className="absolute top-0 right-[-96px] w-24 h-24 bg-secondary-teal transition-[right] duration-300 ease-in-out group-hover:right-0" style={{clipPath: 'polygon(100% 0, 0 0, 100% 100%)'}}>
                      <svg className="absolute top-5 right-5 w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="relative group">
                  <a href="#resources/isa-program-guide" className="block py-3 text-primary-navy hover:text-secondary-teal transition-colors">
                    <span className="font-medium">ISA Program Guide</span>
                    <div className="absolute top-0 right-[-96px] w-24 h-24 bg-secondary-teal transition-[right] duration-300 ease-in-out group-hover:right-0" style={{clipPath: 'polygon(100% 0, 0 0, 100% 100%)'}}>
                      <svg className="absolute top-5 right-5 w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="relative group">
                  <a href="#trade-law-faq" className="block py-3 text-primary-navy hover:text-secondary-teal transition-colors">
                    <span className="font-medium">FAQ Center</span>
                    <div className="absolute top-0 right-[-96px] w-24 h-24 bg-secondary-teal transition-[right] duration-300 ease-in-out group-hover:right-0" style={{clipPath: 'polygon(100% 0, 0 0, 100% 100%)'}}>
                      <svg className="absolute top-5 right-5 w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

      {/* Related City Pages */}
      <RelatedCityPages currentCity="Inglewood" region="los-angeles" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Inglewood import compliance attorney team today. We'll assess your compliance needs, explain your options, and provide a clear path forward.
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

export default InglewoodImportCompliancePage;
