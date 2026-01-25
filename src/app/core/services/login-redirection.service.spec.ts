import { TestBed } from '@angular/core/testing';

import { LoginRedirectionService } from './login-redirection.service';

describe('LoginRedirectionService', () => {
  let service: LoginRedirectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginRedirectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
