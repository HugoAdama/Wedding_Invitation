import type { ColorSwatch } from '../types/wedding';

export interface DressCodeImage {
  src: string;
  alt: string;
  label: string;
  subtitle: string;
}

export const paletteColors: ColorSwatch[] = [
  { name: 'Azul noche', hex: '#0B1D3A', description: 'Profundidad del firmamento' },
  { name: 'Azul profundo', hex: '#1B2A4A', description: 'Manto estelar de la noche' },
  { name: 'Violeta nebulosa', hex: '#4A3B6B', description: 'El atardecer en el valle' },
  { name: 'Dorado estrella', hex: '#D4AF37', description: 'Acentos cálidos y brillantes' },
  { name: 'Plata luna', hex: '#C0C0C0', description: 'Reflejos serenos de luz' }
];

export const dressCodeDetails = {
  category: 'Formal de Noche / Black Tie Opcional',
  description: 'Te invitamos a vestir con la elegancia solemne de la noche. Súmate a los tonos del cielo nocturno (azul noche, azul profundo, violeta, dorado o plata).',
  restrictions: 'Por favor, reservamos el blanco, marfil y crema exclusivamente para la novia.',
  recommendations: [
    'Para damas: Vestidos largos o midi elegantes en tonos joya, azul marino, noche o violeta.',
    'Para caballeros: Traje oscuro (azul marino o negro) con camisa formal y corbata o lazo.',
    'El clima de junio en Arequipa es fresco por la noche: sugerimos traer estola, abrigo ligero o blazer abrigador.'
  ],
  images: [
    {
      src: '/images/vestimenta-ella.webp',
      alt: 'Inspiración de vestimenta formal para damas',
      label: 'Para Damas',
      subtitle: 'Vestido largo de noche'
    },
    {
      src: '/images/vestimenta-el.webp',
      alt: 'Inspiración de vestimenta formal para caballeros',
      label: 'Para Caballeros',
      subtitle: 'Traje oscuro o smoking'
    }
  ] as DressCodeImage[]
};
