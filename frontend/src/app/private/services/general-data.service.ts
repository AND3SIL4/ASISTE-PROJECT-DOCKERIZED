import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINT } from './api.config';
import { ErrorService } from './error.service';
import { Observable, catchError, BehaviorSubject } from 'rxjs';
import { GeneralDataApendiz, GeneralInstructorData } from './interfaces/generalData.interface';

@Injectable({
  providedIn: 'root'
})
export class GeneralDataService {
  url= `${API_ENDPOINT}`;

  constructor(private _http : HttpClient, private _errorService: ErrorService) { }

  // Metodo para obtener datos de aprendiz
  getAprendizData(): Observable<GeneralDataApendiz[]> {
    const token = this._errorService.getTokenAuth()

    const setHeaders = {
      Authorization: `Token ${token}`,
    };

    return this._http
      .get<GeneralDataApendiz[]>(`${this.url}/asistencia/aprendices/`, { headers: setHeaders })
      .pipe(catchError(this._errorService.handleError));
  }

  // Variable que almacena el documento del instructor
  documentoInstructor = new BehaviorSubject<number>(1);

  // Metodo para actualizar el documento del instructor
  setDocumentoInstructor(nuevoDocumento: number) {
    this.documentoInstructor.next(nuevoDocumento);
  }

  // Metodo para obtener los datos de instructor
  getInstructorData(): Observable<GeneralInstructorData[]> {
    const token = this._errorService.getTokenAuth()

    const setHeaders = {
      Authorization: `Token ${token}`,
    };
    return this._http
      .get<GeneralInstructorData[]>(`${this.url}/asistencia/instructores/`, { headers: setHeaders })
      .pipe(catchError(this._errorService.handleError));
  }

  // Metodo para actualizar la informacion del Aprendiz
  updateAprendizData(idAprendiz: number, body: any): Observable<any> {
    const token = this._errorService.getTokenAuth()

    const setHeaders = {
      Authorization: `Token ${token}`,
    };


    return this._http
      .patch(`${this.url}/asistencia/aprendices/${idAprendiz}/`, body, { headers: setHeaders })
      .pipe(catchError(this._errorService.handleError));
  }

  // Metodo para actualizar la informacion del Instructor
  updateInstructorData(body: any, idInstructor: number): Observable<any>{
    const token = this._errorService.getTokenAuth()

    const setHeaders = {
      Authorization: `Token ${token}`,
    };

    return this._http
      .patch(`${this.url}/asistencia/instructores/${ idInstructor }/update_instructor/`, body, { headers: setHeaders })
      .pipe(catchError(this._errorService.handleError));
  }

  // Metodo para actualizar los datos del usuario para Aprendiz e Instructor
  updateUserData(body: any): Observable<any>{
    const token = this._errorService.getTokenAuth()

    const setHeaders = {
      Authorization: `Token ${token}`,
    };

    return this._http
      .patch(`${this.url}/users/user/`, body, { headers: setHeaders })
      .pipe(catchError(this._errorService.handleError));
  }
}
