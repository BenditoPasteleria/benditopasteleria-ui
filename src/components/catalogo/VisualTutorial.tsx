import { useState } from 'react';
import { useParams } from 'next/navigation';
import { getMessages } from '@/messages';

const VisualTutorial = () => {
	const params = useParams<{ lang: string }>();
	const lang = params?.lang || 'es';
	const t = getMessages(lang);
	const [isExpanded, setIsExpanded] = useState(false);

	const steps = [
		{
			icon: '🍰',
			title: t.catalog.tutorialSteps.step1.title,
			description: t.catalog.tutorialSteps.step1.description,
		},
		{
			icon: '✨',
			title: t.catalog.tutorialSteps.step2.title,
			description: t.catalog.tutorialSteps.step2.description,
		},
		{
			icon: '📲',
			title: t.catalog.tutorialSteps.step3.title,
			description: t.catalog.tutorialSteps.step3.description,
		},
		{
			icon: '🛍️',
			title: t.catalog.tutorialSteps.step4.title,
			description: t.catalog.tutorialSteps.step4.description,
		},
	];

	return (
		<div className="mb-3 sm:mb-4">
			{/* Botón más intuitivo y visual */}
			<button
				onClick={() => setIsExpanded(!isExpanded)}
				className="w-full text-center py-3 px-4 text-sm text-bendito-text/70 hover:text-bendito-primary transition-all duration-200 border border-bendito-light/40 rounded-lg hover:border-bendito-primary/30 hover:bg-bendito-primary/5"
			>
				<div className="flex items-center justify-center gap-2">
					<span className="font-medium">
						{isExpanded ? 'Ocultar' : 'Cómo pedir'}
					</span>
					<div
						className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
					>
						<svg
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="w-full h-full"
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
			</button>

			{/* Contenido desplegable con mejor animación */}
			{isExpanded && (
				<div className="mt-4 animate-fade-in-up border-t border-bendito-light/20 pt-4">
					<div className="text-center mb-4">
						<h2 className="text-base font-bold text-bendito-primary mb-2 font-display">
							{t.catalog.howItWorks}
						</h2>
						<p className="text-xs text-bendito-text/60">
							{t.catalog.easyToOrder}
						</p>
					</div>

					{/* Disposición horizontal más limpia */}
					<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-4xl mx-auto">
						{steps.map((step, index) => (
							<div
								key={index}
								className="flex items-center sm:flex-col gap-3 sm:gap-2 flex-1"
							>
								{/* Icono minimalista */}
								<div className="flex-shrink-0">
									<div className="w-8 h-8 sm:w-10 sm:h-10 bg-bendito-primary/10 rounded-full flex items-center justify-center">
										<span className="text-bendito-primary text-sm sm:text-base font-bold">
											{index + 1}
										</span>
									</div>
								</div>

								{/* Contenido */}
								<div className="flex-1 sm:text-center">
									<h3 className="text-xs font-semibold text-bendito-text mb-0.5 font-display">
										{step.title}
									</h3>
									<p className="text-xs text-bendito-text/60 leading-relaxed">
										{step.description}
									</p>
								</div>

								{/* Flecha conectora en mobile */}
								{index < steps.length - 1 && (
									<div className="hidden sm:block flex-shrink-0">
										<svg
											className="w-4 h-4 text-bendito-primary/40"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default VisualTutorial;
