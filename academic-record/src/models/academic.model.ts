export interface Estudiante {
  numero_documento: string;
  nombres: string;
  apellidos: string;
  correo_institucional: string;
  semestre_actual: number;
}

export interface Asignatura {
  codigo_asignatura: string;
  nombre_asignatura: string;
  creditos: number;
}

export interface Curso {
  id_curso: string;
  codigo_asignatura: string;
  periodo: string;
  docente_asignado: string;
}

export interface Matricula {
  id_matricula: string;
  numero_documento: string;
  id_curso: string;
}

export interface Calificacion {
  id_matricula: string;
  seguimiento_1: number;
  seguimiento_2: number;
  seguimiento_3: number;
  examen_final: number;
}
