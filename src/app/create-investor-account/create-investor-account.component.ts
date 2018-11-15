import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppError} from '../shared/appError';
import * as moment from 'moment';
import {AccountService} from '../account.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-create-investor-account',
  templateUrl: './create-investor-account.component.html',
  styleUrls: ['./create-investor-account.component.scss', '../app.component.scss', '../font-awesome/css/font-awesome.min.css']
})
export class CreateInvestorAccountComponent implements OnInit {
  legalFirstName: any;
  LegalSecondName: any;
  primaryAdd: any;
  dateOfBirth: any;
  SocialSecurityNum: any;
  certifyCheckbox: any;
  agreement = true;
  checkAgree: any;
  firstNameError: any;
  lastNameError: any;
  addressError: any;
  dobError: any;
  ssnError: any;
  restItems: any;
  currentUser: any;



  constructor(private router: Router, private accService: AccountService, private user: UserService ) { }

  ngOnInit() {
    this.agreement = true;
    this.firstNameError = '';
    this.lastNameError = '';
    this.addressError = '';
    this.dobError = '';
    this.ssnError = '';
    this.currentUser = this.user.getCurrentUser();
  }

  createIndAcc(e) {
    // onSubmit validations start
    this.legalFirstName = e.target.elements[0].value.toLowerCase();
    if (this.legalFirstName === '') {
      this.firstNameError = AppError.error_0001;
    } else {
      this.firstNameError = '';
    }
    this.LegalSecondName = e.target.elements[1].value.toLowerCase();
    if (this.LegalSecondName === '') {
      this.lastNameError = AppError.error_0001;
    } else {
      this.lastNameError = '';
    }
    this.primaryAdd = e.target.elements[2].value.toLowerCase();
    if (this.primaryAdd === '') {
      this.addressError = AppError.error_0001;
    } else {
      this.addressError = '';
    }
    this.dateOfBirth = e.target.elements[3].value;
    if (this.dateOfBirth === '') {
      this.dobError = AppError.error_0001;
    } else {
      const startDate = moment(this.dateOfBirth);
      const today = moment(new Date()).utc();
      const duration = moment.duration(today.diff(startDate)).asYears();
      if (duration < 18) {
        this.dobError = AppError.error_0003;
      } else  if ( duration >= 100) {
        this.dobError = AppError.error_0004;
      } else {
        this.dobError = '';
      }
    }
    this.SocialSecurityNum = e.target.elements[4].value;
    if (this.SocialSecurityNum === '') {
      this.ssnError = AppError.error_0001;
    } else {
      this.ssnError = '';
    }
    // onSubmit validations ends
    // sending data for api call start
    if (this.ssnError === '' && this.dobError === '' && this.addressError === '' && this.lastNameError === ''
        && this.firstNameError === '') {
          this.getRestItems(this.legalFirstName, this.LegalSecondName,
            this.primaryAdd, this.dateOfBirth, this.SocialSecurityNum);
    }
    // sending data for api call ends

  }
  // enabling submit button
  enableCreateAcc(e) {
    this.checkAgree = e.target.checked;
    if (this.checkAgree) {
      this.agreement = false;
    } else {
      this.agreement = true;
    }

  }
  // Reseting  first name error
  validateFName (e) {
    this.legalFirstName = e;
    if ( this.legalFirstName !== '') {
      this.firstNameError = '';
    }
  }
  // Reseting  last name error
  validateLName (e) {
    this.LegalSecondName = e;
    if ( this.LegalSecondName !== '') {
      this.lastNameError = '';
    }
  }
  // Reseting address error
  validateAddr (e) {
    this.primaryAdd = e;
    if ( this.primaryAdd !== '') {
      this.addressError = '';
    }
  }
  // Reseting dob error
  validateDob (e) {
    this.dateOfBirth = e;
    if ( this.dateOfBirth !== '') {
      this.dobError = '';
    }
  }
  // Reseting ssn error
  validateSsn (e) {
    this.SocialSecurityNum = e;
    if ( this.SocialSecurityNum !== '') {
      this.ssnError = '';
    }
  }
  getRestItems(legalFirstName, LegalSecondName, primaryAdd, dateOfBirth, SocialSecurityNum): void {
    this.accService.createAcc(legalFirstName, LegalSecondName, primaryAdd, dateOfBirth, SocialSecurityNum)
      .then(
        resp => {
          this.restItems = resp;
          if (this.restItems.success === true) {
            alert ('Account sucessfully added');
            this.router.navigate(['offerings']);
          } else if (this.restItems.success === false) {
            alert ('Something went wrong, Account not Created');
          }
        }
      );
}
}
