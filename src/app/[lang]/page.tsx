import Link from 'next/link';
import Logo from '@/components/Logo';
import { getMessages } from '@/messages';

export default async function Page({
	params,
}: {
	params: Promise<{ lang: 'es' | 'en' | 'ca' }>;
}) {
	const { lang } = await params;
	const t = getMessages(lang);
	return (
		<div className="min-h-screen gradient-bg flex flex-col items-center justify-center px-4 py-8">
			<div className="text-center max-w-4xl mx-auto w-full">
				{/* Logo y Subtítulo - Grupo Cohesivo */}
				<div className="logo-subtitle-group mb-8 sm:mb-12">
					{/* Logo completo en desktop, minimalista en mobile */}
					<div className="hidden sm:block md:mb-[-60px] mb-[-70px]">
						<Logo width={600} height={200} className="mx-auto logo" />
					</div>
					<div className="block sm:hidden">
						<Logo
							variant="minimal"
							width={140}
							height={140}
							className="mx-auto logo mb-[20px]"
						/>
					</div>

					{/* Subtítulo - Posicionado para crear cohesión visual */}
					<h2 className="text-lg sm:text-xl md:text-2xl text-bendito-secondary font-light font-display mt-[-25px] sm:mt-[-30px] md:mt-[-35px] relative z-10 subtitle">
						{t.home.subtitle}
					</h2>
				</div>

				{/* Descripción - Responsive */}
				<div className="card mb-8 sm:mb-12">
					<p className="text-base sm:text-lg md:text-xl text-bendito-text leading-relaxed mb-4 sm:mb-6">
						{t.home.welcome}{' '}
						<strong className="text-bendito-primary font-display">
							{t.home.brandName}
						</strong>
						{t.home.description}
					</p>
					<p className="text-sm sm:text-base md:text-lg text-bendito-text/80">
						{t.home.descriptionSecondary}
					</p>
				</div>

				{/* Indicador de Construcción - Responsive */}
				<div className="mt-12 sm:mt-16">
					<div className="card text-center">
						<div className="mb-4">
							<div className="inline-flex items-center justify-center w-16 h-16 bg-bendito-primary/10 rounded-full mb-4">
								<svg
									className="w-8 h-8 text-bendito-primary"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
									/>
								</svg>
							</div>
						</div>
						<h3 className="text-lg sm:text-xl font-semibold text-bendito-text mb-3 font-display">
							{t.home.constructionTitle}
						</h3>
						<p className="text-bendito-text/70 mb-4 text-sm sm:text-base">
							{t.home.constructionDescription}
						</p>
						<div className="flex flex-col sm:flex-row gap-3 justify-center">
							<Link
								href={`/${lang}/catalogo`}
								className="btn-primary text-sm sm:text-base"
							>
								{t.home.viewCatalog}
							</Link>
							<a
								href="https://wa.me/674797786"
								target="_blank"
								rel="noopener noreferrer"
								className="btn-secondary text-sm sm:text-base flex items-center justify-center gap-2"
							>
								<svg
									className="w-4 h-4 text-green-500"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
								</svg>
								{t.home.contactWhatsApp}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
