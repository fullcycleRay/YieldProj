import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient} from '@angular/common/http';

const API_URL = environment.yieldUrl;

@Injectable({
  providedIn: 'root'
})
export class CompleteInvestmentService {
  OfferSubs: any;
  investedAmt: any;

  constructor(private http: HttpClient) { }
  async subscribeOffer(uId, investedAmt) {
    // tslint:disable-next-line:radix
    const subcriptionInfo = { uid: uId, investment_amount: parseInt(investedAmt)};
    const subcriptionUrl: string = API_URL + '/subscribe-service-user';
    this.OfferSubs = await this.http.post(subcriptionUrl, subcriptionInfo).toPromise();
    return this.OfferSubs;
  }
  setInvestmentAmt(invesmentAmt) {
    this.investedAmt = invesmentAmt;
  }
  getInvestmentAmt() {
    return this.investedAmt;
  }
}
