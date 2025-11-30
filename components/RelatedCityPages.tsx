import React, { memo } from 'react';

interface CityPage {
  name: string;
  route: string;
  description: string;
}

interface RelatedCityPagesProps {
  currentCity: string;
  region: 'los-angeles' | 'orange-county' | 'inland-empire' | 'san-diego' | 'bay-area' | 'central-valley' | 'ventura';
}

// City pages organized by region with descriptions for better SEO
const cityPagesByRegion: Record<string, CityPage[]> = {
  'los-angeles': [
    { name: 'Calabasas', route: '#calabasas-customs-attorney', description: 'Calabasas tariff lawyer & customs attorney' },
    { name: 'Los Angeles', route: '#los-angeles-tariff-lawyer', description: 'LA tariff lawyer serving all of Los Angeles' },
    { name: 'Los Angeles Port', route: '#los-angeles-port-customs-attorney', description: 'Port of LA customs attorney' },
    { name: 'Long Beach', route: '#long-beach-port-attorney', description: 'Long Beach port customs lawyer' },
    { name: 'Pasadena', route: '#pasadena-tariff-lawyer', description: 'Pasadena tariff classification attorney' },
    { name: 'Glendale', route: '#glendale-tariff-attorney', description: 'Glendale customs & trade lawyer' },
    { name: 'Torrance', route: '#torrance-trade-attorney', description: 'Torrance international trade attorney' },
    { name: 'San Fernando Valley', route: '#san-fernando-valley-tariff', description: 'SFV tariff lawyer' },
    { name: 'Santa Clarita', route: '#santa-clarita-customs-lawyer', description: 'Santa Clarita customs attorney' },
    { name: 'Palmdale', route: '#palmdale-customs-attorney', description: 'Palmdale customs lawyer' },
    { name: 'Lancaster', route: '#lancaster-trade-attorney', description: 'Lancaster trade attorney' },
  ],
  'orange-county': [
    { name: 'Orange County', route: '#orange-county-tariff-lawyer', description: 'Orange County tariff lawyer' },
    { name: 'Irvine', route: '#irvine-trade-compliance', description: 'Irvine trade compliance attorney' },
    { name: 'Anaheim', route: '#anaheim-customs-attorney', description: 'Anaheim customs attorney' },
    { name: 'Fullerton', route: '#fullerton-tariff-attorney', description: 'Fullerton tariff attorney' },
    { name: 'Huntington Beach', route: '#huntington-beach-tariff-lawyer', description: 'Huntington Beach tariff lawyer' },
    { name: 'Santa Ana', route: '#santa-ana-trade-attorney', description: 'Santa Ana trade attorney' },
  ],
  'inland-empire': [
    { name: 'Inland Empire', route: '#inland-empire-customs-attorney', description: 'Inland Empire customs attorney' },
    { name: 'Riverside', route: '#riverside-tariff-attorney', description: 'Riverside tariff attorney' },
    { name: 'Ontario', route: '#ontario-trade-compliance', description: 'Ontario trade compliance lawyer' },
    { name: 'Rancho Cucamonga', route: '#rancho-cucamonga-tariff-lawyer', description: 'Rancho Cucamonga tariff lawyer' },
    { name: 'Fontana', route: '#fontana-trade-attorney', description: 'Fontana trade attorney' },
    { name: 'Moreno Valley', route: '#moreno-valley-customs', description: 'Moreno Valley customs lawyer' },
    { name: 'Corona', route: '#corona-trade-compliance', description: 'Corona trade compliance' },
  ],
  'san-diego': [
    { name: 'San Diego', route: '#san-diego-customs-lawyer', description: 'San Diego customs lawyer' },
    { name: 'Port of San Diego', route: '#port-of-san-diego-customs', description: 'Port of San Diego customs' },
    { name: 'Chula Vista', route: '#chula-vista-tariff-lawyer', description: 'Chula Vista tariff lawyer' },
    { name: 'Oceanside', route: '#oceanside-tariff-attorney', description: 'Oceanside tariff attorney' },
    { name: 'Murrieta', route: '#murrieta-tariff-lawyer', description: 'Murrieta tariff lawyer' },
    { name: 'Temecula', route: '#temecula-trade-attorney', description: 'Temecula trade attorney' },
  ],
  'bay-area': [
    { name: 'San Francisco', route: '#san-francisco-customs-attorney', description: 'San Francisco customs attorney' },
    { name: 'Oakland', route: '#oakland-trade-attorney', description: 'Oakland trade attorney' },
    { name: 'Port of Oakland', route: '#port-of-oakland-tariff', description: 'Port of Oakland tariff' },
    { name: 'San Jose', route: '#san-jose-customs-lawyer', description: 'San Jose customs lawyer' },
    { name: 'Silicon Valley', route: '#silicon-valley-trade-lawyer', description: 'Silicon Valley trade lawyer' },
    { name: 'Fremont', route: '#fremont-customs-attorney', description: 'Fremont customs attorney' },
    { name: 'Sunnyvale', route: '#sunnyvale-tech-trade', description: 'Sunnyvale tech trade' },
    { name: 'Hayward', route: '#hayward-customs-attorney', description: 'Hayward customs attorney' },
    { name: 'Concord', route: '#concord-tariff-lawyer', description: 'Concord tariff lawyer' },
    { name: 'Santa Rosa', route: '#santa-rosa-customs-lawyer', description: 'Santa Rosa customs lawyer' },
    { name: 'Vallejo', route: '#vallejo-tariff-attorney', description: 'Vallejo tariff attorney' },
  ],
  'central-valley': [
    { name: 'Sacramento', route: '#sacramento-tariff-attorney', description: 'Sacramento tariff attorney' },
    { name: 'Central Valley', route: '#central-valley-tariff-lawyer', description: 'Central Valley tariff lawyer' },
    { name: 'Fresno', route: '#fresno-customs-attorney', description: 'Fresno customs attorney' },
    { name: 'Stockton', route: '#stockton-tariff-lawyer', description: 'Stockton tariff lawyer' },
    { name: 'Port of Stockton', route: '#port-of-stockton-trade', description: 'Port of Stockton trade' },
    { name: 'Modesto', route: '#modesto-customs-attorney', description: 'Modesto customs attorney' },
    { name: 'Bakersfield', route: '#bakersfield-tariff-lawyer', description: 'Bakersfield tariff lawyer' },
    { name: 'Visalia', route: '#visalia-tariff-lawyer', description: 'Visalia tariff lawyer' },
    { name: 'Salinas', route: '#salinas-tariff-lawyer', description: 'Salinas tariff lawyer' },
    { name: 'Roseville', route: '#roseville-customs-lawyer', description: 'Roseville customs lawyer' },
    { name: 'Chico', route: '#chico-customs-attorney', description: 'Chico customs attorney' },
  ],
  'ventura': [
    { name: 'Oxnard', route: '#oxnard-tariff-attorney', description: 'Oxnard tariff attorney' },
    { name: 'Southern California', route: '#southern-california-tariff-lawyer', description: 'Southern California tariff lawyer' },
  ],
};

