import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNovedadesComponent } from './table-novedades.component';

describe('TableNovedadesComponent', () => {
  let component: TableNovedadesComponent;
  let fixture: ComponentFixture<TableNovedadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TableNovedadesComponent]
    });
    fixture = TestBed.createComponent(TableNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
