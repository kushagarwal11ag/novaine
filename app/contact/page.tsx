"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [subject, setSubject] = useState("Product Inquiry");
	const [message, setMessage] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const msg = encodeURIComponent(
			"*CONTACT INQUIRY - NOVAINE BIKES*\n\nName: " +
				name +
				"\nPhone: " +
				phone +
				"\nSubject: " +
				subject +
				"\nMessage: " +
				message,
		);
		window.open("https://wa.me/919053014084?text=" + msg, "_blank");
		alert("Thank you! Your message has been sent to V&U Industries.");
	};

	return (
		<div>
			<div className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white py-14 text-center border-b border-gray-800">
				<div className="max-w-2xl mx-auto px-4">
					<span className="text-xs font-bold uppercase tracking-widest text-novaine-yellow">
						Get In Touch
					</span>
					<h1 className="text-3xl sm:text-4xl font-black text-white mt-2">
						Contact Us
					</h1>
					<p className="text-xs sm:text-sm text-gray-300 mt-2">
						We are here to assist you
					</p>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Info */}
					<div className="space-y-6">
						<div>
							<span className="text-xs font-bold uppercase tracking-wider text-novaine-purple bg-novaine-purple-light px-3 py-1 rounded-full">
								Headquarters
							</span>
							<h2 className="text-2xl font-extrabold text-gray-950 mt-2">
								Ludhiana
							</h2>
						</div>

						<div className="space-y-4 text-xs sm:text-sm">
							<div className="bg-gray-50 border border-gray-100 p-5 rounded-xl flex items-start gap-4">
								<MapPin className="w-5 h-5 text-novaine-purple shrink-0 mt-0.5" />
								<div>
									<div className="font-bold text-gray-900">
										Factory & Office Address
									</div>
									<div className="text-gray-600 mt-1">
										<strong>V&U Industries</strong>
										<br />
										Street No. 9, Daba Road, Giaspura,
										Ludhiana, Punjab, India - 141003
									</div>
								</div>
							</div>

							<div className="bg-gray-50 border border-gray-100 p-5 rounded-xl flex items-start gap-4">
								<Phone className="w-5 h-5 text-novaine-yellow shrink-0 mt-0.5" />
								<div>
									<div className="font-bold text-gray-900">
										Phone & WhatsApp
									</div>
									<div className="text-gray-600 mt-1">
										Customer Care:{" "}
										<a
											href="tel:+918758216246"
											className="text-novaine-purple font-semibold"
										>
											+91 87582 16246
										</a>
									</div>
								</div>
							</div>

							<div className="bg-gray-50 border border-gray-100 p-5 rounded-xl flex items-start gap-4">
								<Mail className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
								<div>
									<div className="font-bold text-gray-900">
										Email Inquiries
									</div>
									<div className="text-gray-600 mt-1">
										Sales:{" "}
										<strong>sales@novainebikes.com</strong>
										<br />
									</div>
								</div>
							</div>

							<div className="bg-gray-50 border border-gray-100 p-5 rounded-xl flex items-start gap-4">
								<Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
								<div>
									<div className="font-bold text-gray-900">
										Operating Hours
									</div>
									<div className="text-gray-600 mt-1">
										Monday – Saturday: 9:00 AM – 7:00 PM
										<br />
										Sunday: Closed (WhatsApp customer
										support active)
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Form */}
					<div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
						<h3 className="text-lg font-bold text-gray-900 mb-1">
							Send Us A Message
						</h3>
						<p className="text-xs text-gray-500 mb-6">
							Have questions?
						</p>

						<form
							onSubmit={handleSubmit}
							className="space-y-4 text-xs"
						>
							<div>
								<label className="block font-bold text-gray-700 mb-1">
									Full Name{" "}
									<span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									required
									placeholder="Your Name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs outline-none focus:border-novaine-purple"
								/>
							</div>

							<div>
								<label className="block font-bold text-gray-700 mb-1">
									WhatsApp / Phone{" "}
									<span className="text-red-500">*</span>
								</label>
								<input
									type="tel"
									required
									placeholder="+91 98765 43210"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs outline-none focus:border-novaine-purple"
								/>
							</div>

							<div>
								<label className="block font-bold text-gray-700 mb-1">
									Inquiry Purpose
								</label>
								<select
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
									className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs outline-none focus:border-novaine-purple"
								>
									<option>Bicycle product Inquiry</option>
									<option>Spares Inquiry</option>
								</select>
							</div>

							<div>
								<label className="block font-bold text-gray-700 mb-1">
									Message{" "}
									<span className="text-red-500">*</span>
								</label>
								<textarea
									rows={4}
									required
									placeholder="How can we help you today?"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs outline-none focus:border-novaine-purple"
								></textarea>
							</div>

							<button
								type="submit"
								className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg shadow-sm transition-colors text-xs inline-flex items-center justify-center gap-2"
							>
								<Send className="w-4 h-4" /> Send Message Via
								WhatsApp
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
