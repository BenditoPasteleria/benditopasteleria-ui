import { CatalogoData, Categoria, Producto } from '@/types/catalogo';

// Categorías del catálogo según PDF real
export const categorias: Categoria[] = [
	{
		id: 'pasteles-pequenos',
		nombre: 'Pasteles Pequeños',
		descripcion: 'Pasteles de 10cm a 18cm, perfectos para ocasiones íntimas',
		icono: '🎂',
		color: 'bendito-primary',
		orden: 1,
	},
	{
		id: 'pasteles-grandes',
		nombre: 'Pasteles Grandes',
		descripcion: 'Pasteles de 15cm a 22cm, ideales para celebraciones',
		icono: '🎂',
		color: 'bendito-secondary',
		orden: 2,
	},
	{
		id: 'postres',
		nombre: 'Postres',
		descripcion: 'Postres tradicionales y modernos elaborados artesanalmente',
		icono: '🍰',
		color: 'bendito-accent',
		orden: 3,
	},
	{
		id: 'mas-productos',
		nombre: 'Más Productos',
		descripcion: 'Cuadrados, alfajores, cookies y delicias especiales',
		icono: '🍪',
		color: 'bendito-text',
		orden: 4,
	},
];

// Productos del catálogo según PDF real
export const productos: Producto[] = [
	// PASTELES PEQUEÑOS
	{
		id: 'pastel-pequeno-10cm',
		nombre: 'Pastel Pequeño 10cm',
		descripcion: 'Dos bizcochuelos, un relleno. Perfecto para 2 porciones',
		precio: 4, // 2€ x 2 porciones
		categoria: 'pasteles-pequenos',
		imagen: '/images/productos/pastel-pequeno.jpg',
		ingredientes: ['Bizcochuelo de vainilla o chocolate', 'Relleno a elección'],
		alergenos: ['Gluten', 'Huevos', 'Lácteos'],
		disponible: true,
		destacado: false,
		orden: 1,
	},
	{
		id: 'pastel-pequeno-12cm',
		nombre: 'Pastel Pequeño 12cm',
		descripcion: 'Dos bizcochuelos, un relleno. Ideal para 4 porciones',
		precio: 8, // 2€ x 4 porciones
		categoria: 'pasteles-pequenos',
		imagen: '/images/productos/pastel-pequeno.jpg',
		ingredientes: ['Bizcochuelo de vainilla o chocolate', 'Relleno a elección'],
		alergenos: ['Gluten', 'Huevos', 'Lácteos'],
		disponible: true,
		destacado: false,
		orden: 2,
	},
	{
		id: 'pastel-pequeno-15cm',
		nombre: 'Pastel Pequeño 15cm',
		descripcion: 'Dos bizcochuelos, un relleno. Para 6-8 porciones',
		precio: 16, // 2€ x 8 porciones
		categoria: 'pasteles-pequenos',
		imagen: '/images/productos/pastel-pequeno.jpg',
		ingredientes: ['Bizcochuelo de vainilla o chocolate', 'Relleno a elección'],
		alergenos: ['Gluten', 'Huevos', 'Lácteos'],
		disponible: true,
		destacado: true,
		orden: 3,
	},
	{
		id: 'pastel-pequeno-18cm',
		nombre: 'Pastel Pequeño 18cm',
		descripcion: 'Dos bizcochuelos, un relleno. Para 10-12 porciones',
		precio: 24, // 2€ x 12 porciones
		categoria: 'pasteles-pequenos',
		imagen: '/images/productos/pastel-pequeno.jpg',
		ingredientes: ['Bizcochuelo de vainilla o chocolate', 'Relleno a elección'],
		alergenos: ['Gluten', 'Huevos', 'Lácteos'],
		disponible: true,
		destacado: false,
		orden: 4,
	},

	// PASTELES GRANDES
	{
		id: 'pastel-grande-15cm',
		nombre: 'Pastel Grande 15cm',
		descripcion: 'Tres bizcochuelos, dos rellenos. Para 8-10 porciones',
		precio: 20, // 2€ x 10 porciones
		categoria: 'pasteles-grandes',
		imagen: '/images/productos/pastel-grande.jpg',
		ingredientes: [
			'Bizcochuelo de vainilla o chocolate',
			'Dos rellenos a elección',
		],
		alergenos: ['Gluten', 'Huevos', 'Lácteos'],
		disponible: true,
		destacado: false,
		orden: 5,
	},
	{
		id: 'pastel-grande-18cm',
		nombre: 'Pastel Grande 18cm',
		descripcion: 'Tres bizcochuelos, dos rellenos. Para 10-15 porciones',
		precio: 30, // 2€ x 15 porciones
		categoria: 'pasteles-grandes',
		imagen: '/images/productos/pastel-grande.jpg',
		ingredientes: [
			'Bizcochuelo de vainilla o chocolate',
			'Dos rellenos a elección',
		],
		alergenos: ['Gluten', 'Huevos', 'Lácteos'],
		disponible: true,
		destacado: true,
		orden: 6,
	},
	{
		id: 'pastel-grande-22cm',
		nombre: 'Pastel Grande 22cm',
		descripcion: 'Tres bizcochuelos, dos rellenos. Para 20-25 porciones',
		precio: 50, // 2€ x 25 porciones
		categoria: 'pasteles-grandes',
		imagen: '/images/productos/pastel-grande.jpg',
		ingredientes: [
			'Bizcochuelo de vainilla o chocolate',
			'Dos rellenos a elección',
		],
		alergenos: ['Gluten', 'Huevos', 'Lácteos'],
		disponible: true,
		destacado: false,
		orden: 7,
	},

	// POSTRES
	{
		id: 'brownie',
		nombre: 'Brownie',
		descripcion:
			'Base de brownie con/sin nueces, dulce de leche y merengue italiano',
		precio: 105,
		categoria: 'postres',
		imagen: '/images/productos/brownie.jpg',
		ingredientes: [
			'Brownie',
			'Dulce de leche',
			'Merengue italiano',
			'Nueces (opcional)',
		],
		alergenos: ['Gluten', 'Huevos', 'Lácteos', 'Frutos secos'],
		disponible: true,
		destacado: true,
		orden: 8,
	},
	{
		id: 'lemon-pie',
		nombre: 'Lemon Pie',
		descripcion: 'Masa sableé, curd de limón y merengue italiano',
		precio: 105,
		categoria: 'postres',
		imagen: '/images/productos/lemon-pie.jpg',
		ingredientes: ['Masa sableé', 'Curd de limón', 'Merengue italiano'],
		alergenos: ['Gluten', 'Huevos', 'Lácteos'],
		disponible: true,
		destacado: false,
		orden: 9,
	},
	{
		id: 'frutal',
		nombre: 'Frutal',
		descripcion: 'Masa sableé, crema pastelera y frutas de estación',
		precio: 105,
		categoria: 'postres',
		imagen: '/images/productos/frutal.jpg',
		ingredientes: ['Masa sableé', 'Crema pastelera', 'Frutas de estación'],
		alergenos: ['Gluten', 'Huevos', 'Lácteos'],
		disponible: true,
		destacado: false,
		orden: 10,
	},
	{
		id: 'tarta-coco',
		nombre: 'Tarta de Coco',
		descripcion: 'Masa sableé, dulce de leche y cubierta húmeda de coco',
		precio: 105,
		categoria: 'postres',
		imagen: '/images/productos/tarta-coco.jpg',
		ingredientes: ['Masa sableé', 'Dulce de leche', 'Coco'],
		alergenos: ['Gluten', 'Huevos', 'Lácteos'],
		disponible: true,
		destacado: false,
		orden: 11,
	},
	{
		id: 'crumble-manzana',
		nombre: 'Crumble de Manzana',
		descripcion:
			'Masa sableé, relleno de manzanas caramelizadas con nueces y canela',
		precio: 105,
		categoria: 'postres',
		imagen: '/images/productos/crumble-manzana.jpg',
		ingredientes: ['Masa sableé', 'Manzanas caramelizadas', 'Nueces', 'Canela'],
		alergenos: ['Gluten', 'Huevos', 'Lácteos', 'Frutos secos'],
		disponible: true,
		destacado: false,
		orden: 12,
	},
	{
		id: 'cheesecake',
		nombre: 'Cheesecake',
		descripcion:
			'Cheesecake con frutos rojos, dulce de leche, chocolate, pistacho o frambuesas y chocolate blanco',
		precio: 105,
		categoria: 'postres',
		imagen: '/images/productos/cheesecake.jpg',
		ingredientes: ['Base de galleta', 'Crema de queso', 'Topping a elección'],
		alergenos: ['Gluten', 'Huevos', 'Lácteos'],
		disponible: true,
		destacado: true,
		orden: 13,
	},
	{
		id: 'rogel',
		nombre: 'Rogel',
		descripcion:
			'Capas de masa fina y crocante, dulce de leche y merengue italiano',
		precio: 105,
		categoria: 'postres',
		imagen: '/images/productos/rogel.jpg',
		ingredientes: ['Masa fina crocante', 'Dulce de leche', 'Merengue italiano'],
		alergenos: ['Gluten', 'Huevos', 'Lácteos'],
		disponible: true,
		destacado: false,
		orden: 14,
	},
	{
		id: 'torta-nuez',
		nombre: 'Torta de Nuez',
		descripcion:
			'Masa soufflé de nueces, dulce de leche, crema chantilly y chocolate blanco',
		precio: 105,
		categoria: 'postres',
		imagen: '/images/productos/torta-nuez.jpg',
		ingredientes: [
			'Masa soufflé de nueces',
			'Dulce de leche',
			'Crema chantilly',
			'Chocolate blanco',
		],
		alergenos: ['Gluten', 'Huevos', 'Lácteos', 'Frutos secos'],
		disponible: true,
		destacado: false,
		orden: 15,
	},
	{
		id: 'tarta-frutillas',
		nombre: 'Tarta de Frutillas',
		descripcion:
			'Masa sableé, dulce de leche, crema chantilly y frutillas frescas',
		precio: 105,
		categoria: 'postres',
		imagen: '/images/productos/tarta-frutillas.jpg',
		ingredientes: [
			'Masa sableé',
			'Dulce de leche',
			'Crema chantilly',
			'Frutillas frescas',
		],
		alergenos: ['Gluten', 'Huevos', 'Lácteos'],
		disponible: true,
		destacado: false,
		orden: 16,
	},
	{
		id: 'carrot-cake',
		nombre: 'Carrot Cake',
		descripcion:
			'Bizcochos húmedos de zanahoria con nueces, con/sin pasas y crema de queso',
		precio: 105,
		categoria: 'postres',
		imagen: '/images/productos/carrot-cake.jpg',
		ingredientes: [
			'Bizcocho de zanahoria',
			'Nueces',
			'Pasas (opcional)',
			'Crema de queso',
		],
		alergenos: ['Gluten', 'Huevos', 'Lácteos', 'Frutos secos'],
		disponible: true,
		destacado: false,
		orden: 17,
	},
	{
		id: 'havannet',
		nombre: 'Havannet',
		descripcion: 'Masa sableé, dulce de leche y ganache de chocolate',
		precio: 105,
		categoria: 'postres',
		imagen: '/images/productos/havannet.jpg',
		ingredientes: ['Masa sableé', 'Dulce de leche', 'Ganache de chocolate'],
		alergenos: ['Gluten', 'Huevos', 'Lácteos'],
		disponible: true,
		destacado: false,
		orden: 18,
	},
	{
		id: 'banana-split',
		nombre: 'Banana Split',
		descripcion:
			'Masa sableé, dulce de leche, bananas, chocolate y crema chantilly',
		precio: 105,
		categoria: 'postres',
		imagen: '/images/productos/banana-split.jpg',
		ingredientes: [
			'Masa sableé',
			'Dulce de leche',
			'Bananas',
			'Chocolate',
			'Crema chantilly',
		],
		alergenos: ['Gluten', 'Huevos', 'Lácteos'],
		disponible: true,
		destacado: false,
		orden: 19,
	},

	// MÁS PRODUCTOS
	{
		id: 'cuadrados-brownie',
		nombre: 'Cuadrados Brownie',
		descripcion: 'Cuadrados de brownie de 6x6cm, perfectos para compartir',
		precio: 105,
		categoria: 'mas-productos',
		imagen: '/images/productos/cuadrados-brownie.jpg',
		ingredientes: ['Brownie', 'Chocolate'],
		alergenos: ['Gluten', 'Huevos', 'Lácteos'],
		disponible: true,
		destacado: false,
		orden: 20,
	},
	{
		id: 'cuadrados-coco-dulce',
		nombre: 'Cuadrados Coco y Dulce de Leche',
		descripcion: 'Cuadrados de coco y dulce de leche de 6x6cm',
		precio: 105,
		categoria: 'mas-productos',
		imagen: '/images/productos/cuadrados-coco.jpg',
		ingredientes: ['Coco', 'Dulce de leche'],
		alergenos: ['Gluten', 'Huevos', 'Lácteos'],
		disponible: true,
		destacado: false,
		orden: 21,
	},
	{
		id: 'alfajores-maicena',
		nombre: 'Alfajores de Maicena',
		descripcion: 'Alfajores tradicionales de maicena con dulce de leche',
		precio: 105,
		categoria: 'mas-productos',
		imagen: '/images/productos/alfajores-maicena.jpg',
		ingredientes: ['Maicena', 'Dulce de leche', 'Coco rallado'],
		alergenos: ['Gluten', 'Huevos', 'Lácteos'],
		disponible: true,
		destacado: true,
		orden: 22,
	},
	{
		id: 'alfajores-nuez-choco',
		nombre: 'Alfajores Nuez y Chocolate Blanco',
		descripcion: 'Alfajores de nuez con chocolate blanco',
		precio: 105,
		categoria: 'mas-productos',
		imagen: '/images/productos/alfajores-nuez.jpg',
		ingredientes: ['Nuez', 'Chocolate blanco'],
		alergenos: ['Gluten', 'Huevos', 'Lácteos', 'Frutos secos'],
		disponible: true,
		destacado: false,
		orden: 23,
	},
	{
		id: 'cookies-chocolate-nuez',
		nombre: 'Cookies Chocolate 70% y Nuez',
		descripcion: 'Cookies con chocolate 70% cacao y nueces',
		precio: 105,
		categoria: 'mas-productos',
		imagen: '/images/productos/cookies-chocolate.jpg',
		ingredientes: ['Chocolate 70%', 'Nueces', 'Harina', 'Mantequilla'],
		alergenos: ['Gluten', 'Huevos', 'Lácteos', 'Frutos secos'],
		disponible: true,
		destacado: false,
		orden: 24,
	},
	{
		id: 'macarons',
		nombre: 'Macarons',
		descripcion: 'Macarons artesanales (mínimo 8 unidades)',
		precio: 105,
		categoria: 'mas-productos',
		imagen: '/images/productos/macarons.jpg',
		ingredientes: [
			'Almendras',
			'Azúcar',
			'Claras de huevo',
			'Colorantes naturales',
		],
		alergenos: ['Huevos', 'Frutos secos'],
		disponible: true,
		destacado: true,
		orden: 25,
	},
	{
		id: 'medialunas',
		nombre: 'Medialunas',
		descripcion: 'Medialunas artesanales (mínimo 6 unidades)',
		precio: 105,
		categoria: 'mas-productos',
		imagen: '/images/productos/medialunas.jpg',
		ingredientes: ['Harina', 'Mantequilla', 'Levadura', 'Huevos', 'Azúcar'],
		alergenos: ['Gluten', 'Huevos', 'Lácteos'],
		disponible: true,
		destacado: false,
		orden: 26,
	},
];

export const catalogoData: CatalogoData = {
	categorias,
	productos,
};

// Funciones utilitarias
export const getProductosPorCategoria = (categoriaId: string): Producto[] => {
	return productos.filter((producto) => producto.categoria === categoriaId);
};

export const getProductoPorId = (id: string): Producto | undefined => {
	return productos.find((producto) => producto.id === id);
};

export const getProductosDestacados = (): Producto[] => {
	return productos.filter((producto) => producto.destacado);
};

export const buscarProductos = (termino: string): Producto[] => {
	const terminoLower = termino.toLowerCase();
	return productos.filter(
		(producto) =>
			producto.nombre.toLowerCase().includes(terminoLower) ||
			producto.descripcion.toLowerCase().includes(terminoLower),
	);
};
