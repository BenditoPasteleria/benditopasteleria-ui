import { useState } from 'react';
import { useParams } from 'next/navigation';
import { getMessages } from '@/messages';

const OurPhilosophy = () => {
	const params = useParams<{ lang: string }>();
	const lang = params?.lang || 'es';
	const t = getMessages(lang);
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<div className="card">
			<div className="text-center mb-6">
				<h2 className="text-2xl sm:text-3xl font-bold text-bendito-primary mb-4 font-display">
					{t.philosophy.title}
				</h2>
				<div className="w-24 h-1 bg-bendito-secondary mx-auto rounded-full"></div>
			</div>

			<div className="max-w-4xl mx-auto space-y-6">
				{/* Introducción principal */}
				<div className="text-center">
					<p className="text-lg sm:text-xl text-bendito-text leading-relaxed font-medium">
						{t.philosophy.mainDescription.split(t.philosophy.artisanal)[0]}
						<span className="text-bendito-primary font-semibold">
							{t.philosophy.artisanal}
						</span>
						{
							t.philosophy.mainDescription
								.split(t.philosophy.artisanal)[1]
								?.split(t.philosophy.perfect)[0]
						}
						<span className="text-bendito-primary font-semibold">
							{t.philosophy.perfect}
						</span>
						{t.philosophy.mainDescription.split(t.philosophy.perfect)[1]
							? ''
							: ''}
					</p>
				</div>

				{/* Enlace para expandir/colapsar */}
				<div className="text-center">
					<button
						onClick={() => setIsExpanded(!isExpanded)}
						className="inline-flex items-center gap-1 text-bendito-primary hover:text-bendito-dark transition-colors font-medium text-sm underline decoration-dotted underline-offset-4"
					>
						<span>
							{isExpanded ? 'Ver menos' : 'Ver más sobre nuestro proceso'}
						</span>
						<svg
							className={`w-4 h-4 transition-transform duration-200 ${
								isExpanded ? 'rotate-180' : ''
							}`}
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
					</button>
				</div>

				{/* Contenido expandible */}
				{isExpanded && (
					<>
						{/* Separador visual */}
						<div className="flex items-center justify-center my-8">
							<div className="flex-1 h-px bg-bendito-light"></div>
							<div className="mx-4 text-bendito-secondary text-2xl">✨</div>
							<div className="flex-1 h-px bg-bendito-light"></div>
						</div>

						{/* Proceso de trabajo */}
						<div>
							<h3 className="text-xl font-semibold text-bendito-text mb-4 text-center font-display">
								{t.philosophy.collaborationTitle}
							</h3>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{/* Anticipación */}
								<div className="bg-bendito-light/50 p-6 rounded-xl">
									<div className="flex items-start space-x-4">
										<div className="flex-shrink-0 w-12 h-12 bg-bendito-primary rounded-full flex items-center justify-center">
											<span className="text-bendito-secondary text-xl">⏰</span>
										</div>
										<div>
											<h4 className="font-semibold text-bendito-text mb-2 font-display">
												{t.philosophy.anticipation.title}
											</h4>
											<p className="text-bendito-text/80 text-sm leading-relaxed">
												{
													t.philosophy.anticipation.description.split(
														t.philosophy.anticipation.hours,
													)[0]
												}
												<span className="font-semibold text-bendito-primary">
													{t.philosophy.anticipation.hours}
												</span>
												{
													t.philosophy.anticipation.description.split(
														t.philosophy.anticipation.hours,
													)[1]
												}
											</p>
										</div>
									</div>
								</div>

								{/* Preferencias */}
								<div className="bg-bendito-light/50 p-6 rounded-xl">
									<div className="flex items-start space-x-4">
										<div className="flex-shrink-0 w-12 h-12 bg-bendito-primary rounded-full flex items-center justify-center">
											<span className="text-bendito-secondary text-xl">💬</span>
										</div>
										<div>
											<h4 className="font-semibold text-bendito-text mb-2 font-display">
												{t.philosophy.preferences.title}
											</h4>
											<p className="text-bendito-text/80 text-sm leading-relaxed">
												{
													t.philosophy.preferences.description.split(
														t.philosophy.preferences.allergies,
													)[0]
												}
												<span className="font-semibold text-bendito-primary">
													{t.philosophy.preferences.allergies}
												</span>
												{
													t.philosophy.preferences.description.split(
														t.philosophy.preferences.allergies,
													)[1]
												}
											</p>
										</div>
									</div>
								</div>

								{/* Inspiración */}
								<div className="bg-bendito-light/50 p-6 rounded-xl">
									<div className="flex items-start space-x-4">
										<div className="flex-shrink-0 w-12 h-12 bg-bendito-primary rounded-full flex items-center justify-center">
											<span className="text-bendito-secondary text-xl">🎨</span>
										</div>
										<div>
											<h4 className="font-semibold text-bendito-text mb-2 font-display">
												{t.philosophy.inspiration.title}
											</h4>
											<p className="text-bendito-text/80 text-sm leading-relaxed">
												{
													t.philosophy.inspiration.description.split(
														t.philosophy.inspiration.noReplicas,
													)[0]
												}
												<span className="font-semibold text-bendito-primary">
													{t.philosophy.inspiration.noReplicas}
												</span>
												{
													t.philosophy.inspiration.description.split(
														t.philosophy.inspiration.noReplicas,
													)[1]
												}
											</p>
										</div>
									</div>
								</div>

								{/* Decoraciones */}
								<div className="bg-bendito-light/50 p-6 rounded-xl">
									<div className="flex items-start space-x-4">
										<div className="flex-shrink-0 w-12 h-12 bg-bendito-primary rounded-full flex items-center justify-center">
											<span className="text-bendito-secondary text-xl">🍰</span>
										</div>
										<div>
											<h4 className="font-semibold text-bendito-text mb-2 font-display">
												{t.philosophy.decorations.title}
											</h4>
											<p className="text-bendito-text/80 text-sm leading-relaxed">
												{
													t.philosophy.decorations.description.split(
														t.philosophy.decorations.buttercream,
													)[0]
												}
												<span className="font-semibold text-bendito-primary">
													{t.philosophy.decorations.buttercream}
												</span>
												{
													t.philosophy.decorations.description.split(
														t.philosophy.decorations.buttercream,
													)[1]
												}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Cierre inspiracional */}
						<div className="text-center mt-8 p-6 bg-gradient-to-r from-bendito-primary/10 to-bendito-secondary/10 rounded-xl">
							<p className="text-lg text-bendito-text font-medium italic">
								{t.philosophy.closing.message}
							</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default OurPhilosophy;
