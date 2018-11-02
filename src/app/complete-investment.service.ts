import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { HttpClient} from '@angular/common/http';

const API_URL = environment.yieldUrl;

@Injectable({
  providedIn: 'root'
})
export class CompleteInvestmentService {
  OfferSubs: any;

  constructor(private http: HttpClient) { }
  async subscribeOffer(uId,investedAmt){
    let subcriptionInfo = { uid: uId,investment_amount:investedAmt};
    let subcriptionUrl : string = API_URL+'/subscribe-service-user';
    this.OfferSubs = await this.http.post(subcriptionUrl,subcriptionInfo).toPromise();
    return this.OfferSubs;
  }
}
