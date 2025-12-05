// Comprehensive search index aggregating all searchable content
// This file is used by the SearchResultsPage to perform client-side searches

import { articlePreviews } from './articlesIndex';

export interface SearchableItem {
  id: string;
  title: string;
  description: string;
  content: string;
  url: string;
  type: 'article' | 'page' | 'practice-area' | 'city-page' | 'resource';
  keywords?: string;
  category?: string;
}

// Articles from articlesIndex
const articleSearchItems: SearchableItem[] = articlePreviews.map(article => ({
  id: article.id,
  title: article.title,
  description: article.subheading,
  content: `${article.title} ${article.subheading} ${article.intro} ${article.keywords || ''}`,
  url: `/article/${article.id}`,
  type: 'article' as const,
  keywords: article.keywords,
  category: 'News & Articles'
}));

// Practice Areas
const practiceAreaSearchItems: SearchableItem[] = [
  {
    id: 'customs-audits',
    title: 'Customs Audits & Audit Defense',
    description: 'Comprehensive representation during U.S. Customs and Border Protection audits, including Focused Assessments, Quick Response Audits, and Compliance Surveys.',
    content: 'Customs Audits Focused Assessments Quick Response Audits Surveys Audit Defense CBP examination import operations compliance systems strategic audit defense minimize liability negotiate settlements remediation plans corrective action plans internal compliance reviews documentation systems training personnel',
    url: '/practice-areas',
    type: 'practice-area',
    category: 'Customs & Import Compliance'
  },
  {
    id: 'cf28-cf29-notices',
    title: 'CF-28 & CF-29 Notices',
    description: 'Expert guidance in responding to Requests for Information and Notices of Action issued by U.S. Customs and Border Protection.',
    content: 'CF-28 CF-29 Requests for Information Notices of Action CBP classification valuation admissibility administrative protests internal advice rulings Court of International Trade',
    url: '/practice-areas',
    type: 'practice-area',
    category: 'Customs & Import Compliance'
  },
  {
    id: 'classification',
    title: 'Tariff Classification Disputes',
    description: 'Representation in tariff classification disputes involving the proper assignment of Harmonized Tariff Schedule (HTS) codes.',
    content: 'Tariff classification HTS codes duty rates trade preference programs binding ruling requests protests classification decisions Court of International Trade General Rules of Interpretation GRI tariff engineering',
    url: '/practice-areas',
    type: 'practice-area',
    category: 'Customs & Import Compliance'
  },
  {
    id: 'customs-valuation',
    title: 'Customs Valuation',
    description: 'Complex customs valuation issues including assists, royalties, and transfer pricing for imported merchandise.',
    content: 'Customs valuation transaction value transfer pricing related-party transactions assists tools dies molds royalties license fees intellectual property rights advance ruling requests valuation disputes',
    url: '/practice-areas',
    type: 'practice-area',
    category: 'Customs & Import Compliance'
  },
  {
    id: 'country-of-origin',
    title: 'Country of Origin & Marking',
    description: 'Country of origin determinations, labeling, marking requirements, and origin disputes for compliance with U.S. customs laws.',
    content: 'Country of origin marking labeling substantial transformation tariff shift regional value content free trade agreements USMCA preferential origin non-preferential origin marking violations',
    url: '/practice-areas',
    type: 'practice-area',
    category: 'Customs & Import Compliance'
  },
  {
    id: 'prior-disclosures',
    title: 'Prior Disclosures',
    description: 'Preparation of prior disclosures to U.S. Customs when potential violations of customs laws are discovered.',
    content: 'Prior disclosures voluntary disclosure customs violations internal audits compliance reviews 19 USC 1592 penalty mitigation limited penalties interest charges internal investigations',
    url: '/practice-areas',
    type: 'practice-area',
    category: 'Customs & Import Compliance'
  },
  {
    id: 'seizures-detentions',
    title: 'Seizures & Detentions',
    description: 'Urgent legal representation when merchandise is seized or detained by U.S. Customs and Border Protection.',
    content: 'Seizures detentions counterfeit goods forced labor intellectual property violations forfeiture proceedings administrative negotiations Fines Penalties Forfeitures Office federal court litigation',
    url: '/practice-areas',
    type: 'practice-area',
    category: 'Customs & Import Compliance'
  },
  {
    id: 'duty-drawback',
    title: 'Duty Drawback Recovery',
    description: 'Help importers, exporters, and manufacturers recover customs duties, taxes, and fees paid on imported merchandise.',
    content: 'Duty drawback recovery manufacturing drawback unused merchandise drawback rejected merchandise drawback export destroyed 19 USC 1313 drawback claims inventory tracking accelerated payment',
    url: '/practice-areas',
    type: 'practice-area',
    category: 'Customs & Import Compliance'
  },
  {
    id: 'usmca-fta',
    title: 'USMCA & Free Trade Agreements',
    description: 'Comprehensive guidance on preferential tariff treatment under USMCA, bilateral free trade agreements, and GSP.',
    content: 'USMCA United States Mexico Canada Agreement free trade agreements FTA GSP Generalized System of Preferences preferential tariff treatment rules of origin certifications duty-free reduced-duty',
    url: '/practice-areas',
    type: 'practice-area',
    category: 'Customs & Import Compliance'
  },
  {
    id: 'antidumping-cvd',
    title: 'Antidumping & Countervailing Duty',
    description: 'Representation in AD/CVD proceedings before the Department of Commerce and International Trade Commission.',
    content: 'Antidumping countervailing duty AD CVD Department of Commerce International Trade Commission ITC material injury dumped imports subsidized imports petition filing administrative reviews',
    url: '/practice-areas',
    type: 'practice-area',
    category: 'Trade Remedies & Tariffs'
  },
  {
    id: 'export-controls',
    title: 'Export Controls & Sanctions',
    description: 'Comprehensive export controls compliance including ITAR, EAR, OFAC sanctions, and deemed exports.',
    content: 'Export controls ITAR EAR OFAC sanctions deemed exports export licensing encryption controls dual-use technology BIS DDTC license applications voluntary self-disclosure technology transfer',
    url: '/export-controls-sanctions',
    type: 'practice-area',
    category: 'Export Controls'
  },
  {
    id: 'forced-labor-uflpa',
    title: 'Forced Labor & UFLPA Compliance',
    description: 'Compliance with Withhold Release Orders and the Uyghur Forced Labor Prevention Act.',
    content: 'Forced labor UFLPA Withhold Release Orders WRO Xinjiang supply chain due diligence CBP detention admissibility reviews supply chain mapping forced labor risks compliance programs',
    url: '/practice-areas',
    type: 'practice-area',
    category: 'Customs & Import Compliance'
  }
];

