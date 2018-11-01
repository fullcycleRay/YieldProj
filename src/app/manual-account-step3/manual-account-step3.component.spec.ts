import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualAccountStep3Component } from './manual-account-step3.component';

describe('ManualAccountStep3Component', () => {
  let component: ManualAccountStep3Component;
  let fixture: ComponentFixture<ManualAccountStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualAccountStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualAccountStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
