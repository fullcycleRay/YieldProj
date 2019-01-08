import { TestBed, inject } from '@angular/core/testing';

import { ViewportfolioService } from './viewportfolio.service';

describe('ViewportfolioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewportfolioService]
    });
  });

  it('should be created', inject([ViewportfolioService], (service: ViewportfolioService) => {
    expect(service).toBeTruthy();
  }));
});
