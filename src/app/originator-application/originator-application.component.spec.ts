import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginatorApplicationComponent } from './originator-application.component';

describe('OriginatorApplicationComponent', () => {
  let component: OriginatorApplicationComponent;
  let fixture: ComponentFixture<OriginatorApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginatorApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginatorApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
