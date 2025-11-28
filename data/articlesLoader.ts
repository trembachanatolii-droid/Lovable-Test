import type { ArticleData } from '../types';
import { articlePreviews, type ArticlePreview } from './articlesIndex';

// Cache for loaded articles
const articleCache = new Map<string, ArticleData>();

/**
 * Lazy load a single article's full content
 * Uses dynamic import to only load the full articles.ts file when needed
 * Caches loaded articles to avoid repeated imports
 */
export async function loadArticle(id: string): Promise<ArticleData | undefined> {
  // Check cache first
  if (articleCache.has(id)) {
    return articleCache.get(id);
  }

  try {
    // Dynamic import - only loads the full articles.ts file when needed
    const { articles } = await import('./articles');
    const article = articles.find(a => a.id === id);

    if (article) {
      articleCache.set(id, article);
    }

    return article;
  } catch (error) {
    // Only log errors in development
    if (import.meta.env.DEV) {
      console.error('Failed to load article:', id, error);
    }
    return undefined;
  }
}

/**
 * Get all article previews (lightweight)
 * This is synchronous and fast since it only loads the small index file
 */
export function getArticlePreviews(): ArticlePreview[] {
  return articlePreviews;
}

/**
 * Get a single article preview by ID
 * Useful for showing preview information without loading full content
 */
export function getArticlePreview(id: string): ArticlePreview | undefined {
  return articlePreviews.find(a => a.id === id);
}

/**
 * Preload an article into cache
 * Useful for prefetching articles the user is likely to view
 */
export function preloadArticle(id: string): Promise<ArticleData | undefined> {
  return loadArticle(id);
}

/**
 * Clear the article cache
 * Useful for testing or if you need to force a reload
 */
export function clearArticleCache(): void {
  articleCache.clear();
}
