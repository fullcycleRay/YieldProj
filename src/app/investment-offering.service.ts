import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {Observable, of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import {environment} from '../environments/environment';

const API_URL = environment.yieldUrl;
@Injectable({
  providedIn: 'root'
})
export class InvestmentOfferingService {
  offerings: any;

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }

  async getOffering(uid) {
    const serviceUrl: string = API_URL + '/services/' + uid;
    this.offerings = await this.http.get(serviceUrl).toPromise();
    return this.offerings;
  }
}
