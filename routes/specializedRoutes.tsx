import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

// CBP Audit Pages
const IrvineCBPAuditDefensePage = lazy(() => import('../pages/IrvineCBPAuditDefensePage'));
const LosAngelesCBPAuditPage = lazy(() => import('../pages/LosAngelesCBPAuditPage'));
const LongBeachCBPAuditPage = lazy(() => import('../pages/LongBeachCBPAuditPage'));
const SanDiegoCBPAuditPage = lazy(() => import('../pages/SanDiegoCBPAuditPage'));
const OaklandCBPAuditPage = lazy(() => import('../pages/OaklandCBPAuditPage'));
const FresnoCBPAuditPage = lazy(() => import('../pages/FresnoCBPAuditPage'));
const SantaAnaCBPAuditPage = lazy(() => import('../pages/SantaAnaCBPAuditPage'));
const PasadenaCBPAuditPage = lazy(() => import('../pages/PasadenaCBPAuditPage'));
const TorranceCBPAuditPage = lazy(() => import('../pages/TorranceCBPAuditPage'));

// Section 301 Pages
const SanDiegoSection301Page = lazy(() => import('../pages/SanDiegoSection301Page'));
const SanJoseSection301Page = lazy(() => import('../pages/SanJoseSection301Page'));
const SacramentoSection301Page = lazy(() => import('../pages/SacramentoSection301Page'));
const FresnoSection301Page = lazy(() => import('../pages/FresnoSection301Page'));
const LongBeachSection301Page = lazy(() => import('../pages/LongBeachSection301Page'));
const IrvineSection301Page = lazy(() => import('../pages/IrvineSection301Page'));
const OaklandSection301Page = lazy(() => import('../pages/OaklandSection301Page'));
const AnaheimSection301Page = lazy(() => import('../pages/AnaheimSection301Page'));
const TorranceSection301Page = lazy(() => import('../pages/TorranceSection301Page'));

// UFLPA Pages
const SacramentoUFLPAAttorneyPage = lazy(() => import('../pages/SacramentoUFLPAAttorneyPage'));
const OaklandUFLPAPage = lazy(() => import('../pages/OaklandUFLPAPage'));
const BakersfieldUFLPAPage = lazy(() => import('../pages/BakersfieldUFLPAPage'));
const LongBeachUFLPAPage = lazy(() => import('../pages/LongBeachUFLPAPage'));
const SanDiegoUFLPAPage = lazy(() => import('../pages/SanDiegoUFLPAPage'));
const FresnoUFLPAPage = lazy(() => import('../pages/FresnoUFLPAPage'));
const IrvineUFLPAPage = lazy(() => import('../pages/IrvineUFLPAPage'));
const SanJoseUFLPAPage = lazy(() => import('../pages/SanJoseUFLPAPage'));
const TorranceUFLPAPage = lazy(() => import('../pages/TorranceUFLPAPage'));

// Customs Seizure Pages
const RiversideCustomsSeizurePage = lazy(() => import('../pages/RiversideCustomsSeizurePage'));
const AnaheimCustomsSeizurePage = lazy(() => import('../pages/AnaheimCustomsSeizurePage'));
const SanDiegoCustomsSeizurePage = lazy(() => import('../pages/SanDiegoCustomsSeizurePage'));
const LongBeachCustomsSeizurePage = lazy(() => import('../pages/LongBeachCustomsSeizurePage'));
const LosAngelesCustomsSeizurePage = lazy(() => import('../pages/LosAngelesCustomsSeizurePage'));
const OaklandCustomsSeizurePage = lazy(() => import('../pages/OaklandCustomsSeizurePage'));
const FresnoCustomsSeizurePage = lazy(() => import('../pages/FresnoCustomsSeizurePage'));
const SacramentoCustomsSeizurePage = lazy(() => import('../pages/SacramentoCustomsSeizurePage'));
const IrvineCustomsSeizurePage = lazy(() => import('../pages/IrvineCustomsSeizurePage'));

