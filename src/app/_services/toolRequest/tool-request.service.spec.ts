import { TestBed } from '@angular/core/testing';

import { ToolRequestService } from './tool-request.service';

describe('ToolRequestService', () => {
  let service: ToolRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
