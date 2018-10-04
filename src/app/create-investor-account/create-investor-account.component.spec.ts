import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInvestorAccountComponent } from './create-investor-account.component';

describe('CreateInvestorAccountComponent', () => {
  let component: CreateInvestorAccountComponent;
  let fixture: ComponentFixture<CreateInvestorAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInvestorAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInvestorAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
