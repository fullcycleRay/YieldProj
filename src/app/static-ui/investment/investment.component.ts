import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {InvestmentService} from '../../services/investment/investment.service';
import {AppConfig} from '../../../environments/config';
import {AccountService} from '../../services/account/account.service';
@Component({
  selector: 'app-investment',
  // templateUrl: './investment.component.html',
  // styleUrls: ['./investment.component.scss']
  templateUrl: './investment.component.html',
  styleUrls: ['../../viewportfolio/viewportfolio.component.scss', '../../app.component.scss',
              './investment.component.scss']
})
export class InvestmentComponent implements OnInit {
  accountInvestments: any;
  accountData: any;
  accListResp: any;
  selectedAccValue: any;
  account_id: any;
  extractedArray = [];
  filteredArray = [];
  @ViewChild('keywordsInput') keywordsInput: ElementRef;

  constructor(private investmentService: InvestmentService, public appConfig: AppConfig, private accService: AccountService) { }

  ngOnInit() {
    this.appConfig.setLoader(true);
    this.getAccList();
    this.getAccInvestments();
  }
  getAccInvestments(): void {
    this.investmentService.getInvestments()
      .then(
        resp => {
          this.accountInvestments = resp.data.investments;
          this.extractData();
          this.filterInvestment();
          this.appConfig.setLoader(false);

        }
      );
  }
  getAccList(): void {
    this.accService.getAccList()
      .then(
        resp => {
          this.accListResp = resp;
          if (this.accListResp.success === true) {
            this.accountData = this.accListResp.data.users_accounts;
            // this.selectedAccValue = this.accountData[0].uid;
            this.selectedAccValue = 'all';
          } else if (this.accListResp.success === false) {
            alert ('Something went wrong, Unable to fetch accounts');
          }
        }
      );
  }
  onRowClick() {
    this.selectedAccValue = this.keywordsInput.nativeElement.value;
    this.filterInvestment();
  }
  filterInvestment() {
    this.filteredArray = [];
    if (this.selectedAccValue !== 'all') {
      for (let i = 0; i < this.accountInvestments.length; i++ ) {
        if (this.accountInvestments[i].user_account_uid === this.selectedAccValue) {
          this.filteredArray.push(this.accountInvestments[i]);
        }
      }
    } else {
      this.filteredArray = this.accountInvestments;
    }
  }
  extractData () {
    let accountInvestmentTemp = [];
    accountInvestmentTemp = this.accountInvestments;
    let investment = null;
    let totalInvestment = null;
    let investmentTotalFlag = false;
    for (let i = 0; i < accountInvestmentTemp.length; i++ ) {
      investmentTotalFlag = false;
      investment = accountInvestmentTemp[i];
      accountInvestmentTemp.splice(i, 1 );
      totalInvestment = '';
      for (let y = 0; y < accountInvestmentTemp.length; y++) {
        if (investment.user_account_uid === accountInvestmentTemp[y].user_account_uid
           && investment.service.uid === accountInvestmentTemp[y].service.uid
           && investment.is_payment_pending === accountInvestmentTemp[y].is_payment_pending) {
                investmentTotalFlag = true;
                totalInvestment = investment.investment + accountInvestmentTemp[y].investment;
                investment.investment = totalInvestment;
                this.accountInvestments.splice(y, 1);
                this.accountInvestments.splice(y, 0 , investment);
        } else if ( investmentTotalFlag === false && y === accountInvestmentTemp.length - 1 ) {
          accountInvestmentTemp.splice(i, 0 , investment);
          investmentTotalFlag = null;
          break;
        }
      }
    }
    this.accountInvestments = accountInvestmentTemp;
  }
}
