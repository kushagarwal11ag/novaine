import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import ProductDetailClient from "@/app/bicycles/[id]/ProductDetailClient";

interface Props {
	params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const product = PRODUCTS.find((p) => p.id === params.id);
	if (!product) return { title: "Bicycle Not Found" };

	return {
		title: `${product.name} (${product.sizes.join(", ")})`,
		description: `${product.name} ${product.category} by Novaine Bikes. Built with ${product.frame} in Ludhiana, Punjab.`,
		openGraph: {
			title: `${product.name} | Novaine Bikes`,
			description: product.desc,
			images: [{ url: product.image }],
		},
	};
}

export default function Page({ params }: Props) {
	const product = PRODUCTS.find((p) => p.id === params.id);
	if (!product) notFound();
	return <ProductDetailClient product={product} />;
}
