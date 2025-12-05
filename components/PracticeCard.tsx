
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { PracticeArea } from '../types';

interface PracticeCardProps {
practiceArea: PracticeArea;
}

// Map slugs to actual routes
const slugToRoute: Record<string, string> = {
  'customs-audits': '/customs-defense',
  'retaliatory-tariffs': '/section-301-tariff-lawyer',
  'export-controls-sanctions': '/export-controls-sanctions',
  'duty-drawback': '/duty-drawback',
  'usmca-free-trade-agreements': '/regulatory-compliance-advisory',
  'entry-wro': '/uflpa-compliance-guide',
};

const PracticeCard: React.FC<PracticeCardProps> = memo(({ practiceArea }) => {
const { title, subheading, description, tags, imageSlug, imageAlt, slug, imageUrl } = practiceArea;
// Use imageUrl if provided, otherwise use local images, then fall back to placeholder service
const localImagePath = `/images/${imageSlug}.jpg`;
const imageUrlBase = 'https://picsum.photos/seed/';
const imageSrc = imageUrl || localImagePath;
const placeholderSrc = `${imageUrlBase}${imageSlug}/800/600`;
const routePath = slugToRoute[slug] || `/${slug}`;

return (
<article className="bg-white rounded-2xl overflow-hidden border border-border-subtle transition-all duration-300 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-transparent will-change-transform" style={{ cursor: 'pointer' }}>
<Link
    to={routePath}
    aria-label={`Learn more about ${title} legal services`}
    className="group relative block text-inherit no-underline focus:outline focus:outline-3 focus:outline-navy-medium focus:outline-offset-4 rounded-2xl"
    style={{ cursor: 'pointer' }}
>

<div
      className="triangle-slide"
      style={{
        position: 'absolute',
        top: 0,
        right: '-96px',
        width: '96px',
        height: '96px',
        background: 'var(--teal-primary)',
        clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
        transition: 'right 300ms ease-in-out',
        zIndex: 10,
        pointerEvents: 'none'
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="white"
        aria-hidden="true"
        style={{
          width: '22.4px',
          height: '22.4px',
          position: 'absolute',
          top: '20.8px',
          right: '20.8px'
        }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>

    <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-light">
      <picture>
        <source
          type="image/webp"
          srcSet={`/images/${imageSlug}.webp 800w, /images/${imageSlug}.webp 600w, /images/${imageSlug}.webp 400w`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <img
          src={imageSrc}
          srcSet={`${imageSrc} 800w, ${imageSrc} 600w, ${imageSrc} 400w`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt={imageAlt}
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            // Fallback to placeholder if local image doesn't exist
            const target = e.target as HTMLImageElement;
            target.src = placeholderSrc;
            target.srcset = `${imageUrlBase}${imageSlug}/400/300 400w, ${imageUrlBase}${imageSlug}/600/450 600w, ${imageUrlBase}${imageSlug}/800/600 800w`;
          }}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus-visible:scale-105"
        />
      </picture>
    </div>
    <div className="p-8">
      <h3 className="font-display text-2xl font-bold leading-tight text-text-primary mb-2 tracking-tight">
        {title}
      </h3>
      <p className="text-[15px] font-semibold text-teal-primary mb-3 block">
        {subheading}
      </p>
      <p className="text-[17px] leading-relaxed text-text-secondary mb-5">
        {description}
      </p>
      <ul className="flex gap-2 flex-wrap mb-6 list-none p-0" aria-label="Service areas">
        {tags.map((tag) => (
          <li key={tag} className="py-1.5 px-3 bg-gray-light text-text-primary text-sm font-medium rounded-md">
            {tag}
          </li>
        ))}
      </ul>
      <span className="inline-flex items-center gap-1.5 text-navy-medium text-[17px] font-semibold transition-all duration-200 group-hover:gap-2.5 group-hover:text-secondary-teal group-focus-visible:gap-2.5 group-focus-visible:text-secondary-teal">
        Learn more about {title} →
      </span>
    </div>
  </Link>
</article>
);
});

PracticeCard.displayName = 'PracticeCard';

export default PracticeCard;