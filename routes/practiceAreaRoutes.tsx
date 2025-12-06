import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

// Practice Area page lazy imports
const LosAngelesPortPage = lazy(() => import('../pages/LosAngelesPortPage'));
const LosAngelesLongBeachPortCustomsAttorneyPage = lazy(() => import('../pages/LosAngelesLongBeachPortCustomsAttorneyPage'));
const BayAreaTradeLawPage = lazy(() => import('../pages/BayAreaTradeLawPage'));
const CalabasasCustomsAttorneyPage = lazy(() => import('../pages/CalabasasCustomsAttorneyPage'));
const CustomsDefensePage = lazy(() => import('../pages/CustomsDefensePage'));
const RegulatoryCompliancePage = lazy(() => import('../pages/RegulatoryCompliancePage'));
const ExportControlsPage = lazy(() => import('../pages/ExportControlsPage'));

// Major City Practice Pages
const LosAngelesTariffLawyerPage = lazy(() => import('../pages/LosAngelesTariffLawyerPage'));
const SanFranciscoCustomsAttorneyPage = lazy(() => import('../pages/SanFranciscoCustomsAttorneyPage'));
const SanDiegoCustomsLawyerPage = lazy(() => import('../pages/SanDiegoCustomsLawyerPage'));
const SanJoseCustomsLawyerPage = lazy(() => import('../pages/SanJoseCustomsLawyerPage'));
const OaklandTradeAttorneyPage = lazy(() => import('../pages/OaklandTradeAttorneyPage'));
const LongBeachPortAttorneyPage = lazy(() => import('../pages/LongBeachPortAttorneyPage'));
const SacramentoTariffAttorneyPage = lazy(() => import('../pages/SacramentoTariffAttorneyPage'));
const FresnoCustomsAttorneyPage = lazy(() => import('../pages/FresnoCustomsAttorneyPage'));

// Specialty Practice Pages
const LosAngelesSection301Page = lazy(() => import('../pages/LosAngelesSection301Page'));
const LosAngelesCBPAuditDefensePage = lazy(() => import('../pages/LosAngelesCBPAuditDefensePage'));
const LosAngelesFashionTariffPage = lazy(() => import('../pages/LosAngelesFashionTariffPage'));
const LosAngelesUSMCACertificationPage = lazy(() => import('../pages/LosAngelesUSMCACertificationPage'));
const LongBeachAntidumpingDefensePage = lazy(() => import('../pages/LongBeachAntidumpingDefensePage'));
const LongBeachDutyDrawbackPage = lazy(() => import('../pages/LongBeachDutyDrawbackPage'));
const LongBeachFTZCompliancePage = lazy(() => import('../pages/LongBeachFTZCompliancePage'));
const LongBeachMaritimeTariffPage = lazy(() => import('../pages/LongBeachMaritimeTariffPage'));
const SanFranciscoExportControlsPage = lazy(() => import('../pages/SanFranciscoExportControlsPage'));
const SanFranciscoForcedLaborPage = lazy(() => import('../pages/SanFranciscoForcedLaborPage'));
const SanFranciscoPriorDisclosurePage = lazy(() => import('../pages/SanFranciscoPriorDisclosurePage'));
const SanFranciscoTechTradePage = lazy(() => import('../pages/SanFranciscoTechTradePage'));
const SanJoseTechExportControlsPage = lazy(() => import('../pages/SanJoseTechExportControlsPage'));
const OaklandCustomsBrokerPage = lazy(() => import('../pages/OaklandCustomsBrokerPage'));
const OaklandCustomsPenaltyPage = lazy(() => import('../pages/OaklandCustomsPenaltyPage'));
const OaklandMaritimeTradePage = lazy(() => import('../pages/OaklandMaritimeTradePage'));
const OaklandPortOperationsPage = lazy(() => import('../pages/OaklandPortOperationsPage'));
const PortOfOaklandTariffPage = lazy(() => import('../pages/PortOfOaklandTariffPage'));
const PortOfSanDiegoCustomsPage = lazy(() => import('../pages/PortOfSanDiegoCustomsPage'));
const PortOfStocktonTradePage = lazy(() => import('../pages/PortOfStocktonTradePage'));
const SacramentoTradeCompliancePage = lazy(() => import('../pages/SacramentoTradeCompliancePage'));
const SacramentoValleyTradePage = lazy(() => import('../pages/SacramentoValleyTradePage'));
const SacramentoWineExportPage = lazy(() => import('../pages/SacramentoWineExportPage'));
const SanDiegoEcommerceTariffPage = lazy(() => import('../pages/SanDiegoEcommerceTariffPage'));
const SanDiegoPharmaImportPage = lazy(() => import('../pages/SanDiegoPharmaImportPage'));
const SanDiegoTradeLitigationPage = lazy(() => import('../pages/SanDiegoTradeLitigationPage'));
const SanDiegoUFLPACompliancePage = lazy(() => import('../pages/SanDiegoUFLPACompliancePage'));

// Regional Practice Pages
const SiliconValleyTradeLawyerPage = lazy(() => import('../pages/SiliconValleyTradeLawyerPage'));
const SouthernCaliforniaTariffLawyerPage = lazy(() => import('../pages/SouthernCaliforniaTariffLawyerPage'));
const InlandEmpireCustomsAttorneyPage = lazy(() => import('../pages/InlandEmpireCustomsAttorneyPage'));
const CentralValleyTariffLawyerPage = lazy(() => import('../pages/CentralValleyTariffLawyerPage'));
const OrangeCountyTariffLawyerPage = lazy(() => import('../pages/OrangeCountyTariffLawyerPage'));
const SanFernandoValleyTariffPage = lazy(() => import('../pages/SanFernandoValleyTariffPage'));

