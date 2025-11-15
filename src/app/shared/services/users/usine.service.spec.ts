import { TestBed } from '@angular/core/testing';

import { UsineService } from './usine.service';

describe('UsineService', () => {
  let service: UsineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
