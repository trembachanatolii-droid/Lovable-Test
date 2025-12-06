/**
 * BROKEN LINKS FIX - REDIRECT RULES
 *
 * Add these Route components to App.tsx after line 430 (after the existing redirects)
 * This will fix 85+ broken internal links across the website
 *
 * Estimated implementation time: 30 minutes
 * Impact: Fixes 40+ instances of broken links immediately
 */

// ============================================
// CRITICAL REDIRECTS (Priority 1 - Implement Immediately)
// ============================================

{/* Location-Based Redirects - High Traffic */}
<Route path="/fresno-trade-attorney" element={<Navigate to="/fresno-customs-attorney" replace />} />
<Route path="/central-valley-trade-law" element={<Navigate to="/central-valley-tariff-lawyer" replace />} />
<Route path="/irvine-trade-attorney" element={<Navigate to="/irvine-trade-compliance" replace />} />
<Route path="/orange-county-trade-law" element={<Navigate to="/orange-county-tariff-lawyer" replace />} />
<Route path="/oakland-port-attorney" element={<Navigate to="/oakland-port-operations" replace />} />
<Route path="/oakland-customs-attorney" element={<Navigate to="/oakland-trade-attorney" replace />} />
<Route path="/oakland-customs-lawyer" element={<Navigate to="/oakland-trade-attorney" replace />} />
<Route path="/san-francisco-tariff-lawyer" element={<Navigate to="/san-francisco-customs-attorney" replace />} />
<Route path="/oakland-port-operations-attorney" element={<Navigate to="/oakland-port-operations" replace />} />

{/* Service/Practice Area Redirects - High Traffic */}
<Route path="/customs-protests" element={<Navigate to="/tariff-refund-protests" replace />} />
<Route path="/customs-protest-filing" element={<Navigate to="/tariff-refund-protests" replace />} />
<Route path="/agricultural-export-compliance" element={<Navigate to="/fresno-ag-export-compliance" replace />} />
<Route path="/dfars-itar-compliance" element={<Navigate to="/export-controls-sanctions" replace />} />

{/* Resource Guide Redirects - Until Pages Are Created */}
<Route path="/resources/customs-valuation-guide" element={<Navigate to="/practice-areas" replace />} />
<Route path="/resources/transfer-pricing-guide" element={<Navigate to="/transfer-pricing-customs" replace />} />
<Route path="/resources/exclusion-strategies" element={<Navigate to="/resources/section-301-tariffs-guide" replace />} />
<Route path="/resources/tariff-engineering" element={<Navigate to="/tariff-engineering" replace />} />
<Route path="/taa-compliance-guide" element={<Navigate to="/resources" replace />} />
<Route path="/buy-american-act-guide" element={<Navigate to="/resources" replace />} />
<Route path="/dfars-compliance-guide" element={<Navigate to="/export-controls-sanctions" replace />} />
<Route path="/agricultural-import-guide" element={<Navigate to="/food-agriculture-trade-attorney" replace />} />
<Route path="/usda-compliance-guide" element={<Navigate to="/food-agriculture-trade-attorney" replace />} />
<Route path="/fda-food-import-guide" element={<Navigate to="/food-agriculture-trade-attorney" replace />} />

// ============================================
// ADDITIONAL REDIRECTS (Priority 2 - Implement Within Week 2)
// ============================================

