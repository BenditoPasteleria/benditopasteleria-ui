import es from '../../messages/es.json';
import en from '../../messages/en.json';
import ca from '../../messages/ca.json';

export const messages = {
	es,
	en,
	ca,
} as const;

export type SupportedLang = keyof typeof messages;
export type Messages = typeof es;

export function getMessages(lang: string): Messages {
	if (
		(Object.keys(messages) as SupportedLang[]).includes(lang as SupportedLang)
	) {
		return messages[lang as SupportedLang];
	}
	return es;
}
