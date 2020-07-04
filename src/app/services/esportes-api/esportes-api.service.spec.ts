import { TestBed } from '@angular/core/testing';

import { EsportesApiService } from './esportes-api.service';

describe('EsportesModel', () => {
  let service: EsportesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsportesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
