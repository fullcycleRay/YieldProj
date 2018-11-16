import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInvestorAccountComponent } from './select-investor-account.component';

describe('SelectInvestorAccountComponent', () => {
  let component: SelectInvestorAccountComponent;
  let fixture: ComponentFixture<SelectInvestorAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectInvestorAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectInvestorAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
