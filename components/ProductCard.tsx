"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Product, ProductColor } from "@/data/products";
import { ArrowUpRight } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
	const router = useRouter();

	// Safe fallback for selectedColor using the clean .image property
	const [selectedColor, setSelectedColor] = useState<ProductColor>(
		product.colors?.[0] || {
			name: "Standard",
			hex: "#333",
			image: product.image,
		},
	);

	const [isLoaded, setIsLoaded] = useState(false);
	const [isSwitching, setIsSwitching] = useState(false);

	// Preload image on swatch hover for instant response
	const preloadSwatch = (imgUrl: string) => {
		if (typeof window !== "undefined" && imgUrl) {
			const img = new window.Image();
			img.src = imgUrl;
		}
	};

	// Switch color without navigating away from the card
	const handleColorChange = (e: React.MouseEvent, c: ProductColor) => {
		e.stopPropagation();
		if (c.name === selectedColor.name) return;
		setIsSwitching(true);
		setSelectedColor(c);
	};

	return (
		<div
			onClick={() => router.push(`/bicycles/${product.id}`)}
			className="product-card group relative bg-white rounded-3xl border border-gray-200/80 hover:border-novaine-purple/50 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden cursor-pointer select-none flex flex-col justify-between"
		>
			{/* ======================================================== */}
			{/* HERO IMAGE STAGE (WITH SMOOTH HOVER ZOOM)                 */}
			{/* ======================================================== */}
			<div className="relative w-full h-64 sm:h-72 bg-gradient-to-b from-gray-100/70 via-gray-50 to-gray-100/50 flex items-center justify-center overflow-hidden">
				{/* Floating Category & Wheel Size Badges */}
				<div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-20 pointer-events-none">
					<span className="text-[10px] font-extrabold uppercase tracking-wider text-novaine-purple bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-novaine-purple/20 shadow-xs">
						{product.category}
					</span>

					<span className="text-[11px] font-bold text-gray-800 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-gray-200/80 shadow-xs">
						{product.sizes.join(" • ")}
					</span>
				</div>

				{/* Loading Skeleton */}
				{!isLoaded && (
					<div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse flex items-center justify-center z-10">
						<div className="w-7 h-7 rounded-full border-2 border-gray-300 border-t-novaine-purple animate-spin" />
					</div>
				)}

				{/* Color Switching Overlay */}
				{isSwitching && (
					<div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] flex items-center justify-center z-10 transition-opacity">
						<div className="w-7 h-7 rounded-full border-2 border-gray-300 border-t-novaine-purple animate-spin" />
					</div>
				)}

				{/* 
				  Single Bicycle Image:
				  Zooms smoothly (scale-105) and gains drop-shadow on card hover
				*/}
				<Image
					key={selectedColor.image}
					src={selectedColor.image}
					alt={`${product.name} ${selectedColor.name}`}
					width={500}
					height={380}
					onLoad={() => {
						setIsLoaded(true);
						setIsSwitching(false);
					}}
					onError={() => {
						setIsLoaded(true);
						setIsSwitching(false);
					}}
					className={`w-[94%] h-[94%] object-contain drop-shadow-md group-hover:drop-shadow-2xl group-hover:scale-105 transition-all duration-500 z-1 ${
						isSwitching ? "opacity-30 scale-95" : "opacity-100"
					}`}
				/>

				{/* Subtle Ambient Glow */}
				<div className="absolute w-44 h-44 rounded-full bg-novaine-purple/5 blur-3xl pointer-events-none" />
			</div>

			{/* ======================================================== */}
			{/* TITLE, SPECS & COLOR SWATCHES BAR                        */}
			{/* ======================================================== */}
			<div className="p-4 bg-white border-t border-gray-100 space-y-3">
				{/* Title & Explore Arrow */}
				<div className="flex items-center justify-between gap-3">
					<div>
						<h3 className="text-lg sm:text-xl font-black text-gray-950 group-hover:text-novaine-purple transition-colors tracking-tight leading-tight">
							{product.name}
						</h3>
						<p className="text-xs font-semibold text-gray-500 mt-0.5">
							{product.speeds} • {product.brakes}
						</p>
					</div>

					<div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-novaine-purple text-gray-700 group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110">
						<ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					</div>
				</div>

				{/* Badges + Interactive Swatches */}
				<div className="pt-2 border-t border-gray-100/80 flex items-center justify-between gap-2 flex-wrap">
					<div className="flex items-center gap-1.5">
						<span className="text-[10px] font-bold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md">
							{product.ageGroup}
						</span>
						{product.tyreType && (
							<span className="text-[10px] font-bold bg-novaine-purple-light/50 text-novaine-purple px-2 py-0.5 rounded-md">
								{product.tyreType}
							</span>
						)}
					</div>

					{/* Swatches (Click to swap color in-place) */}
					<div className="flex items-center gap-1.5">
						{product.colors?.map((c) => (
							<button
								key={c.name}
								type="button"
								title={c.name}
								onMouseEnter={() => preloadSwatch(c.image)}
								onClick={(e) => handleColorChange(e, c)}
								style={{ backgroundColor: c.hex }}
								className={`w-4 h-4 rounded-full border-2 border-white shadow-xs transition-all cursor-pointer ${
									selectedColor.name === c.name
										? "ring-2 ring-novaine-purple scale-125 shadow-sm"
										: "hover:scale-110 opacity-80 hover:opacity-100"
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
