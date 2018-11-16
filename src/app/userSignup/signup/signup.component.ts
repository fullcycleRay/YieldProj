import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {SignupService} from '../../services/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../../app.component.scss', './card.scss']
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, private signUp: SignupService) { }
  firstNameError = false;
  anyError = false;
  lastNameError = false;
  emailError = false;
  userAlreadyExist = false;
  eMail = '';
  signupToken: any;
  resp: any;
  err: any;

  ngOnInit() {

  }
  getRestItems(fName, uId, pWord): void {
    this.signUp.signupUser(fName, uId, pWord)
      .then(
        resp => {
          this.signupToken = resp;
          if (fName === '' || fName.length < 2) {
            this.anyError = true;
            this.firstNameError = true;
          }
          if (this.eMail === '' || !(this.emailPattern(this.eMail))) {
            this.anyError = true;
            this.emailError = true;
          }
          if (this.signupToken.success === false && this.signupToken.message === 'Validation failed: Email has already been taken') {
            this.userAlreadyExist = true;
          }
          if (this.signupToken.success === true) {
            localStorage.setItem('User', this.signupToken.user);
            this.router.navigate(['offerings']);
          }
        },
        err => {
          console.log('Error occured');
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
    const lName = e.target.elements[1].value;
    this.eMail = e.target.elements[2].value.toLowerCase();
    this.anyError = false;
    this.firstNameError = false;
    this.lastNameError = false;
    this.emailError = false;
    this.userAlreadyExist = false;
    this.getRestItems(fName, this.eMail, lName);

  }
}
