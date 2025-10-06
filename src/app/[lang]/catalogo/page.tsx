'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Logo from '@/components/Logo';
import ProductGrid from '@/components/catalogo/ProductGrid';
import CategoryFilter from '@/components/catalogo/CategoryFilter';
import SearchBar from '@/components/catalogo/SearchBar';
import OurPhilosophy from '@/components/catalogo/OurPhilosophy';
import VisualTutorial from '@/components/catalogo/VisualTutorial';
import ProductModal from '@/components/catalogo/ProductModal';
import MobileStickyBar from '@/components/catalogo/MobileStickyBar';
import OrderSummary from '@/components/catalogo/OrderSummary';
import WhatsAppButton from '@/components/WhatsAppButton';
import { OrderProvider } from '@/lib/OrderContext';
import { getMessages } from '@/messages';
import { catalogoData, getProductosPorCategoria } from '@/data/catalogo';
import { Producto } from '@/types/catalogo';
import { getTranslatedText, type Locale } from '@/lib/translations';
import CatalogSchema from '@/components/seo/CatalogSchema';

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
		<OrderProvider>
			<div className="min-h-screen gradient-bg">
				{/* Schema Markup para SEO */}
				<CatalogSchema
					lang={lang as Locale}
					baseUrl="https://benditopasteleria.com"
				/>

				{/* Header Minimalista */}
				<header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-bendito-light/30">
					<div className="w-full px-3 sm:px-4 py-2 sm:py-4">
						<div className="flex items-center justify-between sm:mx-10 mx-0 min-h-[50px] sm:min-h-[60px]">
							<Link
								href={`/${lang}`}
								className="hover:opacity-80 transition-opacity flex-shrink-0"
							>
								{/* Logo más pequeño y minimalista */}
								<div className="hidden sm:block mx-[-30px] my-[-15px]">
									<Logo width={200} height={140} />
								</div>
								<div className="block sm:hidden">
									<Logo variant="minimal" width={50} height={50} />
								</div>
							</Link>

							{/* Botón de WhatsApp en desktop */}
							<div className="hidden md:block">
								<WhatsAppButton variant="header" />
							</div>

							<Link
								href={`/${lang}`}
								className="text-bendito-text/60 hover:text-bendito-primary font-medium transition-colors text-xs flex-shrink-0 ml-2"
							>
								← {t.navigation.backToHomeMobile}
							</Link>
						</div>
					</div>
				</header>

				{/* Contenido Principal - Minimalista */}
				<main className="max-w-7xl mx-auto px-4 py-3 sm:py-6 pb-20 md:pb-8">
					{/* Título minimalista */}
					<div className="text-center mb-3 sm:mb-6">
						<h1 className="text-xl sm:text-3xl font-bold text-bendito-primary mb-1 sm:mb-2 font-display">
							{t.catalog.title}
						</h1>
					</div>

					{/* Mensaje esencial - Solo lo más importante */}
					<div className="text-center mb-3 sm:mb-4">
						<div className="bg-gradient-to-r from-bendito-primary/5 to-bendito-secondary/5 rounded-lg p-3 max-w-2xl mx-auto">
							<p className="text-sm text-bendito-text font-medium">
								🍰 Pasteles personalizados • 48h antelación • Pedidos por
								WhatsApp
							</p>
						</div>
					</div>

					{/* Tutorial Visual desplegable */}
					<VisualTutorial />

					{/* Barra de Búsqueda compacta */}
					<div className="mb-3 sm:mb-4">
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

					{/* Contador minimalista - Solo si hay filtros activos */}
					{(categoriaActiva || terminoBusqueda) && (
						<div className="mb-2 sm:mb-3">
							<p className="text-xs text-bendito-text/60 text-center">
								{productosFiltrados.length}{' '}
								{productosFiltrados.length === 1 ? 'producto' : 'productos'}
								{categoriaActiva && (
									<>
										{' '}
										en{' '}
										{getTranslatedText(
											catalogoData.categorias.find(
												(c) => c.id === categoriaActiva,
											)?.nombre || { es: '', ca: '', en: '' },
											lang as Locale,
										)}
									</>
								)}
								{terminoBusqueda && <> para &quot;{terminoBusqueda}&quot;</>}
							</p>
						</div>
					)}

					{/* Grid de Productos */}
					<ProductGrid
						productos={productosFiltrados}
						onVerDetalles={handleVerDetalles}
					/>

					{/* Nuestra Filosofía - Más compacta */}
					<div className="mt-6 mb-4 sm:mt-8 sm:mb-6">
						<OurPhilosophy />
					</div>

					{/* Sección de Contacto Minimalista */}
					<div className="text-center mb-6 mt-8">
						<div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto">
							<h3 className="text-sm font-semibold text-bendito-text mb-2 font-display">
								{t.catalog.haveQuestions}
							</h3>
							<div className="flex flex-col sm:flex-row gap-2 justify-center">
								<a
									href="https://wa.me/674797786"
									target="_blank"
									rel="noopener noreferrer"
									className="btn-primary text-xs sm:text-sm flex items-center justify-center gap-2"
								>
									<span className="w-6 h-6 rounded-full bg-bendito-secondary flex items-center justify-center">
										<svg
											className="w-3.5 h-3.5 text-bendito-primary"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
										</svg>
									</span>
									WhatsApp
								</a>
								<a
									href="/catalogo-bendito.pdf"
									download="catalogo-bendito-pasteleria.pdf"
									className="btn-secondary text-xs sm:text-sm flex items-center justify-center gap-2"
								>
									<span className="w-6 h-6 rounded-full bg-bendito-secondary flex items-center justify-center">
										<svg
											className="w-3.5 h-3.5 text-bendito-primary"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
										</svg>
									</span>
									Catálogo PDF
								</a>
							</div>
							<p className="text-xs text-bendito-text/60 mt-2">
								Carrer de Tavern, 23, Barcelona
							</p>
						</div>
					</div>
				</main>

				{/* Modal de Detalles del Producto */}
				<ProductModal
					producto={productoSeleccionado}
					isOpen={!!productoSeleccionado}
					onClose={handleCerrarModal}
					onHacerPedido={handleHacerPedido}
				/>

				{/* Barra Sticky en Mobile */}
				<MobileStickyBar
					searchValue={terminoBusqueda}
					onSearchChange={setTerminoBusqueda}
				/>

				{/* Resumen del Pedido */}
				<OrderSummary />
			</div>
		</OrderProvider>
	);
};

export default CatalogoPage;
