// Estructura de textos para internacionalización
export interface TextTranslations {
	// Navegación
	navigation: {
		backToHome: string;
		backToHomeMobile: string;
	};

	// Página principal
	home: {
		subtitle: string;
		welcome: string;
		brandName: string;
		description: string;
		descriptionSecondary: string;
		constructionTitle: string;
		constructionDescription: string;
		viewCatalog: string;
		contactWhatsApp: string;
	};

	// Catálogo
	catalog: {
		title: string;
		description: string;
		searchPlaceholder: string;
		categories: string;
		allCategories: string;
		productsFound: string;
		productFound: string;
		inCategory: string;
		forTerm: string;
		haveQuestions: string;
		contactDescription: string;
		downloadCatalog: string;
	};

	// Filosofía
	philosophy: {
		title: string;
		mainDescription: string;
		artisanal: string;
		perfect: string;
		collaborationTitle: string;
		anticipation: {
			title: string;
			description: string;
			hours: string;
		};
		preferences: {
			title: string;
			description: string;
			allergies: string;
		};
		inspiration: {
			title: string;
			description: string;
			noReplicas: string;
		};
		decorations: {
			title: string;
			description: string;
			buttercream: string;
		};
		closing: {
			creativeFreedom: string;
			memorable: string;
		};
	};

	// Productos
	products: {
		viewDetails: string;
		order: string;
		orderWhatsApp: string;
		description: string;
		ingredients: string;
		allergens: string;
		importantInfo: string;
		orderAdvance: string;
		buttercream: string;
		chocolateGanache: string;
		noReplicas: string;
		notAvailable: string;
		featured: string;
		outOfStock: string;
	};

	// Modal
	modal: {
		close: string;
	};

	// Footer
	footer: {
		allRightsReserved: string;
	};
}

// Traducciones en español
export const esTranslations: TextTranslations = {
	navigation: {
		backToHome: '← Volver al inicio',
		backToHomeMobile: '← Inicio',
	},

	home: {
		subtitle: 'Pastelería Artesanal',
		welcome: 'Bienvenidos a',
		brandName: 'Bendito',
		description:
			', donde cada postre es una obra de arte creada con amor y los ingredientes más frescos. Nuestros pasteles artesanales están hechos a mano con técnicas tradicionales y un toque moderno.',
		descriptionSecondary:
			'Descubre nuestra selección de tortas, cupcakes, galletas y más delicias que endulzarán tus momentos especiales.',
		constructionTitle: '🚧 Sitio en Construcción',
		constructionDescription:
			'Estamos trabajando para traerte la mejor experiencia. Mientras tanto, explora nuestro catálogo completo de productos artesanales.',
		viewCatalog: '🍰 Ver Catálogo Completo',
		contactWhatsApp: 'Contactar por WhatsApp',
	},

	catalog: {
		title: 'Nuestro Catálogo',
		description:
			'Descubre nuestra selección completa de postres artesanales. Cada producto está hecho con ingredientes frescos y mucho amor.',
		searchPlaceholder: 'Buscar productos por nombre o descripción...',
		categories: 'Categorías',
		allCategories: '🍰 Todos',
		productsFound: 'productos encontrados',
		productFound: 'producto encontrado',
		inCategory: 'en',
		forTerm: 'para',
		haveQuestions: '¿Tienes alguna pregunta?',
		contactDescription:
			'Contáctanos para hacer tu pedido o resolver cualquier duda sobre nuestros productos.',
		downloadCatalog: '📄 Descargar Catálogo PDF',
	},

	philosophy: {
		title: 'Nuestra Filosofía',
		mainDescription:
			'Queremos crear un pastel único, especial y delicioso para vos. Cada uno de nuestros dulces se elabora de manera completamente artesanal, priorizando siempre ingredientes de la mejor calidad y respetando los tiempos que cada proceso necesita para que el resultado sea perfecto.',
		artisanal: 'artesanal',
		perfect: 'perfecto',
		collaborationTitle:
			'Para asegurarnos de lograrlo, necesitamos tu colaboración:',
		anticipation: {
			title: 'Anticipación',
			description:
				'Encargá tu pastel con al menos 48 horas de anticipación. Esto nos permite planificar y dedicarle el tiempo que merece.',
			hours: '48 horas de anticipación',
		},
		preferences: {
			title: 'Preferencias',
			description:
				'Contanos tus gustos y preferencias al hacer el pedido. Así evitamos sabores que no disfrutes y cuidamos cualquier alergia o restricción alimentaria.',
			allergies: 'alergia o restricción alimentaria',
		},
		inspiration: {
			title: 'Inspiración',
			description:
				'Podés compartirnos referencias e inspiraciones (como imágenes de Pinterest), pero no realizamos réplicas exactas: nos gusta crear algo único para vos.',
			noReplicas: 'no realizamos réplicas exactas',
		},
		decorations: {
			title: 'Decoraciones',
			description:
				'Nuestras cubiertas se elaboran principalmente con buttercream sabor vainilla. También podemos hacerlas con ganache de chocolate.',
			buttercream: 'buttercream sabor vainilla',
		},
		closing: {
			creativeFreedom: 'libertad creativa',
			memorable: 'memorable al primer bocado',
		},
	},

	products: {
		viewDetails: 'Ver Detalles',
		order: 'Pedir',
		orderWhatsApp: 'Hacer Pedido por WhatsApp',
		description: 'Descripción',
		ingredients: 'Ingredientes',
		allergens: '⚠️ Alérgenos',
		importantInfo: '💡 Información Importante',
		orderAdvance: 'Pedidos con 48 horas de anticipación',
		buttercream: 'buttercream vainilla',
		chocolateGanache: 'ganache de chocolate',
		noReplicas: 'No realizamos réplicas exactas',
		notAvailable: '⚠️ Este producto no está disponible actualmente',
		featured: '⭐ Destacado',
		outOfStock: 'Agotado',
	},

	modal: {
		close: 'Cerrar',
	},

	footer: {
		allRightsReserved: 'Todos los derechos reservados',
	},
};

