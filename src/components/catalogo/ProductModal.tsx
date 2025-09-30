import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Producto } from '@/types/catalogo';

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

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			onClose();
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown);
			return () => document.removeEventListener('keydown', handleKeyDown);
		}
	}, [isOpen]);

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
							{producto.nombre}
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
							<div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
								<Image
									src={producto.imagen}
									alt={producto.nombre}
									fill
									className="object-cover"
								/>
								{producto.destacado && (
									<div className="absolute top-4 right-4 bg-bendito-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
										⭐ Destacado
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
									Descripción
								</h3>
								<p className="text-bendito-text/80 leading-relaxed">
									{producto.descripcion}
								</p>
							</div>

							{/* Ingredientes */}
							{producto.ingredientes && producto.ingredientes.length > 0 && (
								<div>
									<h3 className="text-lg font-semibold text-bendito-text mb-3 font-display">
										Ingredientes
									</h3>
									<div className="flex flex-wrap gap-2">
										{producto.ingredientes.map((ingrediente, index) => (
											<span
												key={index}
												className="bg-bendito-light text-bendito-text px-3 py-1 rounded-full text-sm"
											>
												{ingrediente}
											</span>
										))}
									</div>
								</div>
							)}

							{/* Alérgenos */}
							{producto.alergenos && producto.alergenos.length > 0 && (
								<div>
									<h3 className="text-lg font-semibold text-bendito-text mb-3 font-display">
										⚠️ Alérgenos
									</h3>
									<div className="flex flex-wrap gap-2">
										{producto.alergenos.map((alergeno, index) => (
											<span
												key={index}
												className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
											>
												{alergeno}
											</span>
										))}
									</div>
								</div>
							)}

							{/* Información adicional para pasteles */}
							{producto.categoria === 'pasteles' && (
								<div className="bg-bendito-light/50 p-4 rounded-xl">
									<h3 className="text-lg font-semibold text-bendito-text mb-3 font-display">
										💡 Información Importante
									</h3>
									<ul className="space-y-2 text-sm text-bendito-text/80">
										<li>
											• Pedidos con <strong>48 horas de anticipación</strong>
										</li>
										<li>
											• Cubiertas principalmente con{' '}
											<strong>buttercream vainilla</strong>
										</li>
										<li>
											• Opción de <strong>ganache de chocolate</strong> (precio
											puede variar)
										</li>
										<li>
											• <strong>No realizamos réplicas exactas</strong> -
											creamos algo único para vos
										</li>
									</ul>
								</div>
							)}

							{/* Botones de acción */}
							<div className="flex flex-col sm:flex-row gap-3 pt-4">
								<button
									onClick={() => onHacerPedido?.(producto)}
									className="btn-primary flex-1 py-3 px-6 text-center"
									disabled={!producto.disponible}
								>
									Hacer Pedido por WhatsApp
								</button>
							</div>

							{/* Estado de disponibilidad */}
							{!producto.disponible && (
								<div className="text-center p-4 bg-red-50 border border-red-200 rounded-xl">
									<p className="text-red-600 font-medium">
										⚠️ Este producto no está disponible actualmente
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
