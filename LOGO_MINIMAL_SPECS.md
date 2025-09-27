# 🎨 Especificaciones del Logo Minimalista

## Tamaños Recomendados

### Para la Página de Inicio (Mobile)

- **Tamaño**: 120x120px
- **Formato**: SVG
- **Uso**: Logo principal en pantallas < 640px

### Para el Header del Menú (Mobile)

- **Tamaño**: 60x60px
- **Formato**: SVG
- **Uso**: Logo en header de navegación en pantallas < 640px

## Especificaciones Técnicas

### Color

- **Color Principal**: `#004207` (Verde Bendito)
- **Fondo**: Transparente
- **Sin bordes** o efectos adicionales

### Diseño

- **Elemento**: Solo la "B" de Bendito
- **Estilo**: Minimalista y limpio
- **Proporción**: Cuadrada (1:1)
- **Grosor**: Medio (ni muy delgado ni muy grueso)

### Optimización

- **Archivo**: `logo-bendito-minimal.svg`
- **Ubicación**: `/public/logo-bendito-minimal.svg`
- **Optimizado** para web
- **Sin metadatos** innecesarios

## Tamaños de Archivo Recomendados

### Versión 120x120px (Página Principal)

```svg
<!-- Ejemplo de estructura -->
<svg width="120" height="120" viewBox="0 0 120 120">
  <!-- Tu diseño de la "B" aquí -->
</svg>
```

### Versión 60x60px (Header)

```svg
<!-- Ejemplo de estructura -->
<svg width="60" height="60" viewBox="0 0 60 60">
  <!-- Tu diseño de la "B" aquí -->
</svg>
```

## Colores de la Paleta Bendito

```css
/* Verde Principal */
#004207

/* Dorado (opcional para acentos) */
#d8ae6c

/* Verde Oscuro (para hover) */
#002a04
```

## Consejos de Diseño

1. **Simplicidad**: El logo debe ser reconocible incluso en 60x60px
2. **Legibilidad**: Debe verse bien en fondos claros y oscuros
3. **Escalabilidad**: Debe funcionar desde 40px hasta 200px
4. **Consistencia**: Debe mantener la identidad visual de Bendito

## Pruebas Recomendadas

1. **Tamaño pequeño**: ¿Se ve bien a 40x40px?
2. **Tamaño grande**: ¿Se ve bien a 200x200px?
3. **Fondo claro**: ¿Contrasta bien en fondo blanco?
4. **Fondo oscuro**: ¿Contrasta bien en fondo verde?

## Archivos a Crear

1. **`logo-bendito-minimal.svg`** - 120x120px (principal)
2. **`logo-bendito-minimal-small.svg`** - 60x60px (header) - Opcional

## Notas Importantes

- El logo se aplicará automáticamente con el color correcto
- No necesitas preocuparte por el color en el SVG
- El sistema aplicará el filtro CSS automáticamente
- Mantén el diseño simple y reconocible
