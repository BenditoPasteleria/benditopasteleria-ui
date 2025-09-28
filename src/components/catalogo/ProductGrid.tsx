import { Producto } from '@/types/catalogo';
import ProductCard from './ProductCard';

interface ProductGridProps {
	productos: Producto[];
	onVerDetalles?: (producto: Producto) => void;
	onHacerPedido?: (producto: Producto) => void;
	loading?: boolean;
}

const ProductGrid = ({
	productos,
	onVerDetalles,
	onHacerPedido,
	loading = false,
}: ProductGridProps) => {
	if (loading) {
		return (
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{Array.from({ length: 8 }).map((_, index) => (
					<div key={index} className="card animate-pulse">
						<div className="h-48 bg-bendito-gray rounded-lg mb-4"></div>
						<div className="space-y-3">
							<div className="h-4 bg-bendito-gray rounded w-3/4"></div>
							<div className="h-3 bg-bendito-gray rounded w-full"></div>
							<div className="h-3 bg-bendito-gray rounded w-2/3"></div>
							<div className="h-8 bg-bendito-gray rounded"></div>
						</div>
					</div>
				))}
			</div>
		);
	}

	if (productos.length === 0) {
		return (
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
							d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						/>
					</svg>
				</div>
				<h3 className="text-xl font-semibold text-bendito-text mb-2 font-display">
					No se encontraron productos
				</h3>
				<p className="text-bendito-text/70">
					Intenta ajustar los filtros o la búsqueda
				</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{productos.map((producto) => (
				<ProductCard
					key={producto.id}
					producto={producto}
					onVerDetalles={onVerDetalles}
					onHacerPedido={onHacerPedido}
				/>
			))}
		</div>
	);
};

export default ProductGrid;
