import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';

import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/private/services/auth.service';
import { SnackbarService } from 'src/app/private/services/snackbar.service';

@Component({
  selector: 'app-login',

  standalone: true,
  imports: [InputComponent, MatCheckboxModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBarService: SnackbarService
  ) {}

  //Buttom
  content: string = 'INICIAR SESIÓN';

  /**
   * Paso de parametros hacia los componentes
   */
  // Documento
  labelContentDocument: string = 'Documento';
  typeDocument: string = 'number';
  labelMessageDocument: string = 'Ingrese su número de documento';
  // Contraseña
  labelContentPassword: string = 'Contraseña';
  typePassword: string = 'password';
  labelMessagePassword: string = 'Ingrese la contraseña que se le asigno';

  // Propiedades para capturar los valores de los inputs
  documentControl: FormControl = new FormControl();
  passwordControl: FormControl = new FormControl();

  // Metodo para hacer login
  onClickService() {
    const documentValue = this.documentControl.value;
    const passwordValue = this.passwordControl.value;
    this.content = 'CARGANDO...';

    this.authService.getAuth(documentValue, passwordValue).subscribe({
      next: (response: any) => {
        this.snackBarService.openSnackBar('Bienvenido a ASISTE', 'center');
        if (response.user_type === 'SUPERUSER') {
          this.router.navigateByUrl('/admin');
        } else {
          this.router.navigateByUrl('/home');
        }
        // Guarda el token y el tipo de usuario independientemente del tipo de usuario
        localStorage.setItem('token', response.token);

        // Elimina el token y el tipo de usuario después de 1 minuto
        setTimeout(() => {
          localStorage.removeItem('token');
        }, 1800000); // 30 minutos en milisegundos
      },
      error: (error: any) => {
        this.content = 'ERROR, POR FAVOR INTENTE NUEVAMENTE';
        console.log(error);
      },
      complete: () => {
        console.log('Usuario autenticado correctamente...');
      },
    });
  }
}
