import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SignupService} from '../../services/signup/signup.service';
import {AppError} from '../../shared/appError';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../../app.component.scss', './card.scss']
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, private signUp: SignupService) { }
  firstNameError = false;
  anyError = false;
  passWordError = false;
  emailError = false;
  userAlreadyExist = false;
  eMail = '';
  signupToken: any;
  resp: any;
  err: any;
  apiError: any;

  ngOnInit() {

  }
  getRestItems(fName, uId, pWord): void {
    this.signUp.signupUser(fName, uId, pWord)
      .then(
        resp => {
          this.signupToken = resp;
          if (this.signupToken.success === true) {
            localStorage.setItem('User', this.signupToken.user.auth_token);
            localStorage.setItem('name', fName);
            this.router.navigate(['offerings']);
          }
        },
        error => {
          this.apiError = error;
          if (this.apiError.status === 422) {
            this.userAlreadyExist = true;
          }
        }
      );
  }

  emailPattern(email) {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  signUpUser(e) {
    const fName = e.target.elements[0].value;
    const passWord = e.target.elements[1].value;
    this.eMail = e.target.elements[2].value.toLowerCase();
    this.anyError = false;
    this.firstNameError = false;
    this.passWordError = false;
    this.emailError = false;
    this.userAlreadyExist = false;
    if (fName === '' || fName.length < 2) {
      this.anyError = true;
      this.firstNameError = true;
    }
    if (this.eMail === '' || !(this.emailPattern(this.eMail))) {
      this.anyError = true;
      this.emailError = true;
    }
    if ( passWord === '') {
      this.anyError = true;
      this.passWordError = true;
    }
    if (this.anyError === false &&  this.emailError === false && this.firstNameError === false && this.passWordError === false ) {
      this.getRestItems(fName, this.eMail, passWord);
    }

  }
}
