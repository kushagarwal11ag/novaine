"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
	return (
		<div>
			{/* Banner */}
			<div className="bg-gradient-to-r from-gray-950 via-purple-950 to-gray-950 text-white py-16 border-b border-gray-800 text-center">
				<div className="max-w-4xl mx-auto px-4">
					<span className="text-xs font-bold uppercase tracking-widest text-novaine-yellow bg-white/10 px-3.5 py-1 rounded-full border border-novaine-yellow/40">
						Our Manufacturing Heritage
					</span>
					<h1 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
						About Us
					</h1>
					<p className="text-sm sm:text-base text-gray-300 mt-3 max-w-2xl mx-auto">
						Engineering high-performance, durable, and joy-inspiring
						bicycles from the bicycle capital of India — Ludhiana,
						Punjab.
					</p>
				</div>
			</div>

			{/* Story Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div>
						<span className="text-xs font-bold uppercase tracking-wider text-novaine-purple bg-novaine-purple-light px-3 py-1 rounded-full">
							Our Journey
						</span>
						<h2 className="text-3xl font-extrabold text-gray-950 mt-3 mb-6 leading-tight">
							Decades of Bicycle Engineering Excellence
						</h2>
						<div className="space-y-4 text-sm text-gray-600 leading-relaxed">
							<p>
								<strong>V&U Industries</strong> was established
								in the industrial heartland of Ludhiana, Punjab,
								with a singular vision: to manufacture
								world-class bicycles that deliver unmatched
								reliability, ergonomic comfort, and modern
								styling for riders of every generation.
							</p>
							<p>
								Under our flagship brand{" "}
								<strong>Novaine Bikes</strong>, we engineer a
								rich portfolio spanning vibrant kids bicycles (
								<strong>Kombat, Magnet, Boomer</strong> ) to
								high-octane adult ranger and MTB series (
								<strong>Hunt, Hunt Pro, Cyclone</strong> ).
							</p>
						</div>

						<div className="grid grid-cols-2 gap-4 mt-8">
							<div className="bg-gray-50 border-l-4 border-novaine-purple p-4 rounded-r-xl">
								<div className="text-2xl font-black text-novaine-purple">
									100%
								</div>
								<div className="text-xs text-gray-500 font-medium">
									In-House Indigenous Production
								</div>
							</div>
							<div className="bg-gray-50 border-l-4 border-novaine-yellow p-4 rounded-r-xl">
								<div className="text-2xl font-black text-gray-900">
									500+
								</div>
								<div className="text-xs text-gray-500 font-medium">
									Dealer Network Across India
								</div>
							</div>
						</div>
					</div>

					<div className="relative">
						<img
							src="/assets/images/hero_slide_1.jpg"
							alt="V&U Industries Plant"
							className="rounded-3xl shadow-xl w-full"
						/>
						<div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
							<img
								src="/assets/images/30-years-icon.png"
								alt="30 Years"
								className="w-12 h-12 object-contain"
							/>
							<div>
								<div className="font-bold text-gray-900 text-sm">
									10+ Years Legacy
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Pillars of Manufacturing */}
			<div className="bg-gray-50 py-16 border-y border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-2xl mx-auto mb-12">
						<span className="text-xs font-bold uppercase tracking-wider text-novaine-purple">
							Quality & Infrastructure
						</span>
						<h2 className="text-3xl font-extrabold text-gray-950 mt-1">
							World-Class Plant & Testing Facilities
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
							<div className="w-12 h-12 rounded-xl bg-purple-50 text-novaine-purple flex items-center justify-center font-bold text-xl mb-4">
								🤖
							</div>
							<h3 className="font-bold text-gray-900 text-base mb-2">
								Precision Welding
							</h3>
							<p className="text-xs text-gray-500 leading-relaxed">
								Precision TIG/MIG welding jigs
								ensuring high frame structural integrity and
								zero misalignment.
							</p>
						</div>

						<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
							<div className="w-12 h-12 rounded-xl bg-amber-50 text-novaine-yellow flex items-center justify-center font-bold text-xl mb-4">
								🎨
							</div>
							<h3 className="font-bold text-gray-900 text-base mb-2">
								Eco Phosphate Coating
							</h3>
							<p className="text-xs text-gray-500 leading-relaxed">
								Automated 7-tank pre-treatment and electrostatic
								phosphate coating delivering weather-resistant
								vibrant paint finishes.
							</p>
						</div>

						<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
							<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl mb-4">
								🔬
							</div>
							<h3 className="font-bold text-gray-900 text-base mb-2">
								Rigorous Quality Testing
							</h3>
							<p className="text-xs text-gray-500 leading-relaxed">
								Dynamic drop tests, fatigue testing, brake
								efficiency testing, and salt spray rust
								prevention evaluation.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
