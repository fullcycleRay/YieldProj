import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import{Observable, of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import {environment} from '../environments/environment';

const API_URL = environment.yieldUrl;
@Injectable({
  providedIn: 'root'
})
export class OfferingDetailsService {

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }
  getOfferingData(){
    let serviceUrl : string = API_URL+'/services';
    return this.http.get(serviceUrl)
    .pipe(catchError(this.handleError('getAllData')))
  }
  private handleError<T>(operation ='operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of( result as T);
    }
  }
}
