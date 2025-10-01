// Tipo para contenido multiidioma
export interface MultiLangText {
	es: string;
	ca: string;
	en: string;
}

// Tipo para arrays multiidioma
export interface MultiLangArray {
	es: string[];
	ca: string[];
	en: string[];
}

export interface Producto {
	id: string;
	nombre: string | MultiLangText; // Compatible con ambos formatos
	descripcion: string | MultiLangText; // Compatible con ambos formatos
	precio: number;
	categoria: string;
	imagen: string;
	ingredientes?: string[] | MultiLangArray; // Compatible con ambos formatos
	alergenos?: string[] | MultiLangArray; // Compatible con ambos formatos
	disponible: boolean;
	destacado?: boolean;
	orden?: number;
}

export interface Categoria {
	id: string;
	nombre: MultiLangText;
	descripcion: MultiLangText;
	icono: string;
	color: string;
	orden: number;
}

export interface CatalogoData {
	categorias: Categoria[];
	productos: Producto[];
}
