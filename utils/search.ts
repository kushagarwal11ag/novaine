import { Product } from "@/data/products";

export function searchBicycles(query: string, products: Product[]): Product[] {
	const q = query.trim().toLowerCase();
	if (!q) return [];

	const tokens = q.split(/\s+/).filter(Boolean);

	const scored = products.map((product) => {
		let score = 0;
		const name = product.name.toLowerCase();
		const id = product.id.toLowerCase();
		const category = product.category.toLowerCase();
		const categorySlug = product.categorySlug.toLowerCase();
		const desc = product.desc.toLowerCase();
		const sizes = product.sizes.map((s) => s.toLowerCase());
		const tag = product.tag.toLowerCase();
		const tyreType = (product.tyreType || "").toLowerCase();
		const tyreSize = (product.tyreSize || "").toLowerCase();
		const brakes = (product.brakes || "").toLowerCase();
		const speeds = (product.speeds || "").toLowerCase();
		const colors = product.colors.map((c) => c.name.toLowerCase());

		// 1. Exact model name or ID match (Highest Priority)
		if (name === q || id === q) {
			score += 100;
		} else if (name.startsWith(q)) {
			score += 50;
		} else if (name.includes(q)) {
			score += 30;
		}

		// 2. Token-by-token matching
		tokens.forEach((token) => {
			if (name.includes(token)) score += 25;

			// Category & Synonym Matching (e.g., 'mtb' or 'adult' maps to Ranger)
			if (category.includes(token) || categorySlug.includes(token))
				score += 20;
			if (token === "mtb" && categorySlug === "ranger") score += 25;
			if (token === "adult" && categorySlug === "ranger") score += 20;
			if (token === "cycle" || token === "bike" || token === "bicycle")
				score += 2;

			// Wheel Size match (e.g. '14', '14t', '20t')
			const rawNumber = token.replace(/t$/, "");
			if (
				sizes.some(
					(s) =>
						s.includes(token) || s.replace(/t$/, "") === rawNumber,
				)
			) {
				score += 25;
			}

			// Technical Specs
			if (brakes.includes(token)) score += 15;
			if (token === "disc" && brakes.includes("disc")) score += 20;
			if (tyreType.includes(token) || tyreSize.includes(token))
				score += 15;
			if (token === "tubeless" && tyreType.includes("tubeless"))
				score += 20;
			if (token === "fat" && (tyreSize === "300" || desc.includes("fat")))
				score += 20;
			if (speeds.includes(token)) score += 15;

			// Colors
			if (colors.some((c) => c.includes(token))) score += 15;

			// Tag & Description
			if (tag.includes(token)) score += 10;
			if (desc.includes(token)) score += 5;
		});

		return { product, score };
	});

	// Filter out products with 0 relevance, and sort by highest score first
	return scored
		.filter((item) => item.score > 0)
		.sort((a, b) => b.score - a.score)
		.map((item) => item.product);
}
