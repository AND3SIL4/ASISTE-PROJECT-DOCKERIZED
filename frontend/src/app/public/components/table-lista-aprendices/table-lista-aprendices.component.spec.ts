import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListaAprendicesComponent } from './table-lista-aprendices.component';

describe('TableListaAprendicesComponent', () => {
  let component: TableListaAprendicesComponent;
  let fixture: ComponentFixture<TableListaAprendicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TableListaAprendicesComponent]
    });
    fixture = TestBed.createComponent(TableListaAprendicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
