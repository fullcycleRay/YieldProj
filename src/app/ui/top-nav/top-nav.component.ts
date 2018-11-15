import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['../../app.component.scss', '../../font-awesome/css/font-awesome.min.css']
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
      resp =>{
        this.isUserLoggedIn =resp;
      }
    );
  }
}
