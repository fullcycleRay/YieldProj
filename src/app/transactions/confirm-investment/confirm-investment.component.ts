import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {CompleteInvestmentService} from '../../services/complete-investment/complete-investment.service';

@Component({
  selector: 'app-confirm-investment',
  templateUrl: './confirm-investment.component.html',
  styleUrls: ['./confirm-investment.component.scss', '../../app.component.scss']
})
export class ConfirmInvestmentComponent implements OnInit {
  currentUser: any;
  investedAmt: any;

  constructor( private user: UserService, private subscriptionOffer: CompleteInvestmentService) { }

  ngOnInit() {
    this.currentUser = this.user.getCurrentUser();
    this.investedAmt = this.subscriptionOffer.getInvestmentAmt();
  }

}
