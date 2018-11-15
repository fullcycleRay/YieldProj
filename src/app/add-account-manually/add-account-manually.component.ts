import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-add-account-manually',
  templateUrl: './add-account-manually.component.html',
  styleUrls: ['./add-account-manually.component.scss', '../viewportfolio/viewportfolio.component.scss',
              '../app.component.scss', '../font-awesome/css/font-awesome.min.css']
})
export class AddAccountManuallyComponent implements OnInit {
  currentUser: any;

  constructor( private user: UserService) { }

  ngOnInit() {
    this.currentUser = this.user.getCurrentUser();
  }

}
