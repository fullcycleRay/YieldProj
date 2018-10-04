import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {AuthServiceService} from '../auth-service.service';
import {configuration} from '../contants/configuration';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../app.component.scss', '../font-awesome/css/font-awesome.min.css']
})
export class LoginComponent implements OnInit {
  userIdError = false;
  userIdOrPassEntered = false;
  paswdError = false;
  userDisError = '';
  passDisError = '';
  emailError = false;
  restItems: any;
  resp: any;

  constructor(private router: Router, private user: UserService, private authUser: AuthServiceService) {
  }

  ngOnInit() {

  }

  getRestItems(uId, pWord): void {
    this.authUser.getAllData(uId, pWord)
      .subscribe(
        resp => {
          this.restItems = resp;
          console.log(this.restItems);
        }
      );
  }

  errorClose() {
    this.userIdOrPassEntered = false;
  }

  emailPattern(email) {
    return configuration.regex.test(email);
  }

  // validating emailId
  validateEmail(f) {
    const eMail = f.toLowerCase();
    this.userIdError = false;
    this.userDisError = '';
    this.emailError = false;
    if (eMail === '') {
      this.userIdError = true;
      this.userDisError = 'This field is required';
      this.emailError = true;
    } else if (!(this.emailPattern(eMail)) && eMail.length >= 4) {
      this.userIdError = true;
      this.userDisError = 'Please enter a valid email';
    } else if (eMail.length < 4) {
      this.userIdError = true;
      this.userDisError = 'This field has a minimum length of 4 characters.';
    }
  }

  // Validating password
  validatePaswd(g) {
    const pWord = g;
    if (pWord === '') {
      this.paswdError = true;
      this.passDisError = 'This field is required';
    } else {
      this.paswdError = false;
    }
  }

  // authentication and validation of login
  loginUser(e) {
    this.userIdOrPassEntered = false;
    this.userIdError = false;
    this.emailError = false;
    const eMail = e.target.elements[0].value.toLowerCase();
    const pWord = e.target.elements[1].value;
    // console.log(eMail,pWord);
    this.getRestItems(eMail, pWord);
    if (this.restItems.success === true) {
      this.user.isUserLoggedIn.next(true);
      this.userIdError = false;
      this.emailError = false;
      sessionStorage.setItem('auth_token', this.restItems.auth_token);
      sessionStorage.setItem('usedId', eMail);
      sessionStorage.setItem('isUserLoggedIn', 'Y');
      this.router.navigate(['offerings']);
    } else if (eMail === '') {
      this.userIdError = true;
      this.userDisError = 'This field is required';
      this.emailError = true;

    } else if (!(this.emailPattern(eMail)) && eMail.length >= 4) {
      this.userIdError = true;
      this.userDisError = 'Please enter a valid email';
    } else if (eMail.length < 4) {
      this.userIdError = true;
      this.userDisError = 'This field has a minimum length of 4 characters.';
      this.emailError = true;
    } else if (eMail !== 'arunoday.ray@gmail.com' && eMail.length > 4) {
      this.userIdError = true;
      this.userDisError = 'This is not a valid registered email';
      this.emailError = true;
    } else if (eMail === 'arunoday.ray@gmail.com' && pWord !== 'password') {
      this.userIdError = false;
      this.userIdOrPassEntered = true;
    }
    if (pWord === '') {
      this.paswdError = true;
      this.passDisError = 'This field is required';
    }
    return true;

  }
}
