import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-manage-account-partial',
  templateUrl: './manage-account-partial.component.html',
  styleUrls: ['./manage-account-partial.component.scss']
})
export class ManageAccountPartialComponent implements OnInit {
  currentUser: any;

  constructor( private user: UserService) { }

  ngOnInit() {
    this.currentUser = this.user.getCurrentUser();
  }

}
