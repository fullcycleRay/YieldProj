import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { AuthServiceService } from '../services/auth/auth-service.service';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let router: Router;
  let authService: AuthServiceService;
  let userService: UserService;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [ Router, UserService, AuthServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should close', () => {
    //let spyObj = spyOn(userService, 'setUserLoggedIn').and.callThrough();

  });
});
