// Types imported from config
import { siteConfig } from '../config/siteConfig';

/**
 * Builds full canonical URL from route path
 * Converts #about -> https://trembach.law/about (removes hash for proper canonical URLs)
 */
export function buildCanonicalUrl(path?: string): string {
  const { siteUrl } = siteConfig;
  if (!path) return siteUrl + '/';

  // Remove hash if present and clean the path
  const cleanPath = path.startsWith('#') ? path.slice(1) : path;
  return `${siteUrl}/${cleanPath}`;
}

/**
 * Creates or updates a meta tag in document head
 */
export function setMetaTag(
  attribute: string,
  attributeValue: string,
  content: string
): void {
  let element = document.querySelector(
    `meta[${attribute}="${attributeValue}"]`
  ) as HTMLMetaElement;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

/**
 * Creates or updates a link tag in document head
 */
export function setLinkTag(
  rel: string,
  href: string,
  attributes?: Record<string, string>
): void {
  let element = document.querySelector(
    `link[rel="${rel}"]`
  ) as HTMLLinkElement;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);

  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }
}

/**
 * Removes a meta tag from document head
 */
export function removeMetaTag(attribute: string, attributeValue: string): void {
  const element = document.querySelector(
    `meta[${attribute}="${attributeValue}"]`
  );
  if (element) {
    element.remove();
  }
}

/**
 * Sets or updates JSON-LD structured data
 */
export function setJsonLd(id: string, data: Record<string, unknown>): void {
  let script = document.getElementById(id) as HTMLScriptElement;

  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

/**
 * Removes JSON-LD structured data
 */
export function removeJsonLd(id: string): void {
  const script = document.getElementById(id);
  if (script) {
    script.remove();
  }
}

/**
 * Strips @context from a schema object
 * Used when combining multiple schemas into a @graph structure
 */
function stripContext(schema: Record<string, unknown>): Record<string, unknown> {
  const { '@context': _, ...rest } = schema;
  return rest;
}

/**
 * Wraps multiple schema objects in a single @graph structure
 * This reduces payload size and follows schema.org best practices
 *
 * AUTOMATIC OPTIMIZATION: When using useMeta() hook, arrays of schemas are
 * automatically wrapped with @graph - no manual wrapping needed!
 *
 * @param schemas - Array of schema objects (with or without @context)
 * @returns Single schema object with @context and @graph containing all schemas
 *
 * @example Automatic (Recommended - no changes needed to existing code)
 * useMeta({
 *   title: 'My Page',
 *   description: 'Description',
 *   schema: [
 *     generateWebPageSchema({...}),
 *     generateArticleSchema({...}),
 *     generateBreadcrumbSchema([...])
 *   ]
 * });
 * // Output: {"@context": "...", "@graph": [{...}, {...}, {...}]}
 *
 * @example Manual (for direct setJsonLd usage)
 * const schemas = [
 *   generateWebPageSchema({...}),
 *   generateArticleSchema({...})
 * ];
 * setJsonLd('schema-graph', wrapInGraph(schemas));
 *
 * @example Before optimization (inefficient - 3x @context)
 * [
 *   {"@context": "https://schema.org", "@type": "WebPage", ...},
 *   {"@context": "https://schema.org", "@type": "Article", ...},
 *   {"@context": "https://schema.org", "@type": "FAQPage", ...}
 * ]
 *
 * @example After optimization (efficient - 1x @context)
 * {
 *   "@context": "https://schema.org",
 *   "@graph": [
 *     {"@type": "WebPage", ...},
 *     {"@type": "Article", ...},
 *     {"@type": "FAQPage", ...}
 *   ]
 * }
 */
export function wrapInGraph(schemas: Array<Record<string, unknown>>): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas.map(schema => stripContext(schema))
  };
}

/**
 * Generate Article Schema.org JSON-LD
 */
