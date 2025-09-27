import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Catálogo - Bendito Pastelería',
	description:
		'Descubre nuestra selección completa de postres artesanales. Tortas, cupcakes, galletas y más delicias.',
	openGraph: {
		title: 'Catálogo - Bendito Pastelería',
		description: 'Descubre nuestra selección completa de postres artesanales',
	},
};

export default function CatalogoLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
