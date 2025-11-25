
import React, { useEffect } from 'react';
import { articles } from '../data/articles';
import EvaluationForm from '../components/EvaluationForm';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateBreadcrumbSchema } from '../utils/seo';

interface ArticleDisplayPageProps {
  articleId: string;
}

const ArticleDisplayPage: React.FC<ArticleDisplayPageProps> = ({ articleId }) => {
  const article = articles.find(a => a.id === articleId);

  useMeta({
    title: article ? `${article.title} | Trembach Law Firm` : 'Article Not Found',
    description: article ? `${article.subheading}. Expert analysis from California international trade and customs law attorneys. ${article.intro}` : 'Article not found',
    keywords: article ? (article.keywords || 'international trade law, customs regulations, legal analysis, trade compliance') : '',
    canonical: article ? `article/${article.id}` : '',
    ogType: 'article',
    ogImage: article ? `${siteConfig.siteUrl}/og-image-article-${article.id}.jpg` : '',
    articlePublishedTime: article ? '2025-01-01' : undefined,
    schema: article ? [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.subheading,
        author: {
          '@type': 'Person',
          '@id': 'https://trembach.law/#anatolii-trembach',
          name: 'Anatolii Trembach',
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://trembach.law/#organization',
        },
        datePublished: '2025-01-01',
        dateModified: '2025-01-01',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${siteConfig.siteUrl}/#article/${article.id}`,
        },
        articleSection: 'Legal Insight',
        keywords: 'international trade law, customs regulations, legal analysis',
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'News & Insights', url: `${siteConfig.siteUrl}/#news` },
        { name: article.title, url: `${siteConfig.siteUrl}/#article/${article.id}` }
      ])
    ] : undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  if (!article) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh]">
        <h1 className="text-2xl font-garamond text-primary-navy">Article not found</h1>
        <a href="#news" className="text-secondary-teal underline mt-4 block">Return to News</a>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section with Background Image and Overlay */}
      <section className="relative w-full py-32 px-6 text-center overflow-hidden flex flex-col justify-center min-h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
            width="2070"
            height="1380"
          />
          {/* Dark overlay with 70% opacity for maximum text visibility */}
          <div className="absolute inset-0 bg-primary-navy opacity-70"></div>
        </div>

        {/* Hero Content - Enhanced visibility with white text and strong shadows */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-garamond mb-6 tracking-tight leading-tight text-white" style={{textShadow: '0 2px 10px rgba(0, 0, 0, 0.9), 0 4px 20px rgba(0, 0, 0, 0.7), 0 0 50px rgba(0, 0, 0, 0.5)'}}>
            {article.title}
          </h1>
          <p className="text-xl md:text-2xl font-medium tracking-wide text-white" style={{textShadow: '0 2px 8px rgba(0, 0, 0, 0.9), 0 4px 16px rgba(0, 0, 0, 0.6)'}}>
            {article.subheading}
          </p>
          <div className="w-24 h-1 bg-secondary-teal mx-auto mt-6"></div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-[800px] mx-auto px-6 py-20">

          {/* Render Full HTML Content with Exact Template Styling */}
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <style>{`
            .article-content h2 {
              font-family: 'EB Garamond', serif;
              font-weight: 700;
              font-size: 32px;
              line-height: 1.3;
              color: #012169;
              margin-top: 48px;
              margin-bottom: 24px;
            }

            .article-content h2:first-child {
              margin-top: 0;
            }

            .article-content h3 {
              font-family: 'EB Garamond', serif;
              font-weight: 700;
              font-size: 24px;
              line-height: 1.3;
              color: #012169;
              margin-top: 32px;
              margin-bottom: 16px;
            }

            .article-content p {
              font-size: 16px;
              line-height: 1.75;
              color: #333333;
              margin-bottom: 24px;
            }

            .article-content ul,
            .article-content ol {
              margin-top: 24px;
              margin-bottom: 24px;
              padding-left: 24px;
            }

            .article-content li {
              font-size: 16px;
              line-height: 1.75;
              color: #333333;
              margin-bottom: 12px;
            }

            .article-content strong {
              color: #012169;
              font-weight: 700;
            }

            .article-content em {
              font-style: italic;
            }

            .article-content a {
              color: #3FBB94;
              text-decoration: none;
            }

            .article-content a:hover {
              color: #012169;
              text-decoration: underline;
            }
          `}</style>

      </article>

      {/* Evaluation Form at bottom for conversion */}
      <div className="mt-24 pb-20">
         <EvaluationForm theme="light" />
      </div>
    </div>
  );
};

export default ArticleDisplayPage;
