
import React, { useEffect, useState } from 'react';
import EvaluationForm from '../components/EvaluationForm';
import { SearchIcon } from '../components/icons/SearchIcon';
import { ArrowRightIcon } from '../components/icons/ArrowRightIcon';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '../utils/seo';

// --- Data Structure for Content ---
const practiceData = [
  {
    category: "Customs & Import Compliance",
    items: [
      {
        title: "Customs Audits (Focused Assessments, Quick Response Audits, Surveys) & Audit Defense",
        slug: "customs-audits",
        content: "Trembach Law Firm provides comprehensive representation during U.S. Customs and Border Protection audits, including Focused Assessments, Quick Response Audits, and Compliance Surveys that examine your import operations and compliance systems. Our experienced customs attorneys guide clients through every phase of the audit process, from initial document requests and on-site interviews to final audit findings and remediation plans. We develop strategic audit defense approaches that minimize potential liability, negotiate favorable settlements, and implement corrective action plans to address identified deficiencies. Our team works proactively to prepare clients for audits by conducting internal compliance reviews, organizing documentation systems, and training personnel on CBP expectations. When audit findings result in demands for duty assessments, penalty recommendations, or compliance improvement requirements, we advocate aggressively to protect our clients' interests and challenge erroneous conclusions with compelling legal and factual arguments."
      },
      {
        title: "CF-28 & CF-29 Notices (Requests for Information & Notices of Action)",
        slug: "cf28-cf29-notices",
        content: "Our firm provides expert guidance in responding to CF-28 Requests for Information and CF-29 Notices of Action issued by U.S. Customs and Border Protection when CBP questions the classification, valuation, admissibility, or other aspects of imported merchandise. We prepare comprehensive and persuasive responses to CF-28 notices that address CBP's concerns while protecting our clients from unnecessary duty assessments or penalties, assembling supporting documentation including technical specifications, manufacturing data, transaction records, and expert opinions. When CBP issues CF-29 Notices of Action proposing to increase duties, reclassify merchandise, or deny preferential tariff treatment, we develop strategic response plans that may include administrative protests, supplemental submissions, requests for internal advice rulings, or litigation before the Court of International Trade. Our attorneys understand the critical timing requirements and procedural nuances of the CF-28/CF-29 process, ensuring clients preserve all legal rights while working toward favorable resolution of customs disputes that could significantly impact landed costs and supply chain operations."
      },
      {
        title: "Classification (Tariff Classification Disputes)",
        slug: "classification",
        content: "Trembach Law Firm represents importers in tariff classification disputes involving the proper assignment of Harmonized Tariff Schedule (HTS) codes that determine applicable duty rates, eligibility for trade preference programs, and compliance with import restrictions. Our classification practice encompasses binding ruling requests, protests of classification decisions, reconsideration requests, and litigation before the Court of International Trade when CBP's classification determinations are incorrect or inconsistent with established precedent. We analyze products using legal principles of tariff classification including the General Rules of Interpretation (GRI), Explanatory Notes, CBP rulings, and judicial precedent to support accurate classification positions. Our attorneys prepare detailed technical submissions with laboratory testing results, manufacturing process descriptions, component breakdowns, and expert declarations that demonstrate the correct classification under applicable tariff provisions. We handle classification issues across diverse industries including chemicals, machinery, electronics, textiles, automotive parts, and consumer goods, helping clients minimize duty exposure through proper tariff engineering strategies while maintaining full compliance with U.S. customs laws."
      },
      {
        title: "Customs Valuation (including assists, royalties & transfer pricing)",
        slug: "customs-valuation",
        content: "Our customs valuation practice addresses complex issues arising from CBP's examination of declared values for imported merchandise, ensuring compliance with transaction value methodologies required under 19 U.S.C. § 1401a and related customs regulations. We counsel clients on proper valuation of related-party transactions, advising on transfer pricing documentation, comparable uncontrolled price analyses, and Cost Plus/Resale Price methods that demonstrate arm's-length pricing for customs purposes. Our firm handles valuation disputes involving assists (tools, dies, molds, engineering work, and other items provided by the buyer), determining which costs must be added to the price actually paid or payable and developing allocation methodologies that withstand CBP scrutiny. We provide guidance on royalty and license fee issues, analyzing whether payments for intellectual property rights are dutiable as conditions of sale or non-dutiable post-importation expenses. Our valuation services include preparation of advance ruling requests, responses to CBP's requests for information regarding valuation methodologies, protests of valuation decisions, and litigation challenging erroneous appraisement determinations that increase clients' duty liability and compliance costs."
      },
      {
        title: "Country of Origin, Labeling, Marking & Origin Disputes",
        slug: "country-of-origin",
        content: "Trembach Law Firm advises clients on country of origin determinations under various legal standards including preferential origin rules for free trade agreements, non-preferential origin rules for marking purposes, and product-specific rules of origin applicable to quotas, antidumping/countervailing duty orders, and procurement restrictions. We prepare origin ruling requests addressing substantial transformation analyses, tariff shift criteria, regional value content calculations, and other tests used to determine where goods are deemed manufactured for customs purposes. Our marking and labeling practice ensures compliance with requirements under 19 U.S.C. § 1304 and related regulations, advising on proper country of origin marking methods, container marking rules, exceptions for articles incapable of being marked, and special marking requirements for specific products. When origin disputes arise from CBP challenges to claimed preferential treatment, marking violations, or circumvention allegations, we develop comprehensive defense strategies incorporating manufacturing documentation, bill of materials analyses, production flow charts, and legal arguments demonstrating proper origin designation. We handle origin-related protests, penalty mitigation, and litigation to protect clients from financial liability and preserve access to beneficial tariff treatment under USMCA, other free trade agreements, and the Generalized System of Preferences."
      },
      {
        title: "Liquidated Damages",
        slug: "liquidated-damages",
        content: "Our firm represents importers, customs brokers, and other parties facing liquidated damages claims asserted by U.S. Customs and Border Protection for alleged violations of import bonds, including single transaction bonds and continuous import bonds covering annual import activities. We handle liquidated damages cases involving claims for undervaluation, misclassification, violation of intellectual property rights, failure to redeliver merchandise for examination, breach of custodial bond obligations, and other alleged violations of customs laws or bond conditions. Our attorneys prepare petitions for relief from liquidated damages claims filed with CBP's Fines, Penalties and Forfeitures Office, presenting legal arguments and documentary evidence demonstrating reasonable care, lack of negligence, mitigating circumstances, or absence of bond violations. We negotiate settlements that reduce liquidated damages assessments to appropriate levels based on actual losses to the government, culpability factors, and clients' compliance history. When administrative relief is denied, we pursue judicial review of liquidated damages determinations through civil actions in federal court, challenging CBP's legal authority, calculation methodologies, or denial of discretionary relief to protect clients from excessive financial liability that could threaten business viability."
      },
      {
        title: "Prior Disclosures",
        slug: "prior-disclosures",
        content: "Trembach Law Firm assists clients in preparing prior disclosures to U.S. Customs and Border Protection under 19 U.S.C. § 1592(c)(4) when potential violations of customs laws are discovered through internal audits, compliance reviews, or government inquiries. Our prior disclosure practice helps clients take advantage of statutory provisions that limit penalties to interest charges when violations are voluntarily disclosed before CBP discovers them independently or commences a formal investigation. We conduct thorough internal investigations to identify the scope of potential violations, quantify lost duties and revenue, and assess whether disclosure qualifies for prior disclosure treatment under the legal requirements that it be disclosed before CBP has commenced or could have commenced an investigation. Our attorneys prepare comprehensive disclosure submissions that include detailed narrative explanations, supporting documentation, duty calculations showing amounts owed, and proposals for corrective actions to prevent future violations. We negotiate with CBP regarding the terms of disclosure resolutions, payment arrangements for substantial duty liabilities, and monitoring requirements to demonstrate improved compliance. By strategically utilizing prior disclosure procedures, we help clients resolve customs violations proactively, minimize financial exposure, avoid civil and criminal penalties, and preserve their importing privileges and business reputation."
      },
      {
        title: "Seizures & Detentions",
        slug: "seizures-detentions",
        content: "Our firm provides urgent legal representation when merchandise is seized or detained by U.S. Customs and Border Protection for alleged violations including counterfeit or pirated goods, prohibited merchandise, items subject to intellectual property rights violations, goods produced with forced labor, or merchandise entered through fraud or material misstatements. We respond immediately to detention notices by assembling evidence demonstrating merchandise admissibility, preparing legal arguments challenging CBP's grounds for detention, and negotiating release of detained goods to minimize supply chain disruptions and financial losses. When CBP seizes merchandise and initiates forfeiture proceedings, we file timely claims and petitions for relief challenging the legal basis for seizure, asserting defenses based on innocent owner status, lack of knowledge, or absence of culpability. Our seizure defense practice includes administrative negotiations with CBP's Fines, Penalties and Forfeitures Office to secure return of seized merchandise or payment of its domestic value, as well as litigation in federal court when administrative remedies are unsuccessful. We counsel clients on responding to allegations underlying seizures including intellectual property infringement claims, forced labor concerns under Withhold Release Orders, and import safety violations, developing comprehensive strategies to resolve seizure matters while implementing corrective measures that prevent future enforcement actions."
      },
      {
        title: "Entry / Harbor Maintenance Tax / Withhold Release Orders (WROs)",
        slug: "entry-wro",
        content: "Trembach Law Firm advises clients on complex entry issues including rejected entries, missing documentation, informal entry violations, and protests of CBP liquidation decisions affecting the final determination of duties, taxes, and fees owed on imported merchandise. We handle disputes involving Harbor Maintenance Tax assessments under 26 U.S.C. § 4461, challenging erroneous HMT charges and seeking refunds for improperly assessed port use fees. Our practice addresses compliance with Withhold Release Orders (WROs) issued by CBP under 19 U.S.C. § 1307 to exclude merchandise produced wholly or in part with forced labor, including goods from specific entities or regions subject to WROs such as products from Xinjiang, China. We counsel importers on due diligence requirements for responding to forced labor concerns, supply chain mapping to identify potential forced labor risks, preparation of admissibility reviews demonstrating goods were not produced with prohibited labor practices, and development of import compliance programs that satisfy CBP's increased scrutiny of forced labor issues. When merchandise is detained or excluded under WRO authority, we prepare detailed submissions with supply chain documentation, third-party audits, and certification evidence supporting release of detained goods and eligibility for importation under exceptions for specific products that can demonstrate compliant production processes."
      },
      {
        title: "Duty Drawback Recovery",
        slug: "duty-drawback",
        content: "Our duty drawback practice helps importers, exporters, and manufacturers recover customs duties, taxes, and fees paid on imported merchandise that is subsequently exported or destroyed under 19 U.S.C. § 1313, providing significant cost savings that improve competitiveness in global markets. We prepare and file drawback claims under various statutory provisions including manufacturing drawback for goods used in manufacturing articles that are exported, unused merchandise drawback for imported goods exported or destroyed without being used in the United States, and rejected merchandise drawback for goods refused by the importer and returned to the country of origin. Our attorneys establish drawback programs tailored to clients' specific business operations, including approval of drawback rulings that streamline future claims, implementation of inventory tracking systems ensuring compliance with drawback substitution requirements, and development of procedures for timely claim filing within the three-year limitation period. We handle accelerated payment procedures for established drawback claimants, protests of denied drawback claims, and disputes regarding CBP's calculation of allowable drawback amounts. By maximizing drawback recoveries through careful planning and comprehensive claim preparation, we help clients recapture significant duty costs that enhance profitability and support pricing strategies in competitive international markets."
      },
      {
        title: "USMCA, Free Trade Agreements & Duty Preference Programs (including GSP)",
        slug: "usmca-free-trade-agreements",
        content: "Trembach Law Firm provides comprehensive guidance on preferential tariff treatment under the United States-Mexico-Canada Agreement (USMCA), bilateral free trade agreements with 20 countries including Korea, Chile, Australia, and Central American nations, and unilateral preference programs such as the Generalized System of Preferences (GSP). We advise clients on complex rules of origin requirements including tariff shift criteria, regional value content calculations, and product-specific rules that determine eligibility for duty-free or reduced-duty treatment under these preferential programs. Our practice includes preparation and review of USMCA certifications of origin, ensuring compliance with documentation requirements that allow preferential treatment while avoiding penalties for false or incorrect certifications. We handle verification audits from customs authorities of USMCA and FTA partner countries, assembling supporting documentation including bills of materials, production records, cost breakdowns, and supplier declarations that substantiate claimed origin. Our GSP practice assists clients in qualifying products under GSP's substantial transformation requirement and 35% value content test, preparing ruling requests addressing origin issues, and strategizing around GSP's country-specific competitive need limitations. We also monitor trade policy developments affecting preferential programs including negotiation of new trade agreements, amendments to existing FTAs, and potential GSP reauthorization, helping clients adapt their supply chains to maximize duty savings opportunities while maintaining full compliance with evolving preferential trade program requirements."
      },
      {
        title: "M&A Customs & Trade Due Diligence",
        content: "Our firm conducts comprehensive customs and trade compliance due diligence for mergers, acquisitions, and other corporate transactions involving companies engaged in international trade, identifying potential liabilities and compliance risks that could significantly impact deal value and post-transaction operations. We review target companies' import and export operations including examination of entry documentation, classification and valuation practices, drawback programs, free trade agreement claims, export control compliance, and customs penalty history to assess exposure for unpaid duties, potential violations, and systemic compliance weaknesses. Our due diligence process includes interviews with company personnel, review of import and export documentation, analysis of relationships with customs brokers and freight forwarders, and assessment of internal compliance programs, policies, and training. We prepare detailed reports quantifying identified risks including estimates of potential duty assessments, penalty exposure, and costs to remediate compliance deficiencies, providing buyers with critical information for purchase price negotiations, escrow arrangements, and post-closing integration planning. For sellers, we conduct pre-sale compliance reviews that identify and address issues before they impact transaction negotiations, prepare disclosure materials demonstrating strong compliance practices, and develop representations and warranties addressing customs and trade matters. Our M&A trade compliance services help clients structure transactions that appropriately allocate risks, implement compliance improvements in acquired operations, and avoid post-transaction surprises that could result in substantial financial liability or operational disruptions."
      }
    ]
  },
  {
    category: "Trade Remedies, Tariffs & Investigations",
    items: [
      {
        title: "AD/CVD (Antidumping & Countervailing Duty) Issues",
        content: "Trembach Law Firm represents both domestic petitioners and foreign respondents in antidumping and countervailing duty proceedings conducted by the U.S. Department of Commerce and International Trade Commission under 19 U.S.C. §§ 1671-1677n. We counsel clients through all phases of AD/CVD cases including petition filing, preliminary determinations, questionnaire responses, verification proceedings, final determinations, and administrative reviews. For domestic producers, we prepare comprehensive petitions demonstrating material injury or threat of injury from dumped or subsidized imports, support standing determinations showing adequate industry support, and litigate final determinations before the ITC and Commerce. For foreign exporters and producers, we prepare detailed responses to Commerce questionnaires addressing sales practices, cost of production, constructed value methodologies, and subsidy program participation, challenging adverse facts available applications and defending against allegations of dumping margins or countervailable subsidies. Our AD/CVD practice includes litigation before the U.S. Court of International Trade and Court of Appeals for the Federal Circuit challenging final determinations, calculation methodologies, and adverse inference applications that result in prohibitively high duty rates effectively excluding products from the U.S. market."
      },
      {
        title: "Administrative Reviews",
        content: "Our firm represents foreign producers, exporters, and U.S. importers in annual administrative reviews of antidumping and countervailing duty orders conducted by the Department of Commerce under 19 U.S.C. § 1675. We handle all aspects of administrative review proceedings including requests for review, responses to supplemental questionnaires, preparation for verification visits, and challenges to preliminary results demonstrating errors in Commerce's margin calculations. Our administrative review practice addresses complex methodological issues including normal value determinations, constructed export price calculations, circumstance of sale adjustments, affiliated party transactions, and assessment rates that determine final duties owed on subject merchandise entered during review periods. We negotiate expedited reviews for companies with minimal or zero dumping margins, pursue revocation of AD/CVD orders when conditions support elimination of relief, and challenge adverse findings through requests for ministerial error corrections, case briefs presenting legal and factual arguments, and requests for hearings before Commerce officials. By actively participating in administrative reviews, we help clients minimize duty liability, correct erroneous methodologies that inflate dumping margins, and work toward company-specific duty rates that reflect actual pricing practices rather than adverse facts available or country-wide rates."
      },
      {
        title: "Scope Rulings & Scope Issues",
        content: "Trembach Law Firm advises clients on scope determinations that establish whether products fall within the coverage of existing antidumping and countervailing duty orders, providing critical guidance that can mean the difference between duty-free entry and prohibitive AD/CVD assessment rates. We prepare scope ruling applications under 19 CFR 351.225 presenting detailed product descriptions, technical specifications, and legal arguments demonstrating that merchandise falls outside the scope language of AD/CVD orders based on physical characteristics, uses, or other distinguishing factors. Our scope practice includes preparation of circumvention inquiries under 19 U.S.C. § 1677j when domestic industries allege that foreign producers are evading AD/CVD orders through minor alterations to merchandise, transshipment through third countries, or later-developed products essentially the same as covered merchandise. We represent importers and foreign producers in scope litigation before the Court of International Trade challenging Commerce's scope determinations, appealing expansive scope interpretations that improperly include non-subject merchandise, and defending narrow scope readings that permit continued importation free from AD/CVD liability. Our strategic approach to scope issues includes supply chain restructuring to produce merchandise clearly outside scope limitations, product redesign to avoid circumvention findings, and due diligence for companies considering sourcing from countries subject to AD/CVD orders."
      },
      {
        title: "EAPA Investigations Defense (Enforce and Protect Act)",
        content: "Our firm provides aggressive defense representation in Enforce and Protect Act (EAPA) investigations conducted by U.S. Customs and Border Protection under 19 U.S.C. § 1517 when allegations arise that importers are evading antidumping or countervailing duty orders through transshipment, false country of origin declarations, or misclassification schemes. We respond to EAPA allegations filed by domestic producers, competitors, or initiated by CBP sua sponte, preparing comprehensive submissions demonstrating legitimate sourcing, proper country of origin marking, and absence of evasion activity. Our EAPA defense practice includes assembly of documentary evidence such as manufacturing records, bills of materials, supplier certifications, production capacity data, and shipping documentation that establish the true origin and nature of imported merchandise. We participate in all phases of EAPA proceedings including interim measures that suspend liquidation of entries, formal investigations requiring detailed factual submissions, verification proceedings involving on-site inspections of foreign manufacturing facilities, and final determinations that can result in heightened scrutiny, suspension of importation privileges, and referral for criminal investigation. When adverse EAPA determinations are issued, we pursue administrative reconsideration and judicial review before the Court of International Trade, challenging evidentiary findings, procedural irregularities, and legal conclusions that incorrectly brand legitimate trade as evasion activity."
      },
      {
        title: "Safeguard Tariff Issues",
        content: "Trembach Law Firm counsels clients on safeguard measures imposed under Section 201 of the Trade Act of 1974 (19 U.S.C. § 2251) and other safeguard authorities that provide temporary import relief to domestic industries suffering serious injury from increased imports, regardless of whether unfair trade practices are involved. We represent domestic producers seeking safeguard protection by preparing petitions filed with the U.S. International Trade Commission demonstrating serious injury or threat thereof caused by increased imports, participating in ITC hearings presenting economic data and witness testimony supporting relief, and advocating for appropriate remedy recommendations including tariff increases, tariff-rate quotas, or quantitative restrictions. For importers and foreign producers opposing safeguard measures, we present evidence that increased imports are not a substantial cause of serious injury, challenge causation findings, and advocate for excluding products from safeguard coverage based on lack of competitive overlap with domestic products. Our practice addresses global safeguard measures applicable to all import sources, developing country exclusions available under WTO rules, and bilateral safeguards under free trade agreements such as USMCA. We handle product exclusion requests seeking relief from safeguard tariffs for specific articles not produced domestically, quota administration issues for clients importing under tariff-rate quotas, and litigation challenging ITC injury findings or Presidential remedy determinations before the Court of International Trade."
      },
      {
        title: "Section 301 Duties & Exclusion Requests",
        slug: "retaliatory-tariffs",
        content: "Our firm provides comprehensive guidance on Section 301 tariffs imposed on imports from China and potentially other countries under the Trade Act of 1974 (19 U.S.C. § 2411) in response to acts, policies, or practices of foreign governments that are unreasonable or discriminatory and burden U.S. commerce. We counsel clients on the scope of Section 301 tariff lists covering hundreds of billions of dollars in Chinese products, classification issues determining whether specific merchandise is subject to additional duties, and compliance strategies for companies dependent on Chinese supply chains. Our Section 301 exclusion request practice prepares detailed applications to the U.S. Trade Representative seeking product-specific exclusions from additional tariffs based on arguments that products are not available from U.S. or third-country sources, Chinese origin is required due to technical specifications or performance characteristics, or severe economic harm from additional tariff burdens. We monitor USTR's exclusion processes including limited exclusion reinstatements, prepare timely submissions during compressed comment periods, and respond to objections filed by domestic interests opposing exclusion requests. Our strategic advice includes supply chain diversification to reduce dependency on Section 301-covered products, country of origin planning to source merchandise from non-covered countries, and assessment of manufacturing relocation options when exclusion relief is unavailable."
      },
      {
        title: "Section 232 Tariffs on Steel & Aluminum Products",
        content: "Trembach Law Firm advises clients on Section 232 tariffs on steel and aluminum imports imposed under the Trade Expansion Act of 1962 (19 U.S.C. § 1862) based on determinations that such imports threaten national security interests of the United States. We counsel importers, distributors, and manufacturers affected by 25% additional duties on steel products and 10% additional duties on aluminum articles, addressing classification issues determining whether specific products constitute \"steel\" or \"aluminum articles\" subject to Section 232 tariffs. Our practice includes guidance on exemptions for steel and aluminum from countries with which the U.S. has negotiated alternative arrangements including tariff-rate quotas, monitoring of derivative steel and aluminum products potentially subject to expanded Section 232 coverage, and compliance with tracing requirements and certification obligations for imports from exempt sources. We handle quota administration issues for companies importing under country-specific tariff-rate quotas established as alternatives to Section 232 tariffs, prepare exclusion requests for product-specific relief from Section 232 duties, and challenge erroneous CBP assessments of Section 232 tariffs on merchandise that should be exempt from additional duties. Our strategic counseling includes supply chain restructuring to source steel and aluminum from non-covered countries, product redesign to fall outside the scope of steel and aluminum article definitions, and analysis of domestic sourcing options to avoid Section 232 duty impacts."
      },
      {
        title: "§301 & 232 Exclusions",
        content: "Our firm prepares and files product-specific exclusion requests seeking relief from Section 301 and Section 232 additional tariffs administered by the U.S. Trade Representative and Department of Commerce respectively. We develop comprehensive exclusion applications that include detailed technical product descriptions, Harmonized Tariff Schedule classification information, and documentary evidence supporting statutory exclusion criteria including unavailability of domestic or third-country alternatives, unique product characteristics requiring foreign sourcing, and severe economic harm from additional tariff burdens. Our exclusion practice includes preparation of exhibits demonstrating purchaser requirements for specific products, inability of U.S. producers to supply comparable merchandise in sufficient quantities or with required specifications, and cost impacts threatening business viability if exclusions are denied. We monitor public comments filed by domestic producers and other parties opposing exclusion requests, prepare rebuttal comments responding to objections, and participate in post-decision reconsideration processes when exclusion requests are denied. Our strategic approach recognizes the political and policy factors influencing exclusion decisions, crafts arguments that resonate with agency priorities, and maintains persistent advocacy through multiple exclusion processes when opportunities for relief arise through new exclusion windows or reinstatement of lapsed exclusions."
      },
      {
        title: "Tariffs & Penalties (advice, protests & litigation)",
        content: "Trembach Law Firm provides comprehensive representation addressing all aspects of tariff disputes and penalty defense arising from alleged violations of customs laws. We prepare and file protests under 19 U.S.C. § 1514 challenging CBP decisions regarding classification, valuation, country of origin, denial of preferential tariff treatment, and other determinations affecting the duties and fees owed on imported merchandise. Our protest practice includes detailed legal briefs presenting arguments based on statutory interpretation, regulatory requirements, CBP rulings and court decisions, and factual evidence supporting claimed treatment, as well as negotiation of prospective rulings that govern future treatment of merchandise in addition to protested entries. When administrative protests are denied, we litigate tariff disputes before the U.S. Court of International Trade under 28 U.S.C. § 1581, preparing complaints, conducting discovery, presenting expert testimony, and briefing complex legal issues that determine final duty liability. Our penalty defense practice represents clients facing allegations of negligence, gross negligence, or fraud under 19 U.S.C. § 1592, preparing petitions demonstrating reasonable care, lack of culpability, or mitigating factors warranting penalty mitigation or cancellation. We negotiate settlements with CBP's Fines, Penalties and Forfeitures offices reducing penalty assessments to appropriate levels, litigate civil penalty actions when settlement negotiations fail, and defend criminal customs investigations involving allegations of intentional duty evasion, smuggling, or false statements to government officials."
      }
    ]
  },
  {
    category: "Export Controls & Sanctions",
    items: [
      {
        title: "Export Controls Compliance (BIS / OFAC Administered Export Controls)",
        slug: "export-controls-sanctions",
        content: "Trembach Law Firm provides comprehensive export controls compliance counseling addressing the Export Administration Regulations (EAR) administered by the Bureau of Industry and Security (BIS) under 15 CFR Parts 730-774, the International Traffic in Arms Regulations (ITAR) administered by the State Department's Directorate of Defense Trade Controls (DDTC) under 22 CFR Parts 120-130, and sanctions programs administered by the Office of Foreign Assets Control (OFAC) under 31 CFR Chapter V. We help companies develop and implement export compliance programs incorporating policies, procedures, training, auditing, and recordkeeping systems that satisfy regulatory requirements and prevent violations of export control laws. Our compliance practice includes guidance on determining whether products, software, or technology are subject to EAR jurisdiction or constitute defense articles under ITAR, classification of items under the Commerce Control List and U.S. Munitions List, and application of export control rules to commercial transactions involving controlled items. We counsel clients on screening requirements for denied persons, entities on BIS Entity List and other restricted party lists, sanctioned countries and regions subject to comprehensive or targeted sanctions, and foreign nationals requiring export licenses for deemed exports of controlled technology. Our compliance services help companies navigate the complex intersection of BIS and OFAC requirements, avoid costly violations that can result in substantial civil and criminal penalties, and maintain export privileges essential to international business operations."
      },
      {
        title: "Export Process, Licensing & Export Agreements",
        content: "Our firm guides clients through the export licensing process including preparation and filing of license applications with the Bureau of Industry and Security for dual-use items controlled under the Export Administration Regulations and the Directorate of Defense Trade Controls for defense articles and services controlled under ITAR. We prepare comprehensive license applications including technical specifications, end-use statements, foreign consignee information, and justifications demonstrating why controlled items should be authorized for export to specific destinations and end-users. Our export licensing practice includes advice on license exceptions and exemptions that permit exports without individual licenses under specific conditions, strategic trade authorization provisions streamlining exports to close allies, and temporary import provisions allowing controlled items to be exported for demonstration, testing, or repair with subsequent return. We prepare Technical Assistance Agreements (TAAs), Manufacturing License Agreements (MLAs), and Warehouse Distribution Agreements (WDAs) required under ITAR for transfers of technical data and defense services to foreign persons, negotiating technology transfer terms that comply with regulatory requirements while protecting proprietary information. Our practice addresses compliance with export license conditions, recordkeeping and reporting requirements, export clearance procedures, and automated export system (AES) filing obligations ensuring proper government notification of controlled exports and reexports to foreign destinations."
      },
      {
        title: "Commodity Jurisdiction & Export Classification Issues",
        content: "Trembach Law Firm assists clients in determining proper export classification of products, software, and technology under complex regulatory frameworks that determine licensing requirements, prohibited destinations, and compliance obligations. We prepare commodity jurisdiction (CJ) requests filed with the State Department seeking determinations of whether items constitute defense articles subject to ITAR or are properly classified as dual-use items under EAR jurisdiction, presenting technical arguments and policy rationales supporting favorable jurisdictional outcomes. Our classification practice includes preparation of classification requests to BIS seeking official Export Control Classification Numbers (ECCNs) for dual-use items, analyzing items against Commerce Control List descriptions to determine applicable export control restrictions, and assessing whether products qualify for EAR99 designation as items not controlled for export under specific ECCN categories. We handle classification disputes arising from disagreements with government determinations, prepare reclassification requests when initial determinations are inconsistent with item characteristics or regulatory criteria, and challenge arbitrary or unreasonable classification decisions that improperly restrict legitimate commercial exports. Our classification services help clients understand their regulatory obligations, avoid violations resulting from incorrect classification assumptions, and obtain official determinations providing certainty for ongoing compliance programs and international business planning."
      },
      {
        title: "Deemed Export Issues",
        content: "Our firm counsels companies on deemed export regulations under 15 CFR § 734.13 and 22 CFR § 120.17 that treat the release of controlled technology or technical data to foreign nationals within the United States as exports to such persons' countries of nationality, requiring compliance with export licensing requirements even for domestic transactions. We advise clients on screening and authorization requirements for employing foreign national scientists, engineers, and technicians who may access export-controlled technology in the course of their employment, including preparation of license applications for deemed exports to employees from countries requiring authorization for technology transfers. Our deemed export practice includes development of technology control plans that segregate foreign nationals from access to controlled technology, implement need-to-know restrictions, and establish physical and electronic security measures preventing unauthorized access to controlled information. We prepare foreign national access requests seeking BIS and DDTC authorization for specific foreign persons to access controlled technology, provide guidance on technology transfer agreements required under ITAR for deemed exports of defense articles, and counsel universities and research institutions on compliance with deemed export rules applicable to international students and visiting scholars participating in research projects. Our services help companies leverage global talent pools while maintaining compliance with deemed export regulations that extend export controls to domestic technology transfers based on recipients' foreign nationality."
      },
      {
        title: "Sanctions, Embargoes & Denied Parties / Restricted Party Screening",
        content: "Trembach Law Firm provides comprehensive guidance on economic sanctions and embargo programs administered by the Office of Foreign Assets Control (OFAC) under the International Emergency Economic Powers Act (IEEPA), Trading with the Enemy Act (TWEA), and other statutory authorities that prohibit or restrict transactions involving sanctioned countries, entities, and individuals. We counsel clients on compliance with comprehensive country sanctions applicable to Cuba, Iran, North Korea, Syria, and Russia-occupied regions of Ukraine that broadly prohibit U.S. persons from engaging in virtually all transactions involving these jurisdictions and their governments, nationals, and blocked entities. Our practice addresses targeted sanctions programs that designate specific individuals and entities for blocking based on involvement in terrorism, narcotics trafficking, weapons proliferation, human rights abuses, corruption, and other sanctionable conduct, requiring clients to block property and reject transactions involving Specially Designated Nationals (SDNs) and other OFAC-listed persons. We implement screening procedures for customers, vendors, financial institutions, and other counterparties against restricted party lists maintained by OFAC, BIS, State Department, and other agencies, utilizing interdiction software and manual review processes that identify potential matches requiring enhanced due diligence or transaction rejection. Our sanctions practice includes preparation of license applications seeking OFAC authorization for transactions that would otherwise violate sanctions, guidance on humanitarian exceptions and general licenses authorizing specific categories of transactions, and compliance with sectoral sanctions imposing targeted restrictions on specific industries in sanctioned countries."
      },
      {
        title: "Anti-boycott Compliance",
        content: "Our firm advises clients on compliance with U.S. anti-boycott laws administered by the Department of Commerce under the Export Administration Regulations (15 CFR Part 760) and the Department of Treasury under the Internal Revenue Code (26 U.S.C. § 999) that prohibit U.S. persons from participating in or cooperating with foreign boycotts not sanctioned by the United States, particularly the Arab League boycott of Israel. We review letters of credit, purchase orders, contracts, and other commercial documents for prohibited boycott language including requests to certify that goods are not of Israeli origin, refusing to do business with blacklisted companies, providing information about business relationships with Israel or Israeli nationals, or implementing letters of credit containing prohibited boycott conditions. Our anti-boycott practice includes guidance on responding to boycott requests in a manner that avoids prohibited participation while preserving commercial relationships, preparation of required reports to the Department of Commerce disclosing receipt of boycott-related requests, and development of compliance procedures that identify and reject prohibited boycott conditions before they result in violations. We handle enforcement matters arising from anti-boycott violations, preparing voluntary self-disclosures, negotiating settlements with BIS and IRS, and defending against civil penalties and criminal charges for willful anti-boycott violations that can result in substantial fines, imprisonment, and loss of export privileges."
      },
      {
        title: "Voluntary Self-Disclosures of Export Violations",
        content: "Trembach Law Firm assists clients in preparing voluntary self-disclosures (VSDs) to the Bureau of Industry and Security, Office of Foreign Assets Control, and Directorate of Defense Trade Controls when potential export control or sanctions violations are discovered through internal audits, compliance reviews, or government inquiries. We conduct thorough internal investigations to identify the nature and scope of potential violations, assess root causes including inadequate compliance procedures or employee misconduct, and determine whether disclosure qualifies for VSD treatment under regulatory provisions that provide mitigation credit for voluntary disclosure of violations before government discovery. Our VSD practice includes preparation of comprehensive disclosure submissions that include detailed narrative explanations of violations, supporting documentation, proposed remedial measures to prevent recurrence, and assessment of applicable penalties under agency enforcement guidelines. We negotiate with BIS, OFAC, and DDTC regarding resolution of disclosed violations, advocating for reduced penalties based on voluntary disclosure credit, cooperation with government investigations, and implementation of enhanced compliance measures. Our strategic approach to voluntary self-disclosure balances the benefits of disclosure including potential penalty reductions and demonstration of compliance commitment against the risks of admitting violations and providing evidence that could support enforcement actions, helping clients make informed decisions about whether and how to disclose potential export control and sanctions violations to appropriate authorities."
      },
      {
        title: "Export Penalty Defense",
        content: "Our firm provides aggressive defense representation for companies and individuals facing export control and sanctions enforcement actions, including civil penalty proceedings, criminal investigations, and denial of export privileges that can threaten business viability and individual liberty. We represent clients in enforcement proceedings brought by BIS Office of Export Enforcement alleging violations of the Export Administration Regulations, OFAC Office of Foreign Assets Control asserting sanctions violations, and DDTC Office of Defense Trade Controls Compliance pursuing ITAR enforcement for unauthorized exports or transfers of defense articles and services. Our penalty defense practice includes preparation of responses to penalty notices and charging letters presenting legal defenses, mitigating arguments, and evidence demonstrating reduced culpability or circumstances warranting penalty mitigation under agency guidelines. We negotiate settlements resolving civil penalty cases through consent agreements providing for reduced monetary penalties, compliance commitments, and other conditions allowing clients to continue business operations while addressing government concerns. When criminal export control violations are alleged involving willful violations, conspiracy, or false statements, we coordinate with experienced criminal defense counsel to protect clients' rights, respond to grand jury subpoenas and search warrants, and negotiate plea agreements or defend against criminal charges at trial. Our comprehensive penalty defense services help clients minimize financial exposure, preserve export privileges essential to international business operations, and protect individual defendants from imprisonment and other severe consequences of criminal export control violations."
      }
    ]
  },
  {
    category: "Trade & Maritime Litigation / Disputes",
    items: [
      {
        title: "Trade Litigation (tariffs, penalties, AD/CVD, customs & export matters)",
        slug: "trade-litigation",
        content: "Trembach Law Firm provides comprehensive representation in complex trade litigation matters involving tariff classifications, customs penalties, antidumping and countervailing duty (AD/CVD) proceedings, and export compliance disputes before U.S. Customs and Border Protection, the Court of International Trade, and federal appellate courts. Our experienced international trade attorneys defend importers, exporters, and customs brokers against penalty assessments, challenge adverse customs decisions, litigate classification and valuation disputes, and represent clients in AD/CVD administrative reviews and scope determinations. With deep expertise in customs law, Harmonized Tariff Schedule classifications, and trade remedy investigations, we protect your business interests throughout California and nationwide, ensuring compliance while aggressively defending your rights in enforcement actions and administrative proceedings."
      },
      {
        title: "Admiralty & Maritime Claims",
        content: "Our maritime law practice represents clients in admiralty and maritime claims arising from international shipping, vessel operations, and maritime commerce, including cargo damage disputes, bill of lading controversies, charter party disagreements, maritime liens, vessel arrests, and Jones Act matters. Trembach Law Firm handles collision and allision claims, salvage disputes, general average adjustments, and maritime personal injury cases in federal courts throughout California and nationwide. We provide strategic counsel on maritime contract disputes, limitation of liability proceedings under the Limitation of Liability Act, and insurance coverage issues specific to maritime operations. Our attorneys understand the unique jurisdictional and procedural requirements of admiralty law, delivering effective representation for shipowners, cargo interests, maritime service providers, and international traders navigating complex maritime legal matters."
      },
      {
        title: "Customs Brokerage Liability (claims & defenses)",
        content: "Trembach Law Firm defends licensed customs brokers and freight forwarders against liability claims, regulatory enforcement actions, and negligence allegations arising from customs entry preparation, classification errors, valuation disputes, and compliance failures. Our customs brokerage defense practice includes representation in CBP administrative proceedings, penalty mitigation, license suspension or revocation matters, and civil litigation involving broker liability for unpaid duties, misclassifications, or compliance violations. We counsel customs brokers on risk management, professional liability issues, reasonable care standards, and contractual protections while defending against claims from importers, sureties, and government agencies. With comprehensive knowledge of customs brokerage regulations under 19 CFR Part 111 and industry standards, we protect your professional reputation and business interests throughout California's import/export community and across federal jurisdictions."
      },
      {
        title: "Cargo Claims",
        content: "Our cargo claims practice represents shippers, consignees, carriers, and freight forwarders in disputes involving damaged, lost, or delayed cargo in international and domestic transportation. Trembach Law Firm litigates cargo damage claims under the Carmack Amendment, Carriage of Goods by Sea Act (COGSA), Montreal Convention, and bill of lading terms, pursuing recovery for cargo loss or defending against claims based on carrier defenses, limitation of liability, and proper notice requirements. We handle subrogation actions, insurance recovery disputes, and multi-modal transportation claims involving ocean, air, rail, and trucking shipments. Our attorneys analyze bills of lading, survey reports, and commercial terms to build compelling cases for maximum recovery or effective defense, serving California businesses and international traders throughout federal and state courts nationwide."
      },
      {
        title: "Contract & International Trade Disputes",
        content: "Trembach Law Firm resolves complex commercial disputes arising from international trade contracts, including sales agreements, distribution agreements, agency relationships, supply contracts, letters of credit, and Incoterms disputes. Our international trade litigation practice encompasses breach of contract claims, warranty disputes, payment controversies, forum selection and choice of law issues, and enforcement of foreign judgments and arbitration awards. We represent California businesses and international parties in disputes involving the United Nations Convention on Contracts for the International Sale of Goods (CISG), UCC Article 2, documentary transactions, and international commercial terms. Whether through negotiation, mediation, arbitration, or federal court litigation, we provide strategic counsel to protect your commercial interests, recover damages, and resolve cross-border business disputes efficiently across all 58 California counties and federal jurisdictions nationwide."
      },
      {
        title: "FMC Complaints & Disputes",
        content: "Our Federal Maritime Commission (FMC) practice represents ocean transportation intermediaries, non-vessel operating common carriers (NVOCCs), ocean freight forwarders, and shippers in regulatory proceedings, license applications, tariff disputes, and enforcement actions before the FMC. Trembach Law Firm handles Shipping Act violations, service contract disputes, demurrage and detention charge controversies, unreasonable refusal to deal claims, and licensing matters for Ocean Transportation Intermediaries (OTIs). We defend against FMC investigations, penalty assessments, and license revocation proceedings while pursuing claims for unfair shipping practices, unreasonable detention charges, and violations of maritime regulations. Our attorneys navigate the complex regulatory framework governing ocean transportation, protecting your maritime business interests in administrative proceedings and federal court litigation throughout California and nationwide."
      },
      {
        title: "Marine Insurance Coverage Claims",
        content: "Trembach Law Firm represents policyholders and insurers in marine insurance coverage disputes involving cargo insurance, hull and machinery policies, protection and indemnity (P&I) coverage, freight insurance, and maritime liability policies. Our marine insurance practice encompasses coverage denial disputes, policy interpretation issues, subrogation claims, general average contributions, and bad faith litigation under California insurance law and federal maritime law. We analyze marine insurance policies, evaluate coverage obligations, negotiate settlement agreements, and litigate coverage disputes in federal and state courts throughout California. Whether pursuing insurance recovery for cargo loss, vessel damage, or maritime liability claims, or defending insurers against coverage demands, we provide sophisticated counsel on the unique aspects of marine insurance law, York-Antwerp Rules, and maritime risk allocation."
      },
      {
        title: "False Claims Act Defense (customs & trade related)",
        content: "Our False Claims Act defense practice protects importers, exporters, customs brokers, and government contractors against qui tam whistleblower lawsuits and government investigations alleging customs fraud, duty evasion, classification violations, country of origin misrepresentations, or false statements to federal agencies. Trembach Law Firm defends clients in FCA litigation involving allegations of customs duty underpayment, fraudulent entry documentation, violations of antidumping or countervailing duty orders, export control violations, and trade preference abuse. We conduct internal investigations, negotiate with the Department of Justice, defend against treble damages and civil penalties, and challenge relator claims based on knowledge, materiality, and causation requirements. With deep expertise in customs law and FCA jurisprudence, we protect California businesses and nationwide clients from devastating qui tam litigation and government enforcement actions in federal courts."
      }
    ]
  },
  {
    category: "Compliance Programs, Enforcement & Training",
    items: [
      {
        title: "Trade Compliance Programs (design, implementation & audits)",
        content: "Trembach Law Firm designs, implements, and audits comprehensive trade compliance programs tailored to your business operations, ensuring adherence to U.S. Customs and Border Protection regulations, export control laws, sanctions requirements, and international trade obligations. Our trade compliance consulting services include developing written policies and procedures, establishing internal controls for import/export activities, creating reasonable care programs under 19 USC 1484, implementing risk assessment protocols, and designing training programs for employees. We conduct compliance assessments, identify regulatory gaps, recommend corrective actions, and help California businesses achieve C-TPAT certification, Authorized Economic Operator (AEO) status, and Importer Self-Assessment (ISA) program participation. Our proactive compliance approach minimizes penalty exposure, streamlines customs operations, and demonstrates good faith to regulatory authorities throughout all 58 California counties and federal jurisdictions nationwide."
      },
      {
        title: "Trade Compliance Assessment and Maturity Framework",
        content: "Our trade compliance assessment practice evaluates your organization's customs and trade compliance maturity level, identifying strengths, weaknesses, and opportunities for improvement through comprehensive audits of import/export operations, internal controls, and regulatory adherence. Trembach Law Firm applies industry-standard maturity frameworks to assess classification accuracy, valuation procedures, recordkeeping systems, compliance staffing, technology utilization, and management oversight of trade operations. We conduct transactional testing, document reviews, interview key personnel, benchmark against industry best practices, and deliver detailed reports with prioritized recommendations for enhancing compliance capabilities. Our assessments help California importers and exporters reduce regulatory risk, improve operational efficiency, prepare for CBP audits, and demonstrate commitment to compliance excellence, serving businesses throughout California and nationwide with tailored maturity roadmaps."
      },
      {
        title: "Enforcement Actions (customs, trade, export & sanctions)",
        content: "Trembach Law Firm defends clients against U.S. Customs and Border Protection enforcement actions, Bureau of Industry and Security (BIS) investigations, Office of Foreign Assets Control (OFAC) sanctions violations, and other trade penalty proceedings involving customs fraud, classification errors, valuation violations, export control breaches, and sanctions compliance failures. Our enforcement defense practice includes responding to CBP Notices of Action, CF-29 penalty notices, pre-penalty notices, administrative summons, and Focused Assessment audits while negotiating penalty mitigation through prior disclosure submissions under 19 USC 1592(c)(4) and informed compliance strategies. We represent California businesses and nationwide clients in penalty proceedings, settlement negotiations, informal conferences with CBP, BIS charging letters, OFAC enforcement actions, and judicial review proceedings. Our aggressive defense approach minimizes penalties, protects business reputations, and resolves enforcement matters efficiently across federal jurisdictions."
      },
      {
        title: "Supply Chain Security",
        content: "Our supply chain security practice helps importers, exporters, and logistics providers implement security measures, achieve C-TPAT certification, comply with Importer Security Filing (ISF) requirements, and participate in trusted trader programs that expedite customs clearance while enhancing cargo security. Trembach Law Firm counsels California businesses on supply chain risk management, security best practices, business partner vetting, facility security standards, and container security requirements under CBP security initiatives. We assist with C-TPAT applications, validations, revalidations, and suspension removals, develop security procedures meeting CBP minimum security criteria, and represent clients in security-related penalty proceedings. Our supply chain security consulting protects your business from security threats, reduces examination rates, qualifies you for trade facilitation benefits, and ensures uninterrupted supply chain flow for international trade operations."
      }
    ]
  }
];

