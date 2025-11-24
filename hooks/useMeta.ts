import { useEffect, useRef } from 'react';
import type { MetaConfig } from '../types/meta';
import { siteConfig } from '../config/siteConfig';
import {
  buildCanonicalUrl,
  setMetaTag,
  setLinkTag,
  setJsonLd,
  removeJsonLd,
} from '../utils/seo';

/**
 * Custom hook for managing document meta tags
 *
 * @example
 * useMeta({
 *   title: 'About Us | Trembach Law',
 *   description: 'Learn about our international trade law expertise',
 *   canonical: '#about',
 *   ogImage: 'https://trembach.law/images/about-og.jpg',
 * });
 */
export function useMeta(config: MetaConfig): void {
  const schemaIdRef = useRef<string>(`schema-${Math.random().toString(36).substr(2, 9)}`);
  const schemaId = schemaIdRef.current;

  useEffect(() => {
    // Store original title to restore on unmount
    const originalTitle = document.title;

    // 1. Update document title
    const fullTitle = config.title.includes('|')
      ? config.title
      : `${config.title} | ${siteConfig.siteName}`;
    document.title = fullTitle;

    // 2. Basic meta tags
    setMetaTag('name', 'description', config.description);

    if (config.keywords) {
      setMetaTag('name', 'keywords', config.keywords);
    }

    if (config.robots) {
      setMetaTag('name', 'robots', config.robots);
    }

    // 3. Canonical URL
    const canonicalUrl = config.canonical
      ? buildCanonicalUrl(config.canonical)
      : buildCanonicalUrl(window.location.hash.slice(1));
    setLinkTag('canonical', canonicalUrl);

    // 4. Open Graph tags
    setMetaTag('property', 'og:site_name', siteConfig.siteName);
    setMetaTag('property', 'og:title', config.title);
    setMetaTag('property', 'og:description', config.description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', config.ogType || 'website');
    setMetaTag('property', 'og:locale', siteConfig.locale);

    const ogImage = config.ogImage || siteConfig.defaultImage;
    setMetaTag('property', 'og:image', ogImage);

    if (config.ogImageAlt) {
      setMetaTag('property', 'og:image:alt', config.ogImageAlt);
    }

    if (config.ogImageWidth) {
      setMetaTag('property', 'og:image:width', config.ogImageWidth.toString());
    }

    if (config.ogImageHeight) {
      setMetaTag('property', 'og:image:height', config.ogImageHeight.toString());
    }

    // 5. Article-specific Open Graph tags
    if (config.ogType === 'article') {
      if (config.articlePublishedTime) {
        setMetaTag('property', 'article:published_time', config.articlePublishedTime);
      }
      if (config.articleModifiedTime) {
        setMetaTag('property', 'article:modified_time', config.articleModifiedTime);
      }
      if (config.articleAuthor) {
        setMetaTag('property', 'article:author', config.articleAuthor);
      }
      if (config.articleSection) {
        setMetaTag('property', 'article:section', config.articleSection);
      }
      if (config.articleTags) {
        config.articleTags.forEach((tag) => {
          setMetaTag('property', 'article:tag', tag);
        });
      }
    }

    // 6. Twitter Card tags
    const twitterCard = config.twitterCard || 'summary_large_image';
    setMetaTag('name', 'twitter:card', twitterCard);
    setMetaTag('name', 'twitter:site', siteConfig.twitterHandle);
    setMetaTag('name', 'twitter:title', config.title);
    setMetaTag('name', 'twitter:description', config.description);

    const twitterImage = config.twitterImage || config.ogImage || siteConfig.defaultImage;
    setMetaTag('name', 'twitter:image', twitterImage);

    if (config.twitterImageAlt || config.ogImageAlt) {
      setMetaTag('name', 'twitter:image:alt', config.twitterImageAlt || config.ogImageAlt || '');
    }

    // 7. Schema.org JSON-LD
    if (config.schema) {
      setJsonLd(schemaId, config.schema);
    }

    // Cleanup function
    return () => {
      // Restore original title
      document.title = originalTitle;

      // Remove schema if it was added
      if (config.schema) {
        removeJsonLd(schemaId);
      }

      // Note: We don't remove all meta tags on unmount because another
      // page component will immediately set new ones. This prevents flickering.
    };
  }, [
    config.title,
    config.description,
    config.keywords,
    config.canonical,
    config.ogType,
    config.ogImage,
    config.ogImageAlt,
    config.ogImageWidth,
    config.ogImageHeight,
    config.twitterCard,
    config.twitterImage,
    config.twitterImageAlt,
    config.articlePublishedTime,
    config.articleModifiedTime,
    config.articleAuthor,
    config.articleSection,
    config.robots,
    schemaId,
  ]);
}
