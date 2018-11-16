import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteInvestmentComponent } from './complete-investment.component';

describe('CompleteInvestmentComponent', () => {
  let component: CompleteInvestmentComponent;
  let fixture: ComponentFixture<CompleteInvestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteInvestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
