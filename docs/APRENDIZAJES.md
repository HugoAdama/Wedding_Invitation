# Aprendizajes del Desarrollo del Proyecto

Este documento recopila las lecciones aprendidas, patrones arquitectonicos, decisiones de ingenieria y soluciones tecnicas adoptadas durante la construccion y refactorizacion de la invitacion web de boda para Daniela y Rodrigo.

---

## 1. Arquitectura y Desacoplamiento Progresivo

### El Desafio Inicial
Al inicio del proyecto, varias secciones de la pagina concentraban en un unico archivo `.astro`:
- Datos duros de los novios, itinerarios y regalos.
- Estructura HTML compleja.
- Reglas CSS de cientos de lineas.
- Logica JavaScript para temporizadores, formularios y modales.

Esto dificultaba la mantenibilidad, provocaba duplicidad de estilos y complicaba la depuracion.

### Solucion y Aprendizaje
Se aplico una estrategia de refactorizacion modular por etapas:
1. Desacoplamiento de la Capa de Datos: Extraccion de informacion estatica hacia archivos dedicados en `src/data/` respaldados por interfaces de `src/types/`. Esto permite cambiar fechas, itinerarios o numeros de cuenta sin tocar el marcado visual.
2. Modularizacion de Componentes: Descomposicion de secciones monoliticas en componentes autonomos en `src/components/ui/` (por ejemplo: `CountdownClock`, `GiftCard`, `HotelCard`, `GuestbookWall`).
3. Desacoplamiento de Estilos CSS: Extraccion de estilos de componentes hacia `src/styles/components/` manteniendo `src/components/ui/` enfocado exclusivamente en la estructura del componente.

---

## 2. Tipado Estricto con TypeScript y Clausuras en Astro

### El Problema de Estrechamiento de Tipos (Type Narrowing)
Durante el desarrollo del reloj de cuenta regresiva (`CountdownClock.astro`), se presento un error comun al interactuar con el DOM en TypeScript:
`Argument of type 'string | null' is not assignable to parameter of type 'string | number | Date'. ts(2345)`

El codigo original realizaba una comprobacion previa fuera de la funcion anidada:
```ts
const fechaDestinoStr = contenedor.getAttribute("data-fecha");
if (!fechaDestinoStr) return;

function actualizar() {
  const tiempo = calculateTimeRemaining(fechaDestinoStr); // Error: fechaDestinoStr considerado string | null
}
```

### Por Que Sucede
El analisis de flujo de control (control-flow analysis) de TypeScript no preserva el estrechamiento de tipos de variables externas a traves de limites de funciones anidadas que pueden ejecutarse de manera asincrona (como callbacks de `setInterval`). Desde la perspectiva del compilador, la variable podria haber cambiado o ser leida en un contexto diferente.

### Solucion Adoptada
Revalidar explicitamente la condicion de existencia dentro del ambito de la funcion interna:
```ts
function actualizar() {
  if (!fechaDestinoStr) return false;
  const tiempo = calculateTimeRemaining(fechaDestinoStr);
}
```
Esto garantiza tanto en tiempo de compilacion como en tiempo de ejecucion que el argumento es estrictamente de tipo `string`.

---

## 3. Sustitucion de Dependencias Externas por APIs Nativas

### Sintesis de Audio con Web Audio API
En lugar de depender de archivos pesados en formato MP3 o servidores externos con latencia y posibles problemas de CORS o derechos de autor, se implemento una clase de sintesis acustica (`MelodiaCelestial` en `MusicPlayer.astro`) basada en `AudioContext` nativo del navegador.
- Genera arpegios suaves y notas envolventes calculando frecuencias exactas en hercios.
- Maneja politicas de reproduccion automatica (autoplay) del navegador reanudando el contexto de audio tras la primera interaccion del usuario.
- Cero consumo de ancho de banda adicional y disponibilidad inmediata sin peticiones de red.

### Lienzo de Particulas con Canvas 2D
Para el efecto de polvo de estrellas y la dispersion al abrir el sobre con sello de cera (`WaxSealEnvelope.astro` y `StarCanvas.astro`), se opto por Canvas 2D puro en lugar de librerias de animacion de terceros.
- Se gestiona el bucle de renderizado mediante `requestAnimationFrame`.
- Permite un control preciso de la opacidad y dispersion fisica de las particulas.
- Mantiene la tasa de refresco fluida a 60 FPS sin degradar el rendimiento en dispositivos moviles.

---

## 4. Diseno Responsivo, Rendimiento y Accesibilidad

### Persistencia de Estado de Interaccion
El sobre digital inicial de invitacion debe mostrarse en la primera visita pero no resultar invasivo en recargas consecutivas:
- Se implemento almacenamiento en `sessionStorage` (`sobre_abierto: true`).
- Si el usuario ya abrio el sobre durante la sesion, la clase de estado se aplica de inmediato evitando parpadeos de contenido.

### Optimizacion de Recursos Graficos
- Todas las imagenes fueron convertidas al formato moderno `.webp`, logrando reducciones de tamano superiores al 65% frente a formatos tradicionales sin perdida visible de calidad.
- Uso de `loading="lazy"` y `decoding="async"` en imagenes inferiores del scroll, reservando `fetchpriority="high"` y `loading="eager"` unicamente para la imagen principal del Hero.

### Respeto a Preferencias del Usuario
- Implementacion rigurosa de `@media (prefers-reduced-motion: reduce)`.
- Si el usuario tiene configurada la reduccion de movimiento en su sistema operativo, las transiciones complejas y animaciones de estrellas continuas se desactivan o minimizan de forma automatica.

---

## 5. Reglas de Estilo e Iconografia

### Eliminacion Total de Emojis
Una regla central del proyecto es la no utilizacion de emojis, sustituyendolos por iconos vectoriales SVG limpios y personalizables (`src/components/icons/`). Esto garantiza:
- Consistencia visual independientemente del sistema operativo o navegador del visitante (evitando variaciones de diseno entre iOS, Android y Windows).
- Capacidad de colorear y escalar los iconos directamente con variables CSS (`var(--dorado)`).
- Mayor formalidad y tono visual acorde a la estetica celestial de la celebracion.

---

## 6. Despliegue en Subdirectorios de GitHub Pages

### El Reto del Base Path
Al desplegar en GitHub Pages bajo una URL con subdirectorio (`https://hugoadama.github.io/Wedding_Invitation/`), los enlaces absolutos directos (`/images/...` o `/favicon.svg`) provocan errores 404 al omitir el prefijo del repositorio.

### Solucion
Se configuro `base: '/Wedding_Invitation'` en `astro.config.mjs` y se implemento una utilidad centralizada `withBase(path)` en `src/utils/paths.ts` que normaliza y antepone la ruta base a todos los activos estaticos y enlaces internos, permitiendo que el proyecto funcione de forma identica en local (`localhost`) y en produccion.
