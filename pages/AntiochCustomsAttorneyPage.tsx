
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const AntiochCustomsAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Antioch Customs Attorney | East Contra Costa Trade Lawyer CA',
    description: 'Antioch customs attorney & trade lawyer serving East Contra Costa County businesses. Tariff classification, CBP defense, Port of Oakland access. (310) 744-1328.',
    keywords: 'customs attorney antioch, trade lawyer antioch, tariff attorney antioch, international trade lawyer antioch, antioch import export lawyer, contra costa customs attorney, antioch tariff lawyer, east bay trade attorney',
    canonical: 'antioch-customs-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-antioch.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Antioch Customs Attorney & Trade Lawyer - East Contra Costa County Trade Law',
        description: 'Antioch customs attorney and trade lawyer providing expert legal representation for East Contra Costa County businesses. CBP defense, tariff classification, customs audits, and international trade compliance.',
        url: `${siteConfig.siteUrl}/antioch-customs-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Antioch Customs Attorney', url: `${siteConfig.siteUrl}/antioch-customs-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose an Antioch customs attorney for East Contra Costa businesses?',
          answer: 'An Antioch-based customs attorney provides accessible legal representation for East Contra Costa County importers and exporters without traveling to San Francisco or Oakland. Our firm serves businesses in Antioch, Pittsburg, Brentwood, Oakley, and East County with expert customs and trade law services, including quick access to Port of Oakland and Port of Sacramento for urgent CBP matters.',
        },
        {
          question: 'What customs and tariff services do you offer in Antioch?',
          answer: 'Our Antioch office provides comprehensive customs services including: tariff classification and HTS code optimization, CBP audit defense, customs penalty mitigation, Section 301 China tariff strategies, UFLPA forced labor compliance, antidumping/countervailing duty defense, customs seizure defense, duty drawback claims, and trade compliance program development for East Contra Costa businesses.',
        },
        {
          question: 'Do you serve other East Contra Costa cities besides Antioch?',
          answer: 'Yes, from our Antioch location we serve businesses throughout East Contra Costa County including Pittsburg, Brentwood, Oakley, Discovery Bay, Byron, Knightsen, and all East County communities. We also represent clients at Port of Oakland, Port of Sacramento, and throughout Northern California.',
        },
        {
          question: 'How quickly can you respond to CBP detentions at Port of Oakland?',
          answer: 'Our Antioch location provides access to Port of Oakland (approximately 40-45 minutes via SR-4 to I-80). We prioritize urgent customs matters and can typically respond to CBP detentions, seizures, or audit notices within 24 hours. For emergencies, call our direct line at (310) 744-1328.',
        },
        {
          question: 'What industries do you serve from your Antioch office?',
          answer: 'From Antioch, we represent importers and exporters across all industries including manufacturing, food and agriculture, industrial equipment, consumer goods, automotive parts, technology and electronics, construction materials, and retail. Our experience with East Contra Costa business operations helps us provide targeted customs compliance solutions.',
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
      <section className="hero" aria-label="Antioch Customs Attorney Hero">
        <picture className="hero-bg">
          <img
            src="/images/hero-port-background.jpg"
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
          <h1>Antioch Customs Attorney<br />East Contra Costa Trade Lawyer</h1>
          <p className="hero-subtitle">
            Antioch customs attorney and trade lawyer serving East Contra Costa County businesses. Expert CBP defense, tariff classification, and trade compliance for Port of Oakland importers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose an Antioch Customs Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              East Contra Costa County Trade Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Antioch and East Contra Costa County businesses with expert customs and trade law services. Our firm provides <strong>local accessibility with national expertise</strong> in international trade law, CBP defense, and tariff optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">East County Accessibility</h3>
              <p className="text-text-secondary leading-relaxed">
                Serving Antioch, Pittsburg, Brentwood, and East Contra Costa. <strong>No need to travel to San Francisco or Oakland</strong> for expert customs representation.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Access to <strong>Port of Oakland and Port of Sacramento</strong> via SR-4/I-80. Rapid response to CBP detentions and cargo holds.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Specialized Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Focus <strong>exclusively on customs and trade law</strong>. Deeper expertise than general practice firms for complex tariff matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Customs & Tariff Services in Antioch
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Code Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Antioch customs attorney, we ensure your products are correctly classified under the Harmonized Tariff Schedule (HTS). Proper classification can mean the difference between <strong>0% and 25%+ duty rates</strong>. We file binding ruling requests and defend against CBP reclassifications.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification analysis and optimization</li>
                <li>Binding Ruling requests (NY/HQ rulings)</li>
                <li>Tariff engineering for duty minimization</li>
                <li>Classification dispute defense at Port of Oakland</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively audits California importers. Our Antioch customs attorney team defends you through Focused Assessments, Quick Response Audits, and penalty proceedings. We've helped East Contra Costa clients <strong>reduce penalties by 75% or more</strong> through strategic prior disclosures.
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
                China tariffs (Section 301) add <strong>7.5% to 25%</strong> to import costs. Our Antioch trade law firm helps you navigate exclusions, supply chain restructuring, and tariff engineering to legally minimize your duty burden.
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
                The Uyghur Forced Labor Prevention Act (UFLPA) has resulted in <strong>$2+ billion in detained goods</strong>. Our Antioch customs attorney team helps you implement supply chain due diligence and defend against UFLPA detentions at Port of Oakland.
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
                AD/CVD rates can exceed <strong>200%</strong> for certain products from China and other countries. Our Antioch tariff lawyer files Scope Rulings to exempt your products and defends against EAPA evasion investigations.
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
                When CBP seizes or detains your cargo at Port of Oakland or Port of Sacramento, every day costs money. Our Antioch location provides <strong>responsive service</strong> for customs emergencies. We file admissibility packages and petitions for cargo release.
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

      {/* Service Areas from Antioch */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our Antioch Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* East Contra Costa County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">East Contra Costa County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve the entire East Contra Costa County business community:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Antioch', 'Pittsburg', 'Brentwood', 'Oakley',
                  'Discovery Bay', 'Byron', 'Knightsen', 'Bethel Island'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* West Contra Costa & Solano */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">West Contra Costa & Solano Counties</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Convenient access for West Contra Costa and Solano businesses:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Concord', 'Walnut Creek', 'Pleasant Hill', 'Martinez',
                  'Richmond', 'San Pablo', 'Vallejo', 'Benicia',
                  'Fairfield', 'Suisun City', 'Vacaville', 'Dixon'
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
                  <li>Port of Sacramento</li>
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
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
                  <li>Sacramento Region</li>
                  <li>Los Angeles County</li>
                  <li>Orange County</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Antioch Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why East Contra Costa Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Local Expertise, National Reach</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Antioch customs attorney, we combine local accessibility with nationwide practice capabilities. We appear before CBP offices at every U.S. port, the Court of International Trade in New York, and federal agencies in Washington, D.C.
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
            Serving Antioch & East Contra Costa County
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Antioch, CA and East Contra Costa County</strong><br />
                Main Office: Calabasas, CA<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Service Area:</strong> Antioch, Pittsburg, Brentwood, and all East Contra Costa cities
              </p>
              <p className="text-text-secondary text-sm">
                <strong>Port Access:</strong> Port of Oakland and Port of Sacramento via SR-4/I-80
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">East County Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From SR-4:</strong> Direct access to Antioch business district</li>
                <li><strong>From Port of Oakland:</strong> I-80 to SR-4 East, approximately 40-45 minutes</li>
                <li><strong>From Sacramento:</strong> I-80 West to SR-4 West, approximately 60 minutes</li>
                <li><strong>From Concord:</strong> SR-4 East, approximately 25 minutes</li>
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
                  <Link to="/oakland-port-customs-attorney" className="service-link">
                    <span className="service-link__title">Oakland & Port of Oakland</span>
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
                    <p className="service-link__description">Bay Area trade law services</p>
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
            Contact our Antioch customs attorney and trade lawyer team today. We'll assess your situation, explain your options, and provide a clear path forward for your East Contra Costa business.
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

export default AntiochCustomsAttorneyPage;
