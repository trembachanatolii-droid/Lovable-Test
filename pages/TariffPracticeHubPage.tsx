import React, { lazy, Suspense, useEffect, useState } from 'react';

import Button from '../components/Button';
import { Link } from 'react-router-dom';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

// Lazy load components
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

// Tariff articles data - curated list of tariff-related articles
const tariffArticles = [
  {
    id: 'section-301-exclusion-extensions-2025',
    title: 'Section 301 Tariff Exclusions Extended: 178 Products Through November 2026',
    category: 'Section 301',
    readTime: '8 min',
    date: 'December 2025',
  },
  {
    id: 'section-232-steel-aluminum-50-2025',
    title: 'Section 232 Steel and Aluminum Tariffs Doubled to 50%',
    category: 'Section 232',
    readTime: '10 min',
    date: 'December 2025',
  },
  {
    id: 'tariff-revenue-surge-2025',
    title: '$101.2 Billion Tariff Revenue Surge: Managing Import Costs',
    category: 'Trade Policy',
    readTime: '12 min',
    date: 'December 2025',
  },
  {
    id: 'supreme-court-ieepa-tariff-challenge-2025',
    title: 'Supreme Court IEEPA Tariff Challenge: Preparing for Refunds',
    category: 'Litigation',
    readTime: '9 min',
    date: 'November 2025',
  },
  {
    id: 'section-232-copper-tariffs-california-2025',
    title: 'Section 232 Copper Tariffs: 50% Import Duties Impact California',
    category: 'Section 232',
    readTime: '11 min',
    date: 'November 2025',
  },
  {
    id: 'section-232-timber-lumber-california-2025',
    title: 'Section 232 Timber & Lumber Tariffs: California Compliance',
    category: 'Section 232',
    readTime: '10 min',
    date: 'November 2025',
  },
];

// Tariff services data
const tariffServices = [
  {
    title: 'Tariff Classification & HTS Optimization',
    description: 'Strategic HTS code analysis to identify lower duty classifications. We obtain binding rulings from CBP to protect your classification positions.',
    icon: '🔍',
    link: '/practice-areas',
  },
  {
    title: 'Section 301 China Tariff Mitigation',
    description: 'Navigate 25-100% China tariffs with exclusion requests, supply chain restructuring, first sale valuation, and substantial transformation strategies.',
    icon: '🇨🇳',
    link: '/resources/section-301-tariffs-guide',
  },
  {
    title: 'Section 232 Steel, Aluminum & Copper Defense',
    description: 'Challenge improper Section 232 assessments, obtain product exclusions, and develop compliant domestic sourcing alternatives.',
    icon: '🏭',
    link: '/practice-areas',
  },
  {
    title: 'USMCA Qualification & Certification',
    description: 'Avoid 25% tariffs on Mexican and Canadian goods by properly qualifying under USMCA rules of origin. We prepare certificates and audit documentation.',
    icon: '📜',
    link: '/usmca-certification',
  },
  {
    title: 'Tariff Engineering & Product Modification',
    description: 'Work with your manufacturing team to modify products for better tariff treatment without compromising functionality or marketability.',
    icon: '⚙️',
    link: '/practice-areas',
  },
  {
    title: 'Duty Drawback & Refund Claims',
    description: 'Recover 99% of duties paid on imported goods that are subsequently exported or destroyed. We file and manage drawback claims.',
    icon: '💰',
    link: '/practice-areas',
  },
  {
    title: 'Foreign Trade Zones (FTZ)',
    description: 'Establish FTZ operations at California ports to defer duties, reduce Section 301 exposure, and optimize your supply chain.',
    icon: '🏗️',
    link: '/practice-areas',
  },
  {
    title: 'CBP Audit Defense & Prior Disclosure',
    description: 'Defend against CBP focused assessments and audits. File prior disclosures to minimize penalties when errors are discovered.',
    icon: '🛡️',
    link: '/customs-defense',
  },
];

