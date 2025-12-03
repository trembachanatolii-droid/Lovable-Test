/**
 * Meta tag configuration types for SEO optimization
 */
export interface MetaConfig {
  // Basic Meta
  title: string;
  description: string;
  keywords?: string;

  // Canonical & Alternate
  canonical?: string;

  // Open Graph
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  ogImageAlt?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;

  // Twitter Card
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterImage?: string;
  twitterImageAlt?: string;

  // Article-specific (for blog posts)
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTags?: string[];

  // Robots
  robots?: string;

  // Schema.org JSON-LD
  // Can be a single schema object or an array of schemas
  // Arrays are automatically optimized using @graph structure for better SEO
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export interface AddressConfig {
  street: string;
  city: string;
  state: string;
  stateAbbr: string;
  zip: string;
  country: string;
  countryCode: string;
}

export interface ServiceAreasConfig {
  primary: string[];
  secondary: string[];
  regions: string[];
  ports: string[];
  state: string;
  nationwide: boolean;
}

export interface SiteConfig {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage: string;
  twitterHandle: string;
  facebookAppId?: string;
  locale: string;
  phone: string;
  phoneDisplay: string;
  phoneTel: string;
  email: string;
  address: AddressConfig;
  serviceAreas: ServiceAreasConfig;
}
