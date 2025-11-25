
import React, { useEffect, useState } from 'react';
import EvaluationForm from '../components/EvaluationForm';
import { SearchIcon } from '../components/icons/SearchIcon';
import { ArrowRightIcon } from '../components/icons/ArrowRightIcon';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/seo';

// --- Types ---
type LinkItem = {
  label: string;
  url?: string;
  note?: boolean; // If true, renders as text note instead of link
};

type SubSection = {
  title: string;
  links: LinkItem[];
};

type LinkCategory = {
  title: string;
  description: string;
  links?: LinkItem[];
  subsections?: SubSection[];
};

// --- Data ---
const resourcesData: LinkCategory[] = [
  {
    title: "U.S. Customs & Border Protection",
    description: "Official CBP resources for customs compliance, rulings, and trade statistics.",
    links: [
      { label: "CBP Home Page", url: "https://www.cbp.gov" },
      { label: "Trade Resources", url: "https://www.cbp.gov/trade" },
      { label: "Rulings and Legal Decisions", url: "https://www.cbp.gov/trade/rulings" },
      { label: "Informed Compliance Publications", url: "https://www.cbp.gov/trade/rulings/informed-compliance-publications" },
      { label: "Trade Statistics", url: "https://www.cbp.gov/newsroom/stats/trade" },
      { label: "Basic Import/Export Information", url: "https://www.cbp.gov/trade/basic-import-export" },
      { label: "CBP Forms", url: "https://www.cbp.gov/document/forms" },
      { label: "Entry Summary Requirements", url: "https://www.cbp.gov/trade/programs-administration/entry-summary" },
      { label: "Trade Agreements", url: "https://www.cbp.gov/trade/priority-issues/trade-agreements" },
      { label: "ACE - Automated Commercial Environment", url: "https://www.cbp.gov/trade/automated" },
    ]
  },
  {
    title: "U.S. Courts - Trade Litigation",
    description: "Federal courts handling international trade and customs disputes.",
    links: [
      { label: "U.S. Court of International Trade", url: "https://www.cit.uscourts.gov" },
      { label: "U.S. Court of Appeals for the Federal Circuit", url: "https://cafc.uscourts.gov" },
      { label: "CIT Slip Opinions", url: "https://www.cit.uscourts.gov/slip-opinions" },
      { label: "CIT Electronic Filing", url: "https://www.cit.uscourts.gov/electronic-filing-cmecf-information" },
    ]
  },
  {
    title: "U.S. Trade Representative",
    description: "USTR policy, trade agreements, and Section 301 actions.",
    links: [
      { label: "USTR Home Page", url: "https://ustr.gov" },
      { label: "Trade Agreements", url: "https://ustr.gov/trade-agreements" },
      { label: "Trade Enforcement", url: "https://ustr.gov/issue-areas/enforcement" },
      { label: "Press Releases & Announcements", url: "https://ustr.gov/about-us/policy-offices/press-office/press-releases" },
      { label: "USMCA Information", url: "https://ustr.gov/trade-agreements/free-trade-agreements/united-states-mexico-canada-agreement" },
      { label: "Countries & Regions", url: "https://ustr.gov/countries-regions" },
    ]
  },
  {
    title: "U.S. Department of Commerce",
    description: "Trade enforcement, antidumping, countervailing duties, and export controls.",
    links: [
      { label: "Commerce Home Page", url: "https://www.commerce.gov" },
      { label: "International Trade Administration", url: "https://www.trade.gov" },
      { label: "Enforcement & Compliance", url: "https://www.trade.gov/enforcement" },
      { label: "AD/CVD Scope Descriptions & Rulings", url: "https://legacy.trade.gov/enforcement/operations/scope/index.asp" },
      { label: "Trade Data & Analysis", url: "https://www.trade.gov/data-visualization" },
      { label: "Bureau of Industry & Security (BIS)", url: "https://www.bis.doc.gov" },
      { label: "Export Administration Regulations (EAR)", url: "https://www.bis.doc.gov/index.php/regulations/export-administration-regulations-ear" },
      { label: "Export Licensing", url: "https://www.bis.doc.gov/index.php/licensing" },
      { label: "Entity Lists & Denied Parties", url: "https://www.bis.doc.gov/index.php/policy-guidance/lists-of-parties-of-concern" },
    ]
  },
  {
    title: "U.S. International Trade Commission",
    description: "USITC investigations, tariff schedules, and trade injury determinations.",
    links: [
      { label: "USITC Home Page", url: "https://www.usitc.gov" },
      { label: "Trade Remedy Investigations", url: "https://www.usitc.gov/trade_remedy.htm" },
      { label: "Harmonized Tariff Schedule (HTS)", url: "https://hts.usitc.gov" },
      { label: "USITC Publications", url: "https://www.usitc.gov/publications" },
      { label: "Tariff Affairs", url: "https://www.usitc.gov/tariff_affairs.htm" },
      { label: "Section 337 Investigations", url: "https://www.usitc.gov/intellectual_property.htm" },
    ]
  },
  {
    title: "USMCA (NAFTA Replacement)",
    description: "United States-Mexico-Canada Agreement implementation and resources.",
    links: [
      { label: "Official USMCA Text", url: "https://ustr.gov/trade-agreements/free-trade-agreements/united-states-mexico-canada-agreement" },
      { label: "CBP USMCA Implementation", url: "https://www.cbp.gov/trade/priority-issues/trade-agreements/free-trade-agreements/USMCA" },
      { label: "CBP Interim Guidance", url: "https://www.cbp.gov/document/guidance/usmca-interim-implementation-instructions" },
      { label: "Updated USMCA Interim Implementing Instructions (consolidated PDF prepared by a trade practitioner; refer to USCBP and USTR official instructions for current guidance).", note: true },
      { label: "USMCA Uniform Regulations for Rules of Origin (summary reference derived from practitioner materials; consult the official USMCA uniform regulations for authoritative text).", note: true },
      { label: "USMCA Uniform Regulations – Customs Administration and Trade Facilitation (Chapters 5–7) (summary reference; verify with the official regulations published by the US, Canada, and Mexico).", note: true },
    ],
    subsections: [
      {
        title: "USMCA Forms & Templates",
        links: [
          { label: "Certificate of Origin Guidance", url: "https://www.cbp.gov/trade/priority-issues/trade-agreements/free-trade-agreements/USMCA/certification-origin" },
        ]
      }
    ]
  },
  {
    title: "Export Controls - ITAR & OFAC",
    description: "Defense trade, dual-use exports, and sanctions compliance.",
    links: [
      { label: "Directorate of Defense Trade Controls (DDTC)", url: "https://www.pmddtc.state.gov" },
      { label: "ITAR - International Traffic in Arms Regulations", url: "https://www.ecfr.gov/current/title-22/chapter-I/subchapter-M" },
      { label: "ITAR Registration & Licensing", url: "https://www.pmddtc.state.gov/ddtc_public" },
      { label: "OFAC - Office of Foreign Assets Control", url: "https://www.treasury.gov/ofac" },
      { label: "OFAC Sanctions List Search", url: "https://sanctionssearch.ofac.treas.gov" },
      { label: "Sanctions Programs & Information", url: "https://www.treasury.gov/resource-center/sanctions/Programs/Pages/Programs.aspx" },
    ]
  },
  {
    title: "Tariff Classification Resources",
    description: "HTS codes, classification rulings, and binding determinations.",
    links: [
      { label: "Harmonized Tariff Schedule Database", url: "https://hts.usitc.gov" },
      { label: "CBP Rulings Database (CROSS)", url: "https://rulings.cbp.gov" },
      { label: "Binding Ruling Requests", url: "https://www.cbp.gov/trade/rulings" },
      { label: "World Customs Organization (WCO)", url: "https://www.wcoomd.org/en/topics/nomenclature/overview.aspx" },
      { label: "HS Nomenclature 2022 Edition", url: "https://www.wcoomd.org/en/topics/nomenclature/instrument-and-tools/hs-nomenclature-2022-edition.aspx" },
    ]
  },
  {
    title: "Section 301 & Special Tariffs",
    description: "China tariffs, Section 201/232/301 information, and exclusion processes.",
    links: [
      { label: "Section 301 Investigations", url: "https://ustr.gov/issue-areas/enforcement/section-301-investigations" },
      { label: "Section 301 China Products", url: "https://www.cbp.gov/trade/remedies/301-certain-products-china" },
      { label: "Trade-Related Federal Register Notices", url: "https://www.federalregister.gov/topics/international-trade" },
      { label: "Liquidated Damages", url: "https://www.cbp.gov/trade/priority-issues/revenue/bonds/liquidated-damages" },
    ]
  },
  {
    title: "Customs Brokers & Trade Programs",
    description: "Broker licensing, C-TPAT, ISF, and importer security programs.",
    links: [
      { label: "Customs Broker Information", url: "https://www.cbp.gov/trade/broker" },
      { label: "C-TPAT Program", url: "https://www.cbp.gov/border-security/ports-entry/cargo-security/ctpat" },
      { label: "Importer Security Filing (ISF)", url: "https://www.cbp.gov/trade/priority-issues/security/isf" },
      { label: "Foreign-Trade Zones", url: "https://www.cbp.gov/trade/priority-issues/foreign-trade-zones" },
      { label: "Automated Systems (ACE, ABI, AES)", url: "https://www.cbp.gov/trade/automated" },
    ]
  },
  {
    title: "Federal Register & Legal Resources",
    description: "Official government publications, regulations, and legal notices.",
    links: [
      { label: "Federal Register", url: "https://www.federalregister.gov" },
      { label: "GovInfo - Official Government Publications", url: "https://www.govinfo.gov" },
      { label: "Electronic Code of Federal Regulations", url: "https://www.ecfr.gov" },
      { label: "19 CFR - Customs Duties", url: "https://www.ecfr.gov/current/title-19" },
      { label: "Congress.gov - Legislation", url: "https://www.congress.gov" },
      { label: "19 USC - Customs Duties (Cornell)", url: "https://www.law.cornell.edu/uscode/text/19" },
    ]
  },
  {
    title: "International Trade Organizations",
    description: "WTO, WCO, and other international trade bodies.",
    links: [
      { label: "World Trade Organization (WTO)", url: "https://www.wto.org" },
      { label: "World Customs Organization (WCO)", url: "https://www.wcoomd.org" },
      { label: "OECD Trade Policy", url: "https://www.oecd.org/trade" },
      { label: "UNCTAD - UN Trade & Development", url: "https://unctad.org" },
      { label: "UNCITRAL (UN International Trade Law)", url: "https://uncitral.un.org/" },
    ]
  },
  {
    title: "Regional Trade Agreements",
    description: "Americas, European, and Asia-Pacific trade agreements.",
    subsections: [
      {
        title: "Americas",
        links: [
          { label: "OAS Foreign Trade Information System", url: "http://www.sice.oas.org/" },
          { label: "CAFTA-DR (CBP Resource)", url: "https://www.cbp.gov/trade/priority-issues/trade-agreements/free-trade-agreements/cafta-dr" },
        ]
      },
      {
        title: "Europe",
        links: [
          { label: "European Commission - Customs", url: "https://taxation-customs.ec.europa.eu/customs" },
          { label: "EU Trade Policy", url: "https://ec.europa.eu/trade" },
          { label: "UK HMRC", url: "https://www.gov.uk/government/organisations/hm-revenue-customs" },
        ]
      },
      {
        title: "Asia-Pacific",
        links: [
          { label: "Australian Border Force", url: "https://www.customs.gov.au" },
          { label: "China Customs", url: "http://english.customs.gov.cn" },
          { label: "Japan Customs", url: "https://www.customs.go.jp/english/index.htm" },
          { label: "Korea Customs Service", url: "https://www.customs.go.kr/english/main.do" },
        ]
      }
    ]
  },
  {
    title: "Professional Trade Organizations",
    description: "Industry associations and professional groups.",
    links: [
      { label: "National Customs Brokers & Forwarders Assoc.", url: "https://www.ncbfaa.org" },
      { label: "American Association of Exporters & Importers", url: "https://www.aaei.org" },
      { label: "Int'l Compliance Professionals Assoc. (ICPA)", url: "https://icpainc.org/" },
      { label: "Washington International Trade Association", url: "https://www.wita.org/" },
    ]
  }
];

