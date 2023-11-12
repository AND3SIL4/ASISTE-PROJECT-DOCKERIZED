import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

import { Router } from '@angular/router';
import { API_ENDPOINT } from './api.config';
import { SnackbarService } from './snackbar.service';
import { ErrorService } from './error.service';
import { NewUserInterface } from './interfaces/newUser.interface';

@Injectable({
  providedIn: 'root',
})
export class CreateUsersService {
  url = `${API_ENDPOINT}/users/create/`; // Endpoint para peticiones al Backend

  constructor(
    private http: HttpClient,
    private snackBarService: SnackbarService,
    private router: Router,
    private _errorService: ErrorService
  ) {}

  // Metodo para crear un nuevo usuario
  createNewUser(
    document: number,
    username: string,
    firtsName: string,
    lastName: string,
    email: string,
    userType: string,
    password: string
  ): Observable<NewUserInterface> {
    const token = localStorage.getItem('token');
    if (!token) {
      this.snackBarService.openSnackBar(
        'No se ha encontrado el token de autorizacion',
        'center'
      );
      this.router.navigate(['/']);
      throw new Error('No se ha encontrado el token de autorizacion');
    }

    const setHeaders = {
      Authorization: `Token ${token}`,
    };

    const body = {
      document: document,
      username: username,
      first_name: firtsName,
      last_name: lastName,
      email: email,
      user_type: userType,
      password: password,
    };
    return this.http
      .post<NewUserInterface>(this.url, body, { headers: setHeaders })
      .pipe(catchError(this._errorService.handleError));
  }
}
