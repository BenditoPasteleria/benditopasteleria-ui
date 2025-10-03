import { Producto } from '@/types/catalogo';
import { getTranslatedText, type Locale } from '@/lib/translations';

interface ProductSchemaProps {
	producto: Producto;
	lang: Locale;
	baseUrl: string;
}

const ProductSchema = ({ producto, lang, baseUrl }: ProductSchemaProps) => {
	const nombre = getTranslatedText(producto.nombre, lang);
	const descripcion = getTranslatedText(producto.descripcion, lang);
	const ingredientes = producto.ingredientes
		? typeof producto.ingredientes === 'string'
			? producto.ingredientes.split(', ')
			: producto.ingredientes[lang] || producto.ingredientes.es
		: [];

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: nombre,
		description: descripcion,
		image: `${baseUrl}${producto.imagen}`,
		brand: {
			'@type': 'Brand',
			name: 'Bendito Pastelería',
		},
		offers: {
			'@type': 'Offer',
			price: producto.precio,
			priceCurrency: 'EUR',
			availability: producto.disponible
				? 'https://schema.org/InStock'
				: 'https://schema.org/OutOfStock',
			seller: {
				'@type': 'Organization',
				name: 'Bendito Pastelería',
			},
		},
		category: producto.categoria,
		keywords: ingredientes.join(', '),
		url: `${baseUrl}/${lang}/catalogo`,
		isVariantOf: {
			'@type': 'ProductGroup',
			name: `${nombre} - Bendito Pastelería`,
		},
	};

	// Agregar información nutricional si está disponible
	if (producto.alergenos) {
		const alergenos =
			typeof producto.alergenos === 'string'
				? producto.alergenos.split(', ')
				: producto.alergenos[lang] || producto.alergenos.es;

		schema['additionalProperty'] = alergenos.map((alergeno) => ({
			'@type': 'PropertyValue',
			name: 'Allergen',
			value: alergeno,
		}));
	}

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
};

export default ProductSchema;
