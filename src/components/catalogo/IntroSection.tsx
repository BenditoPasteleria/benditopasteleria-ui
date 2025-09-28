const IntroSection = () => {
	return (
		<div className="card mb-8 sm:mb-12">
			<div className="text-center mb-6">
				<h2 className="text-2xl sm:text-3xl font-bold text-bendito-primary mb-4 font-display">
					Nuestra Filosofía
				</h2>
				<div className="w-24 h-1 bg-bendito-secondary mx-auto rounded-full"></div>
			</div>

			<div className="max-w-4xl mx-auto space-y-6">
				{/* Introducción principal */}
				<div className="text-center">
					<p className="text-lg sm:text-xl text-bendito-text leading-relaxed font-medium">
						Queremos crear un pastel único, especial y delicioso para vos. Cada
						uno de nuestros dulces se elabora de manera completamente{' '}
						<span className="text-bendito-primary font-semibold">
							artesanal
						</span>
						, priorizando siempre ingredientes de la mejor calidad y respetando
						los tiempos que cada proceso necesita para que el resultado sea{' '}
						<span className="text-bendito-primary font-semibold">perfecto</span>
						.
					</p>
				</div>

				{/* Separador visual */}
				<div className="flex items-center justify-center my-8">
					<div className="flex-1 h-px bg-bendito-light"></div>
					<div className="mx-4 text-bendito-secondary text-2xl">✨</div>
					<div className="flex-1 h-px bg-bendito-light"></div>
				</div>

				{/* Proceso de trabajo */}
				<div>
					<h3 className="text-xl font-semibold text-bendito-text mb-4 text-center font-display">
						Para asegurarnos de lograrlo, necesitamos tu colaboración:
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
										Anticipación
									</h4>
									<p className="text-bendito-text/80 text-sm leading-relaxed">
										Encargá tu pastel con al menos{' '}
										<span className="font-semibold text-bendito-primary">
											48 horas de anticipación
										</span>
										. Esto nos permite planificar y dedicarle el tiempo que
										merece.
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
										Preferencias
									</h4>
									<p className="text-bendito-text/80 text-sm leading-relaxed">
										Contanos tus gustos y preferencias al hacer el pedido. Así
										evitamos sabores que no disfrutes y cuidamos cualquier{' '}
										<span className="font-semibold text-bendito-primary">
											alergia o restricción alimentaria
										</span>
										.
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
										Inspiración
									</h4>
									<p className="text-bendito-text/80 text-sm leading-relaxed">
										Podés compartirnos referencias e inspiraciones (como
										imágenes de Pinterest), pero{' '}
										<span className="font-semibold text-bendito-primary">
											no realizamos réplicas exactas
										</span>
										: nos gusta crear algo único para vos.
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
										Decoraciones
									</h4>
									<p className="text-bendito-text/80 text-sm leading-relaxed">
										Nuestras cubiertas se elaboran principalmente con{' '}
										<span className="font-semibold text-bendito-primary">
											buttercream sabor vainilla
										</span>
										. También podemos hacerlas con ganache de chocolate.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Cierre inspiracional */}
				<div className="text-center mt-8 p-6 bg-gradient-to-r from-bendito-primary/10 to-bendito-secondary/10 rounded-xl">
					<p className="text-lg text-bendito-text font-medium italic">
						Te agradecemos que nos des la{' '}
						<span className="text-bendito-primary font-semibold">
							libertad creativa
						</span>{' '}
						para diseñar algo que no solo se vea increíble, sino que también sea{' '}
						<span className="text-bendito-primary font-semibold">
							memorable al primer bocado
						</span>
						.
					</p>
				</div>
			</div>
		</div>
	);
};

export default IntroSection;