// Service pages for cross-linking
const servicePages = [
  { name: 'Customs Defense', route: '#customs-defense-litigation', description: 'CBP audits, seizures, penalty defense' },
  { name: 'Trade Compliance', route: '#regulatory-compliance-advisory', description: 'Import compliance development' },
  { name: 'Export Controls', route: '#export-controls-sanctions', description: 'ITAR, EAR, OFAC compliance' },
  { name: 'Tariff Classification', route: '#tariffs-duties-classification-guide', description: 'HTS code optimization' },
  { name: 'Section 301 Guide', route: '#resources/section-301-tariffs-guide', description: 'China tariff strategies' },
  { name: 'UFLPA Compliance', route: '#resources/uflpa-compliance-guide', description: 'Forced labor compliance' },
];

const RelatedCityPages: React.FC<RelatedCityPagesProps> = memo(({ currentCity, region }) => {
  const regionCities = cityPagesByRegion[region] || [];
  const otherRegions = Object.keys(cityPagesByRegion).filter(r => r !== region);

  // Get cities from current region (excluding current city)
  const nearbyCities = regionCities.filter(city => city.name !== currentCity).slice(0, 6);

  // Get one city from each other region for broader linking
  const otherRegionCities = otherRegions.map(r => cityPagesByRegion[r][0]).slice(0, 4);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: string) => {
    e.preventDefault();
    window.location.hash = route;
  };

  return (
    <section className="py-16 px-6 bg-white border-t border-neutral-200">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
          Related California Tariff Lawyer Locations
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Nearby Cities */}
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">
              Nearby Tariff Lawyers
            </h3>
            <ul className="space-y-3">
              {nearbyCities.map((city) => (
                <li key={city.route}>
                  <a
                    href={city.route}
                    onClick={(e) => handleLinkClick(e, city.route)}
                    className="group flex items-center text-text-secondary hover:text-primary-navy transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 mr-2 text-secondary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="group-hover:underline">{city.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Regions */}
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">
              Statewide Coverage
            </h3>
            <ul className="space-y-3">
              {otherRegionCities.map((city) => (
                <li key={city.route}>
                  <a
                    href={city.route}
                    onClick={(e) => handleLinkClick(e, city.route)}
                    className="group flex items-center text-text-secondary hover:text-primary-navy transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 mr-2 text-secondary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <span className="group-hover:underline">{city.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Services */}
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">
              Our Services
            </h3>
            <ul className="space-y-3">
              {servicePages.map((service) => (
                <li key={service.route}>
                  <a
                    href={service.route}
                    onClick={(e) => handleLinkClick(e, service.route)}
                    className="group flex items-center text-text-secondary hover:text-primary-navy transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 mr-2 text-secondary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="group-hover:underline">{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Full California Coverage Link */}
        <div className="mt-8 text-center">
          <p className="text-text-secondary mb-4">
            Serving all California cities with expert tariff and customs legal services.
          </p>
          <a
            href="#california-locations"
            onClick={(e) => handleLinkClick(e, '#california-locations')}
            className="inline-flex items-center text-secondary-teal hover:text-primary-navy font-medium transition-colors duration-200"
          >
            <span>View All 83+ California Locations</span>
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
});

RelatedCityPages.displayName = 'RelatedCityPages';

export default RelatedCityPages;
export { cityPagesByRegion, servicePages };