// Major City Pages (California focus)
const cityPageSearchItems: SearchableItem[] = [
  {
    id: 'bay-area-trade-law',
    title: 'San Francisco & Bay Area Trade Compliance Attorney',
    description: 'Expert trade law advice for startups California and tech companies. Export controls, customs compliance, and global trade strategy for Silicon Valley.',
    content: 'San Francisco Bay Area trade compliance attorney Oakland port customs lawyer Silicon Valley tech companies startups export controls EAR ITAR encryption regulations OFAC sanctions screening deemed exports ECCN classification',
    url: '/bay-area-trade-law-attorney',
    type: 'city-page',
    category: 'California Locations'
  },
  {
    id: 'los-angeles-port',
    title: 'Los Angeles & Long Beach Port Customs Attorney',
    description: 'Expert customs law representation for importers using the nation\'s busiest port complex.',
    content: 'Los Angeles Long Beach port customs attorney import compliance CBP audit defense customs penalties tariff classification customs valuation Port of Los Angeles Port of Long Beach container imports',
    url: '/los-angeles-port-customs-attorney',
    type: 'city-page',
    category: 'California Locations'
  },
  {
    id: 'san-diego-customs',
    title: 'San Diego Customs Lawyer & Trade Attorney',
    description: 'International trade and customs law services for San Diego businesses.',
    content: 'San Diego customs lawyer trade attorney import compliance export controls border trade Mexico USMCA pharmaceutical imports biotech trade compliance customs litigation',
    url: '/san-diego-customs-lawyer',
    type: 'city-page',
    category: 'California Locations'
  },
  {
    id: 'sacramento-trade',
    title: 'Sacramento Trade Compliance & Tariff Attorney',
    description: 'Trade law services for Sacramento businesses including agricultural export compliance.',
    content: 'Sacramento trade compliance tariff attorney agricultural exports wine export compliance Central Valley customs law import tariff classification FDA compliance USDA regulations',
    url: '/sacramento-trade-compliance',
    type: 'city-page',
    category: 'California Locations'
  },
  {
    id: 'oakland-trade',
    title: 'Oakland Trade Attorney & Port Customs Lawyer',
    description: 'Port of Oakland customs compliance and trade law representation.',
    content: 'Oakland trade attorney port customs lawyer Port of Oakland customs clearance CBP examinations import operations maritime trade customs broker oversight container imports',
    url: '/oakland-trade-attorney',
    type: 'city-page',
    category: 'California Locations'
  },
  {
    id: 'silicon-valley-trade',
    title: 'Silicon Valley Trade Lawyer & Tech Export Controls',
    description: 'Export controls and trade compliance for Silicon Valley technology companies.',
    content: 'Silicon Valley trade lawyer tech export controls software export compliance encryption ECCN classification deemed exports technology transfer San Jose Palo Alto Mountain View Sunnyvale',
    url: '/silicon-valley-trade-lawyer',
    type: 'city-page',
    category: 'California Locations'
  },
  {
    id: 'irvine-trade',
    title: 'Irvine Trade Compliance Attorney',
    description: 'Trade compliance and customs law services for Orange County businesses.',
    content: 'Irvine trade compliance attorney Orange County customs law import compliance export controls technology trade pharmaceutical imports medical device regulations',
    url: '/irvine-trade-compliance',
    type: 'city-page',
    category: 'California Locations'
  },
  {
    id: 'fresno-customs',
    title: 'Fresno Customs Attorney & Agricultural Trade',
    description: 'Agricultural export and import compliance for Central Valley businesses.',
    content: 'Fresno customs attorney agricultural trade Central Valley farm equipment imports food safety compliance FDA USDA agricultural exports customs compliance',
    url: '/fresno-customs-attorney',
    type: 'city-page',
    category: 'California Locations'
  }
];