// --- Link Row Component ---
const LinkRow: React.FC<{ link: LinkItem }> = ({ link }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    if (link.note) {
        return (
            <div
                className="border-b border-neutral-lightGray px-4 md:px-6 bg-neutral-50/50 flex items-center"
                style={{
                    height: '120px',
                    minHeight: '120px',
                    maxHeight: '120px',
                    boxSizing: 'border-box'
                }}
            >
                <div className="flex items-start gap-2 text-sm text-text-secondary italic">
                    <span className="text-secondary-teal mt-0.5 font-bold">•</span>
                    <span>{link.label}</span>
                </div>
            </div>
        );
    }

    return (
        <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block border-b border-neutral-lightGray overflow-hidden transition-colors hover:bg-neutral-50 flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                height: '120px',
                minHeight: '120px',
                maxHeight: '120px',
                boxSizing: 'border-box'
            }}
        >
            {/* Green Triangle Slide Animation - Matches Practice Areas exactly */}
            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    right: isHovered ? '0' : '-96px',
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
                {/* Arrow Icon inside triangle */}
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
                        flexShrink: 0
                    }}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-0 px-4 md:px-6 flex items-center justify-between w-full">
                <div style={{ paddingRight: '96px' }}>
                    <h3 className="text-lg md:text-xl font-bold text-primary-navy mb-0.5 group-hover:text-primary-darkBlue transition-colors font-garamond">
                        {link.label}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-secondary-teal">
                        External Resource
                    </p>
                </div>
            </div>
        </a>
    );
};

