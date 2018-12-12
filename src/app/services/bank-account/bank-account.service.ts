import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient} from '@angular/common/http';
const API_URL = environment.yieldUrl;

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
bankAccToken: any;
accountId: any;

  constructor( private http: HttpClient) { }
  async createBankAcc(accData) {
    const accUrl: string = API_URL + '/account/bank-detail';
    this.bankAccToken = await this.http.post(accUrl, {'bank_detail': accData, 'account_uid': this.accountId }).toPromise();
    return this.bankAccToken;
  }

  async getBankAccList() {
    // will send account id to fetch bank accounts mapping to account.
    const accountId = 0;
    const accUrl: string = API_URL + '/user/bank-accounts';
    this.bankAccToken = await this.http.get(accUrl, {}).toPromise();
    return this.bankAccToken;
  }

  getAccountId() {
    return this.accountId;
  }
  setAccountId(accntId) {
    this.accountId = accntId;

  }
}
