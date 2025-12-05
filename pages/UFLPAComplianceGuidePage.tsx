import React, { lazy, Suspense, useEffect } from 'react';

import { useMeta } from '../hooks/useMeta';
import { Link } from 'react-router-dom';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/seo';
import { siteConfig } from '../config/siteConfig';
import Button from '../components/Button';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const UFLPAComplianceGuidePage: React.FC = () => {
  // Scroll to section function for in-page navigation
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useMeta({
    title: 'UFLPA Compliance CA | Uyghur Forced Labor Prevention Guide',
    description: 'Comprehensive UFLPA compliance guide for California importers: detention defense strategies, supply chain mapping, Entity List screening, high-risk products (textiles, solar panels, tomatoes, electronics), evidence standards, CBP response procedures. Expert guidance from international trade attorneys.',
    canonical: 'resources/uflpa-compliance-guide',
    ogType: 'article',
    ogImage: `${siteConfig.siteUrl}/og-image-uflpa.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'UFLPA Compliance Guide - Trembach Law Firm',
        description: 'Complete guide to UFLPA compliance, detention defense, and forced labor due diligence for California importers.',
        url: 'resources/uflpa-compliance-guide',
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: '' },
        { name: 'Resources', url: 'resources' },
        { name: 'UFLPA Compliance Guide', url: 'resources/uflpa-compliance-guide' },
      ]),
    ],
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="UFLPA Compliance Guide Hero">
        <picture className="hero-bg">
          <img
            src="/images/hero-resources.jpg"
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
          <h1>UFLPA Compliance Guide</h1>
          <p className="hero-subtitle">
            Complete strategy for navigating the Uyghur Forced Labor Prevention Act — from supply chain due diligence to detention defense.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => scrollToSection('overview')} className="hero-cta">Explore UFLPA Compliance</button>
            <Link to="/contact" className="hero-cta-outline">Get Expert Help</Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-10 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary-navy mb-6 text-center">Jump to Section</h2>
          <div className="flex flex-wrap justify-center gap-4 text-base">
            <button onClick={() => scrollToSection('overview')} className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-primary-navy hover:text-secondary-teal font-medium cursor-pointer">What is UFLPA?</button>
            <button onClick={() => scrollToSection('high-risk')} className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-primary-navy hover:text-secondary-teal font-medium cursor-pointer">High-Risk Products</button>
            <button onClick={() => scrollToSection('entity-list')} className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-primary-navy hover:text-secondary-teal font-medium cursor-pointer">Entity List</button>
            <button onClick={() => scrollToSection('due-diligence')} className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-primary-navy hover:text-secondary-teal font-medium cursor-pointer">Due Diligence</button>
            <button onClick={() => scrollToSection('detention-response')} className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-primary-navy hover:text-secondary-teal font-medium cursor-pointer">Detention Response</button>
            <button onClick={() => scrollToSection('best-practices')} className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-primary-navy hover:text-secondary-teal font-medium cursor-pointer">Best Practices</button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 px-4">
        <div className="max-w-[1200px] mx-auto">

          {/* Section 1: Overview */}
          <section id="overview" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
                What is the Uyghur Forced Labor Prevention Act?
              </h2>
              <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                The Uyghur Forced Labor Prevention Act (UFLPA), signed into law on December 23, 2021, and effective June 21, 2022, represents one of the most significant changes to U.S. import enforcement in decades. UFLPA creates a <strong>rebuttable presumption</strong> that goods mined, produced, or manufactured wholly or in part in the Xinjiang Uyghur Autonomous Region of China, or by entities on the UFLPA Entity List, are made with forced labor and therefore prohibited from entry into the United States under Section 307 of the Tariff Act of 1930.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded-lg my-8">
              <h3 className="text-xl font-bold text-red-900 mb-3">Critical Understanding: Rebuttable Presumption</h3>
              <p className="text-gray-800 mb-2">
                Unlike traditional customs enforcement where CBP must prove violations, UFLPA shifts the burden to importers. <strong>You must prove your goods are NOT made with forced labor</strong> - one of the most challenging evidentiary standards in trade law.
              </p>
              <p className="text-gray-700 text-sm">
                This means that any goods with Xinjiang nexus or Entity List connection are automatically presumed to be made with forced labor and will be detained unless you can overcome this presumption with "clear and convincing evidence."
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 justify-center">
              <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
                <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Legislative Background</h3>
                <p className="text-text-secondary leading-relaxed">
                  UFLPA was enacted in response to extensive evidence of systematic forced labor programs affecting Uyghurs, Kazakhs, Kyrgyz, and other Muslim minority groups in Xinjiang. The law reflects Congressional determination that the use of forced labor in Xinjiang is widespread and that goods produced with forced labor should not enter U.S. commerce.
                </p>
              </div>

              <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
                <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Enforcement Authority</h3>
                <p className="text-text-secondary leading-relaxed">
                  The Forced Labor Enforcement Task Force (FLETF), chaired by the Department of Homeland Security and including representatives from Commerce, State, Treasury, Justice, Labor, USTR, and other agencies, implements and enforces UFLPA. FLETF maintains the Entity List, issues enforcement guidance, and coordinates government-wide forced labor prevention efforts.
                </p>
              </div>

              <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
                <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">California Impact</h3>
                <p className="text-text-secondary leading-relaxed">
                  For California importers, UFLPA enforcement is particularly intensive at the Ports of Los Angeles, Long Beach, Oakland, and San Diego - where the majority of goods from China enter the United States. CBP has sophisticated risk assessment systems that flag shipments with potential Xinjiang exposure, leading to automatic detention.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Scope of UFLPA Enforcement</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Since June 21, 2022, U.S. Customs and Border Protection (CBP) has detained <strong>over $1.5 billion worth of goods</strong> under UFLPA authority. The law applies to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Goods mined, produced, or manufactured wholly or in part in Xinjiang</li>
                <li>Goods produced by entities on the UFLPA Entity List (regardless of location)</li>
                <li>Goods that contain materials or components from Xinjiang or Entity List companies</li>
                <li>Finished goods and raw materials alike</li>
              </ul>
            </div>
          </section>

          {/* Section 2: High-Risk Products */}
          <section id="high-risk" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
                High-Risk Products and Industries
              </h2>
              <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                FLETF has identified specific industries with high exposure to Xinjiang forced labor. Understanding these risk categories is essential for importers to assess their vulnerability to UFLPA enforcement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 justify-center">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-primary-navy mb-3">Apparel &amp; Textiles</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Xinjiang produces 20% of global cotton</strong> and 40% of China's cotton. Any textile or apparel product manufactured in China has potential Xinjiang cotton exposure.
                </p>
                <p className="text-sm text-gray-600 mb-2"><strong>High-Risk Items:</strong></p>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Cotton apparel (shirts, pants, dresses, underwear)</li>
                  <li>Cotton fabrics and yarns</li>
                  <li>Home textiles (bedding, towels, curtains)</li>
                  <li>Blended fabrics containing cotton</li>
                  <li>Garments labeled "Made in China" or other Asian countries sourcing Chinese fabric</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-primary-navy mb-3">Solar Panels &amp; Renewables</h3>
                <p className="text-gray-700 mb-3">
                  <strong>80%+ of global polysilicon supply chain</strong> has Xinjiang exposure. Solar industry faces extreme UFLPA scrutiny.
                </p>
                <p className="text-sm text-gray-600 mb-2"><strong>High-Risk Items:</strong></p>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Polysilicon and silicon wafers</li>
                  <li>Solar cells and modules</li>
                  <li>Solar panels and photovoltaic systems</li>
                  <li>Components containing polysilicon</li>
                  <li>Renewable energy equipment using Xinjiang materials</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-600">
                <h3 className="text-xl font-bold text-primary-navy mb-3">Tomato Products</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Xinjiang produces 25% of China's tomato products.</strong> Tomato paste and processed products face high detention rates.
                </p>
                <p className="text-sm text-gray-600 mb-2"><strong>High-Risk Items:</strong></p>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Tomato paste and puree</li>
                  <li>Canned tomatoes</li>
                  <li>Tomato sauce and ketchup</li>
                  <li>Processed foods containing tomato ingredients</li>
                  <li>Industrial tomato products</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-primary-navy mb-3">Electronics &amp; Technology</h3>
                <p className="text-gray-700 mb-3">
                  Many electronics contain <strong>Xinjiang-sourced polysilicon, aluminum, and rare earth elements.</strong>
                </p>
                <p className="text-sm text-gray-600 mb-2"><strong>High-Risk Items:</strong></p>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Semiconductors and integrated circuits</li>
                  <li>Consumer electronics with polysilicon components</li>
                  <li>Aluminum products and components</li>
                  <li>Batteries containing Xinjiang materials</li>
                  <li>Technology hardware with complex supply chains</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-8 rounded-lg my-8">
              <h3 className="text-xl font-bold text-amber-900 mb-3">California Importer Alert</h3>
              <p className="text-gray-800 mb-3">
                Even if your finished product is NOT manufactured in Xinjiang, you may still have UFLPA exposure if:
              </p>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li><strong>Raw materials originate in Xinjiang:</strong> Cotton grown in Xinjiang but manufactured into fabric in Vietnam, then sewn into apparel in Cambodia</li>
                <li><strong>Components from Entity List companies:</strong> Solar panels using polysilicon from Entity List manufacturers</li>
                <li><strong>Sub-tier supplier exposure:</strong> Your direct supplier is clean, but their material suppliers source from Xinjiang</li>
                <li><strong>Processing in Xinjiang:</strong> Raw materials processed or refined in Xinjiang before export to third countries</li>
              </ul>
              <p className="text-gray-700 mt-3">
                <strong>Critical Requirement:</strong> Supply chain mapping must go back to raw material origin, not just first-tier manufacturers.
              </p>
            </div>
          </section>

          {/* Section 3: UFLPA Entity List */}
          <section id="entity-list" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
                The UFLPA Entity List
              </h2>
              <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                The UFLPA Entity List identifies companies and entities that the FLETF has determined to mine, produce, or manufacture wholly or in part with forced labor, or to source material from Xinjiang. <strong>Any goods produced by Entity List companies are subject to the UFLPA rebuttable presumption</strong>, regardless of where the company is located or where production occurs.
              </p>
            </div>

            <h3 className="text-3xl font-bold text-primary-navy mb-8 text-center font-garamond">Major Categories of Listed Entities</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8 justify-center">
              <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-secondary-teal">
                <h4 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Polysilicon Manufacturers</h4>
                <p className="text-text-secondary leading-relaxed">
                  Multiple major Chinese polysilicon producers supplying global solar industry
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-secondary-teal">
                <h4 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Cotton & Textile Companies</h4>
                <p className="text-text-secondary leading-relaxed">
                  Xinjiang-based cotton producers, yarn manufacturers, and textile facilities
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-secondary-teal">
                <h4 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Agricultural Processors</h4>
                <p className="text-text-secondary leading-relaxed">
                  Tomato processing facilities and other agricultural product manufacturers
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-secondary-teal">
                <h4 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Mining & Minerals</h4>
                <p className="text-text-secondary leading-relaxed">
                  Companies involved in aluminum, rare earth elements, and other mineral extraction
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-secondary-teal">
                <h4 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Electronics Components</h4>
                <p className="text-text-secondary leading-relaxed">
                  Manufacturers of electronic components and technology products
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-secondary-teal">
                <h4 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Multinational Subsidiaries</h4>
                <p className="text-text-secondary leading-relaxed">
                  Chinese subsidiaries of international companies found to use forced labor
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg my-8">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Compliance Requirement: Continuous Screening</h3>
              <p className="text-gray-800 mb-3">
                For California importers, Entity List screening must be <strong>ongoing and comprehensive:</strong>
              </p>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li><strong>Screen before each purchase:</strong> Check suppliers against current Entity List before placing orders</li>
                <li><strong>Screen all supply chain tiers:</strong> First-tier manufacturers, their suppliers, raw material sources</li>
                <li><strong>Subscribe to updates:</strong> Monitor FLETF announcements and CBP trade bulletins for Entity List additions</li>
                <li><strong>Immediate action on additions:</strong> When suppliers are added to Entity List, immediately cease shipments and assess alternative sourcing</li>
                <li><strong>Document all screening:</strong> Maintain records of Entity List checks with dates, results, and actions taken</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Entity List Updates and Monitoring</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The FLETF updates the Entity List periodically, typically on a quarterly basis, <strong>without advance notice.</strong> Companies can be added at any time based on new evidence of forced labor involvement.
              </p>
              <p className="text-text-secondary leading-relaxed">
                <strong>Critical Risk:</strong> Entity List violations are among the most serious UFLPA violations. Goods from Entity List companies face near-certain detention and extremely high evidence standards for release. Many importers facing Entity List detentions ultimately choose to export or destroy goods rather than attempt to overcome the presumption.
              </p>
            </div>
          </section>

          {/* Section 4: Due Diligence */}
          <section id="due-diligence" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
                Supply Chain Due Diligence Requirements
              </h2>
              <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                UFLPA requires importers to conduct <strong>supply chain due diligence</strong> to ensure goods are not made with forced labor. This goes far beyond traditional import compliance and requires deep visibility into multi-tier supply chains.
              </p>
            </div>

            <h3 className="text-3xl font-bold text-primary-navy mb-8 text-center font-garamond">The UFLPA Due Diligence Framework</h3>
            <p className="text-text-secondary leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              CBP evaluates UFLPA compliance based on internationally recognized due diligence frameworks, particularly the <strong>UN Guiding Principles on Business and Human Rights</strong> and the <strong>OECD Due Diligence Guidance for Responsible Supply Chains.</strong> These frameworks require:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-secondary-teal">
                <h4 className="text-lg font-bold text-primary-navy mb-3">1. Supply Chain Mapping and Tracing</h4>
                <p className="text-gray-700 mb-3">
                  Document complete supply chain from raw materials through all manufacturing stages to finished product.
                </p>
                <p className="text-sm text-gray-600 mb-2"><strong>Required Documentation:</strong></p>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Supplier identification at all tiers (names, addresses, contact information)</li>
                  <li>Raw material sourcing locations (farms, mines, extraction sites)</li>
                  <li>Manufacturing process flow showing transformation at each tier</li>
                  <li>Country of origin for all inputs and components</li>
                  <li>Custody chain documentation (invoices, contracts, shipping records)</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-secondary-teal">
                <h4 className="text-lg font-bold text-primary-navy mb-3">2. Risk Assessment and Analysis</h4>
                <p className="text-gray-700 mb-3">
                  Identify and evaluate forced labor risks in your supply chain based on product type, geography, and supplier characteristics.
                </p>
                <p className="text-sm text-gray-600 mb-2"><strong>Risk Factors to Assess:</strong></p>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Product category (apparel, solar, tomatoes, electronics = high risk)</li>
                  <li>Geographic exposure to Xinjiang or other forced labor regions</li>
                  <li>Entity List screening results</li>
                  <li>Labor practices and working conditions at supplier facilities</li>
                  <li>Supplier transparency and cooperation with due diligence</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-secondary-teal">
                <h4 className="text-lg font-bold text-primary-navy mb-3">3. Verification and Auditing</h4>
                <p className="text-gray-700 mb-3">
                  Conduct independent verification of supplier representations through audits, certifications, and testing.
                </p>
                <p className="text-sm text-gray-600 mb-2"><strong>Verification Methods:</strong></p>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Third-party social compliance audits using recognized protocols</li>
                  <li>Supplier certifications and sworn declarations</li>
                  <li>Factory visits and physical inspections</li>
                  <li>Material testing and forensic analysis (cotton DNA testing, isotope analysis)</li>
                  <li>Document verification (import/export records, customs declarations)</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-secondary-teal">
                <h4 className="text-lg font-bold text-primary-navy mb-3">4. Corrective Action and Continuous Improvement</h4>
                <p className="text-gray-700 mb-3">
                  Implement systems to address identified risks and continuously improve supply chain transparency.
                </p>
                <p className="text-sm text-gray-600 mb-2"><strong>Corrective Actions:</strong></p>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Supplier remediation plans for identified compliance gaps</li>
                  <li>Alternative sourcing for high-risk suppliers</li>
                  <li>Enhanced monitoring for suppliers with elevated risk</li>
                  <li>Supplier training on forced labor prevention</li>
                  <li>Regular compliance program reviews and updates</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-lg my-8">
              <h3 className="text-xl font-bold text-green-900 mb-3">Best Practice: Establish Pre-Approved Supplier Networks</h3>
              <p className="text-gray-800 mb-3">
                The most effective UFLPA compliance strategy for California importers:
              </p>
              <ol className="text-gray-700 list-decimal list-inside space-y-2">
                <li>Conduct comprehensive due diligence on suppliers <strong>before</strong> placing orders</li>
                <li>Document complete supply chain with evidence packages</li>
                <li>Maintain only "clean" suppliers with verified forced-labor-free supply chains</li>
                <li>Update due diligence periodically (at least annually) to capture changes</li>
                <li>If detention occurs, you already have evidence ready to submit to CBP</li>
              </ol>
              <p className="text-gray-700 mt-3">
                This proactive approach dramatically reduces detention risk and, if detention occurs, enables much faster release (often 14-30 days vs. 90+ days for unprepared importers).
              </p>
            </div>
          </section>

          {/* Section 5: Detention Response */}
          <section id="detention-response" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
                UFLPA Detention Response Procedures
              </h2>
              <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                UFLPA detentions are <strong>among the most serious customs enforcement actions.</strong> When CBP detains a shipment under UFLPA, immediate expert response is critical to maximize the chance of release and minimize cargo holds.
              </p>
            </div>

            <h3 className="text-3xl font-bold text-primary-navy mb-8 text-center font-garamond">The Detention Process: What to Expect</h3>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h4 className="text-2xl font-bold text-primary-navy mb-6 font-garamond">Timeline and Procedures:</h4>
              <ol className="space-y-4 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-3 text-xl">1.</span>
                  <div>
                    <strong className="text-primary-navy">Detention Notice Issued:</strong> CBP physically detains cargo at port and sends detention notice to importer and customs broker
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-3 text-xl">2.</span>
                  <div>
                    <strong className="text-primary-navy">Request for Information (RFI):</strong> CBP issues RFI demanding extensive supply chain documentation within 30 days (sometimes shorter)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-3 text-xl">3.</span>
                  <div>
                    <strong className="text-primary-navy">Evidence Submission:</strong> Importer submits comprehensive evidence package to overcome rebuttable presumption
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-3 text-xl">4.</span>
                  <div>
                    <strong className="text-primary-navy">CBP Review:</strong> CBP analyzes evidence and may request additional information or clarification (can take 30-90+ days)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-3 text-xl">5.</span>
                  <div>
                    <strong className="text-primary-navy">Decision:</strong> CBP either releases goods for entry or issues exclusion finding prohibiting entry
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-3 text-xl">6.</span>
                  <div>
                    <strong className="text-primary-navy">If Excluded:</strong> Importer must export goods or destroy them (at importer's expense)
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Evidence Standards: "Clear and Convincing"</h3>
              <p className="text-text-secondary leading-relaxed">
                To overcome the UFLPA rebuttable presumption, importers must provide <strong>"clear and convincing evidence"</strong> that goods were not produced with forced labor. This is one of the highest evidentiary standards in law - higher than "preponderance of the evidence" used in most civil matters.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded-lg my-8">
              <h3 className="text-xl font-bold text-red-900 mb-3">What CBP Requires to Release Detained Goods</h3>
              <p className="text-gray-800 mb-3">
                Evidence packages must be <strong>comprehensive, detailed, and independently verifiable.</strong> Insufficient evidence types that will NOT overcome presumption:
              </p>
              <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
                <li>✗ Simple supplier statements or declarations without corroboration</li>
                <li>✗ Supplier self-assessments or questionnaires</li>
                <li>✗ Generic compliance policies without implementation evidence</li>
                <li>✗ Incomplete supply chain mapping (missing raw materials or sub-tiers)</li>
                <li>✗ Post-detention remediation without proof of pre-existing compliance</li>
              </ul>
              <p className="text-gray-800 font-semibold">
                CBP's standard: Evidence must prove, with high degree of certainty, that no forced labor was used at ANY stage of production.
              </p>
            </div>

            <h3 className="text-3xl font-bold text-primary-navy mb-8 text-center font-garamond">Required Evidence Components</h3>
            <p className="text-text-secondary leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Effective UFLPA detention responses require multi-layered evidence packages addressing every element of the supply chain:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8 justify-center">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-secondary-teal">
                <h4 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Complete Supply Chain Mapping</h4>
                <p className="text-text-secondary leading-relaxed">
                  Detailed documentation of entire custody chain from raw materials (cotton farms, polysilicon producers, tomato growers) through all manufacturing tiers to finished product, with evidence of origin at each stage.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-secondary-teal">
                <h4 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Factory and Supplier Certifications</h4>
                <p className="text-text-secondary leading-relaxed">
                  Sworn declarations from all suppliers certifying: no Xinjiang sourcing, no Entity List involvement, no forced labor used, with detailed statements of sourcing practices and labor conditions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-secondary-teal">
                <h4 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Third-Party Audit Reports</h4>
                <p className="text-text-secondary leading-relaxed">
                  Independent social compliance audits conducted by qualified third-party auditors using UN Guiding Principles or OECD Due Diligence frameworks, documenting labor practices, working conditions, and supply chain verification.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-secondary-teal">
                <h4 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Import/Export Documentation</h4>
                <p className="text-text-secondary leading-relaxed">
                  Customs declarations, commercial invoices, bills of lading, and shipping records for all supply chain tiers proving movement of materials and products through documented channels.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-secondary-teal">
                <h4 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Material Origin Verification</h4>
                <p className="text-text-secondary leading-relaxed">
                  Documentation proving raw material origin (cotton purchase records from specific farms, polysilicon production records, agricultural certifications) with evidence excluding Xinjiang sources.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-secondary-teal">
                <h4 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Due Diligence Program Evidence</h4>
                <p className="text-text-secondary leading-relaxed">
                  Written compliance policies, supplier codes of conduct, audit protocols, training records, and monitoring systems demonstrating systematic approach to forced labor prevention implemented before detention.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded-lg my-8">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Critical Success Factor: Immediate Expert Engagement</h3>
              <p className="text-gray-800 mb-3">
                UFLPA detention response is highly time-sensitive and technically complex. The difference between release and exclusion often depends on:
              </p>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li><strong>Speed:</strong> Gathering comprehensive evidence within 30-day RFI deadline requires immediate mobilization</li>
                <li><strong>Completeness:</strong> Missing even one supply chain tier or documentation element can result in exclusion</li>
                <li><strong>Quality:</strong> Evidence must meet CBP's exacting standards - generic or superficial submissions fail</li>
                <li><strong>Legal Strategy:</strong> Effective legal arguments framing evidence and addressing CBP concerns</li>
              </ul>
              <p className="text-gray-800 mt-3 font-semibold">
                Our firm provides systematic UFLPA detention defense combining emergency supply chain investigation, comprehensive evidence development, and persuasive legal advocacy to maximize the chance of cargo release.
              </p>
            </div>
          </section>

          {/* Section 6: Best Practices */}
          <section id="best-practices" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
                UFLPA Compliance Best Practices
              </h2>
              <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                For California importers, proactive UFLPA compliance is essential to avoid costly detentions, protect supply chain continuity, and demonstrate corporate responsibility. The following best practices reflect lessons learned from hundreds of UFLPA enforcement actions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-primary-navy text-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-3xl font-bold mb-2 font-garamond">10 Essential UFLPA Compliance Practices</h3>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-3">
                  <span className="text-3xl font-bold text-secondary-teal mr-4">1</span>
                  <div>
                    <h4 className="text-lg font-bold text-primary-navy mb-2">Map Your Supply Chain to Raw Materials</h4>
                    <p className="text-gray-700">
                      Go beyond first-tier suppliers. Document raw material sources (cotton farms, polysilicon producers), processing facilities, and all manufacturing tiers. Maintain supplier relationship maps showing complete custody chain.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-3">
                  <span className="text-3xl font-bold text-secondary-teal mr-4">2</span>
                  <div>
                    <h4 className="text-lg font-bold text-primary-navy mb-2">Implement Continuous Entity List Screening</h4>
                    <p className="text-gray-700">
                      Screen all suppliers and sub-tier manufacturers against UFLPA Entity List before each purchase. Subscribe to FLETF updates and establish protocols for immediate action when suppliers are added to list.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-3">
                  <span className="text-3xl font-bold text-secondary-teal mr-4">3</span>
                  <div>
                    <h4 className="text-lg font-bold text-primary-navy mb-2">Conduct Third-Party Supply Chain Audits</h4>
                    <p className="text-gray-700">
                      Engage qualified auditors to verify supplier representations. Focus audits on labor practices, working conditions, and supply chain documentation. Use recognized frameworks (UN Guiding Principles, OECD Due Diligence).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-3">
                  <span className="text-3xl font-bold text-secondary-teal mr-4">4</span>
                  <div>
                    <h4 className="text-lg font-bold text-primary-navy mb-2">Obtain Supplier Certifications and Declarations</h4>
                    <p className="text-gray-700">
                      Require suppliers to provide sworn declarations certifying: no Xinjiang sourcing, no Entity List involvement, no forced labor used. Include detailed statements on raw material sourcing and manufacturing locations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-3">
                  <span className="text-3xl font-bold text-secondary-teal mr-4">5</span>
                  <div>
                    <h4 className="text-lg font-bold text-primary-navy mb-2">Maintain Comprehensive Documentation</h4>
                    <p className="text-gray-700">
                      Keep organized files with: supplier contracts, audit reports, certifications, import/export records, material sourcing documentation, and evidence of due diligence activities. Maintain for 5+ years.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-3">
                  <span className="text-3xl font-bold text-secondary-teal mr-4">6</span>
                  <div>
                    <h4 className="text-lg font-bold text-primary-navy mb-2">Diversify Supply Chains Away from High-Risk Sources</h4>
                    <p className="text-gray-700">
                      For high-risk products (textiles, solar, tomatoes), develop alternative sourcing from regions with lower forced labor risk. Build supplier networks in countries with strong labor protections and transparency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-3">
                  <span className="text-3xl font-bold text-secondary-teal mr-4">7</span>
                  <div>
                    <h4 className="text-lg font-bold text-primary-navy mb-2">Establish Written UFLPA Compliance Program</h4>
                    <p className="text-gray-700">
                      Document formal compliance policies including: risk assessment procedures, supplier screening protocols, audit requirements, corrective action processes, and training programs. Implement across organization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-3">
                  <span className="text-3xl font-bold text-secondary-teal mr-4">8</span>
                  <div>
                    <h4 className="text-lg font-bold text-primary-navy mb-2">Train Procurement and Compliance Teams</h4>
                    <p className="text-gray-700">
                      Ensure purchasing, sourcing, and compliance personnel understand UFLPA requirements. Provide regular training on: high-risk products, Entity List screening, due diligence standards, and detention response procedures.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-3">
                  <span className="text-3xl font-bold text-secondary-teal mr-4">9</span>
                  <div>
                    <h4 className="text-lg font-bold text-primary-navy mb-2">Monitor CBP Guidance and Enforcement Trends</h4>
                    <p className="text-gray-700">
                      Stay current on FLETF strategy updates, CBP enforcement priorities, and industry-specific guidance. Adjust compliance programs based on evolving enforcement landscape and best practices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-3">
                  <span className="text-3xl font-bold text-secondary-teal mr-4">10</span>
                  <div>
                    <h4 className="text-lg font-bold text-primary-navy mb-2">Engage Experienced Customs Counsel</h4>
                    <p className="text-gray-700">
                      Work with international trade attorneys experienced in UFLPA compliance and enforcement. Counsel can: assess supply chain risks, design compliance programs, conduct internal reviews, and provide immediate detention response if needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </article>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">UFLPA Legal Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/customs-defense-litigation" className="service-link">
                    <span className="service-link__title">UFLPA Detention Defense</span>
                    <p className="service-link__description">Emergency response and evidence packages</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Compliance Programs</span>
                    <p className="service-link__description">Supply chain due diligence and mapping</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">All Trade Law Services</span>
                    <p className="service-link__description">Complete customs and trade practice</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Industry Focus */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">High-Risk Industries</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/apparel-textiles-trade-attorney" className="service-link">
                    <span className="service-link__title">Apparel & Textiles</span>
                    <p className="service-link__description">Cotton supply chain compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/technology-electronics-trade-attorney" className="service-link">
                    <span className="service-link__title">Solar & Electronics</span>
                    <p className="service-link__description">Polysilicon and semiconductor issues</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/food-agriculture-trade-attorney" className="service-link">
                    <span className="service-link__title">Food & Agriculture</span>
                    <p className="service-link__description">Tomato products and ingredients</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Related Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Tariffs Guide</span>
                    <p className="service-link__description">China tariff mitigation strategies</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/los-angeles-port-customs-attorney" className="service-link">
                    <span className="service-link__title">LA/Long Beach Port Services</span>
                    <p className="service-link__description">Port-specific customs defense</p>
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
                    <p className="service-link__description">Common UFLPA questions answered</p>
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
            Expert UFLPA Compliance and Detention Defense
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let UFLPA detentions disrupt your supply chain. Our California trade law attorneys provide systematic detention defense, comprehensive evidence development, and proactive compliance programs for high-risk importers.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">
              Schedule UFLPA Consultation
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

export default UFLPAComplianceGuidePage;
