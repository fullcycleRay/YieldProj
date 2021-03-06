import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

const API_URL = environment.yieldUrl;
@Injectable({
  providedIn: 'root'
})
export class OfferingDetailsService {
  dateNow: Date = new Date();
  resp: any;
  res: any;
  offeringCat: any;
  subscribed: any;
  upcomingOrPast: any;

  constructor(private http: HttpClient, public sanitizer: DomSanitizer, private route: ActivatedRoute) {
    this.route.params
    .subscribe(
      params => {
        this.subscribed = params.success;
        localStorage.setItem('Subcribed', this.subscribed);
      });
  }
  async getOfferingData() {
    const serviceUrl: string = API_URL + '/services';
    this.offeringCat = await this.http.get(serviceUrl).toPromise();
    return this.offeringCat;
    }
    setNonActiveFlag(upcomingOrPast) {
      localStorage.setItem('nonActive', JSON.stringify(upcomingOrPast));
    }
    getNonActiveFlag() {
      return JSON.parse(localStorage.getItem('nonActive'));
    }
}
