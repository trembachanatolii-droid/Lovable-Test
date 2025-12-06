import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const MountainViewTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Mountain View Trade Attorney | Silicon Valley Tech Export Controls',
    description: 'Mountain View trade attorney for tech companies. Export controls, EAR/ITAR compliance, encryption regulations. Apple supply chain expertise. (310) 744-1328.',
    canonical: 'mountain-view-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-mountain-view.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Mountain View Trade Attorney - Silicon Valley Export Controls Lawyer',
        description: 'Serving Mountain View tech companies with expert export controls, technology trade compliance, and encryption export legal services.',
        url: `${siteConfig.siteUrl}/mountain-view-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Local Offices', url: `${siteConfig.siteUrl}/local-offices` },
        { name: 'Mountain View', url: `${siteConfig.siteUrl}/mountain-view-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Mountain View Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance and export controls legal representation for Mountain View technology companies. Expert Mountain View trade attorney services including EAR/ITAR compliance, encryption export regulations, deemed export licensing, OFAC sanctions screening, semiconductor export controls, and hardware import/export compliance for Silicon Valley tech firms.',
        serviceType: 'Technology Export Controls Law',
        url: `${siteConfig.siteUrl}/mountain-view-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="Mountain View Trade Law Hero">
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
          <h1>Mountain View Trade Attorney<br />Silicon Valley Export Controls</h1>
          <p className="hero-subtitle">
            Expert export controls and technology trade compliance for Mountain View's world-class tech companies. EAR/ITAR compliance, encryption regulations, and global expansion strategies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact#schedule-consultation" className="hero-cta">Free Tech Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Mountain View Tech Companies Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Mountain View's Innovation Economy
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Home to <strong>Google</strong> and numerous tech innovators, Mountain View represents the pinnacle of Silicon Valley's global technology leadership. With products exported to <strong>150+ countries</strong>, Mountain View tech companies face complex <strong>export control regulations, encryption export requirements, and international trade compliance challenges</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Hardware Export Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                As your Mountain View trade attorney, we specialize in <strong>consumer electronics export compliance</strong>: smartphones, tablets, wearables, semiconductors, and IoT devices. We understand complex supply chains spanning Asia, Europe, and Americas.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Encryption Export Controls</h3>
              <p className="text-text-secondary leading-relaxed">
                Nearly all modern consumer devices contain <strong>encryption technology</strong> subject to Category 5, Part 2 (EAR). We obtain CCATS classifications, file encryption self-classifications, and navigate License Exception ENC for global product launches.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Global Supply Chain Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Mountain View companies manage <strong>global manufacturing and distribution networks</strong>. We advise on customs valuation (transfer pricing), country of origin marking, Section 301 tariffs, and regulatory compliance across multiple jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Tech Companies */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance for Mountain View Technology Companies
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Consumer Electronics Export Controls (EAR)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Mountain View's consumer electronics companies export devices containing <strong>dual-use technology</strong> including processors, sensors, cameras, and encryption. We provide comprehensive <strong>ECCN classification services</strong>, classify products under ECCN 5A992, 5A002, or EAR99, and structure License Exception strategies for efficient global distribution without delays.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>ECCN Classification:</strong> Smartphones, tablets, wearables, IoT devices, semiconductors</li>
                <li><strong>Encryption Controls:</strong> Category 5, Part 2 (5A002, 5D002) classification and reporting</li>
                <li><strong>License Exception ENC:</strong> Self-classification and annual reporting requirements</li>
                <li><strong>Mass Market Encryption:</strong> Eligibility analysis for consumer products</li>
                <li><strong>Processor Export Controls:</strong> Advanced computing chips under 4A003/4A090</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Semiconductor & Advanced Computing Export Controls</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The semiconductor industry faces <strong>unprecedented export restrictions</strong> targeting China, Russia, and other countries. Recent regulations on <strong>advanced computing chips, GPU accelerators, and AI processors</strong> require careful compliance. We advise on ECCN 4A003, 4A004, 4A090, and "China Military End-User" rules (CMEU).
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Advanced computing chip export restrictions (China, Russia)</li>
                <li>GPU and AI processor controls under ECCN 3A090/4A003</li>
                <li>Entity List screening (Huawei, SMIC, restricted parties)</li>
                <li>Military End-User (MEU) and CMEU restrictions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Compliance for Hardware Imports</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Mountain View companies importing <strong>components and finished goods</strong> from Asia face complex customs requirements. We provide <strong>HTS classification, customs valuation (transfer pricing compliance), Section 301 tariff mitigation, and free trade agreement qualification</strong> (USMCA, US-Korea FTA, etc.).
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>HTS Classification:</strong> Smartphones (8517.13), tablets (8471.30), components</li>
                <li><strong>Customs Valuation:</strong> Transfer pricing, related-party transactions, assists</li>
                <li><strong>Section 301 Tariffs:</strong> China tariff engineering, product reclassification</li>
                <li><strong>USMCA Qualification:</strong> North American supply chain optimization</li>
                <li><strong>First Sale for Export:</strong> Valuation strategies for multi-tiered supply chains</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">OFAC Sanctions & Restricted Party Screening</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Selling technology products to the wrong customer can result in <strong>$300,000+ fines per violation</strong> and criminal prosecution. We implement <strong>automated restricted party screening systems</strong>, train sales and compliance teams on red flag detection, and file OFAC Specific License applications when needed.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Automated screening: SDN List, Entity List, Denied Persons List, Unverified List</li>
                <li>Red flag training for e-commerce and retail sales teams</li>
                <li>Russia, China, Iran, Cuba, North Korea sanctions compliance</li>
                <li>50% Rule implementation (sanctioned ownership detection)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Deemed Export Licensing & Technology Transfer Controls</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Mountain View tech companies employ <strong>thousands of foreign national engineers</strong> working on export-controlled technology. Sharing controlled technology with a foreign national is a <strong>"deemed export"</strong> to their home country. If they're from China, Russia, or another restricted country, you need a license. We design Technology Control Plans (TCPs) and obtain deemed export licenses.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Technology Control Plans (TCP) for R&D facilities</li>
                <li>Deemed export license applications (BIS Form 748-P)</li>
                <li>Foreign national employee screening and documentation</li>
                <li>Segregated facility design (physical and digital controls)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Trade Compliance Program Design for Tech Companies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A documented trade compliance program is essential for <strong>M&A due diligence, investor review, and regulatory audits</strong>. We build scalable compliance programs including written policies, product classification databases, automated screening systems, and employee training. Compliance programs reduce penalties by up to 75% in enforcement actions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Written Export Compliance Policy (ECP) tailored to your products</li>
                <li>ECCN classification database for entire product catalog</li>
                <li>Automated restricted party screening for sales and shipping</li>
                <li>Annual compliance training (sales, engineering, HR, operations)</li>
                <li>Internal audit protocols and corrective action procedures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mountain View Companies Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Mountain View Tech Companies Trust Our Firm
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">We Understand Tech Products</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our attorneys understand <strong>processors, encryption algorithms, semiconductor architecture, IoT protocols, and hardware design</strong>. We don't just apply generic legal templates—we analyze your technology deeply to provide accurate classifications and practical compliance strategies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fast Product Launch Support</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Product launches can't wait for slow legal processes. We provide <strong>expedited ECCN classifications in 5-7 business days</strong>, fast-track license applications, and emergency compliance support for time-sensitive launches. Your go-to-market timeline is our priority.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Global Supply Chain Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We help structure <strong>compliant global supply chains</strong> spanning Asia, Europe, and Americas. Our advice covers manufacturing location decisions, tariff optimization, transfer pricing compliance, and multi-country regulatory coordination. Think strategically, not just tactically.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">M&A Due Diligence Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Acquirers conduct thorough <strong>export compliance due diligence</strong>. We prepare trade compliance documentation, remediate historical violations, and represent you in buyer negotiations. We've supported tech M&A transactions exceeding $1B.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Mountain View Technology Sectors We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Consumer Electronics</h3>
              <p className="text-sm text-text-secondary">Smartphones, tablets, wearables, smart home devices</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Semiconductors</h3>
              <p className="text-sm text-text-secondary">Processors, SoCs, GPUs, memory chips, AI accelerators</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Software & Cloud Services</h3>
              <p className="text-sm text-text-secondary">Operating systems, apps, cloud platforms, APIs</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">IoT & Smart Devices</h3>
              <p className="text-sm text-text-secondary">Connected devices, sensors, home automation</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Telecommunications</h3>
              <p className="text-sm text-text-secondary">5G equipment, network devices, telecom infrastructure</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Automotive Technology</h3>
              <p className="text-sm text-text-secondary">Infotainment systems, sensors, autonomous driving tech</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">AI & Machine Learning</h3>
              <p className="text-sm text-text-secondary">Neural networks, AI chips, ML frameworks</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Cybersecurity</h3>
              <p className="text-sm text-text-secondary">Encryption, secure enclaves, biometric systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Mountain View Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Mountain View's tech ecosystem, Silicon Valley business culture, and regional trade infrastructure. We serve clients by appointment throughout Santa Clara County.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Tech Corridors */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Mountain View Tech Corridors & Transportation</h3>
              <p className="text-text-secondary mb-4">Understanding Silicon Valley transportation for business logistics:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-280</span>
                  <span>Junipero Serra Freeway — connects Mountain View to SF Peninsula and San Jose</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">I-85</span>
                  <span>Connects Mountain View to Mountain View, Sunnyvale, and San Jose</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">SR-85</span>
                  <span>West Valley Freeway — connects to SR-101 and I-280</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Stevens Creek Blvd</span>
                  <span>Major commercial corridor through Mountain View</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">San Jose Airport (SJC)</span>
                  <span>20 minutes from Mountain View — air freight for semiconductor shipments</span>
                </li>
              </ul>
            </div>

            {/* Business Districts */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Mountain View Business & Tech Districts</h3>
              <p className="text-text-secondary mb-4">Key commercial areas and corporate campuses:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Apple Park</span>
                  <span>Apple's headquarters campus — global technology leader</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Infinite Loop</span>
                  <span>Original Apple campus — historic Silicon Valley location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Vallco Shopping District</span>
                  <span>Mixed-use development with tech offices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Mountain View Village</span>
                  <span>Commercial district with tech company offices</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* Supply Chain Infrastructure */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Silicon Valley Supply Chain Infrastructure</h3>
              <p className="text-text-secondary mb-4">Logistics facilities serving Mountain View tech companies:</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">San Jose Airport (SJC)</span>
                  <span>Air cargo terminal for high-value electronics and semiconductors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Port of Oakland</span>
                  <span>45 minutes north — ocean freight for container shipments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">Milpitas Distribution Centers</span>
                  <span>Major logistics hub for Silicon Valley tech fulfillment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-2">FedEx/UPS Facilities</span>
                  <span>Express shipping for international product launches</span>
                </li>
              </ul>
            </div>

            {/* Local Contact Info */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Serving Mountain View & Silicon Valley</h3>
              <p className="text-text-secondary mb-4">Available by appointment throughout Santa Clara County:</p>
              <div className="grid grid-cols-2 gap-2 text-sm text-text-secondary mb-4">
                <span>Mountain View</span>
                <span>San Jose</span>
                <span>Sunnyvale</span>
                <span>Santa Clara</span>
                <span>Mountain View</span>
                <span>Palo Alto</span>
                <span>Milpitas</span>
                <span>Los Gatos</span>
              </div>
              <p className="text-sm text-text-secondary mt-4">
                <strong>Headquarters:</strong> 27001 Agoura Road, Suite 350, Calabasas, CA 91301<br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:info@tradecompliance.law" className="text-secondary-teal hover:underline">info@tradecompliance.law</a>
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
                      <p className="service-link__description">Scalable compliance frameworks</p>
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
                    <Link to="/customs-defense" className="service-link">
                      <span className="service-link__title">BIS Enforcement Defense</span>
                      <p className="service-link__description">Voluntary disclosures, penalties</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Industry Expertise</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/industries/technology-electronics" className="service-link">
                      <span className="service-link__title">Technology & Electronics</span>
                      <p className="service-link__description">Consumer electronics export controls</p>
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
                    <Link to="/industries/technology-electronics" className="service-link">
                      <span className="service-link__title">Semiconductors</span>
                      <p className="service-link__description">Chip export restrictions</p>
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
                      <span className="service-link__title">Software & SaaS</span>
                      <p className="service-link__description">Encryption export compliance</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other Silicon Valley Locations</h3>
              <ul className="space-y-3 overflow-hidden">
                <li>
                  <div className="service-link-item">
                    <Link to="/bay-area-trade-law-attorney" className="service-link">
                      <span className="service-link__title">San Francisco & Bay Area</span>
                      <p className="service-link__description">Silicon Valley headquarters</p>
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
                    <Link to="/palo-alto-trade-attorney" className="service-link">
                      <span className="service-link__title">Palo Alto</span>
                      <p className="service-link__description">Stanford tech corridor</p>
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
              <a href="#article/ear-compliance" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">EAR Compliance</h4>
                <p className="text-sm text-text-secondary">Export Administration Regulations</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#article/encryption-export-controls" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Encryption Export</h4>
                <p className="text-sm text-text-secondary">Category 5 controls</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#article/semiconductor-export-controls" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Semiconductor Export</h4>
                <p className="text-sm text-text-secondary">Advanced computing chips</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <Link to="/ecommerce-digital-trade-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">E-commerce</h4>
                <p className="text-sm text-text-secondary">Digital trade compliance</p>
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
            Export Your Technology Compliantly
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let export compliance slow down your global product launches. Contact our Mountain View trade attorney team for expert technology export controls and customs compliance.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact#schedule-consultation" variant="solid">
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

export default MountainViewTradeAttorneyPage;
