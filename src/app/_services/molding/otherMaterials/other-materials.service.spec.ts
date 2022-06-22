import { TestBed } from '@angular/core/testing';

import { OtherMaterialsService } from './other-materials.service';

describe('OtherMaterialsService', () => {
  let service: OtherMaterialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherMaterialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
