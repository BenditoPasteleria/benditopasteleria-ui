import type { Metadata } from 'next';
import './globals.css';
import { inter, playfair, firaCode } from '@/lib/fonts';

export const metadata: Metadata = {
	title: 'Bendito Pastelería - Delicias Artesanales',
	description:
		'Descubre los mejores postres artesanales en Bendito Pastelería. Tortas, pasteles, cupcakes y más. Calidad y sabor únicos.',
	keywords: 'pastelería, postres, tortas, cupcakes, Bendito, artesanal, dulces',
	authors: [{ name: 'Bendito Pastelería' }],
	openGraph: {
		title: 'Bendito Pastelería - Delicias Artesanales',
		description:
			'Descubre los mejores postres artesanales en Bendito Pastelería',
		type: 'website',
		locale: 'es_ES',
	},
	robots: {
		index: true,
		follow: true,
	},
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html
			lang="es"
			className={`${inter.variable} ${playfair.variable} ${firaCode.variable}`}
		>
			<body className="min-h-screen gradient-bg">{children}</body>
		</html>
	);
};

export default RootLayout;
