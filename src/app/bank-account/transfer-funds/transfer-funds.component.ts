import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AccountService} from '../../services/account/account.service';
import {UserService} from '../../services/user/user.service';
import {BankAccountService} from '../../services/bank-account/bank-account.service';

@Component({
  selector: 'app-transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss', '../../viewportfolio/viewportfolio.component.scss'
               , '../../app.component.scss', '../../manage-account/manual-account-step3/manual-account-step3.component.scss']
})
export class TransferFundsComponent implements OnInit {
  currentUser: any;
  restItems: any;
  accountData: any;
  selectedValue: any;
  bankListResp: any;
  bankAccountData: any;
  bankAccountExist: boolean;
  // @ViewChild('accountDropDownList') myDropDownList: ElementRef;


  constructor( private user: UserService, private accService: AccountService, private bankAccServ: BankAccountService) { }

  ngOnInit() {
    this.currentUser = this.user.getCurrentUser();
    this.bankAccountExist = false;
    this.getBankAccList();
  }

  getBankAccList(): void {
    this.bankAccServ.getBankAccList()
      .then(
        resp => {
          this.bankListResp = resp;
          if (this.bankListResp.success === true) {
            if (Object.keys(this.bankListResp.data.users_bank_accounts).length !== 0) {
              this.bankAccountData = this.bankListResp.data.users_bank_accounts;
              this.bankAccountExist = true;
            }
          } else if (this.bankListResp.success === false) {
            alert ('Something went wrong, Unable to fetch bank accounts');
          }
        }
      );
  }

}
