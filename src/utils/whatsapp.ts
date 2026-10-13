export interface RsvpConfirmationData {
  asiste: boolean;
  nombre: string;
  personas?: string | number;
  menu?: string;
  restricciones?: string;
  cancion?: string;
  mensajeAusencia?: string;
}

export function buildRsvpWhatsAppMessage(data: RsvpConfirmationData): string {
  if (data.asiste) {
    let texto = `¡Hola Daniela y Rodrigo! Confirmo mi asistencia con mucha alegría a su boda bajo las estrellas.`;
    texto += `\n\n*Nombre:* ${data.nombre}`;
    texto += `\n*Pases / Personas:* ${data.personas || 1}`;
    texto += `\n*Menú elegido:* ${data.menu || 'Tradicional arequipeño'}`;

    if (data.restricciones) {
      texto += `\n*Restricciones/Alergias:* ${data.restricciones}`;
    }
    if (data.cancion) {
      texto += `\n*Canción para la fiesta:* ${data.cancion}`;
    }
    return texto;
  } else {
    let texto = `Hola Daniela y Rodrigo. Les escribo para felicitarlos de corazón por su boda. Lamentablemente no podré acompañarlos físicamente, pero estaré con ustedes en pensamiento y buenos deseos.`;
    texto += `\n\n*Nombre:* ${data.nombre}`;

    if (data.mensajeAusencia) {
      texto += `\n*Mensaje:* ${data.mensajeAusencia}`;
    }
    return texto;
  }
}

export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
