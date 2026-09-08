"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Product, PRODUCTS, ProductVariant } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useEnquiry } from "@/context/EnquiryContext";
import {
	CheckCircle2,
	XCircle,
	Send,
	Wrench,
	ChevronRight,
	Sliders,
	CircleDot,
} from "lucide-react";

export default function ProductDetailPage({ product }: { product: Product }) {
	const params = useParams();
	const modelId = params?.id as string;
	const { openEnquiry } = useEnquiry();

	const [selectedSize, setSelectedSize] = useState<string>(
		product.sizes[0] || "14T",
	);
	const [selectedTyreType, setSelectedTyreType] = useState<string>("");
	const [selectedTyreSize, setSelectedTyreSize] = useState<string>("");
	const [selectedBrakeType, setSelectedBrakeType] = useState<string>("");
	const [selectedColor, setSelectedColor] = useState(
		product.colors?.[0] || {
			name: "Standard",
			hex: "#333",
			imgSide: product.imageSide,
			imgFront: product.imageFront,
		},
	);

	// Image loading & switching states
	const [isImageLoading, setIsImageLoading] = useState(true);
	const [isSwitching, setIsSwitching] = useState(false);
	const [activeAngle, setActiveAngle] = useState<"side" | "front">("side");

	const hasVariants = Boolean(
		product.variants && product.variants.length > 0,
	);

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

	// Color change handler
	const handleColorChange = (c: typeof selectedColor) => {
		if (c.name === selectedColor.name) return;
		setIsSwitching(true);
		setSelectedColor(c);
	};

	// Angle change handler
	const handleAngleChange = (angle: "side" | "front") => {
		if (angle === activeAngle) return;
		setIsSwitching(true);
		setActiveAngle(angle);
	};

	// Available Tyre Types for selected Wheel Size
	const availableTyreTypes = useMemo(() => {
		if (!hasVariants) return [];
		const types = new Set<string>();
		product.variants?.forEach((v) => {
			if (v.wheelSize === selectedSize && v.tyreType) {
				types.add(v.tyreType);
			}
		});
		return Array.from(types);
	}, [product, selectedSize, hasVariants]);

	// Auto-select valid Tyre Type when Wheel Size changes
	useEffect(() => {
		if (availableTyreTypes.length > 0) {
			if (!availableTyreTypes.includes(selectedTyreType)) {
				setSelectedTyreType(availableTyreTypes[0]);
			}
		} else {
			setSelectedTyreType("");
		}
	}, [availableTyreTypes, selectedTyreType]);

	// Available Tyre Sizes
	const availableTyreSizes = useMemo(() => {
		if (!hasVariants) return [];
		const sizes = new Set<string>();
		product.variants?.forEach((v) => {
			if (
				v.wheelSize === selectedSize &&
				(!selectedTyreType || v.tyreType === selectedTyreType) &&
				v.tyreSize
			) {
				sizes.add(v.tyreSize);
			}
		});
		return Array.from(sizes);
	}, [product, selectedSize, selectedTyreType, hasVariants]);

	// Auto-select valid Tyre Size
	useEffect(() => {
		if (availableTyreSizes.length > 0) {
			if (!availableTyreSizes.includes(selectedTyreSize)) {
				setSelectedTyreSize(availableTyreSizes[0]);
			}
		} else {
			setSelectedTyreSize("");
		}
	}, [availableTyreSizes, selectedTyreSize]);

	// Available Brake Types
	const availableBrakeTypes = useMemo(() => {
		if (!hasVariants) return [];
		const brakes = new Set<string>();
		product.variants?.forEach((v) => {
			if (
				v.wheelSize === selectedSize &&
				(!selectedTyreType || v.tyreType === selectedTyreType) &&
				(!selectedTyreSize || v.tyreSize === selectedTyreSize) &&
				v.brakeType
			) {
				brakes.add(v.brakeType);
			}
		});
		return Array.from(brakes);
	}, [
		product,
		selectedSize,
		selectedTyreType,
		selectedTyreSize,
		hasVariants,
	]);

	// Auto-select valid Brake Type
	useEffect(() => {
		if (availableBrakeTypes.length > 0) {
			if (!availableBrakeTypes.includes(selectedBrakeType)) {
				setSelectedBrakeType(availableBrakeTypes[0]);
			}
		} else {
			setSelectedBrakeType("");
		}
	}, [availableBrakeTypes, selectedBrakeType]);

	// Resolved Active Variant
	const currentVariant: ProductVariant | undefined = useMemo(() => {
		if (!hasVariants) return undefined;
		return product.variants?.find(
			(v) =>
				v.wheelSize === selectedSize &&
				(!selectedTyreType || v.tyreType === selectedTyreType) &&
				(!selectedTyreSize || v.tyreSize === selectedTyreSize) &&
				(!selectedBrakeType || v.brakeType === selectedBrakeType),
		);
	}, [
		product,
		selectedSize,
		selectedTyreType,
		selectedTyreSize,
		selectedBrakeType,
		hasVariants,
	]);

	const effectiveTyreType =
		selectedTyreType || product.tyreType || "Standard";
	const effectiveTyreSize = selectedTyreSize || product.tyreSize || "";
	const effectiveBrakes = selectedBrakeType || product.brakes;

	const isCurrentlyInStock = currentVariant
		? currentVariant.isInStock
		: (product.isInStock ?? true);

	// Dynamic Image Resolution
	const resolvedImage = useMemo(() => {
		if (activeAngle === "front") {
			return (
				currentVariant?.imageFront ||
				selectedColor?.imgFront ||
				product.imageFront
			);
		}
		return (
			currentVariant?.imageSide ||
			selectedColor?.imgSide ||
			product.imageSide
		);
	}, [currentVariant, selectedColor, product, activeAngle]);

	// Format pre-filled WhatsApp enquiry payload
	const fullConfigString = useMemo(() => {
		let config = `${product.name} (Size: ${selectedSize}`;
		if (effectiveTyreType) config += ` | Tyre: ${effectiveTyreType}`;
		if (effectiveTyreSize) config += ` ${effectiveTyreSize}`;
		if (effectiveBrakes) config += ` | Brakes: ${effectiveBrakes}`;
		if (selectedColor) config += ` | Color: ${selectedColor.name}`;
		config += `)`;
		return config;
	}, [
		product.name,
		selectedSize,
		effectiveTyreType,
		effectiveTyreSize,
		effectiveBrakes,
		selectedColor,
	]);

	const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

	return (
		<div className="bg-gray-50 min-h-screen">
			{/* Breadcrumb */}
			<div className="bg-white py-3 border-b border-gray-200 text-xs">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-gray-500">
					<Link
						href="/"
						className="hover:text-novaine-purple transition-colors"
					>
						Home
					</Link>
					<ChevronRight className="w-3.5 h-3.5" />
					<Link
						href="/bicycles"
						className="hover:text-novaine-purple transition-colors"
					>
						Bicycles
					</Link>
					<ChevronRight className="w-3.5 h-3.5" />
					<span className="text-gray-900 font-bold">
						{product.name}
					</span>
				</div>
			</div>

			{/* Main Product Layout */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
					{/* LEFT COLUMN: MULTI-ANGLE IMAGE GALLERY */}
					<div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm lg:sticky top-24">
						{/* Main Image View */}
						<div className="relative w-full h-72 sm:h-96 bg-gray-50/80 rounded-2xl overflow-hidden flex items-center justify-center p-4 mb-4">
							{/* Initial Skeleton Loader */}
							{isImageLoading && (
								<div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse flex items-center justify-center z-10">
									<div className="w-8 h-8 rounded-full border-2 border-gray-300 border-t-novaine-purple animate-spin" />
								</div>
							)}

							{/* Swatch / Angle Switching Overlay */}
							{isSwitching && (
								<div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center z-20 transition-opacity">
									<div className="w-8 h-8 rounded-full border-2 border-gray-300 border-t-novaine-purple animate-spin" />
								</div>
							)}

							<Image
								src={resolvedImage}
								alt={product.name}
								width={600}
								height={450}
								priority
								onLoad={() => {
									setIsImageLoading(false);
									setIsSwitching(false);
								}}
								className={`max-h-[92%] max-w-[92%] object-contain transition-all duration-300 drop-shadow-md ${
									isSwitching
										? "opacity-30 scale-98"
										: "opacity-100 scale-100"
								}`}
							/>
						</div>

						{/* Angle Thumbnails */}
						<div className="flex items-center gap-3">
							<button
								type="button"
								onClick={() => handleAngleChange("side")}
								className={`w-20 h-20 rounded-xl border-2 p-1.5 bg-gray-50 transition-all cursor-pointer overflow-hidden ${
									activeAngle === "side"
										? "border-novaine-purple shadow-sm ring-2 ring-novaine-purple/20"
										: "border-gray-200 hover:border-gray-400"
								}`}
							>
								<Image
									src={
										currentVariant?.imageSide ||
										selectedColor?.imgSide ||
										product.imageSide
									}
									alt="Side Angle"
									width={80}
									height={80}
									className="w-full h-full object-contain"
								/>
							</button>

							<button
								type="button"
								onClick={() => handleAngleChange("front")}
								className={`w-20 h-20 rounded-xl border-2 p-1.5 bg-gray-50 transition-all cursor-pointer overflow-hidden ${
									activeAngle === "front"
										? "border-novaine-purple shadow-sm ring-2 ring-novaine-purple/20"
										: "border-gray-200 hover:border-gray-400"
								}`}
							>
								<Image
									src={
										currentVariant?.imageFront ||
										selectedColor?.imgFront ||
										product.imageFront
									}
									alt="Front Angle"
									width={80}
									height={80}
									className="w-full h-full object-contain"
								/>
							</button>
						</div>
					</div>

					{/* RIGHT COLUMN: INFORMATION & CONFIGURATOR PANEL */}
					<div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-6">
						<div>
							<div className="flex items-center justify-between gap-3 flex-wrap">
								<span className="text-xs font-bold uppercase tracking-wider text-novaine-purple bg-novaine-purple-light px-3 py-1 rounded-full">
									{product.category}
								</span>

								{isCurrentlyInStock ? (
									<span className="inline-flex items-center gap-1.5 font-bold text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
										<CheckCircle2 className="w-3.5 h-3.5" />{" "}
										In Stock
									</span>
								) : (
									<span className="inline-flex items-center gap-1.5 font-bold text-[11px] text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
										<XCircle className="w-3.5 h-3.5" /> Out
										of Stock
									</span>
								)}
							</div>

							<h1 className="text-2xl sm:text-4xl font-extrabold text-gray-950 mt-3">
								{product.name}
							</h1>
							<p className="text-xs sm:text-sm font-semibold text-gray-500 mt-1">
								{product.tag} • {product.ageGroup}
							</p>
						</div>

						<p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
							{product.desc}
						</p>

						<div className="bg-gray-50/70 border border-gray-200/80 rounded-2xl p-5 space-y-4 text-xs">
							<div className="flex items-center gap-2 font-bold text-gray-900 pb-2 border-b border-gray-200/60">
								<Sliders className="w-4 h-4 text-novaine-purple" />
								<span>Bicycle Configuration & Options</span>
							</div>

							{product.sizes && product.sizes.length > 0 && (
								<div>
									<div className="font-semibold text-gray-700 mb-1.5 flex items-center justify-between">
										<span>Wheel Size:</span>
										<span className="font-bold text-novaine-purple">
											{selectedSize}
										</span>
									</div>
									<div className="flex flex-wrap gap-2">
										{product.sizes.map((size) => (
											<button
												key={size}
												type="button"
												onClick={() => {
													setIsSwitching(true);
													setSelectedSize(size);
												}}
												className={`px-3.5 py-1.5 rounded-lg font-bold border transition-all cursor-pointer ${
													selectedSize === size
														? "bg-novaine-purple text-white border-novaine-purple shadow-sm ring-2 ring-novaine-purple/20"
														: "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
												}`}
											>
												{size}
											</button>
										))}
									</div>
								</div>
							)}

							{availableTyreTypes.length > 1 && (
								<div>
									<div className="font-semibold text-gray-700 mb-1.5 flex items-center justify-between">
										<span>Tyre Type:</span>
										<span className="font-bold text-novaine-purple">
											{selectedTyreType}
										</span>
									</div>
									<div className="flex flex-wrap gap-2">
										{availableTyreTypes.map((tType) => (
											<button
												key={tType}
												type="button"
												onClick={() => {
													setIsSwitching(true);
													setSelectedTyreType(tType);
												}}
												className={`px-3.5 py-1.5 rounded-lg font-bold border transition-all cursor-pointer ${
													selectedTyreType === tType
														? "bg-gray-900 text-white border-gray-900 shadow-sm"
														: "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
												}`}
											>
												{tType}
											</button>
										))}
									</div>
								</div>
							)}

							{availableTyreSizes.length > 1 && (
								<div>
									<div className="font-semibold text-gray-700 mb-1.5 flex items-center justify-between">
										<span>Tyre Width / Profile:</span>
										<span className="font-bold text-novaine-purple">
											{selectedTyreSize}
										</span>
									</div>
									<div className="flex flex-wrap gap-2">
										{availableTyreSizes.map((tSize) => (
											<button
												key={tSize}
												type="button"
												onClick={() => {
													setIsSwitching(true);
													setSelectedTyreSize(tSize);
												}}
												className={`px-3.5 py-1.5 rounded-lg font-bold border transition-all cursor-pointer ${
													selectedTyreSize === tSize
														? "bg-gray-900 text-white border-gray-900 shadow-sm"
														: "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
												}`}
											>
												{tSize}
											</button>
										))}
									</div>
								</div>
							)}

							{availableBrakeTypes.length > 1 && (
								<div>
									<div className="font-semibold text-gray-700 mb-1.5 flex items-center justify-between">
										<span>Braking System:</span>
										<span className="font-bold text-novaine-purple">
											{selectedBrakeType}
										</span>
									</div>
									<div className="flex flex-wrap gap-2">
										{availableBrakeTypes.map((bType) => (
											<button
												key={bType}
												type="button"
												onClick={() => {
													setIsSwitching(true);
													setSelectedBrakeType(bType);
												}}
												className={`px-3.5 py-1.5 rounded-lg font-bold border transition-all cursor-pointer ${
													selectedBrakeType === bType
														? "bg-novaine-yellow text-gray-950 border-novaine-yellow shadow-sm font-black"
														: "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
												}`}
											>
												{bType}
											</button>
										))}
									</div>
								</div>
							)}

							{/* 3. Factory Standard Highlights (For Fixed-Spec Models) */}
							{(!hasVariants ||
								(availableTyreTypes.length <= 1 &&
									availableBrakeTypes.length <= 1)) && (
								<div className="pt-2 border-t border-gray-200/60">
									<span className="font-semibold text-[11px] text-gray-500 tracking-wider block mb-2">
										Standard Factory Equipment:
									</span>
									<div className="flex flex-wrap gap-2">
										{effectiveTyreType && (
											<span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1.5 rounded-lg font-bold text-gray-800 shadow-2xs">
												<CircleDot className="w-3.5 h-3.5 text-novaine-purple" />
												{effectiveTyreType}{" "}
												{effectiveTyreSize
													? `(${effectiveTyreSize})`
													: ""}
											</span>
										)}
										{effectiveBrakes && (
											<span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1.5 rounded-lg font-bold text-gray-800 shadow-2xs">
												<CircleDot className="w-3.5 h-3.5 text-novaine-yellow" />
												{effectiveBrakes} Brakes
											</span>
										)}
									</div>
								</div>
							)}

							{product.colors && product.colors.length > 0 && (
								<div className="pt-2 border-t border-gray-200/60">
									<div className="font-semibold text-gray-700 mb-2 flex items-center justify-between">
										<span>Selected Color:</span>
										<span className="font-bold text-novaine-purple">
											{selectedColor.name}
										</span>
									</div>
									<div className="flex gap-2.5">
										{product.colors.map((c) => (
											<button
												key={c.name}
												type="button"
												title={c.name}
												onClick={() =>
													handleColorChange(c)
												}
												style={{
													backgroundColor: c.hex,
												}}
												className={`w-7 h-7 rounded-full border-2 border-white shadow transition-transform cursor-pointer ${
													selectedColor.name ===
													c.name
														? "ring-2 ring-novaine-purple scale-110"
														: "hover:scale-105"
												}`}
											/>
										))}
									</div>
								</div>
							)}
						</div>

						<div>
							<button
								type="button"
								onClick={() => openEnquiry(fullConfigString)}
								className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-2xl shadow-md transition-all cursor-pointer"
							>
								<Send className="w-4 h-4" /> Enquire for this
								Model & Config
							</button>
						</div>

						<div className="pt-4 border-t border-gray-100">
							<h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
								<Wrench className="w-4 h-4 text-novaine-purple" />{" "}
								Technical Specifications
							</h3>

							<div className="border border-gray-200 rounded-2xl overflow-hidden text-xs bg-white">
								<table className="w-full text-left">
									<tbody className="divide-y divide-gray-100">
										<tr>
											<td className="p-3 font-semibold text-gray-700">
												Model Name
											</td>
											<td className="p-3 text-gray-900">
												{product.name}
											</td>
										</tr>
										<tr className="bg-gray-50/50">
											<td className="p-3 font-semibold text-gray-700">
												Selected Wheel Size
											</td>
											<td className="p-3 text-gray-900">
												{selectedSize}
											</td>
										</tr>
										<tr>
											<td className="p-3 font-semibold text-gray-700">
												Tyre Specification
											</td>
											<td className="p-3 text-gray-900">
												{effectiveTyreType}{" "}
												{effectiveTyreSize
													? `(Size: ${effectiveTyreSize})`
													: ""}
											</td>
										</tr>
										<tr className="bg-gray-50/50">
											<td className="p-3 font-semibold text-gray-700">
												Braking Mechanism
											</td>
											<td className="p-3 text-gray-900">
												{effectiveBrakes}
											</td>
										</tr>
										<tr>
											<td className="p-3 font-semibold text-gray-700">
												Gearing
											</td>
											<td className="p-3 text-gray-900">
												{product.speeds}
											</td>
										</tr>
										<tr className="bg-gray-50/50">
											<td className="p-3 font-semibold text-gray-700">
												Frame Architecture
											</td>
											<td className="p-3 text-gray-900">
												{product.frame}
											</td>
										</tr>
										<tr>
											<td className="p-3 font-semibold text-gray-700">
												Warranty
											</td>
											<td className="p-3 text-gray-900">
												2 Year Frame Structural Warranty
											</td>
										</tr>
										<tr>
											<td className="p-3 font-semibold text-gray-700">
												Origin
											</td>
											<td className="p-3 text-gray-900">
												Ludhiana, Punjab
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>

				{/* Similar Models Grid */}
				<div className="mt-16 pt-12 border-t border-gray-200">
					<h3 className="text-xl sm:text-2xl font-black text-gray-950 mb-6">
						Similar{" "}
						<span className="text-novaine-purple">Bicycles</span>{" "}
						You May Like
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{related.map((p) => (
							<ProductCard key={p.id} product={p} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
