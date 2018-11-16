import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyYieldstreetComponent } from './why-yieldstreet.component';

describe('WhyYieldstreetComponent', () => {
  let component: WhyYieldstreetComponent;
  let fixture: ComponentFixture<WhyYieldstreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyYieldstreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyYieldstreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
