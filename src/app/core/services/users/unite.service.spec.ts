import { TestBed } from '@angular/core/testing';

import { UniteService } from './unite.service';

describe('UniteService', () => {
  let service: UniteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
