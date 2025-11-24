
import React, { useEffect, useState } from 'react';
import { SearchIcon } from '../components/icons/SearchIcon';
import { ArrowRightIcon } from '../components/icons/ArrowRightIcon';
import { articles } from '../data/articles';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateBreadcrumbSchema } from '../utils/seo';

// --- Types ---
interface NewsItem {
  id: string;
  title: string;
  source: string;
  category: string;
  date: string;
  link: string;
}

// --- Data ---
const newsItems: NewsItem[] = [
  ...articles.map((article) => ({
    id: article.id,
    title: article.title,
    source: 'Trembach Law Firm',
    category: 'Legal Insight',
    date: 'Updated 2025',
    link: `#article/${article.id}`
  }))
];

const NewsPage: React.FC = () => {
  useMeta({
    title: 'Trade Law News & Insights | CBP Audits, Export Controls, ITAR | California',
    description: 'Trade law news from California customs attorneys: CBP audits, ITAR compliance, Section 301 tariffs, OFAC sanctions, UFLPA updates. Expert insights for CA importers.',
    keywords: 'international trade law news California, CBP focused assessments, customs audits news, ITAR compliance updates, EAR compliance news, export controls California, Section 301 tariffs, OFAC sanctions updates, trade compliance news, customs regulations California, tariff classification updates',
    canonical: 'news',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-news.jpg`,
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'News and Insights',
        description: 'Expert analysis on international trade law, customs regulations, and compliance strategies.',
        url: `${siteConfig.siteUrl}/#news`,
        publisher: {
          '@type': 'Organization',
          '@id': 'https://trembach.law/#organization',
        },
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'News & Insights', url: `${siteConfig.siteUrl}/#news` }
      ])
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(15);

  const filteredNews = newsItems.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Reset pagination when search changes
  useEffect(() => {
    setVisibleCount(15);
  }, [searchTerm]);

  const visibleNews = filteredNews.slice(0, visibleCount);
  const totalArticles = filteredNews.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="pt-20 font-montserrat text-neutral-darkGray bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] py-32 overflow-hidden bg-gray-200 flex items-center">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1920&auto=format&fit=crop"
            alt="Professional business news analysis representing trade law insights and industry updates"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            decoding="async"
            width="1920"
            height="1280"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(1, 33, 105, 0.55)' }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1376px] mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-7xl font-bold font-garamond text-white mb-6 tracking-tight leading-tight"
              style={{
                color: '#ffffff',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 40px rgba(1, 33, 105, 0.5)'
              }}
            >
              News and Insights
            </h1>
            <p
              className="text-xl md:text-2xl text-white font-light mb-4 max-w-2xl leading-relaxed"
              style={{
                color: '#ffffff',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 40px rgba(1, 33, 105, 0.5)'
              }}
            >
              Expert analysis on international trade law, customs regulations, and compliance strategies.
            </p>

            {/* Teal Accent Bar */}
            <div className="w-24 h-1 bg-secondary-teal mt-6 mb-8"></div>

            <div
              className="border-l-4 border-secondary-teal pl-6"
            >
              <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255, 255, 255, 0.8)', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 40px rgba(1, 33, 105, 0.5)' }}>Media Contact</p>
              <p className="text-base font-semibold" style={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 40px rgba(1, 33, 105, 0.5)' }}>Anatolii Trembach, Esq.</p>
              <p className="text-base" style={{ color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 40px rgba(1, 33, 105, 0.5)' }}>631-746-8290 | media@trembachlaw.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1376px] mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-6">Stay Informed on California Trade Law Developments</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our News & Insights section provides timely analysis of CBP enforcement trends, regulatory changes, court decisions, and emerging compliance issues affecting California importers and exporters. These articles are written by attorneys with frontline experience defending businesses against CBP investigations, UFLPA detentions, and export control violations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Understanding recent developments helps your business anticipate enforcement priorities, adapt compliance programs, and respond strategically to regulatory changes before they impact your supply chain. Each article translates complex legal developments into practical guidance for California's international business community.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-6 bg-white border-b border-neutral-lightGray sticky top-20 z-30 shadow-sm">
        <div className="max-w-[1376px] mx-auto">
          <div className="relative max-w-2xl">
            <SearchIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400 pointer-events-none z-10" />
            <input
              type="text"
              placeholder="Search News by Keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-4 pl-14 pr-6 text-base bg-white border-2 border-neutral-300 rounded-full focus:outline-none focus:border-primary-navy focus:ring-2 focus:ring-primary-navy/20 transition-all placeholder:text-neutral-400 text-primary-navy shadow-sm"
              aria-label="Search news articles"
            />
          </div>
        </div>
      </section>

      {/* News List Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1376px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-black mb-10 pb-4 border-b-2 border-black/90">
            Latest News and Headlines
          </h2>

          <div className="flex flex-col">
            {visibleNews.length > 0 ? (
              <>
                {visibleNews.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    onClick={(e) => {
                      if (item.link.startsWith('#')) {
                          e.preventDefault();
                          window.location.hash = item.link;
                      }
                    }}
                    className="group relative block py-6 border-b border-neutral-lightGray overflow-hidden transition-colors hover:bg-neutral-50"
                  >
                     {/* Green Triangle Slide Animation - Clean approach */}
                     <div
                         className="absolute top-0 right-0 w-20 h-20 bg-secondary-teal transition-all duration-300 ease-in-out transform translate-x-20 group-hover:translate-x-0 z-10"
                         style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                     >
                         {/* Arrow Icon inside triangle */}
                         <div className="absolute top-3 right-3 text-white">
                             <ArrowRightIcon className="h-5 w-5" />
                         </div>
                     </div>

                     {/* Content */}
                     <div className="relative z-0 px-4 md:px-6">
                       <h3 className="text-xl md:text-2xl font-bold text-black mb-2 group-hover:text-primary-navy transition-colors font-garamond leading-tight max-w-4xl">
                         {item.title}
                       </h3>
                       <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                          <span className="text-primary-navy">{item.source}</span>
                          <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                          <span>{item.category}</span>
                          <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                          <span>{item.date}</span>
                       </div>
                     </div>
                  </a>
                ))}

                {/* Pagination Controls */}
                <div className="mt-16 text-center border-t border-neutral-lightGray pt-12">
                    <p className="text-neutral-500 font-medium mb-6">
                        Showing {visibleNews.length} from {totalArticles} articles
                    </p>
                    {visibleNews.length < totalArticles && (
                        <button 
                            onClick={handleLoadMore}
                            className="inline-flex items-center gap-2 px-8 py-3 font-roboto font-bold uppercase tracking-wider text-sm border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white transition-colors duration-300 rounded-sm"
                        >
                            Load More +
                        </button>
                    )}
                </div>
              </>
            ) : (
              <p className="text-xl text-neutral-500 italic py-10">No articles found matching your search.</p>
            )}
          </div>
        </div>
      </section>

      {/* Why Our Insights Matter */}
      <section className="py-16 px-6 bg-white border-y border-gray-200">
        <div className="max-w-[1376px] mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">Why Our Insights Matter</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold text-primary-navy mb-3">Attorney-Level Analysis</h3>
                <p className="text-gray-700">
                  Written by practicing attorneys who defend CBP investigations, handle focused assessments, and litigate trade cases in Court of International Trade. Not generic news aggregation—strategic legal analysis from the enforcement frontlines.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-primary-navy mb-3">California-Focused Perspective</h3>
                <p className="text-gray-700">
                  Emphasis on how national developments affect California ports (LA/Long Beach, Oakland, San Diego), technology companies, fashion brands, food importers, and the state's diverse international business sectors.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-primary-navy mb-3">Actionable Guidance</h3>
                <p className="text-gray-700">
                  Each article includes practical steps businesses can take now: compliance program updates, supply chain adjustments, documentation improvements, and proactive disclosure strategies to minimize risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics We Cover */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1376px] mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">Topics We Cover</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary-teal">
                <h3 className="text-lg font-bold text-primary-navy mb-2">CBP Enforcement Trends</h3>
                <p className="text-gray-600 text-sm">Focused assessments, penalty patterns, audit priorities, and investigation developments</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary-teal">
                <h3 className="text-lg font-bold text-primary-navy mb-2">UFLPA & Forced Labor</h3>
                <p className="text-gray-600 text-sm">Entity List updates, detention trends, release strategies, and supply chain due diligence requirements</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary-teal">
                <h3 className="text-lg font-bold text-primary-navy mb-2">Section 301/232 Tariffs</h3>
                <p className="text-gray-600 text-sm">Exclusion processes, rate changes, scope expansions, and mitigation strategies</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary-teal">
                <h3 className="text-lg font-bold text-primary-navy mb-2">Export Controls</h3>
                <p className="text-gray-600 text-sm">BIS rule changes, Entity List additions, ITAR updates, and technology transfer restrictions</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary-teal">
                <h3 className="text-lg font-bold text-primary-navy mb-2">Court Decisions</h3>
                <p className="text-gray-600 text-sm">Court of International Trade rulings, CAFC appeals, and precedential decisions affecting importers</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary-teal">
                <h3 className="text-lg font-bold text-primary-navy mb-2">Regulatory Changes</h3>
                <p className="text-gray-600 text-sm">CBP policy shifts, Federal Register notices, and new compliance requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
