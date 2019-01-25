import { Component, OnInit } from '@angular/core';
import {AppError} from '../shared/appError';
import {Router} from '@angular/router';
import {SignupService} from '../services/signup/signup.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss', '../app.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  model: any = {
    email: ''
  };
  userIdOrPassEntered = false;
  userDisError = 'This Field is required';
  emailDisError = 'Please enter a valid email';
  forgetPassToken: any;
  apiError: any;
  forgetPassSuccess: any;
  apiMessage: any;

  constructor(private router: Router, private signUp: SignupService) { }

  ngOnInit() {
  }


  resetUser(e) {
    this.forgetPassSuccess = false;
    this.getRestItems(this.model);

  }
  getRestItems(model): void {
    this.signUp.forgetPassword(model)
      .then(
        resp => {
          this.forgetPassToken = resp;
          if (this.forgetPassToken.success === true) {
            this.forgetPassSuccess = 'success';
            this.apiMessage = this.forgetPassToken.message;
          } else {
            this.forgetPassSuccess = 'fail';
            this.apiMessage = this.forgetPassToken.message;
          }
        },
        error => {
          this.apiError = error;
        }
      );
  }

}
