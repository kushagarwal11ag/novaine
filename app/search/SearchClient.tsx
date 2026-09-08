"use client";

import React, { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { searchBicycles } from "@/utils/search";
import ProductCard from "@/components/ProductCard";
import SimilarBicycles from "@/components/SimilarBicycles";
import { Search, ChevronRight, HelpCircle } from "lucide-react";

export default function SearchClient() {
	const searchParams = useSearchParams();
	const query = searchParams.get("q") || "";

	// Calculate ranked results
	const results = useMemo(() => {
		return searchBicycles(query, PRODUCTS);
	}, [query]);

	return (
		<div className="bg-gray-50 min-h-screen py-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Breadcrumb */}
				<div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
					<Link
						href="/"
						className="hover:text-novaine-purple transition-colors"
					>
						Home
					</Link>
					<ChevronRight className="w-3.5 h-3.5" />
					<span className="text-gray-900 font-bold">Search</span>
				</div>

				{/* Search Title Header */}
				<div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm mb-10">
					<div className="flex items-center gap-3 text-novaine-purple mb-2">
						<Search className="w-5 h-5" />
						<span className="text-xs font-bold uppercase tracking-wider">
							Search Results
						</span>
					</div>
					<h1 className="text-2xl sm:text-3xl font-black text-gray-950">
						{query ? (
							<>
								Showing results for{" "}
								<span className="text-novaine-purple">
									"{query}"
								</span>
							</>
						) : (
							"Search Novaine Bicycles"
						)}
					</h1>
					<p className="text-xs sm:text-sm text-gray-500 mt-2">
						{results.length > 0
							? `Found ${results.length} model${results.length === 1 ? "" : "s"} ordered by relevance.`
							: query
								? "No direct model matches found. Explore our suggestions below."
								: "Enter keywords like 'Kombat', '20T', 'Tubeless', or 'Disc'."}
					</p>
				</div>

				{/* 1. Results Grid (Ranked from highest relevance to lowest) */}
				{results.length > 0 ? (
					<div>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
							{results.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
								/>
							))}
						</div>

						<SimilarBicycles
							title="Other Bicycles You May Like"
							limit={4}
						/>
					</div>
				) : (
					/* 2. Zero Results Empty State */
					<div className="space-y-12">
						<div className="bg-white rounded-3xl p-10 border border-gray-200 text-center shadow-sm max-w-xl mx-auto">
							<div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 text-gray-400">
								<HelpCircle className="w-7 h-7" />
							</div>
							<h3 className="text-lg font-bold text-gray-900">
								No bicycles matched "{query}"
							</h3>
							<p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
								Try searching for wheel sizes like{" "}
								<span className="font-semibold text-gray-800">
									14T, 20T, 26T
								</span>
								, categories like{" "}
								<span className="font-semibold text-gray-800">
									Kids or Ranger
								</span>
								, or features like{" "}
								<span className="font-semibold text-gray-800">
									Disc Brake
								</span>
								.
							</p>
							<Link
								href="/bicycles"
								className="mt-6 inline-flex items-center gap-2 bg-novaine-purple hover:bg-novaine-purple-dark text-white text-xs font-bold px-6 py-3 rounded-full transition-all"
							>
								Explore Full Bicycle Catalog
							</Link>
						</div>

						<SimilarBicycles
							title="Suggested Bicycles"
							subtitle="Here are our most popular models to get you started."
							limit={4}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
