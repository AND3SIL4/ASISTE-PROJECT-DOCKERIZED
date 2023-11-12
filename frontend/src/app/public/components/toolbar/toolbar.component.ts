import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { DataUserService } from 'src/app/private/services/data-user.service';
import { SnackbarService } from 'src/app/private/services/snackbar.service';
import { BotonNavComponent } from '../boton-nav/boton-nav.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSlideToggleModule,
    BotonNavComponent,
    RouterModule,
    MatMenuModule,
    MatTooltipModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  // Inicializacion de variables para ser asignadas
  isAprendizUser!: boolean;
  isInstructorUser!: boolean;
  options: string[] = [];
  userName: string = 'USER NAME';

  constructor(
    private _dataUserService: DataUserService,
    private _router: Router,
    private _snackBarService: SnackbarService
  ) {}

  // Hook para inicializacion de variables y renderizacion de datos inicial
  ngOnInit(): void {
    this._dataUserService.getDataCurrentUser().subscribe({
      next: (response) => {
        this.userName = `${response.first_name.toUpperCase()} ${response.last_name.toUpperCase()} | ${response.user_type.toUpperCase()}`;
        if (response.user_type === 'APRENDIZ') {
          this.isAprendizUser = true;
          this.isInstructorUser = false;
        } else if (response.user_type === 'INSTRUCTOR') {
          this.isAprendizUser = false;
          this.isInstructorUser = true;
        }
      },
      error: (error) => {
        console.info('Error al obtener los datos', error);
      },
    });
  }

  // Metodo para cerrar sesion
  handleClickLogOut() {
    localStorage.removeItem('token');
    this._router.navigateByUrl('/');
    this._snackBarService.openSnackBar('Hasta pronto', 'center');
  }
}
