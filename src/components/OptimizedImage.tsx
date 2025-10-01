'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	className?: string;
	priority?: boolean;
	quality?: number;
	sizes?: string;
	onLoad?: () => void;
	onError?: () => void;
}

export default function OptimizedImage({
	src,
	alt,
	width = 400,
	height = 300,
	className = '',
	priority = false,
	quality = 85,
	sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
	onLoad,
	onError,
}: OptimizedImageProps) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [hasError, setHasError] = useState(false);

	const handleLoad = () => {
		setIsLoaded(true);
		onLoad?.();
	};

	const handleError = () => {
		setHasError(true);
		onError?.();
	};

	// Si hay error, mostrar placeholder
	if (hasError) {
		return (
			<div
				className={`flex items-center justify-center bg-gray-100 ${className}`}
				style={{ width, height }}
			>
				<div className="text-center text-gray-500">
					<svg
						className="mx-auto h-12 w-12 text-gray-400"
						stroke="currentColor"
						fill="none"
						viewBox="0 0 48 48"
					>
						<path
							d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<p className="mt-2 text-sm">Imagen no disponible</p>
				</div>
			</div>
		);
	}

	return (
		<div className={`relative overflow-hidden ${className}`}>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				quality={quality}
				priority={priority}
				sizes={sizes}
				onLoad={handleLoad}
				onError={handleError}
				className={`transition-opacity duration-300 ${
					isLoaded ? 'opacity-100' : 'opacity-0'
				}`}
				style={{
					objectFit: 'cover',
				}}
			/>

			{/* Loading skeleton */}
			{!isLoaded && !hasError && (
				<div
					className="absolute inset-0 animate-pulse bg-gray-200"
					style={{ width, height }}
				/>
			)}
		</div>
	);
}
