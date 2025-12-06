import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { NewsArticle } from '../types';
import { useMeta } from '../hooks/useMeta';
import { generateWebPageSchema, generateFAQSchema, generateLocalBusinessSchema } from '../utils/seo';
import { siteConfig } from '../config/siteConfig';
import { getArticlePreviews } from '../data/articlesLoader';
import { articleMetadata } from '../data/articleMetadata';
import NewsArticleCard from '../components/NewsArticleCard';
import PracticeAreasSection from '../components/PracticeAreasSection';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';
import StaticHero from '../components/StaticHero';

// Lazy load below-the-fold components to reduce initial bundle
const JusticePillars = lazy(() => import('../components/JusticePillars'));
const StatsSection = lazy(() => import('../components/StatsSection'));
const AboutSection = lazy(() => import('../components/AboutSection'));
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

// Get the latest 5 articles by date (using lightweight previews)
// This function is now called inside the component to avoid blocking module load
const getLatestArticles = (): NewsArticle[] => {
  // Get article previews (lightweight, no full content)
  const previews = getArticlePreviews();

  // Filter to only include articles that have metadata
  const articlesWithMetadata = previews
    .filter(preview => articleMetadata[preview.id])
    .map(preview => ({
      preview,
      metadata: articleMetadata[preview.id]
    }));

  // Sort by isoDate descending (latest first)
  articlesWithMetadata.sort((a, b) =>
    b.metadata.isoDate.localeCompare(a.metadata.isoDate)
  );

  // Take top 5 and map to NewsArticle format
  return articlesWithMetadata.slice(0, 5).map((item, index) => ({
    id: index + 1,
    date: item.metadata.date.split(' ').map((word, i) =>
      i === 0 ? word.charAt(0) + word.slice(1).toLowerCase() : word
    ).join(' '), // Convert "NOVEMBER 26, 2025" to "November 26, 2025"
    title: item.preview.title,
    description: item.preview.intro,
    linkHref: `/article/${item.preview.id}`,
    readTime: item.metadata.readTime.toLowerCase().replace(' min', ' min'),
  }));
};

const practiceAreasPreviewData = [
  {
    title: 'Retaliatory Tariffs Assistance',
    slug: 'retaliatory-tariffs',
  },
  {
    title: 'Customs Valuation',
    slug: 'customs-valuation',
  },
  {
    title: 'Duty Drawback',
    slug: 'duty-drawback',
  },
  {
    title: 'Country of Origin',
    slug: 'country-of-origin',
  },
  {
    title: 'Trade Litigation',
    slug: 'trade-litigation',
  },
];

