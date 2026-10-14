# Compilacion y Despliegue

Instrucciones para la ejecucion en entorno local y despliegue del proyecto estatico.

## Requisitos del Entorno

- Node.js: Version 20.0.0 o superior (compatible con Node 22 y Node 24).
- Gestor de paquetes: npm version 9 o superior.

## Comandos Principales

### 1. Instalacion de dependencias
```bash
npm install
```

### 2. Servidor de desarrollo local
```bash
npm run dev
```
Inicia el entorno de desarrollo de Astro en el puerto configurado (usualmente 4321).

### 3. Compilacion de produccion
```bash
npm run build
```
Genera la salida estatica optimizada en la carpeta `dist/`.

### 4. Previsualizacion del bundle de produccion
```bash
npm run preview
```
Sirve la compilacion estatica para verificar el comportamiento de produccion de forma local.

---

## Configuracion para GitHub Pages

El proyecto esta configurado en `astro.config.mjs` con:
- `site`: 'https://hugoadama.github.io'
- `base`: '/Wedding_Invitation'
- `compressHTML`: true

Todas las rutas a imagenes y activos estaticos utilizan la funcion utilitaria `withBase(path)` para garantizar que los enlaces se resuelvan adecuadamente bajo el subdirectorio del repositorio.

---

## Flujo de Trabajo en GitHub Actions

El repositorio cuenta con un flujo automatizado en `.github/workflows/deploy.yml` que:
1. Detecta cambios en la rama `main`.
2. Instala dependencias y compila con `astro build`.
3. Publica el contenido de `dist/` en GitHub Pages.

---

## Lista de Verificacion Previa a la Entrega

- La compilacion `npm run build` finaliza con codigo de salida 0.
- No existen errores ni advertencias de tipado TypeScript.
- No se utilizan emojis en el codigo fuente, nombres de clases ni documentacion.
- Todas las imagenes en `public/images/` existen y se encuentran en formato WebP optimizado.
