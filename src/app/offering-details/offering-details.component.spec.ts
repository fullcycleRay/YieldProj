import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingDetailsComponent } from './offering-details.component';

describe('OfferingDetailsComponent', () => {
  let component: OfferingDetailsComponent;
  let fixture: ComponentFixture<OfferingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
