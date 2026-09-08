import { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://novaine.vercel.app";

	// Static core routes
	const staticRoutes: MetadataRoute.Sitemap = [
		"",
		"/bicycles",
		"/about",
		"/contact",
		"/faq",
		"/warranty",
		"/policy",
		"/disclaimer",
	].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: "weekly",
		priority: route === "" ? 1.0 : 0.8,
	}));

	// Dynamic product routes (/bicycles/kombat, /bicycles/magnet, etc.)
	const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
		url: `${baseUrl}/bicycles/${product.id}`,
		lastModified: new Date(),
		changeFrequency: "weekly",
		priority: 0.9,
	}));

	return [...staticRoutes, ...productRoutes];
}
