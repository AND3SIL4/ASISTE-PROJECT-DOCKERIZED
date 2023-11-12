import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, BehaviorSubject } from 'rxjs';
import { API_ENDPOINT } from './api.config';
import { ErrorService } from './error.service';
import { UserAuthInterface } from './interfaces/userAuth.interface';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = `${API_ENDPOINT}/users/token/`; // Endoint para hacer peticiones al backend

  constructor(private http: HttpClient, private _errorService: ErrorService) {}

  // Metodo para la autentiacion del usuario
  getAuth(document: number, password: string): Observable<UserAuthInterface> {
    const body = {
      document: document,
      password: password,
    };
    return this.http
      .post<UserAuthInterface>(this.url, body)
      .pipe(catchError(this._errorService.handleError));
  }
}
