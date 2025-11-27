
import React, { useEffect } from 'react';
import EvaluationForm from '../components/EvaluationForm';
import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from '../utils/seo';

const SupplyChainESGGuidePage: React.FC = () => {
  // Scroll to section function for in-page navigation
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useMeta({
    title: 'Supply Chain ESG CA | UFLPA | Forced Labor Import Bans Guide',
    description: 'Complete guide: Supply chain ESG compliance California, UFLPA (Uyghur Forced Labor Prevention Act), forced labor import bans, green trade regulations, carbon border adjustment, bribery/corruption risks & FCPA for CA/USA importers. Call 631-746-8290.',
    canonical: 'supply-chain-esg-compliance-guide',
    ogType: 'article',
    ogImage: `${siteConfig.siteUrl}/og-image-esg-guide.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Supply Chain Ethics & ESG Compliance Guide for California Importers',
        description: 'Educational resource on supply chain ESG compliance, forced labor import bans, UFLPA, green trade regulations, carbon border adjustment, and anti-corruption compliance.',
        url: `${siteConfig.siteUrl}/#supply-chain-esg-compliance-guide`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Resources', url: `${siteConfig.siteUrl}/#resources` },
        { name: 'Supply Chain ESG Guide', url: `${siteConfig.siteUrl}/#supply-chain-esg-compliance-guide` }
      ]),
      generateFAQSchema([
        {
          question: 'What is supply chain ESG compliance and why does it matter for California importers?',
          answer: 'Supply chain ESG (Environmental, Social, Governance) compliance ensures your imported products are not made with forced labor, comply with environmental regulations, and adhere to anti-corruption standards. California importers face increasing regulatory scrutiny under the Uyghur Forced Labor Prevention Act, CBP forced labor import bans (WROs), green trade regulations, and FCPA. Non-compliance can result in cargo detention, seizure, reputational damage, and criminal liability.',
        },
        {
          question: 'What is the Uyghur Forced Labor Prevention Act (UFLPA)?',
          answer: 'The UFLPA, effective June 21, 2022, creates a rebuttable presumption that goods mined, produced, or manufactured in Xinjiang, China, or by UFLPA Entity List companies, are made with forced labor and prohibited from U.S. importation. California importers must conduct supply chain due diligence, map upstream suppliers, and provide clear and convincing evidence to CBP to overcome the presumption and secure release of detained goods.',
        },
        {
          question: 'What are forced labor import bans and CBP Withhold Release Orders?',
          answer: 'Under 19 USC § 1307, goods made wholly or in part with forced labor (including convict labor, indentured labor, and forced child labor) are prohibited from U.S. importation. CBP issues Withhold Release Orders (WROs) and Findings to detain and exclude suspected forced labor goods. Active WROs cover products from China (cotton, tomatoes, seafood), Malaysia (palm oil gloves), and other countries. California importers must screen suppliers against WRO lists and maintain supply chain traceability.',
        },
        {
          question: 'How do green trade regulations and carbon border adjustments affect California businesses?',
          answer: 'Green trade regulations include EU Carbon Border Adjustment Mechanism (CBAM), California climate disclosure laws, and product-specific environmental standards. While the U.S. has not implemented carbon border tariffs, California importers exporting to the EU must track embodied carbon emissions. Future U.S. climate trade policy may impose carbon tariffs on high-emission imports, requiring supply chain carbon accounting.',
        },
        {
          question: 'What are FCPA-related trade issues for California importers?',
          answer: 'The Foreign Corrupt Practices Act (FCPA) prohibits bribing foreign officials to obtain or retain business. In international trade, FCPA risks include paying customs officials for favorable classification/valuation, kickbacks to foreign procurement officers, and "facilitation payments" to expedite shipments. California importers must implement anti-corruption compliance programs, conduct third-party due diligence on freight forwarders and customs brokers, and maintain accurate books and records.',
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
      <section className="hero" aria-label="Supply Chain ESG Guide Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Supply Chain Ethics & ESG<br />Compliance California</h1>
          <p className="hero-subtitle">
            Complete guide to forced labor import bans, UFLPA compliance, green trade regulations, carbon border adjustment, and anti-corruption requirements for California importers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => scrollToSection('forced-labor-import-bans')} className="hero-cta">Learn More</button>
            <a href="#schedule-consultation" className="hero-cta-outline">Get Expert Help</a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <p className="text-xl text-text-secondary leading-relaxed mb-6">
            California importers face increasing scrutiny over <strong>supply chain ethics and ESG (Environmental, Social, Governance) compliance</strong>. Federal enforcement agencies—led by <strong>U.S. Customs and Border Protection (CBP)</strong> and the <strong>Department of Justice</strong>—are aggressively targeting forced labor imports, corruption in international trade, and environmental violations.
          </p>
          <p className="text-xl text-text-secondary leading-relaxed">
            This comprehensive guide covers seven critical ESG compliance areas: <strong>forced labor import bans, Uyghur Forced Labor Prevention Act (UFLPA), green trade regulations, carbon border adjustment mechanisms, bribery and corruption risks, FCPA trade compliance, and supply chain due diligence strategies</strong> for California businesses.
          </p>
        </div>
      </section>

      {/* Why ESG Compliance Matters */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Critical ESG Compliance Areas for California Importers
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Federal enforcement agencies are aggressively targeting forced labor imports, corruption in trade, and environmental violations. California importers must implement robust ESG compliance programs to avoid detention, seizure, and criminal prosecution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 justify-center">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Forced Labor Prevention</h3>
              <p className="text-text-secondary leading-relaxed">
                Navigate UFLPA requirements, CBP Withhold Release Orders, and supplier due diligence to prevent forced labor violations. Protect your supply chain from detention and reputational damage.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Environmental Standards</h3>
              <p className="text-text-secondary leading-relaxed">
                Comply with green trade regulations, California climate disclosure laws, and product-specific environmental requirements. Prepare for carbon border adjustment mechanisms.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Anti-Corruption Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Implement FCPA compliance programs to prevent bribery in customs clearance, freight forwarding, and government procurement. Avoid criminal prosecution and debarment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="space-y-12">

            {/* Supply Chain ESG Compliance California */}
            <article className="bg-white p-10 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-primary-navy mb-4 font-garamond">Supply Chain ESG Compliance California: The New Frontier of Trade Law</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Supply chain ESG compliance</strong> integrates environmental sustainability, social responsibility (labor rights, human rights), and governance (anti-corruption, transparency) into international trade operations. For California importers, ESG compliance is no longer voluntary—it's legally mandated through:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8 justify-center">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                  <h3 className="font-bold text-green-900 mb-2">Environmental (E)</h3>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                    <li>Carbon emissions tracking</li>
                    <li>Hazardous substance restrictions (REACH, RoHS)</li>
                    <li>Sustainable sourcing requirements</li>
                    <li>Environmental product declarations</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <h3 className="font-bold text-blue-900 mb-2">Social (S)</h3>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                    <li>Forced labor prohibitions (UFLPA, WROs)</li>
                    <li>Child labor screening</li>
                    <li>Fair wage compliance</li>
                    <li>Workplace safety standards</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                  <h3 className="font-bold text-purple-900 mb-2">Governance (G)</h3>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                    <li>FCPA anti-corruption compliance</li>
                    <li>Supply chain transparency (SB 657)</li>
                    <li>Third-party due diligence</li>
                    <li>Whistleblower protection</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">California-Specific ESG Requirements</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                California leads the nation in ESG regulation for importers:
              </p>
              <ul className="list-disc list-inside space-y-3 text-text-secondary mb-6 ml-4">
                <li><strong>California Transparency in Supply Chains Act (SB 657):</strong> Requires retailers/manufacturers with $100M+ revenue to disclose supply chain efforts to eradicate slavery and human trafficking</li>
                <li><strong>California Climate Corporate Data Accountability Act (SB 253):</strong> Requires companies with $1B+ revenue to disclose Scope 1, 2, and 3 greenhouse gas emissions (including imported goods)</li>
                <li><strong>California Climate-Related Financial Risk Act (SB 261):</strong> Mandates climate-related financial risk reporting for companies with $500M+ revenue</li>
                <li><strong>Proposition 65 (Safe Drinking Water Act):</strong> Requires warnings for products containing chemicals known to cause cancer/reproductive harm</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Building an ESG Compliance Program</h3>
              <ol className="list-decimal list-inside space-y-3 text-text-secondary mb-4 ml-4">
                <li><strong>Supply Chain Mapping:</strong> Identify all tiers of suppliers (Tier 1 direct suppliers to Tier 3+ raw material sources)</li>
                <li><strong>Risk Assessment:</strong> Evaluate geographic, industry, and product-specific ESG risks</li>
                <li><strong>Supplier Audits:</strong> Conduct on-site assessments or engage third-party auditors (SMETA, SA8000)</li>
                <li><strong>Contractual Protections:</strong> Require suppliers to certify ESG compliance and indemnify against violations</li>
                <li><strong>Continuous Monitoring:</strong> Screen suppliers against CBP WRO lists, UFLPA Entity List, and sanctions databases</li>
                <li><strong>Corrective Action:</strong> Develop remediation protocols for suppliers that fail ESG standards</li>
                <li><strong>Transparency Reporting:</strong> Publish annual ESG reports to satisfy California disclosure laws</li>
              </ol>

              <div className="bg-primary-navy/5 border-l-4 border-secondary-teal p-6 mt-6">
                <p className="text-text-secondary italic">
                  <strong>Investor and Customer Pressure:</strong> Beyond legal compliance, California businesses face ESG demands from institutional investors (SASB, TCFD frameworks), retail customers (ethical sourcing preferences), and B2B procurement teams. ESG compliance is becoming a competitive differentiator for winning contracts.
                </p>
              </div>
            </article>

            {/* Forced Labor Import Bans California */}
            <article className="bg-white p-10 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-primary-navy mb-4 font-garamond">Forced Labor Import Bans California: 19 USC § 1307 and CBP Enforcement</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>19 USC § 1307</strong> prohibits importation of goods "mined, produced, or manufactured wholly or in part" by forced labor, including <strong>convict labor, forced child labor, indentured labor, and debt bondage</strong>. This century-old statute has become CBP's primary weapon against modern slavery in global supply chains affecting California importers.
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">CBP Withhold Release Orders (WROs)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP has <strong>reasonable suspicion</strong> that goods are made with forced labor, it issues a <strong>Withhold Release Order (WRO)</strong> to detain shipments at the port. If CBP finds <strong>conclusive evidence</strong>, it issues a <strong>Finding</strong>, which results in permanent exclusion and seizure.
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Active WROs Affecting California Importers (2024)</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-900 mb-2">China - Multiple Industries</h4>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                    <li>Cotton and cotton products from Xinjiang</li>
                    <li>Tomatoes and tomato products from Xinjiang</li>
                    <li>Polysilicon (solar panel materials) from Xinjiang</li>
                    <li>Seafood processed by forced labor fleets</li>
                    <li>Electronics components (rare earth minerals)</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-900 mb-2">Malaysia - Palm Oil & Gloves</h4>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                    <li>Palm oil from specific plantations (FGV Holdings, Sime Darby)</li>
                    <li>Disposable gloves from specific manufacturers</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-900 mb-2">Other Countries</h4>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                    <li>Seafood from Taiwan (forced labor on fishing vessels)</li>
                    <li>Gold from Democratic Republic of Congo (child labor in artisanal mining)</li>
                    <li>Tobacco from Malawi (child labor)</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Defending Against WRO Detention</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If your California shipment is detained under a WRO, you have three options:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-text-secondary mb-6 ml-4">
                <li><strong>Export the Goods:</strong> Re-export within 3 months to avoid seizure (you lose the goods but avoid penalties)</li>
                <li><strong>Submit Evidence of Admissibility:</strong> Provide documentation proving goods were NOT made with forced labor (supplier audits, payroll records, wage evidence, working condition certifications)</li>
                <li><strong>Seek Modification or Revocation:</strong> Challenge the WRO itself by demonstrating CBP's reasonable suspicion was unfounded</li>
              </ol>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Due Diligence Best Practices</h3>
              <ul className="list-disc list-inside space-y-3 text-text-secondary mb-4 ml-4">
                <li><strong>Supplier Questionnaires:</strong> Require detailed certifications on labor practices, recruitment fees, wage payment, and freedom of movement</li>
                <li><strong>Third-Party Audits:</strong> Engage social compliance auditors (Verité, BSR, Elevate) for on-site assessments</li>
                <li><strong>Upstream Tracing:</strong> Map supply chains beyond Tier 1 suppliers to identify forced labor risks in raw materials (cotton, palm oil, minerals)</li>
                <li><strong>Worker Interviews:</strong> Conduct confidential interviews with workers (in their native language) to verify conditions</li>
                <li><strong>Payroll Verification:</strong> Review pay stubs, time cards, and bank records to confirm wages meet legal minimums</li>
                <li><strong>Contracts Review:</strong> Ensure employment contracts do not include illegal provisions (passport retention, debt bondage, recruitment fees)</li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 mt-6">
                <p className="text-text-secondary">
                  <strong className="text-red-900">Criminal Prosecution Risk:</strong> Importing forced labor goods with knowledge of the violation can result in criminal charges under 18 USC § 1761 (convict labor) and human trafficking statutes. California importers must implement robust compliance programs to demonstrate lack of knowledge and good faith efforts to prevent forced labor in supply chains.
                </p>
              </div>
            </article>

            {/* UFLPA Compliance */}
            <article className="bg-white p-10 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-primary-navy mb-4 font-garamond">Uyghur Forced Labor Prevention Act California: Rebuttable Presumption Standard</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                The <strong>Uyghur Forced Labor Prevention Act (UFLPA)</strong>, effective June 21, 2022, creates a <strong>rebuttable presumption</strong> that goods mined, produced, or manufactured wholly or in part in the <strong>Xinjiang Uyghur Autonomous Region (XUAR)</strong> of China, or by entities on the <strong>UFLPA Entity List</strong>, are made with forced labor and prohibited from importation. This presumption shifts the burden to importers to prove goods are NOT made with forced labor.
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Industries Most Affected by UFLPA</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6 justify-center">
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">Apparel & Textiles</h4>
                  <p className="text-text-secondary text-sm mb-3">Xinjiang produces 85% of China's cotton and 20% of global cotton. Apparel imports to California face extreme scrutiny.</p>
                  <p className="text-xs text-text-secondary"><strong>CBP Guidance:</strong> Must trace cotton to gin-level and prove non-Xinjiang origin</p>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">Solar Energy</h4>
                  <p className="text-text-secondary text-sm mb-3">Xinjiang produces 45% of global polysilicon for solar panels. California's solar industry faces supply chain crisis.</p>
                  <p className="text-xs text-text-secondary"><strong>CBP Guidance:</strong> Polysilicon must be traced to manufacturer with proof of non-Xinjiang sourcing</p>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">Tomatoes & Food Products</h4>
                  <p className="text-text-secondary text-sm mb-3">Xinjiang tomato paste appears in processed foods. California food importers must verify ingredient sourcing.</p>
                  <p className="text-xs text-text-secondary"><strong>CBP Guidance:</strong> Bill of materials required for all processed food containing tomatoes</p>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-navy mb-2">Electronics & Batteries</h4>
                  <p className="text-text-secondary text-sm mb-3">Xinjiang mines critical minerals (lithium, rare earths). Electronics and EV battery supply chains face UFLPA risk.</p>
                  <p className="text-xs text-text-secondary"><strong>CBP Guidance:</strong> Component-level tracing required for batteries and electronics</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">UFLPA Entity List</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The <strong>UFLPA Entity List</strong> identifies companies involved in forced labor in Xinjiang or working with the Xinjiang government on "poverty alleviation" programs (euphemism for forced labor transfer). As of 2024, the list includes <strong>60+ entities</strong> spanning textiles, agriculture, electronics, and mining. California importers must screen all suppliers against the UFLPA Entity List.
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Overcoming the Rebuttable Presumption</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                To secure release of detained goods, California importers must provide <strong>"clear and convincing evidence"</strong> that goods are not made with forced labor. CBP's UFLPA guidance requires:
              </p>

              <div className="bg-neutral-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-primary-navy mb-3">Required Documentation (5 Categories)</h4>
                <ol className="list-none space-y-3 text-text-secondary">
                  <li><strong>1. Supply Chain Mapping:</strong> Complete supply chain from raw material to finished product, with supplier names, addresses, and UFLPA Entity List screening results</li>
                  <li><strong>2. Due Diligence:</strong> Third-party audits, worker interviews, payroll records, and continuous monitoring programs</li>
                  <li><strong>3. Supply Chain Tracing:</strong> Specific and detailed description of supply chain, including Tier 2 and Tier 3 suppliers for high-risk inputs (cotton, polysilicon, tomatoes)</li>
                  <li><strong>4. Independent Verification:</strong> Evidence from independent third parties (not supplier self-certifications) confirming no Xinjiang nexus</li>
                  <li><strong>5. No UFLPA Entity List Ties:</strong> Proof that no entities in supply chain appear on UFLPA Entity List or have business relationships with listed entities</li>
                </ol>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">UFLPA Strategy for California Importers</h3>
              <ul className="list-disc list-inside space-y-3 text-text-secondary mb-4 ml-4">
                <li><strong>Supply Chain Pivot:</strong> Shift sourcing away from China entirely for high-risk products (Vietnam, India, Bangladesh for apparel; South Korea for polysilicon)</li>
                <li><strong>Upstream Tracing:</strong> For China-sourced goods, trace inputs to raw material level and obtain documentary proof of non-Xinjiang origin (bills of lading, warehouse receipts, gin records)</li>
                <li><strong>Third-Party Testing:</strong> Use isotopic analysis to verify cotton origin or blockchain tracing for polysilicon</li>
                <li><strong>Pre-Clearance Programs:</strong> Work with CBP Centers of Excellence and Expertise (CEE) to pre-clear high-risk shipments</li>
                <li><strong>Legal Representation:</strong> Retain experienced trade counsel before detention occurs to prepare documentation packages</li>
              </ul>

              <div className="bg-primary-navy/5 border-l-4 border-secondary-teal p-6 mt-6">
                <p className="text-text-secondary italic">
                  <strong>UFLPA Enforcement Statistics (2024):</strong> CBP has detained over 6,000 UFLPA shipments valued at $2+ billion. Only 15-20% of detained shipments are released after importers provide evidence. The remaining shipments are either exported or seized. California importers account for 40%+ of UFLPA detentions due to port concentration.
                </p>
              </div>
            </article>

            {/* Green Trade Regulations California */}
            <article className="bg-white p-10 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-primary-navy mb-4 font-garamond">Green Trade Regulations California: Environmental Compliance for Importers</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Green trade regulations</strong> integrate environmental standards into international trade, including <strong>carbon emissions tracking, hazardous substance restrictions, sustainable sourcing requirements, and circular economy mandates</strong>. California importers must comply with federal environmental import rules and California-specific climate regulations.
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Federal Environmental Import Requirements</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                  <h4 className="font-bold text-green-900 mb-2">EPA TSCA Compliance (Toxic Substances Control Act)</h4>
                  <p className="text-text-secondary text-sm mb-2">Chemical imports must comply with TSCA Section 5 (new chemical notifications), Section 6 (restrictions on hazardous chemicals), and TSCA Section 13 (import certification).</p>
                  <p className="text-xs text-text-secondary"><strong>California Impact:</strong> All chemical imports must include TSCA certification at entry</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                  <h4 className="font-bold text-green-900 mb-2">EPA FIFRA (Pesticide Imports)</h4>
                  <p className="text-text-secondary text-sm mb-2">Pesticide imports require EPA registration and Notice of Arrival (NOA) to EPA before entry. State-level California Department of Pesticide Regulation (CDPR) also regulates pesticide sales.</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                  <h4 className="font-bold text-green-900 mb-2">DOT/NHTSA Fuel Economy Standards</h4>
                  <p className="text-text-secondary text-sm mb-2">Imported vehicles must comply with Corporate Average Fuel Economy (CAFE) standards. California has separate emissions standards under Clean Air Act waiver.</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                  <h4 className="font-bold text-green-900 mb-2">Energy Star & DOE Energy Conservation</h4>
                  <p className="text-text-secondary text-sm mb-2">Appliances (refrigerators, air conditioners, lighting) must meet DOE energy conservation standards and display EnergyGuide labels.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">California Climate Regulations for Importers</h3>
              <ul className="list-disc list-inside space-y-3 text-text-secondary mb-6 ml-4">
                <li><strong>SB 253 Scope 3 Emissions Reporting:</strong> California companies with $1B+ revenue must disclose emissions from imported goods (Scope 3 Category 1: Purchased Goods and Services). Requires supply chain carbon accounting.</li>
                <li><strong>California Air Resources Board (CARB) Standards:</strong> Stricter vehicle emissions standards than federal EPA rules. Imported vehicles must meet California Tier 3 emissions standards.</li>
                <li><strong>Proposition 65 Chemical Warnings:</strong> Products containing chemicals on Prop 65 list must carry warnings. Importers must test products and provide labels.</li>
                <li><strong>California RoHS (Restriction of Hazardous Substances):</strong> Electronics must comply with lead, mercury, cadmium, and hexavalent chromium restrictions.</li>
                <li><strong>California Plastic Pollution Producer Responsibility Act (SB 54):</strong> Packaging materials must meet recycled content requirements. Importers responsible for packaging fees.</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Sustainable Sourcing Certification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Major retailers and corporate buyers increasingly require sustainable sourcing certifications:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4 ml-4">
                <li><strong>FSC (Forest Stewardship Council):</strong> Sustainably sourced wood and paper products</li>
                <li><strong>MSC (Marine Stewardship Council):</strong> Sustainably harvested seafood</li>
                <li><strong>Fair Trade Certified:</strong> Ethically sourced coffee, cocoa, sugar, and textiles</li>
                <li><strong>RSPO (Roundtable on Sustainable Palm Oil):</strong> Sustainably sourced palm oil</li>
                <li><strong>BCI (Better Cotton Initiative):</strong> Sustainably sourced cotton (alternative to Xinjiang cotton)</li>
              </ul>
            </article>

            {/* Carbon Border Adjustment */}
            <article className="bg-white p-10 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-primary-navy mb-4 font-garamond">Carbon Border Adjustment Issues California: Preparing for Climate Tariffs</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Carbon border adjustment mechanisms (CBAM)</strong> are tariffs imposed on imported goods based on their <strong>embodied carbon emissions</strong>. The European Union implemented CBAM in 2023 (reporting phase) with full tariffs starting in 2026. While the U.S. has not yet enacted carbon border tariffs, California businesses exporting to the EU must comply with CBAM reporting, and future U.S. climate trade policy may follow the EU model.
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">EU Carbon Border Adjustment Mechanism (CBAM)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBAM applies to imports of <strong>carbon-intensive products</strong> into the EU:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li><strong>Covered Products:</strong> Cement, iron and steel, aluminum, fertilizers, electricity, hydrogen (expanding to chemicals, polymers, and other sectors)</li>
                <li><strong>Reporting Requirement:</strong> California exporters to EU must report embodied emissions quarterly (2024-2025)</li>
                <li><strong>CBAM Certificates:</strong> Starting 2026, importers must purchase CBAM certificates equal to carbon price differential between EU and origin country</li>
                <li><strong>Carbon Accounting:</strong> Requires product-specific emissions data from production process (not industry averages)</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Potential U.S. Carbon Border Tariffs</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Congressional proposals (bipartisan PROVE IT Act, FAIR Transition and Competition Act) would impose carbon border tariffs on imports to the U.S. If enacted, California importers would face:
              </p>
              <div className="bg-neutral-50 p-6 rounded-lg mb-6">
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-2">
                  <li>Carbon intensity measurement for all imported industrial goods (steel, aluminum, chemicals, cement)</li>
                  <li>Tariffs based on difference between U.S. carbon price and foreign carbon price</li>
                  <li>Supply chain carbon tracking from raw material extraction to port of export</li>
                  <li>Potential rebates for goods from countries with equivalent carbon pricing mechanisms</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Preparing for Carbon Trade Policy</h3>
              <ol className="list-decimal list-inside space-y-3 text-text-secondary mb-4 ml-4">
                <li><strong>Carbon Footprint Assessment:</strong> Calculate Scope 1-3 emissions for imported products using GHG Protocol or ISO 14067 standards</li>
                <li><strong>Supplier Carbon Data:</strong> Require suppliers to provide product carbon footprint (PCF) data with third-party verification</li>
                <li><strong>Low-Carbon Sourcing:</strong> Shift to suppliers using renewable energy or carbon-neutral production processes</li>
                <li><strong>Carbon Offsets:</strong> Purchase verified carbon offsets to neutralize embodied emissions</li>
                <li><strong>Monitor Legislation:</strong> Track U.S. carbon border adjustment proposals and prepare for compliance</li>
              </ol>
            </article>

            {/* FCPA Trade Issues */}
            <article className="bg-white p-10 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-primary-navy mb-4 font-garamond">Bribery, Corruption & FCPA Related Trade Issues California</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                The <strong>Foreign Corrupt Practices Act (FCPA)</strong> prohibits U.S. companies (including California importers/exporters) from bribing foreign officials to obtain or retain business. In international trade, FCPA risks arise in customs clearance, government procurement, export licensing, and third-party relationships. Violations carry severe penalties: <strong>up to $25 million in corporate fines, individual imprisonment up to 20 years, and debarment from government contracts</strong>.
              </p>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Common FCPA Violations in International Trade</h3>

              <div className="space-y-4 mb-6">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-900 mb-2">Customs Bribery</h4>
                  <p className="text-text-secondary mb-2">Paying foreign customs officials for:</p>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                    <li>Favorable HTS classification (lower duty rates)</li>
                    <li>Undervalued customs declarations</li>
                    <li>Expedited clearance without proper inspection</li>
                    <li>False certificates of origin for trade preferences</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-900 mb-2">Freight Forwarder & Customs Broker Kickbacks</h4>
                  <p className="text-text-secondary mb-2">Payments by third-party logistics providers to:</p>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                    <li>Port officials for preferential berthing or container release</li>
                    <li>Quarantine/inspection officers to skip agricultural inspections</li>
                    <li>Licensing officials for export permit approvals</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-900 mb-2">Government Procurement Corruption</h4>
                  <p className="text-text-secondary mb-2">Bribes to foreign government buyers for contracts involving:</p>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                    <li>Infrastructure projects (construction materials, equipment)</li>
                    <li>State-owned enterprise purchases (SOE procurement)</li>
                    <li>Government tenders requiring local agent "commissions"</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">Third-Party Due Diligence: Red Flags</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                California importers must conduct <strong>risk-based due diligence</strong> on freight forwarders, customs brokers, and foreign agents. FCPA red flags include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>Requests for cash payments or payments to third-party accounts</li>
                <li>Excessive "consulting fees" or "commissions" with vague justification</li>
                <li>Offshore shell company invoicing (tax havens)</li>
                <li>Family relationships between agent and foreign government officials</li>
                <li>Reputation for "getting things done" through connections rather than expertise</li>
                <li>Refusal to certify FCPA compliance or provide financial transparency</li>
                <li>Requests to falsify shipping documents or certificates</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond mt-8">FCPA Compliance Program for California Importers</h3>
              <ol className="list-decimal list-inside space-y-3 text-text-secondary mb-4 ml-4">
                <li><strong>Written Anti-Corruption Policy:</strong> Prohibition on bribes, facilitation payments, and gifts to foreign officials</li>
                <li><strong>Third-Party Due Diligence:</strong> Background checks on freight forwarders, customs brokers, and agents in high-risk countries</li>
                <li><strong>Contractual Protections:</strong> FCPA compliance clauses in contracts with right to audit and termination for violations</li>
                <li><strong>Training:</strong> Annual FCPA training for employees involved in international trade (logistics, procurement, sales)</li>
                <li><strong>Gift and Hospitality Policy:</strong> Limits on value and approval requirements for business courtesies to government officials</li>
                <li><strong>Internal Controls:</strong> Segregation of duties for payments, dual signatures for high-risk transactions</li>
                <li><strong>Anonymous Reporting:</strong> Whistleblower hotline for employees to report suspected corruption</li>
                <li><strong>Voluntary Disclosure:</strong> If violations discovered, self-report to DOJ/SEC for penalty mitigation</li>
              </ol>

              <div className="bg-primary-navy/5 border-l-4 border-secondary-teal p-6 mt-6">
                <p className="text-text-secondary italic">
                  <strong>DOJ FCPA Corporate Enforcement Policy:</strong> Companies with effective compliance programs that self-disclose violations and cooperate with investigations may receive declinations (no prosecution) or reduced penalties (up to 50% reduction). California businesses should implement robust FCPA programs before violations occur.
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
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Forced Labor Compliance Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#customs-defense-litigation" className="service-link">
                    <span className="service-link__title">UFLPA Detention Defense</span>
                    <p className="service-link__description">Release detained Xinjiang-related goods</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#regulatory-compliance-advisory" className="service-link">
                    <span className="service-link__title">WRO Response Services</span>
                    <p className="service-link__description">Withhold Release Order admissibility packages</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#regulatory-compliance-advisory" className="service-link">
                    <span className="service-link__title">Supply Chain Due Diligence</span>
                    <p className="service-link__description">Supplier audits and ESG compliance programs</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Environmental & Anti-Corruption */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Environmental & FCPA Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#regulatory-compliance-advisory" className="service-link">
                    <span className="service-link__title">Green Trade Compliance</span>
                    <p className="service-link__description">California climate disclosure & CBAM</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#regulatory-compliance-advisory" className="service-link">
                    <span className="service-link__title">FCPA Compliance Programs</span>
                    <p className="service-link__description">Anti-corruption controls for trade</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#practice-areas" className="service-link">
                    <span className="service-link__title">All Practice Areas</span>
                    <p className="service-link__description">Full range of trade law services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Related Guides */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Related Compliance Guides</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#tariffs-duties-classification-guide" className="service-link">
                    <span className="service-link__title">Tariffs & Classification Guide</span>
                    <p className="service-link__description">HTS classification & trade remedies</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#ecommerce-digital-trade-guide" className="service-link">
                    <span className="service-link__title">E-Commerce Trade Guide</span>
                    <p className="service-link__description">Section 321 & online seller compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Helpful Resources */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful ESG Compliance Resources</h3>
            <div className="grid md:grid-cols-4 gap-6 justify-center">
              <a href="#resources/uflpa-compliance-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">UFLPA Compliance Guide</h4>
                <p className="text-sm text-text-secondary">Forced labor detention defense strategies</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#resources/wro-defense" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">WRO Defense Toolkit</h4>
                <p className="text-sm text-text-secondary">Withhold Release Order response guide</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#resources/fcpa-trade-compliance" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">FCPA for Importers</h4>
                <p className="text-sm text-text-secondary">Anti-corruption best practices</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#trade-law-faq" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">FAQ Center</h4>
                <p className="text-sm text-text-secondary">Common ESG compliance questions</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Build Ethical and Compliant Supply Chains
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            California importers face increasing ESG scrutiny from CBP, DOJ, and other enforcement agencies. Our trade law practice helps you implement forced labor compliance programs, navigate UFLPA requirements, and build anti-corruption controls. Contact us for expert guidance on supply chain ethics and ESG compliance.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">
              Schedule Free Consultation
            </Button>
            <Button href={siteConfig.phoneTel} variant="outline">
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>

      {/* Evaluation Form */}
      <EvaluationForm theme="light" />
    </main>
  );
};

export default SupplyChainESGGuidePage;
