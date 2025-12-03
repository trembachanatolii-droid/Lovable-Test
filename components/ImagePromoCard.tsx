import React from 'react';
import type { PromoCardData } from '../types';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface ImagePromoCardProps {
card: PromoCardData;
}

const ImagePromoCard: React.FC<ImagePromoCardProps> = ({ card }) => {
return (
<a
  href={card.linkHref}
  aria-label={`${card.title}: ${card.description.substring(0, 100)}...`}
  className="block group relative bg-neutral-lightGray overflow-hidden transition-shadow duration-300 hover:shadow-xl h-full"
>
{/*
Triangular tab implemented with CSS borders as per JSON specification.
This element creates a right-angled triangle in the top-right corner.
It slides in from off-screen by animating the 'right' property.
*/}
<div className="absolute top-0 w-0 h-0 border-solid border-t-[80px] border-l-[80px] border-t-secondary-teal border-l-transparent
transition-[right] duration-300 ease-in-out
right-[-80px] group-hover:right-0 group-focus-visible:right-0 z-10"
/>

{/* Arrow icon positioned over the tab, appears on hover. */}
        <div className="absolute top-3 right-3 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 z-20">
            <ArrowRightIcon className="h-6 w-6" aria-hidden="true"/>
        </div>

        <div className="relative flex flex-col md:flex-row h-full">
             {/* Image container with responsive layout */}
            <div className="md:w-[40%] flex-shrink-0">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${card.image.replace(/\.jpe?g$/i, '.webp')} 800w, ${card.image.replace(/\.jpe?g$/i, '.webp')} 600w, ${card.image.replace(/\.jpe?g$/i, '.webp')} 400w`}
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <img
                    src={card.image}
                    srcSet={`${card.image} 800w, ${card.image} 600w, ${card.image} 400w`}
                    sizes="(max-width: 768px) 100vw, 40vw"
                    alt={card.title}
                    className="w-full h-48 md:h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                  />
                </picture>
            </div>
             {/* Text content container */}
            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold font-garamond text-primary-navy mb-4">{card.title}</h3>
                <p className="text-base text-neutral-darkGray flex-grow mb-6">{card.description}</p>
                <div className="mt-auto">
                     {/* Link text with z-index to appear above the tab animation */}
                     <span className="relative z-20 font-bold text-primary-darkBlue group-hover:text-secondary-teal transition-colors duration-200 ease-in-out">
                        {card.linkText} &rarr;
                    </span>
                </div>
            </div>
        </div>
    </a>
);
};

export default ImagePromoCard;