// Resource Pages
const resourcePageSearchItems: SearchableItem[] = [
  {
    id: 'section-301-guide',
    title: 'Section 301 Tariffs Guide',
    description: 'Comprehensive guide to Section 301 tariffs on Chinese imports.',
    content: 'Section 301 tariffs China tariffs USTR exclusions List 1 List 2 List 3 List 4A List 4B tariff engineering product exclusions administrative review',
    url: '/resources/section-301-tariffs-guide',
    type: 'resource',
    category: 'Resources & Guides'
  },
  {
    id: 'uflpa-guide',
    title: 'UFLPA Compliance Guide',
    description: 'Uyghur Forced Labor Prevention Act compliance and supply chain due diligence.',
    content: 'UFLPA Uyghur Forced Labor Prevention Act Xinjiang forced labor compliance supply chain due diligence rebuttable presumption CBP detention high-priority sectors',
    url: '/resources/uflpa-compliance-guide',
    type: 'resource',
    category: 'Resources & Guides'
  },
  {
    id: 'tariff-classification-guide',
    title: 'Tariffs & Duties Classification Guide',
    description: 'Understanding tariff classification, HTS codes, and duty rates.',
    content: 'Tariff classification HTS codes Harmonized Tariff Schedule duty rates classification disputes General Rules of Interpretation GRI tariff engineering duty minimization',
    url: '/tariffs-duties-classification-guide',
    type: 'resource',
    category: 'Resources & Guides'
  },
  {
    id: 'ecommerce-guide',
    title: 'E-commerce & Digital Trade Guide',
    description: 'Compliance for e-commerce businesses importing goods into the United States.',
    content: 'E-commerce digital trade Section 321 de minimis imports small parcel shipments customs compliance online retail FBA fulfillment import duties',
    url: '/ecommerce-digital-trade-guide',
    type: 'resource',
    category: 'Resources & Guides'
  },
  {
    id: 'supply-chain-esg',
    title: 'Supply Chain & ESG Compliance Guide',
    description: 'Environmental, social, and governance compliance in global supply chains.',
    content: 'Supply chain ESG compliance forced labor due diligence environmental compliance social responsibility corporate governance sustainable sourcing ethical trade',
    url: '/supply-chain-esg-compliance-guide',
    type: 'resource',
    category: 'Resources & Guides'
  },
  {
    id: 'trade-glossary',
    title: 'Trade Law Glossary',
    description: 'Comprehensive glossary of international trade and customs terminology.',
    content: 'Trade law glossary customs terms import export terminology HTS CBP USTR ITC BIS DDTC OFAC trade definitions customs glossary',
    url: '/trade-law-glossary',
    type: 'resource',
    category: 'Resources & Guides'
  },
  {
    id: 'faq-center',
    title: 'Trade Law FAQ Center',
    description: 'Frequently asked questions about customs law, import compliance, and trade regulations.',
    content: 'Trade law FAQ customs questions import compliance export controls tariffs duties frequently asked questions CBP regulations customs broker',
    url: '/trade-law-faq',
    type: 'resource',
    category: 'Resources & Guides'
  }
];

