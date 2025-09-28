import Image from 'next/image';
import { Producto } from '@/types/catalogo';

interface ProductCardProps {
	producto: Producto;
	onVerDetalles?: (producto: Producto) => void;
	onHacerPedido?: (producto: Producto) => void;
}

const ProductCard = ({
	producto,
	onVerDetalles,
	onHacerPedido,
}: ProductCardProps) => {
	const formatearPrecio = (precio: number) => {
		return new Intl.NumberFormat('es-ES', {
			style: 'currency',
			currency: 'EUR',
		}).format(precio);
	};

	return (
		<div className="card group hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
			{/* Imagen del producto */}
			<div className="relative h-48 mb-4 overflow-hidden rounded-lg">
				<Image
					src={producto.imagen}
					alt={producto.nombre}
					fill
					className="object-cover group-hover:scale-110 transition-transform duration-300"
				/>
				{producto.destacado && (
					<div className="absolute top-2 right-2 bg-bendito-secondary text-white px-2 py-1 rounded-full text-xs font-semibold">
						⭐ Destacado
					</div>
				)}
				{!producto.disponible && (
					<div className="absolute inset-0 bg-black/50 flex items-center justify-center">
						<span className="text-white font-semibold">Agotado</span>
					</div>
				)}
			</div>

			{/* Información del producto */}
			<div className="space-y-3">
				<h3 className="text-lg font-semibold text-bendito-text font-display">
					{producto.nombre}
				</h3>

				<p className="text-sm text-bendito-text/70 line-clamp-2">
					{producto.descripcion}
				</p>

				{/* Precio */}
				<div className="flex items-center justify-between mb-3">
					<span className="text-xl font-bold text-bendito-primary">
						{formatearPrecio(producto.precio)}
					</span>
				</div>

				{/* Alérgenos */}
				{producto.alergenos && producto.alergenos.length > 0 && (
					<div className="mb-3">
						<div className="text-xs text-bendito-text/60 bg-red-50 px-2 py-1 rounded">
							⚠️ {producto.alergenos.join(', ')}
						</div>
					</div>
				)}

				{/* Botones de acción */}
				<div className="flex gap-2 pt-2">
					<button
						onClick={() => onVerDetalles?.(producto)}
						className="btn-secondary flex-1 text-sm"
						disabled={!producto.disponible}
					>
						Ver Detalles
					</button>

					<button
						onClick={() => onHacerPedido?.(producto)}
						className="btn-primary flex-1 text-sm"
						disabled={!producto.disponible}
					>
						Pedir
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
