"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import { Filter, RotateCcw, X, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

function CatalogContent() {
	const searchParams = useSearchParams();
	const initialCat = searchParams.get("cat") || "";

	// Filter States
	const [selectedCats, setSelectedCats] = useState<string[]>(
		initialCat ? [initialCat] : [],
	);
	const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
	const [selectedSpeeds, setSelectedSpeeds] = useState<string[]>([]);
	const [sortBy, setSortBy] = useState("featured");

	// Mobile Filter Drawer Toggle State
	const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

	// Toggle individual checkbox filter items
	const toggleFilter = (
		list: string[],
		setList: (l: string[]) => void,
		item: string,
	) => {
		if (list.includes(item)) {
			setList(list.filter((x) => x !== item));
		} else {
			setList([...list, item]);
		}
	};

	// Reset all active filters
	const resetFilters = () => {
		setSelectedCats([]);
		setSelectedSizes([]);
		setSelectedSpeeds([]);
	};

	// Calculate total active filters count (used for badge count)
	const activeFilterCount =
		selectedCats.length + selectedSizes.length + selectedSpeeds.length;

	// Filtered product computation
	const filteredProducts = useMemo(() => {
		return PRODUCTS.filter((p) => {
			if (
				selectedCats.length > 0 &&
				!selectedCats.includes(p.categorySlug)
			)
				return false;
			if (
				selectedSizes.length > 0 &&
				!p.sizes.some((s) => selectedSizes.includes(s))
			)
				return false;
			if (selectedSpeeds.length > 0) {
				const isMulti = p.speeds.includes("21");
				const wantsMulti = selectedSpeeds.includes("multi");
				const wantsSingle = selectedSpeeds.includes("single");
				if (wantsMulti && !wantsSingle && !isMulti) return false;
				if (wantsSingle && !wantsMulti && isMulti) return false;
			}
			return true;
		});
	}, [selectedCats, selectedSizes, selectedSpeeds]);

	// Reusable Filter Sections (shared across Desktop Sidebar & Mobile Drawer)
	const FilterControls = () => (
		<div className="space-y-6">
			{/* Category Filter */}
			<div>
				<h4 className="font-bold text-xs uppercase text-gray-700 tracking-wider mb-3">
					Category
				</h4>
				<div className="space-y-2">
					{[
						{
							id: "kids",
							label: "Kids Bikes (14T, 16T, 20T)",
						},
						{
							id: "ranger",
							label: "Ranger & MTB (24T, 26T)",
						},
						{ id: "city", label: "City & Commuter" },
					].map((c) => (
						<label
							key={c.id}
							className="flex items-center gap-2.5 text-xs font-medium text-gray-700 cursor-pointer hover:text-novaine-purple transition-colors"
						>
							<input
								type="checkbox"
								checked={selectedCats.includes(c.id)}
								onChange={() =>
									toggleFilter(
										selectedCats,
										setSelectedCats,
										c.id,
									)
								}
								className="rounded text-novaine-purple focus:ring-novaine-purple w-4 h-4 cursor-pointer"
							/>
							{c.label}
						</label>
					))}
				</div>
			</div>

			{/* Wheel Size Filter */}
			<div>
				<h4 className="font-bold text-xs uppercase text-gray-700 tracking-wider mb-3">
					Wheel Size
				</h4>
				<div className="space-y-2">
					{[
						{ id: "14T", label: "14T (Ages 3-5 yrs)" },
						{ id: "16T", label: "16T (Ages 4-7 yrs)" },
						{ id: "20T", label: "20T (Ages 6-9 yrs)" },
						{ id: "24T", label: "24T (Ages 9-14 yrs)" },
						{ id: "26T", label: "26T (Teens & Adults)" },
					].map((s) => (
						<label
							key={s.id}
							className="flex items-center gap-2.5 text-xs font-medium text-gray-700 cursor-pointer hover:text-novaine-purple transition-colors"
						>
							<input
								type="checkbox"
								checked={selectedSizes.includes(s.id)}
								onChange={() =>
									toggleFilter(
										selectedSizes,
										setSelectedSizes,
										s.id,
									)
								}
								className="rounded text-novaine-purple focus:ring-novaine-purple w-4 h-4 cursor-pointer"
							/>
							{s.label}
						</label>
					))}
				</div>
			</div>

			{/* Gears Filter */}
			<div>
				<h4 className="font-bold text-xs uppercase text-gray-700 tracking-wider mb-3">
					Gears / Speeds
				</h4>
				<div className="space-y-2">
					{[
						{ id: "single", label: "Single Speed" },
						{ id: "multi", label: "21-Speed Multi-Gear" },
					].map((g) => (
						<label
							key={g.id}
							className="flex items-center gap-2.5 text-xs font-medium text-gray-700 cursor-pointer hover:text-novaine-purple transition-colors"
						>
							<input
								type="checkbox"
								checked={selectedSpeeds.includes(g.id)}
								onChange={() =>
									toggleFilter(
										selectedSpeeds,
										setSelectedSpeeds,
										g.id,
									)
								}
								className="rounded text-novaine-purple focus:ring-novaine-purple w-4 h-4 cursor-pointer"
							/>
							{g.label}
						</label>
					))}
				</div>
			</div>
		</div>
	);

	return (
		<div>
			{/* Main Catalog Layout */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
					{/* ======================================================== */}
					{/* 1. DESKTOP SIDEBAR (Visible only on lg screens & above) */}
					{/* ======================================================== */}
					<aside className="hidden lg:block bg-white rounded-2xl border border-gray-200 p-6 shadow-sm sticky top-24">
						<div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
							<h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
								<Filter className="w-4 h-4 text-novaine-purple" />
								Filters
								{activeFilterCount > 0 && (
									<span className="bg-novaine-purple text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
										{activeFilterCount}
									</span>
								)}
							</h3>
							{activeFilterCount > 0 && (
								<button
									onClick={resetFilters}
									className="text-xs font-bold text-novaine-purple hover:underline flex items-center gap-1"
								>
									<RotateCcw className="w-3 h-3" /> Reset
								</button>
							)}
						</div>

						{/* Shared Filter Controls */}
						<FilterControls />
					</aside>

					{/* ======================================================== */}
					{/* 2. PRODUCT GRID MAIN AREA                                */}
					{/* ======================================================== */}
					<main className="lg:col-span-3">
						{/* Top Control Bar with Count, Mobile Filter Button, and Sort */}
						<div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
							<div className="text-xs sm:text-sm font-semibold text-gray-600">
								Showing{" "}
								<strong className="text-gray-900 font-bold">
									{filteredProducts.length}
								</strong>{" "}
								Bicycles Available
							</div>

							<div className="flex items-center gap-3">
								{/* Mobile Filter Trigger Button (hidden on desktop lg:) */}
								<button
									onClick={() => setIsMobileFilterOpen(true)}
									className="lg:hidden inline-flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-900 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors"
								>
									<SlidersHorizontal className="w-3.5 h-3.5 text-novaine-purple" />
									Filters
									{activeFilterCount > 0 && (
										<span className="bg-novaine-purple text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full ml-0.5">
											{activeFilterCount}
										</span>
									)}
								</button>

								{/* Sort Dropdown */}
								<div className="flex items-center gap-1.5 text-xs">
									<span className="text-gray-500 hidden sm:inline">
										Sort:
									</span>
									<select
										value={sortBy}
										onChange={(e) =>
											setSortBy(e.target.value)
										}
										className="bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs font-medium focus:outline-none focus:border-novaine-purple"
									>
										<option value="featured">
											Featured Models
										</option>
										<option value="name">Name (A-Z)</option>
									</select>
								</div>
							</div>
						</div>

						{/* Product Cards or Empty State */}
						{filteredProducts.length === 0 ? (
							<div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
								<h3 className="text-base font-bold text-gray-800">
									No bicycles found matching your filters
								</h3>
								<p className="text-xs text-gray-500 mt-1 mb-4">
									Try clearing some filter criteria to view
									more models.
								</p>
								<button
									onClick={resetFilters}
									className="bg-novaine-purple text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-novaine-purple-dark transition-colors"
								>
									Clear All Filters
								</button>
							</div>
						) : (
							<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
								{filteredProducts.map((prod) => (
									<ProductCard key={prod.id} product={prod} />
								))}
							</div>
						)}
					</main>
				</div>
			</div>

			{/* ======================================================== */}
			{/* 3. MOBILE FILTER SLIDE-OVER DRAWER                       */}
			{/* ======================================================== */}
			{isMobileFilterOpen && (
				<div className="fixed inset-0 z-50 flex lg:hidden">
					{/* Backdrop Overlay */}
					<div
						className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
						onClick={() => setIsMobileFilterOpen(false)}
					/>

					{/* Slide-in Drawer Container */}
					<div className="relative w-80 max-w-[85vw] bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-300">
						{/* Drawer Header */}
						<div className="p-4 border-b border-gray-100 flex items-center justify-between">
							<div className="flex items-center gap-2">
								<SlidersHorizontal className="w-4 h-4 text-novaine-purple" />
								<h3 className="font-bold text-gray-900 text-sm">
									Filters
								</h3>
								{activeFilterCount > 0 && (
									<span className="bg-novaine-purple text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
										{activeFilterCount} Active
									</span>
								)}
							</div>
							<button
								onClick={() => setIsMobileFilterOpen(false)}
								className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg"
								aria-label="Close filters"
							>
								<X className="w-5 h-5" />
							</button>
						</div>

						{/* Scrollable Filter Options */}
						<div className="flex-1 overflow-y-auto p-5">
							<FilterControls />
						</div>

						{/* Drawer Footer Actions */}
						<div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center gap-3">
							<button
								onClick={resetFilters}
								className="flex-1 py-2.5 px-3 border border-gray-300 text-gray-700 text-xs font-bold rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-1.5"
							>
								<RotateCcw className="w-3.5 h-3.5" /> Reset
							</button>
							<button
								onClick={() => setIsMobileFilterOpen(false)}
								className="flex-1 py-2.5 px-3 bg-novaine-purple hover:bg-novaine-purple-dark text-white text-xs font-bold rounded-xl shadow-md transition-colors"
							>
								Apply Filters ({filteredProducts.length})
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default function BicyclesPage() {
	return (
		<Suspense
			fallback={
				<div className="p-12 text-center text-sm">
					Loading bicycle catalog...
				</div>
			}
		>
			<CatalogContent />
		</Suspense>
	);
}
