import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const brainDir = 'C:\\Users\\PC\\.gemini\\antigravity-ide\\brain\\3bce11f4-370f-4d05-a6b7-a44d2dc9dea9';
const destDir = path.resolve('public/images');

const mapping = [
  {
    src: 'hero_couple_stars_1791772350509.jpg',
    target: 'hero-stars.webp',
    width: 800,
    height: 800,
    fit: 'cover'
  },
  {
    src: 'hero_couple_stars_1791772350509.jpg',
    target: 'pareja.webp',
    width: 800,
    height: 800,
    fit: 'cover'
  },
  {
    src: 'hero_couple_stars_1791772350509.jpg',
    target: 'rsvp-couple.webp',
    width: 640,
    height: 800,
    fit: 'cover'
  },
  {
    src: 'daniela_portrait_1791772381203.jpg',
    target: 'daniela.webp',
    width: 640,
    height: 800,
    fit: 'cover'
  },
  {
    src: 'rodrigo_portrait_1791772436336.jpg',
    target: 'rodrigo.webp',
    width: 640,
    height: 800,
    fit: 'cover'
  },
  {
    src: 'ceremonia_hacienda_1791772472765.jpg',
    target: 'ceremonia.webp',
    width: 1200,
    height: 750,
    fit: 'cover'
  },
  {
    src: 'recepcion_boda_noche_1791772508734.jpg',
    target: 'recepcion.webp',
    width: 1200,
    height: 750,
    fit: 'cover'
  },
  {
    src: 'telescopio_lounge_1791772549589.jpg',
    target: 'telescopio.webp',
    width: 640,
    height: 800,
    fit: 'cover'
  },
  {
    src: 'biblioteca_encuentro_1791772780690.jpg',
    target: 'historia-2018.webp',
    width: 720,
    height: 900,
    fit: 'cover'
  },
  {
    src: 'cafe_libros_1791772842259.jpg',
    target: 'historia-2019.webp',
    width: 720,
    height: 900,
    fit: 'cover'
  },
  {
    src: 'carta_constelacion_1791772910434.jpg',
    target: 'historia-2020.webp',
    width: 720,
    height: 900,
    fit: 'cover'
  },
  {
    src: 'azotea_confesion_1791772982724.jpg',
    target: 'historia-2022.webp',
    width: 720,
    height: 900,
    fit: 'cover'
  },
  {
    src: 'anillo_rayuela_1791772596128.jpg',
    target: 'historia-2024.webp',
    width: 720,
    height: 900,
    fit: 'cover'
  },
  {
    src: 'ceremonia_hacienda_1791772472765.jpg',
    target: 'historia-2027.webp',
    width: 720,
    height: 900,
    fit: 'cover'
  },
  {
    src: 'biblioteca_encuentro_1791772780690.jpg',
    target: 'galeria-1.webp',
    width: 600,
    height: 800,
    fit: 'cover'
  },
  {
    src: 'cafe_libros_1791772842259.jpg',
    target: 'galeria-2.webp',
    width: 600,
    height: 600,
    fit: 'cover'
  },
  {
    src: 'rodrigo_portrait_1791772436336.jpg',
    target: 'galeria-3.webp',
    width: 600,
    height: 750,
    fit: 'cover'
  },
  {
    src: 'daniela_portrait_1791772381203.jpg',
    target: 'galeria-4.webp',
    width: 600,
    height: 850,
    fit: 'cover'
  },
  {
    src: 'conejo_proust_1791772644671.jpg',
    target: 'galeria-5.webp',
    width: 600,
    height: 600,
    fit: 'cover'
  },
  {
    src: 'yanahuara_noche_1791772699751.jpg',
    target: 'galeria-6.webp',
    width: 600,
    height: 800,
    fit: 'cover'
  },
  // Vestimenta
  {
    src: 'telescopio_lounge_1791772549589.jpg',
    target: 'vestimenta-ella.webp',
    width: 480,
    height: 640,
    fit: 'cover'
  },
  {
    src: 'rodrigo_portrait_1791772436336.jpg',
    target: 'vestimenta-el.webp',
    width: 480,
    height: 640,
    fit: 'cover'
  }
];

async function convert() {
  console.log('Convirtiendo fotos fotorrealistas generadas a WebP...');
  for (const item of mapping) {
    const srcFile = path.join(brainDir, item.src);
    const destFile = path.join(destDir, item.target);

    if (!fs.existsSync(srcFile)) {
      console.warn(`Archivo de origen no encontrado: ${srcFile}`);
      continue;
    }

    await sharp(srcFile)
      .resize(item.width, item.height, { fit: item.fit, position: 'center' })
      .webp({ quality: 86, effort: 4 })
      .toFile(destFile);

    console.log(`✓ Convertido a WebP: ${item.target} (${item.width}x${item.height})`);
  }
  console.log('¡Conversión completada con éxito!');
}

convert().catch(err => {
  console.error('Error en conversión:', err);
  process.exit(1);
});
