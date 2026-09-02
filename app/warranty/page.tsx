"use client";

import React from "react";
import { ShieldCheck, Send } from "lucide-react";
import { useEnquiry } from "@/context/EnquiryContext";

export default function WarrantyPage() {
	const { openEnquiry } = useEnquiry();

	return (
		<div>
			<div className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white py-14 text-center border-b border-gray-800">
				<div className="max-w-2xl mx-auto px-4">
					<span className="text-xs font-bold uppercase tracking-widest text-novaine-yellow">
						Quality Assurance
					</span>
					<h1 className="text-3xl sm:text-4xl font-black text-white mt-2">
						Novaine Bikes{" "}
						<span className="text-novaine-yellow">
							Warranty Policy
						</span>
					</h1>
					<p className="text-xs sm:text-sm text-gray-300 mt-2">
						Guaranteed craftsmanship from V&U Industries - Ludhiana,
						Punjab - 141003.
					</p>
				</div>
			</div>

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-6 text-sm">
					<div>
						<h3 className="text-base font-bold text-gray-900 mb-2">
							Novaine stands behind all of its products.
						</h3>
						<p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
							Novaine bicycles are warrantied against
							manufacturing defects in materials or workmanship.
							Novaine will repair or replace any products found to
							be defective within the normal scope of use with the
							same or most nearly comparable model or component
							then available. The terms of this limited warranty
							are described below.
						</p>
					</div>

					<div>
						<h3 className="text-base font-bold text-gray-900 mb-2">
							Limited Warranty
						</h3>
						<p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
							Every bicycle has a useful product lifespan. This
							limited warranty is not meant to suggest or imply
							that the frame or components can never be broken or
							will last forever. This limited warranty covers
							manufacturing defects that occur within the normal
							lifespan and use of the product.
						</p>
					</div>

					<div>
						<h3 className="text-base font-bold text-gray-900 mb-2">
							Warranty Conditions
						</h3>
						<p className="mb-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
							Please note the following:
						</p>
						<ul className="list-disc pl-5 text-xs sm:text-sm text-gray-600 leading-relaxed">
							<li className="py-1">
								Novaine bicycles must be purchased from
								authorized Novaine Retailer or distributor in
								order to activate the lifetime frame warranty
								described below.
							</li>
							<li className="py-1">
								This limited warranty applies only to the
								original owner of the bicycle and is not
								transferable to subsequent owners.
							</li>
							<li className="py-1">
								Six-month warranty on forks and components
								(excludes consumables, tyres & inner tubes)
							</li>
						</ul>
						<p className="my-5 text-xs sm:text-sm text-gray-600 leading-relaxed">
							For any warranty claim to be considered, the bicycle
							must be brought in to an Authorized Novaine Retailer
							in the same city in which the bicycle was purchased.
							The bicycle must be in an assembled, reasonably
							clean and sanitary condition and accompanied by the
							original, dated Invoice copy / Sales receipt for the
							bicycle. (Be sure to keep your receipt in a safe
							place)
						</p>
						<ul className="list-disc pl-5 text-xs sm:text-sm text-gray-600 leading-relaxed">
							<li className="py-1">
								This limited warranty applies only to bicycles
								purchased in assembled and adjusted condition
								from Authorized Novaine Retailers.
							</li>
							<li className="py-1">
								This limited warranty is void if the bicycle is
								subjected to abuse, neglect, improper repair,
								improper assembly, lack of proper maintenance
								according to the owner’s manual, alteration,
								modification, installation of incompatible
								parts, corrosion, an accident or other abnormal,
								excessive, or improper use.
							</li>
							<li className="py-1">
								This limited warranty is void if the bicycle is
								used in a rental or bike sharing program.
							</li>
							<li className="py-1">
								Damage resulting from normal wear and tear,
								including the results of fatigue, is not
								covered. It is the owner’s responsibility to
								regularly inspect and properly maintain his/her
								bicycle.
							</li>
							<li className="py-1">
								Paint fading caused by the effects of
								ultraviolet light (UV) or outdoor exposure is
								not covered by this limited warranty.
							</li>
							<li className="py-1">
								All labor charges for warranty service,
								including the transfer of components and/or any
								installation of new components, are the
								responsibility of the bicycle owner.
							</li>
						</ul>
						<p className="my-5 text-xs sm:text-sm text-gray-600 leading-relaxed">
							Due to product evolution and obsolescence (such as
							products that have been discontinued or are no
							longer kept in stock), some frames or components may
							not be available for older models. In these cases,
							Novaine may elect to provide a replacement that it
							determines to be the most nearly comparable model,
							but sourcing and paying for components is the
							responsibility of the bicycle owner.
						</p>
						<p className="my-5 text-xs sm:text-sm text-gray-600 leading-relaxed">
							All determinations under this limited warranty will
							be made in the sole discretion of Novaine, including
							but not limited to the decision to repair or replace
							a defective product, and what replacement product is
							the most nearly comparable product then available.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
