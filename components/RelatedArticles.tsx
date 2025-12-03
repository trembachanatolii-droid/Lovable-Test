import React, { memo } from 'react';
import { getArticlePreviews } from '../data/articlesLoader';

interface RelatedArticlesProps {
  currentArticleId: string;
  maxArticles?: number;
}

// Topic cluster mapping (from our analysis)
const topicClusters: Record<string, { pillar: string; pillarTitle: string; articles: string[] }> = {
  'customs_defense': {
    pillar: 'customs-defense-litigation',
    pillarTitle: 'Customs Defense & Litigation',
    articles: [
      "scotus-ieepa-tariff-challenge-november-2025",
      "tariff-classification", "cbp-focused-assessments", "customs-penalties-1592",
      "customs-valuation", "antidumping-cvd", "isf-compliance", "us-cit-litigation",
      "liquidated-damages", "post-entry-compliance", "section-321-reform-california",
      "cbp-seizure-forfeiture-defense", "hts-classification-california-technology-imports",
      "customs-valuation-transfer-pricing-defense", "country-of-origin-marking-requirements-california",
      "first-sale-valuation-california-importers", "cbp-informed-compliance-letters-california",
      "royalty-license-fee-treatment-customs-valuation", "assists-tooling-charges-california-customs-valuation",
      "customs-broker-liability-vs-importer-liability-california", "cbp-reconciliation-procedures-california",
      "entry-type-selection-strategy-california", "section-1592-penalties-california-defense",
      "cbp-focused-assessment-survival-guide-california", "prior-disclosure-timing-strategies-california",
      "reasonable-care-standard-california-importers", "liquidated-damages-defense-california",
      "cbp-seizure-forfeiture-defense-california", "false-claims-act-whistleblower-defense-california",
      "cbp-targeting-exams-california-ports", "customs-bond-requirements-california-importers",
      "cbp-isf-violations-penalties-california", "fta-verification-defense-california",
      "gsp-revocation-impact-california", "uflpa-detention-response-california-apparel",
      "wro-defense-strategies-california", "ad-cvd-order-compliance-california",
      "eapa-investigations-defense-california", "circumvention-allegations-defense-california",
      "california-food-import-fda-usda-compliance", "e-commerce-section-321-california",
      "pharmaceutical-import-compliance-california"
    ]
  },
  'export_controls': {
    pillar: 'export-controls-sanctions',
    pillarTitle: 'Export Controls & Sanctions',
    articles: [
      "itar-compliance", "ofac-sanctions", "isf-compliance", "ear-compliance",
      "deemed-export-compliance-california", "hts-classification-california-technology-imports",
      "customs-broker-liability-vs-importer-liability-california", "itar-registration-requirements-california",
      "ear-export-licensing-california-tech", "ofac-sanctions-screening-procedures-california",
      "encryption-export-controls-california", "dual-use-export-classification-california",
      "voluntary-self-disclosure-export-violations-california", "export-controls-semiconductors-california",
      "california-wine-export-compliance"
    ]
  },
  'trade_compliance': {
    pillar: 'regulatory-compliance-advisory',
    pillarTitle: 'Regulatory Compliance & Advisory',
    articles: [
      "section-301-maritime-tariffs-california-ports-2025",
      "usmca-rules-of-origin", "section-301-tariffs", "c-tpat-certification",
      "foreign-trade-zones", "customs-broker-liability", "free-trade-agreements",
      "drawback-claims", "customs-broker-liability-vs-importer-liability-california",
      "cbp-reconciliation-procedures-california", "cbp-isf-violations-penalties-california",
      "usmca-rules-origin-california-manufacturers", "usmca-certification-self-certification-california",
      "usmca-automotive-rules-california-manufacturers", "korus-fta-qualification-california-importers",
      "textiles-cafta-dr-compliance-california", "chile-fta-california-wine-exports",
      "fta-verification-defense-california", "gsp-revocation-impact-california",
      "section-201-safeguard-tariffs-california", "california-wine-export-compliance"
    ]
  },
  'uflpa_esg': {
    pillar: 'supply-chain-esg-compliance-guide',
    pillarTitle: 'Supply Chain ESG & UFLPA Compliance',
    articles: [
      "uflpa-enforcement-surge-2025-california",
      "forced-labor-compliance", "uflpa-compliance-california", "section-321-reform-california",
      "uflpa-detention-response-california-apparel", "uflpa-entity-list-monitoring-california",
      "uflpa-solar-panel-imports-california", "uflpa-electronics-imports-california",
      "wro-defense-strategies-california", "forced-labor-due-diligence-programs-california",
      "e-commerce-section-321-california"
    ]
  }
};

const RelatedArticles: React.FC<RelatedArticlesProps> = memo(({ currentArticleId, maxArticles = 4 }) => {
  // Find which cluster(s) this article belongs to
  const articleClusters: string[] = [];
  for (const [clusterKey, clusterData] of Object.entries(topicClusters)) {
    if (clusterData.articles.includes(currentArticleId)) {
      articleClusters.push(clusterKey);
    }
  }

  if (articleClusters.length === 0) {
    return null;
  }

  // Get primary cluster (first match)
  const primaryCluster = articleClusters[0];
  const clusterData = topicClusters[primaryCluster];

  // Get related articles from the same cluster (excluding current article)
  const relatedArticleIds = clusterData.articles
    .filter(id => id !== currentArticleId)
    .slice(0, maxArticles);

  // Use lightweight previews instead of full articles for better performance
  const articlePreviews = getArticlePreviews();
  const relatedArticles = relatedArticleIds
    .map(id => articlePreviews.find(a => a.id === id))
    .filter(Boolean);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="bg-neutral-50 py-16 px-6 mt-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-secondary-teal/10 px-4 py-2 rounded-full mb-4">
            <span className="text-secondary-teal font-semibold text-sm uppercase tracking-wide">
              {clusterData.pillarTitle}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-garamond text-primary-navy mb-4">
            Related Articles
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-6">
            Continue exploring {clusterData.pillarTitle.toLowerCase()} topics with these in-depth articles
          </p>

          {/* Link to Pillar Page */}
          <a
            href={`#${clusterData.pillar}`}
            className="inline-flex items-center gap-2 text-secondary-teal hover:text-primary-navy font-semibold transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            View all {clusterData.pillarTitle} services
          </a>
        </div>

        {/* Related Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedArticles.map((article) => (
            <a
              key={article!.id}
              href={`#article/${article!.id}`}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-neutral-200 group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-teal/10 flex items-center justify-center group-hover:bg-secondary-teal/20 group-focus-visible:bg-secondary-teal/20 transition-colors">
                    <svg className="w-5 h-5 text-secondary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-primary-navy mb-2 font-garamond group-hover:text-secondary-teal group-focus-visible:text-secondary-teal transition-colors leading-tight">
                  {article!.title}
                </h3>

                <p className="text-sm text-text-secondary line-clamp-3 leading-relaxed">
                  {article!.subheading}
                </p>

                <div className="mt-4 flex items-center text-secondary-teal text-sm font-semibold group-hover:gap-2 group-focus-visible:gap-2 transition-all">
                  Read Article
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 group-focus-visible:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View More Link */}
        {clusterData.articles.length > maxArticles && (
          <div className="text-center mt-8">
            <a
              href="#news"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary-navy text-primary-navy font-semibold rounded-md hover:bg-primary-navy hover:text-white transition-all duration-300"
            >
              View All Articles
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
});

RelatedArticles.displayName = 'RelatedArticles';

export default RelatedArticles;
