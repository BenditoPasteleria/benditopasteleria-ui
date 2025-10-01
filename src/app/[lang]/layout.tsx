import '../globals.css';
import { inter, playfair, firaCode } from '@/lib/fonts';
import Footer from '@/components/Footer';
import LanguageSelector from '@/components/LanguageSelector';
import type { Metadata } from 'next';

export async function generateStaticParams() {
	return [{ lang: 'es' }, { lang: 'en' }, { lang: 'ca' }];
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ lang: 'es' | 'en' | 'ca' }>;
}): Promise<Metadata> {
	const { lang } = await params;

	const metadata = {
		es: {
			title: 'Bendito Pastelería - Delicias Artesanales',
			description:
				'Descubre los mejores postres artesanales en Bendito Pastelería. Tortas, pasteles, cupcakes y más. Calidad y sabor únicos.',
			keywords:
				'pastelería, postres, tortas, cupcakes, Bendito, artesanal, dulces',
		},
		en: {
			title: 'Bendito Bakery - Artisan Delights',
			description:
				'Discover the best artisanal desserts at Bendito Bakery. Cakes, pastries, cupcakes and more. Unique quality and flavor.',
			keywords: 'bakery, desserts, cakes, cupcakes, Bendito, artisanal, sweets',
		},
		ca: {
			title: 'Bendito Pastisseria - Delícies Artesanals',
			description:
				'Descobreix els millors postres artesanals a Bendito Pastisseria. Tortes, pastissos, cupcakes i més. Qualitat i sabor únics.',
			keywords:
				'pastisseria, postres, tortes, cupcakes, Bendito, artesanal, dolços',
		},
	};

	const current = metadata[lang as keyof typeof metadata] || metadata.es;

	return {
		title: current.title,
		description: current.description,
		keywords: current.keywords,
		authors: [{ name: 'Bendito Pastelería' }],
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

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}) {
	const { lang } = await params;
	return (
		<html
			lang={lang}
			className={`${inter.variable} ${playfair.variable} ${firaCode.variable}`}
		>
			<body className="min-h-screen gradient-bg flex flex-col">
				{/* Language Selector - Fixed position */}
				<div className="fixed top-4 right-4 z-50">
					<LanguageSelector />
				</div>
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
