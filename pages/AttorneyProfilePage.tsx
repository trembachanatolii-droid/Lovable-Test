
import React, { lazy, Suspense, useEffect } from 'react';

import { useMeta } from '../hooks/useMeta';
import { generatePersonSchema } from '../utils/structuredData';
import { siteConfig } from '../config/siteConfig';
import { generateBreadcrumbSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const AttorneyProfilePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO Meta Tags and Person Schema
  useMeta({
    title: 'Anatolii Trembach | CA Trade & Customs Attorney',
    description: 'California international trade attorney. USC Law LL.M. Former law enforcement. Expert in CBP defense, customs audits, ITAR/EAR export controls.',
    canonical: '#attorney-profile',
    ogType: 'profile',
    ogImage: `${siteConfig.siteUrl}/og-image-attorney.jpg`,
    ogImageAlt: 'Anatolii Trembach - California International Trade & Customs Attorney',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    twitterCard: 'summary_large_image',
    schema: [
      generatePersonSchema(),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Attorney Profile', url: `${siteConfig.siteUrl}/attorney-profile` }
      ])
    ],
  });

  return (
    <div className="pt-20 font-montserrat text-neutral-darkGray">
      {/* Hero Section - Dark overlay for optimal text visibility */}
      <section className="relative w-full py-32 px-6 text-center overflow-hidden flex flex-col justify-center min-h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
           <img
             src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=2070&auto=format&fit=crop"
             alt="Anatolii Trembach - California international trade and customs attorney with expertise in CBP defense and import law"
             className="w-full h-full object-cover"
             loading="eager"
             decoding="async"
             width="2070"
             height="1380"
           />
           {/* Overlay with 55% opacity for better text visibility */}
           <div className="absolute inset-0" style={{backgroundColor: 'rgba(1, 33, 105, 0.55)'}}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-garamond mb-6 tracking-tight leading-tight" style={{color: '#ffffff', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 40px rgba(1, 33, 105, 0.5)'}}>
            Anatolii Trembach
          </h1>
          <p className="text-xl md:text-2xl font-medium tracking-wide uppercase mb-4" style={{color: '#ffffff', textShadow: '0 2px 6px rgba(0, 0, 0, 0.8), 0 4px 12px rgba(0, 0, 0, 0.5)'}}>
            International Trade & Customs Attorney
          </p>
          <div className="w-24 h-1 bg-secondary-teal mx-auto mt-6"></div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 py-20">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-6 border-l-4 border-secondary-teal pl-4">
            Counsel for Importers & Exporters
          </h2>
          <p className="text-lg leading-relaxed text-text-secondary mb-6">
            Our founder is Anatolii Trembach, who counsels importers, exporters, and customs brokers on minimizing compliance risks and navigating complex U.S. Customs and Border Protection regulations. Companies throughout California and nationwide turn to Mr. Trembach for representation in customs enforcement matters, including CBP audits, investigations, penalty cases, merchandise detentions, and trade compliance disputes.
          </p>
        </section>

        {/* Dual Perspective - The Hook */}
        <section className="mb-16 bg-neutral-lightGray -mx-6 px-6 py-12 md:rounded-2xl md:mx-0">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-6">
            A Unique Dual Perspective: From Special Agent to Defense Attorney
          </h2>
          <p className="text-lg leading-relaxed text-text-secondary mb-6">
            Mr. Trembach brings a unique dual perspective to international trade law, having worked on both sides of customs enforcement. Before practicing law in the United States, he served as a criminal detective and special agent with Ukraine's Security Service (SBU), Ukraine's equivalent to the FBI, where he investigated international trade law violations, customs fraud, smuggling operations, and cross-border enforcement matters. He witnessed firsthand how government agencies detect violations, build enforcement cases, and pursue penalties against importers and exporters.
          </p>
          <p className="text-lg leading-relaxed text-text-secondary mb-6">
            During his law enforcement career in Ukraine, Mr. Trembach rose to the highest position for a detective by his fourth year, demonstrating exceptional investigative skills and legal expertise in international trade enforcement. His experience investigating customs violations, trade fraud, and cross-border criminal activity provided him with deep insight into how government agencies approach enforcement actions, what evidence they seek, and how they build cases against importers and exporters.
          </p>
          <p className="text-lg leading-relaxed text-text-secondary">
            Mr. Trembach understands how both government enforcement and defense strategies operate. He uses that insider knowledge from his background as a criminal detective and special agent investigating trade violations to anticipate CBP's tactics, identify compliance vulnerabilities before they become enforcement actions, and secure favorable results for businesses navigating U.S. customs regulations.
          </p>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-6 border-l-4 border-secondary-teal pl-4">
            Education
          </h2>
          <p className="text-lg leading-relaxed text-text-secondary mb-6">
            Mr. Trembach received both his bachelor's degree and master's degree in law with honors from the National Law University of Ukraine, one of Ukraine's top three law schools and the country's premier institution for legal education.
          </p>
          <p className="text-lg leading-relaxed text-text-secondary">
            After moving to the United States, Mr. Trembach earned his Master of Laws degree from the University of Southern California Gould School of Law, one of the nation's top law schools. Transitioning from government enforcement to defense practice, he now represents the other side—importers, exporters, and businesses facing customs scrutiny from U.S. Customs and Border Protection.
          </p>
        </section>

        {/* Practice Focus */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-6 border-l-4 border-secondary-teal pl-4">
            Practice Focus
          </h2>
          <p className="text-lg leading-relaxed text-text-secondary mb-6">
            Mr. Trembach's practice focuses on defending companies against customs penalties under 19 U.S.C. Section 1592, representing clients in CBP audit proceedings, challenging tariff classifications and customs valuations, advising on trade compliance program development, and counseling businesses on import and export regulatory matters. He has successfully resolved enforcement actions through prior disclosure submissions, penalty mitigation negotiations, and strategic compliance corrections.
          </p>
        </section>

        {/* Recognition & Admissions */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-6 border-l-4 border-secondary-teal pl-4">
            Admissions & Recognition
          </h2>
          <div className="bg-white border border-border-subtle p-8 rounded-xl shadow-sm">
            <p className="text-lg leading-relaxed text-text-secondary mb-4">
              <strong className="text-primary-navy">Recognized as a 2026 Rising Star by Super Lawyers</strong>, Mr. Trembach is licensed to practice in California and federal law nationwide. He provides legal services in English, Ukrainian, and Russian, serving businesses with global supply chains across California and the United States.
            </p>
            <p className="text-lg leading-relaxed text-text-secondary">
              Mr. Trembach is a member of the California State Bar (State Bar #349304) and maintains an active practice representing importers, exporters, customs brokers, freight forwarders, and international businesses in customs and international trade matters throughout California and nationwide. He serves clients from his office in Calabasas, California, handling matters in all California counties and federal jurisdictions throughout the United States.
            </p>
          </div>
        </section>
      </article>

      {/* Evaluation Form - Teal theme for contrast against white page bottom */}
      <Suspense fallback={<div style={{ minHeight: '600px', background: 'transparent' }} aria-label="Loading form" />}>
        <EvaluationForm theme="light" />
      </Suspense>
    </div>
  );
};

export default AttorneyProfilePage;
