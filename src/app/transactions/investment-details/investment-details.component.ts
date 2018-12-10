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
    // this.displayCharts();
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

// displayCharts(){
//   google.charts.load('current', {'packages':['corechart']});
//   google.charts.setOnLoadCallback(drawChart);

//   function drawChart() {
//     let data = google.visualization.arrayToDataTable([
//       ['Months', 'Earned Interests'],
//       ['Nov',  1000],
//       ['2014',  1170],
//       ['2015',  660],
//       ['2016',  1030]
//     ]);

//     let options = {
//       hAxis: {title: 'Months',  titleTextStyle: {color: '#333'}},
//       vAxis: {minValue: 0}
//     };

//     let chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
//     chart.draw(data, options);
//   }
// }

}
