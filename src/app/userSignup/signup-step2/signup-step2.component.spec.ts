import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { signupStep2Component } from './signup-step2.component';

describe('Step2Component', () => {
  let component: signupStep2Component;
  let fixture: ComponentFixture<signupStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ signupStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(signupStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
