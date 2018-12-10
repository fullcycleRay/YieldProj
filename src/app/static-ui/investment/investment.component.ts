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
}
