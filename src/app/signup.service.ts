import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) {
  }

  getAllData(fName, uId, passWord) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'responseType': 'text'
      })
    };

    const signUpInfo = {name: fName, email: uId, password: passWord};
    const signUpUrl = environment.baseUrl + 'auth/signup';
    return this.http.post(signUpUrl, JSON.stringify(signUpInfo), httpOptions)
      .pipe(catchError(this.handleError('getAllData')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
