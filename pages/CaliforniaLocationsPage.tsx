
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '../utils/seo';
import Button from '../components/Button';

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
  { name: 'Los Angeles Customs Seizure', route: '#los-angeles-customs-seizure', region: 'Los Angeles Area' },
  { name: 'Los Angeles Automotive', route: '#los-angeles-automotive-tariff', region: 'Los Angeles Area' },
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
  { name: 'San Bernardino', route: '#san-bernardino-penalty-mitigation', region: 'Inland Empire' },

  // San Diego & Border
  { name: 'San Diego', route: '#san-diego-customs-lawyer', region: 'San Diego & Border' },
  { name: 'San Diego CBP Audit', route: '#san-diego-cbp-audit', region: 'San Diego & Border' },
  { name: 'San Diego Customs Seizure', route: '#san-diego-customs-seizure', region: 'San Diego & Border' },
  { name: 'San Diego E-commerce', route: '#san-diego-ecommerce-tariff', region: 'San Diego & Border' },
  { name: 'San Diego Trade Litigation', route: '#san-diego-trade-litigation', region: 'San Diego & Border' },
  { name: 'Port of San Diego', route: '#port-of-san-diego-customs', region: 'San Diego & Border' },
  { name: 'Chula Vista', route: '#chula-vista-tariff-lawyer', region: 'San Diego & Border' },
  { name: 'Oceanside', route: '#oceanside-tariff-attorney', region: 'San Diego & Border' },
  { name: 'Murrieta', route: '#murrieta-tariff-lawyer', region: 'San Diego & Border' },
  { name: 'Temecula', route: '#temecula-trade-attorney', region: 'San Diego & Border' },

  // Bay Area
  { name: 'San Francisco', route: '#san-francisco-customs-attorney', region: 'Bay Area' },
  { name: 'San Francisco Export Controls', route: '#san-francisco-export-controls', region: 'Bay Area' },
  { name: 'San Francisco Tech Trade', route: '#san-francisco-tech-trade', region: 'Bay Area' },
  { name: 'Oakland', route: '#oakland-trade-attorney', region: 'Bay Area' },
  { name: 'Port of Oakland', route: '#port-of-oakland-tariff', region: 'Bay Area' },
  { name: 'Oakland Maritime', route: '#oakland-maritime-trade', region: 'Bay Area' },
  { name: 'San Jose', route: '#san-jose-customs-lawyer', region: 'Bay Area' },
  { name: 'Silicon Valley', route: '#silicon-valley-trade-lawyer', region: 'Bay Area' },
  { name: 'Sunnyvale', route: '#sunnyvale-tech-trade', region: 'Bay Area' },
  { name: 'Fremont', route: '#fremont-customs-attorney', region: 'Bay Area' },
  { name: 'Hayward', route: '#hayward-customs-attorney', region: 'Bay Area' },
  { name: 'Daly City', route: '#daly-city-customs-attorney', region: 'Bay Area' },
  { name: 'Concord', route: '#concord-tariff-lawyer', region: 'Bay Area' },
  { name: 'Antioch', route: '#antioch-customs-attorney', region: 'Bay Area' },
  { name: 'Vallejo', route: '#vallejo-tariff-attorney', region: 'Bay Area' },
  { name: 'Santa Rosa', route: '#santa-rosa-customs-lawyer', region: 'Bay Area' },
  { name: 'Berkeley', route: '#berkeley-export-control', region: 'Bay Area' },

  // Central Valley
  { name: 'Central Valley', route: '#central-valley-tariff-lawyer', region: 'Central Valley' },
  { name: 'Sacramento', route: '#sacramento-tariff-attorney', region: 'Central Valley' },
  { name: 'Sacramento Trade Compliance', route: '#sacramento-trade-compliance', region: 'Central Valley' },
  { name: 'Sacramento Valley Trade', route: '#sacramento-valley-trade', region: 'Central Valley' },
  { name: 'Roseville', route: '#roseville-customs-lawyer', region: 'Central Valley' },
  { name: 'Stockton', route: '#stockton-tariff-lawyer', region: 'Central Valley' },
  { name: 'Port of Stockton', route: '#port-of-stockton-trade', region: 'Central Valley' },
  { name: 'Fresno', route: '#fresno-customs-attorney', region: 'Central Valley' },
  { name: 'Fresno Agricultural', route: '#fresno-agricultural-trade', region: 'Central Valley' },
  { name: 'Modesto', route: '#modesto-customs-attorney', region: 'Central Valley' },
  { name: 'Bakersfield', route: '#bakersfield-tariff-lawyer', region: 'Central Valley' },
  { name: 'Visalia', route: '#visalia-tariff-lawyer', region: 'Central Valley' },
  { name: 'Salinas', route: '#salinas-tariff-lawyer', region: 'Central Valley' },
  { name: 'Chico', route: '#chico-customs-attorney', region: 'Central Valley' },
  { name: 'Elk Grove', route: '#elk-grove-countervailing', region: 'Central Valley' },

  // Ventura & Central Coast
  { name: 'Ventura', route: '#ventura-import-compliance', region: 'Ventura & Central Coast' },
  { name: 'Santa Barbara', route: '#santa-barbara-import-compliance', region: 'Ventura & Central Coast' },
  { name: 'Oxnard', route: '#oxnard-agricultural-import', region: 'Ventura & Central Coast' },
  { name: 'Thousand Oaks', route: '#thousand-oaks-hts-classification', region: 'Ventura & Central Coast' },
  { name: 'Simi Valley', route: '#simi-valley-export-control', region: 'Ventura & Central Coast' },
  { name: 'Santa Maria', route: '#santa-maria-export-control', region: 'Ventura & Central Coast' },
];

