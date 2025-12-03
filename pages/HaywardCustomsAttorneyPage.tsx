
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const HaywardCustomsAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Hayward Customs Attorney | East Bay Tariff Lawyer CA',
    description: 'Hayward customs attorney & tariff lawyer serving East Bay manufacturing businesses. CBP defense, trade compliance, customs audits. Port of Oakland access. (310) 744-1328.',
    keywords: 'customs attorney hayward, tariff lawyer hayward, trade attorney hayward, international trade lawyer hayward, customs lawyer hayward ca, hayward import export lawyer, east bay customs attorney, hayward tariff attorney',
    canonical: 'hayward-customs-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-hayward.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Hayward Customs Attorney & Tariff Lawyer - East Bay Trade Law Firm',
        description: 'Hayward customs attorney and tariff lawyer providing expert legal representation for East Bay manufacturers and importers. CBP defense, tariff classification, customs audits, and international trade compliance.',
        url: `${siteConfig.siteUrl}/hayward-customs-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Hayward Customs Attorney', url: `${siteConfig.siteUrl}/hayward-customs-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Hayward customs attorney for East Bay manufacturing businesses?',
          answer: 'A Hayward-based customs attorney understands the unique needs of East Bay manufacturers and importers. Our firm provides specialized representation for businesses importing industrial equipment, automotive parts, electronics, and manufacturing supplies. With direct access to Port of Oakland via I-880 and SR-92, we can respond quickly to CBP issues affecting your cargo and operations.',
        },
        {
          question: 'What customs and tariff services do you offer in Hayward?',
          answer: 'Our Hayward office provides comprehensive customs services including: tariff classification and HTS code optimization, CBP audit defense, customs penalty mitigation, Section 301 China tariff strategies, UFLPA forced labor compliance, antidumping/countervailing duty defense, customs seizure defense, import compliance programs, and trade agreement (USMCA, FTA) utilization for East Bay manufacturers.',
        },
        {
          question: 'Do you serve other East Bay cities besides Hayward?',
          answer: 'Yes, from our Hayward location we serve businesses throughout the East Bay including Oakland, Fremont, San Leandro, Union City, Newark, Castro Valley, Dublin, Pleasanton, Livermore, and all Alameda County communities. We also represent clients at Port of Oakland and throughout Northern California.',
        },
        {
          question: 'How quickly can you respond to CBP detentions at Port of Oakland?',
          answer: 'Our Hayward location provides excellent access to Port of Oakland (approximately 20-30 minutes via I-880). We prioritize urgent customs matters and can typically respond to CBP detentions, seizures, or audit notices within 24 hours. For manufacturing businesses with time-sensitive cargo, call our direct line at (310) 744-1328 for immediate assistance.',
        },
        {
          question: 'What East Bay industries do you serve from your Hayward office?',
          answer: 'From Hayward, we represent East Bay manufacturers and importers across industries including: advanced manufacturing, automotive parts and equipment, industrial machinery, electronics and technology components, medical devices, food processing equipment, construction materials, and consumer goods. Our experience with East Bay manufacturing supply chains helps us provide targeted customs compliance solutions.',
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
      <section className="hero" aria-label="Hayward Customs Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Hayward Customs Attorney<br />East Bay Tariff Lawyer</h1>
          <p className="hero-subtitle">
            Hayward customs attorney and tariff lawyer serving East Bay manufacturing businesses. Expert CBP defense, tariff classification, and trade compliance for Port of Oakland importers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Hayward Customs Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              East Bay Customs & Trade Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Hayward and East Bay manufacturing businesses with expert customs legal services. Our firm understands the unique challenges facing East Bay importers, from <strong>industrial equipment and automotive parts</strong> to electronics and manufacturing supplies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Oakland Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic Hayward location with <strong>direct I-880 access to Port of Oakland</strong>. Quick response to CBP detentions, cargo holds, and customs emergencies affecting your manufacturing operations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep experience with <strong>East Bay manufacturing supply chains</strong>. We understand tariff issues for industrial equipment, automotive components, and manufacturing materials.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Specialized Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Unlike general practice firms, we focus <strong>exclusively on customs and international trade law</strong>. Deeper expertise for complex tariff and compliance matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Customs & Tariff Services in Hayward
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Code Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Hayward customs attorney, we ensure accurate tariff classification for manufacturing equipment, automotive parts, and industrial materials. Proper HTS classification can save <strong>thousands in duty costs</strong> for East Bay manufacturers. We file binding rulings and defend against CBP reclassifications.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for industrial equipment and machinery</li>
                <li>Binding Ruling requests (CBP NY/HQ rulings)</li>
                <li>Tariff engineering for manufacturing imports</li>
                <li>Classification dispute defense at Port of Oakland</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively audits East Bay manufacturers and importers. Our Hayward tariff lawyer team defends you through Focused Assessments, Quick Response Audits, and penalty proceedings. We've helped manufacturing clients <strong>reduce penalties by 75% or more</strong> through strategic prior disclosures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense for manufacturers</li>
                <li>Prior Disclosure filings to minimize penalties</li>
                <li>CF-28/CF-29 notice response preparation</li>
                <li>19 USC § 1592 penalty mitigation and appeals</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                China tariffs (Section 301) significantly impact East Bay manufacturers importing components and materials. Our firm helps you navigate <strong>exclusion processes, supply chain restructuring</strong>, and tariff minimization strategies to reduce duty costs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 tariff analysis for manufacturing supply chains</li>
                <li>Substantial transformation opinions for components</li>
                <li>Alternative sourcing compliance strategies</li>
                <li>Tariff refund claims and protest filings</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Forced Labor Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Uyghur Forced Labor Prevention Act (UFLPA) has resulted in <strong>$2+ billion in detained goods</strong>. Our Hayward customs attorney team helps East Bay manufacturers implement supply chain due diligence and defend against UFLPA detentions at Port of Oakland.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Manufacturing supply chain mapping and audits</li>
                <li>UFLPA detention defense packages</li>
                <li>"Clear and convincing" evidence compilation</li>
                <li>Forced labor compliance programs for importers</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Antidumping & Countervailing Duties (AD/CVD)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                AD/CVD rates can exceed <strong>200%</strong> for certain manufacturing products and materials. Our Hayward tariff lawyer files Scope Rulings to exempt your products and defends against EAPA evasion investigations that can devastate manufacturing operations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Scope Ruling requests to Commerce Department</li>
                <li>EAPA investigation defense for manufacturers</li>
                <li>Administrative Review representation</li>
                <li>Substantial transformation analysis for components</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Seizure & Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP seizes or detains manufacturing cargo at Port of Oakland, every day costs money. Our Hayward location allows for <strong>rapid response</strong> to port emergencies. We file admissibility packages and petitions to get your goods released quickly.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Seizure notice response (19 USC § 1618)</li>
                <li>Petition for release of detained manufacturing cargo</li>
                <li>IPR/trademark seizure defense</li>
                <li>FDA/EPA/DOT hold resolution for regulated products</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Hayward */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our Hayward Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* East Bay / Alameda County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">East Bay / Alameda County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve the entire East Bay manufacturing and business community:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Hayward', 'Oakland', 'Fremont', 'San Leandro',
                  'Union City', 'Newark', 'Alameda', 'Berkeley',
                  'Castro Valley', 'Dublin', 'Pleasanton', 'Livermore',
                  'San Lorenzo', 'Emeryville', 'Albany', 'Piedmont'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Tri-Valley & South Bay */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tri-Valley & South Bay</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Convenient access for Tri-Valley and South Bay businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Milpitas', 'San Jose', 'Santa Clara', 'Sunnyvale',
                  'Palo Alto', 'Mountain View', 'Cupertino', 'Campbell',
                  'Los Gatos', 'Morgan Hill', 'Gilroy', 'Saratoga',
                  'Los Altos', 'Redwood City', 'Menlo Park', 'Burlingame'
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
                  <li>Port of Oakland</li>
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
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
                  <li>San Francisco Bay Area</li>
                  <li>Los Angeles County</li>
                  <li>Orange County</li>
                  <li>San Diego</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hayward Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why East Bay Manufacturers Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Hayward customs attorney, we understand East Bay manufacturing supply chains. We've helped importers of <strong>industrial equipment, automotive parts, electronics components</strong>, and manufacturing materials navigate complex customs regulations and minimize tariff costs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Exclusive Trade Law Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general practice firms, we focus <strong>exclusively</strong> on international trade and customs law. This specialization means deeper expertise in tariff classification, CBP proceedings, and trade compliance for manufacturing operations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many customs services (protests, ruling requests, prior disclosures) and transparent hourly rates for complex audit defense. No surprise bills. Your free consultation includes a clear fee estimate.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Port of Oakland Response</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Customs emergencies require <strong>immediate action</strong>. Our Hayward location provides quick access to Port of Oakland. Same-day response to CBP detentions, seizures, and cargo holds that impact your manufacturing operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Hayward & East Bay Manufacturing Businesses
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Hayward, CA and East Bay</strong><br />
                Main Office: Calabasas, CA<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Service Area:</strong> Hayward, Oakland, Fremont, and all East Bay cities
              </p>
              <p className="text-text-secondary text-sm">
                <strong>Port Access:</strong> Convenient to Port of Oakland via I-880
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">East Bay Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From I-880:</strong> Direct access to Hayward business district</li>
                <li><strong>From Port of Oakland:</strong> I-880 South, approximately 20-30 minutes</li>
                <li><strong>From San Jose:</strong> I-880 North via Milpitas/Fremont</li>
                <li><strong>From San Francisco:</strong> I-80 to I-880 South via Bay Bridge</li>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#oakland-port-customs-attorney" className="service-link">
                    <span className="service-link__title">Oakland & Port of Oakland</span>
                    <p className="service-link__description">Port customs expertise</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#bay-area-trade-law-attorney" className="service-link">
                    <span className="service-link__title">San Francisco & Bay Area</span>
                    <p className="service-link__description">Bay Area trade law services</p>
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
            Contact our Hayward customs attorney and tariff lawyer team today. We'll assess your situation, explain your options, and provide a clear path forward for your East Bay manufacturing business.
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

export default HaywardCustomsAttorneyPage;
