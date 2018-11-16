import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import {AppError} from '../shared/appError';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss', '../app.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  userIdOrPassEntered = false;
  emailError = false;
  eMail = '';
  userIdError = false;
  userDisError = '';

  constructor(private user: UserService) { }

  ngOnInit() {
  }
  emailPattern(email) {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  errorClose() {
    this.userIdOrPassEntered = false;
  }
   // validating emailId
   validateEmail(f) {
    this.eMail = f.toLowerCase();
    this.userIdError = false;
    this.userDisError = '';
    this.emailError = false;
    if (this.eMail === '') {
      this.userIdError = true;
      this.userDisError = AppError.error_0001;
      this.emailError = true;
    } else if (!(this.emailPattern(this.eMail)) && this.eMail.length >= 4) {
      this.userIdError = true;
      this.userDisError = AppError.error_0001;
    } else if (this.eMail.length < 4) {
      this.userIdError = true;
      this.userDisError = AppError.error_0002;
    }
  }
  // authentication and validation of login
  resetUser(e) {
    this.userIdOrPassEntered = false;
    this.userIdError = false;
    this.emailError = false;
    this.eMail = e.target.elements[0].value.toLowerCase();
    if (this.eMail === 'arunoday.ray@gmail.com') {
      this.userIdError = true;
      this.emailError = false;
      this.userDisError = 'Your Password is reset';
    } else if (this.eMail === '') {
      this.userIdError = true;
      this.userDisError = AppError.error_0001;
      this.emailError = true;
    } else if (!(this.emailPattern(this.eMail)) && this.eMail.length >= 4) {
      this.userIdError = true;
      this.userDisError = AppError.error_0005;
    } else if (this.eMail.length < 4) {
      this.userIdError = true;
      this.userDisError = AppError.error_0002;
      this.emailError = true;
    } else if (this.eMail !== 'arunoday.ray@gmail.com' && this.eMail.length > 4) {
      this.userIdError = true;
      this.emailError = true;
      this.userIdOrPassEntered = true;
    }
    return true;

  }
}
