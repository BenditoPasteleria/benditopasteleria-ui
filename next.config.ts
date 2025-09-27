import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	// Optimizaciones para SEO y rendimiento
	compress: true,
	poweredByHeader: false,

	// Configuración para archivos estáticos
	trailingSlash: false,

	// Configuración de imágenes para mejor SEO
	images: {
		formats: ['image/webp', 'image/avif'],
		minimumCacheTTL: 60,
	},

	// Headers de seguridad y SEO
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
		];
	},
};

export default nextConfig;