// Industry expertise data
const industryExpertise = [
  {
    title: 'Technology & Electronics',
    description: 'Semiconductors, computers, consumer electronics facing 25-60%+ tariffs from China. We help Silicon Valley and California tech companies minimize duty exposure.',
    tariffIssues: ['Section 301 Lists 1-3', 'Semiconductor tariffs', 'Tech component duties', 'CHIPS Act implications'],
    link: '/san-jose-tech-export-controls',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Automotive & Parts',
    description: 'Auto parts from Mexico face 25% tariffs without USMCA. EV batteries from China face even higher rates. We ensure proper qualification.',
    tariffIssues: ['USMCA rules of origin', 'Section 232 steel/aluminum', 'EV battery tariffs', 'Parts classification'],
    link: '/los-angeles-automotive-tariff',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Apparel & Fashion',
    description: 'Textiles, footwear, and fashion goods from China face substantial tariffs. We help LA fashion district and apparel importers find solutions.',
    tariffIssues: ['Section 301 Lists 3-4', 'Textile quotas', 'Country of origin', 'Substantial transformation'],
    link: '/los-angeles-fashion-tariff',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-500',
  },
  {
    title: 'Agriculture & Food',
    description: 'California agricultural importers face complex tariff structures. We help with HTS classification, quotas, and agricultural exemptions.',
    tariffIssues: ['Agricultural tariff exemptions', 'USMCA agricultural rules', 'Quota management', 'Food safety compliance'],
    link: '/fresno-agricultural-equipment-tariff',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-500',
  },
  {
    title: 'Steel, Aluminum & Metals',
    description: 'Section 232 tariffs at 50% on steel and aluminum impact California manufacturers. We help with exclusions and alternative sourcing.',
    tariffIssues: ['Section 232 exclusions', '50% steel tariffs', 'Aluminum duties', 'Copper tariffs 2025'],
    link: '/practice-areas',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-500',
  },
  {
    title: 'Maritime & Port Logistics',
    description: 'China-linked port equipment faces maritime tariffs. We help California port operators and logistics companies navigate new duties.',
    tariffIssues: ['Maritime Section 301', 'Port equipment tariffs', 'Ship-to-shore cranes', 'Logistics compliance'],
    link: '/long-beach-maritime-tariff',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-500',
  },
];

// California port locations
const californiaPortLocations = [
  { name: 'Los Angeles', link: '/los-angeles-port-customs-attorney', description: 'Largest U.S. port by volume' },
  { name: 'Long Beach', link: '/long-beach-port-attorney', description: 'Second largest U.S. port' },
  { name: 'Oakland', link: '/port-of-oakland-tariff', description: 'Major Bay Area gateway' },
  { name: 'San Diego', link: '/san-diego-customs-lawyer', description: 'U.S.-Mexico border trade' },
];

const TariffPracticeHubPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useMeta({
    title: 'Tariff Lawyer California | 2025 Tariff Defense & Mitigation | Trembach Law',
    description: 'California tariff lawyer specializing in Section 301, Section 232, USMCA, and 2025 Trump tariffs. Expert tariff classification, exclusion requests, duty mitigation. Free consultation (310) 744-1328.',
    keywords: 'tariff lawyer california, tariff attorney, section 301 tariff lawyer, section 232 attorney, trump tariff lawyer 2025, china tariff attorney california, tariff classification lawyer, tariff mitigation, duty reduction attorney, customs tariff lawyer, california tariff defense, import tariff attorney, tariff exclusion lawyer, USMCA tariff attorney, reciprocal tariff lawyer',
    canonical: 'tariff-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-tariffs.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'California Tariff Lawyer - Expert Tariff Defense & Duty Mitigation',
        description: 'Comprehensive tariff legal services for California importers: Section 301 China tariffs, Section 232 steel/aluminum, USMCA qualification, tariff classification, and 2025 Trump tariff defense.',
        url: `${siteConfig.siteUrl}/tariff-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Practice Areas', url: `${siteConfig.siteUrl}/practice-areas` },
        { name: 'Tariff Lawyer', url: `${siteConfig.siteUrl}/tariff-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'What types of tariffs affect California businesses in 2025?',
          answer: 'California businesses face multiple tariff regimes in 2025: Section 301 tariffs on China (25-100%+), Section 232 tariffs on steel/aluminum/copper (25-50%), reciprocal tariffs (10-50%), and new IEEPA emergency tariffs. Our tariff lawyers help navigate all these duty programs and develop mitigation strategies.',
        },
        {
          question: 'How can a tariff lawyer help reduce my import duties?',
          answer: 'Our tariff lawyers employ multiple strategies: (1) HTS classification optimization for lower duty rates, (2) tariff exclusion requests, (3) USMCA qualification for Mexico/Canada goods, (4) first sale valuation, (5) supply chain restructuring, (6) tariff engineering, (7) duty drawback claims, and (8) Foreign Trade Zone operations.',
        },
        {
          question: 'What is Section 301 and how does it affect Chinese imports?',
          answer: 'Section 301 authorizes the U.S. to impose tariffs in response to unfair trade practices. Since 2018, the U.S. has imposed 7.5-100% additional tariffs on over $370 billion of Chinese imports. These tariffs stack on top of normal duties. Our Section 301 lawyers help with classification analysis, exclusion requests, and supply chain restructuring.',
        },
        {
          question: 'Can I get a refund on tariffs I\'ve already paid?',
          answer: 'Yes, in certain circumstances. If the Supreme Court rules IEEPA tariffs unconstitutional, refunds may be available. We also help with duty drawback (99% refund on exported goods), post-entry amendments for misclassification, and protests for incorrect duty assessments.',
        },
        {
          question: 'How long does it take to get a tariff exclusion?',
          answer: 'When exclusion processes are open, USTR typically provides 30-45 days to file requests. Review and decision can take 6-12+ months. We monitor exclusion process announcements and can mobilize applications within 24-48 hours of USTR announcements.',
        },
      ]),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredArticles = activeCategory === 'all'
    ? tariffArticles
    : tariffArticles.filter(a => a.category === activeCategory);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="Tariff Lawyer Hub Hero">
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
          <h1>California Tariff Lawyer<br />Expert Tariff Defense & Mitigation</h1>
          <p className="hero-subtitle">
            Navigate the complex 2025 tariff landscape with California's dedicated tariff law practice. From Section 301 China tariffs to USMCA qualification, we provide strategic legal solutions that reduce duty costs and protect your supply chain.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Tariff Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Tariff Expertise Matters Now */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Why Tariff Expertise Matters Now
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              The 2025 trade policy landscape represents the most significant tariff changes in decades. California importers face <strong>unprecedented duty rates</strong> that can make or break profitability.
            </p>
          </div>

          {/* Current Tariff Rates Dashboard */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond">China Tariffs</h3>
              <p className="text-3xl font-bold text-red-600 mb-2">25-100%+</p>
              <p className="text-text-secondary text-sm">
                Section 301 + IEEPA tariffs on Chinese imports. Most products face 25%+ additional duties.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond">Steel & Aluminum</h3>
              <p className="text-3xl font-bold text-orange-600 mb-2">50%</p>
              <p className="text-text-secondary text-sm">
                Section 232 tariffs doubled to 50% in 2025. Applies to most steel and aluminum products.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond">Mexico & Canada</h3>
              <p className="text-3xl font-bold text-yellow-600 mb-2">25%</p>
              <p className="text-text-secondary text-sm">
                Non-USMCA qualifying goods face 25% tariffs. Proper certification is critical.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond">Reciprocal Tariffs</h3>
              <p className="text-3xl font-bold text-purple-600 mb-2">10-50%</p>
              <p className="text-text-secondary text-sm">
                Universal baseline tariffs matching what partners charge U.S. exports.
              </p>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-primary-navy/5 p-8 rounded-lg border-l-4 border-primary-navy">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Our Tariff Practice Difference</h3>
                <p className="text-text-secondary leading-relaxed">
                  Trembach Law Firm's tariff practice combines <strong>deep technical expertise</strong> in HTS classification with <strong>strategic business thinking</strong>. We don't just explain tariff rules—we develop actionable strategies that can reduce your duty costs by <strong>30-70%</strong>.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link to="/attorney-profile" className="inline-flex items-center text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                  <span>Meet Our Tariff Attorney</span>
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Comprehensive Tariff Legal Services
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Our tariff practice covers every aspect of customs duty law. From classification disputes to exclusion requests, we provide the legal expertise California importers need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tariffServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group relative overflow-hidden bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-primary-navy mb-2 font-garamond group-hover:text-secondary-teal transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Tariff Expertise */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Industry-Specific Tariff Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Different industries face unique tariff challenges. Our attorneys have deep experience in the specific tariff issues affecting California's key sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryExpertise.map((industry, index) => (
              <Link
                key={index}
                to={industry.link}
                className={`group relative overflow-hidden ${industry.bgColor} p-6 rounded-lg border-l-4 ${industry.borderColor} hover:shadow-lg transition-all duration-300`}
              >
                <h3 className="text-xl font-bold text-primary-navy mb-3 font-garamond group-hover:text-secondary-teal transition-colors">
                  {industry.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {industry.description}
                </p>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-primary-navy uppercase tracking-wide">Key Tariff Issues:</p>
                  <ul className="space-y-1">
                    {industry.tariffIssues.map((issue, i) => (
                      <li key={i} className="text-xs text-text-secondary flex items-center">
                        <span className="w-1.5 h-1.5 bg-secondary-teal rounded-full mr-2"></span>
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Tariff Insights & Analysis */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Latest Tariff Insights & Analysis
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Stay informed on the latest tariff developments with our expert analysis and strategic guidance.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['all', 'Section 301', 'Section 232', 'Trade Policy', 'Litigation'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-navy text-white'
                    : 'bg-white text-primary-navy hover:bg-primary-navy/10'
                }`}
              >
                {cat === 'all' ? 'All Topics' : cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/article/${article.id}`}
                className="group relative overflow-hidden bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-secondary-teal/10 text-secondary-teal px-2 py-1 rounded text-xs font-medium">
                    {article.category}
                  </span>
                  <span className="text-xs text-text-secondary">{article.readTime} read</span>
                </div>
                <h3 className="text-lg font-bold text-primary-navy mb-2 font-garamond group-hover:text-secondary-teal transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-xs text-text-secondary">{article.date}</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center">
            <Link
              to="/news"
              className="inline-flex items-center text-secondary-teal hover:text-primary-navy font-medium transition-colors"
            >
              <span>View All Tariff News & Insights</span>
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Tariff Resources & Guides */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Tariff Resources & Compliance Guides
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Section 301 Guide */}
            <Link
              to="/resources/section-301-tariffs-guide"
              className="group relative overflow-hidden bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl border-2 border-red-200 hover:border-red-400 transition-all"
            >
              <div className="text-red-600 text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">
                Section 301 Tariffs Guide
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Complete guide to Section 301 China tariffs: Lists 1-4 coverage, exclusion strategies, mitigation tactics, and compliance requirements.
              </p>
              <span className="inline-flex items-center text-red-600 font-medium group-hover:translate-x-2 transition-transform">
                Read Guide
                <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Tariff Classification Guide */}
            <Link
              to="/resources/tariffs-duties-classification"
              className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all"
            >
              <div className="text-blue-600 text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">
                HTS Classification Guide
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Master tariff classification: HTS methodology, binding rulings, valuation methods, and classification optimization strategies.
              </p>
              <span className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                Read Guide
                <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* 2025 Trump Tariffs */}
            <Link
              to="/trump-2025-tariff-attorney"
              className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all"
            >
              <div className="text-purple-600 text-4xl mb-4">🇺🇸</div>
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">
                2025 Trump Tariffs Guide
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Navigate the 2025 reciprocal tariffs, IEEPA emergency duties, and new tariffs on China, Mexico, and Canada.
              </p>
              <span className="inline-flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform">
                Read Guide
                <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* California Port Coverage */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              California Port Coverage
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              We serve importers at all major California ports, providing on-the-ground expertise where tariff issues occur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {californiaPortLocations.map((port) => (
              <Link
                key={port.name}
                to={port.link}
                className="group relative overflow-hidden bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-neutral-200"
              >
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-secondary-teal mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-lg font-bold text-primary-navy font-garamond group-hover:text-secondary-teal transition-colors">
                    Port of {port.name}
                  </h3>
                </div>
                <p className="text-sm text-text-secondary">{port.description}</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* All California Locations Link */}
          <div className="text-center">
            <Link
              to="/california-locations"
              className="inline-flex items-center text-secondary-teal hover:text-primary-navy font-medium transition-colors"
            >
              <span>View All 83+ California Service Areas</span>
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Related California Locations */}
      <RelatedCityPages currentCity="California" region="california" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Get Your Free Tariff Analysis
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our California tariff attorneys today for a complimentary analysis of your tariff exposure. We'll identify savings opportunities and develop a strategic mitigation plan tailored to your business.
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

export default TariffPracticeHubPage;
