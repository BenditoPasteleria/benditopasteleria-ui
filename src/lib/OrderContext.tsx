import { createContext, useContext, useState, ReactNode } from 'react';
import { Producto } from '@/types/catalogo';

interface OrderItem {
	producto: Producto;
	cantidad: number;
}

interface OrderContextType {
	items: OrderItem[];
	addToOrder: (producto: Producto) => void;
	removeFromOrder: (productoId: string) => void;
	updateQuantity: (productoId: string, cantidad: number) => void;
	clearOrder: () => void;
	getTotalItems: () => number;
	getOrderSummary: () => string;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
	const [items, setItems] = useState<OrderItem[]>([]);

	const addToOrder = (producto: Producto) => {
		setItems((prev) => {
			const existingItem = prev.find(
				(item) => item.producto.id === producto.id,
			);
			if (existingItem) {
				return prev.map((item) =>
					item.producto.id === producto.id
						? { ...item, cantidad: item.cantidad + 1 }
						: item,
				);
			}
			return [...prev, { producto, cantidad: 1 }];
		});
	};

	const removeFromOrder = (productoId: string) => {
		setItems((prev) => prev.filter((item) => item.producto.id !== productoId));
	};

	const updateQuantity = (productoId: string, cantidad: number) => {
		if (cantidad <= 0) {
			removeFromOrder(productoId);
			return;
		}
		setItems((prev) =>
			prev.map((item) =>
				item.producto.id === productoId ? { ...item, cantidad } : item,
			),
		);
	};

	const clearOrder = () => {
		setItems([]);
	};

	const getTotalItems = () => {
		return items.reduce((total, item) => total + item.cantidad, 0);
	};

	const getOrderSummary = () => {
		if (items.length === 0) return '';

		const summary = items
			.map((item) => {
				const nombre =
					typeof item.producto.nombre === 'string'
						? item.producto.nombre
						: item.producto.nombre.es;
				return `${item.cantidad}x ${nombre}`;
			})
			.join('\n');

		return `🍰 Pedido:\n${summary}\n\n📱 Enviado desde benditopasteleria.com`;
	};

	return (
		<OrderContext.Provider
			value={{
				items,
				addToOrder,
				removeFromOrder,
				updateQuantity,
				clearOrder,
				getTotalItems,
				getOrderSummary,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};

export const useOrder = () => {
	const context = useContext(OrderContext);
	if (context === undefined) {
		throw new Error('useOrder must be used within an OrderProvider');
	}
	return context;
};
