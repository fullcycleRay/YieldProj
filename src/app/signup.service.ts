import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import{Observable, of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import {environment} from  '../environments/environment';

const API_URL = environment.yieldUrl;

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  signupToken: any;

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }
  async signupUser(fName,uId,passWord){
    let signUpInfo = { name:fName ,email: uId,password:passWord};
    let signUpUrl : string = API_URL+'/auth/signup';
    this.signupToken = await this.http.post(signUpUrl,signUpInfo).toPromise();
    return this.signupToken;
  }
}