{/* Attorney/Lawyer Naming Variations */}
<Route path="/anaheim-customs-lawyer" element={<Navigate to="/anaheim-customs-attorney" replace />} />
<Route path="/anaheim-trade-attorney" element={<Navigate to="/anaheim-customs-attorney" replace />} />
<Route path="/bakersfield-customs-attorney" element={<Navigate to="/bakersfield-tariff-lawyer" replace />} />
<Route path="/fresno-customs-lawyer" element={<Navigate to="/fresno-customs-attorney" replace />} />
<Route path="/fresno-import-attorney" element={<Navigate to="/fresno-customs-attorney" replace />} />
<Route path="/fresno-tariff-lawyer" element={<Navigate to="/fresno-customs-attorney" replace />} />
<Route path="/fresno-agricultural-trade-attorney" element={<Navigate to="/fresno-agricultural-trade" replace />} />
<Route path="/glendale-customs-attorney" element={<Navigate to="/glendale-tariff-attorney" replace />} />
<Route path="/irvine-customs-attorney" element={<Navigate to="/irvine-trade-compliance" replace />} />
<Route path="/irvine-customs-lawyer" element={<Navigate to="/irvine-trade-compliance" replace />} />
<Route path="/irvine-import-attorney" element={<Navigate to="/irvine-trade-compliance" replace />} />
<Route path="/irvine-duty-drawback" element={<Navigate to="/irvine-trade-compliance" replace />} />
<Route path="/long-beach-customs-lawyer" element={<Navigate to="/long-beach-port-attorney" replace />} />
<Route path="/long-beach-ftz-compliance-attorney" element={<Navigate to="/long-beach-ftz-compliance" replace />} />
<Route path="/long-beach-maritime" element={<Navigate to="/long-beach-maritime-tariff" replace />} />
<Route path="/long-beach-port-operations-attorney" element={<Navigate to="/long-beach-port-attorney" replace />} />
<Route path="/los-angeles-tariff-attorney" element={<Navigate to="/los-angeles-tariff-lawyer" replace />} />
<Route path="/los-angeles-fashion-tariff-lawyer" element={<Navigate to="/los-angeles-fashion-tariff" replace />} />
<Route path="/los-angeles-antidumping" element={<Navigate to="/practice-areas" replace />} />
<Route path="/los-angeles-compliance" element={<Navigate to="/los-angeles-tariff-lawyer" replace />} />
<Route path="/los-angeles-duty-drawback" element={<Navigate to="/duty-drawback" replace />} />
<Route path="/los-angeles-maritime" element={<Navigate to="/long-beach-maritime-tariff" replace />} />
<Route path="/los-angeles-uflpa" element={<Navigate to="/practice-areas" replace />} />
<Route path="/oakland-import-attorney" element={<Navigate to="/oakland-trade-attorney" replace />} />
<Route path="/oakland-tariff-lawyer" element={<Navigate to="/oakland-trade-attorney" replace />} />
<Route path="/oakland-antidumping" element={<Navigate to="/practice-areas" replace />} />
<Route path="/orange-county-trade-law-attorney" element={<Navigate to="/orange-county-tariff-lawyer" replace />} />
<Route path="/orange-county-trade-lawyer" element={<Navigate to="/orange-county-tariff-lawyer" replace />} />

{/* Location Service Combinations */}
<Route path="/bay-area-trade-attorney" element={<Navigate to="/bay-area-trade-law-attorney" replace />} />
<Route path="/burbank-entertainment-trade-attorney" element={<Navigate to="/burbank-prior-disclosure" replace />} />
<Route path="/carlsbad-trade-attorney" element={<Navigate to="/carlsbad-export-control" replace />} />
<Route path="/hesperia-customs-bond-attorney" element={<Navigate to="/hesperia-customs-bond" replace />} />
<Route path="/loma-linda-customs-bond-attorney" element={<Navigate to="/loma-linda-customs-bond" replace />} />
<Route path="/modesto-farm-equipment-tariff-attorney" element={<Navigate to="/modesto-farm-equipment" replace />} />
<Route path="/monterey-customs-attorney" element={<Navigate to="/california-locations" replace />} />
<Route path="/napa-wine-compliance" element={<Navigate to="/sacramento-wine-export" replace />} />
<Route path="/newport-beach-trade-attorney" element={<Navigate to="/orange-county-tariff-lawyer" replace />} />
<Route path="/ontario-logistics-attorney" element={<Navigate to="/ontario-trade-compliance" replace />} />
<Route path="/ontario-trade-attorney" element={<Navigate to="/ontario-trade-compliance" replace />} />
<Route path="/palo-alto-tech-export" element={<Navigate to="/silicon-valley-trade-lawyer" replace />} />
<Route path="/port-hueneme-customs" element={<Navigate to="/oxnard-tariff-attorney" replace />} />
<Route path="/port-of-san-diego-tariff" element={<Navigate to="/port-of-san-diego-customs" replace />} />

