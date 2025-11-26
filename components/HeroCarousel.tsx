import React, { useState, useEffect, useCallback } from 'react';
import type { HeroSlide } from '../types';
import Button from './Button';
import ServiceBox from './ServiceBox';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { PlayIcon } from './icons/PlayIcon';
import { PauseIcon } from './icons/PauseIcon';

interface HeroCarouselProps {
slides: HeroSlide[];
}

const serviceBoxData = [
{ id: 1, title: 'Tariff Classification' },
{ id: 2, title: 'Customs Valuation' },
{ id: 3, title: 'Country of Origin' },
{ id: 4, title: 'Duty Drawback' },
{ id: 5, title: 'Trade Litigation' },
{ id: 6, title: 'Retaliatory Tariffs Assistance' },
];

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
const [currentIndex, setCurrentIndex] = useState(0);
const [isPlaying, setIsPlaying] = useState(true);
const currentSlide = slides[currentIndex];

const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
}, [slides.length]);

const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
};

const handleServiceBoxClick = (index: number) => {
    setCurrentIndex(index);
};

const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
}

useEffect(() => {
    if (isPlaying) {
        const timer = setInterval(handleNext, 5000);
        return () => clearInterval(timer);
    }
}, [currentIndex, isPlaying, handleNext]);

return (
    <section className="group relative w-full h-[97vh] bg-primary-navy text-white overflow-hidden">
        {/* Background Image & Gradient */}
        {slides.map((slide, index) => (
            <div
                key={slide.id}
                className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                style={{ visibility: index === currentIndex ? 'visible' : 'hidden' }}
            >
                <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={index === 0 ? 'high' : 'low'}
                    width="1920"
                    height="1080"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
            </div>
        ))}

        {/* Left/Right Arrows */}
        <div className="absolute inset-0 z-30 flex items-center justify-between px-5 pointer-events-none">
            <button 
                onClick={handlePrevious} 
                aria-label="Previous slide"
                className="pointer-events-auto p-3 bg-black/30 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
            >
                <ArrowLeftIcon className="h-6 w-6" />
            </button>
            <button 
                onClick={handleNext} 
                aria-label="Next slide"
                className="pointer-events-auto p-3 bg-black/30 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
            >
                <ArrowRightIcon className="h-6 w-6" />
            </button>
        </div>

        {/* Main Content */}
        <div className="relative z-10 h-full max-w-[1376px] mx-auto px-5 flex flex-col justify-center">
             <div className="max-w-2xl">
                <h1 className="text-4xl lg:text-6xl font-bold font-garamond text-primary-navy leading-tight mb-4 drop-shadow-md">{currentSlide.title}</h1>
                <p className="text-lg lg:text-xl mb-8 text-primary-navy drop-shadow-md">{currentSlide.subtitle}</p>
                <Button href={currentSlide.ctaLink} variant="solid">
                    {currentSlide.ctaText}
                </Button>
            </div>
        </div>
        
        {/* Service Boxes Section */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
            <div className="lg:max-w-[1376px] lg:mx-auto">
                <div className="flex bg-black/20 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none lg:flex-wrap lg:justify-center lg:items-end lg:gap-4 lg:p-5">
                     {serviceBoxData.map((box, index) => (
                        <ServiceBox
                            key={box.id}
                            title={box.title}
                            isActive={index === currentIndex}
                            isPlaying={isPlaying}
                            onClick={() => handleServiceBoxClick(index)}
                            isTaller={index === serviceBoxData.length - 1}
                        />
                    ))}
                     <button
                        onClick={togglePlayPause}
                        aria-label={isPlaying ? 'Pause slides' : 'Play slides'}
                        className={`
                            relative flex flex-1 flex-col justify-center items-center text-left transition-all duration-300 ease-in-out
                            h-4 lg:flex-none lg:h-[98px] lg:w-20
                            lg:p-5 lg:rounded-xl lg:shadow-lg lg:border-2 
                            lg:transform lg:hover:scale-105 lg:hover:shadow-2xl
                            lg:border-neutral-lightGray lg:bg-white text-primary-navy
                        `}
                    >
                        {isPlaying ? <PauseIcon className="h-6 w-6" /> : <PlayIcon className="h-6 w-6" />}
                        <div className="absolute bottom-0 w-full h-1.5 bg-white/30 lg:bg-neutral-lightGray rounded-full lg:mt-auto overflow-hidden">
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </section>
);
};

export default HeroCarousel;