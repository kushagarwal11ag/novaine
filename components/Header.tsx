"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Phone,
	MapPin,
	Search,
	Menu,
	X,
	ChevronDown,
	Mail,
	Handshake,
	CheckCircle2,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useEnquiry } from "@/context/EnquiryContext";

export default function Header() {
	const pathname = usePathname();
	const { openEnquiry } = useEnquiry();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState<typeof PRODUCTS>([]);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const searchRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (searchQuery.trim().length >= 2) {
			const q = searchQuery.toLowerCase();
			const matches = PRODUCTS.filter(
				(p) =>
					p.name.toLowerCase().includes(q) ||
					p.category.toLowerCase().includes(q) ||
					p.sizes.some((s) => s.toLowerCase().includes(q)),
			);
			setSearchResults(matches);
			setIsSearchOpen(true);
		} else {
			setSearchResults([]);
			setIsSearchOpen(false);
		}
	}, [searchQuery]);

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (
				searchRef.current &&
				!searchRef.current.contains(e.target as Node)
			) {
				setIsSearchOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<>
			{/* Top Utility Bar */}
			<div className="bg-gray-950 text-gray-300 text-xs py-2 border-b border-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
					<div className="flex items-center gap-4 flex-wrap">
						<a
							href="https://wa.me/919053014084"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-1.5 text-gray-300 hover:text-novaine-yellow transition-colors"
						>
							<Phone className="w-3.5 h-3.5 text-novaine-yellow" />
							+91 87582 16246
						</a>
					</div>

					<div className="flex items-center gap-4 text-xs">
						<Link
							href="/become-a-dealer"
							className="inline-flex items-center gap-1 hover:text-novaine-yellow transition-colors"
						>
							<Handshake className="w-3.5 h-3.5 text-novaine-yellow" />{" "}
							Become A Dealer
						</Link>
						<Link
							href="/contact"
							className="hover:text-novaine-yellow transition-colors"
						>
							Contact Us
						</Link>
					</div>
				</div>
			</div>

			{/* Main Sticky Header */}
			<header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
					{/* Brand Logo */}
          <nav className="hidden lg:flex items-center gap-7">
					<Link href="/" className="flex items-center gap-3 shrink-0">
						<img
							src="/assets/images/novaine_logo.svg"
							alt="Novaine Bikes"
							className="h-16 w-auto object-contain"
						/>
					</Link>

					{/* Desktop Nav Links */}
					
						<Link
							href="/"
							className={
								"text-sm font-semibold transition-colors" +
								(pathname === "/"
									? "text-novaine-purple"
									: "text-gray-800 hover:text-novaine-purple")
							}
						>
							Home
						</Link>

						{/* Bicycles Dropdown */}
						<div className="relative group py-2">
							<Link
								href="/bicycles"
								className={
									"text-sm font-semibold inline-flex items-center gap-1 transition-colors " +
									(pathname.startsWith("/bicycles")
										? "text-novaine-purple"
										: "text-gray-800 hover:text-novaine-purple")
								}
							>
								Bicycles
								<ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
							</Link>

							<div className="absolute top-full left-0 w-60 bg-white border border-gray-100 rounded-xl shadow-xl py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
								<Link
									href="/bicycles?cat=kids"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-novaine-purple-light hover:text-novaine-purple transition-colors font-medium"
								>
									👶 Kids Bikes (14T, 16T, 20T)
								</Link>
								<Link
									href="/bicycles?cat=ranger"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-novaine-purple-light hover:text-novaine-purple transition-colors font-medium"
								>
									🚵 Ranger & MTB (24T, 26T)
								</Link>
								<Link
									href="/bicycles?cat=city"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-novaine-purple-light hover:text-novaine-purple transition-colors font-medium"
								>
									🏙️ City & Commuter
								</Link>
								<div className="border-t border-gray-100 my-1"></div>
								<Link
									href="/bicycles"
									className="block px-4 py-2 text-xs font-semibold text-novaine-purple hover:bg-novaine-purple-light"
								>
									View All Models →
								</Link>
							</div>
						</div>

						<Link
							href="/about"
							className={
								"text-sm font-semibold transition-colors " +
								(pathname === "/about"
									? "text-novaine-purple"
									: "text-gray-800 hover:text-novaine-purple")
							}
						>
							About Us
						</Link>

						<Link
							href="/become-a-dealer"
							className={
								"text-sm font-semibold transition-colors " +
								(pathname === "/become-a-dealer"
									? "text-novaine-purple"
									: "text-gray-800 hover:text-novaine-purple")
							}
						>
							Dealership
						</Link>

						<Link
							href="/contact"
							className={
								"text-sm font-semibold transition-colors " +
								(pathname === "/contact"
									? "text-novaine-purple"
									: "text-gray-800 hover:text-novaine-purple")
							}
						>
							Contact
						</Link>
					</nav>

					{/* Search Bar & Actions */}
					<div className="flex items-center gap-3">
						<div
							ref={searchRef}
							className="relative hidden sm:block w-56 md:w-64"
						>
							<input
								type="text"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								placeholder="Search models"
								className="w-full bg-gray-100 focus:bg-white text-xs md:text-sm pl-9 pr-4 py-2 rounded-full border border-transparent focus:border-novaine-purple focus:ring-2 focus:ring-novaine-purple/20 outline-none transition-all"
							/>
							<Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />

							{/* Live Search Autocomplete */}
							{isSearchOpen && (
								<div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 max-h-80 overflow-y-auto z-50">
									{searchResults.length === 0 ? (
										<div className="p-4 text-center text-xs text-gray-500">
											No bicycles found matching "
											{searchQuery}"
										</div>
									) : (
										searchResults.map((p) => (
											<Link
												key={p.id}
												href={"/bicycles/" + p.id}
												onClick={() =>
													setIsSearchOpen(false)
												}
												className="flex items-center gap-3 p-3 hover:bg-gray-50 border-b border-gray-50 last:border-none transition-colors"
											>
												<img
													src={p.imageSide}
													alt={p.name}
													className="w-10 h-10 object-contain rounded"
												/>
												<div>
													<div className="text-xs font-bold text-gray-900">
														{p.name}
													</div>
													<div className="text-[11px] text-gray-500">
														{p.category} •{" "}
														{p.sizes.join(", ")}
													</div>
												</div>
											</Link>
										))
									)}
								</div>
							)}
						</div>

						<button
							onClick={() => openEnquiry("General Enquiry")}
							className="hidden sm:inline-flex items-center gap-1.5 bg-novaine-purple hover:bg-novaine-purple-dark text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow transition-all"
						>
							<Mail className="w-4 h-4" /> Quick Enquiry
						</button>

						{/* Mobile Hamburger Button */}
						<button
							onClick={() => setMobileMenuOpen(true)}
							className="lg:hidden p-2 text-gray-700 hover:text-novaine-purple focus:outline-none"
							aria-label="Toggle menu"
						>
							<Menu className="w-6 h-6" />
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Drawer Menu */}
			{mobileMenuOpen && (
				<div className="fixed inset-0 z-50 flex lg:hidden">
					<div
						className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
						onClick={() => setMobileMenuOpen(false)}
					></div>

					<div className="relative w-80 max-w-[85vw] bg-white h-full shadow-2xl flex flex-col z-10">
						<div className="p-4 border-b border-gray-100 flex items-center justify-between">
							<img
								src="/assets/images/novaine_logo.svg"
								alt="Novaine Bikes"
								className="h-10 w-auto"
							/>
							<button
								onClick={() => setMobileMenuOpen(false)}
								className="p-2 text-gray-400 hover:text-gray-700"
							>
								<X className="w-5 h-5" />
							</button>
						</div>

						<div className="p-4 border-b border-gray-100">
							<input
								type="text"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								placeholder="Search models..."
								className="w-full bg-gray-100 text-sm px-4 py-2 rounded-lg outline-none"
							/>
						</div>

						<nav className="flex-1 overflow-y-auto p-4 space-y-2">
							<Link
								href="/"
								onClick={() => setMobileMenuOpen(false)}
								className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-novaine-purple-light hover:text-novaine-purple"
							>
								Home
							</Link>
							<Link
								href="/bicycles"
								onClick={() => setMobileMenuOpen(false)}
								className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-novaine-purple-light hover:text-novaine-purple"
							>
								All Bicycles
							</Link>
							<Link
								href="/bicycles?cat=kids"
								onClick={() => setMobileMenuOpen(false)}
								className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-novaine-purple-light hover:text-novaine-purple"
							>
								Kids Series (14T, 16T, 20T)
							</Link>
							<Link
								href="/bicycles?cat=ranger"
								onClick={() => setMobileMenuOpen(false)}
								className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-novaine-purple-light hover:text-novaine-purple"
							>
								Ranger Series (24T, 26T)
							</Link>
							<Link
								href="/about"
								onClick={() => setMobileMenuOpen(false)}
								className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-novaine-purple-light hover:text-novaine-purple"
							>
								About V&U Industries
							</Link>
							<Link
								href="/become-a-dealer"
								onClick={() => setMobileMenuOpen(false)}
								className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-novaine-purple-light hover:text-novaine-purple"
							>
								Become A Dealer
							</Link>
							<Link
								href="/contact"
								onClick={() => setMobileMenuOpen(false)}
								className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-novaine-purple-light hover:text-novaine-purple"
							>
								Contact Us
							</Link>
							<Link
								href="/warranty"
								onClick={() => setMobileMenuOpen(false)}
								className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-novaine-purple-light hover:text-novaine-purple"
							>
								Warranty Policy
							</Link>
							<Link
								href="/faq"
								onClick={() => setMobileMenuOpen(false)}
								className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-novaine-purple-light hover:text-novaine-purple"
							>
								FAQ
							</Link>
						</nav>

						<div className="p-4 bg-gray-50 border-t border-gray-100">
							<div className="text-xs font-bold text-gray-900">
								V&U Industries
							</div>
							<div className="text-[11px] text-gray-500">
								Ludhiana, Punjab - 141003
							</div>
							<a
								href="https://wa.me/919053014084"
								target="_blank"
								rel="noreferrer"
								className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-emerald-600 text-white text-xs font-bold py-2.5 rounded-lg shadow-sm"
							>
								Chat on WhatsApp
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
