
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const EcommerceDigitalTradeGuidePage: React.FC = () => {
  // Scroll to section function for in-page navigation
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useMeta({
    title: 'CA Ecommerce Import | Online Sellers Customs & Digital Trade',
    description: 'California ecommerce import & online sellers customs compliance. Digital trade law, Section 321, data export controls for CA/USA retailers. Call (310) 744-1328.',
    canonical: 'ecommerce-digital-trade-guide',
    ogType: 'article',
    ogImage: `${siteConfig.siteUrl}/og-image-ecommerce-guide.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'E-Commerce & Digital Trade Compliance Guide for California Online Sellers',
        description: 'Educational resource covering ecommerce import rules, online seller customs compliance, digital trade law, and data transfer export controls.',
        url: `${siteConfig.siteUrl}/ecommerce-digital-trade-guide`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Resources', url: `${siteConfig.siteUrl}/resources` },
        { name: 'E-Commerce & Digital Trade Guide', url: `${siteConfig.siteUrl}/ecommerce-digital-trade-guide` }
      ]),
      generateFAQSchema([
        {
          question: 'What are ecommerce import rules for California online sellers?',
          answer: 'California ecommerce sellers importing goods for resale online (Amazon FBA, Shopify, eBay) must comply with CBP customs regulations including: accurate HTS classification, customs valuation, Section 321 de minimis entry rules ($800 exemption), country of origin marking, product safety standards (CPSC, FDA, FCC), intellectual property rights, and recordkeeping requirements. Online sellers are considered "importers of record" and liable for customs duties, penalties, and compliance violations.',
        },
        {
          question: 'What is Section 321 and how does it affect online sellers?',
          answer: 'Section 321 allows duty-free entry for shipments valued at $800 or less (per person per day). This exemption revolutionized ecommerce by enabling Chinese direct-to-consumer sellers (Shein, Temu, AliExpress) to ship small parcels duty-free. However, CBP has increased scrutiny of Section 321 abuse including: undervaluation, split shipments, and prohibited goods. California online sellers must ensure Section 321 entries are legitimate and not used to evade duties or import restrictions.',
        },
        {
          question: 'What is digital trade law and how does it apply to California tech companies?',
          answer: 'Digital trade law governs cross-border data flows, digital services, e-commerce platforms, and technology exports. For California tech companies, this includes: export controls on software and encryption (EAR), data localization requirements in foreign markets, cross-border data transfer restrictions (GDPR, CCPA), digital services taxes (EU DST), platform liability rules, and restrictions on source code transfers. Digital trade law is evolving rapidly as governments regulate AI, cloud services, and digital platforms.',
        },
        {
          question: 'What are data transfer export controls for California companies?',
          answer: 'Export controls on data transfers apply when California companies share technical data, source code, or technology with foreign nationals (deemed exports) or foreign entities. EAR and ITAR regulate: software source code exports, encryption technology transfers, technical data for controlled products, cloud-hosted data accessed by foreign persons, API access to controlled technology, and remote technical assistance to foreign end-users. California tech companies must implement access controls, geographic restrictions, and export license compliance for data transfers.',
        },
      ]),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-montserrat text-neutral-darkGray bg-white">

      {/* Hero Section */}
      <section className="hero" aria-label="E-Commerce Digital Trade Guide Hero">
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
          <h1>E-Commerce & Digital Trade<br />Compliance California</h1>
          <p className="hero-subtitle">
            Essential guide to ecommerce import rules, online seller customs compliance, digital trade law, and data transfer export controls for California businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => scrollToSection('ecommerce-import-rules')} className="hero-cta">Explore E-Commerce Compliance</button>
            <Link to="/contact" className="hero-cta-outline">Get Expert Help</Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <p className="text-xl text-text-secondary leading-relaxed mb-6">
            California leads the nation in <strong>e-commerce innovation and digital trade</strong>, home to Amazon, eBay, Shopify sellers, and thousands of online retailers importing goods from Asia. The state also dominates <strong>digital services</strong> through tech giants (Google, Meta, Apple) and SaaS companies exporting software and data globally.
          </p>
          <p className="text-xl text-text-secondary leading-relaxed">
            This guide covers four critical compliance areas for California's digital economy: <strong>ecommerce import rules, online seller customs compliance, digital trade law, and data transfer export controls</strong>. Whether you're an Amazon FBA seller importing from China or a tech company transferring data internationally, this resource provides essential legal guidance.
          </p>
        </div>
      </section>

      {/* Why Digital Trade Compliance Matters */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Navigate Digital Economy Trade Rules
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              California dominates e-commerce and digital services. Online sellers importing goods from Asia and tech companies transferring data globally must comply with evolving customs, export control, and digital trade regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">E-Commerce Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Amazon FBA sellers and online retailers are importers of record. Master HTS classification, Section 321 rules, product safety standards, and CBP enforcement targeting e-commerce.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Digital Trade Law</h3>
              <p className="text-text-secondary leading-relaxed">
                Navigate cross-border data transfer restrictions, data localization requirements, digital services taxes, and platform liability rules for California tech companies.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Controls on Data</h3>
              <p className="text-text-secondary leading-relaxed">
                Comply with EAR and ITAR controls on software source code, technical data transfers, deemed exports, and encryption technology for California tech companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col space-y-12">

            {/* Ecommerce Import Rules California */}
            <article id="ecommerce-import-rules" className="bg-white p-10 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-primary-navy mb-4 font-garamond">Ecommerce Import Rules California: Compliance for Online Sellers</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                California's <strong>e-commerce sector</strong> generates over $100 billion in annual online sales, with most inventory sourced from overseas manufacturers. Whether you sell on <strong>Amazon FBA, Shopify, eBay, Etsy, or your own website</strong>, you are the <strong>importer of record</strong> and fully liable for customs compliance. CBP has intensified enforcement against online sellers, targeting common violations including undervaluation, misclassification, and product safety violations.
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">CBP Compliance Obligations for Online Sellers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As an importer, California online sellers must comply with all CBP regulations:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">1. HTS Classification</h4>
                  <p className="text-text-secondary text-sm mb-2">Assign correct 10-digit HTS code to all imported products. Classification determines duty rate (0% to 37.5%) and Section 301 tariff exposure.</p>
                  <p className="text-xs text-text-secondary"><strong>Tip:</strong> Use CBP's CROSS database or request binding rulings for complex products</p>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">2. Customs Valuation</h4>
                  <p className="text-text-secondary text-sm mb-2">Declare true transaction value including product cost, international shipping, insurance, and assists (tooling provided to supplier).</p>
                  <p className="text-xs text-text-secondary"><strong>Warning:</strong> Undervaluation is 19 USC § 1592 fraud—penalties up to 400% of value</p>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">3. Country of Origin Marking</h4>
                  <p className="text-text-secondary text-sm mb-2">Products must be permanently marked "Made in [Country]" in English. Amazon FBA requires country of origin on product and packaging.</p>
                  <p className="text-xs text-text-secondary"><strong>Penalty:</strong> Unmarked goods subject to 10% marking duty (19 USC § 1304)</p>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">4. Product Safety Standards</h4>
                  <p className="text-text-secondary text-sm mb-2">Consumer products must meet CPSC, FDA, FCC, DOT, and EPA standards. Children's products require third-party testing and CPC certificates.</p>
                  <p className="text-xs text-text-secondary"><strong>Risk:</strong> Non-compliant products subject to CBP detention and CPSC recalls</p>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">5. Intellectual Property Rights</h4>
                  <p className="text-text-secondary text-sm mb-2">CBP seizes counterfeit and pirated goods at the border. Online sellers must ensure suppliers are authorized manufacturers or licensees.</p>
                  <p className="text-xs text-text-secondary"><strong>Liability:</strong> Trademark and copyright infringement carry civil and criminal penalties</p>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">6. Trade Remedies (AD/CVD)</h4>
                  <p className="text-text-secondary text-sm mb-2">Verify products are not subject to antidumping or countervailing duty orders. Common e-commerce products covered: solar panels, furniture, aluminum extrusions.</p>
                  <p className="text-xs text-text-secondary"><strong>Action:</strong> Check Commerce's AD/CVD order database before importing</p>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">7. Section 301 Tariffs</h4>
                  <p className="text-text-secondary text-sm mb-2">Most Chinese consumer goods face 7.5-25% Section 301 tariffs. Include tariffs in landed cost calculations and pricing.</p>
                  <p className="text-xs text-text-secondary"><strong>Strategy:</strong> Consider Vietnam/India sourcing to avoid Section 301</p>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">8. Recordkeeping (19 CFR § 163)</h4>
                  <p className="text-text-secondary text-sm mb-2">Maintain all import records (invoices, packing lists, entry docs) for 5 years. CBP can audit any entry within 5-year window.</p>
                  <p className="text-xs text-text-secondary"><strong>Requirement:</strong> Must produce records within 30 days of CBP CF-28 request</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Amazon FBA & E-Commerce Platform Considerations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Amazon FBA (Fulfillment by Amazon)</strong> sellers face unique customs compliance challenges:
              </p>
              <ul className="list-disc list-inside space-y-3 text-text-secondary mb-6 ml-4">
                <li><strong>Importer of Record:</strong> Amazon does NOT import goods on your behalf. You are the importer and must arrange customs entry via freight forwarder or customs broker.</li>
                <li><strong>Country of Origin Labeling:</strong> Amazon requires compliant country of origin marking on products and exterior packaging before FBA acceptance.</li>
                <li><strong>Product Safety Compliance:</strong> Amazon requires Children's Product Certificates (CPC) for toys, CPSC compliance for consumer products, and FDA compliance for food/cosmetics.</li>
                <li><strong>Intellectual Property Verification:</strong> Amazon's Brand Registry and Project Zero programs screen for counterfeits. Ensure you have proper licensing or authorization.</li>
                <li><strong>Hazmat Compliance:</strong> Lithium batteries, aerosols, and flammable goods require special handling, SDS sheets, and FBA hazmat certification.</li>
                <li><strong>USMCA Certification:</strong> If claiming USMCA duty-free treatment for Mexican/Canadian goods, Amazon may request certification during FBA intake.</li>
              </ul>

              <div className="bg-primary-navy/5 border-l-4 border-secondary-teal p-6 mt-6">
                <p className="text-text-secondary italic">
                  <strong>CBP E-Commerce Enforcement Initiative:</strong> CBP has launched targeting campaigns against online sellers importing from China through Los Angeles/Long Beach ports. Common violations: undervaluation (declaring $2 value for products selling at $20), misclassification to avoid Section 301 tariffs, and failure to pay AD/CVD duties. Penalties range from 20% to 400% of merchandise value.
                </p>
              </div>
            </article>

            {/* Online Sellers Customs Compliance California */}
            <article className="bg-white p-10 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-primary-navy mb-4 font-garamond">Online Sellers Customs Compliance California: Section 321 and De Minimis</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Section 321 of the Tariff Act</strong> allows duty-free entry for shipments valued at <strong>$800 or less</strong> (per person per day), revolutionizing e-commerce by enabling low-value direct-to-consumer imports without formal customs entry. However, CBP has intensified scrutiny of Section 321 abuse, particularly for shipments from China entering through California ports.
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">How Section 321 Works</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 321 (19 CFR § 10.151) provides informal entry for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li><strong>Value Threshold:</strong> Shipments valued at $800 or less (fair retail value at time/place of shipment)</li>
                <li><strong>One Shipment Per Day:</strong> $800 limit applies per person per day (not per package)</li>
                <li><strong>Duty-Free Treatment:</strong> No duties, taxes, or merchandise processing fees (MPF)</li>
                <li><strong>Simplified Entry:</strong> No formal entry documentation required (manifest-based clearance)</li>
                <li><strong>Electronic Filing:</strong> Most Section 321 entries filed via ACE eManifest (air cargo) or Section 321 data pilot</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">CBP Section 321 Enforcement Priorities</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP has identified systematic abuse of Section 321 by Chinese e-commerce platforms (Shein, Temu, AliExpress) and dropshippers. Common violations:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-900 mb-2">Undervaluation</h4>
                  <p className="text-text-secondary text-sm">Declaring false values ($5 declared for $50 product) to qualify for Section 321. CBP uses e-commerce platform data and online pricing to detect undervaluation.</p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-900 mb-2">Split Shipments</h4>
                  <p className="text-text-secondary text-sm">Breaking large orders into multiple $800 packages to evade duties. CBP algorithm detects multiple shipments to same recipient from same seller within 24 hours.</p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-900 mb-2">Prohibited Goods</h4>
                  <p className="text-text-secondary text-sm">Using Section 321 to import goods excluded from de minimis treatment: alcohol, tobacco, perfumes containing alcohol, goods subject to AD/CVD, and certain textiles.</p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-900 mb-2">Section 301 Evasion</h4>
                  <p className="text-text-secondary text-sm">Using Section 321 to avoid Section 301 tariffs on Chinese goods (Section 301 still applies to low-value shipments, but enforcement is difficult).</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Legislative Changes to Section 321</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Congress is considering legislation to restrict Section 321 abuse:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li><strong>Import Security and Fairness Act:</strong> Would exclude all Chinese imports from Section 321 treatment (regardless of value)</li>
                <li><strong>De Minimis Reciprocity Act:</strong> Would limit Section 321 to countries offering reciprocal de minimis treatment to U.S. exports</li>
                <li><strong>UFLPA Section 321 Exclusion:</strong> UFLPA already prohibits Section 321 for goods made with forced labor; enforcement expanding</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Compliance Best Practices for California Online Sellers</h3>
              <ol className="list-decimal list-inside space-y-3 text-text-secondary mb-4 ml-4">
                <li><strong>Accurate Valuation:</strong> Declare true transaction value (price paid to supplier + international shipping)</li>
                <li><strong>Single Shipment Rule:</strong> Do not split orders to manipulate value under $800 threshold</li>
                <li><strong>Excluded Products:</strong> Verify product is not excluded from Section 321 (check 19 CFR § 10.151)</li>
                <li><strong>Product Safety Compliance:</strong> Section 321 does NOT exempt goods from CPSC, FDA, FCC, or EPA requirements</li>
                <li><strong>Intellectual Property:</strong> Section 321 does NOT exempt counterfeit goods—CBP still seizes IP violations</li>
                <li><strong>Section 301 Awareness:</strong> Understand that Section 301 tariffs technically apply to low-value shipments (even if rarely enforced)</li>
                <li><strong>Recordkeeping:</strong> Maintain commercial invoices for all Section 321 shipments for 5 years</li>
              </ol>

              <div className="bg-primary-navy/5 border-l-4 border-secondary-teal p-6 mt-6">
                <p className="text-text-secondary italic">
                  <strong>Future of Section 321:</strong> Experts predict major restrictions on Section 321 within the next 2-3 years due to pressure from domestic retailers (competing with Shein/Temu), labor unions (forced labor concerns), and revenue loss (estimated $100M+ in uncollected duties annually). California online sellers should prepare for tighter controls including mandatory data submissions, tariff applications, and possible exclusion of Chinese goods.
                </p>
              </div>
            </article>

            {/* Digital Trade Law California */}
            <article className="bg-white p-10 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-primary-navy mb-4 font-garamond">Digital Trade Law California: Cross-Border Data Flows and Platform Regulation</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Digital trade law</strong> governs international commerce in <strong>digital services, software, data, and e-commerce platforms</strong>. California tech companies exporting SaaS products, cloud services, digital content, and software face evolving regulations on <strong>cross-border data transfers, data localization, digital taxation, platform liability, and export controls on technology</strong>.
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Key Digital Trade Law Issues for California Companies</h3>

              <div className="space-y-6 mb-6">
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2 text-xl">1. Cross-Border Data Transfer Restrictions</h4>
                  <p className="text-text-secondary mb-3">California companies transferring personal data to/from the EU must comply with <strong>GDPR Article 44-50</strong> transfer mechanisms:</p>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                    <li><strong>Standard Contractual Clauses (SCCs):</strong> EU Commission-approved contract templates for data transfers</li>
                    <li><strong>Adequacy Decisions:</strong> EU approval of third-country data protection laws (U.S. lacks general adequacy)</li>
                    <li><strong>EU-U.S. Data Privacy Framework:</strong> Replaced Privacy Shield; allows certified companies to transfer EU data to U.S.</li>
                    <li><strong>Binding Corporate Rules (BCRs):</strong> Internal policies for multinational intra-group data transfers</li>
                  </ul>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2 text-xl">2. Data Localization Requirements</h4>
                  <p className="text-text-secondary mb-3">Many countries mandate local data storage, impacting California cloud service providers:</p>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                    <li><strong>China:</strong> Personal Information Protection Law (PIPL) and Cybersecurity Law require China data to be stored on China servers</li>
                    <li><strong>Russia:</strong> Federal Law 242-FZ requires Russian citizen data stored on Russian servers</li>
                    <li><strong>India:</strong> Proposed data protection law includes data localization for sensitive personal data</li>
                    <li><strong>Indonesia, Vietnam, Brazil:</strong> Various data residency requirements for financial, health, and government data</li>
                  </ul>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2 text-xl">3. Digital Services Taxes (DST)</h4>
                  <p className="text-text-secondary mb-3">Foreign governments impose revenue-based taxes on California tech companies' digital services:</p>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                    <li><strong>EU Digital Services Tax:</strong> Proposed 3% tax on digital services revenue (currently deferred pending OECD Pillar One)</li>
                    <li><strong>UK Digital Services Tax:</strong> 2% tax on UK-derived revenue from search, social media, and online marketplaces</li>
                    <li><strong>France, Italy, Spain:</strong> National DSTs targeting Google, Facebook, Amazon (3-7% rates)</li>
                    <li><strong>India Equalization Levy:</strong> 2% tax on e-commerce transactions</li>
                  </ul>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2 text-xl">4. Platform Liability and Content Moderation</h4>
                  <p className="text-text-secondary mb-3">Global platform regulations affect California social media, e-commerce, and content platforms:</p>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                    <li><strong>EU Digital Services Act (DSA):</strong> Requires platforms to moderate illegal content, conduct risk assessments, and provide transparency reports</li>
                    <li><strong>EU Digital Markets Act (DMA):</strong> Antitrust rules for large platforms ("gatekeepers") requiring interoperability and data portability</li>
                    <li><strong>Section 230 Reforms:</strong> U.S. legislative proposals to modify Section 230 immunity for platform content</li>
                    <li><strong>Australia News Media Bargaining Code:</strong> Requires platforms to pay news publishers for content</li>
                  </ul>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2 text-xl">5. Source Code and Algorithm Disclosure</h4>
                  <p className="text-text-secondary mb-3">Some countries require source code disclosure as condition for market access:</p>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                    <li><strong>China Cybersecurity Review:</strong> Source code inspection for "critical information infrastructure" software</li>
                    <li><strong>Vietnam Cybersecurity Law:</strong> Local data storage and potential source code disclosure for "national security"</li>
                    <li><strong>Russia FSTEC Certification:</strong> Source code review for cryptographic software sold to Russian government</li>
                  </ul>
                  <p className="text-text-secondary mt-2"><strong>Trade Secret Risk:</strong> Source code disclosure creates IP theft risk. Consider export control classification (EAR restrictions) and contractual protections.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Trade Agreement Digital Trade Chapters</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                California tech companies benefit from digital trade provisions in recent FTAs:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4 ml-4">
                <li><strong>USMCA Chapter 19:</strong> Prohibits customs duties on digital products, protects cross-border data flows, prevents data localization mandates</li>
                <li><strong>CPTPP (Comprehensive and Progressive Agreement for Trans-Pacific Partnership):</strong> Strong digital trade rules if U.S. rejoins</li>
                <li><strong>U.S.-Japan Digital Trade Agreement:</strong> Most comprehensive digital trade agreement protecting data flows and banning source code disclosure</li>
              </ul>
            </article>

            {/* Data Transfer Export Controls California */}
            <article className="bg-white p-10 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-primary-navy mb-4 font-garamond">Data Transfer Export Controls California: EAR and ITAR Compliance for Tech</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Export controls on data transfers</strong> apply when California tech companies share controlled technology, software source code, or technical data with foreign nationals or foreign entities. Both the <strong>Export Administration Regulations (EAR)</strong> and <strong>International Traffic in Arms Regulations (ITAR)</strong> regulate cross-border data flows for national security reasons.
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">What Data Transfers Are Controlled?</h3>

              <div className="space-y-4 mb-6">
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">1. Software Source Code Exports (EAR ECCN 5D002, 5D992)</h4>
                  <p className="text-text-secondary mb-2">EAR controls source code for:</p>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                    <li><strong>Encryption software:</strong> Source code for products using encryption (AES, RSA, etc.) requires self-classification under License Exception ENC</li>
                    <li><strong>Intrusion software:</strong> Hacking tools, penetration testing software, and exploits (5D002.c.1)</li>
                    <li><strong>Network surveillance:</strong> Deep packet inspection and communications monitoring software</li>
                    <li><strong>Dual-use source code:</strong> Software for controlled end-uses (WMD, missile technology)</li>
                  </ul>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">2. Technical Data Transfers (EAR ECCN 5E002, ITAR Technical Data)</h4>
                  <p className="text-text-secondary mb-2">Export controls apply to technical data for controlled products:</p>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                    <li><strong>Design specifications:</strong> CAD files, blueprints, schematics for controlled hardware</li>
                    <li><strong>Manufacturing know-how:</strong> Process documentation, production techniques for dual-use items</li>
                    <li><strong>ITAR technical data:</strong> Any data related to defense articles on U.S. Munitions List</li>
                    <li><strong>Cloud-hosted data:</strong> Technical data stored in cloud accessible by foreign nationals</li>
                  </ul>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">3. Technology Exports (EAR Part 772 Definition)</h4>
                  <p className="text-text-secondary mb-2">"Technology" = specific information necessary for development, production, or use of controlled items:</p>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                    <li><strong>Technical assistance:</strong> Remote support to foreign customers on controlled products</li>
                    <li><strong>Training:</strong> Instruction to foreign persons on use/maintenance of controlled technology</li>
                    <li><strong>Consulting services:</strong> Engineering services related to controlled products or processes</li>
                  </ul>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">4. Deemed Exports (EAR § 734.13, ITAR § 120.17)</h4>
                  <p className="text-text-secondary mb-2">Release of controlled technology/data to foreign nationals in the U.S. is a "deemed export":</p>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                    <li><strong>Employee access:</strong> Foreign national employees accessing controlled source code or technical data</li>
                    <li><strong>Contractor access:</strong> Foreign contractors (H-1B, consultants) with access to controlled technology</li>
                    <li><strong>University research:</strong> Foreign graduate students working on export-controlled research</li>
                    <li><strong>Visitor access:</strong> Foreign visitors touring facilities with exposure to controlled data</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Encryption Export Controls for California Tech Companies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                California software companies exporting encryption products must comply with <strong>EAR encryption controls (ECCN 5A002, 5D002)</strong>:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-text-secondary mb-6 ml-4">
                <li><strong>Self-Classification:</strong> Determine ECCN for encryption items (5A002 for hardware, 5D002 for software/source code)</li>
                <li><strong>License Exception ENC:</strong> Most commercial encryption qualifies for License Exception ENC (unrestricted civil end-users, mass market products)</li>
                <li><strong>Encryption Registration:</strong> Register as encryption exporter with BIS and submit initial self-classification report</li>
                <li><strong>Annual Reporting:</strong> Submit semi-annual sales reports for certain encryption products</li>
                <li><strong>Source Code Review:</strong> Provide BIS with source code or technical details demonstrating encryption functionality</li>
                <li><strong>Restricted Destinations:</strong> Even under License Exception ENC, exports to E:1 countries (Cuba, Iran, North Korea, Sudan, Syria) are prohibited</li>
              </ol>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Cloud Services and SaaS Export Controls</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                California cloud service providers face export control challenges:
              </p>
              <ul className="list-disc list-inside space-y-3 text-text-secondary mb-6 ml-4">
                <li><strong>Geographic Access Controls:</strong> Implement IP blocking to prevent access from sanctioned countries (Cuba, Iran, Syria, North Korea, Russia, Belarus)</li>
                <li><strong>Customer Screening:</strong> Screen cloud customers against Denied Persons List, Entity List, and SDN List</li>
                <li><strong>Technology Control Plans:</strong> For controlled software-as-a-service, implement TCPs restricting foreign national access</li>
                <li><strong>Encryption Compliance:</strong> Cloud encryption services require License Exception ENC self-classification</li>
                <li><strong>API Access Controls:</strong> Restrict API access to controlled technology based on user location and nationality</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Compliance Program for California Tech Companies</h3>
              <ol className="list-decimal list-inside space-y-3 text-text-secondary mb-4 ml-4">
                <li><strong>Product Classification:</strong> Classify all software, source code, and technical data under EAR/ITAR</li>
                <li><strong>Deemed Export Controls:</strong> Implement foreign national access controls and deemed export licenses</li>
                <li><strong>Geographic Restrictions:</strong> Block access from sanctioned countries (IP geofencing, terms of service restrictions)</li>
                <li><strong>Customer Screening:</strong> Automated screening of customers against BIS, DDTC, and OFAC lists</li>
                <li><strong>Encryption Reporting:</strong> Submit required BIS encryption reports and maintain registration</li>
                <li><strong>Employee Training:</strong> Train engineers and sales teams on export control red flags</li>
                <li><strong>Audit Trail:</strong> Log all technology transfers, cloud access by foreign users, and license determinations</li>
              </ol>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 mt-6">
                <p className="text-text-secondary">
                  <strong className="text-red-900">Emerging Controls on AI and Quantum Technology:</strong> BIS is developing new export controls on artificial intelligence (AI) models, machine learning algorithms, quantum computing technology, and advanced semiconductors. California AI companies should monitor Federal Register notices and participate in public comment periods. Expect significant new restrictions on AI exports within the next 1-2 years.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* E-Commerce Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">E-Commerce Compliance Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/customs-defense" className="service-link">
                    <span className="service-link__title">Amazon FBA Compliance</span>
                    <p className="service-link__description">Import compliance for online sellers</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Section 321 Defense</span>
                    <p className="service-link__description">De minimis entry compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Product Safety Compliance</span>
                    <p className="service-link__description">CPSC, FDA, FCC standards</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Digital Trade & Export Controls */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Tech Export Control Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Software Export Controls</span>
                    <p className="service-link__description">EAR encryption compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Deemed Export Controls</span>
                    <p className="service-link__description">Foreign national access controls</p>
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

            {/* Related Guides */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Related Compliance Guides</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">Tariffs & Classification Guide</span>
                    <p className="service-link__description">HTS classification & Section 301</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
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
              </div>
            </div>
          </div>

          {/* Helpful Resources */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful Resources for Digital Economy</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <a href="#article/e-commerce-section-321-california" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Section 321 Best Practices</h4>
                <p className="text-sm text-text-secondary">De minimis compliance for online sellers</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#article/encryption-export-controls-california" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Encryption Export Controls</h4>
                <p className="text-sm text-text-secondary">EAR compliance for software</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <Link to="/practice-areas" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Regulatory Compliance</h4>
                <p className="text-sm text-text-secondary">Cross-border data compliance</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
              <Link to="/trade-law-faq" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">FAQ Center</h4>
                <p className="text-sm text-text-secondary">Common e-commerce questions</p>
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
            Navigate E-Commerce and Digital Trade Compliance
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            California online sellers and tech companies face evolving customs and export control requirements. Our trade law practice helps you comply with ecommerce import rules, Section 321 regulations, digital trade laws, and data transfer export controls. Contact us for expert guidance on e-commerce and digital trade compliance.
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
    </main>
  );
};

export default EcommerceDigitalTradeGuidePage;
