import type { ColorSwatch } from '../types/wedding';

export interface DressCodeImage {
  src: string;
  alt: string;
  label: string;
  subtitle: string;
}

export interface DressCodeCard {
  role: 'damas' | 'caballeros';
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  guidelines: string[];
  suggestedTones: string;
  footwearTip: string;
}

export const paletteColors: ColorSwatch[] = [
  { name: 'Azul noche', hex: '#0B1D3A', description: 'Profundidad del firmamento' },
  { name: 'Azul profundo', hex: '#1B2A4A', description: 'Manto estelar de la noche' },
  { name: 'Violeta nebulosa', hex: '#4A3B6B', description: 'El atardecer en el valle' },
  { name: 'Dorado estrella', hex: '#D4AF37', description: 'Acentos cálidos y brillantes' },
  { name: 'Plata luna', hex: '#C0C0C0', description: 'Reflejos serenos de luz' }
];

export const dressCodeCards: DressCodeCard[] = [
  {
    role: 'damas',
    title: 'Para Damas',
    subtitle: 'Vestido largo o midi de gala',
    image: '/images/vestimenta-ella.webp',
    imageAlt: 'Inspiración de vestimenta formal para damas',
    guidelines: [
      'Vestidos largos o midi elegantes en telas fluidas, satín o encaje.',
      'Accesorios o joyería en tonos dorados o plateados que evoquen estrellas.'
    ],
    suggestedTones: 'Azul noche, violeta nebulosa, azul profundo o tonos joya.',
    footwearTip: 'Tacón ancho, corrido o calzado cómodo para jardín exterior.'
  },
  {
    role: 'caballeros',
    title: 'Para Caballeros',
    subtitle: 'Traje oscuro formal o smoking',
    image: '/images/vestimenta-el.webp',
    imageAlt: 'Inspiración de vestimenta formal para caballeros',
    guidelines: [
      'Traje formal oscuro (azul noche, grafito o negro) o smoking.',
      'Camisa de etiqueta formal con corbata clásica o corbatín sobrio.'
    ],
    suggestedTones: 'Azul noche profundo, marengo oscuro o negro riguroso.',
    footwearTip: 'Zapatos de vestir oscuros y formales.'
  }
];

export const dressCodeDetails = {
  category: 'Formal de Noche / Black Tie Opcional',
  description: 'Te invitamos a vestir con la elegancia solemne de la noche. Súmate a los tonos del cielo nocturno que nos cobijará.',
  restrictions: 'Por deferencia a la novia, reservamos el blanco, marfil y tonos crema exclusivamente para ella.',
  climateNote: 'En junio la temperatura desciende por la noche (~12°C). Sugerimos llevar estola, abrigo ligero, chal o blazer abrigador para disfrutar cómodamente bajo las estrellas.',
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

