import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CompleteInvestmentService} from '../complete-investment.service';

@Component({
  selector: 'app-complete-investment',
  templateUrl: './complete-investment.component.html',
  styleUrls: ['./complete-investment.component.scss', '../app.component.scss', '../font-awesome/css/font-awesome.min.css']
})
export class CompleteInvestmentComponent implements OnInit {
  uid: any;
  investedAmt: any;
  subscptionData: any;
  loggedInUser: any;
  paramDel = [];

  constructor(private route: ActivatedRoute, private subscriptionOffer: CompleteInvestmentService, private router: Router) {
    this.route.params
    .subscribe(
      params => {
        this.uid = params.id;
      });
  }

  ngOnInit() {
    this.loggedInUser = localStorage.getItem('name');
    this.investedAmt = this.subscriptionOffer.getInvestmentAmt();
  }

  subscribeOffering() {
    this.subscriptionOffer.subscribeOffer(this.uid, this.investedAmt)
    .then(
      resp => {
        this.subscptionData = resp;
        if (this.subscptionData.success === true) {
          // this.router.navigate(['offering-details/' + this.uid + '/' +"subscribed"] );
          this.router.navigate(['/confirm-investment']);
        }
      }
    );
  }


}