export function generateArticleSchema(config: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.title,
    description: config.description,
    url: config.url,
    image: config.image || siteConfig.defaultImage,
    datePublished: config.datePublished || new Date().toISOString(),
    dateModified: config.dateModified || new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: config.authorName || 'Anatolii Trembach',
      url: config.authorUrl || `${siteConfig.siteUrl}/attorney-profile`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://trembach.law/organization',
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.siteUrl}/logo.png`,
        width: 600,
        height: 60,
      },
    },
  };
}

/**
 * Generate WebPage Schema.org JSON-LD
 */
export function generateWebPageSchema(config: {
  title: string;
  description: string;
  url: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: config.title,
    description: config.description,
    url: config.url,
    publisher: {
      '@type': 'Organization',
      '@id': 'https://trembach.law/organization',
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
    },
  };
}

/**
 * Generate BreadcrumbList Schema.org JSON-LD
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{
  name: string;
  url: string;
}>): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/**
 * Generate breadcrumb path from route hash
 * Converts routes like #practice-areas or #article/tariff-classification
 * into breadcrumb arrays for schema generation
 */
export function getBreadcrumbs(hash: string): Array<{ name: string; url: string }> {
  const routeMap: Record<string, string> = {
    '': 'Home',
    'about': 'About',
    'contact': 'Contact',
    'news': 'News & Insights',
    'practice-areas': 'Practice Areas',
    'useful-links': 'Useful Links',
    'careers': 'Careers',
    'attorney-profile': 'Attorney Profile',
    'privacy-policy': 'Privacy Policy',
    'terms': 'Terms of Use',
    'attorney-advertising': 'Attorney Advertising',
  };

  const breadcrumbs: Array<{ name: string; url: string }> = [
    { name: 'Home', url: siteConfig.siteUrl + '/' },
  ];

  // Remove leading # and split by /
  const cleanHash = hash.replace(/^#/, '');
  const parts = cleanHash.split('/');

  parts.forEach((part, index) => {
    if (!part) return;

    const name = routeMap[part] || part.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const urlParts = parts.slice(0, index + 1);
    const url = `${siteConfig.siteUrl}/${urlParts.join('/')}`;

    breadcrumbs.push({ name, url });
  });

  return breadcrumbs;
}

/**
 * Generate Service Schema.org JSON-LD for legal services
 * Used to describe specific legal practice areas
 */
export function generateServiceSchema(config: {
  name: string;
  description: string;
  url?: string;
  serviceType?: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: config.serviceType || 'Legal Service',
    name: config.name,
    description: config.description,
    provider: {
      '@type': 'Organization',
      '@id': 'https://trembach.law/organization',
      name: siteConfig.siteName,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    ...(config.url && { url: config.url }),
  };
}

/**
 * Generate FAQPage Schema.org JSON-LD
 * Used for frequently asked questions to enhance search visibility
 * Includes speakable specification for voice search optimization
 */
export function generateFAQSchema(questions: Array<{
  question: string;
  answer: string;
}>): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.faq-question', '.faq-answer'],
    },
  };
}

/**
 * Generate JobPosting Schema.org JSON-LD
 * Used for job listings to appear in Google for Jobs rich results
 */
export function generateJobPostingSchema(config: {
  title: string;
  description: string;
  employmentType?: string; // FULL_TIME, PART_TIME, CONTRACTOR, etc.
  datePosted?: string;
  validThrough?: string;
  baseSalaryMin?: number;
  baseSalaryMax?: number;
  salaryCurrency?: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: config.title,
    description: config.description,
    datePosted: config.datePosted || new Date().toISOString().split('T')[0],
    validThrough: config.validThrough || new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 90 days from now
    employmentType: config.employmentType || 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      '@id': 'https://trembach.law/organization',
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.siteUrl}/logo.png`,
        width: 600,
        height: 60,
      },
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.stateAbbr,
        postalCode: siteConfig.address.zip,
        addressCountry: siteConfig.address.countryCode,
      },
    },
    ...(config.baseSalaryMin && config.baseSalaryMax && {
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: config.salaryCurrency || 'USD',
        value: {
          '@type': 'QuantitativeValue',
          minValue: config.baseSalaryMin,
          maxValue: config.baseSalaryMax,
          unitText: 'YEAR',
        },
      },
    }),
  };
}

