import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) {
  }

  getAllData(uId, passWord) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'responseType': 'text'
      })
    };

    const loginInfo = {email: uId, password: passWord};
    const loginUrl = environment.baseUrl + 'auth/login';
    return this.http.post(loginUrl, JSON.stringify(loginInfo), httpOptions)
      .pipe(catchError(this.handleError('getAllData')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}


