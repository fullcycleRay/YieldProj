import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAccountHeaderComponent } from './manage-account-header.component';

describe('ManageAccountHeaderComponent', () => {
  let component: ManageAccountHeaderComponent;
  let fixture: ComponentFixture<ManageAccountHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAccountHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAccountHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
