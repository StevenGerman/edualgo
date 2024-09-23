import { TestBed } from '@angular/core/testing';

import { PaisService } from './paises.service';

describe('PaisesService', () => {
  let service: PaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
