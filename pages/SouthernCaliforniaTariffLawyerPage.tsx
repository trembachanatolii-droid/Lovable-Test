
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SouthernCaliforniaTariffLawyerPage: React.FC = () => {
  useMeta({
    title: 'Southern California Tariff Lawyer | Customs Attorney SoCal',
    description: 'Southern California tariff lawyer serving LA, OC, SD counties. Expert customs attorney for Port of LA/Long Beach. CBP defense, tariff classification, trade compliance. (310) 744-1328.',
    keywords: 'southern california tariff lawyer, socal customs attorney, los angeles tariff lawyer, orange county customs attorney, san diego trade lawyer, port of la attorney, port of long beach lawyer, southern california trade compliance',
    canonical: 'southern-california-tariff-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-socal.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Southern California Tariff Lawyer & Customs Attorney - Regional Trade Law Firm',
        description: 'Southern California tariff lawyer and customs attorney serving LA, Orange County, San Diego. Expert legal representation for tariff classification, CBP defense, and international trade compliance across SoCal.',
        url: `${siteConfig.siteUrl}/southern-california-tariff-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Southern California Tariff Lawyer', url: `${siteConfig.siteUrl}/southern-california-tariff-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'What areas does a Southern California tariff lawyer serve?',
          answer: 'Our Southern California tariff lawyers serve the entire SoCal region including Los Angeles County, Orange County, San Diego County, Riverside County, San Bernardino County, and Ventura County. We provide legal services for all major ports including Port of Los Angeles, Port of Long Beach, and Port of San Diego.',
        },
        {
          question: 'Why choose a Southern California-based customs attorney?',
          answer: 'A Southern California customs attorney provides direct access to the nation\'s busiest ports (LA/Long Beach handle 40% of U.S. imports). We offer immediate response to CBP detentions, in-person meetings at port facilities, and deep knowledge of local CBP operations. Our regional presence means faster resolution of cargo holds and customs issues.',
        },
        {
          question: 'What tariff and customs services do you offer in Southern California?',
          answer: 'We provide comprehensive tariff and customs services across Southern California including: tariff classification and HTS optimization, CBP audit defense, Section 301 tariff strategies, UFLPA forced labor compliance, antidumping/countervailing duty defense, customs seizure response, penalty mitigation, duty drawback claims, and trade compliance program development.',
        },
        {
          question: 'How quickly can you respond to CBP issues at Southern California ports?',
          answer: 'We prioritize urgent matters at Port of LA, Port of Long Beach, and Port of San Diego. Our Calabasas office provides rapid access to all major SoCal ports. We typically respond to CBP detentions, seizures, or audit notices within 24 hours. For port emergencies, call our direct line at (310) 744-1328.',
        },
        {
          question: 'What industries do you serve in Southern California?',
          answer: 'We represent Southern California importers and exporters across all industries including: entertainment/media, technology/electronics, apparel/fashion, aerospace/defense, automotive, food/agriculture, consumer goods, medical devices, furniture/home goods, and e-commerce. Our regional expertise covers the diverse SoCal business landscape.',
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
      <section className="hero" aria-label="Southern California Tariff Lawyer Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Southern California Tariff Lawyer<br />Regional Customs Attorney</h1>
          <p className="hero-subtitle">
            Expert Southern California tariff lawyer and customs attorney serving LA, Orange County, and San Diego. Comprehensive CBP defense, tariff classification, and trade compliance across all SoCal ports.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Southern California Tariff Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Southern California's Regional Trade Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving the entire Southern California region from our Calabasas headquarters at <strong>27001 Agoura Road</strong>. We provide expert tariff and customs legal services to businesses across LA County, Orange County, San Diego County, Inland Empire, and Ventura County. Strategic access to all major SoCal ports.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regional Coverage</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Complete Southern California coverage</strong> from San Luis Obispo to the Mexican border. We serve all five major counties and maintain relationships with CBP offices throughout the region.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct access to <strong>Port of LA, Port of Long Beach, and Port of San Diego</strong> (handling 40%+ of U.S. containerized imports). Rapid response to cargo detentions and CBP holds.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Local Knowledge</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep understanding of <strong>Southern California's diverse industries</strong> including entertainment, aerospace, fashion, technology, agriculture, and manufacturing. Industry-specific trade compliance expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Tariff & Customs Services Across Southern California
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Code Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Southern California tariff lawyer, we ensure accurate classification under the Harmonized Tariff Schedule (HTS). Proper classification can save <strong>15-25% in duty costs</strong> for SoCal importers. We file binding ruling requests and defend against CBP reclassifications at all regional ports.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification analysis and optimization for all product categories</li>
                <li>Binding Ruling requests (NY/HQ rulings) filed with CBP National Import Specialist offices</li>
                <li>Tariff engineering for duty minimization and supply chain restructuring</li>
                <li>Classification dispute defense at Port of LA, Long Beach, and San Diego</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively targets Southern California importers due to high import volumes. Our customs attorney team defends you through Focused Assessments, Quick Response Audits, and penalty proceedings. We've helped SoCal clients <strong>reduce penalties by 80% or more</strong> through strategic prior disclosures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense for major SoCal importers</li>
                <li>Prior Disclosure filings to cap penalties at interest-only (19 USC § 1592)</li>
                <li>CF-28/CF-29 Notice of Action response preparation and negotiation</li>
                <li>Penalty mitigation for gross negligence, fraud, and material omissions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 China Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariffs add <strong>7.5% to 25%</strong> on Chinese imports entering SoCal ports. Our tariff lawyers help you navigate exclusions, supply chain restructuring, and tariff engineering to legally minimize your duty burden across all product categories.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 exclusion analysis and application support</li>
                <li>Substantial transformation opinions for third-country processing</li>
                <li>Country of origin compliance and marking requirements</li>
                <li>Tariff refund strategies and customs protests (19 USC § 1514)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Forced Labor Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Uyghur Forced Labor Prevention Act (UFLPA) has resulted in <strong>$2+ billion in detained goods</strong> at U.S. ports, with Southern California ports seeing high detention rates. Our customs attorneys help you implement supply chain due diligence and defend against UFLPA detentions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Comprehensive supply chain mapping and forced labor risk audits</li>
                <li>UFLPA detention defense packages with "clear and convincing" evidence</li>
                <li>Xinjiang supplier identification and alternative sourcing strategies</li>
                <li>Forced labor compliance programs and import certifications</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Antidumping & Countervailing Duties (AD/CVD)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                AD/CVD rates can exceed <strong>200%</strong> for products from China and other countries. Our Southern California tariff lawyers file Scope Rulings to exempt your products and defend against EAPA evasion investigations at regional CBP offices.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Scope Ruling requests to Department of Commerce</li>
                <li>EAPA (Enforce and Protect Act) investigation defense</li>
                <li>Administrative Review representation and duty deposit negotiations</li>
                <li>Substantial transformation analysis for AD/CVD avoidance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Seizure & Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP seizes or detains your cargo at Port of LA, Long Beach, or San Diego, every day costs money in demurrage and storage fees. Our Southern California location allows for <strong>same-day response</strong> to port emergencies. We file admissibility packages and petitions to expedite cargo release.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Seizure notice response and petition for remission (19 USC § 1618)</li>
                <li>Detention response packages with technical data and lab testing</li>
                <li>IPR/trademark/copyright seizure defense and Consent Decree negotiations</li>
                <li>FDA/USDA/EPA hold resolution and regulatory compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Across Southern California */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Comprehensive Southern California Coverage
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Los Angeles County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Los Angeles County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Complete coverage of LA County's diverse business community:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Los Angeles', 'Long Beach', 'Glendale', 'Santa Clarita',
                  'Pasadena', 'Torrance', 'Inglewood', 'Downey',
                  'El Monte', 'Burbank', 'West Covina', 'Norwalk',
                  'Pomona', 'Carson', 'Alhambra', 'Compton'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Orange County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Orange County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Serving Orange County's thriving import/export businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Anaheim', 'Santa Ana', 'Irvine', 'Huntington Beach',
                  'Orange', 'Fullerton', 'Costa Mesa', 'Mission Viejo',
                  'Westminster', 'Newport Beach', 'Buena Park', 'Lake Forest',
                  'Tustin', 'Yorba Linda', 'San Clemente', 'Laguna Niguel'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* San Diego County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Diego County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                San Diego region trade and customs services:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'San Diego', 'Chula Vista', 'Oceanside', 'Escondido',
                  'Carlsbad', 'El Cajon', 'Vista', 'San Marcos',
                  'Encinitas', 'National City', 'La Mesa', 'Santee',
                  'Poway', 'Coronado', 'Imperial Beach', 'Del Mar'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Inland Empire */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Inland Empire</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Riverside and San Bernardino Counties coverage:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Riverside', 'San Bernardino', 'Ontario', 'Rancho Cucamonga',
                  'Fontana', 'Moreno Valley', 'Corona', 'Temecula',
                  'Murrieta', 'Hemet', 'Chino', 'Redlands',
                  'Eastvale', 'Menifee', 'Perris', 'Victorville'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Ventura County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Ventura County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Ventura County business and agricultural trade:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Oxnard', 'Thousand Oaks', 'Simi Valley', 'Ventura',
                  'Camarillo', 'Moorpark', 'Santa Paula', 'Port Hueneme',
                  'Fillmore', 'Ojai', 'Oak Park', 'Westlake Village'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* San Fernando Valley */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Fernando Valley</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Valley businesses and entertainment industry:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Calabasas', 'Woodland Hills', 'Van Nuys', 'North Hollywood',
                  'Sherman Oaks', 'Encino', 'Tarzana', 'Northridge',
                  'Canoga Park', 'Chatsworth', 'Reseda', 'Granada Hills',
                  'Panorama City', 'Studio City', 'Valley Village', 'Toluca Lake'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Ports & Federal Representation */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Southern California Ports & Federal Representation</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Major SoCal Ports</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
                  <li>Port of San Diego</li>
                  <li>Port Hueneme (Ventura County)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Courts & Agencies</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>U.S. Court of International Trade</li>
                  <li>U.S. Court of Appeals (Federal Circuit)</li>
                  <li>CBP Administrative Proceedings</li>
                  <li>Department of Commerce Reviews</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Regional Industries</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Entertainment & Media</li>
                  <li>Aerospace & Defense</li>
                  <li>Apparel & Fashion</li>
                  <li>Technology & Electronics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Southern California Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Southern California Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regional Expertise, National Practice</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Southern California tariff lawyer, we combine deep regional knowledge with nationwide practice capabilities. We appear before CBP at all SoCal ports, the Court of International Trade in New York, and federal agencies in Washington, D.C. Our team understands the unique trade challenges facing Southern California businesses.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Trade Law Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general practice firms, we focus <strong>exclusively</strong> on international trade and customs law. This specialization means deeper expertise in HTS classification, CBP regulations, Section 301 tariffs, and trade compliance. We stay current on all regulatory changes affecting Southern California importers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Fee Structure</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services (protests, ruling requests, prior disclosures, detention response) and competitive hourly rates for complex matters. No surprise bills or hidden fees. Your free initial consultation includes a detailed fee estimate tailored to your specific situation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Emergency Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Tariff and customs emergencies require <strong>immediate action</strong>. We prioritize CBP detentions, seizures, and audit notices. Same-day response for urgent port matters. Direct attorney access via phone and email. We understand that delayed cargo costs thousands per day in demurrage fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Southern California from Our Calabasas Office
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
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
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Access from Major SoCal Areas</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From LA/Long Beach Ports:</strong> 101 North to Las Virgenes exit (45-60 min)</li>
                <li><strong>From Orange County:</strong> 405 North to 101 West, Las Virgenes exit (60-75 min)</li>
                <li><strong>From San Diego:</strong> I-5 North to 405 North to 101 West (2-2.5 hours)</li>
                <li><strong>From Inland Empire:</strong> I-10 West to 101 North (60-90 min)</li>
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

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense & Litigation</span>
                    <p className="service-link__description">CBP audits, seizures, penalty defense</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#regulatory-compliance-advisory" className="service-link">
                    <span className="service-link__title">Trade Compliance Programs</span>
                    <p className="service-link__description">Import compliance development</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#export-controls-sanctions" className="service-link">
                    <span className="service-link__title">Export Controls & Sanctions</span>
                    <p className="service-link__description">ITAR, EAR, OFAC compliance</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Port-Specific Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#port-of-oakland-tariff" className="service-link">
                    <span className="service-link__title">Port of Oakland</span>
                    <p className="service-link__description">Northern California port services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#port-of-san-diego-customs" className="service-link">
                    <span className="service-link__title">Port of San Diego</span>
                    <p className="service-link__description">San Diego port expertise</p>
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
                  <a href="#resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Tariffs Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
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
            Contact our Southern California tariff lawyer and customs attorney team today. We'll assess your situation, explain your options, and provide a clear path forward for your trade compliance needs.
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

export default SouthernCaliforniaTariffLawyerPage;
