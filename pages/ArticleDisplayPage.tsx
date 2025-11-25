
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
    <div className="bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 pt-32 pb-20">
        {/* Back to News Link */}
        <a
          href="#news"
          className="inline-flex items-center gap-2 text-[#9CA3AF] text-sm font-medium tracking-wide uppercase hover:text-secondary-teal transition-colors mb-12"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to News
        </a>

        {/* Category and Read Time */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-secondary-teal text-sm font-semibold tracking-wide uppercase">
            Customs Litigation
          </span>
          <span className="text-[#9CA3AF] text-sm">•</span>
          <span className="text-[#9CA3AF] text-sm uppercase tracking-wide">
            25 min read
          </span>
        </div>

        {/* Article Title */}
        <h1 className="text-[40px] md:text-[56px] leading-[1.1] font-bold font-garamond text-primary-navy mb-8">
          {article.title}: How to Challenge CBP's HTS Determination
        </h1>

        {/* Published Date and Author */}
        <div className="flex flex-wrap items-center gap-6 mb-12 pb-12 border-b border-gray-200">
          <div>
            <div className="text-[#9CA3AF] text-xs uppercase tracking-wide mb-1">Published</div>
            <div className="text-primary-navy font-semibold">November 17, 2025</div>
          </div>
          <div>
            <div className="text-[#9CA3AF] text-xs uppercase tracking-wide mb-1">Author</div>
            <div className="text-primary-navy font-semibold">Anatolii Trembach</div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-[800px]">
          <h2 className="text-[32px] leading-[1.3] font-bold font-garamond text-primary-navy mb-6">
            Introduction
          </h2>

          <p className="text-[16px] leading-[1.75] text-[#333333] mb-6">
            Tariff classification under the Harmonized Tariff Schedule (HTS) determines the duty rate applied to imported merchandise. With over 17,000 tariff classifications and duty rates ranging from zero to over 30%, correct classification significantly impacts import costs. Classification disputes between importers and U.S. Customs and Border Protection (CBP) commonly arise when CBP disagrees with an importer's declared HTS classification. This article provides strategic guidance for importers facing CBP classification determinations and explores the available administrative and judicial remedies.
          </p>

          {/* Render Full HTML Content with Exact Template Styling */}
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Disclaimer */}
          <p className="text-[14px] leading-[1.6] text-[#9CA3AF] italic mt-12 pt-8 border-t border-gray-200">
            *This article is provided for informational purposes only and does not constitute legal advice. Readers should consult qualified customs counsel regarding their specific situations.
          </p>

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
      </div>

      {/* Free Case Evaluation Section */}
      <div className="bg-[#F9FAFB] py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[40px] md:text-[48px] leading-[1.2] font-bold font-garamond text-primary-navy mb-4">
            Free Case Evaluation
          </h2>
          <p className="text-secondary-teal text-lg font-semibold tracking-wide uppercase mb-12">
            Your Strategic Partner in Trade Law
          </p>
          <EvaluationForm theme="light" />
        </div>
      </div>
    </div>
  );
};

export default ArticleDisplayPage;
