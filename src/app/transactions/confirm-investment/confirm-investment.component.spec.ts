import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmInvestmentComponent } from './confirm-investment.component';

describe('ConfirmInvestmentComponent', () => {
  let component: ConfirmInvestmentComponent;
  let fixture: ComponentFixture<ConfirmInvestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmInvestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
