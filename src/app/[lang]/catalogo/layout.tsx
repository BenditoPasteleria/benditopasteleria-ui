import type { Metadata } from 'next';

export async function generateMetadata({
	params,
}: {
	params: Promise<{ lang: string }>;
}): Promise<Metadata> {
	const { lang } = await params;

	const metadata = {
		es: {
			title: 'Catálogo - Bendito Pastelería',
			description:
				'Descubre nuestra selección completa de postres artesanales. Tortas, cupcakes, galletas y más delicias.',
		},
		en: {
			title: 'Catalog - Bendito Bakery',
			description:
				'Discover our complete selection of artisanal desserts. Cakes, cupcakes, cookies and more delights.',
		},
		ca: {
			title: 'Catàleg - Bendito Pastisseria',
			description:
				'Descobreix la nostra selecció completa de postres artesanals. Tortes, cupcakes, galetes i més delícies.',
		},
	};

	const current = metadata[lang as keyof typeof metadata] || metadata.es;

	return {
		title: current.title,
		description: current.description,
		keywords:
			lang === 'es'
				? 'catálogo, postres, tortas, cupcakes, galletas, Bendito, artesanal'
				: lang === 'en'
					? 'catalog, desserts, cakes, cupcakes, cookies, Bendito, artisanal'
					: 'catàleg, postres, tortes, cupcakes, galetes, Bendito, artesanal',
		openGraph: {
			title: current.title,
			description: current.description,
			type: 'website',
			locale: lang === 'es' ? 'es_ES' : lang === 'en' ? 'en_US' : 'ca_ES',
		},
		robots: {
			index: true,
			follow: true,
		},
	};
}

export default function CatalogoLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
