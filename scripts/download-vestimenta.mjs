import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const destDir = path.resolve('public/images');

async function downloadAndConvert(url, filename, width = 600, height = 800) {
  console.log(`Descargando imagen para ${filename}...`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP error ${res.status} al descargar ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());

  const outPath = path.join(destDir, filename);
  await sharp(buffer)
    .resize(width, height, { fit: 'cover', position: 'center' })
    .webp({ quality: 88, effort: 4 })
    .toFile(outPath);
  console.log(`✓ Guardado con éxito: ${filename} (${width}x${height})`);
}

async function run() {
  // Ella: Vestido largo de noche elegante en tono azul noche / formal gala
  const urlElla = 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=85';
  
  // Él: Smoking / traje de gala formal con corbata de lazo
  const urlEl = 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=85';

  await downloadAndConvert(urlElla, 'vestimenta-ella.webp', 600, 800);
  await downloadAndConvert(urlEl, 'vestimenta-el.webp', 600, 800);
  console.log('¡Imágenes de vestimenta actualizadas con éxito!');
}

run().catch(err => {
  console.error('Error al descargar o procesar imágenes de vestimenta:', err);
  process.exit(1);
});
