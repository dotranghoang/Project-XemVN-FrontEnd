import { TestBed } from '@angular/core/testing';

import { XemVnService } from './xem-vn.service';

describe('XemVnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XemVnService = TestBed.get(XemVnService);
    expect(service).toBeTruthy();
  });
});
