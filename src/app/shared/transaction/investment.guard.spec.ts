import { TestBed, async, inject } from '@angular/core/testing';

import { InvestmentGuard } from './investment.guard';

describe('InvestmentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvestmentGuard]
    });
  });

  it('should ...', inject([InvestmentGuard], (guard: InvestmentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
