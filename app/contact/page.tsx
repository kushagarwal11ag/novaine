import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Get in touch with Novaine Bikes, Ludhiana. Inquire about bicycle orders, and customer support.",
};

export default function Page() {
	return <ContactClient />;
}
