# 🧁 Plantilla para Catálogo HTML de Bendito Pastelería

## 📋 Estructura Recomendada

### 1. Página Principal del Catálogo

**Archivo:** `src/app/catalogo/page.tsx`

### 2. Componentes del Catálogo

**Carpeta:** `src/components/catalogo/`

```
src/components/catalogo/
├── ProductCard.tsx          # Tarjeta individual de producto
├── ProductGrid.tsx          # Grid de productos
├── CategoryFilter.tsx       # Filtros por categoría
├── ProductModal.tsx         # Modal de detalles del producto
└── index.ts                 # Exports centralizados
```

### 3. Datos del Catálogo

**Archivo:** `src/data/catalogo.ts`

```typescript
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
}

export interface Categoria {
	id: string;
	nombre: string;
	descripcion: string;
	icono: string;
}
```

## 🎨 Diseño Sugerido

### Layout del Catálogo

```tsx
<div className="catalogo-container">
	{/* Header con filtros */}
	<div className="filters-section">
		<CategoryFilter />
		<SearchBar />
	</div>

	{/* Grid de productos */}
	<ProductGrid productos={productos} />

	{/* Modal de producto */}
	<ProductModal />
</div>
```

### Tarjeta de Producto

```tsx
<div className="product-card">
	<img src={producto.imagen} alt={producto.nombre} />
	<h3>{producto.nombre}</h3>
	<p>{producto.descripcion}</p>
	<div className="precio">{producto.precio}€</div>
	<button>Ver Detalles</button>
</div>
```

## 🚀 Ventajas del HTML vs PDF

### ✅ Ventajas del HTML:

- **SEO optimizado** - Google puede indexar cada producto
- **Carga rápida** - Solo carga lo necesario
- **Responsive** - Se adapta a cualquier dispositivo
- **Interactivo** - Filtros, búsqueda, modales
- **Accesible** - Compatible con lectores de pantalla
- **Analytics** - Puedes trackear qué productos se ven más
- **Compartible** - Enlaces directos a productos específicos

### 📱 Funcionalidades Sugeridas:

1. **Filtros por categoría** (Tortas, Cupcakes, Galletas, etc.)
2. **Búsqueda de productos**
3. **Modal con detalles** del producto
4. **Botón de "Hacer Pedido"** por producto
5. **Lista de ingredientes** y alérgenos
6. **Precios actualizados**
7. **Estado de disponibilidad**

## 🛠️ Herramientas de Conversión

### Opción 1: Manual (Recomendada)

- Copiar contenido del PDF
- Crear estructura HTML
- Añadir imágenes de productos
- Implementar funcionalidades

### Opción 2: Automática

- Usar herramientas como `pdf2html`
- Convertir PDF a HTML
- Limpiar y optimizar código
- Añadir estilos y funcionalidades

## 📁 Archivos a Crear

1. **`src/app/catalogo/page.tsx`** - Página principal ✅
2. **`src/components/catalogo/ProductCard.tsx`** - Tarjeta de producto
3. **`src/components/catalogo/ProductGrid.tsx`** - Grid de productos
4. **`src/data/catalogo.ts`** - Datos de productos
5. **`public/images/productos/`** - Imágenes de productos

## 🎯 Próximos Pasos

1. **Analizar el PDF** actual para extraer productos
2. **Crear estructura** de datos
3. **Diseñar componentes** React
4. **Implementar funcionalidades** interactivas
5. **Optimizar** para SEO y rendimiento
6. **Probar** en diferentes dispositivos

## 💡 Ideas Adicionales

- **Galería de imágenes** para cada producto
- **Sistema de favoritos** para clientes
- **Comparador de productos**
- **Recomendaciones** basadas en categorías
- **Integración** con WhatsApp para pedidos
- **Sistema de reseñas** (futuro)

¿Te gustaría que empecemos con algún componente específico?
