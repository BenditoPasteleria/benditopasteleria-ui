import { useParams } from 'next/navigation';
import { getMessages } from '@/messages';
import WhatsAppButton from '@/components/WhatsAppButton';

interface MobileStickyBarProps {
	searchValue: string;
	onSearchChange: (value: string) => void;
}

const MobileStickyBar = ({
	searchValue,
	onSearchChange,
}: MobileStickyBarProps) => {
	const params = useParams<{ lang: string }>();
	const lang = params?.lang || 'es';
	const t = getMessages(lang);

	return (
		<div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-bendito-light shadow-lg">
			<div className="px-4 py-3">
				<div className="flex items-center gap-3">
					{/* Barra de búsqueda */}
					<div className="flex-1 relative">
						<input
							type="text"
							value={searchValue}
							onChange={(e) => onSearchChange(e.target.value)}
							placeholder={t.catalog.searchPlaceholder}
							className="w-full px-4 py-2 pr-10 text-sm border border-bendito-light rounded-lg focus:outline-none focus:ring-2 focus:ring-bendito-primary focus:border-transparent"
						/>
						<div className="absolute right-3 top-1/2 transform -translate-y-1/2">
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
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</div>
					</div>

					{/* Botón WhatsApp compacto */}
					<WhatsAppButton
						variant="inline"
						showText={false}
						className="flex-shrink-0"
					/>
				</div>
			</div>
		</div>
	);
};

export default MobileStickyBar;
