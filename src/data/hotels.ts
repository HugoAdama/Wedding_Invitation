import type { HotelRecommendation } from '../types/wedding';

export const recommendedHotels: HotelRecommendation[] = [
  {
    name: 'Hostal Villa Campiña',
    distance: 'A 10 minutos de la hacienda',
    pricePerNight: 'S/ 210',
    notes: 'Habitaciones acogedoras con vista a la campiña de Yura y estacionamiento privado.'
  },
  {
    name: 'Hotel Casona Yanahuara',
    distance: 'A 20 minutos de la hacienda',
    pricePerNight: 'S/ 290',
    notes: 'Junto al emblemático mirador con vistas incomparables a los tres volcanes y la ciudad.'
  },
  {
    name: 'Hotel Plaza del Misti',
    distance: 'A 25 minutos de la hacienda',
    pricePerNight: 'S/ 360',
    notes: 'Ubicado en el Centro Histórico, frente a la Plaza de Armas y con arquitectura en sillar colonial.'
  }
];

export const hotelNotice = 'Precios de referencia por noche. Se sugiere reservar con la debida anticipación: junio es temporada alta turística y de festividades en Arequipa. Menciona la boda de Daniela & Rodrigo para tarifas con descuento de grupo.';
