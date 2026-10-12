import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const destDir = path.resolve('public/images');

const imagesToUpdate = [
  {
    filename: 'galeria-1.webp',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=88',
    width: 720,
    height: 960,
    fit: 'cover',
    position: 'center'
  },
  {
    filename: 'galeria-2.webp',
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=88',
    width: 720,
    height: 960,
    fit: 'cover',
    position: 'center'
  },
  {
    filename: 'galeria-3.webp',
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=88',
    width: 720,
    height: 960,
    fit: 'cover',
    position: 'center'
  },
  {
    filename: 'galeria-4.webp',
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=88',
    width: 720,
    height: 960,
    fit: 'cover',
    position: 'center'
  },
  {
    filename: 'galeria-5.webp',
    url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=88',
    width: 720,
    height: 960,
    fit: 'cover',
    position: 'center'
  },
  {
    filename: 'galeria-6.webp',
    url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=88',
    width: 720,
    height: 960,
    fit: 'cover',
    position: 'center'
  },
  {
    filename: 'historia-2019.webp',
    url: 'https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?auto=format&fit=crop&w=1200&q=88',
    width: 720,
    height: 900,
    fit: 'cover',
    position: 'center'
  },
  {
    filename: 'rsvp-couple.webp',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=88',
    width: 720,
    height: 900,
    fit: 'cover',
    position: 'center'
  }
];

async function main() {
  console.log('Iniciando descarga y procesamiento de sesión de fotos nupcial...');
  
  for (const item of imagesToUpdate) {
    console.log(`Descargando ${item.filename} desde ${item.url.slice(0, 50)}...`);
    const res = await fetch(item.url);
    if (!res.ok) {
      console.error(`Error HTTP ${res.status} al descargar ${item.url}`);
      continue;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    const outPath = path.join(destDir, item.filename);

    await sharp(buffer)
      .resize(item.width, item.height, { fit: item.fit, position: item.position })
      .webp({ quality: 90, effort: 4 })
      .toFile(outPath);

    const stats = fs.statSync(outPath);
    console.log(`✓ ${item.filename} generado exitosamente (${(stats.size / 1024).toFixed(1)} KB)`);
  }

  console.log('¡Todas las imágenes de sesión de fotos han sido actualizadas!');
}

main().catch(err => {
  console.error('Error durante la descarga:', err);
  process.exit(1);
});
