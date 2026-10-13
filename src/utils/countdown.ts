export interface TimeRemaining {
  totalSeconds: number;
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
  haFinalizado: boolean;
}

export function calculateTimeRemaining(targetDate: string | Date | number): TimeRemaining {
  const targetTime = typeof targetDate === 'number'
    ? targetDate
    : new Date(targetDate).getTime();
  const ahora = Date.now();
  const diferencia = targetTime - ahora;

  if (diferencia <= 0) {
    return {
      totalSeconds: 0,
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
      haFinalizado: true
    };
  }

  const totalSegundos = Math.floor(diferencia / 1000);
  const dias = Math.floor(totalSegundos / 86400);
  const horas = Math.floor((totalSegundos % 86400) / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  return {
    totalSeconds: totalSegundos,
    dias,
    horas,
    minutos,
    segundos,
    haFinalizado: false
  };
}
