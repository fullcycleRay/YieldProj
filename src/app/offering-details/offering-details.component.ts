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
  originator: any;
  investmentPerRemaining: any;
  investAmt: any;
  minAmtIndicator: any;

  constructor(private InvestmentOffering: InvestmentOfferingService, private route: ActivatedRoute, private user: UserService, private router: Router) {
    this.route.params
      .subscribe(
        params => {
          this.uid = params;
          console.log(params);
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
          console.log(this.offering);
          this.extractOfferingData();
        }
      )

  }

  extractOfferingData() {
    this.originator = this.offering.service.originator;
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
