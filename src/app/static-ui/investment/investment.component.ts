import { Component, OnInit } from '@angular/core';
import {InvestmentService} from '../../services/investment/investment.service';
import {AppConfig} from '../../../environments/config';
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

  constructor(private investmentService: InvestmentService, public appConfig: AppConfig) { }

  ngOnInit() {
    this.appConfig.setLoader(true);
    this.getAccInvestments();
  }
  getAccInvestments(): void {
    this.investmentService.getInvestments()
      .then(
        resp => {
          this.accountInvestments = resp.data.investments;
          this.appConfig.setLoader(false);

        }
      );
  }

}
