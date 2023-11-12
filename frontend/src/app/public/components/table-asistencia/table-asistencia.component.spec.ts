import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAsistenciaComponent } from './table-asistencia.component';

describe('TableAsistenciaComponent', () => {
  let component: TableAsistenciaComponent;
  let fixture: ComponentFixture<TableAsistenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TableAsistenciaComponent]
    });
    fixture = TestBed.createComponent(TableAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
