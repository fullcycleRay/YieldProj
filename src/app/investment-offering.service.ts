import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import{Observable, of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class InvestmentOfferingService {

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }
}
