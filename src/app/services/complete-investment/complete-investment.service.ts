import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

const API_URL = environment.yieldUrl;

@Injectable({
  providedIn: 'root'
})
export class CompleteInvestmentService {
  OfferSubs: any;
  offeringObs = new BehaviorSubject<any>('');


  constructor(private http: HttpClient) { }
  async subscribeOffer(uId, investedAmt, account_id) {

    const subcriptionInfo = {
      'subscription':
      {
        uid: uId,
        // tslint:disable-next-line:radix
        investment_amount: parseInt(investedAmt),
        'coupon_code': 'coupon_code',
        'misc': 'Test',
        'items': {}
      },
      'account_uid': account_id
    };
    const subcriptionUrl: string = API_URL + '/order/user-subscription';
    this.OfferSubs = await this.http.post(subcriptionUrl, subcriptionInfo).toPromise();
    return this.OfferSubs;
  }
  setInvestmentAmt(offeringArr) {
    localStorage.setItem('offering', JSON.stringify(offeringArr));
  }
  getInvestmentAmt() {
    if (localStorage.getItem('offering')) {
      this.offeringObs.next(JSON.parse(localStorage.getItem('offering')));
    }
    return this.offeringObs;
  }
}
