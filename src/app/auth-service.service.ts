import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {catchError } from 'rxjs/operators'
import{Observable, of } from 'rxjs';
import { UserService } from './user.service';
import {environment} from '../environments/environment';

const API_URL = environment.yieldUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  constructor(private http: HttpClient, private user:UserService) { }   
    login(uId,passWord){  
      let loginInfo = { email: uId,password:passWord};      
      let loginUrl : string = API_URL+'/auth/login';
      return this.http.post<any>(loginUrl,loginInfo)
      .pipe(catchError(this.handleError('login')))
    }
    private handleError<T>(operation ='operation', result?: T){
      return (error: any): Observable<T> => {
        console.error(error);
        return of( result as T);
      }
    }

    logout()
    {
      this.user.isUserLoggedIn.next(false);
      localStorage.removeItem('User');
    }
}