// Traducciones en inglés
export const enTranslations: TextTranslations = {
	navigation: {
		backToHome: '← Back to home',
		backToHomeMobile: '← Home',
	},

	home: {
		subtitle: 'Artisan Bakery',
		welcome: 'Welcome to',
		brandName: 'Bendito',
		description:
			', where every dessert is a work of art created with love and the freshest ingredients. Our artisanal cakes are handmade with traditional techniques and a modern touch.',
		descriptionSecondary:
			'Discover our selection of cakes, cupcakes, cookies and more delights that will sweeten your special moments.',
		constructionTitle: '🚧 Site Under Construction',
		constructionDescription:
			'We are working to bring you the best experience. In the meantime, explore our complete catalog of artisanal products.',
		viewCatalog: '🍰 View Complete Catalog',
		contactWhatsApp: 'Contact via WhatsApp',
	},

	catalog: {
		title: 'Our Catalog',
		description:
			'Discover our complete selection of artisanal desserts. Each product is made with fresh ingredients and lots of love.',
		searchPlaceholder: 'Search products by name or description...',
		categories: 'Categories',
		allCategories: '🍰 All',
		productsFound: 'products found',
		productFound: 'product found',
		inCategory: 'in',
		forTerm: 'for',
		haveQuestions: 'Do you have any questions?',
		contactDescription:
			'Contact us to place your order or resolve any questions about our products.',
		downloadCatalog: '📄 Download Catalog PDF',
	},

	philosophy: {
		title: 'Our Philosophy',
		mainDescription:
			'We want to create a unique, special and delicious cake for you. Each of our sweets is made in a completely artisanal way, always prioritizing the best quality ingredients and respecting the time that each process needs for the result to be perfect.',
		artisanal: 'artisanal',
		perfect: 'perfect',
		collaborationTitle:
			'To ensure we achieve this, we need your collaboration:',
		anticipation: {
			title: 'Advance Notice',
			description:
				'Order your cake with at least 48 hours advance notice. This allows us to plan and dedicate the time it deserves.',
			hours: '48 hours advance notice',
		},
		preferences: {
			title: 'Preferences',
			description:
				"Tell us your tastes and preferences when placing the order. This way we avoid flavors you don't enjoy and take care of any allergies or dietary restrictions.",
			allergies: 'allergies or dietary restrictions',
		},
		inspiration: {
			title: 'Inspiration',
			description:
				"You can share references and inspirations with us (like Pinterest images), but we don't make exact replicas: we like to create something unique for you.",
			noReplicas: "we don't make exact replicas",
		},
		decorations: {
			title: 'Decorations',
			description:
				'Our coverings are made mainly with vanilla buttercream. We can also make them with chocolate ganache.',
			buttercream: 'vanilla buttercream',
		},
		closing: {
			creativeFreedom: 'creative freedom',
			memorable: 'memorable at first bite',
		},
	},

	products: {
		viewDetails: 'View Details',
		order: 'Order',
		orderWhatsApp: 'Order via WhatsApp',
		description: 'Description',
		ingredients: 'Ingredients',
		allergens: '⚠️ Allergens',
		importantInfo: '💡 Important Information',
		orderAdvance: 'Orders with 48 hours advance notice',
		buttercream: 'vanilla buttercream',
		chocolateGanache: 'chocolate ganache',
		noReplicas: "We don't make exact replicas",
		notAvailable: '⚠️ This product is not currently available',
		featured: '⭐ Featured',
		outOfStock: 'Out of Stock',
	},

	modal: {
		close: 'Close',
	},

	footer: {
		allRightsReserved: 'All rights reserved',
	},
};

