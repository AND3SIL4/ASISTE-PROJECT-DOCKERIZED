import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AsistenciaService } from 'src/app/private/services/asistencia.service';
import { GeneralDataService } from 'src/app/private/services/general-data.service';
import { ListaAprendicesInterface } from 'src/app/private/services/interfaces/asistencia.interface';
import { RegistroAsistenciaComponent } from '../registro-asistencia/registro-asistencia.component';
import { SnackbarService } from 'src/app/private/services/snackbar.service';
import { _MatSnackBarBase } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-lista-aprendices',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './table-lista-aprendices.component.html',
  styleUrls: ['./table-lista-aprendices.component.scss'],
})
export class TableListaAprendicesComponent implements OnInit, AfterContentInit {
  // Inicializador y asignacion de columnas en la tabla
  displayedColumns: string[] = [
    'documento',
    'nombre',
    'email_personal',
    'email_institucional',
    'celular',
    'ficha',
    'asistencia',
  ];
  dataSource!: MatTableDataSource<ListaAprendicesInterface>;

  // Buscar elementos en el DOM
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  documentpInstructor!: number;

  constructor(
    private _asistenciaService: AsistenciaService,
    private _generalDataService: GeneralDataService,
    private dialog: MatDialog,
    private _snackBarService: SnackbarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._generalDataService.getInstructorData().subscribe({
      next: (res) => {
        this._asistenciaService.idFichaListaAsistencia.subscribe((value) => {
          if (value === 0) {
            this._snackBarService.openSnackBar(
              'Error por favor intente de nuevo',
              'center'
            );
            this.router.navigateByUrl('/home');
          }

          this._asistenciaService
            .getListaAprendices(res[0].documento, value)
            .subscribe({
              next: (response) => {
                const listaAprendices: ListaAprendicesInterface[] = [];
                response.forEach((element) => {
                  const documento = element.documento_aprendiz;
                  const tipoDocumento = element.tipo_documento;
                  listaAprendices.push({
                    documento_aprendiz: documento,
                    tipo_documento: tipoDocumento,
                    nombres_aprendiz: `${element.nombres_aprendiz} ${element.apellidos_aprendiz}`,
                    email_personal_aprendiz: element.email_personal_aprendiz,
                    email_institucional_aprendiz:
                      element.email_institucional_aprendiz,
                    numero_celular: element.numero_celular,
                    ficha_aprendiz: element.ficha_aprendiz,
                    ficha_details: {
                      nivel_formacion: `${element.ficha_details?.nivel_formacion}`,
                    },
                  });
                });
                this._asistenciaService.actualizarListaAprendiz(
                  listaAprendices
                );
              },
              error: (error) => console.error(error),
            });
        });
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  // Metodo para inicializar el paginador y el sort
  ngAfterContentInit(): void {
    this._asistenciaService.listaAprendices.subscribe((valor) => {
      this.dataSource = new MatTableDataSource(valor);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  // Metodo para filtrar los datos de la tabla
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Metodo para hacer el registro de asistencia
  onClickAsistanceHandle(documentoAprendiz: number, fichaAprendiz: number) {
    this._asistenciaService.updateDataForAsistencia(
      documentoAprendiz,
      fichaAprendiz
    );

    this.dialog.open(RegistroAsistenciaComponent, {
      maxHeight: '400px',
      minWidth: '700px',
    });
  }
}
