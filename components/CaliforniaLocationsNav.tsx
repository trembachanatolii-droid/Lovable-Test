import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';

interface LocationLink {
  name: string;
  route: string;
  region: string;
}

// All 83+ California city pages organized by region
const californiaLocations: LocationLink[] = [
  // Southern California - Los Angeles Area
  { name: 'Calabasas', route: '#calabasas-customs-attorney', region: 'Los Angeles Area' },
  { name: 'Los Angeles', route: '#los-angeles-tariff-lawyer', region: 'Los Angeles Area' },
  { name: 'Los Angeles Port', route: '#los-angeles-port-customs-attorney', region: 'Los Angeles Area' },
  { name: 'Los Angeles CBP Audit', route: '#los-angeles-cbp-audit-defense', region: 'Los Angeles Area' },
  { name: 'Los Angeles Fashion', route: '#los-angeles-fashion-tariff', region: 'Los Angeles Area' },
  { name: 'Los Angeles Section 301', route: '#los-angeles-section-301', region: 'Los Angeles Area' },
  { name: 'Los Angeles USMCA', route: '#los-angeles-usmca-certification', region: 'Los Angeles Area' },
  { name: 'Long Beach', route: '#long-beach-port-attorney', region: 'Los Angeles Area' },
  { name: 'Long Beach Antidumping', route: '#long-beach-antidumping-defense', region: 'Los Angeles Area' },
  { name: 'Long Beach Duty Drawback', route: '#long-beach-duty-drawback', region: 'Los Angeles Area' },
  { name: 'Long Beach FTZ', route: '#long-beach-ftz-compliance', region: 'Los Angeles Area' },
  { name: 'Long Beach Maritime', route: '#long-beach-maritime-tariff', region: 'Los Angeles Area' },
  { name: 'Pasadena', route: '#pasadena-tariff-lawyer', region: 'Los Angeles Area' },
  { name: 'Glendale', route: '#glendale-tariff-attorney', region: 'Los Angeles Area' },
  { name: 'Torrance', route: '#torrance-trade-attorney', region: 'Los Angeles Area' },
  { name: 'San Fernando Valley', route: '#san-fernando-valley-tariff', region: 'Los Angeles Area' },
  { name: 'Santa Clarita', route: '#santa-clarita-customs-lawyer', region: 'Los Angeles Area' },
  { name: 'Palmdale', route: '#palmdale-customs-attorney', region: 'Los Angeles Area' },
  { name: 'Lancaster', route: '#lancaster-trade-attorney', region: 'Los Angeles Area' },

  // Orange County
  { name: 'Orange County', route: '#orange-county-tariff-lawyer', region: 'Orange County' },
  { name: 'Irvine', route: '#irvine-trade-compliance', region: 'Orange County' },
  { name: 'Anaheim', route: '#anaheim-customs-attorney', region: 'Orange County' },
  { name: 'Anaheim Manufacturing', route: '#anaheim-manufacturing-trade', region: 'Orange County' },
  { name: 'Fullerton', route: '#fullerton-tariff-attorney', region: 'Orange County' },
  { name: 'Huntington Beach', route: '#huntington-beach-tariff-lawyer', region: 'Orange County' },
  { name: 'Santa Ana', route: '#santa-ana-trade-attorney', region: 'Orange County' },

  // Inland Empire
  { name: 'Inland Empire', route: '#inland-empire-customs-attorney', region: 'Inland Empire' },
  { name: 'Riverside', route: '#riverside-tariff-attorney', region: 'Inland Empire' },
  { name: 'Ontario', route: '#ontario-trade-compliance', region: 'Inland Empire' },
  { name: 'Rancho Cucamonga', route: '#rancho-cucamonga-tariff-lawyer', region: 'Inland Empire' },
  { name: 'Fontana', route: '#fontana-trade-attorney', region: 'Inland Empire' },
  { name: 'Moreno Valley', route: '#moreno-valley-customs', region: 'Inland Empire' },
  { name: 'Corona', route: '#corona-trade-compliance', region: 'Inland Empire' },

  // San Diego & Border
  { name: 'San Diego', route: '#san-diego-customs-lawyer', region: 'San Diego' },
  { name: 'San Diego E-Commerce', route: '#san-diego-ecommerce-tariff', region: 'San Diego' },
  { name: 'San Diego Pharma', route: '#san-diego-pharma-import', region: 'San Diego' },
  { name: 'San Diego Trade Litigation', route: '#san-diego-trade-litigation', region: 'San Diego' },
  { name: 'San Diego UFLPA', route: '#san-diego-uflpa-compliance', region: 'San Diego' },
  { name: 'Port of San Diego', route: '#port-of-san-diego-customs', region: 'San Diego' },
  { name: 'Chula Vista', route: '#chula-vista-tariff-lawyer', region: 'San Diego' },
  { name: 'Oceanside', route: '#oceanside-tariff-attorney', region: 'San Diego' },
  { name: 'Murrieta', route: '#murrieta-tariff-lawyer', region: 'San Diego' },
  { name: 'Temecula', route: '#temecula-trade-attorney', region: 'San Diego' },

  // Ventura County
  { name: 'Oxnard', route: '#oxnard-tariff-attorney', region: 'Ventura County' },
  { name: 'Southern California', route: '#southern-california-tariff-lawyer', region: 'Ventura County' },

  // Bay Area
  { name: 'San Francisco', route: '#san-francisco-customs-attorney', region: 'Bay Area' },
  { name: 'San Francisco Export Controls', route: '#san-francisco-export-controls', region: 'Bay Area' },
  { name: 'San Francisco Forced Labor', route: '#san-francisco-forced-labor', region: 'Bay Area' },
  { name: 'San Francisco Prior Disclosure', route: '#san-francisco-prior-disclosure', region: 'Bay Area' },
  { name: 'San Francisco Tech Trade', route: '#san-francisco-tech-trade', region: 'Bay Area' },
  { name: 'Oakland', route: '#oakland-trade-attorney', region: 'Bay Area' },
  { name: 'Oakland Customs Broker', route: '#oakland-customs-broker', region: 'Bay Area' },
  { name: 'Oakland Customs Penalty', route: '#oakland-customs-penalty', region: 'Bay Area' },
  { name: 'Oakland Maritime', route: '#oakland-maritime-trade', region: 'Bay Area' },
  { name: 'Oakland Port Operations', route: '#oakland-port-operations', region: 'Bay Area' },
  { name: 'Port of Oakland', route: '#port-of-oakland-tariff', region: 'Bay Area' },
  { name: 'San Jose', route: '#san-jose-customs-lawyer', region: 'Bay Area' },
  { name: 'San Jose Tech Export', route: '#san-jose-tech-export-controls', region: 'Bay Area' },
  { name: 'Silicon Valley', route: '#silicon-valley-trade-lawyer', region: 'Bay Area' },
  { name: 'Sunnyvale', route: '#sunnyvale-tech-trade', region: 'Bay Area' },
  { name: 'Fremont', route: '#fremont-customs-attorney', region: 'Bay Area' },
  { name: 'Hayward', route: '#hayward-customs-attorney', region: 'Bay Area' },
  { name: 'Daly City', route: '#daly-city-customs-attorney', region: 'Bay Area' },
  { name: 'Concord', route: '#concord-tariff-lawyer', region: 'Bay Area' },
  { name: 'Antioch', route: '#antioch-customs-attorney', region: 'Bay Area' },
  { name: 'Vallejo', route: '#vallejo-tariff-attorney', region: 'Bay Area' },
  { name: 'Santa Rosa', route: '#santa-rosa-customs-lawyer', region: 'Bay Area' },

  // Central Valley
  { name: 'Central Valley', route: '#central-valley-tariff-lawyer', region: 'Central Valley' },
  { name: 'Sacramento', route: '#sacramento-tariff-attorney', region: 'Central Valley' },
  { name: 'Sacramento Trade Compliance', route: '#sacramento-trade-compliance', region: 'Central Valley' },
  { name: 'Sacramento Valley Trade', route: '#sacramento-valley-trade', region: 'Central Valley' },
  { name: 'Sacramento Wine Export', route: '#sacramento-wine-export', region: 'Central Valley' },
  { name: 'Roseville', route: '#roseville-customs-lawyer', region: 'Central Valley' },
  { name: 'Stockton', route: '#stockton-tariff-lawyer', region: 'Central Valley' },
  { name: 'Stockton Ag Tariff', route: '#stockton-ag-tariff-lawyer', region: 'Central Valley' },
  { name: 'Port of Stockton', route: '#port-of-stockton-trade', region: 'Central Valley' },
  { name: 'Fresno', route: '#fresno-customs-attorney', region: 'Central Valley' },
  { name: 'Fresno Agricultural', route: '#fresno-agricultural-trade', region: 'Central Valley' },
  { name: 'Fresno Ag Export', route: '#fresno-ag-export-compliance', region: 'Central Valley' },
  { name: 'Modesto', route: '#modesto-customs-attorney', region: 'Central Valley' },
  { name: 'Modesto Farm Equipment', route: '#modesto-farm-equipment', region: 'Central Valley' },
  { name: 'Bakersfield', route: '#bakersfield-tariff-lawyer', region: 'Central Valley' },
  { name: 'Bakersfield Oil Energy', route: '#bakersfield-oil-energy-trade', region: 'Central Valley' },
  { name: 'Visalia', route: '#visalia-tariff-lawyer', region: 'Central Valley' },
  { name: 'Salinas', route: '#salinas-tariff-lawyer', region: 'Central Valley' },
  { name: 'Chico', route: '#chico-customs-attorney', region: 'Central Valley' },
];

