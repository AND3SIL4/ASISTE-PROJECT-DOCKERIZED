import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataUserService } from 'src/app/private/services/data-user.service';
import { NovedadService } from 'src/app/private/services/novedades.service';
import { SnackbarService } from 'src/app/private/services/snackbar.service';

@Component({
  selector: 'app-novedad',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  templateUrl: './novedad.component.html',
  styleUrls: ['./novedad.component.scss'],
})
export class NovedadComponent implements OnInit {
  // Tipos de usuarios
  isAprendizUser!: boolean;
  isInstructorUser!: boolean;

  constructor(
    private fb: FormBuilder,
    private _dataUserService: DataUserService,
    private _novedadSerivice: NovedadService,
    private _snackBarService: SnackbarService,
    private router: Router,
    private _http: HttpClient
  ) {}

  // Inicializacion de variables
  isValid!: boolean;

  novedadType!: string;
  nombreAprendiz!: string;
  documentoAprendiz!: number;
  numeroFicha!: number;
  observaciones!: string;
  estadoNovedad!: string;
  idNovedadTable!: number;
  archivoAdjunto!: string;

  newIdNovedad!: number | null;

  // Hook para inicializar valores y y hacer llamado a la API REST para renderizar datos
  ngOnInit(): void {
    this._novedadSerivice.idNovedad.subscribe((value) => {
      this.newIdNovedad = value;
      if (value === null) {
        this._snackBarService.openSnackBar(
          'Error en datos de novedad, por favor intente de nuevo',
          'center'
        );
        this.router.navigateByUrl('/home/novedades');
      }
    });

    this._dataUserService.getDataCurrentUser().subscribe({
      next: (resp) => {
        if (resp.user_type === 'APRENDIZ') {
          this.isAprendizUser = true;
          this.isInstructorUser = false;
          this._novedadSerivice
            .getNovedadPerNovedad(this.newIdNovedad)
            .subscribe({
              next: (response) => {
                this.novedadType = response.tipo_novedad;
                this.nombreAprendiz = `${response.nombre} ${response.apellidos}`;
                this.documentoAprendiz = response.documento;
                this.numeroFicha = response.ficha;
                this.observaciones = response.observaciones;
                this.idNovedadTable = response.id_novedad;
                this.archivoAdjunto = response.archivo_adjunto;
                if (response.estado_novedad) {
                  this.estadoNovedad = 'VALIDA';
                  this.isValid = true;
                } else {
                  this.estadoNovedad = 'NO VALIDADA';
                  this.isValid = false;
                }
              },
              error: (error) => console.error(error),
            });
        } else if (resp.user_type === 'INSTRUCTOR') {
          this.isAprendizUser = false;
          this.isInstructorUser = true;
          this._novedadSerivice
            .getNovedadPerNovedad(this.newIdNovedad)
            .subscribe({
              next: (response) => {
                this.novedadType = response.tipo_novedad;
                this.nombreAprendiz = `${response.nombre} ${response.apellidos}`;
                this.documentoAprendiz = response.documento;
                this.numeroFicha = response.ficha;
                this.observaciones = response.observaciones;
                this.idNovedadTable = response.id_novedad;
                this.archivoAdjunto = response.archivo_adjunto;
                if (response.estado_novedad) {
                  this.estadoNovedad = 'VALIDA';
                  this.isValid = true;
                } else {
                  this.estadoNovedad = 'NO VALIDADA';
                  this.isValid = false;
                }
              },
              error: (error) => console.error(error),
            });
        }
      },
      error: (err) => console.error(err),
    });
  }

  formNovedad = this.fb.group({
    estado_novedad: false,
  });

  // Metodo para aceptar las novedades
  onClickCheckBox(): void {
    this._novedadSerivice
      .updateNovedadInstructor(this.formNovedad.value, this.newIdNovedad)
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => console.error(error),
        complete: () => {
          this._snackBarService.openSnackBar(
            'Novedad actualizada correctamente',
            'center'
          );
          window.location.reload();
        },
      });
  }

  downloadFile() {
    // Obtener el url del archivo que esta sirviendo el backend
    const fileUrl = this.archivoAdjunto;

    // Hacer la peticion GET para poder descargar el archivo
    this._http.get(fileUrl, { responseType: 'blob' }).subscribe((data) => {
      const blob = new Blob([data], { type: 'application/pdf' });

      // Crear el archivo de tipo BOB
      const url = window.URL.createObjectURL(blob);

      // Obtener la extension del archivo para descargar
      const extension = fileUrl.split('.').pop();

      // Crear link para descargar archivo
      const a = document.createElement('a');
      a.href = url;
      a.download = `${this.novedadType.toUpperCase()}_${this.nombreAprendiz.toLocaleUpperCase()}_${
        this.documentoAprendiz
      }.${extension}`;

      // Simular click
      a.click();

      // Terminar proceso
      window.URL.revokeObjectURL(url);
    });
  }
}
