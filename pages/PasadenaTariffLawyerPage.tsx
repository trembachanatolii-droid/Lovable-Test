
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const PasadenaTariffLawyerPage: React.FC = () => {
  useMeta({
    title: 'Pasadena Tariff Lawyer | LA County Business Customs Attorney CA',
    description: 'Pasadena tariff lawyer for LA County businesses. Expert customs attorney for tech, biotech, aerospace, manufacturing. CBP defense, trade compliance. (310) 744-1328.',
    keywords: 'tariff lawyer pasadena, customs attorney pasadena, pasadena trade attorney, international trade lawyer pasadena, aerospace customs attorney, biotech trade lawyer pasadena',
    canonical: 'pasadena-tariff-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-pasadena.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Pasadena Tariff Lawyer & Business Customs Attorney - Los Angeles County CA',
        description: 'Pasadena tariff lawyer serving LA County businesses. Expert customs legal services for technology, biotech, aerospace, and manufacturing trade compliance.',
        url: `${siteConfig.siteUrl}/pasadena-tariff-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Pasadena Tariff Lawyer', url: `${siteConfig.siteUrl}/pasadena-tariff-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Pasadena tariff lawyer for LA businesses?',
          answer: 'Pasadena is a major LA County business center home to JPL/NASA, Caltech, biotech companies, and advanced manufacturers. Our tariff lawyer serves the diverse Pasadena business community including aerospace/defense, technology, life sciences, and general manufacturing with convenient access throughout the San Gabriel Valley and Los Angeles County.',
        },
        {
          question: 'Do you serve aerospace and defense contractors in Pasadena?',
          answer: 'Yes, Pasadena is home to JPL and aerospace companies. We provide ITAR export controls for defense articles, aerospace component import compliance, NASA/DOD procurement regulations, tariff classification for aerospace equipment, and export licensing for dual-use aerospace technology.',
        },
        {
          question: 'What services do you provide for biotech and life sciences companies?',
          answer: 'Pasadena has a growing biotech sector. We assist with FDA biological product import compliance, research equipment and laboratory supplies, export controls for biological materials, clinical trial import/export procedures, and tariff classification for medical devices and diagnostics.',
        },
        {
          question: 'Can you help with manufacturing customs compliance?',
          answer: 'Absolutely. Pasadena has significant advanced manufacturing. We provide country of origin determinations, substantial transformation analysis, manufacturing drawback for exports, Section 301 tariff strategies, and foreign trade zone compliance for manufacturers.',
        },
        {
          question: 'What industries do you serve in Pasadena and San Gabriel Valley?',
          answer: 'We represent diverse Pasadena businesses including: aerospace and defense, biotechnology and life sciences, technology and software, medical devices and diagnostics, advanced manufacturing, entertainment production equipment, automotive engineering, and general importers throughout the San Gabriel Valley and LA County.',
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
      <section className="hero" aria-label="Pasadena Tariff Lawyer Hero">
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
          <h1>Pasadena Tariff Lawyer<br />LA County Business Customs Attorney</h1>
          <p className="hero-subtitle">
            Expert Pasadena tariff lawyer serving LA County businesses. Specialized in aerospace, biotech, technology, and manufacturing trade compliance with San Gabriel Valley expertise.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Pasadena Tariff Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              LA County Advanced Business Hub
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Pasadena is a <strong>premier LA County business center</strong>, home to JPL/NASA, Caltech, biotech companies, and advanced manufacturing. Our tariff lawyer provides specialized customs legal services for technology, aerospace, life sciences, and innovation-driven businesses throughout the San Gabriel Valley.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Aerospace & Defense</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized in <strong>JPL/NASA and aerospace trade compliance</strong> including ITAR, aerospace component imports, and defense contractor regulations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Biotech & Life Sciences</h3>
              <p className="text-text-secondary leading-relaxed">
                Expert knowledge of <strong>FDA biological products and medical device compliance</strong>. We serve Pasadena's growing biotech sector.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Gabriel Valley Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Convenient <strong>location throughout LA County and San Gabriel Valley</strong>. Easy access via I-210, I-605, and CA-110.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Pasadena Trade & Customs Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Aerospace & ITAR Export Controls</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Pasadena is home to <strong>JPL and aerospace contractors</strong>. We provide ITAR compliance for defense articles, aerospace component classification, NASA/DOD procurement regulations, and export licensing.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ITAR registration and compliance for aerospace</li>
                <li>Defense article export licensing (DSP-5, DSP-73)</li>
                <li>Aerospace component tariff classification</li>
                <li>NASA/DOD procurement compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Biotechnology & Life Sciences Trade</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Pasadena has <strong>growing biotech operations</strong>. We assist with FDA biological product compliance, research equipment imports, export controls for biological materials, and clinical trial procedures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA biological product import compliance</li>
                <li>Research equipment and laboratory supplies</li>
                <li>Export controls for biological materials</li>
                <li>Clinical trial import/export procedures</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Technology & Software Trade</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Pasadena tech companies face <strong>export controls and tariff compliance</strong>. We advise on EAR regulations, ECCN classification, encryption exports, and technology transfer controls.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>EAR compliance and ECCN classification</li>
                <li>Encryption and software export controls</li>
                <li>Technology transfer and deemed exports</li>
                <li>Tariff classification for tech products</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper HTS classification can save <strong>15-25% on import costs</strong>. Our Pasadena tariff lawyer ensures optimal classification for aerospace, biotech, and advanced manufacturing products.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for aerospace and defense equipment</li>
                <li>Medical device and diagnostic classification</li>
                <li>Binding Ruling requests for key products</li>
                <li>Tariff engineering for cost reduction</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP audits LA County importers. Our Pasadena office defends you through <strong>Focused Assessments and penalty proceedings</strong>, often reducing penalties by 75% or more.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense</li>
                <li>Prior Disclosure filings to cap penalties</li>
                <li>CF-28/CF-29 response preparation</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Manufacturing Trade Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Pasadena manufacturers need <strong>country of origin, drawback, and Section 301 strategies</strong>. We provide comprehensive manufacturing customs compliance services.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Country of origin and substantial transformation</li>
                <li>Manufacturing drawback for exports</li>
                <li>Section 301 tariff mitigation strategies</li>
                <li>Foreign trade zone compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Pasadena */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Pasadena
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* San Gabriel Valley */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Gabriel Valley</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Serving San Gabriel Valley business community:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Pasadena', 'Altadena', 'Sierra Madre', 'San Marino',
                  'South Pasadena', 'Alhambra', 'San Gabriel', 'Temple City',
                  'Arcadia', 'Monrovia', 'Duarte', 'Bradbury',
                  'La Cañada Flintridge', 'Glendale', 'Burbank', 'Eagle Rock'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Greater Los Angeles */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Greater Los Angeles</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Extended service throughout LA County:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Los Angeles', 'Downtown LA', 'Hollywood', 'Los Feliz',
                  'El Sereno', 'Monterey Park', 'Rosemead', 'El Monte',
                  'Baldwin Park', 'West Covina', 'Covina', 'Glendora',
                  'Azusa', 'Irwindale', 'City of Industry', 'Hacienda Heights'
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
                  <li>LAX Air Cargo</li>
                  <li>Port of Oakland</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Courts</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>U.S. Court of International Trade</li>
                  <li>U.S. Court of Appeals (Federal Circuit)</li>
                  <li>CBP Administrative Proceedings</li>
                  <li>DOD/NASA Reviews</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Regional Markets</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Los Angeles County</li>
                  <li>San Gabriel Valley</li>
                  <li>Orange County</li>
                  <li>Inland Empire</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pasadena Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Pasadena Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industry Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>aerospace, biotech, and advanced technology trade</strong>. Deep expertise in ITAR, FDA regulations, and complex technical products.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Pasadena Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>Pasadena's innovation economy</strong> including JPL, Caltech spin-offs, and advanced manufacturing. Services tailored to high-tech businesses.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">LA County Access</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Convenient San Gabriel Valley location</strong> with easy freeway access throughout LA County. No downtown traffic hassles.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services and transparent hourly rates. Your free consultation includes a clear cost estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Pasadena & San Gabriel Valley
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Pasadena from our California offices</strong><br />
                Headquarters: 27001 Agoura Road, Suite 350<br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Consultations:</strong> Virtual and in-person available
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Transportation Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From Pasadena:</strong> 45 minutes via CA-134 to 101 West</li>
                <li><strong>To Port of LA/Long Beach:</strong> 1 hour via CA-110 to I-710</li>
                <li><strong>From Glendale:</strong> 40 minutes via CA-134 to 101</li>
                <li><strong>From Arcadia:</strong> 50 minutes via I-210 to 101 South</li>
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
                  <a href="#itar-aerospace-compliance" className="service-link">
                    <span className="service-link__title">ITAR Aerospace Compliance</span>
                    <p className="service-link__description">Defense trade controls</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#biotech-fda-compliance" className="service-link">
                    <span className="service-link__title">Biotech FDA Compliance</span>
                    <p className="service-link__description">Life sciences trade</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">Tariff Classification</span>
                    <p className="service-link__description">HTS optimization</p>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/glendale-tariff-attorney" className="service-link">
                    <span className="service-link__title">Glendale Tariff Attorney</span>
                    <p className="service-link__description">LA County services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/los-angeles-port-customs-attorney" className="service-link">
                    <span className="service-link__title">LA Port Attorney</span>
                    <p className="service-link__description">Port of LA/Long Beach</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Helpful Guides */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Guides</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/itar-compliance-guide" className="service-link">
                    <span className="service-link__title">ITAR Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/export-controls-guide" className="service-link">
                    <span className="service-link__title">Export Controls Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">Tariff Classification Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/trade-law-faq" className="service-link">
                    <span className="service-link__title">FAQ Center</span>
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
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Pasadena tariff lawyer today. We'll assess your business customs needs and provide clear guidance.
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

export default PasadenaTariffLawyerPage;
