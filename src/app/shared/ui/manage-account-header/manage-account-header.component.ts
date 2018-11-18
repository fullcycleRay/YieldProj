import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-manage-account-header',
  templateUrl: './manage-account-header.component.html',
  styleUrls: ['./manage-account-header.component.scss','../../../bank-account/transfer-funds/transfer-funds.component.scss']
})
export class ManageAccountHeaderComponent implements OnInit {
  currentUser: any;
  constructor(private user: UserService) { }

  ngOnInit() {
    this.currentUser = this.user.getCurrentUser();
  }

}
