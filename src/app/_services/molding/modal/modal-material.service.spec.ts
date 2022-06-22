import { TestBed } from '@angular/core/testing';

import { ModalMaterialService } from './modal-material.service';

describe('ModalMaterialService', () => {
  let service: ModalMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
