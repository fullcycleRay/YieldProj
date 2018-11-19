import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AccountService} from '../../../services/account/account.service';
import {BankAccountService} from '../../../services/bank-account/bank-account.service';

@Component({
  selector: 'app-transfer-fund-header',
  templateUrl: './transfer-fund-header.component.html',
  styleUrls: ['./transfer-fund-header.component.scss', '../../../bank-account/transfer-funds/transfer-funds.component.scss']
})
export class TransferFundHeaderComponent implements OnInit {
  restItems: any;
  accountData: any;
  selectedValue: any;
  @ViewChild('accountDropDownList') myDropDownList: ElementRef;

  constructor(private accService: AccountService, private bankAccServ: BankAccountService) { }

  ngOnInit() {
    this.getRestItems();
  }
  getRestItems(): void {
    this.accService.getAccList()
      .then(
        resp => {
          this.restItems = resp;
          if (this.restItems.success === true) {
            this.accountData = resp.data.users_accounts;
            this.selectedValue = this.accountData[0].id;
            this.bankAccServ.setAccountId(this.selectedValue);
          } else if (this.restItems.success === false) {
            alert ('Something went wrong, Unable to fetch  User accounts');
          }
        }
      );
  }
  onRowClick() {
    this.selectedValue = this.myDropDownList.nativeElement.value;
    this.bankAccServ.setAccountId(this.selectedValue);
  }

}
