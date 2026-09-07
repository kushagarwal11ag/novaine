import { Metadata } from "next";
import PolicyClient from "./PolicyClient";

export const metadata: Metadata = {
	title: "Privacy Policy & Terms of Service",
	description:
		"Review the Privacy Policy and terms for Novaine Bikes. Understand how we handle your enquiry data, cookies, and protect your privacy securely.",
};

export default function Page() {
	return <PolicyClient />;
}
