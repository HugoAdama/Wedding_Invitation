import type { VenueDetail, ScheduleEvent } from '../types/wedding';

export const weddingVenues: VenueDetail[] = [
  {
    title: 'Ceremonia Civil & Simbólica',
    time: '5:30 p. m.',
    name: 'Hacienda San José',
    location: 'Km 8, Carretera Arequipa–Yura, Arequipa',
    description: 'Comenzamos puntualmente al atardecer, cuando el cielo arequipeño se tiñe de tonos violeta, ocre y dorado sobre la campiña.',
    image: '/images/ceremonia.webp'
  },
  {
    title: 'Recepción & Fiesta',
    time: '7:30 p. m.',
    name: 'Misma hacienda (Jardín Principal)',
    location: 'Km 8, Carretera Arequipa–Yura, Arequipa',
    description: 'Bajo el manto de la noche, rodeados de guirnaldas de micro-luces cálidas, velas flotantes y música acústica en directo.',
    image: '/images/recepcion.webp'
  }
];

export const daySchedule: ScheduleEvent[] = [
  {
    time: '5:30 p. m.',
    title: 'Ceremonia al atardecer',
    description: 'Recepción de invitados y votos bajo el crepúsculo arequipeño.'
  },
  {
    time: '7:00 p. m.',
    title: 'Cóctel de bienvenida',
    description: 'Brindis con pisco sour y bocaditos tradicionales mientras cae la noche.'
  },
  {
    time: '7:30 p. m.',
    title: 'Recepción al aire libre',
    description: 'Apertura de mesas decoradas con constelaciones y libros clásicos.'
  },
  {
    time: '8:30 p. m.',
    title: 'Cena bajo carpa iluminada',
    description: 'Banquete gourmet fusión arequipeña bajo un techo de luces suspendidas.'
  },
  {
    time: '10:00 p. m.',
    title: 'Primer baile bajo las estrellas',
    description: 'Vals y tema central: «La Vie en Rose» interpretada en vivo por ensamble de piano y cuerdas.'
  },
  {
    time: '11:30 p. m.',
    title: 'After party & Observación estelar',
    description: 'Zona lounge con telescopios profesionales dirigidos a Júpiter y la Vía Láctea, barra libre y fiesta.'
  },
  {
    time: '2:00 a. m.',
    title: 'Cierre de la noche',
    description: 'Despedida mágica bajo el cielo de Arequipa (domingo 13 de junio).'
  }
];

export const venueLocation = {
  name: 'Hacienda San José',
  address: 'Km 8, Carretera Arequipa–Yura, Arequipa, Perú',
  mapEmbedUrl: 'https://www.google.com/maps?q=Carretera+Arequipa+Yura+Km+8&output=embed',
  whatsappLocationText: 'Hola, ¿me compartes la ubicación exacta de la Hacienda San José para la boda de Daniela y Rodrigo?'
};
