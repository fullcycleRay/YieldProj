import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.yieldUrl;

@Injectable({
  providedIn: 'root'
})
export class OriginatorService {
  originator: any;

  constructor(private http: HttpClient) { }
  async getOriginatorData(oid) {
    const serviceUrl: string = API_URL + '/originator/' + oid;
    this.originator = await this.http.get(serviceUrl).toPromise();
    return this.originator;
    }
}
