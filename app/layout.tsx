import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EnquiryProvider } from "@/context/EnquiryContext";
import EnquiryModal from "@/components/EnquiryModal";
import WhatsAppFab from "@/components/WhatsAppFab";

import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
	title: {
		default: "Novaine Bikes",
		template: "%s | Novaine Bikes",
	},
	description: "Premier manufacturer of kids and ranger bicycles.",
	metadataBase: new URL("https://novaine.vercel.app"),
	icons: {
		icon: "/assets/images/favicon.png",
	},
	openGraph: {
		type: "website",
		locale: "en_IN",
		url: "https://novaine.vercel.app",
		siteName: "Novaine Bikes",
		title: "Novaine Bikes — Premium Kids & Ranger Bicycles | Ludhiana",
		description:
			"Precision engineered bicycles manufactured in India. Explore our extensive range of kids and ranger models.",
		images: [
			{
				url: "/assets/images/hero_slide_1.jpg",
				width: 1200,
				height: 630,
				alt: "Novaine Bikes, Ludhiana",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Novaine Bikes — Premium Kids & Ranger Bicycles",
		description:
			"Precision engineered bicycles manufactured in Ludhiana, India.",
		images: ["/assets/images/hero_slide_1.jpg"],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className="flex flex-col min-h-screen">
				<EnquiryProvider>
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
					<EnquiryModal />
					<WhatsAppFab />
					<Analytics />
				</EnquiryProvider>
			</body>
		</html>
	);
}
