import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				// Paleta de colores Bendito
				bendito: {
					primary: '#004207', // Verde principal para logo
					secondary: '#d8ae6c', // Dorado para contraste
					background: '#eeefec', // Fondo suave
					text: '#734c23', // Marrón para títulos
					light: '#f8f9f7', // Fondo más claro
					dark: '#002a04', // Verde más oscuro para hover
					// Colores adicionales profesionales
					white: '#faf9f7', // Blanco roto para fondos limpios
					success: '#e8f5e8', // Verde claro para elementos de éxito
					gray: '#f5f5f5', // Gris suave para bordes sutiles
					accent: '#c4a574', // Dorado más suave para acentos
				},
			},
			fontFamily: {
				serif: ['var(--font-playfair)', 'serif'],
				sans: ['var(--font-inter)', 'sans-serif'],
				mono: ['var(--font-fira-code)', 'monospace'],
				display: ['var(--font-fira-code)', 'monospace'], // Para títulos y elementos destacados
			},
		},
	},
	plugins: [],
} satisfies Config;
