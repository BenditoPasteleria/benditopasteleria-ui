'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
	SupportedLanguage,
	getTranslations,
	TextTranslations,
} from '@/lib/translations';

interface LanguageContextType {
	language: SupportedLanguage;
	setLanguage: (language: SupportedLanguage) => void;
	t: TextTranslations;
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
	const [language, setLanguage] = useState<SupportedLanguage>('es');

	// Cargar idioma guardado del localStorage al inicializar
	useEffect(() => {
		const savedLanguage = localStorage.getItem(
			'bendito-language',
		) as SupportedLanguage;
		if (savedLanguage && ['es', 'en', 'ca'].includes(savedLanguage)) {
			setLanguage(savedLanguage);
		}
	}, []);

	// Guardar idioma en localStorage cuando cambie
	useEffect(() => {
		localStorage.setItem('bendito-language', language);
	}, [language]);

	const t = getTranslations(language);

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
export const useTranslations = (): TextTranslations => {
	const { t } = useLanguage();
	return t;
};
