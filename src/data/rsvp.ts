export interface RsvpMenuOption {
  id: string;
  value: string;
  label: string;
  description: string;
}

export const rsvpMenuOptions: RsvpMenuOption[] = [
  {
    id: 'res-romero',
    value: 'Lomo en salsa de hongos silvestres y puré trufado',
    label: 'Corte de Res Selección',
    description: 'Lomo fino con reducción de hongos de altura y puré trufado de papas nativas.'
  },
  {
    id: 'salmon-hierbas',
    value: 'Trucha andina asalmonada en costra de quinua',
    label: 'Pesca & Esencias del Valle',
    description: 'Filete sellado en costra crocante de tres quinuas sobre risotto de ají amarillo suave.'
  },
  {
    id: 'vegetariano-gourmet',
    value: 'Ravioles artesanales de calabaza y queso paria',
    label: 'Opción Vegetariana de Autor',
    description: 'Pasta fresca rellena de calabaza asada, mantequilla de salvia y láminas de queso paria.'
  }
];

export const rsvpDeadlines = {
  confirmationLimit: '15 de abril de 2027',
  whatsappNumber: '51999777666'
};