// --- Sub-Components ---

const PracticeAccordionItem: React.FC<{
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
  slug?: string;
}> = ({ title, content, isOpen, onToggle, slug }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="w-full mb-2" id={slug}>
      <button
        onClick={onToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-full text-left bg-white rounded-2xl border border-border-subtle shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-secondary-teal flex items-center"
        style={{
          minHeight: '88px',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          boxSizing: 'border-box'
        }}
        aria-expanded={isOpen}
        aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${title}`}
      >
         {/* Green Triangle with White Arrow - Slides in on Hover/Open */}
         <div
           style={{
             position: 'absolute',
             top: '0',
             right: (isOpen || isHovered) ? '0' : '-96px',
             width: '96px',
             height: '96px',
             minWidth: '96px',
             minHeight: '96px',
             maxWidth: '96px',
             maxHeight: '96px',
             background: '#3FBB94',
             clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
             transition: 'right 300ms cubic-bezier(0.4, 0, 0.2, 1)',
             zIndex: 10,
             pointerEvents: 'none',
             boxSizing: 'border-box',
             flexShrink: 0
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
               minWidth: '22.4px',
               minHeight: '22.4px',
               position: 'absolute',
               top: '20.8px',
               right: '20.8px',
               transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
               transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
               flexShrink: 0
             }}
           >
             <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
           </svg>
         </div>

         <h3
           className="font-garamond font-bold text-primary-navy transition-colors group-hover:text-primary-darkBlue leading-tight"
           style={{
             fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
             paddingRight: '80px'
           }}
         >
            {title}
         </h3>
      </button>

      {/* Content Dropdown Animation */}
      <div
        style={{
          maxHeight: isOpen ? '2000px' : '0',
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? '8px' : '0',
          overflow: 'hidden',
          transition: 'max-height 300ms ease-in-out, opacity 300ms ease-in-out, margin-top 300ms ease-in-out'
        }}
      >
        <div className="bg-white p-4 md:p-6 rounded-2xl border-l-4 border-secondary-teal shadow-sm">
          <p className="text-base md:text-lg leading-relaxed text-text-secondary">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const PracticeAreasPage: React.FC = () => {
  useMeta({
    title: 'CA Trade Law Services | Customs Defense & Export Compliance',
    description: 'California trade law: customs defense, CBP investigations, ITAR/EAR compliance, trade finance, drawback claims, foreign trade zones, maritime law, tariff engineering. Expert CA/USA representation.',
    canonical: 'practice-areas',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-practice-areas.jpg`,
    ogImageAlt: 'Trade Law Practice Areas - Customs Defense, Compliance & Export Controls',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    twitterImageAlt: 'Trade Law Practice Areas - Customs Defense, Compliance & Export Controls',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Practice Areas',
        description: 'Trembach Law Firm offers creative strategies that allow clients to stay competitive in the global marketplace.',
        url: `${siteConfig.siteUrl}/#practice-areas`,
        publisher: {
          '@type': 'Organization',
          '@id': 'https://trembach.law/#organization',
        },
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Practice Areas', url: `${siteConfig.siteUrl}/#practice-areas` }
      ]),
      // Key Service Schemas for top practice areas - Keyword Optimized
      generateServiceSchema({
        name: 'California Customs Defense & CBP Investigation Representation',
        description: 'Expert California customs audits defense, CBP investigation defense, CBP penalty mitigation, customs seizures defense, import detention release, California customs litigation, customs fraud defense, False Claims Act defense, whistleblower trade cases, and export violations defense for California businesses.',
        serviceType: 'Customs Defense & Litigation',
      }),
      generateServiceSchema({
        name: 'Trade Compliance & Regulatory Advisory Services California',
        description: 'Comprehensive trade compliance California programs including import compliance programs, export compliance programs, federal trade compliance, trade compliance audits, prior disclosure customs, voluntary self disclosure export, customs record keeping, customs ruling requests, and trade compliance for manufacturers.',
        serviceType: 'Regulatory Compliance',
      }),
      generateServiceSchema({
        name: 'Export Controls & Sanctions Compliance California',
        description: 'Expert export controls California lawyer services for ITAR compliance, EAR compliance, OFAC sanctions compliance, export licensing, technology export controls, encryption export regulations, dual use items compliance, deemed exports, and restricted party screening for California technology and manufacturing companies.',
        serviceType: 'Export Controls Law',
      }),
      generateServiceSchema({
        name: 'Tariff Classification Legal Services',
        description: 'Expert legal guidance on Harmonized Tariff Schedule (HTS) classification, binding rulings, classification disputes, and litigation before the Court of International Trade.',
        serviceType: 'International Trade Law',
      }),
      generateServiceSchema({
        name: 'Antidumping & Countervailing Duty (AD/CVD) Representation',
        description: 'Full-service representation in AD/CVD proceedings before the Department of Commerce and International Trade Commission, including administrative reviews and scope rulings.',
        serviceType: 'Trade Remedy Law',
      }),
      generateServiceSchema({
        name: 'USMCA & Free Trade Agreement Services',
        description: 'Expert guidance on USMCA, bilateral FTAs, and GSP preferential tariff treatment, including origin certifications, rules of origin analysis, and verification defense.',
        serviceType: 'International Trade Law',
      }),
      // Niche Service Schemas - Specialized Practice Areas
      generateServiceSchema({
        name: 'Trade Finance & Commercial Transactions California',
        description: 'Comprehensive trade finance law California services including international distribution agreements, cross border contracts, letters of credit disputes, international logistics contracts, customs brokerage legal advice, and Incoterms advice for California importers and exporters.',
        serviceType: 'Commercial Trade Law',
      }),
      generateServiceSchema({
        name: 'Duty Savings & Foreign Trade Zones California',
        description: 'Expert drawback claims California, foreign trade zones California, bonded warehouse regulations, tariff engineering California, free trade agreements California, and USMCA compliance California services to maximize duty savings and minimize import costs for California businesses.',
        serviceType: 'Duty Recovery & Optimization',
      }),
      generateServiceSchema({
        name: 'Logistics & Maritime Trade Law California',
        description: 'Specialized maritime trade law California services covering ocean shipping regulation California, air cargo regulation California, cargo insurance disputes California, and international shipping regulations California for logistics companies and freight forwarders.',
        serviceType: 'Transportation & Maritime Law',
      }),
      // FAQ Schema for Niche Services - Enhanced Keyword Coverage
      generateFAQSchema([
        {
          question: 'What is trade finance law and how does it apply to California importers?',
          answer: 'Trade finance law governs payment methods and commercial agreements in international trade. California importers use trade finance mechanisms including letters of credit, documentary collections, and bank guarantees to secure payment and delivery in cross-border transactions. Our trade finance law services include drafting international distribution agreements, negotiating cross border contracts, resolving letters of credit disputes, reviewing international logistics contracts, providing customs brokerage legal advice, and offering Incoterms advice to clarify buyer-seller responsibilities for shipping costs, insurance, and delivery terms in international sales.',
        },
        {
          question: 'What are duty drawback claims and how can California businesses recover customs duties?',
          answer: 'Duty drawback claims allow California importers and exporters to recover 99% of customs duties paid on imported goods that are subsequently exported or destroyed under 19 U.S.C. § 1313. Our drawback claims California services help businesses establish drawback programs, file manufacturing drawback for goods used in exported products, claim unused merchandise drawback for imported goods exported without use, and implement inventory tracking systems ensuring compliance with drawback substitution requirements. Drawback recovery provides significant cost savings that improve competitiveness in global markets.',
        },
        {
          question: 'What are Foreign Trade Zones and how can they benefit California manufacturers?',
          answer: 'Foreign Trade Zones (FTZs) are secure areas within the United States where imported goods can be stored, manufactured, or assembled without paying customs duties until entering U.S. commerce. Our foreign trade zones California services help businesses establish FTZ operations, navigate bonded warehouse regulations, implement tariff engineering strategies to minimize duty costs through optimal product assembly and manufacturing sequences, and maximize benefits from free trade agreements including USMCA compliance California programs that provide preferential duty treatment for qualifying North American products.',
        },
        {
          question: 'What is maritime trade law and how does it affect California shipping operations?',
          answer: 'Maritime trade law governs the transportation of goods by sea and air, including ocean shipping regulation, air cargo regulation, and cargo insurance. Our maritime trade law California practice assists logistics companies, freight forwarders, and importers with ocean shipping regulation compliance under the Shipping Act, resolution of air cargo regulation disputes with carriers, cargo insurance disputes recovery when goods are lost or damaged in transit, and guidance on international shipping regulations including bills of lading, charter parties, and carrier liability limitations under COGSA and Montreal Convention.',
        },
      ]),
    ],
  });

  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    // Check if there's a specific practice area to open from the URL
    const hash = window.location.hash;
    let targetSlug: string | null = null;

    // Extract slug from query parameter format: #practice-areas?slug=customs-valuation
    if (hash.includes('?slug=')) {
      const urlParams = new URLSearchParams(hash.split('?')[1]);
      targetSlug = urlParams.get('slug');
    }
    // Also support old format: #practice-areas/customs-valuation
    else if (hash.includes('practice-areas/')) {
      const slugMatch = hash.match(/practice-areas\/(\w+-?\w*)/);
      if (slugMatch && slugMatch[1]) {
        targetSlug = slugMatch[1];
      }
    }

    if (targetSlug) {
      // Find the item with this slug
      practiceData.forEach((category, catIndex) => {
        category.items.forEach((item, itemIndex) => {
          if ((item as any).slug === targetSlug) {
            const uniqueKey = `${catIndex}-${itemIndex}`;
            setOpenItems({ [uniqueKey]: true });

            // Scroll to the element after a short delay to ensure rendering
            setTimeout(() => {
              const element = document.getElementById(targetSlug!);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 300);
          }
        });
      });
    }
  }, []);

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="pt-20 font-montserrat text-neutral-darkGray">
      {/* Hero Section */}
      <section className="relative w-full py-32 px-6 text-center overflow-hidden flex flex-col justify-center min-h-[60vh]">
         {/* Background Image */}
         <div className="absolute inset-0 z-0" aria-hidden="true">
           <img
             src="/images/hero-practice-areas.jpg"
             alt="California international trade and customs law practice areas - comprehensive legal services from import compliance to export controls"
             className="w-full h-full object-cover object-center"
             loading="eager"
             decoding="async"
             fetchpriority="high"
             width="1920"
             height="1080"
           />
           {/* Overlay with 55% opacity for better text visibility */}
           <div className="absolute inset-0" style={{backgroundColor: 'rgba(1, 33, 105, 0.55)'}}></div>
         </div>

         {/* Hero Content */}
         <div className="relative z-10 max-w-4xl mx-auto">
           <h1 className="text-5xl md:text-7xl font-bold font-garamond mb-6 tracking-tight leading-tight" style={{color: '#ffffff', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 40px rgba(1, 33, 105, 0.5)'}}>
             Practice Areas
           </h1>
           <p className="text-xl md:text-2xl font-medium tracking-wide mb-4" style={{color: '#ffffff', textShadow: '0 2px 6px rgba(0, 0, 0, 0.8), 0 4px 12px rgba(0, 0, 0, 0.5)'}}>
             Creative strategies and innovative solutions for the global marketplace.
           </p>
           <div className="w-24 h-1 bg-secondary-teal mx-auto mt-6"></div>
         </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl leading-relaxed text-text-secondary">
            Trembach Law Firm offers creative strategies that allow our clients to stay competitive in the global marketplace. With customs and international trade issues now receiving C-Suite level attention, the scope of our practice matches current needs for innovative customs and trade solutions. We take pride in our ability to obtain and share timely information with our clients, to communicate with government officials, to craft customs and international trade solutions, and to aggressively seek resolution of international trade issues.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <div
                className="absolute pointer-events-none flex items-center justify-center"
                style={{
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10
                }}
                aria-hidden="true"
              >
                <SearchIcon className="text-gray-400" style={{ width: '20px', height: '20px', display: 'block' }} />
              </div>
              <input
                type="text"
                placeholder="Search Practice Areas by Keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 text-base bg-white border border-gray-300 focus:outline-none focus:border-gray-400 transition-all placeholder:text-gray-400 text-gray-700"
                style={{ paddingLeft: '48px', paddingRight: '16px' }}
                aria-label="Search practice areas"
              />
            </div>
            <button
              onClick={() => {/* Search functionality */}}
              className="px-8 py-3 font-bold text-white transition-colors"
              style={{
                backgroundColor: '#012169',
                fontSize: '14px',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Search practice areas"
            >
              SEARCH
            </button>
          </div>
        </div>
      </section>

      {/* Main Content - List Layout */}
      <div className="bg-neutral-lightGray py-12 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {(() => {
            const filteredCategories = practiceData
              .map(category => {
                // Filter items within each category
                const filteredItems = category.items.filter(item =>
                  item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.content.toLowerCase().includes(searchTerm.toLowerCase())
                );

                // Return category with filtered items, or null if no matches
                if (searchTerm === '' || category.category.toLowerCase().includes(searchTerm.toLowerCase()) || filteredItems.length > 0) {
                  return {
                    ...category,
                    items: searchTerm === '' || category.category.toLowerCase().includes(searchTerm.toLowerCase())
                      ? category.items
                      : filteredItems
                  };
                }
                return null;
              })
              .filter((category): category is NonNullable<typeof category> => category !== null);

            if (filteredCategories.length === 0 && searchTerm !== '') {
              return (
                <div className="text-center py-20">
                  <p className="text-2xl text-neutral-400 font-garamond italic">No practice areas found matching "{searchTerm}"</p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="mt-4 text-secondary-teal font-bold hover:underline"
                  >
                    Clear Search
                  </button>
                </div>
              );
            }

            return filteredCategories.map((category, catIndex) => (
              <section key={catIndex} aria-labelledby={`cat-${catIndex}`}>
                <div className="mb-4 border-b border-secondary-teal/30 pb-3">
                  <h2
                    id={`cat-${catIndex}`}
                    className="text-3xl md:text-4xl font-bold font-garamond text-primary-navy inline-block"
                  >
                    {category.category}
                  </h2>
                </div>

                <div className="flex flex-col">
                  {category.items.map((item, itemIndex) => {
                    const uniqueKey = `${catIndex}-${itemIndex}`;
                    return (
                      <PracticeAccordionItem
                        key={uniqueKey}
                        title={item.title}
                        content={item.content}
                        isOpen={!!openItems[uniqueKey]}
                        onToggle={() => toggleItem(uniqueKey)}
                        slug={(item as any).slug}
                      />
                    );
                  })}
                </div>
              </section>
            ));
          })()}
        </div>
      </div>

      {/* Evaluation Form - Changed to 'teal' theme for contrast */}
      <EvaluationForm theme="teal" />
    </div>
  );
};

export default PracticeAreasPage;
