import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAccountPartialComponent } from './manage-account-partial.component';

describe('ManageAccountPartialComponent', () => {
  let component: ManageAccountPartialComponent;
  let fixture: ComponentFixture<ManageAccountPartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAccountPartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAccountPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