// Group locations by region
const locationsByRegion = californiaLocations.reduce((acc, loc) => {
  if (!acc[loc.region]) {
    acc[loc.region] = [];
  }
  acc[loc.region].push(loc);
  return acc;
}, {} as Record<string, LocationLink[]>);

const regions = Object.keys(locationsByRegion);

interface CaliforniaLocationsNavProps {
  currentRoute?: string;
  variant?: 'compact' | 'full' | 'footer';
  maxColumns?: number;
}

const CaliforniaLocationsNav: React.FC<CaliforniaLocationsNavProps> = memo(({
  currentRoute,
  variant = 'full',
  maxColumns = 4
}) => {
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);

  if (variant === 'compact') {
    // Compact version showing only major cities
    const majorCities = californiaLocations.filter(loc =>
      ['Calabasas', 'Los Angeles', 'San Francisco', 'San Diego', 'Oakland', 'Long Beach', 'Irvine', 'Sacramento'].includes(loc.name)
    );

    return (
      <nav aria-label="California Locations" className="py-8">
        <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond text-center">
          California Tariff Lawyer Locations
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {majorCities.map((loc) => (
            <Link
              key={loc.route}
              to={loc.route.replace('#', '/')}
              className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                currentRoute === loc.route.replace('#', '')
                  ? 'bg-secondary-teal text-white'
                  : 'bg-neutral-100 text-text-secondary hover:bg-secondary-teal hover:text-white'
              }`}
            >
              {loc.name}
            </Link>
          ))}
        </div>
        <p className="text-center text-sm text-text-secondary mt-4">
          <Link to="/california-locations" className="text-secondary-teal hover:underline">
            View all 83+ California locations →
          </Link>
        </p>
      </nav>
    );
  }

  if (variant === 'footer') {
    // Footer version with collapsible regions
    return (
      <nav aria-label="California Locations" className="py-6">
        <h4 className="text-lg font-bold text-white mb-4 font-garamond">
          California Service Areas
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {regions.slice(0, 4).map((region) => (
            <div key={region}>
              <h5 className="text-secondary-teal font-semibold text-sm mb-2">{region}</h5>
              <ul className="space-y-1">
                {locationsByRegion[region].slice(0, 4).map((loc) => (
                  <li key={loc.route}>
                    <Link
                      to={loc.route.replace('#', '/')}
                      className="text-neutral-300 text-xs hover:text-white transition-colors duration-200"
                    >
                      {loc.name}
                    </Link>
                  </li>
                ))}
                {locationsByRegion[region].length > 4 && (
                  <li>
                    <span className="text-neutral-400 text-xs">
                      +{locationsByRegion[region].length - 4} more
                    </span>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    );
  }

  // Full version with expandable regions
  return (
    <section className="py-16 px-6 bg-neutral-50" aria-label="California Locations Directory">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-garamond text-primary-navy mb-4 text-center">
          California Tariff Lawyer & Customs Attorney Locations
        </h2>
        <p className="text-center text-text-secondary mb-8 max-w-2xl mx-auto">
          Trembach Law serves businesses throughout California with expert tariff and customs legal services.
          Find your local tariff lawyer or customs attorney below.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region) => (
            <div
              key={region}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => setExpandedRegion(expandedRegion === region ? null : region)}
                className="w-full px-6 py-4 flex justify-between items-center text-left bg-primary-navy text-white hover:bg-navy-dark transition-colors duration-200"
                aria-expanded={expandedRegion === region}
              >
                <span className="font-bold font-garamond">{region}</span>
                <span className="flex items-center gap-2">
                  <span className="text-sm text-neutral-300">
                    {locationsByRegion[region].length} cities
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${expandedRegion === region ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  expandedRegion === region ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-4 grid grid-cols-2 gap-2">
                  {locationsByRegion[region].map((loc) => (
                    <Link
                      key={loc.route}
                      to={loc.route.replace('#', '/')}
                      className={`px-3 py-2 text-sm rounded transition-all duration-200 ${
                        currentRoute === loc.route.replace('#', '')
                          ? 'bg-secondary-teal text-white font-medium'
                          : 'text-text-secondary hover:bg-neutral-100 hover:text-primary-navy'
                      }`}
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEO-friendly links for all locations */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <h3 className="text-xl font-bold text-primary-navy mb-6 font-garamond text-center">
            All California Tariff Lawyer Locations
          </h3>
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-${maxColumns} gap-x-4 gap-y-2`}>
            {californiaLocations.map((loc) => (
              <Link
                key={loc.route}
                to={loc.route.replace('#', '/')}
                className={`text-sm py-1 transition-colors duration-200 ${
                  currentRoute === loc.route.replace('#', '')
                    ? 'text-secondary-teal font-medium'
                    : 'text-text-secondary hover:text-primary-navy'
                }`}
              >
                {loc.name} Tariff Lawyer
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

CaliforniaLocationsNav.displayName = 'CaliforniaLocationsNav';

export default CaliforniaLocationsNav;
export { californiaLocations, locationsByRegion, regions };
export type { LocationLink };
