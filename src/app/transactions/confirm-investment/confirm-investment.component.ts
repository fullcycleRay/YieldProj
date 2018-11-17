import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {CompleteInvestmentService} from '../../services/complete-investment/complete-investment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-investment',
  templateUrl: './confirm-investment.component.html',
  styleUrls: ['./confirm-investment.component.scss', '../../app.component.scss']
})
export class ConfirmInvestmentComponent implements OnInit {
  currentUser: any;
  currentOffering = {};

  constructor( private user: UserService, private subscriptionOffer: CompleteInvestmentService, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.user.getCurrentUser();
    this.subscriptionOffer.getInvestmentAmt()
    .subscribe(
      resp => {
        this.currentOffering = resp;
        localStorage.removeItem('offering');
        }
      );
  }

}
