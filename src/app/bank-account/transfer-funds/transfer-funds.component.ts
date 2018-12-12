import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AccountService} from '../../services/account/account.service';
import {UserService} from '../../services/user/user.service';
import {BankAccountService} from '../../services/bank-account/bank-account.service';
import {AppConfig} from '../../../environments/config';
import { NgSelectOption } from '@angular/forms';

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
  bankListResp: any;
  bankAccountExist: boolean;
  bankAccountData: any;
  filteredArray = [];
  selectedAccValue: any;
  @ViewChild('keywordsInput') keywordsInput: ElementRef;


  constructor( private user: UserService, private accService: AccountService,
    private bankAccServ: BankAccountService, public appConfig: AppConfig) { }

  ngOnInit() {
    this.currentUser = this.user.getCurrentUser();
    this.bankAccountExist = false;
    this.getRestItems();
    this.appConfig.setLoader(true);
    this.getBankAccList();
  }
  getBankAccList(): void {
    this.bankAccServ.getBankAccList()
      .then(
        resp => {

          this.bankListResp = resp;
          if (this.bankListResp.success === true) {
            if ((Object.keys(this.bankListResp.data).length !== 0)) {
              this.bankAccountData = this.bankListResp.data.users_bank_accounts;
              this.bankAccountExist = true;
              this.filterBankAccount();
              this.appConfig.setLoader(false);
            } else {
              this.bankAccountExist = false;
              this.appConfig.setLoader(false);
            }
          } else if (this.bankListResp.success === false) {
            alert ('Something went wrong, Unable to fetch bank accounts');
          }
        }
      );
  }
  filterBankAccount() {
    this.filteredArray = [];
      for (let i = 0; i < this.bankAccountData.length; i++ ) {
        if (this.bankAccountData[i].user_account_uid === this.selectedAccValue) {
          this.filteredArray.push(this.bankAccountData[i]);
        }
      }
  }
  onRowClick() {
    this.selectedAccValue = this.keywordsInput.nativeElement.value;
    this.bankAccServ.setAccountId(this.selectedAccValue);
    this.filterBankAccount();
  }
  getRestItems(): void {
    this.accService.getAccList()
      .then(
        resp => {
          this.restItems = resp;
          if (this.restItems.success === true) {
            this.accountData = resp.data.users_accounts;
            this.selectedAccValue = this.accountData[0].uid;
            this.bankAccServ.setAccountId(this.selectedAccValue);
          } else if (this.restItems.success === false) {
            alert ('Something went wrong, Unable to fetch  User accounts');
          }
        }
      );
  }

}
