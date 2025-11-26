
import React from 'react';
import { PracticeArea } from '../types';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface PracticeCardProps {
practiceArea: PracticeArea;
}

const PracticeCard: React.FC<PracticeCardProps> = ({ practiceArea }) => {
const { title, subheading, description, tags, imageSlug, imageAlt, slug, imageUrl } = practiceArea;
// Use imageUrl if provided, otherwise use local images, then fall back to placeholder service
const localImagePath = `/images/${imageSlug}.jpg`;
const imageUrlBase = 'https://picsum.photos/seed/';
const imageSrc = imageUrl || localImagePath;
const placeholderSrc = `${imageUrlBase}${imageSlug}/800/600`;
const srcSet = imageUrl || `${localImagePath}`;

return (
<article className="bg-white rounded-2xl overflow-hidden border border-border-subtle transition-all duration-300 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-transparent will-change-transform">
<a
    href={`#practice-areas?slug=${slug}`}
    onClick={(e) => {
        // Allow default hash behavior to propagate to App router
    }}
    aria-label={`Learn more about ${title} legal services`}
    className="group relative block text-inherit no-underline focus:outline focus:outline-3 focus:outline-navy-medium focus:outline-offset-4 rounded-2xl"
>

<div
      className="triangle-slide"
      style={{
        position: 'absolute',
        top: 0,
        right: '-96px',
        width: '96px',
        height: '96px',
        background: '#3FBB94',
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
      <img
        src={imageSrc}
        srcSet={srcSet}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        alt={imageAlt}
        width="800"
        height="600"
        loading="lazy"
        decoding="async"
        fetchpriority="low"
        onError={(e) => {
          // Fallback to placeholder if local image doesn't exist
          const target = e.target as HTMLImageElement;
          target.src = placeholderSrc;
          target.srcset = `${imageUrlBase}${imageSlug}/400/300 400w, ${imageUrlBase}${imageSlug}/600/450 600w, ${imageUrlBase}${imageSlug}/800/600 800w`;
        }}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
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
          <li key={tag} className="py-1.5 px-3 bg-gray-light text-text-primary text-[13px] font-medium rounded-md">
            {tag}
          </li>
        ))}
      </ul>
      <span className="inline-flex items-center gap-1.5 text-navy-medium text-[17px] font-semibold transition-all duration-200 group-hover:gap-2.5 group-hover:text-secondary-teal">
        Learn more about {title} →
      </span>
    </div>
  </a>
</article>
);
};

export default PracticeCard;