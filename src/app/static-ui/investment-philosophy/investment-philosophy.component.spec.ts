import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentPhilosophyComponent } from './investment-philosophy.component';

describe('InvestmentPhilosophyComponent', () => {
  let component: InvestmentPhilosophyComponent;
  let fixture: ComponentFixture<InvestmentPhilosophyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentPhilosophyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentPhilosophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
