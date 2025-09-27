import { Inter, Playfair_Display, Fira_Code } from 'next/font/google';

export const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

export const playfair = Playfair_Display({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-playfair',
});

export const firaCode = Fira_Code({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-fira-code',
});
