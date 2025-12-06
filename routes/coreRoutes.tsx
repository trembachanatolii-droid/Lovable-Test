import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

// Core page lazy imports
const HomePage = lazy(() => import('../pages/HomePage'));
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage'));
const TermsOfUsePage = lazy(() => import('../pages/TermsOfUsePage'));
const LegalPage = lazy(() => import('../pages/LegalPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const PracticeAreasPage = lazy(() => import('../pages/PracticeAreasPage'));
const AttorneyProfilePage = lazy(() => import('../pages/AttorneyProfilePage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const UsefulLinksPage = lazy(() => import('../pages/UsefulLinksPage'));
const ArticleDisplayPage = lazy(() => import('../pages/ArticleDisplayPage'));
const CareersPage = lazy(() => import('../pages/CareersPage'));
const GeneralApplicationPage = lazy(() => import('../pages/GeneralApplicationPage'));
const AttorneyAdvertisingPage = lazy(() => import('../pages/AttorneyAdvertisingPage'));
const ResourcesHubPage = lazy(() => import('../pages/ResourcesHubPage'));
const GlossaryPage = lazy(() => import('../pages/GlossaryPage'));
const FAQCenterPage = lazy(() => import('../pages/FAQCenterPage'));
const ConsultationBookingPage = lazy(() => import('../pages/ConsultationBookingPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const CaliforniaLocationsPage = lazy(() => import('../pages/CaliforniaLocationsPage'));
const SearchResultsPage = lazy(() => import('../pages/SearchResultsPage'));

// Guide pages
const TariffsClassificationGuidePage = lazy(() => import('../pages/TariffsClassificationGuidePage'));
const SupplyChainESGGuidePage = lazy(() => import('../pages/SupplyChainESGGuidePage'));
const EcommerceDigitalTradeGuidePage = lazy(() => import('../pages/EcommerceDigitalTradeGuidePage'));
const Section301TariffsGuidePage = lazy(() => import('../pages/Section301TariffsGuidePage'));
const UFLPAComplianceGuidePage = lazy(() => import('../pages/UFLPAComplianceGuidePage'));

// Industry pages
const TechnologyElectronicsIndustryPage = lazy(() => import('../pages/TechnologyElectronicsIndustryPage'));
const ApparelTextilesIndustryPage = lazy(() => import('../pages/ApparelTextilesIndustryPage'));
const FoodAgricultureIndustryPage = lazy(() => import('../pages/FoodAgricultureIndustryPage'));

export const coreRoutes: RouteObject[] = [
  // Home Route
  { path: '/', element: <HomePage /> },

  // Legal & Policy Pages
  { path: '/privacy-policy', element: <PrivacyPolicyPage /> },
  { path: '/terms', element: <TermsOfUsePage /> },
  { path: '/disclaimers', element: <LegalPage title="Disclaimers" /> },
  { path: '/attorney-advertising', element: <AttorneyAdvertisingPage /> },

  // Core Pages
  { path: '/contact', element: <ContactPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/practice-areas', element: <PracticeAreasPage /> },
  { path: '/attorney-profile', element: <AttorneyProfilePage /> },
  { path: '/useful-links', element: <UsefulLinksPage /> },
  { path: '/resources', element: <ResourcesHubPage /> },
  { path: '/news', element: <NewsPage /> },
  { path: '/careers', element: <CareersPage /> },
  { path: '/careers/apply', element: <GeneralApplicationPage /> },

  // Dynamic Routes
  { path: '/article/:articleId', element: <ArticleDisplayPage /> },
  { path: '/search', element: <SearchResultsPage /> },

  // California Locations (multiple aliases)
  { path: '/california-locations', element: <CaliforniaLocationsPage /> },
  { path: '/california-offices', element: <CaliforniaLocationsPage /> },
  { path: '/california-ports', element: <CaliforniaLocationsPage /> },

  // Resource Guides
  { path: '/resources/tariffs-duties-classification', element: <TariffsClassificationGuidePage /> },
  { path: '/supply-chain-esg-compliance-guide', element: <SupplyChainESGGuidePage /> },
  { path: '/ecommerce-digital-trade-guide', element: <EcommerceDigitalTradeGuidePage /> },
  { path: '/resources/section-301-tariffs-guide', element: <Section301TariffsGuidePage /> },
  { path: '/resources/uflpa-compliance-guide', element: <UFLPAComplianceGuidePage /> },
  { path: '/glossary', element: <GlossaryPage /> },
  { path: '/faq', element: <FAQCenterPage /> },
  { path: '/trade-law-faq', element: <FAQCenterPage /> },
  { path: '/consultation-booking', element: <ConsultationBookingPage /> },

  // Industry Pages
  { path: '/industries/technology-electronics', element: <TechnologyElectronicsIndustryPage /> },
  { path: '/industries/apparel-textiles', element: <ApparelTextilesIndustryPage /> },
  { path: '/industries/food-agriculture', element: <FoodAgricultureIndustryPage /> },
];

export const notFoundRoute: RouteObject = {
  path: '*',
  element: <NotFoundPage />,
};
