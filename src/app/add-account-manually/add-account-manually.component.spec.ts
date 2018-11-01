import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccountManuallyComponent } from './add-account-manually.component';

describe('AddAccountManuallyComponent', () => {
  let component: AddAccountManuallyComponent;
  let fixture: ComponentFixture<AddAccountManuallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccountManuallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccountManuallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
