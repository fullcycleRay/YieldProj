import { TestBed, inject } from '@angular/core/testing';

import { OriginatorService } from './originator.service';

describe('OriginatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OriginatorService]
    });
  });

  it('should be created', inject([OriginatorService], (service: OriginatorService) => {
    expect(service).toBeTruthy();
  }));
});
