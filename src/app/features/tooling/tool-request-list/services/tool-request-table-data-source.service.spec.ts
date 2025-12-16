import { TestBed } from '@angular/core/testing';

import { ToolRequestTableDataSourceService } from './tool-request-table-data-source.service';

describe('ToolRequestTableDataSourceService', () => {
  let service: ToolRequestTableDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolRequestTableDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
