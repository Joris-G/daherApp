import { TestBed } from '@angular/core/testing';

import { IddleService } from './iddle.service';

describe('IddleService', () => {
  let service: IddleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IddleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
