import React, { useEffect } from 'react';
import { useMeta } from '../hooks/useMeta';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/seo';
import EvaluationForm from '../components/EvaluationForm';

const Section301TariffsGuidePage: React.FC = () => {
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
    title: 'Section 301 Tariffs CA | China Trade Duties & Mitigation',
    description: 'Complete Section 301 tariffs guide for California importers: Lists 1-4 coverage, exclusion strategies, HTS classification optimization, first sale valuation, supply chain restructuring, tariff engineering. Expert China trade compliance from international trade attorneys. $370B+ goods affected.',
    canonical: 'resources/section-301-tariffs-guide',
    ogType: 'article',
    schema: [
      generateWebPageSchema({
        title: 'Section 301 Tariffs Guide - Trembach Law Firm',
        description: 'Comprehensive guide to Section 301 China tariffs, mitigation strategies, and compliance for California importers.',
        url: 'resources/section-301-tariffs-guide',
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: '' },
        { name: 'Resources', url: 'resources' },
        { name: 'Section 301 Tariffs Guide', url: 'resources/section-301-tariffs-guide' },
      ]),
    ],
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="Section 301 Tariffs Guide Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1920&auto=format&fit=crop"
            alt=""
            role="presentation"
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
            className="hero-bg-image"
          />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>

        <div className="container">
          <h1>Section 301 Tariffs Guide</h1>
          <p className="hero-subtitle">
            Strategic compliance and mitigation for California importers navigating China trade tariffs
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => scrollToSection('overview')} className="hero-cta">Learn More</button>
            <a href="#schedule-consultation" className="hero-cta-outline">Get Expert Help</a>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 px-4 bg-gray-50 border-b border-gray-200">
        <div className="container-custom max-w-5xl">
          <h2 className="text-xl font-bold text-primary-navy mb-4 text-center">Jump to Section</h2>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <button onClick={() => scrollToSection('overview')} className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-primary-navy hover:text-secondary-teal font-medium cursor-pointer">What is Section 301?</button>
            <button onClick={() => scrollToSection('lists')} className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-primary-navy hover:text-secondary-teal font-medium cursor-pointer">Lists 1-4 Breakdown</button>
            <button onClick={() => scrollToSection('applicability')} className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-primary-navy hover:text-secondary-teal font-medium cursor-pointer">Is My Product Covered?</button>
            <button onClick={() => scrollToSection('mitigation')} className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-primary-navy hover:text-secondary-teal font-medium cursor-pointer">Mitigation Strategies</button>
            <button onClick={() => scrollToSection('exclusions')} className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-primary-navy hover:text-secondary-teal font-medium cursor-pointer">Exclusions Process</button>
            <button onClick={() => scrollToSection('compliance')} className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-primary-navy hover:text-secondary-teal font-medium cursor-pointer">Compliance Best Practices</button>
          </div>
        </div>
      </section>

      {/* Last Updated Timestamp */}
      <div className="py-4 px-4 bg-white border-b border-gray-100">
        <div className="container-custom max-w-4xl">
          <p className="text-sm text-gray-500 text-center">
            <span className="font-semibold text-primary-navy">Last Updated:</span> <time dateTime="2025-11-25">November 25, 2025</time>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <article className="py-12 px-4">
        <div className="container-custom max-w-4xl prose prose-lg">

          {/* Section 1: Overview */}
          <section id="overview" className="mb-16">
            <h2 className="text-3xl font-bold text-primary-navy mb-6 font-garamond">What are Section 301 Tariffs?</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Section 301 of the Trade Act of 1974 authorizes the U.S. Trade Representative (USTR) to investigate foreign trade practices and impose retaliatory tariffs when foreign countries engage in unfair trade practices that harm U.S. commerce. Beginning in 2018, USTR imposed <strong>additional tariffs ranging from 7.5% to 100%</strong> on over <strong>$370 billion worth of Chinese imports</strong> across four separate Lists, in response to China's acts, policies, and practices related to technology transfer, intellectual property, and innovation.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Critical Understanding for California Importers</h3>
              <p className="text-gray-800 mb-2">
                Section 301 tariffs are <strong>additional duties imposed on top of regular customs duties.</strong> These are not replacements - they stack on top of normal tariff rates.
              </p>
              <p className="text-gray-700 text-sm mb-3">
                <strong>Example:</strong> Widget classified under HTS 8501.10.40 normally has 2.5% duty rate. If Widget is also subject to List 3 Section 301 tariffs at 25%, the total duty is 27.5% (2.5% + 25%).
              </p>
              <p className="text-gray-800 font-semibold">
                For California importers bringing high volumes from China, Section 301 can <strong>double or triple total duty costs</strong>, fundamentally impacting profitability and competitiveness.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-primary-navy mt-8 mb-4">Legislative Background and Trade War Context</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              USTR's Section 301 investigation, initiated in August 2017, found that China engages in four categories of unfair acts, policies, and practices:
            </p>

            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Technology Transfer Requirements:</strong> Forcing U.S. companies to transfer technology to Chinese entities as condition of market access</li>
              <li><strong>Discriminatory Licensing:</strong> Imposing unfair terms and conditions on U.S. companies' licensing of technology to Chinese entities</li>
              <li><strong>State-Directed Investment:</strong> Directing systematic investment in U.S. companies to acquire cutting-edge technologies and intellectual property</li>
              <li><strong>Cyber Intrusions:</strong> Conducting or supporting unauthorized cyber intrusions into U.S. commercial networks to steal trade secrets</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              In response to these findings, USTR imposed Section 301 tariffs in four tranches between July 2018 and September 2019, covering an estimated $370+ billion in annual Chinese imports. Despite negotiations including the Phase One Agreement in January 2020, most Section 301 tariffs remain in effect as of 2025, with periodic reviews and modifications.
            </p>

            <h3 className="text-2xl font-bold text-primary-navy mt-8 mb-4">Current Status and Enforcement</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Section 301 tariffs are administered by U.S. Customs and Border Protection (CBP) at the time of import entry. CBP automatically applies Section 301 duties based on:
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-3">1.</span>
                  <div>
                    <strong className="text-primary-navy">Product Classification:</strong> HTS 10-digit classification determines if product falls within covered subheadings
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-3">2.</span>
                  <div>
                    <strong className="text-primary-navy">Country of Origin:</strong> Must be Chinese-origin goods (substantial transformation in China or "Made in China")
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold mr-3">3.</span>
                  <div>
                    <strong className="text-primary-navy">Exclusion Status:</strong> Whether product has obtained product-specific exclusion (if exclusion process is active)
                  </div>
                </li>
              </ol>
            </div>

            <p className="text-gray-700 leading-relaxed">
              For California importers, the Ports of Los Angeles, Long Beach, Oakland, and San Diego handle the majority of Chinese imports and have sophisticated systems to identify and collect Section 301 duties. Misclassification or incorrect origin declarations to avoid Section 301 exposure can result in: duty underpayment, penalties, interest, and potential fraud investigations.
            </p>
          </section>

          {/* Section 2: Lists Breakdown */}
          <section id="lists" className="mb-16">
            <h2 className="text-3xl font-bold text-primary-navy mb-6 font-garamond">Section 301 Lists 1-4: Complete Breakdown</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Section 301 tariffs were imposed in four separate actions, each covering different products and duty rates. Understanding which List covers your products is critical for cost calculation and mitigation strategies.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-600">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-primary-navy">List 1</h3>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">25%</span>
                </div>
                <p className="text-sm text-gray-600 mb-3"><strong>Effective:</strong> July 6, 2018 | <strong>HTS Lines:</strong> ~818 | <strong>Value:</strong> ~$34 billion</p>

                <div className="mb-4">
                  <p className="text-gray-700 mb-2"><strong>Covered Products:</strong></p>
                  <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                    <li>Industrial machinery and equipment</li>
                    <li>Electronics and electrical equipment</li>
                    <li>Aerospace and automotive parts</li>
                    <li>Medical devices and instruments</li>
                    <li>Nuclear reactors and boilers</li>
                    <li>Plastics and rubber products</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded">
                  <p className="text-sm text-gray-800"><strong>Strategy Note:</strong> List 1 targets capital goods and intermediate products essential to advanced manufacturing. Challenging to source outside China for many specialized items.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-600">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-primary-navy">List 2</h3>
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">25%</span>
                </div>
                <p className="text-sm text-gray-600 mb-3"><strong>Effective:</strong> August 23, 2018 | <strong>HTS Lines:</strong> ~279 | <strong>Value:</strong> ~$16 billion</p>

                <div className="mb-4">
                  <p className="text-gray-700 mb-2"><strong>Covered Products:</strong></p>
                  <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                    <li>Semiconductors and electronic components</li>
                    <li>Chemical products</li>
                    <li>Railway and transportation equipment</li>
                    <li>Motorcycles and parts</li>
                    <li>Industrial intermediates</li>
                    <li>Certain machinery and mechanical appliances</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded">
                  <p className="text-sm text-gray-800"><strong>Strategy Note:</strong> List 2 continues focus on industrial and high-tech products. Many overlap with List 1 categories, extending coverage depth.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-600">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-primary-navy">List 3</h3>
                  <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold">25%</span>
                </div>
                <p className="text-sm text-gray-600 mb-3"><strong>Effective:</strong> September 24, 2018 | <strong>HTS Lines:</strong> ~5,700+ | <strong>Value:</strong> ~$200 billion</p>

                <div className="mb-4">
                  <p className="text-gray-700 mb-2"><strong>Covered Products (Extremely Broad):</strong></p>
                  <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                    <li>Consumer electronics and computers</li>
                    <li>Furniture and home goods</li>
                    <li>Handbags, luggage, and leather goods</li>
                    <li>Lighting and lamps</li>
                    <li>Auto parts and accessories</li>
                    <li>Building materials and construction products</li>
                    <li>Food products and agricultural goods</li>
                    <li>Textiles and fabrics</li>
                    <li>Sporting goods and recreational equipment</li>
                    <li>Tools and hardware</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded">
                  <p className="text-sm text-gray-800"><strong>Strategy Note:</strong> List 3 is BY FAR the most extensive, covering most consumer goods and many industrial products. Highest impact on California importers. Most exclusion requests historically focused on List 3 products.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-primary-navy">List 4A & 4B</h3>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">7.5%</span>
                </div>
                <p className="text-sm text-gray-600 mb-3"><strong>Effective:</strong> Sept 1, 2019 (4A) / Dec 15, 2019 (4B) | <strong>HTS Lines:</strong> ~3,800+ | <strong>Value:</strong> ~$120 billion</p>

                <div className="mb-4">
                  <p className="text-gray-700 mb-2"><strong>Covered Products:</strong></p>
                  <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                    <li><strong>List 4A:</strong> Apparel and footwear, consumer goods, textiles</li>
                    <li><strong>List 4B:</strong> Cell phones and laptops, toys, video games, certain clothing and footwear</li>
                    <li>Electronics accessories</li>
                    <li>Home appliances and goods</li>
                    <li>Sports equipment</li>
                    <li>Holiday decorations</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded">
                  <p className="text-sm text-gray-800 mb-2"><strong>Strategy Note:</strong> List 4 targets remaining consumer goods not covered by Lists 1-3, including highly visible consumer products. Lower rate (7.5%) reflects Phase One Agreement de-escalation from original 15%.</p>
                  <p className="text-sm text-red-700 font-semibold">Important: List 4B was originally scheduled for Dec 15, 2019, but implementation was suspended. However, portions were later implemented. Verify specific HTS applicability carefully.</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">California Importer Impact Analysis</h3>
              <p className="text-gray-800 mb-3">
                For typical California import portfolio from China:
              </p>
              <ul className="text-gray-700 list-disc pl-5 space-y-2">
                <li><strong>Electronics importers:</strong> 60-80% of products likely covered by Lists 1-3 (25% additional duty)</li>
                <li><strong>Consumer goods importers:</strong> 70-90% of products likely covered by Lists 3-4 (7.5-25% additional duty)</li>
                <li><strong>Industrial equipment importers:</strong> 50-70% of products likely covered by Lists 1-2 (25% additional duty)</li>
                <li><strong>Apparel/footwear importers:</strong> 80-95% of products likely covered by Lists 3-4A (7.5-25% additional duty)</li>
              </ul>
              <p className="text-gray-800 mt-3 font-semibold">
                Total additional duty exposure can range from $500,000 to $10M+ annually for mid-sized importers, making mitigation strategies business-critical.
              </p>
            </div>
          </section>

          {/* Section 3: Applicability */}
          <section id="applicability" className="mb-16">
            <h2 className="text-3xl font-bold text-primary-navy mb-6 font-garamond">Is My Product Subject to Section 301 Tariffs?</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Determining Section 301 applicability requires careful analysis of three factors: HTS classification, country of origin, and exclusion status. Errors in any factor can result in duty underpayment or overpayment.
            </p>

            <h3 className="text-2xl font-bold text-primary-navy mb-4">Step-by-Step Applicability Analysis</h3>

            <div className="space-y-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary-teal">
                <h4 className="text-lg font-bold text-primary-navy mb-3">Step 1: Verify HTS Classification</h4>
                <p className="text-gray-700 mb-3">
                  Each Section 301 List specifies covered products by 8-digit or 10-digit HTS subheading. Your product's HTS classification determines List coverage.
                </p>
                <p className="text-sm text-gray-600 mb-2"><strong>Analysis Process:</strong></p>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Obtain correct 10-digit HTS classification for your product (review CBP binding rulings, consult customs attorneys if uncertain)</li>
                  <li>Check HTS classification against each List's Annex using USTR published Federal Register notices</li>
                  <li>Use CBP's online Section 301 tool to verify current applicability</li>
                  <li>Note: Some HTS subheadings are partially covered (specific products within broader classification) - review product descriptions carefully</li>
                </ul>
                <div className="mt-3 bg-teal-50 p-3 rounded">
                  <p className="text-sm text-gray-800"><strong>Classification Risk:</strong> Even minor classification differences can mean presence/absence of 25% additional duty. Small product modifications or reclassification can potentially avoid Section 301 coverage.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary-teal">
                <h4 className="text-lg font-bold text-primary-navy mb-3">Step 2: Determine Country of Origin</h4>
                <p className="text-gray-700 mb-3">
                  Section 301 tariffs apply ONLY to Chinese-origin goods. Country of origin determination is critical and often complex for multi-country supply chains.
                </p>
                <p className="text-sm text-gray-600 mb-2"><strong>Origin Rules for Section 301:</strong></p>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li><strong>Wholly obtained in China:</strong> Product entirely produced/manufactured in China = Chinese origin</li>
                  <li><strong>Substantial transformation in China:</strong> If materials from multiple countries, country where product underwent "substantial transformation" (creation of new and different article) is origin</li>
                  <li><strong>Assembly vs. Manufacturing:</strong> Simple assembly may not constitute substantial transformation - origin may remain country of component manufacture</li>
                  <li><strong>Third-country processing:</strong> Chinese materials/components processed in third country (Vietnam, Mexico, etc.) - analyze whether third-country processing was substantial transformation</li>
                </ul>
                <div className="mt-3 bg-teal-50 p-3 rounded">
                  <p className="text-sm text-gray-800"><strong>�Mitigation Opportunity:</strong> For goods processed in multiple countries, careful origin analysis may demonstrate non-Chinese origin despite Chinese inputs. Obtain CBP binding origin rulings for certainty.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary-teal">
                <h4 className="text-lg font-bold text-primary-navy mb-3">Step 3: Check Exclusion Status</h4>
                <p className="text-gray-700 mb-3">
                  USTR has periodically opened product-specific exclusion processes allowing importers to request exemption from Section 301 tariffs for specific products.
                </p>
                <p className="text-sm text-gray-600 mb-2"><strong>Exclusion Process Status:</strong></p>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Exclusion processes have opened and closed multiple times since 2018</li>
                  <li>As of 2025, verify current exclusion process status on USTR website</li>
                  <li>Previously granted exclusions have largely expired (most had 1-year duration with some extensions)</li>
                  <li>New exclusion processes may open - monitor USTR Federal Register notices</li>
                </ul>
                <div className="mt-3 bg-amber-50 p-3 rounded border border-amber-200">
                  <p className="text-sm text-gray-800"><strong>�Current Status Note:</strong> Most historical exclusions have expired. If exclusion process reopens, immediate filing is critical as review can take 6-12+ months. We assist with exclusion requests including economic analysis and legal advocacy.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Common Applicability Scenarios</h3>

              <div className="space-y-4 text-sm">
                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-bold text-gray-800 mb-2">�Scenario 1: Direct Chinese Import</p>
                  <p className="text-gray-700 mb-1"><strong>Facts:</strong> Electronic component manufactured entirely in China, HTS 8504.40.95, imported directly from Chinese factory</p>
                  <p className="text-gray-700"><strong>Result:</strong> Subject to Section 301 List 3 (25%) if HTS 8504.40.95 is on List 3 Annex</p>
                </div>

                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-bold text-gray-800 mb-2">�Scenario 2: Third-Country Assembly</p>
                  <p className="text-gray-700 mb-1"><strong>Facts:</strong> Chinese-made fabric shipped to Vietnam, cut and sewn into finished apparel in Vietnam, imported from Vietnam</p>
                  <p className="text-gray-700"><strong>Result:</strong> Likely Vietnamese origin (substantial transformation) - NOT subject to Section 301 despite Chinese inputs</p>
                </div>

                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-bold text-gray-800 mb-2">�Scenario 3: Transshipment</p>
                  <p className="text-gray-700 mb-1"><strong>Facts:</strong> Finished Chinese goods shipped through Vietnam with minor repackaging, declared as Vietnamese origin</p>
                  <p className="text-gray-700 text-red-700"><strong>Result:</strong> Chinese origin (no substantial transformation) - Subject to Section 301 + penalties for false origin declaration</p>
                </div>

                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-bold text-gray-800 mb-2">? Scenario 4: Complex Multi-Country Production</p>
                  <p className="text-gray-700 mb-1"><strong>Facts:</strong> Raw materials from Taiwan, processed into components in China, assembled into finished product in Malaysia</p>
                  <p className="text-gray-700"><strong>Result:</strong> Requires substantial transformation analysis - Malaysian assembly must create "new and different article" to be Malaysian origin. If assembly is minor, origin may be Chinese (Section 301 applicable). <strong>Binding ruling recommended.</strong></p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Mitigation Strategies */}
          <section id="mitigation" className="mb-16">
            <h2 className="text-3xl font-bold text-primary-navy mb-6 font-garamond">Section 301 Mitigation Strategies</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              For California importers facing substantial Section 301 exposure, comprehensive mitigation strategies can reduce duty costs by 30-70%. The most effective approach combines multiple strategies tailored to your specific product portfolio and supply chain.
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">8 Proven Section 301 Mitigation Strategies</h3>
                <p className="text-green-100">Comprehensive approaches to reduce China tariff exposure</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-3">
                  <span className="text-3xl font-bold text-green-600 mr-4">1</span>
                  <div>
                    <h4 className="text-xl font-bold text-primary-navy mb-3">HTS Classification Optimization</h4>
                    <p className="text-gray-700 mb-3">
                      Review product classifications to determine if alternative, compliant HTS classifications exist that are not subject to Section 301.
                    </p>
                    <div className="bg-gray-50 p-4 rounded mb-3">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Strategy Implementation:</p>
                      <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                        <li>Conduct comprehensive classification review of all Chinese imports</li>
                        <li>Analyze product specifications against multiple potential HTS subheadings</li>
                        <li>Identify "border classifications" where small product modifications could shift HTS code</li>
                        <li>Request binding classification rulings from CBP for certainty</li>
                        <li>Document rationale for classification changes to demonstrate good faith</li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      <strong>Savings Potential:</strong> Can eliminate 7.5-25% additional duty if product qualifies for non-covered HTS classification. Strategic reclassification analysis identifies duty reduction opportunities for California importers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-3">
                  <span className="text-3xl font-bold text-green-600 mr-4">2</span>
                  <div>
                    <h4 className="text-xl font-bold text-primary-navy mb-3">First Sale Valuation</h4>
                    <p className="text-gray-700 mb-3">
                      For multi-tiered transactions (manufacturer �middleman �U.S. importer), use "first sale" valuation to calculate duties on manufacturer's sale price rather than middleman's markup.
                    </p>
                    <div className="bg-gray-50 p-4 rounded mb-3">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Strategy Implementation:</p>
                      <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                        <li>Document multi-tier transaction structure (manufacturer �trading company �importer)</li>
                        <li>Demonstrate manufacturer's sale is bona fide "sale for export to United States"</li>
                        <li>Maintain detailed records of manufacturer pricing, middleman markup, and services provided</li>
                        <li>Calculate duties based on lower first sale price</li>
                        <li>Implement first sale program with CBP audit trail</li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      <strong>Savings Potential:</strong> Reduces dutiable value by 20-40% in typical middleman transactions. Combined with 25% Section 301 rate, can save 5-10% of transaction value. Annual savings: $200K-2M+ for mid-sized importers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-3">
                  <span className="text-3xl font-bold text-green-600 mr-4">3</span>
                  <div>
                    <h4 className="text-xl font-bold text-primary-navy mb-3">Supply Chain Restructuring & Country Diversification</h4>
                    <p className="text-gray-700 mb-3">
                      Shift manufacturing to non-Chinese countries (Vietnam, Thailand, Mexico, India, etc.) to avoid Section 301 entirely.
                    </p>
                    <div className="bg-gray-50 p-4 rounded mb-3">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Strategy Implementation:</p>
                      <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                        <li>Evaluate alternative manufacturing locations based on: labor costs, manufacturing capability, logistics, tariff treatment</li>
                        <li>Develop relationships with non-Chinese suppliers</li>
                        <li>Conduct factory audits to verify quality and capacity</li>
                        <li>Phase transition over 6-24 months to manage risk</li>
                        <li>For USMCA countries (Mexico/Canada), can achieve duty-free treatment + avoid Section 301</li>
                      </ul>
                    </div>
                    <p className="text-sm text-red-700 font-semibold mb-2">
                      Critical Compliance Warning: Ensure genuine substantial transformation occurs in new country. Simply routing Chinese goods through third country without meaningful processing is transshipment (illegal) and results in severe penalties.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      <strong>Savings Potential:</strong> Eliminates 7.5-25% Section 301 duty. Potential to achieve duty-free treatment with USMCA or other FTAs. Long-term solution with greatest savings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-3">
                  <span className="text-3xl font-bold text-green-600 mr-4">4</span>
                  <div>
                    <h4 className="text-xl font-bold text-primary-navy mb-3">Tariff Engineering & Product Modification</h4>
                    <p className="text-gray-700 mb-3">
                      Modify products to shift HTS classification to non-covered subheading while maintaining product functionality and market appeal.
                    </p>
                    <div className="bg-gray-50 p-4 rounded mb-3">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Strategy Implementation:</p>
                      <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                        <li>Analyze classification criteria (material composition, function, construction method)</li>
                        <li>Identify minor modifications that shift classification (e.g., change primary material, add/remove features)</li>
                        <li>Model classification impact using GRI (General Rules of Interpretation)</li>
                        <li>Coordinate with manufacturer to implement product changes</li>
                        <li>Obtain binding ruling confirming new classification</li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      <strong>Savings Potential:</strong> Can eliminate 7.5-25% Section 301 duty. Particularly effective for products near classification boundaries. Requires careful legal analysis and product development coordination.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-3">
                  <span className="text-3xl font-bold text-green-600 mr-4">5</span>
                  <div>
                    <h4 className="text-xl font-bold text-primary-navy mb-3">Drawback Claims for Exported/Destroyed Goods</h4>
                    <p className="text-gray-700 mb-3">
                      Recover 99% of Section 301 duties paid on goods that are subsequently exported or destroyed, or used to manufacture exported products.
                    </p>
                    <div className="bg-gray-50 p-4 rounded mb-3">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Strategy Implementation:</p>
                      <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                        <li>Track imported goods used in manufacturing for export</li>
                        <li>File drawback claims within 5 years of import entry</li>
                        <li>Document export or destruction with CBP-approved evidence</li>
                        <li>Use substitution drawback if applicable (can claim on unused/destroyed substituted goods)</li>
                        <li>Implement drawback compliance program for recurring claims</li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      <strong>Savings Potential:</strong> Recovers 99% of Section 301 duties on qualifying transactions. Best for manufacturers who import components and export finished goods, or importers with export/return programs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-3">
                  <span className="text-3xl font-bold text-green-600 mr-4">6</span>
                  <div>
                    <h4 className="text-xl font-bold text-primary-navy mb-3">Foreign Trade Zones (FTZ)</h4>
                    <p className="text-gray-700 mb-3">
                      Import goods into Foreign Trade Zone to defer or reduce duty obligations through manufacturing, processing, or strategic duty rate selection.
                    </p>
                    <div className="bg-gray-50 p-4 rounded mb-3">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Strategy Implementation:</p>
                      <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                        <li>Establish FTZ operation at California ports (LA, Long Beach, Oakland all have active FTZs)</li>
                        <li>Import goods into FTZ in "privileged foreign status" (duties deferred until goods enter U.S. commerce)</li>
                        <li>Manufacture/process goods in FTZ - pay duties only on finished product (inverted tariff benefit if finished rate lower than component rate)</li>
                        <li>Export directly from FTZ without paying duties</li>
                        <li>Strategically time entry into U.S. commerce to manage cash flow</li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      <strong>Savings Potential:</strong> Inverted tariff benefit can eliminate/reduce Section 301 exposure if finished goods have lower rate than components. Cash flow benefit from deferral. Requires significant operational commitment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-3">
                  <span className="text-3xl font-bold text-green-600 mr-4">7</span>
                  <div>
                    <h4 className="text-xl font-bold text-primary-navy mb-3">Binding Rulings for Origin & Classification</h4>
                    <p className="text-gray-700 mb-3">
                      Obtain CBP binding rulings on classification and country of origin to ensure certainty and protect against future challenges.
                    </p>
                    <div className="bg-gray-50 p-4 rounded mb-3">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Strategy Implementation:</p>
                      <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                        <li>Submit detailed ruling requests with product specifications, manufacturing details, legal analysis</li>
                        <li>Request both classification and origin determinations</li>
                        <li>Binding for 6 years, provides certainty and penalty protection</li>
                        <li>Use rulings to support mitigation strategies (reclassification, origin changes)</li>
                        <li>Strategic: obtain favorable rulings before implementing supply chain changes</li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      <strong>Savings Potential:</strong> No direct savings, but provides certainty enabling confident implementation of other strategies. Protects against penalties if CBP later challenges positions. Essential for major supply chain investments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-3">
                  <span className="text-3xl font-bold text-green-600 mr-4">8</span>
                  <div>
                    <h4 className="text-xl font-bold text-primary-navy mb-3">Product-Specific Exclusion Requests</h4>
                    <p className="text-gray-700 mb-3">
                      If USTR reopens exclusion process, immediately file exclusion requests for high-volume products demonstrating unavailability outside China, severe economic harm, or lack of China nexus to unfair practices.
                    </p>
                    <div className="bg-gray-50 p-4 rounded mb-3">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Strategy Implementation:</p>
                      <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                        <li>Monitor USTR Federal Register for exclusion process announcements</li>
                        <li>Immediately prepare exclusion requests (typically 30-45 day window)</li>
                        <li>Document: product unavailability from non-Chinese sources, severe economic harm from tariffs, lack of strategic importance to Made in China 2025</li>
                        <li>Respond to objections from domestic industry or other commenters</li>
                        <li>Follow up with USTR on pending requests</li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600 italic mb-2">
                      <strong>Savings Potential:</strong> Complete elimination of Section 301 duty for granted exclusions. Duration typically 1 year (potentially extended). High-value strategy but uncertain/lengthy process (6-12+ months).
                    </p>
                    <p className="text-sm text-amber-700 font-semibold">
                      �Current Status: Most historical exclusions expired. New exclusion process may open in 2025 - we monitor continuously and can mobilize exclusion requests within days of announcement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 mt-8">
              <h3 className="text-xl font-bold text-green-900 mb-3">Comprehensive Mitigation Approach</h3>
              <p className="text-gray-800 mb-3">
                Most effective strategy combines multiple approaches:
              </p>
              <ol className="text-gray-700 list-decimal pl-5 space-y-2">
                <li><strong>Immediate (0-3 months):</strong> HTS classification review, first sale implementation, binding ruling requests</li>
                <li><strong>Short-term (3-12 months):</strong> Tariff engineering, exclusion requests if available, drawback program</li>
                <li><strong>Long-term (12-24 months):</strong> Supply chain restructuring, FTZ operations, country diversification</li>
              </ol>
              <p className="text-gray-800 mt-3 font-semibold">
                Combined strategies can reduce Section 301 exposure by 40-70%, saving $1M-10M+ annually for mid-to-large California importers.
              </p>
            </div>
          </section>

          {/* Section 5: Exclusions */}
          <section id="exclusions" className="mb-16">
            <h2 className="text-3xl font-bold text-primary-navy mb-6 font-garamond">Section 301 Exclusions Process</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              USTR has periodically offered product-specific exclusion processes allowing importers and other interested parties to request exclusions from Section 301 tariffs for specific products. Understanding the exclusion process, criteria, and current status is critical for California importers seeking relief.
            </p>

            <h3 className="text-2xl font-bold text-primary-navy mb-4">Historical Exclusion Processes</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Since 2018, USTR has opened exclusion processes for Lists 1-4A, accepting thousands of exclusion requests. Key characteristics:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Product-specific:</strong> Exclusions granted for specific 10-digit HTS with detailed product descriptions, not broad categories</li>
              <li><strong>Limited duration:</strong> Most exclusions granted for 1 year with some extensions</li>
              <li><strong>Retroactive relief:</strong> Some exclusions provided retroactive duty refunds to date of List implementation</li>
              <li><strong>Expiration:</strong> Most historical exclusions have expired; importers currently pay full Section 301 duties</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary-navy mb-4">Exclusion Request Criteria</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              USTR evaluates exclusion requests based on statutory and policy factors:
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="text-lg font-bold text-primary-navy mb-4">Key Evaluation Factors:</h4>

              <div className="space-y-4">
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">1. Availability of Product from U.S. or Third-Country Sources</h5>
                  <p className="text-sm text-gray-700">
                    Strong exclusion factor: Product not available from non-Chinese sources, or available only at substantially higher cost/lower quality/insufficient capacity. Must provide specific sourcing research and market analysis.
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-gray-800 mb-2">2. Strategic Importance to Made in China 2025</h5>
                  <p className="text-sm text-gray-700">
                    Negative exclusion factor: If product is central to China's Made in China 2025 or other industrial policy programs. USTR less likely to grant exclusion for strategically important products.
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-gray-800 mb-2">3. Severe Economic Harm</h5>
                  <p className="text-sm text-gray-700">
                    Strong exclusion factor: Section 301 tariffs cause severe economic harm to U.S. interests (business closure, significant job loss, consumer price increases). Must provide quantified economic impact analysis.
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-gray-800 mb-2">4. Importance to China Section 301 Investigation</h5>
                  <p className="text-sm text-gray-700">
                    Negative exclusion factor: Product related to unfair acts/practices identified in Section 301 investigation (forced technology transfer, IP theft, etc.).
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-primary-navy mb-4">Preparing Effective Exclusion Requests</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If USTR reopens exclusion process, successful requests require comprehensive evidence and strategic presentation:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 p-5 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h4 className="font-bold text-blue-900 mb-2">Product Description</h4>
                <p className="text-sm text-gray-700">
                  Detailed technical description sufficient to distinguish from similar products. Include: materials, dimensions, specifications, manufacturing process, end use. Precision critical - exclusion granted only for exactly described product.
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h4 className="font-bold text-blue-900 mb-2">Sourcing Analysis</h4>
                <p className="text-sm text-gray-700">
                  Documentation of efforts to source from non-Chinese suppliers: RFQs sent, supplier responses, price comparisons, lead time analysis, quality testing, capacity assessments. Must demonstrate genuine due diligence.
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h4 className="font-bold text-blue-900 mb-2">Economic Impact Analysis</h4>
                <p className="text-sm text-gray-700">
                  Quantified analysis of Section 301 impact: duty cost increase ($), impact on profitability (%), competitive disadvantage, potential job losses, consumer price increases, business viability concerns.
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h4 className="font-bold text-blue-900 mb-2">Made in China 2025 Analysis</h4>
                <p className="text-sm text-gray-700">
                  Explanation of why product is not strategically important to China's industrial policy. For commodity products, emphasize low-tech nature and lack of strategic importance.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Current Exclusion Process Status (2025)</h3>
              <p className="text-gray-800 mb-3">
                As of 2025, verify current exclusion process status:
              </p>
              <ul className="text-gray-700 list-disc pl-5 space-y-2 mb-3">
                <li>Most historical exclusions have expired</li>
                <li>USTR may open new exclusion processes - monitor Federal Register</li>
                <li>If process opens, filing window typically 30-45 days (immediate action required)</li>
                <li>Review and decision process takes 6-12+ months</li>
                <li>Can request expedited review for severe economic hardship</li>
              </ul>
              <p className="text-gray-800 font-semibold">
                �Trembach Law Firm maintains exclusion process monitoring and can mobilize exclusion requests within 24-48 hours of USTR announcement. Contact us to prepare exclusion request packages in advance of next process opening.
              </p>
            </div>
          </section>

          {/* Section 6: Compliance */}
          <section id="compliance" className="mb-16">
            <h2 className="text-3xl font-bold text-primary-navy mb-6 font-garamond">Section 301 Compliance Best Practices</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Proper Section 301 compliance protects against underpayment penalties, CBP audits, and ensures eligibility for any future relief programs. California importers should implement systematic compliance programs addressing classification, origin, and recordkeeping.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary-navy mb-4">Essential Compliance Practices</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-secondary-teal font-bold text-2xl mr-3">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Maintain Accurate HTS Classifications</h4>
                      <p className="text-sm text-gray-700">
                        Conduct periodic classification audits, request binding rulings for high-value/uncertain products, update classifications when products or List coverage changes, document classification rationale.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-secondary-teal font-bold text-2xl mr-3">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Verify Country of Origin</h4>
                      <p className="text-sm text-gray-700">
                        Obtain origin documentation from suppliers, conduct origin analysis for multi-country production, request binding origin rulings, implement supplier certification programs requiring sworn origin declarations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-secondary-teal font-bold text-2xl mr-3">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Monitor Section 301 Updates</h4>
                      <p className="text-sm text-gray-700">
                        Subscribe to USTR Federal Register notices, monitor CBP CSMS messages for Section 301 changes, track List modifications/additions, stay current on exclusion process status, adjust entries promptly when Lists change.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-secondary-teal font-bold text-2xl mr-3">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Maintain Complete Records</h4>
                      <p className="text-sm text-gray-700">
                        Keep 5+ years of: commercial invoices, entry documentation, classification analyses, origin determinations, supplier declarations, exclusion request materials, binding rulings. Organize for efficient CBP audit response.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-secondary-teal font-bold text-2xl mr-3">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Reconcile Entry Data</h4>
                      <p className="text-sm text-gray-700">
                        Periodically reconcile CBP entry data against actual product mix, verify Section 301 HTS flags are correctly applied, identify and correct errors through post-entry amendments or protests, conduct internal audits before CBP audits.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-secondary-teal font-bold text-2xl mr-3">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Train Internal Teams</h4>
                      <p className="text-sm text-gray-700">
                        Educate procurement, supply chain, and logistics teams on Section 301 compliance requirements, implement approval workflows for classification/origin decisions, establish escalation procedures for uncertain situations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-secondary-teal font-bold text-2xl mr-3">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Engage Qualified Customs Broker</h4>
                      <p className="text-sm text-gray-700">
                        Work with experienced customs brokers with Section 301 expertise, ensure broker systems correctly identify and apply Section 301 duties, review broker entries periodically for accuracy, coordinate with broker on classification/origin questions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-secondary-teal font-bold text-2xl mr-3">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Conduct Prior Disclosure if Errors Discovered</h4>
                      <p className="text-sm text-gray-700">
                        If you discover Section 301 underpayments (incorrect classification, origin, or List applicability), consider voluntary prior disclosure to CBP. Benefits: eliminates/reduces penalties, demonstrates good faith. Must be before CBP discovers violation independently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6">
                <h3 className="text-xl font-bold text-red-900 mb-3">Common Section 301 Compliance Violations</h3>
                <p className="text-gray-800 mb-3">Avoid these high-risk errors:</p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span><strong>Misclassification to avoid Section 301:</strong> Using incorrect HTS code to avoid List coverage - severe penalties if discovered</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span><strong>False origin declarations:</strong> Declaring non-Chinese origin for Chinese goods - considered customs fraud, criminal prosecution possible</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span><strong>Transshipment schemes:</strong> Routing Chinese goods through third countries with fake processing - CBP actively investigating, major enforcement priority</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span><strong>Undervaluation:</strong> Artificially lowering declared value to reduce Section 301 duties - customs fraud with criminal penalties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span><strong>Document falsification:</strong> Creating fake origin certificates or manufacturing documentation - criminal violation</span>
                  </li>
                </ul>
                <p className="text-red-900 font-bold mt-4">
                  Penalties for Section 301 violations: duty underpayment + interest + penalties up to domestic value of goods + potential criminal prosecution. For willful violations: up to $500,000 per violation and 20 years imprisonment.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion / CTA */}
          <section className="mt-16 bg-gradient-to-br from-primary-navy to-secondary-teal text-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold mb-4 font-garamond">Expert Section 301 Strategy and Compliance</h2>
            <p className="text-lg mb-6">
              Trembach Law Firm provides comprehensive Section 301 services for California importers, from strategic mitigation planning to compliance implementation and CBP audit defense. Our expertise includes:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-secondary-gold mr-2">✓</span>
                <span><strong>Classification optimization</strong> - strategic HTS analysis and first sale valuation strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-gold mr-2">✓</span>
                <span><strong>Exclusion request preparation</strong> - comprehensive filings for USTR exclusion processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-gold mr-2">✓</span>
                <span><strong>Binding ruling services</strong> - obtain CBP rulings for classification and origin certainty</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-gold mr-2">✓</span>
                <span><strong>Supply chain restructuring guidance</strong> - compliant country diversification strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-gold mr-2">✓</span>
                <span><strong>CBP audit defense</strong> - protecting Section 301 mitigation strategies during enforcement actions</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#schedule-consultation"
                className="inline-block bg-secondary-gold hover:bg-yellow-500 text-primary-navy font-bold py-4 px-8 rounded-lg transition-colors shadow-lg text-center"
              >
                Schedule Section 301 Consultation
              </a>
              <a
                href="#practice-areas"
                className="hero-cta-outline"
              >
                View All Services
              </a>
            </div>
          </section>

        </div>
      </article>

      {/* Evaluation Form */}
      <EvaluationForm theme="light" />
    </div>
  );
};

export default Section301TariffsGuidePage;
