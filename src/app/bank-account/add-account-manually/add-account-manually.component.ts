import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {BankAccountService} from '../../services/bank-account/bank-account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-account-manually',
  templateUrl: './add-account-manually.component.html',
  styleUrls: ['./add-account-manually.component.scss', '../../viewportfolio/viewportfolio.component.scss',
              '../../app.component.scss']
})
export class AddAccountManuallyComponent implements OnInit {
  currentUser: any;
  allAccData: any;
  restItems: any;
  constructor( private user: UserService, private bankService: BankAccountService, private router: Router) { }

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
          this.router.navigate(['/funds']);
        } else if (this.restItems.success === false) {
          alert ('Something went wrong, Unable to create bank accounts');
        }
      }
    );

  }

}
