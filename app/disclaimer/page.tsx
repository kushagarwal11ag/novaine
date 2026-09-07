import { Metadata } from "next";
import DisclaimerClient from "./DisclaimerClient";

export const metadata: Metadata = {
	title: "Legal Disclaimer & Product Specifications",
	description:
		"Important disclaimer regarding bicycle technical specifications, manufacturing tolerances, colors, imagery, and intellectual property of Novaine Bikes.",
};

export default function Page() {
	return <DisclaimerClient />;
}
