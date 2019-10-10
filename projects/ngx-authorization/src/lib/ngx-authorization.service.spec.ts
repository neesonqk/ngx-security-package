import { TestBed } from '@angular/core/testing';

import { NgxAuthorizationService } from './ngx-authorization.service';

describe('NgxAuthorizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAuthorizationService = TestBed.get(NgxAuthorizationService);
    expect(service).toBeTruthy();
  });
});
