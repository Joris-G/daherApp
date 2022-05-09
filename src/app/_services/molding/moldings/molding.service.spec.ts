import { TestBed } from '@angular/core/testing';

import { MoldingService } from './molding.service';

describe('MoldingService', () => {
  let service: MoldingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoldingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
