import { Metadata } from "next";
import SearchClient from "./SearchClient";

export const metadata: Metadata = {
	title: "Search Bicycles - Find Your Model",
	description: "Search the complete Novaine Bikes catalog",
    robots: {
		index: false,
		follow: true,
	},
};

export default function Page() {
	return <SearchClient />;
}
