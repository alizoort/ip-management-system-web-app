import { TestBed } from '@angular/core/testing';

import { FormioAuthService } from './formio-auth.service';

describe('FormioAuthService', () => {
  let service: FormioAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormioAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
