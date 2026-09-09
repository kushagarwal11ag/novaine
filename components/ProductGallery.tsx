"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { Eye } from "lucide-react";

interface GalleryViewItem {
	id: string;
	title: string;
	url: string;
	isColorHero: boolean;
	colorName?: string;
	category?: "hero" | "detail" | "spec";
	variantMatch?: {
		brakeType?: "Caliper" | "V-Brake" | "Dual Disc";
		tyreSize?: string;
	};
}

interface ProductGalleryProps {
	product: Product;
	selectedColorName: string;
	selectedBrakeType?: string;
	selectedTyreSize?: string;
	onSelectColor?: (colorName: string) => void;
}

export default function ProductGallery({
	product,
	selectedColorName,
	selectedBrakeType,
	selectedTyreSize,
	onSelectColor,
}: ProductGalleryProps) {
	// Auto-merge: colors + details
	const galleryItems: GalleryViewItem[] = useMemo(() => {
		const items: GalleryViewItem[] = [];

		// Color hero views (using clean c.image)
		product.colors?.forEach((c) => {
			items.push({
				id: `color-${c.name}`,
				title: `${c.name} View`,
				url: c.image || product.image,
				isColorHero: true,
				colorName: c.name,
				category: "hero",
			});
		});

		// Extra non-color closeups from product.details
		product.details?.forEach((d) => {
			items.push({
				id: d.id,
				title: d.title,
				url: d.url,
				isColorHero: false,
				category: d.category,
				variantMatch: d.variantMatch,
			});
		});

		return items;
	}, [product]);

	const [activeItem, setActiveItem] = useState<GalleryViewItem>(
		galleryItems[0] || {
			id: "default",
			title: product.name,
			url: product.image,
			isColorHero: true,
		},
	);
	const [isSwitching, setIsSwitching] = useState(false);

	// Sync when color swatch changes
	useEffect(() => {
		const matchingColorHero = galleryItems.find(
			(item) => item.isColorHero && item.colorName === selectedColorName,
		);
		if (matchingColorHero && matchingColorHero.id !== activeItem.id) {
			setIsSwitching(true);
			setActiveItem(matchingColorHero);
		}
	}, [selectedColorName, galleryItems]);

	// Sync when spec variant changes (e.g. Dual Disc)
	useEffect(() => {
		if (selectedBrakeType) {
			const matchingSpec = galleryItems.find(
				(item) => item.variantMatch?.brakeType === selectedBrakeType,
			);
			if (matchingSpec && matchingSpec.id !== activeItem.id) {
				setIsSwitching(true);
				setActiveItem(matchingSpec);
			}
		}
	}, [selectedBrakeType, galleryItems]);

	// Preload thumbnails
	useEffect(() => {
		galleryItems.forEach((item) => {
			if (item.url && typeof window !== "undefined") {
				const img = new window.Image();
				img.src = item.url;
			}
		});
	}, [galleryItems]);

	// Safety timeout
	useEffect(() => {
		if (isSwitching) {
			const t = setTimeout(() => setIsSwitching(false), 800);
			return () => clearTimeout(t);
		}
	}, [isSwitching]);

	const handleSelect = (item: GalleryViewItem) => {
		if (item.id === activeItem.id) return;
		setIsSwitching(true);
		setActiveItem(item);

		if (item.isColorHero && item.colorName && onSelectColor) {
			onSelectColor(item.colorName);
		}
	};

	return (
		<div className="bg-white rounded-3xl border border-gray-200 p-4 sm:p-6 shadow-sm lg:sticky top-24 space-y-3 sm:space-y-4">
			{/* Main Image Viewport */}
			<div className="relative w-full h-60 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-b from-gray-50/90 to-gray-100/40 rounded-2xl overflow-hidden flex items-center justify-center p-3 sm:p-4">
				<div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-gray-200/80 shadow-xs">
					<Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-novaine-purple" />
					<span className="text-[10px] sm:text-[11px] font-bold text-gray-800">
						{activeItem.title}
					</span>
				</div>

				{isSwitching && (
					<div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center z-30 transition-opacity">
						<div className="w-8 h-8 rounded-full border-2 border-gray-300 border-t-novaine-purple animate-spin" />
					</div>
				)}

				<Image
					key={activeItem.url}
					src={activeItem.url}
					alt={`${product.name} - ${activeItem.title}`}
					width={600}
					height={450}
					priority
					onLoad={() => setIsSwitching(false)}
					onError={() => setIsSwitching(false)}
					className={`max-h-[92%] max-w-[92%] object-contain transition-all duration-300 drop-shadow-md ${
						isSwitching
							? "opacity-30 scale-98"
							: "opacity-100 scale-100"
					}`}
				/>
			</div>

			{/* Thumbnails Filmstrip */}
			<div>
				<div className="flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 sm:mb-2">
					<span>Angles & Details ({galleryItems.length})</span>
					<span className="text-novaine-purple font-semibold">
						Click to inspect
					</span>
				</div>

				<div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1.5 pt-0.5 no-scrollbar touch-pan-x">
					{galleryItems.map((item) => {
						const isActive = item.id === activeItem.id;
						return (
							<button
								key={item.id}
								type="button"
								onClick={() => handleSelect(item)}
								className={`group relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl border-2 p-1 bg-gray-50 shrink-0 transition-all cursor-pointer overflow-hidden ${
									isActive
										? "border-novaine-purple ring-2 ring-novaine-purple/20 shadow-sm scale-105"
										: "border-gray-200 hover:border-gray-400 opacity-80 hover:opacity-100"
								}`}
								title={item.title}
							>
								<Image
									src={item.url}
									alt={item.title}
									width={80}
									height={80}
									className="w-full h-full object-contain"
								/>

								{item.category === "spec" && (
									<span className="absolute bottom-0.5 inset-x-0.5 bg-gray-950/85 text-[7px] sm:text-[8px] font-extrabold text-novaine-yellow text-center py-0.5 rounded uppercase">
										Spec
									</span>
								)}
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
}
