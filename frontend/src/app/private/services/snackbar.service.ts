import { Injectable } from '@angular/core';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  durationInSeconds = 5; // duracion del snackbar

  constructor(private _snackBar: MatSnackBar) {}

  // Metodo para reutilizacion de snackbar como forma de alertar no intrusiva
  openSnackBar(message: string, position: MatSnackBarHorizontalPosition) {
    this._snackBar.open(message, 'Aceptar', {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: position,
    });
  }
}
