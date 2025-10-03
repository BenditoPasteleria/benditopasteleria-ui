import { useState } from 'react';
import { useParams } from 'next/navigation';
import { getMessages } from '@/messages';
import { useOrder } from '@/lib/OrderContext';
import { getTranslatedText, type Locale } from '@/lib/translations';

const OrderSummary = () => {
	const params = useParams<{ lang: string }>();
	const lang = (params?.lang || 'es') as Locale;
	const t = getMessages(lang);
	const {
		items,
		removeFromOrder,
		updateQuantity,
		clearOrder,
		getTotalItems,
		getOrderSummary,
	} = useOrder();
	const [isExpanded, setIsExpanded] = useState(false);

	const formatearPrecio = (precio: number) => {
		return new Intl.NumberFormat('es-ES', {
			style: 'currency',
			currency: 'EUR',
		}).format(precio);
	};

	const getTotalPrice = () => {
		return items.reduce(
			(total, item) => total + item.producto.precio * item.cantidad,
			0,
		);
	};

	const handleSendOrder = () => {
		const summary = getOrderSummary();
		const whatsappUrl = `https://wa.me/674797786?text=${encodeURIComponent(summary)}`;
		window.open(whatsappUrl, '_blank');
	};

	if (items.length === 0) return null;

	return (
		<div className="fixed bottom-20 md:bottom-6 right-6 z-50">
			{/* Botón de resumen */}
			<button
				onClick={() => setIsExpanded(!isExpanded)}
				className="bg-bendito-primary hover:bg-bendito-dark text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
			>
				<svg
					className="w-5 h-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
					/>
				</svg>
				<span className="hidden sm:inline">
					{getTotalItems()} {t.catalog.totalItems}
				</span>
				<span className="sm:hidden">{getTotalItems()}</span>
			</button>

			{/* Panel expandido */}
			{isExpanded && (
				<div className="absolute bottom-full right-0 mb-4 w-80 bg-white rounded-lg shadow-xl border border-bendito-light overflow-hidden">
					{/* Header */}
					<div className="bg-bendito-primary text-white p-4">
						<div className="flex items-center justify-between">
							<h3 className="font-semibold">{t.catalog.orderSummary}</h3>
							<button
								onClick={() => setIsExpanded(false)}
								className="text-white hover:text-bendito-light transition-colors"
							>
								<svg
									className="w-5 h-5"
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

					{/* Items */}
					<div className="max-h-64 overflow-y-auto">
						{items.map((item) => (
							<div
								key={item.producto.id}
								className="p-4 border-b border-bendito-light"
							>
								<div className="flex items-center justify-between mb-2">
									<h4 className="font-medium text-bendito-text text-sm">
										{getTranslatedText(item.producto.nombre, lang)}
									</h4>
									<button
										onClick={() => removeFromOrder(item.producto.id)}
										className="text-red-500 hover:text-red-700 transition-colors"
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
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2">
										<button
											onClick={() =>
												updateQuantity(item.producto.id, item.cantidad - 1)
											}
											className="w-6 h-6 bg-bendito-light rounded-full flex items-center justify-center text-bendito-text hover:bg-bendito-gray transition-colors"
										>
											-
										</button>
										<span className="text-sm font-medium w-8 text-center">
											{item.cantidad}
										</span>
										<button
											onClick={() =>
												updateQuantity(item.producto.id, item.cantidad + 1)
											}
											className="w-6 h-6 bg-bendito-light rounded-full flex items-center justify-center text-bendito-text hover:bg-bendito-gray transition-colors"
										>
											+
										</button>
									</div>
									<span className="text-sm font-medium text-bendito-primary">
										{formatearPrecio(item.producto.precio * item.cantidad)}
									</span>
								</div>
							</div>
						))}
					</div>

					{/* Footer */}
					<div className="p-4 bg-bendito-light/30">
						<div className="flex items-center justify-between mb-3">
							<span className="font-semibold text-bendito-text">Total:</span>
							<span className="font-bold text-bendito-primary text-lg">
								{formatearPrecio(getTotalPrice())}
							</span>
						</div>
						<div className="flex flex-col gap-2">
							<button
								onClick={handleSendOrder}
								className="w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 text-sm rounded-lg transition-colors flex items-center justify-center gap-1"
							>
								<svg
									className="w-4 h-4"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
								</svg>
								{t.catalog.sendOrder}
							</button>
							<button
								onClick={clearOrder}
								className="w-full px-3 py-2 text-sm text-bendito-text/70 border border-bendito-light rounded-lg hover:bg-bendito-light transition-colors"
							>
								{t.catalog.clearOrder}
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default OrderSummary;
