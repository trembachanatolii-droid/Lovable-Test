import React, { lazy, Suspense } from 'react';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import NewsArticleCard from '../components/NewsArticleCard';
import PracticeAreasSection from '../components/PracticeAreasSection';
import Button from '../components/Button';

// Lazy load below-the-fold components to reduce initial bundle
const JusticePillars = lazy(() => import('../components/JusticePillars'));
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
import type { NewsArticle } from '../types';
import { useMeta } from '../hooks/useMeta';
import { generateWebPageSchema, generateFAQSchema } from '../utils/seo';
import { siteConfig } from '../config/siteConfig';

const newsArticlesData: NewsArticle[] = [
  {
    id: 1,
    date: 'November 20, 2025',
    title: 'UFLPA Compliance for California Importers: Navigating the Rebuttable Presumption',
    description: 'Comprehensive guide to the Uyghur Forced Labor Prevention Act covering CBP evidence requirements, detention defense strategies, and supply chain due diligence for California businesses importing from China.',
    linkHref: '#article/uflpa-compliance-california',
    readTime: '12 min read',
  },
  {
    id: 2,
    date: 'November 20, 2025',
    title: 'Section 321 De Minimis Reform: What California E-Commerce Sellers Need to Know',
    description: 'Analysis of pending Section 321 reforms, CBP enforcement priorities, and strategic guidance for California online sellers preparing for potential exclusion of Chinese goods from duty-free treatment.',
    linkHref: '#article/section-321-reform-california',
    readTime: '10 min read',
  },
  {
    id: 3,
    date: 'November 17, 2025',
    title: 'Complete Guide to CBP Focused Assessments: What Importers Need to Know in 2025',
    description: 'Comprehensive guide to CBP Focused Assessments covering triggers, preparation, process, and defense strategies for importers facing customs audits in 2025.',
    linkHref: '#article/cbp-focused-assessments',
    readTime: '8 min read',
  },
];

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
  // SEO Meta Tags and Open Graph - Optimized for Main Hub Keywords
  useMeta({
    title: 'CA International Trade Attorney | Customs & Import Law',
    description: 'California international trade attorney & customs lawyer. CBP defense, trade compliance, import/export law for CA businesses. Free consultation: 631-746-8290.',
    canonical: '',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-home.jpg`,
    ogImageAlt: 'Trembach Law Firm - California International Trade & Customs Attorney',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    twitterCard: 'summary_large_image',
    schema: [
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
    ],
  });

  return (
    <main>
      {/* Hero Section with Port Harbor Background */}
      <section className="hero" aria-label="Hero">
        {/* Port Harbor Background Image */}
        <picture className="hero-bg">
          <img
            src="/images/hero-main.jpg"
            alt=""
            role="presentation"
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="hero-bg-image"
          />
        </picture>
        {/* Dark overlay for text contrast */}
        <div className="hero-overlay" aria-hidden="true"></div>

        <div className="container">
          <h1>International Trade & Customs Lawyer. Tariffs. Import. Export.</h1>
          <p className="hero-subtitle">
            Premier California-based import/export law firm serving businesses nationwide. Expert representation in CBP defense, trade compliance, customs audits, export controls, and global trade strategy. Protecting your business in the complex world of international trade law.
          </p>
          <a href="#contact" className="hero-cta" aria-label="Get free consultation with California trade attorney">Get Free Consultation</a>
        </div>
      </section>

      {/* Our Practice Areas Section - Holland & Knight Style */}
      <section
        id="practice-areas-preview"
        aria-labelledby="practice-areas-heading"
        style={{
          padding: '5rem 3rem',
          background: '#F8FAFC',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: '1376px', margin: '0 auto' }}>
          {/* Decorative Line - Centered on entire section */}
          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#012169',
            marginBottom: '3rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}></div>

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '0',
            alignItems: 'flex-start',
            position: 'relative'
          }}>
            {/* Left Column - Heading & Description */}
            <div style={{
              flex: '0 0 33%',
              maxWidth: '33%',
              paddingRight: '3rem',
              marginLeft: '90px'
            }}>
              <h2
                id="practice-areas-heading"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(2.25rem, 4vw, 3rem)',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  marginBottom: '2rem',
                  color: '#012169',
                  marginTop: 0
                }}
              >
                High-Risk Customs Problems That Can't Wait
              </h2>
              <p style={{
                fontSize: '1.0625rem',
                lineHeight: 1.5,
                color: '#4a5568',
                margin: 0,
                fontWeight: 400
              }}>
                If you're dealing with any of these issues, deadlines are short and penalties can be severe. We step in quickly to protect your shipments and your business.
              </p>
            </div>

            {/* Right Column - Practice Areas List */}
            <div style={{
              position: 'absolute',
              left: '50%',
              width: 'calc(32% + 150px)',
              overflow: 'hidden'
            }}>
              <div style={{
                borderTop: '1px solid #e2e8f0',
                overflow: 'hidden'
              }}>
                {practiceAreasPreviewData.map((area) => (
                  <div
                    key={area.slug}
                    style={{
                      borderBottom: '1px solid #e2e8f0',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <a
                      href={`#practice-areas?slug=${area.slug}`}
                      className="group"
                      style={{
                        display: 'block',
                        padding: '1.5rem 0',
                        color: '#012169',
                        textDecoration: 'none',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      aria-label={`Learn more about ${area.title}`}
                    >
                      {/* Green Triangle with White Arrow */}
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
                          willChange: 'right'
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="white"
                          style={{
                            width: '20px',
                            height: '20px',
                            position: 'absolute',
                            top: '20px',
                            right: '20px'
                          }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>

                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: 400,
                        lineHeight: 1.4,
                        color: '#012169',
                        margin: 0,
                        position: 'relative',
                        zIndex: 0,
                        paddingRight: '1.5rem',
                        maxWidth: '90%'
                      }}>
                        {area.title}
                      </h3>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <JusticePillars />
      </Suspense>
      <StatsSection />
      <AboutSection />
      <Suspense fallback={<div style={{ minHeight: '600px' }} />}>
        <PracticeAreasSection />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '500px' }} />}>
        <EvaluationForm />
      </Suspense>

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
            <Button variant="outlined" href="#news">View All News</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
