import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import type { NewsArticle } from '../types';

interface RecentNewsSectionProps {
  articles: NewsArticle[];
}

const RecentNewsSection: React.FC<RecentNewsSectionProps> = memo(({ articles }) => {
  if (articles.length === 0) {
    return null;
  }

  // First article is featured (left side), rest are listed (right side)
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1, 5); // Show up to 4 more articles

  return (
    <section
      id="news-section"
      aria-labelledby="news-heading"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Image - same as footer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/images/footer-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Heavy Dark Blue Overlay - same as footer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#012169',
          opacity: 0.92,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1376px',
          margin: '0 auto',
          padding: '5rem 2.5rem',
        }}
      >
        {/* Two Column Layout using Flexbox */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '4rem',
            alignItems: 'flex-start',
          }}
        >
          {/* Left Side - Featured Article (50% width) */}
          <div
            style={{
              flex: '0 0 50%',
              maxWidth: '50%',
            }}
          >
            {/* Featured Article Title */}
            <h2
              id="news-heading"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 400,
                lineHeight: 1.2,
                color: 'white',
                marginBottom: '1.5rem',
              }}
            >
              {featuredArticle.title}
            </h2>

            {/* Featured Article Description */}
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '2.5rem',
                maxWidth: '540px',
              }}
            >
              {featuredArticle.description}
            </p>

            {/* Read Now Button */}
            <div>
              <Link
                to={featuredArticle.linkHref}
                aria-label={`Read article: ${featuredArticle.title}`}
                style={{
                  display: 'inline-block',
                  padding: '1rem 2rem',
                  border: '2px solid white',
                  color: 'white',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  backgroundColor: 'transparent',
                }}
              >
                Read Now
              </Link>
            </div>
          </div>

          {/* Right Side - Article List with Triangle Animation (50% width) */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {remainingArticles.map((article, index) => (
              <Link
                key={article.id}
                to={article.linkHref}
                aria-label={`Read article: ${article.title}`}
                className="group"
                style={{
                  display: 'block',
                  position: 'relative',
                  overflow: 'hidden',
                  paddingTop: index === 0 ? '0' : '1.5rem',
                  paddingBottom: '1.5rem',
                  borderBottom: index < remainingArticles.length - 1 ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
                  textDecoration: 'none',
                }}
              >
                {/* Green Triangle Slide Animation */}
                <div
                  className="triangle-slide"
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: '-85px',
                    width: '85px',
                    height: '85px',
                    background: '#3FBB94',
                    clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                    transition: 'right 300ms ease-in-out',
                    zIndex: 10,
                    pointerEvents: 'none',
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
                      width: '20px',
                      height: '20px',
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>

                {/* Article Title */}
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    lineHeight: 1.4,
                    color: 'white',
                    marginBottom: '0.5rem',
                    paddingRight: '2rem',
                    position: 'relative',
                    zIndex: 0,
                  }}
                >
                  {article.title}
                </h3>

                {/* Article Date */}
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  {article.date}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

RecentNewsSection.displayName = 'RecentNewsSection';

export default RecentNewsSection;
