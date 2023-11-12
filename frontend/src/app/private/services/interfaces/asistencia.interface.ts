export interface ViewAsistenciaAprendizInterface {
  id: number;
  fecha_asistencia: string;
  nombres_aprendiz: string;
  apellidos_aprendiz: string;
  aprendiz: number;
  presente: string;
}

export interface ListaAprendicesInterface {
  documento_aprendiz: number;
  user_details?: {
    document: number;
    username: string;
    email: string;
    user_type: string;
  };
  ficha_details?: {
    id_ficha?: number;
    horario_ficha?: [
      {
        horario_id: number;
        dia: string;
        hora_entrada: string;
        hora_salida: string;
        salon: number;
        jornada: string;
        asignatura: string;
      }
    ];
    instructores?: [
      {
        documento: number;
        user_details: {
          document: number;
          username: string;
          email: string;
          user_type: string;
        };
        nombres_instructor: string;
        apellidos_instructor: string;
        email_institucional: string;
        user: number;
        registro_asistencia: [];
      }
    ];
    programa_ficha?: {
      id_programa?: number;
      coordinacion_programa: {
        id_coordinacion?: number;
        nombre_coordinacion?: string;
      };
      nombre_programa?: string;
    };
    nivel_formacion: string;
  };
  tipo_documento?: string;
  nombres_aprendiz: string;
  apellidos_aprendiz?: string;
  email_personal_aprendiz: string;
  email_institucional_aprendiz: string;
  numero_celular: number;
  genero_aprendiz?: string;
  ficha_aprendiz: number;
  user?: number;
}

export interface CrearAsistenciaInterface {
  ficha_id: number;
  horario_id: any;
  aprendiz: {
    documento_aprendiz: number;
  };
  fecha_asistencia: any;
  presente: string | null | undefined;
}

export interface HorariosInterface {
  id_ficha?: number;
  horario_ficha: {
    horario_id: number;
    dia: string;
    hora_entrada?: any;
    hora_salida?: any;
    salon: number;
    jornada?: string;
    asignatura?: string;
  };

  programa_ficha: {
    id_programa: number;
    coordinacion_programa: {
      id_coordinacion: number;
      nombre_coordinacion: string;
    };
    nombre_programa: string;
  };
  nivel_formacion: string;
}

export interface SelectHorarioInterface {
  horario_id: number;
  dia: string;
  hora_entrada?: any;
  hora_salida?: any;
  salon: number;
  jornada?: string;
  asignatura?: string;
}

export interface RegistroHorarioInterface {
  id: number;
  fecha_asistencia: any;
  nombres_aprendiz: string;
  apellidos_aprendiz: string;
  aprendiz: number;
  presente: string;
}

export interface RegistrosAsisitenciaAprendices {
  id: number;
  fecha_asistencia: any;
  nombres_aprendiz: string;
  apellidos_aprendiz: string;
  aprendiz: number;
  presente: string;
}
