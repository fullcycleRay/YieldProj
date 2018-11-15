import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AccountService} from '../account.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-select-investor-account',
  templateUrl: './select-investor-account.component.html',
  styleUrls: ['./select-investor-account.component.scss', '../app.component.scss', '../font-awesome/css/font-awesome.min.css']
})
export class SelectInvestorAccountComponent implements OnInit {
  testvalue = true;
  investorType: any;
  radioButton: any;
  currentUser: any;

  constructor(private router: Router, private accService: AccountService, private user: UserService) { }

  ngOnInit() {
    this.testvalue = true;
    this.currentUser = this.user.getCurrentUser();
  }

  checkIfChecKed(e) {
    if (e === 'on') {
      this.testvalue = false;
    } else {
      this.testvalue = true;
    }
  }
  selectedInvestor(e) {
    this.radioButton = e;
    for (let i = 0; i < 5; i++) {
      if ( this.radioButton.target.elements[i].checked ) {
        this.accService.accountType = i;
        break;
      }
    }

    this.router.navigate(['/create-investor-account']);
  }
}
