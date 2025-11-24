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
  schema?: any;
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
  email: string;
}
