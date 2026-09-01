'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, Flame } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';

const SLIDES = [
  {
    tag: 'Popular Kids Series',
    title: 'Kombat',
    image: '/assets/images/hero_slide_1.jpg',
    modelId: 'hunt-pro',
    modelName: 'Novaine Hunt Pro',
  },
  {
    tag: 'Popular Kids Choice',
    title: 'Magnet',
    image: '/assets/images/hero_slide_2.jpg',
    modelId: 'kombat',
    modelName: 'Novaine Kombat',
  },
  {
    tag: 'Ultimate Urban MTB',
    title: 'Cyclone',
    image: '/assets/images/hero_slide_3.jpg',
    modelId: 'cyclone',
    modelName: 'Novaine Cyclone',
  },
  {
    tag: 'Flagship Ranger Series',
    title: 'Hunt',
    highlight: 'Pro',
    image: '/assets/images/hero_slide_4.jpg',
    modelId: 'boomer',
    modelName: 'Novaine Boomer',
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const { openEnquiry } = useEnquiry();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 8500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative w-full h-[540px] md:h-[600px] bg-gray-950 overflow-hidden">
      {SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={'absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ' + (idx === current ? 'opacity-100 visible z-10' : 'opacity-0 invisible z-0')}
          style={{ backgroundImage: 'url(' + slide.image + ')' }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
              
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-1.5 bg-novaine-yellow/20 text-novaine-yellow border border-novaine-yellow/60 text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
                  <Flame className="w-3.5 h-3.5" /> {slide.tag}
                </span>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none mb-4">
                  {slide.title} <span className="text-novaine-yellow">{slide.highlight}</span>
                </h1>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-novaine-purple backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-colors"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-novaine-purple backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-colors"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={'h-2.5 rounded-full transition-all ' + (idx === current ? 'w-8 bg-novaine-yellow' : 'w-2.5 bg-white/40 hover:bg-white/70')}
            aria-label={'Go to slide ' + (idx + 1)}
          />
        ))}
      </div>
    </section>
  );
}
