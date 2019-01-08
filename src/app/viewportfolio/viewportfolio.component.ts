import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ViewportfolioService} from '../services/viewportfolio/viewportfolio.service';
import {AccountService} from '../services/account/account.service';
import {AppConfig} from '../../environments/config';

@Component({
  selector: 'app-viewportfolio',
  templateUrl: './viewportfolio.component.html',
  styleUrls: ['./viewportfolio.component.scss' , '../app.component.scss',
  '../transactions/investment-details/investment-details.component.scss']
})
export class ViewportfolioComponent implements OnInit {
  accListResp: any;
  accountData: any;
  selectedAccValue: any;
  filteredArray = [];
  investmentChartType = 'AreaChart';
  investmentTitle = 'Overview';
  myWidth = '100px';
  myHeight = '500px';
  chartOptions = {
    hAxis: {title: 'Months',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0},
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    is3D: true
  };
  investmentColumn = ['Months', 'Earned Interests'];
  investmentData = [
            ['Nov',  500],
            ['Dec',  1200],
            ['Jan',  400],
            ['Feb',  1020]
    ];
  @ViewChild('keywordsInput') keywordsInput: ElementRef;

  constructor(private viewPortfolio: ViewportfolioService, public appConfig: AppConfig, private accService: AccountService) { }

  ngOnInit() {
    this.appConfig.setLoader(true);
    this.getAccList();
    this.getOverviewData();
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
  getOverviewData() {
    this.appConfig.setLoader(false);

  }
  onRowClick() {
    this.selectedAccValue = this.keywordsInput.nativeElement.value;
    this.filterInvestment();
  }
  filterInvestment() {
  //   this.filteredArray = [];
  //   if (this.selectedAccValue !== 'all') {
  //     for (let i = 0; i < this.accountInvestments.length; i++ ) {
  //       if (this.accountInvestments[i].user_account_uid === this.selectedAccValue) {
  //         this.filteredArray.push(this.accountInvestments[i]);
  //       }
  //     }
  //   } else {
  //     this.filteredArray = this.accountInvestments;
  //   }
  // }
}
}
