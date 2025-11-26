
import React, { useEffect } from 'react';
import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/seo';

// Practice area slugs mapping for navigation
const practiceAreaSlugs: Record<string, string> = {
  'customs-audits': 'customs-audits',
  'section-301-tariffs': 'retaliatory-tariffs',
  'export-controls': 'export-controls-sanctions',
  'usmca-fta': 'usmca-free-trade-agreements',
};

const ResourcesHubPage: React.FC = () => {
  useMeta({
    title: 'CA Trade Law Resources | Import Export Guides & Knowledge Hub',
    description: 'Comprehensive California international trade law resources and compliance guides. Expert insights on tariffs, HTS classification, supply chain ESG, UFLPA, ecommerce import rules, and digital trade law for California importers and exporters. Free educational resources from experienced trade attorneys.',
    canonical: 'resources',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-resources.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'California International Trade Law Resources & Knowledge Hub',
        description: 'Authoritative educational resources on international trade law, customs compliance, ESG, and digital trade for California businesses.',
        url: `${siteConfig.siteUrl}/#resources`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Resources', url: `${siteConfig.siteUrl}/#resources` }
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'California International Trade Law Resources',
        description: 'Comprehensive knowledge hub for international trade compliance, customs regulations, and import/export legal guidance.',
        url: `${siteConfig.siteUrl}/#resources`,
        about: {
          '@type': 'Thing',
          name: 'International Trade Law',
        },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@type': 'Article',
                name: 'Tariffs, Duties & HTS Classification Guide',
                url: `${siteConfig.siteUrl}/#tariffs-duties-classification-guide`,
                description: 'Comprehensive guide to HTS classification, antidumping/countervailing duties, Section 301/232 tariffs, and customs valuation.',
              },
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@type': 'Article',
                name: 'Supply Chain Ethics & ESG Compliance Guide',
                url: `${siteConfig.siteUrl}/#supply-chain-esg-compliance-guide`,
                description: 'Complete resource on forced labor import bans, UFLPA compliance, green trade regulations, and FCPA anti-corruption.',
              },
            },
            {
              '@type': 'ListItem',
              position: 3,
              item: {
                '@type': 'Article',
                name: 'E-Commerce & Digital Trade Compliance Guide',
                url: `${siteConfig.siteUrl}/#ecommerce-digital-trade-guide`,
                description: 'Essential guide for online sellers covering Section 321, Amazon FBA compliance, and data transfer export controls.',
              },
            },
          ],
        },
      },
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Practice Areas Service Cards Data
  const practiceAreasData = [
    {
      title: 'Customs Audits & CBP Verification Defense',
      subheading: 'Expert CF-28/CF-29 Response & Focused Assessment Representation',
      description: 'Navigate CBP audits with confidence. We defend importers facing CF-28 questionnaires, CF-29 notices, and Focused Assessments with strategic responses that minimize duty exposure and prevent penalties.',
      tags: ['CF-28 Response', 'CF-29 Defense', 'Focused Assessments'],
      imageUrl: '/images/customs-audits.jpg',
      imageAlt: 'Customs officers inspecting cargo containers at shipping port',
      slug: 'customs-audits',
    },
    {
      title: 'Section 301 Tariffs & Exclusion Strategies',
      subheading: 'Minimize Costs from China Trade War Tariffs',
      description: 'Strategic counsel on Section 301 tariff mitigation, exclusion requests, and classification strategies to reduce duty burden from China imports.',
      tags: ['Section 301', 'China Tariffs', 'Exclusion Requests'],
      imageUrl: '/images/section-301-tariffs.jpg',
      imageAlt: 'US-China trade documents with American and Chinese flags',
      slug: 'retaliatory-tariffs',
    },
    {
      title: 'Export Controls & Sanctions Compliance',
      subheading: 'Navigate EAR, ITAR & OFAC Regulations',
      description: 'Comprehensive export controls and sanctions compliance counsel. We guide companies through BIS export licensing, ITAR registration, OFAC sanctions screening.',
      tags: ['EAR Compliance', 'ITAR', 'OFAC', 'Export Licensing'],
      imageUrl: '/images/export-controls.jpg',
      imageAlt: 'High-tech semiconductor chips and compliance documentation',
      slug: 'export-controls-sanctions',
    },
    {
      title: 'USMCA & Free Trade Agreement Optimization',
      subheading: 'Eliminate Duties Through Trade Agreement Qualification',
      description: 'Leverage USMCA and other FTAs to reduce or eliminate import duties. Expert analysis of rules of origin and certificate requirements.',
      tags: ['USMCA', 'Rules of Origin', 'FTA Qualification'],
      imageUrl: '/images/usmca-fta.jpg',
      imageAlt: 'North American map with cargo trucks representing USMCA trade',
      slug: 'usmca-free-trade-agreements',
    },
  ];

  return (
    <div className="pt-20 font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section - Extreme Style Matching Website */}
      <section className="relative w-full py-32 px-6 text-center overflow-hidden flex flex-col justify-center min-h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/hero-resources.jpg"
            alt="Legal reference library with international trade law resources and knowledge hub"
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
            width="1920"
            height="1080"
          />
          {/* Overlay with 55% opacity for better text visibility */}
          <div className="absolute inset-0" style={{backgroundColor: 'rgba(1, 33, 105, 0.55)'}}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-garamond mb-6 tracking-tight leading-tight" style={{color: '#ffffff', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 40px rgba(1, 33, 105, 0.5)'}}>
            California International Trade Law Resources
          </h1>
          <p className="text-xl md:text-2xl font-medium tracking-wide mb-4" style={{color: '#ffffff', textShadow: '0 2px 6px rgba(0, 0, 0, 0.8), 0 4px 12px rgba(0, 0, 0, 0.5)'}}>
            Expert legal guidance on customs compliance, tariffs, supply chain ethics, and digital trade for California importers and exporters.
          </p>
          <div className="w-24 h-1 bg-secondary-teal mx-auto mt-6"></div>
        </div>
      </section>

      {/* Last Updated Timestamp */}
      <div className="py-4 px-6 bg-white border-b border-gray-100">
        <div className="max-w-[900px] mx-auto">
          <p className="text-sm text-gray-500 text-center">
            <span className="font-semibold text-primary-navy">Last Updated:</span> <time dateTime="2025-11-25">November 25, 2025</time>
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-xl text-text-secondary leading-relaxed mb-6">
            Welcome to our <strong>California International Trade Law Resources</strong> hub. We've created comprehensive, practical guides to help California businesses navigate the complex world of international trade compliance.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            Each resource provides in-depth analysis, compliance strategies, and actionable guidance from experienced trade law attorneys.
          </p>
        </div>
      </section>

      {/* International Trade & Customs Law Services - Card Grid with Working Links */}
      <section className="py-20 px-6 bg-neutral-50" aria-labelledby="services-heading">
        <div className="max-w-[1376px] mx-auto">
          <header className="text-center max-w-[720px] mx-auto mb-16">
            <div className="w-20 h-1 bg-primary-navy mx-auto mb-6"></div>
            <span className="inline-block text-xl font-semibold text-navy-medium mb-3 tracking-wide">
              Our Expertise
            </span>
            <h2 id="services-heading" className="font-display text-[42px] font-bold leading-tight text-text-primary mb-5 tracking-tighter font-garamond">
              International Trade & Customs Law Services
            </h2>
            <p className="text-[21px] leading-relaxed text-text-secondary m-0">
              Expert counsel across the most critical areas of international trade compliance.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {practiceAreasData.map((area) => (
              <article 
                key={area.slug}
                className="bg-white rounded-2xl overflow-hidden border border-border-subtle transition-all duration-300 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-transparent will-change-transform"
              >
                <a
                  href={`#practice-areas?slug=${area.slug}`}
                  aria-label={`Learn more about ${area.title} legal services`}
                  className="group relative block text-inherit no-underline focus:outline focus:outline-3 focus:outline-navy-medium focus:outline-offset-4 rounded-2xl"
                >
                  {/* Green Triangle with Arrow */}
                  <div
                    className="triangle-slide"
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: '-96px',
                      width: '96px',
                      height: '96px',
                      background: '#3FBB94',
                      clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                      transition: 'right 300ms ease-in-out',
                      zIndex: 10,
                      pointerEvents: 'none'
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="white"
                      style={{
                        width: '22.4px',
                        height: '22.4px',
                        position: 'absolute',
                        top: '20.8px',
                        right: '20.8px'
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>

                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-light">
                    <img
                      src={area.imageUrl}
                      alt={area.imageAlt}
                      width="800"
                      height="600"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-garamond text-xl font-bold leading-tight text-text-primary mb-2 tracking-tight">
                      {area.title}
                    </h3>
                    <p className="text-[14px] font-semibold text-teal-primary mb-3 block">
                      {area.subheading}
                    </p>
                    <p className="text-[15px] leading-relaxed text-text-secondary mb-4">
                      {area.description}
                    </p>
                    <ul className="flex gap-2 flex-wrap mb-4 list-none p-0" aria-label="Service areas">
                      {area.tags.map((tag) => (
                        <li key={tag} className="py-1 px-2 bg-gray-light text-text-primary text-[12px] font-medium rounded-md">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1.5 text-navy-medium text-[15px] font-semibold transition-all duration-200 group-hover:gap-2.5 group-hover:text-secondary-teal">
                      Learn more →
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Cards - Comprehensive Guides */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-1 bg-primary-navy mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-4">
              Comprehensive Legal Guides
            </h2>
          </div>

          <div className="space-y-8">
            {/* Tariffs & Classification Guide */}
            <article className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-secondary-teal">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    TARIFFS & COMPLIANCE
                  </div>
                  <h3 className="text-3xl font-bold text-primary-navy mb-3 font-garamond">
                    Tariffs, Duties & HTS Classification Guide
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed mb-4">
                    Master the fundamentals of customs duty assessment with our comprehensive guide to <strong>HTS classification, antidumping/countervailing duties, Section 301/232 tariffs, trade remedies, customs valuation, and transfer pricing</strong> for California importers.
                  </p>
                </div>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-primary-navy mb-3">Topics Covered:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-secondary-teal mr-2">✓</span>
                      <span>HTS Classification California methodology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-teal mr-2">✓</span>
                      <span>Antidumping & Countervailing Duties California</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-teal mr-2">✓</span>
                      <span>Section 301 Tariffs California (China trade war)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-teal mr-2">✓</span>
                      <span>Section 232 Tariffs California (steel/aluminum)</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-secondary-teal mr-2">✓</span>
                      <span>Trade Remedies California defense strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-teal mr-2">✓</span>
                      <span>Valuation of Imported Goods California (6 methods)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-teal mr-2">✓</span>
                      <span>Customs Valuation Transfer Pricing California</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-teal mr-2">✓</span>
                      <span>Binding rulings and classification disputes</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-text-secondary">
                  <span className="font-semibold">Reading Time:</span> 25 minutes
                </div>
                <Button href="#tariffs-duties-classification-guide" variant="solid">
                  Read Full Guide →
                </Button>
              </div>
            </article>

            {/* Supply Chain ESG Guide */}
            <article className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-600">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    ESG & ETHICS
                  </div>
                  <h3 className="text-3xl font-bold text-primary-navy mb-3 font-garamond">
                    Supply Chain Ethics & ESG Compliance Guide
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed mb-4">
                    Navigate the complex landscape of ethical sourcing and environmental compliance with our authoritative guide to <strong>forced labor import bans, UFLPA compliance, green trade regulations, carbon border adjustment, and FCPA anti-corruption</strong>.
                  </p>
                </div>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-primary-navy mb-3">Topics Covered:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Supply Chain ESG Compliance California programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Forced Labor Import Bans California (WROs)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Uyghur Forced Labor Prevention Act California</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Green Trade Regulations California</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Carbon Border Adjustment Issues California</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Bribery and Corruption Trade Risks California</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>FCPA Related Trade Issues California</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>UFLPA rebuttable presumption strategies</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-text-secondary">
                  <span className="font-semibold">Reading Time:</span> 23 minutes
                </div>
                <Button href="#supply-chain-esg-compliance-guide" variant="solid">
                  Read Full Guide →
                </Button>
              </div>
            </article>

            {/* E-Commerce & Digital Trade Guide */}
            <article className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-600">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    E-COMMERCE & DIGITAL
                  </div>
                  <h3 className="text-3xl font-bold text-primary-navy mb-3 font-garamond">
                    E-Commerce & Digital Trade Compliance Guide
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed mb-4">
                    Essential compliance roadmap for California online sellers and tech companies covering <strong>ecommerce import rules, Section 321 de minimis, Amazon FBA compliance, digital trade law, and data transfer export controls</strong>.
                  </p>
                </div>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-primary-navy mb-3">Topics Covered:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Ecommerce Import Rules California</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Online Sellers Customs Compliance California</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Section 321 de minimis rules and enforcement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Amazon FBA compliance requirements</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Digital Trade Law California</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Data Transfer Export Controls California</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>GDPR, CCPA cross-border data transfers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Encryption export controls for SaaS companies</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-text-secondary">
                  <span className="font-semibold">Reading Time:</span> 22 minutes
                </div>
                <Button href="#ecommerce-digital-trade-guide" variant="solid">
                  Read Full Guide →
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Why These Resources Matter */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-1 bg-primary-navy mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-4">
              Why California Businesses Need These Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Prevent Costly Violations</h3>
              <p className="text-text-secondary leading-relaxed">
                CBP penalties under 19 USC § 1592 can reach <strong>400% of goods' value</strong>. Understanding compliance requirements before importing saves millions in penalties.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Stay Ahead of Regulations</h3>
              <p className="text-text-secondary leading-relaxed">
                Trade law evolves rapidly—<strong>UFLPA, Section 321 reforms, CBAM</strong>. Our resources keep you informed of emerging compliance requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Make Informed Decisions</h3>
              <p className="text-text-secondary leading-relaxed">
                Understand the <strong>legal and strategic implications</strong> of sourcing decisions, valuation methods, and trade remedy exposure before they impact your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6">
            Need Personalized Legal Guidance?
          </h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            While our resources provide comprehensive information, every business faces unique compliance challenges. Contact our California international trade law team for tailored advice.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#contact" variant="solid">
              Schedule Free Consultation
            </Button>
            <Button href="tel:+16317468290" variant="outline">
              Call (631) 746-8290
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-1 bg-primary-navy mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold font-garamond text-primary-navy mb-4">
              Additional Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a href="#news" className="bg-neutral-50 p-6 rounded-lg hover:shadow-md transition-shadow border-l-4 border-secondary-teal">
              <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond">Latest News & Updates</h3>
              <p className="text-text-secondary text-sm mb-4">
                Stay informed on breaking developments in international trade law and CBP enforcement.
              </p>
              <span className="text-secondary-teal font-semibold text-sm">Read Articles →</span>
            </a>

            <a href="#useful-links" className="bg-neutral-50 p-6 rounded-lg hover:shadow-md transition-shadow border-l-4 border-secondary-teal">
              <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond">Government Links</h3>
              <p className="text-text-secondary text-sm mb-4">
                Direct access to CBP, Commerce, BIS, DDTC, and other federal agency resources.
              </p>
              <span className="text-secondary-teal font-semibold text-sm">View Links →</span>
            </a>

            <a href="#practice-areas" className="bg-neutral-50 p-6 rounded-lg hover:shadow-md transition-shadow border-l-4 border-secondary-teal">
              <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond">Practice Areas</h3>
              <p className="text-text-secondary text-sm mb-4">
                Explore our full range of legal services in international trade and customs law.
              </p>
              <span className="text-secondary-teal font-semibold text-sm">View Services →</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ResourcesHubPage;
