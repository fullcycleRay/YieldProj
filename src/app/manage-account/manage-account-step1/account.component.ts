import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services/account/account.service';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss', '../../app.component.scss',
                '../../viewportfolio/viewportfolio.component.scss']
})
export class AccountComponent implements OnInit {
  modalBack = false;
  restItems: any;
  accountData: any;
  currentUser: any;

  constructor(private accService: AccountService, private user: UserService ) { }

  ngOnInit() {
    this.modalBack = false;
    this.getRestItems();
    this.currentUser = this.user.getCurrentUser();
  }
  showModal() {
    this.modalBack = !(this.modalBack);
  }
  getRestItems(): void {
    this.accService.getAccList()
      .then(
        resp => {
          this.restItems = resp;
          if (this.restItems.success === true) {
            this.extractData(this.restItems);
          } else if (this.restItems.success === false) {
            alert ('Something went wrong, Unable to fetch accounts');
          }
        }
      );
  }
  extractData(resp): void {
    this.accountData = resp.data.users_accounts;
  }


}
