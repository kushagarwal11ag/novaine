export interface ProductColor {
	name: string;
	hex: string;
	imgSide: string;
	imgFront: string;
}

export interface ProductVariant {
	wheelSize: string; // 14T, 16T
	tyreType?: "Tyre Tube" | "Tubeless";
	tyreSize?: "240" | "260" | "280" | "300" | "400";
	brakeType?: "Caliper" | "V-Brake" | "Dual Disc";
	color?: string; // Optional variant-specific color
	imageSide?: string; // Optional variant-specific side photo
	imageFront?: string; // Optional variant-specific front photo
	isInStock: boolean; // Variant-specific stock state
}

export interface Product {
	id: string;
	isInStock?: boolean;
	name: string;
	category: string;
	categorySlug: "kids" | "ranger";
	sizes: string[]; //14T, 16T
	tyreType?: "Tyre Tube" | "Tubeless";
	tyreSize?: "240" | "260" | "280" | "300" | "400";
	brakes: "Caliper" | "V-Brake" | "Dual Disc";
	speeds: string;
	ageGroup: string;
	frame: string;
	imageSide: string;
	imageFront: string;
	colors: { name: string; hex: string; imgSide: string; imgFront: string }[];
	isPopular: boolean;
	tag: string;
	desc: string;
	variants?: ProductVariant[];
}

