import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AsistenciaService } from 'src/app/private/services/asistencia.service';
import { ViewAsistenciaAprendizInterface } from 'src/app/private/services/interfaces/asistencia.interface';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { JustificacionesComponent } from '../justificaciones/justificaciones.component';

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
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './table-asistencia.component.html',
  styleUrls: ['./table-asistencia.component.scss'],
})
export class TableAsistenciaComponent implements AfterContentInit, OnInit {
  displayedColumns: string[] = [
    'id',
    'fecha',
    'nombres',
    'apellidos',
    'aprendiz',
    'estado',
  ];
  dataSource!: MatTableDataSource<ViewAsistenciaAprendizInterface>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  isFalla: boolean = true;

  constructor(
    private _asistenciaService: AsistenciaService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._asistenciaService.getAsistenciaData().subscribe({
      next: (response) => {
        let asistencia: ViewAsistenciaAprendizInterface[] = [];
        response.forEach((element) => {
          asistencia.push({
            id: element.id,
            fecha_asistencia: element.fecha_asistencia,
            nombres_aprendiz: element.nombres_aprendiz.toUpperCase(),
            apellidos_aprendiz: element.apellidos_aprendiz.toUpperCase(),
            aprendiz: element.aprendiz,
            presente: element.presente.toUpperCase(),
          });
        });
        this._asistenciaService.actualizarDatosAprendiz(asistencia);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  /**
   * Metodos para la paginacion de la tabla y el sort de esta misma
   */
  // Paginacion
  ngAfterContentInit() {
    this._asistenciaService.datosAsistenciaAprendiz.subscribe((valor) => {
      this.dataSource = new MatTableDataSource(valor);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  // Aplicar filtro y sort
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Metodo para abrir ventana de dialogo y poder subit una justificacion
  onClickMakeJustificacion(idAsistencia: number) {
    this._asistenciaService.actualizarIdAsistencia(idAsistencia);
    this.dialog.open(JustificacionesComponent, {
      height: '600px',
      width: '600px',
    });
  }
}
