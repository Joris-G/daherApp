import { TestBed } from '@angular/core/testing';

import { SericesService } from './serices.service';

describe('SericesService', () => {
  let service: SericesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SericesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
