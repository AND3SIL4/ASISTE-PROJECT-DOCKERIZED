import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { DataUserInterface } from './interfaces/dataUser.interface';
import { API_ENDPOINT } from './api.config';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class DataUserService {
  url = `${API_ENDPOINT}/users/user/`; // Endpoint para peticiones al Backend

  constructor(private _http: HttpClient, private _errorService: ErrorService) {}

  // Metodo para obtener la informacion del usuario actual que se logueo en la app
  getDataCurrentUser(): Observable<DataUserInterface> {
    const token = this._errorService.getTokenAuth();

    const setHeaders = {
      Authorization: `Token ${token}`,
    };

    return this._http
      .get<DataUserInterface>(this.url, { headers: setHeaders })
      .pipe(catchError(this._errorService.handleError));
  }
}
