import { TestBed } from '@angular/core/testing';

import { DetallesCursosService } from './detalles-cursos.service';

describe('DetallesCursosService', () => {
  let service: DetallesCursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesCursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
