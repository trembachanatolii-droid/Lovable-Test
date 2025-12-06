import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/seo';
import { searchContent, SearchableItem } from '../data/searchIndex';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchableItem[]>([]);
  const [isSearching, setIsSearching] = useState(true);

  useMeta({
    title: query ? `Search Results for "${query}" | Trembach Law Firm` : 'Search | Trembach Law Firm',
    description: query
      ? `Search results for "${query}" across articles, practice areas, and resources from Trembach Law Firm.`
      : 'Search for customs law, trade compliance, and import/export information.',
    canonical: `search?q=${encodeURIComponent(query)}`,
    ogType: 'website',
    ogImage: 'https://trembach.law/og-image-default.jpg',
    ogImageAlt: 'Trembach Law Firm - Search Results',
    schema: [
      generateWebPageSchema({
        title: query ? `Search Results for "${query}"` : 'Search',
        description: query
          ? `Find information about ${query} from California's leading customs and trade law firm.`
          : 'Search our customs law resources, articles, and practice areas.',
        url: `${siteConfig.siteUrl}/search?q=${encodeURIComponent(query)}`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Search', url: `${siteConfig.siteUrl}/search` },
      ]),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIsSearching(true);

    // Simulate a brief delay for better UX (shows loading state)
    const timer = setTimeout(() => {
      if (query && query.trim()) {
        const searchResults = searchContent(query);
        setResults(searchResults);
      } else {
        setResults([]);
      }
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const getResultIcon = (type: SearchableItem['type']) => {
    switch (type) {
      case 'article':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'practice-area':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
        );
      case 'city-page':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'resource':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  const getTypeBadgeColor = (type: SearchableItem['type']) => {
    switch (type) {
      case 'article':
        return 'bg-secondary-teal/10 text-secondary-teal';
      case 'practice-area':
        return 'bg-primary-navy/10 text-primary-navy';
      case 'city-page':
        return 'bg-blue-100 text-blue-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: SearchableItem['type']) => {
    switch (type) {
      case 'article':
        return 'Article';
      case 'practice-area':
        return 'Practice Area';
      case 'city-page':
        return 'Location';
      case 'resource':
        return 'Resource';
      case 'page':
        return 'Page';
      default:
        return type;
    }
  };

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      {/* Hero Section - matching site-wide hero pattern */}
      <section className="hero" aria-label="Search Results Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Search Results</h1>
          {query && (
            <p className="hero-subtitle">
              {isSearching ? (
                <>Searching for "{query}"...</>
              ) : results.length > 0 ? (
                <>Found {results.length} result{results.length === 1 ? '' : 's'} for "{query}"</>
              ) : (
                <>No results found for "{query}"</>
              )}
            </p>
          )}
          {!query && (
            <p className="hero-subtitle">
              Enter a search query to find articles, practice areas, locations, and resources
            </p>
          )}
        </div>
      </section>

      {/* Search Results Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          {/* Search Form */}
          <div className="mb-12">
            <form className="max-w-3xl mx-auto" method="GET" action="/search">
              <div className="relative">
                <input
                  type="text"
                  name="q"
                  defaultValue={query}
                  placeholder="Search for customs law, tariffs, export controls, cities..."
                  className="w-full px-6 py-4 pr-14 text-lg border-2 border-neutral-300 rounded-lg focus:outline-none focus:border-secondary-teal transition-colors"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-secondary-teal hover:text-primary-navy transition-colors"
                  aria-label="Search"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Loading State */}
          {isSearching && query && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-secondary-teal border-t-transparent"></div>
              <p className="mt-4 text-text-secondary">Searching...</p>
            </div>
          )}

          {/* No Query State */}
          {!query && !isSearching && (
            <div className="text-center py-12">
              <svg className="w-20 h-20 mx-auto text-neutral-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h2 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Start Your Search</h2>
              <p className="text-text-secondary max-w-2xl mx-auto mb-8">
                Search our comprehensive database of customs law articles, practice areas, California locations, and trade compliance resources.
              </p>
              <div className="max-w-2xl mx-auto text-left">
                <h3 className="text-lg font-bold text-primary-navy mb-3">Popular Searches:</h3>
                <div className="flex flex-wrap gap-3">
                  {['tariff', 'UFLPA', 'customs audit', 'export controls', 'Section 301', 'USMCA', 'duty drawback', 'San Francisco'].map(term => (
                    <Link
                      key={term}
                      to={`/search?q=${encodeURIComponent(term)}`}
                      className="px-4 py-2 bg-neutral-50 hover:bg-secondary-teal/10 text-text-secondary hover:text-secondary-teal rounded-lg border border-neutral-200 hover:border-secondary-teal transition-all"
                    >
                      {term}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* No Results State */}
          {!isSearching && query && results.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-20 h-20 mx-auto text-neutral-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">No Results Found</h2>
              <p className="text-text-secondary max-w-2xl mx-auto mb-6">
                We couldn't find any content matching "{query}". Try different keywords or browse our popular topics below.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                <Link to="/practice-areas" className="px-6 py-3 bg-secondary-teal text-white rounded-lg hover:bg-secondary-teal/90 transition-colors">
                  Browse Practice Areas
                </Link>
                <Link to="/news" className="px-6 py-3 bg-neutral-50 text-primary-navy rounded-lg hover:bg-neutral-100 transition-colors border border-neutral-200">
                  View Latest Articles
                </Link>
                <Link to="/contact" className="px-6 py-3 bg-neutral-50 text-primary-navy rounded-lg hover:bg-neutral-100 transition-colors border border-neutral-200">
                  Contact Us
                </Link>
              </div>
            </div>
          )}

          {/* Results List */}
          {!isSearching && results.length > 0 && (
            <div className="space-y-6">
              {results.map((result, index) => (
                <article
                  key={`${result.type}-${result.id}-${index}`}
                  className="bg-white p-6 rounded-lg border-l-4 border-secondary-teal shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 text-secondary-teal">
                      {getResultIcon(result.type)}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getTypeBadgeColor(result.type)}`}>
                          {getTypeLabel(result.type)}
                        </span>
                        {result.category && (
                          <span className="text-sm text-text-secondary">
                            {result.category}
                          </span>
                        )}
                      </div>
                      <Link
                        to={result.url}
                        className="group"
                      >
                        <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond group-hover:text-secondary-teal transition-colors">
                          {result.title}
                        </h3>
                      </Link>
                      <p className="text-text-secondary mb-4 leading-relaxed">
                        {result.description}
                      </p>
                      <Link
                        to={result.url}
                        className="inline-flex items-center text-secondary-teal hover:text-primary-navy font-semibold transition-colors"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Results Summary */}
          {!isSearching && results.length > 0 && (
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <p className="text-center text-text-secondary">
                Showing {results.length} result{results.length === 1 ? '' : 's'} for "{query}"
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <Link
                  to="/contact#schedule-consultation"
                  className="inline-flex items-center px-6 py-3 bg-primary-navy text-white rounded-lg hover:bg-primary-navy/90 transition-colors font-semibold"
                >
                  Need Legal Help?
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Need Expert Customs Law Guidance?
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact Trembach Law Firm for comprehensive customs and international trade law representation. We serve clients throughout California and nationwide.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/contact#schedule-consultation"
              className="inline-block px-8 py-4 bg-secondary-teal text-white font-semibold rounded-lg hover:bg-secondary-teal/90 transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:+13107441328"
              className="inline-block px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-primary-navy transition-colors"
            >
              Call (310) 744-1328
            </a>
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

export default SearchResultsPage;
