import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { MatChipsModule } from '@angular/material/chips';

import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { DataUserService } from 'src/app/private/services/data-user.service';
import { GeneralDataService } from 'src/app/private/services/general-data.service';

import { MatSelectModule } from '@angular/material/select';
import { SnackbarService } from 'src/app/private/services/snackbar.service';

export interface Data {
  name: string;
}

export interface DocumentType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-data-user',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    CdkDropList,
    CdkDrag,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.scss'],
})
export class DataUserComponent implements OnInit {
  isAprendizUser!: boolean;
  isInstructorUser!: boolean;

  primeraLetra!: string;

  documento!: number;

  idInstructor!: number;

  userDocument!: number;
  userType!: string;

  /**
   * Valores por defecto de los inputs
   */
  // User
  nombresUsuarioValue: string = '';
  apellidoUsuarioValue: string = '';
  emailValue: string = '';

  constructor(
    private _dataUserService: DataUserService,
    private _generalDataService: GeneralDataService,
    private fb: FormBuilder,
    private router: Router,
    private _snackBar: SnackbarService
  ) {}

  // Atributos para asignar a los contenedores de datos reactivos
  ownData: Data[] = [];

  fichaData: Data[] = [];

  userData: Data[] = [];

  horariosData: Data[] = [];

