export interface ViewNovedadesAprendizInterface {
  id_novedad: number;
  user: string;
  ficha: number;
  nombre: string;
  apellidos: string;
  documento: number;
  tipo_novedad: string;
  observaciones: string;
  archivo_adjunto: string;
  estado_novedad: boolean;
  aprendiz: number;
  asistencia: number;
}

export interface NovedaPostInterface {
  tipo_novedad: string | null | undefined;
  observaciones: string | null | undefined;
  archivo_adjunto: File;
  aprendiz: number;
  asistencia: number;
}
