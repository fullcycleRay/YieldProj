import { TestBed, inject } from '@angular/core/testing';

import { InvestmentOfferingService } from './investment-offering.service';

describe('InvestmentOfferingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvestmentOfferingService]
    });
  });

  it('should be created', inject([InvestmentOfferingService], (service: InvestmentOfferingService) => {
    expect(service).toBeTruthy();
  }));
});
