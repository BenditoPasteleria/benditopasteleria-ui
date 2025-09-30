'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { SupportedLanguage } from '@/lib/translations';

interface LanguageSelectorProps {
	variant?: 'header' | 'footer' | 'modal';
	className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
	variant = 'header',
	className = '',
}) => {
	const { language, setLanguage } = useLanguage();

	const languages = [
		{ code: 'es' as SupportedLanguage, name: 'Español', flag: '🇪🇸' },
		{ code: 'en' as SupportedLanguage, name: 'English', flag: '🇬🇧' },
		{ code: 'ca' as SupportedLanguage, name: 'Català', flag: '🏴󠁥󠁳󠁣󠁴󠁿' },
	];

	const handleLanguageChange = (newLanguage: SupportedLanguage) => {
		setLanguage(newLanguage);
	};

	if (variant === 'header') {
		return (
			<div className={`relative ${className}`}>
				<select
					value={language}
					onChange={(e) =>
						handleLanguageChange(e.target.value as SupportedLanguage)
					}
					className="bg-white/90 backdrop-blur-sm border border-bendito-light rounded-lg px-3 py-2 text-sm font-medium text-bendito-text focus:ring-2 focus:ring-bendito-primary focus:border-bendito-primary transition-all duration-200 appearance-none cursor-pointer pr-8"
				>
					{languages.map((lang) => (
						<option key={lang.code} value={lang.code}>
							{lang.flag} {lang.name}
						</option>
					))}
				</select>
				<div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
					<svg
						className="w-4 h-4 text-bendito-text/50"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
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

	if (variant === 'footer') {
		return (
			<div className={`flex items-center space-x-2 ${className}`}>
				<span className="text-sm text-bendito-text/70">Idioma:</span>
				<div className="flex space-x-1">
					{languages.map((lang) => (
						<button
							key={lang.code}
							onClick={() => handleLanguageChange(lang.code)}
							className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
								language === lang.code
									? 'bg-bendito-primary text-white'
									: 'bg-white/50 text-bendito-text hover:bg-bendito-light'
							}`}
							title={lang.name}
						>
							{lang.flag}
						</button>
					))}
				</div>
			</div>
		);
	}

	// Modal variant
	return (
		<div className={`space-y-3 ${className}`}>
			<h4 className="text-sm font-semibold text-bendito-text">
				Seleccionar idioma
			</h4>
			<div className="space-y-2">
				{languages.map((lang) => (
					<button
						key={lang.code}
						onClick={() => handleLanguageChange(lang.code)}
						className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
							language === lang.code
								? 'bg-bendito-primary text-white'
								: 'bg-white text-bendito-text hover:bg-bendito-light border border-bendito-light'
						}`}
					>
						<span className="text-lg">{lang.flag}</span>
						<span>{lang.name}</span>
						{language === lang.code && (
							<svg
								className="w-4 h-4 ml-auto"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						)}
					</button>
				))}
			</div>
		</div>
	);
};

export default LanguageSelector;
