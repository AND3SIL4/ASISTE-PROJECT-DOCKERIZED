import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { AsistenciaService } from 'src/app/private/services/asistencia.service';
import { GeneralDataService } from 'src/app/private/services/general-data.service';
import { NovedadService } from 'src/app/private/services/novedades.service';
import { SnackbarService } from 'src/app/private/services/snackbar.service';

@Component({
  selector: 'app-justificaciones',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  templateUrl: './justificaciones.component.html',
  styleUrls: ['./justificaciones.component.scss'],
})
export class JustificacionesComponent implements OnInit {
  // Inicializacion de variables
  nombreAprendiz!: string;

  fichaAprendiz!: number;
  textLabelFile: string = 'Seleccione un archivo';
  idAsistencia!: number;
  documentoAprendiz!: number;
  fileValue!: File;

  constructor(
    private _generalDataService: GeneralDataService,
    private fb: FormBuilder,
    private _novedadService: NovedadService,
    private _asistenciaService: AsistenciaService,
    private router: Router,
    private _snackBarService: SnackbarService
  ) {}

  // Hook para iniciar valores de las variables
  // Hacer llamados a la API REST para renderizar datos en el template
  ngOnInit(): void {
    this._asistenciaService.idAsistencia.subscribe((value) => {
      this.idAsistencia = value;
      if (value === null) {
        this._snackBarService.openSnackBar(
          'Error, por favor intente de nuevo',
          'center'
        );
        this.router.navigateByUrl('/home/asistencia');
      }
    });
    this._generalDataService.getAprendizData().subscribe({
      next: (resp) => {
        this.nombreAprendiz = `${resp[0].nombres_aprendiz} ${resp[0].apellidos_aprendiz}`;
        this.documentoAprendiz = resp[0].documento_aprendiz;
        this.fichaAprendiz = resp[0].ficha_aprendiz;
      },
      error: (err) => console.error(err),
    });
  }

  // Grupo de formulario
  formularioPostNovedad = this.fb.group({
    tipo_novedad: ['', [Validators.required]],
    observaciones: ['', [Validators.required]],
    archivo_adjunto: ['', [Validators.required]],
  });

  // Metodo para obtener el valor del archivo a enviar
  onFileSelected(event: any) {
    const fileInput = event.target;
    this.fileValue = fileInput.files[0] as File;
    if (fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      this.textLabelFile = selectedFile.name;
    }
  }

  // Metodo para enviar datos y hacer peticion POST
  onClickSentNovedad() {
    const body = {
      tipo_novedad: this.formularioPostNovedad.value.tipo_novedad,
      observaciones: this.formularioPostNovedad.value.observaciones,
      archivo_adjunto: this.fileValue,
      aprendiz: this.documentoAprendiz,
      asistencia: this.idAsistencia,
    };

    this._novedadService.postJustificacionNovedad(body).subscribe({
      next: (response) => {
        this._snackBarService.openSnackBar(
          `Justificacón de novedad '${response.tipo_novedad}' creada correctamente`,
          'center'
        );
      },
      error: (error) => console.error(error),
    });
  }
}
