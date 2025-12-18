import { TestBed } from '@angular/core/testing';

import { ToolRequestFormBuilder } from './tool-request-form-builder';

describe('ToolRequestFormBuilder', () => {
  let service: ToolRequestFormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolRequestFormBuilder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
