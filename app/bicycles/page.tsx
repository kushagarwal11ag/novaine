import { Metadata } from "next";
import BicycleClient from "./BicycleClient";

export const metadata: Metadata = {
	title: "Explore Bicycles Range - Kids & Ranger Models",
	description:
		"Browse the full 2026 Novaine bicycle catalog - featuring models in 14T to 26T wheel sizes.",
};

export default function Page() {
	return <BicycleClient />;
}
