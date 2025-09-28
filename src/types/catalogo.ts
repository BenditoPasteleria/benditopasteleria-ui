export interface Producto {
	id: string;
	nombre: string;
	descripcion: string;
	precio: number;
	categoria: string;
	imagen: string;
	ingredientes?: string[];
	alergenos?: string[];
	disponible: boolean;
	destacado?: boolean;
	orden?: number;
}

export interface Categoria {
	id: string;
	nombre: string;
	descripcion: string;
	icono: string;
	color: string;
	orden: number;
}

export interface CatalogoData {
	categorias: Categoria[];
	productos: Producto[];
}
