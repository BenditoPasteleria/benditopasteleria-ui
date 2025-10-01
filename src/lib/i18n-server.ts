import { headers } from 'next/headers';
import { type Locale, locales } from './i18n';

/**
 * Obtiene el locale actual desde los headers (para Server Components)
 * Solo usar en Server Components
 */
export async function getCurrentLocale(): Promise<Locale> {
	const headersList = await headers();
	const pathname = headersList.get('x-pathname') || '';

	// Extraer locale del pathname
	const locale = pathname.split('/')[1] as Locale;

	return locales.includes(locale) ? locale : 'es';
}
