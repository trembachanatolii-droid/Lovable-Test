
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LosAngelesLongBeachPortCustomsAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Los Angeles & Long Beach Port Customs Attorney | Tariff Lawyer LA',
    description: 'Los Angeles & Long Beach port customs attorney & tariff lawyer. Port of LA & Long Beach trade law firm. CBP defense, tariff classification, customs audits. (310) 744-1328.',
    keywords: 'customs attorney los angeles, tariff lawyer long beach, port of los angeles customs, port of long beach attorney, trade attorney la, international trade lawyer southern california, customs lawyer los angeles ca, tariff attorney la port, cbp defense attorney los angeles',
    canonical: 'los-angeles-long-beach-port-customs-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-los-angeles.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Los Angeles & Long Beach Port Customs Attorney - Southern California Trade Law Firm',
        description: 'Los Angeles and Long Beach port customs attorney and tariff lawyer providing expert legal representation for tariff classification, CBP defense, customs audits, and international trade compliance at the nation\'s busiest port complex.',
        url: `${siteConfig.siteUrl}/los-angeles-long-beach-port-customs-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Los Angeles & Long Beach Port Customs Attorney', url: `${siteConfig.siteUrl}/los-angeles-long-beach-port-customs-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Los Angeles port customs attorney for trade matters?',
          answer: 'A Los Angeles-based customs attorney offers direct access to the Ports of Los Angeles and Long Beach, the busiest container port complex in North America handling over 40% of all U.S. imports. Our LA location enables rapid response to CBP matters affecting Southern California businesses across all industries.',
        },
        {
          question: 'What tariff and customs services do you offer at the Port of Los Angeles?',
          answer: 'Our Los Angeles office provides comprehensive tariff and customs services including: tariff classification and HTS code optimization, CBP audit defense, customs penalty mitigation, Section 301 tariff strategies, UFLPA forced labor compliance, duty drawback claims, antidumping/countervailing duty defense, and trade compliance program development.',
        },
        {
          question: 'How close is your office to the Port of Long Beach?',
          answer: 'Our Southern California location provides excellent access to both the Port of Los Angeles and Port of Long Beach (the San Pedro Bay Port Complex). This proximity allows us to respond rapidly to CBP detentions, attend cargo examinations, and coordinate with customs officials for urgent trade matters.',
        },
        {
          question: 'What industries do you serve at the LA/Long Beach ports?',
          answer: 'We represent importers and exporters across industries including fashion/apparel, consumer electronics, furniture, automotive parts, toys and games, footwear, food products, and e-commerce. We understand the unique trade challenges facing Southern California businesses using the LA/Long Beach port complex.',
        },
        {
          question: 'Can you help with Section 301 China tariffs at the Port of LA?',
          answer: 'Yes. Our Los Angeles customs attorney team has extensive experience with Section 301 tariffs affecting goods entering through the LA/Long Beach ports. We help businesses with tariff exclusion strategies, supply chain restructuring, tariff engineering, and duty recovery through protests and refund claims.',
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
      <section className="hero" aria-label="Los Angeles Long Beach Port Customs Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Los Angeles & Long Beach Port<br />Customs Attorney California</h1>
          <p className="hero-subtitle">
            Los Angeles & Long Beach port customs attorney and tariff lawyer serving Southern California businesses. Expert CBP defense, tariff classification, and trade compliance at the nation's busiest port complex.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Los Angeles Port Customs Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Your Local Tariff & Customs Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Los Angeles and Southern California with expert tariff and customs legal services. Our location provides immediate access to the <strong>Ports of Los Angeles and Long Beach</strong>—the busiest container port complex in North America, handling over 40% of all U.S. imports.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Nation's Busiest Port</h3>
              <p className="text-text-secondary leading-relaxed">
                The <strong>LA/Long Beach port complex</strong> handles 9+ million TEUs annually. When CBP issues arise at this volume, you need a customs attorney who knows the local CBP offices and procedures.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Port Response</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct access to <strong>Port of LA and Long Beach</strong> for rapid response to CBP cargo detentions, examinations, and customs issues affecting Southern California importers.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">All Industries Served</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep expertise across <strong>fashion, electronics, automotive, furniture</strong>, and consumer goods—the top import categories flowing through Southern California ports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Tariff & Customs Services in Los Angeles
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Code Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Los Angeles tariff lawyer, we ensure your products are correctly classified under the Harmonized Tariff Schedule (HTS). Proper classification can mean the difference between <strong>0% and 25%+ duty rates</strong>. Critical for LA/Long Beach apparel, electronics, and consumer goods importers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification analysis and optimization</li>
                <li>Binding Ruling requests (NY/HQ rulings)</li>
                <li>Tariff engineering for duty minimization</li>
                <li>Classification dispute defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP audits LA/Long Beach port importers regularly due to the massive volume. Our Los Angeles customs attorney team defends you through Focused Assessments, Quick Response Audits, and penalty proceedings. We've helped Southern California clients <strong>reduce penalties by 75% or more</strong>.
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
                China tariffs (Section 301) add <strong>7.5% to 25%</strong> to import costs—a major issue for LA/Long Beach importers. Our Los Angeles trade law firm helps businesses navigate exclusions, supply chain restructuring, and tariff engineering to minimize duty burden.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 exclusion analysis</li>
                <li>Substantial transformation opinions</li>
                <li>Third-country sourcing compliance</li>
                <li>Tariff refund/protest strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Forced Labor Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Uyghur Forced Labor Prevention Act (UFLPA) creates a rebuttable presumption that goods from Xinjiang involve forced labor. Our Los Angeles customs attorney team helps importers establish <strong>supply chain due diligence</strong> and respond to UFLPA detentions at LA/Long Beach ports.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>UFLPA supply chain mapping</li>
                <li>Due diligence program development</li>
                <li>Detention response and admissibility packages</li>
                <li>Alternative sourcing strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Antidumping & Countervailing Duty Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                AD/CVD duties can add <strong>100%+ to landed costs</strong>. Our Los Angeles port customs attorney team represents importers in scope inquiries, administrative reviews, and duty deposit rate challenges affecting LA/Long Beach shipments.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Scope determination requests</li>
                <li>Administrative review participation</li>
                <li>Changed circumstances reviews</li>
                <li>Evasion investigation defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Seizure & Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP seizes or detains your cargo at LA/Long Beach ports, every day costs money. Our Los Angeles location allows for <strong>rapid response</strong> to port emergencies. We file admissibility packages and petitions to release your goods.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Seizure notice response (19 USC § 1618)</li>
                <li>Petition for release of detained goods</li>
                <li>IPR/trademark seizure defense</li>
                <li>FDA/CPSC hold resolution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Los Angeles */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our Los Angeles Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Los Angeles County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Los Angeles County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve all Los Angeles County communities:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Los Angeles', 'Long Beach', 'Glendale', 'Santa Clarita',
                  'Pasadena', 'Torrance', 'El Monte', 'Downey',
                  'West Covina', 'Norwalk', 'Burbank', 'Carson',
                  'Compton', 'Inglewood', 'Pomona', 'Commerce'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Orange County & Inland Empire */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Orange County & Inland Empire</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Easy access for OC and IE businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Anaheim', 'Santa Ana', 'Irvine', 'Huntington Beach',
                  'Fullerton', 'Costa Mesa', 'Ontario', 'Riverside',
                  'San Bernardino', 'Fontana', 'Rancho Cucamonga', 'Corona',
                  'Moreno Valley', 'Victorville', 'Pomona', 'Industry'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Statewide & Nationwide */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Statewide & Nationwide Representation</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">California Ports</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
                  <li>Port of Oakland</li>
                  <li>Port of San Diego</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Courts</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>U.S. Court of International Trade</li>
                  <li>U.S. Court of Appeals (Federal Circuit)</li>
                  <li>CBP Administrative Proceedings</li>
                  <li>Commerce Department Reviews</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Major California Markets</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Greater Los Angeles Area</li>
                  <li>Orange County</li>
                  <li>Inland Empire</li>
                  <li>San Diego Region</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Los Angeles Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Los Angeles Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Complex Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Los Angeles port customs attorney, we understand the unique challenges at the LA/Long Beach port complex—from high-volume examinations to congestion-related delays. Port-specific expertise drives better outcomes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Exclusive Trade Law Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general practice firms, we focus <strong>exclusively</strong> on international trade and customs law. This specialization means deeper expertise, current knowledge of regulatory changes, and established relationships with CBP and trade agencies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services (protests, ruling requests, prior disclosures) and transparent hourly rates for complex matters. No surprise bills. Your free initial consultation includes a clear fee estimate.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">24-Hour Emergency Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Port emergencies don't wait for business hours. We provide <strong>24-hour emergency response</strong> for cargo seizures, detentions, and urgent CBP matters at the LA/Long Beach port complex.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense & Litigation</span>
                    <p className="service-link__description">CBP audits, seizures, penalty defense</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Antidumping & CVD Defense</span>
                    <p className="service-link__description">AD/CVD duty defense</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Trade Compliance Programs</span>
                    <p className="service-link__description">Import compliance development</p>
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
                  <Link to="/san-francisco-customs-attorney" className="service-link">
                    <span className="service-link__title">San Francisco</span>
                    <p className="service-link__description">Bay Area & Port of Oakland</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/san-diego-customs-lawyer" className="service-link">
                    <span className="service-link__title">San Diego</span>
                    <p className="service-link__description">Port of San Diego, Mexico trade</p>
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
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Guides</h3>
              <div className="space-y-0">
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
                  <Link to="/resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Tariffs Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/uflpa-compliance-guide" className="service-link">
                    <span className="service-link__title">UFLPA Compliance Guide</span>
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
            Contact our Los Angeles port customs attorney and tariff lawyer team today. We'll assess your situation, explain your options, and provide a clear path forward for your LA/Long Beach port trade matters.
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

export default LosAngelesLongBeachPortCustomsAttorneyPage;
