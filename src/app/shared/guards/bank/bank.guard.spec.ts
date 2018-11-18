import { TestBed, async, inject } from '@angular/core/testing';

import { BankGuard } from './bank.guard';

describe('BankGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankGuard]
    });
  });

  it('should ...', inject([BankGuard], (guard: BankGuard) => {
    expect(guard).toBeTruthy();
  }));
});
