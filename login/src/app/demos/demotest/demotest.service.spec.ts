import { TestBed } from '@angular/core/testing';

import { DemotestService } from './demotest.service';

describe('DemotestService', () => {
  let service: DemotestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemotestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