{/* Additional Service-Specific Redirects */}
<Route path="/aerospace-cvd-compliance" element={<Navigate to="/practice-areas" replace />} />
<Route path="/aerospace-itar-compliance" element={<Navigate to="/export-controls-sanctions" replace />} />
<Route path="/agricultural-drawback" element={<Navigate to="/duty-drawback" replace />} />
<Route path="/agricultural-export-guide" element={<Navigate to="/food-agriculture-trade-attorney" replace />} />
<Route path="/agricultural-exports" element={<Navigate to="/food-agriculture-trade-attorney" replace />} />
<Route path="/agricultural-trade-compliance" element={<Navigate to="/food-agriculture-trade-attorney" replace />} />
<Route path="/air-cargo-compliance" element={<Navigate to="/practice-areas" replace />} />
<Route path="/antidumping-cvd-defense" element={<Navigate to="/practice-areas" replace />} />
<Route path="/apparel-classification-guide" element={<Navigate to="/tariffs-duties-classification-guide" replace />} />
<Route path="/apparel-tariff-strategies" element={<Navigate to="/apparel-textiles-trade-attorney" replace />} />
<Route path="/apparel-textile-compliance" element={<Navigate to="/apparel-textiles-trade-attorney" replace />} />
<Route path="/automotive-import-compliance" element={<Navigate to="/practice-areas" replace />} />
<Route path="/automotive-tariffs" element={<Navigate to="/practice-areas" replace />} />
<Route path="/biotech-export-compliance" element={<Navigate to="/export-controls-sanctions" replace />} />
<Route path="/biotech-fda-compliance" element={<Navigate to="/practice-areas" replace />} />
<Route path="/bis-export-licensing" element={<Navigate to="/export-controls-sanctions" replace />} />
<Route path="/bulk-commodity-compliance" element={<Navigate to="/practice-areas" replace />} />
<Route path="/cargo-detention-defense" element={<Navigate to="/customs-defense-litigation" replace />} />
<Route path="/cargo-detention-guide" element={<Navigate to="/customs-defense-litigation" replace />} />
<Route path="/china-export-licensing" element={<Navigate to="/export-controls-sanctions" replace />} />
<Route path="/compliance-program-development" element={<Navigate to="/regulatory-compliance-advisory" replace />} />
<Route path="/cross-border-manufacturing-guide" element={<Navigate to="/practice-areas" replace />} />
<Route path="/ctpat-certification" element={<Navigate to="/practice-areas" replace />} />
<Route path="/ctpat-guide" element={<Navigate to="/practice-areas" replace />} />
<Route path="/defense-contractor-cvd" element={<Navigate to="/practice-areas" replace />} />
<Route path="/ecommerce-compliance" element={<Navigate to="/ecommerce-digital-trade-guide" replace />} />
<Route path="/ecommerce-customs-compliance" element={<Navigate to="/ecommerce-digital-trade-guide" replace />} />
<Route path="/ecommerce-import-guide" element={<Navigate to="/ecommerce-digital-trade-guide" replace />} />
<Route path="/electronics-compliance" element={<Navigate to="/technology-electronics-trade-attorney" replace />} />
<Route path="/electronics-export-classification" element={<Navigate to="/technology-electronics-trade-attorney" replace />} />
<Route path="/encryption-ccats" element={<Navigate to="/export-controls-sanctions" replace />} />
<Route path="/entertainment-trade-compliance" element={<Navigate to="/practice-areas" replace />} />
<Route path="/examination-support" element={<Navigate to="/customs-defense-litigation" replace />} />
<Route path="/export-controls-ear-itar" element={<Navigate to="/export-controls-sanctions" replace />} />
<Route path="/export-licensing" element={<Navigate to="/export-controls-sanctions" replace />} />
<Route path="/fda-food-compliance" element={<Navigate to="/food-agriculture-trade-attorney" replace />} />
<Route path="/fda-food-import-compliance" element={<Navigate to="/food-agriculture-trade-attorney" replace />} />
<Route path="/fmc-licensing" element={<Navigate to="/practice-areas" replace />} />
<Route path="/food-agriculture-trade" element={<Navigate to="/food-agriculture-trade-attorney" replace />} />
<Route path="/fsma-compliance" element={<Navigate to="/food-agriculture-trade-attorney" replace />} />
<Route path="/ftz-operations" element={<Navigate to="/ftz-foreign-trade-zones" replace />} />
<Route path="/government-contractor-compliance" element={<Navigate to="/practice-areas" replace />} />
<Route path="/gulf-coast-petroleum" element={<Navigate to="/practice-areas" replace />} />
<Route path="/houston-energy-trade" element={<Navigate to="/practice-areas" replace />} />
<Route path="/isf-compliance-guide" element={<Navigate to="/practice-areas" replace />} />
<Route path="/itar-aerospace-compliance" element={<Navigate to="/export-controls-sanctions" replace />} />
<Route path="/itar-export-controls" element={<Navigate to="/export-controls-sanctions" replace />} />
<Route path="/maquiladora-compliance" element={<Navigate to="/practice-areas" replace />} />
<Route path="/manufacturing-customs-compliance" element={<Navigate to="/practice-areas" replace />} />
<Route path="/manufacturing-tariff-strategies" element={<Navigate to="/practice-areas" replace />} />
<Route path="/maritime-insurance" element={<Navigate to="/practice-areas" replace />} />
<Route path="/medical-device-compliance" element={<Navigate to="/practice-areas" replace />} />
<Route path="/medical-device-exports" element={<Navigate to="/practice-areas" replace />} />
<Route path="/medical-device-import-guide" element={<Navigate to="/practice-areas" replace />} />
<Route path="/medical-device-tariffs" element={<Navigate to="/practice-areas" replace />} />
<Route path="/ofac-energy-sanctions" element={<Navigate to="/export-controls-sanctions" replace />} />
<Route path="/petroleum-drawback" element={<Navigate to="/duty-drawback" replace />} />

