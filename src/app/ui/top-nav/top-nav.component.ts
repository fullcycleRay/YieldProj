import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import {Router} from '@angular/router';
import {AuthServiceService} from'../../auth-service.service';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['../../app.component.scss','../../font-awesome/css/font-awesome.min.css']
})
export class TopNavComponent implements OnInit {
isUserLoggedIn:boolean;
  
  
  constructor(private router:Router, private user:UserService,private authUser:AuthServiceService) { 
 //  Subscribe here, this will automatically update 
     this.user.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
  }); 
  }

  ngOnInit() {
  }

  logOutUser(){
    this.authUser.logout();
  }

}
