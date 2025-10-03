import { CatalogoData, Categoria, Producto } from '@/types/catalogo';

// Categorías del catálogo según datos actualizados
export const categorias: Categoria[] = [
	{
		id: 'pasteles',
		nombre: {
			es: 'Pasteles',
			ca: 'Pastissos',
			en: 'Cakes',
		},
		descripcion: {
			es: 'Bizcochuelos de vainilla o chocolate con rellenos y temáticas personalizadas',
			ca: 'Pa de pessic de vainilla o xocolata amb farcits i temàtiques personalitzades',
			en: 'Vanilla or chocolate sponge cakes with fillings and personalized themes',
		},
		icono: '🎂',
		color: 'bendito-primary',
		orden: 1,
	},
	{
		id: 'extras-pasteles',
		nombre: {
			es: 'Extras para Pasteles',
			ca: 'Extres per Pastissos',
			en: 'Cake Extras',
		},
		descripcion: {
			es: 'Macarons y efectos especiales para decorar tus pasteles',
			ca: 'Macarons i efectes especials per decorar els teus pastissos',
			en: 'Macarons and special effects to decorate your cakes',
		},
		icono: '✨',
		color: 'bendito-secondary',
		orden: 2,
	},
	{
		id: 'postres',
		nombre: {
			es: 'Postres',
			ca: 'Postres',
			en: 'Desserts',
		},
		descripcion: {
			es: 'Postres tradicionales y modernos elaborados artesanalmente',
			ca: 'Postres tradicionals i moderns elaborats artesanalment',
			en: 'Traditional and modern desserts crafted artisanally',
		},
		icono: '🍰',
		color: 'bendito-accent',
		orden: 3,
	},
	{
		id: 'alfajores',
		nombre: {
			es: 'Alfajores',
			ca: 'Alfajors',
			en: 'Alfajores',
		},
		descripcion: {
			es: 'Alfajores artesanales con diferentes sabores y rellenos',
			ca: 'Alfajors artesanals amb diferents sabors i farcits',
			en: 'Artisanal alfajores with different flavors and fillings',
		},
		icono: '🍪',
		color: 'bendito-text',
		orden: 4,
	},
	{
		id: 'cookies',
		nombre: {
			es: 'Cookies',
			ca: 'Galetes',
			en: 'Cookies',
		},
		descripcion: {
			es: 'Cookies artesanales con ingredientes naturales',
			ca: 'Galetes artesanals amb ingredients naturals',
			en: 'Artisanal cookies with natural ingredients',
		},
		icono: '🍪',
		color: 'bendito-text',
		orden: 5,
	},
	{
		id: 'cuadrados',
		nombre: {
			es: 'Cuadrados',
			ca: 'Quadrats',
			en: 'Squares',
		},
		descripcion: {
			es: 'Cuadrados dulces perfectos para compartir',
			ca: 'Quadrats dolços perfectes per compartir',
			en: 'Sweet squares perfect for sharing',
		},
		icono: '🧁',
		color: 'bendito-text',
		orden: 6,
	},
	{
		id: 'medialunas',
		nombre: {
			es: 'Medialunas',
			ca: 'Croissants',
			en: 'Croissants',
		},
		descripcion: {
			es: 'Medialunas artesanales frescas',
			ca: 'Croissants artesanals frescos',
			en: 'Fresh artisanal croissants',
		},
		icono: '🥐',
		color: 'bendito-text',
		orden: 7,
	},
	{
		id: 'macarons',
		nombre: {
			es: 'Macarons',
			ca: 'Macarons',
			en: 'Macarons',
		},
		descripcion: {
			es: 'Macarons artesanales de diferentes sabores',
			ca: 'Macarons artesanals de diferents sabors',
			en: 'Artisanal macarons with different flavors',
		},
		icono: '🍭',
		color: 'bendito-text',
		orden: 8,
	},
];

