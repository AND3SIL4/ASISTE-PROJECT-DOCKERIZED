import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINT } from './api.config';
import { ErrorService } from './error.service';
import { Observable, catchError, BehaviorSubject } from 'rxjs';
import {
  NovedaPostInterface,
  ViewNovedadesAprendizInterface,
} from './interfaces/novedades.interface';
import { NovedadData } from 'src/app/public/components/table-novedades/table-novedades.component';

@Injectable({
  providedIn: 'root',
})
export class NovedadService {
  url = `${API_ENDPOINT}`; //ENDPOINT para hacer llamados a la API

  constructor(private _http: HttpClient, private _errorService: ErrorService) {}

  // Variable que almacena datos de las tablas de novedades
  datosTabla = new BehaviorSubject<NovedadData[]>([]);

  // Metodo para actualizar datos de la tabla
  actualizarDatosTabla(nuevosValores: NovedadData[]) {
    this.datosTabla.next(nuevosValores);
  }

  // Metodo para obtener datos de aprendiz
  getNovedadesData(): Observable<ViewNovedadesAprendizInterface[]> {
    const token = this._errorService.getTokenAuth();

    const setHeaders = {
      Authorization: `Token ${token}`,
    };

    return this._http
      .get<ViewNovedadesAprendizInterface[]>(
        `${this.url}/asistencia/novedades/`,
        { headers: setHeaders }
      )
      .pipe(catchError(this._errorService.handleError));
  }

  // Metodo para obtener datos de una novedad en especial
  getNovedadPerNovedad(
    idNovedad: number | null
  ): Observable<ViewNovedadesAprendizInterface> {
    const token = this._errorService.getTokenAuth();

    const setHeaders = {
      Authorization: `Token ${token}`,
    };

    return this._http
      .get<ViewNovedadesAprendizInterface>(
        `${this.url}/asistencia/novedades/${idNovedad}`,
        {
          headers: setHeaders,
        }
      )
      .pipe(catchError(this._errorService.handleError));
  }

  // Variable que almacena el ID de la novedad
  idNovedad = new BehaviorSubject<number | null>(null);

  // Metodo para actualizar el ID de la novedad
  acctualizarIdNovedad(nuevoIdNovedad: number) {
    this.idNovedad.next(nuevoIdNovedad);
  }

  // Metodo para actualizar la novedad mediante peticion PATCH para usuario Instructor
  updateNovedadInstructor(
    body: any,
    idNovedad: number | null
  ): Observable<ViewNovedadesAprendizInterface> {
    const token = this._errorService.getTokenAuth();

    const setHeaders = {
      Authorization: `Token ${token}`,
    };

    return this._http
      .patch<ViewNovedadesAprendizInterface>(
        `${this.url}/asistencia/novedades/${idNovedad}/`,
        body,
        {
          headers: setHeaders,
        }
      )
      .pipe(catchError(this._errorService.handleError));
  }

  // Metodo para crear una justificacion de una novedad de inasistencia
  postJustificacionNovedad(
    body: any
  ): Observable<ViewNovedadesAprendizInterface> {
    const token = this._errorService.getTokenAuth();

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Token ${token}`,
      }),
    };

    const formData = new FormData();

    // Agregar datos al formulario
    formData.append('tipo_novedad', body.tipo_novedad);
    formData.append('observaciones', body.observaciones);
    formData.append('aprendiz', body.aprendiz);
    formData.append('asistencia', body.asistencia);
    formData.append('archivo_adjunto', body.archivo_adjunto);

    return this._http
      .post<ViewNovedadesAprendizInterface>(
        `${this.url}/asistencia/novedades/`,
        formData,
        httpOptions
      )
      .pipe(catchError(this._errorService.handleError));
  }
}
