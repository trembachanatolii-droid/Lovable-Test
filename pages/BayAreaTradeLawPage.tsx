
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const BayAreaTradeLawPage: React.FC = () => {
  useMeta({
    title: 'SF Bay Area Trade Attorney | Silicon Valley CA',
    description: 'San Francisco trade attorney & Oakland port customs lawyer. Export controls for tech companies, ITAR/EAR, startups. Bay Area. (310) 744-1328.',
    canonical: 'bay-area-trade-law-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-bay-area.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'San Francisco & Bay Area Trade Compliance Attorney - Oakland Port Customs Lawyer',
        description: 'Serving San Francisco, Oakland, San Jose, and Silicon Valley with expert trade compliance, export controls, and customs legal services for tech companies and startups.',
        url: `${siteConfig.siteUrl}/bay-area-trade-law-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Local Offices', url: `${siteConfig.siteUrl}/local-offices` },
        { name: 'San Francisco & Bay Area', url: `${siteConfig.siteUrl}/bay-area-trade-law-attorney` }
      ]),
      generateServiceSchema({
        name: 'San Francisco & Bay Area Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance, export controls, and customs legal representation for Bay Area tech companies, startups, and manufacturers. Expert San Francisco trade compliance attorney and Oakland port customs lawyer services including EAR/ITAR compliance, encryption export regulations, dual-use technology controls, OFAC sanctions screening, and trade law advice for startups California.',
        serviceType: 'Technology Trade Law',
        url: `${siteConfig.siteUrl}/bay-area-trade-law-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="Bay Area Trade Law Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1920&auto=format&fit=crop"
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
          <h1>San Francisco & Bay Area<br />Trade Compliance Attorney</h1>
          <p className="hero-subtitle">
            Expert trade law advice for startups California and tech companies. Export controls, customs compliance, and global trade strategy for Silicon Valley's innovation economy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Tech Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Bay Area Tech Companies Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Silicon Valley's Global Economy
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Bay Area tech companies export <strong>software, hardware, and services</strong> to over 100 countries. But exporting technology isn't just a business decision—it's a <strong>legal minefield</strong>. Export controls (EAR/ITAR), encryption regulations, and sanctions screening can make or break your go-to-market strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Startup-Focused Counsel</h3>
              <p className="text-text-secondary leading-relaxed">
                As your San Francisco trade compliance attorney, we provide <strong>trade law advice for startups California</strong> that is practical, cost-effective, and tailored to your growth stage. We speak your language—from seed to Series C.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tech Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                We specialize in <strong>trade compliance for tech companies California</strong>: SaaS, hardware, semiconductors, AI/ML, cybersecurity, biotech, and clean energy. We understand your IP, your roadmap, and your regulatory risks.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Oakland Coverage</h3>
              <p className="text-text-secondary leading-relaxed">
                As your Oakland port customs attorney, we handle customs clearances, CBP examinations, and trade compliance matters for hardware manufacturers and distributors using the Port of Oakland for import/export operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Tech Companies & Startups */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance for Bay Area Innovation Companies
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Controls for Technology (EAR/ITAR)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Most Bay Area tech products are subject to the <strong>Export Administration Regulations (EAR)</strong>. If your software contains encryption, or your hardware has dual-use capabilities, you need an <strong>ECCN classification</strong> before your first international sale. We classify your products, file license applications (SNAP-R), and structure your export compliance program.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>ECCN Classification:</strong> Determine if your product is EAR99 or requires a license</li>
                <li><strong>Encryption Export Regulations:</strong> Navigate Category 5, Part 2 (5A002, 5D002)</li>
                <li><strong>Dual-Use Technology Controls:</strong> Semiconductors, AI chips, quantum computing</li>
                <li><strong>License Exception Strategies:</strong> ENC, TSU, CIV for faster market access</li>
                <li><strong>ITAR Compliance:</strong> Defense articles, technical data, deemed exports</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">OFAC Sanctions & Restricted Party Screening</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Selling to the wrong customer can result in <strong>$300,000+ fines</strong> and criminal prosecution. We help you screen customers against the SDN List, Entity List, and Denied Persons List. We also advise on the <strong>50% Rule</strong> to detect sanctioned beneficial owners hiding behind shell companies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Automated screening tool selection and integration</li>
                <li>Red flag training for sales and compliance teams</li>
                <li>OFAC Specific License applications for blocked transactions</li>
                <li>Russia/China/Iran sanctions compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Deemed Exports & Technology Transfer Controls</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Sharing controlled technology with a <strong>foreign national employee</strong> in your San Francisco or San Jose office is a "deemed export" to that person's home country. If they're from China, Russia, or another restricted country, you need a license. We implement Technology Control Plans (TCPs) and obtain deemed export licenses.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Technology Control Plans (TCP) for R&D facilities</li>
                <li>Deemed export license applications (BIS/DDTC)</li>
                <li>Foreign national employee screening</li>
                <li>Segregated facility design (physical & digital firewalls)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Trade Compliance Program Design for Startups</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Early-stage companies often neglect export compliance until it's too late. We build <strong>scalable trade compliance programs</strong> that grow with your business—from your first international customer to your Series B fundraising round. Investors and acquirers will ask about your compliance posture. We ensure you're ready.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Written Export Compliance Policy (ECP) tailored to your products</li>
                <li>ECCN classification documentation for your product catalog</li>
                <li>Automated restricted party screening workflows</li>
                <li>Employee training programs (sales, engineering, HR)</li>
                <li>Due diligence readiness for M&A or funding rounds</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Compliance for Hardware Manufacturers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you manufacture hardware in Asia and import through the <strong>Port of Oakland</strong>, you need customs compliance. We handle tariff classification (HTS codes), customs valuation (transaction value + assists), country of origin determinations, and Section 301 tariff mitigation strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for electronics, semiconductors, and devices</li>
                <li>First Sale for Export valuation strategies</li>
                <li>Section 301 tariff engineering for China imports</li>
                <li>USMCA origin certifications for North American supply chains</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">BIS Enforcement Defense & Voluntary Disclosures</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you discover an export violation—like shipping encryption software without proper authorization—immediate action is critical. We manage <strong>Voluntary Self-Disclosures (VSD)</strong> to the Bureau of Industry and Security (BIS), conduct internal investigations, and negotiate settlements to minimize penalties.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Voluntary Self-Disclosure (VSD) preparation and filing</li>
                <li>Internal export compliance audits</li>
                <li>BIS enforcement defense (Charging Letters, subpoenas)</li>
                <li>Denied Persons List removal petitions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bay Area Companies Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Startups & Tech Companies Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">We Speak Tech & Law</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your San Francisco trade compliance attorney, we understand <strong>APIs, cloud services, SaaS licensing, open-source software, semiconductor design, and hardware manufacturing</strong>. We don't just apply generic legal templates—we customize compliance strategies to your technology stack and business model.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Startup-Friendly Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee packages</strong> for ECCN classifications, export compliance program design, and voluntary disclosures. Transparent pricing with no surprise bills. Flexible payment terms for early-stage companies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fast Turnaround for Go-to-Market</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We know <strong>speed matters in tech</strong>. Whether you need an ECCN classification for a product launch, a license application for a new market, or an emergency VSD, we prioritize your deadlines. Typical ECCN classification: 5-7 business days.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">M&A & Fundraising Support</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Investors and acquirers conduct <strong>export compliance due diligence</strong>. We prepare your compliance documentation, remediate historical issues, and represent you in negotiations. Don't let trade compliance kill your deal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Bay Area Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">SaaS & Cloud Services</h3>
              <p className="text-sm text-text-secondary">Encryption export controls, cloud data residency, API licensing</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Semiconductors & Hardware</h3>
              <p className="text-sm text-text-secondary">ECCN classification, China export restrictions, customs compliance</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">AI & Machine Learning</h3>
              <p className="text-sm text-text-secondary">Dual-use technology controls, encryption, deemed exports</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Cybersecurity</h3>
              <p className="text-sm text-text-secondary">Encryption licensing (Category 5), intrusion software, penetration tools</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Biotech & Life Sciences</h3>
              <p className="text-sm text-text-secondary">ITAR biodefense, EAR dual-use biologics, research export controls</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Clean Energy & Climate Tech</h3>
              <p className="text-sm text-text-secondary">Battery technology, solar panels, carbon capture systems</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Autonomous Vehicles & Robotics</h3>
              <p className="text-sm text-text-secondary">Sensors, navigation systems, LIDAR, dual-use components</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Consumer Electronics</h3>
              <p className="text-sm text-text-secondary">HTS classification, FCC/CE marking, customs valuation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Bay Area Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Bay Area port logistics, Silicon Valley business culture, and California export compliance requirements. We serve clients by appointment throughout the Bay Area region.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Port of Oakland Routes */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Oakland Truck Routes & Corridors</h3>
              <p className="text-text-secondary mb-4">Understanding Bay Area freight corridors is essential for managing port logistics and avoiding costly delays:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-880</span>
                  <span>Nimitz Freeway — primary port access connecting Oakland terminals to distribution centers in Hayward, Fremont, and San Jose</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-80</span>
                  <span>East-west corridor connecting Port of Oakland to I-680, Sacramento, and national distribution networks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-580</span>
                  <span>Connects I-880 to I-5 and Inland Empire; critical for east-bound distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SR-13</span>
                  <span>Warren Freeway — connects Berkeley and Ashby Avenue to port area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SR-101</span>
                  <span>Peninsula access — connects Silicon Valley tech centers to air freight at SFO and SJC</span>
                </li>
              </ul>
            </div>

            {/* Industrial Areas */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bay Area Industrial & Distribution Zones</h3>
              <p className="text-text-secondary mb-4">Key warehousing and manufacturing districts for tech and trade compliance:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">West Oakland</span>
                  <span>Primary container freight station (CFS) district, transload facilities, port-adjacent warehousing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Hayward/San Leandro</span>
                  <span>I-880 logistics corridor — tech distribution centers, semiconductor handling facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Fremont/Newark</span>
                  <span>Manufacturing hub — Tesla Fremont, semiconductor fabs, electronics assembly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Dublin/Pleasanton</span>
                  <span>East Bay distribution — tech logistics centers, I-580/I-680 interchange access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Silicon Valley</span>
                  <span>San Jose, Palo Alto, Mountain View — R&D centers, export-controlled technology facilities</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Port Terminals & CBP Sites */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Oakland Terminals & CBP Facilities</h3>
              <p className="text-text-secondary mb-4">Understanding terminal operations and examination procedures:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SSA Marine</span>
                  <span>Berths 55-59 — major container terminal, CBP examination site</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">TraPac</span>
                  <span>Berths 25-33 — automated terminal, Asia-Pacific trade lanes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Matson</span>
                  <span>Berths 61-63 — Hawaii/Pacific Island trade, VACIS x-ray inspections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Everport</span>
                  <span>Berths 20-24 — container operations, customs clearance processing</span>
                </li>
              </ul>
              <p className="text-sm text-text-secondary mt-4 italic">
                Average Port of Oakland demurrage costs: $150-$350/day. We respond to CBP holds within 24 hours.
              </p>
            </div>

            {/* Cities Served */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bay Area Cities We Serve</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout the San Francisco Bay Area:</p>
              <div className="grid grid-cols-3 gap-2 text-sm text-text-secondary">
                <span>San Francisco</span>
                <span>Oakland</span>
                <span>San Jose</span>
                <span>Palo Alto</span>
                <span>Mountain View</span>
                <span>Sunnyvale</span>
                <span>Santa Clara</span>
                <span>Cupertino</span>
                <span>Fremont</span>
                <span>Hayward</span>
                <span>Berkeley</span>
                <span>Richmond</span>
                <span>Redwood City</span>
                <span>San Mateo</span>
                <span>Daly City</span>
                <span>San Leandro</span>
                <span>Dublin</span>
                <span>Pleasanton</span>
                <span>Livermore</span>
                <span>Newark</span>
                <span>Union City</span>
                <span>Milpitas</span>
                <span>Campbell</span>
                <span>Los Gatos</span>
              </div>
              <p className="text-sm text-text-secondary mt-4">
                <strong>Headquarters:</strong> 27001 Agoura Road, Suite 350, Calabasas, CA 91301<br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a>
              </p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services for Tech Companies</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/practice-areas" className="service-link">
                      <span className="service-link__title">Export Controls & Sanctions</span>
                      <p className="service-link__description">ITAR/EAR/OFAC compliance</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/practice-areas" className="service-link">
                      <span className="service-link__title">Trade Compliance Programs</span>
                      <p className="service-link__description">Export compliance program design</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/customs-defense-litigation" className="service-link">
                      <span className="service-link__title">Customs Defense & Litigation</span>
                      <p className="service-link__description">BIS enforcement defense</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/practice-areas" className="service-link">
                      <span className="service-link__title">All Practice Areas</span>
                      <p className="service-link__description">Full range of trade law services</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            {/* Industry Focus */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Bay Area Industry Focus</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/technology-electronics-trade-attorney" className="service-link">
                      <span className="service-link__title">Technology & Electronics</span>
                      <p className="service-link__description">Silicon Valley's primary sector</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/apparel-textiles-trade-attorney" className="service-link">
                      <span className="service-link__title">Apparel & Textiles</span>
                      <p className="service-link__description">Athletic wear & fashion tech</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/food-agriculture-trade-attorney" className="service-link">
                      <span className="service-link__title">Food & Agriculture</span>
                      <p className="service-link__description">Wine, organic, and specialty foods</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            {/* Other Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/los-angeles-port-customs-attorney" className="service-link">
                      <span className="service-link__title">Los Angeles & Long Beach Port</span>
                      <p className="service-link__description">Nation's busiest port complex</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <Link to="/contact" className="service-link">
                      <span className="service-link__title">Calabasas HQ Office</span>
                      <p className="service-link__description">27001 Agoura Road, Suite 350</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Helpful Guides */}
          <div className="bg-white p-8 rounded-lg shadow-md overflow-hidden">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful Guides for Tech Companies</h3>
            <div className="grid md:grid-cols-5 gap-6">
              <Link to="/resources/uflpa-compliance-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">UFLPA Guide</h4>
                <p className="text-sm text-text-secondary">Supply chain compliance</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <a href="#article/ear-compliance" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">EAR Compliance</h4>
                <p className="text-sm text-text-secondary">Export Administration Regulations</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#article/encryption-export-controls-california" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Encryption Export</h4>
                <p className="text-sm text-text-secondary">EAR encryption controls</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <Link to="/ecommerce-digital-trade-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">E-commerce</h4>
                <p className="text-sm text-text-secondary">SaaS and cloud compliance</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <Link to="/trade-law-faq" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">FAQ Center</h4>
                <p className="text-sm text-text-secondary">Trade law FAQ</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Scale Your Global Business Compliantly
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let export compliance slow down your go-to-market strategy. Contact our San Francisco trade compliance attorney and Oakland port customs lawyer team for expert trade law advice for startups California.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">
              Schedule Free Consultation
            </Button>
            <Button href="tel:+13107441328" variant="outline">
              Call (310) 744-1328
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

export default BayAreaTradeLawPage;
