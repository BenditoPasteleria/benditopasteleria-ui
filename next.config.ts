import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	// Optimizaciones para SEO y rendimiento
	compress: true,
	poweredByHeader: false,

	// Configuración para archivos estáticos
	trailingSlash: false,

	// Configuración avanzada de imágenes para mejor rendimiento
	images: {
		formats: ['image/avif', 'image/webp'],
		minimumCacheTTL: 31536000, // 1 año
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		domains: [],
		path: '/_next/image',
		loader: 'default',
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		qualities: [25, 50, 75, 85, 90, 95, 100],
	},

	// Headers de seguridad, SEO y optimización de imágenes
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin',
					},
				],
			},
			{
				source: '/images/(.*)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
					{
						key: 'Vary',
						value: 'Accept',
					},
				],
			},
			{
				source: '/_next/image(.*)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
		];
	},
};

export default nextConfig;
