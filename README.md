# Daniela & Rodrigo · Boda Bajo las Estrellas

Proyecto web de invitacion de boda desarrollado en **Astro 7** con **Node 20+** y **TypeScript**, estructurado bajo una **arquitectura por division de responsabilidades (Separation of Concerns)** para maxima mantenibilidad, rendimiento y elegancia visual.

---

## Caracteristicas Principales

1. **Arquitectura por Division de Responsabilidades**:
   - **Capa de Tipos (`src/types/`)**: Definicion estricta de interfaces TypeScript (`wedding.ts`).
   - **Capa de Datos (`src/data/`)**: Informacion desacoplada de la vista (perfiles de novios, hitos cronologicos, itinerario, hoteles, codigo de vestimenta, mesa de regalos, FAQ, etc.).
   - **Capa de Componentes (`src/components/`)**:
     - `icons/`: Iconos SVG accesibles y escalables (politica de cero emojis).
     - `ui/`: Componentes interactivos modulares (`CountdownClock`, `WaxSealEnvelope`, `MusicPlayer`, `BoardingPassModal`, `GiftCard`, etc.).
     - `sections/`: Secciones orquestadas de la invitacion (`Hero`, `Novios`, `Historia`, `Ceremonia`, `LaNoche`, `Galeria`, `Vestimenta`, `Hospedaje`, `Regalos`, `RSVP`, `FAQ`, `Footer`).
   - **Capa de Layout (`src/layouts/`)**: Plantilla base con optimizacion SEO, Open Graph y carga de tipografias clasicas.
   - **Capa de Estilos (`src/styles/`)**: Tokens de diseno (`tokens.css`), cielo estrellado (`stars.css`), estilos globales (`global.css`) y estilos modulares desacoplados en `components/`.
   - **Capa de Utilidades (`src/utils/`)**: Funciones puras para cuenta regresiva (`countdown.ts`), portapapeles (`clipboard.ts`) y normalizacion de rutas base (`paths.ts`).

2. **Sin Emojis (Iconografia 100% SVG)**:
   - Toda la interfaz utiliza componentes vectoriales SVG nativos y escalables, sin utilizar emojis ni caracteres dependientes de plataforma.

3. **Imagenes Optimizadas en Formato WebP**:
   - Todas las imagenes (retratos, hitos de la historia 2018-2027, ceremonia, recepcion, vestimenta y galeria) estan optimizadas en formato `.webp` de alta fidelidad dentro de `public/images/`.

4. **Experiencia Interactiva**:
   - **Sobre digital nupcial con sello de cera**: Apertura inmersiva con dispersion de particulas en Canvas 2D y persistencia de sesion.
   - **Cuenta regresiva reactiva**: Calculo dinamico y seguro en TypeScript de dias, horas, minutos y segundos hasta el 12 de junio de 2027.
   - **Musica ambiental sintetizada**: Reproductor flotante con diseno de vinilo que utiliza la Web Audio API (cero dependencias de archivos de audio externos).
   - **Formulario RSVP con WhatsApp**: Formato automatico de mensajes con comensales, menu y restricciones para confirmacion directa.
   - **Mesa de regalos con copiado rapido**: Copiado de cuentas bancarias y CCI al portapapeles con confirmacion visual.
   - **Galeria con Lightbox**: Visualizacion inmersiva de imagenes a pantalla completa.

---

## Estructura del Proyecto

```
e:/WEDDING_INVITATION/
|-- astro.config.mjs               # Configuracion de Astro 7 (base: /Wedding_Invitation)
|-- tsconfig.json                  # Configuracion estricta de TypeScript
|-- package.json                   # Dependencias y scripts
|-- .gitignore                     # Exclusiones de control de versiones
|-- docs/                          # Documentacion tecnica integral sin emojis
|   |-- README.md                  # Indice general de la documentacion
|   |-- ARCHITECTURE.md            # Arquitectura por capas y flujo de datos
|   |-- COMPONENTS.md              # Catalogo de componentes UI y secciones
|   |-- STYLE_GUIDE.md             # Guia de diseno, tokens y convenciones CSS
|   |-- DEPLOYMENT.md              # Guia de compilacion y despliegue en GitHub Pages
|   `-- APRENDIZAJES.md            # Lecciones aprendidas y soluciones de ingenieria
|-- scripts/
|   `-- generate-webp-assets.mjs   # Generador automatizado de assets WebP
|-- public/
|   |-- favicon.svg                # Favicon celestial
|   `-- images/                    # Coleccion completa de imagenes en formato WebP
`-- src/
    |-- types/
    |   `-- wedding.ts             # Interfaces TypeScript
    |-- data/
    |   |-- wedding.ts             # Metadatos globales y contacto
    |   |-- couple.ts              # Perfiles de los novios
    |   |-- story.ts               # Hitos cronologicos 2018 a 2027
    |   |-- schedule.ts            # Locaciones e itinerario
    |   |-- experience.ts          # Concepto tematico y telescopios
    |   |-- gallery.ts             # Datos de la galeria fotografica
    |   |-- dressCode.ts           # Codigo de vestimenta y muestras cromaticas
    |   |-- hotels.ts              # Hospedajes recomendados en Arequipa
    |   |-- recommendations.ts     # Tips (clima, puntualidad, transporte)
    |   |-- gifts.ts               # Cuentas bancarias y opciones de regalo
    |   `-- faq.ts                 # Preguntas frecuentes
    |-- styles/
    |   |-- tokens.css             # Paleta cromatica y variables de diseno
    |   |-- stars.css              # Cielo estrellado y animaciones cosmicas
    |   |-- global.css             # Reset, tipografias, botones y layout
    |   `-- components/            # Hojas de estilo desacopladas de componentes
    |       `-- CountdownClock.css # Estilos desacoplados del reloj de cuenta regresiva
    |-- utils/
    |   |-- countdown.ts           # Calculo de tiempo restante
    |   |-- clipboard.ts           # Copiado al portapapeles
    |   `-- paths.ts               # Rutas relativas seguras con withBase
    |-- components/
    |   |-- icons/                 # Iconos SVG nativos (cero emojis)
    |   |-- ui/                    # Componentes UI reutilizables
    |   `-- sections/              # Secciones modulares de la pagina
    |-- layouts/
    |   `-- BaseLayout.astro       # Layout base con SEO, Google Fonts y OpenGraph
    `-- pages/
        `-- index.astro            # Pagina principal orquestada
```

---

## Documentacion Detallada

Para consultar la documentacion especializada, revise los archivos en la carpeta `docs/`:

- [docs/README.md](docs/README.md): Indice y reglas del proyecto.
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md): Diagrama y explicacion de capas del sistema.
- [docs/COMPONENTS.md](docs/COMPONENTS.md): Catalogo interactivo de componentes y secciones.
- [docs/STYLE_GUIDE.md](docs/STYLE_GUIDE.md): Tokens y metodologia de estilos desacoplados.
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md): Procedimiento de compilacion y publicacion.
- [docs/APRENDIZAJES.md](docs/APRENDIZAJES.md): Decisiones de desarrollo, lecciones y patrones.

---

## Requisitos y Ejecucion

- **Node.js**: `v20.0.0` o superior.
- **Astro**: `v7.3.8`.

### Comandos disponibles:

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev

# Generar bundle de produccion
npm run build

# Previsualizar el bundle de produccion localmente
npm run preview

# Regenerar imagenes WebP
node scripts/generate-webp-assets.mjs
```