/**
 * Generate LocalBusiness Schema.org JSON-LD
 * Critical for Local SEO - helps Google understand business location and service areas
 */
export function generateLocalBusinessSchema(): Record<string, unknown> {
  const serviceAreas = [
    // Primary California cities
    ...siteConfig.serviceAreas.primary.map(city => ({
      '@type': 'City',
      name: city,
      containedInPlace: { '@type': 'State', name: 'California' }
    })),
    // California regions
    ...siteConfig.serviceAreas.regions.map(region => ({
      '@type': 'AdministrativeArea',
      name: region
    })),
    // State level
    { '@type': 'State', name: 'California', sameAs: 'https://en.wikipedia.org/wiki/California' },
    // Federal/nationwide for Court of International Trade
    { '@type': 'Country', name: 'United States' }
  ];

  return {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'LocalBusiness', 'ProfessionalService'],
    '@id': 'https://trembach.law/localbusiness',
    name: siteConfig.siteName,
    legalName: 'Trembach Law Firm, APC',
    description: 'California international trade attorney and customs lawyer serving Los Angeles, Long Beach, San Francisco, Oakland, San Diego, and all California cities by appointment. Expert CBP defense, trade compliance, and import/export law.',
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    image: `${siteConfig.siteUrl}/logo.png`,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.siteUrl}/logo.png`,
      width: 600,
      height: 60,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.stateAbbr,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.1367,
      longitude: -118.6606,
    },
    areaServed: serviceAreas,
    serviceArea: serviceAreas,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'International Trade & Customs Legal Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Customs Audits & CBP Defense' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Import/Export Compliance' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tariff Classification' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Section 301 Tariff Mitigation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'USMCA & FTA Compliance' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trade Litigation' } },
      ]
    },
    priceRange: '$$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      }
    ],
    paymentAccepted: ['Cash', 'Credit Card', 'Wire Transfer', 'Check'],
    currenciesAccepted: 'USD',
    sameAs: [
      'https://www.linkedin.com/company/trembach-law',
      'https://twitter.com/trembachlaw',
    ],
    founder: {
      '@type': 'Person',
      name: 'Anatolii Trembach',
      jobTitle: 'International Trade & Customs Attorney',
      url: `${siteConfig.siteUrl}/attorney-profile`,
    },
    knowsAbout: [
      'International Trade Law',
      'U.S. Customs Law',
      'CBP Audits',
      'Import/Export Compliance',
      'Tariff Classification',
      'USMCA',
      'Section 301 Tariffs',
      'ITAR/EAR Export Controls',
    ],
    slogan: 'California International Trade Attorney - Serving All CA Cities by Appointment',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phoneDisplay,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: ['English', 'Ukrainian', 'Russian'],
    },
    potentialAction: [
      {
        '@type': 'ReserveAction',
        name: 'Schedule Consultation',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteConfig.siteUrl}/contact`,
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
      },
    ],
  };
}

/**
 * Generate California Port-Specific Service Schema
 * For location-specific pages targeting port cities
 */
export function generatePortServiceSchema(config: {
  portName: string;
  cityName: string;
  description: string;
  url: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${config.cityName} Customs Attorney Services`,
    description: config.description,
    url: config.url,
    provider: {
      '@type': 'LegalService',
      '@id': 'https://trembach.law/localbusiness',
      name: siteConfig.siteName,
      telephone: siteConfig.phoneDisplay,
    },
    serviceType: 'Port Customs Law',
    areaServed: [
      { '@type': 'City', name: config.cityName },
      { '@type': 'Place', name: config.portName },
      { '@type': 'State', name: 'California' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${config.portName} Legal Services`,
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CBP Audits Defense' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cargo Detention Release' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tariff Classification' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AD/CVD Defense' } },
      ]
    }
  };
}
