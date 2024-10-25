import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCursosComponent } from './detalles-cursos.component';

describe('DetallesCursosComponent', () => {
  let component: DetallesCursosComponent;
  let fixture: ComponentFixture<DetallesCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesCursosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
