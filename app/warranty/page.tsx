import { Metadata } from "next";
import WarrantyClient from "./WarrantyClient";

export const metadata: Metadata = {
	title: "Warranty Policy",
	description:
		"Read the official warranty terms for Novaine bicycles. Learn about our lifetime frame structural guarantee, component coverage, and hassle-free claims process.",
};

export default function Page() {
	return <WarrantyClient />;
}
