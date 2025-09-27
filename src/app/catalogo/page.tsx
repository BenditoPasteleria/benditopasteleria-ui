'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';

const CatalogoPage = () => {
	return (
		<div className="min-h-screen gradient-bg">
			{/* Header - Responsive */}
			<header className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-bendito-light">
				<div className="w-full px-3 sm:px-4 py-3 sm:py-6">
					<div className="flex items-center justify-between sm:mx-10 mx-0 min-h-[60px] sm:min-h-[70px]">
						<Link
							href="/"
							className="hover:opacity-80 transition-opacity flex-shrink-0"
						>
							{/* Logo completo en desktop, minimalista en mobile */}
							<div className="hidden sm:block mx-[-50px] my-[-20px]">
								<Logo width={250} height={180} />
							</div>
							<div className="block sm:hidden">
								<Logo variant="minimal" width={60} height={60} />
							</div>
						</Link>
						<Link
							href="/"
							className="text-bendito-primary hover:text-bendito-dark font-medium transition-colors text-xs sm:text-base flex-shrink-0 ml-2"
						>
							<span className="hidden sm:inline">← Volver al inicio</span>
							<span className="sm:hidden">← Inicio</span>
						</Link>
					</div>
				</div>
			</header>

			{/* Contenido Principal - Responsive */}
			<main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
				<div className="text-center mb-6 sm:mb-8">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-bendito-primary mb-3 sm:mb-4 font-display">
						Nuestro Catálogo
					</h1>
					<p className="text-base sm:text-lg text-bendito-text max-w-2xl mx-auto">
						Descubre nuestra selección completa de postres artesanales. Cada
						producto está hecho con ingredientes frescos y mucho amor.
					</p>
				</div>

				{/* Placeholder para el catálogo HTML */}
				<div className="card mb-6 sm:mb-8">
					<div className="text-center py-12">
						<div className="mb-6">
							<svg
								className="mx-auto h-16 w-16 text-bendito-secondary mb-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1}
									d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								/>
							</svg>
						</div>
						<h2 className="text-2xl font-semibold text-bendito-text mb-4 font-display">
							Catálogo HTML en Desarrollo
						</h2>
						<p className="text-bendito-text/70 mb-6 max-w-md mx-auto">
							Aquí se mostrará el catálogo convertido a HTML para una mejor
							experiencia de navegación y SEO.
						</p>

						{/* Botones de acción */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="/catalogo-bendito.pdf"
								download="catalogo-bendito-pasteleria.pdf"
								className="btn-primary inline-block text-center"
							>
								📄 Descargar PDF
							</a>
							<button
								onClick={() => window.open('/catalogo-bendito.pdf', '_blank')}
								className="btn-secondary"
							>
								👁️ Ver PDF
							</button>
						</div>
					</div>
				</div>

				{/* Información de Contacto - Responsive */}
				<div className="card text-center">
					<h3 className="text-lg sm:text-xl font-semibold text-bendito-text mb-3 sm:mb-4 font-display">
						¿Tienes alguna pregunta?
					</h3>
					<p className="text-sm sm:text-base text-bendito-text/70 mb-4">
						Contáctanos para hacer tu pedido o resolver cualquier duda sobre
						nuestros productos.
					</p>
					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
						<button className="btn-primary w-full sm:w-auto text-sm sm:text-base">
							Hacer Pedido
						</button>
						<button className="btn-secondary w-full sm:w-auto text-sm sm:text-base">
							Consultar Disponibilidad
						</button>
					</div>
				</div>
			</main>
		</div>
	);
};

export default CatalogoPage;
