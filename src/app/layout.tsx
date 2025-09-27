import { Inter } from 'next/font/google';
import { staticMetadata } from '@/config/constants';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

export const metadata = staticMetadata;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="es-AR">
			<body className={`${inter.variable} bg-background text-foreground`}>
				<main>{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
