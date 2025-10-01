import { useParams } from 'next/navigation';
import { getMessages } from '@/messages';
import Image from 'next/image';
import { Producto } from '@/types/catalogo';
import {
	getTranslatedText,
	getTranslatedArray,
	type Locale,
} from '@/lib/translations';

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
	const params = useParams<{ lang: string }>();
	const lang = (params?.lang || 'es') as Locale;
	const t = getMessages(lang);
	const formatearPrecio = (precio: number) => {
		return new Intl.NumberFormat('es-ES', {
			style: 'currency',
			currency: 'EUR',
		}).format(precio);
	};

	return (
		<div
			className="card group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
			onClick={() => onVerDetalles?.(producto)}
		>
			{/* Imagen del producto */}
			<div className="relative h-48 sm:h-52 md:h-48 mb-4 overflow-hidden rounded-lg">
				<Image
					src={producto.imagen}
					alt={getTranslatedText(producto.nombre, lang)}
					fill
					className="object-cover group-hover:scale-110 transition-transform duration-300"
					sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
					quality={85}
				/>
				{producto.destacado && (
					<div className="absolute top-2 right-2 bg-bendito-secondary text-white px-2 py-1 rounded-full text-xs font-semibold">
						{t.products.featured}
					</div>
				)}
				{!producto.disponible && (
					<div className="absolute inset-0 bg-black/50 flex items-center justify-center">
						<span className="text-white font-semibold">
							{t.products.outOfStock}
						</span>
					</div>
				)}
			</div>

			{/* Información del producto */}
			<div className="space-y-3">
				<h3 className="text-lg font-semibold text-bendito-text font-display">
					{getTranslatedText(producto.nombre, lang)}
				</h3>

				<p className="text-sm text-bendito-text/70 line-clamp-2">
					{getTranslatedText(producto.descripcion, lang)}
				</p>

				{/* Precio */}
				<div className="flex items-center justify-between mb-3">
					<span className="text-xl font-bold text-bendito-primary">
						{formatearPrecio(producto.precio)}
					</span>
				</div>

				{/* Alérgenos */}
				{producto.alergenos && (
					<div className="mb-3">
						<div className="text-xs text-bendito-text/60 bg-red-50 px-2 py-1 rounded">
							⚠️ {getTranslatedArray(producto.alergenos, lang).join(', ')}
						</div>
					</div>
				)}

				{/* Botones de acción */}
				<div className="flex gap-2 pt-2">
					<button
						onClick={(e) => {
							e.stopPropagation();
							onVerDetalles?.(producto);
						}}
						className="btn-secondary flex-1 text-sm"
						disabled={!producto.disponible}
					>
						{t.products.viewDetails}
					</button>

					<button
						onClick={(e) => {
							e.stopPropagation();
							onHacerPedido?.(producto);
						}}
						className="btn-primary flex-1 text-sm"
						disabled={!producto.disponible}
					>
						{t.products.order}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
