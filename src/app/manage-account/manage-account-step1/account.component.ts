import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AccountService} from '../../services/account/account.service';
import {UserService} from '../../services/user/user.service';
import { Router } from '@angular/router';
import {AppConfig} from '../../../environments/config';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss', '../../app.component.scss',
                '../../viewportfolio/viewportfolio.component.scss']
})
export class AccountComponent implements OnInit {
  modalBack = false;
  restItems: any;
  accountData: any;
  currentUser: any;
  selectedAccId: any;
  showUploadStatus: any;
  constructor(private accService: AccountService, private user: UserService,
    private route: Router, public appConfig: AppConfig ) { }

  ngOnInit() {
    this.showUploadStatus = false;
    this.showUploadStatus = this.accService.getAccountIndc();
    this.modalBack = false;
    this.currentUser = this.user.getCurrentUser();
    this.appConfig.setLoader(true);
    this.getRestItems();
  }
  showModal() {
    this.modalBack = !(this.modalBack);
  }
  getRestItems(): void {
    this.accService.getAccList()
      .then(
        resp => {
          this.restItems = resp;
          if (this.restItems.success === true) {
            this.extractData(this.restItems);
          } else if (this.restItems.success === false) {
            alert ('Something went wrong, Unable to fetch accounts');
          }
          this.appConfig.setLoader(false);
        }

      );
  }
  extractData(resp): void {
    this.accountData = resp.data.users_accounts;
  }
  uploadDocument(e): void {
    this.selectedAccId = e.path[2].childNodes[0].childNodes[0].value;
    this.accService.setSelectAccId(this.selectedAccId);
     this.route.navigate(['/upload-investor-document']);

  }
  closeUploadAlert() {
    this.accService.setAccountIndc(false);
    this.showUploadStatus = this.accService.getAccountIndc();
  }
}
