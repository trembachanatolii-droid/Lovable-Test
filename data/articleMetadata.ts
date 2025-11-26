// Article metadata with publication dates and reading times
// Dates range from October 21, 2025 to November 26, 2025
// Reading times calculated based on actual article word count (225 words/minute)

export interface ArticleMetadataItem {
  date: string;        // Display format: "NOVEMBER 26, 2025"
  isoDate: string;     // ISO format: "2025-11-26"
  readTime: string;    // Display format: "5 MIN READ"
}

export const articleMetadata: Record<string, ArticleMetadataItem> = {
  'tariff-classification': { date: 'NOVEMBER 26, 2025', isoDate: '2025-11-26', readTime: '5 MIN READ' },
  'cbp-focused-assessments': { date: 'NOVEMBER 26, 2025', isoDate: '2025-11-26', readTime: '6 MIN READ' },
  'usmca-rules-of-origin': { date: 'NOVEMBER 25, 2025', isoDate: '2025-11-25', readTime: '5 MIN READ' },
  'section-301-tariffs': { date: 'NOVEMBER 25, 2025', isoDate: '2025-11-25', readTime: '6 MIN READ' },
  'customs-penalties-1592': { date: 'NOVEMBER 24, 2025', isoDate: '2025-11-24', readTime: '6 MIN READ' },
  'customs-valuation': { date: 'NOVEMBER 24, 2025', isoDate: '2025-11-24', readTime: '5 MIN READ' },
  'c-tpat-certification': { date: 'NOVEMBER 23, 2025', isoDate: '2025-11-23', readTime: '5 MIN READ' },
  'itar-compliance': { date: 'NOVEMBER 23, 2025', isoDate: '2025-11-23', readTime: '6 MIN READ' },
  'ofac-sanctions': { date: 'NOVEMBER 22, 2025', isoDate: '2025-11-22', readTime: '6 MIN READ' },
  'antidumping-cvd': { date: 'NOVEMBER 22, 2025', isoDate: '2025-11-22', readTime: '7 MIN READ' },
  'isf-compliance': { date: 'NOVEMBER 21, 2025', isoDate: '2025-11-21', readTime: '6 MIN READ' },
  'foreign-trade-zones': { date: 'NOVEMBER 21, 2025', isoDate: '2025-11-21', readTime: '7 MIN READ' },
  'customs-broker-liability': { date: 'NOVEMBER 20, 2025', isoDate: '2025-11-20', readTime: '5 MIN READ' },
  'free-trade-agreements': { date: 'NOVEMBER 20, 2025', isoDate: '2025-11-20', readTime: '5 MIN READ' },
  'us-cit-litigation': { date: 'NOVEMBER 19, 2025', isoDate: '2025-11-19', readTime: '5 MIN READ' },
  'forced-labor-compliance': { date: 'NOVEMBER 19, 2025', isoDate: '2025-11-19', readTime: '5 MIN READ' },
  'ear-compliance': { date: 'NOVEMBER 18, 2025', isoDate: '2025-11-18', readTime: '5 MIN READ' },
  'liquidated-damages': { date: 'NOVEMBER 18, 2025', isoDate: '2025-11-18', readTime: '6 MIN READ' },
  'drawback-claims': { date: 'NOVEMBER 17, 2025', isoDate: '2025-11-17', readTime: '8 MIN READ' },
  'post-entry-compliance': { date: 'NOVEMBER 17, 2025', isoDate: '2025-11-17', readTime: '8 MIN READ' },
  'uflpa-compliance-california': { date: 'NOVEMBER 16, 2025', isoDate: '2025-11-16', readTime: '6 MIN READ' },
  'section-321-reform-california': { date: 'NOVEMBER 16, 2025', isoDate: '2025-11-16', readTime: '6 MIN READ' },
  'cbp-seizure-forfeiture-defense': { date: 'NOVEMBER 15, 2025', isoDate: '2025-11-15', readTime: '12 MIN READ' },
  'deemed-export-compliance-california': { date: 'NOVEMBER 15, 2025', isoDate: '2025-11-15', readTime: '15 MIN READ' },
  'hts-classification-california-technology-imports': { date: 'NOVEMBER 14, 2025', isoDate: '2025-11-14', readTime: '10 MIN READ' },
  'customs-valuation-transfer-pricing-defense': { date: 'NOVEMBER 14, 2025', isoDate: '2025-11-14', readTime: '6 MIN READ' },
  'country-of-origin-marking-requirements-california': { date: 'NOVEMBER 13, 2025', isoDate: '2025-11-13', readTime: '6 MIN READ' },
  'first-sale-valuation-california-importers': { date: 'NOVEMBER 13, 2025', isoDate: '2025-11-13', readTime: '6 MIN READ' },
  'cbp-informed-compliance-letters-california': { date: 'NOVEMBER 12, 2025', isoDate: '2025-11-12', readTime: '10 MIN READ' },
  'royalty-license-fee-treatment-customs-valuation': { date: 'NOVEMBER 12, 2025', isoDate: '2025-11-12', readTime: '7 MIN READ' },
  'assists-tooling-charges-california-customs-valuation': { date: 'NOVEMBER 11, 2025', isoDate: '2025-11-11', readTime: '11 MIN READ' },
  'customs-broker-liability-vs-importer-liability-california': { date: 'NOVEMBER 11, 2025', isoDate: '2025-11-11', readTime: '10 MIN READ' },
  'cbp-reconciliation-procedures-california': { date: 'NOVEMBER 10, 2025', isoDate: '2025-11-10', readTime: '9 MIN READ' },
  'entry-type-selection-strategy-california': { date: 'NOVEMBER 10, 2025', isoDate: '2025-11-10', readTime: '10 MIN READ' },
  'section-1592-penalties-california-defense': { date: 'NOVEMBER 9, 2025', isoDate: '2025-11-09', readTime: '7 MIN READ' },
  'cbp-focused-assessment-survival-guide-california': { date: 'NOVEMBER 9, 2025', isoDate: '2025-11-09', readTime: '6 MIN READ' },
  'prior-disclosure-timing-strategies-california': { date: 'NOVEMBER 8, 2025', isoDate: '2025-11-08', readTime: '7 MIN READ' },
  'reasonable-care-standard-california-importers': { date: 'NOVEMBER 8, 2025', isoDate: '2025-11-08', readTime: '7 MIN READ' },
  'liquidated-damages-defense-california': { date: 'NOVEMBER 7, 2025', isoDate: '2025-11-07', readTime: '16 MIN READ' },
  'cbp-seizure-forfeiture-defense-california': { date: 'NOVEMBER 7, 2025', isoDate: '2025-11-07', readTime: '6 MIN READ' },
  'false-claims-act-whistleblower-defense-california': { date: 'NOVEMBER 6, 2025', isoDate: '2025-11-06', readTime: '6 MIN READ' },
  'cbp-targeting-exams-california-ports': { date: 'NOVEMBER 6, 2025', isoDate: '2025-11-06', readTime: '8 MIN READ' },
  'customs-bond-requirements-california-importers': { date: 'NOVEMBER 5, 2025', isoDate: '2025-11-05', readTime: '6 MIN READ' },
  'cbp-isf-violations-penalties-california': { date: 'NOVEMBER 5, 2025', isoDate: '2025-11-05', readTime: '6 MIN READ' },
  'usmca-rules-origin-california-manufacturers': { date: 'NOVEMBER 4, 2025', isoDate: '2025-11-04', readTime: '6 MIN READ' },
  'usmca-certification-self-certification-california': { date: 'NOVEMBER 4, 2025', isoDate: '2025-11-04', readTime: '9 MIN READ' },
  'usmca-automotive-rules-california-manufacturers': { date: 'NOVEMBER 3, 2025', isoDate: '2025-11-03', readTime: '6 MIN READ' },
  'korus-fta-qualification-california-importers': { date: 'NOVEMBER 3, 2025', isoDate: '2025-11-03', readTime: '6 MIN READ' },
  'textiles-cafta-dr-compliance-california': { date: 'NOVEMBER 2, 2025', isoDate: '2025-11-02', readTime: '7 MIN READ' },
  'chile-fta-california-wine-exports': { date: 'NOVEMBER 2, 2025', isoDate: '2025-11-02', readTime: '8 MIN READ' },
  'fta-verification-defense-california': { date: 'NOVEMBER 1, 2025', isoDate: '2025-11-01', readTime: '7 MIN READ' },
  'gsp-revocation-impact-california': { date: 'NOVEMBER 1, 2025', isoDate: '2025-11-01', readTime: '15 MIN READ' },
  'itar-registration-requirements-california': { date: 'OCTOBER 31, 2025', isoDate: '2025-10-31', readTime: '6 MIN READ' },
  'ear-export-licensing-california-tech': { date: 'OCTOBER 31, 2025', isoDate: '2025-10-31', readTime: '6 MIN READ' },
  'ofac-sanctions-screening-procedures-california': { date: 'OCTOBER 30, 2025', isoDate: '2025-10-30', readTime: '6 MIN READ' },
  'encryption-export-controls-california': { date: 'OCTOBER 30, 2025', isoDate: '2025-10-30', readTime: '7 MIN READ' },
  'dual-use-export-classification-california': { date: 'OCTOBER 29, 2025', isoDate: '2025-10-29', readTime: '6 MIN READ' },
  'voluntary-self-disclosure-export-violations-california': { date: 'OCTOBER 29, 2025', isoDate: '2025-10-29', readTime: '7 MIN READ' },
  'export-controls-semiconductors-california': { date: 'OCTOBER 28, 2025', isoDate: '2025-10-28', readTime: '7 MIN READ' },
  'uflpa-detention-response-california-apparel': { date: 'OCTOBER 28, 2025', isoDate: '2025-10-28', readTime: '8 MIN READ' },
  'uflpa-entity-list-monitoring-california': { date: 'OCTOBER 27, 2025', isoDate: '2025-10-27', readTime: '6 MIN READ' },
  'uflpa-solar-panel-imports-california': { date: 'OCTOBER 27, 2025', isoDate: '2025-10-27', readTime: '5 MIN READ' },
  'uflpa-electronics-imports-california': { date: 'OCTOBER 26, 2025', isoDate: '2025-10-26', readTime: '5 MIN READ' },
  'wro-defense-strategies-california': { date: 'OCTOBER 26, 2025', isoDate: '2025-10-26', readTime: '19 MIN READ' },
  'forced-labor-due-diligence-programs-california': { date: 'OCTOBER 25, 2025', isoDate: '2025-10-25', readTime: '6 MIN READ' },
  'ad-cvd-order-compliance-california': { date: 'OCTOBER 25, 2025', isoDate: '2025-10-25', readTime: '8 MIN READ' },
  'eapa-investigations-defense-california': { date: 'OCTOBER 24, 2025', isoDate: '2025-10-24', readTime: '6 MIN READ' },
  'section-201-safeguard-tariffs-california': { date: 'OCTOBER 24, 2025', isoDate: '2025-10-24', readTime: '6 MIN READ' },
  'circumvention-allegations-defense-california': { date: 'OCTOBER 23, 2025', isoDate: '2025-10-23', readTime: '6 MIN READ' },
  'california-food-import-fda-usda-compliance': { date: 'OCTOBER 23, 2025', isoDate: '2025-10-23', readTime: '7 MIN READ' },
  'e-commerce-section-321-california': { date: 'OCTOBER 22, 2025', isoDate: '2025-10-22', readTime: '9 MIN READ' },
  'california-wine-export-compliance': { date: 'OCTOBER 22, 2025', isoDate: '2025-10-22', readTime: '5 MIN READ' },
  'pharmaceutical-import-compliance-california': { date: 'OCTOBER 21, 2025', isoDate: '2025-10-21', readTime: '5 MIN READ' },
};

