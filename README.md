# 🌌 Daniela & Rodrigo · Boda Bajo las Estrellas

Proyecto web de invitación de boda desarrollado en **Astro 7** con **Node 20+**, estructurado bajo una **arquitectura por división de responsabilidades (Separation of Concerns)** para máxima mantenibilidad, rendimiento y elegancia visual.

---

## 🌟 Características Principales

1. **Arquitectura por División de Responsabilidades**:
   - **Capa de Tipos (`src/types/`)**: Definición estricta de interfaces TypeScript (`wedding.ts`).
   - **Capa de Datos (`src/data/`)**: Información desacoplada de la vista (perfiles de novios, hitos cronológicos, itinerario, hoteles, código de vestimenta, mesa de regalos, FAQ, etc.).
   - **Capa de Componentes (`src/components/`)**:
     - `icons/`: Reemplazo integral de todos los emojis por componentes SVG accesibles y escalables.
     - `ui/`: Cabeceras reutilizables y utilidades visuales.
     - `sections/`: Secciones modulares e independientes (`Hero`, `Novios`, `Trivia`, `Historia`, `Ceremonia`, `Countdown`, `LaNoche`, `Galeria`, `Vestimenta`, `Hospedaje`, `Recomendaciones`, `Regalos`, `RSVP`, `FAQ`, `Contacto`, `Footer`).
   - **Capa de Layout (`src/layouts/`)**: Plantilla base con optimización SEO, Open Graph y carga de tipografías clásicas.
   - **Capa de Estilos (`src/styles/`)**: Tokens de diseño, efectos de estrellas titilantes (`stars.css`) y estilos globales (`global.css`).

2. **Sin Emojis (Iconografía 100% SVG)**:
   - Todos los emojis de la plantilla original (👰, 🤵, 💑, 📊, 🌌, 🎨, 📅, 📖, etc.) fueron reemplazados por componentes de iconos SVG optimizados.

3. **Imágenes en Formato WebP**:
   - Todas las imágenes de la boda (retratos de Daniela y Rodrigo, hitos de su historia 2018–2027, ceremonia, recepción, telescopio, vestimenta y galería) están generadas y servidas en formato `.webp` de alta fidelidad en `public/images/`.

4. **Experiencia Interactiva**:
   - **Cuenta regresiva reactiva**: Cálculo en tiempo real de días, horas, minutos y segundos hasta el 12 de junio de 2027.
   - **Formulario RSVP con WhatsApp**: Prepara y codifica el mensaje de confirmación con nombre, pases, menú y restricciones para el número oficial (`+51 999 777 666`).
   - **Preguntas Frecuentes (FAQ)**: Despliegue nativo y accesible mediante elementos `<details>` y `<summary>` con animación.
   - **Atmósfera Celestial**: Fondos oscuros con estrellas titilantes animadas por CSS y nebulosas en degradé radial.

---

## 📁 Estructura del Proyecto

```
e:/WEDDING_INVITATION/
├── astro.config.mjs               # Configuración de Astro 7
├── tsconfig.json                  # Configuración estricta de TypeScript
├── package.json                   # Dependencias y scripts con Node >= 20
├── .gitignore                     # Exclusiones de control de versiones
├── scripts/
│   └── generate-webp-assets.mjs   # Generador automatizado de assets WebP
├── public/
│   ├── favicon.svg                # Favicon celestial
│   └── images/                    # Colección completa de imágenes en formato WebP
└── src/
    ├── types/
    │   └── wedding.ts             # Interfaces TypeScript
    ├── data/
    │   ├── wedding.ts             # Metadatos globales y contacto
    │   ├── couple.ts              # Perfiles de los novios, trivia y Proust
    │   ├── story.ts               # Hitos de amor 2018 a 2027
    │   ├── schedule.ts            # Locaciones e itinerario hora por hora
    │   ├── experience.ts          # Concepto temático y telescopios
    │   ├── gallery.ts             # Datos de la galería
    │   ├── dressCode.ts           # Código de vestimenta y muestras cromáticas
    │   ├── hotels.ts              # Hospedajes recomendados
    │   ├── recommendations.ts     # Tips (abrigo, puntualidad, ubicación)
    │   ├── gifts.ts               # Lluvia de sobres, BCP, CCI, Yape y Falabella
    │   └── faq.ts                 # Preguntas frecuentes
    ├── styles/
    │   ├── tokens.css             # Paleta cromática y variables
    │   ├── stars.css              # Cielo estrellado y titilar
    │   └── global.css             # Reset, tipografías y botones
    ├── components/
    │   ├── icons/                 # Iconos SVG nativos (cero emojis)
    │   ├── ui/                    # Componentes UI reutilizables
    │   └── sections/              # Secciones modulares de la página
    ├── layouts/
    │   └── BaseLayout.astro       # Layout base con SEO y OpenGraph
    └── pages/
        └── index.astro            # Página principal orquestada
```

---

## 🚀 Requisitos y Ejecución

- **Node.js**: `v20.0.0` o superior (verificado con Node v24 en el entorno).
- **Astro**: `v7.3.8`.

### Comandos disponibles:

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev

# Generar bundle de producción
npm run build

# Previsualizar el bundle de producción
npm run preview

# Regenerar imágenes WebP
node scripts/generate-webp-assets.mjs
```
