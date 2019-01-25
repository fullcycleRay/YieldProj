import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {BankAccountService} from '../../services/bank-account/bank-account.service';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-account-manually',
  templateUrl: './add-account-manually.component.html',
  styleUrls: ['./add-account-manually.component.scss', '../../viewportfolio/viewportfolio.component.scss',
              '../../app.component.scss']
})
export class AddAccountManuallyComponent implements OnInit {
  currentUser: any;
  accData: any;
  restItems: any;
  accNickname: any;
  accName: any;
  selectedAccType: any;
  routingNum: any;
  accNumber: any;
  specialInstruction: any;
  errorFlag: any;
  errorMessage: any;
  @ViewChild('accountType') keywordsInput: ElementRef;
  constructor( private user: UserService, private bankService: BankAccountService, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.user.getCurrentUser();
    this.errorFlag = false;
  }
  addBankAccount(e) {
    this.errorFlag = false;
    this.accData = e;
    this.accNickname = this.accData[0].value;
    this.accName = this.accData[1].value;
    this.routingNum = this.accData[3].value;
    this.accNumber = this.accData[4].value;
    this.specialInstruction = this.accData[5].value;
    // validations
    if ("" === this.accNickname) {
      this.errorFlag = true;
      this.errorMessage = 'Please Enter Account nick name';

    } else if ("" === this.accName) {
      this.errorFlag = true;
      this.errorMessage = 'Please Enter Account Name';

    } else if ("" === this.routingNum || this.routingNum.length !== 9) {
      this.errorFlag = true;
      this.errorMessage = 'Please Enter a  valid Routing Number';

    } else if ("" === this.accNumber) {
      this.errorFlag = true;
      this.errorMessage = 'Please Enter a valid Account Number'

    }
    if ( this.errorFlag === false ) {
      const bankDetail = {
        'account_nick_name': this.accNickname,
        'account_holder_name': this.accName,
        'routing_number': this.routingNum,
        'account_number': this.accNumber,
        'account_type': 0,
        'bank_name': 'Bank of America',
        'special_instuction': this.specialInstruction,
      };
      this.bankService.createBankAcc(bankDetail)
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
  onRowClick() {
    this.selectedAccType = this.keywordsInput.nativeElement.value;
  }
}
