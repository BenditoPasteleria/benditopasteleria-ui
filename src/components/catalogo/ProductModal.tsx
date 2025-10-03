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

interface ProductModalProps {
	producto: Producto | null;
	isOpen: boolean;
	onClose: () => void;
	onHacerPedido?: (producto: Producto) => void;
}

const ProductModal = ({
	producto,
	isOpen,
	onClose,
	onHacerPedido,
}: ProductModalProps) => {
	const params = useParams<{ lang: string }>();
	const lang = (params?.lang || 'es') as Locale;
	const t = getMessages(lang);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setIsVisible(true);
			document.body.style.overflow = 'hidden';
		} else {
			setIsVisible(false);
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		},
		[onClose],
	);

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown);
			return () => document.removeEventListener('keydown', handleKeyDown);
		}
	}, [isOpen, handleKeyDown]);

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
				}`}
			>
				{/* Header */}
				<div className="sticky top-0 bg-white border-b border-bendito-light px-6 py-4 rounded-t-2xl">
					<div className="flex items-center justify-between">
						<h2 className="text-2xl font-bold text-bendito-primary font-display">
							{getTranslatedText(producto.nombre, lang)}
						</h2>
						<button
							onClick={onClose}
							className="p-2 hover:bg-bendito-light rounded-full transition-colors"
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
				<div className="p-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{/* Imagen */}
						<div className="space-y-4">
							<div className="relative h-48 sm:h-64 lg:h-80 rounded-xl overflow-hidden">
								<Image
									src={producto.imagen}
									alt={getTranslatedText(producto.nombre, lang)}
									fill
									className="object-cover"
									sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 600px"
									priority={true}
									quality={90}
								/>
								{producto.destacado && (
									<div className="absolute top-4 right-4 bg-bendito-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
										{t.products.featured}
									</div>
								)}
							</div>

							{/* Precio */}
							<div className="text-center lg:text-left">
								<span className="text-3xl font-bold text-bendito-primary">
									{formatearPrecio(producto.precio)}
								</span>
							</div>
						</div>

						{/* Información */}
						<div className="space-y-6">
							{/* Descripción */}
							<div>
								<h3 className="text-lg font-semibold text-bendito-text mb-3 font-display">
									{t.products.description}
								</h3>
								<p className="text-bendito-text/80 leading-relaxed">
									{getTranslatedText(producto.descripcion, lang)}
								</p>
							</div>

							{/* Ingredientes */}
							{producto.ingredientes && (
								<div>
									<h3 className="text-lg font-semibold text-bendito-text mb-3 font-display">
										{t.products.ingredients}
									</h3>
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
								</div>
							)}

							{/* Alérgenos */}
							{producto.alergenos && (
								<div>
									<h3 className="text-lg font-semibold text-bendito-text mb-3 font-display">
										{t.products.allergens}
									</h3>
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
								</div>
							)}

							{/* Información adicional para pasteles */}
							{producto.categoria === 'pasteles' && (
								<div className="bg-bendito-light/50 p-4 rounded-xl">
									<h3 className="text-lg font-semibold text-bendito-text mb-3 font-display">
										{t.products.importantInfo}
									</h3>
									<ul className="space-y-2 text-sm text-bendito-text/80">
										<li>• {t.products.orderAdvance}</li>
										<li>• {t.products.buttercream}</li>
										<li>• {t.products.chocolateGanache}</li>
										<li>• {t.products.noReplicas}</li>
									</ul>
								</div>
							)}

							{/* Botones de acción */}
							<div className="flex flex-col sm:flex-row gap-3 pt-4">
								<button
									onClick={() => onHacerPedido?.(producto)}
									className="btn-primary flex-1 py-3 px-6 text-center flex items-center justify-center gap-2"
									disabled={!producto.disponible}
								>
									<svg
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
									</svg>
									{t.products.orderWhatsApp}
								</button>
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
			</div>
		</div>
	);
};

export default ProductModal;