// --- Main Page Component ---
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

  // Filter logic handling nested structure
  const filteredCategories = resourcesData.map(category => {
    // Check if category title matches
    const categoryMatches = category.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter main links
    const matchingLinks = category.links?.filter(link => 
        link.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Filter subsections
    const matchingSubsections = category.subsections?.map(sub => ({
        ...sub,
        links: sub.links.filter(link => link.label.toLowerCase().includes(searchTerm.toLowerCase()))
    })).filter(sub => sub.links.length > 0 || sub.title.toLowerCase().includes(searchTerm.toLowerCase()));

    // Return category if it matches itself, or has matching children
    if (categoryMatches || (matchingLinks && matchingLinks.length > 0) || (matchingSubsections && matchingSubsections.length > 0)) {
        return {
            ...category,
            // If category matches via title, show all links. Else show only matching links.
            links: categoryMatches ? category.links : matchingLinks,
            subsections: categoryMatches ? category.subsections : matchingSubsections
        };
    }
    return null;
  }).filter((category): category is { title: string; description: string; links: LinkItem[]; subsections: SubSection[] } => category !== null);

  return (
    <div className="pt-20 font-montserrat text-neutral-darkGray bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full py-32 px-6 text-center overflow-hidden flex flex-col justify-center min-h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover object-center"
            loading="lazy"
            decoding="async"
            width="2070"
            height="1380"
          />
          {/* Overlay with 55% opacity for better text visibility */}
          <div className="absolute inset-0" style={{backgroundColor: 'rgba(1, 33, 105, 0.55)'}}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-garamond mb-6 tracking-tight leading-tight" style={{color: '#ffffff', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 40px rgba(1, 33, 105, 0.5)'}}>
            Useful Links & Resources
          </h1>
          <p className="text-xl md:text-2xl font-medium tracking-wide mb-4" style={{color: '#ffffff', textShadow: '0 2px 6px rgba(0, 0, 0, 0.8), 0 4px 12px rgba(0, 0, 0, 0.5)'}}>
            A comprehensive directory of government agencies, legal forms, and international trade tools for compliance professionals.
          </p>
          <div className="w-24 h-1 bg-secondary-teal mx-auto mt-6"></div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-6 bg-gray-50 sticky top-20 z-30">
        <div className="max-w-[1376px] mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search News by Keyword"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-4 pl-6 pr-16 text-base bg-white border border-gray-300 rounded focus:outline-none focus:border-gray-400 transition-all placeholder:text-gray-400 text-gray-700"
                aria-label="Search resources"
              />
              <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Links List */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1376px] mx-auto">
          {/* Disclaimer */}
          <div className="mb-16 p-6 bg-blue-50 rounded-xl border-l-4 border-primary-midBlue max-w-4xl">
              <p className="text-sm text-primary-navy/80 leading-relaxed">
                  <strong>Note:</strong> These links are provided as a courtesy for informational purposes only. Trembach Law Firm does not control external websites and is not responsible for their content. Always verify regulations with official government sources.
              </p>
          </div>

          {filteredCategories && filteredCategories.length > 0 ? (
            <div className="space-y-16">
              {filteredCategories.map((category, idx) => (
                <div key={idx} className="animate-fadeIn">
                   {/* Category Header */}
                   <div className="mb-6 border-b-2 border-primary-navy/10 pb-3">
                       <h2 className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-2">
                           {category.title}
                       </h2>
                       <p className="text-text-secondary text-base max-w-3xl">
                           {category.description}
                       </p>
                   </div>

                   {/* Links Container */}
                   <div className="border-t border-neutral-lightGray">
                       {/* Direct Links - Grid Layout with 3 columns */}
                       {category.links && category.links.length > 0 && (
                           <div className="grid grid-cols-1 md:grid-cols-3">
                               {category.links.map((link, linkIdx) => (
                                   <LinkRow key={`link-${linkIdx}`} link={link} />
                               ))}
                           </div>
                       )}

                       {/* Subsections */}
                       {category.subsections && category.subsections.map((sub, subIdx) => (
                           <div key={`sub-${subIdx}`} className="mt-0">
                               {/* Subsection Header */}
                               <div className="bg-neutral-100/50 px-4 md:px-6 py-2 border-b border-neutral-lightGray">
                                   <h3 className="text-xs font-bold uppercase tracking-wider text-primary-navy/70">
                                       {sub.title}
                                   </h3>
                               </div>
                               {/* Subsection Links - Grid Layout with 3 columns */}
                               <div className="grid grid-cols-1 md:grid-cols-3">
                                   {sub.links.map((subLink, subLinkIdx) => (
                                       <LinkRow key={`sublink-${subLinkIdx}`} link={subLink} />
                                   ))}
                               </div>
                           </div>
                       ))}
                   </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
                <p className="text-2xl text-neutral-400 font-garamond italic">No resources found matching "{searchTerm}"</p>
                <button 
                    onClick={() => setSearchTerm('')}
                    className="mt-4 text-secondary-teal font-bold hover:underline"
                >
                    Clear Search
                </button>
            </div>
          )}
        </div>
      </section>

      {/* Evaluation Form */}
      <EvaluationForm theme="light" />
    </div>
  );
};

export default UsefulLinksPage;
