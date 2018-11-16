import { TestBed, inject } from '@angular/core/testing';

import { CompleteInvestmentService } from './complete-investment.service';

describe('CompleteInvestmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompleteInvestmentService]
    });
  });

  it('should be created', inject([CompleteInvestmentService], (service: CompleteInvestmentService) => {
    expect(service).toBeTruthy();
  }));
});
