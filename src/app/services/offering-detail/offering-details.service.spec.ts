import { TestBed, inject } from '@angular/core/testing';

import { OfferingDetailsService } from './offering-details.service';

describe('OfferingDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfferingDetailsService]
    });
  });

  it('should be created', inject([OfferingDetailsService], (service: OfferingDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
