export interface Deseo {
  id: string;
  autor: string;
  texto: string;
  fecha: string;
  likes: number;
}

export const initialGuestbookWishes: Deseo[] = [
  {
    id: 'd1',
    autor: 'Familia Quispe Valdivia',
    texto: 'Queridos Dani y Rodri, verlos crecer juntos y mirarse con esa complicidad única nos llena el corazón. ¡Que su amor siga brillando más que todas las estrellas de Arequipa!',
    fecha: 'Hace un momento',
    likes: 12
  },
  {
    id: 'd2',
    autor: 'Andrea & Carlos (Padrinos)',
    texto: '¡Se viene la noche más mágica de todas! Qué emoción celebrar su unión bajo el cielo que tanto aman. Todo nuestro cariño y bendiciones hoy y siempre.',
    fecha: 'Ayer',
    likes: 9
  },
  {
    id: 'd3',
    autor: 'Dra. Mariana Sotomayor',
    texto: 'De aquellas charlas interminables en la universidad a este gran paso. Dani y Rodrigo, son un hermoso ejemplo de ternura, paciencia y alegría compartida.',
    fecha: 'Hace 2 días',
    likes: 7
  },
  {
    id: 'd4',
    autor: 'Los amigos de la facultad',
    texto: 'Proust ya tiene su traje listo para el gran día. Los queremos infinito y estamos listos para brindar hasta el amanecer bajo las estrellas.',
    fecha: 'Hace 3 días',
    likes: 15
  }
];
