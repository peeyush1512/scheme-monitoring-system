import { TestBed } from '@angular/core/testing';

import { ReportMisService } from './report-mis.service';

describe('ReportMisService', () => {
  let service: ReportMisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportMisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
