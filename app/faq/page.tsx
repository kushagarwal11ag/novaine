"use client";

import React from "react";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

export default function FaqPage() {
	const faqs = [
		{
			q: "Why should I ride a bike?",
			a: "Riding a bike isn't just fun—it's also an eco-friendly choice! By choosing to pedal, you’re helping reduce pollution, decrease traffic congestion, and promote a healthier lifestyle. At Novaine, we believe that every ride contributes to a greener, cleaner planet.",
		},
		{
			q: "What makes Novaine different from other bicycle brands?",
			a: "Novaine is committed to revolutionizing transportation with a focus on safety, convenience, and cutting-edge technology. Our bikes are designed for riders of all ages, ensuring a fun, reliable, and environmentally responsible riding experience.",
		},
		{
			q: "How did Novaine's journey begin?",
			a: "Novaine Bicycles is a proud division of Novaine Inc., headquartered in Ludhiana. Our journey started with a vision to redefine transportation, making cycling safer and more enjoyable for everyone. Today, we continue to innovate, bringing joy to riders with our versatile and stylish bicycles.",
		},
		{
			q: "What types of bicycles does Novaine offer?",
			a: "We offer a diverse range of bicycles tailored for every age group and riding style. From fun and educational bikes for toddlers and kids to robust mountain bikes for adventure seekers, Novaine caters to every rider's needs. We even have the delightful Baby Sky Swing for the little ones!",
		},
		{
			q: "What is Novaine's commitment to customer satisfaction?",
			a: "Customer satisfaction is at the heart of everything we do. We are dedicated to providing a seamless and enjoyable riding experience, backed by exceptional quality and innovative designs. At Novaine, we strive to bring smiles to our riders by delivering unmatched performance and comfort.",
		},
		{
			q: "Why does Novaine emphasize fun and environmental responsibility?",
			a: "We believe that cycling should be enjoyable and meaningful. By combining fun with environmental consciousness, Novaine encourages riders to make responsible choices while experiencing the joy of riding. Our mission is to inspire a lifestyle that's not only exciting but also eco-friendly.",
		},
		{
			q: "Why should I choose Novaine over other bicycle brands?",
			a: "Novaine stands out with its commitment to safety, convenience, and innovation. Our bikes are designed for all age groups, ensuring a seamless blend of fun, technology, and environmental responsibility. Plus, our exceptional customer support ensures you have a great experience from purchase to ride.",
		},
		{
			q: "Are Novaine bicycles suitable for all age groups?",
			a: "Absolutely! Novaine offers a wide variety of bicycles, from toddler and kids' bikes designed to promote learning and balance to advanced mountain bikes for adventurous adults. We cater to every rider's needs, ensuring safety and enjoyment for all ages.",
		},
		{
			q: "What safety features do Novaine bicycles include?",
			a: "Safety is our top priority. Novaine bicycles are designed with advanced safety features, including sturdy frames, reliable braking systems, ergonomic grips, and reflective elements for enhanced visibility. Our bikes undergo rigorous testing to ensure maximum safety and performance.",
		},
		{
			q: "Where can I purchase Novaine bicycles?",
			a: "You can purchase Novaine bicycles through our official website or at authorized dealers across various locations. Visit our store locator page to find the nearest outlet or simply shop online for a convenient doorstep delivery.",
		},
		{
			q: "Does Novaine offer warranty and after-sales service?",
			a: "Yes, Novaine bicycles come with a comprehensive warranty that covers manufacturing defects. We also provide reliable after-sales service to ensure that your riding experience remains smooth and enjoyable. For more details, check our warranty policy or contact our customer support team.",
		},
		{
			q: "What should I do if I face an issue with my Novaine bicycle?",
			a: "We’re here to help! If you encounter any issues, reach out to our customer support team or visit an authorized service center. Our team will provide prompt assistance to resolve your concerns and get you back on the road.",
		},
		{
			q: "Can I customize my Novaine bicycle?",
			a: "Yes, Novaine offers customization options to enhance your riding experience. From choosing the right accessories to personalizing the look of your bike, we provide multiple ways to make your Novaine bicycle truly yours.",
		},
		{
			q: "Does Novaine support eco-friendly initiatives?",
			a: "Absolutely! Novaine is dedicated to promoting sustainable transportation solutions. By encouraging cycling as a mode of transport, we contribute to reducing carbon emissions and creating a greener planet. Ride a bike, save the environment – that’s our motto!",
		},
		{
			q: "How do I maintain my Novaine bicycle for optimal performance?",
			a: "Regular maintenance is key to a great riding experience. We recommend periodic checks of the tires, brakes, chain, and overall frame. Our user manual provides detailed maintenance tips, and our service centers are always ready to assist you.",
		},
		{
			q: "Does Novaine organize community events or cycling clubs?",
			a: "Yes! We love bringing the community together. Novaine organizes cycling events, group rides, and eco-friendly campaigns to encourage a fun and active lifestyle. Stay updated with our events section or follow us on social media to join the ride!",
		},
		{
			q: "How can I contact Novaine for further inquiries?",
			a: "We’re always here to help! You can reach us via our customer support helpline, email, or through our social media channels. Visit our ‘Contact Us’ page for more details.",
		},
		{
			q: "Need More Help?",
			a: "If you have any other questions or need assistance, feel free to reach out to us. We're here to help you enjoy every moment of your Novaine ride!",
		},
		//
		{
			q: "What size bicycle should I choose for my child?",
			a: "• 14T: Best for children aged 3 to 5 years (Height: 3ft - 3ft 6in)\n• 16T: Best for children aged 4 to 7 years (Height: 3ft 6in - 4ft)\n• 20T: Best for children aged 6 to 9 years (Height: 3ft 10in - 4ft 6in)",
		},
		{
			q: "What sizes are available for Ranger / Adult models?",
			a: "Our ranger and MTB series (such as Hunt, Hunt Pro, Cyclone, and Blitz) are available in 24T (ideal for ages 9 to 14 years) and 26T (ideal for teenagers and adults of height 5ft to 6ft+).",
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
						Welcome to the Novaine FAQ page! Here, we’ve compiled
						answers to commonly asked questions about our products,
						services, and policies. If you have additional
						questions, feel free to reach out to our customer
						support team.
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
