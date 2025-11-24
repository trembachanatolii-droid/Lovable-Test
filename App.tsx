
import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load all page components for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfUsePage = lazy(() => import('./pages/TermsOfUsePage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PracticeAreasPage = lazy(() => import('./pages/PracticeAreasPage'));
const AttorneyProfilePage = lazy(() => import('./pages/AttorneyProfilePage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const UsefulLinksPage = lazy(() => import('./pages/UsefulLinksPage'));
const ArticleDisplayPage = lazy(() => import('./pages/ArticleDisplayPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const GeneralApplicationPage = lazy(() => import('./pages/GeneralApplicationPage'));
const AttorneyAdvertisingPage = lazy(() => import('./pages/AttorneyAdvertisingPage'));
const LosAngelesPortPage = lazy(() => import('./pages/LosAngelesPortPage'));
const BayAreaTradeLawPage = lazy(() => import('./pages/BayAreaTradeLawPage'));
const CustomsDefensePage = lazy(() => import('./pages/CustomsDefensePage'));
const RegulatoryCompliancePage = lazy(() => import('./pages/RegulatoryCompliancePage'));
const ExportControlsPage = lazy(() => import('./pages/ExportControlsPage'));
const TariffsClassificationGuidePage = lazy(() => import('./pages/TariffsClassificationGuidePage'));
const SupplyChainESGGuidePage = lazy(() => import('./pages/SupplyChainESGGuidePage'));
const EcommerceDigitalTradeGuidePage = lazy(() => import('./pages/EcommerceDigitalTradeGuidePage'));
const ResourcesHubPage = lazy(() => import('./pages/ResourcesHubPage'));
const SuccessStoriesPage = lazy(() => import('./pages/SuccessStoriesPage'));
const GlossaryPage = lazy(() => import('./pages/GlossaryPage'));
const TechnologyElectronicsIndustryPage = lazy(() => import('./pages/TechnologyElectronicsIndustryPage'));
const ApparelTextilesIndustryPage = lazy(() => import('./pages/ApparelTextilesIndustryPage'));
const FoodAgricultureIndustryPage = lazy(() => import('./pages/FoodAgricultureIndustryPage'));
const FAQCenterPage = lazy(() => import('./pages/FAQCenterPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Loading fallback component
const PageLoader: React.FC = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    fontSize: '1.125rem',
    color: '#012169'
  }}>
    Loading...
  </div>
);

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      // Normalize hash: remove '#' and trailing slash if any
      // Note: We keep query parameters for logic below
      let route = hash.replace(/^#\/?/, '');
      
      // If route is empty, default to home
      if (!route) route = '';
      
      setCurrentRoute(route);
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  let content;
  
  // Dynamic route matching
  if (currentRoute.startsWith('article/')) {
    const articleId = currentRoute.split('/')[1];
    content = <ArticleDisplayPage articleId={articleId} />;
  } else if (currentRoute.startsWith('careers/apply')) {
    content = <GeneralApplicationPage />;
  } else {
    // Basic route matching (ignoring query params for these basic pages if any accidentally existed)
    const cleanRoute = currentRoute.split('?')[0].replace(/\/$/, '');

    switch (cleanRoute) {
      case '':
        content = <HomePage />;
        break;
      case 'privacy-policy':
        content = <PrivacyPolicyPage />;
        break;
      case 'terms':
        content = <TermsOfUsePage />;
        break;
      case 'disclaimers':
        content = <LegalPage title="Disclaimers" />;
        break;
      case 'attorney-advertising':
        content = <AttorneyAdvertisingPage />;
        break;
      case 'contact':
        content = <ContactPage />;
        break;
      case 'about':
        content = <AboutPage />;
        break;
      case 'practice-areas':
        content = <PracticeAreasPage />;
        break;
      case 'attorney-profile':
        content = <AttorneyProfilePage />;
        break;
      case 'useful-links':
        content = <UsefulLinksPage />;
        break;
      case 'resources':
        content = <ResourcesHubPage />;
        break;
      case 'news':
        content = <NewsPage />;
        break;
      case 'careers':
        content = <CareersPage />;
        break;
      case 'los-angeles-port-customs-attorney':
        content = <LosAngelesPortPage />;
        break;
      case 'bay-area-trade-law-attorney':
        content = <BayAreaTradeLawPage />;
        break;
      case 'customs-defense-litigation':
        content = <CustomsDefensePage />;
        break;
      case 'regulatory-compliance-advisory':
        content = <RegulatoryCompliancePage />;
        break;
      case 'export-controls-sanctions':
        content = <ExportControlsPage />;
        break;
      case 'tariffs-duties-classification-guide':
        content = <TariffsClassificationGuidePage />;
        break;
      case 'supply-chain-esg-compliance-guide':
        content = <SupplyChainESGGuidePage />;
        break;
      case 'ecommerce-digital-trade-guide':
        content = <EcommerceDigitalTradeGuidePage />;
        break;
      case 'success-stories':
        content = <SuccessStoriesPage />;
        break;
      case 'trade-law-glossary':
        content = <GlossaryPage />;
        break;
      case 'technology-electronics-trade-attorney':
        content = <TechnologyElectronicsIndustryPage />;
        break;
      case 'apparel-textiles-trade-attorney':
        content = <ApparelTextilesIndustryPage />;
        break;
      case 'food-agriculture-trade-attorney':
        content = <FoodAgricultureIndustryPage />;
        break;
      case 'trade-law-faq':
        content = <FAQCenterPage />;
        break;
      default:
        // Show 404 page for unknown routes
        content = <NotFoundPage />;
        break;
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip Navigation Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-secondary-teal focus:text-white focus:rounded-md focus:font-semibold focus:shadow-lg"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: 0,
        }}
        onFocus={(e) => {
          e.currentTarget.style.position = 'fixed';
          e.currentTarget.style.width = 'auto';
          e.currentTarget.style.height = 'auto';
          e.currentTarget.style.padding = '0.75rem 1.5rem';
          e.currentTarget.style.margin = '1rem';
          e.currentTarget.style.overflow = 'visible';
          e.currentTarget.style.clip = 'auto';
        }}
        onBlur={(e) => {
          e.currentTarget.style.position = 'absolute';
          e.currentTarget.style.width = '1px';
          e.currentTarget.style.height = '1px';
          e.currentTarget.style.padding = '0';
          e.currentTarget.style.margin = '-1px';
          e.currentTarget.style.overflow = 'hidden';
          e.currentTarget.style.clip = 'rect(0, 0, 0, 0)';
        }}
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          {content}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;