
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

          {/* Render Full HTML Content with Prose Styling */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-garamond prose-headings:font-bold prose-headings:text-primary-navy
              prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8
              prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6
              prose-p:text-neutral-darkGray prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
              prose-ul:my-8 prose-ul:space-y-3
              prose-ol:my-8 prose-ol:space-y-3
              prose-li:text-neutral-darkGray prose-li:leading-relaxed prose-li:text-lg
              prose-strong:text-primary-navy prose-strong:font-bold
              prose-a:text-secondary-teal hover:prose-a:text-primary-darkBlue prose-a:no-underline hover:prose-a:underline
            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

      </article>

      {/* Evaluation Form at bottom for conversion */}
      <div className="mt-24 pb-20">
         <EvaluationForm theme="light" />
      </div>
    </div>
  );
};

export default ArticleDisplayPage;