// Trending 2025 Tariff Pages
const Trump2025TariffAttorneyPage = lazy(() => import('../pages/Trump2025TariffAttorneyPage'));

export const practiceAreaRoutes: RouteObject[] = [
  // Main Practice Area Pages
  { path: '/los-angeles-port-customs-attorney', element: <LosAngelesPortPage /> },
  { path: '/los-angeles-long-beach-port-customs-attorney', element: <LosAngelesLongBeachPortCustomsAttorneyPage /> },
  { path: '/bay-area-trade-law-attorney', element: <BayAreaTradeLawPage /> },
  { path: '/calabasas-customs-attorney', element: <CalabasasCustomsAttorneyPage /> },
  { path: '/customs-defense', element: <CustomsDefensePage /> },
  { path: '/regulatory-compliance', element: <RegulatoryCompliancePage /> },
  { path: '/export-controls', element: <ExportControlsPage /> },

  // Major Cities
  { path: '/los-angeles-tariff-lawyer', element: <LosAngelesTariffLawyerPage /> },
  { path: '/san-francisco-customs-attorney', element: <SanFranciscoCustomsAttorneyPage /> },
  { path: '/san-diego-customs-lawyer', element: <SanDiegoCustomsLawyerPage /> },
  { path: '/san-jose-customs-lawyer', element: <SanJoseCustomsLawyerPage /> },
  { path: '/oakland-trade-attorney', element: <OaklandTradeAttorneyPage /> },
  { path: '/long-beach-port-attorney', element: <LongBeachPortAttorneyPage /> },
  { path: '/sacramento-tariff-attorney', element: <SacramentoTariffAttorneyPage /> },
  { path: '/fresno-customs-attorney', element: <FresnoCustomsAttorneyPage /> },

  // LA Specialty Pages
  { path: '/los-angeles-section-301', element: <LosAngelesSection301Page /> },
  { path: '/los-angeles-cbp-audit-defense', element: <LosAngelesCBPAuditDefensePage /> },
  { path: '/los-angeles-fashion-tariff', element: <LosAngelesFashionTariffPage /> },
  { path: '/los-angeles-usmca-certification', element: <LosAngelesUSMCACertificationPage /> },

  // Long Beach Specialty
  { path: '/long-beach-antidumping-defense', element: <LongBeachAntidumpingDefensePage /> },
  { path: '/long-beach-duty-drawback', element: <LongBeachDutyDrawbackPage /> },
  { path: '/long-beach-ftz-compliance', element: <LongBeachFTZCompliancePage /> },
  { path: '/long-beach-maritime-tariff', element: <LongBeachMaritimeTariffPage /> },

  // San Francisco Specialty
  { path: '/san-francisco-export-controls', element: <SanFranciscoExportControlsPage /> },
  { path: '/san-francisco-forced-labor', element: <SanFranciscoForcedLaborPage /> },
  { path: '/san-francisco-prior-disclosure', element: <SanFranciscoPriorDisclosurePage /> },
  { path: '/san-francisco-tech-trade', element: <SanFranciscoTechTradePage /> },
  { path: '/san-jose-tech-export-controls', element: <SanJoseTechExportControlsPage /> },

  // Oakland Specialty
  { path: '/oakland-customs-broker', element: <OaklandCustomsBrokerPage /> },
  { path: '/oakland-customs-penalty', element: <OaklandCustomsPenaltyPage /> },
  { path: '/oakland-maritime-trade', element: <OaklandMaritimeTradePage /> },
  { path: '/oakland-port-operations', element: <OaklandPortOperationsPage /> },
  { path: '/port-of-oakland-tariff', element: <PortOfOaklandTariffPage /> },

  // Other Port Pages
  { path: '/port-of-san-diego-customs', element: <PortOfSanDiegoCustomsPage /> },
  { path: '/port-of-stockton-trade', element: <PortOfStocktonTradePage /> },

  // Sacramento Specialty
  { path: '/sacramento-trade-compliance', element: <SacramentoTradeCompliancePage /> },
  { path: '/sacramento-valley-trade', element: <SacramentoValleyTradePage /> },
  { path: '/sacramento-wine-export', element: <SacramentoWineExportPage /> },

  // San Diego Specialty
  { path: '/san-diego-ecommerce-tariff', element: <SanDiegoEcommerceTariffPage /> },
  { path: '/san-diego-pharma-import', element: <SanDiegoPharmaImportPage /> },
  { path: '/san-diego-trade-litigation', element: <SanDiegoTradeLitigationPage /> },
  { path: '/san-diego-uflpa-compliance', element: <SanDiegoUFLPACompliancePage /> },

  // Regional Pages
  { path: '/silicon-valley-trade-lawyer', element: <SiliconValleyTradeLawyerPage /> },
  { path: '/southern-california-tariff-lawyer', element: <SouthernCaliforniaTariffLawyerPage /> },
  { path: '/inland-empire-customs-attorney', element: <InlandEmpireCustomsAttorneyPage /> },
  { path: '/central-valley-tariff-lawyer', element: <CentralValleyTariffLawyerPage /> },
  { path: '/orange-county-tariff-lawyer', element: <OrangeCountyTariffLawyerPage /> },
  { path: '/san-fernando-valley-tariff', element: <SanFernandoValleyTariffPage /> },

  // Trending 2025
  { path: '/trump-2025-tariff-attorney', element: <Trump2025TariffAttorneyPage /> },
];
