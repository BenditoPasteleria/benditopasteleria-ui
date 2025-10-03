import { Producto } from '@/types/catalogo';
import ProductCard from './ProductCard';
import { useParams } from 'next/navigation';
import { getMessages } from '@/messages';

interface ProductGridProps {
	productos: Producto[];
	onVerDetalles?: (producto: Producto) => void;
	loading?: boolean;
}

const ProductGrid = ({
	productos,
	onVerDetalles,
	loading = false,
}: ProductGridProps) => {
	const params = useParams<{ lang: string }>();
	const lang = params?.lang || 'es';
	const t = getMessages(lang);
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
					{t.catalog.noResults}
				</h3>
				<p className="text-bendito-text/70 mb-4">
					{t.catalog.noResultsSuggestion}
				</p>
				<a
					href="https://wa.me/674797786"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
				>
					<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
						<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
					</svg>
					{t.catalog.consultAvailability}
				</a>
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
				/>
			))}
		</div>
	);
};

export default ProductGrid;
