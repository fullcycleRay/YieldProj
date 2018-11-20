import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {catchError } from 'rxjs/operators';
import {Observable, of } from 'rxjs';
import { UserService } from '../../services/user/user.service';
import {environment} from '../../../environments/environment';

const API_URL = environment.yieldUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  loginToken: any;

  constructor(private http: HttpClient, private user: UserService) { }
   async login(uId, passWord) {
      const loginInfo = { email: uId, password: passWord};
      const loginUrl: string = API_URL + '/auth/login';
      this.loginToken = await this.http.post(loginUrl, loginInfo).toPromise();
      return this.loginToken;
    }

}


