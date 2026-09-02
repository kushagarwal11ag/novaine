"use client";

import React from "react";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

export default function DisclaimerPage() {
	const disclaimer = [
		{
			q: "Legal Disclaimer",
			a: "All content on this website, including but not limited to text, graphics, designs, and trademarks, is the exclusive property of Novaine Bikes Private Limited. You may download or print content solely for personal and non-commercial use. Any modification, reproduction, distribution, or incorporation of this content into any other work, publication, or website, whether in print or electronic format, is strictly prohibited without prior written consent from Novaine Bikes Private Limited. All rights are reserved.",
		},
		{
			q: "Accuracy of Information",
			a: "While Novaine Bikes Private Limited strives to provide accurate and up-to-date information on this website, the content is intended for general informational purposes only. We do not warrant or guarantee the accuracy, completeness, or timeliness of the information",
		},
		{
			q: "Limitation of Liability",
			a: "Novaine Bikes Private Limited and its employees, agents, and affiliates shall not be held liable for any direct, indirect, incidental, or consequential damages or losses arising from the use of this website or any linked websites. Accessing and using the information on this site is at your own risk.",
		},
		{
			q: "No Investment Advice",
			a: "The information on this website does not constitute an invitation or offer to invest in Novaine Bikes Private Limited. Users should seek independent financial advice before making any investment decisions.",
		},
		{
			q: "External Links",
			a: "This website may contain links to third-party websites for your convenience. However, Novaine Bikes Private Limited is not responsible for the content or accuracy of any linked sites. Accessing these links is at your own discretion and risk. By using this website, you agree to the terms of this legal disclaimer. If you do not agree, please discontinue the use of this site immediately.",
		},
	];

	return (
		<div>
			<div className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white py-14 text-center border-b border-gray-800">
				<div className="max-w-2xl mx-auto px-4">
					<h1 className="text-3xl sm:text-4xl font-black text-white mt-2">
						Disclaimer
					</h1>
				</div>
			</div>

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="space-y-4">
					{disclaimer.map((disclaimer, idx) => (
						<div
							key={idx}
							className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
						>
							<h3 className="font-bold text-gray-900 text-sm sm:text-base flex items-center gap-2 mb-2">
								{disclaimer.q}
							</h3>
							<p className="text-xs sm:text-sm text-gray-600 leading-relaxed whitespace-pre-line pl-6">
								{disclaimer.a}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