// Group locations by region
const groupedLocations = californiaLocations.reduce((acc, loc) => {
  if (!acc[loc.region]) {
    acc[loc.region] = [];
  }
  acc[loc.region].push(loc);
  return acc;
}, {} as Record<string, LocationLink[]>);

const regionOrder = [
  'Los Angeles Area',
  'Orange County',
  'Inland Empire',
  'San Diego & Border',
  'Bay Area',
  'Central Valley',
  'Ventura & Central Coast',
];

const CaliforniaLocationsPage: React.FC = () => {
  useMeta({
    title: 'California Customs & Trade Law Offices | 83+ Locations',
    description: 'Trembach Law Firm serves 83+ California locations for customs, tariff, and international trade law. Find your local customs attorney in Los Angeles, San Francisco, San Diego, and throughout California.',
    keywords: 'california customs attorney, california trade lawyer, customs attorney near me, tariff lawyer california, cbp attorney california, import lawyer california',
    canonical: 'california-locations',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'California Customs & Trade Law Offices - 83+ Service Locations',
        description: 'Find expert customs and international trade legal services at 83+ California locations. Serving Los Angeles, San Francisco, San Diego, Sacramento, and all major California cities.',
        url: `${siteConfig.siteUrl}/california-locations`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Locations', url: `${siteConfig.siteUrl}/california-locations` }
      ]),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      {/* Hero Section */}
      <section className="hero" aria-label="California Locations Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop"
            alt=""
            role="presentation"
            width="1920"
            height="1080"
            loading="eager"
            style={{ aspectRatio: '16 / 9' }}
            decoding="async"
            className="hero-bg-image"
          />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>

        <div className="container">
          <h1>California Customs &amp; Trade Law Offices<br />83+ Service Locations</h1>
          <p className="hero-subtitle">
            Expert customs, tariff, and international trade legal services throughout California. From the Ports of Los Angeles and Long Beach to the Bay Area and Central Valley.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-garamond text-primary-navy mb-6">
            Statewide Coverage for California Importers &amp; Exporters
          </h2>
          <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Trembach Law Firm provides comprehensive customs and international trade legal services across California. Whether you are importing through the <strong>Ports of Los Angeles, Long Beach, Oakland, or San Diego</strong>, or operating warehouses and distribution centers throughout the state, our attorneys are ready to assist with tariff classification, CBP audits, penalty mitigation, trade compliance, and customs litigation.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Find Your Local Customs Attorney
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {regionOrder.map((region) => (
              <div key={region} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond border-b-2 border-secondary-teal pb-2">
                  {region}
                </h3>
                <ul className="space-y-2">
                  {groupedLocations[region]?.map((loc) => (
                    <li key={loc.route}>
                      <a
                        href={loc.route}
                        className="text-text-secondary hover:text-secondary-teal transition-colors text-sm flex items-center"
                      >
                        <span className="mr-2 text-secondary-teal">&#8250;</span>
                        {loc.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Ports Section */}
      <section className="py-16 px-6 bg-white" id="california-ports">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-garamond text-primary-navy mb-12 text-center">
            California Major Ports
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/los-angeles-port-customs-attorney" className="bg-primary-navy text-white p-6 rounded-lg hover:bg-primary-navy/90 transition-colors text-center">
              <h3 className="text-xl font-bold mb-2">Port of Los Angeles</h3>
              <p className="text-neutral-200 text-sm">Largest port in the Western Hemisphere</p>
            </Link>
            <Link to="/long-beach-port-attorney" className="bg-primary-navy text-white p-6 rounded-lg hover:bg-primary-navy/90 transition-colors text-center">
              <h3 className="text-xl font-bold mb-2">Port of Long Beach</h3>
              <p className="text-neutral-200 text-sm">Second busiest U.S. container port</p>
            </Link>
            <Link to="/port-of-oakland-tariff" className="bg-primary-navy text-white p-6 rounded-lg hover:bg-primary-navy/90 transition-colors text-center">
              <h3 className="text-xl font-bold mb-2">Port of Oakland</h3>
              <p className="text-neutral-200 text-sm">Northern California gateway</p>
            </Link>
            <Link to="/port-of-san-diego-customs" className="bg-primary-navy text-white p-6 rounded-lg hover:bg-primary-navy/90 transition-colors text-center">
              <h3 className="text-xl font-bold mb-2">Port of San Diego</h3>
              <p className="text-neutral-200 text-sm">US-Mexico border trade hub</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Services Available at All Locations
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-primary-navy mb-3">Customs Defense</h3>
              <ul className="text-text-secondary text-sm space-y-2">
                <li>&#8226; CBP Audit Defense</li>
                <li>&#8226; Penalty Mitigation</li>
                <li>&#8226; Seizure &amp; Detention</li>
                <li>&#8226; Prior Disclosures</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-primary-navy mb-3">Trade Compliance</h3>
              <ul className="text-text-secondary text-sm space-y-2">
                <li>&#8226; Tariff Classification</li>
                <li>&#8226; Country of Origin</li>
                <li>&#8226; USMCA Certification</li>
                <li>&#8226; Duty Drawback</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-primary-navy mb-3">Trade Remedies</h3>
              <ul className="text-text-secondary text-sm space-y-2">
                <li>&#8226; Section 301 Tariffs</li>
                <li>&#8226; Antidumping Defense</li>
                <li>&#8226; Countervailing Duties</li>
                <li>&#8226; UFLPA Compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-garamond mb-6 text-white">
            Need a California Customs Attorney?
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact us for a free consultation. Our attorneys serve all 83+ California locations with expert customs, tariff, and international trade legal services.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">
              Schedule Free Consultation
            </Button>
            <Button href={siteConfig.phoneTel} variant="outline">
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaliforniaLocationsPage;
