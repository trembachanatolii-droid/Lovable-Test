
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SunnyvaleTechTradePage: React.FC = () => {
  useMeta({
    title: 'Sunnyvale Tech Trade Attorney | Silicon Valley Customs Lawyer CA',
    description: 'Sunnyvale tech trade attorney for Silicon Valley manufacturing. Expert customs lawyer for semiconductors, electronics exports, tech compliance. (310) 744-1328.',
    keywords: 'tech trade attorney sunnyvale, customs lawyer sunnyvale, silicon valley trade attorney, sunnyvale international trade lawyer, semiconductor export attorney, electronics customs sunnyvale',
    canonical: 'sunnyvale-tech-trade',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-sunnyvale.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Sunnyvale Tech Trade Attorney & Silicon Valley Customs Lawyer - CA',
        description: 'Sunnyvale tech trade attorney serving Silicon Valley tech manufacturers. Expert customs legal services for semiconductor exports, electronics manufacturing, and tech compliance.',
        url: `${siteConfig.siteUrl}/sunnyvale-tech-trade`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Sunnyvale Tech Trade', url: `${siteConfig.siteUrl}/sunnyvale-tech-trade` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Sunnyvale tech trade attorney?',
          answer: 'Sunnyvale is in the heart of Silicon Valley, home to major tech manufacturers including semiconductor facilities, networking equipment companies, and software firms. Our tech trade attorney understands the unique needs of technology companies including export controls (EAR), semiconductor trade compliance, electronics manufacturing exports, and dual-use technology regulations.',
        },
        {
          question: 'Do you handle semiconductor and electronics manufacturing trade?',
          answer: 'Yes, Sunnyvale has significant semiconductor manufacturing and electronics operations. We provide HTS classification for semiconductor wafers and ICs, export controls for semiconductor manufacturing equipment, Section 301 strategies for China tech, country of origin for electronics assemblies, and UFLPA compliance for semiconductor supply chains.',
        },
        {
          question: 'What export control services do you provide for tech companies?',
          answer: 'We offer comprehensive export control services including: ECCN classification for dual-use technology, export license applications to BIS (Commerce), encryption and software export compliance, deemed export regulations for foreign engineers, technology transfer controls, and voluntary self-disclosure for export violations.',
        },
        {
          question: 'Can you assist with Section 301 tariffs on technology products?',
          answer: 'Absolutely. Section 301 tariffs heavily impact electronics, semiconductors, and tech equipment from China. We assist with Section 301 exclusion applications, supply chain restructuring away from China, substantial transformation analysis for tech assemblies, and tariff engineering for tech manufacturers.',
        },
        {
          question: 'What industries do you serve in Sunnyvale and Silicon Valley?',
          answer: 'We represent diverse Silicon Valley tech companies including: semiconductor manufacturing, networking and telecommunications equipment, cloud infrastructure and data centers, software and SaaS companies, consumer electronics, renewable energy and solar technology, medical devices and biotech, and advanced manufacturing throughout the Bay Area.',
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
      <section className="hero" aria-label="Sunnyvale Tech Trade Hero">
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
          <h1>Sunnyvale Tech Trade Attorney<br />Silicon Valley Customs Lawyer</h1>
          <p className="hero-subtitle">
            Expert Sunnyvale tech trade attorney serving Silicon Valley manufacturers. Specialized in semiconductor exports, electronics manufacturing, and technology trade compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Sunnyvale Tech Trade Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Heart of Silicon Valley Innovation
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Sunnyvale is at the <strong>epicenter of Silicon Valley technology</strong>, home to semiconductor manufacturing, networking giants, and innovative tech companies. Our tech trade attorney provides specialized customs legal services for technology exports, manufacturing compliance, and Silicon Valley innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tech Export Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep knowledge of <strong>EAR export controls, ECCN classification, and dual-use technology</strong>. We navigate complex technology export regulations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Semiconductor Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized in <strong>semiconductor trade compliance</strong> including wafer exports, IC manufacturing, and equipment export controls.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Silicon Valley Culture</h3>
              <p className="text-text-secondary leading-relaxed">
                We understand <strong>fast-paced tech innovation and startup needs</strong>. Responsive service that keeps pace with Silicon Valley speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Trade Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Sunnyvale Tech Trade Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Semiconductor Manufacturing & Export Controls</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Sunnyvale has <strong>major semiconductor operations</strong>. We handle ECCN classification for semiconductor equipment, export licensing for fab tools, China semiconductor export restrictions, and deemed export compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ECCN classification for semiconductor manufacturing equipment</li>
                <li>Export licenses for fab tools and wafer processing equipment</li>
                <li>China semiconductor export restrictions (FDP rule)</li>
                <li>Deemed export compliance for foreign engineers</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Administration Regulations (EAR) Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Silicon Valley technology exports require <strong>EAR compliance for dual-use items</strong>. We assist with ECCN classification, export licensing, encryption controls, and technology transfer regulations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ECCN classification for dual-use technology</li>
                <li>Export license applications to BIS (Department of Commerce)</li>
                <li>Encryption and cryptographic software compliance</li>
                <li>Technology transfer controls and deemed exports</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Networking & Telecom Equipment Trade</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Sunnyvale is home to <strong>major networking and telecom equipment companies</strong>. We provide tariff classification for networking gear, export controls for telecom equipment, and Section 301 mitigation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for networking and telecom equipment</li>
                <li>Export controls for telecommunications technology</li>
                <li>Section 301 strategies for China networking equipment</li>
                <li>FCC compliance coordination for wireless devices</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Electronics Manufacturing Exports</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Silicon Valley manufactures <strong>consumer electronics, cloud infrastructure, and data center equipment</strong>. We optimize tariff classification, manage country of origin, and handle export compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Tariff classification for cloud and data center equipment</li>
                <li>Country of origin for electronics assemblies</li>
                <li>Manufacturing drawback for exported tech products</li>
                <li>Substantial transformation for tech manufacturing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tech Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariffs heavily impact <strong>China-origin tech products and components</strong>. We help Sunnyvale companies navigate exclusions, supply chain restructuring, and tariff engineering.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 exclusion applications for tech products</li>
                <li>Supply chain restructuring away from China</li>
                <li>Substantial transformation analysis for tech assemblies</li>
                <li>Vietnam/Mexico sourcing compliance strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Software & Digital Product Trade</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Sunnyvale tech companies export <strong>software, SaaS, and digital products</strong>. We advise on encryption export controls, digital product classification, and technology licensing compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Encryption and cryptographic software export controls</li>
                <li>Mass market encryption exception (TSU)</li>
                <li>Digital product and software classification</li>
                <li>Technology licensing and royalty compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Sunnyvale */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Sunnyvale
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Silicon Valley Core */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Silicon Valley Core</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Serving core Silicon Valley tech companies:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Sunnyvale', 'Santa Clara', 'San Jose', 'Milpitas',
                  'Mountain View', 'Palo Alto', 'Los Altos', 'Cupertino',
                  'Campbell', 'Los Gatos', 'Saratoga', 'Monte Sereno',
                  'Menlo Park', 'Redwood City', 'San Carlos', 'Belmont'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Greater Bay Area */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Greater Bay Area</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Extended service throughout Bay Area:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'San Francisco', 'Daly City', 'South SF', 'San Bruno',
                  'San Mateo', 'Foster City', 'Burlingame', 'Millbrae',
                  'Fremont', 'Newark', 'Union City', 'Hayward',
                  'Oakland', 'Berkeley', 'Alameda', 'Emeryville'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Statewide & Ports */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Bay Area Ports & Nationwide Representation</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Bay Area Ports</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of Oakland</li>
                  <li>San Jose Airport (SJC)</li>
                  <li>San Francisco Airport (SFO)</li>
                  <li>Oakland Airport (OAK)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Agencies</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>BIS (Bureau of Industry & Security)</li>
                  <li>CBP (Customs & Border Protection)</li>
                  <li>FCC (Federal Communications)</li>
                  <li>Commerce Department</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Courts</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>U.S. Court of International Trade</li>
                  <li>U.S. Court of Appeals (Federal Circuit)</li>
                  <li>CBP Administrative Proceedings</li>
                  <li>BIS/Commerce Reviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sunnyvale Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Sunnyvale Tech Companies Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Technology Trade Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>technology exports and manufacturing trade</strong>. Deep expertise in EAR, semiconductor regulations, and Silicon Valley tech compliance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Control Excellence</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Comprehensive knowledge of <strong>dual-use technology export controls</strong>. We navigate BIS regulations and keep pace with evolving China restrictions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Silicon Valley Speed</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>tech industry timelines and startup pace</strong>. Responsive service that matches Silicon Valley innovation speed.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for ECCN determinations, export license applications, and compliance reviews. Clear costs for tech companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Sunnyvale & Silicon Valley
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Sunnyvale from our California offices</strong><br />
                Headquarters: 27001 Agoura Road, Suite 350<br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Tech Support:</strong> Virtual consultations for Silicon Valley clients
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Silicon Valley Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From Sunnyvale:</strong> 5.5 hours via US-101 South</li>
                <li><strong>To Port of Oakland:</strong> 45 minutes via I-880 North</li>
                <li><strong>From Mountain View:</strong> 5.5 hours via US-101 South</li>
                <li><strong>Tech Hub:</strong> Central Silicon Valley location</li>
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
                  <a href="/export-controls" className="service-link">
                    <span className="service-link__title">Export Controls (EAR)</span>
                    <p className="service-link__description">Technology export compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <Link to="/semiconductor-trade" className="service-link">
                    <span className="service-link__title">Semiconductor Trade</span>
                    <p className="service-link__description">Chip manufacturing exports</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/software-export-compliance" className="service-link">
                    <span className="service-link__title">Software Export Compliance</span>
                    <p className="service-link__description">Encryption & digital products</p>
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
                  <Link to="/santa-clara-tech-attorney" className="service-link">
                    <span className="service-link__title">Santa Clara Tech Attorney</span>
                    <p className="service-link__description">Silicon Valley heart</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/san-jose-tech-trade-attorney" className="service-link">
                    <span className="service-link__title">San Jose Trade Attorney</span>
                    <p className="service-link__description">Silicon Valley capital</p>
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
                  <Link to="/resources/semiconductor-export-guide" className="service-link">
                    <span className="service-link__title">Semiconductor Export Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Guide</span>
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
            Contact our Sunnyvale tech trade attorney today. We'll assess your Silicon Valley trade needs and provide clear guidance.
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

export default SunnyvaleTechTradePage;
