export interface GeneralDataApendiz {
  documento_aprendiz: number;
  user_details: {
    document: number;
    username: string;
    email: string;
    user_type: string;
  };
  ficha_details: {
    id_ficha: number;
    horario_ficha: [
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
    programa_ficha: {
      id_programa: number;
      coordinacion_programa: {
        id_coordinacion: number;
        nombre_coordinacion: string;
      };
      nombre_programa: string;
    };
    nivel_formacion: string;
  };
  tipo_documento: string;
  nombres_aprendiz: string;
  apellidos_aprendiz: string;
  email_personal_aprendiz: string;
  email_institucional_aprendiz: string;
  numero_celular: number;
  genero_aprendiz: string;
  ficha_aprendiz: number;
  user: number;
}

export interface GeneralInstructorData {
  documento: number;
  user_details: {
    document: number;
    username: string;
    email: string;
    user_type: string;
  };
  fichas: [
    {
      id_ficha: number;
      horario_ficha: [
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
  ];
  nombres_instructor: string;
  apellidos_instructor: string;
  email_institucional: string;
  user: number;
  registro_asistencia?: [];
}
