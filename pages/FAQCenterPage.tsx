import React, { lazy, Suspense, useEffect, useState } from 'react';

import { useMeta } from '../hooks/useMeta';
import { Link } from 'react-router-dom';
import { generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const FAQCenterPage: React.FC = () => {
  const faqCategories = [
    {
      category: 'Customs Compliance & Import Basics',
      faqs: [
        {
          question: 'What is customs compliance and why is it important for California importers?',
          answer: 'Customs compliance means following all U.S. Customs and Border Protection (CBP) laws and regulations when importing goods. It includes proper classification, accurate valuation, correct country of origin determination, timely payment of duties, and maintaining required records. For California importers, compliance is critical because: (1) California ports (Los Angeles/Long Beach, Oakland, San Diego) are among the most closely scrutinized by CBP; (2) Non-compliance results in penalties ranging from $10,000 to $100,000+ per violation; (3) CBP can seize goods and impose criminal penalties for fraud; (4) A strong compliance program demonstrates "reasonable care" and may reduce or eliminate penalties.',
          link: { text: 'Regulatory Compliance Services', url: '#regulatory-compliance-advisory' },
        },
        {
          question: 'How long do I need to keep import records?',
          answer: 'U.S. Customs law requires importers to maintain all import-related records for 5 years from the date of entry. Records must include: commercial invoices, packing lists, bills of lading, entry documents, customs broker correspondence, payment records, and any documents used to support classification, valuation, or country of origin. Records must be readily accessible and producible within 30 days of a CBP request. Failure to maintain or produce records results in penalties of $10,000 per release (up to $100,000 for intentional violations) and potential loss of the right to make entry.',
          link: { text: 'Import Compliance Programs', url: '#regulatory-compliance-advisory' },
        },
        {
          question: 'What is reasonable care in customs compliance?',
          answer: 'Reasonable care is the legal standard requiring importers to exercise the care and competence expected of a reasonably prudent person in ensuring compliance with customs laws. CBP evaluates reasonable care based on factors including: complexity of your operation, experience in importing, compliance procedures you have in place, efforts to learn requirements, accuracy of information provided to CBP, and response to CBP inquiries. Having a written Import Compliance Program (ICP), conducting periodic internal audits, training staff, and engaging qualified customs professionals demonstrates reasonable care.',
        },
        {
          question: 'Do I need a customs broker or can I self-file entries?',
          answer: 'Importers have the legal right to self-file customs entries without a broker. However, most importers use licensed customs brokers because: (1) Brokers have expertise in complex HTS classification, valuation rules, and regulatory requirements; (2) Brokers have Automated Broker Interface (ABI) systems to transmit entries electronically; (3) Classification and valuation errors result in penalties - brokers reduce this risk; (4) Brokers monitor regulatory changes and compliance requirements; (5) The cost of a broker ($100-200 per entry) is far less than potential penalties ($10,000+). For California importers bringing in high volumes or complex products, a broker is highly recommended.',
        },
        {
          question: 'What happens if CBP finds an error in my import entry?',
          answer: 'CBP has several enforcement tools depending on the error severity: (1) Request for Information (CF-28): CBP requests clarification or additional documents - you must respond within 30 days; (2) Notice of Action (CF-29): CBP proposes to increase duties or take other action - you have 30 days to respond; (3) Rate Advance: CBP increases duty rate at liquidation if classification was incorrect; (4) Penalty Notice: For negligence or fraud, CBP assesses monetary penalties; (5) Seizure: CBP physically takes possession of goods if serious violation suspected. The best response is immediate engagement with experienced customs counsel to prepare detailed responses, submit mitigating evidence, and negotiate penalty reductions.',
          link: { text: 'CBP Defense Services', url: '#customs-defense-litigation' },
        },
      ],
    },
    {
      category: 'HTS Classification & Duty Rates',
      faqs: [
        {
          question: 'What is HTS classification and how do I classify my products?',
          answer: 'The Harmonized Tariff Schedule (HTS) is the U.S. system for classifying imported goods using 10-digit codes. Classification determines: duty rates (0% to 37.5%), eligibility for trade agreements, regulatory requirements, and statistical reporting. Classification is based on General Rules of Interpretation (GRI) analyzing: product material composition, function, construction method, and use. California importers should: (1) Review HTS Chapter Notes and Section Notes; (2) Analyze product specifications against tariff language; (3) Request binding rulings from CBP for high-value or complex products; (4) Consult with customs attorneys for defensible classifications. Incorrect classification is the most common compliance violation.',
          link: { text: 'HTS Classification Guide', url: '#tariffs-duties-classification-guide' },
        },
        {
          question: 'What is a binding ruling and when should I request one?',
          answer: 'A binding ruling is an official written determination from CBP on the tariff classification, country of origin, or other customs treatment of specific merchandise. Binding rulings are: (1) Valid for 6 years and binding on all CBP ports; (2) Provide certainty on duty rates and regulatory treatment; (3) Protect against penalties if you rely on the ruling in good faith. Request binding rulings when: importing new products with uncertain classification; planning major purchases where duty savings are significant; facing potential CBP challenges on current classification; or needing documentation for internal approvals. Rulings typically take 30-120 days. Experienced customs attorneys draft ruling requests with detailed technical descriptions and legal analysis to support your classification position.',
          link: { text: 'Binding Ruling Services', url: '#regulatory-compliance-advisory' },
        },
        {
          question: 'What are Section 301 tariffs and do they apply to my Chinese imports?',
          answer: 'Section 301 tariffs are additional duties (7.5% to 100%) imposed on imports from China in response to unfair trade practices. Since 2018, U.S. has imposed Section 301 tariffs on $370 billion+ in Chinese goods across four Lists covering: electronics, machinery, textiles, furniture, plastics, and many other products. For California importers, Section 301 significantly impacts duty costs (often doubling or tripling total duties). Strategies to mitigate Section 301 exposure: (1) Review product classifications - small changes may remove products from List coverage; (2) Apply for product-specific exclusions (if exclusion process is open); (3) Utilize first sale valuation to reduce dutiable value; (4) Restructure supply chain to source from non-China countries; (5) Challenge classification if CBP incorrectly applies Section 301 to your products.',
          link: { text: 'Section 301 Tariff Strategy', url: '#tariffs-duties-classification-guide' },
        },
        {
          question: 'Can I get a refund if I overpaid customs duties?',
          answer: 'Yes, importers can recover overpaid duties through: (1) Protests: If CBP increased duty rate at liquidation, file CBP Form 19 protest within 180 days challenging the rate; (2) Post-Entry Amendments (PEAs): For certain errors, request PEA to correct classification or value before liquidation; (3) Court of International Trade (CIT) Litigation: If protest denied, file lawsuit in CIT within 180 days; (4) Drawback Claims: Recover 99% of duties paid on goods that are exported or used to manufacture exported products. California importers should conduct periodic classification audits to identify overpayments. Refunds can be substantial through CIT litigation and drawback programs.',
          link: { text: 'CIT Litigation Services', url: '#customs-defense-litigation' },
        },
      ],
    },
    {
      category: 'UFLPA & Forced Labor Compliance',
      faqs: [
        {
          question: 'What is UFLPA and which products are at highest risk?',
          answer: 'The Uyghur Forced Labor Prevention Act (UFLPA), effective June 21, 2022, creates a rebuttable presumption that goods from Xinjiang, China or produced by UFLPA Entity List companies are made with forced labor and cannot be imported. Highest risk products: (1) Apparel & Textiles - Xinjiang produces 20% of global cotton and 40% of China\'s polysilicon; (2) Solar Panels - 80%+ of global polysilicon supply chain has Xinjiang exposure; (3) Tomato Products - Xinjiang produces 25% of China\'s tomato products; (4) Electronics - Many components use Xinjiang-sourced materials. CBP has detained $1.5 billion+ in goods under UFLPA. California importers must: map supply chains to raw material level, screen all suppliers against Entity List, obtain origin documentation for high-risk inputs, and implement forced labor due diligence programs.',
          link: { text: 'UFLPA Compliance Guide', url: '#supply-chain-esg-compliance-guide' },
        },
        {
          question: 'What happens if my shipment is detained under UFLPA?',
          answer: 'UFLPA detentions are among the most serious customs enforcement actions. When CBP detains a shipment: (1) Cargo is held at port and importer receives detention notice; (2) Importer has burden to prove goods are NOT made with forced labor (extremely difficult standard); (3) CBP may request extensive supply chain documentation going back to raw materials; (4) Detention can last 90+ days; (5) If importer cannot overcome presumption, goods are excluded and may be forfeited. For California importers, UFLPA detention response requires: immediate engagement with experienced counsel, emergency supply chain mapping to document complete custody chain, sworn declarations from all supply chain tiers, third-party audit reports, and comprehensive evidence packages.',
          link: { text: 'UFLPA Detention Defense', url: '#customs-defense-litigation' },
        },
        {
          question: 'How do I prove my products don\'t contain Xinjiang materials?',
          answer: 'Overcoming the UFLPA presumption requires "clear and convincing evidence" that goods are not made with forced labor - one of the highest evidentiary standards in law. Evidence must include: (1) Complete supply chain mapping from raw materials (cotton farms, polysilicon producers) through all manufacturing tiers; (2) Detailed documentation of origin for all inputs and components; (3) Factory certifications and sworn declarations; (4) Third-party audits using UN Guiding Principles methodology; (5) Import/export documentation for all supply chain tiers; (6) Proof of due diligence systems to prevent forced labor. Simply having a supplier statement is insufficient. California importers in high-risk sectors should develop UFLPA compliance programs before detention occurs, including pre-approved supplier networks with documented clean supply chains.',
          link: { text: 'Supply Chain Due Diligence', url: '#supply-chain-esg-compliance-guide' },
        },
        {
          question: 'What is the UFLPA Entity List and how often is it updated?',
          answer: 'The UFLPA Entity List identifies companies and entities that CBP has determined to use forced labor from Xinjiang or work with the Chinese government on Xinjiang forced labor programs. Products made by Entity List companies are subject to the UFLPA rebuttable presumption and will be detained at U.S. ports unless importer proves no forced labor was used. The Entity List is maintained by the Forced Labor Enforcement Task Force (FLETF) and includes: Chinese manufacturers, mining companies, agricultural producers, and multinational companies with Xinjiang operations. Updates occur periodically (typically quarterly) without advance notice. For California importers: (1) Screen all suppliers and sub-tier manufacturers against current Entity List before each purchase; (2) Subscribe to FLETF updates and CBP trade bulletins to monitor new additions; (3) Conduct supplier audits beyond first-tier manufacturers to identify hidden Entity List exposure; (4) Maintain documented supply chain verification showing no Entity List companies in custody chain. Entity List violations result in: automatic detention, high likelihood of exclusion/forfeiture, and reputational damage.',
          link: { text: 'UFLPA Entity List Screening', url: '#supply-chain-esg-compliance-guide' },
        },
      ],
    },
    {
      category: 'Export Controls & Sanctions',
      faqs: [
        {
          question: 'Do I need an export license and which agency regulates my exports?',
          answer: 'Whether you need an export license depends on: what you\'re exporting (product/technology), where it\'s going (destination country), who will receive it (end-user), and what they\'ll do with it (end-use). Three main agencies regulate U.S. exports: (1) Commerce Department (BIS) - Regulates "dual-use" items through Export Administration Regulations (EAR) - most commercial products, technology, software; (2) State Department (DDTC) - Regulates defense articles and services through International Traffic in Arms Regulations (ITAR); (3) Treasury Department (OFAC) - Administers economic sanctions programs. Most California technology and manufacturing companies are subject to EAR. First step is to classify your products under the Commerce Control List (CCL) to determine if an Export Control Classification Number (ECCN) applies.',
          link: { text: 'Export Controls Services', url: '#export-controls-sanctions' },
        },
        {
          question: 'What is a deemed export and do I need authorization for foreign national employees?',
          answer: 'A "deemed export" occurs when controlled technology or technical data is released to a foreign national within the United States. Deemed exports require the same authorization as physical exports to that person\'s country of citizenship. This is critical for California technology companies with international workforces. Deemed export scenarios: (1) Foreign national employee accessing controlled source code; (2) Foreign graduate student working on controlled research; (3) Foreign contractor receiving technical drawings; (4) Factory tour showing foreign visitor controlled manufacturing process. To comply: (1) Classify all technology (EAR) or technical data (ITAR); (2) Determine citizenship of all personnel with access; (3) Obtain license or use License Exception (if available) for each foreign national; (4) Implement Technology Control Plans (TCP) restricting access. Violations carry penalties up to $1 million per violation and 20 years imprisonment.',
          link: { text: 'Deemed Export Compliance', url: '#export-controls-sanctions' },
        },
        {
          question: 'What is the Entity List and how do I screen for it?',
          answer: 'The Entity List is a BIS-maintained list of foreign parties subject to license requirements for receiving any EAR-controlled items. Entities are added due to activities contrary to U.S. national security or foreign policy interests. As of 2025, the Entity List includes 600+ Chinese companies (including major tech firms like Huawei), Russian defense companies, and parties in Iran, North Korea, and other countries. For California exporters: (1) Screen all foreign customers, distributors, and recipients against Entity List before each export; (2) Screen ultimate consignees and end-users, not just immediate purchaser; (3) Use BIS Consolidated Screening List for comprehensive checks; (4) Document all screening with date, results, and reviewer; (5) Deny transactions if Entity List match found or obtain BIS export license. Entity List violations are among BIS\'s highest enforcement priorities with penalties often exceeding $1 million.',
          link: { text: 'Export Screening Programs', url: '#export-controls-sanctions' },
        },
        {
          question: 'What are OFAC sanctions and who can\'t I do business with?',
          answer: 'Office of Foreign Assets Control (OFAC) administers U.S. economic sanctions prohibiting transactions with certain countries, entities, and individuals. Current comprehensive embargoes prohibit virtually all transactions with: Cuba, Iran, North Korea, Syria, and certain regions (Crimea, Donetsk, Luhansk). OFAC also maintains the Specially Designated Nationals (SDN) List with 10,000+ individuals and entities globally - U.S. persons are prohibited from any transactions with SDN parties and must block (freeze) any SDN property. For California companies: (1) Screen all customers, suppliers, freight forwarders, and banks against SDN List; (2) Screen all transactions against country-based sanctions; (3) Reject payments from sanctioned countries; (4) Report blocked property to OFAC within 10 days; (5) Maintain 5+ years of screening records. OFAC penalties average $250,000-$1 million per violation.',
          link: { text: 'OFAC Sanctions Compliance', url: '#export-controls-sanctions' },
        },
      ],
    },
    {
      category: 'CBP Audits, Investigations & Penalties',
      faqs: [
        {
          question: 'What is a CBP Focused Assessment and how should I prepare?',
          answer: 'A Focused Assessment (FA) is CBP\'s primary audit program targeting specific compliance issues at importing companies. FAs typically: (1) Focus on 1-3 high-risk areas (classification, valuation, country of origin, antidumping duties); (2) Review 2-4 years of import transactions; (3) Last 12-18 months from start to completion; (4) Can result in millions in additional duties and penalties. FA process: CBP sends Pre-Assessment Survey (PAS) questionnaire → Importer submits compliance documentation → CBP conducts on-site visit → CBP analyzes transaction samples → CBP issues preliminary findings → Importer responds → CBP makes final determination. For California importers selected for FA: (1) Engage experienced customs counsel immediately; (2) Conduct internal audit of FA subject areas before CBP visit; (3) Identify and correct any compliance issues through prior disclosure if needed; (4) Prepare comprehensive defense of current practices. Strong preparation and representation can result in "Acceptable Risk" conclusions with zero additional duties.',
          link: { text: 'Focused Assessment Defense', url: '#customs-defense-litigation' },
        },
        {
          question: 'Should I file a prior disclosure if I discover compliance errors?',
          answer: 'Prior disclosure is voluntary submission to CBP of potential violations before CBP discovers them independently. Benefits: (1) Eliminates or substantially reduces monetary penalties; (2) Avoids criminal prosecution consideration; (3) Demonstrates good faith and reasonable care; (4) Allows controlled correction of errors. Prior disclosure is appropriate when: you discover material compliance errors (classification, valuation, origin); errors resulted in underpayment of duties; errors were not intentional; and CBP has not yet commenced investigation. Timing is critical - prior disclosure loses effectiveness once CBP has evidence of violations. The process requires: detailed written disclosure, payment of lost duties, and cooperation with CBP review. For California importers, prior disclosure can convert significant penalty exposure into reduced or eliminated penalties.',
          link: { text: 'Prior Disclosure Services', url: '#regulatory-compliance-advisory' },
        },
        {
          question: 'What are the penalties for customs violations and can they be reduced?',
          answer: 'CBP penalties vary by violation type and culpability level: (1) Negligent violations: Domestic value of merchandise or 40% of lost duties (whichever is less); (2) Grossly negligent violations: Domestic value or 80% of lost duties; (3) Fraud violations: Domestic value or actual loss plus interest; (4) Additional specific penalties: $10,000-100,000 for recordkeeping violations; $5,000 per ISF violation; $1,000-$10,000 for marking violations. Penalties can be mitigated through: (1) Supplemental petition demonstrating mitigating circumstances; (2) Prior disclosure (if before CBP investigation); (3) Evidence of strong compliance program; (4) Cooperation with CBP; (5) Reasonable care efforts; (6) First-time violation. Effective mitigation strategies can achieve significant penalty reductions.',
          link: { text: 'Penalty Mitigation Services', url: '#customs-defense-litigation' },
        },
        {
          question: 'Can CBP seize my goods and how do I get them released?',
          answer: 'CBP can seize goods for violations including: incorrect classification, undervaluation, illegal transshipment (false country of origin), trademark/copyright infringement, forced labor, safety violations, or prohibited imports. After seizure: (1) CBP issues seizure notice; (2) Importer has 30 days to file petition for remission/mitigation; (3) CBP evaluates petition and determines whether to release, forfeit, or compromise; (4) If denied, importer can file supplemental petition or administrative appeal; (5) Some seizures can escalate to criminal prosecution. For California importers facing seizure: immediate action is critical. Effective petitions require: detailed factual showing that goods do not violate law; evidence of good faith and reasonable care; demonstration that violation was unintentional; and legal arguments for release. Prompt, well-prepared seizure petitions can often secure release within 60-90 days.',
          link: { text: 'Seizure Defense', url: '#customs-defense-litigation' },
        },
      ],
    },
    {
      category: 'E-Commerce & Section 321',
      faqs: [
        {
          question: 'What is Section 321 and can I use it for my e-commerce shipments?',
          answer: 'Section 321 is the "de minimis" exemption allowing duty-free and tax-free entry of shipments valued under $800 per person per day. Section 321 is heavily used by e-commerce sellers for direct-to-consumer shipments. Requirements: (1) Each shipment must be addressed to individual person (not business); (2) Value cannot exceed $800 including shipping; (3) Cannot be used for shipments to same person on same day; (4) Certain products excluded (most alcohol, cigars, some textiles/apparel); (5) Data transmission to CBP required. Recent enforcement concerns: undervaluation ($200 product declared at $50 to stay under $800); artificial shipment splitting; business purchases disguised as personal. CBP is increasing Section 321 scrutiny. California e-commerce sellers should: accurately declare values, maintain proof of actual selling prices, ensure compliance with product restrictions, and prepare for potential CBP examinations or audits.',
          link: { text: 'Section 321 Compliance Guide', url: '#ecommerce-digital-trade-guide' },
        },
        {
          question: 'What are the new Section 321 reforms and how do they affect my business?',
          answer: 'Recent and proposed Section 321 reforms include: (1) Exclusion of imports subject to Section 301 tariffs from de minimis treatment; (2) Enhanced data requirements for Section 321 shipments; (3) Restrictions on Chinese-origin goods using Section 321; (4) Potential reduction or elimination of $800 threshold. These changes significantly impact direct-to-consumer sellers, especially those sourcing from China. California e-commerce businesses should: (1) Evaluate whether Section 321 will remain viable for their products; (2) Develop alternative import strategies (formal entries, bonded warehouses in U.S.); (3) Review supply chain to diversify away from China if necessary; (4) Ensure current Section 321 shipments are fully compliant to avoid enforcement actions. If Section 321 eliminated for your products, duty costs could increase 10-30%+ requiring business model adjustments.',
          link: { text: 'Section 321 Reform Analysis', url: '#ecommerce-digital-trade-guide' },
        },
        {
          question: 'Do I need a customs broker for Section 321 shipments?',
          answer: 'For Section 321 Type 86 entries (the most common e-commerce method), you typically need a licensed customs broker with Type 86 filing capability to transmit shipment data to CBP electronically. While individual consumers can self-clear Section 321 shipments, commercial e-commerce sellers using consolidators or international carriers must work with brokers who have Type 86 Entry Filer Codes. The broker creates a manifest covering multiple Section 321 shipments and transmits detailed data (shipper, consignee, item description, value, country of origin) to CBP before arrival. For California e-commerce businesses, selecting the right Type 86 broker is critical - they should have: (1) Robust systems for high-volume automated data transmission; (2) Section 321 compliance expertise; (3) Experience with your product category; (4) Integration with your e-commerce platform or 3PL. Broker fees for Section 321 are typically much lower than formal entries ($5-20 per shipment vs. $100-200 for formal entry).',
          link: { text: 'E-Commerce Compliance Guide', url: '#ecommerce-digital-trade-guide' },
        },
        {
          question: 'How does Section 321 work for Amazon FBA and other marketplace sellers?',
          answer: 'Section 321 can be used for direct-to-consumer shipments from overseas warehouses to U.S. customers, but NOT for shipments from overseas to Amazon FBA warehouses or other U.S. fulfillment centers. Key distinctions: (1) Direct-to-Consumer (Allowed): Product ships directly from China/overseas factory to individual U.S. consumer using Section 321 - common for dropshipping models; (2) To FBA/Fulfillment Centers (NOT Allowed): Shipments to Amazon FBA, merchant fulfillment centers, or any commercial/business address cannot use Section 321 - these require formal customs entries with duties paid. For California-based Amazon sellers importing inventory to FBA: you must make formal entries, pay applicable duties (including Section 301 if Chinese goods), and maintain import compliance programs. Common violation: attempting to disguise FBA shipments as Section 321 by using fake residential addresses - CBP is actively investigating this and imposing substantial penalties. Proper structure: use formal entries for FBA inventory, then sell domestically from U.S. stock.',
          link: { text: 'Amazon FBA Import Compliance', url: '#ecommerce-digital-trade-guide' },
        },
        {
          question: 'What documentation do I need to prove Section 321 compliance?',
          answer: 'Section 321 requires less documentation than formal entries, but importers must still maintain records proving compliance for 5 years. Required documentation: (1) Commercial invoice showing actual transaction value and terms of sale; (2) Proof of payment from customer (credit card receipt, PayPal transaction, etc.); (3) E-commerce platform sales records documenting actual selling price; (4) Shipment manifests transmitted to CBP via Type 86 entry; (5) Carrier tracking showing delivery to individual residential address; (6) Product descriptions and country of origin documentation. For California e-commerce sellers, critical compliance documentation: maintain evidence that declared values match actual selling prices (CBP compares Section 321 declarations against online selling prices); keep records showing shipments went to different individuals (not same person daily); document product eligibility for Section 321 (not excluded categories). During audits or investigations, CBP will request: sales platform data, customer order history, supplier invoices, and bank records. Inability to produce documentation can result in penalties and loss of Section 321 privileges.',
          link: { text: 'Section 321 Documentation Requirements', url: '#ecommerce-digital-trade-guide' },
        },
      ],
    },
    {
      category: 'FDA, USDA & Food Imports',
      faqs: [
        {
          question: 'What is FSVP and do I need one for my food imports?',
          answer: 'Foreign Supplier Verification Program (FSVP) is an FDA requirement under the Food Safety Modernization Act (FSMA) mandating that importers verify their foreign food suppliers have adequate preventive controls to ensure food safety. FSVP is required for: all food and dietary supplement importers (with limited exceptions for small importers and certain low-risk foods). FSVP components: (1) Hazard analysis for each food product; (2) Evaluation and approval of foreign suppliers; (3) Verification activities (audits, sampling, certifications); (4) Corrective actions when needed; (5) Recordkeeping (minimum 2 years). California food importers must have written FSVP in place before importing. FDA is actively enforcing FSVP through inspections and import screening. Shipments from importers without adequate FSVP are being refused entry. Missing or deficient FSVP results in Warning Letters, import refusals, and potential criminal prosecution for willful violations.',
          link: { text: 'FDA Compliance Services', url: '#food-agriculture-trade-attorney' },
        },
        {
          question: 'What happens if FDA refuses my food shipment?',
          answer: 'FDA can refuse entry of food imports that "appear" to violate U.S. law (adulteration, misbranding, lacking required permits). When FDA issues refusal: (1) Shipment held at port; (2) Importer receives Notice of FDA Action; (3) Importer must respond within 10 business days (or shipment will be destroyed/exported); (4) Options: provide evidence of admissibility, request reconditioning (relabeling), or voluntarily destroy/export; (5) FDA reviews evidence and makes final decision. Common refusal reasons: labeling violations, pesticide residues, filth/contamination, missing import permits, lack of FSVP, facility not registered with FDA. For California food importers, FDA refusal response requires: immediate analysis of violation basis; gathering evidence (lab testing, certifications, documentation); preparing detailed admissibility package; and working with FDA district office. Effective responses can often achieve release in 14-30 days.',
          link: { text: 'FDA Refusal Defense', url: '#food-agriculture-trade-attorney' },
        },
        {
          question: 'Do I need to register my food facility with FDA?',
          answer: 'Yes, FDA Food Facility Registration is required for any domestic or foreign facility that manufactures, processes, packs, or holds food for U.S. consumption. Registration requirements: (1) Foreign food manufacturers exporting to U.S. must register with FDA and designate a U.S. agent; (2) Registration must be renewed every two years (even-numbered years); (3) Each facility receives unique registration number; (4) Registration must be updated within 60 days of any changes (facility address, U.S. agent, product categories). For California food importers: ensure all your foreign suppliers are FDA-registered before importing - unregistered facilities cannot ship food to U.S. Verify registration using FDA\'s searchable database. FDA can refuse entry of products from unregistered facilities and place those facilities on Import Alert (automatic detention of all shipments). Common mistake: assuming supplier\'s registration is current - registrations expire and must be renewed biennially. Importers should obtain proof of current registration (registration number and expiration date) and monitor renewal dates.',
          link: { text: 'FDA Registration Compliance', url: '#food-agriculture-trade-attorney' },
        },
        {
          question: 'What are FDA Prior Notice requirements and how do I submit them?',
          answer: 'Prior Notice is FDA\'s advance notification system requiring importers to electronically submit shipment details before food arrives in U.S. Prior Notice must be submitted for every food import and include: (1) Article description and quantity; (2) Manufacturer and shipper information; (3) Grower information (for fruits, vegetables, nuts); (4) Country of origin and production; (5) Anticipated arrival date, time, and location. Submission timing: varies by transport mode - 8 hours before arrival by land, 4 hours by air/rail, 2 hours before arrival by international mail. Prior Notice is submitted through FDA\'s Prior Notice System Interface (PNSI) or via customs broker integration. For California food importers: work with customs brokers who have automated Prior Notice filing capability; ensure accurate and complete information (errors cause holds/refusals); maintain backup documentation supporting Prior Notice data. Failure to submit Prior Notice or submitting inaccurate information results in: refusal of entry, shipment holds, and potential civil money penalties up to $10,000 per violation.',
          link: { text: 'FDA Prior Notice Services', url: '#food-agriculture-trade-attorney' },
        },
        {
          question: 'What are USDA import requirements for meat, poultry, and dairy products?',
          answer: 'USDA regulates imports of meat, poultry, eggs, and certain dairy/animal products to ensure food safety and prevent animal diseases. Key USDA requirements: (1) Country Eligibility: Only imports from USDA-approved countries are permitted - USDA maintains lists of eligible countries for each product type; (2) Facility Certification: Foreign facilities must be certified by USDA Food Safety Inspection Service (FSIS); (3) Import Permits: Some products require advance USDA import permits (live animals, certain animal products); (4) Inspection: All meat/poultry shipments inspected by USDA at port of entry; (5) Labeling: Products must meet USDA labeling requirements. For California importers of animal products: verify country and facility eligibility before purchasing; obtain required import permits in advance; work with customs brokers experienced in USDA coordination; ensure products meet USDA standards (product composition, additives, labeling). USDA violations result in: shipment refusal, return to origin at importer expense, and loss of import privileges. We assist with USDA permit applications, facility certifications, and refusal responses.',
          link: { text: 'USDA Import Compliance', url: '#food-agriculture-trade-attorney' },
        },
      ],
    },
    {
      category: 'Trade Agreements & Free Trade Agreements',
      faqs: [
        {
          question: 'What is USMCA and how do I qualify for duty-free treatment?',
          answer: 'The United States-Mexico-Canada Agreement (USMCA), which replaced NAFTA in 2020, provides duty-free or reduced-duty treatment for goods that originate in the U.S., Mexico, or Canada and meet specific Rules of Origin. To qualify for USMCA benefits: (1) Goods must be produced in a USMCA country (U.S./Mexico/Canada); (2) Goods must satisfy product-specific Rules of Origin (minimum regional value content, tariff shift requirements, or wholly obtained criteria); (3) Importer must possess valid USMCA certification of origin; (4) Proper USMCA claim must be made at time of entry. For California importers bringing goods from Mexico/Canada: USMCA can eliminate 0-37.5% duty costs - substantial savings opportunity. Common USMCA-eligible products: automotive parts, textiles/apparel, agricultural products, electronics, machinery. Compliance requirements: maintain documentation proving origin for 5 years; ensure suppliers provide accurate certifications; conduct periodic origin verifications. USMCA claims without adequate substantiation result in denial of preferential treatment and potential penalties.',
          link: { text: 'USMCA Qualification Services', url: '#regulatory-compliance-advisory' },
        },
        {
          question: 'How do I obtain a USMCA certificate of origin?',
          answer: 'USMCA certification of origin is a document prepared by the exporter, producer, or importer certifying that goods qualify for preferential tariff treatment. Unlike NAFTA, USMCA does not require a specific form - certifications can be on company letterhead, commercial invoice, or any document containing required data elements. Required certification elements: (1) Certifier identity and contact information; (2) Exporter, producer, and importer details; (3) Product description and HTS classification; (4) Origin criterion (tariff shift, regional value content, or wholly obtained); (5) Certification statement and signature; (6) Blanket period (if applicable - up to 12 months). For California importers: request certifications from Mexican/Canadian suppliers before importing; review certifications for completeness and accuracy; verify that stated origin criteria are correct; maintain certifications for 5 years. Importers can prepare self-certifications if they have knowledge of product origin. Invalid or fraudulent certifications result in: denial of duty savings, customs penalties, and potential criminal prosecution.',
          link: { text: 'USMCA Certification Guidance', url: '#regulatory-compliance-advisory' },
        },
        {
          question: 'What happens if CBP denies my USMCA preferential tariff claim?',
          answer: 'CBP can deny USMCA claims and assess full (non-preferential) duty rates if: certification is invalid or incomplete; goods do not meet Rules of Origin; importer cannot provide supporting documentation; or CBP origin verification reveals non-compliance. When CBP denies USMCA claim: (1) CBP issues CF-29 proposing rate advance to full duty; (2) Importer has 30 days to respond with evidence; (3) If claim sustained, CBP liquidates entry at higher duty rate; (4) Importer must pay additional duties plus interest. Response options: (1) Provide additional documentation proving origin (supplier affidavits, manufacturing records, material sourcing evidence); (2) Obtain corrected certification from supplier if original was defective; (3) Challenge CBP determination through formal protest. For California importers: denials often result from incomplete certifications or insufficient documentation - maintain robust origin files and work with suppliers to ensure accurate certifications. If protest denied, can escalate to Court of International Trade litigation. We provide effective administrative and judicial representation to challenge denied USMCA claims.',
          link: { text: 'USMCA Claim Defense', url: '#customs-defense-litigation' },
        },
        {
          question: 'What are Rules of Origin and how are they verified under free trade agreements?',
          answer: 'Rules of Origin (ROO) are criteria determining whether goods "originate" in a free trade agreement country and qualify for preferential duty treatment. ROO vary by FTA and product but typically include: (1) Wholly Obtained: Product entirely produced/grown in FTA country (agricultural products, minerals); (2) Tariff Shift: Product undergoes specified manufacturing process that changes HTS classification (e.g., fabric to finished apparel); (3) Regional Value Content (RVC): Minimum percentage of product value from FTA countries (e.g., 60% USMCA content). Verification process: CBP can verify origin through: (1) Questionnaires to importers/exporters requesting documentation; (2) Plant visits to foreign manufacturers; (3) Government-to-government verification for some FTAs. For California importers using FTA preferences: understand applicable ROO for your products; obtain detailed manufacturing and costing information from suppliers; maintain complete origin documentation; conduct internal compliance reviews before CBP verification. If verification reveals non-compliance: CBP denies preference, assesses full duties, and may impose penalties for negligent or fraudulent claims.',
          link: { text: 'FTA Rules of Origin Analysis', url: '#regulatory-compliance-advisory' },
        },
      ],
    },
    {
      category: 'Antidumping & Countervailing Duties (AD/CVD)',
      faqs: [
        {
          question: 'What are antidumping and countervailing duties and which products are affected?',
          answer: 'Antidumping duties (AD) are additional tariffs imposed on imports sold in the U.S. below "fair market value" (dumping). Countervailing duties (CVD) are tariffs offsetting foreign government subsidies. AD/CVD orders are product- and country-specific, lasting 5+ years until revoked through sunset review. As of 2025, over 600 AD/CVD orders are in effect, heavily targeting: steel/aluminum products (China, multiple countries); solar panels (China); honey (multiple countries); wooden furniture (China, Vietnam); certain chemicals, plastics, and industrial products. AD/CVD rates range from 5% to over 400%, dramatically increasing import costs. For California importers: verify if your products are subject to AD/CVD using Commerce Department AD/CVD order database; classify products precisely (small HTS differences determine AD/CVD applicability); pay AD/CVD cash deposits at entry; monitor annual administrative reviews which adjust final duty rates. Failing to pay AD/CVD results in: entry rejection, massive retroactive liability, and penalties.',
          link: { text: 'AD/CVD Compliance Services', url: '#regulatory-compliance-advisory' },
        },
        {
          question: 'How do I know if my imports are subject to AD/CVD orders?',
          answer: 'Determining AD/CVD applicability requires analysis of: (1) Product scope: Each AD/CVD order contains detailed scope language defining covered merchandise - analyze whether your product falls within this description; (2) HTS classification: Orders specify HTS codes (though scope language controls); (3) Country of origin: Orders apply only to specified countries; (4) Exclusions: Some orders have product-specific exclusions. Research process: (1) Search Commerce Department AD/CVD order database by product type and country; (2) Review order scope language and compare to your product specifications; (3) Check for scope rulings addressing similar products; (4) Verify country of origin. For California importers: AD/CVD scope determinations are highly technical and errors are costly. Uncertain situations warrant: (1) Requesting scope ruling from Commerce Department (binding determination); (2) Consulting with experienced trade counsel to analyze product against scope criteria; (3) Reviewing past scope rulings for analogous products. Incorrect self-assessment results in: underpayment of duties, retroactive liability at final assessment, interest, and penalties.',
          link: { text: 'AD/CVD Scope Analysis', url: '#regulatory-compliance-advisory' },
        },
        {
          question: 'What is an AD/CVD evasion investigation and how should I respond?',
          answer: 'AD/CVD evasion occurs when importers attempt to avoid duties through: transshipment (routing goods through third countries to disguise origin); minor alterations (minimal processing to claim product is outside scope); misclassification; or false country of origin claims. CBP Enforce and Protect Act (EAPA) authorizes investigations into evasion allegations. EAPA investigation process: (1) Allegation filed (by domestic industry, CBP self-initiation, or other party); (2) CBP investigates (reviews entry data, issues questionnaires, conducts verifications, performs factory visits); (3) CBP makes evasion determination (typically within 300 days); (4) If evasion found: CBP extends AD/CVD orders to cover evaded entries, assesses duties retroactively, and may impose penalties. For California importers: EAPA investigations are serious - potential liability can reach millions in retroactive duties. Effective response requires: immediate engagement with experienced counsel; comprehensive documentation of supply chain and manufacturing; cooperation with CBP investigation; submission of detailed factual and legal arguments. We provide experienced EAPA investigation defense to protect California importers from evasion allegations.',
          link: { text: 'EAPA Investigation Defense', url: '#customs-defense-litigation' },
        },
      ],
    },
    {
      category: 'Country of Origin & Marking Requirements',
      faqs: [
        {
          question: 'How do I determine country of origin for my imported products?',
          answer: 'Country of origin determination depends on context: (1) Marking/Customs Purposes: Country where article was "wholly obtained" or underwent "substantial transformation" (manufacturing process creating new and different article); (2) Trade Agreements (USMCA, etc.): Country where goods meet specific Rules of Origin criteria; (3) Trade Remedies (AD/CVD): Country where final manufacturing or assembly occurs; (4) Section 301/Trade Sanctions: Country-specific based on final assembly or substantial transformation. Substantial transformation test examines: change in name, character, or use of article; nature of manufacturing process; value added in each country. For California importers with multi-country supply chains: origin analysis is critical - it determines duty rates, eligibility for trade agreements, applicability of Section 301/AD/CVD, and compliance with marking laws. Complex situations warrant binding origin rulings from CBP providing certainty. Common errors: assuming origin is where final assembly occurs (not always true); relying on supplier statements without verification; using trade agreement origin for marking purposes (different standards).',
          link: { text: 'Country of Origin Determinations', url: '#regulatory-compliance-advisory' },
        },
        {
          question: 'What are the country of origin marking requirements for imported goods?',
          answer: 'U.S. law requires imported articles to be marked with country of origin in a conspicuous, legible, and permanent manner to inform ultimate purchasers. Marking requirements: (1) Location: Marking must be on article itself (if feasible) or on container if article cannot be marked; (2) Method: Must be permanent - molded-in, etched, engraved, stamped, printed (not easily removable stickers); (3) Conspicuousness: Clearly visible to ultimate purchaser; (4) Exceptions: Some articles exempt (e.g., certain raw materials, articles incapable of marking). Common marking formats: "Made in [Country]", "Product of [Country]", or "[Country] of Origin". For California importers: (1) Verify marking compliance before shipment leaves foreign country - goods refused entry if not properly marked; (2) Ensure marking survives shipping and handling; (3) Special marking rules apply to certain products (textiles, pipes, iron/steel); (4) Repackaging in U.S. may require additional marking. Marking violations result in: 10% ad valorem marking duty, shipment holds, and potential penalties.',
          link: { text: 'Marking Compliance Programs', url: '#regulatory-compliance-advisory' },
        },
        {
          question: 'What happens if CBP finds my products are not properly marked with country of origin?',
          answer: 'When CBP discovers unmarked or improperly marked merchandise: (1) CBP issues marking notice requiring redelivery of goods; (2) Importer has 30 days to redeliver goods to CBP custody for inspection; (3) CBP may allow remarking (adding compliant marking under CBP supervision) or may refuse entry; (4) If remarking not feasible, goods must be exported or destroyed; (5) CBP may assess 10% marking duty on top of regular duties. Redelivery failure results in liquidated damages claim for importer\'s bond (typically 3x entered value). For California importers facing marking violations: (1) Immediate response is critical - determine if remarking is feasible option; (2) Coordinate with CBP port to arrange redelivery and remarking; (3) Prepare explanations and evidence if marking was compliant; (4) For first-time violations, CBP may be more lenient if corrected promptly. Repeated marking violations lead to: increased scrutiny, intensive examinations, and potential fraud investigations. Prevention: implement supplier marking requirements in purchase contracts; conduct pre-shipment inspections; sample test shipments upon arrival. We assist with marking violation responses and CBP negotiations to minimize costs and delays.',
          link: { text: 'Marking Violation Defense', url: '#customs-defense-litigation' },
        },
      ],
    },
  ];

  // Flatten all FAQs for schema
  const allFAQs = faqCategories.flatMap(cat => cat.faqs);

  useMeta({
    title: 'CA Trade Law FAQ | Customs & Import Questions',
    description: '40+ expert answers: customs compliance, HTS classification, UFLPA, USMCA, AD/CVD, Section 321, export controls, FDA/USDA, marking, CBP audits.',
    canonical: 'trade-law-faq',
    schema: [
      generateWebPageSchema({
        title: 'International Trade Law FAQ Center',
        description: 'Frequently asked questions about customs compliance, import/export regulations, UFLPA, export controls, and trade law answered by California international trade attorneys.',
        url: 'trade-law-faq',
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: '' },
        { name: 'Resources', url: 'resources' },
        { name: 'FAQ Center', url: 'trade-law-faq' },
      ]),
      generateFAQSchema(allFAQs.map(faq => ({
        question: faq.question,
        answer: faq.answer,
      }))),
    ],
  });

  // State for tracking open FAQ items
  const [openFAQs, setOpenFAQs] = useState<{[key: string]: boolean}>({});

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isFAQOpen = (categoryIndex: number, faqIndex: number) => {
    return openFAQs[`${categoryIndex}-${faqIndex}`] || false;
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="FAQ Center Hero">
        <picture className="hero-bg">
          <img
            src="/images/hero-port-background.jpg"
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
          <h1>International Trade Law<br />FAQ Center</h1>
          <p className="hero-subtitle">
            Get answers to common questions about customs compliance, import/export regulations, UFLPA, export controls, and California trade law.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => scrollToCategory(0)} className="hero-cta">Browse FAQs</button>
            <Link to="/contact" className="hero-cta-outline">Ask a Question</Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              This FAQ center provides detailed answers to the most common questions California importers, exporters, and international businesses ask about U.S. trade compliance. These answers are based on our experience representing hundreds of clients before CBP, FDA, BIS, and other agencies.
            </p>
            <p className="text-gray-600 mt-4">
              <strong>Disclaimer:</strong> These FAQs are for informational purposes only and do not constitute legal advice. Specific situations require individual analysis. For advice on your particular circumstances, please schedule a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-bold text-primary-navy mb-6 text-center">
            Browse by Topic
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <ul className="space-y-3">
                {faqCategories.slice(0, 4).map((category, index) => (
                  <li key={category.category}>
                    <div className="service-link-item">
                      <button
                        onClick={() => scrollToCategory(index)}
                        className="service-link w-full text-left"
                        type="button"
                        aria-label={`Navigate to ${category.category} section`}
                      >
                        <span className="service-link__title">{category.category}</span>
                        <p className="service-link__description">{category.faqs.length} questions</p>
                        <div className="triangle-slide" aria-hidden="true">
                          <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Column 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <ul className="space-y-3">
                {faqCategories.slice(4, 7).map((category, index) => (
                  <li key={category.category}>
                    <div className="service-link-item">
                      <button
                        onClick={() => scrollToCategory(index + 4)}
                        className="service-link w-full text-left"
                        type="button"
                        aria-label={`Navigate to ${category.category} section`}
                      >
                        <span className="service-link__title">{category.category}</span>
                        <p className="service-link__description">{category.faqs.length} questions</p>
                        <div className="triangle-slide" aria-hidden="true">
                          <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Column 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <ul className="space-y-3">
                {faqCategories.slice(7).map((category, index) => (
                  <li key={category.category}>
                    <div className="service-link-item">
                      <button
                        onClick={() => scrollToCategory(index + 7)}
                        className="service-link w-full text-left"
                        type="button"
                        aria-label={`Navigate to ${category.category} section`}
                      >
                        <span className="service-link__title">{category.category}</span>
                        <p className="service-link__description">{category.faqs.length} questions</p>
                        <div className="triangle-slide" aria-hidden="true">
                          <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} id={`category-${categoryIndex}`} className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary-navy mb-2">{category.category}</h2>
                <div className="h-1 w-24 bg-secondary-gold"></div>
              </div>

              <div className="space-y-3">
                {category.faqs.map((faq, faqIndex) => {
                  const isOpen = isFAQOpen(categoryIndex, faqIndex);
                  return (
                    <div key={faq.question} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-teal focus:ring-inset"
                        aria-expanded={isOpen}
                      >
                        <h3 className={`faq-question text-lg font-semibold pr-4 transition-colors ${isOpen ? 'text-secondary-teal' : 'text-primary-navy'}`}>
                          {faq.question}
                        </h3>
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-secondary-teal bg-secondary-teal text-white rotate-45' : 'border-gray-300 text-gray-400'}`}
                        >
                          <span className="text-xl font-light leading-none">+</span>
                        </div>
                      </button>
                      <div
                        style={{
                          maxHeight: isOpen ? '2000px' : '0',
                          opacity: isOpen ? 1 : 0,
                          transition: 'max-height 300ms ease-in-out, opacity 300ms ease-in-out',
                          overflow: 'hidden'
                        }}
                      >
                        <div className="px-5 pb-5 border-t border-gray-100">
                          <p className="faq-answer text-gray-700 leading-relaxed pt-4 whitespace-pre-line">{faq.answer}</p>
                          {faq.link && (
                            <a href={faq.link.url}
                              className="inline-flex items-center mt-4 text-secondary-teal hover:text-primary-navy font-medium transition-colors"
                            >
                              {faq.link.text}
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
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-garamond text-white mb-6">
            Didn't Find Your Answer?
          </h2>
          <p className="text-lg opacity-95 mb-8 leading-relaxed text-white">
            Every international trade situation is unique. Our California trade law attorneys provide personalized guidance tailored to your specific compliance challenges.
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <Link to="/contact" className="hero-cta text-base py-3 px-4">
              Get in Touch
            </Link>
            <Link to="/resources" className="hero-cta-outline text-base py-3 px-4">
              View Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold text-primary-navy mb-8 text-center font-garamond">
            Additional Resources
          </h2>
          <div className="w-24 h-1 bg-secondary-teal mx-auto mb-12"></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/trade-law-glossary" className="service-link">
                    <span className="service-link__title">Trade Law Glossary</span>
                    <p className="service-link__description">200+ definitions of essential terms</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources" className="service-link">
                    <span className="service-link__title">Resource Guides</span>
                    <p className="service-link__description">Tariffs, UFLPA, ESG compliance</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Practice Areas</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">All Practice Areas</span>
                    <p className="service-link__description">Complete trade law services</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense</span>
                    <p className="service-link__description">CBP audit and penalty defense</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Get Started</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/contact" className="service-link">
                    <span className="service-link__title">Schedule Consultation</span>
                    <p className="service-link__description">Free initial consultation</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/contact" className="service-link">
                    <span className="service-link__title">Contact Us</span>
                    <p className="service-link__description">Reach our team directly</p>
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

      {/* Evaluation Form */}
      <Suspense fallback={<div style={{ minHeight: '600px', background: 'transparent' }} aria-label="Loading form" />}>
        <EvaluationForm theme="light" />
      </Suspense>
    </div>
  );
};

export default FAQCenterPage;
