import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss', '../viewportfolio/viewportfolio.component.scss'
               , '../app.component.scss', '../font-awesome/css/font-awesome.min.css']
})
export class TransferFundsComponent implements OnInit {
  currentUser: any;
  restItems: any;
  accountData: any;

  constructor( private user: UserService, private accService: AccountService) { }

  ngOnInit() {
    this.currentUser = this.user.getCurrentUser();
    this.getRestItems();
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