  ngOnInit(): void {
    this._dataUserService.getDataCurrentUser().subscribe({
      next: (response) => {
        this.userDocument = response.document;
        this.userType = response.user_type;
        if (response.user_type === 'APRENDIZ') {
          this.isAprendizUser = true;
          this.isInstructorUser = false;
          this._generalDataService.getAprendizData().subscribe({
            next: (response) => {
              let respuesta = response[0];
              this.nombresUsuarioValue =
                respuesta.nombres_aprendiz.toUpperCase();
              this.apellidoUsuarioValue =
                respuesta.apellidos_aprendiz.toUpperCase();
              this.emailValue = respuesta.email_personal_aprendiz.toLowerCase();
              this.primeraLetra = respuesta.nombres_aprendiz
                .charAt(0)
                .toUpperCase();
              this.documento = respuesta.documento_aprendiz;
              this.ownData = [
                {
                  name: `${respuesta.tipo_documento}. ${respuesta.documento_aprendiz}`,
                },
                { name: `${respuesta.email_institucional_aprendiz}` },
                { name: `${respuesta.numero_celular}` },
                { name: `${respuesta.genero_aprendiz}` },
              ];
              this.fichaData = [
                { name: `${respuesta.ficha_details.id_ficha}` },
                {
                  name: `${respuesta.ficha_details.programa_ficha.nombre_programa}`,
                },
                {
                  name: `${respuesta.ficha_details.programa_ficha.coordinacion_programa.nombre_coordinacion}`,
                },
                { name: `${respuesta.ficha_details.nivel_formacion}` },
              ];
              respuesta.ficha_details.horario_ficha.forEach((horario) => {
                this.horariosData.push({
                  name: `${horario.dia} - ${horario.asignatura} - ${horario.salon}`,
                });
              });

              this.userData = [
                { name: `${respuesta.user_details.user_type}` },
                { name: `${respuesta.user_details.username}` },
                { name: `${respuesta.user_details.email}` },
              ];
            },
            error: (error) => {
              console.log(error);
            },
          });
        } else if (response.user_type === 'INSTRUCTOR') {
          this.isInstructorUser = true;
          this.isAprendizUser = false;
          this._generalDataService.getInstructorData().subscribe({
            next: (response) => {
              const respuesta = response[0];
              this.primeraLetra = respuesta.nombres_instructor.charAt(0);
              this.nombresUsuarioValue =
                respuesta.nombres_instructor.toUpperCase();
              this.apellidoUsuarioValue =
                respuesta.apellidos_instructor.toUpperCase();
              this.emailValue = respuesta.email_institucional.toLowerCase();
              this.idInstructor = respuesta.documento;
              this.ownData = [
                { name: `CC. ${respuesta.documento}` },
                { name: `${respuesta.email_institucional}` },
              ];
              this.userData = [
                { name: `${respuesta.user_details.user_type}` },
                { name: `${respuesta.user_details.username}` },
                { name: `${respuesta.user_details.email}` },
              ];
            },
            error: (error) => {
              console.log(error);
            },
            complete: () => {
              console.log('Datos de instructor obtenidos');
            },
          });
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  /**
   * Metodos para hacer los contenedores de datos mas reactivos
   * @param event
   */
  dropOwnData(event: CdkDragDrop<Data[]>) {
    moveItemInArray(this.ownData, event.previousIndex, event.currentIndex);
  }
  dropFichaData(event: CdkDragDrop<Data[]>) {
    moveItemInArray(this.fichaData, event.previousIndex, event.currentIndex);
  }
  dropUserData(event: CdkDragDrop<Data[]>) {
    moveItemInArray(this.userData, event.previousIndex, event.currentIndex);
  }
  dropHorariosData(event: CdkDragDrop<Data[]>) {
    moveItemInArray(this.horariosData, event.previousIndex, event.currentIndex);
  }

  updateAprendizForm = this.fb.group({
    tipo_documento: ['', [Validators.required]],
    nombres_aprendiz: ['', [Validators.required]],
    apellidos_aprendiz: ['', [Validators.required]],
    email_personal_aprendiz: ['', [Validators.required]],
    email_institucional_aprendiz: ['', [Validators.required, Validators.email]],
    numero_celular: ['', [Validators.required]],
    genero_aprendiz: ['', [Validators.required]],
  });

  documentTypes: DocumentType[] = [
    { value: 'CC', viewValue: 'Cedula de ciudadania' },
    { value: 'TI', viewValue: 'Tarjeta de identidad' },
    { value: 'PEP', viewValue: 'PEP' },
  ];

  generoAprendiz: DocumentType[] = [
    { value: 'Masculino', viewValue: 'Masculino' },
    { value: 'Femenino', viewValue: 'Femenino' },
    { value: 'Homosexual', viewValue: 'Homosexual' },
    { value: 'Bisexual', viewValue: 'Bisexual' },
    { value: 'Transexual', viewValue: 'Transexual' },
  ];

  onUpdateAprendiz(): void {
    this._generalDataService
      .updateAprendizData(this.documento, this.updateAprendizForm.value)
      .subscribe({
        next: (response) => {
          this._snackBar.openSnackBar(
            `Usuario ${response.nombres_aprendiz} actualizado`,
            'center'
          );
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('Actualizacion exitosa');
          this.updateAprendizForm.reset();
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([this.router.url]);
        },
      });
  }

  updateDataInstructor = this.fb.group({
    nombres_instructor: ['', [Validators.required]],
    apellidos_instructor: ['', [Validators.required]],
    email_institucional: ['', [Validators.required, Validators.email]],
  });

  onUpdateInstructor(): void {
    this._generalDataService
      .updateInstructorData(this.updateDataInstructor.value, this.idInstructor)
      .subscribe({
        next: (response) => {
          this._snackBar.openSnackBar(
            `Usuario ${response.nombres_instructor} actualizado`,
            'center'
          );
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.log('Datos de instructor actualizados...');
          this.updateAprendizForm.reset();
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([this.router.url]);
        },
      });
  }

  formUpdateUserData = this.fb.group({
    document: [{ value: '', disabled: true }, [Validators.required]],
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    username: ['', [Validators.required]],
    user_type: [{ value: '', disabled: true }, [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  formControlPass: FormControl = new FormControl('', [Validators.required]);

  onUpdateUserData(): void {
    if (this.formControlPass.value === this.formUpdateUserData.value.password) {
      this._generalDataService
        .updateUserData(this.formUpdateUserData.value)
        .subscribe({
          next: (response) => {
            this._snackBar.openSnackBar(
              `Usuario ${response.first_name} ${response.last_name} actualizado`,
              'center'
            );
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            console.log('Actualizacion exitosa...');
            this.updateAprendizForm.reset();
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate([this.router.url]);
          },
        });
    } else {
      this._snackBar.openSnackBar(
        'Error, las contraseñas no coinciden',
        'center'
      );
    }
  }
}
