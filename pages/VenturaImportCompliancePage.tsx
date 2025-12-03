import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const VenturaImportCompliancePage: React.FC = () => {
  useMeta({
    title: 'Ventura Import Compliance Attorney | California Customs Lawyer',
    description: 'Ventura import compliance attorney & California customs lawyer. C-TPAT, ISA programs, CBP audits, import regulations. Expert legal services for Ventura County importers. (310) 744-1328.',
    keywords: 'import compliance ventura, customs attorney ventura, import lawyer ventura ca, c-tpat attorney ventura, isa compliance ventura, cbp audit defense ventura, ventura trade lawyer, import compliance program ventura county',
    canonical: 'ventura-import-compliance',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-ventura.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Ventura Import Compliance Attorney - C-TPAT, ISA & CBP Audit Defense',
        description: 'Ventura import compliance attorney providing expert legal services for import programs, C-TPAT certification, ISA compliance, customs audits, and CBP regulatory matters for Ventura County businesses.',
        url: `${siteConfig.siteUrl}/ventura-import-compliance`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Ventura Import Compliance', url: `${siteConfig.siteUrl}/ventura-import-compliance` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Ventura import compliance attorney?',
          answer: 'A Ventura-based import compliance attorney provides convenient access for Ventura County businesses including agriculture, manufacturing, and technology sectors. Our firm delivers sophisticated import compliance expertise including C-TPAT, ISA programs, and CBP audit defense.',
        },
        {
          question: 'What import compliance services do you offer in Ventura?',
          answer: 'Our Ventura office provides comprehensive import compliance services including: C-TPAT certification and maintenance, ISA (Importer Self-Assessment) program development, import compliance program design, CBP audit defense, customs penalty mitigation, agriculture import compliance, recordkeeping compliance, and regulatory advisory services.',
        },
        {
          question: 'Do you serve other Ventura County cities?',
          answer: 'Yes. We serve all Ventura County communities including Oxnard, Camarillo, Thousand Oaks, Simi Valley, Santa Paula, and surrounding areas. We understand Ventura County\'s diverse agricultural, manufacturing, and technology sectors.',
        },
        {
          question: 'How do you help with agriculture import compliance?',
          answer: 'Ventura County is a major agricultural hub. We provide FDA import compliance for food products, APHIS coordination for plant/animal products, country of origin labeling compliance, and agricultural product classification under the HTS.',
        },
        {
          question: 'How quickly can you respond to CBP compliance issues?',
          answer: 'We provide rapid response to CBP compliance matters for Ventura County businesses. We typically respond to urgent CBP issues within 24 hours. Call (310) 744-1328 for immediate assistance with customs compliance matters.',
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
      <section className="hero" aria-label="Ventura Import Compliance Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Ventura Import Compliance<br />Attorney California</h1>
          <p className="hero-subtitle">
            Ventura import compliance attorney serving Ventura County importers. Expert C-TPAT certification, ISA programs, agriculture import compliance, CBP audit defense, and regulatory advisory.
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
              Serving Ventura and Ventura County with expert import compliance legal services. <strong>Deep understanding of agriculture, manufacturing, and technology sectors</strong> critical to Ventura County's economy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agriculture Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized <strong>FDA and APHIS import compliance</strong> for Ventura County's agricultural products, fresh produce, and food imports.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">C-TPAT & ISA Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Comprehensive <strong>C-TPAT certification and ISA program development</strong> for enhanced supply chain security and CBP benefits.
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
            Import Compliance Services in Ventura
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
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agriculture Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Ventura County is a major <strong>agricultural producer and food importer</strong>. We provide FDA prior notice compliance, APHIS coordination, country of origin labeling, and specialized agricultural product classification services.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA prior notice and food import compliance</li>
                <li>APHIS permits for plant/animal products</li>
                <li>Country of origin marking (COOL) compliance</li>
                <li>Agricultural product HTS classification</li>
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
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Ventura County Importers Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Ventura County Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand Ventura County's unique <strong>agricultural, manufacturing, and technology sectors</strong>. Our experience includes FDA food compliance, agriculture imports, and specialized industry regulations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Exclusive Import Compliance Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general practice firms, we focus <strong>exclusively</strong> on customs and import compliance law. This specialization means deeper expertise in C-TPAT, ISA, CBP audits, and import regulations.
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="relative group">
                  <a href="#oxnard-tariff-attorney" className="block py-3 text-primary-navy hover:text-secondary-teal transition-colors">
                    <span className="font-medium">Oxnard</span>
                    <p className="text-sm text-text-secondary mt-1">Ventura County customs</p>
                    <div className="absolute top-0 right-[-96px] w-24 h-24 bg-secondary-teal transition-[right] duration-300 ease-in-out group-hover:right-0" style={{clipPath: 'polygon(100% 0, 0 0, 100% 100%)'}}>
                      <svg className="absolute top-5 right-5 w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="relative group">
                  <a href="#los-angeles-tariff-lawyer" className="block py-3 text-primary-navy hover:text-secondary-teal transition-colors">
                    <span className="font-medium">Los Angeles</span>
                    <p className="text-sm text-text-secondary mt-1">LA County customs attorney</p>
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
      <RelatedCityPages currentCity="Ventura" region="ventura" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Ventura import compliance attorney team today. We'll assess your compliance needs, explain your options, and provide a clear path forward.
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

export default VenturaImportCompliancePage;
