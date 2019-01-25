import { Component, OnInit } from '@angular/core';
import {SignupService} from '../services/signup/signup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-originator-application',
  templateUrl: './originator-application.component.html',
  styleUrls: ['./originator-application.component.scss', '../app.component.scss']
})
export class OriginatorApplicationComponent implements OnInit {
  required_error = 'This Field is required';
  signupToken: any;
  apiError: any;
  signupSucess = false;
  model: any = {
    user: {
      first_name: '',
      last_name: '',
      title: '',
      phoneNumber: '',
      email: '',
      referralSource: '',
    },
    company_info: {
      name: '',
      website: '',
      description: '',
      inaugurated_date: '',
      total_loans_given: '',
      current_assets: '',
      categories_ids: '',
      other_asset: ''

    },
    loan: {
      financing_type: '',
      interest: '',
      term: '',
      sponsor_equity: '',
      assets_description: '',
      is_existing_loan: '',
      loan_amount: ''
    }
  };

  constructor(private signUp: SignupService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(JSON.stringify(this.model));
     const requestData = JSON.stringify(this.model);
      this.getRestItems(requestData);
  }
  getRestItems(requestData): void {
    this.signUp.originatorSignup(requestData)
      .then(
        resp => {
          this.signupToken = resp;
          if (this.signupToken.success === true) {
            this.signupSucess = true;
            // this.router.navigate(['offerings']);
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
