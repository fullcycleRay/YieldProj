import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CompleteInvestmentService} from '../../services/complete-investment/complete-investment.service';
import {AccountService} from '../../services/account/account.service';
import {AppConfig} from '../../../environments/config';
import {BankAccountService} from '../../services/bank-account/bank-account.service';

@Component({
  selector: 'app-complete-investment',
  templateUrl: './complete-investment.component.html',
  styleUrls: ['./complete-investment.component.scss', '../../app.component.scss']
})
export class CompleteInvestmentComponent implements OnInit {
  uid: any;
  currentOffering = {};
  subscptionData: any;
  loggedInUser: any;
  paramDel = [];
  accListResp: any;
  accountData: any;
  selectedAccValue: any;
  bankListResp: any;
  bankAccountData: any;
  @ViewChild('AcckeywordsInput') AccDropDownList: ElementRef;
  @ViewChild('bankAccDropDownList') BankAccDropDownList: ElementRef;
  httpErrorResp: any;

  constructor(private route: ActivatedRoute, private subscriptionOffer: CompleteInvestmentService,
     private router: Router, private accService: AccountService, private bankAccList: BankAccountService,
     public appConfig: AppConfig) {
    this.route.params
    .subscribe(
      params => {
        this.uid = params.id;
      });
  }

  ngOnInit() {
    this.loggedInUser = localStorage.getItem('name');
    this.subscriptionOffer.getInvestmentAmt()
    .subscribe(
      resp => {
        this.currentOffering = resp;
        }
      );
      this.getAccList();
      this.getBankAccList();
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentChecked() {
    this.subscriptionOffer.getInvestmentAmt()
    .subscribe(
      resp => {
        this.currentOffering = resp;
        }
      );
  }

  subscribeOffering(e) {
    const investorform = e.target.form;
    const accreditInvestor = investorform[0].checked;
    const subscriptionAgreement = investorform[1].checked;
    const privatePlacementMemorandum = investorform[2].checked;
    const investorInitials = investorform[3].value;
    if (investorform && accreditInvestor && subscriptionAgreement && privatePlacementMemorandum && undefined !== investorInitials) {
      this.appConfig.setLoader(true);
      this.subscriptionOffer.subscribeOffer(this.uid, this.currentOffering['investmentAmt'],
       this.selectedAccValue)
      .then(
        resp => {
          this.subscptionData = resp;
          if (this.subscptionData.success === true) {
            // this.router.navigate(['offering-details/' + this.uid + '/' +"subscribed"] );
            this.appConfig.setLoader(false);
            this.router.navigate(['/confirm-investment']);
          }
        },
        error => {
          this.httpErrorResp = error;
          if (this.httpErrorResp.status !== 200) {
            if (this.httpErrorResp.error.message === 'Investment limit exhausted') {
              alert(this.httpErrorResp.error.message);
            } else {
              alert('Error while investing please contact Fullcycle Tech Team');
            }
            this.appConfig.setLoader(false);
          }
        }
      );
    } else {
      alert('Please check All agreements and Enter Your intials before proceeding');
    }
  }
  getAccList(): void {
    this.accService.getAccList()
      .then(
        resp => {
          this.accListResp = resp;
          if (this.accListResp.success === true) {
            this.accountData = this.accListResp.data.users_accounts;
            this.selectedAccValue = this.accountData[0].uid;
          } else if (this.accListResp.success === false) {
            alert ('Something went wrong, Unable to fetch accounts');
          }
        }
      );
  }
  getBankAccList(): void {
    this.bankAccList.getBankAccList()
      .then(
        resp => {
          this.bankListResp = resp;
          if (this.bankListResp.success === true) {
            this.bankAccountData = this.bankListResp.data.users_bank_accounts;
          } else if (this.bankListResp.success === false) {
            alert ('Something went wrong, Unable to fetch bank accounts');
          }
        }
      );
  }
  onRowClick() {
    this.selectedAccValue = this.AccDropDownList.nativeElement.value;
  }

}
