"use client";

import React, { useState } from "react";
import { X, Send, AlertCircle, CheckCircle2 } from "lucide-react";
import { useEnquiry } from "@/context/EnquiryContext";

interface FormErrors {
	fullName?: string;
	phone?: string;
	city?: string;
}

export default function EnquiryModal() {
	const { isOpen, closeEnquiry, selectedModel } = useEnquiry();

	const [fullName, setFullName] = useState("");
	const [phone, setPhone] = useState("");
	const [city, setCity] = useState("");
	const [note, setNote] = useState("");
	const [errors, setErrors] = useState<FormErrors>({});

	if (!isOpen) return null;

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		const trimmedName = fullName.trim();
		if (!trimmedName) {
			newErrors.fullName = "Full Name is required.";
		} else if (trimmedName.length < 2) {
			newErrors.fullName = "Name must be at least 2 characters.";
		} else if (!/^[a-zA-Z\s.'-]+$/.test(trimmedName)) {
			newErrors.fullName = "Please enter a valid name (letters only).";
		}

		const cleanPhone = phone.replace(/[\s\-()]/g, "");
		const indianPhoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;

		if (!cleanPhone) {
			newErrors.phone = "WhatsApp number is required.";
		} else if (!indianPhoneRegex.test(cleanPhone)) {
			newErrors.phone = "Please enter a valid 10-digit mobile number.";
		}

		const trimmedCity = city.trim();
		if (!trimmedCity) {
			newErrors.city = "City / State is required.";
		} else if (trimmedCity.length < 2) {
			newErrors.city = "City must be at least 2 characters.";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleClose = () => {
		setErrors({});
		closeEnquiry();
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		const msg = encodeURIComponent(
			"*PRODUCT ENQUIRY - NOVAINE BIKES*\n\n" +
				"*Model & Config:* " +
				(selectedModel || "Novaine Bicycles") +
				"\n\n*Name:* " +
				fullName.trim() +
				"\n*Phone:* " +
				phone.trim() +
				"\n*City / State:* " +
				city.trim() +
				(note.trim() ? "\n*Note:* " + note.trim() : ""),
		);

		window.open("https://wa.me/918758216246?text=" + msg, "_blank");
		alert(
			"Thank you! Your enquiry has been routed to Novaine Bikes sales desk.",
		);

		setFullName("");
		setPhone("");
		setCity("");
		setNote("");
		setErrors({});
		closeEnquiry();
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
			<div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
				<div className="bg-gradient-to-r from-gray-950 to-gray-900 text-white p-5 flex items-center justify-between">
					<div>
						<h3 className="text-base font-bold">
							Direct Factory Enquiry
						</h3>
					</div>
					<button
						onClick={handleClose}
						className="p-1.5 text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer"
						aria-label="Close modal"
					>
						<X className="w-5 h-5" />
					</button>
				</div>

				{/* Modal Form */}
				<form
					onSubmit={handleSubmit}
					noValidate
					className="p-6 space-y-4 text-xs"
				>
					{/* Pre-selected Configuration Highlight */}
					{selectedModel && (
						<div className="bg-novaine-purple-light/50 border border-novaine-purple/20 rounded-xl p-3 flex items-start gap-2.5">
							<CheckCircle2 className="w-4 h-4 text-novaine-purple shrink-0 mt-0.5" />
							<div>
								<span className="text-[10px] font-bold tracking-wider text-novaine-purple block">
									Selected Model & Configuration:
								</span>
								<span className="text-xs font-bold text-gray-900 leading-snug block mt-0.5">
									{selectedModel}
								</span>
							</div>
						</div>
					)}

					<div>
						<label className="block font-bold text-gray-700 mb-1">
							Your Full Name{" "}
							<span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							placeholder="e.g. Aman Singh"
							value={fullName}
							onChange={(e) => {
								setFullName(e.target.value);
								if (errors.fullName)
									setErrors((prev) => ({
										...prev,
										fullName: undefined,
									}));
							}}
							className={`w-full bg-gray-50 border rounded-lg px-3.5 py-2.5 text-xs sm:text-sm outline-none transition-colors ${
								errors.fullName
									? "border-red-500 focus:border-red-500 bg-red-50/30"
									: "border-gray-200 focus:bg-white focus:border-novaine-purple focus:ring-2 focus:ring-novaine-purple/20"
							}`}
						/>
						{errors.fullName && (
							<p className="text-[11px] text-red-600 font-medium mt-1 flex items-center gap-1">
								<AlertCircle className="w-3 h-3 shrink-0" />
								{errors.fullName}
							</p>
						)}
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div>
							<label className="block font-bold text-gray-700 mb-1">
								WhatsApp Number{" "}
								<span className="text-red-500">*</span>
							</label>
							<input
								type="tel"
								placeholder="e.g. 98765 43210"
								value={phone}
								onChange={(e) => {
									setPhone(e.target.value);
									if (errors.phone)
										setErrors((prev) => ({
											...prev,
											phone: undefined,
										}));
								}}
								className={`w-full bg-gray-50 border rounded-lg px-3.5 py-2.5 text-xs sm:text-sm outline-none transition-colors ${
									errors.phone
										? "border-red-500 focus:border-red-500 bg-red-50/30"
										: "border-gray-200 focus:bg-white focus:border-novaine-purple focus:ring-2 focus:ring-novaine-purple/20"
								}`}
							/>
							{errors.phone && (
								<p className="text-[11px] text-red-600 font-medium mt-1 flex items-center gap-1">
									<AlertCircle className="w-3 h-3 shrink-0" />
									{errors.phone}
								</p>
							)}
						</div>

						<div>
							<label className="block font-bold text-gray-700 mb-1">
								City / State{" "}
								<span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								placeholder="e.g. Ludhiana, Punjab"
								value={city}
								onChange={(e) => {
									setCity(e.target.value);
									if (errors.city)
										setErrors((prev) => ({
											...prev,
											city: undefined,
										}));
								}}
								className={`w-full bg-gray-50 border rounded-lg px-3.5 py-2.5 text-xs sm:text-sm outline-none transition-colors ${
									errors.city
										? "border-red-500 focus:border-red-500 bg-red-50/30"
										: "border-gray-200 focus:bg-white focus:border-novaine-purple focus:ring-2 focus:ring-novaine-purple/20"
								}`}
							/>
							{errors.city && (
								<p className="text-[11px] text-red-600 font-medium mt-1 flex items-center gap-1">
									<AlertCircle className="w-3 h-3 shrink-0" />
									{errors.city}
								</p>
							)}
						</div>
					</div>

					<div>
						<label className="block font-bold text-gray-700 mb-1">
							Additional Message{" "}
							<span className="text-gray-400 font-normal">
								(Optional)
							</span>
						</label>
						<textarea
							rows={2}
							placeholder="Mention any custom requirement..."
							value={note}
							onChange={(e) => setNote(e.target.value)}
							className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2 text-xs sm:text-sm focus:bg-white focus:border-novaine-purple focus:ring-2 focus:ring-novaine-purple/20 outline-none transition-colors"
						></textarea>
					</div>

					<button
						type="submit"
						className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-bold py-3 rounded-lg shadow-md transition-all text-xs sm:text-sm cursor-pointer mt-2"
					>
						<Send className="w-4 h-4" /> Send Enquiry via WhatsApp
					</button>
				</form>
			</div>
		</div>
	);
}
