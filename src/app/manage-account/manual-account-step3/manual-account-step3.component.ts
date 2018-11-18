import { Component, OnInit } from '@angular/core';
import {BankAccountService} from '../../services/bank-account/bank-account.service';

@Component({
  selector: 'app-manual-account-step3',
  templateUrl: './manual-account-step3.component.html',
  styleUrls: ['./manual-account-step3.component.scss', '../../app.component.scss',
               '../../viewportfolio/viewportfolio.component.scss']
})
export class ManualAccountStep3Component implements OnInit {
  currentUser: any;
  bankAccountData: any;
  bankListResp: any;

  constructor( private bankService: BankAccountService) { }

  ngOnInit() {
    this.getBankAccList();
  }
  getBankAccList(): void {
    this.bankService.getBankAccList()
      .then(
        resp => {
          this.bankListResp = resp;
          if (this.bankListResp.success === true) {
            this.bankAccountData = this.bankListResp.data.users_bank_accounts;
          } else if (this.bankListResp.success === false) {
            alert ('Something went wrong, Unable to fetch bank accounts');
          }
        }
      );
  }

}
