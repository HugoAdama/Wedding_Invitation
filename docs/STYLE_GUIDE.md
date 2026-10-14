# Guia de Estilos y CSS

Este documento define la base visual, la convencion de nomenclatura y la organizacion de hojas de estilo del proyecto.

## Tokens de Diseno (src/styles/tokens.css)

### 1. Paleta Cromatica Principal
- `--noche`: #0B1021 (Fondo principal nocturno)
- `--profundo`: #070B18 (Fondo alterno de mayor contraste)
- `--dorado`: #D4AF37 (Acento primario metalico)
- `--dorado-claro`: #F8E7B4 (Destellos y reflejos)
- `--crema`: #FDFBF7 (Texto principal y legibilidad)
- `--plata`: #CBD5E1 (Subtitulos y kickers sutiles)
- `--linea`: rgba(212, 175, 55, 0.2) (Bordes de tarjetas y divisores)

### 2. Tipografias
- `--titulo`: 'Cormorant Garamond', Georgia, serif (Titulos de seccion y nombres)
- `--cursiva`: 'Great Vibes', cursive (Detalles poeticos y dedicatorias)
- `--cuerpo`: 'Inter', -apple-system, sans-serif (Lectura general, botones y formularios)

### 3. Radios y Sombras
- `--radio-sm`: 6px
- `--radio-md`: 12px
- `--radio-lg`: 20px
- `--radio-full`: 9999px
- `--sombra-dorada`: 0 0 25px rgba(212, 175, 55, 0.15)

---

## Politica de Desacoplamiento de CSS

Para mantener la claridad de la base de codigo y facilitar el mantenimiento:

1. Estilos Globales:
   - Residen en `src/styles/global.css`, `tokens.css` y `stars.css`.
   - Se importan una unica vez desde `src/layouts/BaseLayout.astro`.

2. Estilos de Componentes Modulares:
   - Se almacenan de forma desacoplada dentro del subdirectorio `src/styles/components/`.
   - El archivo CSS adopta el nombre del componente correspondiente (por ejemplo: `CountdownClock.css`).
   - Se importa de manera explicita en el frontmatter del componente:
     ```astro
     import '../../styles/components/CountdownClock.css';
     ```

3. Nomenclatura:
   - Se utiliza la metodologia BEM (Block, Element, Modifier) simplificada:
     - Bloque: `.cuenta-grid`
     - Elemento: `.cuenta__item`, `.cuenta__num`, `.cuenta__txt`
     - Modificador: `.revelar--activo`

4. Accesibilidad y Movimiento Reducido:
   - Se respetan las preferencias del sistema mediante la media query `@media (prefers-reduced-motion: reduce)`, desactivando animaciones continuas para usuarios con sensibilidad al movimiento.