const HomePage: React.FC = () => {
  // Defer article processing to avoid blocking initial render
  // Start with empty array, populate after first paint using requestIdleCallback
  const [newsArticlesData, setNewsArticlesData] = useState<NewsArticle[]>([]);

  // Defer schema generation to avoid blocking initial render
  // Start with empty array, populate after first paint using requestIdleCallback
  const [schemaData, setSchemaData] = useState<Record<string, unknown>[]>([]);

  // Defer expensive article processing until after first paint
  useEffect(() => {
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const timer = requestIdleCallback(() => {
        setNewsArticlesData(getLatestArticles());
      });
      return () => cancelIdleCallback(timer);
    } else {
      // Fallback for environments without requestIdleCallback
      const timer = setTimeout(() => {
        setNewsArticlesData(getLatestArticles());
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  // Defer expensive schema generation until after first paint
  useEffect(() => {
    const generateSchemas = () => {
      setSchemaData([
        generateLocalBusinessSchema(),
        generateWebPageSchema({
          title: 'Trembach Law Firm | California International Trade Attorney',
          description: 'Premier California international trade attorney and customs lawyer providing expert legal counsel for import/export compliance, CBP defense, and global trade strategy.',
          url: `${siteConfig.siteUrl}/`,
        }),
        generateFAQSchema([
          {
            question: 'What is a California international trade attorney?',
            answer: 'A California international trade attorney is a lawyer specializing in federal and international laws governing import/export activities, customs compliance, trade regulations, and cross-border transactions. They handle CBP defense, customs audits, ITAR/EAR compliance, OFAC sanctions, tariff classification, and trade litigation for California businesses engaged in international commerce.',
          },
          {
            question: 'When do I need a customs attorney in California?',
            answer: 'You need a California customs attorney when facing CBP audits (Focused Assessments), customs investigations, penalty assessments, import seizures or detentions, classification or valuation disputes, prior disclosure filing, False Claims Act allegations, or when establishing import/export compliance programs for your California business.',
          },
          {
            question: 'What does CBP investigation defense involve?',
            answer: 'CBP investigation defense involves representing importers/exporters during U.S. Customs and Border Protection investigations, responding to CF-28/CF-29 notices, defending against penalty assessments, mitigating liquidated damages, handling customs fraud allegations, and protecting your rights during CBP audits and enforcement actions.',
          },
          {
            question: 'What are ITAR and EAR compliance requirements?',
            answer: 'ITAR (International Traffic in Arms Regulations) governs defense articles and services exports, while EAR (Export Administration Regulations) covers dual-use items and commercial products. California companies exporting controlled technology, software, or equipment must obtain proper export licenses, classify items correctly, screen restricted parties, and maintain detailed compliance records.',
          },
          {
            question: 'How can trade compliance programs help my California business?',
            answer: 'Trade compliance programs establish policies, procedures, and internal controls to ensure your California business complies with customs and export regulations. They include import/export compliance protocols, record-keeping systems, employee training, risk assessments, and audit readiness - minimizing penalty exposure and facilitating smooth international trade operations.',
          },
        ]),
        // Speakable schema for voice search optimization
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.hero h1', '.hero-subtitle', '#services-heading'],
          },
        },
      ]);
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const timer = requestIdleCallback(generateSchemas);
      return () => cancelIdleCallback(timer);
    } else {
      // Fallback for environments without requestIdleCallback
      const timer = setTimeout(generateSchemas, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  // SEO Meta Tags and Open Graph - Optimized for Main Hub Keywords
  useMeta({
    title: 'California Tariff Lawyer | Customs Attorney Calabasas',
    description: 'California tariff lawyer & customs attorney. CBP defense, tariff classification, customs audits, trade compliance. Serving CA. (310) 744-1328.',
    keywords: 'tariff lawyer california, customs attorney calabasas, international trade attorney, tariff classification attorney, CBP defense lawyer, customs audit attorney, import export lawyer california, trade compliance attorney, calabasas trade lawyer',
    canonical: '',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-home.jpg`,
    ogImageAlt: 'Trembach Law Firm - California Tariff Lawyer & Customs Attorney',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    twitterCard: 'summary_large_image',
    schema: schemaData,
  });

  return (
    <main>
      {/* Hero Section with Globe */}
      <StaticHero />

      {/* Our Practice Areas Section - Responsive Design */}
      <section
        id="practice-areas-preview"
        aria-labelledby="practice-areas-heading"
        className="practice-areas-preview"
      >
        <div className="practice-areas-preview__container">
          {/* Decorative Line - Centered on entire section */}
          <div className="practice-areas-preview__line"></div>

          <div className="practice-areas-preview__content">
            {/* Left Column - Heading & Description */}
            <div className="practice-areas-preview__left">
              <h2
                id="practice-areas-heading"
                className="practice-areas-preview__heading"
              >
                High-Risk Customs Problems That Can't Wait
              </h2>
              <p className="practice-areas-preview__description">
                If you're dealing with any of these issues, deadlines are short and penalties can be severe. We step in quickly to protect your shipments and your business.
              </p>
            </div>

            {/* Right Column - Practice Areas List */}
            <div className="practice-areas-preview__right">
              <div className="practice-areas-preview__list">
                {practiceAreasPreviewData.map((area) => (
                  <div key={area.slug} className="practice-areas-preview__item">
                    <Link
                      to={`/practice-areas?slug=${area.slug}`}
                      className="practice-areas-preview__link group"
                      aria-label={`Learn more about ${area.title}`}
                    >
                      {/* Green Triangle with White Arrow */}
                      <div className="triangle-slide">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="white"
                          className="triangle-slide__icon"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                      <h3 className="practice-areas-preview__item-title">
                        {area.title}
                      </h3>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      {/* Lazy loaded below-the-fold sections for better performance */}
      <Suspense fallback={<LoadingSpinner minHeight="400px" />}>
        <JusticePillars />
      </Suspense>
      <Suspense fallback={<LoadingSpinner minHeight="300px" />}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner minHeight="400px" />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner minHeight="600px" />}>
        <PracticeAreasSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner minHeight="500px" />}>
        <EvaluationForm />
      </Suspense>

      {/* California Service Areas & Industries */}
      <section className="py-20 px-6 bg-neutral-50" aria-labelledby="service-areas-heading">
        <div className="max-w-[1200px] mx-auto">
          <h2 id="service-areas-heading" className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Serving California & Nationwide
          </h2>
          <div className="w-24 h-1 bg-secondary-teal mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* California Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/contact" className="service-link">
                    <span className="service-link__title">Calabasas Office (HQ)</span>
                    <p className="service-link__description">Tariff lawyer & customs attorney</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/los-angeles-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Los Angeles Tariff Lawyer</span>
                    <p className="service-link__description">Port of LA & Long Beach customs</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/bay-area-trade-law-attorney" className="service-link">
                    <span className="service-link__title">San Francisco & Bay Area</span>
                    <p className="service-link__description">Port of Oakland, Silicon Valley</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <p className="text-sm text-text-secondary mt-4 italic">
                Serving all California cities by appointment
              </p>
            </div>

            {/* Industry Expertise */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Industry Expertise</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/technology-electronics-trade-attorney" className="service-link">
                    <span className="service-link__title">Technology & Electronics</span>
                    <p className="service-link__description">Export controls, Section 301</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/apparel-textiles-trade-attorney" className="service-link">
                    <span className="service-link__title">Apparel & Textiles</span>
                    <p className="service-link__description">UFLPA, origin compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/food-agriculture-trade-attorney" className="service-link">
                    <span className="service-link__title">Food & Agriculture</span>
                    <p className="service-link__description">FDA/USDA import compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Helpful Resources */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Tariffs Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/uflpa-compliance-guide" className="service-link">
                    <span className="service-link__title">UFLPA Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/tariff-classification-guide" className="service-link">
                    <span className="service-link__title">Tariff Classification Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/faq" className="service-link">
                    <span className="service-link__title">FAQ Center</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/glossary" className="service-link">
                    <span className="service-link__title">Trade Law Glossary</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section id="news-section" className="bg-white" aria-labelledby="news-heading" style={{ overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '1376px', margin: '0 auto', padding: '4rem 1.25rem' }}>
          <div className="w-20 h-1 bg-primary-navy mx-auto mb-6"></div>
          <h2 id="news-heading" style={{
            fontSize: '2.5rem',
            fontFamily: 'Georgia, serif',
            fontWeight: 700,
            color: 'var(--navy-primary)',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>Recent News</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {newsArticlesData.map((article) => (
              <NewsArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Button variant="outlined" href="/news">View All News</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
