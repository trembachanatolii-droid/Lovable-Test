
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import type { NewsArticle } from '../types';

interface NewsArticleCardProps {
  article: NewsArticle;
}

const NewsArticleCard: React.FC<NewsArticleCardProps> = memo(({ article }) => {
  // Use Link for internal hash routes, anchor for external links
  const isInternalLink = article.linkHref.startsWith('#');
  const Component = isInternalLink ? Link : 'a';
  const linkProps = isInternalLink
    ? {
        to: article.linkHref.replace('#', '/'),
        'aria-label': `Read article: ${article.title}`
      }
    : {
        href: article.linkHref,
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': `Read article: ${article.title} (opens in new tab)`
      };

  return (
    <Component
      {...linkProps}
      className="block group relative bg-white overflow-hidden transition-all duration-300 shadow-sm hover:-translate-y-1 hover:shadow-xl will-change-transform border border-border-subtle rounded-2xl"
    >
      {/* Green Triangle with White Arrow */}
      <div
        className="triangle-slide"
        style={{
          position: 'absolute',
          top: 0,
          right: '-120px',
          width: '120px',
          height: '120px',
          background: '#3FBB94',
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          transition: 'right 300ms ease-in-out',
          zIndex: 10,
          pointerEvents: 'none'
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="white"
          aria-hidden="true"
          style={{
            width: '24px',
            height: '24px',
            position: 'absolute',
            top: '28px',
            right: '28px'
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>

      <div className="p-8 flex flex-col" style={{ position: 'relative', zIndex: 0 }}>
        <div className="flex items-center gap-2 text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">
            <span>{article.date}</span>
            <span className="text-secondary-teal">•</span>
            <span>{article.readTime}</span>
        </div>
        <h3 className="font-garamond text-2xl font-bold leading-tight text-primary-navy mb-3 group-hover:text-primary-darkBlue transition-colors">
          {article.title}
        </h3>
        <p className="text-base leading-relaxed text-text-secondary mb-6">
          {article.description}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 text-navy-medium text-[17px] font-semibold transition-all duration-200 group-hover:gap-2.5 group-hover:text-secondary-teal">
          Read Now &rarr;
        </span>
      </div>
    </Component>
  );
});

NewsArticleCard.displayName = 'NewsArticleCard';

export default NewsArticleCard;
