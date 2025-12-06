
export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export interface NewsArticle {
  id: number;
  date: string;
  title: string;
  description: string;
  linkHref: string;
  readTime: string;
  category?: string;
  source?: string;
}

export interface PracticeArea {
  title: string;
  subheading: string;
  description: string;
  tags: string[];
  imageSlug: string;
  imageAlt: string;
  slug: string;
  imageUrl?: string;
  customLink?: string;
}

export interface PromoCardData {
  image: string;
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
}

export interface ArticleData {
  id: string;
  title: string; // H1
  subheading: string; // H2
  intro: string; // Paragraph 1
  services: string; // Paragraph 2
  content: string; // Full HTML content
  keywords?: string | string[]; // SEO keywords specific to this article (comma-separated string or array)
  publishedDate: string; // Publication date in ISO 8601 format (YYYY-MM-DD)
  lastModified: string; // Last modified date in ISO 8601 format (YYYY-MM-DD)
}
