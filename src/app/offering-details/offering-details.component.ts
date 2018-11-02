import { Component, OnInit } from '@angular/core';
import { InvestmentOfferingService } from '../investment-offering.service';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../user.service"


@Component({
  selector: 'app-offering-details',
  templateUrl: './offering-details.component.html',
  styleUrls: ['./offering-details.component.scss', '../app.component.scss', '../font-awesome/css/font-awesome.min.css']
})
export class OfferingDetailsComponent implements OnInit {
  offering: any;
  resp: any;
  summary: any;
  whyOppurtunity = [];
  risk = [];
  security: any;
  uid: any;
  isUserLoggedIn: any;
  investOrLogin = "";
  investmentError: any;
  // originator: any;
  investmentPerRemaining: any;
  investAmt: any;
  minAmtIndicator: any;
  serviceName: any;
  ownerName: any;
  annualInterest: any;
  offeringTerm: any;
  offeringInvestedAmt: any;
  offeringReqCap: any;
  offeringMinAmt: any;
  originatorOwnerName: any;
  originatorHeadline: any;

  constructor(private InvestmentOffering: InvestmentOfferingService, private route: ActivatedRoute, private user: UserService, private router: Router) {
    this.route.params
      .subscribe(
        params => {
          this.uid = params;
        });
  }
  ngOnInit() {
    this.investOrLogin = "";
    this.getOffering();
    this.user.checkLogin().subscribe(
      resp => {
        this.isUserLoggedIn = resp;
      });
    this.displayLogin();

  }

  ngAfterContentChecked() {
    this.user.checkLogin().subscribe(
      resp => {
        this.isUserLoggedIn = resp;
      }
    );
    this.displayLogin();
  }

  getOffering(): void {
    this.InvestmentOffering.getOffering(this.uid.id)
      .then(
        resp => {
          this.offering = resp;
          this.extractOfferingData();
        }
      )

  }

  extractOfferingData() {
    // this.originator = this.offering.service.originator;
    this.serviceName = this.offering.service.name;
    this.ownerName = this.offering.service.owner_name;
    this.annualInterest = this.offering.service.annual_interest;
    this.offeringTerm = this.offering.service.term;
    this.offeringInvestedAmt = this.offering.service.invested_amount;
    this.offeringReqCap = this.offering.service.required_capital;
    this.offeringMinAmt = this.offering.service.min_investment;
    this.originatorOwnerName = this.offering.service.originator.display_name;
    this.originatorHeadline = this.offering.service.originator.headline;
    //Calculating remaing percentage
    this.investmentPerRemaining = ((this.offering.service.required_capital - this.offering.service.invested_amount) * 100) / this.offering.service.required_capital
    for (var i = 0; i < this.offering.service.details.length; i++) {
      if (this.offering.service.details[i].field_type == "description") {
        this.summary = this.offering.service.details[i].description;
      }
      else if (this.offering.service.details[i].field_type == "opportunity") {
        this.whyOppurtunity = this.offering.service.details[i].children
      }
      else if (this.offering.service.details[i].field_type == "risk") {
        this.risk = this.offering.service.details[i].children
      }
      else if (this.offering.service.details[i].field_type == "security") {
        this.security = this.offering.service.details[i].description;
      }
    }

  }

  displayLogin() {
    if (this.isUserLoggedIn) {
      this.investOrLogin = "Invest";
    }
    else {
      this.investOrLogin = "Log in";
    }
  }
  investInOffering() {
    this.checkForMinAmt()
    if(!this.minAmtIndicator)
    {
      this.router.navigate(['complete-investment/' + this.uid.id + '/' + this.investAmt] );
    }
  }
  checkForMinAmt(){
    if(this.investAmt >= this.offering.service.min_investment)
    {
      this.minAmtIndicator = false;
    }
    else{
      this.minAmtIndicator = true;
    }
  }

}