// Industry-Specific Pages
const FremontSemiconductorTariffPage = lazy(() => import('../pages/FremontSemiconductorTariffPage'));
const SanFranciscoChinaTariffPage = lazy(() => import('../pages/SanFranciscoChinaTariffPage'));
const SanJosePharmaImportPage = lazy(() => import('../pages/SanJosePharmaImportPage'));
const FremontAutomotiveTariffPage = lazy(() => import('../pages/FremontAutomotiveTariffPage'));
const LosAngelesAutomotiveTariffPage = lazy(() => import('../pages/LosAngelesAutomotiveTariffPage'));
const SanDiegoSemiconductorTariffPage = lazy(() => import('../pages/SanDiegoSemiconductorTariffPage'));
const OaklandPharmaceuticalImportPage = lazy(() => import('../pages/OaklandPharmaceuticalImportPage'));
const FresnoAgriculturalEquipmentTariffPage = lazy(() => import('../pages/FresnoAgriculturalEquipmentTariffPage'));
const IrvineMedicalDeviceImportPage = lazy(() => import('../pages/IrvineMedicalDeviceImportPage'));

// Anti-Dumping Pages
const SantaClaraAntiDumpingPage = lazy(() => import('../pages/SantaClaraAntiDumpingPage'));
const StocktonAntiDumpingPage = lazy(() => import('../pages/StocktonAntiDumpingPage'));
const ModestoAntiDumpingPage = lazy(() => import('../pages/ModestoAntiDumpingPage'));
const GlendaleAntiDumpingPage = lazy(() => import('../pages/GlendaleAntiDumpingPage'));
const HuntingtonBeachAntiDumpingPage = lazy(() => import('../pages/HuntingtonBeachAntiDumpingPage'));

// Countervailing Duty Pages
const SantaRosaCountervailingPage = lazy(() => import('../pages/SantaRosaCountervailingPage'));
const ElkGroveCountervailingPage = lazy(() => import('../pages/ElkGroveCountervailingPage'));
const CoronaCountervailingPage = lazy(() => import('../pages/CoronaCountervailingPage'));
const LancasterCountervailingPage = lazy(() => import('../pages/LancasterCountervailingPage'));
const PalmdaleCountervailingPage = lazy(() => import('../pages/PalmdaleCountervailingPage'));

// Foreign Trade Zone Pages
const SalinasTradeZonePage = lazy(() => import('../pages/SalinasTradeZonePage'));
const PomonaTradeZonePage = lazy(() => import('../pages/PomonaTradeZonePage'));
const HaywardTradeZonePage = lazy(() => import('../pages/HaywardTradeZonePage'));
const EscondidoTradeZonePage = lazy(() => import('../pages/EscondidoTradeZonePage'));
const SunnyvaleTradeZonePage = lazy(() => import('../pages/SunnyvaleTradeZonePage'));

// HTS Classification Pages
const FullertonHTSClassificationPage = lazy(() => import('../pages/FullertonHTSClassificationPage'));
const ThousandOaksHTSClassificationPage = lazy(() => import('../pages/ThousandOaksHTSClassificationPage'));
const VisaliaHTSClassificationPage = lazy(() => import('../pages/VisaliaHTSClassificationPage'));
const RosevilleHTSClassificationPage = lazy(() => import('../pages/RosevilleHTSClassificationPage'));
const ConcordHTSClassificationPage = lazy(() => import('../pages/ConcordHTSClassificationPage'));

// Export Control Pages
const SimiValleyExportControlPage = lazy(() => import('../pages/SimiValleyExportControlPage'));
const SantaMariaExportControlPage = lazy(() => import('../pages/SantaMariaExportControlPage'));
const BerkeleyExportControlPage = lazy(() => import('../pages/BerkeleyExportControlPage'));
const ElMonteExportControlPage = lazy(() => import('../pages/ElMonteExportControlPage'));
const CarlsbadExportControlPage = lazy(() => import('../pages/CarlsbadExportControlPage'));

// Penalty Mitigation Pages
const RanchoCucamongaPenaltyMitigationPage = lazy(() => import('../pages/RanchoCucamongaPenaltyMitigationPage'));
const OntarioPenaltyMitigationPage = lazy(() => import('../pages/OntarioPenaltyMitigationPage'));
const FontanaPenaltyMitigationPage = lazy(() => import('../pages/FontanaPenaltyMitigationPage'));
const MorenoValleyPenaltyMitigationPage = lazy(() => import('../pages/MorenoValleyPenaltyMitigationPage'));
const SanBernardinoPenaltyMitigationPage = lazy(() => import('../pages/SanBernardinoPenaltyMitigationPage'));

