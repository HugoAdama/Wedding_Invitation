# Catalogo de Componentes

Este documento lista y describe los componentes interactivos, secciones modulares e iconos del proyecto.

## Componentes de Interfaz de Usuario (src/components/ui/)

### 1. CountdownClock (CountdownClock.astro)
- Descripcion: Reloj de cuenta regresiva dinamico que muestra dias, horas, minutos y segundos restantes hasta el evento.
- Dependencias: Utiliza calculateTimeRemaining desde utils/countdown.ts.
- Estilos: Desacoplados en src/styles/components/CountdownClock.css.
- Tipado: Manejo estricto de fechas y nulabilidad de atributos HTML.

### 2. WaxSealEnvelope (WaxSealEnvelope.astro)
- Descripcion: Sobre nupcial digital con monograma en relieve que cubre la pantalla al cargar la aplicacion.
- Comportamiento: Al hacer clic en el sello, ejecuta una dispersion de particulas en canvas y revela la invitacion, guardando el estado en sessionStorage.

### 3. StarCanvas (StarCanvas.astro)
- Descripcion: Lienzo HTML5 interactivo que renderiza estrellas titilantes y meteoros continuos de fondo.
- Rendimiento: Gestionado mediante requestAnimationFrame, optimizado para no generar bloqueo del hilo principal.

### 4. MusicPlayer (MusicPlayer.astro)
- Descripcion: Reproductor de musica ambiental con boton en forma de disco de vinilo flotante.
- Mecanismo: Genera la melodia arpegiada mediante la Web Audio API (sintesis acustica nativa en el navegador), evitando dependencias externas de archivos de audio.

### 5. BoardingPassModal (BoardingPassModal.astro)
- Descripcion: Modal interactivo con estetica de tarjeta de embarque que incluye resumen del evento y codigo QR representativo.

### 6. GalleryLightboxModal (GalleryLightboxModal.astro)
- Descripcion: Visor de imagenes ampliado para la galeria de fotografias con navegacion accesible.

### 7. GiftCard (GiftCard.astro)
- Descripcion: Tarjeta de cuenta bancaria o regalo con boton para copiar numero de cuenta o CCI directamente al portapapeles.

### 8. RsvpForm (RsvpForm.astro)
- Descripcion: Formulario de confirmacion de asistencia con campos para invitados, seleccion de menu y restricciones alimentarias, generando enlace directo para WhatsApp.

### 9. MobileActionBar (MobileActionBar.astro)
- Descripcion: Barra de navegacion rapida fija en la parte inferior para dispositivos moviles.

---

## Secciones Principales (src/components/sections/)

- Hero.astro: Portada celestial con aviso, nombres de los novios, fecha, ubicacion y acceso rapido al calendario.
- WelcomeMessage.astro: Carta introductoria con dedicatoria y fases lunares.
- CoupleSection.astro: Perfiles de Daniela y Rodrigo con datos de su profesion, gustos y conexion tematica con el cielo.
- StoryTimeline.astro: Linea de tiempo con fotografias e hitos narrativos del periodo 2018 al 2027.
- EventDetails.astro: Ubicacion de la ceremonia y recepcion en la Hacienda San Jose, enlaces de Google Maps y botones de Google Calendar.
- DressCodeSection.astro: Descripcion del codigo de vestimenta rigurosa etiqueta formal nocturna con paleta de colores sugerida.
- NightExperience.astro: Informacion sobre la experiencia astronomica con telescopios y observacion guiada.
- GallerySection.astro: Coleccion de fotografias en formato WebP con apertura a lightbox.
- HotelsSection.astro: Listado de alojamientos recomendados en Arequipa categorizados por distancia y estilo.
- ArequipaGuideSection.astro: Sugerencias gastronomicas y lugares emblematicos de la ciudad para invitados foraneos.
- GiftsSection.astro: Opciones de regalos, cuentas bancarias y lluvia de sobres.
- GuestbookSection.astro: Libro de firmas interactivo con muro de mensajes de invitados.
- RsvpSection.astro: Confirmacion de asistencia formal y fecha limite.
- FaqSection.astro: Acordeon accesible con respuestas a preguntas frecuentes sobre transporte, ninos, clima y vestimenta.
- Footer.astro: Pie de pagina con creditos y monograma.

---

## Iconografia (src/components/icons/)

El sistema utiliza exclusivamente componentes SVG que implementan la interfaz iconografica del proyecto sin recurrir a emojis:
- CalendarIcon.astro
- ClockIcon.astro
- ConstellationIcon.astro
- HeartIcon.astro
- MapPinIcon.astro
- MoonPhasesOrnament.astro
- MusicNotesIcon.astro
- SparkleIcon.astro
- TelescopioIcon.astro
- WhatsAppIcon.astro
