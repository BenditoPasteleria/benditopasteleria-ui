import { catalogoData } from '@/data/catalogo';
import { getTranslatedText, type Locale } from '@/lib/translations';

interface CatalogSchemaProps {
	lang: Locale;
	baseUrl: string;
}

const CatalogSchema = ({ lang, baseUrl }: CatalogSchemaProps) => {
	const categorias = catalogoData.categorias.map((categoria) => ({
		'@type': 'ItemList',
		name: getTranslatedText(categoria.nombre, lang),
		description: getTranslatedText(categoria.descripcion, lang),
		url: `${baseUrl}/${lang}/catalogo?categoria=${categoria.id}`,
	}));

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: getTranslatedText(
			{
				es: 'Catálogo de Productos - Bendito Pastelería',
				ca: 'Catàleg de Productes - Bendito Pastelería',
				en: 'Product Catalog - Bendito Bakery',
			},
			lang,
		),
		description: getTranslatedText(
			{
				es: 'Descubre nuestra amplia selección de pasteles, tartas, alfajores y más. Productos artesanales de alta calidad.',
				ca: "Descobreix la nostra àmplia selecció de pastissos, tartes, alfajors i més. Productes artesanals d'alta qualitat.",
				en: 'Discover our wide selection of cakes, tarts, alfajores and more. High-quality artisanal products.',
			},
			lang,
		),
		url: `${baseUrl}/${lang}/catalogo`,
		breadcrumb: {
			'@type': 'BreadcrumbList',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: getTranslatedText(
						{ es: 'Inicio', ca: 'Inici', en: 'Home' },
						lang,
					),
					item: `${baseUrl}/${lang}`,
				},
				{
					'@type': 'ListItem',
					position: 2,
					name: getTranslatedText(
						{ es: 'Catálogo', ca: 'Catàleg', en: 'Catalog' },
						lang,
					),
					item: `${baseUrl}/${lang}/catalogo`,
				},
			],
		},
		mainEntity: {
			'@type': 'ItemList',
			name: getTranslatedText(
				{
					es: 'Productos de Pastelería',
					ca: 'Productes de Pastisseria',
					en: 'Bakery Products',
				},
				lang,
			),
			numberOfItems: catalogoData.productos.length,
			itemListElement: categorias,
		},
		publisher: {
			'@type': 'Organization',
			name: 'Bendito Pastelería',
			url: baseUrl,
			logo: {
				'@type': 'ImageObject',
				url: `${baseUrl}/logo-bendito.svg`,
			},
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
};

export default CatalogSchema;
