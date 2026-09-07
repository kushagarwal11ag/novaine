import React from "react";
import Link from "next/link";
import { Home, Compass, MessageCircle, Sparkles } from "lucide-react";

export const metadata = {
	title: "404 - Trail Not Found | Novaine Bikes",
	description:
		"The page you are looking for has taken a wrong turn. Return to the Novaine Bikes collection.",
};

export default function NotFound() {
	return (
		<div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
			<div className="max-w-xl w-full text-center space-y-8">
				<div className="relative flex justify-center items-center">
					<div className="absolute w-64 h-64 bg-novaine-purple/10 rounded-full blur-3xl -z-10 animate-pulse" />

					<div className="relative">
						<div className="text-8xl sm:text-9xl font-black tracking-tight text-gray-950 select-none flex items-center justify-center">
							<span>4</span>
							<span className="relative mx-1 inline-flex items-center justify-center text-novaine-purple">
								<span className="inline-block w-20 h-20 sm:w-24 sm:h-24 rounded-full border-8 border-dashed border-novaine-purple animate-[spin_12s_linear_infinite]" />
								<span className="absolute w-6 h-6 rounded-full bg-novaine-yellow border-4 border-white shadow-md" />
							</span>
							<span>4</span>
						</div>

						<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
							<span className="inline-flex items-center gap-1.5 bg-novaine-yellow text-gray-950 text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md">
								<Sparkles className="w-3.5 h-3.5" /> Off The
								Trail
							</span>
						</div>
					</div>
				</div>

				<div className="space-y-3">
					<h1 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
						Looks Like You Took a{" "}
						<span className="text-novaine-purple">Wrong Turn</span>
					</h1>
					<p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
						The route or bicycle model you are looking for has
						either been moved, renamed, or never left the factory.
						Let’s get you back on track!
					</p>
				</div>

				<div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
					<Link
						href="/"
						className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-novaine-purple hover:bg-novaine-purple-dark text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
					>
						<Home className="w-4 h-4" /> Back to Homepage
					</Link>

					<Link
						href="/bicycles"
						className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-sm transition-all"
					>
						<Compass className="w-4 h-4 text-novaine-yellow" />{" "}
						Browse Bicycles
					</Link>
				</div>

				<div className="pt-6 border-t border-gray-200/80">
					<p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">
						Popular Pit Stops
					</p>
					<div className="flex flex-wrap items-center justify-center gap-2 text-xs">
						<Link
							href="/bicycles?cat=kids"
							className="bg-white hover:bg-novaine-purple-light hover:text-novaine-purple border border-gray-200 px-3 py-1.5 rounded-lg text-gray-700 font-medium transition-colors"
						>
							Kids Bikes (14T - 20T)
						</Link>
						<Link
							href="/bicycles?cat=ranger"
							className="bg-white hover:bg-novaine-purple-light hover:text-novaine-purple border border-gray-200 px-3 py-1.5 rounded-lg text-gray-700 font-medium transition-colors"
						>
							Ranger & Adult (24T - 26T)
						</Link>
						<Link
							href="/contact"
							className="bg-white hover:bg-novaine-purple-light hover:text-novaine-purple border border-gray-200 px-3 py-1.5 rounded-lg text-gray-700 font-medium transition-colors"
						>
							Contact Us
						</Link>
					</div>
				</div>

				<div className="text-xs text-gray-500 flex items-center justify-center gap-1.5">
					<span>Need help finding a specific model?</span>
					<a
						href="https://wa.me/918758216246"
						target="_blank"
						rel="noreferrer"
						className="text-emerald-600 font-bold hover:underline inline-flex items-center gap-1"
					>
						<MessageCircle className="w-3.5 h-3.5" /> Chat on
						WhatsApp
					</a>
				</div>
			</div>
		</div>
	);
}