// Helper function to get metadata for an article
export const getArticleMetadata = (articleId: string): ArticleMetadataItem | undefined => {
  return articleMetadata[articleId];
};

// Helper to format date for display (Title Case)
export const formatDateForDisplay = (date: string): string => {
  // Convert "NOVEMBER 26, 2025" to "November 26, 2025"
  return date
    .toLowerCase()
    .split(' ')
    .map((word, index) => index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
    .join(' ');
};

// Get category based on article ID (simplified mapping)
export const getArticleCategory = (articleId: string): string => {
  const categoryMap: Record<string, string> = {
    // Customs Litigation
    'tariff-classification': 'CUSTOMS LITIGATION',
    'customs-penalties-1592': 'CUSTOMS LITIGATION',
    'section-1592-penalties-california-defense': 'CUSTOMS LITIGATION',
    'us-cit-litigation': 'CUSTOMS LITIGATION',
    'liquidated-damages': 'CUSTOMS LITIGATION',
    'liquidated-damages-defense-california': 'CUSTOMS LITIGATION',

    // Compliance Audits
    'cbp-focused-assessments': 'COMPLIANCE AUDITS',
    'cbp-focused-assessment-survival-guide-california': 'COMPLIANCE AUDITS',
    'post-entry-compliance': 'COMPLIANCE AUDITS',
    'reasonable-care-standard-california-importers': 'COMPLIANCE AUDITS',
    'cbp-reconciliation-procedures-california': 'COMPLIANCE AUDITS',
    'cbp-informed-compliance-letters-california': 'COMPLIANCE AUDITS',

    // Trade Policy
    'section-301-tariffs': 'TRADE POLICY',
    'section-321-reform-california': 'TRADE POLICY',
    'section-201-safeguard-tariffs-california': 'TRADE POLICY',
    'gsp-revocation-impact-california': 'TRADE POLICY',
    'e-commerce-section-321-california': 'TRADE POLICY',

    // Customs Enforcement
    'cbp-seizure-forfeiture-defense': 'CUSTOMS ENFORCEMENT',
    'cbp-seizure-forfeiture-defense-california': 'CUSTOMS ENFORCEMENT',
    'cbp-targeting-exams-california-ports': 'CUSTOMS ENFORCEMENT',
    'cbp-isf-violations-penalties-california': 'CUSTOMS ENFORCEMENT',
    'isf-compliance': 'CUSTOMS ENFORCEMENT',
    'prior-disclosure-timing-strategies-california': 'CUSTOMS ENFORCEMENT',

    // Trade Agreements
    'usmca-rules-of-origin': 'TRADE AGREEMENTS',
    'free-trade-agreements': 'TRADE AGREEMENTS',
    'usmca-rules-origin-california-manufacturers': 'TRADE AGREEMENTS',
    'usmca-certification-self-certification-california': 'TRADE AGREEMENTS',
    'usmca-automotive-rules-california-manufacturers': 'TRADE AGREEMENTS',
    'korus-fta-qualification-california-importers': 'TRADE AGREEMENTS',
    'textiles-cafta-dr-compliance-california': 'TRADE AGREEMENTS',
    'chile-fta-california-wine-exports': 'TRADE AGREEMENTS',
    'fta-verification-defense-california': 'TRADE AGREEMENTS',

    // Export Controls
    'itar-compliance': 'EXPORT CONTROLS',
    'ear-compliance': 'EXPORT CONTROLS',
    'itar-registration-requirements-california': 'EXPORT CONTROLS',
    'ear-export-licensing-california-tech': 'EXPORT CONTROLS',
    'encryption-export-controls-california': 'EXPORT CONTROLS',
    'dual-use-export-classification-california': 'EXPORT CONTROLS',
    'voluntary-self-disclosure-export-violations-california': 'EXPORT CONTROLS',
    'export-controls-semiconductors-california': 'EXPORT CONTROLS',
    'deemed-export-compliance-california': 'EXPORT CONTROLS',

    // Sanctions Compliance
    'ofac-sanctions': 'SANCTIONS COMPLIANCE',
    'ofac-sanctions-screening-procedures-california': 'SANCTIONS COMPLIANCE',

    // UFLPA / Forced Labor
    'forced-labor-compliance': 'UFLPA COMPLIANCE',
    'uflpa-compliance-california': 'UFLPA COMPLIANCE',
    'uflpa-detention-response-california-apparel': 'UFLPA COMPLIANCE',
    'uflpa-entity-list-monitoring-california': 'UFLPA COMPLIANCE',
    'uflpa-solar-panel-imports-california': 'UFLPA COMPLIANCE',
    'uflpa-electronics-imports-california': 'UFLPA COMPLIANCE',
    'wro-defense-strategies-california': 'UFLPA COMPLIANCE',
    'forced-labor-due-diligence-programs-california': 'UFLPA COMPLIANCE',

    // Trade Remedies
    'antidumping-cvd': 'TRADE REMEDIES',
    'ad-cvd-order-compliance-california': 'TRADE REMEDIES',
    'eapa-investigations-defense-california': 'TRADE REMEDIES',
    'circumvention-allegations-defense-california': 'TRADE REMEDIES',

    // Customs Valuation
    'customs-valuation': 'CUSTOMS VALUATION',
    'customs-valuation-transfer-pricing-defense': 'CUSTOMS VALUATION',
    'first-sale-valuation-california-importers': 'CUSTOMS VALUATION',
    'royalty-license-fee-treatment-customs-valuation': 'CUSTOMS VALUATION',
    'assists-tooling-charges-california-customs-valuation': 'CUSTOMS VALUATION',

    // Classification
    'hts-classification-california-technology-imports': 'TARIFF CLASSIFICATION',
    'country-of-origin-marking-requirements-california': 'TARIFF CLASSIFICATION',

    // Entry & Bonds
    'entry-type-selection-strategy-california': 'ENTRY PROCEDURES',
    'customs-bond-requirements-california-importers': 'CUSTOMS BONDS',
    'drawback-claims': 'DUTY DRAWBACK',

    // Other
    'c-tpat-certification': 'SUPPLY CHAIN SECURITY',
    'foreign-trade-zones': 'FOREIGN TRADE ZONES',
    'customs-broker-liability': 'BROKER LIABILITY',
    'customs-broker-liability-vs-importer-liability-california': 'BROKER LIABILITY',
    'false-claims-act-whistleblower-defense-california': 'LITIGATION',
    'california-food-import-fda-usda-compliance': 'REGULATORY COMPLIANCE',
    'california-wine-export-compliance': 'EXPORT COMPLIANCE',
    'pharmaceutical-import-compliance-california': 'REGULATORY COMPLIANCE',
  };

  return categoryMap[articleId] || 'TRADE LAW';
};
