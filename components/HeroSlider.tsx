"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { useEnquiry } from "@/context/EnquiryContext";

const SLIDES = [
	{
		tag: "Popular Kids Series",
		title: "Kombat",
		image: "/assets/images/hero_slide_1.jpg", // Desktop image
		imageMobile: "", // Mobile image
		modelId: "hunt-pro",
		modelName: "Novaine Hunt Pro",
	},
	{
		tag: "Popular Kids Choice",
		title: "Magnet",
		image: "/assets/images/hero_slide_2.jpg",
		imageMobile: "",
		modelId: "kombat",
		modelName: "Novaine Kombat",
	},
	{
		tag: "Ultimate Urban MTB",
		title: "Cyclone",
		image: "/assets/images/hero_slide_3.jpg",
		imageMobile: "",
		modelId: "cyclone",
		modelName: "Novaine Cyclone",
	},
	{
		tag: "Flagship Ranger Series",
		title: "Hunt",
		highlight: "Pro",
		image: "/assets/images/hero_slide_4.jpg",
		imageMobile: "",
		modelId: "boomer",
		modelName: "Novaine Boomer",
	},
];

const SLIDE_DURATION = 5000; // 5 seconds per slide

export default function HeroSlider() {
	const [current, setCurrent] = useState(0);
	const { openEnquiry } = useEnquiry();

	// Mobile touch swipe position states
	const [touchStartX, setTouchStartX] = useState<number | null>(null);
	const [touchEndX, setTouchEndX] = useState<number | null>(null);
	const minSwipeDistance = 50;

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % SLIDES.length);
		}, SLIDE_DURATION);
		return () => clearInterval(timer);
	}, [current]);

	const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
	const prevSlide = () =>
		setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

	// Touch handlers for mobile swipe
	const onTouchStart = (e: React.TouchEvent) => {
		setTouchEndX(null);
		setTouchStartX(e.targetTouches[0].clientX);
	};

	const onTouchMove = (e: React.TouchEvent) => {
		setTouchEndX(e.targetTouches[0].clientX);
	};

	const onTouchEnd = () => {
		if (!touchStartX || !touchEndX) return;
		const distance = touchStartX - touchEndX;
		if (distance > minSwipeDistance) {
			nextSlide(); // Swiped left -> Next slide
		} else if (distance < -minSwipeDistance) {
			prevSlide(); // Swiped right -> Previous slide
		}
	};

	return (
		<section
			className="relative w-full h-[calc(100dvh-80px)] md:h-[calc(100dvh-113px)] bg-gray-950 overflow-hidden select-none"
			onTouchStart={onTouchStart}
			onTouchMove={onTouchMove}
			onTouchEnd={onTouchEnd}
		>
			<style>{`
        @keyframes slideProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress-fill {
          animation: slideProgress ${SLIDE_DURATION}ms linear forwards;
        }
      `}</style>

			{SLIDES.map((slide, idx) => (
				<div
					key={idx}
					className={
						"absolute inset-0 transition-opacity duration-1000 ease-in-out " +
						(idx === current
							? "opacity-100 visible z-10"
							: "opacity-0 invisible z-0")
					}
				>
					{/* Responsive Image Layer */}
					<picture className="absolute inset-0 w-full h-full">
						{/* Only load mobile image if the property is set */}
						{slide.imageMobile && (
							<source
								media="(max-width: 767px)"
								srcSet={slide.imageMobile}
							/>
						)}
						{/* Default/Desktop Image with smart focal positioning on mobile */}
						<img
							src={slide.image}
							alt={slide.title}
							className="w-full h-full object-cover object-center transition-all duration-700"
						/>
					</picture>

					{/* Gradient Overlay for Text Readability */}
					<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 flex items-center z-10">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
							<div className="max-w-2xl">
								<span className="inline-flex items-center gap-1.5 bg-novaine-yellow/20 text-novaine-yellow border border-novaine-yellow/60 text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
									<Flame className="w-3.5 h-3.5" />{" "}
									{slide.tag}
								</span>

								<h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none mb-4">
									{slide.title}{" "}
									<span className="text-novaine-yellow">
										{slide.highlight}
									</span>
								</h1>
							</div>
						</div>
					</div>
				</div>
			))}

			{/* Slider Navigation Arrows (Hidden on mobile, visible on desktop) */}
			<button
				onClick={prevSlide}
				className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-novaine-purple backdrop-blur-md border border-white/20 text-white items-center justify-center transition-colors"
				aria-label="Previous Slide"
			>
				<ChevronLeft className="w-5 h-5" />
			</button>
			<button
				onClick={nextSlide}
				className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-novaine-purple backdrop-blur-md border border-white/20 text-white items-center justify-center transition-colors"
				aria-label="Next Slide"
			>
				<ChevronRight className="w-5 h-5" />
			</button>

			{/* Progress Indicator Dots */}
			<div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/25 backdrop-blur-sm border border-white/10">
				{SLIDES.map((_, idx) => (
					<button
						key={idx}
						onClick={() => setCurrent(idx)}
						aria-label={"Go to slide " + (idx + 1)}
						className="group relative flex items-center justify-center focus:outline-none"
					>
						{idx === current ? (
							<span className="relative block w-7 h-1.5 bg-white/20 rounded-full overflow-hidden">
								<span
									key={current}
									className="block h-full bg-novaine-yellow rounded-full animate-progress-fill"
								/>
							</span>
						) : (
							<span className="block w-1.5 h-1.5 rounded-full bg-white/35 group-hover:bg-white/70 transition-colors" />
						)}
					</button>
				))}
			</div>
		</section>
	);
}
