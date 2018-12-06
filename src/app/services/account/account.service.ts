import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient} from '@angular/common/http';

const API_URL = environment.yieldUrl;

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accountType: any;
  accToken: any;
  accList: any;
  accountId = [];

  constructor( private http: HttpClient, ) { }
  // Will send account data and create new account
  async createAcc(legalFirstName, LegalSecondName, primaryAdd, dateOfBirth, SocialSecurityNum) {
    const accUrl: string = API_URL + '/account/create-account';
    const account: object = {};
    const account_obj: object = {};
    const address: object = {
    'street1': 'test',
    'street2' : 'test',
    'city' : 'New York',
    'state': 'NY',
    'country': 'USA',
    'zip': '110001'
    };

    account['address'] = address;
    account[ 'first_name' ] = legalFirstName;
    account[ 'title' ] = LegalSecondName;
    // account[ 'account_type' ] = this.accountType;
    account[ 'account_type' ] = 1;
    account [ 'dob' ] = dateOfBirth;
    account [ 'identity_number' ] = SocialSecurityNum;
    account [ 'identity_type' ] = 0;
    account_obj['account'] = account;
    this.accToken = await this.http.post(accUrl, account_obj).toPromise();
    return this.accToken;

  }
  // Will get all account associated with the user
  async getAccList() {
    const accUrl: string = API_URL + '/user/accounts';
    this.accList = await this.http.get(accUrl).toPromise();
    return this.accList;
  }
  setSelectAccId (selectedAccId) {
    localStorage.setItem('selectedAccID', selectedAccId);
  }
  getSelectAccId () {
    return localStorage.getItem('selectedAccID');
  }
}
