import { TestBed } from '@angular/core/testing';

import { TraningServiceService } from './traning-service.service';

describe('TraningServiceService', () => {
  let service: TraningServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraningServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