export const PRODUCTS: Product[] = [
	// Kids Models (14T, 16T, 20T)
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
		imageSide: "/assets/images/bicycle/kombat-sgrn.jpg",
		imageFront: "/assets/images/bicycle/kombat-sgrn.jpg",
		isPopular: true,
		tag: "Popular Kids Choice",
		desc: "Novaine Kombat is engineered for adventurous kids, offering rugged tyre tube (2.40 & 3.00 Super-Fat) and puncture-resistant tubeless options (2.80) with versatile caliper or dual mechanical disc braking",
		colors: [
			{
				name: "Red",
				hex: "#E31E24",
				imgSide: "/assets/images/bicycle/kombat-red.jpg",
				imgFront: "/assets/images/bicycle/kombat-red.jpg",
			},
			{
				name: "Green",
				hex: "#24902B",
				imgSide: "/assets/images/bicycle/kombat-grn.jpg",
				imgFront: "/assets/images/bicycle/kombat-grn.jpg",
			},
			{
				name: "Sea Green",
				hex: "#37F5FB",
				imgSide: "/assets/images/bicycle/kombat-sgrn.jpg",
				imgFront: "/assets/images/bicycle/kombat-sgrn.jpg",
			},
		],
		variants: [
			// --- Tyre Tube 240 Sizes (14*240, 16*240, 20*240) ---
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
				isInStock: false, // Out of stock example
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
			{
				wheelSize: "20T",
				tyreType: "Tyre Tube",
				tyreSize: "300",
				brakeType: "V-Brake",
				isInStock: true,
				imageSide: "/assets/images/bicycle/kombat-blu-300.jpg", // Variant-specific image
			},
			{
				wheelSize: "20T",
				tyreType: "Tyre Tube",
				tyreSize: "300",
				brakeType: "Dual Disc",
				isInStock: true,
				imageSide: "/assets/images/bicycle/kombat-blu-300.jpg",
			},
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
	},
	{
		id: "magnet",
		isInStock: false,
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
		imageSide: "/assets/images/bicycle/magnet-blu.jpg",
		imageFront: "/assets/images/bicycle/magnet-blu.jpg",
		colors: [
			{
				name: "Floro Green",
				hex: "#0AFF02",
				imgSide: "/assets/images/bicycle/magnet-blu.jpg",
				imgFront: "/assets/images/bicycle/magnet-blu.jpg",
			},
			{
				name: "Red",
				hex: "#E31E24",
				imgSide: "/assets/images/bicycle/magnet-red.jpg",
				imgFront: "/assets/images/bicycle/magnet-red.jpg",
			},
			{
				name: "Sea Green",
				hex: "#00BB77",
				imgSide: "/assets/images/bicycle/magnet-sgrn.jpg",
				imgFront: "/assets/images/bicycle/magnet-sgrn.jpg",
			},
		],
		isPopular: true,
		tag: "Trending Model",
		desc: "With striking graphics and aerodynamic styling, the Novaine Magnet delivers effortless pedaling and magnetic charm for urban adventures.",
	},
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
		imageSide: "/assets/images/bicycle/boomer-blu.jpeg",
		imageFront: "/assets/images/bicycle/boomer-blu.jpeg",
		colors: [
			{
				name: "Fire Red",
				hex: "#E31E24",
				imgSide: "/assets/images/bicycle/boomer-red.jpeg",
				imgFront: "/assets/images/bicycle/boomer-red.jpeg",
			},
			{
				name: "Navy Blue",
				hex: "#000080",
				imgSide: "/assets/images/bicycle/boomer-blu.jpeg",
				imgFront: "/assets/images/bicycle/boomer-blu.jpeg",
			},
			{
				name: "Gold Black",
				hex: "#000000",
				imgSide: "/assets/images/bicycle/boomer-blk.jpeg",
				imgFront: "/assets/images/bicycle/boomer-blk.jpeg",
			},
		],
		isPopular: true,
		tag: "Bestseller",
		desc: "The Novaine Boomer brings explosive fun and rugged durability with broad terrain-gripping tyres, cushioned saddle, and quick-adjust seatclamp.",
	},

	// Ranger / Adult Models (24T, 26T)
	{
		id: "hunt",
		isInStock: true,
		name: "Hunt",
		category: "Ranger Bikes",
		categorySlug: "ranger",
		sizes: ["24T", "26T"],
		tyreType: "Tyre Tube",
		tyreSize: "240",
		brakes: "Caliper",
		speeds: "Single Speed",
		ageGroup: "9+ Years & Adults",
		frame: "Hydroformed Steel MTB Frame",
		imageSide: "/assets/images/hunt_side.jpg",
		imageFront: "/assets/images/hunt_front.jpg",
		colors: [
			{
				name: "Gunmetal / Orange",
				hex: "#374151",
				imgSide: "/assets/images/hunt_side.jpg",
				imgFront: "/assets/images/hunt_front.jpg",
			},
			{
				name: "Crimson Red",
				hex: "#B91C1C",
				imgSide: "/assets/images/hunt_side.jpg",
				imgFront: "/assets/images/hunt_front.jpg",
			},
			{
				name: "Stealth Black",
				hex: "#111827",
				imgSide: "/assets/images/hunt_side.jpg",
				imgFront: "/assets/images/hunt_front.jpg",
			},
		],
		isPopular: true,
		tag: "Flagship Ranger",
		desc: 'The Novaine Hunt is an all-terrain powerhouse equipped with Shimano-grade 21-speed gears, front suspension fork, aggressive tread 2.4" tyres, and dual disc brakes.',
	},
	{
		id: "hunt-pro",
		isInStock: true,
		name: "Hunt Pro",
		category: "Ranger Bikes",
		categorySlug: "ranger",
		sizes: ["24T", "26T"],
		tyreType: "Tyre Tube",
		tyreSize: "240",
		brakes: "Dual Disc",
		speeds: "21-Speed Multi-Gear",
		ageGroup: "12+ Years & Adults",
		frame: "Ultra-Tough Aero-Steel Frame",
		imageSide: "/assets/images/hunt_side.jpg",
		imageFront: "/assets/images/hunt_front.jpg",
		colors: [
			{
				name: "Matte Military Green",
				hex: "#4B5320",
				imgSide: "/assets/images/hunt_side.jpg",
				imgFront: "/assets/images/hunt_front.jpg",
			},
			{
				name: "Dark Titanium",
				hex: "#4A5568",
				imgSide: "/assets/images/hunt_side.jpg",
				imgFront: "/assets/images/hunt_front.jpg",
			},
		],
		isPopular: true,
		tag: "Pro Performance",
		desc: "Novaine Hunt Pro takes trail riding to the next level with precision indexed gear shifting, suspension lockout for climbing, double-wall alloy rims, and wide riser handlebar.",
	},
	{
		id: "cyclone",
		isInStock: true,
		name: "Cyclone",
		category: "Ranger Bikes",
		categorySlug: "ranger",
		sizes: ["24T", "26T"],
		tyreType: "Tyre Tube",
		tyreSize: "240",
		brakes: "Caliper",
		speeds: "Single Speed",
		ageGroup: "10+ Years & Adults",
		frame: "Modern Progressive Hardtail",
		imageSide: "/assets/images/hunt_side.jpg",
		imageFront: "/assets/images/hunt_front.jpg",
		colors: [
			{
				name: "Neon Yellow / Black",
				hex: "#FACC15",
				imgSide: "/assets/images/hunt_side.jpg",
				imgFront: "/assets/images/hunt_front.jpg",
			},
			{
				name: "Electric Cyan",
				hex: "#06B6D4",
				imgSide: "/assets/images/hunt_side.jpg",
				imgFront: "/assets/images/hunt_front.jpg",
			},
		],
		isPopular: true,
		tag: "Popular Ranger",
		desc: "Unleash unstoppable momentum with Novaine Cyclone — razor-sharp styling, internal cable routing look, and ultra-durable steel chassis manufactured at Ludhiana facility.",
	},
];