// Traducciones en catalán
export const caTranslations: TextTranslations = {
	navigation: {
		backToHome: "← Tornar a l'inici",
		backToHomeMobile: '← Inici',
	},

	home: {
		subtitle: 'Pastisseria Artesanal',
		welcome: 'Benvinguts a',
		brandName: 'Bendito',
		description:
			", on cada postres és una obra d'art creada amb amor i els ingredients més frescos. Els nostres pastissos artesanals estan fets a mà amb tècniques tradicionals i un toc modern.",
		descriptionSecondary:
			'Descobreix la nostra selecció de tortes, cupcakes, galetes i més delícies que endolciràn els teus moments especials.',
		constructionTitle: '🚧 Lloc en Construcció',
		constructionDescription:
			'Estem treballant per portar-te la millor experiència. Mentrestant, explora el nostre catàleg complet de productes artesanals.',
		viewCatalog: '🍰 Veure Catàleg Complet',
		contactWhatsApp: 'Contactar per WhatsApp',
	},

	catalog: {
		title: 'El Nostre Catàleg',
		description:
			'Descobreix la nostra selecció completa de postres artesanals. Cada producte està fet amb ingredients frescos i molt amor.',
		searchPlaceholder: 'Cercar productes per nom o descripció...',
		categories: 'Categories',
		allCategories: '🍰 Tots',
		productsFound: 'productes trobats',
		productFound: 'producte trobat',
		inCategory: 'en',
		forTerm: 'per',
		haveQuestions: 'Tens alguna pregunta?',
		contactDescription:
			"Contacta'ns per fer la teva comanda o resoldre qualsevol dubte sobre els nostres productes.",
		downloadCatalog: '📄 Descarregar Catàleg PDF',
	},

	philosophy: {
		title: 'La Nostra Filosofia',
		mainDescription:
			"Volem crear un pastís únic, especial i deliciós per a tu. Cada un dels nostres dolços s'elabora de manera completament artesanal, prioritzant sempre ingredients de la millor qualitat i respectant els temps que cada procés necessita perquè el resultat sigui perfecte.",
		artisanal: 'artesanal',
		perfect: 'perfecte',
		collaborationTitle:
			'Per assegurar-nos de aconseguir-ho, necessitem la teva col·laboració:',
		anticipation: {
			title: 'Anticipació',
			description:
				"Encàrrega el teu pastís amb almenys 48 hores d'anticipació. Això ens permet planificar i dedicar-li el temps que mereix.",
			hours: "48 hores d'anticipació",
		},
		preferences: {
			title: 'Preferències',
			description:
				"Explica'ns els teus gustos i preferències en fer la comanda. Així evitem sabors que no gaudeixis i cuidem qualsevol al·lèrgia o restricció alimentària.",
			allergies: 'al·lèrgia o restricció alimentària',
		},
		inspiration: {
			title: 'Inspiració',
			description:
				'Pots compartir-nos referències i inspiracions (com imatges de Pinterest), però no fem rèpliques exactes: ens agrada crear alguna cosa única per a tu.',
			noReplicas: 'no fem rèpliques exactes',
		},
		decorations: {
			title: 'Decoracions',
			description:
				"Les nostres cobertures s'elaboren principalment amb buttercream de vainilla. També podem fer-les amb ganache de xocolata.",
			buttercream: 'buttercream de vainilla',
		},
		closing: {
			creativeFreedom: 'llibertat creativa',
			memorable: 'memorable al primer mos',
		},
	},

	products: {
		viewDetails: 'Veure Detalls',
		order: 'Comandar',
		orderWhatsApp: 'Fer Comanda per WhatsApp',
		description: 'Descripció',
		ingredients: 'Ingredients',
		allergens: '⚠️ Al·lèrgens',
		importantInfo: '💡 Informació Important',
		orderAdvance: "Comandes amb 48 hores d'anticipació",
		buttercream: 'buttercream de vainilla',
		chocolateGanache: 'ganache de xocolata',
		noReplicas: 'No fem rèpliques exactes',
		notAvailable: '⚠️ Aquest producte no està disponible actualment',
		featured: '⭐ Destacat',
		outOfStock: 'Esgotat',
	},

	modal: {
		close: 'Tancar',
	},

	footer: {
		allRightsReserved: 'Tots els drets reservats',
	},
};

// Mapa de traducciones
export const translations = {
	es: esTranslations,
	en: enTranslations,
	ca: caTranslations,
};

// Tipos de idiomas soportados
export type SupportedLanguage = keyof typeof translations;

// Función helper para obtener traducciones
export const getTranslations = (
	language: SupportedLanguage,
): TextTranslations => {
	return translations[language] || translations.es;
};
