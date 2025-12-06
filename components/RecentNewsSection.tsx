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
      className="recent-news"
      aria-labelledby="news-heading"
    >
      {/* Background Image - same as footer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/footer-background.png)' }}
      />
      {/* Heavy Dark Blue Overlay - same as footer */}
      <div
        className="absolute inset-0 bg-primary-navy"
        style={{ opacity: 0.92 }}
      />

      {/* Content Container */}
      <div className="recent-news__container">
        {/* Two Column Layout using Flexbox like practice-areas-preview */}
        <div className="recent-news__content">
          {/* Left Side - Featured Article */}
          <div className="recent-news__left">
            {/* Featured Article Title */}
            <h2
              id="news-heading"
              className="recent-news__title"
            >
              {featuredArticle.title}
            </h2>

            {/* Featured Article Description */}
            <p className="recent-news__description">
              {featuredArticle.description}
            </p>

            {/* Read Now Button */}
            <div>
              <Link
                to={featuredArticle.linkHref}
                aria-label={`Read article: ${featuredArticle.title}`}
                className="recent-news__button"
              >
                Read Now
              </Link>
            </div>
          </div>

          {/* Right Side - Article List with Triangle Animation */}
          <div className="recent-news__right">
            {remainingArticles.map((article, index) => (
              <Link
                key={article.id}
                to={article.linkHref}
                aria-label={`Read article: ${article.title}`}
                className="recent-news__article group"
                style={{
                  borderBottom: index < remainingArticles.length - 1 ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
                }}
              >
                {/* Green Triangle Slide Animation */}
                <div className="triangle-slide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="white"
                    aria-hidden="true"
                    className="triangle-slide__icon"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>

                {/* Article Title */}
                <h3 className="recent-news__article-title">
                  {article.title}
                </h3>

                {/* Article Date */}
                <span className="recent-news__article-date">
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
