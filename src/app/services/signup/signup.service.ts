import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import {environment} from '../../../environments/environment';

const API_URL = environment.yieldUrl;

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }
  async signupUser(fName, uId, passWord) {
    const signUpInfo = { name: fName, email: uId, password: passWord};
    const signUpUrl: string = API_URL + '/auth/signup';
    const signupToken = await this.http.post(signUpUrl, signUpInfo).toPromise();
    return signupToken;
  }
  async originatorSignup(origDetails) {
    const origSignUpUrl: string = API_URL + '/originator/new-application';
    const signupToken = await this.http.post(origSignUpUrl, origDetails).toPromise();
    return signupToken;
  }
  async forgetPassword(email) {
    const forgetPassUrl: string = API_URL + '/auth/forgot-password';
    const forgetToken = await this.http.post(forgetPassUrl, email).toPromise();
    return forgetToken;
  }
  async resetPassword(token) {
    const ResetPassUrl: string = API_URL + '/auth/reset-password';
    const resetToken = await this.http.post(ResetPassUrl, token).toPromise();
    return resetToken;
  }
}
