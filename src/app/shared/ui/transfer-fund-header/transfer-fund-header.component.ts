import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AccountService} from '../../../services/account/account.service';
import {BankAccountService} from '../../../services/bank-account/bank-account.service';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-transfer-fund-header',
  templateUrl: './transfer-fund-header.component.html',
  styleUrls: ['./transfer-fund-header.component.scss', '../../../bank-account/transfer-funds/transfer-funds.component.scss']
})
export class TransferFundHeaderComponent implements OnInit {
  restItems: any;
  accountData: any;
  selectedValue: any;
  currentUser: any;
  selectedAccValue: any;
  @ViewChild('keywordsInput') keywordsInput: ElementRef;

  constructor(private accService: AccountService, private bankAccServ: BankAccountService, private userService: UserService ) { }

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser();
    this.getRestItems();
  }
  getRestItems(): void {
    this.accService.getAccList()
      .then(
        resp => {
          this.restItems = resp;
          if (this.restItems.success === true) {
            this.accountData = resp.data.users_accounts;
            this.selectedValue = this.accountData[0].uid;
            this.bankAccServ.setAccountId(this.selectedValue);
          } else if (this.restItems.success === false) {
            alert ('Something went wrong, Unable to fetch  User accounts');
          }
        }
      );
  }
  onRowClick() {
    this.selectedAccValue = this.keywordsInput.nativeElement.value;
    this.bankAccServ.setAccountId(this.selectedValue);
  }

}
