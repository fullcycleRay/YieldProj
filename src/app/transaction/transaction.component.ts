import { Component, OnInit } from '@angular/core';
import {TransactionsService} from '../services/transaction/transactions.service';
import {AppConfig} from '../../environments/config';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss', './reactTooltip.scss',
   '../viewportfolio/viewportfolio.component.scss', '../app.component.scss']
})
export class TransactionComponent implements OnInit {
  isClicked = false;
  accountTrans: any;
  tranPresent = false;
  transactions: any;
  apiError: any;

  constructor(private transactionService: TransactionsService, public appConfig: AppConfig) { }

  ngOnInit() {
    this.isClicked = false;
    this.appConfig.setLoader(true);
    this.getAccTransaction();

  }
  showHide() {
    this.isClicked = !(this.isClicked);
  }
  getAccTransaction(): void {
    this.transactionService.getTransactions()
      .then(
        resp => {
          this.accountTrans = resp;
          this.displayTransc();
          this.appConfig.setLoader(false);

        },
        error => {
          this.apiError = error;
          this.appConfig.setLoader(false);
        }
      );
  }
  displayTransc(): void {
    if (Object.keys(this.accountTrans.data).length === 0) {
      this.tranPresent  = false;
    } else {
      this.tranPresent  = true;
      this.transactions = this.accountTrans.data.users_sales_orders;

    }

  }
}
