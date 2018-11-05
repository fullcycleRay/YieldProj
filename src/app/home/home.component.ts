import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','../app.component.scss','../font-awesome/css/font-awesome.min.css']
})
export class HomeComponent implements OnInit {
  isUserLoggedIn: any;
  signupOrBrowseOffering: any;
  sigupOrBrowserURL: any;
  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.checkLogin().subscribe(
      resp => {
        this.isUserLoggedIn = resp;
      });
      this.displayLogin();

  }

  displayLogin() {
    debugger
    if (this.isUserLoggedIn) {
      this.signupOrBrowseOffering = "Browse Offering";
      this.sigupOrBrowserURL ="/offerings";
    }
    else {
      this.signupOrBrowseOffering = "Sign Up";
      this.sigupOrBrowserURL ="/signup";
    }
  }
}
