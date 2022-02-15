import { TestBed } from '@angular/core/testing';

import { MoldingToolService } from './molding-tool.service';

describe('MoldingToolService', () => {
  let service: MoldingToolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoldingToolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
