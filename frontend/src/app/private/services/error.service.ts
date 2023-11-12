import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { SnackbarService } from './snackbar.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(
    private _router: Router,
    private _snackBarService: SnackbarService
  ) {}

  // Metodo para reportar un error en caso de que se produzca en un llamado a un ENDPOINT
  public handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha generado un error', error.error);
    } else {
      alert('Ocurrio un error, intente de nuevo');
      console.error(
        'El servidor backend retorno un codigo de estado: ',
        error.status,
        error.error
      );
    }
    return throwError(
      () => new Error('Algo salio mal, por favor intente de nuevo.')
    );
  }

  // Metodo para hacer la consulta del token en el local storage
  public getTokenAuth() {
    const token = localStorage.getItem('token');
    if (!token) {
      this._snackBarService.openSnackBar(
        'No se ha encontrado el token de autorizacion',
        'center'
      );
      this._router.navigate(['/']);
      throw new Error('No se ha encontrado el token de autorizacion');
    }
    return token;
  }
}
