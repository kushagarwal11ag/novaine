"use client";

import React from "react";
import Link from "next/link";
import { MapPin, FileText, ChevronRight, Handshake } from "lucide-react";
import { useEnquiry } from "@/context/EnquiryContext";

export default function Footer() {
	const { openEnquiry } = useEnquiry();

	return (
		<>
			{/* Dealership & Bulk Order CTA Banner */}
			<section className="bg-gradient-to-r from-novaine-purple-light via-pink-50 to-novaine-yellow-light border-y border-pink-200 py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
					<div>
						<span className="text-xs font-bold uppercase tracking-wider text-novaine-purple bg-white px-3 py-1 rounded-full shadow-sm">
							Dealership Opportunities
						</span>
						<h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mt-2">
							Partner with Novaine Bikes
						</h3>
						<p className="text-gray-600 text-sm mt-1 max-w-2xl">
							Join India's premier bicycle distribution network.
							High trade margins, robust warranty protection, and
							direct factory dispatch from Ludhiana, Punjab.
						</p>
					</div>

					<div className="flex flex-wrap items-center gap-3 shrink-0">
						<Link
							href="/become-a-dealer"
							className="inline-flex items-center gap-2 bg-novaine-purple hover:bg-novaine-purple-dark text-white text-sm font-bold px-6 py-3 rounded-full shadow-md transition-all"
						>
							<Handshake className="w-4 h-4" /> Become A Dealer
						</Link>
						<button
							onClick={() => openEnquiry("Bulk Order Inquiry")}
							className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-novaine-purple border border-novaine-purple text-sm font-bold px-6 py-3 rounded-full shadow-sm transition-all"
						>
							Buy In Bulk
						</button>
					</div>
				</div>
			</section>

			{/* Main Multi-column Footer */}
			<footer className="bg-slate-950 text-slate-400 text-sm pt-16 pb-8 border-t border-slate-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
					{/* Brand Info */}
					<div className="space-y-4">
						<div className="bg-white p-2.5 rounded-lg inline-block">
							<img
								src="/assets/images/novaine_logo.svg"
								alt="Novaine Bikes Logo"
								className="h-14 w-auto"
							/>
						</div>
						<div className="font-bold text-white text-base">
							V&U Industries
						</div>
						<p className="text-xs leading-relaxed text-slate-400">
							<MapPin className="w-3.5 h-3.5 text-novaine-yellow inline mr-1" />
							Street No. 9, Daba Road, Giaspura, Ludhiana,
							Punjab,India - 141003.
						</p>
						<p className="text-xs leading-relaxed text-slate-400">
							Novaine Bikes are proudly
							manufactured in India with decades of cycling
							engineering excellence, delivering unmatched
							durability, ergonomic comfort, and modern styling.
						</p>
					</div>

					{/* Popular Models */}
					<div>
						<h4 className="font-bold text-white text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-novaine-yellow">
							Popular Models
						</h4>
						<ul className="space-y-2 text-xs">
							<li>
								<Link
									href="/bicycles/kombat"
									className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
								>
									<ChevronRight className="w-3 h-3 text-novaine-purple" />{" "}
									Kombat
								</Link>
							</li>
							<li>
								<Link
									href="/bicycles/magnet"
									className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
								>
									<ChevronRight className="w-3 h-3 text-novaine-purple" />{" "}
									Magnet
								</Link>
							</li>
							<li>
								<Link
									href="/bicycles/boomer"
									className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
								>
									<ChevronRight className="w-3 h-3 text-novaine-purple" />{" "}
									Boomer
								</Link>
							</li>
							<li>
								<Link
									href="/bicycles/hunt"
									className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
								>
									<ChevronRight className="w-3 h-3 text-novaine-purple" />{" "}
									Hunt
								</Link>
							</li>
							<li>
								<Link
									href="/bicycles/hunt-pro"
									className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
								>
									<ChevronRight className="w-3 h-3 text-novaine-purple" />{" "}
									Hunt Pro
								</Link>
							</li>
							<li>
								<Link
									href="/bicycles/cyclone"
									className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
								>
									<ChevronRight className="w-3 h-3 text-novaine-purple" />{" "}
									Cyclone
								</Link>
							</li>
						</ul>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-bold text-white text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-novaine-yellow">
							Quick Links
						</h4>
						<ul className="space-y-2 text-xs">
							<li>
								<Link
									href="/about"
									className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
								>
									<ChevronRight className="w-3 h-3 text-novaine-purple" />{" "}
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/bicycles"
									className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
								>
									<ChevronRight className="w-3 h-3 text-novaine-purple" />{" "}
									Full Bicycle Catalog
								</Link>
							</li>
							<li>
								<Link
									href="/become-a-dealer"
									className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
								>
									<ChevronRight className="w-3 h-3 text-novaine-purple" />{" "}
									Dealership Registration
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
								>
									<ChevronRight className="w-3 h-3 text-novaine-purple" />{" "}
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									href="/warranty"
									className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
								>
									<ChevronRight className="w-3 h-3 text-novaine-purple" />{" "}
									Warranty Registration
								</Link>
							</li>
							<li>
								<Link
									href="/faq"
									className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
								>
									<ChevronRight className="w-3 h-3 text-novaine-purple" />{" "}
									Sizing & FAQ Guide
								</Link>
							</li>
						</ul>
					</div>

					{/* Catalog Downloads */}
					<div>
						<h4 className="font-bold text-white text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-novaine-yellow">
							2026 Catalogues
						</h4>
						<p className="text-xs text-slate-400 mb-3">
							Download complete model line specifications:
						</p>
						<div className="space-y-2">
							<button
								onClick={() =>
									alert(
										"Downloading Novaine Bicycles 2026 Full Range Catalogue PDF...",
									)
								}
								className="w-full flex items-center justify-between bg-slate-900 hover:bg-novaine-purple border border-slate-800 hover:border-novaine-purple px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 transition-colors"
							>
								<span className="flex items-center gap-2">
									<FileText className="w-4 h-4 text-novaine-yellow" />{" "}
									Bicycles Range 2026
								</span>
								<span className="text-[10px] text-slate-400">
									PDF
								</span>
							</button>
							<button
								onClick={() =>
									alert(
										"Downloading Novaine Kids Special Edition Catalogue PDF...",
									)
								}
								className="w-full flex items-center justify-between bg-slate-900 hover:bg-novaine-purple border border-slate-800 hover:border-novaine-purple px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 transition-colors"
							>
								<span className="flex items-center gap-2">
									<FileText className="w-4 h-4 text-novaine-yellow" />{" "}
									Kids Collection 2026
								</span>
								<span className="text-[10px] text-slate-400">
									PDF
								</span>
							</button>
						</div>
					</div>
				</div>

				{/* Bottom Copyright Bar */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
					<div>
						<strong>
							COPYRIGHT 2026 © V&U Industries | Novaine Bikes.
						</strong>{" "}
						All rights reserved.
					</div>
					<div className="text-slate-400">
						Ludhiana, Punjab - 141003 | Precision Bicycle
						Engineering in India
					</div>
				</div>
			</footer>
		</>
	);
}
