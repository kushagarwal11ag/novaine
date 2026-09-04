"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle, Phone, Sparkles } from "lucide-react";

interface FAQItem {
	category: "brand" | "sizing" | "orders" | "warranty" | "community";
	q: string;
	a: string;
}

const FAQ_DATA: FAQItem[] = [
	{
		category: "brand",
		q: "Why should I ride a bike?",
		a: "Riding a bike isn't just fun—it's also an eco-friendly choice! By choosing to pedal, you’re helping reduce pollution, decrease traffic congestion, and promote a healthier lifestyle. At Novaine, we believe that every ride contributes to a greener, cleaner planet.",
	},
	{
		category: "brand",
		q: "What makes Novaine different from other bicycle brands?",
		a: "Novaine is committed to revolutionizing transportation with a focus on safety, convenience, and cutting-edge technology. Our bikes are designed for riders of all ages, ensuring a fun, reliable, and environmentally responsible riding experience.",
	},
	{
		category: "brand",
		q: "How did Novaine's journey begin?",
		a: "Novaine Bicycles is a proud division of Novaine Inc., headquartered in Ludhiana. Our journey started with a vision to redefine transportation, making cycling safer and more enjoyable for everyone. Today, we continue to innovate, bringing joy to riders with our versatile and stylish bicycles.",
	},
	{
		category: "brand",
		q: "Why should I choose Novaine over other bicycle brands?",
		a: "Novaine stands out with its commitment to safety, convenience, and innovation. Our bikes are designed for all age groups, ensuring a seamless blend of fun, technology, and environmental responsibility. Plus, our exceptional customer support ensures you have a great experience from purchase to ride.",
	},
	{
		category: "brand",
		q: "Why does Novaine emphasize fun and environmental responsibility?",
		a: "We believe that cycling should be enjoyable and meaningful. By combining fun with environmental consciousness, Novaine encourages riders to make responsible choices while experiencing the joy of riding. Our mission is to inspire a lifestyle that's not only exciting but also eco-friendly.",
	},
	{
		category: "brand",
		q: "Does Novaine support eco-friendly initiatives?",
		a: "Absolutely! Novaine is dedicated to promoting sustainable transportation solutions. By encouraging cycling as a mode of transport, we contribute to reducing carbon emissions and creating a greener planet. Ride a bike, save the environment – that’s our motto!",
	},
	{
		category: "brand",
		q: "What is Novaine's commitment to customer satisfaction?",
		a: "Customer satisfaction is at the heart of everything we do. We are dedicated to providing a seamless and enjoyable riding experience, backed by exceptional quality and innovative designs. At Novaine, we strive to bring smiles to our riders by delivering unmatched performance and comfort.",
	},
	{
		category: "sizing",
		q: "What types of bicycles does Novaine offer?",
		a: "We offer a diverse range of bicycles tailored for every age group and riding style. From fun and educational bikes for toddlers and kids to robust mountain bikes for adventure seekers, Novaine caters to every rider's needs.",
	},
	{
		category: "sizing",
		q: "Are Novaine bicycles suitable for all age groups?",
		a: "Absolutely! Novaine offers a wide variety of bicycles, from toddler and kids' bikes designed to promote learning and balance to advanced mountain bikes for adventurous adults. We cater to every rider's needs, ensuring safety and enjoyment for all ages.",
	},
	{
		category: "sizing",
		q: "What size bicycle should I choose for my child?",
		a: "• 14T: Best for children aged 3 to 5 years (Height: 3ft - 3ft 6in)\n• 16T: Best for children aged 4 to 7 years (Height: 3ft 6in - 4ft)\n• 20T: Best for children aged 6 to 9 years (Height: 3ft 10in - 4ft 6in)",
	},
	{
		category: "sizing",
		q: "What sizes are available for Ranger / Adult models?",
		a: "Our ranger and MTB series (such as Hunt, Hunt Pro, Cyclone, and Blitz) are available in 24T (ideal for ages 9 to 14 years) and 26T (ideal for teenagers and adults of height 5ft to 6ft+).",
	},

	{
		category: "sizing",
		q: "What safety features do Novaine bicycles include?",
		a: "Safety is our top priority. Novaine bicycles are designed with advanced safety features, including sturdy frames, reliable braking systems, ergonomic grips, and reflective elements for enhanced visibility. Our bikes undergo rigorous testing to ensure maximum safety and performance.",
	},

	{
		category: "orders",
		q: "Where can I purchase Novaine bicycles?",
		a: "You can purchase Novaine bicycles through our official website or at authorized dealers across various locations. Visit our store locator page to find the nearest outlet or simply shop online for a convenient doorstep delivery.",
	},
	{
		category: "orders",
		q: "Can I customize my Novaine bicycle?",
		a: "Yes, Novaine offers customization options to enhance your riding experience. From choosing the right accessories to personalizing the look of your bike, we provide multiple ways to make your Novaine bicycle truly yours.",
	},

	{
		category: "warranty",
		q: "Does Novaine offer warranty and after-sales service?",
		a: "Yes, Novaine bicycles come with a comprehensive warranty that covers manufacturing defects. We also provide reliable after-sales service to ensure that your riding experience remains smooth and enjoyable. For more details, check our warranty policy or contact our customer support team.",
	},
	{
		category: "warranty",
		q: "What should I do if I face an issue with my Novaine bicycle?",
		a: "We’re here to help! If you encounter any issues, reach out to our customer support team or visit an authorized service center. Our team will provide prompt assistance to resolve your concerns and get you back on the road.",
	},

	{
		category: "warranty",
		q: "How do I maintain my Novaine bicycle for optimal performance?",
		a: "Regular maintenance is key to a great riding experience. We recommend periodic checks of the tires, brakes, chain, and overall frame. Our user manual provides detailed maintenance tips, and our service centers are always ready to assist you.",
	},
	{
		category: "community",
		q: "Does Novaine organize community events or cycling clubs?",
		a: "Yes! We love bringing the community together. Novaine organizes cycling events, group rides, and eco-friendly campaigns to encourage a fun and active lifestyle. Stay updated with our events section or follow us on social media to join the ride!",
	},
	{
		category: "community",
		q: "How can I contact Novaine for further inquiries?",
		a: "We’re always here to help! You can reach us via our customer support helpline, email, or through our social media channels. Visit our ‘Contact Us’ page for more details.",
	},
	{
		category: "community",
		q: "Need More Help?",
		a: "If you have any other questions or need assistance, feel free to reach out to us. We're here to help you enjoy every moment of your Novaine ride!",
	},
];
const CATEGORIES = [
	{ id: "all", label: "All Questions" },
	{ id: "brand", label: "Brand & Eco Mission" },
	{ id: "sizing", label: "Bicycles, Sizing & Safety" },
	{ id: "orders", label: "Buying & Customization" },
	{ id: "warranty", label: "Warranty, Maintenance & Care" },
	{ id: "community", label: "Community & Support" },
];

