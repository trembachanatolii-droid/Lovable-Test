import React, { useEffect, useState } from 'react';
import EvaluationForm from '../components/EvaluationForm';
import { ExternalLinkIcon } from '../components/icons/ExternalLinkIcon';
import { ArrowRightIcon } from '../components/icons/ArrowRightIcon';
import { SearchIcon } from '../components/icons/SearchIcon';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateBreadcrumbSchema, generateWebPageSchema } from '../utils/seo';

// Types for data structure
interface LinkItem {
  label: string;
  url?: string;
  isTextOnly?: boolean;
}

interface LinkCategory {
  title: string;
  description: string;
  links: LinkItem[];
  subsections?: {
    title: string;
    links: LinkItem[];
  }[];
}

// Comprehensive Data Source
const linksData: LinkCategory[] = [
  {
    title: 'U.S. Customs & Border Protection',
    description: 'Official CBP resources for customs compliance, rulings, and trade statistics.',
    links: [
      { label: 'CBP Home Page', url: 'https://www.cbp.gov' },
      { label: 'Trade Resources', url: 'https://www.cbp.gov/trade' },
      { label: 'Rulings and Legal Decisions', url: 'https://www.cbp.gov/trade/rulings' },
      { label: 'Informed Compliance Publications', url: 'https://www.cbp.gov/trade/rulings/informed-compliance-publications' },
      { label: 'Trade Statistics & Section 301 Data', url: 'https://www.cbp.gov/newsroom/stats/trade' },
      { label: 'Basic Import/Export Information', url: 'https://www.cbp.gov/trade/basic-import-export' },
      { label: 'CBP Forms', url: 'https://www.cbp.gov/newsroom/publications/forms' },
      { label: 'Entry Summary Requirements', url: 'https://www.cbp.gov/trade/programs-administration/entry-summary' },
      { label: 'Trade Agreements', url: 'https://www.cbp.gov/trade/priority-issues/trade-agreements' },
      { label: 'ACE - Automated Commercial Environment', url: 'https://www.cbp.gov/trade/automated' },
    ]
  },
  {
    title: 'U.S. Courts - Trade Litigation',
    description: 'Federal courts handling international trade and customs disputes.',
    links: [
      { label: 'U.S. Court of International Trade', url: 'https://www.cit.uscourts.gov' },
      { label: 'U.S. Court of Appeals for the Federal Circuit', url: 'https://cafc.uscourts.gov' },
      { label: 'CIT Slip Opinions', url: 'https://www.cit.uscourts.gov/slip-opinions' },
      { label: 'CIT Electronic Filing', url: 'https://www.cit.uscourts.gov/electronic-case-filing' },
    ]
  },
  {
    title: 'U.S. Trade Representative',
    description: 'USTR policy, trade agreements, and Section 301 actions.',
    links: [
      { label: 'USTR Home Page', url: 'https://ustr.gov' },
      { label: 'Trade Agreements', url: 'https://ustr.gov/trade-agreements' },
      { label: 'Trade Enforcement', url: 'https://ustr.gov/issue-areas/enforcement' },
      { label: 'Press Releases & Announcements', url: 'https://ustr.gov/about-us/policy-offices/press-office/press-releases' },
      { label: 'USMCA Information', url: 'https://ustr.gov/trade-agreements/free-trade-agreements/united-states-mexico-canada-agreement' },
      { label: 'Countries & Regions', url: 'https://ustr.gov/countries-regions' },
    ]
  },
  {
    title: 'U.S. Department of Commerce',
    description: 'Trade enforcement, antidumping, countervailing duties, and export controls.',
    links: [
      { label: 'Commerce Home Page', url: 'https://www.commerce.gov' },
      { label: 'International Trade Administration', url: 'https://www.trade.gov' },
      { label: 'Enforcement & Compliance', url: 'https://www.trade.gov/enforcement' },
      { label: 'AD/CVD Scope Descriptions & Rulings', url: 'https://www.trade.gov/us-antidumping-and-countervailing-duties' },
      { label: 'Trade Data & Analysis', url: 'https://www.trade.gov/data-visualization' },
      { label: 'Bureau of Industry & Security (BIS)', url: 'https://www.bis.doc.gov' },
      { label: 'Export Administration Regulations (EAR)', url: 'https://www.bis.doc.gov/index.php/regulations/export-administration-regulations-ear' },
      { label: 'Export Licensing', url: 'https://www.bis.doc.gov/index.php/licensing' },
      { label: 'Entity Lists & Denied Parties', url: 'https://www.bis.doc.gov/index.php/policy-guidance/lists-of-parties-of-concern' },
    ]
  },
  {
    title: 'U.S. International Trade Commission',
    description: 'USITC investigations, tariff schedules, and trade injury determinations.',
    links: [
      { label: 'USITC Home Page', url: 'https://www.usitc.gov' },
      { label: 'Trade Remedy Investigations', url: 'https://www.usitc.gov/trade_remedy.htm' },
      { label: 'Harmonized Tariff Schedule (HTS)', url: 'https://hts.usitc.gov' },
      { label: 'USITC Publications', url: 'https://www.usitc.gov/publications' },
      { label: 'Tariff Affairs', url: 'https://www.usitc.gov/tariff_affairs.htm' },
      { label: 'Section 337 Investigations', url: 'https://www.usitc.gov/intellectual_property.htm' },
    ]
  },
  {
    title: 'USMCA (NAFTA Replacement)',
    description: 'United States-Mexico-Canada Agreement implementation and resources.',
    links: [
      { label: 'Official USMCA Text', url: 'https://ustr.gov/trade-agreements/free-trade-agreements/united-states-mexico-canada-agreement' },
      { label: 'USMCA Implementing Regulations (PDF)', url: 'https://www.govinfo.gov/content/pkg/FR-2025-01-17/pdf/2025-00550.pdf' },
      { label: 'CBP USMCA Implementation', url: 'https://www.cbp.gov/trade/priority-issues/trade-agreements/free-trade-agreements/USMCA' },
      { label: 'CBP Interim Guidance', url: 'https://www.cbp.gov/trade/priority-issues/trade-agreements/free-trade-agreements/USMCA' },
      { label: 'Updated USMCA Interim Implementing Instructions (consolidated PDF prepared by a trade practitioner; refer to USCBP and USTR official instructions for current guidance).', isTextOnly: true },
      { label: 'USMCA Uniform Regulations for Rules of Origin (summary reference derived from practitioner materials; consult the official USMCA uniform regulations for authoritative text).', isTextOnly: true },
      { label: 'USMCA Uniform Regulations – Customs Administration and Trade Facilitation (Chapters 5–7) (summary reference; verify with the official regulations published by the US, Canada, and Mexico).', isTextOnly: true },
    ],
    subsections: [
      {
        title: 'USMCA Forms & Templates',
        links: [
          { label: 'Certificate of Origin Guidance', url: 'https://www.cbp.gov/trade/priority-issues/trade-agreements/free-trade-agreements/USMCA' },
        ]
      }
    ]
  },
  {
    title: 'Export Controls - ITAR & OFAC',
    description: 'Defense trade, dual-use exports, and sanctions compliance.',
    links: [
      { label: 'Directorate of Defense Trade Controls (DDTC)', url: 'https://www.pmddtc.state.gov' },
      { label: 'ITAR - International Traffic in Arms Regulations', url: 'https://www.ecfr.gov/current/title-22/chapter-I/subchapter-M' },
      { label: 'ITAR Registration & Licensing', url: 'https://www.pmddtc.state.gov/ddtc_public' },
      { label: 'OFAC - Office of Foreign Assets Control', url: 'https://www.treasury.gov/ofac' },
      { label: 'OFAC Sanctions List Search', url: 'https://sanctionssearch.ofac.treas.gov' },
      { label: 'Sanctions Programs & Information', url: 'https://www.treasury.gov/resource-center/sanctions/Programs/Pages/Programs.aspx' },
    ]
  },
  {
    title: 'Tariff Classification Resources',
    description: 'HTS codes, classification rulings, and binding determinations.',
    links: [
      { label: 'Harmonized Tariff Schedule Database', url: 'https://hts.usitc.gov' },
      { label: 'CBP Rulings Database (CROSS)', url: 'https://rulings.cbp.gov' },
      { label: 'Binding Ruling Requests', url: 'https://www.cbp.gov/trade/rulings' },
      { label: 'World Customs Organization (WCO)', url: 'https://www.wcoomd.org/en/topics/nomenclature/overview.aspx' },
      { label: 'HS Nomenclature 2022 Edition', url: 'https://www.wcoomd.org/en/topics/nomenclature/instrument-and-tools/hs-nomenclature-2022-edition.aspx' },
    ]
  },
  {
    title: 'Section 301 & Special Tariffs',
    description: 'China tariffs, Section 201/232/301 information, and exclusion processes.',
    links: [
      { label: 'Section 301 Investigations', url: 'https://ustr.gov/issue-areas/enforcement/section-301-investigations' },
      { label: 'Section 301 China Products', url: 'https://www.cbp.gov/trade/remedies/301-certain-products-china' },
      { label: 'Trade-Related Federal Register Notices', url: 'https://www.federalregister.gov/agencies/customs-and-border-protection' },
      { label: 'Liquidated Damages', url: 'https://www.cbp.gov/trade/priority-issues/revenue/bonds/liquidated-damages' },
    ]
  },
  {
    title: 'Customs Brokers & Trade Programs',
    description: 'Broker licensing, C-TPAT, ISF, and importer security programs.',
    links: [
      { label: 'Customs Broker Information', url: 'https://www.cbp.gov/trade/broker' },
      { label: 'C-TPAT Program', url: 'https://www.cbp.gov/border-security/ports-entry/cargo-security/ctpat' },
      { label: 'Importer Security Filing (ISF)', url: 'https://www.cbp.gov/trade/priority-issues/security/isf' },
      { label: 'Foreign-Trade Zones', url: 'https://www.cbp.gov/border-security/ports-entry/cargo-security/cargo-control/foreign-trade-zones' },
      { label: 'Automated Systems (ACE, ABI, AES)', url: 'https://www.cbp.gov/trade/automated' },
    ]
  },
  {
    title: 'Federal Register & Legal Resources',
    description: 'Official government publications, regulations, and legal notices.',
    links: [
      { label: 'Federal Register', url: 'https://www.federalregister.gov' },
      { label: 'GovInfo - Official Government Publications', url: 'https://www.govinfo.gov' },
      { label: 'Electronic Code of Federal Regulations', url: 'https://www.ecfr.gov' },
      { label: '19 CFR - Customs Duties', url: 'https://www.ecfr.gov/current/title-19' },
      { label: 'Congress.gov - Legislation', url: 'https://www.congress.gov' },
      { label: '19 USC - Customs Duties (Cornell)', url: 'https://www.law.cornell.edu/uscode/text/19' },
    ]
  },
  {
    title: 'International Organizations',
    description: 'WTO, WCO, and other international trade bodies.',
    links: [
      { label: 'World Trade Organization (WTO)', url: 'https://www.wto.org' },
      { label: 'World Customs Organization (WCO)', url: 'https://www.wcoomd.org' },
      { label: 'OECD Trade Policy', url: 'https://www.oecd.org/trade' },
      { label: 'UNCTAD - UN Trade & Development', url: 'https://unctad.org' },
      { label: 'UN International Trade Law', url: 'https://uncitral.un.org/' },
    ]
  },
  {
    title: 'Regional Trade Agreements',
    description: 'Americas, European, and Asia-Pacific trade agreements.',
    links: [],
    subsections: [
      {
        title: 'Americas',
        links: [
          { label: 'OAS Foreign Trade Information System', url: 'http://www.sice.oas.org/' },
          { label: 'CAFTA-DR (Central America)', url: 'https://www.trade.gov/cafta-dr' },
        ]
      },
      {
        title: 'Europe',
        links: [
          { label: 'European Commission - Customs', url: 'https://taxation-customs.ec.europa.eu/customs' },
          { label: 'EU Trade Policy', url: 'https://policy.trade.ec.europa.eu/index_en' },
          { label: 'UK HMRC', url: 'https://www.gov.uk/government/organisations/hm-revenue-customs' },
        ]
      },
      {
        title: 'Asia-Pacific',
        links: [
          { label: 'Australian Border Force', url: 'https://www.abf.gov.au' },
          { label: 'China Customs', url: 'http://english.customs.gov.cn/' },
          { label: 'Japan Customs', url: 'https://www.customs.go.jp/english/index.htm' },
          { label: 'Korea Customs Service', url: 'https://www.customs.go.kr/english/main/main.do' },
        ]
      }
    ]
  },
  {
    title: 'Professional Trade Organizations',
    description: 'Industry associations and professional groups.',
    links: [
      { label: 'National Customs Brokers & Forwarders Assoc.', url: 'https://www.ncbfaa.org' },
      { label: 'American Association of Exporters & Importers', url: 'https://www.aaei.org' },
      { label: 'Coalition of Int\'l Trade Professionals (WITA)', url: 'https://www.wita.org/' },
      { label: 'Trade Leadership Coalition (NFTC)', url: 'https://www.nftc.org/' },
    ]
  }
];

