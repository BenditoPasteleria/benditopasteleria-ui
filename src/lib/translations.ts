import { MultiLangText, MultiLangArray } from '@/types/catalogo';

// Tipo para idiomas soportados
export type Locale = 'es' | 'ca' | 'en';

// Tipos temporales para compatibilidad con productos no convertidos
type LegacyText = string | MultiLangText;
type LegacyArray = string[] | MultiLangArray;

/**
 * Obtiene el texto traducido según el idioma actual
 * Compatible con formato antiguo y nuevo
 */
export function getTranslatedText(text: LegacyText, locale: Locale): string {
	if (typeof text === 'string') {
		return text; // Formato antiguo, devolver tal como está
	}
	return text[locale] || text.es; // Fallback a español si no existe la traducción
}

/**
 * Obtiene el array traducido según el idioma actual
 * Compatible con formato antiguo y nuevo
 */
export function getTranslatedArray(
	array: LegacyArray,
	locale: Locale,
): string[] {
	if (Array.isArray(array)) {
		return array; // Formato antiguo, devolver tal como está
	}
	return array[locale] || array.es; // Fallback a español si no existe la traducción
}

/**
 * Obtiene el texto traducido con fallback inteligente
 * Si no existe la traducción en el idioma solicitado, busca en español
 */
export function getTranslatedTextSafe(
	text: MultiLangText,
	locale: Locale,
): string {
	// Si el idioma solicitado existe y no está vacío, usarlo
	if (text[locale] && text[locale].trim() !== '') {
		return text[locale];
	}

	// Fallback a español
	return text.es;
}

/**
 * Obtiene el array traducido con fallback inteligente
 */
export function getTranslatedArraySafe(
	array: MultiLangArray,
	locale: Locale,
): string[] {
	// Si el idioma solicitado existe y no está vacío, usarlo
	if (array[locale] && array[locale].length > 0) {
		return array[locale];
	}

	// Fallback a español
	return array.es;
}
