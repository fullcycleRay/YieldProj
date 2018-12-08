import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  async getInvestdetails(uid) {
    const serviceUrl: string = API_URL + '/user/investment-detail/' + uid;
    this.investments = await this.http.get(serviceUrl).toPromise();
    return this.investments;
  }
}
