
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import type { NewsArticle } from '../types';

interface NewsArticleCardProps {
  article: NewsArticle;
}

const NewsArticleCard: React.FC<NewsArticleCardProps> = memo(({ article }) => {
  const isInternalLink = article.linkHref.startsWith('#') || article.linkHref.startsWith('/');

  const cardContent = (
    <>
      {/* Teal Triangle Slide Animation */}
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

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 0, padding: '40px' }}>
        {/* Category and Metadata */}
        <div className="flex items-center mb-4" style={{
          fontSize: '11px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: '#3FBB94'
        }}>
          <span>{article.category || 'Trade Law'}</span>
          <span style={{ margin: '0 10px', color: '#AAAAAA' }}>•</span>
          <span style={{ color: '#888888', fontWeight: 400 }}>{article.date}</span>
          <span style={{ margin: '0 10px', color: '#AAAAAA' }}>•</span>
          <span style={{ color: '#888888', fontWeight: 400 }}>{article.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="font-garamond font-bold mb-4 group-hover:text-primary-darkBlue transition-colors" style={{
          fontSize: '28px',
          lineHeight: '1.25',
          color: '#012169'
        }}>
          {article.title}
        </h3>

        {/* Source */}
        <div style={{
          fontSize: '14px',
          color: '#666666',
          fontWeight: 400
        }}>
          Source: {article.source || 'Trembach Law Firm'}
        </div>
      </div>
    </>
  );

  const cardClassName = "block group relative bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-border-subtle rounded-2xl";
  const cardStyle = { cursor: 'pointer' as const };

  if (isInternalLink) {
    const to = article.linkHref.startsWith('#') ? article.linkHref.replace('#', '/') : article.linkHref;
    return (
      <Link
        to={to}
        aria-label={`Read article: ${article.title}`}
        className={cardClassName}
        style={cardStyle}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <a
      href={article.linkHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read article: ${article.title} (opens in new tab)`}
      className={cardClassName}
      style={cardStyle}
    >
      {cardContent}
    </a>
  );
});

NewsArticleCard.displayName = 'NewsArticleCard';

export default NewsArticleCard;