const LinkCategoryCard: React.FC<{ category: LinkCategory }> = ({ category }) => {
  return (
    <div className="group relative bg-white border border-border-subtle rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

       {/* Green Triangle Slide Animation - Z-Index 20 to slide over content background but be under arrow */}
       <div className="absolute top-0 right-[-80px] z-20 w-0 h-0
                       border-t-[80px] border-l-[80px] border-solid
                       border-t-secondary-teal border-l-transparent
                       transition-[right] duration-300 ease-in-out
                       group-hover:right-0 pointer-events-none"
       />

        {/* Arrow Icon - Z-Index 30 to be above green triangle */}
        <div className="absolute top-3 right-3 z-30 text-white
                        opacity-0 transition-opacity duration-300
                        group-hover:opacity-100 pointer-events-none">
            <ArrowRightIcon className="h-6 w-6"/>
        </div>

        {/* Card Content - Z-Index 10 */}
        <div className="p-8 relative z-10">
            <h3 className="font-display text-2xl font-bold text-primary-navy mb-3 pr-12">
              {category.title}
            </h3>
            <p className="text-text-secondary text-base mb-6 leading-relaxed">
                {category.description}
            </p>

            <ul className="space-y-3">
              {category.links.map((link, idx) => (
                <li key={idx}>
                  {link.isTextOnly ? (
                      <span className="text-sm text-text-secondary block italic bg-gray-50 p-2 rounded">{link.label}</span>
                  ) : (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-start gap-2 text-primary-darkBlue font-medium hover:text-secondary-teal transition-colors"
                    >
                      <span className="mt-1 opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300 text-secondary-teal">→</span>
                      <span className="text-base leading-snug underline decoration-transparent group-hover/link:decoration-secondary-teal underline-offset-4 transition-all">{link.label}</span>
                      <ExternalLinkIcon className="w-3 h-3 mt-1.5 opacity-40 group-hover/link:opacity-100 flex-shrink-0" />
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {category.subsections?.map((sub, subIdx) => (
              <div key={subIdx} className="pt-4 mt-4 border-t border-border-subtle">
                <h4 className="text-sm font-bold text-primary-navy uppercase tracking-wider mb-3 bg-soft-teal/20 inline-block px-2 py-1 rounded">
                  {sub.title}
                </h4>
                <ul className="space-y-3">
                  {sub.links.map((link, lIdx) => (
                    <li key={lIdx}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-start gap-2 text-primary-darkBlue font-medium hover:text-secondary-teal transition-colors"
                        >
                          <span className="mt-1 opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300 text-secondary-teal">→</span>
                          <span className="text-base leading-snug underline decoration-transparent group-hover/link:decoration-secondary-teal underline-offset-4 transition-all">{link.label}</span>
                          <ExternalLinkIcon className="w-3 h-3 mt-1.5 opacity-40 group-hover/link:opacity-100 flex-shrink-0" />
                        </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
    </div>
  );
};


const UsefulLinksPage: React.FC = () => {
  useMeta({
    title: 'Trade Law Resources & Tools | CBP, ITAR, OFAC, HTS - California Attorney Directory',
    description: 'Trade law resources directory: CBP rulings, ITAR/OFAC tools, HTS classification, USMCA forms, export controls. Curated by California customs attorneys.',
    keywords: 'international trade law resources California, CBP rulings database, customs regulations California, ITAR regulations resources, OFAC sanctions list, export controls tools California, HTS tariff classification database, USMCA resources California, EAR compliance tools, trade compliance resources, customs broker resources, import export regulations California, Court of International Trade resources, antidumping resources, countervailing duty tools, Section 301 tariffs resources, foreign trade zones resources California, C-TPAT resources, trade remedies research tools, customs valuation resources',
    canonical: 'useful-links',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-links.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'International Trade Law Resources & Compliance Tools Directory - California',
        description: 'Comprehensive directory of CBP, ITAR, OFAC, HTS, and international trade law resources curated by California customs attorneys.',
        url: `${siteConfig.siteUrl}/#useful-links`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Useful Links', url: `${siteConfig.siteUrl}/#useful-links` }
      ])
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  // Filter categories based on search term
  const filteredData = linksData.filter(category => {
    const searchLower = searchTerm.toLowerCase();

    // Check if category title or description matches
    if (category.title.toLowerCase().includes(searchLower) ||
        category.description.toLowerCase().includes(searchLower)) {
      return true;
    }

    // Check if any link label matches
    const hasMatchingLink = category.links.some(link =>
      link.label.toLowerCase().includes(searchLower)
    );

    // Check if any subsection or subsection link matches
    const hasMatchingSubsection = category.subsections?.some(sub =>
      sub.title.toLowerCase().includes(searchLower) ||
      sub.links.some(link => link.label.toLowerCase().includes(searchLower))
    );

    return hasMatchingLink || hasMatchingSubsection;
  });

  return (
    <div className="pt-20 font-montserrat text-neutral-darkGray bg-white min-h-screen">
      {/* Hero Section - LCP Optimized & Light Theme */}
      <header className="relative w-full h-[50vh] min-h-[400px] overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
           {/* Bright Logistics Background - Container Ship in Daylight */}
           <img
             src="https://images.unsplash.com/photo-1494412574643-35d324688133?q=80&w=1920&auto=format&fit=crop"
             alt="Large container ship traversing the ocean under a clear blue sky"
             className="w-full h-full object-cover"
             width="1920"
             height="1080"
             loading="eager"
           />
           {/* Strong white gradient overlay to ensure text readability */}
           <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20"></div>
        </div>

        <div className="relative z-10 h-full max-w-[1376px] mx-auto px-5 flex flex-col justify-center items-start">
            <div className="max-w-4xl">
                <h1 className="text-5xl lg:text-7xl font-bold font-garamond text-primary-navy mb-6 tracking-tight drop-shadow-sm">
                  Useful Links & Resources
                </h1>
                <div className="w-20 h-1 bg-secondary-teal mb-8"></div>
                <p className="text-xl lg:text-2xl text-primary-navy font-medium leading-relaxed max-w-2xl">
                  Comprehensive collection of government agencies, legal resources, forms, and international trade information for importers, exporters, and customs professionals.
                </p>
            </div>
        </div>
      </header>

      {/* Search Section - Matching News Page Style */}
      <section className="py-12 px-6 bg-white border-b border-neutral-lightGray sticky top-20 z-30 shadow-sm">
        <div className="max-w-[1376px] mx-auto">
          <div className="relative max-w-2xl">
            <SearchIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400 pointer-events-none z-10" />
            <input
              type="text"
              placeholder="Search Resources by Keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-4 pl-14 pr-6 text-base bg-white border-2 border-neutral-300 rounded-full focus:outline-none focus:border-primary-navy focus:ring-2 focus:ring-primary-navy/20 transition-all placeholder:text-neutral-400 text-primary-navy shadow-sm"
              aria-label="Search resources"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-white py-16 lg:py-24 px-5">
        <div className="max-w-[1376px] mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-16">
             <p className="text-lg text-text-secondary leading-relaxed">
                This page provides direct access to essential resources for international trade compliance, customs regulations, and export controls. All links are regularly verified and updated to ensure accuracy.
             </p>
          </div>

          {/* Link Categories as Grid Cards */}
          {filteredData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredData.map((category, index) => (
                <LinkCategoryCard key={index} category={category} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-neutral-400 font-garamond italic">
                No resources found matching "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 text-secondary-teal font-bold hover:underline"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-16 bg-neutral-lightGray border-l-4 border-gold-primary p-8 rounded-r-xl shadow-sm max-w-4xl mx-auto">
             <h3 className="text-lg font-bold text-primary-navy mb-3 flex items-center gap-2">
               <span className="text-2xl">⚠️</span> Important Notice
             </h3>
             <p className="text-text-secondary text-base leading-relaxed">
                These links are provided as a courtesy and for informational purposes only. Trembach Law Firm is not responsible for the content of external websites. Links are periodically reviewed for accuracy but may change without notice. For legal advice specific to your situation, please <button onClick={() => window.scrollTo(0, document.body.scrollHeight)} className="text-primary-darkBlue font-bold underline hover:text-secondary-teal">contact our firm</button> directly.
             </p>
          </div>

        </div>
      </main>

      {/* Evaluation Form */}
      <EvaluationForm theme="light" />
    </div>
  );
};

export default UsefulLinksPage;
