import { catalogoData } from '@/data/catalogo';

async function generateSitemap() {
	const baseUrl = 'https://benditopasteleria.com';
	const languages = ['es', 'ca', 'en'];

	const staticPages = [
		{ url: '', priority: 1.0, changefreq: 'weekly' },
		{ url: '/catalogo', priority: 0.9, changefreq: 'weekly' },
	];

	// Generar URLs para productos individuales
	const productPages = catalogoData.productos.map((producto) => ({
		url: `/catalogo?producto=${producto.id}`,
		priority: 0.8,
		changefreq: 'monthly',
	}));

	const allPages = [...staticPages, ...productPages];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${languages
	.map((lang) =>
		allPages
			.map(
				(page) => `
	<url>
		<loc>${baseUrl}/${lang}${page.url}</loc>
		<lastmod>${new Date().toISOString()}</lastmod>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
		${languages
			.map((altLang) =>
				altLang !== lang
					? `<xhtml:link rel="alternate" hreflang="${altLang}" href="${baseUrl}/${altLang}${page.url}" />`
					: '',
			)
			.join('')}
	</url>`,
			)
			.join(''),
	)
	.join('')}
</urlset>`;

	return sitemap;
}

export async function GET() {
	const sitemap = await generateSitemap();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=86400', // 24 horas
		},
	});
}
