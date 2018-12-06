import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AccountService} from '../../services/account/account.service';
import {UserService} from '../../services/user/user.service';
import { Router } from '@angular/router';
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

  constructor(private accService: AccountService, private user: UserService, private route: Router ) { }

  ngOnInit() {
    this.modalBack = false;
    this.getRestItems();
    this.currentUser = this.user.getCurrentUser();
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

}
