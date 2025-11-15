import { TestBed } from '@angular/core/testing';

import { ToolRequestsService } from './tool-requests.service';

describe('ToolRequestsService', () => {
  let service: ToolRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
