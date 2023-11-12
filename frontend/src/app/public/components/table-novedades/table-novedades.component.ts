import { Component, ViewChild, OnInit, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { DataUserService } from 'src/app/private/services/data-user.service';
import { NovedadService } from 'src/app/private/services/novedades.service';
import { Router, RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NovedadComponent } from '../novedad/novedad.component';

export interface NovedadData {
  id: number;
  name: string;
  ficha: number;
  document: number;
  type: string;
  state: string;
}
@Component({
  selector: 'app-table-novedades',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    RouterModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './table-novedades.component.html',
  styleUrls: ['./table-novedades.component.scss'],
})
export class TableNovedadesComponent implements OnInit, AfterContentInit {
  // Inicializacion de variable y tipos de datos
  displayedColumns: string[] = [
    'id',
    'name',
    'ficha',
    'document',
    'type',
    'state',
  ];
  dataSource!: MatTableDataSource<NovedadData>;

  // Hook para capturar el valor de la paginacion y el el orden del sort
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Tipos de usuario
  isInstructorUser!: boolean;
  isAprendizUser!: boolean;

  constructor(
    private _userDataService: DataUserService,
    private _novedadService: NovedadService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  // Hook para inicializar valores y hacer llamados a la API para renderizar datos
  ngOnInit(): void {
    this._userDataService.getDataCurrentUser().subscribe({
      next: (res) => {
        if (res.user_type === 'APRENDIZ') {
          this.isAprendizUser = true;
          this.isInstructorUser = false;
          this._novedadService.getNovedadesData().subscribe({
            next: (response) => {
              let novedades: NovedadData[] = [];
              response.forEach((element) => {
                novedades.push({
                  id: element.id_novedad,
                  name: `${element.nombre.toUpperCase()} ${element.apellidos.toUpperCase()}`,
                  ficha: element.ficha,
                  document: element.documento,
                  type: element.tipo_novedad.toUpperCase(),
                  state: `${element.estado_novedad ? 'VALIDA' : 'NO VALIDA'}`,
                });
              });
              this._novedadService.actualizarDatosTabla(novedades);
            },
            error: (error) => {
              console.error(error);
            },
          });
        } else if (res.user_type === 'INSTRUCTOR') {
          this.isAprendizUser = false;
          this.isInstructorUser = true;
          this._novedadService.getNovedadesData().subscribe({
            next: (response) => {
              let novedades: NovedadData[] = [];
              response.forEach((element) => {
                novedades.push({
                  id: element.id_novedad,
                  name: `${element.nombre.toUpperCase()} ${element.apellidos.toUpperCase()}`,
                  ficha: element.ficha,
                  document: element.documento,
                  type: element.tipo_novedad.toUpperCase(),
                  state: `${element.estado_novedad ? 'VALIDA' : 'NO VALIDA'}`,
                });
              });
              this._novedadService.actualizarDatosTabla(novedades);
            },
            error: (error) => {
              console.error(error);
            },
          });
        }
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  /**
   * Metodos para Filtrar el contenido de la tabla y hacer sort en esta misma
   */
  // Paginador
  ngAfterContentInit() {
    this._novedadService.datosTabla.subscribe((valor) => {
      this.dataSource = new MatTableDataSource(valor);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  // Aplicar filtros de busqueda y sort de la tabla
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Atributo para asignar al ID de la novedad
  idNovedad!: number;

  onClickConsutar(id: number) {
    this._novedadService.acctualizarIdNovedad(id);
    this.dialog.open(NovedadComponent);
  }
}
