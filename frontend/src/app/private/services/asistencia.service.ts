import { Injectable } from '@angular/core';
import { API_ENDPOINT } from './api.config';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, BehaviorSubject } from 'rxjs';
import { ErrorService } from './error.service';
import {
  CrearAsistenciaInterface,
  ListaAprendicesInterface,
  RegistroHorarioInterface,
  RegistrosAsisitenciaAprendices,
  ViewAsistenciaAprendizInterface,
} from './interfaces/asistencia.interface';

@Injectable({
  providedIn: 'root',
})
export class AsistenciaService {
  url = `${API_ENDPOINT}`; // Endpoint base

  constructor(private http: HttpClient, private _errorService: ErrorService) {}

  // Variable tipo Observable que almacena los datos de de Asistencia Aprendiz
  datosAsistenciaAprendiz = new BehaviorSubject<
    ViewAsistenciaAprendizInterface[]
  >([]);

  // Metodo para actualizar los datos del Aprendiz
  actualizarDatosAprendiz(nuevosDatos: ViewAsistenciaAprendizInterface[]) {
    this.datosAsistenciaAprendiz.next(nuevosDatos);
  }

  // Variable que almacena el ID de la asistencia
  idAsistencia = new BehaviorSubject<number>(0);

  // Metodo para actualizar el ID de la asistencia
  actualizarIdAsistencia(nuevoIdAsistencia: number) {
    this.idAsistencia.next(nuevoIdAsistencia);
  }

  // Metodo para obtener los datos de la asistencia
  getAsistenciaData(): Observable<ViewAsistenciaAprendizInterface[]> {
    const token = this._errorService.getTokenAuth();

    const setHeaders = {
      Authorization: `Token ${token}`,
    };
    return this.http
      .get<ViewAsistenciaAprendizInterface[]>(
        `${this.url}/asistencia/asistencias/`,
        { headers: setHeaders }
      )
      .pipe(catchError(this._errorService.handleError));
  }

  // Variable tipo Observable que almacena la lista de aprendices
  listaAprendices = new BehaviorSubject<ListaAprendicesInterface[]>([]);

  // Metodo para actualizar la lista de aprendices
  actualizarListaAprendiz(nuevaLista: ListaAprendicesInterface[]) {
    this.listaAprendices.next(nuevaLista);
  }

  idFichaListaAsistencia = new BehaviorSubject<number>(0);

  actualizarIdDfichaLista(nuevoIdFicha: number) {
    this.idFichaListaAsistencia.next(nuevoIdFicha);
  }

  // Metodo para obtener la lista de aprendices
  getListaAprendices(
    documentInstructor: number,
    idFicha: number
  ): Observable<ListaAprendicesInterface[]> {
    const token = this._errorService.getTokenAuth();

    const setHeaders = {
      Authorization: `Token ${token}`,
    };

    return this.http
      .get<ListaAprendicesInterface[]>(
        `${this.url}/asistencia/instructores/${documentInstructor}/lista_aprendices/?ficha_id=${idFicha}`,
        { headers: setHeaders }
      )
      .pipe(catchError(this._errorService.handleError));
  }

  // Variables de tipo Observable que almancenan los datos del documento del aprendiz y el id de la ficha
  documentoAprendizAsistencia = new BehaviorSubject<number>(0);
  fichaAprendizAsistencia = new BehaviorSubject<number>(0);

  // Metodo para actualizar las varibales de documento y ficha aprendiz
  updateDataForAsistencia(nuevoDocumento: number, nuevaFicha: number) {
    this.documentoAprendizAsistencia.next(nuevoDocumento);
    this.fichaAprendizAsistencia.next(nuevaFicha);
  }

  // Metodo para  hacer peticion POST y crear e registro de asistencia
  postRegistroDeAsistencia(
    body: CrearAsistenciaInterface,
    documentoInstructor: number
  ): Observable<RegistroHorarioInterface> {
    const token = this._errorService.getTokenAuth();

    const setHeaders = {
      Authorization: `Token ${token}`,
    };

    return this.http
      .post<RegistroHorarioInterface>(
        `${this.url}/asistencia/instructores/${documentoInstructor}/registrar_asistencia/`,
        body,
        { headers: setHeaders }
      )
      .pipe(catchError(this._errorService.handleError));
  }

  // Metodo para obtener la asistencia del aprendiz
  getAsistenciasAprendiz(
    documentoInstructorAsistencia: number,
    documentoAprendiz: number
  ): Observable<RegistrosAsisitenciaAprendices[]> {
    const token = this._errorService.getTokenAuth();

    const setHeaders = {
      Authorization: `Token ${token}`,
    };

    return this.http
      .get<RegistrosAsisitenciaAprendices[]>(
        `${this.url}/asistencia/ver_asistencias/${documentoInstructorAsistencia}/?aprendiz_documento=${documentoAprendiz}`,
        { headers: setHeaders }
      )
      .pipe(catchError(this._errorService.handleError));
  }

  idAsistenciaData = new BehaviorSubject<number>(0);

  actualizarIDAsistencia(nuevoId: number) {
    this.idAsistenciaData.next(nuevoId);
  }

  updateAsistenciaAprendiz(body: any, idAsistencia: number): Observable<any> {
    const token = this._errorService.getTokenAuth();

    const setHeaders = {
      Authorization: `Token ${token}`,
    };

    return this.http
      .patch<any>(
        `${this.url}/asistencia/actualizar_asistencia/${idAsistencia}/`,
        body,
        { headers: setHeaders }
      )
      .pipe(catchError(this._errorService.handleError));
  }
}
