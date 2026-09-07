import { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
	title: "Frequently Asked Questions - Sizing & Support",
	description:
		"Find quick answers on bicycle wheel sizing (14T to 26T), tubeless tyres, disc brakes, shipping, warranty registration, and dealership queries with Novaine Bikes.",
};

export default function Page() {
	return <FAQClient />;
}
