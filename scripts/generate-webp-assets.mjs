import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const outputDir = path.resolve('public/images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Helper to create star dots in SVG
function generateStars(count, width, height) {
  let stars = '';
  for (let i = 0; i < count; i++) {
    const cx = (Math.sin(i * 997 + 13) * 0.5 + 0.5) * width;
    const cy = (Math.cos(i * 331 + 77) * 0.5 + 0.5) * height;
    const r = (i % 7 === 0) ? 2.5 : (i % 3 === 0 ? 1.6 : 0.9);
    const op = 0.35 + ((i % 5) * 0.15);
    const fill = (i % 4 === 0) ? '#D4AF37' : '#FFFFFF';
    stars += `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r}" fill="${fill}" opacity="${op.toFixed(2)}" />`;
  }
  return stars;
}

const specs = [
  {
    name: 'hero-stars.webp',
    width: 700,
    height: 700,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="sky" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#2D1B4E" />
            <stop offset="45%" stop-color="#1B2A4A" />
            <stop offset="90%" stop-color="#0B1D3A" />
          </radialGradient>
          <radialGradient id="moonGlow" cx="50%" cy="30%" r="40%">
            <stop offset="0%" stop-color="#F5EFE6" stop-opacity="0.9" />
            <stop offset="40%" stop-color="#D4AF37" stop-opacity="0.4" />
            <stop offset="100%" stop-color="#D4AF37" stop-opacity="0" />
          </radialGradient>
          <linearGradient id="volcano" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#18233C" />
            <stop offset="100%" stop-color="#08101E" />
          </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="url(#sky)" />
        <circle cx="${w/2}" cy="${h*0.35}" r="${w*0.3}" fill="url(#moonGlow)" />
        <circle cx="${w/2}" cy="${h*0.35}" r="${w*0.14}" fill="#F5EFE6" opacity="0.9" />
        <circle cx="${w/2 + 25}" cy="${h*0.35 - 15}" r="${w*0.13}" fill="url(#sky)" opacity="0.95" />
        ${generateStars(140, w, h)}
        <!-- Misti Silhouette -->
        <polygon points="0,${h} 200,${h*0.62} 350,${h*0.69} 520,${h*0.58} ${w},${h}" fill="url(#volcano)" opacity="0.85" />
        <!-- Couple silhouette -->
        <g fill="#070E1A">
          <ellipse cx="${w/2 - 25}" cy="${h*0.78}" rx="22" ry="24" />
          <ellipse cx="${w/2 + 25}" cy="${h*0.79}" rx="20" ry="22" />
          <path d="M${w/2 - 55} ${h} Q${w/2 - 25} ${h*0.8} ${w/2} ${h*0.88} Q${w/2 + 25} ${h*0.8} ${w/2 + 55} ${h} Z" />
        </g>
        <circle cx="${w/2}" cy="${h*0.82}" r="3" fill="#D4AF37" />
        <!-- Constellation Lines -->
        <path d="M120 180 L190 140 L260 170 L340 130 L420 160 L500 120" stroke="#D4AF37" stroke-width="1.2" stroke-opacity="0.5" fill="none" />
      </svg>
    `
  },
  {
    name: 'pareja.webp',
    width: 700,
    height: 700,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="coupleSky" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stop-color="#3B255C" />
            <stop offset="60%" stop-color="#14213D" />
            <stop offset="100%" stop-color="#071120" />
          </radialGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="url(#coupleSky)" />
        ${generateStars(120, w, h)}
        <circle cx="${w/2}" cy="${h/2}" r="220" stroke="#D4AF37" stroke-width="1.5" stroke-opacity="0.4" fill="none" />
        <circle cx="${w/2}" cy="${h/2}" r="250" stroke="#D4AF37" stroke-width="0.8" stroke-dasharray="4 4" stroke-opacity="0.3" fill="none" />
        <text x="${w/2}" y="${h*0.48}" font-family="'Cormorant Garamond', Georgia, serif" font-size="44" fill="#F5EFE6" text-anchor="middle">Daniela &amp; Rodrigo</text>
        <text x="${w/2}" y="${h*0.56}" font-family="'Inter', sans-serif" font-size="16" fill="#D4AF37" letter-spacing="4" text-anchor="middle">12 DE JUNIO DE 2027</text>
        <text x="${w/2}" y="${h*0.62}" font-family="'Inter', sans-serif" font-size="13" fill="#C0C0C0" letter-spacing="2" text-anchor="middle">AREQUIPA · BAJO LAS ESTRELLAS</text>
      </svg>
    `
  },
  {
    name: 'daniela.webp',
    width: 640,
    height: 800,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="danBg" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#3D295A" />
            <stop offset="60%" stop-color="#172642" />
            <stop offset="100%" stop-color="#0B172B" />
          </radialGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="url(#danBg)" />
        ${generateStars(90, w, h)}
        <!-- Arch of Yanahuara -->
        <path d="M${w*0.2} ${h} V${h*0.45} A${w*0.3} ${w*0.3} 0 0 1 ${w*0.8} ${h*0.45} V${h}" stroke="#D4AF37" stroke-width="1.5" stroke-opacity="0.35" fill="none" />
        <!-- Stylized Portrait Silhouette -->
        <circle cx="${w/2}" cy="${h*0.42}" r="75" fill="#F5EFE6" opacity="0.15" />
        <circle cx="${w/2}" cy="${h*0.42}" r="65" stroke="#D4AF37" stroke-width="1.5" fill="#141E34" />
        <path d="M${w*0.32} ${h*0.78} Q${w*0.5} ${h*0.56} ${w*0.68} ${h*0.78} L${w*0.75} ${h} L${w*0.25} ${h} Z" fill="#0C1527" />
        <text x="${w/2}" y="${h*0.43}" font-family="'Cormorant Garamond', Georgia, serif" font-size="48" fill="#D4AF37" text-anchor="middle">D</text>
        <text x="${w/2}" y="${h*0.72}" font-family="'Cormorant Garamond', Georgia, serif" font-size="36" fill="#F5EFE6" text-anchor="middle">Daniela Fernanda</text>
        <text x="${w/2}" y="${h*0.77}" font-family="'Inter', sans-serif" font-size="14" fill="#D4AF37" letter-spacing="2" text-anchor="middle">MÉDICA PEDIATRA · VIRGO</text>
        <text x="${w/2}" y="${h*0.82}" font-family="'Cormorant Garamond', Georgia, serif" font-size="17" font-style="italic" fill="#C0C0C0" text-anchor="middle">«Hay que ser como el agua»</text>
      </svg>
    `
  },
  {
    name: 'rodrigo.webp',
    width: 640,
    height: 800,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="rodBg" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#23355C" />
            <stop offset="60%" stop-color="#121F38" />
            <stop offset="100%" stop-color="#08101E" />
          </radialGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="url(#rodBg)" />
        ${generateStars(90, w, h)}
        <!-- Classical frame -->
        <rect x="${w*0.18}" y="${h*0.2}" width="${w*0.64}" height="${h*0.62}" rx="12" stroke="#D4AF37" stroke-width="1.2" stroke-opacity="0.3" fill="none" />
        <circle cx="${w/2}" cy="${h*0.42}" r="75" fill="#F5EFE6" opacity="0.15" />
        <circle cx="${w/2}" cy="${h*0.42}" r="65" stroke="#D4AF37" stroke-width="1.5" fill="#141E34" />
        <path d="M${w*0.32} ${h*0.78} Q${w*0.5} ${h*0.56} ${w*0.68} ${h*0.78} L${w*0.75} ${h} L${w*0.25} ${h} Z" fill="#0C1527" />
        <text x="${w/2}" y="${h*0.43}" font-family="'Cormorant Garamond', Georgia, serif" font-size="48" fill="#D4AF37" text-anchor="middle">R</text>
        <text x="${w/2}" y="${h*0.72}" font-family="'Cormorant Garamond', Georgia, serif" font-size="36" fill="#F5EFE6" text-anchor="middle">Rodrigo Alonso</text>
        <text x="${w/2}" y="${h*0.77}" font-family="'Inter', sans-serif" font-size="14" fill="#D4AF37" letter-spacing="2" text-anchor="middle">PROFESOR DE LITERATURA · LIBRA</text>
        <text x="${w/2}" y="${h*0.82}" font-family="'Cormorant Garamond', Georgia, serif" font-size="17" font-style="italic" fill="#C0C0C0" text-anchor="middle">«La literatura es la memoria del mundo»</text>
      </svg>
    `
  },
  {
    name: 'historia-2018.webp',
    width: 720,
    height: 900,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${w}" height="${h}" fill="#111B2C" />
        ${generateStars(60, w, h)}
        <!-- Library Bookshelves -->
        <g stroke="#D4AF37" stroke-width="1" stroke-opacity="0.3" fill="none">
          <line x1="80" y1="200" x2="640" y2="200" />
          <line x1="80" y1="360" x2="640" y2="360" />
          <line x1="80" y1="520" x2="640" y2="520" />
          <line x1="80" y1="680" x2="640" y2="680" />
        </g>
        <!-- Books -->
        <rect x="180" y="240" width="70" height="120" rx="4" fill="#24375A" stroke="#D4AF37" stroke-width="1.5" />
        <rect x="260" y="220" width="80" height="140" rx="4" fill="#4A3B6B" stroke="#D4AF37" stroke-width="1.5" />
        <text x="215" y="310" font-family="'Cormorant Garamond', serif" font-size="13" fill="#D4AF37" text-anchor="middle" transform="rotate(-90 215 310)">RAYUELA</text>
        <text x="300" y="310" font-family="'Cormorant Garamond', serif" font-size="12" fill="#F5EFE6" text-anchor="middle" transform="rotate(-90 300 310)">EL PRINCIPITO</text>
        <circle cx="${w/2}" cy="580" r="45" fill="#D4AF37" opacity="0.2" />
        <text x="${w/2}" y="585" font-family="'Cormorant Garamond', serif" font-size="28" fill="#F5EFE6" text-anchor="middle">Biblioteca UNSA</text>
        <text x="${w/2}" y="620" font-family="'Inter', sans-serif" font-size="14" fill="#D4AF37" letter-spacing="2" text-anchor="middle">EL ENCUENTRO · 2018</text>
      </svg>
    `
  },
  {
    name: 'historia-2019.webp',
    width: 720,
    height: 900,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${w}" height="${h}" fill="#162035" />
        ${generateStars(50, w, h)}
        <!-- Coffee cups and warm glow -->
        <circle cx="280" cy="440" r="60" fill="#D4AF37" opacity="0.15" />
        <circle cx="440" cy="440" r="60" fill="#D4AF37" opacity="0.15" />
        <ellipse cx="280" cy="440" rx="35" ry="25" fill="#2B3A5A" stroke="#D4AF37" stroke-width="1.5" />
        <ellipse cx="440" cy="440" rx="35" ry="25" fill="#2B3A5A" stroke="#D4AF37" stroke-width="1.5" />
        <text x="${w/2}" y="570" font-family="'Cormorant Garamond', serif" font-size="32" fill="#F5EFE6" text-anchor="middle">Cafés &amp; Cartas Secretas</text>
        <text x="${w/2}" y="610" font-family="'Inter', sans-serif" font-size="14" fill="#D4AF37" letter-spacing="2" text-anchor="middle">LA AMISTAD COMPARTIDA · 2019</text>
      </svg>
    `
  },
  {
    name: 'historia-2020.webp',
    width: 720,
    height: 900,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${w}" height="${h}" fill="#0F1B2E" />
        ${generateStars(110, w, h)}
        <!-- Constellation drawing on parchment -->
        <rect x="140" y="240" width="440" height="320" rx="10" fill="#F5EFE6" opacity="0.1" stroke="#D4AF37" stroke-width="1.2" />
        <path d="M220 400 L280 340 L360 380 L440 310 L500 360" stroke="#D4AF37" stroke-width="2" fill="none" />
        <circle cx="220" cy="400" r="5" fill="#D4AF37" />
        <circle cx="280" cy="340" r="5" fill="#D4AF37" />
        <circle cx="360" cy="380" r="6" fill="#FFF" />
        <circle cx="440" cy="310" r="5" fill="#D4AF37" />
        <circle cx="500" cy="360" r="5" fill="#D4AF37" />
        <text x="${w/2}" y="630" font-family="'Cormorant Garamond', serif" font-size="30" fill="#F5EFE6" text-anchor="middle">Constelaciones a la Distancia</text>
        <text x="${w/2}" y="670" font-family="'Inter', sans-serif" font-size="14" fill="#D4AF37" letter-spacing="2" text-anchor="middle">AREQUIPA &amp; LIMA · 2020</text>
      </svg>
    `
  },
  {
    name: 'historia-2022.webp',
    width: 720,
    height: 900,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="viaLactea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#4A3B6B" stop-opacity="0.8" />
            <stop offset="50%" stop-color="#1B2A4A" stop-opacity="0.9" />
            <stop offset="100%" stop-color="#D4AF37" stop-opacity="0.3" />
          </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="#0A1626" />
        <ellipse cx="${w/2}" cy="${h*0.38}" rx="320" ry="120" transform="rotate(-25 ${w/2} ${h*0.38})" fill="url(#viaLactea)" opacity="0.6" />
        ${generateStars(130, w, h)}
        <text x="${w/2}" y="620" font-family="'Cormorant Garamond', serif" font-size="32" fill="#F5EFE6" text-anchor="middle">La Confesión en la Azotea</text>
        <text x="${w/2}" y="660" font-family="'Inter', sans-serif" font-size="14" fill="#D4AF37" letter-spacing="2" text-anchor="middle">BAJO LA VÍA LÁCTEA · 2022</text>
      </svg>
    `
  },
  {
    name: 'historia-2024.webp',
    width: 720,
    height: 900,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${w}" height="${h}" fill="#132034" />
        ${generateStars(70, w, h)}
        <!-- Open book with ring -->
        <path d="M160 460 Q${w/2} 420 560 460 L540 340 Q${w/2} 300 180 340 Z" fill="#202F4B" stroke="#D4AF37" stroke-width="1.5" />
        <!-- Ring with sparkle -->
        <ellipse cx="${w/2}" cy="380" rx="24" ry="10" stroke="#D4AF37" stroke-width="3" fill="none" />
        <polygon points="${w/2},360 ${w/2+5},372 ${w/2+18},375 ${w/2+7},384 ${w/2+10},396 ${w/2},388 ${w/2-10},396 ${w/2-7},384 ${w/2-18},375 ${w/2-5},372" fill="#F5EFE6" />
        <text x="${w/2}" y="570" font-family="'Cormorant Garamond', serif" font-size="34" fill="#F5EFE6" text-anchor="middle">El Sí entre las Páginas</text>
        <text x="${w/2}" y="610" font-family="'Inter', sans-serif" font-size="14" fill="#D4AF37" letter-spacing="2" text-anchor="middle">LA PROPUESTA EN LA UNSA · 2024</text>
      </svg>
    `
  },
  {
    name: 'historia-2027.webp',
    width: 720,
    height: 900,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${w}" height="${h}" fill="#0B1A2E" />
        ${generateStars(140, w, h)}
        <circle cx="${w/2}" cy="300" r="90" fill="#D4AF37" opacity="0.1" />
        <circle cx="${w/2}" cy="300" r="80" stroke="#D4AF37" stroke-width="1.2" fill="none" />
        <text x="${w/2}" y="310" font-family="'Great Vibes', cursive" font-size="52" fill="#D4AF37" text-anchor="middle">Dani &amp; Rodri</text>
        <text x="${w/2}" y="560" font-family="'Cormorant Garamond', serif" font-size="36" fill="#F5EFE6" text-anchor="middle">El Enlace Celestial</text>
        <text x="${w/2}" y="605" font-family="'Inter', sans-serif" font-size="14" fill="#D4AF37" letter-spacing="3" text-anchor="middle">AREQUIPA · 12 DE JUNIO DE 2027</text>
      </svg>
    `
  },
  {
    name: 'ceremonia.webp',
    width: 800,
    height: 500,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sunset" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#342055" />
            <stop offset="40%" stop-color="#6E385C" />
            <stop offset="70%" stop-color="#B25E46" />
            <stop offset="90%" stop-color="#D4AF37" />
          </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="url(#sunset)" />
        ${generateStars(50, w, h*0.5)}
        <!-- Hacienda Arch silhouette -->
        <path d="M0 ${h} L0 ${h*0.75} Q${w*0.5} ${h*0.65} ${w} ${h*0.75} L${w} ${h} Z" fill="#0E1929" />
        <text x="${w/2}" y="${h*0.4}" font-family="'Cormorant Garamond', serif" font-size="38" fill="#F5EFE6" text-anchor="middle">Ceremonia al Atardecer</text>
        <text x="${w/2}" y="${h*0.52}" font-family="'Inter', sans-serif" font-size="15" fill="#F5EFE6" letter-spacing="3" text-anchor="middle">HACIENDA SAN JOSÉ · 5:30 P. M.</text>
      </svg>
    `
  },
  {
    name: 'recepcion.webp',
    width: 800,
    height: 500,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${w}" height="${h}" fill="#0A1628" />
        ${generateStars(110, w, h)}
        <!-- String lights curve -->
        <path d="M0 90 Q${w*0.25} 140 ${w*0.5} 100 T${w} 100" stroke="#D4AF37" stroke-width="1.5" stroke-opacity="0.8" fill="none" />
        <path d="M0 130 Q${w*0.25} 180 ${w*0.5} 140 T${w} 140" stroke="#D4AF37" stroke-width="1.5" stroke-opacity="0.8" fill="none" />
        ${[80, 150, 240, 320, 420, 510, 600, 700].map(x => `<circle cx="${x}" cy="${110 + (x%30)}" r="4" fill="#FFF8DC" /><circle cx="${x}" cy="${110 + (x%30)}" r="8" fill="#D4AF37" opacity="0.4" />`).join('')}
        <text x="${w/2}" y="${h*0.6}" font-family="'Cormorant Garamond', serif" font-size="38" fill="#F5EFE6" text-anchor="middle">Recepción bajo las Estrellas</text>
        <text x="${w/2}" y="${h*0.72}" font-family="'Inter', sans-serif" font-size="15" fill="#D4AF37" letter-spacing="3" text-anchor="middle">JARDÍN PRINCIPAL &amp; CARPA ILUMINADA</text>
      </svg>
    `
  },
  {
    name: 'telescopio.webp',
    width: 640,
    height: 800,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${w}" height="${h}" fill="#091424" />
        ${generateStars(130, w, h)}
        <!-- Telescope silhouette -->
        <circle cx="${w*0.75}" cy="${h*0.25}" r="45" fill="#F5EFE6" opacity="0.85" />
        <line x1="${w*0.3}" y1="${h*0.55}" x2="${w*0.65}" y2="${h*0.32}" stroke="#D4AF37" stroke-width="14" stroke-linecap="round" />
        <line x1="${w*0.48}" y1="${h*0.44}" x2="${w*0.3}" y2="${h*0.8}" stroke="#D4AF37" stroke-width="4" />
        <line x1="${w*0.48}" y1="${h*0.44}" x2="${w*0.48}" y2="${h*0.8}" stroke="#D4AF37" stroke-width="4" />
        <line x1="${w*0.48}" y1="${h*0.44}" x2="${w*0.65}" y2="${h*0.8}" stroke="#D4AF37" stroke-width="4" />
        <text x="${w/2}" y="${h*0.88}" font-family="'Cormorant Garamond', serif" font-size="30" fill="#F5EFE6" text-anchor="middle">Observación Astronómica</text>
      </svg>
    `
  },
  {
    name: 'vestimenta-ella.webp',
    width: 480,
    height: 640,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${w}" height="${h}" fill="#111B30" />
        ${generateStars(60, w, h)}
        <circle cx="${w/2}" cy="${h*0.3}" r="40" stroke="#D4AF37" stroke-width="1" fill="#1E2A44" />
        <path d="M${w*0.35} ${h*0.45} L${w*0.65} ${h*0.45} L${w*0.8} ${h*0.85} L${w*0.2} ${h*0.85} Z" fill="#2E204A" stroke="#D4AF37" stroke-width="1.5" />
        <text x="${w/2}" y="${h*0.93}" font-family="'Cormorant Garamond', serif" font-size="24" fill="#F5EFE6" text-anchor="middle">Para Ella: Gala Nocturna</text>
      </svg>
    `
  },
  {
    name: 'vestimenta-el.webp',
    width: 480,
    height: 640,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${w}" height="${h}" fill="#0D1628" />
        ${generateStars(60, w, h)}
        <circle cx="${w/2}" cy="${h*0.3}" r="40" stroke="#D4AF37" stroke-width="1" fill="#1A243A" />
        <path d="M${w*0.3} ${h*0.45} L${w*0.7} ${h*0.45} L${w*0.75} ${h*0.85} L${w*0.25} ${h*0.85} Z" fill="#142036" stroke="#D4AF37" stroke-width="1.5" />
        <polygon points="${w/2-15},${h*0.48} ${w/2+15},${h*0.48} ${w/2},${h*0.52}" fill="#D4AF37" />
        <text x="${w/2}" y="${h*0.93}" font-family="'Cormorant Garamond', serif" font-size="24" fill="#F5EFE6" text-anchor="middle">Para Él: Traje Formal Oscuro</text>
      </svg>
    `
  },
  {
    name: 'rsvp-couple.webp',
    width: 640,
    height: 800,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${w}" height="${h}" fill="#0A1526" />
        ${generateStars(120, w, h)}
        <circle cx="${w/2}" cy="${h*0.38}" r="140" stroke="#D4AF37" stroke-width="1.2" stroke-opacity="0.4" fill="#142138" />
        <text x="${w/2}" y="${h*0.36}" font-family="'Great Vibes', cursive" font-size="64" fill="#D4AF37" text-anchor="middle">D &amp; R</text>
        <text x="${w/2}" y="${h*0.44}" font-family="'Cormorant Garamond', serif" font-size="26" fill="#F5EFE6" text-anchor="middle">Te esperamos</text>
        <text x="${w/2}" y="${h*0.72}" font-family="'Cormorant Garamond', serif" font-size="34" fill="#F5EFE6" text-anchor="middle">Bajo las Estrellas</text>
        <text x="${w/2}" y="${h*0.78}" font-family="'Inter', sans-serif" font-size="14" fill="#D4AF37" letter-spacing="2" text-anchor="middle">CONFIRMA ANTES DEL 15 DE ABRIL</text>
      </svg>
    `
  },
  // Gallery images 1 to 6
  {
    name: 'galeria-1.webp',
    width: 600,
    height: 800,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${w}" height="${h}" fill="#141E33" />
        ${generateStars(70, w, h)}
        <rect x="80" y="160" width="440" height="480" rx="8" stroke="#D4AF37" stroke-width="1.5" stroke-opacity="0.5" fill="none" />
        <text x="${w/2}" y="${h*0.46}" font-family="'Cormorant Garamond', serif" font-size="36" fill="#F5EFE6" text-anchor="middle">La Biblioteca UNSA</text>
        <text x="${w/2}" y="${h*0.53}" font-family="'Inter', sans-serif" font-size="14" fill="#D4AF37" letter-spacing="2" text-anchor="middle">PRIMER ENCUENTRO</text>
      </svg>
    `
  },
  {
    name: 'galeria-2.webp',
    width: 600,
    height: 600,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${w}" height="${h}" fill="#1B243B" />
        ${generateStars(50, w, h)}
        <circle cx="${w/2}" cy="${h/2}" r="180" stroke="#D4AF37" stroke-width="1.2" stroke-opacity="0.4" fill="#131B2E" />
        <text x="${w/2}" y="${h*0.48}" font-family="'Cormorant Garamond', serif" font-size="32" fill="#F5EFE6" text-anchor="middle">Cafés &amp; Libros</text>
        <text x="${w/2}" y="${h*0.56}" font-family="'Inter', sans-serif" font-size="13" fill="#D4AF37" letter-spacing="2" text-anchor="middle">TARDES EN YANAHUARA</text>
      </svg>
    `
  },
  {
    name: 'galeria-3.webp',
    width: 600,
    height: 750,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${w}" height="${h}" fill="#10192A" />
        ${generateStars(60, w, h)}
        <!-- Piano keys outline -->
        <g stroke="#D4AF37" stroke-width="1" fill="#F5EFE6" opacity="0.8">
          ${[80, 130, 180, 230, 280, 330, 380, 430, 480].map(x => `<rect x="${x}" y="360" width="45" height="150" fill="#1B2844" stroke="#D4AF37" />`).join('')}
        </g>
        <text x="${w/2}" y="280" font-family="'Cormorant Garamond', serif" font-size="34" fill="#F5EFE6" text-anchor="middle">Piano de Domingo</text>
        <text x="${w/2}" y="320" font-family="'Inter', sans-serif" font-size="14" fill="#D4AF37" letter-spacing="2" text-anchor="middle">NOTAS PARA DANIELA</text>
      </svg>
    `
  },
  {
    name: 'galeria-4.webp',
    width: 600,
    height: 900,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dawn" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#2D1C44" />
            <stop offset="50%" stop-color="#5B2C52" />
            <stop offset="100%" stop-color="#B36A47" />
          </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="url(#dawn)" />
        ${generateStars(40, w, h*0.4)}
        <text x="${w/2}" y="${h*0.45}" font-family="'Cormorant Garamond', serif" font-size="34" fill="#F5EFE6" text-anchor="middle">Amanecer en Arequipa</text>
        <text x="${w/2}" y="${h*0.51}" font-family="'Inter', sans-serif" font-size="14" fill="#F5EFE6" letter-spacing="2" text-anchor="middle">CORRIENDO HACIA EL HORIZONTE</text>
      </svg>
    `
  },
  {
    name: 'galeria-5.webp',
    width: 600,
    height: 650,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${w}" height="${h}" fill="#16233B" />
        ${generateStars(50, w, h)}
        <circle cx="${w/2}" cy="${h*0.42}" r="120" fill="#202F4E" stroke="#D4AF37" stroke-width="1.5" />
        <text x="${w/2}" y="${h*0.44}" font-family="'Cormorant Garamond', serif" font-size="44" fill="#D4AF37" text-anchor="middle">Proust</text>
        <text x="${w/2}" y="${h*0.7}" font-family="'Inter', sans-serif" font-size="14" fill="#C0C0C0" letter-spacing="2" text-anchor="middle">NUESTRO QUERIDO CONEJO</text>
      </svg>
    `
  },
  {
    name: 'galeria-6.webp',
    width: 600,
    height: 800,
    svg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${w}" height="${h}" fill="#0A1629" />
        ${generateStars(130, w, h)}
        <!-- Mirador Sillar Arch -->
        <path d="M120 ${h} V${h*0.4} A180 180 0 0 1 480 ${h*0.4} V${h}" stroke="#D4AF37" stroke-width="2" fill="none" opacity="0.6" />
        <text x="${w/2}" y="${h*0.65}" font-family="'Cormorant Garamond', serif" font-size="34" fill="#F5EFE6" text-anchor="middle">Mirador de Yanahuara</text>
        <text x="${w/2}" y="${h*0.71}" font-family="'Inter', sans-serif" font-size="14" fill="#D4AF37" letter-spacing="2" text-anchor="middle">AREQUIPA ILUMINADA</text>
      </svg>
    `
  }
];

async function run() {
  console.log('Generando imágenes WebP...');
  for (const item of specs) {
    const svgBuffer = Buffer.from(item.svg(item.width, item.height));
    const dest = path.join(outputDir, item.name);
    await sharp(svgBuffer)
      .webp({ quality: 90 })
      .toFile(dest);
    console.log(`✓ Generada: ${item.name} (${item.width}x${item.height})`);
  }
  console.log('¡Todas las imágenes WebP han sido generadas exitosamente!');
}

run().catch(err => {
  console.error('Error generando imágenes WebP:', err);
  process.exit(1);
});
