import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { AsistenciaService } from 'src/app/private/services/asistencia.service';
import { GeneralDataService } from 'src/app/private/services/general-data.service';
import { SnackbarService } from 'src/app/private/services/snackbar.service';

interface DataEdit {
  id: number;
  name: string;
  fecha: any;
  status: string;
}

@Component({
  selector: 'app-editar-asistencia',
  standalone: true,
  imports: [
    NgFor,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  templateUrl: './editar-asistencia.component.html',
  styleUrls: ['./editar-asistencia.component.scss'],
})
export class EditarAsistenciaComponent implements OnInit {
  // Variables vinculadas al template
  datos: DataEdit[] = [];
  documentoAprendiz!: number;
  documentoInstructor!: number;

  constructor(
    private _asistenciaService: AsistenciaService,
    private _generalData: GeneralDataService,
    private fb: FormBuilder,
    private _snackBarService: SnackbarService
  ) {}

  // Hook para inicializar valores
  ngOnInit(): void {
    this._asistenciaService.documentoAprendizAsistencia.subscribe(
      (aprendiz) => {
        this.documentoAprendiz = aprendiz;
      }
    );
    this._generalData.getInstructorData().subscribe({
      next: (response) => {
        const instructor = response[0].documento;
        this._asistenciaService
          .getAsistenciasAprendiz(instructor, this.documentoAprendiz)
          .subscribe({
            next: (response) => {
              response.forEach((element) => {
                this.datos.push({
                  id: element.id,
                  name: `${element.nombres_aprendiz} ${element.apellidos_aprendiz}`,
                  fecha: element.fecha_asistencia,
                  status: element.presente,
                });
              });
            },
            error: (error) => {
              console.error(error);
            },
          });
      },
      error: (error) => console.error(error),
    });
  }

  // Grupo de formulario paa capturar el valor del checkbox radio
  formUpdate = this.fb.group({
    presente: ['', [Validators.required]],
  });

  // Metodo para hacer la actualizacion de la asistencia
  updateAsistance(ID: number) {
    this._asistenciaService.actualizarIDAsistencia(ID);
    this._asistenciaService.idAsistenciaData.subscribe((value) => {
      this._asistenciaService
        .updateAsistenciaAprendiz(this.formUpdate.value, value)
        .subscribe({
          next: (response) => {
            this._snackBarService.openSnackBar(
              `${response.nombres_aprendiz} ${
                response.apellidos_aprendiz
              } | ${response.presente.toUpperCase()} | ${
                response.fecha_asistencia
              }`,
              'center'
            );
          },
          error: (error) => console.error(error),
        });
    });
  }
}
