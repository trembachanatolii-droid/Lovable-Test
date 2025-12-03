/**
 * Structured Data (JSON-LD) Generator Utilities
 * Generates schema.org compliant structured data for SEO
 */

import { siteConfig } from '../config/siteConfig';

/**
 * Generates Person schema for Anatolii Trembach
 */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://trembach.law/anatolii-trembach',
    name: 'Anatolii Trembach',
    givenName: 'Anatolii',
    familyName: 'Trembach',
    url: 'https://trembach.law/attorney-profile',
    image: 'https://trembach.law/images/attorney-anatolii-trembach.jpg',
    jobTitle: 'International Trade & Customs Attorney',
    description: 'International trade and customs attorney specializing in CBP enforcement defense, tariff classification disputes, and trade compliance. Former criminal detective and special agent with Ukraine\'s Security Service (SBU).',
    knowsLanguage: [
      {
        '@type': 'Language',
        name: 'English',
      },
      {
        '@type': 'Language',
        name: 'Ukrainian',
      },
      {
        '@type': 'Language',
        name: 'Russian',
      },
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'National Law University of Ukraine',
        description: 'Bachelor\'s and Master\'s degree in Law with honors',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of Southern California Gould School of Law',
        sameAs: 'https://gould.usc.edu/',
        description: 'Master of Laws (LL.M.)',
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Bar Admission',
        recognizedBy: {
          '@type': 'Organization',
          name: 'California State Bar',
        },
        description: 'California State Bar #349304',
      },
    ],
    award: '2026 Rising Star by Super Lawyers',
    worksFor: {
      '@type': 'Organization',
      '@id': 'https://trembach.law/organization',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '27001 Agoura Road, Suite 350',
      addressLocality: 'Calabasas',
      addressRegion: 'CA',
      postalCode: '91301',
      addressCountry: 'US',
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    knowsAbout: [
      'International Trade Law',
      'Customs Law',
      'Tariff Classification',
      'Customs Valuation',
      'CBP Enforcement',
      'Trade Compliance',
      'Export Controls',
      'USMCA',
      'Free Trade Agreements',
      'Antidumping Duties',
      'Countervailing Duties',
      'Section 301 Tariffs',
      'ITAR Compliance',
      'OFAC Sanctions',
    ],
  };
}

/**
 * Generates Service schema for individual practice areas
 */
export function generateServiceSchema(serviceData: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Legal Services',
    name: serviceData.name,
    description: serviceData.description,
    url: serviceData.url,
    provider: {
      '@type': 'Organization',
      '@id': 'https://trembach.law/organization',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Importers, Exporters, Customs Brokers, International Businesses',
    },
  };
}

/**
 * Generates WebSite schema for search box
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://trembach.law/website',
    url: 'https://trembach.law/',
    name: 'Trembach Law Firm',
    description: 'Expert international trade and customs law counsel',
    publisher: {
      '@id': 'https://trembach.law/organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://trembach.law/news?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  };
}
