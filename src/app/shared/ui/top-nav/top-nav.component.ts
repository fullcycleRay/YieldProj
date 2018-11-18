import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../services/auth/auth-service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class TopNavComponent implements OnInit {
  isUserLoggedIn: Observable <boolean>;


  constructor(private router: Router, private user: UserService, private authUser: AuthServiceService) {
    this.user.checkLogin().subscribe(
      resp => {
        this.isUserLoggedIn = resp;
      }
    );
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentChecked() {
    this.user.checkLogin().subscribe(
      resp => {
        this.isUserLoggedIn = resp;
      }
    );
  }

  logOutUser() {
    this.user.setUserLoggedOut();
    this.user.checkLogin().subscribe(
      resp => {
        this.isUserLoggedIn = resp;
      }
    );
  }
}
