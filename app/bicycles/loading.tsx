import React from "react";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";

export default function BicyclesLoading() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div className="mb-8 space-y-2">
				<div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
				<div className="h-8 w-64 bg-gray-200 rounded animate-pulse" />
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{[...Array(8)].map((_, i) => (
					<ProductCardSkeleton key={i} />
				))}
			</div>
		</div>
	);
}
