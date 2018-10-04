import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferingDetailsService {

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) {
  }

  getOfferingData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'responseType': 'text'
      })
    };

    const serviceUrl = environment.baseUrl + 'services/1';
    return this.http.get(serviceUrl, httpOptions)
      .pipe(catchError(this.handleError('getAllData')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
