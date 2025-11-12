import { useState } from 'react';
import { getTranslatedArray, type Locale } from '@/lib/translations';
import { getMessages } from '@/messages';

interface AllergenTooltipProps {
	alergenos: string[] | { es: string[]; ca: string[]; en: string[] };
	lang: Locale;
}

const AllergenTooltip = ({ alergenos, lang }: AllergenTooltipProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const alergenosList = getTranslatedArray(alergenos, lang);
	const t = getMessages(lang);

	return (
		<div className="relative inline-block">
			{/* Tooltip button */}
			<button
				onMouseEnter={() => setIsVisible(true)}
				onMouseLeave={() => setIsVisible(false)}
				onClick={() => setIsVisible(!isVisible)}
				className="inline-flex items-center gap-1 text-xs text-bendito-text/70 bg-bendito-gray px-2 py-1 rounded-full hover:bg-bendito-light transition-colors"
			>
				<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
					<path
						fillRule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
						clipRule="evenodd"
					/>
				</svg>
				<span>{t.products.containsAllergens}</span>
			</button>

			{/* Tooltip */}
			{isVisible && (
				<div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10">
					<div className="bg-bendito-white text-bendito-text text-xs rounded-lg px-4 py-3 shadow-lg border border-bendito-light min-w-48">
						<div className="font-semibold mb-2 text-bendito-primary">
							{t.products.allergens}:
						</div>
						<div className="space-y-1 mb-3">
							{alergenosList.map((alergeno, index) => (
								<div key={index} className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
									<span className="text-bendito-text/80">{alergeno}</span>
								</div>
							))}
						</div>
						<div className="pt-2 border-t border-bendito-light">
							<p className="text-xs text-bendito-text/60 italic">
								{t.catalog.allergenDisclaimer}
							</p>
						</div>
						{/* Arrow */}
						<div className="absolute top-full left-1/2 transform -translate-x-1/2">
							<div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-bendito-white"></div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default AllergenTooltip;
