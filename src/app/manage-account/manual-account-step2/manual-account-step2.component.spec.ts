import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualAccountStep2Component } from './manual-account-step2.component';

describe('ManualAccountStep2Component', () => {
  let component: ManualAccountStep2Component;
  let fixture: ComponentFixture<ManualAccountStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualAccountStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualAccountStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
