import { useParams } from 'next/navigation';
import { getMessages } from '@/messages';

const VisualTutorial = () => {
	const params = useParams<{ lang: string }>();
	const lang = params?.lang || 'es';
	const t = getMessages(lang);

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
		<div className="mb-8 sm:mb-12">
			<div className="text-center mb-6">
				<h2 className="text-xl sm:text-2xl font-bold text-bendito-primary mb-2 font-display">
					{t.catalog.howItWorks}
				</h2>
				<p className="text-sm text-bendito-text/70">{t.catalog.easyToOrder}</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
				{steps.map((step, index) => (
					<div key={index} className="text-center relative">
						{/* Ícono */}
						<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-bendito-primary/20 to-bendito-secondary/20 rounded-full flex items-center justify-center text-3xl">
							{step.icon}
						</div>

						{/* Número del paso */}
						<div className="w-8 h-8 mx-auto mb-3 bg-bendito-primary text-bendito-secondary rounded-full flex items-center justify-center text-sm font-bold">
							{index + 1}
						</div>

						{/* Contenido */}
						<h3 className="text-lg font-semibold text-bendito-text mb-2 font-display">
							{step.title}
						</h3>
						<p className="text-sm text-bendito-text/70 leading-relaxed">
							{step.description}
						</p>

						{/* Flecha conectora (solo en desktop y no en el último paso) */}
						{index < steps.length - 1 && (
							<div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
								<svg
									className="w-6 h-6 text-bendito-primary"
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
	);
};

export default VisualTutorial;
