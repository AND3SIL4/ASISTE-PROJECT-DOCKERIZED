import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { AsistenciaService } from 'src/app/private/services/asistencia.service';
import { GeneralDataService } from 'src/app/private/services/general-data.service';
import {
  CrearAsistenciaInterface,
  SelectHorarioInterface,
} from 'src/app/private/services/interfaces/asistencia.interface';
import { SnackbarService } from 'src/app/private/services/snackbar.service';
import { EditarAsistenciaComponent } from '../editar-asistencia/editar-asistencia.component';

@Component({
  selector: 'app-registro-asistencia',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatRadioModule,
    EditarAsistenciaComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './registro-asistencia.component.html',
  styleUrls: ['./registro-asistencia.component.scss'],
})
export class RegistroAsistenciaComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _asistenciaService: AsistenciaService,
    private _generalDataService: GeneralDataService,
    private _snackBarService: SnackbarService
  ) {}

  // Creacion de variables
  documentoAprendiz!: number;
  fichaAprendiz!: number;

  selectedDate!: string;
  isDateInvalid: boolean = false;

  // Hook para inicializar valores y renderizar informacion de la API
  ngOnInit(): void {
    this._asistenciaService.documentoAprendizAsistencia.subscribe((value) => {
      this.documentoAprendiz = value;
    });
    this._asistenciaService.fichaAprendizAsistencia.subscribe((value) => {
      this.fichaAprendiz = value;
    });

    this._generalDataService.getInstructorData().subscribe({
      next: (response) => {
        response.forEach((element) => {
          element.fichas.forEach((e) => {
            e.horario_ficha.forEach((m) => {
              this.horarios.push({
                dia: m.dia,
                horario_id: m.horario_id,
                salon: m.salon,
                asignatura: m.asignatura,
              });
            });
          });
        });
      },
      error: (error) => console.error(error),
    });
  }

  // Obetener datos del formulario de registro de asistencia
  formAsistencia = this.fb.group({
    presente: ['', [Validators.required]],
    horario: ['', [Validators.required]],
    date: ['', [Validators.required]],
  });

  // Arreglo para asignar al selector del horario
  horarios: SelectHorarioInterface[] = [];

  // Metodo para crear registro de asistencia
  onClickToCreateAsistencia() {
    this._generalDataService.documentoInstructor.subscribe((value) => {});
    const body: CrearAsistenciaInterface = {
      ficha_id: this.fichaAprendiz,
      horario_id: this.formAsistencia.value.horario,
      aprendiz: {
        documento_aprendiz: this.documentoAprendiz,
      },
      fecha_asistencia: this.formAsistencia.value.date,
      presente: this.formAsistencia.value.presente,
    };

    this._asistenciaService
      .postRegistroDeAsistencia(body, 2147483645)
      .subscribe({
        next: (response) => {
          this._snackBarService.openSnackBar(
            `APRENDIZ ${response.nombres_aprendiz.toUpperCase()} ${response.apellidos_aprendiz.toUpperCase()} '${response.presente.toUpperCase()}'`,
            'center'
          );
        },
        error: (error) => console.error(error),
      });
  }

  // Metodo para validar las fechas permitidas
  onDateChange() {
    const selectedDate = new Date(this.selectedDate);
    const cureentDate = new Date();

    // Calcular la fecha limite
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(cureentDate.getDate() - 30);

    if (selectedDate < oneWeekAgo || selectedDate > cureentDate) {
      this._snackBarService.openSnackBar(
        'La fecha seleccionada no es valida',
        'center'
      );
      this.isDateInvalid = true;
      this.formAsistencia.reset();
    } else {
      this.isDateInvalid = false;
    }
  }

  // Metodo para actualizar el registro de asistencia
  onUpdateAsistanceRegister() {}
}
