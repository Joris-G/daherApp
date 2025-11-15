import { TestBed } from '@angular/core/testing';

import { ToolRequestManagerService } from './tool-request-manager.service';

describe('ToolRequestManagerService', () => {
  let service: ToolRequestManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolRequestManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
