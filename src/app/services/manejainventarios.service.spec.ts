import { TestBed } from '@angular/core/testing';

import { ManejainventariosService } from './manejainventarios.service';

describe('ManejainventariosService', () => {
  let service: ManejainventariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManejainventariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
