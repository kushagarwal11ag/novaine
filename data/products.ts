// ============================================================================
// 1. TYPE DEFINITIONS
// ============================================================================

export interface ProductDetailView {
	id: string; // e.g. "cockpit", "saddle", "brake-v", "tyre-300"
	title: string; // e.g. "Rider Cockpit", "Comfort Saddle", "V-Brake Mechanism"
	url: string; // Path under /assets/images/bicycle/[modelId]/
	category: "detail" | "spec"; // "detail" = component shot, "spec" = technical variant
	variantMatch?: {
		brakeType?: "Caliper" | "V-Brake" | "Dual Disc";
		tyreSize?: string;
	};
}

export interface ProductColor {
	name: string;
	hex: string;
	image: string; // Single clean hero photo for this color
}

export interface ProductVariant {
	wheelSize: string; // e.g. "14T", "16T", "20T"
	tyreType?: "Tyre Tube" | "Tubeless";
	tyreSize?: "240" | "260" | "280" | "300" | "400";
	brakeType?: "Caliper" | "V-Brake" | "Dual Disc";
	color?: string;
	image?: string; // Optional variant-specific photo (e.g. Kombat 3.00 Fat Tyre)
	isInStock: boolean;
}

export interface Product {
	id: string;
	isInStock?: boolean;
	name: string;
	category: string;
	categorySlug: "kids" | "ranger";
	sizes: string[];
	tyreType?: "Tyre Tube" | "Tubeless";
	tyreSize?: "240" | "260" | "280" | "300" | "400";
	brakes: "Caliper" | "V-Brake" | "Dual Disc";
	speeds: string;
	ageGroup: string;
	frame: string;
	image: string; // Single main thumbnail for cards and search
	colors: ProductColor[];
	isPopular: boolean;
	tag: string;
	desc: string;
	variants?: ProductVariant[];
	details?: ProductDetailView[]; // Extra non-color closeups (cockpit, saddle, etc.)
}

// ============================================================================
// 2. PRODUCT DATABASE
// ============================================================================

