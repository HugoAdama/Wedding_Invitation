import type { PartnerProfile, CoupleTriviaItem } from '../types/wedding';

export const danielaProfile: PartnerProfile = {
  name: 'Daniela',
  fullName: 'Daniela Fernanda Quispe Rojas',
  role: 'La Novia',
  age: 30,
  birthDate: '15 de septiembre de 1996',
  birthPlace: 'Arequipa, Perú',
  occupation: 'Médica pediatra',
  education: 'Médico Cirujano por la UNSA, especialidad en Pediatría por la UPCH',
  zodiac: 'Virgo',
  personality: 'Metódica, cálida, observadora. Le encanta leer novelas históricas, correr al amanecer y tomar café mirando por la ventana.',
  personalStory: [
    'Creció en el barrio tradicional de Yanahuara, en una casa con un patio lleno de geranios.',
    'Su abuela le enseñó a identificar constelaciones desde el techo de la casa.',
    'Estudió medicina porque quería "cuidar a los que empiezan a vivir".',
    'Hace turnos nocturnos en pediatría; dice que los niños nacen más seguido en noches de luna llena.',
    'Tiene una colección de 23 libros de Cortázar, Borges y Neruda.'
  ],
  favoriteQuote: 'Hay que ser como el agua: adaptarse sin perder la esencia.',
  starlitConnection: [
    {
      title: 'Infancia',
      description: 'Su abuela le enseñó los nombres de las constelaciones desde el techo de su casa en Yanahuara.'
    },
    {
      title: 'Profesión',
      description: 'Trabaja de noche en el hospital; la luz de las estrellas la acompaña en las guardias largas.'
    },
    {
      title: 'Significado',
      description: '«Daniela» viene del hebreo "Dios es mi juez"; en clave poética, "la que mira al cielo".'
    }
  ],
  quickFavorites: {
    comida: 'Rocoto relleno',
    bebida: 'Café pasado',
    pelicula: 'La La Land',
    libro: 'Rayuela — Julio Cortázar',
    lugar: 'Mirador de Yanahuara',
    hobbies: 'Correr al amanecer, leer novelas históricas',
    idiomas: 'Español, inglés, francés básico'
  },
  photoUrl: '/images/daniela.webp'
};

export const rodrigoProfile: PartnerProfile = {
  name: 'Rodrigo',
  fullName: 'Rodrigo Alonso Vega Mendoza',
  role: 'El Novio',
  age: 32,
  birthDate: '3 de octubre de 1994',
  birthPlace: 'Arequipa, Perú',
  occupation: 'Profesor de Literatura',
  education: 'Licenciado en Literatura por la UNSA, Maestría en Literatura Latinoamericana por la PUCP',
  zodiac: 'Libra',
  personality: 'Reflexivo, tranquilo, con un sentido del humor sutil. Le encanta escribir, tocar piano y caminar de noche.',
  personalStory: [
    'Creció en el barrio de Cayma, en una casa llena de libros: su padre era librero.',
    'Aprendió a leer antes de ir a la escuela gracias a las bibliotecas familiares.',
    'Toca el piano desde los 8 años; compone piezas cortas e íntimas.',
    'Da clases de literatura latinoamericana en la UNSA y sus alumnos lo aprecian profundamente.',
    'Escribe en un cuaderno de cuero que compró en Buenos Aires.'
  ],
  favoriteQuote: 'La literatura es la memoria del mundo.',
  starlitConnection: [
    {
      title: 'Literatura',
      description: 'Borges, Cortázar y Neruda escribieron sobre el cielo, las constelaciones y el infinito que siempre comparte en sus clases.'
    },
    {
      title: 'Vocación',
      description: 'Enseña El Principito, Cien años de soledad y Rayuela; obras impregnadas de metáforas astronómicas.'
    },
    {
      title: 'Significado',
      description: '«Rodrigo» proviene del germánico "famoso por su gloria"; en clave poética, "el que brilla".'
    }
  ],
  quickFavorites: {
    comida: 'Adobo arequipeño',
    bebida: 'Pisco sour',
    pelicula: 'Interestelar',
    libro: 'El Principito — Antoine de Saint-Exupéry',
    lugar: 'Plaza de Armas de noche',
    hobbies: 'Tocar el piano, escribir narrativa',
    idiomas: 'Español, inglés, portugués, francés'
  },
  photoUrl: '/images/rodrigo.webp'
};

export const coupleTrivia: CoupleTriviaItem[] = [
  { attribute: 'Comida favorita', daniela: 'Rocoto relleno', rodrigo: 'Adobo arequipeño' },
  { attribute: 'Bebida predilecta', daniela: 'Café pasado', rodrigo: 'Pisco sour' },
  { attribute: 'Película favorita', daniela: 'La La Land', rodrigo: 'Interestelar' },
  { attribute: 'Libro de cabecera', daniela: 'Rayuela — Cortázar', rodrigo: 'El Principito — Saint-Exupéry' },
  { attribute: 'Canción compartida', daniela: '«La Vie en Rose»', rodrigo: '«La Vie en Rose»' },
  { attribute: 'Rincón de Arequipa', daniela: 'Mirador de Yanahuara', rodrigo: 'Plaza de Armas de noche' },
  { attribute: 'Mascota compartida', daniela: 'Proust (conejo)', rodrigo: 'Proust (conejo)' },
  { attribute: 'Idiomas', daniela: 'Español, inglés, francés básico', rodrigo: 'Español, inglés, portugués, francés' },
  { attribute: 'Signo zodiacal', daniela: 'Virgo', rodrigo: 'Libra' },
  { attribute: 'Frase que los define', daniela: '«Hay que ser como el agua.»', rodrigo: '«La literatura es la memoria del mundo.»' }
];

export const coupleSharedSong = {
  title: 'La Vie en Rose',
  artist: 'Édith Piaf',
  adaptation: 'La vie en ciel'
};
