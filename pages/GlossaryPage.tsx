import React, { lazy, Suspense, useEffect, useState } from 'react';

import { useMeta } from '../hooks/useMeta';
import { Link } from 'react-router-dom';
import { generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const GlossaryPage: React.FC = () => {
  // State for accordion functionality
  const [openTerms, setOpenTerms] = useState<{[key: string]: boolean}>({});

  // Toggle function for glossary terms
  const toggleTerm = (categoryIndex: number, termIndex: number) => {
    const key = `${categoryIndex}-${termIndex}`;
    setOpenTerms(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Check if term is open
  const isTermOpen = (categoryIndex: number, termIndex: number) => {
    return openTerms[`${categoryIndex}-${termIndex}`] || false;
  };

  // Scroll to category function for in-page navigation
  const scrollToCategory = (categoryIndex: number) => {
    const element = document.getElementById(`category-${categoryIndex}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const glossaryTerms = [
    {
      category: 'Customs & Import Compliance',
      terms: [
        {
          term: 'AD/CVD (Antidumping & Countervailing Duties)',
          definition: 'Additional tariffs imposed on imported goods to offset unfair pricing (dumping) or foreign government subsidies. Administered by the Department of Commerce and enforced by CBP.',
          relatedLink: { text: 'Tariffs & Classification Guide', url: '#tariffs-duties-classification-guide' },
        },
        {
          term: 'ABI (Automated Broker Interface)',
          definition: 'Electronic system used by customs brokers to transmit entry information to CBP. Required for all commercial imports into the United States.',
        },
        {
          term: 'ACE (Automated Commercial Environment)',
          definition: 'CBP\'s primary electronic platform for processing imports and exports. Replaces older systems and enables Single Window compliance reporting.',
        },
        {
          term: 'Binding Ruling',
          definition: 'Official written determination by CBP on the tariff classification, country of origin, or other customs treatment of specific merchandise. Valid for 6 years and binding on CBP.',
        },
        {
          term: 'CBP (U.S. Customs and Border Protection)',
          definition: 'Federal agency responsible for regulating imports/exports, collecting duties, and enforcing customs laws. Part of the Department of Homeland Security.',
        },
        {
          term: 'CF 28 (Request for Information)',
          definition: 'Official CBP document requesting additional information about an import entry. Must be responded to within the specified timeframe to avoid penalties.',
        },
        {
          term: 'CF 29 (Notice of Action)',
          definition: 'CBP document proposing to increase duties, demand additional documentation, or take other enforcement action. Importers have 30 days to respond.',
        },
        {
          term: 'Commercial Invoice',
          definition: 'Primary document describing imported goods, including description, quantity, value, terms of sale, and parties involved. Required for all commercial imports.',
        },
        {
          term: 'Consumption Entry',
          definition: 'The most common type of customs entry for goods being imported for sale or use in the United States. Duties are paid at time of entry.',
        },
        {
          term: 'Country of Origin',
          definition: 'The country where merchandise was grown, produced, or manufactured. Determines eligibility for duty preferences and compliance with marking requirements.',
        },
        {
          term: 'Customs Bond',
          definition: 'Financial guarantee that ensures payment of duties, taxes, and penalties. Required for most imports. Available as single transaction or continuous (annual) bonds.',
        },
        {
          term: 'Customs Broker',
          definition: 'Licensed professional authorized to prepare and file customs entries on behalf of importers. Must pass CBP examination and maintain license through continuing education.',
        },
        {
          term: 'Drawback',
          definition: 'Refund of 99% of customs duties paid on imported goods that are subsequently exported or used in manufacturing exported products. Can result in significant duty savings.',
          relatedLink: { text: 'Regulatory Compliance Services', url: '#regulatory-compliance-advisory' },
        },
        {
          term: 'Entry Summary (CBP Form 7501)',
          definition: 'Document filed within 10 days of release showing final calculation of duties, taxes, and fees. Creates official record of import transaction.',
        },
        {
          term: 'First Sale Rule',
          definition: 'Method of customs valuation using the price from the first sale in a multi-tiered transaction. Can reduce dutiable value if properly documented.',
        },
        {
          term: 'Focused Assessment (FA)',
          definition: 'CBP\'s primary audit program examining importer compliance in specific high-risk areas. Typically focuses on 1-3 issues over 2-4 years of transactions.',
          relatedLink: { text: 'Customs Defense & Litigation', url: '#customs-defense-litigation' },
        },
        {
          term: 'Foreign Trade Zone (FTZ)',
          definition: 'Designated area within the U.S. where imported goods can be stored, manufactured, or assembled without paying customs duties until entering U.S. commerce.',
        },
        {
          term: 'Free Trade Agreement (FTA)',
          definition: 'Treaty between countries providing preferential duty treatment for qualifying goods. Examples include USMCA, CAFTA-DR, and various bilateral agreements.',
        },
        {
          term: 'HTSUS (Harmonized Tariff Schedule)',
          definition: 'Official U.S. tariff classification system containing 10-digit codes that determine duty rates, statistical reporting, and regulatory requirements for imports.',
          relatedLink: { text: 'HTS Classification Guide', url: '#tariffs-duties-classification-guide' },
        },
        {
          term: 'Import Compliance Program (ICP)',
          definition: 'Written internal procedures documenting an importer\'s processes for ensuring customs compliance. Demonstrates reasonable care and may mitigate penalties.',
          relatedLink: { text: 'Regulatory Compliance Advisory', url: '#regulatory-compliance-advisory' },
        },
        {
          term: 'ISF (Importer Security Filing / 10+2)',
          definition: 'Electronic filing required 24 hours before ocean cargo is loaded at foreign port. Contains 10 data elements about shipment. Violations carry $5,000 penalties.',
        },
        {
          term: 'Liquidation',
          definition: 'Final determination by CBP of duties owed on an entry. Occurs within 314 days of entry date unless extended. Creates statute of limitations for most claims.',
        },
        {
          term: 'Informed Compliance',
          definition: 'CBP\'s philosophy that importers are responsible for knowing customs laws and ensuring compliance. Ignorance is not a defense to violations.',
        },
        {
          term: 'Protest (CBP Form 19)',
          definition: 'Formal challenge to CBP decision regarding classification, value, or other customs treatment. Must be filed within 180 days of liquidation.',
        },
        {
          term: 'Prior Disclosure',
          definition: 'Voluntary submission to CBP of information about potential customs violations before CBP discovers them. Can result in reduced or eliminated penalties.',
          relatedLink: { text: 'Prior Disclosure Services', url: '#regulatory-compliance-advisory' },
        },
        {
          term: 'Reasonable Care',
          definition: 'Legal standard requiring importers to exercise care and competence expected of a reasonably prudent person in ensuring customs compliance.',
        },
        {
          term: 'Recordkeeping Requirements',
          definition: 'Obligation to maintain import-related records for 5 years from entry date. Records must be producible within 30 days of CBP request.',
        },
        {
          term: 'Section 301 Tariffs',
          definition: 'Additional duties imposed under Trade Act of 1974 on imports from countries engaging in unfair trade practices. Commonly applied to Chinese goods.',
          relatedLink: { text: 'Section 301 Tariffs Guide', url: '#tariffs-duties-classification-guide' },
        },
        {
          term: 'Section 321 (De Minimis)',
          definition: 'Exemption from duties and taxes for shipments valued under $800 per person per day. Commonly used for e-commerce and express shipments.',
        },
        {
          term: 'Section 232 Tariffs',
          definition: 'Additional duties imposed on imports determined to threaten national security. Applied to steel, aluminum, and other strategic goods.',
        },
        {
          term: 'Substantial Transformation',
          definition: 'Processing or manufacturing that results in a new and different article with a different name, character, or use. Determines country of origin.',
        },
        {
          term: 'Transaction Value',
          definition: 'Primary method of customs valuation based on the price actually paid or payable for imported merchandise. Includes all costs incidental to sale.',
        },
        {
          term: 'USMCA Certificate of Origin',
          definition: 'Document certifying that goods qualify for preferential duty treatment under the United States-Mexico-Canada Agreement. Required to claim USMCA benefits.',
        },
        {
          term: 'Assists',
          definition: 'Items provided by the buyer to the seller free of charge or at reduced cost for use in producing or selling imported goods. Must be added to transaction value per 19 CFR § 152.103(d).',
        },
        {
          term: 'Appraisement',
          definition: 'CBP determination of the value of imported merchandise for duty purposes. Forms the basis for calculating ad valorem duties.',
        },
        {
          term: 'Bonded Warehouse',
          definition: 'CBP-approved facility where imported goods can be stored without paying duties until withdrawn for consumption or export. Subject to strict recordkeeping and security requirements.',
        },
        {
          term: 'Certificate of Compliance',
          definition: 'Document certifying that goods meet applicable standards or regulations (e.g., FDA, CPSC, EPA). May be required for entry clearance.',
        },
        {
          term: 'Deductive Value',
          definition: 'Method of customs valuation based on resale price in U.S. minus specified deductions. Third method in hierarchy when transaction value cannot be used.',
        },
        {
          term: 'Computed Value',
          definition: 'Method of customs valuation based on cost of production plus profit. Fourth method used when transaction and deductive value unavailable.',
        },
        {
          term: 'General Rate of Duty (Column 1)',
          definition: 'Normal trade relations (NTR) duty rate applied to imports from WTO member countries. Lower than Column 2 rates for non-NTR countries.',
        },
        {
          term: 'Column 2 Duty Rate',
          definition: 'Higher duty rate applied to imports from countries without normal trade relations. Significantly higher than Column 1 rates.',
        },
        {
          term: 'Related Party Transaction',
          definition: 'Import transaction between parties with familial, business, or ownership relationship. Requires additional scrutiny of transaction value per 19 CFR § 152.103(g).',
        },
        {
          term: 'Royalties and License Fees',
          definition: 'Payments for use of intellectual property that must be added to transaction value if they are condition of sale and relate to imported goods.',
        },
        {
          term: 'TIB Entry (Temporary Import Bond)',
          definition: 'Entry type allowing temporary importation of goods without payment of duties. Common for trade shows, repairs, and temporary use. Must be exported within specified period.',
        },
        {
          term: 'Type 86 Entry',
          definition: 'Simplified entry process for Section 321 shipments valued under $800. Used primarily for e-commerce and express shipments.',
        },
        {
          term: 'Quick Response Audit (QRA)',
          definition: 'Rapid CBP compliance review focusing on specific high-risk issues. Less comprehensive than Focused Assessment but can lead to penalties.',
        },
        {
          term: 'Reconciliation Entry',
          definition: 'CBP program allowing importers to declare estimated duties at entry and file final accurate information later. Useful when exact information unavailable at time of import.',
        },
      ],
    },
    {
      category: 'Export Controls & Sanctions',
      terms: [
        {
          term: 'AECA (Arms Export Control Act)',
          definition: 'Statute authorizing the President to control export of defense articles and services. Implemented through ITAR regulations.',
        },
        {
          term: 'BIS (Bureau of Industry and Security)',
          definition: 'Department of Commerce agency administering the Export Administration Regulations (EAR) for dual-use and commercial items.',
        },
        {
          term: 'CCL (Commerce Control List)',
          definition: 'List of items subject to EAR controls, organized by Export Control Classification Number (ECCN). Determines licensing requirements for exports.',
        },
        {
          term: 'DDTC (Directorate of Defense Trade Controls)',
          definition: 'State Department office administering ITAR. Issues export licenses for defense articles and technical data.',
        },
        {
          term: 'Deemed Export',
          definition: 'Transfer of controlled technology to foreign national within the United States. Requires same authorization as physical export.',
          relatedLink: { text: 'Export Controls & Sanctions', url: '#export-controls-sanctions' },
        },
        {
          term: 'De Minimis Rules',
          definition: 'Rules allowing export of products containing limited amounts of U.S.-controlled content without license. Thresholds vary by destination and technology.',
        },
        {
          term: 'Dual-Use Items',
          definition: 'Goods and technology having both commercial and military applications. Subject to EAR controls but not as restricted as defense articles.',
        },
        {
          term: 'EAR (Export Administration Regulations)',
          definition: 'Regulations controlling export of dual-use items, commodities, software, and technology for national security and foreign policy reasons.',
          relatedLink: { text: 'EAR Compliance Services', url: '#export-controls-sanctions' },
        },
        {
          term: 'EAR99',
          definition: 'Classification for items subject to EAR but not listed on CCL. Most commercial products. Generally exportable without license except to embargoed countries.',
        },
        {
          term: 'ECCN (Export Control Classification Number)',
          definition: 'Five-character alphanumeric designation identifying items on the Commerce Control List. Determines licensing requirements and restrictions.',
        },
        {
          term: 'Encryption Controls',
          definition: 'Specific export controls for products using encryption technology. Subject to licensing even for commercial software and hardware.',
        },
        {
          term: 'Entity List',
          definition: 'BIS list of foreign parties subject to license requirements for all EAR-controlled items. Includes companies engaged in activities contrary to U.S. interests.',
        },
        {
          term: 'ITAR (International Traffic in Arms Regulations)',
          definition: 'Regulations controlling export of defense articles, services, and technical data listed on the U.S. Munitions List.',
          relatedLink: { text: 'ITAR Compliance', url: '#export-controls-sanctions' },
        },
        {
          term: 'License Exception',
          definition: 'Authorization allowing export without individual validated license under specific conditions. Common exceptions include TMP (temporary exports) and ENC (encryption).',
        },
        {
          term: 'OFAC (Office of Foreign Assets Control)',
          definition: 'Treasury Department office administering economic sanctions programs. Maintains Specially Designated Nationals (SDN) list and country-specific sanctions.',
          relatedLink: { text: 'OFAC Sanctions Compliance', url: '#export-controls-sanctions' },
        },
        {
          term: 'SDN List (Specially Designated Nationals)',
          definition: 'OFAC list of individuals and entities with whom U.S. persons are prohibited from doing business. Includes terrorists, drug traffickers, and sanctioned parties.',
        },
        {
          term: 'TAA (Technical Assistance Agreement)',
          definition: 'Agreement with DDTC authorizing disclosure of ITAR-controlled technical data or defense services to foreign persons.',
        },
        {
          term: 'Technology Control Plan (TCP)',
          definition: 'Written procedures for protecting controlled technical data and preventing unauthorized exports. Required for ITAR compliance programs.',
        },
        {
          term: 'USML (U.S. Munitions List)',
          definition: 'List of defense articles and services subject to ITAR controls. Organized into 21 categories covering military equipment and technology.',
        },
        {
          term: 'VEU (Voluntary Self-Disclosure)',
          definition: 'Voluntary submission to BIS or DDTC of information about potential export control violations before government discovers them. May result in reduced penalties.',
        },
      ],
    },
    {
      category: 'Trade Compliance & ESG',
      terms: [
        {
          term: 'C-TPAT (Customs-Trade Partnership Against Terrorism)',
          definition: 'Voluntary CBP program providing benefits to companies demonstrating robust supply chain security. Members receive expedited processing and reduced inspections.',
        },
        {
          term: 'Due Diligence',
          definition: 'Investigation and verification process to ensure compliance with laws and regulations. Required for reasonable care in customs and forced labor contexts.',
        },
        {
          term: 'FCPA (Foreign Corrupt Practices Act)',
          definition: 'U.S. law prohibiting bribery of foreign officials and requiring accurate books and records. Applies to U.S. companies operating internationally.',
          relatedLink: { text: 'Supply Chain ESG Compliance', url: '#supply-chain-esg-compliance-guide' },
        },
        {
          term: 'Forced Labor Import Ban',
          definition: 'Prohibition on importing goods made wholly or in part with forced labor. Enforced through Withhold Release Orders (WROs) and UFLPA.',
          relatedLink: { text: 'Forced Labor Compliance', url: '#supply-chain-esg-compliance-guide' },
        },
        {
          term: 'Human Rights Due Diligence',
          definition: 'Process of identifying, preventing, and mitigating human rights risks in supply chains. Increasingly required by law and corporate policies.',
        },
        {
          term: 'Supply Chain Mapping',
          definition: 'Documentation of all tiers of suppliers from raw materials to finished goods. Essential for forced labor due diligence and origin verification.',
        },
        {
          term: 'UFLPA (Uyghur Forced Labor Prevention Act)',
          definition: 'Law creating rebuttable presumption that goods from Xinjiang, China are made with forced labor and cannot be imported unless proven otherwise.',
          relatedLink: { text: 'UFLPA Compliance Guide', url: '#supply-chain-esg-compliance-guide' },
        },
        {
          term: 'UFLPA Entity List',
          definition: 'List of companies determined to source from or operate in Xinjiang. Goods from listed entities face high scrutiny and detention risk.',
        },
        {
          term: 'WRO (Withhold Release Order)',
          definition: 'CBP order detaining imports suspected of being made with forced labor. Goods held until importer proves they are not made with forced labor.',
        },
      ],
    },
    {
      category: 'Customs Enforcement & Penalties',
      terms: [
        {
          term: 'Culpability',
          definition: 'Degree of fault in customs violations, ranging from negligence to gross negligence to fraud. Determines penalty amount and enforcement action.',
        },
        {
          term: 'False Claims Act (FCA)',
          definition: 'Federal law imposing liability for knowingly presenting false claims to the government. Applies to customs entries and can result in treble damages.',
          relatedLink: { text: 'False Claims Act Defense', url: '#customs-defense-litigation' },
        },
        {
          term: 'Gross Negligence',
          definition: 'Failure to exercise care that even a careless person would use. Higher penalty level than negligence in customs violations.',
        },
        {
          term: 'Fraud',
          definition: 'Intentional misrepresentation or concealment in customs transactions. Highest penalty level and can result in criminal prosecution.',
        },
        {
          term: 'Mitigation',
          definition: 'Process of requesting reduction of CBP penalties based on mitigating factors. Requires detailed submission explaining circumstances.',
          relatedLink: { text: 'Penalty Mitigation Services', url: '#customs-defense-litigation' },
        },
        {
          term: 'Negligence',
          definition: 'Failure to exercise reasonable care and competence in customs matters. Lowest culpability level but still subject to penalties.',
        },
        {
          term: 'Notice of Penalty or Liquidated Damages',
          definition: 'Formal CBP notice assessing monetary penalty or liquidated damages. Importer must pay or petition within 60 days.',
        },
        {
          term: 'Prepenalty Notice',
          definition: 'Preliminary notice giving importer opportunity to respond before CBP issues formal penalty. Response can avoid or reduce penalty.',
        },
        {
          term: 'Seizure',
          definition: 'CBP taking physical custody of goods suspected of violating customs laws. Can result in forfeiture if violation proven.',
          relatedLink: { text: 'Seizure Defense', url: '#customs-defense-litigation' },
        },
        {
          term: 'Supplemental Information Letter (SIL)',
          definition: 'Request for additional information about potential customs violation. Opportunity to correct errors before formal enforcement action.',
        },
      ],
    },
    {
      category: 'Litigation & Judicial Review',
      terms: [
        {
          term: 'CIT (Court of International Trade)',
          definition: 'Federal court with exclusive jurisdiction over customs disputes, including classification, valuation, country of origin, and penalty cases.',
          relatedLink: { text: 'CIT Litigation', url: '#customs-defense-litigation' },
        },
        {
          term: 'CAFC (Court of Appeals for the Federal Circuit)',
          definition: 'Federal appeals court hearing appeals from Court of International Trade decisions. Final level before Supreme Court.',
        },
        {
          term: 'Summons',
          definition: 'Legal action initiating lawsuit in Court of International Trade. Must be filed within 180 days of protest denial or two years of protest filing.',
        },
        {
          term: 'Administrative Protective Order (APO)',
          definition: 'Court order allowing limited access to confidential business information in trade remedy proceedings.',
        },
        {
          term: 'Motion for Judgment',
          definition: 'Request to CIT to rule in favor of moving party based on legal arguments. Common in customs litigation.',
        },
        {
          term: 'Remand',
          definition: 'CIT order sending case back to CBP or Commerce for reconsideration. Agency must issue new determination addressing court\'s concerns.',
        },
        {
          term: 'Sustained Rate',
          definition: 'Final AD/CVD rate that survives judicial review. Becomes definitive assessment for entries during review period.',
        },
        {
          term: 'Injunction',
          definition: 'Court order prohibiting CBP from taking enforcement action pending litigation outcome. Difficult to obtain in customs cases.',
        },
        {
          term: 'Reliquidation',
          definition: 'CBP correction of liquidated entry. Can occur voluntarily, by protest, or by court order.',
        },
      ],
    },
    {
      category: 'Trade Remedies & Investigations',
      terms: [
        {
          term: 'Commerce (Department of Commerce)',
          definition: 'Federal department administering antidumping, countervailing duty, and Section 232 investigations through ITA and BIS.',
        },
        {
          term: 'ITC (International Trade Commission)',
          definition: 'Independent federal agency determining whether U.S. industries are injured by unfair imports in AD/CVD and safeguard investigations.',
        },
        {
          term: 'ITA (International Trade Administration)',
          definition: 'Commerce Department agency conducting antidumping and countervailing duty investigations and calculating duty rates.',
        },
        {
          term: 'Petition',
          definition: 'Formal request by U.S. industry for Commerce and ITC to investigate unfair trade practices. Triggers AD/CVD investigation.',
        },
        {
          term: 'Sunset Review',
          definition: 'Review conducted every 5 years to determine whether to continue AD/CVD orders. Orders terminated unless likely to continue injury.',
        },
        {
          term: 'Scope Ruling',
          definition: 'Commerce determination whether specific merchandise is covered by AD/CVD order. Can be requested to clarify coverage.',
        },
        {
          term: 'Dumping Margin',
          definition: 'Difference between normal value (fair market value) and export price. Expressed as percentage, determines AD duty rate.',
        },
        {
          term: 'Normal Value',
          definition: 'Fair market value of merchandise in home market or third country. Compared to U.S. price to calculate dumping margin.',
        },
        {
          term: 'Export Price (EP)',
          definition: 'Price of merchandise sold to unrelated U.S. buyer before importation. Used to calculate dumping margin in AD cases.',
        },
        {
          term: 'Constructed Export Price (CEP)',
          definition: 'Price of merchandise sold to related U.S. buyer or after importation. Adjusted for various costs to determine AD margin.',
        },
        {
          term: 'Less Than Fair Value (LTFV)',
          definition: 'Determination that merchandise is being sold in U.S. at less than normal value. Required finding for AD order.',
        },
        {
          term: 'Material Injury',
          definition: 'Harm to U.S. industry that is not inconsequential, immaterial, or unimportant. ITC must find material injury to impose AD/CVD duties.',
        },
        {
          term: 'Like Product',
          definition: 'Domestically produced merchandise identical or similar to imported product. Used to define U.S. industry in AD/CVD cases.',
        },
        {
          term: 'Administrative Review',
          definition: 'Annual review of AD/CVD orders to determine company-specific duty rates. Respondents must request participation.',
        },
        {
          term: 'New Shipper Review (NSR)',
          definition: 'Expedited review for companies not included in original AD/CVD investigation. Allows new exporters to get individual rates.',
        },
        {
          term: 'Changed Circumstances Review',
          definition: 'Review to modify or revoke AD/CVD order based on changed conditions in market or industry.',
        },
        {
          term: 'All Others Rate',
          definition: 'AD/CVD duty rate applied to companies not individually examined in investigation or reviews. Often based on weighted average of examined companies.',
        },
        {
          term: 'China-Wide Entity',
          definition: 'Single entity encompassing all Chinese exporters/producers not receiving separate rate. Subject to highest AD/CVD rate.',
        },
        {
          term: 'Separate Rate',
          definition: 'Individual AD/CVD rate granted to non-market economy companies demonstrating independence from government control.',
        },
        {
          term: 'Section 201 (Safeguards)',
          definition: 'Temporary import restrictions imposed to protect U.S. industry from serious injury due to increased imports. Requires ITC recommendation.',
        },
      ],
    },
    {
      category: 'E-Commerce & Digital Trade',
      terms: [
        {
          term: 'Cross-Border Data Transfer',
          definition: 'Movement of personal or business data across international borders. Subject to privacy laws like GDPR and data localization requirements.',
        },
        {
          term: 'Digital Services Tax',
          definition: 'Tax on revenue from digital services in certain countries. Not yet implemented in U.S. but exists in EU and other jurisdictions.',
        },
        {
          term: 'Direct-to-Consumer (DTC) Shipping',
          definition: 'E-commerce model where sellers ship directly to consumers, often using Section 321 de minimis exemption.',
          relatedLink: { text: 'E-Commerce Compliance Guide', url: '#ecommerce-digital-trade-guide' },
        },
        {
          term: 'Marketplace Seller',
          definition: 'Third-party seller using platforms like Amazon, eBay, or Shopify. May have customs compliance obligations depending on import model.',
        },
      ],
    },
  ];

  // Flatten all glossary terms for FAQ schema
  const allTerms = glossaryTerms.flatMap(cat => cat.terms);

  useMeta({
    title: 'CA Trade Law Glossary | Customs Terms & Definitions',
    description: 'Comprehensive international trade law glossary: 110+ customs terms, import/export regulations, tariff classifications, and trade compliance definitions. Essential reference for California importers, exporters, and trade professionals.',
    canonical: 'trade-law-glossary',
    schema: [
      generateWebPageSchema({
        title: 'International Trade Law Glossary',
        description: 'Comprehensive glossary of international trade law terms, customs definitions, and regulatory concepts for California importers and exporters.',
        url: 'trade-law-glossary',
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: '' },
        { name: 'Resources', url: 'resources' },
        { name: 'Trade Law Glossary', url: 'trade-law-glossary' },
      ]),
      generateFAQSchema(allTerms.map(item => ({
        question: `What is ${item.term}?`,
        answer: item.definition,
      }))),
    ],
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="Trade Law Glossary Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1920&auto=format&fit=crop"
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
          <h1>International Trade Law<br />Glossary</h1>
          <p className="hero-subtitle">
            Comprehensive definitions of customs, import/export, and trade compliance terms used in California international trade law.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => scrollToCategory(0)} className="hero-cta">Browse Terms</button>
            <Link to="/contact" className="hero-cta-outline">Get Expert Help</Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6 flex justify-center">
        <div className="max-w-[1200px] mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              This glossary provides clear definitions of essential terms used in international trade law, customs compliance, export controls, and trade regulations. Whether you're an importer, exporter, customs broker, or trade compliance professional in California, understanding these terms is critical for navigating U.S. customs and trade laws.
            </p>
            <p className="text-gray-600 mt-4">
              <strong>How to Use This Glossary:</strong> Terms are organized by category for easy navigation. Each definition includes practical context and, where applicable, links to detailed guides and service pages for more information.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-20 px-6 bg-gray-50 flex justify-center">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-bold text-primary-navy mb-6 text-center">
            Quick Navigation by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {glossaryTerms.map((category, index) => (
              <button
                key={category.category}
                onClick={() => scrollToCategory(index)}
                className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-secondary-teal text-left cursor-pointer"
                type="button"
              >
                <h3 className="font-semibold text-primary-navy">{category.category}</h3>
                <p className="text-sm text-gray-600 mt-1">{category.terms.length} terms</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Terms by Category - Accordion Format */}
      <section className="py-20 px-6 flex justify-center">
        <div className="max-w-[1200px] mx-auto">
          {glossaryTerms.map((category, categoryIndex) => (
            <div key={categoryIndex} id={`category-${categoryIndex}`} className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary-navy mb-2">{category.category}</h2>
                <div className="h-1 w-24 bg-secondary-gold"></div>
              </div>

              <div className="space-y-3">
                {category.terms.map((item, termIndex) => {
                  const isOpen = isTermOpen(categoryIndex, termIndex);
                  return (
                    <div key={item.term} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                      {/* Accordion Header/Button */}
                      <button
                        onClick={() => toggleTerm(categoryIndex, termIndex)}
                        className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-teal focus:ring-inset"
                        aria-expanded={isOpen}
                      >
                        <h3 className={`text-lg font-semibold pr-4 transition-colors ${isOpen ? 'text-secondary-teal' : 'text-primary-navy'}`}>
                          {item.term}
                        </h3>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300
                          ${isOpen ? 'border-secondary-teal bg-secondary-teal text-white rotate-45' : 'border-gray-300 text-gray-400'}`}>
                          <span className="text-xl font-light leading-none">+</span>
                        </div>
                      </button>

                      {/* Accordion Content */}
                      <div
                        style={{
                          maxHeight: isOpen ? '2000px' : '0',
                          opacity: isOpen ? 1 : 0,
                          transition: 'max-height 300ms ease-in-out, opacity 300ms ease-in-out',
                          overflow: 'hidden'
                        }}
                      >
                        <div className="px-5 pb-5 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed pt-4 whitespace-pre-line">{item.definition}</p>
                          {item.relatedLink && (
                            <a href={item.relatedLink.url}
                              className="inline-flex items-center mt-4 text-secondary-teal hover:text-primary-navy font-medium transition-colors"
                            >
                              {item.relatedLink.text}
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white flex justify-center">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-white mb-6">
            Need Help Understanding Your Trade Compliance Obligations?
          </h2>
          <p className="text-xl opacity-95 mb-8 leading-relaxed text-white">
            Understanding the terminology is just the first step. Our California international trade attorneys provide practical guidance on applying these concepts to your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="hero-cta">
              Schedule a Consultation
            </Link>
            <Link to="/resources" className="hero-cta-outline">
              Explore More Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-20 px-6 bg-gray-50 flex justify-center">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-bold text-primary-navy mb-8 text-center">
            Related Resources & Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/resources/tariffs-duties-classification"
              className="card-link group"
            >
              <h3 className="text-xl font-bold text-primary-navy mb-2">Tariffs & Classification Guide</h3>
              <p className="text-gray-600 text-sm">
                In-depth guide to HTS classification, AD/CVD, Section 301/232 tariffs, and customs valuation
              </p>
              <div className="triangle-slide">
                <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
            <a
              href="/supply-chain-esg-compliance-guide"
              className="card-link group"
            >
              <h3 className="text-xl font-bold text-primary-navy mb-2">Supply Chain ESG Compliance</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive resource on UFLPA, forced labor import bans, and supply chain due diligence
              </p>
              <div className="triangle-slide">
                <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a>
            <a
              href="/ecommerce-digital-trade-guide"
              className="card-link group"
            >
              <h3 className="text-xl font-bold text-primary-navy mb-2">E-Commerce & Digital Trade</h3>
              <p className="text-gray-600 text-sm">
                Guide to Section 321 de minimis, marketplace seller compliance, and cross-border e-commerce
              </p>
              <div className="triangle-slide">
                <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-20 px-6 bg-gray-100 flex justify-center">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-sm text-gray-600 text-center">
            <strong>Disclaimer:</strong> This glossary is provided for informational purposes only and does not constitute legal advice. The definitions are simplified explanations of complex legal concepts. Specific applications may vary depending on facts and circumstances. For advice on your particular situation, please consult with a qualified international trade attorney.
          </p>
        </div>
      </section>

      {/* Evaluation Form */}
      <Suspense fallback={<div style={{ minHeight: '600px', background: 'transparent' }} aria-label="Loading form" />}>
        <EvaluationForm theme="light" />
      </Suspense>
    </div>
  );
};

export default GlossaryPage;
