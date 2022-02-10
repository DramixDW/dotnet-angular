import { TestBed } from '@angular/core/testing';

import { BananeService } from './banane.service';

describe('BananeService', () => {
  let service: BananeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BananeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
