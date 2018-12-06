import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';

const API_URL = environment.yieldUrl;

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  transactions: any;

  constructor(private http: HttpClient) { }
  async getTransactions() {
    const serviceUrl: string = API_URL + '/user/sales-orders';
    this.transactions = await this.http.get(serviceUrl).toPromise();
    return this.transactions;
  }

}
