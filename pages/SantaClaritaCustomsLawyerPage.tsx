
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SantaClaritaCustomsLawyerPage: React.FC = () => {
  useMeta({
    title: 'Santa Clarita Customs Lawyer | SCV Trade Attorney CA',
    description: 'Santa Clarita customs lawyer for Santa Clarita Valley businesses. Expert tariff attorney for manufacturing, tech, entertainment imports. CBP defense. (310) 744-1328.',
    keywords: 'customs lawyer santa clarita, tariff attorney santa clarita, santa clarita valley trade lawyer, scv customs attorney, valencia trade lawyer, international trade attorney santa clarita, newhall customs lawyer',
    canonical: 'santa-clarita-customs-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-santa-clarita.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Santa Clarita Customs Lawyer & SCV Trade Attorney - California',
        description: 'Santa Clarita customs lawyer serving Santa Clarita Valley businesses. Expert tariff and trade compliance services for manufacturing, entertainment, and tech companies.',
        url: `${siteConfig.siteUrl}/santa-clarita-customs-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Santa Clarita Customs Lawyer', url: `${siteConfig.siteUrl}/santa-clarita-customs-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Santa Clarita customs lawyer for SCV businesses?',
          answer: 'Santa Clarita is a thriving business center in the Santa Clarita Valley with growing manufacturing, entertainment, and technology sectors. Our customs lawyer understands the unique needs of SCV businesses with convenient local access via I-5 and CA-14. We provide the same expertise as downtown LA firms without the traffic and parking hassles.',
        },
        {
          question: 'What customs services do you provide in Santa Clarita?',
          answer: 'We offer comprehensive customs and trade services including: tariff classification and HTS optimization, CBP audit defense and penalty mitigation, Section 301 tariff strategies, manufacturing compliance, entertainment equipment imports, export controls and sanctions, antidumping/countervailing duty defense, and UFLPA forced labor compliance.',
        },
        {
          question: 'Do you serve manufacturing companies in Santa Clarita Valley?',
          answer: 'Yes, Santa Clarita has a strong manufacturing base including aerospace components, industrial equipment, and consumer goods. We provide specialized services for manufacturers including country of origin determinations, substantial transformation analysis, foreign trade zone strategies, and tariff classification for manufactured products.',
        },
        {
          question: 'How quickly can you respond to CBP issues for Santa Clarita businesses?',
          answer: 'Our location provides excellent access to Port of Los Angeles and Port of Long Beach via I-5 (approximately 60-75 minutes). We prioritize urgent matters and can typically respond to CBP detentions, cargo holds, or audit notices within 24 hours. For emergencies, call (310) 744-1328.',
        },
        {
          question: 'What industries do you serve in Santa Clarita and the SCV?',
          answer: 'We represent diverse Santa Clarita Valley businesses including: manufacturing and industrial equipment, entertainment and media production, technology and biotech, medical devices, automotive parts, consumer goods, construction materials, and e-commerce. Our SCV location is ideal for serving the region\'s growing business community.',
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
      <section className="hero" aria-label="Santa Clarita Customs Lawyer Hero">
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
          <h1>Santa Clarita Customs Lawyer<br />SCV Trade Attorney California</h1>
          <p className="hero-subtitle">
            Expert Santa Clarita customs lawyer serving Santa Clarita Valley businesses. Specialized in manufacturing, entertainment, and tech trade compliance with convenient SCV access.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Santa Clarita Customs Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Santa Clarita Valley Business Hub
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Santa Clarita is the <strong>economic center of the Santa Clarita Valley</strong>, home to advanced manufacturing, entertainment production, and growing tech sectors. Our customs lawyer provides specialized trade legal services with convenient local access and expertise in SCV's diverse business community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Local Accessibility</h3>
              <p className="text-text-secondary leading-relaxed">
                Convenient <strong>Santa Clarita Valley location</strong> with easy access via I-5 and CA-14. No downtown LA traffic. Serving Valencia, Newhall, Canyon Country, and Saugus.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep knowledge of <strong>manufacturing customs compliance</strong> including aerospace, industrial equipment, and advanced manufacturing import/export regulations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic location with <strong>direct I-5 access to Port of LA/Long Beach</strong>. Quick response to customs issues at California's largest ports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Santa Clarita Trade & Customs Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Manufacturing Customs Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Santa Clarita's <strong>manufacturing sector includes aerospace components, industrial equipment, and specialized products</strong>. We advise on country of origin, substantial transformation, and tariff strategies for manufacturers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Country of origin determinations for manufactured goods</li>
                <li>Substantial transformation analysis</li>
                <li>Manufacturing drawback for exported products</li>
                <li>Foreign trade zone strategies for manufacturers</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & Duty Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper HTS classification can save <strong>15-25% on import costs</strong>. Our Santa Clarita customs lawyer ensures optimal classification and files binding rulings for certainty on your key products.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for industrial and tech products</li>
                <li>Binding Ruling requests (NY/HQ rulings)</li>
                <li>Tariff engineering and duty minimization</li>
                <li>First sale valuation for related-party transactions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP audits can result in <strong>substantial duty assessments and penalties</strong>. Our Santa Clarita office defends you through Focused Assessments and penalty proceedings, often reducing penalties by 75% or more.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense</li>
                <li>Prior Disclosure filings to cap penalties</li>
                <li>CF-28/CF-29 response preparation</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 China Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariffs add <strong>7.5% to 25%</strong> on China imports. We help Santa Clarita manufacturers navigate exclusions, supply chain restructuring, and tariff mitigation strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 exclusion analysis</li>
                <li>Supply chain restructuring for tariff avoidance</li>
                <li>Substantial transformation opinions</li>
                <li>Third-country sourcing compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Controls & Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Santa Clarita companies exporting <strong>aerospace components, technology, and dual-use items</strong> must comply with EAR, ITAR, and OFAC regulations. We ensure export compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Export license requirements (EAR/ITAR)</li>
                <li>ECCN classification for dual-use items</li>
                <li>OFAC sanctions screening and compliance</li>
                <li>Voluntary self-disclosure for export violations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Detention & Seizure Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP detains or seizes cargo, <strong>rapid response is critical</strong>. Our proximity to LA ports enables quick action to resolve detention notices and get your goods released.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP cargo detention response</li>
                <li>Port of LA/Long Beach seizure defense</li>
                <li>IPR (intellectual property) seizure defense</li>
                <li>Admissibility package preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Santa Clarita */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Santa Clarita
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Santa Clarita Valley */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Santa Clarita Valley</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Serving the entire Santa Clarita Valley:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Santa Clarita', 'Valencia', 'Newhall', 'Saugus',
                  'Canyon Country', 'Stevenson Ranch', 'Castaic', 'Val Verde',
                  'Agua Dulce', 'Acton', 'Canyon Park', 'Sand Canyon',
                  'Golden Valley', 'Friendly Valley', 'Westridge', 'Vista Valencia'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Greater LA & Ventura County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Greater LA & Ventura County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Extended service throughout Northern LA County and Ventura County:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Palmdale', 'Lancaster', 'Sylmar', 'San Fernando',
                  'Granada Hills', 'Porter Ranch', 'Northridge', 'Chatsworth',
                  'Simi Valley', 'Moorpark', 'Thousand Oaks', 'Camarillo',
                  'Oxnard', 'Ventura', 'Fillmore', 'Piru'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Statewide & Ports */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">California Ports & Nationwide Representation</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">California Ports</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
                  <li>Port of Oakland</li>
                  <li>Port of Hueneme (Ventura)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Courts</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>U.S. Court of International Trade</li>
                  <li>U.S. Court of Appeals (Federal Circuit)</li>
                  <li>CBP Administrative Proceedings</li>
                  <li>Commerce/BIS Reviews</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Regional Markets</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Los Angeles County</li>
                  <li>Ventura County</li>
                  <li>Kern County</li>
                  <li>San Bernardino County</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Santa Clarita Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Santa Clarita Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">SCV Local Service</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand the <strong>Santa Clarita Valley business community</strong> and provide convenient local access without the hassle of downtown LA. Same expertise, better location.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Deep expertise in <strong>manufacturing customs compliance</strong> including aerospace, industrial equipment, and advanced manufacturing. We speak your language.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Exclusive Trade Law Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general practice firms, we focus <strong>exclusively on international trade and customs</strong>. This specialization means deeper expertise and established CBP relationships.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services and transparent hourly rates for complex matters. Your free consultation includes a clear cost estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Santa Clarita & SCV
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Santa Clarita from our California offices</strong><br />
                Headquarters: 27001 Agoura Road, Suite 350<br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Emergency Response:</strong> Available for urgent CBP issues
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Transportation Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From Santa Clarita:</strong> 30 minutes via CA-126 to 101 South</li>
                <li><strong>To Port of LA/Long Beach:</strong> 60-75 minutes via I-5 South</li>
                <li><strong>From Valencia:</strong> 25 minutes via I-5 to CA-126</li>
                <li><strong>From Newhall:</strong> 30 minutes via I-5 South to 101 West</li>
              </ul>
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
                <div className="service-link-item">
                  <a href="#manufacturing-customs-compliance" className="service-link">
                    <span className="service-link__title">Manufacturing Compliance</span>
                    <p className="service-link__description">Country of origin & drawback</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#export-controls-sanctions" className="service-link">
                    <span className="service-link__title">Export Controls</span>
                    <p className="service-link__description">EAR, ITAR, OFAC compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#tariffs-duties-classification-guide" className="service-link">
                    <span className="service-link__title">Tariff Classification</span>
                    <p className="service-link__description">HTS optimization</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#calabasas-customs-attorney" className="service-link">
                    <span className="service-link__title">Calabasas Office</span>
                    <p className="service-link__description">Headquarters location</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#los-angeles-port-customs-attorney" className="service-link">
                    <span className="service-link__title">LA Port Attorney</span>
                    <p className="service-link__description">Port of LA/Long Beach</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                <div className="service-link-item">
                  <a href="#tariffs-duties-classification-guide" className="service-link">
                    <span className="service-link__title">Tariff Classification Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/export-controls-guide" className="service-link">
                    <span className="service-link__title">Export Controls Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#trade-law-faq" className="service-link">
                    <span className="service-link__title">FAQ Center</span>
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
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Santa Clarita customs lawyer today. We'll assess your SCV business trade needs and provide clear guidance.
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

export default SantaClaritaCustomsLawyerPage;
