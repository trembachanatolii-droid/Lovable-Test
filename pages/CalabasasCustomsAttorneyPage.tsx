
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const CalabasasCustomsAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Tariff Lawyer Calabasas CA | #1 Customs Attorney | Trembach Law',
    description: 'Tariff lawyer Calabasas CA - Expert customs attorney serving Calabasas, San Fernando Valley & all California. CBP defense, Section 301, UFLPA, tariff classification. Free consultation (310) 744-1328.',
    keywords: 'tariff lawyer calabasas, tariff lawyer calabasas ca, calabasas tariff lawyer, calabasas tariff attorney, customs attorney calabasas, customs attorney calabasas ca, calabasas customs attorney, calabasas customs lawyer, trade attorney calabasas, international trade lawyer calabasas, calabasas import export lawyer, tariff lawyer near calabasas, best tariff lawyer calabasas, top customs attorney calabasas, calabasas CBP attorney, calabasas section 301 attorney, calabasas UFLPA lawyer, calabasas customs audit attorney, san fernando valley tariff lawyer, west la customs attorney, ventura county tariff lawyer, 91301 tariff attorney, agoura road customs lawyer, calabasas international trade attorney, tariff classification attorney calabasas, customs penalty lawyer calabasas, import duty attorney calabasas',
    canonical: 'calabasas-customs-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-calabasas.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Calabasas Tariff Lawyer & Customs Attorney - Local California Trade Law Firm',
        description: 'Local Calabasas tariff lawyer and customs attorney providing expert legal representation for tariff classification, CBP defense, customs audits, and international trade compliance.',
        url: `${siteConfig.siteUrl}/calabasas-customs-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Calabasas Customs Attorney', url: `${siteConfig.siteUrl}/calabasas-customs-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Calabasas tariff lawyer over a downtown LA attorney?',
          answer: 'A Calabasas-based tariff lawyer offers personalized attention, convenient parking, and easy accessibility without downtown LA traffic. Our office at 27001 Agoura Road is centrally located for San Fernando Valley businesses, with quick access to Port of LA/Long Beach via the 101 and 405 freeways. We provide the same expertise as large downtown firms with more responsive, boutique service.',
        },
        {
          question: 'What tariff and customs services do you offer in Calabasas?',
          answer: 'Our Calabasas office provides comprehensive tariff and customs services including: tariff classification and HTS code optimization, CBP audit defense, customs penalty mitigation, Section 301 tariff strategies, UFLPA forced labor compliance, duty drawback claims, antidumping/countervailing duty defense, customs broker representation, and trade compliance program development.',
        },
        {
          question: 'Do you serve businesses outside of Calabasas?',
          answer: 'Yes, while our headquarters is in Calabasas, we serve clients throughout Southern California including Los Angeles, Long Beach, San Fernando Valley, Ventura County, Thousand Oaks, Woodland Hills, Malibu, and all California cities. We also represent clients nationwide before CBP, the Court of International Trade, and federal agencies.',
        },
        {
          question: 'How quickly can a Calabasas customs attorney respond to CBP detentions?',
          answer: 'Our Calabasas location provides excellent access to Port of LA and Port of Long Beach (approximately 45-60 minutes via 101 to 710). We prioritize urgent matters and can typically respond to CBP detentions, seizures, or audit notices within 24 hours. For emergencies, call our direct line at (310) 744-1328.',
        },
        {
          question: 'What industries do you serve from your Calabasas office?',
          answer: 'From our Calabasas headquarters, we represent importers and exporters across all industries including technology/electronics, entertainment/media, apparel/textiles, food/agriculture, automotive parts, consumer goods, and e-commerce. Our San Fernando Valley location is ideal for serving the diverse business community in Los Angeles County and Ventura County.',
        },
        {
          question: 'How much does a tariff lawyer in Calabasas cost?',
          answer: 'Trembach Law offers transparent pricing for tariff and customs legal services. We provide free initial consultations to assess your case, flat-fee pricing for many services (protests, ruling requests, prior disclosures), and competitive hourly rates for complex matters. Contact us at (310) 744-1328 for a personalized fee estimate with no obligation.',
        },
        {
          question: 'Is there a customs attorney near me in the San Fernando Valley?',
          answer: 'Yes! Trembach Law Firm is located at 27001 Agoura Road, Suite 350, Calabasas, CA 91301 - conveniently serving the entire San Fernando Valley. We are minutes from Woodland Hills, Tarzana, Encino, Sherman Oaks, and all Valley communities. Free parking available. Call (310) 744-1328 for your free consultation.',
        },
        {
          question: 'What makes Trembach Law different from other California customs attorneys?',
          answer: 'Trembach Law combines specialized expertise with boutique service. Unlike large downtown firms, you work directly with your attorney. We focus exclusively on international trade and customs law, have current knowledge of 2025 tariff regulations including Section 301 developments, and maintain a 5-star client satisfaction rating. Our Calabasas location offers convenience without sacrificing quality.',
        },
        {
          question: 'Can you help with emergency customs seizures at Port of Los Angeles?',
          answer: 'Absolutely. Our Calabasas office provides rapid response to CBP cargo seizures and detentions at Port of LA and Port of Long Beach. We can typically respond within 24 hours and have experience handling urgent matters including merchandise holds, IPR seizures, UFLPA detentions, and FDA/USDA holds. Call (310) 744-1328 for immediate assistance.',
        },
        {
          question: 'Do you offer free consultations for tariff classification issues?',
          answer: 'Yes, Trembach Law offers free initial consultations for all tariff and customs matters, including tariff classification questions. During your consultation, we will review your situation, explain your options, and provide a clear path forward with transparent pricing. Schedule your free consultation at (310) 744-1328 or through our website.',
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
      <section className="hero" aria-label="Calabasas Customs Attorney Hero">
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
          <h1>Tariff Lawyer Calabasas CA<br />Expert Customs Attorney</h1>
          <p className="hero-subtitle">
            Top-rated tariff lawyer in Calabasas, California serving businesses throughout the San Fernando Valley and all of California. As your trusted Calabasas customs attorney, we provide expert CBP defense, tariff classification, Section 301 strategies, and UFLPA compliance. Call your local tariff lawyer Calabasas today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact#schedule-consultation" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Calabasas Tariff Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Why Choose Our Tariff Lawyer Calabasas Office
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Looking for a <strong>tariff lawyer in Calabasas</strong>? Our customs attorney office at <strong>27001 Agoura Road, Suite 350, Calabasas CA 91301</strong> provides expert tariff and customs legal services to California businesses. As the leading tariff lawyer Calabasas professionals trust, we offer convenient access without downtown LA traffic, plus the same high-caliber representation as large firms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Local Accessibility</h3>
              <p className="text-text-secondary leading-relaxed">
                Our Calabasas office offers <strong>free parking, easy freeway access</strong>, and a welcoming environment near The Commons at Calabasas. No downtown congestion or expensive parking meters.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic location with direct access to <strong>Port of LA and Port of Long Beach</strong> via 101/405/710. We can respond quickly to CBP detentions and cargo holds.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Boutique Attention</h3>
              <p className="text-text-secondary leading-relaxed">
                Unlike large downtown firms, you work <strong>directly with your attorney</strong>. Personalized service, rapid response times, and dedicated focus on your case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Tariff & Customs Services in Calabasas
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Code Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Calabasas tariff lawyer, we ensure your products are correctly classified under the Harmonized Tariff Schedule (HTS). Proper classification can mean the difference between <strong>0% and 25%+ duty rates</strong>. We file binding ruling requests and defend against CBP reclassifications.
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
                CBP actively audits California importers. Our Calabasas customs attorney team defends you through Focused Assessments, Quick Response Audits, and penalty proceedings. We've helped clients <strong>reduce penalties by 75% or more</strong> through strategic prior disclosures and mitigation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense</li>
                <li>Prior Disclosure filings to cap penalties</li>
                <li>CF-28/CF-29 response preparation</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                China tariffs (Section 301) add <strong>7.5% to 25%</strong> to import costs. Our Calabasas trade law firm helps you navigate exclusions, supply chain restructuring, and tariff engineering to legally minimize your duty burden.
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
                The Uyghur Forced Labor Prevention Act (UFLPA) has resulted in <strong>$2+ billion in detained goods</strong>. Our Calabasas customs attorney team helps you implement supply chain due diligence and defend against UFLPA detentions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Supply chain mapping and audits</li>
                <li>UFLPA detention defense packages</li>
                <li>"Clear and convincing" evidence compilation</li>
                <li>Forced labor compliance programs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Antidumping & Countervailing Duties (AD/CVD)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                AD/CVD rates can exceed <strong>200%</strong> for certain products from China and other countries. Our Calabasas tariff lawyer files Scope Rulings to exempt your products and defends against EAPA evasion investigations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Scope Ruling requests to Commerce</li>
                <li>EAPA investigation defense</li>
                <li>Administrative Review representation</li>
                <li>Substantial transformation analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Seizure & Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP seizes or detains your cargo at Port of LA or Long Beach, every day costs money. Our Calabasas location allows for <strong>rapid response</strong> to port emergencies. We file admissibility packages and petitions to get your goods released.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Seizure notice response (19 USC § 1618)</li>
                <li>Petition for release of detained goods</li>
                <li>IPR/trademark seizure defense</li>
                <li>FDA/USDA hold resolution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Calabasas */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our Calabasas Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* San Fernando Valley */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Fernando Valley</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve the entire San Fernando Valley business community:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Calabasas', 'Woodland Hills', 'Tarzana', 'Encino',
                  'Sherman Oaks', 'Van Nuys', 'Northridge', 'Granada Hills',
                  'Chatsworth', 'Canoga Park', 'Reseda', 'Panorama City',
                  'North Hollywood', 'Burbank', 'Glendale', 'Pasadena'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Ventura County & West LA */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Ventura County & West LA</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Convenient access for Ventura County and Westside businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Thousand Oaks', 'Westlake Village', 'Agoura Hills', 'Oak Park',
                  'Simi Valley', 'Moorpark', 'Camarillo', 'Oxnard',
                  'Malibu', 'Pacific Palisades', 'Brentwood', 'Santa Monica',
                  'West Los Angeles', 'Culver City', 'Marina del Rey', 'Playa Vista'
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
                  <li>Los Angeles County</li>
                  <li>Orange County</li>
                  <li>San Francisco Bay Area</li>
                  <li>San Diego</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Calabasas Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Calabasas Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Local Expertise, National Reach</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Calabasas tariff lawyer, we combine local accessibility with nationwide practice capabilities. We appear before CBP offices at every U.S. port, the Court of International Trade in New York, and federal agencies in Washington, D.C.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Specialized Focus</h3>
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
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Tariff and customs issues often have <strong>strict deadlines</strong>. We prioritize urgent matters and maintain direct communication. Same-day response to CBP notices and emergency cargo holds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Visit Our Calabasas Office
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Parking:</strong> Free on-site parking available
              </p>
              <p className="text-text-secondary text-sm">
                <strong>Landmark:</strong> Near The Commons at Calabasas shopping center
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Directions</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From 101 Freeway:</strong> Exit Las Virgenes/Malibu Canyon, head south on Agoura Road</li>
                <li><strong>From 405 Freeway:</strong> Take 101 West to Las Virgenes exit</li>
                <li><strong>From Ventura:</strong> 101 East to Las Virgenes exit</li>
                <li><strong>From Downtown LA:</strong> 101 West, approximately 30-40 minutes</li>
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
                  <Link to="/customs-defense" className="service-link">
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
                    <span className="service-link__title">Trade Compliance Programs</span>
                    <p className="service-link__description">Import compliance development</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Export Controls & Sanctions</span>
                    <p className="service-link__description">ITAR, EAR, OFAC compliance</p>
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
                  <Link to="/los-angeles-port-customs-attorney" className="service-link">
                    <span className="service-link__title">Los Angeles & Long Beach Port</span>
                    <p className="service-link__description">Port customs expertise</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/bay-area-trade-law-attorney" className="service-link">
                    <span className="service-link__title">San Francisco & Bay Area</span>
                    <p className="service-link__description">Port of Oakland, Silicon Valley</p>
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

      {/* Related California Tariff Lawyer Locations - Internal Linking */}
      <RelatedCityPages currentCity="Calabasas" region="los-angeles" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Calabasas tariff lawyer and customs attorney team today. We'll assess your situation, explain your options, and provide a clear path forward.
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

export default CalabasasCustomsAttorneyPage;
