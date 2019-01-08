import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {InvestmentService} from '../../services/investment/investment.service';
import {AppConfig} from '../../../environments/config';

@Component({
  selector: 'app-investment-details',
  templateUrl: './investment-details.component.html',
  styleUrls: ['./investment-details.component.scss', '../../app.component.scss',
  '../../viewportfolio/viewportfolio.component.scss']
})
export class InvestmentDetailsComponent implements OnInit {
  account_uid: any;
  service_uid: any;
  investmentOfferingDetails: any;
  investmentChartType = 'AreaChart';
  investmentTitle = '';
  myWidth = '100px';
  myHeight = '500px';
  // dynamicResize = ['1000px', '500px'];
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


  constructor(private route: ActivatedRoute, private router: Router,
     private investmentService: InvestmentService, public appConfig: AppConfig) {
    this.route.params
    .subscribe(
      params => {
        this.account_uid = params.accountId;
        this.service_uid = params.serviceId;
      });
  }

  ngOnInit() {
    this.appConfig.setLoader(true);
    this.getInvestmentDetails();
  }

  getInvestmentDetails(): void {
  this.investmentService.getInvestdetails(this.account_uid, this.service_uid)
    .then(
      resp => {
        this.investmentOfferingDetails = resp.data;
        this.investmentTitle = this.investmentOfferingDetails.service.name;
        this.appConfig.setLoader(false);
      }
    );
}
}
