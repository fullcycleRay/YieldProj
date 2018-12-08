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
  uid: any;
  investmentOfferingDetails: any;

  constructor(private route: ActivatedRoute, private router: Router,
     private investmentService: InvestmentService, public appConfig: AppConfig) {
    this.route.params
    .subscribe(
      params => {
        this.uid = params;
      });
  }

  ngOnInit() {
    this.appConfig.setLoader(true);
    this.getInvestmentDetails();
  }

  getInvestmentDetails(): void {
  this.investmentService.getInvestdetails(this.uid.id)
    .then(
      resp => {
        this.investmentOfferingDetails = resp.data.users_investment;
        this.appConfig.setLoader(false);
      }
    );
}

}
