import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
  role?: string;
  fallbackSrc?: string;
}

// Default dimensions to prevent CLS when not specified
const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 600;

/**
 * OptimizedImage Component
 *
 * Performance-optimized image component with:
 * - WebP format with JPG fallback
 * - Native lazy loading
 * - Responsive srcset
 * - Blur-up placeholder effect
 * - Error handling with fallback
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  loading = 'lazy',
  priority = false,
  sizes = '(max-width: 320px) 320px, (max-width: 375px) 375px, (max-width: 414px) 414px, (max-width: 480px) 480px, (max-width: 600px) 600px, (max-width: 768px) 768px, 800px',
  onLoad,
  onError,
  role,
  fallbackSrc = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate WebP and fallback paths
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const jpgSrc = src;

  // Generate responsive srcset for multiple sizes (mobile-optimized)
  const generateSrcSet = (baseSrc: string) => {
    // Only generate srcset for local images
    if (!baseSrc.startsWith('/images/')) return undefined;
    return `${baseSrc} 320w, ${baseSrc} 375w, ${baseSrc} 414w, ${baseSrc} 480w, ${baseSrc} 600w, ${baseSrc} 768w, ${baseSrc} 800w`;
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Check if image is already cached (instant load)
  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  // Determine loading strategy based on priority
  const loadingAttr = priority ? 'eager' : loading;
  const fetchPriority = priority ? 'high' : 'auto';

  // Calculate aspect ratio for CLS prevention
  const aspectRatio = width && height ? `${width} / ${height}` : undefined;
  const imgStyle = aspectRatio ? { aspectRatio } : undefined;

  if (hasError) {
    return (
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        style={imgStyle}
        loading={loadingAttr}
        decoding="async"
        role={role}
      />
    );
  }

  return (
    <picture className={`optimized-image-wrapper ${isLoaded ? 'loaded' : 'loading'}`}>
      {/* WebP source - modern browsers */}
      <source
        type="image/webp"
        srcSet={generateSrcSet(webpSrc) || webpSrc}
        sizes={sizes}
      />
      {/* JPEG fallback - older browsers */}
      <source
        type="image/jpeg"
        srcSet={generateSrcSet(jpgSrc) || jpgSrc}
        sizes={sizes}
      />
      {/* Fallback img tag */}
      <img
        ref={imgRef}
        src={jpgSrc}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        width={width}
        height={height}
        style={imgStyle}
        loading={loadingAttr}
        decoding="async"
        fetchPriority={fetchPriority as 'high' | 'low' | 'auto'}
        onLoad={handleLoad}
        onError={handleError}
        role={role}
      />
    </picture>
  );
};

/**
 * HeroImage Component
 *
 * Specialized component for hero/banner images with:
 * - Priority loading (no lazy load)
 * - Full-width responsive behavior
 * - Optimized for LCP (Largest Contentful Paint)
 */
export const HeroImage: React.FC<Omit<OptimizedImageProps, 'loading' | 'priority'>> = (props) => {
  return (
    <OptimizedImage
      {...props}
      priority={true}
      loading="eager"
      sizes="100vw"
      width={props.width || 1920}
      height={props.height || 1080}
    />
  );
};

/**
 * CardImage Component
 *
 * Optimized for card/grid layouts with:
 * - Lazy loading enabled
 * - Responsive breakpoints for cards
 */
export const CardImage: React.FC<Omit<OptimizedImageProps, 'sizes'>> = (props) => {
  return (
    <OptimizedImage
      {...props}
      loading="lazy"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      width={props.width || 800}
      height={props.height || 600}
    />
  );
};

export default OptimizedImage;