export default function FaqPage() {
	const [activeCategory, setActiveCategory] = useState("all");
	// Track which accordion is open (or null if all closed)
	const [openIdx, setOpenIdx] = useState<number | null>(0);
	// Toggle accordion open/close
	const toggleAccordion = (idx: number) => {
		setOpenIdx(openIdx === idx ? null : idx);
	};
	// Filter FAQs by active category
	const filteredFaqs = useMemo(() => {
		return FAQ_DATA.filter((faq) => {
			const matchesCategory =
				activeCategory === "all" || faq.category === activeCategory;
			return matchesCategory;
		});
	}, [activeCategory]);
	return (
		<div className="bg-gray-50 min-h-screen">
			<div className="bg-gradient-to-r from-gray-950 via-purple-950 to-gray-950 text-white py-16 text-center border-b border-gray-800 relative overflow-hidden">
				<div className="max-w-3xl mx-auto px-4 relative z-10">
					<span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-novaine-yellow bg-white/10 px-3.5 py-1 rounded-full border border-novaine-yellow/30 mb-3">
						<Sparkles className="w-3.5 h-3.5" /> Help Center &
						Knowledge Base
					</span>
					<h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
						Frequently Asked{" "}
						<span className="text-novaine-yellow">Questions</span>
					</h1>
					<p className="text-xs sm:text-sm text-gray-300 mt-3 max-w-xl mx-auto leading-relaxed">
						Find instant answers regarding Novaine brand, bicycle
						sizing, buying guide, maintenance help, and community
						programs.
					</p>
				</div>
			</div>
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
					{CATEGORIES.map((cat) => (
						<button
							key={cat.id}
							onClick={() => setActiveCategory(cat.id)}
							className={`mx-1 whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
								activeCategory === cat.id
									? "bg-novaine-purple text-white shadow-md shadow-novaine-purple/20 scale-105"
									: "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
							}`}
						>
							{cat.label}
						</button>
					))}
				</div>
				{/* Accordion FAQ List */}
				<div className="space-y-3.5">
					{filteredFaqs.map((faq, idx) => {
						const isOpen = openIdx === idx;
						return (
							<div
								key={idx}
								className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-sm ${
									isOpen
										? "border-novaine-purple/40 ring-2 ring-novaine-purple/10"
										: "border-gray-200 hover:border-gray-300"
								}`}
							>
								{/* Accordion Question Button */}
								<button
									type="button"
									onClick={() => toggleAccordion(idx)}
									className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
								>
									<div className="flex items-center gap-3">
										<div
											className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
												isOpen
													? "bg-novaine-purple text-white"
													: "bg-novaine-purple-light text-novaine-purple"
											}`}
										>
											?
										</div>
										<span className="font-bold text-gray-900 text-sm sm:text-base">
											{faq.q}
										</span>
									</div>
									<div
										className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
											isOpen
												? "bg-novaine-purple-light text-novaine-purple rotate-180"
												: "text-gray-400 bg-gray-50"
										}`}
									>
										<ChevronDown className="w-4 h-4" />
									</div>
								</button>
								{/* Collapsible Answer Body */}
								{isOpen && (
									<div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed whitespace-pre-line border-t border-gray-50 pl-14 sm:pl-16">
										{faq.a}
									</div>
								)}
							</div>
						);
					})}
				</div>
				<div className="mt-14 bg-gradient-to-br from-slate-900 via-gray-950 to-slate-900 rounded-3xl p-8 text-white text-center shadow-xl border border-slate-800">
					<span className="text-xs font-extrabold uppercase tracking-wider text-novaine-yellow">
						Couldn't find what you were looking for?
					</span>
					<h3 className="text-xl sm:text-2xl font-black text-white mt-1">
						Speak Directly With Our Support Desk
					</h3>
					<p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-md mx-auto">
						Our team is available Monday to Saturday (9 AM – 7 PM)
						to assist with any support required.
					</p>
					<div className="flex flex-wrap items-center justify-center gap-4 mt-6">
						<a
							href="https://wa.me/918758216246"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-lg transition-all"
						>
							<MessageCircle className="w-4 h-4" /> Chat on
							WhatsApp
						</a>
						<a
							href="tel:+918758216246"
							className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all"
						>
							<Phone className="w-4 h-4 text-novaine-yellow" />{" "}
							Call Customer Care
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
