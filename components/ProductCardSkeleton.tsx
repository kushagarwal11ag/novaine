import React from "react";

export default function ProductCardSkeleton() {
	return (
		<div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm flex flex-col justify-between animate-pulse">
			<div className="relative h-48 sm:h-52 rounded-xl bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 flex items-center justify-center mb-4">
				<span className="text-3xl opacity-20">🚲</span>
			</div>

			<div className="space-y-3">
				<div className="flex items-center justify-between">
					<div className="h-3 w-16 bg-gray-200 rounded-md" />
					<div className="h-3 w-12 bg-gray-200 rounded-md" />
				</div>

				<div className="h-5 w-3/4 bg-gray-200 rounded-md" />

				<div className="flex gap-1.5 pt-1">
					<div className="h-5 w-10 bg-gray-200 rounded-md" />
					<div className="h-5 w-10 bg-gray-200 rounded-md" />
					<div className="h-5 w-10 bg-gray-200 rounded-md" />
				</div>

				<div className="pt-2">
					<div className="h-9 w-full bg-gray-200 rounded-xl" />
				</div>
			</div>
		</div>
	);
}
