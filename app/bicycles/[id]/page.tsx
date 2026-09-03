"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useEnquiry } from "@/context/EnquiryContext";
import {
	CheckCircle2,
	Send,
	ShieldCheck,
	Wrench,
	ChevronRight,
} from "lucide-react";

export default function ProductDetailPage() {
	const params = useParams();
	const modelId = params?.id as string;
	const product = PRODUCTS.find((p) => p.id === modelId) || PRODUCTS[0];
	const { openEnquiry } = useEnquiry();

	const [selectedColor, setSelectedColor] = useState(product.colors[0]);
	const [selectedImage, setSelectedImage] = useState(product.imageSide);
	const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

	const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

	return (
		<div>
			{/* Breadcrumb */}
			<div className="bg-gray-100 py-3 border-b border-gray-200 text-xs">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-gray-500">
					<Link href="/" className="hover:text-novaine-purple">
						Home
					</Link>
					<ChevronRight className="w-3.5 h-3.5" />
					<Link
						href="/bicycles"
						className="hover:text-novaine-purple"
					>
						Bicycles
					</Link>
					<ChevronRight className="w-3.5 h-3.5" />
					<span className="text-gray-900 font-bold">
						{product.name}
					</span>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
					{/* Gallery Column */}
					<div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm lg:sticky top-24">
						<div className="relative w-full h-80 sm:h-96 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-4 mb-4">
							<img
								src={selectedImage}
								alt={product.name}
								className="max-h-[90%] max-w-[90%] object-contain transition-all duration-300"
							/>
						</div>

						<div className="flex gap-3">
							<button
								onClick={() =>
									setSelectedImage(selectedColor.imgSide)
								}
								className={
									"w-20 h-20 rounded-xl border-2 p-1.5 bg-gray-50 transition-all " +
									(selectedImage === selectedColor.imgSide
										? "border-novaine-purple"
										: "border-gray-200 hover:border-gray-400")
								}
							>
								<img
									src={selectedColor.imgSide}
									alt="Side view"
									className="w-full h-full object-contain"
								/>
							</button>
							<button
								onClick={() =>
									setSelectedImage(selectedColor.imgFront)
								}
								className={
									"w-20 h-20 rounded-xl border-2 p-1.5 bg-gray-50 transition-all " +
									(selectedImage === selectedColor.imgFront
										? "border-novaine-purple"
										: "border-gray-200 hover:border-gray-400")
								}
							>
								<img
									src={selectedColor.imgFront}
									alt="Front view"
									className="w-full h-full object-contain"
								/>
							</button>
						</div>
					</div>

					{/* Info & Specs Column */}
					<div className="space-y-6">
						<div>
							<span className="text-xs font-bold uppercase tracking-wider text-novaine-purple bg-novaine-purple-light px-3 py-1 rounded-full">
								{product.category}
							</span>
							<h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 mt-2">
								{product.name}
							</h1>
							<p className="text-sm font-semibold text-gray-500 mt-1">
								{product.ageGroup}
							</p>
						</div>

						<div>
							<span className="inline-flex gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
								<CheckCircle2 className="w-3.5 h-3.5" /> In
								Stock
							</span>
						</div>

						<p className="text-sm text-gray-600 leading-relaxed">
							{product.desc}
						</p>

						<div>
							<div className="text-xs font-bold text-gray-900 mb-2">
								Available Wheel Sizes:
							</div>
							<div className="flex gap-2">
								{product.sizes.map((s) => (
									<button
										key={s}
										onClick={() => setSelectedSize(s)}
										className={
											"px-4 py-2 rounded-lg text-xs font-bold border transition-all " +
											(selectedSize === s
												? "bg-novaine-purple text-white border-novaine-purple"
												: "bg-white text-gray-800 border-gray-200 hover:border-gray-400")
										}
									>
										{s}
									</button>
								))}
							</div>
						</div>

						<div>
							<div className="text-xs font-bold text-gray-900 mb-2">
								Colours:{" "}
								<span className="text-novaine-purple">
									{selectedColor.name}
								</span>
							</div>
							<div className="flex gap-2">
								{product.colors.map((c) => (
									<button
										key={c.name}
										title={c.name}
										onClick={() => {
											setSelectedColor(c);
											setSelectedImage(c.imgSide);
										}}
										style={{ backgroundColor: c.hex }}
										className={
											"w-7 h-7 rounded-full border-2 border-white shadow transition-transform " +
											(selectedColor.name === c.name
												? "ring-2 ring-novaine-purple scale-110"
												: "hover:scale-105")
										}
									/>
								))}
							</div>
						</div>

						<div className="flex min-w-full pt-2">
							<button
								onClick={() =>
									openEnquiry(
										product.name +
											" (" +
											selectedSize +
											")",
									)
								}
								className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold py-3.5 px-6 rounded-xl shadow-md transition-all"
							>
								<Send className="w-4 h-4" /> Enquire on WhatsApp
							</button>
						</div>

						<div className="pt-4 border-t border-gray-100">
							<h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
								<Wrench className="w-4 h-4 text-novaine-purple" />{" "}
								Technical Specifications
							</h3>

							<div className="bg-white border border-gray-200 rounded-xl overflow-hidden text-xs">
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
												Available Wheel Sizes
											</td>
											<td className="p-3 text-gray-900">
												{product.sizes.join(", ")}
											</td>
										</tr>
										<tr>
											<td className="p-3 font-semibold text-gray-700">
												Speed
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
												Braking Mechanism
											</td>
											<td className="p-3 text-gray-900">
												{product.brakes}
											</td>
										</tr>
										<tr className="bg-gray-50/50">
											<td className="p-3 font-semibold text-gray-700">
												Manufacturing Origin
											</td>
											<td className="p-3 text-gray-900">
												Ludhiana, Punjab
											</td>
										</tr>
										<tr>
											<td className="p-3 font-semibold text-gray-700">
												Warranty Coverage
											</td>
											<td className="p-3 text-gray-900">
												2 Year Frame Structural Warranty
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>

				{/* Related Products */}
				<div className="mt-20 pt-12 border-t border-gray-200">
					<h3 className="text-2xl font-black text-gray-950 mb-8">
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
