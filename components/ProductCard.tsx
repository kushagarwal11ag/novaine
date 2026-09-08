"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { ArrowRight } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
	// Safe fallback for selectedColor
	const [selectedColor, setSelectedColor] = useState(
		product.colors?.[0] || {
			name: "Standard",
			hex: "#333",
			imgSide: product.imageSide,
			imgFront: product.imageFront,
		},
	);

	const [isLoaded, setIsLoaded] = useState(false);
	const [isSwitching, setIsSwitching] = useState(false);

	// 1. Preload all color images in the background on mount
	useEffect(() => {
		if (!product.colors || product.colors.length <= 1) return;

		product.colors.forEach((c) => {
			if (c.imgSide) {
				const imgSide = new window.Image();
				imgSide.src = c.imgSide;
			}
			if (c.imgFront) {
				const imgFront = new window.Image();
				imgFront.src = c.imgFront;
			}
		});
	}, [product.colors]);

	// 2. Handle swatch click with instant loading feedback
	const handleColorChange = (c: typeof selectedColor) => {
		if (c.name === selectedColor.name) return;
		setIsSwitching(true); // Triggers loading overlay
		setSelectedColor(c);
	};

	return (
		<div className="product-card group bg-white rounded-2xl border border-gray-100 hover:border-novaine-purple/40 shadow-card hover:shadow-card-hover transition-all duration-300 p-5 flex flex-col justify-between">
			<div>
				<div className="flex items-center justify-between gap-2 mb-3">
					<span className="text-[11px] font-bold uppercase tracking-wider text-novaine-purple bg-novaine-purple-light px-2.5 py-0.5 rounded-full">
						{product.category}
					</span>
					<span className="text-xs font-bold text-gray-800 bg-gray-100 px-2.5 py-0.5 rounded-full">
						{product.sizes.join(" | ")}
					</span>
				</div>

				<h3 className="text-lg font-extrabold text-gray-950 group-hover:text-novaine-purple transition-colors">
					<Link href={"/bicycles/" + product.id}>{product.name}</Link>
				</h3>

				<div className="relative w-full h-48 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-3 mb-4">
					{/* First Load Skeleton */}
					{!isLoaded && (
						<div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse flex items-center justify-center z-0">
							<div className="w-6 h-6 rounded-full border-2 border-gray-300 border-t-novaine-purple animate-spin" />
						</div>
					)}

					{isSwitching && (
						<div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center z-10 transition-opacity">
							<div className="w-6 h-6 rounded-full border-2 border-gray-300 border-t-novaine-purple animate-spin" />
						</div>
					)}

					<Image
						src={selectedColor.imgSide}
						alt={product.name + " Side"}
						width={400}
						height={300}
						onLoad={() => {
							setIsLoaded(true);
							setIsSwitching(false);
						}}
						className={`img-side absolute max-h-[85%] max-w-[85%] object-contain transition-all duration-500 z-1 ${
							isSwitching
								? "opacity-30 scale-95"
								: "opacity-100 scale-100"
						}`}
					/>

					{/* Front Image (Hover View) */}
					<Image
						src={selectedColor.imgFront}
						alt={product.name + " Front"}
						width={400}
						height={300}
						className="img-front absolute max-h-[85%] max-w-[85%] object-contain opacity-0 scale-95 transition-all duration-500 z-2"
					/>
				</div>

				<div className="flex items-center gap-2 mb-3">
					<span className="text-xs font-medium text-gray-500">
						Colours:
					</span>
					<div className="flex items-center gap-1.5">
						{product.colors?.map((c) => (
							<button
								key={c.name}
								title={c.name}
								onClick={() => handleColorChange(c)}
								style={{ backgroundColor: c.hex }}
								className={
									"w-5 h-5 rounded-full border-2 border-opacity-10 border-black shadow-sm transition-transform cursor-pointer " +
									(selectedColor.name === c.name
										? "ring-2 ring-novaine-purple scale-110"
										: "hover:scale-105")
								}
							/>
						))}
					</div>
				</div>

				<div className="flex flex-wrap gap-1.5 mb-5"></div>
			</div>

			<div className="pt-2 border-t border-gray-50">
				<Link
					href={"/bicycles/" + product.id}
					className="w-full flex-1 inline-flex items-center justify-center gap-1 hover:bg-novaine-purple bg-gray-100 hover:text-white text-gray-800 text-xs font-bold py-2.5 rounded-lg transition-all"
				>
					View Details <ArrowRight className="w-3.5 h-3.5" />
				</Link>
			</div>
		</div>
	);
}
