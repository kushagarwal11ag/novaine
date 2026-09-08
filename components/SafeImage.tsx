"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onLoad"> {
	containerClassName?: string;
}

export default function SafeImage({
	src,
	alt,
	className = "",
	containerClassName = "",
	fill,
	width,
	height,
	...props
}: SafeImageProps) {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<div
			className={`relative overflow-hidden ${containerClassName || "w-full h-full"}`}
		>
			{!isLoaded && (
				<div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse flex items-center justify-center z-10" />
			)}

			<Image
				src={src}
				alt={alt}
				fill={fill}
				width={!fill ? width : undefined}
				height={!fill ? height : undefined}
				onLoad={() => setIsLoaded(true)}
				className={`transition-opacity duration-300 ease-in-out ${
					isLoaded ? "opacity-100" : "opacity-0"
				} ${className}`}
				{...props}
			/>
		</div>
	);
}
