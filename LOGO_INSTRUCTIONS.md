# 📁 Instrucciones para Logos de Bendito

## Archivos de Logo Requeridos

Para que la web funcione correctamente, necesitas colocar estos archivos en la carpeta `public/`:

### 1. Logo Completo

- **Archivo**: `logo-bendito.svg`
- **Ubicación**: `/public/logo-bendito.svg`
- **Uso**: Página de inicio (desktop) y header del menú (desktop)
- **Tamaño recomendado**: 400x120px para página principal, 150x45px para header

### 2. Logo Minimalista

- **Archivo**: `logo-bendito-minimal.svg`
- **Ubicación**: `/public/logo-bendito-minimal.svg`
- **Uso**: Página de inicio (mobile) y header del menú (mobile)
- **Tamaño recomendado**: 80x80px para página principal, 40x40px para header

## Especificaciones Técnicas

### Formato

- **Formato**: SVG (escalable)
- **Colores**: Usar la paleta de Bendito
  - Verde principal: `#004207`
  - Dorado: `#d8ae6c`
  - Fondo transparente

### Optimización

- Optimizar el SVG para web
- Remover metadatos innecesarios
- Usar paths simples para mejor rendimiento

## Responsive Design

La web automáticamente cambia entre logos según el tamaño de pantalla:

- **Desktop (≥640px)**: Logo completo
- **Mobile (<640px)**: Logo minimalista

## Estructura de Archivos

```
public/
├── logo-bendito.svg          # Logo completo
├── logo-bendito-minimal.svg  # Logo minimalista (B de Bendito)
└── menu-bendito.pdf         # PDF del menú (opcional)
```

## Rotación del Logo

El logo tiene una rotación sutil por defecto de **-2 grados** para que se vea más horizontal y menos diagonal.

### Cómo Modificar la Rotación

#### Opción 1: En el Código (Recomendado)

```tsx
// En cualquier componente donde uses el Logo
<Logo
	rotation={-5} // Cambia este valor (-45 a 45 grados)
	enableHover={true} // true = rota al hover, false = sin hover
/>
```

#### Opción 2: Valores Comunes

- **`rotation={0}`**: Sin rotación (completamente horizontal)
- **`rotation={-2}`**: Rotación sutil (por defecto)
- **`rotation={-5}`**: Rotación más pronunciada
- **`rotation={-10}`**: Rotación muy pronunciada
- **`rotation={5}`**: Rotación hacia el otro lado

#### Opción 3: Deshabilitar Rotación

```tsx
<Logo rotation={0} enableHover={false} />
```

### Ejemplos de Uso

```tsx
// Logo con rotación personalizada
<Logo
  variant="full"
  width={400}
  height={120}
  rotation={-3}
  enableHover={true}
/>

// Logo minimalista sin rotación
<Logo
  variant="minimal"
  width={80}
  height={80}
  rotation={0}
  enableHover={false}
/>
```

## Notas

- Los logos se cargan automáticamente cuando están en la ubicación correcta
- Si no encuentras los archivos, la web mostrará texto "Bendito" como fallback
- Los logos deben ser legibles en fondos claros y oscuros
- La rotación se limita entre -45 y 45 grados para evitar efectos extraños
- El efecto hover hace que el logo se enderece al pasar el mouse por encima
