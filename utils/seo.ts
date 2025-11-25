import type { MetaConfig, SiteConfig } from '../types/meta';
import { siteConfig } from '../config/siteConfig';

/**
 * Builds full canonical URL from hash-based route
 * Converts #about -> https://trembach.law/#about
 */
export function buildCanonicalUrl(path?: string): string {
  const { siteUrl } = siteConfig;
  if (!path) return siteUrl + '/';

  // Handle hash-based routing
  const cleanPath = path.startsWith('#') ? path : `#${path}`;
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
export function setJsonLd(id: string, data: any): void {
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
}): any {
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
      url: config.authorUrl || `${siteConfig.siteUrl}/#attorney-profile`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://trembach.law/#organization',
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
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
}): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: config.title,
    description: config.description,
    url: config.url,
    publisher: {
      '@type': 'Organization',
      '@id': 'https://trembach.law/#organization',
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
}>): any {
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
    const url = `${siteConfig.siteUrl}/#${urlParts.join('/')}`;

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
}): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: config.serviceType || 'Legal Service',
    name: config.name,
    description: config.description,
    provider: {
      '@type': 'Organization',
      '@id': 'https://trembach.law/#organization',
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
 */
export function generateFAQSchema(questions: Array<{
  question: string;
  answer: string;
}>): any {
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
}): any {
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
      '@id': 'https://trembach.law/#organization',
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
      logo: `${siteConfig.siteUrl}/logo.png`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '27001 Agoura Road, Suite 350',
        addressLocality: 'Calabasas',
        addressRegion: 'CA',
        postalCode: '91301',
        addressCountry: 'US',
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
