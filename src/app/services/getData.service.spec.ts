import { TestBed } from '@angular/core/testing';

import { GetDataService } from './getData.service';

describe('ProductServcieService', () => {
  let service: GetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