// Prior Disclosure Pages
const WestCovinaPriorDisclosurePage = lazy(() => import('../pages/WestCovinaPriorDisclosurePage'));
const NorwalkPriorDisclosurePage = lazy(() => import('../pages/NorwalkPriorDisclosurePage'));
const BurbankPriorDisclosurePage = lazy(() => import('../pages/BurbankPriorDisclosurePage'));
const ElCajonPriorDisclosurePage = lazy(() => import('../pages/ElCajonPriorDisclosurePage'));
const RialtoPriorDisclosurePage = lazy(() => import('../pages/RialtoPriorDisclosurePage'));

// Drawback Pages
const DalyCityDrawbackPage = lazy(() => import('../pages/DalyCityDrawbackPage'));
const SouthGateDrawbackPage = lazy(() => import('../pages/SouthGateDrawbackPage'));
const MissionViejoDrawbackPage = lazy(() => import('../pages/MissionViejoDrawbackPage'));
const CarsonDrawbackPage = lazy(() => import('../pages/CarsonDrawbackPage'));
const SantaClaritaDrawbackPage = lazy(() => import('../pages/SantaClaritaDrawbackPage'));

// Bonded Warehouse Pages
const VacavilleBondedWarehousePage = lazy(() => import('../pages/VacavilleBondedWarehousePage'));
const FairfieldBondedWarehousePage = lazy(() => import('../pages/FairfieldBondedWarehousePage'));
const AntiochBondedWarehousePage = lazy(() => import('../pages/AntiochBondedWarehousePage'));
const RichmondBondedWarehousePage = lazy(() => import('../pages/RichmondBondedWarehousePage'));
const SanLeandroBondedWarehousePage = lazy(() => import('../pages/SanLeandroBondedWarehousePage'));

// Customs Valuation Pages
const RedwoodCityCustomsValuationPage = lazy(() => import('../pages/RedwoodCityCustomsValuationPage'));
const LakeForestCustomsValuationPage = lazy(() => import('../pages/LakeForestCustomsValuationPage'));
const NapaCustomsValuationPage = lazy(() => import('../pages/NapaCustomsValuationPage'));
const MantecaCustomsValuationPage = lazy(() => import('../pages/MantecaCustomsValuationPage'));
const ChinoCustomsValuationPage = lazy(() => import('../pages/ChinoCustomsValuationPage'));

// Import Compliance Pages
const InglewoodImportCompliancePage = lazy(() => import('../pages/InglewoodImportCompliancePage'));
const VenturaImportCompliancePage = lazy(() => import('../pages/VenturaImportCompliancePage'));
const SantaBarbaraImportCompliancePage = lazy(() => import('../pages/SantaBarbaraImportCompliancePage'));
const OceansideImportCompliancePage = lazy(() => import('../pages/OceansideImportCompliancePage'));
const GardenGroveImportCompliancePage = lazy(() => import('../pages/GardenGroveImportCompliancePage'));

// Customs Broker Pages
const ChulaVistaCustomsBrokerPage = lazy(() => import('../pages/ChulaVistaCustomsBrokerPage'));
const DowneyCustomsBrokerPage = lazy(() => import('../pages/DowneyCustomsBrokerPage'));
const CostaMesaCustomsBrokerPage = lazy(() => import('../pages/CostaMesaCustomsBrokerPage'));
const SanMateoCustomsBrokerPage = lazy(() => import('../pages/SanMateoCustomsBrokerPage'));
const ClovisCustomsBrokerPage = lazy(() => import('../pages/ClovisCustomsBrokerPage'));

// USMCA Pages
const TracyUSMCAPage = lazy(() => import('../pages/TracyUSMCAPage'));
const LivermoreUSMCAPage = lazy(() => import('../pages/LivermoreUSMCAPage'));
const PleasantonUSMCAPage = lazy(() => import('../pages/PleasantonUSMCAPage'));
const WalnutCreekUSMCAPage = lazy(() => import('../pages/WalnutCreekUSMCAPage'));
const MenifeeUSMCAPage = lazy(() => import('../pages/MenifeeUSMCAPage'));

