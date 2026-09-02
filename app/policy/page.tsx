"use client";

import React from "react";
import { ShieldCheck, Send } from "lucide-react";
import { useEnquiry } from "@/context/EnquiryContext";

export default function PolicyPage() {
	const { openEnquiry } = useEnquiry();

	return (
		<div>
			<div className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white py-14 text-center border-b border-gray-800">
				<div className="max-w-2xl mx-auto px-4">
					<h1 className="text-3xl sm:text-4xl font-black text-white mt-2">
						Privacy Policy
					</h1>
				</div>
			</div>

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-6 text-sm">
					<div>
						<p className="text-xs sm:text-sm text-gray-900 mb-2">
							Please read carefully before using this site. This
							site is owned and operated by Novaine Bikes Private
							Limited. By using this site, you signify your
							agreement to the Privacy Policy and Terms of Use. If
							you do not agree with these terms, please do not use
							this site. We reserve the right, at Our discretion,
							to change, modify, add or remove portions of these
							terms at any time. Please check periodically for
							changes. Your continued use of this site following
							the posting of changes to these terms will signify
							your acceptance of the revised terms. They were last
							updated on 1 Sep 2026.
						</p>
						<div className="pt-5 border-t border-gray-100 h-1" />
						<h3 className="text-base font-bold text-gray-900 mb-2">
							PRIVACY POLICY
						</h3>
						<p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
							Your privacy on the Internet is important to Us. As
							a part of the operation of this site, we gather
							certain types of information about users. We want
							you to know the types of information We gather and
							what we do with it.
						</p>
					</div>

					<div>
						<h3 className="text-base font-bold text-gray-900 mb-2">
							INFORMATION WE COLLECT
						</h3>
						<p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
							We collect two general types of information from
							users: personal data (such as names and email
							addresses); and aggregate anonymised data (such as
							information about traffic patterns on this site; for
							example, how many users log in to this site on a
							daily basis).
						</p>
					</div>

					<div>
						<h3 className="text-base font-bold text-gray-900 mb-2">
							PERSONAL DATA
						</h3>
						<p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
							Personal data is collected when users provide
							information to Us, for example in registering for
							electronic newsletters or other membership services,
							in answering surveys, provided by Us. When you
							register or request information on this site, We
							generally need you to provide your name, email
							address, postal address, day phone number. In
							addition, if you send Us personal correspondence,
							such as emails or letters, We may collect such
							information into a file specific to you. When you
							consent to provide your personal information to Us,
							that information is stored with us.
						</p>
					</div>

					<div>
						<h3 className="text-base font-bold text-gray-900 mb-2">
							AGGREGATED INFORMATION AND USAGE INFORMATION
						</h3>
						<p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
							Aggregate information, such as which page users
							access and information volunteered by users, such as
							survey information and/or site registration
							information, is collected through various methods.
							In the course of using Our site, We also
							automatically track certain information about you.
							This information includes the URL that you just came
							from, which URL you next go to, what browser you are
							Using and your IP address. An IP address is a number
							that is automatically assigned to your computer
							whenever you’re surfing the web. Web servers, the
							computers that ‘serve up’ web pages, automatically
							identify your computer by its IP address, and when
							you request a page from Us, Our servers log your IP
							address.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