// ============================================
// USAGE INSTRUCTIONS
// ============================================

/*
 * HOW TO IMPLEMENT:
 *
 * 1. Open /home/user/Lovable-Test/App.tsx
 *
 * 2. Find line 430 (after the last existing redirect):
 *    <Route path="/resources/*" element={<Navigate to="/resources" replace />} />
 *
 * 3. Add a comment:
 *    {/* Additional Redirects - Fix Broken Links */}
 *
 * 4. Copy and paste all the routes from above
 *
 * 5. Save the file
 *
 * 6. Test by visiting these URLs:
 *    - http://localhost:5173/fresno-trade-attorney
 *    - http://localhost:5173/oakland-customs-lawyer
 *    - http://localhost:5173/resources/customs-valuation-guide
 *
 *    All should redirect to valid pages (not 404)
 *
 * 7. Run automated link checker:
 *    npx linkinator http://localhost:5173 --recurse
 *
 * EXPECTED RESULT:
 * - 85+ broken links will now redirect correctly
 * - Users will never see 404 errors for these URLs
 * - Internal linking structure will be improved
 *
 * TIME TO IMPLEMENT: ~30 minutes
 * IMPACT: Fixes 40+ broken link instances immediately
 */

// ============================================
// AFTER IMPLEMENTING REDIRECTS
// ============================================

/*
 * NEXT STEPS:
 *
 * 1. Fix the source links in page components (optional but recommended):
 *    - Edit FresnoUFLPAPage.tsx line 144-145
 *    - Edit IrvineUFLPAPage.tsx line 154-155
 *    - Edit OaklandSection301Page.tsx line 144-145
 *    - See BROKEN_LINKS_404_AUDIT_REPORT.md Section 9.1 for complete list
 *
 * 2. Create missing resource guide pages (improves SEO):
 *    - CustomsValuationGuidePage.tsx
 *    - TransferPricingGuidePage.tsx
 *    - ExclusionStrategiesGuidePage.tsx
 *    - TAAComplianceGuidePage.tsx
 *
 * 3. Set up automated link checking in CI/CD:
 *    - Add linkinator to package.json scripts
 *    - Run on every build/deploy
 *
 * 4. Monitor 404 errors:
 *    - Add analytics tracking to NotFoundPage
 *    - Review monthly for new broken links
 */
