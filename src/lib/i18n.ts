export const locales = ['es', 'en', 'ca'] as const;
export type Locale = (typeof locales)[number];

/**
 * Helper para construir URLs con prefijo de idioma
 * Uso: getLocalizedPath('/catalogo', 'es') -> '/es/catalogo'
 */
export function getLocalizedPath(path: string, locale: Locale): string {
	// Remover prefijo de idioma existente si existe
	const cleanPath = path.replace(/^\/[a-z]{2}(\/|$)/, '/');

	// Si es la raíz, solo devolver el prefijo
	if (cleanPath === '/') {
		return `/${locale}`;
	}

	return `/${locale}${cleanPath}`;
}

/**
 * Helper para componentes cliente que necesitan cambiar idioma
 */
export function createLanguageSwitcher() {
	return (newLocale: Locale, currentPath: string) => {
		// Remover el prefijo actual y agregar el nuevo
		const pathWithoutLocale = currentPath.replace(/^\/[a-z]{2}/, '') || '/';
		return getLocalizedPath(pathWithoutLocale, newLocale);
	};
}
