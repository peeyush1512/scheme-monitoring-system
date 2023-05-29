import { TestBed } from '@angular/core/testing';

import { HospitalloginService } from './hospitallogin.service';

describe('HospitalloginService', () => {
  let service: HospitalloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
