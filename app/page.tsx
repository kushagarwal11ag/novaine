"use client";

import React from "react";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import { ArrowRight, Factory } from "lucide-react";

export default function HomePage() {
	const kidsBikes = PRODUCTS.filter((p) => p.categorySlug === "kids");
	const rangerBikes = PRODUCTS.filter(
		(p) => p.categorySlug === "ranger" || p.categorySlug === "city",
	);

	return (
		<div>
			{/* Hero Banner Slider */}
			<HeroSlider />

			{/* Category Shortcut Grid */}
			<section className="py-16 bg-gray-50 border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-2xl mx-auto mb-12">
						<span className="text-xs font-bold uppercase tracking-widest text-novaine-purple bg-novaine-purple-light px-3 py-1 rounded-full">
							Explore Our Lineup
						</span>
						<h2 className="text-3xl sm:text-4xl font-black text-gray-950 mt-3 tracking-tight">
							Designed For Every{" "}
							<span className="text-novaine-purple">
								Rider & Terrain
							</span>
						</h2>
						<p className="text-sm text-gray-500 mt-2">
							From kids learning their first pedal strokes to
							enthusiasts conquering rugged terrain, Novaine Bikes
							engineers world-class bicycles in Ludhiana, Punjab.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						<Link
							href="/bicycles?cat=kids"
							className="group bg-white rounded-2xl p-4 border border-gray-100 hover:border-novaine-purple/40 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
						>
							<div className="relative h-44 rounded-xl overflow-hidden bg-gray-100 mb-4">
								<img
									src="/assets/images/cat_kids.jpg"
									alt="Kids Bikes"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="flex items-center justify-between">
								<div>
									<h3 className="font-bold text-gray-900 text-base group-hover:text-novaine-purple transition-colors">
										Kids Bicycles
									</h3>
									<p className="text-xs text-gray-500">
										14T, 16T, 20T Sizes
									</p>
								</div>
								<span className="w-8 h-8 rounded-full bg-novaine-purple-light text-novaine-purple flex items-center justify-center group-hover:bg-novaine-purple group-hover:text-white transition-colors">
									<ArrowRight className="w-4 h-4" />
								</span>
							</div>
						</Link>

						<Link
							href="/bicycles?cat=ranger"
							className="group bg-white rounded-2xl p-4 border border-gray-100 hover:border-novaine-purple/40 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
						>
							<div className="relative h-44 rounded-xl overflow-hidden bg-gray-100 mb-4">
								<img
									src="/assets/images/cat_bicycles.jpg"
									alt="Ranger & Adult Bikes"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="flex items-center justify-between">
								<div>
									<h3 className="font-bold text-gray-900 text-base group-hover:text-novaine-purple transition-colors">
										Ranger / Adult Bikes
									</h3>
									<p className="text-xs text-gray-500">
										24T & 26T Sizes
									</p>
								</div>
								<span className="w-8 h-8 rounded-full bg-novaine-purple-light text-novaine-purple flex items-center justify-center group-hover:bg-novaine-purple group-hover:text-white transition-colors">
									<ArrowRight className="w-4 h-4" />
								</span>
							</div>
						</Link>
					</div>
				</div>
			</section>

			{/* Featured Kids Bikes Section */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
						<div>
							<span className="text-xs font-bold uppercase tracking-widest text-novaine-purple bg-novaine-purple-light px-3 py-1 rounded-full">
								Junior & Children Range
							</span>
							<h2 className="text-2xl sm:text-3xl font-black text-gray-950 mt-2">
								Popular{" "}
								<span className="text-novaine-purple">
									Kids Bikes
								</span>
							</h2>
						</div>
						<Link
							href="/bicycles?cat=kids"
							className="inline-flex items-center gap-1.5 text-xs font-bold text-novaine-purple hover:text-novaine-purple-dark"
						>
							View All Kids Bikes{" "}
							<ArrowRight className="w-4 h-4" />
						</Link>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{kidsBikes.slice(0, 4).map((prod) => (
							<ProductCard key={prod.id} product={prod} />
						))}
					</div>
				</div>
			</section>

			{/* Manufacturing & Brand Spotlight Banner */}
			<section className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-gradient-to-br from-gray-950 via-purple-950 to-novaine-purple rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
						<div className="max-w-xl">
							<span className="inline-flex items-center gap-1.5 bg-novaine-yellow text-gray-950 text-xs font-black uppercase px-3 py-1 rounded-full mb-4">
								<Factory className="w-3.5 h-3.5" /> Indigenous
								Manufacturing
							</span>
							<h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
								Precision Manufacturing In Ludhiana, Punjab
							</h2>
							<p className="text-gray-200 text-sm leading-relaxed mb-6">
								With decades of cycling engineering expertise,
								we build every Novaine bicycle under strict
								quality controls. Precise frame alignment,
								multi-stage eco phosphate coating, and precision
								testing ensure unmatched safety and longevity.
							</p>
							<div className="flex flex-wrap items-center gap-4">
								<Link
									href="/about"
									className="bg-white text-gray-950 hover:bg-gray-100 text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all"
								>
									Our Manufacturing Story
								</Link>
							</div>
						</div>

						<div className="shrink-0 max-w-sm">
							<img
								src="/assets/images/hunt_side.jpg"
								alt="Novaine Bike Engineering"
								className="w-full h-auto drop-shadow-2xl"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Ranger / Adult Bikes Section */}
			<section className="py-16 bg-gray-50 border-y border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
						<div>
							<span className="text-xs font-bold uppercase tracking-widest text-novaine-purple bg-novaine-purple-light px-3 py-1 rounded-full">
								High Performance Trail & City
							</span>
							<h2 className="text-2xl sm:text-3xl font-black text-gray-950 mt-2">
								Popular{" "}
								<span className="text-novaine-purple">
									Ranger Models
								</span>
							</h2>
						</div>
						<Link
							href="/bicycles?cat=ranger"
							className="inline-flex items-center gap-1.5 text-xs font-bold text-novaine-purple hover:text-novaine-purple-dark"
						>
							View All Ranger Bikes{" "}
							<ArrowRight className="w-4 h-4" />
						</Link>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{rangerBikes.slice(0, 4).map((prod) => (
							<ProductCard key={prod.id} product={prod} />
						))}
					</div>
				</div>
			</section>

			{/* Core 3 Pillars / Why Choose Us */}
			<section className="py-20 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-2xl mx-auto mb-14">
						<span className="text-xs font-bold uppercase tracking-widest text-novaine-yellow">
							The Novaine Promise
						</span>
						<h2 className="text-3xl sm:text-4xl font-black text-white mt-2 tracking-tight">
							Why Riders{" "}
							<span className="text-novaine-yellow">
								Choose Novaine
							</span>
						</h2>
						<p className="text-sm text-gray-400 mt-2">
							Rooted in Ludhiana rich manufacturing heritage,
							delivering trust, safety, and innovation with every
							bicycle.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:border-novaine-yellow transition-all duration-300">
							<div className="w-16 h-16 rounded-full bg-white/5 border flex items-center justify-center mx-auto mb-5">
								<img
									src="/assets/images/green-building-icon.png"
									alt="Green Building"
									className="w-9 h-9 object-contain"
								/>
							</div>
							<h3 className="text-lg font-bold text-white mb-2">
								Green{" "}
								<span className="text-novaine-yellow">
									Manufacturing
								</span>
							</h3>
							<p className="text-xs text-gray-300 leading-relaxed">
								State-of-the-art facility using zero-emission
								electrostatic powder coating, recyclable
								materials, and energy-efficient manufacturing
								processes.
							</p>
						</div>

						<div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:border-novaine-yellow transition-all duration-300">
							<div className="w-16 h-16 rounded-full bg-white/5 border flex items-center justify-center mx-auto mb-5">
								<img
									src="/assets/images/30-years-icon.png"
									alt="30+ Years Heritage"
									className="w-9 h-9 object-contain"
								/>
							</div>
							<h3 className="text-lg font-bold text-white mb-2">
								10+ Years{" "}
								<span className="text-novaine-yellow">
									Excellence
								</span>
							</h3>
							<p className="text-xs text-gray-300 leading-relaxed">
								Backed by the rich engineering expertise — the
								undisputed bicycle capital of India.
							</p>
						</div>

						<div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:border-novaine-yellow transition-all duration-300">
							<div className="w-16 h-16 rounded-full bg-white/5 border flex items-center justify-center mx-auto mb-5">
								<img
									src="/assets/images/support-icon.png"
									alt="Hassle Free Support"
									className="w-9 h-9 object-contain"
								/>
							</div>
							<h3 className="text-lg font-bold text-white mb-2">
								Hassle-Free{" "}
								<span className="text-novaine-yellow">
									Support
								</span>
							</h3>
							<p className="text-xs text-gray-300 leading-relaxed">
								Pan-India distribution network, readily
								accessible genuine spare parts, and prompt
								dedicated customer care via WhatsApp and phone.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
