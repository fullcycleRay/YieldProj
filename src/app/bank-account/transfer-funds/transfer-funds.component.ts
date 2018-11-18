import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AccountService} from '../../services/account/account.service';
import {UserService} from '../../services/user/user.service';
import {BankAccountService} from '../../services/bank-account/bank-account.service';

@Component({
  selector: 'app-transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss', '../../viewportfolio/viewportfolio.component.scss'
               , '../../app.component.scss']
})
export class TransferFundsComponent implements OnInit {
  currentUser: any;
  restItems: any;
  accountData: any;
  selectedValue: any;
  // @ViewChild('accountDropDownList') myDropDownList: ElementRef;


  constructor( private user: UserService, private accService: AccountService, private bankAccServ: BankAccountService) { }

  ngOnInit() {
    this.currentUser = this.user.getCurrentUser();
    // this.getRestItems();
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

  // onRowClick() {
  //   this.selectedValue = this.myDropDownList.nativeElement.value;
  //   this.bankAccServ.setAccountId(this.selectedValue);
  // }

}