// Country of Origin Pages
const HemetCountryOfOriginPage = lazy(() => import('../pages/HemetCountryOfOriginPage'));
const LakeElsinoreCountryOfOriginPage = lazy(() => import('../pages/LakeElsinoreCountryOfOriginPage'));
const MurrietaCountryOfOriginPage = lazy(() => import('../pages/MurrietaCountryOfOriginPage'));
const TemeculaCountryOfOriginPage = lazy(() => import('../pages/TemeculaCountryOfOriginPage'));
const VictorvilleCountryOfOriginPage = lazy(() => import('../pages/VictorvilleCountryOfOriginPage'));

// Customs Bond Pages
const HesperiaCustomsBondPage = lazy(() => import('../pages/HesperiaCustomsBondPage'));
const AppleValleyCustomsBondPage = lazy(() => import('../pages/AppleValleyCustomsBondPage'));
const YucaipaCustomsBondPage = lazy(() => import('../pages/YucaipaCustomsBondPage'));
const LomaLindaCustomsBondPage = lazy(() => import('../pages/LomaLindaCustomsBondPage'));
const UplandCustomsBondPage = lazy(() => import('../pages/UplandCustomsBondPage'));

export const specializedRoutes: RouteObject[] = [
  // CBP Audit Pages
  { path: '/irvine-cbp-audit-defense', element: <IrvineCBPAuditDefensePage /> },
  { path: '/los-angeles-cbp-audit', element: <LosAngelesCBPAuditPage /> },
  { path: '/long-beach-cbp-audit', element: <LongBeachCBPAuditPage /> },
  { path: '/san-diego-cbp-audit', element: <SanDiegoCBPAuditPage /> },
  { path: '/oakland-cbp-audit', element: <OaklandCBPAuditPage /> },
  { path: '/fresno-cbp-audit', element: <FresnoCBPAuditPage /> },
  { path: '/santa-ana-cbp-audit', element: <SantaAnaCBPAuditPage /> },
  { path: '/pasadena-cbp-audit', element: <PasadenaCBPAuditPage /> },
  { path: '/torrance-cbp-audit', element: <TorranceCBPAuditPage /> },

  // Section 301 Pages
  { path: '/san-diego-section-301', element: <SanDiegoSection301Page /> },
  { path: '/san-jose-section-301', element: <SanJoseSection301Page /> },
  { path: '/sacramento-section-301', element: <SacramentoSection301Page /> },
  { path: '/fresno-section-301', element: <FresnoSection301Page /> },
  { path: '/long-beach-section-301', element: <LongBeachSection301Page /> },
  { path: '/irvine-section-301', element: <IrvineSection301Page /> },
  { path: '/oakland-section-301', element: <OaklandSection301Page /> },
  { path: '/anaheim-section-301', element: <AnaheimSection301Page /> },
  { path: '/torrance-section-301', element: <TorranceSection301Page /> },

  // UFLPA Pages
  { path: '/sacramento-uflpa-attorney', element: <SacramentoUFLPAAttorneyPage /> },
  { path: '/oakland-uflpa', element: <OaklandUFLPAPage /> },
  { path: '/bakersfield-uflpa', element: <BakersfieldUFLPAPage /> },
  { path: '/long-beach-uflpa', element: <LongBeachUFLPAPage /> },
  { path: '/san-diego-uflpa', element: <SanDiegoUFLPAPage /> },
  { path: '/fresno-uflpa', element: <FresnoUFLPAPage /> },
  { path: '/irvine-uflpa', element: <IrvineUFLPAPage /> },
  { path: '/san-jose-uflpa', element: <SanJoseUFLPAPage /> },
  { path: '/torrance-uflpa', element: <TorranceUFLPAPage /> },

  // Customs Seizure Pages
  { path: '/riverside-customs-seizure', element: <RiversideCustomsSeizurePage /> },
  { path: '/anaheim-customs-seizure', element: <AnaheimCustomsSeizurePage /> },
  { path: '/san-diego-customs-seizure', element: <SanDiegoCustomsSeizurePage /> },
  { path: '/long-beach-customs-seizure', element: <LongBeachCustomsSeizurePage /> },
  { path: '/los-angeles-customs-seizure', element: <LosAngelesCustomsSeizurePage /> },
  { path: '/oakland-customs-seizure', element: <OaklandCustomsSeizurePage /> },
  { path: '/fresno-customs-seizure', element: <FresnoCustomsSeizurePage /> },
  { path: '/sacramento-customs-seizure', element: <SacramentoCustomsSeizurePage /> },
  { path: '/irvine-customs-seizure', element: <IrvineCustomsSeizurePage /> },

  // Industry-Specific Pages
  { path: '/fremont-semiconductor-tariff', element: <FremontSemiconductorTariffPage /> },
  { path: '/san-francisco-china-tariff', element: <SanFranciscoChinaTariffPage /> },
  { path: '/san-jose-pharma-import', element: <SanJosePharmaImportPage /> },
  { path: '/fremont-automotive-tariff', element: <FremontAutomotiveTariffPage /> },
  { path: '/los-angeles-automotive-tariff', element: <LosAngelesAutomotiveTariffPage /> },
  { path: '/san-diego-semiconductor-tariff', element: <SanDiegoSemiconductorTariffPage /> },
  { path: '/oakland-pharmaceutical-import', element: <OaklandPharmaceuticalImportPage /> },
  { path: '/fresno-agricultural-equipment-tariff', element: <FresnoAgriculturalEquipmentTariffPage /> },
  { path: '/irvine-medical-device-import', element: <IrvineMedicalDeviceImportPage /> },

  // Anti-Dumping Pages
  { path: '/santa-clara-anti-dumping', element: <SantaClaraAntiDumpingPage /> },
  { path: '/stockton-anti-dumping', element: <StocktonAntiDumpingPage /> },
  { path: '/modesto-anti-dumping', element: <ModestoAntiDumpingPage /> },
  { path: '/glendale-anti-dumping', element: <GlendaleAntiDumpingPage /> },
  { path: '/huntington-beach-anti-dumping', element: <HuntingtonBeachAntiDumpingPage /> },

  // Countervailing Duty Pages
  { path: '/santa-rosa-countervailing', element: <SantaRosaCountervailingPage /> },
  { path: '/elk-grove-countervailing', element: <ElkGroveCountervailingPage /> },
  { path: '/corona-countervailing', element: <CoronaCountervailingPage /> },
  { path: '/lancaster-countervailing', element: <LancasterCountervailingPage /> },
  { path: '/palmdale-countervailing', element: <PalmdaleCountervailingPage /> },

  // Foreign Trade Zone Pages
  { path: '/salinas-trade-zone', element: <SalinasTradeZonePage /> },
  { path: '/pomona-trade-zone', element: <PomonaTradeZonePage /> },
  { path: '/hayward-trade-zone', element: <HaywardTradeZonePage /> },
  { path: '/escondido-trade-zone', element: <EscondidoTradeZonePage /> },
  { path: '/sunnyvale-trade-zone', element: <SunnyvaleTradeZonePage /> },

  // HTS Classification Pages
  { path: '/fullerton-hts-classification', element: <FullertonHTSClassificationPage /> },
  { path: '/thousand-oaks-hts-classification', element: <ThousandOaksHTSClassificationPage /> },
  { path: '/visalia-hts-classification', element: <VisaliaHTSClassificationPage /> },
  { path: '/roseville-hts-classification', element: <RosevilleHTSClassificationPage /> },
  { path: '/concord-hts-classification', element: <ConcordHTSClassificationPage /> },

  // Export Control Pages
  { path: '/simi-valley-export-control', element: <SimiValleyExportControlPage /> },
  { path: '/santa-maria-export-control', element: <SantaMariaExportControlPage /> },
  { path: '/berkeley-export-control', element: <BerkeleyExportControlPage /> },
  { path: '/el-monte-export-control', element: <ElMonteExportControlPage /> },
  { path: '/carlsbad-export-control', element: <CarlsbadExportControlPage /> },

  // Penalty Mitigation Pages
  { path: '/rancho-cucamonga-penalty-mitigation', element: <RanchoCucamongaPenaltyMitigationPage /> },
  { path: '/ontario-penalty-mitigation', element: <OntarioPenaltyMitigationPage /> },
  { path: '/fontana-penalty-mitigation', element: <FontanaPenaltyMitigationPage /> },
  { path: '/moreno-valley-penalty-mitigation', element: <MorenoValleyPenaltyMitigationPage /> },
  { path: '/san-bernardino-penalty-mitigation', element: <SanBernardinoPenaltyMitigationPage /> },

  // Prior Disclosure Pages
  { path: '/west-covina-prior-disclosure', element: <WestCovinaPriorDisclosurePage /> },
  { path: '/norwalk-prior-disclosure', element: <NorwalkPriorDisclosurePage /> },
  { path: '/burbank-prior-disclosure', element: <BurbankPriorDisclosurePage /> },
  { path: '/el-cajon-prior-disclosure', element: <ElCajonPriorDisclosurePage /> },
  { path: '/rialto-prior-disclosure', element: <RialtoPriorDisclosurePage /> },

  // Drawback Pages
  { path: '/daly-city-drawback', element: <DalyCityDrawbackPage /> },
  { path: '/south-gate-drawback', element: <SouthGateDrawbackPage /> },
  { path: '/mission-viejo-drawback', element: <MissionViejoDrawbackPage /> },
  { path: '/carson-drawback', element: <CarsonDrawbackPage /> },
  { path: '/santa-clarita-drawback', element: <SantaClaritaDrawbackPage /> },

  // Bonded Warehouse Pages
  { path: '/vacaville-bonded-warehouse', element: <VacavilleBondedWarehousePage /> },
  { path: '/fairfield-bonded-warehouse', element: <FairfieldBondedWarehousePage /> },
  { path: '/antioch-bonded-warehouse', element: <AntiochBondedWarehousePage /> },
  { path: '/richmond-bonded-warehouse', element: <RichmondBondedWarehousePage /> },
  { path: '/san-leandro-bonded-warehouse', element: <SanLeandroBondedWarehousePage /> },

  // Customs Valuation Pages
  { path: '/redwood-city-customs-valuation', element: <RedwoodCityCustomsValuationPage /> },
  { path: '/lake-forest-customs-valuation', element: <LakeForestCustomsValuationPage /> },
  { path: '/napa-customs-valuation', element: <NapaCustomsValuationPage /> },
  { path: '/manteca-customs-valuation', element: <MantecaCustomsValuationPage /> },
  { path: '/chino-customs-valuation', element: <ChinoCustomsValuationPage /> },

  // Import Compliance Pages
  { path: '/inglewood-import-compliance', element: <InglewoodImportCompliancePage /> },
  { path: '/ventura-import-compliance', element: <VenturaImportCompliancePage /> },
  { path: '/santa-barbara-import-compliance', element: <SantaBarbaraImportCompliancePage /> },
  { path: '/oceanside-import-compliance', element: <OceansideImportCompliancePage /> },
  { path: '/garden-grove-import-compliance', element: <GardenGroveImportCompliancePage /> },

  // Customs Broker Pages
  { path: '/chula-vista-customs-broker', element: <ChulaVistaCustomsBrokerPage /> },
  { path: '/downey-customs-broker', element: <DowneyCustomsBrokerPage /> },
  { path: '/costa-mesa-customs-broker', element: <CostaMesaCustomsBrokerPage /> },
  { path: '/san-mateo-customs-broker', element: <SanMateoCustomsBrokerPage /> },
  { path: '/clovis-customs-broker', element: <ClovisCustomsBrokerPage /> },

  // USMCA Pages
  { path: '/tracy-usmca', element: <TracyUSMCAPage /> },
  { path: '/livermore-usmca', element: <LivermoreUSMCAPage /> },
  { path: '/pleasanton-usmca', element: <PleasantonUSMCAPage /> },
  { path: '/walnut-creek-usmca', element: <WalnutCreekUSMCAPage /> },
  { path: '/menifee-usmca', element: <MenifeeUSMCAPage /> },

  // Country of Origin Pages
  { path: '/hemet-country-of-origin', element: <HemetCountryOfOriginPage /> },
  { path: '/lake-elsinore-country-of-origin', element: <LakeElsinoreCountryOfOriginPage /> },
  { path: '/murrieta-country-of-origin', element: <MurrietaCountryOfOriginPage /> },
  { path: '/temecula-country-of-origin', element: <TemeculaCountryOfOriginPage /> },
  { path: '/victorville-country-of-origin', element: <VictorvilleCountryOfOriginPage /> },

  // Customs Bond Pages
  { path: '/hesperia-customs-bond', element: <HesperiaCustomsBondPage /> },
  { path: '/apple-valley-customs-bond', element: <AppleValleyCustomsBondPage /> },
  { path: '/yucaipa-customs-bond', element: <YucaipaCustomsBondPage /> },
  { path: '/loma-linda-customs-bond', element: <LomaLindaCustomsBondPage /> },
  { path: '/upland-customs-bond', element: <UplandCustomsBondPage /> },
];
