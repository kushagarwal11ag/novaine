import React from "react";
import { Product, PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";

interface SimilarBicyclesProps {
	currentId?: string;
	title?: string;
	subtitle?: string;
	limit?: number;
}

export default function SimilarBicycles({
	currentId,
	title = "Bicycles You May Like",
	subtitle = "Discover popular kids and ranger models from our Ludhiana workshop.",
	limit = 4,
}: SimilarBicyclesProps) {
	// Pick bikes excluding currentId
	const suggestions = PRODUCTS.filter((p) => p.id !== currentId).slice(
		0,
		limit,
	);

	return (
		<div className="mt-16 pt-12 border-t border-gray-200">
			<div className="mb-8">
				<h3 className="text-xl sm:text-2xl font-black text-gray-950">
					{title}
				</h3>
				{subtitle && (
					<p className="text-xs sm:text-sm text-gray-500 mt-1">
						{subtitle}
					</p>
				)}
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{suggestions.map((p) => (
					<ProductCard key={p.id} product={p} />
				))}
			</div>
		</div>
	);
}
