import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import{Observable, of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }   
    getAllData(uId,passWord){
      let httpOptions = {headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'responseType': 'text' 
      })};
  
      let loginInfo = { email: uId,password:passWord};
      let loginUrl : string = 'http://localhost:3000/auth/login';
      return this.http.post(loginUrl,JSON.stringify(loginInfo),httpOptions)
      .pipe(catchError(this.handleError('getAllData')))
    }
    private handleError<T>(operation ='operation', result?: T){
      return (error: any): Observable<T> => {
        console.error(error);
        return of( result as T);
      }
    }
}


