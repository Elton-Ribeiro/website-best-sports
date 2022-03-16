import { TestBed } from '@angular/core/testing';

import { BalldontlieApiService } from './balldontlie-api.service';

describe('BalldontlieApiService', () => {
  let service: BalldontlieApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalldontlieApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
