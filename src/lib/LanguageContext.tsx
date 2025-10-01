'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale } from '@/lib/translations';
import { getMessages } from '@/messages';

interface LanguageContextType {
	language: Locale;
	setLanguage: (language: Locale) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	t: Record<string, any>; // Temporal: usar Record en lugar de any
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

interface LanguageProviderProps {
	children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
	children,
}) => {
	const [language, setLanguage] = useState<Locale>('es');

	// Cargar idioma guardado del localStorage al inicializar
	useEffect(() => {
		const savedLanguage = localStorage.getItem('bendito-language') as Locale;
		if (savedLanguage && ['es', 'en', 'ca'].includes(savedLanguage)) {
			setLanguage(savedLanguage);
		}
	}, []);

	// Guardar idioma en localStorage cuando cambie
	useEffect(() => {
		localStorage.setItem('bendito-language', language);
	}, [language]);

	const t = getMessages(language);

	const value: LanguageContextType = {
		language,
		setLanguage,
		t,
	};

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
};

// Hook para usar el contexto de idioma
export const useLanguage = (): LanguageContextType => {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
};

// Hook para obtener solo las traducciones
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useTranslations = (): Record<string, any> => {
	const { t } = useLanguage();
	return t;
};
