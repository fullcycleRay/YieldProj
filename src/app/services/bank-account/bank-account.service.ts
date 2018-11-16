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
    const bankDetail = {
      'account_nick_name': accData[0].value,
      'account_holder_name': accData[1].value,
      'routing_number': accData[3].value,
      'account_number': accData[4].value,
      'account_type': 0,
      'bank_name': 'Bank of America',
      'special_instuction': accData[5].value,
    };
    const accUrl: string = API_URL + '/account/bank-detail';
    this.bankAccToken = await this.http.post(accUrl, {'bank_detail': bankDetail, 'account_id': this.accountId }).toPromise();
    return this.bankAccToken;

  }
  getAccountId() {
    return this.accountId;
  }
  setAccountId(accntId) {
    this.accountId = accntId;

  }
}
