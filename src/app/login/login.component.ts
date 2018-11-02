import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../app.component.scss', '../font-awesome/css/font-awesome.min.css']
})
export class LoginComponent implements OnInit {
  userIdError = false;
  userIdOrPassEntered = false;
  paswdError = false;
  userDisError = "";
  passDisError = "";
  emailError = false;
  restItems: any;
  resp: any;

  constructor(private router: Router, private user: UserService, private authUser: AuthServiceService) {
  }
  ngOnInit() {
  }

  getRestItems(eMail, pWord): void {
    this.authUser.login(eMail, pWord)
      .then(
        resp => {
          this.restItems = resp;
          if (pWord == "") {
            this.paswdError = true;
            this.passDisError = "This field is required";
          }
          else if (eMail == "") {
            this.userIdError = true;
            this.userDisError = "This field is required";
            this.emailError = true;

          }
          else if (!(this.emailPattern(eMail)) && eMail.length >= 4) {
            this.userIdError = true;
            this.userDisError = "Please enter a valid email";
          }
          else if (eMail.length < 4) {
            this.userIdError = true;
            this.userDisError = "This field has a minimum length of 4 characters.";
            this.emailError = true;
          }
          else if (this.restItems.success == true) {
            this.userIdError = false;
            this.emailError = false;
            localStorage.setItem('User', this.restItems.user.auth_token);
            localStorage.setItem('name', this.restItems.user.name);
            this.user.setUserLoggedIn();
            this.router.navigate(['offerings']);
          }
          //&& this.restItems.message =="Invalid credentials"
          else if (this.restItems.success == false) {
            this.userIdError = true;
            this.userDisError = "This is not a valid registered email";
            this.emailError = true;
          }
          //&& this.restItems.message =="Invalid password"
          // else if(this.restItems.success == false)
          // {
          //   this.userIdError = false;
          //   this.userIdOrPassEntered =true;
          // }
        }
      )
  }

  errorClose() {
    this.userIdOrPassEntered = false;
  }
  emailPattern(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  //validating emailId
  validateEmail(f) {
    var eMail = f.toLowerCase();
    this.userIdError = false;
    this.userDisError = "";
    this.emailError = false;
    if (eMail == "") {
      this.userIdError = true;
      this.userDisError = "This field is required";
      this.emailError = true;
    }
    else if (!(this.emailPattern(eMail)) && eMail.length >= 4) {
      this.userIdError = true;
      this.userDisError = "Please enter a valid email";
    }
    else if (eMail.length < 4) {
      this.userIdError = true;
      this.userDisError = "This field has a minimum length of 4 characters.";
    }
  }
  //Validating password
  validatePaswd(g) {
    var pWord = g;
    if (pWord == "") {
      this.paswdError = true;
      this.passDisError = "This field is required";
    }
    else {
      this.paswdError = false;
    }
  }
  // authentication and validation of login
  loginUser(e) {
    this.userIdOrPassEntered = false;
    this.userIdError = false;
    this.emailError = false;
    var eMail = e.target.elements[0].value.toLowerCase();
    var pWord = e.target.elements[1].value;
    this.getRestItems(eMail, pWord);
  }
}
