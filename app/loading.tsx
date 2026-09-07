import React from "react";

export default function Loading() {
	return (
		<div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
			{/* Brand Spinner Container */}
			<div className="relative flex items-center justify-center">
				{/* Glowing Background Glow */}
				<div className="absolute w-28 h-28 bg-novaine-purple/20 rounded-full blur-2xl animate-pulse" />

				{/* Animated Rotating Bicycle Spoke Wheel */}
				<div className="w-16 h-16 rounded-full border-4 border-gray-200 border-t-novaine-purple border-r-novaine-yellow animate-spin" />

				{/* Inner Hub Point */}
				<div className="absolute w-3.5 h-3.5 bg-novaine-purple rounded-full shadow-sm" />
			</div>

			{/* Brand Shimmer Text */}
			<div className="mt-6 text-center space-y-1">
				<h3 className="text-sm font-black uppercase tracking-widest text-gray-900">
					Novaine <span className="text-novaine-purple">Bikes</span>
				</h3>
				<p className="text-xs font-semibold text-gray-400 animate-pulse">
					Loading precision bicycle engineering...
				</p>
			</div>
		</div>
	);
}
