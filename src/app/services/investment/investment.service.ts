import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

const API_URL = environment.yieldUrl;

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  investments: any;

  constructor(private http: HttpClient) { }
  async getInvestments() {
    const serviceUrl: string = API_URL + '/user/investments';
    this.investments = await this.http.get(serviceUrl).toPromise();
    return this.investments;
  }
  async getInvestdetails(account_uid , service_uid) {

    const params = new HttpParams()
      .set('service_uid', service_uid)
      .set('account_uid', account_uid);
    const serviceUrl: string = API_URL + '/user/investment-detail/';
    this.investments = await this.http.get(serviceUrl, {params}).toPromise();
    return this.investments;
  }
}
