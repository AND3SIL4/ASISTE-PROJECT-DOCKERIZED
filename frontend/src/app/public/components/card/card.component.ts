import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterModule } from '@angular/router';
import { AsistenciaService } from 'src/app/private/services/asistencia.service';
import { DataUserService } from 'src/app/private/services/data-user.service';
import { GeneralDataService } from 'src/app/private/services/general-data.service';
import { cardFichaDataInterface } from 'src/app/private/services/interfaces/dataUser.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTooltipModule,
    RouterModule,
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  // Variables que se renderizan
  idFichaLista!: number;
  dataFichas: cardFichaDataInterface[] = [];
  isInstructorUser: boolean = false;

  constructor(
    private _dataUserService: DataUserService,
    private _generalDataService: GeneralDataService,
    private _asistenciaService: AsistenciaService,
    private router: Router
  ) {}

  // Hook que inicializa variables y valores para ser renderizado
  ngOnInit(): void {
    this._dataUserService.getDataCurrentUser().subscribe({
      next: (resp) => {
        if (resp.user_type === 'APRENDIZ') {
          this._generalDataService.getAprendizData().subscribe({
            next: (response) => {
              response.forEach((element) => {
                this.dataFichas.push({
                  id: element.ficha_aprendiz,
                  name: element.ficha_details.programa_ficha.nombre_programa,
                });
              });
            },
          });
        } else if (resp.user_type === 'INSTRUCTOR') {
          this.isInstructorUser = true;
          this._generalDataService.getInstructorData().subscribe({
            next: (response) => {
              response.forEach((element) => {
                element.fichas.forEach((e) => {
                  this.dataFichas.push({
                    id: e.id_ficha,
                    name: e.programa_ficha.nombre_programa,
                  });
                });
              });
            },
            error: (error) => console.error(error),
          });
        }
      },
      error: (err) => console.error(err),
    });
  }

  // Metodo para enviar valor de ID ficha al servicio y navegar al componente de asistencia
  onClickButton(ficha: number): void {
    this._asistenciaService.actualizarIdDfichaLista(ficha);
    this.router.navigateByUrl('/home/lista');
  }
}
