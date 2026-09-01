"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import { Filter, RotateCcw, Handshake } from "lucide-react";
import Link from "next/link";

function CatalogContent() {
	const searchParams = useSearchParams();
	const initialCat = searchParams.get("cat") || "";

	const [selectedCats, setSelectedCats] = useState<string[]>(
		initialCat ? [initialCat] : [],
	);
	const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
	const [selectedSpeeds, setSelectedSpeeds] = useState<string[]>([]);
	const [sortBy, setSortBy] = useState("featured");

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

	const resetFilters = () => {
		setSelectedCats([]);
		setSelectedSizes([]);
		setSelectedSpeeds([]);
	};

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

	return (
		<div>
			{/* Main Catalog Layout */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
					{/* Sidebar Filters */}
					<aside className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm sticky top-24">
						<div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
							<h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
								<Filter className="w-4 h-4 text-novaine-purple" />{" "}
								Filters
							</h3>
							<button
								onClick={resetFilters}
								className="text-xs font-bold text-novaine-purple hover:underline flex items-center gap-1"
							>
								<RotateCcw className="w-3 h-3" /> Reset
							</button>
						</div>

						{/* Category Filter */}
						<div className="mb-6">
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
										className="flex items-center gap-2.5 text-xs font-medium text-gray-700 cursor-pointer"
									>
										<input
											type="checkbox"
											checked={selectedCats.includes(
												c.id,
											)}
											onChange={() =>
												toggleFilter(
													selectedCats,
													setSelectedCats,
													c.id,
												)
											}
											className="rounded text-novaine-purple focus:ring-novaine-purple w-4 h-4"
										/>
										{c.label}
									</label>
								))}
							</div>
						</div>

						{/* Wheel Size Filter */}
						<div className="mb-6">
							<h4 className="font-bold text-xs uppercase text-gray-700 tracking-wider mb-3">
								Wheel Size
							</h4>
							<div className="space-y-2">
								{[
									{ id: "14T", label: "14T (Ages 3-5 yrs)" },
									{ id: "16T", label: "16T (Ages 4-7 yrs)" },
									{ id: "20T", label: "20T (Ages 6-9 yrs)" },
									{ id: "24T", label: "24T (Ages 9-14 yrs)" },
									{
										id: "26T",
										label: "26T (Teens & Adults)",
									},
								].map((s) => (
									<label
										key={s.id}
										className="flex items-center gap-2.5 text-xs font-medium text-gray-700 cursor-pointer"
									>
										<input
											type="checkbox"
											checked={selectedSizes.includes(
												s.id,
											)}
											onChange={() =>
												toggleFilter(
													selectedSizes,
													setSelectedSizes,
													s.id,
												)
											}
											className="rounded text-novaine-purple focus:ring-novaine-purple w-4 h-4"
										/>
										{s.label}
									</label>
								))}
							</div>
						</div>

						{/* Gears Filter */}
						<div className="mb-6">
							<h4 className="font-bold text-xs uppercase text-gray-700 tracking-wider mb-3">
								Gears / Speeds
							</h4>
							<div className="space-y-2">
								{[
									{ id: "single", label: "Single Speed" },
									{
										id: "multi",
										label: "21-Speed Multi-Gear",
									},
								].map((g) => (
									<label
										key={g.id}
										className="flex items-center gap-2.5 text-xs font-medium text-gray-700 cursor-pointer"
									>
										<input
											type="checkbox"
											checked={selectedSpeeds.includes(
												g.id,
											)}
											onChange={() =>
												toggleFilter(
													selectedSpeeds,
													setSelectedSpeeds,
													g.id,
												)
											}
											className="rounded text-novaine-purple focus:ring-novaine-purple w-4 h-4"
										/>
										{g.label}
									</label>
								))}
							</div>
						</div>
					</aside>

					{/* Product Grid Area */}
					<main className="lg:col-span-3">
						<div className="flex items-center justify-between gap-4 mb-6">
							<div className="text-xs sm:text-sm font-semibold text-gray-600">
								Showing{" "}
								<strong className="text-gray-900 font-bold">
									{filteredProducts.length}
								</strong>{" "}
								Bicycles Available
							</div>

							<div className="flex items-center gap-2 text-xs">
								<span className="text-gray-500">Sort:</span>
								<select
									value={sortBy}
									onChange={(e) => setSortBy(e.target.value)}
									className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-medium focus:outline-none"
								>
									<option value="featured">
										Featured Models
									</option>
									<option value="name">Name (A-Z)</option>
								</select>
							</div>
						</div>

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
									className="bg-novaine-purple text-white text-xs font-bold px-4 py-2 rounded-full"
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
