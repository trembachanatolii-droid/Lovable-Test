
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const InlandEmpireCustomsAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Inland Empire Customs Attorney | Tariff Lawyer Riverside, Ontario, San Bernardino',
    description: 'Inland Empire customs attorney serving Riverside, San Bernardino, Ontario. Logistics & warehouse trade compliance. CBP defense, tariff classification, CTPAT. (310) 744-1328.',
    keywords: 'inland empire customs attorney, riverside tariff lawyer, ontario trade attorney, san bernardino customs lawyer, inland empire trade compliance, warehouse customs compliance, logistics attorney inland empire',
    canonical: 'inland-empire-customs-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-inland-empire.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Inland Empire Customs Attorney & Tariff Lawyer - Logistics Trade Law Firm',
        description: 'Inland Empire customs attorney and tariff lawyer serving Riverside, San Bernardino, Ontario. Expert logistics trade compliance, warehouse operations, CBP defense, and international trade law for the IE.',
        url: `${siteConfig.siteUrl}/inland-empire-customs-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Inland Empire Customs Attorney', url: `${siteConfig.siteUrl}/inland-empire-customs-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What areas does an Inland Empire customs attorney serve?',
          answer: 'Our Inland Empire customs attorneys serve all of Riverside County and San Bernardino County including Riverside, San Bernardino, Ontario, Rancho Cucamonga, Fontana, Moreno Valley, Corona, Temecula, Murrieta, Hemet, Perris, Eastvale, Chino, Redlands, and all surrounding IE communities.',
        },
        {
          question: 'Why is the Inland Empire important for customs and trade compliance?',
          answer: 'The Inland Empire is California\'s logistics hub with over 1 billion square feet of warehouse space. Major distribution centers, e-commerce fulfillment operations, and foreign-trade zones (FTZ) are concentrated in the IE. We provide specialized customs compliance for warehouses, 3PLs, logistics operators, and importers using IE distribution facilities.',
        },
        {
          question: 'What customs services do you offer for Inland Empire warehouses and logistics companies?',
          answer: 'We provide specialized logistics and warehouse customs compliance including: foreign-trade zone (FTZ) operations and applications, bonded warehouse compliance, CTPAT certification and validation, importer of record (IOR) services, first-sale for export transactions, distribution center customs audits, and e-commerce import compliance.',
        },
        {
          question: 'How do you handle CBP examinations at Inland Empire warehouses?',
          answer: 'We assist with CBP warehouse examinations, audits, and inspections at IE facilities. This includes Focused Assessment defense for major importers, CTPAT validations, bonded warehouse compliance reviews, FTZ admissibility reviews, and response to CBP notices for warehouses operating in Riverside and San Bernardino counties.',
        },
        {
          question: 'Can you help with e-commerce and Amazon FBA customs compliance in the Inland Empire?',
          answer: 'Yes, we specialize in e-commerce customs compliance for businesses using Inland Empire fulfillment centers including Amazon FBA, Walmart fulfillment, and third-party logistics (3PL) warehouses. We handle Section 321 de minimis compliance, ISF filing requirements, product safety compliance (CPSC), and Amazon/marketplace seller customs issues.',
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
      <section className="hero" aria-label="Inland Empire Customs Attorney Hero">
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
          <h1>Inland Empire Customs Attorney<br />Logistics & Warehouse Trade Lawyer</h1>
          <p className="hero-subtitle">
            Expert Inland Empire customs attorney and tariff lawyer serving California's logistics hub. Specialized warehouse compliance, FTZ operations, CTPAT, and trade law for Riverside, San Bernardino, and Ontario businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Inland Empire Customs Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              California's Logistics & Warehouse Trade Law Experts
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving the Inland Empire's thriving logistics industry with <strong>over 1 billion square feet of warehouse space</strong>. We provide specialized customs and trade compliance for distribution centers, foreign-trade zones, bonded warehouses, 3PLs, and e-commerce fulfillment operations throughout Riverside and San Bernardino counties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Logistics Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Specialized knowledge</strong> of warehouse operations, foreign-trade zones (FTZ), bonded warehouses, CTPAT compliance, and distribution center customs requirements unique to the Inland Empire.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regional Coverage</h3>
              <p className="text-text-secondary leading-relaxed">
                Complete coverage of <strong>Riverside and San Bernardino counties</strong> including Ontario, Rancho Cucamonga, Fontana, Corona, and all major IE logistics corridors along I-10, I-15, and SR-60.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Connectivity</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic position between <strong>Port of LA/Long Beach and the Inland Empire</strong>. We handle customs issues from port arrival through IE warehouse operations and distribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Customs & Trade Services for Inland Empire Businesses
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign-Trade Zone (FTZ) Operations & Applications</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Inland Empire hosts multiple Foreign-Trade Zones offering <strong>duty deferral, duty elimination, and inverted tariff benefits</strong>. As your IE customs attorney, we handle FTZ applications, zone admissibility, weekly entry filings, and FTZ compliance audits for distribution centers and manufacturers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FTZ application and designation (subzone applications)</li>
                <li>Zone admissibility determinations and merchandise status tracking</li>
                <li>FTZ weekly entry and consumption entry filings</li>
                <li>FTZ compliance audits and CBP zone examinations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Bonded Warehouse Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Bonded warehouses allow duty deferral until goods enter U.S. commerce. We assist IE warehouse operators with <strong>bonded warehouse applications, CBP compliance requirements, and warehouse examination defense</strong>. Proper bonded warehouse management saves cash flow and reduces duty costs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Class 2, 3, and 11 bonded warehouse applications and bonds</li>
                <li>Warehouse proprietor compliance and recordkeeping requirements</li>
                <li>CBP warehouse examination preparation and defense</li>
                <li>Warehouse entry and withdrawal procedures (CF-7501, CF-3461)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CTPAT Certification & Validation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Customs-Trade Partnership Against Terrorism (CTPAT) certification provides <strong>reduced CBP examinations and faster cargo processing</strong>. Critical for IE warehouses, 3PLs, and importers. We handle CTPAT applications, security profile development, and validation preparation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CTPAT application and tier advancement (Tier 2/3 validation prep)</li>
                <li>Supply chain security profile development and gap analysis</li>
                <li>CTPAT validation preparation and CBP site visit support</li>
                <li>Foreign supplier CTPAT verification and security assessments</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">E-Commerce & Amazon FBA Customs Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Inland Empire hosts major e-commerce fulfillment centers including <strong>Amazon, Walmart, Target, and numerous 3PL operations</strong>. We provide customs compliance for e-commerce sellers including Section 321 de minimis, ISF filing, product safety, and marketplace compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 321 de minimis compliance and Type 86 entry procedures</li>
                <li>Amazon FBA import compliance and seller customs issues</li>
                <li>ISF (Importer Security Filing) and customs bond requirements</li>
                <li>Product safety compliance (CPSC, FDA, EPA) for e-commerce goods</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Warehouse CBP Audit Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively audits major IE importers and warehouse operators through Focused Assessments and Quick Response Audits. We defend <strong>distribution centers, 3PLs, and importers</strong> through CBP compliance reviews, responding to CF-28 notices, and penalty mitigation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense for major IE importers</li>
                <li>CBP warehouse examination and recordkeeping review response</li>
                <li>Prior Disclosure filings to cap penalties (19 USC § 1592)</li>
                <li>Importer of Record (IOR) compliance and responsibility verification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">First Sale for Export & Tariff Minimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                First Sale for Export allows importers to value goods at the <strong>factory sale price rather than distributor markup</strong>, reducing duty costs by 20-40%. Critical for IE distribution centers importing from multi-tier supply chains. We implement and defend First Sale valuation programs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>First Sale for Export program implementation and documentation</li>
                <li>Transaction value analysis and multi-tier pricing structures</li>
                <li>CBP ruling requests (HQ/NY rulings) for First Sale approval</li>
                <li>Assists and royalty compliance for complex distribution agreements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Across Inland Empire */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Comprehensive Inland Empire Coverage
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Riverside County - West */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Riverside County - West</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Major logistics corridors and distribution centers:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Riverside', 'Corona', 'Norco', 'Eastvale',
                  'Jurupa Valley', 'Mira Loma', 'Rubidoux', 'Glen Avon'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Riverside County - Central */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Riverside County - Central</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Central IE business and industrial areas:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Moreno Valley', 'Perris', 'Lake Elsinore', 'Wildomar',
                  'Canyon Lake', 'Menifee', 'Sun City', 'Romoland'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Riverside County - Southwest */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Riverside County - Southwest</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Temecula Valley and southwest IE:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Temecula', 'Murrieta', 'Wildomar', 'Lake Elsinore',
                  'Canyon Lake', 'Hemet', 'San Jacinto', 'Winchester'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* San Bernardino County - West */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Bernardino County - West</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Ontario/Rancho Cucamonga logistics hub:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Ontario', 'Rancho Cucamonga', 'Fontana', 'Rialto',
                  'Chino', 'Chino Hills', 'Upland', 'Montclair',
                  'Colton', 'Grand Terrace', 'Bloomington', 'Etiwanda'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* San Bernardino County - Central */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Bernardino County - Central</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                San Bernardino metro and surrounding areas:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'San Bernardino', 'Redlands', 'Highland', 'Loma Linda',
                  'Yucaipa', 'Calimesa', 'Beaumont', 'Banning'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* San Bernardino County - High Desert */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">High Desert Region</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Victor Valley and High Desert commerce:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Victorville', 'Hesperia', 'Apple Valley', 'Adelanto',
                  'Barstow', 'Phelan', 'Oak Hills', 'Lucerne Valley'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Logistics Infrastructure */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Inland Empire Logistics & Trade Infrastructure</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Port Access & Transportation</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of Los Angeles (via I-710/I-10)</li>
                  <li>Port of Long Beach (via I-710/SR-91)</li>
                  <li>Ontario International Airport</li>
                  <li>BNSF/UP Rail Intermodal</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Foreign-Trade Zones</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>FTZ 50 (San Bernardino)</li>
                  <li>FTZ 202 (Riverside County)</li>
                  <li>FTZ Subzones (Various IE Locations)</li>
                  <li>Bonded Warehouses (Region-wide)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Key Industries</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>E-Commerce & Fulfillment</li>
                  <li>3PL & Warehousing</li>
                  <li>Manufacturing & Assembly</li>
                  <li>Retail Distribution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Inland Empire Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Inland Empire Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Logistics & Warehouse Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Inland Empire customs attorney, we understand warehouse operations, distribution center compliance, FTZ procedures, and logistics industry challenges better than general practice firms. Our team has deep expertise in <strong>CTPAT, bonded warehouses, first sale transactions, and e-commerce compliance</strong> critical to IE businesses.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regional & Federal Practice</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We combine Inland Empire regional knowledge with nationwide customs practice. We appear before CBP at LA/Long Beach ports, CBP Centers of Excellence and Expertise (CEE), the Court of International Trade, and federal trade agencies. Local accessibility with Washington D.C. regulatory expertise.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost-Effective Solutions</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services including FTZ applications, CTPAT submissions, bonded warehouse applications, and compliance reviews. Transparent hourly rates for complex audits and litigation. Your free consultation includes a detailed cost estimate for IE customs services.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Warehouse Audit Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                CBP actively audits IE warehouse operators and major importers. We provide <strong>proactive compliance reviews</strong> to identify risks before CBP comes knocking. When CBP initiates an audit, we defend your interests, negotiate with CBP auditors, and minimize exposure through strategic prior disclosures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving the Inland Empire from Our California Office
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
                <strong>Consultations:</strong> In-person, phone, and video available
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Access from Inland Empire</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From Ontario/Rancho Cucamonga:</strong> I-10 West to 57 North to 60 West to 101 North (60-75 min)</li>
                <li><strong>From Riverside/Corona:</strong> SR-91 West to 101 North (45-60 min)</li>
                <li><strong>From San Bernardino:</strong> I-10 West to 57 North to 101 North (60-75 min)</li>
                <li><strong>From Temecula/Murrieta:</strong> I-15 North to 91 West to 101 North (75-90 min)</li>
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
                  <a href="/ftz-foreign-trade-zones" className="service-link">
                    <span className="service-link__title">Foreign-Trade Zone Services</span>
                    <p className="service-link__description">FTZ applications & compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <Link to="/ctpat-certification" className="service-link">
                    <span className="service-link__title">CTPAT Certification</span>
                    <p className="service-link__description">Security validation support</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/ecommerce-compliance" className="service-link">
                    <span className="service-link__title">E-Commerce Compliance</span>
                    <p className="service-link__description">Amazon FBA & marketplace sellers</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Regional Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/southern-california-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Southern California</span>
                    <p className="service-link__description">Regional trade law coverage</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/orange-county-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Orange County</span>
                    <p className="service-link__description">OC trade compliance</p>
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
                  <Link to="/ftz-guide" className="service-link">
                    <span className="service-link__title">Foreign-Trade Zone Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/ctpat-guide" className="service-link">
                    <span className="service-link__title">CTPAT Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/ecommerce-import-guide" className="service-link">
                    <span className="service-link__title">E-Commerce Import Guide</span>
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
            Contact our Inland Empire customs attorney and tariff lawyer team today. We'll assess your warehouse operations, logistics compliance needs, and provide expert guidance for your IE business.
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

export default InlandEmpireCustomsAttorneyPage;