// Core Pages
const corePageSearchItems: SearchableItem[] = [
  {
    id: 'about',
    title: 'About Trembach Law Firm',
    description: 'Leading California customs and international trade law firm serving importers and exporters.',
    content: 'About Trembach Law Firm California customs attorney international trade lawyer import export compliance Edward Trembach experience credentials qualifications',
    url: '/about',
    type: 'page',
    category: 'About'
  },
  {
    id: 'contact',
    title: 'Contact Trembach Law Firm',
    description: 'Schedule a consultation with our customs and trade law attorneys.',
    content: 'Contact Trembach Law Firm consultation customs attorney trade lawyer phone email address Calabasas California schedule consultation free evaluation',
    url: '/contact',
    type: 'page',
    category: 'Contact'
  },
  {
    id: 'customs-defense',
    title: 'Customs Defense & Litigation',
    description: 'Aggressive defense representation in customs penalties, seizures, and enforcement actions.',
    content: 'Customs defense litigation penalties enforcement CBP penalties customs fraud allegations Court of International Trade federal court customs violations defense strategies',
    url: '/customs-defense-litigation',
    type: 'page',
    category: 'Practice Areas'
  },
  {
    id: 'regulatory-compliance',
    title: 'Regulatory Compliance Advisory',
    description: 'Proactive compliance programs for importers and exporters.',
    content: 'Regulatory compliance advisory import compliance programs export compliance internal audits compliance assessments training procedures documentation systems reasonable care',
    url: '/regulatory-compliance-advisory',
    type: 'page',
    category: 'Practice Areas'
  }
];

// Combine all search items
export const searchIndex: SearchableItem[] = [
  ...articleSearchItems,
  ...practiceAreaSearchItems,
  ...cityPageSearchItems,
  ...resourcePageSearchItems,
  ...corePageSearchItems
];

// Search function
export function searchContent(query: string): SearchableItem[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const searchTerms = query.toLowerCase().trim().split(/\s+/);

  const results = searchIndex
    .map(item => {
      let score = 0;
      const itemContent = item.content.toLowerCase();
      const itemTitle = item.title.toLowerCase();
      const itemDescription = item.description.toLowerCase();
      const itemKeywords = (item.keywords || '').toLowerCase();

      searchTerms.forEach(term => {
        // Title matches are worth the most
        if (itemTitle.includes(term)) {
          score += 10;
        }
        // Description matches are worth less
        if (itemDescription.includes(term)) {
          score += 5;
        }
        // Keywords matches are valuable
        if (itemKeywords.includes(term)) {
          score += 7;
        }
        // Content matches are worth the least
        if (itemContent.includes(term)) {
          score += 1;
        }
      });

      return { item, score };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(result => result.item);

  return results;
}
