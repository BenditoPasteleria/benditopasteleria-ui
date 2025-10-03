import { Producto } from '@/types/catalogo';
import { getTranslatedText, type Locale } from '@/lib/translations';

interface MetaTagsProps {
	producto?: Producto;
	lang: Locale;
	baseUrl: string;
}

const MetaTags = ({ producto, lang, baseUrl }: MetaTagsProps) => {
	const isProductPage = !!producto;

	let title: string;
	let description: string;
	let keywords: string;
	let canonicalUrl: string;
	let ogImage: string;

	if (isProductPage) {
		const nombre = getTranslatedText(producto.nombre, lang);
		const descripcion = getTranslatedText(producto.descripcion, lang);
		const ingredientes = producto.ingredientes
			? typeof producto.ingredientes === 'string'
				? (producto.ingredientes as string).split(', ')
				: Array.isArray(producto.ingredientes)
					? producto.ingredientes
					: producto.ingredientes[lang] || producto.ingredientes.es
			: [];

		title = `${nombre} - Bendito Pastelería`;
		description = `${descripcion}. Producto artesanal de alta calidad. Disponible para pedidos.`;
		keywords = `${nombre}, ${ingredientes.join(', ')}, pastelería, artesanal, ${lang === 'es' ? 'postres' : lang === 'ca' ? 'postres' : 'desserts'}`;
		canonicalUrl = `${baseUrl}/${lang}/catalogo`;
		ogImage = `${baseUrl}${producto.imagen}`;
	} else {
		// Catálogo general
		title = getTranslatedText(
			{
				es: 'Catálogo de Productos - Bendito Pastelería',
				ca: 'Catàleg de Productes - Bendito Pastelería',
				en: 'Product Catalog - Bendito Bakery',
			},
			lang,
		);
		description = getTranslatedText(
			{
				es: 'Descubre nuestra amplia selección de pasteles, tartas, alfajores y más. Productos artesanales de alta calidad.',
				ca: "Descobreix la nostra àmplia selecció de pastissos, tartes, alfajors i més. Productes artesanals d'alta qualitat.",
				en: 'Discover our wide selection of cakes, tarts, alfajores and more. High-quality artisanal products.',
			},
			lang,
		);
		keywords = getTranslatedText(
			{
				es: 'pastelería, postres, tortas, cupcakes, Bendito, artesanal, dulces, catálogo',
				ca: 'pastisseria, postres, tortes, cupcakes, Bendito, artesanal, dolços, catàleg',
				en: 'bakery, desserts, cakes, cupcakes, Bendito, artisanal, sweets, catalog',
			},
			lang,
		);
		canonicalUrl = `${baseUrl}/${lang}/catalogo`;
		ogImage = `${baseUrl}/logo-bendito.svg`;
	}

	return (
		<>
			{/* Meta tags básicos */}
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<link rel="canonical" href={canonicalUrl} />

			{/* Open Graph */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={ogImage} />
			<meta property="og:url" content={canonicalUrl} />
			<meta
				property="og:type"
				content={isProductPage ? 'product' : 'website'}
			/>
			<meta property="og:site_name" content="Bendito Pastelería" />
			<meta
				property="og:locale"
				content={lang === 'es' ? 'es_ES' : lang === 'ca' ? 'ca_ES' : 'en_US'}
			/>

			{/* Twitter Card */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={ogImage} />

			{/* Meta tags adicionales */}
			<meta name="robots" content="index, follow" />
			<meta name="author" content="Bendito Pastelería" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			{/* Idioma alternativo */}
			<link rel="alternate" hrefLang="es" href={`${baseUrl}/es/catalogo`} />
			<link rel="alternate" hrefLang="ca" href={`${baseUrl}/ca/catalogo`} />
			<link rel="alternate" hrefLang="en" href={`${baseUrl}/en/catalogo`} />
			<link
				rel="alternate"
				hrefLang="x-default"
				href={`${baseUrl}/es/catalogo`}
			/>
		</>
	);
};

export default MetaTags;
