"use client";

import React from "react";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

export default function FaqPage() {
	const faqs = [
		{
			q: "What size bicycle should I choose for my child?",
			a: "• 14T: Best for children aged 3 to 5 years (Height: 3ft - 3ft 6in)\n• 16T: Best for children aged 4 to 7 years (Height: 3ft 6in - 4ft)\n• 20T: Best for children aged 6 to 9 years (Height: 3ft 10in - 4ft 6in)",
		},
		{
			q: "What sizes are available for Ranger / Adult models?",
			a: "Our ranger and MTB series (such as Hunt, Hunt Pro, Cyclone, and Blitz) are available in 24T (ideal for ages 9 to 14 years) and 26T (ideal for teenagers and adults of height 5ft to 6ft+).",
		},
		{
			q: "Where are Novaine Bikes manufactured?",
			a: "All Novaine bicycles are designed and manufactured 100% in-house by V&U Industries in Ludhiana, Punjab - 141003, India.",
		},
	];

	return (
		<div>
			<div className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white py-14 text-center border-b border-gray-800">
				<div className="max-w-2xl mx-auto px-4">
					<span className="text-xs font-bold uppercase tracking-widest text-novaine-yellow">
						Support & Help
					</span>
					<h1 className="text-3xl sm:text-4xl font-black text-white mt-2">
						Frequently Asked{" "}
						<span className="text-novaine-yellow">Questions</span>
					</h1>
					<p className="text-xs sm:text-sm text-gray-300 mt-2">
						Everything you need to know about Novaine Bikes by V&U
						Industries Ludhiana.
					</p>
				</div>
			</div>

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="space-y-4">
					{faqs.map((faq, idx) => (
						<div
							key={idx}
							className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
						>
							<h3 className="font-bold text-gray-900 text-sm sm:text-base flex items-center gap-2 mb-2">
								<HelpCircle className="w-4 h-4 text-novaine-purple shrink-0" />
								{faq.q}
							</h3>
							<p className="text-xs sm:text-sm text-gray-600 leading-relaxed whitespace-pre-line pl-6">
								{faq.a}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
