import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {configuration} from '../contants/configuration';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss', '../app.component.scss', '../font-awesome/css/font-awesome.min.css']
})
export class ForgetpasswordComponent implements OnInit {
  userIdOrPassEntered = false;
  emailError = false;
  eMail = '';
  userIdError = false;
  userDisError = '';

  constructor(private user: UserService) {
  }

  ngOnInit() {
  }

  emailPattern(email) {
    return configuration.regex.test(email);
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
      this.userDisError = 'This field is required';
      this.emailError = true;
    } else if (!(this.emailPattern(this.eMail)) && this.eMail.length >= 4) {
      this.userIdError = true;
      this.userDisError = 'Please enter a valid email';
    } else if (this.eMail.length < 4) {
      this.userIdError = true;
      this.userDisError = 'This field has a minimum length of 4 characters.';
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
      this.userDisError = 'This field is required';
      this.emailError = true;

    } else if (!(this.emailPattern(this.eMail)) && this.eMail.length >= 4) {
      this.userIdError = true;
      this.userDisError = 'Please enter a valid email';
    } else if (this.eMail.length < 4) {
      this.userIdError = true;
      this.userDisError = 'This field has a minimum length of 4 characters.';
      this.emailError = true;
    } else if (this.eMail !== 'arunoday.ray@gmail.com' && this.eMail.length > 4) {
      this.userIdError = true;
      this.emailError = true;
      this.userIdOrPassEntered = true;
    }
    return true;

  }
}
