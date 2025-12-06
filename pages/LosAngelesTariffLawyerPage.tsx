
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LosAngelesTariffLawyerPage: React.FC = () => {
  useMeta({
    title: 'Tariff Lawyer Los Angeles | #1 Customs Attorney LA | Trump Tariffs 2025',
    description: 'Tariff lawyer Los Angeles - Top-rated customs attorney in LA. Expert Trump tariffs 2025, Section 301, Section 232 defense. CBP audits, UFLPA compliance, import/export. Port of LA & Long Beach. FREE consultation (310) 744-1328.',
    keywords: 'tariff lawyer los angeles, los angeles tariff lawyer, customs attorney los angeles, los angeles customs attorney, international trade lawyer los angeles, tariff attorney los angeles, customs lawyer los angeles, trade law firm los angeles, import lawyer los angeles, export attorney los angeles, cbp defense attorney los angeles, trump tariffs lawyer los angeles, section 301 attorney los angeles, section 232 lawyer la, tariff classification attorney los angeles, customs audit lawyer los angeles, port of los angeles attorney, port of long beach lawyer, uflpa attorney los angeles, antidumping lawyer los angeles, trade compliance attorney la, customs broker attorney los angeles, duty drawback lawyer los angeles, customs seizure attorney los angeles, hts code attorney los angeles, tariff mitigation lawyer la, best tariff lawyer los angeles, top customs attorney los angeles, emergency customs lawyer los angeles, 24 hour customs attorney la, tariff litigation los angeles, customs penalty attorney los angeles, prior disclosure lawyer los angeles, binding ruling attorney los angeles, import export attorney la, international trade attorney los angeles california, southern california tariff lawyer, la customs law firm, downtown la trade attorney, los angeles trade lawyer',
    canonical: 'los-angeles-tariff-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-los-angeles.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Los Angeles Tariff Lawyer & Customs Attorney - Downtown LA Trade Law Firm',
        description: 'Los Angeles tariff lawyer and customs attorney providing expert legal representation for tariff classification, CBP defense, customs audits, and international trade compliance.',
        url: `${siteConfig.siteUrl}/los-angeles-tariff-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Los Angeles Tariff Lawyer', url: `${siteConfig.siteUrl}/los-angeles-tariff-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Los Angeles tariff lawyer for customs matters?',
          answer: 'A Los Angeles-based tariff lawyer offers direct access to Port of Los Angeles and Port of Long Beach, the two busiest container ports in the Western Hemisphere. Our LA location enables rapid response to CBP detentions, seizures, and cargo holds. We provide sophisticated international trade expertise with immediate port access for urgent customs matters.',
        },
        {
          question: 'What tariff and customs services do you offer in Los Angeles?',
          answer: 'Our Los Angeles office provides comprehensive tariff and customs services including: tariff classification and HTS code optimization, CBP audit defense, customs penalty mitigation, Section 301 tariff strategies, UFLPA forced labor compliance, duty drawback claims, antidumping/countervailing duty defense, customs broker representation, and trade compliance program development.',
        },
        {
          question: 'How close is your LA office to the Port of Los Angeles and Port of Long Beach?',
          answer: 'Our Los Angeles location provides excellent access to both Port of Los Angeles (approximately 20-30 minutes via I-110) and Port of Long Beach (approximately 25-35 minutes via I-710). This proximity allows us to respond rapidly to CBP detentions, attend cargo examinations, and meet with customs officials when necessary.',
        },
        {
          question: 'What industries do you serve from your Los Angeles office?',
          answer: 'From our Los Angeles headquarters, we represent importers and exporters across all industries including technology/electronics, entertainment/media production equipment, apparel/textiles, food/agriculture, automotive parts, consumer goods, furniture/home goods, and e-commerce businesses. LA\'s diverse economy means we have experience with virtually every import/export scenario.',
        },
        {
          question: 'Can you help with emergency CBP seizures at LA/Long Beach ports?',
          answer: 'Yes. When CBP seizes or detains your cargo at Port of LA or Long Beach, we prioritize emergency response. We can typically respond to urgent seizure notices, detention orders, or UFLPA holds within hours. Call our direct line at (310) 744-1328 for immediate assistance with port emergencies.',
        },
        {
          question: 'How can a Los Angeles customs attorney help with Trump tariffs 2025?',
          answer: 'Our Los Angeles customs attorneys help importers navigate the 2025 Trump administration tariffs including Section 301 China tariffs (up to 100%), Section 232 steel and aluminum duties (25-50%), and new reciprocal tariffs. We assist with tariff exclusion requests, product reclassification strategies, country of origin determinations, and supply chain restructuring to legally minimize your duty burden.',
        },
        {
          question: 'What is the cost of hiring a tariff lawyer in Los Angeles?',
          answer: 'Our Los Angeles tariff lawyer services include free initial consultations. We offer flat-fee pricing for common services like customs protests, binding ruling requests, and prior disclosures. Complex matters such as CBP audits, UFLPA detentions, and trade litigation are billed at transparent hourly rates. Contact us at (310) 744-1328 for a personalized fee estimate.',
        },
        {
          question: 'Do you handle Section 301 China tariff cases in Los Angeles?',
          answer: 'Yes, Section 301 tariff cases are a core practice area for our Los Angeles office. We help LA importers with tariff exclusion analysis, substantial transformation strategies for third-country manufacturing, HTS reclassification to avoid List 1-4 tariffs, and refund claims for overpaid duties. Many electronics, furniture, and consumer goods importers at Port of LA face these tariffs.',
        },
        {
          question: 'Can you represent companies outside Los Angeles in federal customs matters?',
          answer: 'Absolutely. While our office is in greater Los Angeles, we represent clients nationwide in federal customs matters including U.S. Court of International Trade litigation, CBP administrative proceedings, Commerce Department antidumping reviews, and USTR exclusion requests. Our LA location provides convenient access to the busiest U.S. ports.',
        },
        {
          question: 'How do I find the best tariff lawyer in Los Angeles?',
          answer: 'The best tariff lawyer in Los Angeles should have: exclusive focus on customs and international trade law (not general practice), experience with Port of LA/Long Beach matters, proven results in CBP audits and penalty cases, knowledge of current tariff issues (Section 301, Section 232, UFLPA), and transparent pricing. Trembach Law meets all these criteria with specialized expertise and port proximity.',
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
      <section className="hero" aria-label="Los Angeles Tariff Lawyer Hero">
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
          <h1>Tariff Lawyer Los Angeles<br />Customs Attorney LA</h1>
          <p className="hero-subtitle">
            <strong>Los Angeles tariff lawyer</strong> and <strong>customs attorney</strong> specializing in Trump tariffs 2025, Section 301, Section 232 steel & aluminum duties. Expert CBP defense, tariff classification, and UFLPA compliance. Immediate access to <strong>Port of Los Angeles</strong> and <strong>Port of Long Beach</strong>.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Trump Tariffs 2025 Alert Section - Competitor Matching */}
      <section className="py-12 px-6 bg-gradient-to-r from-red-700 to-red-800 text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-garamond mb-4 text-white">
              ⚠️ Trump Tariffs 2025: LA Importers Need Action Now
            </h2>
            <p className="text-xl mb-6 opacity-95 leading-relaxed max-w-4xl mx-auto">
              The 2025 Trump administration tariffs are impacting Los Angeles importers with <strong>Section 301 rates up to 100% on Chinese goods</strong>, <strong>Section 232 steel/aluminum duties at 25-50%</strong>, and new reciprocal tariffs. As your <strong>Los Angeles tariff lawyer</strong>, we help you navigate exclusions, classification strategies, and compliance to minimize your duty burden.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="bg-white text-red-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                Free Tariff Analysis
              </Link>
              <Link to="/resources/section-301-tariffs-guide" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-red-700 transition-colors">
                2025 Tariff Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose a Los Angeles Tariff Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Los Angeles Tariff Lawyer & Customs Attorney
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              As your <strong>Los Angeles tariff lawyer</strong>, we serve Southern California businesses with expert customs and international trade legal services. Our LA location provides immediate access to <strong>Port of Los Angeles and Port of Long Beach</strong>, the nation's busiest port complex handling over 40% of U.S. containerized imports.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Proximity</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct access to <strong>Port of LA and Port of Long Beach</strong> via I-110 and I-710. Rapid response to CBP cargo detentions, seizures, and examinations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Trade Law Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Exclusive focus</strong> on international trade and customs law. Deep expertise in tariff classification, CBP compliance, and trade remedy defense.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Results</h3>
              <p className="text-text-secondary leading-relaxed">
                Successfully defended hundreds of LA importers in <strong>CBP audits, UFLPA detentions</strong>, and penalty proceedings. Average penalty reduction of 75%+.
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
                As your Los Angeles tariff lawyer, we ensure your products are correctly classified under the Harmonized Tariff Schedule (HTS). Proper classification can mean the difference between <strong>0% and 25%+ duty rates</strong>. We file binding ruling requests and defend against CBP reclassifications.
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
                CBP actively audits Los Angeles importers given the high volume through LA/Long Beach ports. Our customs attorney team defends you through Focused Assessments, Quick Response Audits, and penalty proceedings. We've helped LA clients <strong>reduce penalties by 75% or more</strong> through strategic prior disclosures.
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
                China tariffs (Section 301) add <strong>7.5% to 25%</strong> to import costs. Our Los Angeles trade law firm helps you navigate exclusions, supply chain restructuring, and tariff engineering to legally minimize your duty burden on goods entering through LA/Long Beach ports.
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
                The Uyghur Forced Labor Prevention Act (UFLPA) has resulted in <strong>$2+ billion in detained goods</strong>, with LA/Long Beach ports seeing the highest detention rates. Our customs attorney team helps you implement supply chain due diligence and defend against UFLPA detentions.
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
                AD/CVD rates can exceed <strong>200%</strong> for certain products from China and other countries. Our Los Angeles tariff lawyer files Scope Rulings to exempt your products and defends against EAPA evasion investigations.
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
                When CBP seizes or detains your cargo at Port of LA or Long Beach, every hour costs money. Our Los Angeles location allows for <strong>immediate response</strong> to port emergencies. We file admissibility packages and petitions to get your goods released quickly.
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

      {/* Service Areas from Los Angeles */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our Los Angeles Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Greater Los Angeles */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Greater Los Angeles</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve all Los Angeles neighborhoods and surrounding communities:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Downtown LA', 'Hollywood', 'West LA', 'Santa Monica',
                  'Beverly Hills', 'Culver City', 'Pasadena', 'Glendale',
                  'Burbank', 'Long Beach', 'Torrance', 'El Segundo',
                  'Manhattan Beach', 'Redondo Beach', 'Inglewood', 'Compton'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Orange County & Inland Empire */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Orange County & Inland Empire</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Easy access for Orange County and Inland Empire businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Irvine', 'Anaheim', 'Santa Ana', 'Orange',
                  'Fullerton', 'Costa Mesa', 'Huntington Beach', 'Newport Beach',
                  'Riverside', 'San Bernardino', 'Ontario', 'Rancho Cucamonga',
                  'Corona', 'Fontana', 'Moreno Valley', 'Chino'
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
                  <li>Los Angeles Metro</li>
                  <li>Orange County</li>
                  <li>San Diego</li>
                  <li>Inland Empire</li>
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
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of LA/Long Beach Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Los Angeles tariff lawyer, we have extensive experience with Port of LA and Port of Long Beach operations, CBP procedures, and local customs officials. We understand the unique challenges LA importers face and provide immediate response to port emergencies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Specialized Trade Law Focus</h3>
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
                Cargo detentions and seizures don't wait for business hours. We provide <strong>emergency response</strong> for urgent CBP matters at LA/Long Beach ports. Call (310) 744-1328 for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served - LA Specific */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Industries We Serve in Los Angeles
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed text-center mb-12">
            As the leading <strong>Los Angeles tariff lawyer</strong>, we represent importers and exporters across all industries entering through the <strong>Port of Los Angeles</strong> and <strong>Port of Long Beach</strong>.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-neutral-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="font-bold text-primary-navy mb-2">Electronics & Technology</h3>
              <p className="text-sm text-text-secondary">Section 301 China tariffs, semiconductor imports, ITAR/EAR export controls</p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👗</div>
              <h3 className="font-bold text-primary-navy mb-2">Fashion & Apparel</h3>
              <p className="text-sm text-text-secondary">Textile tariffs, UFLPA forced labor compliance, country of origin</p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="font-bold text-primary-navy mb-2">Automotive Parts</h3>
              <p className="text-sm text-text-secondary">Section 232 steel/aluminum, USMCA origin, antidumping duties</p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🥗</div>
              <h3 className="font-bold text-primary-navy mb-2">Food & Agriculture</h3>
              <p className="text-sm text-text-secondary">FDA holds, USDA inspections, agricultural tariffs, import permits</p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="font-bold text-primary-navy mb-2">Manufacturing</h3>
              <p className="text-sm text-text-secondary">Industrial equipment, machinery tariffs, duty drawback programs</p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="font-bold text-primary-navy mb-2">Pharmaceuticals</h3>
              <p className="text-sm text-text-secondary">Drug import compliance, FDA registration, controlled substances</p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛋️</div>
              <h3 className="font-bold text-primary-navy mb-2">Furniture & Home Goods</h3>
              <p className="text-sm text-text-secondary">Antidumping duties, Section 301 tariffs, wood product compliance</p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="font-bold text-primary-navy mb-2">E-Commerce</h3>
              <p className="text-sm text-text-secondary">De minimis changes, Section 321 entries, FBA imports, 3PL compliance</p>
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
                  <Link to="/san-diego-customs-lawyer" className="service-link">
                    <span className="service-link__title">San Diego</span>
                    <p className="service-link__description">Port of San Diego customs</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/san-francisco-customs-attorney" className="service-link">
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Los Angeles tariff lawyer and customs attorney team today. We'll assess your situation, explain your options, and provide a clear path forward.
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

export default LosAngelesTariffLawyerPage;
