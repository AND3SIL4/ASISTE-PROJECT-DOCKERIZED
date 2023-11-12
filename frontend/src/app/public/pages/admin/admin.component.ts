import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';

import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CreateUsersService } from 'src/app/private/services/create-users.service';
import { SnackbarService } from 'src/app/private/services/snackbar.service';
import { SelectComponent } from '../../components/select/select.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, InputComponent, MatButtonModule, SelectComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(
    private createUserService: CreateUsersService,
    private snackBarService: SnackbarService
  ) {}
  // Argumentos para el boton
  contentButton: string = 'CREAR USUARIO';

  /**
   * Argumentos para los labels
   */
  // Documento
  labelContentDocument: string = 'Documento';
  typeDocument: string = 'number';
  labelMessageDocument: string = 'Ingrese el número de documento';
  // Username
  labelContentUsername: string = 'Nombre de usuario';
  typeUserName: string = 'string';
  labelMessageUserName: string = 'Ingrese el nombre de usuario';
  // Firts Name
  labelContentFirstName: string = 'Nombres';
  typeFirstName: string = 'string';
  labelMessageFirstName: string = 'Ingrese los nombres del usuario';
  // Last Name
  labelContentLastName: string = 'Apellidos';
  typeLastName: string = 'string';
  labelMessageLastName: string = 'Ingrese los apellidos del usuario';
  // Email
  labelContentEmail: string = 'Correo electronico';
  typeEmail: string = 'email';
  labelMessageEmail: string = 'Ingrese el correo electronico del usuario';
  // Password
  labelContentPassword: string = 'Contraseña';
  typePassword: string = 'password';
  labelMessagePassword: string = 'Ingrese la contraseña';

  // Argumentos para componente select
  title: string = 'Tipo de usuario';
  options = [
    { name: 'Aprendiz', value: 'APRENDIZ' },
    { name: 'Instructor', value: 'INSTRUCTOR' },
  ];
  errorMessageSelect: string = 'Esta selección es obligatoria';

  // Propiedades para capturar los valores de los inputs
  documentControl: FormControl = new FormControl();
  userNameControl: FormControl = new FormControl();
  firtsNameControl: FormControl = new FormControl();
  lastNameControl: FormControl = new FormControl();
  emailControl: FormControl = new FormControl();
  userTypeControl: FormControl = new FormControl();
  passwordControl: FormControl = new FormControl();

  /**
   * Metodo para hacer el llamado a la API y guardar los datos en la base de datos
   */
  onClickCreateUser() {
    // Captura de valores del formulario
    let documetoValue = this.documentControl.value;
    let userNameValue = this.userNameControl.value;
    let firtsNameValue = this.firtsNameControl.value;
    let lastNameValue = this.lastNameControl.value;
    let emailValue = this.emailControl.value;
    let userTypeValue = this.userTypeControl.value;
    let passwordValue = this.passwordControl.value;

    // Subscripcion al servicio encargado de hacer el llamado
    this.createUserService
      .createNewUser(
        documetoValue,
        userNameValue,
        firtsNameValue,
        lastNameValue,
        emailValue,
        userTypeValue,
        passwordValue
      )
      .subscribe({
        next: (response: any) => {
          console.log(response);
          // Reiniciar los valores de los FormControl
          this.documentControl.reset();
          this.userNameControl.reset();
          this.firtsNameControl.reset();
          this.lastNameControl.reset();
          this.emailControl.reset();
          this.userTypeControl.reset();
          this.passwordControl.reset();
        },
        error: (error: any) => {
          console.error(error);
          this.contentButton = 'ERROR, POR FAVOR INTENTE DE NUEVO';
          if (error.status === 400) {
            let errores: string[] = [];
            const errorList: any = error.error;
            for (const key in errorList) {
              if (errorList.hasOwnProperty(key)) {
                const errorMessages = errorList[key];
                errorMessages.forEach((errorMessage: any) => {
                  console.log(errorMessage);
                  errores.push(errorMessage);
                });
              }
            }
            errores.forEach((error) => {
              this.snackBarService.openSnackBar(error, 'center');
            });
          } else {
            this.snackBarService.openSnackBar(
              `Error, por favor intente de nuevo`,
              'center'
            );
          }
        },
        complete: () => {
          console.log('Usuario creado');
          this.snackBarService.openSnackBar(
            `Usuario ${userTypeValue} creado exitosamente`,
            'center'
          );
        },
      });
  }
}
