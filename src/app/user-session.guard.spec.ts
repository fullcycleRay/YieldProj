import { TestBed, async, inject } from '@angular/core/testing';

import { UserSessionGuard } from './user-session.guard';

describe('UserSessionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSessionGuard]
    });
  });

  it('should ...', inject([UserSessionGuard], (guard: UserSessionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
