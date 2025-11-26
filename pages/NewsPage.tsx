
import React, { useEffect, useState } from 'react';
import { SearchIcon } from '../components/icons/SearchIcon';
import { ArrowRightIcon } from '../components/icons/ArrowRightIcon';
import { articles } from '../data/articles';
import { articleMetadata, getArticleCategory } from '../data/articleMetadata';
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
  readTime: string;
  link: string;
  isoDate: string;
}

// --- Data: Map articles with their metadata and sort by date (newest first) ---
const newsItems: NewsItem[] = articles
  .map((article) => {
    const metadata = articleMetadata[article.id];
    return {
      id: article.id,
      title: article.title,
      source: 'Trembach Law Firm',
      category: getArticleCategory(article.id),
      date: metadata?.date || 'NOVEMBER 26, 2025',
      readTime: metadata?.readTime || '5 MIN READ',
      isoDate: metadata?.isoDate || '2025-11-26',
      link: `#article/${article.id}`
    };
  })
  .sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime());

// --- News Article Card Component ---
const NewsArticleCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={item.link}
      onClick={(e) => {
        if (item.link.startsWith('#')) {
            e.preventDefault();
            window.location.hash = item.link;
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block overflow-hidden transition-all duration-300 bg-white"
      style={{
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)',
        borderRadius: '8px',
        padding: '40px',
        boxSizing: 'border-box'
      }}
    >
       {/* Teal Triangle Slide Animation */}
       <div
           style={{
               position: 'absolute',
               top: '0',
               right: isHovered ? '0' : '-100px',
               width: '100px',
               height: '100px',
               background: '#3FBB94',
               clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
               transition: 'right 300ms cubic-bezier(0.4, 0, 0.2, 1)',
               zIndex: 10,
               pointerEvents: 'none'
           }}
       >
           {/* Arrow Icon inside triangle */}
           <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={2.5}
               stroke="white"
               style={{
                   width: '24px',
                   height: '24px',
                   position: 'absolute',
                   top: '22px',
                   right: '22px'
               }}
           >
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
           </svg>
       </div>

       {/* Content */}
       <div className="relative z-0">
         {/* Category and Metadata */}
         <div className="flex items-center mb-4" style={{
           fontSize: '11px',
           fontWeight: 700,
           textTransform: 'uppercase',
           letterSpacing: '0.08em',
           color: '#3FBB94'
         }}>
            <span>{item.category}</span>
            <span style={{ margin: '0 10px', color: '#AAAAAA' }}>•</span>
            <span style={{ color: '#888888', fontWeight: 400 }}>{item.date}</span>
            <span style={{ margin: '0 10px', color: '#AAAAAA' }}>•</span>
            <span style={{ color: '#888888', fontWeight: 400 }}>{item.readTime}</span>
         </div>

         {/* Title */}
         <h3 className="font-garamond font-bold mb-4 group-hover:text-primary-navy transition-colors" style={{
           fontSize: '28px',
           lineHeight: '1.25',
           color: '#012169'
         }}>
           {item.title}
         </h3>

         {/* Source */}
         <div style={{
           fontSize: '14px',
           color: '#666666',
           fontWeight: 400
         }}>
            Source: {item.source}
         </div>
       </div>
    </a>
  );
};

const NewsPage: React.FC = () => {
  useMeta({
    title: 'CA Trade Law News | CBP Audits, ITAR, Export Controls Updates',
    description: 'California international trade law news & customs insights: CBP investigation updates, ITAR/EAR compliance changes, Section 301 tariffs, OFAC sanctions, UFLPA enforcement, trade compliance updates. Expert analysis for CA/USA importers & exporters.',
    canonical: 'news',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-news.jpg`,
    ogImageAlt: 'Trade Law News & Insights - CBP Audits, Export Controls, ITAR Compliance',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    twitterImageAlt: 'Trade Law News & Insights - CBP Audits, Export Controls, ITAR Compliance',
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
        {/* Background Image with Dark Overlay - LCP element */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-news.jpg"
            alt="Professional business news analysis representing trade law insights and industry updates"
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            width="1920"
            height="1080"
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
            <div className="w-24 h-1 bg-secondary-teal mt-6"></div>
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
              >
                <SearchIcon className="text-gray-400" style={{ width: '20px', height: '20px', display: 'block' }} />
              </div>
              <input
                type="text"
                placeholder="Search News by Keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 text-base bg-white border border-gray-300 focus:outline-none focus:border-gray-400 transition-all placeholder:text-gray-400 text-gray-700"
                style={{ paddingLeft: '48px', paddingRight: '16px' }}
                aria-label="Search news articles"
              />
            </div>
            <button
              onClick={() => {/* Search functionality */}}
              className="px-8 py-3 font-bold text-white transition-colors"
              style={{
                backgroundColor: '#012169',
                fontSize: '14px',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap'
              }}
            >
              SEARCH
            </button>
          </div>
        </div>
      </section>

      {/* News List Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          {/* Heading with underline */}
          <div className="mb-10">
            <h2 className="font-garamond font-bold" style={{
              fontSize: '38px',
              color: '#012169',
              lineHeight: '1.2',
              marginBottom: '12px'
            }}>
              Latest News and Headlines
            </h2>
            <div style={{
              width: '100%',
              height: '3px',
              backgroundColor: '#012169'
            }}></div>
          </div>

          {/* Cards Grid */}
          <div>
            {visibleNews.length > 0 ? (
              <>
                <div className="grid grid-cols-1 mb-8" style={{ gap: '24px' }}>
                  {visibleNews.map((item) => (
                      <NewsArticleCard key={item.id} item={item} />
                  ))}
                </div>

                {/* Pagination Controls */}
                {visibleNews.length < totalArticles && (
                  <div className="mt-16 flex flex-col items-center" style={{ gap: '20px' }}>
                      <p style={{
                        fontSize: '14px',
                        color: '#888888',
                        fontWeight: 400
                      }}>
                          Showing {visibleNews.length} from {totalArticles}
                      </p>
                      <button
                          onClick={handleLoadMore}
                          className="font-bold transition-all hover:bg-primary-navy hover:text-white hover:border-primary-navy"
                          style={{
                            padding: '14px 40px',
                            border: '2px solid #012169',
                            backgroundColor: 'transparent',
                            color: '#012169',
                            fontSize: '13px',
                            fontWeight: 700,
                            letterSpacing: '0.1em'
                          }}
                      >
                          LOAD MORE+
                      </button>
                  </div>
                )}
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
                
                <h3 className="text-xl font-bold text-primary-navy mb-3">Attorney-Level Analysis</h3>
                <p className="text-gray-700">
                  Written by practicing attorneys who defend CBP investigations, handle focused assessments, and litigate trade cases in Court of International Trade. Not generic news aggregation—strategic legal analysis from the enforcement frontlines.
                </p>
              </div>
              <div className="text-center">
                
                <h3 className="text-xl font-bold text-primary-navy mb-3">California-Focused Perspective</h3>
                <p className="text-gray-700">
                  Emphasis on how national developments affect California ports (LA/Long Beach, Oakland, San Diego), technology companies, fashion brands, food importers, and the state's diverse international business sectors.
                </p>
              </div>
              <div className="text-center">
                
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
