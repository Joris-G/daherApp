import { TestBed } from '@angular/core/testing';

import { UpdateAppService } from './update-app.service';

describe('UpdateAppService', () => {
  let service: UpdateAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
