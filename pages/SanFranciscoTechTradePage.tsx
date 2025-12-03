
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanFranciscoTechTradePage: React.FC = () => {
  useMeta({
    title: 'Tech Trade Attorney San Francisco | Technology Import Lawyer',
    description: 'San Francisco tech trade attorney & technology import lawyer. Expert electronics HTS classification, semiconductor tariffs, export controls. Bay Area. (310) 744-1328.',
    keywords: 'tech trade attorney san francisco, technology import lawyer san francisco, electronics tariff attorney bay area, semiconductor trade lawyer, tech export controls attorney, silicon valley trade lawyer',
    canonical: 'san-francisco-tech-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-tech-sf.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'San Francisco Tech Trade Attorney - Technology & Electronics Import Lawyer',
        description: 'San Francisco tech trade attorney specializing in technology imports, electronics HTS classification, semiconductor tariffs, and tech export controls.',
        url: `${siteConfig.siteUrl}/san-francisco-tech-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'San Francisco Tech Trade Attorney', url: `${siteConfig.siteUrl}/san-francisco-tech-trade-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What are the current tariffs on technology and electronics imports?',
          answer: 'Technology tariffs vary significantly. Many semiconductors and integrated circuits enter duty-free under HTS Chapter 85, but Section 301 tariffs add 7.5-25% on Chinese electronics. Laptops, smartphones, and consumer electronics face varying rates (0-6% base duty plus potential Section 301). Proper classification is critical - a circuit board classified as a "finished good" versus "parts" can change duty rates dramatically.',
        },
        {
          question: 'How do Section 301 tariffs affect Silicon Valley tech companies?',
          answer: 'Section 301 tariffs have significantly impacted Bay Area tech companies importing from China. Lists 1-4 cover electronics, semiconductors, telecom equipment, and consumer tech products. Many tech companies have shifted production to Vietnam, Taiwan, or Mexico, but must ensure proper substantial transformation to avoid China origin. We help tech companies navigate Section 301 exclusions, supply chain restructuring, and tariff mitigation strategies.',
        },
        {
          question: 'What export controls apply to technology products?',
          answer: 'Tech products face strict export controls under EAR (Export Administration Regulations) and ITAR. Semiconductors, encryption technology, AI/ML chips, quantum computing tech, and advanced electronics require export licenses for certain destinations. Recent restrictions on China (including Entity List additions) have created significant compliance challenges. We help tech companies classify ECCN codes, obtain export licenses, and maintain compliance programs.',
        },
        {
          question: 'How can tech companies reduce tariffs legally?',
          answer: 'Tech tariff reduction strategies include: (1) precise HTS classification to find duty-free or low-duty codes, (2) Foreign Trade Zone (FTZ) operations to defer or eliminate duties, (3) duty drawback for re-exported tech products, (4) first sale for export valuation, (5) substantial transformation analysis for non-Chinese origin, and (6) free trade agreements (USMCA for Mexico production). Our San Francisco tech trade attorneys develop comprehensive tariff minimization strategies.',
        },
        {
          question: 'What are common CBP issues for technology importers?',
          answer: 'Tech importers frequently face: valuation audits (related-party transactions, royalties for IP/software), misclassification of multi-function devices, antidumping/countervailing duties on semiconductors and solar panels from China, Section 301 tariff compliance, export control violations (deemed exports, encryption), and IPR seizures for counterfeit components. Our Bay Area office has extensive experience defending tech companies in CBP proceedings.',
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
      <section className="hero" aria-label="San Francisco Tech Trade Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop"
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
          <h1>San Francisco Tech Trade Attorney<br />Technology Import Lawyer</h1>
          <p className="hero-subtitle">
            Expert tech trade attorney serving San Francisco and Silicon Valley. Specialized electronics tariff classification, semiconductor trade compliance, export controls, and CBP defense for technology companies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Tech Trade Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Technology Trade Law Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              San Francisco and Silicon Valley drive <strong>global technology innovation</strong>. Our tech trade attorneys understand the unique customs, export control, and tariff challenges facing technology companies - from startups to Fortune 500 enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tech Industry Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We exclusively represent <strong>technology companies</strong> in trade matters. Deep expertise in electronics HTS codes, semiconductor classifications, and tech-specific compliance issues.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Control Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Navigate complex <strong>EAR and ITAR regulations</strong> affecting tech exports. Entity List compliance, encryption controls, and deemed export analysis for Silicon Valley companies.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Oakland Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct access to <strong>Port of Oakland</strong>, the primary Northern California gateway for Asian tech imports. Rapid response to CBP tech product detentions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Trade Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Technology Trade Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Electronics HTS Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Technology product classification is <strong>highly complex</strong>. Is your device a "computer," "telecom equipment," or "electronic instrument"? The answer determines duty rates (0% to 6%+) and Section 301 applicability. We ensure accurate classification.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Semiconductor and integrated circuit classification (Chapter 85.41-85.42)</li>
                <li>Computer and data processing equipment (HTS 8471)</li>
                <li>Telecom equipment and parts (HTS 8517)</li>
                <li>Multi-function device principal use analysis</li>
                <li>Binding Ruling requests for new tech products</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tech Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariffs severely impact tech companies importing from China. Lists 1-4 cover <strong>semiconductors, circuit boards, displays, batteries</strong>, and finished electronics. We help you minimize Section 301 exposure.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 coverage analysis for tech products</li>
                <li>Substantial transformation for third-country assembly (Vietnam, Mexico)</li>
                <li>Exclusion request strategies (when available)</li>
                <li>Supply chain restructuring for tariff avoidance</li>
                <li>Section 301 refund protests and mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Controls & Compliance (EAR/ITAR)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Technology exports face <strong>strict government controls</strong>. Export violations can result in massive fines and criminal prosecution. We help tech companies maintain export compliance programs and respond to violations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ECCN classification for technology products</li>
                <li>Export license applications (BIS, DDTC)</li>
                <li>Entity List and Denied Persons screening</li>
                <li>Deemed export analysis for foreign nationals</li>
                <li>Encryption and technology export compliance</li>
                <li>ITAR registration and compliance for defense tech</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tech Valuation & Transfer Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively audits tech companies for undervaluation. <strong>Related-party transactions, IP royalties, and software licensing</strong> all affect customs value. We defend valuation audits and structure compliant intercompany pricing.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Related-party transaction valuation (19 USC 1401a(e))</li>
                <li>Software and IP royalty dutiability analysis</li>
                <li>First sale for export programs</li>
                <li>Transfer pricing documentation for customs</li>
                <li>CBP Focused Assessment (FA) defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Semiconductor & Component Tariffs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Semiconductors face unique tariff issues including <strong>AD/CVD on Chinese chips</strong>, Section 301 tariffs, and classification complexity. We help chip designers and electronics manufacturers navigate semiconductor trade law.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Semiconductor HTS classification (monolithic vs. hybrid ICs)</li>
                <li>Antidumping/countervailing duty strategies for Chinese chips</li>
                <li>CHIPS Act compliance and domestic content requirements</li>
                <li>Scope Ruling requests to Commerce Department</li>
                <li>Memory, processor, and specialty chip classifications</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Foreign Trade Zones (FTZ) for Tech</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Foreign Trade Zones allow tech companies to <strong>defer, reduce, or eliminate customs duties</strong> through manufacturing, assembly, or distribution in FTZ facilities. Particularly valuable for Bay Area tech logistics.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FTZ activation and operations setup</li>
                <li>Inverted tariff strategies (lower duty on finished goods)</li>
                <li>Direct delivery and weekly entry procedures</li>
                <li>Manufacturing authority applications</li>
                <li>Zone-to-zone transfers and subzones</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Sectors Served */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Technology Sectors We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Hardware & Components</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Semiconductors & Integrated Circuits</li>
                <li>• Computer Hardware & Servers</li>
                <li>• Networking Equipment</li>
                <li>• Circuit Boards & Electronic Components</li>
                <li>• Display Technology (LCD, OLED)</li>
                <li>• Memory & Storage Devices</li>
                <li>• Sensors & IoT Devices</li>
                <li>• Batteries & Power Supplies</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Consumer Tech</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Smartphones & Tablets</li>
                <li>• Laptops & Personal Computers</li>
                <li>• Wearable Technology</li>
                <li>• Smart Home Devices</li>
                <li>• Audio Equipment & Headphones</li>
                <li>• Gaming Consoles & Accessories</li>
                <li>• Cameras & Imaging Equipment</li>
                <li>• Consumer Electronics Accessories</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Enterprise & Emerging Tech</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Data Center Equipment</li>
                <li>• Telecom Infrastructure</li>
                <li>• Cloud Computing Hardware</li>
                <li>• AI/ML Computing Systems</li>
                <li>• Quantum Computing Components</li>
                <li>• Robotics & Automation</li>
                <li>• Renewable Energy Tech (Solar)</li>
                <li>• Medical Device Electronics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bay Area Service */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Serving San Francisco & Silicon Valley
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Silicon Valley Tech Hubs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve the entire <strong>Silicon Valley technology ecosystem</strong>:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• San Francisco SoMa & Financial District</li>
                <li>• Palo Alto & Stanford Research Park</li>
                <li>• Mountain View (Google, LinkedIn)</li>
                <li>• Cupertino (Apple)</li>
                <li>• San Jose & North San Jose tech corridor</li>
                <li>• Sunnyvale & Santa Clara (Intel, AMD, NVIDIA)</li>
                <li>• Menlo Park & Atherton</li>
                <li>• Fremont & Milpitas manufacturing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">East Bay & Peninsula</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Tech companies throughout the greater Bay Area:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Oakland & Emeryville tech startups</li>
                <li>• Berkeley & UC Berkeley research</li>
                <li>• Redwood City & San Mateo</li>
                <li>• Foster City & Belmont</li>
                <li>• Pleasanton & Livermore tech parks</li>
                <li>• Richmond & San Leandro manufacturing</li>
                <li>• Hayward industrial facilities</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Port of Oakland Access</h3>
            <p className="text-center text-neutral-200 mb-4">
              The Port of Oakland is the <strong>primary gateway for Asian tech imports</strong> to Northern California. Our San Francisco tech trade attorneys provide immediate access for CBP meetings, tech product inspections, and detention responses at Oakland.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Tech Companies Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Technology Trade Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general trade lawyers, we have <strong>deep expertise in technology</strong> import/export law. We understand tech product classifications, semiconductor trade, and the unique compliance challenges facing Silicon Valley companies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Control Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We maintain current knowledge of <strong>rapidly evolving export controls</strong> affecting tech - including China Entity List additions, semiconductor export restrictions, and emerging technology controls.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Startup to Enterprise Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We represent <strong>tech startups through Fortune 500</strong> companies. Whether you're a hardware startup shipping your first container or a multinational managing complex global supply chains, we scale to your needs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Tariff Savings</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our tech clients have achieved <strong>significant duty savings</strong> through precise HTS classification, FTZ programs, and tariff engineering - often recovering our fees many times over in the first year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            San Francisco Bay Area Office
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving San Francisco Bay Area & Silicon Valley)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Service:</strong> Statewide California representation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Bay Area Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>To Port of Oakland:</strong> Primary Northern California tech import gateway</li>
                <li><strong>San Francisco:</strong> We serve all SF tech companies remotely and in-person</li>
                <li><strong>Silicon Valley:</strong> Full service for Peninsula and South Bay tech firms</li>
                <li><strong>SFO Air Cargo:</strong> Customs support for air freight tech shipments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Technology Trade Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Trade Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Export Controls (EAR/ITAR)</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">HTS Classification</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Compliance</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Tariffs</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/customs-defense-litigation" className="service-link">
                    <span className="service-link__title">CBP Defense</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/oakland-port-operations-attorney" className="service-link">
                    <span className="service-link__title">Oakland Port Services</span>
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
            Schedule Your Free Tech Trade Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our San Francisco tech trade attorneys today. We'll analyze your technology products, assess tariff exposure, and develop comprehensive import/export compliance strategies.
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

export default SanFranciscoTechTradePage;
