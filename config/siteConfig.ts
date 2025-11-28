import type { SiteConfig } from '../types/meta';

export const siteConfig: SiteConfig = {
  siteName: 'Trembach Law Firm',
  siteUrl: 'https://trembach.law',
  defaultTitle: 'Trembach Law | International Trade & Customs',
  defaultDescription: 'Expert international trade and customs law counsel. Trembach Law Firm specializes in tariff classification, customs valuation, country of origin, and trade compliance. California-based serving clients nationwide.',
  defaultImage: 'https://trembach.law/og-image-default.jpg',
  twitterHandle: '@trembachlaw',
  locale: 'en_US',
  phone: '+1-310-744-1328',
  phoneDisplay: '(310) 744-1328',
  phoneTel: 'tel:+13107441328',
  email: 'infotrade@trembachlaw.com',
  // NAP - Name, Address, Phone for Local SEO consistency
  address: {
    street: '27001 Agoura Road, Suite 350',
    city: 'Calabasas',
    state: 'California',
    stateAbbr: 'CA',
    zip: '91301',
    country: 'United States',
    countryCode: 'US',
  },
  // California Service Areas - All cities served by appointment
  serviceAreas: {
    primary: ['Los Angeles', 'Long Beach', 'San Francisco', 'Oakland', 'San Diego'],
    secondary: ['Calabasas', 'Sacramento', 'San Jose', 'Irvine', 'Anaheim', 'Santa Ana', 'Riverside', 'Ontario', 'Fresno', 'Bakersfield'],
    regions: ['Southern California', 'Northern California', 'Central Valley', 'Bay Area', 'Inland Empire', 'Orange County'],
    ports: ['Port of Los Angeles', 'Port of Long Beach', 'Port of Oakland', 'Port of San Diego'],
    state: 'California',
    nationwide: true,
  },
};
