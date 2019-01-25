import { Component, OnInit } from '@angular/core';
import {InvestmentOfferingService} from '../../services/investment-offering/investment-offering.service';

@Component({
  selector: 'app-create-offerings',
  templateUrl: './create-offerings.component.html',
  styleUrls: ['./create-offerings.component.scss']
})
export class CreateOfferingsComponent implements OnInit {
  required_error = 'This Field is required';
  respToken: any;
  OfferingSuccess: any;
  apiError: any;
  model: any = {
    service: {
      name: '',
      annual_interest: '',
      term: '',
      start_date: '',
      end_date: '',
      required_capital: '',
      min_investment: ''
    },
  category_uid: ''
  };

  constructor(private offeringService: InvestmentOfferingService ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
    this.getRestItems(this.model)
  }

  getRestItems(requestData): void {
    this.offeringService.createOffering(requestData)
      .then(
        resp => {
          this.respToken = resp;
          if (this.respToken.success === true) {
            this.OfferingSuccess = true;
            // this.router.navigate(['offerings']);
          } else {
            console.log(this.respToken.message);
          }
        },
        error => {
          this.apiError = error;
          console.log(this.apiError);
          // if (this.apiError.status === 422) {
          // }
        }
      );
  }
}
