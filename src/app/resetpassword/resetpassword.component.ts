import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SignupService} from '../services/signup/signup.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetToken: any;
  resetResponse: any;
  apiError: any;
  model: any = {
    password: '',
    confirmPass: ''
  };
  requiredError = 'This field is required';
  apiMessage: any;
  successFlag: any;


  constructor(private route: ActivatedRoute, private router: Router, private resetService: SignupService) {
    this.route.queryParams
    .subscribe(
      queryParams => {
        this.resetToken = queryParams['token'];
      });
  }

  ngOnInit() {
    console.log(this.resetToken);
  }
  getRestItems(data): void {
    this.resetService.resetPassword(data)
      .then(
        resp => {
          this.resetResponse = resp;
          if (this.resetResponse.success === true) {
            this.successFlag = true;
            this.apiMessage = this.resetResponse.message;
          } else {
            this.apiError = true;
            this.apiMessage = this.resetResponse.message;
          }
        },
        error => {
          this.apiError = error;
          if (this.apiError.status === 422) {
          }
        }
      );
  }
  onSubmit() {
    this.getRestItems({token: this.resetToken, password: this.model.password });
  }

}
