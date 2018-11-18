import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFundHeaderComponent } from './transfer-fund-header.component';

describe('TransferFundHeaderComponent', () => {
  let component: TransferFundHeaderComponent;
  let fixture: ComponentFixture<TransferFundHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferFundHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFundHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