// Productos del catálogo según datos actualizados del CSV
export const productos: Producto[] = [
	// PASTELES
	{
		id: 'pastel-pequeno-12cm',
		nombre: {
			es: 'Pastel Pequeño - Diámetro 12 cm',
			ca: 'Pastís Petit - Diàmetre 12 cm',
			en: 'Small Cake - 12 cm Diameter',
		},
		descripcion: {
			es: 'Bizcochuelo: vainilla o chocolate. Relleno: dulce de leche, ganache chocolate semiamargo, ganache chocolate blanco, ganache de frutos rojos, crema oreo, chantilly + fruta. Temática: color + detalle (texto, dibujo)',
			ca: 'Pa de pessic: vainilla o xocolata. Farcit: dolç de llet, ganache xocolata semiamarg, ganache xocolata blanc, ganache de fruits vermells, crema oreo, chantilly + fruita. Temàtica: color + detall (text, dibuix)',
			en: 'Sponge cake: vanilla or chocolate. Filling: dulce de leche, semi-sweet chocolate ganache, white chocolate ganache, red fruits ganache, oreo cream, chantilly + fruit. Theme: color + detail (text, drawing)',
		},
		precio: 35,
		categoria: 'pasteles',
		imagen: '/images/productos/pastel-1.jpg',
		ingredientes: {
			es: [
				'Bizcochuelo de vainilla o chocolate',
				'Relleno a elección',
				'Temática personalizada',
			],
			ca: [
				'Pa de pessic de vainilla o xocolata',
				'Farcit a elecció',
				'Temàtica personalitzada',
			],
			en: [
				'Vanilla or chocolate sponge cake',
				'Filling of choice',
				'Personalized theme',
			],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: true,
		orden: 1,
	},
	{
		id: 'pastel-pequeno-16cm',
		nombre: {
			es: 'Pastel Pequeño - Diámetro 16 cm',
			ca: 'Pastís Petit - Diàmetre 16 cm',
			en: 'Small Cake - 16 cm Diameter',
		},
		descripcion: {
			es: 'Bizcochuelo: vainilla o chocolate. Relleno: dulce de leche, ganache chocolate semiamargo, ganache chocolate blanco, ganache de frutos rojos, crema oreo, chantilly + fruta. Temática: color + detalle (texto, dibujo)',
			ca: 'Pa de pessic: vainilla o xocolata. Farcit: dolç de llet, ganache xocolata semiamarg, ganache xocolata blanc, ganache de fruits vermells, crema oreo, chantilly + fruita. Temàtica: color + detall (text, dibuix)',
			en: 'Sponge cake: vanilla or chocolate. Filling: dulce de leche, semi-sweet chocolate ganache, white chocolate ganache, red fruits ganache, oreo cream, chantilly + fruit. Theme: color + detail (text, drawing)',
		},
		precio: 55,
		categoria: 'pasteles',
		imagen: '/images/productos/pastel-2.jpg',
		ingredientes: {
			es: [
				'Bizcochuelo de vainilla o chocolate',
				'Relleno a elección',
				'Temática personalizada',
			],
			ca: [
				'Pa de pessic de vainilla o xocolata',
				'Farcit a elecció',
				'Temàtica personalitzada',
			],
			en: [
				'Vanilla or chocolate sponge cake',
				'Filling of choice',
				'Personalized theme',
			],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 2,
	},
	{
		id: 'pastel-grande-16cm',
		nombre: {
			es: 'Pastel Grande - Diámetro 16 cm',
			ca: 'Pastís Gran - Diàmetre 16 cm',
			en: 'Large Cake - 16 cm Diameter',
		},
		descripcion: {
			es: 'Bizcochuelo: vainilla o chocolate. Relleno: dulce de leche, ganache chocolate semiamargo, ganache chocolate blanco, ganache de frutos rojos, crema oreo, chantilly + fruta. Temática: color + detalle (texto, dibujo)',
			ca: 'Pa de pessic: vainilla o xocolata. Farcit: dolç de llet, ganache xocolata semiamarg, ganache xocolata blanc, ganache de fruits vermells, crema oreo, chantilly + fruita. Temàtica: color + detall (text, dibuix)',
			en: 'Sponge cake: vanilla or chocolate. Filling: dulce de leche, semi-sweet chocolate ganache, white chocolate ganache, red fruits ganache, oreo cream, chantilly + fruit. Theme: color + detail (text, drawing)',
		},
		precio: 85,
		categoria: 'pasteles',
		imagen: '/images/productos/pastel-3.jpg',
		ingredientes: {
			es: [
				'Bizcochuelo de vainilla o chocolate',
				'Dos rellenos a elección',
				'Temática personalizada',
			],
			ca: [
				'Pa de pessic de vainilla o xocolata',
				'Dos farcits a elecció',
				'Temàtica personalitzada',
			],
			en: [
				'Vanilla or chocolate sponge cake',
				'Two fillings of choice',
				'Personalized theme',
			],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: true,
		orden: 3,
	},
	{
		id: 'pastel-grande-20cm',
		nombre: {
			es: 'Pastel Grande - Diámetro 20 cm',
			ca: 'Pastís Gran - Diàmetre 20 cm',
			en: 'Large Cake - 20 cm Diameter',
		},
		descripcion: {
			es: 'Bizcochuelo: vainilla o chocolate. Relleno: dulce de leche, ganache chocolate semiamargo, ganache chocolate blanco, ganache de frutos rojos, crema oreo, chantilly + fruta. Temática: color + detalle (texto, dibujo)',
			ca: 'Pa de pessic: vainilla o xocolata. Farcit: dolç de llet, ganache xocolata semiamarg, ganache xocolata blanc, ganache de fruits vermells, crema oreo, chantilly + fruita. Temàtica: color + detall (text, dibuix)',
			en: 'Sponge cake: vanilla or chocolate. Filling: dulce de leche, semi-sweet chocolate ganache, white chocolate ganache, red fruits ganache, oreo cream, chantilly + fruit. Theme: color + detail (text, drawing)',
		},
		precio: 100,
		categoria: 'pasteles',
		imagen: '/images/productos/pastel-4.jpg',
		ingredientes: {
			es: [
				'Bizcochuelo de vainilla o chocolate',
				'Dos rellenos a elección',
				'Temática personalizada',
			],
			ca: [
				'Pa de pessic de vainilla o xocolata',
				'Dos farcits a elecció',
				'Temàtica personalitzada',
			],
			en: [
				'Vanilla or chocolate sponge cake',
				'Two fillings of choice',
				'Personalized theme',
			],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 4,
	},

	// EXTRAS PARA PASTELES
	{
		id: 'macaron-unidad',
		nombre: {
			es: 'Macaron x unidad',
			ca: 'Macaron per unitat',
			en: 'Macaron per unit',
		},
		descripcion: {
			es: 'Macaron individual para decorar pasteles',
			ca: 'Macaron individual per decorar pastissos',
			en: 'Individual macaron to decorate cakes',
		},
		precio: 3,
		categoria: 'extras-pasteles',
		imagen: '/images/productos/pastel-macarons.jpg',
		ingredientes: {
			es: ['Almendras', 'Azúcar', 'Claras de huevo'],
			ca: ['Ametlles', 'Sucre', "Clares d'ou"],
			en: ['Almonds', 'Sugar', 'Egg whites'],
		},
		alergenos: {
			es: ['Huevos', 'Frutos secos'],
			ca: ['Ous', 'Fruits secs'],
			en: ['Eggs', 'Nuts'],
		},
		disponible: true,
		destacado: false,
		orden: 5,
	},
	{
		id: 'drip-pastel-pequeno',
		nombre: {
			es: 'DRIP pastel pequeño (efecto chorreado)',
			ca: 'DRIP pastís petit (efecte degotejat)',
			en: 'DRIP small cake (drip effect)',
		},
		descripcion: {
			es: 'Efecto chorreado para pasteles pequeños',
			ca: 'Efecte degotejat per pastissos petits',
			en: 'Drip effect for small cakes',
		},
		precio: 5,
		categoria: 'extras-pasteles',
		imagen: '/images/productos/pastel-4.jpg',
		ingredientes: {
			es: ['Chocolate', 'Colorantes'],
			ca: ['Xocolata', 'Colorants'],
			en: ['Chocolate', 'Food coloring'],
		},
		alergenos: {
			es: ['Lácteos'],
			ca: ['Làctics'],
			en: ['Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 6,
	},
	{
		id: 'drip-pastel-grande',
		nombre: {
			es: 'DRIP pastel grande (efecto chorreado)',
			ca: 'DRIP pastís gran (efecte degotejat)',
			en: 'DRIP large cake (drip effect)',
		},
		descripcion: {
			es: 'Efecto chorreado para pasteles grandes',
			ca: 'Efecte degotejat per pastissos grans',
			en: 'Drip effect for large cakes',
		},
		precio: 10,
		categoria: 'extras-pasteles',
		imagen: '/images/productos/pastel-4.jpg',
		ingredientes: {
			es: ['Chocolate', 'Colorantes'],
			ca: ['Xocolata', 'Colorants'],
			en: ['Chocolate', 'Food coloring'],
		},
		alergenos: {
			es: ['Lácteos'],
			ca: ['Làctics'],
			en: ['Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 7,
	},

	// POSTRES
	{
		id: 'rogel',
		nombre: {
			es: 'Rogel',
			ca: 'Rogel',
			en: 'Rogel',
		},
		descripcion: {
			es: 'Capas de masa fina y crocante - dulce de leche - merengue italiano',
			ca: 'Capes de massa fina i cruixent - dolç de llet - merengue italià',
			en: 'Thin crispy dough layers - dulce de leche - Italian meringue',
		},
		precio: 35,
		categoria: 'postres',
		imagen: '/images/productos/rogel.jpg',
		ingredientes: {
			es: ['Masa fina crocante', 'Dulce de leche', 'Merengue italiano'],
			ca: ['Massa fina cruixent', 'Dolç de llet', 'Merengue italià'],
			en: ['Thin crispy dough', 'Dulce de leche', 'Italian meringue'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: true,
		orden: 8,
	},
	{
		id: 'torta-nuez',
		nombre: {
			es: 'Torta de nuez',
			ca: 'Torta de nou',
			en: 'Walnut cake',
		},
		descripcion: {
			es: 'Masa soufflé de nueces - dulce de leche - crema chantilly - chocolate blanco',
			ca: 'Massa soufflé de nous - dolç de llet - crema chantilly - xocolata blanc',
			en: 'Walnut soufflé dough - dulce de leche - chantilly cream - white chocolate',
		},
		precio: 35,
		categoria: 'postres',
		imagen: '/images/productos/torta-nuez.jpeg',
		ingredientes: {
			es: [
				'Masa soufflé de nueces',
				'Dulce de leche',
				'Crema chantilly',
				'Chocolate blanco',
			],
			ca: [
				'Massa soufflé de nous',
				'Dolç de llet',
				'Crema chantilly',
				'Xocolata blanc',
			],
			en: [
				'Walnut soufflé dough',
				'Dulce de leche',
				'Chantilly cream',
				'White chocolate',
			],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos', 'Frutos secos'],
			ca: ['Gluten', 'Ous', 'Làctics', 'Fruits secs'],
			en: ['Gluten', 'Eggs', 'Dairy', 'Nuts'],
		},
		disponible: true,
		destacado: false,
		orden: 9,
	},
	{
		id: 'lemon-pie',
		nombre: {
			es: 'Lemon pie',
			ca: 'Lemon pie',
			en: 'Lemon pie',
		},
		descripcion: {
			es: 'Masa sableé - curd de limón - merengue italiano',
			ca: 'Massa sableé - curd de llimona - merengue italià',
			en: 'Sable dough - lemon curd - Italian meringue',
		},
		precio: 35,
		categoria: 'postres',
		imagen: '/images/productos/lemon-pie.jpg',
		ingredientes: {
			es: ['Masa sableé', 'Curd de limón', 'Merengue italiano'],
			ca: ['Massa sableé', 'Curd de llimona', 'Merengue italià'],
			en: ['Sable dough', 'Lemon curd', 'Italian meringue'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: true,
		orden: 10,
	},
	{
		id: 'crumble-manzana',
		nombre: {
			es: 'Crumble de manzana',
			ca: 'Crumble de poma',
			en: 'Apple crumble',
		},
		descripcion: {
			es: 'Masa sableé - relleno de manzanas caramelizadas, nueces y canela - crumble',
			ca: 'Massa sableé - farcit de pomes caramelitzades, nous i canyella - crumble',
			en: 'Sable dough - filling of caramelized apples, walnuts and cinnamon - crumble',
		},
		precio: 35,
		categoria: 'postres',
		imagen: '/images/productos/tarta-crumble-manzana.jpg',
		ingredientes: {
			es: ['Masa sableé', 'Manzanas caramelizadas', 'Nueces', 'Canela'],
			ca: ['Massa sableé', 'Pomes caramelitzades', 'Nous', 'Canyella'],
			en: ['Sable dough', 'Caramelized apples', 'Walnuts', 'Cinnamon'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos', 'Frutos secos'],
			ca: ['Gluten', 'Ous', 'Làctics', 'Fruits secs'],
			en: ['Gluten', 'Eggs', 'Dairy', 'Nuts'],
		},
		disponible: true,
		destacado: false,
		orden: 11,
	},
	{
		id: 'frutal',
		nombre: {
			es: 'Frutal',
			ca: 'Frutal',
			en: 'Fruit tart',
		},
		descripcion: {
			es: 'Masa sableé - crema pastelera - frutas de estación',
			ca: "Massa sableé - crema pastelera - fruites d'estació",
			en: 'Sable dough - pastry cream - seasonal fruits',
		},
		precio: 35,
		categoria: 'postres',
		imagen: '/images/productos/tarta-frutal.jpg',
		ingredientes: {
			es: ['Masa sableé', 'Crema pastelera', 'Frutas de estación'],
			ca: ['Massa sableé', 'Crema pastelera', "Fruites d'estació"],
			en: ['Sable dough', 'Pastry cream', 'Seasonal fruits'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 12,
	},
	{
		id: 'tarta-coco',
		nombre: {
			es: 'Tarta de coco',
			ca: 'Tarta de coco',
			en: 'Coconut tart',
		},
		descripcion: {
			es: 'Masa sableé - dulce de leche - Cubierta húmeda de coco',
			ca: 'Massa sableé - dolç de llet - Coberta humida de coco',
			en: 'Sable dough - dulce de leche - Moist coconut topping',
		},
		precio: 40,
		categoria: 'postres',
		imagen: '/images/productos/tarta-coco-dulce-leche.jpg',
		ingredientes: {
			es: ['Masa sableé', 'Dulce de leche', 'Coco'],
			ca: ['Massa sableé', 'Dolç de llet', 'Coco'],
			en: ['Sable dough', 'Dulce de leche', 'Coconut'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 13,
	},
	{
		id: 'tarta-frutillas',
		nombre: {
			es: 'Tarta de frutillas',
			ca: 'Tarta de maduixes',
			en: 'Strawberry tart',
		},
		descripcion: {
			es: 'Masa sableé - dulce de leche - crema chantilly - frutillas frescas',
			ca: 'Massa sableé - dolç de llet - crema chantilly - maduixes fresques',
			en: 'Sable dough - dulce de leche - chantilly cream - fresh strawberries',
		},
		precio: 40,
		categoria: 'postres',
		imagen: '/images/productos/tarta-frutillas.jpg',
		ingredientes: {
			es: [
				'Masa sableé',
				'Dulce de leche',
				'Crema chantilly',
				'Frutillas frescas',
			],
			ca: [
				'Massa sableé',
				'Dolç de llet',
				'Crema chantilly',
				'Maduixes fresques',
			],
			en: [
				'Sable dough',
				'Dulce de leche',
				'Chantilly cream',
				'Fresh strawberries',
			],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 14,
	},
	{
		id: 'havannet',
		nombre: {
			es: 'Havannet',
			ca: 'Havannet',
			en: 'Havannet',
		},
		descripcion: {
			es: 'Masa sableé - dulce de leche - ganache de chocolate',
			ca: 'Massa sableé - dolç de llet - ganache de xocolata',
			en: 'Sable dough - dulce de leche - chocolate ganache',
		},
		precio: 40,
		categoria: 'postres',
		imagen: '/images/productos/havannet.jpg',
		ingredientes: {
			es: ['Masa sableé', 'Dulce de leche', 'Ganache de chocolate'],
			ca: ['Massa sableé', 'Dolç de llet', 'Ganache de xocolata'],
			en: ['Sable dough', 'Dulce de leche', 'Chocolate ganache'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 15,
	},
	{
		id: 'banana-split',
		nombre: {
			es: 'Banana split',
			ca: 'Banana split',
			en: 'Banana split',
		},
		descripcion: {
			es: 'Masa sableé - dulce de leche - bananas - chocolate - crema chantilly',
			ca: 'Massa sableé - dolç de llet - plàtans - xocolata - crema chantilly',
			en: 'Sable dough - dulce de leche - bananas - chocolate - chantilly cream',
		},
		precio: 40,
		categoria: 'postres',
		imagen: '/images/productos/tarta-banana-split.jpg',
		ingredientes: {
			es: [
				'Masa sableé',
				'Dulce de leche',
				'Bananas',
				'Chocolate',
				'Crema chantilly',
			],
			ca: [
				'Massa sableé',
				'Dolç de llet',
				'Plàtans',
				'Xocolata',
				'Crema chantilly',
			],
			en: [
				'Sable dough',
				'Dulce de leche',
				'Bananas',
				'Chocolate',
				'Chantilly cream',
			],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 16,
	},
	{
		id: 'brownie',
		nombre: {
			es: 'Brownie - Rinde 12/14 porciones',
			ca: 'Brownie - Rendiment 12/14 porcions',
			en: 'Brownie - Serves 12/14 portions',
		},
		descripcion: {
			es: 'Base de brownie con/sin nueces - dulce de leche - merengue italiano',
			ca: 'Base de brownie amb/sense nous - dolç de llet - merengue italià',
			en: 'Brownie base with/without walnuts - dulce de leche - Italian meringue',
		},
		precio: 45,
		categoria: 'postres',
		imagen: '/images/productos/postre-brownie.jpg',
		ingredientes: {
			es: [
				'Brownie',
				'Dulce de leche',
				'Merengue italiano',
				'Nueces (opcional)',
			],
			ca: ['Brownie', 'Dolç de llet', 'Merengue italià', 'Nous (opcional)'],
			en: [
				'Brownie',
				'Dulce de leche',
				'Italian meringue',
				'Walnuts (optional)',
			],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos', 'Frutos secos'],
			ca: ['Gluten', 'Ous', 'Làctics', 'Fruits secs'],
			en: ['Gluten', 'Eggs', 'Dairy', 'Nuts'],
		},
		disponible: true,
		destacado: true,
		orden: 17,
	},
	{
		id: 'cheesecake-frutos-rojos',
		nombre: {
			es: 'Cheesecake clásico con frutos rojos',
			ca: 'Cheesecake clàssic amb fruits vermells',
			en: 'Classic cheesecake with red fruits',
		},
		descripcion: {
			es: 'Cheesecake clásico con frutos rojos de 24cm - Rinde 12/16 porciones',
			ca: 'Cheesecake clàssic amb fruits vermells de 24cm - Rendiment 12/16 porcions',
			en: 'Classic cheesecake with red fruits 24cm - Serves 12/16 portions',
		},
		precio: 45,
		categoria: 'postres',
		imagen: '/images/productos/cheesecake-frutos-rojos.jpg',
		ingredientes: {
			es: ['Base de galleta', 'Crema de queso', 'Frutos rojos'],
			ca: ['Base de galeta', 'Crema de formatge', 'Fruits vermells'],
			en: ['Cookie base', 'Cream cheese', 'Red fruits'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 18,
	},
	{
		id: 'cheesecake-dulce-leche',
		nombre: {
			es: 'Cheesecake de dulce de leche',
			ca: 'Cheesecake de dolç de llet',
			en: 'Dulce de leche cheesecake',
		},
		descripcion: {
			es: 'Cheesecake de dulce de leche de 24cm - Rinde 12/16 porciones',
			ca: 'Cheesecake de dolç de llet de 24cm - Rendiment 12/16 porcions',
			en: 'Dulce de leche cheesecake 24cm - Serves 12/16 portions',
		},
		precio: 45,
		categoria: 'postres',
		imagen: '/images/productos/cheesecake-dulce-leche.jpg',
		ingredientes: {
			es: ['Base de galleta', 'Crema de queso', 'Dulce de leche'],
			ca: ['Base de galeta', 'Crema de formatge', 'Dolç de llet'],
			en: ['Cookie base', 'Cream cheese', 'Dulce de leche'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 19,
	},
	{
		id: 'cheesecake-chocolate',
		nombre: {
			es: 'Cheesecake chocolate',
			ca: 'Cheesecake xocolata',
			en: 'Chocolate cheesecake',
		},
		descripcion: {
			es: 'Cheesecake de 24cm de chocolate - Rinde 12/16 porciones',
			ca: 'Cheesecake de 24cm de xocolata - Rendiment 12/16 porcions',
			en: 'Chocolate cheesecake 24cm - Serves 12/16 portions',
		},
		precio: 50,
		categoria: 'postres',
		imagen: '/images/productos/cheesecake-chocolate.jpeg',
		ingredientes: {
			es: ['Base de galleta', 'Crema de queso', 'Chocolate'],
			ca: ['Base de galeta', 'Crema de formatge', 'Xocolata'],
			en: ['Cookie base', 'Cream cheese', 'Chocolate'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 20,
	},
	{
		id: 'cheesecake-frambuesa-chocolate-blanco',
		nombre: {
			es: 'Cheesecake frambuesa y chocolate blanco',
			ca: 'Cheesecake frambuesa i xocolata blanca',
			en: 'Raspberry and white chocolate cheesecake',
		},
		descripcion: {
			es: 'Cheesecake de 24cm con frambuesa y chocolate blanco - Rinde 12/16 porciones',
			ca: 'Cheesecake de 24cm amb frambuesa i xocolata blanca - Rendiment 12/16 porcions',
			en: 'Cheesecake 24cm with raspberry and white chocolate - Serves 12/16 portions',
		},
		precio: 50,
		categoria: 'postres',
		imagen: '/images/productos/cheesecake-chocolate-blanco-frambuesas.jpeg',
		ingredientes: {
			es: [
				'Base de galleta',
				'Crema de queso',
				'Frambuesa',
				'Chocolate blanco',
			],
			ca: [
				'Base de galeta',
				'Crema de formatge',
				'Frambuesa',
				'Xocolata blanca',
			],
			en: ['Cookie base', 'Cream cheese', 'Raspberry', 'White chocolate'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 21,
	},
	{
		id: 'cheesecake-pistacho',
		nombre: {
			es: 'Cheesecake Pistacho',
			ca: 'Cheesecake Pistatxo',
			en: 'Pistachio Cheesecake',
		},
		descripcion: {
			es: 'Cheesecake de 24cm de pistacho - Rinde 12/16 porciones',
			ca: 'Cheesecake de 24cm de pistatxo - Rendiment 12/16 porcions',
			en: 'Pistachio cheesecake 24cm - Serves 12/16 portions',
		},
		precio: 50,
		categoria: 'postres',
		imagen: '/images/productos/cheesecake-pistacho.jpeg',
		ingredientes: {
			es: ['Base de galleta', 'Crema de queso', 'Pistacho'],
			ca: ['Base de galeta', 'Crema de formatge', 'Pistatxo'],
			en: ['Cookie base', 'Cream cheese', 'Pistachio'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos', 'Frutos secos'],
			ca: ['Gluten', 'Ous', 'Làctics', 'Fruits secs'],
			en: ['Gluten', 'Eggs', 'Dairy', 'Nuts'],
		},
		disponible: true,
		destacado: false,
		orden: 22,
	},

	// ALFAJORES
	{
		id: 'alfajor-maicena',
		nombre: {
			es: 'Alfajor Maicena',
			ca: 'Alfajor Maicena',
			en: 'Maicena Alfajor',
		},
		descripcion: {
			es: 'Alfajor tradicional de maicena con dulce de leche',
			ca: 'Alfajor tradicional de maicena amb dolç de llet',
			en: 'Traditional maicena alfajor with dulce de leche',
		},
		precio: 4,
		categoria: 'alfajores',
		imagen: '/images/productos/alfajores-maicena.jpg',
		ingredientes: {
			es: ['Maicena', 'Dulce de leche', 'Coco rallado'],
			ca: ['Maicena', 'Dolç de llet', 'Coco ratllat'],
			en: ['Maicena', 'Dulce de leche', 'Grated coconut'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: true,
		orden: 23,
	},
	{
		id: 'alfajor-nuez-chocolate-blanco',
		nombre: {
			es: 'Alfajor Nuez, chocolate blanco y dulce de leche',
			ca: 'Alfajor Nous, xocolata blanca i dolç de llet',
			en: 'Walnut, white chocolate and dulce de leche alfajor',
		},
		descripcion: {
			es: 'Alfajor de nuez con chocolate blanco y dulce de leche',
			ca: 'Alfajor de nous amb xocolata blanca i dolç de llet',
			en: 'Walnut alfajor with white chocolate and dulce de leche',
		},
		precio: 5,
		categoria: 'alfajores',
		imagen: '/images/productos/alfajor-nuez-chocolate-blanco.jpg',
		ingredientes: {
			es: ['Nuez', 'Chocolate blanco', 'Dulce de leche'],
			ca: ['Nous', 'Xocolata blanca', 'Dolç de llet'],
			en: ['Walnuts', 'White chocolate', 'Dulce de leche'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos', 'Frutos secos'],
			ca: ['Gluten', 'Ous', 'Làctics', 'Fruits secs'],
			en: ['Gluten', 'Eggs', 'Dairy', 'Nuts'],
		},
		disponible: true,
		destacado: false,
		orden: 24,
	},
	{
		id: 'alfajor-dulce-leche-chocolate',
		nombre: {
			es: 'Alfajor Dulce de leche y chocolate',
			ca: 'Alfajor Dolç de llet i xocolata',
			en: 'Dulce de leche and chocolate alfajor',
		},
		descripcion: {
			es: 'Alfajor de dulce de leche y chocolate',
			ca: 'Alfajor de dolç de llet i xocolata',
			en: 'Dulce de leche and chocolate alfajor',
		},
		precio: 5,
		categoria: 'alfajores',
		imagen: '/images/productos/alfajor-chocolate-dulce-leche.jpg',
		ingredientes: {
			es: ['Dulce de leche', 'Chocolate'],
			ca: ['Dolç de llet', 'Xocolata'],
			en: ['Dulce de leche', 'Chocolate'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 25,
	},
	{
		id: 'alfajor-frutos-rojos',
		nombre: {
			es: 'Alfajor Frutos rojos, dulce de leche y chocolate blanco',
			ca: 'Alfajor Fruits vermells, dolç de llet i xocolata blanca',
			en: 'Red fruits, dulce de leche and white chocolate alfajor',
		},
		descripcion: {
			es: 'Alfajor de frutos rojos con dulce de leche y chocolate blanco',
			ca: 'Alfajor de fruits vermells amb dolç de llet i xocolata blanca',
			en: 'Red fruits alfajor with dulce de leche and white chocolate',
		},
		precio: 5,
		categoria: 'alfajores',
		imagen: '/images/productos/alfajor-chocolate-dulce-leche.jpg',
		ingredientes: {
			es: ['Frutos rojos', 'Dulce de leche', 'Chocolate blanco'],
			ca: ['Fruits vermells', 'Dolç de llet', 'Xocolata blanca'],
			en: ['Red fruits', 'Dulce de leche', 'White chocolate'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 26,
	},

	// COOKIES
	{
		id: 'cookie-limon-amapolas',
		nombre: {
			es: 'Cookie Limón y amapolas',
			ca: 'Cookie Llimona i roselles',
			en: 'Lemon and poppy seeds cookie',
		},
		descripcion: {
			es: 'Cookie artesanal de limón y amapolas',
			ca: 'Cookie artesanal de llimona i roselles',
			en: 'Artisanal lemon and poppy seeds cookie',
		},
		precio: 3.5,
		categoria: 'cookies',
		imagen: '/images/productos/cookies.jpg',
		ingredientes: {
			es: ['Harina', 'Limón', 'Amapolas', 'Mantequilla'],
			ca: ['Farina', 'Llimona', 'Roselles', 'Mantega'],
			en: ['Flour', 'Lemon', 'Poppy seeds', 'Butter'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 27,
	},
	{
		id: 'cookie-avena-chips-chocolate',
		nombre: {
			es: 'Cookie Avena y chips de chocolate',
			ca: 'Cookie Civada i chips de xocolata',
			en: 'Oatmeal and chocolate chips cookie',
		},
		descripcion: {
			es: 'Cookie de avena con chips de chocolate',
			ca: 'Cookie de civada amb chips de xocolata',
			en: 'Oatmeal cookie with chocolate chips',
		},
		precio: 3.5,
		categoria: 'cookies',
		imagen: '/images/productos/cookies.jpg',
		ingredientes: {
			es: ['Avena', 'Chips de chocolate', 'Harina', 'Mantequilla'],
			ca: ['Civada', 'Chips de xocolata', 'Farina', 'Mantega'],
			en: ['Oatmeal', 'Chocolate chips', 'Flour', 'Butter'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 28,
	},
	{
		id: 'cookie-naranja-chocolate',
		nombre: {
			es: 'Cookie Naranja y chocolate',
			ca: 'Cookie Taronja i xocolata',
			en: 'Orange and chocolate cookie',
		},
		descripcion: {
			es: 'Cookie de naranja y chocolate',
			ca: 'Cookie de taronja i xocolata',
			en: 'Orange and chocolate cookie',
		},
		precio: 3.5,
		categoria: 'cookies',
		imagen: '/images/productos/cookie-naranja-chocolate.jpg',
		ingredientes: {
			es: ['Harina', 'Naranja', 'Chocolate', 'Mantequilla'],
			ca: ['Farina', 'Taronja', 'Xocolata', 'Mantega'],
			en: ['Flour', 'Orange', 'Chocolate', 'Butter'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 29,
	},
	{
		id: 'cookie-chocolate-nuez',
		nombre: {
			es: 'Cookie Chocolate y nuez',
			ca: 'Cookie Xocolata i nous',
			en: 'Chocolate and walnut cookie',
		},
		descripcion: {
			es: 'Cookie de chocolate y nuez',
			ca: 'Cookie de xocolata i nous',
			en: 'Chocolate and walnut cookie',
		},
		precio: 4.5,
		categoria: 'cookies',
		imagen: '/images/productos/cookies.jpg',
		ingredientes: {
			es: ['Harina', 'Chocolate', 'Nuez', 'Mantequilla'],
			ca: ['Farina', 'Xocolata', 'Nous', 'Mantega'],
			en: ['Flour', 'Chocolate', 'Walnuts', 'Butter'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos', 'Frutos secos'],
			ca: ['Gluten', 'Ous', 'Làctics', 'Fruits secs'],
			en: ['Gluten', 'Eggs', 'Dairy', 'Nuts'],
		},
		disponible: true,
		destacado: true,
		orden: 30,
	},
	{
		id: 'cookie-pistacho',
		nombre: {
			es: 'Cookie Pistacho',
			ca: 'Cookie Pistatxo',
			en: 'Pistachio Cookie',
		},
		descripcion: {
			es: 'Cookie de pistacho',
			ca: 'Cookie de pistatxo',
			en: 'Pistachio cookie',
		},
		precio: 4.5,
		categoria: 'cookies',
		imagen: '/images/productos/cookies.jpg',
		ingredientes: {
			es: ['Harina', 'Pistacho', 'Mantequilla'],
			ca: ['Farina', 'Pistatxo', 'Mantega'],
			en: ['Flour', 'Pistachio', 'Butter'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos', 'Frutos secos'],
			ca: ['Gluten', 'Ous', 'Làctics', 'Fruits secs'],
			en: ['Gluten', 'Eggs', 'Dairy', 'Nuts'],
		},
		disponible: true,
		destacado: false,
		orden: 31,
	},
	{
		id: 'cookie-brookie',
		nombre: {
			es: 'Cookie Brookie',
			ca: 'Cookie Brookie',
			en: 'Brookie Cookie',
		},
		descripcion: {
			es: 'Cookie brookie (brownie + cookie)',
			ca: 'Cookie brookie (brownie + cookie)',
			en: 'Brookie cookie (brownie + cookie)',
		},
		precio: 4.5,
		categoria: 'cookies',
		imagen: '/images/productos/cookie-brookie.jpg',
		ingredientes: {
			es: ['Harina', 'Chocolate', 'Mantequilla'],
			ca: ['Farina', 'Xocolata', 'Mantega'],
			en: ['Flour', 'Chocolate', 'Butter'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 32,
	},

	// CUADRADOS
	{
		id: 'cuadrado-limon-glase',
		nombre: {
			es: 'Cuadrado Limón y glase',
			ca: 'Quadrat Llimona i glaçat',
			en: 'Lemon and glaze square',
		},
		descripcion: {
			es: 'Cuadrado de limón con glaseado',
			ca: 'Quadrat de llimona amb glaçat',
			en: 'Lemon square with glaze',
		},
		precio: 4,
		categoria: 'cuadrados',
		imagen: '/images/productos/cuadrado-limon.jpg',
		ingredientes: {
			es: ['Harina', 'Limón', 'Glaseado', 'Mantequilla'],
			ca: ['Farina', 'Llimona', 'Glaçat', 'Mantega'],
			en: ['Flour', 'Lemon', 'Glaze', 'Butter'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 33,
	},
	{
		id: 'cuadrado-manzana-crumble',
		nombre: {
			es: 'Cuadrado Manzana y crumble',
			ca: 'Quadrat Poma i crumble',
			en: 'Apple and crumble square',
		},
		descripcion: {
			es: 'Cuadrado de manzana con crumble',
			ca: 'Quadrat de poma amb crumble',
			en: 'Apple square with crumble',
		},
		precio: 4,
		categoria: 'cuadrados',
		imagen: '/images/productos/cuadrado-manzana-nueces-crumble.jpg',
		ingredientes: {
			es: ['Harina', 'Manzana', 'Crumble', 'Mantequilla'],
			ca: ['Farina', 'Poma', 'Crumble', 'Mantega'],
			en: ['Flour', 'Apple', 'Crumble', 'Butter'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 34,
	},
	{
		id: 'cuadrado-coco-dulce-leche',
		nombre: {
			es: 'Cuadrado Coco y dulce de leche',
			ca: 'Quadrat Coco i dolç de llet',
			en: 'Coconut and dulce de leche square',
		},
		descripcion: {
			es: 'Cuadrado de coco y dulce de leche',
			ca: 'Quadrat de coco i dolç de llet',
			en: 'Coconut and dulce de leche square',
		},
		precio: 5,
		categoria: 'cuadrados',
		imagen: '/images/productos/cuadrado-coco-dulce-leche.jpg',
		ingredientes: {
			es: ['Harina', 'Coco', 'Dulce de leche', 'Mantequilla'],
			ca: ['Farina', 'Coco', 'Dolç de llet', 'Mantega'],
			en: ['Flour', 'Coconut', 'Dulce de leche', 'Butter'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: true,
		orden: 35,
	},
	{
		id: 'cuadrado-brownie-nueces',
		nombre: {
			es: 'Cuadrado Brownie con nueces',
			ca: 'Quadrat Brownie amb nous',
			en: 'Brownie square with walnuts',
		},
		descripcion: {
			es: 'Cuadrado de brownie con nueces',
			ca: 'Quadrat de brownie amb nous',
			en: 'Brownie square with walnuts',
		},
		precio: 5,
		categoria: 'cuadrados',
		imagen: '/images/productos/cuadrado-brownie.jpg',
		ingredientes: {
			es: ['Harina', 'Chocolate', 'Nueces', 'Mantequilla'],
			ca: ['Farina', 'Xocolata', 'Nous', 'Mantega'],
			en: ['Flour', 'Chocolate', 'Walnuts', 'Butter'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos', 'Frutos secos'],
			ca: ['Gluten', 'Ous', 'Làctics', 'Fruits secs'],
			en: ['Gluten', 'Eggs', 'Dairy', 'Nuts'],
		},
		disponible: true,
		destacado: false,
		orden: 36,
	},

	// MEDIALUNAS
	{
		id: 'medialuna-unidad',
		nombre: {
			es: 'Medialuna',
			ca: 'Croissant',
			en: 'Croissant',
		},
		descripcion: {
			es: 'Medialuna artesanal individual',
			ca: 'Croissant artesanal individual',
			en: 'Individual artisanal croissant',
		},
		precio: 2.5,
		categoria: 'medialunas',
		imagen: '/images/productos/medialunas.jpg',
		ingredientes: {
			es: ['Harina', 'Mantequilla', 'Levadura', 'Huevos', 'Azúcar'],
			ca: ['Farina', 'Mantega', 'Llevat', 'Ous', 'Sucre'],
			en: ['Flour', 'Butter', 'Yeast', 'Eggs', 'Sugar'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: false,
		orden: 37,
	},
	{
		id: 'medialunas-x6',
		nombre: {
			es: 'Medialunas x 6',
			ca: 'Croissants x 6',
			en: 'Croissants x 6',
		},
		descripcion: {
			es: 'Pack de 6 medialunas artesanales',
			ca: 'Pack de 6 croissants artesanals',
			en: 'Pack of 6 artisanal croissants',
		},
		precio: 12,
		categoria: 'medialunas',
		imagen: '/images/productos/medialunas.jpg',
		ingredientes: {
			es: ['Harina', 'Mantequilla', 'Levadura', 'Huevos', 'Azúcar'],
			ca: ['Farina', 'Mantega', 'Llevat', 'Ous', 'Sucre'],
			en: ['Flour', 'Butter', 'Yeast', 'Eggs', 'Sugar'],
		},
		alergenos: {
			es: ['Gluten', 'Huevos', 'Lácteos'],
			ca: ['Gluten', 'Ous', 'Làctics'],
			en: ['Gluten', 'Eggs', 'Dairy'],
		},
		disponible: true,
		destacado: true,
		orden: 38,
	},

	// MACARONS
	{
		id: 'macaron-unidad-individual',
		nombre: {
			es: 'Macaron',
			ca: 'Macaron',
			en: 'Macaron',
		},
		descripcion: {
			es: 'Macaron artesanal individual',
			ca: 'Macaron artesanal individual',
			en: 'Individual artisanal macaron',
		},
		precio: 3.5,
		categoria: 'macarons',
		imagen: '/images/productos/macaron-individual.jpg',
		ingredientes: {
			es: ['Almendras', 'Azúcar', 'Claras de huevo', 'Colorantes naturales'],
			ca: ['Ametlles', 'Sucre', "Clares d'ou", 'Colorants naturals'],
			en: ['Almonds', 'Sugar', 'Egg whites', 'Natural colorants'],
		},
		alergenos: {
			es: ['Huevos', 'Frutos secos'],
			ca: ['Ous', 'Fruits secs'],
			en: ['Eggs', 'Nuts'],
		},
		disponible: true,
		destacado: false,
		orden: 39,
	},
	{
		id: 'macarons-x6',
		nombre: {
			es: 'Macarons x 6',
			ca: 'Macarons x 6',
			en: 'Macarons x 6',
		},
		descripcion: {
			es: 'Pack de 6 macarons artesanales',
			ca: 'Pack de 6 macarons artesanals',
			en: 'Pack of 6 artisanal macarons',
		},
		precio: 20,
		categoria: 'macarons',
		imagen: '/images/productos/macarons.jpg',
		ingredientes: {
			es: ['Almendras', 'Azúcar', 'Claras de huevo', 'Colorantes naturales'],
			ca: ['Ametlles', 'Sucre', "Clares d'ou", 'Colorants naturals'],
			en: ['Almonds', 'Sugar', 'Egg whites', 'Natural colorants'],
		},
		alergenos: {
			es: ['Huevos', 'Frutos secos'],
			ca: ['Ous', 'Fruits secs'],
			en: ['Eggs', 'Nuts'],
		},
		disponible: true,
		destacado: true,
		orden: 40,
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

export const buscarProductos = (
	termino: string,
	idioma: 'es' | 'ca' | 'en' = 'es',
): Producto[] => {
	const terminoLower = termino.toLowerCase();
	return productos.filter((producto) => {
		const nombre =
			typeof producto.nombre === 'string'
				? producto.nombre
				: producto.nombre[idioma];
		const descripcion =
			typeof producto.descripcion === 'string'
				? producto.descripcion
				: producto.descripcion[idioma];
		return (
			nombre.toLowerCase().includes(terminoLower) ||
			descripcion.toLowerCase().includes(terminoLower)
		);
	});
};
