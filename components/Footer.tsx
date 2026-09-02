"use client";

import React from "react";
import Link from "next/link";
import { MapPin, FileText, ChevronRight } from "lucide-react";
import { Facebook, Instagram, Whatsapp, Youtube } from "iconic-react";
import { useEnquiry } from "@/context/EnquiryContext";

export default function Footer() {
	const { openEnquiry } = useEnquiry();

	return (
		<>
			{/* Main Multi-column Footer */}
			<footer className="bg-slate-950 text-slate-400 text-sm pt-16 pb-8 border-t border-slate-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
					{/* Brand Info */}
					<div className="space-y-4">
						<div className="font-bold text-white text-base">
							V&U Industries
						</div>
						<p className="text-xs leading-relaxed text-slate-400">
							<MapPin className="w-3.5 h-3.5 text-novaine-yellow inline mr-1" />
							Street No. 9, Daba Road, Giaspura, Ludhiana,
							Punjab,India - 141003.
						</p>
						<p className="text-xs leading-relaxed text-slate-400">
							Novaine Bikes are proudly made in India for the
							world—designed to make cycling safe, enjoyable, and
							convenient for people of all ages.
						</p>
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
									href="/warranty"
									className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
								>
									<ChevronRight className="w-3 h-3 text-novaine-purple" />{" "}
									Warranty Policy
								</Link>
							</li>
						</ul>
					</div>

					{/* Info */}
					<div>
						<h4 className="font-bold text-white text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-novaine-yellow">
							Info
						</h4>
						<ul className="space-y-2 text-xs">
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
									href="/faq"
									className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
								>
									<ChevronRight className="w-3 h-3 text-novaine-purple" />{" "}
									Sizing & FAQ Guide
								</Link>
							</li>
							<li>
								<Link
									href="/policy"
									className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
								>
									<ChevronRight className="w-3 h-3 text-novaine-purple" />{" "}
									Policy
								</Link>
							</li>
							<li>
								<Link
									href="/disclaimer"
									className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
								>
									<ChevronRight className="w-3 h-3 text-novaine-purple" />{" "}
									Disclaimer
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
									alert("Downloading Bicycles catalogue")
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
									alert("Downloading Spare Parts catalogue")
								}
								className="w-full flex items-center justify-between bg-slate-900 hover:bg-novaine-purple border border-slate-800 hover:border-novaine-purple px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 transition-colors"
							>
								<span className="flex items-center gap-2">
									<FileText className="w-4 h-4 text-novaine-yellow" />{" "}
									Spare Parts Collection 2026
								</span>
								<span className="text-[10px] text-slate-400">
									PDF
								</span>
							</button>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						Follow us on socials
						<div className="flex items-center gap-2">
							<Link
								href="#"
								className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
							>
								<Facebook variant="Bold" size="20" />
							</Link>

							<Link
								href="#"
								className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
							>
								<Instagram variant="Bold" size="20" />
							</Link>
							<Link
								href="#"
								className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
							>
								<Whatsapp variant="Bold" size="20" />
							</Link>
							<Link
								href="#"
								className="hover:text-novaine-yellow transition-colors inline-flex items-center gap-1"
							>
								<Youtube variant="Bold" size="20" />
							</Link>
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
						Ludhiana, Punjab - 141003
					</div>
				</div>
			</footer>
		</>
	);
}
