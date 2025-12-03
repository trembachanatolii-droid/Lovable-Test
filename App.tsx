
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyPhoneButton from './components/StickyPhoneButton';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import ConnectionStatus from './components/ConnectionStatus';

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
const CaliforniaLocationsPage = lazy(() => import('./pages/CaliforniaLocationsPage'));

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

// Trending 2025 Tariff Pages
const Trump2025TariffAttorneyPage = lazy(() => import('./pages/Trump2025TariffAttorneyPage'));

// NEW: Keyword-City Expansion Pages (1000+ keywords)
const IrvineCBPAuditDefensePage = lazy(() => import('./pages/IrvineCBPAuditDefensePage'));
const SanDiegoSection301Page = lazy(() => import('./pages/SanDiegoSection301Page'));
const SacramentoUFLPAAttorneyPage = lazy(() => import('./pages/SacramentoUFLPAAttorneyPage'));
const RiversideCustomsSeizurePage = lazy(() => import('./pages/RiversideCustomsSeizurePage'));
const FremontSemiconductorTariffPage = lazy(() => import('./pages/FremontSemiconductorTariffPage'));
// Batch 2 - Additional City-Keyword Pages
const LosAngelesCBPAuditPage = lazy(() => import('./pages/LosAngelesCBPAuditPage'));
const SanJoseSection301Page = lazy(() => import('./pages/SanJoseSection301Page'));
const OaklandUFLPAPage = lazy(() => import('./pages/OaklandUFLPAPage'));
const AnaheimCustomsSeizurePage = lazy(() => import('./pages/AnaheimCustomsSeizurePage'));
const SanFranciscoChinaTariffPage = lazy(() => import('./pages/SanFranciscoChinaTariffPage'));
// Batch 3 - More City-Keyword Pages
const LongBeachCBPAuditPage = lazy(() => import('./pages/LongBeachCBPAuditPage'));
const SanDiegoCBPAuditPage = lazy(() => import('./pages/SanDiegoCBPAuditPage'));
const SacramentoSection301Page = lazy(() => import('./pages/SacramentoSection301Page'));
const FresnoSection301Page = lazy(() => import('./pages/FresnoSection301Page'));
const BakersfieldUFLPAPage = lazy(() => import('./pages/BakersfieldUFLPAPage'));
const LongBeachUFLPAPage = lazy(() => import('./pages/LongBeachUFLPAPage'));
const SanDiegoCustomsSeizurePage = lazy(() => import('./pages/SanDiegoCustomsSeizurePage'));
const LongBeachCustomsSeizurePage = lazy(() => import('./pages/LongBeachCustomsSeizurePage'));
const SanJosePharmaImportPage = lazy(() => import('./pages/SanJosePharmaImportPage'));
const FremontAutomotiveTariffPage = lazy(() => import('./pages/FremontAutomotiveTariffPage'));
// Batch 4 - Specialized Agent Created Pages (25 new pages)
// CBP Audit Pages
const OaklandCBPAuditPage = lazy(() => import('./pages/OaklandCBPAuditPage'));
const FresnoCBPAuditPage = lazy(() => import('./pages/FresnoCBPAuditPage'));
const SantaAnaCBPAuditPage = lazy(() => import('./pages/SantaAnaCBPAuditPage'));
const PasadenaCBPAuditPage = lazy(() => import('./pages/PasadenaCBPAuditPage'));
const TorranceCBPAuditPage = lazy(() => import('./pages/TorranceCBPAuditPage'));
// Section 301 Pages
const LongBeachSection301Page = lazy(() => import('./pages/LongBeachSection301Page'));
const IrvineSection301Page = lazy(() => import('./pages/IrvineSection301Page'));
const OaklandSection301Page = lazy(() => import('./pages/OaklandSection301Page'));
const AnaheimSection301Page = lazy(() => import('./pages/AnaheimSection301Page'));
const TorranceSection301Page = lazy(() => import('./pages/TorranceSection301Page'));
// UFLPA Pages
const SanDiegoUFLPAPage = lazy(() => import('./pages/SanDiegoUFLPAPage'));
const FresnoUFLPAPage = lazy(() => import('./pages/FresnoUFLPAPage'));
const IrvineUFLPAPage = lazy(() => import('./pages/IrvineUFLPAPage'));
const SanJoseUFLPAPage = lazy(() => import('./pages/SanJoseUFLPAPage'));
const TorranceUFLPAPage = lazy(() => import('./pages/TorranceUFLPAPage'));
// Customs Seizure Pages
const LosAngelesCustomsSeizurePage = lazy(() => import('./pages/LosAngelesCustomsSeizurePage'));
const OaklandCustomsSeizurePage = lazy(() => import('./pages/OaklandCustomsSeizurePage'));
const FresnoCustomsSeizurePage = lazy(() => import('./pages/FresnoCustomsSeizurePage'));
const SacramentoCustomsSeizurePage = lazy(() => import('./pages/SacramentoCustomsSeizurePage'));
const IrvineCustomsSeizurePage = lazy(() => import('./pages/IrvineCustomsSeizurePage'));
// Industry-Specific Pages
const LosAngelesAutomotiveTariffPage = lazy(() => import('./pages/LosAngelesAutomotiveTariffPage'));
const SanDiegoSemiconductorTariffPage = lazy(() => import('./pages/SanDiegoSemiconductorTariffPage'));
const OaklandPharmaceuticalImportPage = lazy(() => import('./pages/OaklandPharmaceuticalImportPage'));
const FresnoAgriculturalEquipmentTariffPage = lazy(() => import('./pages/FresnoAgriculturalEquipmentTariffPage'));
const IrvineMedicalDeviceImportPage = lazy(() => import('./pages/IrvineMedicalDeviceImportPage'));
// Batch 5 - More Specialized Agent Pages (25 new pages)
// Anti-Dumping Pages
const SantaClaraAntiDumpingPage = lazy(() => import('./pages/SantaClaraAntiDumpingPage'));
const StocktonAntiDumpingPage = lazy(() => import('./pages/StocktonAntiDumpingPage'));
const ModestoAntiDumpingPage = lazy(() => import('./pages/ModestoAntiDumpingPage'));
const GlendaleAntiDumpingPage = lazy(() => import('./pages/GlendaleAntiDumpingPage'));
const HuntingtonBeachAntiDumpingPage = lazy(() => import('./pages/HuntingtonBeachAntiDumpingPage'));
// Countervailing Duty Pages
const SantaRosaCountervailingPage = lazy(() => import('./pages/SantaRosaCountervailingPage'));
const ElkGroveCountervailingPage = lazy(() => import('./pages/ElkGroveCountervailingPage'));
const CoronaCountervailingPage = lazy(() => import('./pages/CoronaCountervailingPage'));
const LancasterCountervailingPage = lazy(() => import('./pages/LancasterCountervailingPage'));
const PalmdaleCountervailingPage = lazy(() => import('./pages/PalmdaleCountervailingPage'));
// Foreign Trade Zone Pages
const SalinasTradeZonePage = lazy(() => import('./pages/SalinasTradeZonePage'));
const PomonaTradeZonePage = lazy(() => import('./pages/PomonaTradeZonePage'));
const HaywardTradeZonePage = lazy(() => import('./pages/HaywardTradeZonePage'));
const EscondidoTradeZonePage = lazy(() => import('./pages/EscondidoTradeZonePage'));
const SunnyvaleTradeZonePage = lazy(() => import('./pages/SunnyvaleTradeZonePage'));
// HTS Classification Pages
const FullertonHTSClassificationPage = lazy(() => import('./pages/FullertonHTSClassificationPage'));
const ThousandOaksHTSClassificationPage = lazy(() => import('./pages/ThousandOaksHTSClassificationPage'));
const VisaliaHTSClassificationPage = lazy(() => import('./pages/VisaliaHTSClassificationPage'));
const RosevilleHTSClassificationPage = lazy(() => import('./pages/RosevilleHTSClassificationPage'));
const ConcordHTSClassificationPage = lazy(() => import('./pages/ConcordHTSClassificationPage'));
// Export Control Pages
const SimiValleyExportControlPage = lazy(() => import('./pages/SimiValleyExportControlPage'));
const SantaMariaExportControlPage = lazy(() => import('./pages/SantaMariaExportControlPage'));
const BerkeleyExportControlPage = lazy(() => import('./pages/BerkeleyExportControlPage'));
const ElMonteExportControlPage = lazy(() => import('./pages/ElMonteExportControlPage'));
const CarlsbadExportControlPage = lazy(() => import('./pages/CarlsbadExportControlPage'));
// Batch 6 - More Specialized Agent Pages (25 new pages)
// Penalty Mitigation Pages
const RanchoCucamongaPenaltyMitigationPage = lazy(() => import('./pages/RanchoCucamongaPenaltyMitigationPage'));
const OntarioPenaltyMitigationPage = lazy(() => import('./pages/OntarioPenaltyMitigationPage'));
const FontanaPenaltyMitigationPage = lazy(() => import('./pages/FontanaPenaltyMitigationPage'));
const MorenoValleyPenaltyMitigationPage = lazy(() => import('./pages/MorenoValleyPenaltyMitigationPage'));
const SanBernardinoPenaltyMitigationPage = lazy(() => import('./pages/SanBernardinoPenaltyMitigationPage'));
// Prior Disclosure Pages
const WestCovinaPriorDisclosurePage = lazy(() => import('./pages/WestCovinaPriorDisclosurePage'));
const NorwalkPriorDisclosurePage = lazy(() => import('./pages/NorwalkPriorDisclosurePage'));
const BurbankPriorDisclosurePage = lazy(() => import('./pages/BurbankPriorDisclosurePage'));
const ElCajonPriorDisclosurePage = lazy(() => import('./pages/ElCajonPriorDisclosurePage'));
const RialtoPriorDisclosurePage = lazy(() => import('./pages/RialtoPriorDisclosurePage'));
// Drawback Pages
const DalyCityDrawbackPage = lazy(() => import('./pages/DalyCityDrawbackPage'));
const SouthGateDrawbackPage = lazy(() => import('./pages/SouthGateDrawbackPage'));
const MissionViejoDrawbackPage = lazy(() => import('./pages/MissionViejoDrawbackPage'));
const CarsonDrawbackPage = lazy(() => import('./pages/CarsonDrawbackPage'));
const SantaClaritaDrawbackPage = lazy(() => import('./pages/SantaClaritaDrawbackPage'));
// Bonded Warehouse Pages
const VacavilleBondedWarehousePage = lazy(() => import('./pages/VacavilleBondedWarehousePage'));
const FairfieldBondedWarehousePage = lazy(() => import('./pages/FairfieldBondedWarehousePage'));
const AntiochBondedWarehousePage = lazy(() => import('./pages/AntiochBondedWarehousePage'));
const RichmondBondedWarehousePage = lazy(() => import('./pages/RichmondBondedWarehousePage'));
const SanLeandroBondedWarehousePage = lazy(() => import('./pages/SanLeandroBondedWarehousePage'));
// Customs Valuation Pages
const RedwoodCityCustomsValuationPage = lazy(() => import('./pages/RedwoodCityCustomsValuationPage'));
const LakeForestCustomsValuationPage = lazy(() => import('./pages/LakeForestCustomsValuationPage'));
const NapaCustomsValuationPage = lazy(() => import('./pages/NapaCustomsValuationPage'));
const MantecaCustomsValuationPage = lazy(() => import('./pages/MantecaCustomsValuationPage'));
const ChinoCustomsValuationPage = lazy(() => import('./pages/ChinoCustomsValuationPage'));
// Batch 7 - More Specialized Agent Pages (25 new pages)
// Import Compliance Pages
const InglewoodImportCompliancePage = lazy(() => import('./pages/InglewoodImportCompliancePage'));
const VenturaImportCompliancePage = lazy(() => import('./pages/VenturaImportCompliancePage'));
const SantaBarbaraImportCompliancePage = lazy(() => import('./pages/SantaBarbaraImportCompliancePage'));
const OceansideImportCompliancePage = lazy(() => import('./pages/OceansideImportCompliancePage'));
const GardenGroveImportCompliancePage = lazy(() => import('./pages/GardenGroveImportCompliancePage'));
// Customs Broker Pages
const ChulaVistaCustomsBrokerPage = lazy(() => import('./pages/ChulaVistaCustomsBrokerPage'));
const DowneyCustomsBrokerPage = lazy(() => import('./pages/DowneyCustomsBrokerPage'));
const CostaMesaCustomsBrokerPage = lazy(() => import('./pages/CostaMesaCustomsBrokerPage'));
const SanMateoCustomsBrokerPage = lazy(() => import('./pages/SanMateoCustomsBrokerPage'));
const ClovisCustomsBrokerPage = lazy(() => import('./pages/ClovisCustomsBrokerPage'));
// USMCA Pages
const TracyUSMCAPage = lazy(() => import('./pages/TracyUSMCAPage'));
const LivermoreUSMCAPage = lazy(() => import('./pages/LivermoreUSMCAPage'));
const PleasantonUSMCAPage = lazy(() => import('./pages/PleasantonUSMCAPage'));
const WalnutCreekUSMCAPage = lazy(() => import('./pages/WalnutCreekUSMCAPage'));
const MenifeeUSMCAPage = lazy(() => import('./pages/MenifeeUSMCAPage'));
// Country of Origin Pages
const HemetCountryOfOriginPage = lazy(() => import('./pages/HemetCountryOfOriginPage'));
const LakeElsinoreCountryOfOriginPage = lazy(() => import('./pages/LakeElsinoreCountryOfOriginPage'));
const MurrietaCountryOfOriginPage = lazy(() => import('./pages/MurrietaCountryOfOriginPage'));
const TemeculaCountryOfOriginPage = lazy(() => import('./pages/TemeculaCountryOfOriginPage'));
const VictorvilleCountryOfOriginPage = lazy(() => import('./pages/VictorvilleCountryOfOriginPage'));
// Customs Bond Pages
const HesperiaCustomsBondPage = lazy(() => import('./pages/HesperiaCustomsBondPage'));
const AppleValleyCustomsBondPage = lazy(() => import('./pages/AppleValleyCustomsBondPage'));
const YucaipaCustomsBondPage = lazy(() => import('./pages/YucaipaCustomsBondPage'));
const LomaLindaCustomsBondPage = lazy(() => import('./pages/LomaLindaCustomsBondPage'));
const UplandCustomsBondPage = lazy(() => import('./pages/UplandCustomsBondPage'));

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
  return (
    <ErrorBoundary>
      <ScrollToTop />
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
              <Routes>
                {/* Home Route */}
                <Route path="/" element={<HomePage />} />

                {/* Core Pages */}
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsOfUsePage />} />
                <Route path="/disclaimers" element={<LegalPage title="Disclaimers" />} />
                <Route path="/attorney-advertising" element={<AttorneyAdvertisingPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/practice-areas" element={<PracticeAreasPage />} />
                <Route path="/attorney-profile" element={<AttorneyProfilePage />} />
                <Route path="/useful-links" element={<UsefulLinksPage />} />
                <Route path="/resources" element={<ResourcesHubPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/careers/apply" element={<GeneralApplicationPage />} />

                {/* Dynamic Article Route */}
                <Route path="/article/:articleId" element={<ArticleDisplayPage />} />

                {/* California Locations - Multiple aliases */}
                <Route path="/california-locations" element={<CaliforniaLocationsPage />} />
                <Route path="/california-offices" element={<CaliforniaLocationsPage />} />
                <Route path="/california-ports" element={<CaliforniaLocationsPage />} />

                {/* Main Practice Area Pages */}
                <Route path="/los-angeles-port-customs-attorney" element={<LosAngelesPortPage />} />
                <Route path="/bay-area-trade-law-attorney" element={<BayAreaTradeLawPage />} />
                <Route path="/calabasas-customs-attorney" element={<CalabasasCustomsAttorneyPage />} />
                <Route path="/customs-defense-litigation" element={<CustomsDefensePage />} />
                <Route path="/customs-defense" element={<CustomsDefensePage />} />
                <Route path="/regulatory-compliance-advisory" element={<RegulatoryCompliancePage />} />
                <Route path="/regulatory-compliance" element={<RegulatoryCompliancePage />} />
                <Route path="/export-controls-sanctions" element={<ExportControlsPage />} />
                <Route path="/export-controls" element={<ExportControlsPage />} />

                {/* Practice Area Aliases */}
                <Route path="/country-of-origin" element={<PracticeAreasPage />} />
                <Route path="/prior-disclosure" element={<PracticeAreasPage />} />
                <Route path="/prior-disclosure-filing" element={<PracticeAreasPage />} />
                <Route path="/cbp-audit-defense" element={<PracticeAreasPage />} />
                <Route path="/duty-drawback" element={<PracticeAreasPage />} />
                <Route path="/duty-drawback-refunds" element={<PracticeAreasPage />} />
                <Route path="/tariff-refund-protests" element={<PracticeAreasPage />} />
                <Route path="/ftz-foreign-trade-zones" element={<PracticeAreasPage />} />
                <Route path="/assists-royalties" element={<PracticeAreasPage />} />
                <Route path="/transfer-pricing-customs" element={<PracticeAreasPage />} />
                <Route path="/deemed-export-compliance" element={<PracticeAreasPage />} />
                <Route path="/scope-rulings" element={<PracticeAreasPage />} />
                <Route path="/cvd-scope-rulings" element={<PracticeAreasPage />} />
                <Route path="/administrative-reviews" element={<PracticeAreasPage />} />
                <Route path="/eapa-defense" element={<PracticeAreasPage />} />
                <Route path="/internal-compliance-audits" element={<PracticeAreasPage />} />
                <Route path="/customs-compliance" element={<RegulatoryCompliancePage />} />
                <Route path="/import-compliance" element={<RegulatoryCompliancePage />} />
                <Route path="/customs-penalty-mitigation" element={<CustomsDefensePage />} />
                <Route path="/customs-detention-defense" element={<CustomsDefensePage />} />
                <Route path="/tariff-classification" element={<TariffsClassificationGuidePage />} />
                <Route path="/tariff-engineering" element={<TariffsClassificationGuidePage />} />

                {/* Resource Pages */}
                <Route path="/tariffs-duties-classification-guide" element={<TariffsClassificationGuidePage />} />
                <Route path="/supply-chain-esg-compliance-guide" element={<SupplyChainESGGuidePage />} />
                <Route path="/ecommerce-digital-trade-guide" element={<EcommerceDigitalTradeGuidePage />} />
                <Route path="/trade-law-glossary" element={<GlossaryPage />} />
                <Route path="/trade-law-faq" element={<FAQCenterPage />} />
                <Route path="/schedule-consultation" element={<ConsultationBookingPage />} />
                <Route path="/resources/section-301-tariffs-guide" element={<Section301TariffsGuidePage />} />
                <Route path="/resources/uflpa-compliance-guide" element={<UFLPAComplianceGuidePage />} />

                {/* Industry Pages */}
                <Route path="/technology-electronics-trade-attorney" element={<TechnologyElectronicsIndustryPage />} />
                <Route path="/apparel-textiles-trade-attorney" element={<ApparelTextilesIndustryPage />} />
                <Route path="/food-agriculture-trade-attorney" element={<FoodAgricultureIndustryPage />} />

                {/* Location-Specific Pages - California Cities */}
                <Route path="/anaheim-customs-attorney" element={<AnaheimCustomsAttorneyPage />} />
                <Route path="/anaheim-manufacturing-trade" element={<AnaheimManufacturingTradePage />} />
                <Route path="/antioch-customs-attorney" element={<AntiochCustomsAttorneyPage />} />
                <Route path="/bakersfield-oil-energy-trade" element={<BakersfieldOilEnergyTradePage />} />
                <Route path="/bakersfield-tariff-lawyer" element={<BakersfieldTariffLawyerPage />} />
                <Route path="/central-valley-tariff-lawyer" element={<CentralValleyTariffLawyerPage />} />
                <Route path="/chico-customs-attorney" element={<ChicoCustomsAttorneyPage />} />
                <Route path="/chula-vista-tariff-lawyer" element={<ChulaVistaTariffLawyerPage />} />
                <Route path="/concord-tariff-lawyer" element={<ConcordTariffLawyerPage />} />
                <Route path="/corona-trade-compliance" element={<CoronaTradeCompliancePage />} />
                <Route path="/daly-city-customs-attorney" element={<DalyCityCustomsAttorneyPage />} />
                <Route path="/fontana-trade-attorney" element={<FontanaTradeAttorneyPage />} />
                <Route path="/fremont-customs-attorney" element={<FremontCustomsAttorneyPage />} />
                <Route path="/fresno-ag-export-compliance" element={<FresnoAgExportCompliancePage />} />
                <Route path="/fresno-agricultural-trade" element={<FresnoAgriculturalTradePage />} />
                <Route path="/fresno-customs-attorney" element={<FresnoCustomsAttorneyPage />} />
                <Route path="/fullerton-tariff-attorney" element={<FullertonTariffAttorneyPage />} />
                <Route path="/glendale-tariff-attorney" element={<GlendaleTariffAttorneyPage />} />
                <Route path="/hayward-customs-attorney" element={<HaywardCustomsAttorneyPage />} />
                <Route path="/huntington-beach-tariff-lawyer" element={<HuntingtonBeachTariffLawyerPage />} />
                <Route path="/inland-empire-customs-attorney" element={<InlandEmpireCustomsAttorneyPage />} />
                <Route path="/irvine-trade-compliance" element={<IrvineTradeCompliancePage />} />
                <Route path="/lancaster-trade-attorney" element={<LancasterTradeAttorneyPage />} />
                <Route path="/long-beach-antidumping-defense" element={<LongBeachAntidumpingDefensePage />} />
                <Route path="/long-beach-duty-drawback" element={<LongBeachDutyDrawbackPage />} />
                <Route path="/long-beach-ftz-compliance" element={<LongBeachFTZCompliancePage />} />
                <Route path="/long-beach-maritime-tariff" element={<LongBeachMaritimeTariffPage />} />
                <Route path="/long-beach-port-attorney" element={<LongBeachPortAttorneyPage />} />
                <Route path="/los-angeles-cbp-audit-defense" element={<LosAngelesCBPAuditDefensePage />} />
                <Route path="/los-angeles-fashion-tariff" element={<LosAngelesFashionTariffPage />} />
                <Route path="/los-angeles-section-301" element={<LosAngelesSection301Page />} />
                <Route path="/los-angeles-tariff-lawyer" element={<LosAngelesTariffLawyerPage />} />
                <Route path="/los-angeles-customs-attorney" element={<LosAngelesTariffLawyerPage />} />
                <Route path="/los-angeles-usmca-certification" element={<LosAngelesUSMCACertificationPage />} />
                <Route path="/modesto-customs-attorney" element={<ModestoCustomsAttorneyPage />} />
                <Route path="/modesto-farm-equipment" element={<ModestoFarmEquipmentPage />} />
                <Route path="/moreno-valley-customs" element={<MorenoValleyCustomsPage />} />
                <Route path="/murrieta-tariff-lawyer" element={<MurrietaTariffLawyerPage />} />
                <Route path="/oakland-customs-broker" element={<OaklandCustomsBrokerPage />} />
                <Route path="/oakland-customs-penalty" element={<OaklandCustomsPenaltyPage />} />
                <Route path="/oakland-maritime-trade" element={<OaklandMaritimeTradePage />} />
                <Route path="/oakland-port-operations" element={<OaklandPortOperationsPage />} />
                <Route path="/oakland-port-customs-attorney" element={<OaklandPortOperationsPage />} />
                <Route path="/oakland-port-operations-attorney" element={<OaklandPortOperationsPage />} />
                <Route path="/oakland-trade-attorney" element={<OaklandTradeAttorneyPage />} />
                <Route path="/oceanside-tariff-attorney" element={<OceansideTariffAttorneyPage />} />
                <Route path="/ontario-trade-compliance" element={<OntarioTradeCompliancePage />} />
                <Route path="/orange-county-tariff-lawyer" element={<OrangeCountyTariffLawyerPage />} />
                <Route path="/oxnard-tariff-attorney" element={<OxnardTariffAttorneyPage />} />
                <Route path="/palmdale-customs-attorney" element={<PalmdaleCustomsAttorneyPage />} />
                <Route path="/pasadena-tariff-lawyer" element={<PasadenaTariffLawyerPage />} />
                <Route path="/port-of-oakland-tariff" element={<PortOfOaklandTariffPage />} />
                <Route path="/port-of-san-diego-customs" element={<PortOfSanDiegoCustomsPage />} />
                <Route path="/port-of-stockton-trade" element={<PortOfStocktonTradePage />} />
                <Route path="/rancho-cucamonga-tariff-lawyer" element={<RanchoCucamongaTariffLawyerPage />} />
                <Route path="/riverside-tariff-attorney" element={<RiversideTariffAttorneyPage />} />
                <Route path="/roseville-customs-lawyer" element={<RosevilleCustomsLawyerPage />} />
                <Route path="/sacramento-tariff-attorney" element={<SacramentoTariffAttorneyPage />} />
                <Route path="/sacramento-trade-compliance" element={<SacramentoTradeCompliancePage />} />
                <Route path="/sacramento-valley-trade" element={<SacramentoValleyTradePage />} />
                <Route path="/sacramento-wine-export" element={<SacramentoWineExportPage />} />
                <Route path="/salinas-tariff-lawyer" element={<SalinasTariffLawyerPage />} />
                <Route path="/san-diego-customs-lawyer" element={<SanDiegoCustomsLawyerPage />} />
                <Route path="/san-diego-ecommerce-tariff" element={<SanDiegoEcommerceTariffPage />} />
                <Route path="/san-diego-pharma-import" element={<SanDiegoPharmaImportPage />} />
                <Route path="/san-diego-trade-litigation" element={<SanDiegoTradeLitigationPage />} />
                <Route path="/san-diego-uflpa-compliance" element={<SanDiegoUFLPACompliancePage />} />
                <Route path="/san-fernando-valley-tariff" element={<SanFernandoValleyTariffPage />} />
                <Route path="/san-francisco-customs-attorney" element={<SanFranciscoCustomsAttorneyPage />} />
                <Route path="/san-francisco-export-controls" element={<SanFranciscoExportControlsPage />} />
                <Route path="/san-francisco-forced-labor" element={<SanFranciscoForcedLaborPage />} />
                <Route path="/san-francisco-prior-disclosure" element={<SanFranciscoPriorDisclosurePage />} />
                <Route path="/san-francisco-tech-trade" element={<SanFranciscoTechTradePage />} />
                <Route path="/san-jose-customs-lawyer" element={<SanJoseCustomsLawyerPage />} />
                <Route path="/san-jose-tech-export-controls" element={<SanJoseTechExportControlsPage />} />
                <Route path="/santa-ana-trade-attorney" element={<SantaAnaTradeAttorneyPage />} />
                <Route path="/santa-clarita-customs-lawyer" element={<SantaClaritaCustomsLawyerPage />} />
                <Route path="/santa-rosa-customs-lawyer" element={<SantaRosaCustomsLawyerPage />} />
                <Route path="/silicon-valley-trade-lawyer" element={<SiliconValleyTradeLawyerPage />} />
                <Route path="/southern-california-tariff-lawyer" element={<SouthernCaliforniaTariffLawyerPage />} />
                <Route path="/stockton-ag-tariff-lawyer" element={<StocktonAgTariffLawyerPage />} />
                <Route path="/stockton-tariff-lawyer" element={<StocktonTariffLawyerPage />} />
                <Route path="/sunnyvale-tech-trade" element={<SunnyvaleTechTradePage />} />
                <Route path="/temecula-trade-attorney" element={<TemeculaTradeAttorneyPage />} />
                <Route path="/torrance-trade-attorney" element={<TorranceTradeAttorneyPage />} />
                <Route path="/vallejo-tariff-attorney" element={<VallejoTariffAttorneyPage />} />
                <Route path="/visalia-tariff-lawyer" element={<VisaliaTariffLawyerPage />} />

                {/* Trending 2025 Tariff Pages */}
                <Route path="/trump-2025-tariff-attorney" element={<Trump2025TariffAttorneyPage />} />

                {/* Keyword-City Expansion Pages (Batch 1) */}
                <Route path="/irvine-cbp-audit-defense" element={<IrvineCBPAuditDefensePage />} />
                <Route path="/san-diego-section-301" element={<SanDiegoSection301Page />} />
                <Route path="/sacramento-uflpa-attorney" element={<SacramentoUFLPAAttorneyPage />} />
                <Route path="/riverside-customs-seizure" element={<RiversideCustomsSeizurePage />} />
                <Route path="/fremont-semiconductor-tariff" element={<FremontSemiconductorTariffPage />} />

                {/* Batch 2 - Additional City-Keyword Pages */}
                <Route path="/los-angeles-cbp-audit" element={<LosAngelesCBPAuditPage />} />
                <Route path="/san-jose-section-301" element={<SanJoseSection301Page />} />
                <Route path="/oakland-uflpa" element={<OaklandUFLPAPage />} />
                <Route path="/anaheim-customs-seizure" element={<AnaheimCustomsSeizurePage />} />
                <Route path="/san-francisco-china-tariff" element={<SanFranciscoChinaTariffPage />} />

                {/* Batch 3 - More City-Keyword Pages */}
                <Route path="/long-beach-cbp-audit" element={<LongBeachCBPAuditPage />} />
                <Route path="/san-diego-cbp-audit" element={<SanDiegoCBPAuditPage />} />
                <Route path="/sacramento-section-301" element={<SacramentoSection301Page />} />
                <Route path="/fresno-section-301" element={<FresnoSection301Page />} />
                <Route path="/bakersfield-uflpa" element={<BakersfieldUFLPAPage />} />
                <Route path="/long-beach-uflpa" element={<LongBeachUFLPAPage />} />
                <Route path="/san-diego-customs-seizure" element={<SanDiegoCustomsSeizurePage />} />
                <Route path="/long-beach-customs-seizure" element={<LongBeachCustomsSeizurePage />} />
                <Route path="/san-jose-pharma-import" element={<SanJosePharmaImportPage />} />
                <Route path="/fremont-automotive-tariff" element={<FremontAutomotiveTariffPage />} />

                {/* Batch 4 - Specialized Agent Created Pages */}
                <Route path="/oakland-cbp-audit" element={<OaklandCBPAuditPage />} />
                <Route path="/fresno-cbp-audit" element={<FresnoCBPAuditPage />} />
                <Route path="/santa-ana-cbp-audit" element={<SantaAnaCBPAuditPage />} />
                <Route path="/pasadena-cbp-audit" element={<PasadenaCBPAuditPage />} />
                <Route path="/torrance-cbp-audit" element={<TorranceCBPAuditPage />} />
                <Route path="/long-beach-section-301" element={<LongBeachSection301Page />} />
                <Route path="/irvine-section-301" element={<IrvineSection301Page />} />
                <Route path="/oakland-section-301" element={<OaklandSection301Page />} />
                <Route path="/anaheim-section-301" element={<AnaheimSection301Page />} />
                <Route path="/torrance-section-301" element={<TorranceSection301Page />} />
                <Route path="/san-diego-uflpa" element={<SanDiegoUFLPAPage />} />
                <Route path="/fresno-uflpa" element={<FresnoUFLPAPage />} />
                <Route path="/irvine-uflpa" element={<IrvineUFLPAPage />} />
                <Route path="/san-jose-uflpa" element={<SanJoseUFLPAPage />} />
                <Route path="/torrance-uflpa" element={<TorranceUFLPAPage />} />
                <Route path="/los-angeles-customs-seizure" element={<LosAngelesCustomsSeizurePage />} />
                <Route path="/oakland-customs-seizure" element={<OaklandCustomsSeizurePage />} />
                <Route path="/fresno-customs-seizure" element={<FresnoCustomsSeizurePage />} />
                <Route path="/sacramento-customs-seizure" element={<SacramentoCustomsSeizurePage />} />
                <Route path="/irvine-customs-seizure" element={<IrvineCustomsSeizurePage />} />
                <Route path="/los-angeles-automotive-tariff" element={<LosAngelesAutomotiveTariffPage />} />
                <Route path="/san-diego-semiconductor-tariff" element={<SanDiegoSemiconductorTariffPage />} />
                <Route path="/oakland-pharmaceutical-import" element={<OaklandPharmaceuticalImportPage />} />
                <Route path="/fresno-agricultural-equipment-tariff" element={<FresnoAgriculturalEquipmentTariffPage />} />
                <Route path="/irvine-medical-device-import" element={<IrvineMedicalDeviceImportPage />} />

                {/* Batch 5 - More Specialized Agent Pages */}
                <Route path="/santa-clara-anti-dumping" element={<SantaClaraAntiDumpingPage />} />
                <Route path="/stockton-anti-dumping" element={<StocktonAntiDumpingPage />} />
                <Route path="/modesto-anti-dumping" element={<ModestoAntiDumpingPage />} />
                <Route path="/glendale-anti-dumping" element={<GlendaleAntiDumpingPage />} />
                <Route path="/huntington-beach-anti-dumping" element={<HuntingtonBeachAntiDumpingPage />} />
                <Route path="/santa-rosa-countervailing" element={<SantaRosaCountervailingPage />} />
                <Route path="/elk-grove-countervailing" element={<ElkGroveCountervailingPage />} />
                <Route path="/corona-countervailing" element={<CoronaCountervailingPage />} />
                <Route path="/lancaster-countervailing" element={<LancasterCountervailingPage />} />
                <Route path="/palmdale-countervailing" element={<PalmdaleCountervailingPage />} />
                <Route path="/salinas-trade-zone" element={<SalinasTradeZonePage />} />
                <Route path="/pomona-trade-zone" element={<PomonaTradeZonePage />} />
                <Route path="/hayward-trade-zone" element={<HaywardTradeZonePage />} />
                <Route path="/escondido-trade-zone" element={<EscondidoTradeZonePage />} />
                <Route path="/sunnyvale-trade-zone" element={<SunnyvaleTradeZonePage />} />
                <Route path="/fullerton-hts-classification" element={<FullertonHTSClassificationPage />} />
                <Route path="/thousand-oaks-hts-classification" element={<ThousandOaksHTSClassificationPage />} />
                <Route path="/visalia-hts-classification" element={<VisaliaHTSClassificationPage />} />
                <Route path="/roseville-hts-classification" element={<RosevilleHTSClassificationPage />} />
                <Route path="/concord-hts-classification" element={<ConcordHTSClassificationPage />} />
                <Route path="/simi-valley-export-control" element={<SimiValleyExportControlPage />} />
                <Route path="/santa-maria-export-control" element={<SantaMariaExportControlPage />} />
                <Route path="/berkeley-export-control" element={<BerkeleyExportControlPage />} />
                <Route path="/el-monte-export-control" element={<ElMonteExportControlPage />} />
                <Route path="/carlsbad-export-control" element={<CarlsbadExportControlPage />} />

                {/* Batch 6 - More Specialized Agent Pages */}
                <Route path="/rancho-cucamonga-penalty-mitigation" element={<RanchoCucamongaPenaltyMitigationPage />} />
                <Route path="/ontario-penalty-mitigation" element={<OntarioPenaltyMitigationPage />} />
                <Route path="/fontana-penalty-mitigation" element={<FontanaPenaltyMitigationPage />} />
                <Route path="/moreno-valley-penalty-mitigation" element={<MorenoValleyPenaltyMitigationPage />} />
                <Route path="/san-bernardino-penalty-mitigation" element={<SanBernardinoPenaltyMitigationPage />} />
                <Route path="/west-covina-prior-disclosure" element={<WestCovinaPriorDisclosurePage />} />
                <Route path="/norwalk-prior-disclosure" element={<NorwalkPriorDisclosurePage />} />
                <Route path="/burbank-prior-disclosure" element={<BurbankPriorDisclosurePage />} />
                <Route path="/el-cajon-prior-disclosure" element={<ElCajonPriorDisclosurePage />} />
                <Route path="/rialto-prior-disclosure" element={<RialtoPriorDisclosurePage />} />
                <Route path="/daly-city-drawback" element={<DalyCityDrawbackPage />} />
                <Route path="/south-gate-drawback" element={<SouthGateDrawbackPage />} />
                <Route path="/mission-viejo-drawback" element={<MissionViejoDrawbackPage />} />
                <Route path="/carson-drawback" element={<CarsonDrawbackPage />} />
                <Route path="/santa-clarita-drawback" element={<SantaClaritaDrawbackPage />} />
                <Route path="/vacaville-bonded-warehouse" element={<VacavilleBondedWarehousePage />} />
                <Route path="/fairfield-bonded-warehouse" element={<FairfieldBondedWarehousePage />} />
                <Route path="/antioch-bonded-warehouse" element={<AntiochBondedWarehousePage />} />
                <Route path="/richmond-bonded-warehouse" element={<RichmondBondedWarehousePage />} />
                <Route path="/san-leandro-bonded-warehouse" element={<SanLeandroBondedWarehousePage />} />
                <Route path="/redwood-city-customs-valuation" element={<RedwoodCityCustomsValuationPage />} />
                <Route path="/lake-forest-customs-valuation" element={<LakeForestCustomsValuationPage />} />
                <Route path="/napa-customs-valuation" element={<NapaCustomsValuationPage />} />
                <Route path="/manteca-customs-valuation" element={<MantecaCustomsValuationPage />} />
                <Route path="/chino-customs-valuation" element={<ChinoCustomsValuationPage />} />

                {/* Batch 7 - More Specialized Agent Pages */}
                <Route path="/inglewood-import-compliance" element={<InglewoodImportCompliancePage />} />
                <Route path="/ventura-import-compliance" element={<VenturaImportCompliancePage />} />
                <Route path="/santa-barbara-import-compliance" element={<SantaBarbaraImportCompliancePage />} />
                <Route path="/oceanside-import-compliance" element={<OceansideImportCompliancePage />} />
                <Route path="/garden-grove-import-compliance" element={<GardenGroveImportCompliancePage />} />
                <Route path="/chula-vista-customs-broker" element={<ChulaVistaCustomsBrokerPage />} />
                <Route path="/downey-customs-broker" element={<DowneyCustomsBrokerPage />} />
                <Route path="/costa-mesa-customs-broker" element={<CostaMesaCustomsBrokerPage />} />
                <Route path="/san-mateo-customs-broker" element={<SanMateoCustomsBrokerPage />} />
                <Route path="/clovis-customs-broker" element={<ClovisCustomsBrokerPage />} />
                <Route path="/tracy-usmca" element={<TracyUSMCAPage />} />
                <Route path="/livermore-usmca" element={<LivermoreUSMCAPage />} />
                <Route path="/pleasanton-usmca" element={<PleasantonUSMCAPage />} />
                <Route path="/walnut-creek-usmca" element={<WalnutCreekUSMCAPage />} />
                <Route path="/menifee-usmca" element={<MenifeeUSMCAPage />} />
                <Route path="/hemet-country-of-origin" element={<HemetCountryOfOriginPage />} />
                <Route path="/lake-elsinore-country-of-origin" element={<LakeElsinoreCountryOfOriginPage />} />
                <Route path="/murrieta-country-of-origin" element={<MurrietaCountryOfOriginPage />} />
                <Route path="/temecula-country-of-origin" element={<TemeculaCountryOfOriginPage />} />
                <Route path="/victorville-country-of-origin" element={<VictorvilleCountryOfOriginPage />} />
                <Route path="/hesperia-customs-bond" element={<HesperiaCustomsBondPage />} />
                <Route path="/apple-valley-customs-bond" element={<AppleValleyCustomsBondPage />} />
                <Route path="/yucaipa-customs-bond" element={<YucaipaCustomsBondPage />} />
                <Route path="/loma-linda-customs-bond" element={<LomaLindaCustomsBondPage />} />
                <Route path="/upland-customs-bond" element={<UplandCustomsBondPage />} />

                {/* 404 - Must be last */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
        {/* Sticky Phone Button - Mobile Only */}
        <StickyPhoneButton showOnMobileOnly={true} />
        {/* Connection Status Monitor - PWA Offline Support */}
        <ConnectionStatus />
      </div>
    </ErrorBoundary>
  );
};

export default App;
