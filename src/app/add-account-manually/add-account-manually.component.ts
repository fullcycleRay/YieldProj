import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {BankAccountService} from '../bank-account.service';

@Component({
  selector: 'app-add-account-manually',
  templateUrl: './add-account-manually.component.html',
  styleUrls: ['./add-account-manually.component.scss', '../viewportfolio/viewportfolio.component.scss',
              '../app.component.scss', '../font-awesome/css/font-awesome.min.css']
})
export class AddAccountManuallyComponent implements OnInit {
  currentUser: any;
  allAccData: any;
  restItems: any;
  constructor( private user: UserService, private bankService: BankAccountService) { }

  ngOnInit() {
    this.currentUser = this.user.getCurrentUser();
  }
  addBankAccount(e) {
    this.allAccData = e;
    this.bankService.createBankAcc(this.allAccData)
    .then(
      resp => {
        this.restItems = resp;
        if (this.restItems.success === true) {
          alert('Bank Account added');
        } else if (this.restItems.success === false) {
          alert ('Something went wrong, Unable to fetch accounts');
        }
      }
    );

  }

}
