export interface GuideItem {
  bold: string;
  text: string;
}

export interface GuideCategory {
  id: string;
  iconType: 'utensils' | 'landmark' | 'mountain';
  tag: string;
  title: string;
  intro: string;
  items: GuideItem[];
}

export interface GuideBannerData {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export const arequipaGuideCategories: GuideCategory[] = [
  {
    id: 'gastronomia',
    iconType: 'utensils',
    tag: 'Tradición & Sabor',
    title: 'Gastronomía Arequipeña',
    intro: 'La cocina de Arequipa es Patrimonio Cultural. No te vayas sin visitar una picantería tradicional:',
    items: [
      {
        bold: 'Rocoto Relleno & Pastel de Papa',
        text: 'El emblema de la mesa mistiana, horneado con queso paria fundido.'
      },
      {
        bold: 'Chupe de Camarones',
        text: 'Sinfonía de sabores del valle, caldo contundente y aromático.'
      },
      {
        bold: 'Picanterías sugeridas',
        text: 'La Nueva Palomino (Yanahuara), La Benita (Characato) o Victoria Picantería (Centro).'
      },
      {
        bold: 'Queso Helado artesanal',
        text: 'Postre tradicional a base de leche, canela y clavo en los portales de Yanahuara.'
      }
    ]
  },
  {
    id: 'arquitectura',
    iconType: 'landmark',
    tag: 'Paseos & Miradores',
    title: 'Rutas & Arquitectura de Sillar',
    intro: 'Paseos imperdibles entre muros blancos tallados en roca volcánica y vistas a los tres volcanes tutelares:',
    items: [
      {
        bold: 'Mirador de Yanahuara',
        text: 'Arquerías de sillar con versos grabados y la mejor postal frente al volcán Misti.'
      },
      {
        bold: 'Monasterio de Santa Catalina',
        text: 'Una pequeña ciudadela conventual de patios terracota y azul cobalto única en el mundo.'
      },
      {
        bold: 'Plaza de Armas & Catedral',
        text: 'Una de las plazas más imponentes de Sudamérica con sus portales de granito y sillar.'
      },
      {
        bold: 'Barrio de San Lázaro',
        text: 'El callejón más antiguo de la ciudad, empedrado y bañado de geranios.'
      }
    ]
  },
  {
    id: 'aclimatacion',
    iconType: 'mountain',
    tag: 'Altitud & Confort',
    title: 'Aclimatación & Cuidados',
    intro: 'Arequipa se sitúa a 2,325 metros sobre el nivel del mar. Para sentirte con energía durante todo el fin de semana:',
    items: [
      {
        bold: 'Llegada & Descanso',
        text: 'Tómate las primeras horas para caminar despacio y permitir que el cuerpo se adapte al aire puro.'
      },
      {
        bold: 'Infusiones de bienvenida',
        text: 'Un mate de muña o infusión de coca en tu hotel te sentará de maravilla.'
      },
      {
        bold: 'Hidratación continua',
        text: 'El clima seco y soleado requiere beber abundante agua mineral y aplicar bloqueador solar de día.'
      },
      {
        bold: 'El fresco nocturno',
        text: 'La noche en Yura refresca agradablemente (~10°C). Tendremos calefactores en la hacienda, pero sugerimos llevar abrigo elegante.'
      }
    ]
  }
];

export const arequipaGuideBanner: GuideBannerData = {
  title: '¿Dudas sobre traslados o actividades en la ciudad?',
  description: 'Estaremos encantados de orientarte con contactos de choferes de confianza y reservas previas.',
  buttonText: 'Contáctanos',
  buttonHref: '#contacto'
};
