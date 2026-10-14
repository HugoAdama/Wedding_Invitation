# Arquitectura del Sistema

El proyecto esta construido sobre Astro 7 y TypeScript bajo el principio de separacion de responsabilidades (Separation of Concerns).

## Estructura de Directorios

```
src/
|-- components/
|   |-- icons/        Componentes de iconos SVG nativos
|   |-- sections/     Secciones principales de la pagina
|   `-- ui/           Elementos interactivos y modulares de interfaz
|-- data/             Fuentes de datos estaticos desacoplados de la vista
|-- layouts/          Plantilla base HTML, SEO y Open Graph
|-- pages/            Enrutamiento estatico de Astro (index.astro)
|-- styles/           Tokens de diseno, animaciones y hojas de estilo desacopladas
|   |-- components/   Hojas de estilo especificas por componente
|   |-- global.css    Estilos globales, reset y utilidades
|   |-- stars.css     Efectos de cielo estrellado y animaciones
|   `-- tokens.css    Variables de color, tipografia y espaciado
|-- types/            Definicion de tipos e interfaces TypeScript
`-- utils/            Funciones utilitarias puras (fechas, portapapeles, rutas)
```

## Capas del Sistema

### 1. Capa de Datos (src/data/)
Centraliza toda la informacion del evento y los novios para evitar acoplamiento en plantillas:
- wedding.ts: Informacion general del evento, fechas y contactos.
- couple.ts: Perfiles biograficos y conexiones tematicas.
- story.ts: Hitos cronologicos del 2018 al 2027.
- schedule.ts: Cronograma e itinerario hora a hora.
- gifts.ts: Cuentas bancarias y opciones de regalo.
- hotels.ts: Alojamientos recomendados con distancias y precios.
- faq.ts: Preguntas frecuentes y respuestas.
- recommendations.ts: Recomendaciones para el clima, transporte y vestimenta.

### 2. Capa de Tipos (src/types/)
Garantiza coherencia e integridad de datos en tiempo de compilacion mediante interfaces TypeScript:
- wedding.ts: Define estructuras para novios, hitos temporales, itinerarios, hospedajes, preguntas frecuentes y regalos.

### 3. Capa de Componentes (src/components/)
- sections/: Representa cada bloque de la pagina principal (Hero, Historia, Ceremonia, Hospedaje, etc.).
- ui/: Elementos interactivos autonomos como el reloj de cuenta regresiva, modal de pase de abordaje, reproductor de musica y sobre con sello de cera.
- icons/: Iconos vectoriales limpios que sustituyen por completo cualquier uso de emojis.

### 4. Capa de Estilos (src/styles/)
Estructura modular dividida en:
- tokens.css: Variables de diseno (colores dorados, noche, crema, radios y tipografias).
- stars.css: Animaciones estelares de fondo.
- global.css: Estilos base y clases genericas (.boton, .seccion, .interior).
- components/: Hojas de estilo desacopladas correspondientes a componentes individuales.

### 5. Capa de Utilidades (src/utils/)
- countdown.ts: Calculo preciso de tiempo restante con desglose en dias, horas, minutos y segundos.
- clipboard.ts: Copiado al portapapeles con fallback para compatibilidad entre navegadores.
- paths.ts: Gestion de rutas base para despliegue en GitHub Pages.
