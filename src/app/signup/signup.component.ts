import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SignupService} from '../signup.service';
import {configuration} from '../contants/configuration';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../app.component.scss', '../font-awesome/css/font-awesome.min.css', './card.scss']
})
export class SignupComponent implements OnInit {
  firstNameError = false;
  anyError = false;
  lastNameError = false;
  emailError = false;
  userAlreadyExist = false;
  eMail = '';
  restItems: any;
  resp: any;

  constructor(private router: Router, private signUp: SignupService) {
  }

  ngOnInit() {

  }

  getRestItems(fName, uId, pWord): void {
    this.signUp.getAllData(fName, uId, pWord)
      .subscribe(
        resp => {
          this.restItems = resp;
          console.log(this.restItems);
        }
      );
  }

  emailPattern(email) {
    return configuration.regex.test(email);
  }

  signUpUser(e) {
    const fName = e.target.elements[0].value;
    const lName = e.target.elements[1].value;
    this.eMail = e.target.elements[2].value.toLowerCase();
    const currentUrl = this.router.url;
    this.anyError = false;
    this.firstNameError = false;
    this.lastNameError = false;
    this.emailError = false;
    this.userAlreadyExist = false;
    // console.log(fName,lName,this.eMail,currentUrl);
    this.getRestItems(fName, this.eMail, lName);
    if (fName === '' || fName.length < 2) {
      this.anyError = true;
      this.firstNameError = true;
    }
    if (lName === '' || lName.length < 2) {
      this.anyError = true;
      this.lastNameError = true;
    }
    if (this.eMail === '' || !(this.emailPattern(this.eMail))) {
      this.anyError = true;
      this.emailError = true;
    }
    if (this.restItems.success === false && this.restItems.message === 'Validation failed: Email has already been taken') {
      this.userAlreadyExist = true;
    }
    if (this.restItems.success === true) {
      sessionStorage.setItem('auth_token', this.restItems.auth_token);
      this.router.navigate(['offerings']);
    }

  }


}
