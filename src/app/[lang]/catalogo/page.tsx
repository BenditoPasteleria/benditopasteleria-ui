'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Logo from '@/components/Logo';
import ProductGrid from '@/components/catalogo/ProductGrid';
import CategoryFilter from '@/components/catalogo/CategoryFilter';
import SearchBar from '@/components/catalogo/SearchBar';
import IntroSection from '@/components/catalogo/IntroSection';
import ProductModal from '@/components/catalogo/ProductModal';
import { getMessages } from '@/messages';
import { catalogoData, getProductosPorCategoria } from '@/data/catalogo';
import { Producto } from '@/types/catalogo';
import { getTranslatedText, type Locale } from '@/lib/translations';

const CatalogoPage = () => {
	const params = useParams<{ lang: string }>();
	const lang = params?.lang || 'es';
	const t = getMessages(lang);
	const [categoriaActiva, setCategoriaActiva] = useState<string | null>(null);
	const [terminoBusqueda, setTerminoBusqueda] = useState('');
	const [productoSeleccionado, setProductoSeleccionado] =
		useState<Producto | null>(null);

	// Filtrar productos según categoría y búsqueda
	const productosFiltrados = useMemo(() => {
		let productos = catalogoData.productos;

		// Filtrar por categoría
		if (categoriaActiva) {
			productos = getProductosPorCategoria(categoriaActiva);
		}

		// Filtrar por búsqueda (sobre los productos ya filtrados por categoría)
		if (terminoBusqueda.trim()) {
			productos = productos.filter((producto) => {
				const terminoLower = terminoBusqueda.toLowerCase();
				const nombre =
					typeof producto.nombre === 'string'
						? producto.nombre
						: producto.nombre[lang as 'es' | 'ca' | 'en'];
				const descripcion =
					typeof producto.descripcion === 'string'
						? producto.descripcion
						: producto.descripcion[lang as 'es' | 'ca' | 'en'];
				return (
					nombre.toLowerCase().includes(terminoLower) ||
					descripcion.toLowerCase().includes(terminoLower)
				);
			});
		}

		return productos;
	}, [categoriaActiva, terminoBusqueda, lang]);

	const handleVerDetalles = (producto: Producto) => {
		setProductoSeleccionado(producto);
	};

	const handleHacerPedido = (producto: Producto) => {
		const nombre = getTranslatedText(producto.nombre, lang as Locale);
		const descripcion = getTranslatedText(producto.descripcion, lang as Locale);
		const mensaje = `Hola! Me interesa pedir: ${nombre} - ${descripcion}`;
		const whatsappUrl = `https://wa.me/674797786?text=${encodeURIComponent(mensaje)}`;
		window.open(whatsappUrl, '_blank');
	};

	const handleCerrarModal = () => {
		setProductoSeleccionado(null);
	};

	return (
		<div className="min-h-screen gradient-bg">
			{/* Header - Responsive */}
			<header className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-bendito-light">
				<div className="w-full px-3 sm:px-4 py-3 sm:py-6">
					<div className="flex items-center justify-between sm:mx-10 mx-0 min-h-[60px] sm:min-h-[70px]">
						<Link
							href={`/${lang}`}
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
							href={`/${lang}`}
							className="text-bendito-primary hover:text-bendito-dark font-medium transition-colors text-xs sm:text-base flex-shrink-0 ml-2"
						>
							<span className="hidden sm:inline">
								{t.navigation.backToHome}
							</span>
							<span className="sm:hidden">{t.navigation.backToHomeMobile}</span>
						</Link>
					</div>
				</div>
			</header>

			{/* Contenido Principal - Responsive */}
			<main className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
				{/* Título y Descripción */}
				<div className="text-center mb-8 sm:mb-12">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-bendito-primary mb-3 sm:mb-4 font-display">
						{t.catalog.title}
					</h1>
					<p className="text-base sm:text-lg text-bendito-text max-w-2xl mx-auto">
						{t.catalog.description}
					</p>
				</div>

				{/* Sección de Introducción y Filosofía */}
				<IntroSection />

				{/* Sección de Contacto y Consultas */}
				<div className="card text-center mb-8">
					<h3 className="text-lg sm:text-xl font-semibold text-bendito-text mb-3 sm:mb-4 font-display">
						{t.catalog.haveQuestions}
					</h3>
					<p className="text-sm sm:text-base text-bendito-text/70 mb-4">
						{t.catalog.contactDescription}
					</p>
					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
						<a
							href="https://wa.me/674797786"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-primary w-full sm:w-auto text-sm sm:text-base flex items-center justify-center gap-2"
						>
							<svg
								className="w-4 h-4 text-white"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
							</svg>
							{t.home.contactWhatsApp}
						</a>
						<a
							href="/catalogo-bendito.pdf"
							download="catalogo-bendito-pasteleria.pdf"
							className="btn-secondary w-full sm:w-auto text-sm sm:text-base"
						>
							{t.catalog.downloadCatalog}
						</a>
					</div>
				</div>

				{/* Barra de Búsqueda */}
				<div className="mb-8">
					<SearchBar
						valor={terminoBusqueda}
						onCambio={setTerminoBusqueda}
						placeholder={t.catalog.searchPlaceholder}
					/>
				</div>

				{/* Filtros de Categoría */}
				<CategoryFilter
					categorias={catalogoData.categorias}
					categoriaActiva={categoriaActiva}
					onCategoriaChange={setCategoriaActiva}
				/>

				{/* Contador de resultados */}
				<div className="mb-6">
					<p className="text-sm text-bendito-text/70">
						{productosFiltrados.length}{' '}
						{productosFiltrados.length === 1
							? t.catalog.productFound
							: t.catalog.productsFound}{' '}
						{categoriaActiva && (
							<>
								{' '}
								{t.catalog.inCategory}{' '}
								{getTranslatedText(
									catalogoData.categorias.find((c) => c.id === categoriaActiva)
										?.nombre || { es: '', ca: '', en: '' },
									lang as Locale,
								)}
							</>
						)}
						{terminoBusqueda && (
							<>
								{' '}
								{t.catalog.forTerm} &quot;{terminoBusqueda}&quot;
							</>
						)}
					</p>
				</div>

				{/* Grid de Productos */}
				<ProductGrid
					productos={productosFiltrados}
					onVerDetalles={handleVerDetalles}
					onHacerPedido={handleHacerPedido}
				/>
			</main>

			{/* Modal de Detalles del Producto */}
			<ProductModal
				producto={productoSeleccionado}
				isOpen={!!productoSeleccionado}
				onClose={handleCerrarModal}
				onHacerPedido={handleHacerPedido}
			/>
		</div>
	);
};

export default CatalogoPage;
