import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOfferingsComponent } from './my-offerings.component';

describe('MyOfferingsComponent', () => {
  let component: MyOfferingsComponent;
  let fixture: ComponentFixture<MyOfferingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOfferingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
