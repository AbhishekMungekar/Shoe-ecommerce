import { TestBed } from '@angular/core/testing';

import { ShoesDataService } from './shoes-data.service';

describe('ShoesDataService', () => {
  let service: ShoesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
