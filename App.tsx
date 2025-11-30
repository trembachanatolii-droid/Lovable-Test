
import React, { useState, useEffect, lazy, Suspense, useTransition } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyPhoneButton from './components/StickyPhoneButton';
import ErrorBoundary from './components/ErrorBoundary';

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
const CalabasasCustomsAttorneyPage = lazy(() => import('./pages/CalabasasCustomsAttorneyPage'));
const CustomsDefensePage = lazy(() => import('./pages/CustomsDefensePage'));
const RegulatoryCompliancePage = lazy(() => import('./pages/RegulatoryCompliancePage'));
const ExportControlsPage = lazy(() => import('./pages/ExportControlsPage'));
const TariffsClassificationGuidePage = lazy(() => import('./pages/TariffsClassificationGuidePage'));
const SupplyChainESGGuidePage = lazy(() => import('./pages/SupplyChainESGGuidePage'));
const EcommerceDigitalTradeGuidePage = lazy(() => import('./pages/EcommerceDigitalTradeGuidePage'));
const ResourcesHubPage = lazy(() => import('./pages/ResourcesHubPage'));
const GlossaryPage = lazy(() => import('./pages/GlossaryPage'));
const TechnologyElectronicsIndustryPage = lazy(() => import('./pages/TechnologyElectronicsIndustryPage'));
const ApparelTextilesIndustryPage = lazy(() => import('./pages/ApparelTextilesIndustryPage'));
const FoodAgricultureIndustryPage = lazy(() => import('./pages/FoodAgricultureIndustryPage'));
const FAQCenterPage = lazy(() => import('./pages/FAQCenterPage'));
const ConsultationBookingPage = lazy(() => import('./pages/ConsultationBookingPage'));
const Section301TariffsGuidePage = lazy(() => import('./pages/Section301TariffsGuidePage'));
const UFLPAComplianceGuidePage = lazy(() => import('./pages/UFLPAComplianceGuidePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Location-specific pages - California cities and regions
const AnaheimCustomsAttorneyPage = lazy(() => import('./pages/AnaheimCustomsAttorneyPage'));
const AnaheimManufacturingTradePage = lazy(() => import('./pages/AnaheimManufacturingTradePage'));
const AntiochCustomsAttorneyPage = lazy(() => import('./pages/AntiochCustomsAttorneyPage'));
const BakersfieldOilEnergyTradePage = lazy(() => import('./pages/BakersfieldOilEnergyTradePage'));
const BakersfieldTariffLawyerPage = lazy(() => import('./pages/BakersfieldTariffLawyerPage'));
const CentralValleyTariffLawyerPage = lazy(() => import('./pages/CentralValleyTariffLawyerPage'));
const ChicoCustomsAttorneyPage = lazy(() => import('./pages/ChicoCustomsAttorneyPage'));
const ChulaVistaTariffLawyerPage = lazy(() => import('./pages/ChulaVistaTariffLawyerPage'));
const ConcordTariffLawyerPage = lazy(() => import('./pages/ConcordTariffLawyerPage'));
const CoronaTradeCompliancePage = lazy(() => import('./pages/CoronaTradeCompliancePage'));
const DalyCityCustomsAttorneyPage = lazy(() => import('./pages/DalyCityCustomsAttorneyPage'));
const FontanaTradeAttorneyPage = lazy(() => import('./pages/FontanaTradeAttorneyPage'));
const FremontCustomsAttorneyPage = lazy(() => import('./pages/FremontCustomsAttorneyPage'));
const FresnoAgExportCompliancePage = lazy(() => import('./pages/FresnoAgExportCompliancePage'));
const FresnoAgriculturalTradePage = lazy(() => import('./pages/FresnoAgriculturalTradePage'));
const FresnoCustomsAttorneyPage = lazy(() => import('./pages/FresnoCustomsAttorneyPage'));
const FullertonTariffAttorneyPage = lazy(() => import('./pages/FullertonTariffAttorneyPage'));
const GlendaleTariffAttorneyPage = lazy(() => import('./pages/GlendaleTariffAttorneyPage'));
const HaywardCustomsAttorneyPage = lazy(() => import('./pages/HaywardCustomsAttorneyPage'));
const HuntingtonBeachTariffLawyerPage = lazy(() => import('./pages/HuntingtonBeachTariffLawyerPage'));
const InlandEmpireCustomsAttorneyPage = lazy(() => import('./pages/InlandEmpireCustomsAttorneyPage'));
const IrvineTradeCompliancePage = lazy(() => import('./pages/IrvineTradeCompliancePage'));
const LancasterTradeAttorneyPage = lazy(() => import('./pages/LancasterTradeAttorneyPage'));
const LongBeachAntidumpingDefensePage = lazy(() => import('./pages/LongBeachAntidumpingDefensePage'));
const LongBeachDutyDrawbackPage = lazy(() => import('./pages/LongBeachDutyDrawbackPage'));
const LongBeachFTZCompliancePage = lazy(() => import('./pages/LongBeachFTZCompliancePage'));
const LongBeachMaritimeTariffPage = lazy(() => import('./pages/LongBeachMaritimeTariffPage'));
const LongBeachPortAttorneyPage = lazy(() => import('./pages/LongBeachPortAttorneyPage'));
const LosAngelesCBPAuditDefensePage = lazy(() => import('./pages/LosAngelesCBPAuditDefensePage'));
const LosAngelesFashionTariffPage = lazy(() => import('./pages/LosAngelesFashionTariffPage'));
const LosAngelesSection301Page = lazy(() => import('./pages/LosAngelesSection301Page'));
const LosAngelesTariffLawyerPage = lazy(() => import('./pages/LosAngelesTariffLawyerPage'));
const LosAngelesUSMCACertificationPage = lazy(() => import('./pages/LosAngelesUSMCACertificationPage'));
const ModestoCustomsAttorneyPage = lazy(() => import('./pages/ModestoCustomsAttorneyPage'));
const ModestoFarmEquipmentPage = lazy(() => import('./pages/ModestoFarmEquipmentPage'));
const MorenoValleyCustomsPage = lazy(() => import('./pages/MorenoValleyCustomsPage'));
const MurrietaTariffLawyerPage = lazy(() => import('./pages/MurrietaTariffLawyerPage'));
const OaklandCustomsBrokerPage = lazy(() => import('./pages/OaklandCustomsBrokerPage'));
const OaklandCustomsPenaltyPage = lazy(() => import('./pages/OaklandCustomsPenaltyPage'));
const OaklandMaritimeTradePage = lazy(() => import('./pages/OaklandMaritimeTradePage'));
const OaklandPortOperationsPage = lazy(() => import('./pages/OaklandPortOperationsPage'));
const OaklandTradeAttorneyPage = lazy(() => import('./pages/OaklandTradeAttorneyPage'));
const OceansideTariffAttorneyPage = lazy(() => import('./pages/OceansideTariffAttorneyPage'));
const OntarioTradeCompliancePage = lazy(() => import('./pages/OntarioTradeCompliancePage'));
const OrangeCountyTariffLawyerPage = lazy(() => import('./pages/OrangeCountyTariffLawyerPage'));
const OxnardTariffAttorneyPage = lazy(() => import('./pages/OxnardTariffAttorneyPage'));
const PalmdaleCustomsAttorneyPage = lazy(() => import('./pages/PalmdaleCustomsAttorneyPage'));
const PasadenaTariffLawyerPage = lazy(() => import('./pages/PasadenaTariffLawyerPage'));
const PortOfOaklandTariffPage = lazy(() => import('./pages/PortOfOaklandTariffPage'));
const PortOfSanDiegoCustomsPage = lazy(() => import('./pages/PortOfSanDiegoCustomsPage'));
const PortOfStocktonTradePage = lazy(() => import('./pages/PortOfStocktonTradePage'));
const RanchoCucamongaTariffLawyerPage = lazy(() => import('./pages/RanchoCucamongaTariffLawyerPage'));
const RiversideTariffAttorneyPage = lazy(() => import('./pages/RiversideTariffAttorneyPage'));
const RosevilleCustomsLawyerPage = lazy(() => import('./pages/RosevilleCustomsLawyerPage'));
const SacramentoTariffAttorneyPage = lazy(() => import('./pages/SacramentoTariffAttorneyPage'));
const SacramentoTradeCompliancePage = lazy(() => import('./pages/SacramentoTradeCompliancePage'));
const SacramentoValleyTradePage = lazy(() => import('./pages/SacramentoValleyTradePage'));
const SacramentoWineExportPage = lazy(() => import('./pages/SacramentoWineExportPage'));
const SalinasTariffLawyerPage = lazy(() => import('./pages/SalinasTariffLawyerPage'));
const SanDiegoCustomsLawyerPage = lazy(() => import('./pages/SanDiegoCustomsLawyerPage'));
const SanDiegoEcommerceTariffPage = lazy(() => import('./pages/SanDiegoEcommerceTariffPage'));
const SanDiegoPharmaImportPage = lazy(() => import('./pages/SanDiegoPharmaImportPage'));
const SanDiegoTradeLitigationPage = lazy(() => import('./pages/SanDiegoTradeLitigationPage'));
const SanDiegoUFLPACompliancePage = lazy(() => import('./pages/SanDiegoUFLPACompliancePage'));
const SanFernandoValleyTariffPage = lazy(() => import('./pages/SanFernandoValleyTariffPage'));
const SanFranciscoCustomsAttorneyPage = lazy(() => import('./pages/SanFranciscoCustomsAttorneyPage'));
const SanFranciscoExportControlsPage = lazy(() => import('./pages/SanFranciscoExportControlsPage'));
const SanFranciscoForcedLaborPage = lazy(() => import('./pages/SanFranciscoForcedLaborPage'));
const SanFranciscoPriorDisclosurePage = lazy(() => import('./pages/SanFranciscoPriorDisclosurePage'));
const SanFranciscoTechTradePage = lazy(() => import('./pages/SanFranciscoTechTradePage'));
const SanJoseCustomsLawyerPage = lazy(() => import('./pages/SanJoseCustomsLawyerPage'));
const SanJoseTechExportControlsPage = lazy(() => import('./pages/SanJoseTechExportControlsPage'));
const SantaAnaTradeAttorneyPage = lazy(() => import('./pages/SantaAnaTradeAttorneyPage'));
const SantaClaritaCustomsLawyerPage = lazy(() => import('./pages/SantaClaritaCustomsLawyerPage'));
const SantaRosaCustomsLawyerPage = lazy(() => import('./pages/SantaRosaCustomsLawyerPage'));
const SiliconValleyTradeLawyerPage = lazy(() => import('./pages/SiliconValleyTradeLawyerPage'));
const SouthernCaliforniaTariffLawyerPage = lazy(() => import('./pages/SouthernCaliforniaTariffLawyerPage'));
const StocktonAgTariffLawyerPage = lazy(() => import('./pages/StocktonAgTariffLawyerPage'));
const StocktonTariffLawyerPage = lazy(() => import('./pages/StocktonTariffLawyerPage'));
const SunnyvaleTechTradePage = lazy(() => import('./pages/SunnyvaleTechTradePage'));
const TemeculaTradeAttorneyPage = lazy(() => import('./pages/TemeculaTradeAttorneyPage'));
const TorranceTradeAttorneyPage = lazy(() => import('./pages/TorranceTradeAttorneyPage'));
const VallejoTariffAttorneyPage = lazy(() => import('./pages/VallejoTariffAttorneyPage'));
const VisaliaTariffLawyerPage = lazy(() => import('./pages/VisaliaTariffLawyerPage'));

// Loading fallback component with explicit height to prevent CLS
const PageLoader: React.FC = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
      fontSize: '1.125rem',
      color: '#012169'
    }}
    role="status"
    aria-live="polite"
    aria-label="Loading page content"
  >
    <span>Loading...</span>
  </div>
);

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      // Normalize hash: remove '#' and trailing slash if any
      // Note: We keep query parameters for logic below
      let route = hash.replace(/^#\/?/, '');

      // If route is empty, default to home
      if (!route) route = '';

      // Scroll to top of page when route changes
      window.scrollTo(0, 0);

      // Use startTransition to mark route updates as non-urgent
      // This allows React to keep the UI responsive during route changes
      startTransition(() => {
        setCurrentRoute(route);
      });
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [startTransition]);

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
      case 'calabasas-customs-attorney':
        content = <CalabasasCustomsAttorneyPage />;
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
      case 'schedule-consultation':
        content = <ConsultationBookingPage />;
        break;
      case 'resources/section-301-tariffs-guide':
        content = <Section301TariffsGuidePage />;
        break;
      case 'resources/uflpa-compliance-guide':
        content = <UFLPAComplianceGuidePage />;
        break;
      // Location-specific pages - California cities and regions
      case 'anaheim-customs-attorney':
        content = <AnaheimCustomsAttorneyPage />;
        break;
      case 'anaheim-manufacturing-trade':
        content = <AnaheimManufacturingTradePage />;
        break;
      case 'antioch-customs-attorney':
        content = <AntiochCustomsAttorneyPage />;
        break;
      case 'bakersfield-oil-energy-trade':
        content = <BakersfieldOilEnergyTradePage />;
        break;
      case 'bakersfield-tariff-lawyer':
        content = <BakersfieldTariffLawyerPage />;
        break;
      case 'central-valley-tariff-lawyer':
        content = <CentralValleyTariffLawyerPage />;
        break;
      case 'chico-customs-attorney':
        content = <ChicoCustomsAttorneyPage />;
        break;
      case 'chula-vista-tariff-lawyer':
        content = <ChulaVistaTariffLawyerPage />;
        break;
      case 'concord-tariff-lawyer':
        content = <ConcordTariffLawyerPage />;
        break;
      case 'corona-trade-compliance':
        content = <CoronaTradeCompliancePage />;
        break;
      case 'daly-city-customs-attorney':
        content = <DalyCityCustomsAttorneyPage />;
        break;
      case 'fontana-trade-attorney':
        content = <FontanaTradeAttorneyPage />;
        break;
      case 'fremont-customs-attorney':
        content = <FremontCustomsAttorneyPage />;
        break;
      case 'fresno-ag-export-compliance':
        content = <FresnoAgExportCompliancePage />;
        break;
      case 'fresno-agricultural-trade':
        content = <FresnoAgriculturalTradePage />;
        break;
      case 'fresno-customs-attorney':
        content = <FresnoCustomsAttorneyPage />;
        break;
      case 'fullerton-tariff-attorney':
        content = <FullertonTariffAttorneyPage />;
        break;
      case 'glendale-tariff-attorney':
        content = <GlendaleTariffAttorneyPage />;
        break;
      case 'hayward-customs-attorney':
        content = <HaywardCustomsAttorneyPage />;
        break;
      case 'huntington-beach-tariff-lawyer':
        content = <HuntingtonBeachTariffLawyerPage />;
        break;
      case 'inland-empire-customs-attorney':
        content = <InlandEmpireCustomsAttorneyPage />;
        break;
      case 'irvine-trade-compliance':
        content = <IrvineTradeCompliancePage />;
        break;
      case 'lancaster-trade-attorney':
        content = <LancasterTradeAttorneyPage />;
        break;
      case 'long-beach-antidumping-defense':
        content = <LongBeachAntidumpingDefensePage />;
        break;
      case 'long-beach-duty-drawback':
        content = <LongBeachDutyDrawbackPage />;
        break;
      case 'long-beach-ftz-compliance':
        content = <LongBeachFTZCompliancePage />;
        break;
      case 'long-beach-maritime-tariff':
        content = <LongBeachMaritimeTariffPage />;
        break;
      case 'long-beach-port-attorney':
        content = <LongBeachPortAttorneyPage />;
        break;
      case 'los-angeles-cbp-audit-defense':
        content = <LosAngelesCBPAuditDefensePage />;
        break;
      case 'los-angeles-fashion-tariff':
        content = <LosAngelesFashionTariffPage />;
        break;
      case 'los-angeles-section-301':
        content = <LosAngelesSection301Page />;
        break;
      case 'los-angeles-tariff-lawyer':
        content = <LosAngelesTariffLawyerPage />;
        break;
      case 'los-angeles-usmca-certification':
        content = <LosAngelesUSMCACertificationPage />;
        break;
      case 'modesto-customs-attorney':
        content = <ModestoCustomsAttorneyPage />;
        break;
      case 'modesto-farm-equipment':
        content = <ModestoFarmEquipmentPage />;
        break;
      case 'moreno-valley-customs':
        content = <MorenoValleyCustomsPage />;
        break;
      case 'murrieta-tariff-lawyer':
        content = <MurrietaTariffLawyerPage />;
        break;
      case 'oakland-customs-broker':
        content = <OaklandCustomsBrokerPage />;
        break;
      case 'oakland-customs-penalty':
        content = <OaklandCustomsPenaltyPage />;
        break;
      case 'oakland-maritime-trade':
        content = <OaklandMaritimeTradePage />;
        break;
      case 'oakland-port-operations':
        content = <OaklandPortOperationsPage />;
        break;
      case 'oakland-trade-attorney':
        content = <OaklandTradeAttorneyPage />;
        break;
      case 'oceanside-tariff-attorney':
        content = <OceansideTariffAttorneyPage />;
        break;
      case 'ontario-trade-compliance':
        content = <OntarioTradeCompliancePage />;
        break;
      case 'orange-county-tariff-lawyer':
        content = <OrangeCountyTariffLawyerPage />;
        break;
      case 'oxnard-tariff-attorney':
        content = <OxnardTariffAttorneyPage />;
        break;
      case 'palmdale-customs-attorney':
        content = <PalmdaleCustomsAttorneyPage />;
        break;
      case 'pasadena-tariff-lawyer':
        content = <PasadenaTariffLawyerPage />;
        break;
      case 'port-of-oakland-tariff':
        content = <PortOfOaklandTariffPage />;
        break;
      case 'port-of-san-diego-customs':
        content = <PortOfSanDiegoCustomsPage />;
        break;
      case 'port-of-stockton-trade':
        content = <PortOfStocktonTradePage />;
        break;
      case 'rancho-cucamonga-tariff-lawyer':
        content = <RanchoCucamongaTariffLawyerPage />;
        break;
      case 'riverside-tariff-attorney':
        content = <RiversideTariffAttorneyPage />;
        break;
      case 'roseville-customs-lawyer':
        content = <RosevilleCustomsLawyerPage />;
        break;
      case 'sacramento-tariff-attorney':
        content = <SacramentoTariffAttorneyPage />;
        break;
      case 'sacramento-trade-compliance':
        content = <SacramentoTradeCompliancePage />;
        break;
      case 'sacramento-valley-trade':
        content = <SacramentoValleyTradePage />;
        break;
      case 'sacramento-wine-export':
        content = <SacramentoWineExportPage />;
        break;
      case 'salinas-tariff-lawyer':
        content = <SalinasTariffLawyerPage />;
        break;
      case 'san-diego-customs-lawyer':
        content = <SanDiegoCustomsLawyerPage />;
        break;
      case 'san-diego-ecommerce-tariff':
        content = <SanDiegoEcommerceTariffPage />;
        break;
      case 'san-diego-pharma-import':
        content = <SanDiegoPharmaImportPage />;
        break;
      case 'san-diego-trade-litigation':
        content = <SanDiegoTradeLitigationPage />;
        break;
      case 'san-diego-uflpa-compliance':
        content = <SanDiegoUFLPACompliancePage />;
        break;
      case 'san-fernando-valley-tariff':
        content = <SanFernandoValleyTariffPage />;
        break;
      case 'san-francisco-customs-attorney':
        content = <SanFranciscoCustomsAttorneyPage />;
        break;
      case 'san-francisco-export-controls':
        content = <SanFranciscoExportControlsPage />;
        break;
      case 'san-francisco-forced-labor':
        content = <SanFranciscoForcedLaborPage />;
        break;
      case 'san-francisco-prior-disclosure':
        content = <SanFranciscoPriorDisclosurePage />;
        break;
      case 'san-francisco-tech-trade':
        content = <SanFranciscoTechTradePage />;
        break;
      case 'san-jose-customs-lawyer':
        content = <SanJoseCustomsLawyerPage />;
        break;
      case 'san-jose-tech-export-controls':
        content = <SanJoseTechExportControlsPage />;
        break;
      case 'santa-ana-trade-attorney':
        content = <SantaAnaTradeAttorneyPage />;
        break;
      case 'santa-clarita-customs-lawyer':
        content = <SantaClaritaCustomsLawyerPage />;
        break;
      case 'santa-rosa-customs-lawyer':
        content = <SantaRosaCustomsLawyerPage />;
        break;
      case 'silicon-valley-trade-lawyer':
        content = <SiliconValleyTradeLawyerPage />;
        break;
      case 'southern-california-tariff-lawyer':
        content = <SouthernCaliforniaTariffLawyerPage />;
        break;
      case 'stockton-ag-tariff-lawyer':
        content = <StocktonAgTariffLawyerPage />;
        break;
      case 'stockton-tariff-lawyer':
        content = <StocktonTariffLawyerPage />;
        break;
      case 'sunnyvale-tech-trade':
        content = <SunnyvaleTechTradePage />;
        break;
      case 'temecula-trade-attorney':
        content = <TemeculaTradeAttorneyPage />;
        break;
      case 'torrance-trade-attorney':
        content = <TorranceTradeAttorneyPage />;
        break;
      case 'vallejo-tariff-attorney':
        content = <VallejoTariffAttorneyPage />;
        break;
      case 'visalia-tariff-lawyer':
        content = <VisaliaTariffLawyerPage />;
        break;
      default:
        // Show 404 page for unknown routes
        content = <NotFoundPage />;
        break;
    }
  }

  return (
    <ErrorBoundary>
      <div className="flex flex-col min-h-screen">
        {/* Skip Navigation Link for Accessibility */}
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" role="main" className="flex-grow" tabIndex={-1}>
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              {content}
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
        {/* Sticky Phone Button - Mobile Only */}
        <StickyPhoneButton showOnMobileOnly={true} />
      </div>
    </ErrorBoundary>
  );
};

export default App;
