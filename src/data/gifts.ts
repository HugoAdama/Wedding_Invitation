import type { GiftOption } from '../types/wedding';

export const giftQuote = 'Tu presencia y tu cariño son el regalo más valioso que podemos recibir. Si además deseas hacernos un presente para nuestro nuevo hogar y proyectos juntos, ponemos a tu disposición las siguientes opciones:';

export const giftOptions: GiftOption[] = [
  {
    title: 'Lluvia de sobres',
    badge: 'Tradicional',
    description: 'Dispondremos de un buzón celestial sellado en la recepción de la hacienda para que deposites tu sobre con buenos deseos durante la velada.'
  },
  {
    title: 'Transferencia bancaria directa',
    badge: 'Digital',
    description: 'Puedes realizar un depósito o transferencia a nombre de Daniela Fernanda Quispe Rojas:',
    details: [
      { label: 'Banco', value: 'Banco de Crédito del Perú (BCP)' },
      { label: 'Cuenta en soles', value: '123-456789-0-12', isCode: true },
      { label: 'Código Interbancario (CCI)', value: '00212300456789012123', isCode: true },
      { label: 'Billeteras digitales (Yape / Plin)', value: '+51 999 777 666', isCode: true }
    ]
  },
  {
    title: 'Mesa de novios en tienda',
    badge: 'Lista de Bodas',
    description: 'Hemos seleccionado artículos para nuestro hogar en Saga Falabella:',
    details: [
      { label: 'Tienda', value: 'Saga Falabella' },
      { label: 'Código de novios', value: 'DANIRODRIGO2027', isCode: true }
    ],
    action: {
      label: 'Consultar código en tienda',
      url: '#'
    }
  },
  {
    title: 'Un libro con dedicatoria',
    badge: 'Especial & Poético',
    description: 'Como amantes de la literatura y las letras, nos haría muy felices recibir tu libro preferido con una dedicatoria escrita de puño y letra en la primera página para enriquecer nuestra biblioteca familiar.'
  }
];
