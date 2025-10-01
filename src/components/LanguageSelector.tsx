'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { createLanguageSwitcher, type Locale } from '@/lib/i18n';
import Image from 'next/image';

const languages = [
	{ code: 'es' as Locale, name: 'Español', flag: '/flags/spain.svg' },
	{ code: 'en' as Locale, name: 'English', flag: '/flags/usa.svg' },
	{ code: 'ca' as Locale, name: 'Català', flag: '/flags/catalonia.svg' },
];

export default function LanguageSelector() {
	const params = useParams();
	const pathname = usePathname();
	const router = useRouter();

	const currentLocale = params.lang as Locale;
	const switchLanguage = createLanguageSwitcher();

	const handleLanguageChange = (newLocale: Locale) => {
		const newPath = switchLanguage(newLocale, pathname);
		router.push(newPath);
	};

	const currentLanguage =
		languages.find((lang) => lang.code === currentLocale) || languages[0];

	return (
		<div className="relative">
			<select
				value={currentLocale}
				onChange={(e) => handleLanguageChange(e.target.value as Locale)}
				className="bg-white border border-bendito-light rounded-lg pl-8 pr-8 py-2 text-sm text-bendito-text focus:outline-none focus:ring-2 focus:ring-bendito-primary focus:border-transparent appearance-none"
				aria-label="Seleccionar idioma"
			>
				{languages.map((lang) => (
					<option key={lang.code} value={lang.code}>
						{lang.name}
					</option>
				))}
			</select>

			{/* Bandera actual */}
			<div className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
				<Image
					src={currentLanguage.flag}
					alt={`Bandera de ${currentLanguage.name}`}
					width={20}
					height={15}
					className="rounded-sm"
				/>
			</div>

			{/* Flecha del dropdown */}
			<div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
				<svg
					className="w-4 h-4 text-bendito-text"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</div>
		</div>
	);
}