export const PRODUCTS: Product[] = [
	// ------------------------------------------------------------------------
	// 1. KOMBAT (Kids: 14T, 16T, 20T)
	// ------------------------------------------------------------------------
	{
		id: "kombat",
		isInStock: true,
		name: "Kombat",
		category: "Kids Bikes",
		categorySlug: "kids",
		sizes: ["14T", "16T", "20T"],
		tyreType: "Tyre Tube",
		tyreSize: "240",
		brakes: "Caliper",
		speeds: "Single Speed",
		ageGroup: "4-7 Years",
		frame: "Hi-Ten Steel Sport Frame",
		image: "/assets/images/bicycle/kombat/hero-red.jpg",
		isPopular: true,
		tag: "Popular Kids Choice",
		desc: "Novaine Kombat is engineered for adventurous kids, offering rugged tyre tube (2.40 & 3.00 Super-Fat) and puncture-resistant tubeless options (2.80) with versatile caliper or dual mechanical disc braking.",
		colors: [
			{
				name: "Red",
				hex: "#E31E24",
				image: "/assets/images/bicycle/kombat/hero-red.jpg",
			},
			{
				name: "Green",
				hex: "#24902B",
				image: "/assets/images/bicycle/kombat/hero-green.jpg",
			},
			{
				name: "Sea Green",
				hex: "#37F5FB",
				image: "/assets/images/bicycle/kombat/hero-seagreen.jpg",
			},
		],
		variants: [
			// Tyre Tube 240 Sizes
			{
				wheelSize: "14T",
				tyreType: "Tyre Tube",
				tyreSize: "240",
				brakeType: "Caliper",
				isInStock: true,
			},
			{
				wheelSize: "16T",
				tyreType: "Tyre Tube",
				tyreSize: "240",
				brakeType: "Caliper",
				isInStock: true,
			},
			{
				wheelSize: "16T",
				tyreType: "Tyre Tube",
				tyreSize: "300",
				brakeType: "V-Brake",
				isInStock: true,
			},
			{
				wheelSize: "16T",
				tyreType: "Tyre Tube",
				tyreSize: "300",
				brakeType: "Dual Disc",
				isInStock: false,
			},
			{
				wheelSize: "20T",
				tyreType: "Tyre Tube",
				tyreSize: "240",
				brakeType: "Caliper",
				isInStock: true,
			},
			{
				wheelSize: "20T",
				tyreType: "Tyre Tube",
				tyreSize: "240",
				brakeType: "Dual Disc",
				isInStock: true,
			},
			// Tyre Tube 300 Super-Fat Variant
			{
				wheelSize: "20T",
				tyreType: "Tyre Tube",
				tyreSize: "300",
				brakeType: "V-Brake",
				isInStock: true,
				image: "/assets/images/bicycle/kombat/hero-blue-300.jpg",
			},
			{
				wheelSize: "20T",
				tyreType: "Tyre Tube",
				tyreSize: "300",
				brakeType: "Dual Disc",
				isInStock: true,
				image: "/assets/images/bicycle/kombat/hero-blue-300.jpg",
			},
			// Tubeless 280 Sizes
			{
				wheelSize: "14T",
				tyreType: "Tubeless",
				tyreSize: "280",
				brakeType: "Caliper",
				isInStock: true,
			},
			{
				wheelSize: "16T",
				tyreType: "Tubeless",
				tyreSize: "280",
				brakeType: "Caliper",
				isInStock: true,
			},
			{
				wheelSize: "20T",
				tyreType: "Tubeless",
				tyreSize: "280",
				brakeType: "Caliper",
				isInStock: true,
			},
		],
		details: [
			{
				id: "cockpit",
				title: "Rider Cockpit",
				url: "/assets/images/bicycle/kombat/detail-cockpit.jpg",
				category: "detail",
			},
			{
				id: "frame",
				title: "Hi-Ten Steel Frame",
				url: "/assets/images/bicycle/kombat/detail-frame.jpg",
				category: "detail",
			},
			{
				id: "saddle",
				title: "Comfortable Saddle",
				url: "/assets/images/bicycle/kombat/detail-saddle.jpg",
				category: "detail",
			},
			{
				id: "brake-v",
				title: "V-Brake Mechanism",
				url: "/assets/images/bicycle/kombat/spec-brake-v.jpg",
				category: "spec",
				variantMatch: { brakeType: "V-Brake" },
			},
			{
				id: "tyre-300",
				title: '3.00" Super-Fat Tread',
				url: "/assets/images/bicycle/kombat/spec-tyre-300.jpg",
				category: "spec",
				variantMatch: { tyreSize: "300" },
			},
		],
	},

	// ------------------------------------------------------------------------
	// 2. MAGNET (Kids: 14T, 16T, 20T)
	// ------------------------------------------------------------------------
	{
		id: "magnet",
		isInStock: true,
		name: "Magnet",
		category: "Kids Bikes",
		categorySlug: "kids",
		sizes: ["14T", "16T", "20T"],
		tyreType: "Tubeless",
		tyreSize: "260",
		brakes: "Caliper",
		speeds: "Single Speed",
		ageGroup: "5-8 Years",
		frame: "Carbon-Grade Steel Geometry",
		image: "/assets/images/bicycle/magnet/hero-floro-green.jpg",
		colors: [
			{
				name: "Floro Green",
				hex: "#0AFF02",
				image: "/assets/images/bicycle/magnet/hero-floro-green.jpg",
			},
			{
				name: "Red",
				hex: "#E31E24",
				image: "/assets/images/bicycle/magnet/hero-red.jpg",
			},
			{
				name: "Sea Green",
				hex: "#00BB77",
				image: "/assets/images/bicycle/magnet/hero-seagreen.jpg",
			},
		],
		isPopular: true,
		tag: "Trending Model",
		desc: "With striking graphics and aerodynamic styling, the Novaine Magnet delivers effortless pedaling and magnetic charm for urban adventures.",
	},

	// ------------------------------------------------------------------------
	// 3. BOOMER (Kids: 14T, 16T, 20T)
	// ------------------------------------------------------------------------
	{
		id: "boomer",
		isInStock: true,
		name: "Boomer",
		category: "Kids Bikes",
		categorySlug: "kids",
		sizes: ["14T", "16T", "20T"],
		tyreType: "Tyre Tube",
		tyreSize: "300",
		brakes: "Caliper",
		speeds: "Single Speed",
		ageGroup: "4-7 Years",
		frame: "Ergonomic Low-Step Steel",
		image: "/assets/images/bicycle/boomer/hero-navy-blue.jpeg",
		colors: [
			{
				name: "Navy Blue",
				hex: "#000080",
				image: "/assets/images/bicycle/boomer/hero-navy-blue.jpeg",
			},
			{
				name: "Fire Red",
				hex: "#E31E24",
				image: "/assets/images/bicycle/boomer/hero-fire-red.jpeg",
			},
			{
				name: "Gold Black",
				hex: "#000000",
				image: "/assets/images/bicycle/boomer/hero-gold-black.jpeg",
			},
		],
		isPopular: true,
		tag: "Bestseller",
		desc: "The Novaine Boomer brings explosive fun and rugged durability with broad terrain-gripping tyres, cushioned saddle, and quick-adjust seatclamp.",
	},

	// ------------------------------------------------------------------------
	// 4. MAXX (Ranger: 24T, 26T)
	// ------------------------------------------------------------------------
	{
		id: "maxx",
		isInStock: true,
		name: "Maxx",
		category: "Ranger Bikes",
		categorySlug: "ranger",
		sizes: ["24T", "26T"],
		tyreType: "Tyre Tube",
		tyreSize: "240",
		brakes: "Caliper",
		speeds: "Single Speed",
		ageGroup: "9+ Years & Adults",
		frame: "Hydroformed Steel MTB Frame",
		image: "/assets/images/bicycle/maxx/hero-peacock-blue.jpg",
		colors: [
			{
				name: "Peacock Blue",
				hex: "#00a4b4",
				image: "/assets/images/bicycle/maxx/hero-peacock-blue.jpg",
			},
			{
				name: "Crimson Red",
				hex: "#B91C1C",
				image: "/assets/images/bicycle/maxx/hero-crimson-red.jpg",
			},
			{
				name: "Sea Green",
				hex: "#37F5FB",
				image: "/assets/images/bicycle/maxx/hero-seagreen.jpg",
			},
		],
		isPopular: true,
		tag: "Flagship Ranger",
		desc: 'The Novaine Maxx is an all-terrain powerhouse equipped with aggressive tread 2.4" tyres.',
	},

	// ------------------------------------------------------------------------
	// 5. ACTIVE ALPHA (Ranger: 24T, 26T)
	// ------------------------------------------------------------------------
	{
		id: "alpha",
		isInStock: true,
		name: "Active Alpha",
		category: "Ranger Bikes",
		categorySlug: "ranger",
		sizes: ["24T", "26T"],
		tyreType: "Tyre Tube",
		tyreSize: "240",
		brakes: "Caliper",
		speeds: "Single Speed",
		ageGroup: "10+ Years & Adults",
		frame: "Modern Progressive Hardtail",
		image: "/assets/images/bicycle/alpha/hero-neon-yellow.jpg",
		colors: [
			{
				name: "Neon Yellow / Black",
				hex: "#FACC15",
				image: "/assets/images/bicycle/alpha/hero-neon-yellow.jpg",
			},
			{
				name: "Electric Cyan",
				hex: "#06B6D4",
				image: "/assets/images/bicycle/alpha/hero-electric-cyan.jpg",
			},
		],
		isPopular: true,
		tag: "Popular Ranger",
		desc: "Unleash unstoppable momentum with Novaine Active Alpha — razor-sharp styling, internal cable routing look, and ultra-durable steel chassis manufactured at Ludhiana facility.",
	},
];
