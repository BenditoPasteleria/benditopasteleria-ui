import { useParams } from 'next/navigation';
import { getMessages } from '@/messages';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Producto } from '@/types/catalogo';
import {
	getTranslatedText,
	getTranslatedArray,
	type Locale,
} from '@/lib/translations';
import ProductSchema from '@/components/seo/ProductSchema';
import { useOrder } from '@/lib/OrderContext';

interface ProductModalProps {
	producto: Producto | null;
	products: Producto[];
	currentIndex: number;
	isOpen: boolean;
	onClose: () => void;
	onProductChange: (newIndex: number) => void;
	onHacerPedido?: (producto: Producto) => void;
}

const ProductModal = ({
	producto,
	products,
	currentIndex,
	isOpen,
	onClose,
	onProductChange,
	onHacerPedido,
}: ProductModalProps) => {
	const params = useParams<{ lang: string }>();
	const lang = (params?.lang || 'es') as Locale;
	const t = getMessages(lang);
	const [isVisible, setIsVisible] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const { addToOrder } = useOrder();
	const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
	const [isIngredientsExpanded, setIsIngredientsExpanded] = useState(false);
	const [isAllergensExpanded, setIsAllergensExpanded] = useState(false);

	// Estados para detección de swipe
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const [touchEnd, setTouchEnd] = useState<number | null>(null);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [isImageLoading, setIsImageLoading] = useState(true);

	// Umbral mínimo para considerar un swipe válido (en píxeles)
	const minSwipeDistance = 50;

	// Asegurar que solo ejecutamos código del cliente después de la hidratación
	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		if (!isMounted) return;

		if (isOpen) {
			setIsVisible(true);
			// Guardar el valor original del overflow
			const originalOverflow = document.body.style.overflow;
			document.body.style.overflow = 'hidden';
			// Resetear estados de expansión al cambiar de producto
			setIsDescriptionExpanded(false);
			setIsIngredientsExpanded(false);
			setIsAllergensExpanded(false);
			// Marcar imagen como cargando cuando cambia el producto
			setIsImageLoading(true);

			return () => {
				// Restaurar el valor original
				document.body.style.overflow = originalOverflow;
			};
		} else {
			setIsVisible(false);
			document.body.style.overflow = '';
		}
	}, [isOpen, producto?.id, isMounted]);

	// Handler para cuando la imagen termine de cargar
	const handleImageLoad = useCallback(() => {
		setIsImageLoading(false);
	}, []);

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	// Función para navegar a un producto específico con transición
	const handleNavigateToProduct = useCallback(
		(newIndex: number) => {
			if (newIndex >= 0 && newIndex < products.length && !isTransitioning) {
				// Ocultar imagen inmediatamente y comenzar transición
				setIsImageLoading(true);
				setIsTransitioning(true);
				// Pequeño delay para permitir la transición visual
				setTimeout(() => {
					onProductChange(newIndex);
					setIsTransitioning(false);
					// La imagen se mostrará cuando onLoad se dispare
				}, 150);
			}
		},
		[products.length, onProductChange, isTransitioning],
	);

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			} else if (e.key === 'ArrowLeft' && currentIndex > 0) {
				e.preventDefault();
				handleNavigateToProduct(currentIndex - 1);
			} else if (e.key === 'ArrowRight' && currentIndex < products.length - 1) {
				e.preventDefault();
				handleNavigateToProduct(currentIndex + 1);
			}
		},
		[onClose, currentIndex, products.length, handleNavigateToProduct],
	);

	// Handlers para detección de swipe
	const onTouchStart = useCallback((e: React.TouchEvent) => {
		setTouchEnd(null);
		setTouchStart(e.targetTouches[0].clientX);
	}, []);

	const onTouchMove = useCallback((e: React.TouchEvent) => {
		setTouchEnd(e.targetTouches[0].clientX);
	}, []);

	const onTouchEnd = useCallback(() => {
		if (!touchStart || !touchEnd) return;

		const distance = touchStart - touchEnd;
		const isLeftSwipe = distance > minSwipeDistance;
		const isRightSwipe = distance < -minSwipeDistance;

		if (isLeftSwipe && currentIndex < products.length - 1) {
			// Swipe izquierda: siguiente producto
			handleNavigateToProduct(currentIndex + 1);
		} else if (isRightSwipe && currentIndex > 0) {
			// Swipe derecha: producto anterior
			handleNavigateToProduct(currentIndex - 1);
		}

		// Resetear valores
		setTouchStart(null);
		setTouchEnd(null);
	}, [
		touchStart,
		touchEnd,
		currentIndex,
		products.length,
		handleNavigateToProduct,
	]);

	useEffect(() => {
		if (!isMounted || !isOpen) return;

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, handleKeyDown, isMounted]);

	const formatearPrecio = (precio: number) => {
		return new Intl.NumberFormat('es-ES', {
			style: 'currency',
			currency: 'EUR',
		}).format(precio);
	};

	if (!isOpen || !producto) return null;

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
				isVisible ? 'opacity-100' : 'opacity-0'
			}`}
			onClick={handleBackdropClick}
		>
			{/* Backdrop */}
			<div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

			{/* Schema Markup para SEO */}
			<ProductSchema
				producto={producto}
				lang={lang}
				baseUrl="https://benditopasteleria.com"
			/>

			{/* Modal Content */}
			<div
				className={`relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-300 ${
					isVisible ? 'scale-100' : 'scale-95'
				} ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}
				onTouchStart={onTouchStart}
				onTouchMove={onTouchMove}
				onTouchEnd={onTouchEnd}
			>
				{/* Header */}
				<div className="sticky top-0 bg-white border-b border-bendito-light px-6 py-4 rounded-t-2xl z-10">
					<div className="flex items-center justify-between">
						<div className="flex-1 min-w-0">
							<h2 className="text-xl font-bold text-bendito-primary font-display truncate">
								{getTranslatedText(producto.nombre, lang)}
							</h2>
							{products.length > 1 && currentIndex >= 0 && (
								<p className="text-xs text-bendito-text/60 mt-1">
									Producto {currentIndex + 1} de {products.length}
								</p>
							)}
						</div>
						<button
							onClick={onClose}
							className="p-2 hover:bg-bendito-light rounded-full transition-colors flex-shrink-0 ml-4"
						>
							<svg
								className="w-6 h-6 text-bendito-text"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Content */}
				<div
					className={`p-6 transition-opacity duration-150 ${
						isTransitioning ? 'opacity-50' : 'opacity-100'
					}`}
				>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{/* Imagen */}
						<div className="space-y-4">
							<div className="relative h-48 sm:h-64 lg:h-80 rounded-xl overflow-hidden bg-bendito-light">
								{/* Placeholder/Skeleton mientras carga */}
								{(isImageLoading || isTransitioning) && (
									<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-bendito-light to-bendito-light/50 animate-pulse">
										<svg
											className="w-16 h-16 text-bendito-primary/30"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={1.5}
												d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
											/>
										</svg>
									</div>
								)}
								{/* Imagen del producto */}
								<Image
									key={producto.id}
									src={producto.imagen}
									alt={getTranslatedText(producto.nombre, lang)}
									fill
									className={`object-cover transition-opacity duration-300 ${
										isImageLoading || isTransitioning
											? 'opacity-0'
											: 'opacity-100'
									}`}
									sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 600px"
									priority={true}
									quality={90}
									onLoad={handleImageLoad}
									onError={() => setIsImageLoading(false)}
								/>
								{producto.destacado && (
									<div className="absolute top-4 right-4 bg-bendito-secondary text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
										{t.products.featured}
									</div>
								)}
							</div>

							{/* Precio */}
							<div className="flex justify-end items-end pt-3 border-t border-bendito-light">
								<span className="text-xl font-bold text-bendito-primary">
									{formatearPrecio(producto.precio)}
								</span>
							</div>
						</div>

						{/* Información */}
						<div className="space-y-6">
							{/* Descripción */}
							<div>
								<h3 className="text-base font-semibold text-bendito-text mb-3 font-display">
									{t.products.description}
								</h3>
								{(() => {
									const full = getTranslatedText(producto.descripcion, lang);
									const lines = full.split('\n');
									const shouldTruncate = lines.length > 3 || full.length > 200;
									const short = shouldTruncate
										? lines.slice(0, 3).join('\n') + '...'
										: full;
									return (
										<>
											<p className="text-bendito-text/80 leading-relaxed whitespace-pre-line">
												{isDescriptionExpanded ? full : short}
											</p>
											{shouldTruncate && (
												<button
													onClick={() => setIsDescriptionExpanded((v) => !v)}
													className="mt-2 text-bendito-primary text-sm font-medium underline underline-offset-4 hover:text-bendito-primary/80 transition-colors"
												>
													{isDescriptionExpanded ? 'Ver menos' : 'Ver más'}
												</button>
											)}
										</>
									);
								})()}
							</div>

							{/* Ingredientes */}
							{producto.ingredientes && (
								<div>
									<button
										onClick={() =>
											setIsIngredientsExpanded(!isIngredientsExpanded)
										}
										className="flex items-center justify-between w-full text-left mb-3 group"
									>
										<h3 className="text-base font-semibold text-bendito-text font-display">
											{t.products.ingredients}
										</h3>
										<svg
											className={`w-5 h-5 text-bendito-primary transition-transform duration-200 ${
												isIngredientsExpanded ? 'rotate-180' : ''
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
									{isIngredientsExpanded && (
										<div className="flex flex-wrap gap-2">
											{getTranslatedArray(producto.ingredientes, lang).map(
												(ingrediente, index) => (
													<span
														key={index}
														className="bg-bendito-light text-bendito-text px-3 py-1 rounded-full text-sm"
													>
														{ingrediente}
													</span>
												),
											)}
										</div>
									)}
								</div>
							)}

							{/* Alérgenos */}
							{producto.alergenos && (
								<div>
									<button
										onClick={() => setIsAllergensExpanded(!isAllergensExpanded)}
										className="flex items-center justify-between w-full text-left mb-3 group"
									>
										<h3 className="text-base font-semibold text-bendito-text font-display">
											{t.products.allergens}
										</h3>
										<svg
											className={`w-5 h-5 text-bendito-primary transition-transform duration-200 ${
												isAllergensExpanded ? 'rotate-180' : ''
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
									{isAllergensExpanded && (
										<div className="flex flex-wrap gap-2">
											{getTranslatedArray(producto.alergenos, lang).map(
												(alergeno, index) => (
													<span
														key={index}
														className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
													>
														{alergeno}
													</span>
												),
											)}
										</div>
									)}
								</div>
							)}

							{/* Botones de acción */}
							<div className="flex flex-col gap-3 pt-4">
								<button
									onClick={() => addToOrder(producto)}
									className="bg-bendito-primary/10 hover:bg-bendito-primary/20 text-bendito-primary flex-1 py-3 px-6 text-center flex items-center justify-center gap-2 rounded-lg font-medium transition-colors border-2 border-bendito-primary/30 hover:border-bendito-primary/50"
									disabled={!producto.disponible}
								>
									<svg
										className="w-4 h-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 6v6m0 0v6m0-6h6m-6 0H6"
										/>
									</svg>
									{t.catalog.addToOrder}
								</button>
								<button
									onClick={() => onHacerPedido?.(producto)}
									className="bg-green-500 hover:bg-green-600 text-white flex-1 py-3 px-6 text-center flex items-center justify-center gap-2 rounded-lg font-medium transition-colors shadow-lg"
									disabled={!producto.disponible}
								>
									<svg
										className="w-4 h-4"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
									</svg>
									{t.products.orderWhatsApp}
								</button>
							</div>

							{/* Instrucciones claras para WhatsApp */}
							<div className="mt-4">
								<div className="flex flex-col gap-2 text-sm text-bendito-text/70">
									<div className="flex items-center gap-2">
										<svg
											className="w-4 h-4 text-bendito-primary/60 flex-shrink-0"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
										</svg>
										<span className="text-xs sm:text-sm">
											{t.catalog.modalTiming}
										</span>
									</div>
									<div className="flex items-center gap-2">
										<svg
											className="w-4 h-4 text-bendito-secondary/60 flex-shrink-0"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M7 4V2c0-.6-.4-1-1-1s-1 .4-1 1v2c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2V2c0-.6-.4-1-1-1s-1 .4-1 1v2H7zm12 2H5v14h14V6zm-8 2h2v2h-2V8zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-8h2v2h-2V8zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
										</svg>
										<span className="text-xs sm:text-sm">
											{t.catalog.pickupInfo}
										</span>
									</div>
									<div className="flex items-center gap-2">
										<svg
											className="w-4 h-4 text-bendito-primary/60 flex-shrink-0"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
										</svg>
										<span className="text-xs sm:text-sm">
											{t.catalog.modalMultipleProducts}
										</span>
									</div>
								</div>
							</div>

							{/* Estado de disponibilidad */}
							{!producto.disponible && (
								<div className="text-center p-4 bg-red-50 border border-red-200 rounded-xl">
									<p className="text-red-600 font-medium">
										{t.products.notAvailable}
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
				{/* End Content */}
			</div>
		</div>
	);
};

export default ProductModal;
