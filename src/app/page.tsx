import Link from 'next/link';
import Logo from '@/components/Logo';

const Home = () => {
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
						Pastelería Artesanal
					</h2>
				</div>

				{/* Descripción - Responsive */}
				<div className="card mb-8 sm:mb-12">
					<p className="text-base sm:text-lg md:text-xl text-bendito-text leading-relaxed mb-4 sm:mb-6">
						Bienvenidos a{' '}
						<strong className="text-bendito-primary font-display">
							Bendito
						</strong>
						, donde cada postre es una obra de arte creada con amor y los
						ingredientes más frescos. Nuestros pasteles artesanales están hechos
						a mano con técnicas tradicionales y un toque moderno.
					</p>
					<p className="text-sm sm:text-base md:text-lg text-bendito-text/80">
						Descubre nuestra selección de tortas, cupcakes, galletas y más
						delicias que endulzarán tus momentos especiales.
					</p>
				</div>

				{/* Botón al Menú - Responsive */}
				<Link
					href="/catalogo"
					className="btn-primary inline-block py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg w-full sm:w-auto"
				>
					Ver Nuestro Catálogo
				</Link>

				{/* Información de Contacto - Responsive */}
				<div className="mt-12 sm:mt-16 text-center">
					<p className="text-bendito-text/70 mb-2 text-sm sm:text-base">
						Próximamente disponible
					</p>
					<p className="text-xs sm:text-sm text-bendito-text/60">
						Mientras tanto, puedes ver nuestro catálogo completo haciendo clic
						arriba
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
