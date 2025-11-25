
import React, { useEffect } from 'react';
import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/seo';

const ResourcesHubPage: React.FC = () => {
  useMeta({
    title: 'California International Trade Law Resources | Knowledge Hub | Import Export Guides',
    description: 'Comprehensive California international trade law resources and compliance guides. Expert insights on tariffs, HTS classification, supply chain ESG, UFLPA, ecommerce import rules, and digital trade law for California importers and exporters. Free educational resources from experienced trade attorneys.',
    keywords: 'California international trade law resources, customs compliance guides, import export resources California, trade law knowledge hub, HTS classification guide, UFLPA compliance resources, ecommerce import guide, digital trade resources',
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

  return (
    <div className="pt-20 font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative w-full h-[450px] overflow-hidden bg-primary-navy flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-resources.jpg"
            alt="Library of legal resources representing California international trade law knowledge hub"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
            decoding="async"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/90 via-primary-navy/80 to-primary-navy/95"></div>
        </div>

        <div className="relative z-10 max-w-[1376px] mx-auto px-6 w-full text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-secondary-teal/20 border border-secondary-teal px-6 py-3 rounded-full mb-6">
              <span className="text-secondary-teal font-semibold text-sm uppercase tracking-wide">Knowledge Hub</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-garamond text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
              California International Trade Law Resources
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 font-light mb-8 leading-relaxed drop-shadow-md">
              Expert legal guidance on customs compliance, tariffs, supply chain ethics, and digital trade for California importers and exporters.
            </p>
          </div>
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
            Each resource provides in-depth analysis, compliance strategies, and actionable guidance from experienced trade law attorneys. Whether you're facing CBP enforcement, implementing ESG compliance programs, or navigating e-commerce regulations, these guides offer the expertise you need.
          </p>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Comprehensive Legal Guides
          </h2>

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
                    Navigate the complex landscape of ethical sourcing and environmental compliance with our authoritative guide to <strong>forced labor import bans, UFLPA compliance, green trade regulations, carbon border adjustment, and FCPA anti-corruption</strong> for California importers.
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
                    Essential compliance roadmap for California online sellers and tech companies covering <strong>ecommerce import rules, Section 321 de minimis, Amazon FBA compliance, digital trade law, cross-border data flows, and data transfer export controls</strong>.
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
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why California Businesses Need These Resources
          </h2>

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

      {/* Who Should Use These Resources */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Who These Resources Serve
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">California Importers & Exporters</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>Manufacturers importing components from Asia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>Apparel and textile importers navigating Section 301 and UFLPA</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>Food importers facing FDA and USDA compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>Electronics importers managing AD/CVD and Section 301 duties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>Defense contractors exporting ITAR-controlled products</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Online Sellers & Tech Companies</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>Amazon FBA and Shopify sellers importing from China</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>E-commerce businesses using Section 321 de minimis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>SaaS companies exporting encryption software</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>Tech startups managing cross-border data transfers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>Cloud service providers navigating EAR and deemed exports</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Compliance Professionals</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>Trade compliance managers building import/export programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>Customs brokers advising California clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>Freight forwarders managing CBP compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>Supply chain ESG officers implementing UFLPA controls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>In-house counsel researching trade law issues</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Business Leaders</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>CEOs evaluating international expansion strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>CFOs analyzing tariff impact on profitability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>Procurement teams evaluating supply chain diversification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>Investors conducting due diligence on trade compliance risks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal mr-2 font-bold">•</span>
                  <span>Entrepreneurs launching import/export businesses</span>
                </li>
              </ul>
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
            While our resources provide comprehensive information, every business faces unique compliance challenges. Contact our California international trade law team for tailored advice on your specific situation.
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
          <h2 className="text-4xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Additional Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <a href="#news" className="bg-neutral-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond">Latest News & Updates</h3>
              <p className="text-text-secondary text-sm mb-4">
                Stay informed on breaking developments in international trade law and CBP enforcement.
              </p>
              <span className="text-secondary-teal font-semibold text-sm">Read Articles →</span>
            </a>

            <a href="#useful-links" className="bg-neutral-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond">Government Links</h3>
              <p className="text-text-secondary text-sm mb-4">
                Direct access to CBP, Commerce, BIS, DDTC, and other federal agency resources.
              </p>
              <span className="text-secondary-teal font-semibold text-sm">View Links →</span>
            </a>

            <a href="#practice-areas" className="bg-neutral-50 p-6 rounded-lg hover:shadow-md transition-shadow">
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
