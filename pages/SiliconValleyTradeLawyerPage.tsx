
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SiliconValleyTradeLawyerPage: React.FC = () => {
  useMeta({
    title: 'Silicon Valley Trade Lawyer | Technology Import Attorney San Jose, Palo Alto, Sunnyvale',
    description: 'Silicon Valley trade lawyer serving San Jose, Palo Alto, Sunnyvale, Fremont. Technology import compliance, semiconductor tariffs, EAR/ITAR export controls. (310) 744-1328.',
    keywords: 'silicon valley trade lawyer, san jose customs attorney, palo alto tariff lawyer, sunnyvale trade attorney, silicon valley technology imports, semiconductor tariff lawyer, bay area export controls',
    canonical: 'silicon-valley-trade-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-silicon-valley.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Silicon Valley Trade Lawyer - Technology Import & Export Control Specialists',
        description: 'Silicon Valley trade lawyer and customs attorney serving San Jose, Palo Alto, Sunnyvale, Fremont. Expert technology import compliance, semiconductor tariff strategies, and EAR/ITAR export controls for tech companies.',
        url: `${siteConfig.siteUrl}/silicon-valley-trade-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Silicon Valley Trade Lawyer', url: `${siteConfig.siteUrl}/silicon-valley-trade-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'What makes Silicon Valley unique for trade compliance?',
          answer: 'Silicon Valley is the global technology hub with unique trade compliance challenges including: technology product HTS classification, Section 301 China tariff exposure, semiconductor import/export controls, EAR/ITAR dual-use technology regulations, and IP-intensive product compliance. We understand tech industry trade compliance better than general practice firms.',
        },
        {
          question: 'How do you handle Section 301 tariffs for Silicon Valley technology imports?',
          answer: 'Section 301 tariffs add 7.5%-25% on many technology products from China. We provide Section 301 mitigation strategies including: tariff classification optimization, Information Technology Agreement (ITA) duty-free analysis, country of origin planning, supply chain restructuring, and substantial transformation opinions for third-country processing.',
        },
        {
          question: 'Can you help with export controls (EAR/ITAR) for Silicon Valley tech companies?',
          answer: 'Yes, we specialize in export controls for Silicon Valley technology and defense companies including: EAR (Export Administration Regulations) compliance for dual-use technology, ITAR (International Traffic in Arms Regulations) for defense articles, ECCN classification, export licensing (BIS/DDTC), and deemed export compliance for foreign nationals.',
        },
        {
          question: 'What technology import services do you provide for Silicon Valley?',
          answer: 'We provide comprehensive technology import services including: semiconductor and electronics HTS classification, technology product tariff optimization (ITA analysis), Section 301 tariff strategies, CBP technology detention defense, product safety compliance (FCC, UL, CPSC), and customs audit defense for tech importers.',
        },
        {
          question: 'Do you assist with Port of Oakland customs issues for Silicon Valley companies?',
          answer: 'Yes, we provide Port of Oakland services for Silicon Valley importers including: CBP cargo detention defense, technology product examination support, UFLPA detention response for China-sourced electronics, tariff classification disputes, and rapid cargo release coordination. Oakland is Silicon Valley\'s primary import gateway.',
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
      <section className="hero" aria-label="Silicon Valley Trade Lawyer Hero">
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
          <h1>Silicon Valley Trade Lawyer<br />Technology Import & Export Control Attorney</h1>
          <p className="hero-subtitle">
            Expert Silicon Valley trade lawyer and customs attorney serving San Jose, Palo Alto, Sunnyvale, Fremont. Specialized technology import compliance, semiconductor tariff strategies, and EAR/ITAR export controls for tech companies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Silicon Valley Trade Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Silicon Valley's Technology Trade Law Experts
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Silicon Valley's technology ecosystem from San Jose to Palo Alto. We understand the unique trade compliance challenges facing <strong>technology companies, semiconductor manufacturers, software exporters, and hardware importers</strong>. Expert guidance on Section 301 tariffs, EAR/ITAR controls, and technology product classification.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Technology Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Specialized knowledge</strong> of technology product classification, semiconductor tariffs, electronics import compliance, and IT hardware/software trade regulations unique to Silicon Valley industries.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Control Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep expertise in <strong>EAR, ITAR, and dual-use technology controls</strong> critical to Silicon Valley's defense contractors, semiconductor exporters, and advanced technology companies.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Oakland Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic access to <strong>Port of Oakland</strong> (Silicon Valley's primary import gateway). Rapid response to CBP technology product detentions and cargo compliance issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Trade Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Technology Trade & Customs Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Technology Product Tariff Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As your Silicon Valley trade lawyer, we ensure accurate HTS classification for <strong>semiconductors, electronics, computers, telecommunications equipment, and technology hardware</strong>. Proper classification determines duty rates from 0% to 25%+ and ITA eligibility. We file binding rulings and defend against CBP reclassifications.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Semiconductor and integrated circuit HTS classification (HTSUS 8542)</li>
                <li>Computer and server classification (Chapter 84, 85)</li>
                <li>Telecommunications equipment and networking gear tariff optimization</li>
                <li>Information Technology Agreement (ITA) duty-free eligibility analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Mitigation for Tech Imports</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariffs impose <strong>7.5% to 25% additional duties on technology products from China</strong>. Critical for Silicon Valley companies importing semiconductors, electronics, and hardware. We develop tariff mitigation strategies including ITA analysis, supply chain restructuring, and country of origin planning.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 tariff list analysis and product-specific exposure assessment</li>
                <li>Information Technology Agreement (ITA) coverage for duty-free treatment</li>
                <li>Country of origin strategies and substantial transformation analysis</li>
                <li>Supply chain restructuring for Vietnam, Taiwan, and other sourcing alternatives</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">EAR Export Controls & Dual-Use Technology</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Silicon Valley technology companies must comply with <strong>Export Administration Regulations (EAR)</strong> for dual-use items including semiconductors, software, encryption, and advanced computing. We provide ECCN classification, export licensing, and deemed export compliance for foreign national employees.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ECCN (Export Control Classification Number) determination for technology products</li>
                <li>BIS export licensing (Commerce Department) for controlled technology</li>
                <li>Deemed export compliance for foreign national access to controlled technology</li>
                <li>Encryption and software export compliance (EAR 740.17, TSU exceptions)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">ITAR & Defense Technology Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Silicon Valley defense contractors and aerospace technology companies must comply with <strong>ITAR (International Traffic in Arms Regulations)</strong>. We provide USML categorization, DDTC registration, export licensing, and technical data transfer compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ITAR registration and USML (U.S. Munitions List) categorization</li>
                <li>DDTC (State Department) export licensing for defense articles</li>
                <li>Technical data and technology transfer compliance (ITAR Part 120)</li>
                <li>Foreign person access controls and deemed export ITAR compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Semiconductor & Electronics Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Silicon Valley semiconductor and electronics companies face <strong>complex tariff structures, Section 301 exposure, and UFLPA forced labor risks</strong>. We provide comprehensive import compliance including tariff optimization, detention defense, and supply chain due diligence.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Semiconductor tariff classification and wafer/die duty optimization</li>
                <li>Printed circuit board (PCB) and electronic component classification</li>
                <li>UFLPA forced labor detention defense for China-sourced components</li>
                <li>Section 301 and Section 232 tariff strategies for electronics supply chains</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Technology Audit Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively audits <strong>Silicon Valley technology importers</strong> through Focused Assessments targeting classification, valuation, and Section 301 compliance. We defend you through CBP audits, respond to CF-28 notices, and minimize exposure through strategic prior disclosures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense for major Silicon Valley tech importers</li>
                <li>Classification and valuation audit response for technology products</li>
                <li>Section 301 compliance verification and country of origin defense</li>
                <li>Prior Disclosure filings for self-identified technology import violations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Across Silicon Valley */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Comprehensive Silicon Valley Coverage
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Santa Clara County - North */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Santa Clara County - North</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Core Silicon Valley tech corridor:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Palo Alto', 'Mountain View', 'Sunnyvale', 'Santa Clara',
                  'Cupertino', 'Los Altos', 'Menlo Park', 'Redwood City',
                  'Atherton', 'Los Altos Hills', 'Stanford', 'East Palo Alto'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Santa Clara County - Central */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Santa Clara County - Central</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                San Jose metro and tech parks:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'San Jose', 'Milpitas', 'Campbell', 'Saratoga',
                  'Los Gatos', 'Monte Sereno', 'Alviso', 'Berryessa'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Alameda County - South */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Alameda County - South</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                East Bay tech and manufacturing:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Fremont', 'Newark', 'Union City', 'Hayward',
                  'San Leandro', 'Pleasanton', 'Livermore', 'Dublin'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* San Mateo County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Mateo County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Peninsula technology corridor:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Redwood City', 'San Mateo', 'Burlingame', 'Foster City',
                  'Belmont', 'San Carlos', 'Millbrae', 'South San Francisco',
                  'Daly City', 'Pacifica', 'Half Moon Bay', 'Woodside'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Contra Costa County - South */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Contra Costa County - South</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                East Bay business corridor:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Walnut Creek', 'Concord', 'Pleasant Hill', 'San Ramon',
                  'Danville', 'Brentwood', 'Antioch', 'Martinez'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Santa Cruz County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Santa Cruz County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Coastal technology and UC Santa Cruz:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Santa Cruz', 'Watsonville', 'Scotts Valley', 'Capitola',
                  'Aptos', 'Soquel', 'Live Oak', 'Felton'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Industries & Infrastructure */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Silicon Valley Technology & Trade Infrastructure</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Port & Transportation</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of Oakland (Primary Gateway)</li>
                  <li>San Jose International Airport</li>
                  <li>San Francisco International Airport</li>
                  <li>Oakland International Airport</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Key Tech Industries</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Semiconductors & Chips</li>
                  <li>Software & Cloud Computing</li>
                  <li>Hardware & Electronics</li>
                  <li>Aerospace & Defense Tech</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Trade Compliance Focus</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Section 301 Tariff Strategies</li>
                  <li>EAR/ITAR Export Controls</li>
                  <li>Technology Classification</li>
                  <li>ITA Duty-Free Analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Silicon Valley Companies Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Silicon Valley Companies Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Technology Trade Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Silicon Valley trade lawyer, we understand <strong>technology product classification, semiconductor tariffs, and electronics import compliance</strong> better than general practice firms. Our team has deep expertise in Section 301 strategies, ITA analysis, and technology-specific customs issues affecting Silicon Valley companies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Control Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>EAR, ITAR, and dual-use technology controls</strong> critical to Silicon Valley's defense contractors and technology exporters. Our team handles ECCN classification, export licensing (BIS/DDTC), deemed exports, and encryption compliance for tech companies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">National & International Practice</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We combine Silicon Valley regional knowledge with nationwide practice before federal agencies and courts. We appear before <strong>BIS, DDTC, CBP, Court of International Trade, and Commerce Department</strong>. Local accessibility with Washington D.C. regulatory expertise.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost-Effective Tech Solutions</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services including tariff classification analysis, Section 301 assessments, ECCN determinations, and prior disclosures. Transparent hourly rates for complex audits and export control matters. Your free consultation includes a detailed estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Silicon Valley from Our California Office
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
              <h4 className="font-bold text-primary-navy mb-3">Access from Silicon Valley</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From San Jose:</strong> US-101 South to I-280 South to CA-85 South (varies by route, 5-6 hours)</li>
                <li><strong>From Palo Alto/Mountain View:</strong> US-101 South (5-6 hours)</li>
                <li><strong>Virtual Consultations:</strong> Preferred for most Silicon Valley clients</li>
                <li><strong>Bay Area Meetings:</strong> Available upon request</li>
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
                  <Link to="/technology-classification" className="service-link">
                    <span className="service-link__title">Technology Classification</span>
                    <p className="service-link__description">Semiconductors, electronics, IT</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/export-controls-ear-itar" className="service-link">
                    <span className="service-link__title">Export Controls (EAR/ITAR)</span>
                    <p className="service-link__description">Dual-use technology licensing</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/section-301-tech-strategies" className="service-link">
                    <span className="service-link__title">Section 301 Tech Strategies</span>
                    <p className="service-link__description">China tariff mitigation</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Regional Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/port-of-oakland-tariff" className="service-link">
                    <span className="service-link__title">Port of Oakland</span>
                    <p className="service-link__description">Bay Area port services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/sacramento-valley-trade" className="service-link">
                    <span className="service-link__title">Sacramento Valley</span>
                    <p className="service-link__description">Northern California trade</p>
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
                  <Link to="/technology-classification-guide" className="service-link">
                    <span className="service-link__title">Technology Classification Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/ear-compliance-guide" className="service-link">
                    <span className="service-link__title">EAR Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/section-301-tech-guide" className="service-link">
                    <span className="service-link__title">Section 301 for Tech Guide</span>
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
            Contact our Silicon Valley trade lawyer and customs attorney team today. We'll assess your technology import/export compliance needs and provide expert guidance for your tech business.
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

export default SiliconValleyTradeLawyerPage;
