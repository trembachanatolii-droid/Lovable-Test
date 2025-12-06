
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const TariffsClassificationGuidePage: React.FC = () => {
  // Scroll to section function for in-page navigation
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useMeta({
    title: 'HTS Classification CA | AD/CVD | Section 301 Guide',
    description: 'Complete guide: HTS classification, antidumping/countervailing duties, Section 301/232 tariffs, trade remedies, customs valuation. (310) 744-1328.',
    canonical: 'tariffs-duties-classification-guide',
    ogType: 'article',
    ogImage: `${siteConfig.siteUrl}/og-image-tariffs-guide.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Complete Guide to Tariffs, Duties & HTS Classification for California Importers',
        description: 'Educational resource covering HTS classification, antidumping/countervailing duties, Section 301/232 tariffs, trade remedies, and customs valuation for California businesses.',
        url: `${siteConfig.siteUrl}/tariffs-duties-classification-guide`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Resources', url: `${siteConfig.siteUrl}/resources` },
        { name: 'Tariffs & Classification Guide', url: `${siteConfig.siteUrl}/tariffs-duties-classification-guide` }
      ]),
      generateFAQSchema([
        {
          question: 'What is HTS classification and why does it matter in California?',
          answer: 'HTS (Harmonized Tariff Schedule) classification is the process of assigning a 10-digit classification code to imported goods. In California—the nation\'s largest importing state—proper HTS classification determines duty rates, Section 301 tariff applicability, antidumping/countervailing duty orders, and trade remedy exposure. Misclassification can result in CBP penalties under 19 USC § 1592.',
        },
        {
          question: 'What are antidumping and countervailing duties?',
          answer: 'Antidumping (AD) duties are additional tariffs imposed when foreign companies sell goods in the U.S. below fair market value. Countervailing (CVD) duties offset foreign government subsidies. These trade remedies can add 25-400% duties on top of normal tariff rates. California importers must verify whether their products are subject to AD/CVD orders administered by the Department of Commerce.',
        },
        {
          question: 'How do Section 301 tariffs affect California importers?',
          answer: 'Section 301 tariffs (25% additional duties on $370+ billion of Chinese imports) disproportionately impact California due to our state\'s heavy reliance on China trade. These tariffs apply based on HTS classification and country of origin. California importers can mitigate exposure through supply chain diversification, substantial transformation in third countries, FTZ strategies, or product exclusion requests.',
        },
        {
          question: 'What is customs valuation and transfer pricing?',
          answer: 'Customs valuation determines the dutiable value of imported goods under 19 USC § 1401a. For related-party transactions (common among California multinationals), customs valuation intersects with tax transfer pricing. CBP requires importers to demonstrate that transfer prices approximate arm\'s length pricing. Failure to properly value goods can trigger Focused Assessments and penalty proceedings.',
        },
        {
          question: 'What are trade remedies and how can California businesses defend against them?',
          answer: 'Trade remedies include antidumping duties, countervailing duties, Section 201 safeguard measures, and Section 301/232 tariffs. California businesses can defend through: scope rulings (proving products fall outside AD/CVD orders), country of origin changes, successor company arguments, new shipper reviews, and circumvention defense. Legal representation is critical for navigating Department of Commerce and ITC proceedings.',
        },
      ]),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="Tariffs Classification Guide Hero">
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
          <h1>Complete Guide to Tariffs, Duties &<br />HTS Classification California</h1>
          <p className="hero-subtitle">
            Expert insights on HTS classification, antidumping/countervailing duties, Section 301/232 tariffs, trade remedies, and customs valuation for California importers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => scrollToSection('hts-classification')} className="hero-cta">Explore Classification Guide</button>
            <Link to="/contact#schedule-consultation" className="hero-cta-outline">Get Expert Help</Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <p className="text-xl text-text-secondary leading-relaxed mb-6">
            California is the <strong>largest importing state in the nation</strong>, handling over <strong>40% of U.S. containerized imports</strong> through the ports of Los Angeles, Long Beach, and Oakland. For California businesses engaged in international trade, understanding <strong>tariffs, duties, and HTS classification</strong> is critical to controlling costs, maintaining compliance, and avoiding CBP enforcement.
          </p>
          <p className="text-xl text-text-secondary leading-relaxed">
            This comprehensive guide covers the eight key areas every California importer needs to master: <strong>HTS classification, antidumping duties, countervailing duties, Section 301 tariffs, Section 232 tariffs, trade remedies, customs valuation, and transfer pricing</strong>.
          </p>
        </div>
      </section>

      {/* Why This Guide Matters */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Master Tariffs, Duties & Classification
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              California handles over 40% of U.S. containerized imports. Understanding HTS classification, trade remedies, and customs valuation is essential to minimize costs and avoid CBP enforcement actions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">HTS Classification Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Proper classification determines duty rates, Section 301 exposure, and AD/CVD applicability. Learn the General Rules of Interpretation and obtain binding rulings.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Trade Remedies Defense</h3>
              <p className="text-text-secondary leading-relaxed">
                Navigate antidumping duties, countervailing duties, and Section 301/232 tariffs. Understand scope rulings, exclusion requests, and mitigation strategies.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Valuation & Transfer Pricing</h3>
              <p className="text-text-secondary leading-relaxed">
                Master customs valuation methods, related-party transactions, and the intersection of customs valuation with tax transfer pricing to avoid double taxation traps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="space-y-12">

            {/* HTS Classification California */}
            <article id="hts-classification" className="bg-white p-10 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-primary-navy mb-4 font-garamond">HTS Classification California: The Foundation of Duty Assessment</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>HTS classification</strong> (Harmonized Tariff Schedule classification) is the process of assigning a 10-digit classification code to imported merchandise. This code determines the <strong>duty rate, eligibility for trade preferences, and exposure to trade remedies</strong>. For California importers bringing in $500 billion+ annually, proper HTS classification California practices are essential.
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">How HTS Classification Works</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The HTS uses a 6-digit international code (HS code) expanded to 10 digits for U.S. import purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li><strong>Digits 1-4:</strong> Heading (broad product category, e.g., "8471" = automatic data processing machines)</li>
                <li><strong>Digits 5-6:</strong> Subheading (international harmonized level)</li>
                <li><strong>Digits 7-8:</strong> U.S. tariff suffix (duty rate differentiation)</li>
                <li><strong>Digits 9-10:</strong> Statistical suffix (import tracking, no duty impact)</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">General Rules of Interpretation (GRI)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP applies six General Rules of Interpretation (GRI) to classify goods:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-text-secondary mb-6 ml-4">
                <li><strong>GRI 1:</strong> Classification by heading text and Section/Chapter Notes</li>
                <li><strong>GRI 2:</strong> Treatment of incomplete/unfinished/unassembled goods</li>
                <li><strong>GRI 3:</strong> Goods classifiable under multiple headings (most specific heading wins)</li>
                <li><strong>GRI 4:</strong> Goods not classifiable under GRI 1-3 (compare to most similar goods)</li>
                <li><strong>GRI 5:</strong> Packing materials and containers</li>
                <li><strong>GRI 6:</strong> Subheading classification within the same heading</li>
              </ol>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Common HTS Classification Challenges for California Importers</h3>
              <div className="bg-neutral-50 p-6 rounded-lg mb-6">
                <ul className="list-disc list-inside space-y-3 text-text-secondary ml-4">
                  <li><strong>Electronics:</strong> Distinguishing smartphones (8517.13) from tablets (8471.30) affects Section 301 tariff exposure</li>
                  <li><strong>Apparel:</strong> Fiber content and construction method determine duty rates ranging from 0% to 32%</li>
                  <li><strong>Chemicals:</strong> Technical specifications (purity, grade) drive classification and AD/CVD applicability</li>
                  <li><strong>Machinery:</strong> Principal function determines heading; accessories and parts follow GRI 2(a)</li>
                  <li><strong>Food Products:</strong> Processing level and ingredients affect duty rates and FDA requirements</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Obtaining Binding Rulings</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                California importers can request <strong>binding ruling letters</strong> from CBP's National Commodity Specialist Division. These rulings:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4 ml-4">
                <li>Provide written confirmation of HTS classification</li>
                <li>Bind CBP for the life of the product (until revoked or modified)</li>
                <li>Protect against CBP penalties for reliance on the ruling</li>
                <li>Serve as evidence of "reasonable care" in Focused Assessments</li>
              </ul>

              <div className="bg-primary-navy/5 border-l-4 border-secondary-teal p-6 mt-6">
                <p className="text-text-secondary italic">
                  <strong>California Practice Tip:</strong> For high-volume or high-duty products, invest in binding rulings. The cost of a ruling ($2,000-$5,000 in legal fees) is a fraction of the cost of misclassification penalties, which can reach millions of dollars for California importers.
                </p>
              </div>
            </article>

            {/* Antidumping Duties California */}
            <article className="bg-white p-10 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-primary-navy mb-4 font-garamond">Antidumping Duties California: Protecting Against Unfair Pricing</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Antidumping (AD) duties</strong> are additional tariffs imposed when foreign companies sell goods in the United States at <strong>less than fair value</strong> (LTFV), causing material injury to U.S. industry. These duties are administered by the <strong>Department of Commerce (Commerce)</strong> and the <strong>International Trade Commission (ITC)</strong>.
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">How Antidumping Cases Work</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                AD investigations follow a two-track process:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-text-secondary mb-6 ml-4">
                <li><strong>Commerce Investigation:</strong> Determines dumping margin (difference between U.S. price and normal value/constructed value)</li>
                <li><strong>ITC Investigation:</strong> Determines whether dumping caused material injury to U.S. industry</li>
              </ol>
              <p className="text-text-secondary leading-relaxed mb-6">
                If both findings are affirmative, Commerce issues an <strong>antidumping duty order</strong> imposing additional duties equal to the dumping margin (ranging from 5% to over 400%).
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">California Industries Most Affected by AD Duties</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6 justify-center">
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">Steel & Aluminum Products</h4>
                  <p className="text-text-secondary text-sm">Over 50 active AD orders covering steel pipes, plates, wire, and aluminum extrusions imported through California ports</p>
                </div>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">Solar Panels & Renewable Energy</h4>
                  <p className="text-text-secondary text-sm">Crystalline silicon photovoltaic cells from China and other countries face AD duties up to 238%</p>
                </div>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">Furniture & Home Goods</h4>
                  <p className="text-text-secondary text-sm">Wooden bedroom furniture, mattresses, and laminate flooring from China/Vietnam carry significant AD duties</p>
                </div>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">Seafood Products</h4>
                  <p className="text-text-secondary text-sm">Shrimp, fish fillets, and crawfish from Asia subject to AD duties affecting California food importers</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Defense Strategies for California Importers</h3>
              <ul className="list-disc list-inside space-y-3 text-text-secondary mb-4 ml-4">
                <li><strong>Scope Rulings:</strong> Request Commerce determination that your product falls outside the AD order scope</li>
                <li><strong>Country of Origin Shift:</strong> Source from non-covered countries or establish substantial transformation in third countries</li>
                <li><strong>New Shipper Reviews:</strong> If you're a new supplier, request individual rate instead of China-wide rate</li>
                <li><strong>Changed Circumstances Review:</strong> Demonstrate product design changes place goods outside order scope</li>
                <li><strong>Administrative Reviews:</strong> Participate in annual reviews to potentially reduce duty rates</li>
              </ul>

              <div className="bg-primary-navy/5 border-l-4 border-secondary-teal p-6 mt-6">
                <p className="text-text-secondary italic">
                  <strong>Warning for California Importers:</strong> AD duty evasion (misclassifying goods, transshipping through third countries, falsifying country of origin) carries severe penalties including criminal prosecution. Always consult legal counsel before implementing supply chain changes to address AD exposure.
                </p>
              </div>
            </article>

            {/* Countervailing Duties California */}
            <article className="bg-white p-10 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-primary-navy mb-4 font-garamond">Countervailing Duties California: Offsetting Foreign Subsidies</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Countervailing duties (CVD)</strong> offset unfair competitive advantages gained through foreign government subsidies. Like AD duties, CVD investigations involve Commerce (subsidy calculation) and the ITC (injury determination). California importers often face both AD and CVD duties on the same products—so-called <strong>"double remedies."</strong>
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Types of Countervailable Subsidies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Commerce examines whether foreign governments provided subsidies that are <strong>specific</strong> (targeted to particular industries/companies) and <strong>confer a benefit:</strong>
              </p>
              <ul className="list-disc list-inside space-y-3 text-text-secondary mb-6 ml-4">
                <li><strong>Direct Subsidies:</strong> Grants, loans, loan forgiveness, equity infusions</li>
                <li><strong>Tax Incentives:</strong> VAT rebates, income tax reductions, property tax exemptions</li>
                <li><strong>Preferential Financing:</strong> Below-market interest rates from state-owned banks</li>
                <li><strong>Input Subsidies:</strong> Below-market provision of raw materials, energy, land use rights</li>
                <li><strong>Export Subsidies:</strong> Government programs contingent on export performance</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">China-Specific CVD Issues</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                California's heavy reliance on Chinese imports creates significant CVD exposure. Commerce treats China as a <strong>non-market economy</strong> for CVD purposes, leading to higher duty rates. Common countervailable programs in China include:
              </p>
              <div className="bg-neutral-50 p-6 rounded-lg mb-6">
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                  <li>State-owned enterprise loans at preferential rates</li>
                  <li>Land use rights granted at below-market prices</li>
                  <li>VAT and income tax rebates for exporters</li>
                  <li>Government provision of inputs (aluminum, steel, chemicals) below fair market value</li>
                  <li>Export buyer's credit programs</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">CVD Compliance for California Importers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you import products subject to CVD orders:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-text-secondary mb-4 ml-4">
                <li><strong>Verify CVD Application:</strong> Check Commerce's CVD order database and ACE system codes</li>
                <li><strong>Obtain Supplier Certifications:</strong> Require foreign suppliers to certify subsidy receipt</li>
                <li><strong>Post CVD Cash Deposits:</strong> Pay estimated CVD rates at time of entry (subject to annual true-up)</li>
                <li><strong>Monitor Annual Reviews:</strong> Track administrative reviews that may adjust duty rates</li>
                <li><strong>Consider Scope Arguments:</strong> Challenge whether your specific product is covered by the CVD order</li>
              </ol>
            </article>

            {/* Section 301 Tariffs California */}
            <article className="bg-white p-10 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-primary-navy mb-4 font-garamond">Section 301 Tariffs California: The China Trade War Impact</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Section 301 tariffs</strong> imposed under the Trade Act of 1974 target <strong>over $370 billion of Chinese imports</strong> with additional duties of <strong>7.5% to 25%</strong>. These tariffs disproportionately affect California due to our state's position as the primary entry point for Chinese goods, with <strong>Los Angeles and Long Beach handling 40% of U.S. container imports from China.</strong>
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Four Lists of Section 301 Tariffs</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-primary-navy">
                  <h4 className="font-bold text-primary-navy mb-2">List 1 ($34 billion) - 25% Tariff</h4>
                  <p className="text-text-secondary text-sm">Machinery, electronics, aerospace, medical devices. Effective July 6, 2018.</p>
                </div>
                <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-primary-navy">
                  <h4 className="font-bold text-primary-navy mb-2">List 2 ($16 billion) - 25% Tariff</h4>
                  <p className="text-text-secondary text-sm">Industrial equipment, semiconductors, chemicals, plastics. Effective August 23, 2018.</p>
                </div>
                <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-primary-navy">
                  <h4 className="font-bold text-primary-navy mb-2">List 3 ($200 billion) - 25% Tariff</h4>
                  <p className="text-text-secondary text-sm">Consumer goods, furniture, apparel, food products. Effective September 24, 2018 (7.5% initially, raised to 25% May 10, 2019).</p>
                </div>
                <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-primary-navy">
                  <h4 className="font-bold text-primary-navy mb-2">List 4A/4B ($300 billion) - 7.5% Tariff</h4>
                  <p className="text-text-secondary text-sm">Remaining consumer goods including smartphones, laptops, toys, clothing. Effective September 1, 2019 and December 15, 2019.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Mitigation Strategies for California Businesses</h3>
              <ul className="list-disc list-inside space-y-3 text-text-secondary mb-6 ml-4">
                <li><strong>Product Exclusions:</strong> Request USTR exclusions for specific HTS codes (process currently limited)</li>
                <li><strong>Supply Chain Diversification:</strong> Source from Vietnam, Thailand, Mexico, or other non-Chinese suppliers</li>
                <li><strong>Substantial Transformation:</strong> Perform sufficient processing in third countries to change country of origin</li>
                <li><strong>Foreign Trade Zones (FTZ):</strong> Defer Section 301 tariffs through FTZ admission and manipulation</li>
                <li><strong>Drawback Claims:</strong> Recover Section 301 duties on re-exported or destroyed goods (currently limited by regulation)</li>
                <li><strong>First Sale for Export:</strong> Use multi-tier transactions to reduce dutiable value (Section 301 applies to value, not just classification)</li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 mt-6">
                <p className="text-text-secondary">
                  <strong className="text-red-900">Critical Compliance Warning:</strong> Section 301 circumvention (transshipping Chinese goods through third countries, mislabeling country of origin, fraudulent certificates of origin) is a major CBP enforcement priority. Penalties include seizure, fines up to $10,000 per violation, and criminal prosecution. California importers must maintain rigorous supply chain documentation.
                </p>
              </div>
            </article>

            {/* Section 232 Tariffs California */}
            <article className="bg-white p-10 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-primary-navy mb-4 font-garamond">Section 232 Tariffs California: National Security Trade Restrictions</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Section 232 of the Trade Expansion Act of 1962</strong> authorizes the President to restrict imports that threaten national security. Current Section 232 measures impose <strong>25% tariffs on steel and 10% tariffs on aluminum</strong> imports, with country-specific exemptions and quotas.
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Steel and Aluminum Section 232 Tariffs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Effective March 23, 2018, Section 232 tariffs apply to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li><strong>Steel Articles:</strong> Products classified under HTS Chapter 72 and certain downstream articles</li>
                <li><strong>Aluminum Articles:</strong> Products classified under HTS Chapter 76 and certain unwrought/semi-finished forms</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mb-6">
                Certain countries have negotiated <strong>exemptions or tariff-rate quotas (TRQs)</strong>, including Canada, Mexico (under USMCA), South Korea, Brazil, Argentina, Australia, and the European Union.
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Product Exclusions Process</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                California businesses can request product-specific exclusions from Section 232 tariffs by demonstrating:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>The steel/aluminum article is not produced in the United States in sufficient quantity or quality</li>
                <li>U.S. national security is not compromised by the exclusion</li>
                <li>The exclusion serves the national interest</li>
              </ol>
              <p className="text-text-secondary leading-relaxed mb-6">
                Exclusion requests are submitted through Commerce's Section 232 Exclusions Portal and are subject to public objections from domestic producers.
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Derivative Steel/Aluminum Products</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                California importers of <strong>downstream products containing steel or aluminum</strong> (machinery, vehicles, consumer goods) must determine whether Section 232 tariffs apply. Commerce periodically expands coverage to derivative articles to prevent circumvention.
              </p>
            </article>

            {/* Trade Remedies California */}
            <article className="bg-white p-10 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-primary-navy mb-4 font-garamond">Trade Remedies California: Legal Tools to Combat Unfair Trade</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Trade remedies</strong> are legal mechanisms to protect domestic industries from unfair foreign competition. For California businesses, trade remedies include <strong>antidumping duties, countervailing duties, safeguard measures (Section 201), and retaliatory tariffs (Section 301/232)</strong>. Understanding trade remedies is essential for both importers (compliance/defense) and domestic producers (petition/protection).
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Types of Trade Remedies</h3>

              <div className="space-y-6 mb-6">
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2 text-xl">1. Antidumping & Countervailing Duty Orders</h4>
                  <p className="text-text-secondary mb-3">Impose additional duties to offset dumping margins and foreign subsidies. Administered by Commerce and ITC.</p>
                  <p className="text-text-secondary text-sm"><strong>California Impact:</strong> Over 400 active AD/CVD orders affecting steel, solar, seafood, furniture, and other high-volume California imports.</p>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2 text-xl">2. Safeguard Measures (Section 201)</h4>
                  <p className="text-text-secondary mb-3">Temporary import restrictions (tariffs or quotas) when surging imports cause serious injury to U.S. industry, regardless of unfair trade practices.</p>
                  <p className="text-text-secondary text-sm"><strong>Recent Example:</strong> Section 201 tariffs on solar panels (30% declining to 15%) and washing machines.</p>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2 text-xl">3. Section 301 Retaliatory Tariffs</h4>
                  <p className="text-text-secondary mb-3">Presidential authority to impose tariffs in response to unfair foreign trade practices (IP theft, forced technology transfer, market access barriers).</p>
                  <p className="text-text-secondary text-sm"><strong>Current Use:</strong> $370+ billion in tariffs on Chinese imports at 7.5-25% rates.</p>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2 text-xl">4. Section 232 National Security Tariffs</h4>
                  <p className="text-text-secondary mb-3">Import restrictions based on national security threats to critical industries.</p>
                  <p className="text-text-secondary text-sm"><strong>Current Application:</strong> 25% steel tariffs and 10% aluminum tariffs with country exemptions.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Defending Against Trade Remedies: California Importer Strategies</h3>
              <ul className="list-disc list-inside space-y-3 text-text-secondary mb-6 ml-4">
                <li><strong>Scope Rulings:</strong> Argue product falls outside trade remedy order scope</li>
                <li><strong>Country of Origin Engineering:</strong> Shift sourcing or perform substantial transformation to avoid covered countries</li>
                <li><strong>Circumvention Defense:</strong> Respond to Commerce allegations of circumventing AD/CVD orders through transshipment</li>
                <li><strong>Administrative Reviews:</strong> Participate in annual reviews to reduce duty rates</li>
                <li><strong>Sunset Review Participation:</strong> Oppose continuation of AD/CVD orders every five years</li>
                <li><strong>Product Exclusion Requests:</strong> Seek exclusions from Section 232/301 tariffs</li>
              </ul>
            </article>

            {/* Valuation of Imported Goods California */}
            <article className="bg-white p-10 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-primary-navy mb-4 font-garamond">Valuation of Imported Goods California: Determining Dutiable Value</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Customs valuation</strong> under <strong>19 USC § 1401a</strong> determines the <strong>dutiable value</strong> upon which tariffs are assessed. For California importers, proper valuation of imported goods California practices are critical because valuation errors can trigger CBP Focused Assessments, penalty proceedings, and duty underpayment claims stretching back five years.
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Six Methods of Customs Valuation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP applies valuation methods <strong>hierarchically</strong>—each method is used only if the prior method cannot be applied:
              </p>

              <ol className="list-none space-y-4 mb-6">
                <li className="bg-neutral-50 p-4 rounded-lg">
                  <strong className="text-primary-navy">1. Transaction Value (Primary Method - 19 CFR § 152.103)</strong>
                  <p className="text-text-secondary mt-2">Price actually paid or payable for the merchandise when sold for exportation to the United States, plus statutory additions (assists, packing costs, selling commissions, royalties, proceeds of resale). This method applies to over 90% of U.S. imports.</p>
                </li>

                <li className="bg-neutral-50 p-4 rounded-lg">
                  <strong className="text-primary-navy">2. Transaction Value of Identical Merchandise</strong>
                  <p className="text-text-secondary mt-2">Value of identical goods sold for export to the U.S. at or near the same time, adjusted for differences.</p>
                </li>

                <li className="bg-neutral-50 p-4 rounded-lg">
                  <strong className="text-primary-navy">3. Transaction Value of Similar Merchandise</strong>
                  <p className="text-text-secondary mt-2">Value of similar (not identical) goods exported to the U.S., adjusted for differences in production and characteristics.</p>
                </li>

                <li className="bg-neutral-50 p-4 rounded-lg">
                  <strong className="text-primary-navy">4. Deductive Value</strong>
                  <p className="text-text-secondary mt-2">U.S. resale price minus profit, general expenses, transportation, and duties/fees.</p>
                </li>

                <li className="bg-neutral-50 p-4 rounded-lg">
                  <strong className="text-primary-navy">5. Computed Value</strong>
                  <p className="text-text-secondary mt-2">Sum of materials, fabrication costs, profit, general expenses, packing, and assists.</p>
                </li>

                <li className="bg-neutral-50 p-4 rounded-lg">
                  <strong className="text-primary-navy">6. Fallback Method</strong>
                  <p className="text-text-secondary mt-2">Reasonable means consistent with valuation principles, derived from available data.</p>
                </li>
              </ol>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Related-Party Transactions</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                California multinationals often import from <strong>related parties</strong> (subsidiaries, affiliates, parent companies). For related-party transactions, CBP requires importers to demonstrate the transaction value is acceptable under one of two tests:
              </p>
              <ul className="list-disc list-inside space-y-3 text-text-secondary mb-6 ml-4">
                <li><strong>Circumstances of Sale Test:</strong> Prove the relationship did not influence the price (compare to unrelated party sales, show price adequate to recover costs plus profit)</li>
                <li><strong>Test Values:</strong> Compare transaction value to deductive value, computed value, or identical/similar merchandise values</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Statutory Additions to Transaction Value</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                California importers must add the following to the price paid/payable:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li><strong>Packing Costs:</strong> Cost of containers and packing labor/materials</li>
                <li><strong>Selling Commissions:</strong> Buying commissions (but NOT selling commissions paid by seller)</li>
                <li><strong>Assists:</strong> Value of materials, tools, dies, molds provided by buyer to seller</li>
                <li><strong>Royalties and License Fees:</strong> Payments for trademarks, patents (if condition of sale)</li>
                <li><strong>Proceeds of Resale:</strong> Any portion of U.S. resale proceeds accruing to foreign seller</li>
              </ul>

              <div className="bg-primary-navy/5 border-l-4 border-secondary-teal p-6 mt-6">
                <p className="text-text-secondary italic">
                  <strong>California Compliance Tip:</strong> Assists (molds, tooling, engineering) are a major valuation issue for California manufacturers importing components. Properly apportion assist costs across all units produced to avoid underpaying duties. CBP Focused Assessments frequently target assist valuation.
                </p>
              </div>
            </article>

            {/* Customs Valuation Transfer Pricing California */}
            <article className="bg-white p-10 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-primary-navy mb-4 font-garamond">Customs Valuation Transfer Pricing California: The Double Taxation Trap</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                For California multinationals, <strong>customs valuation and tax transfer pricing</strong> create conflicting incentives: <strong>customs valuation wants low import values (lower duties), while tax transfer pricing wants high import values (shift profits to low-tax jurisdictions)</strong>. Misalignment creates both customs and tax risk.
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">The Customs-Tax Conflict</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6 justify-center">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-900 mb-2">Tax Transfer Pricing Objective</h4>
                  <p className="text-text-secondary text-sm">Maximize intercompany prices to shift profits to low-tax jurisdictions (e.g., price U.S. imports high to reduce U.S. taxable income)</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                  <h4 className="font-bold text-green-900 mb-2">Customs Valuation Objective</h4>
                  <p className="text-text-secondary text-sm">Minimize dutiable value to reduce customs duties (e.g., price U.S. imports low to lower tariff costs)</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">CBP's Position on Transfer Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                CBP requires that related-party transfer prices approximate <strong>arm's length pricing</strong>. If your tax transfer pricing study results in prices that do not reflect market conditions, CBP may reject the declared values and assess additional duties based on deductive or computed value methods.
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Strategies for California Multinationals</h3>
              <ol className="list-decimal list-inside space-y-3 text-text-secondary mb-6 ml-4">
                <li><strong>Coordinate Tax and Customs Teams:</strong> Ensure tax and customs departments align on intercompany pricing methodologies</li>
                <li><strong>Use Cost-Plus or Resale-Minus Methods:</strong> Apply transfer pricing methods that approximate transaction value acceptable to CBP</li>
                <li><strong>Document Comparables:</strong> Maintain benchmark studies showing related-party prices align with unrelated-party transactions</li>
                <li><strong>First Sale for Export:</strong> Use multi-tier transactions (foreign manufacturer → related middleman → U.S. importer) to value based on first sale price</li>
                <li><strong>Advance Pricing Agreements (APA):</strong> Coordinate IRS APA with CBP to align tax and customs positions</li>
              </ol>

              <div className="bg-primary-navy/5 border-l-4 border-secondary-teal p-6 mt-6">
                <p className="text-text-secondary italic">
                  <strong>California Multinational Best Practice:</strong> Conduct annual reconciliation of tax transfer pricing and customs declared values. If material discrepancies exist (&gt;10%), evaluate whether Prior Disclosure filing is necessary to correct undervalued entries before CBP discovers the issue in a Focused Assessment.
                </p>
              </div>
            </article>

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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Classification & Valuation Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/customs-defense" className="service-link">
                    <span className="service-link__title">Tariff Classification Defense</span>
                    <p className="service-link__description">HTS protests and binding ruling requests</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Customs Valuation Audits</span>
                    <p className="service-link__description">Related-party pricing defense</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
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
              </div>
            </div>

            {/* Trade Remedies */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Trade Remedies & Tariffs</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/customs-defense" className="service-link">
                    <span className="service-link__title">AD/CVD Defense</span>
                    <p className="service-link__description">Antidumping & countervailing duty matters</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Mitigation</span>
                    <p className="service-link__description">China tariff reduction strategies</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/customs-defense" className="service-link">
                    <span className="service-link__title">Section 232 Exclusions</span>
                    <p className="service-link__description">Steel & aluminum tariff relief</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Guides */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Related Compliance Guides</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/supply-chain-esg-compliance-guide" className="service-link">
                    <span className="service-link__title">Supply Chain ESG Guide</span>
                    <p className="service-link__description">UFLPA & forced labor compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/ecommerce-digital-trade-guide" className="service-link">
                    <span className="service-link__title">E-Commerce Trade Guide</span>
                    <p className="service-link__description">Section 321 & online seller compliance</p>
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

          {/* Helpful Resources */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful Resources for Importers</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <Link to="/resources/section-301-tariffs-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Section 301 Tariffs Guide</h4>
                <p className="text-sm text-text-secondary">China tariff mitigation strategies</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <Link to="/resources/uflpa-compliance-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">UFLPA Compliance Guide</h4>
                <p className="text-sm text-text-secondary">Forced labor detention defense</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <Link to="/customs-defense" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">CBP Audit Defense</h4>
                <p className="text-sm text-text-secondary">Focused Assessment preparation</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <Link to="/trade-law-faq" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">FAQ Center</h4>
                <p className="text-sm text-text-secondary">Common customs questions</p>
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
            Navigate Tariffs and Trade Remedies with Expert Guidance
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            California importers face complex tariff classifications, trade remedies, and valuation challenges. Our trade law practice helps you minimize duty costs, defend against government enforcement, and maintain compliance. Contact us for a free consultation on your tariff and classification issues.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact#schedule-consultation" variant="solid">
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

export default TariffsClassificationGuidePage;
