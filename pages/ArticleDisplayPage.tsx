
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
    <>
      <article className="bg-white min-h-screen pt-32 pb-20">
        {/* Back Navigation */}
        <div className="max-w-[800px] mx-auto px-6 mb-16">
          <a
            href="#news"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300"
            style={{ color: '#9CA3AF' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#3FBB94'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </span>
            Back to News
          </a>
        </div>

        {/* Article Header */}
        <header className="max-w-[800px] mx-auto px-6 mb-16 text-center md:text-left">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider mb-8 justify-center md:justify-start">
            <span className="px-2.5 py-1 rounded-sm" style={{ backgroundColor: '#E6F7F2', color: '#3FBB94' }}>
              Customs Litigation
            </span>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#9CA3AF' }}></span>
            <span style={{ color: '#9CA3AF' }}>25 min read</span>
          </div>

          {/* Title */}
          <h1 className="font-bold font-garamond leading-[1.15] mb-10" style={{
            fontSize: 'clamp(36px, 5vw, 52px)',
            color: '#012169'
          }}>
            {article.title}: How to Challenge CBP's HTS Determination
          </h1>

          {/* Author Metadata */}
          <div className="flex flex-col md:flex-row items-center gap-6 py-8 justify-center md:justify-start" style={{
            borderTop: '1px solid #E5E7EB',
            borderBottom: '1px solid #E5E7EB'
          }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-garamond font-bold text-xl" style={{ backgroundColor: '#012169' }}>
                AT
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-widest mb-0.5" style={{ color: '#9CA3AF' }}>
                  Author
                </span>
                <span className="font-bold text-sm" style={{ color: '#012169' }}>
                  Anatolii Trembach, Esq.
                </span>
              </div>
            </div>

            <div className="hidden md:block w-px h-10" style={{ backgroundColor: '#E5E7EB' }}></div>

            <div className="flex flex-col text-center md:text-left">
              <span className="text-[10px] uppercase tracking-widest mb-0.5" style={{ color: '#9CA3AF' }}>
                Published
              </span>
              <span className="font-bold text-sm" style={{ color: '#012169' }}>
                November 17, 2025
              </span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="max-w-[800px] mx-auto px-6">
          <div className="prose prose-lg max-w-none selection:bg-soft-teal" style={{ color: '#374151' }}>
            <h2 className="font-garamond font-bold mb-5" style={{
              fontSize: '28px',
              lineHeight: '1.3',
              color: '#012169'
            }}>
              Introduction
            </h2>

            <p className="mb-5" style={{
              fontSize: '17px',
              lineHeight: '1.75',
              color: '#374151'
            }}>
              Tariff classification under the Harmonized Tariff Schedule (HTS) determines the duty rate applied to imported merchandise. With over 17,000 tariff classifications and duty rates ranging from zero to over 30%, correct classification significantly impacts import costs. Classification disputes between importers and U.S. Customs and Border Protection (CBP) commonly arise when CBP disagrees with an importer's declared HTS classification. This article provides strategic guidance for importers facing CBP classification determinations and explores the available administrative and judicial remedies.
            </p>

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
          </div>
        </div>

        {/* Footer / Disclaimer */}
        <div className="max-w-[800px] mx-auto px-6 mt-20 mb-32">
          <div className="p-6 rounded-sm" style={{
            backgroundColor: '#F9FAFB',
            borderLeft: '4px solid #E5E7EB'
          }}>
            <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
              <strong style={{ color: '#374151' }}>Disclaimer:</strong> This article is provided for informational purposes only and does not constitute legal advice. International trade laws are complex and subject to change. Readers should consult qualified customs counsel regarding their specific situations before taking action.
            </p>
          </div>
        </div>
      </article>

      {/* Evaluation CTA */}
      <EvaluationForm theme="light" />
    </>
  );
};

export default ArticleDisplayPage;
