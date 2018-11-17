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
  async subscribeOffer(uId, investedAmt) {
    // tslint:disable-next-line:radix
    const subcriptionInfo = { uid: uId, investment_amount: parseInt(investedAmt)};
    const subcriptionUrl: string = API_URL + '/subscribe-service-user';
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
